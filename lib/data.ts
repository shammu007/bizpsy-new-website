export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  ratingText: string;
  ratingScore: string;
  ratingStars: number;
  titleLine1: string;
  titleLine2: string;
  subhead: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  uiCards: Array<{
    id: string;
    title: string;
    value: string;
    change: string;
    tag: string;
    accentColor?: string;
  }>;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  featured: boolean;
  features: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  mockupType: "orbit" | "chart" | "transaction" | "growth";
}

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/#hero" },
  { label: "ABOUT US", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "WHY CHOOSE US", href: "/#why-choose-us" },
  { label: "CONTACT US", href: "/contact" },
];

export const HERO_DATA: HeroData = {
  ratingText: "Trusted by 50+ early-stage SaaS founders",
  ratingScore: "4.9/5",
  ratingStars: 5,
  titleLine1: "From “we built it”",
  titleLine2: "to people are buying it.",
  subhead:
    "BizPsy is the GTM Studio that turns unclear positioning and ad-hoc marketing into a predictable customer acquisition system for early-stage B2B SaaS.",
  ctaPrimary: { label: "Get the GTM Audit", href: "#services" },
  ctaSecondary: { label: "See Our Process", href: "#about" },
  uiCards: [
    {
      id: "card-1",
      title: "Decision Matrix Velocity",
      value: "94.8%",
      change: "+12.4%",
      tag: "OPTIMIZED",
      accentColor: "#D6FD70",
    },
    {
      id: "card-2",
      title: "Active AI Agents",
      value: "142 Active",
      change: "Live Telemetry",
      tag: "REAL-TIME",
      accentColor: "#3E9BEA",
    },
    {
      id: "card-3",
      title: "Quarterly Yield Acceleration",
      value: "3.8x ROI",
      change: "+24.2%",
      tag: "VERIFIED",
      accentColor: "#D6FD70",
    },
    {
      id: "card-4",
      title: "Risk Reduction Index",
      value: "-84% Anomaly",
      change: "Stable Vectors",
      tag: "PROTECTED",
      accentColor: "#3FA9F5",
    },
  ],
};

export const LOGO_STRIP: Array<{ name: string; id: string }> = [
  { id: "partner-1", name: "SYNTHETIX AI" },
  { id: "partner-2", name: "APEX CORP" },
  { id: "partner-3", name: "LUMINA LABS" },
  { id: "partner-4", name: "NEXA DYNAMICS" },
  { id: "partner-5", name: "QUANTUM PATH" },
  { id: "partner-6", name: "VORTEX VENTURES" },
];

export const ABOUT_DATA = {
  eyebrow: "About Us",
  titleLine1: "Great products fail not because",
  titleLine2: "they’re poorly built, but because the",
  titleLine3: "market doesn’t understand them.",
  titleLine4: "We fix the understanding.",
  card1: {
    logo: "GTM AUDIT",
    stat: "50+",
    description: "Early-stage founders taken through the GTM Growth Audit",
    image: "/images/about-portrait.jpg",
  },
  card2: {
    label: "Commitment to diagnosis",
    stat: "100%",
    quote:
      '"BizPsy\'s audit told us exactly why our launch flopped — and what to fix first."',
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    ],
  },
  card3: {
    label: "Buyer & ICP Data",
    stat: "90+",
    subtext: "Buyer and ICP data points mapped per audit.",
  },
  card4: {
    label: "Markets Served",
    stat: "5",
  },
};

export const HIGHLIGHT_BANNER_DATA = {
  trustedText: "Trusted by 50+ founders",
  heading: "We combine customer psychology with a repeatable GTM system",
  subhead:
    "Our team bridges business psychology and AI-powered growth automation to help B2B SaaS founders go from an unclear market to a predictable acquisition system.",
  ctaLabel: "Get Started",
  ctaHref: "#services",
  backgroundImage: "/images/banner-landscape.jpg",
  avatars: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  ],
};

export interface ServiceItem {
  id: string;
  layer?: string;
  title: string;
  description: string;
  iconName?: string;
  tags?: string[];
  image?: string;
}

export interface ServicesData {
  eyebrow: string;
  heading: string;
  subhead: string;
  ctaLabel: string;
  items: ServiceItem[];
}

export const SERVICES_DATA: ServicesData = {
  eyebrow: "Services",
  heading: "GTM strategy and growth systems, not just deliverables",
  subhead:
    "Whether you're diagnosing why growth stalled or building the system to scale it, we start from customer psychology — not channel volume.",
  ctaLabel: "Get Started",
  items: [
    {
      id: "service-1",
      layer: "STAGE 1 — THE CORE",
      title: "GTM audit",
      description: "Paid entry point — delivers the GTM strategy and buyer research.",
      tags: ["ICP", "POSITIONING", "PERSONAS", "PRICING", "BUYER RESEARCH"],
    },
    {
      id: "service-2",
      layer: "STAGE 2 — THE AMPLIFIER",
      title: "Execution",
      description: "Puts the strategy into motion across multi-channel campaigns.",
      tags: ["LEAD GENERATION", "SOCIAL MEDIA", "SEO/AEO", "GTM CALENDAR"],
    },
    {
      id: "service-3",
      layer: "STAGE 3 — THE ACTIVATOR",
      title: "GTM automation",
      description: "Systemizes and scales what works with automated pipelines.",
      tags: ["WORKFLOW AUTOMATION", "LEAD-GEN TOOLING", "PIPELINE ACCELERATION"],
    },
  ],
};

export const EXPERTISE_DATA = {
  eyebrow: "CORE EXPERTISE",
  heading: "Deep domain execution across every tier of business maturity",
  subhead:
    "Modular intelligence systems engineered for immediate ROI and seamless legacy stack integration.",
  items: [
    {
      id: "exp-1",
      title: "Automation & Optimization",
      description:
        "Streamline high-value operational workflows with self-healing AI agents and automated validation loops.",
      tag: "AUTOMATION",
      mockupType: "orbit" as const,
    },
    {
      id: "exp-2",
      title: "Data Analytics & Insights",
      description:
        "Turn multi-source telemetry into real-time decision matrices with sub-second latency.",
      tag: "ANALYTICS",
      mockupType: "chart" as const,
    },
    {
      id: "exp-3",
      title: "Digital Transformation",
      description:
        "Modernize core stack architecture with zero operational downtime and military-grade encryption.",
      tag: "TRANSFORMATION",
      mockupType: "transaction" as const,
    },
    {
      id: "exp-4",
      title: "Experience Intelligence",
      description:
        "Personalize client touchpoints with dynamic behavioral vectors and predictive retention engines.",
      tag: "INTELLIGENCE",
      mockupType: "growth" as const,
    },
  ],
};

export const PRICING_DATA = {
  eyebrow: "PRICING PLANS",
  heading: "Transparent investment tiers for enterprise growth",
  subhead:
    "Predictable monthly plans with dedicated AI strategists, custom model fine-tuning, and priority advisory.",
  ctaGlobal: "GET STARTED",
  plans: [
    {
      id: "plan-starter",
      name: "STARTER",
      description: "Ideal for growth-stage teams deploying their first AI pipeline.",
      price: "$2,400",
      period: "/month",
      featured: false,
      ctaLabel: "GET STARTED",
      features: [
        "Core AI decision matrix",
        "5 concurrent agent seats",
        "Weekly performance reports",
        "Standard SLA support (24h)",
        "Data pipeline integration",
      ],
    },
    {
      id: "plan-growth",
      name: "GROWTH",
      description: "Our recommended tier for scaling enterprises requiring full integration.",
      price: "$4,800",
      period: "/month",
      featured: true,
      ctaLabel: "GET STARTED",
      features: [
        "Everything in Starter",
        "Custom LLM & agent fine-tuning",
        "Unlimited user seats",
        "Dedicated senior AI strategist",
        "Real-time telemetry alerts",
        "Priority 1h SLA support",
      ],
    },
    {
      id: "plan-enterprise",
      name: "ENTERPRISE",
      description: "Bespoke intelligence architecture for global corporate operations.",
      price: "CUSTOM",
      period: "",
      featured: false,
      ctaLabel: "CONTACT SALES",
      features: [
        "Bespoke multi-agent cluster",
        "Dedicated cloud infrastructure",
        "Custom SOC2 compliance",
        "On-premise deployment option",
        "24/7 executive hotline",
        "Unlimited custom connectors",
      ],
    },
  ] as PricingPlan[],
};

export const TESTIMONIALS_DATA = {
  eyebrow: "CLIENT STORIES",
  heading: "Trusted by founders and C-suite leaders worldwide",
  subhead:
    "Hear how our AI advisory propelled growth metrics and streamlined complex enterprise operations.",
  items: [
    {
      id: "test-1",
      quote:
        "BizPsy transformed our raw operational data into actionable daily strategic plays. Our quarterly efficiency jumped 34% within the first 60 days.",
      author: "Sarah Chen",
      role: "Chief Executive Officer",
      company: "Apex Dynamics",
      avatarUrl: "/images/avatar-1.jpg",
    },
    {
      id: "test-2",
      quote:
        "The word-level clarity of their decision matrices gave our board absolute confidence during our Series B expansion. Extraordinary advisory team.",
      author: "Marcus Vance",
      role: "VP of Strategic Growth",
      company: "Synthetix AI",
      avatarUrl: "/images/avatar-2.jpg",
    },
    {
      id: "test-3",
      quote:
        "Implementation took weeks instead of quarters. Easily the highest ROI consulting partnership in our company's history.",
      author: "Elena Rostova",
      role: "Chief Operating Officer",
      company: "Lumina Health",
      avatarUrl: "/images/avatar-3.jpg",
    },
    {
      id: "test-4",
      quote:
        "Their AI strategy roadmap eliminated months of trial-and-error. Essential partner for any enterprise scaling in the modern era.",
      author: "David Miller",
      role: "Founder & Chairman",
      company: "Nexa Systems",
      avatarUrl: "/images/avatar-4.jpg",
    },
  ] as TestimonialItem[],
};

export const BLOG_DATA = {
  eyebrow: "LATEST INSIGHTS",
  heading: "Perspectives on artificial intelligence and business strategy",
  subhead:
    "In-depth tactical breakdowns from our senior AI strategists and quantitative analysts.",
  ctaAll: "VIEW ALL ARTICLES",
  items: [
    {
      id: "blog-1",
      title: "Navigating LLM Governance in Enterprise Workflows",
      category: "AI STRATEGY",
      date: "AUG 12, 2026",
      readTime: "5 MIN READ",
      imageUrl: "/images/blog-1.jpg",
    },
    {
      id: "blog-2",
      title: "Predictive Decision Matrices: Beyond Traditional BI",
      category: "ANALYTICS",
      date: "AUG 08, 2026",
      readTime: "7 MIN READ",
      imageUrl: "/images/blog-2.jpg",
    },
    {
      id: "blog-3",
      title: "The ROI of Autonomous Agentic Teams in Consulting",
      category: "AUTOMATION",
      date: "JUL 29, 2026",
      readTime: "4 MIN READ",
      imageUrl: "/images/blog-3.jpg",
    },
    {
      id: "blog-4",
      title: "Scaling Enterprise Data Infrastructure Without Friction",
      category: "ENGINEERING",
      date: "JUL 15, 2026",
      readTime: "6 MIN READ",
      imageUrl: "/images/blog-4.jpg",
    },
  ] as BlogItem[],
};

export const CTA_BANNER_DATA = {
  eyebrow: "ACCELERATE GROWTH",
  heading: "Ready to accelerate your company's intelligence velocity?",
  subhead:
    "Book a 30-minute strategic consultation with our principal AI architects and receive a custom matrix evaluation.",
  ctaLabel: "SCHEDULE CALL",
  trustedText: "Trusted by over 5,000+ executives globally",
  avatars: [
    "/images/avatar-1.jpg",
    "/images/avatar-2.jpg",
    "/images/avatar-3.jpg",
    "/images/avatar-4.jpg",
  ],
};

export const FOOTER_DATA = {
  logoText: "BizPsy",
  tagline:
    "Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.",
  newsletterTitle: "Subscribe our newsletter",
  newsletterPlaceholder: "Enter your email",
  submitLabel: "SUBMIT",
  copyright: "© 2026 BizPsy Inc. All rights reserved.",
  col1Links: [
    { label: "Home", href: "#hero" },
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
  ],
  col2Links: [
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
};
