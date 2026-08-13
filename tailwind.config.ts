import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#131313",
        muted: "#7B7B7B",
        surface: "#F2F2F2",
        accent: "#D6FD70",
        "on-accent": "#131313",
        "on-dark": "#FFFFFF",
        "card-border": "rgba(19,19,19,0.06)",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        pill: "48px",
        card: "12px",
        panel: "24px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 3px 6px rgba(0,0,0,0.06)",
        float: "0 20px 40px rgba(0,0,0,0.12)",
      },
      letterSpacing: {
        display: "-0.06em",
        body: "-0.02em",
        eyebrow: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
