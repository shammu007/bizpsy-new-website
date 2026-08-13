"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Plane, Mesh, Program, Texture } from "ogl";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  image: string;
  text?: string;
}

export interface CircularGalleryProps {
  items: GalleryItem[];
  bend?: number;
  borderRadius?: number;
  scrollEase?: number;
  autoSpeed?: number;
  className?: string;
}

export function CircularGallery({
  items,
  bend = 3,
  borderRadius = 0.06,
  scrollEase = 0.05,
  autoSpeed = 0.012,
  className,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !items.length) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Renderer setup with transparent background
    const renderer = new Renderer({
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    container.appendChild(gl.canvas);

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 8.5);

    const scene = new Transform();

    // Shaders for shallow curved plane and rounded corners
    const vertexShader = `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform float uBend;
      varying vec2 vUv;

      void main() {
        vUv = uv;
        vec3 pos = position;
        // Shallow smile curve along Z axis
        pos.z -= pow(abs(pos.x), 1.5) * (uBend * 0.015);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform sampler2D uTexture;
      uniform float uRadius;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(uTexture, vUv);
        // Rounded corner clipping mask
        vec2 d = abs(vUv - 0.5) - vec2(0.5 - uRadius);
        float alpha = 1.0 - smoothstep(0.0, 0.008, length(max(d, 0.0)) - uRadius);
        gl_FragColor = vec4(color.rgb, color.a * alpha);
      }
    `;

    // Large card dimensions (2.85 x 2.0)
    const baseWidth = 2.85;
    const baseHeight = 2.0;
    const planeGeometry = new Plane(gl, {
      width: baseWidth,
      height: baseHeight,
      widthSegments: 20,
      heightSegments: 10,
    });

    // Duplicate items for continuous smooth looping
    const duplicatedItems = [...items, ...items, ...items];
    const totalCount = duplicatedItems.length;

    // Proportional gap spacing (2.95 spacing -> clear visual gaps between larger cards)
    const spacing = 2.95;
    const totalWidth = totalCount * spacing;

    // Load textures & meshes
    const meshes: { mesh: Mesh; program: Program; index: number }[] = [];

    duplicatedItems.forEach((item, index) => {
      const texture = new Texture(gl, { generateMipmaps: true });
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = item.image;
      image.onload = () => {
        texture.image = image;
      };

      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uBend: { value: bend },
          uRadius: { value: borderRadius },
        },
        transparent: true,
        cullFace: false,
      });

      const mesh = new Mesh(gl, { geometry: planeGeometry, program });
      mesh.setParent(scene);
      meshes.push({ mesh, program, index });
    });

    // Scroll state
    let scrollCurrent = 0;
    let scrollTarget = 0;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScroll = 0;

    // Resize handler
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Pointer events on CONTAINER ONLY (No window scroll hijack!)
    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartScroll = scrollTarget;
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      scrollTarget = dragStartScroll - dx * 0.004;
    };

    const onPointerUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    container.style.cursor = "grab";
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    // Animation frame update loop
    let animationFrameId: number;
    const update = () => {
      // Auto-advance if not hovered, not dragged, and reduced motion not active
      if (!isHoveredRef.current && !isDragging && !prefersReducedMotion) {
        scrollTarget += autoSpeed;
      }

      // Smooth scroll lerp
      scrollCurrent += (scrollTarget - scrollCurrent) * scrollEase;

      // Half width boundary for infinite wrap-around
      const halfWidth = totalWidth / 2;

      meshes.forEach(({ mesh, index }) => {
        // Base X position centered
        let x = (index * spacing - scrollCurrent) % totalWidth;
        if (x < -halfWidth) x += totalWidth;
        if (x > halfWidth) x -= totalWidth;

        mesh.position.x = x;

        // Elevate Y position UPWARDS (+0.75) to position top edge of cards right at the top of the canvas
        mesh.position.y = 0.75 - Math.pow(x / 5.5, 2) * 0.25;

        // Gentle outward tilt at edges (~5-8°)
        mesh.rotation.y = (-x / 10) * 0.22;

        // Center-largest depth falloff: center 1.0 -> edges ~0.86
        const dist = Math.min(Math.abs(x) / (halfWidth * 0.5), 1.0);
        const s = 1.0 - dist * 0.14;
        mesh.scale.set(s, s, 1.0);
      });

      renderer.render({ scene, camera });
      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      mediaQuery.removeEventListener("change", handleMotionChange);
      if (gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, [items, bend, borderRadius, scrollEase, autoSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden select-none", className)}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    />
  );
}
