import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { SiteHeader } from "./SiteHeader";
import { Button } from "./ui/Button";
import { InView, Reveal } from "./ui/Reveal";
import { scrollToSection } from "../utils/scrollToSection";

const WORK_CARDS = [
  {
    tag: "SaaS · Ops Tool · ShareChat",
    title: "Profile Moderation Tool — Saving ₹4.3L/Month",
    desc: "A full redesign of the content moderation SaaS used by 50+ operations employees daily. Deep user research revealed friction points that were costing the company hundreds of hours per week.",
    imageSrc: "/case-studies/profile-moderation/section-hero.png",
    imageAlt: "Profile Moderation Tool case study preview",
    href: "/case-studies/profile-moderation-tool",
    metrics: [
      { value: "₹4.3L", label: "saved / month" },
      { value: "−20s", label: "avg. handle time" },
      { value: "50+", label: "employees impacted" },
    ],
  },
  {
    tag: "Case Study 02 · Client Project · B2B · 2025",
    title: "Giftbox — Corporate Gifting, Rebuilt for Trust",
    desc: "End-to-end product design for RazeHQ's B2B gifting platform — quote-first UX, five production-ready screens, and a fully tokenised design system in six weeks.",
    imageSrc: "/case-studies/giftbox/Giftbox_raze_.png",
    imageAlt: "Giftbox case study preview — B2B corporate gifting platform",
    href: "/case-studies/giftbox",
    metrics: [
      { value: "5", label: "screens designed" },
      { value: "6 wks", label: "end-to-end" },
      { value: "Quote-first", label: "UX model" },
    ],
  },
  {
    tag: "Dashboard · Notifications · ShareChat",
    title: "Mastertool Dashboard",
    desc: "Bulk notification scheduler and tagging tools that saved 4,000+ man-hours and ₹9.4L per month in operations costs.",
    imageSrc: undefined,
    imageAlt: "Mastertool Dashboard case study preview",
    href: "#mastertool",
    metrics: [
      { value: "₹9.4L", label: "saved / month" },
      { value: "4K+", label: "man-hours saved" },
    ],
  },
  {
    tag: "Web · Consumer · ShareChat",
    title: "Careers & Profile Web Redesign",
    desc: "Revamped three key web surfaces — Careers, Explore, and Profile pages — resulting in a measurable lift in daily active users.",
    imageSrc: undefined,
    imageAlt: "Careers and Profile web redesign preview",
    href: "#careers-profile",
    metrics: [{ value: "+0.24%", label: "DAU boost" }],
  },
];

type ExpertiseVariant = "research" | "product" | "analytics" | "tools";

const expertiseMainCards: {
  title: string;
  variant: Exclude<ExpertiseVariant, "tools">;
  items: string[];
}[] = [
  {
    title: "Research & Discovery",
    variant: "research",
    items: [
      "User Research",
      "User Interviews",
      "User Flows",
      "Journey Mapping",
      "Usability Testing",
    ],
  },
  {
    title: "Product Design",
    variant: "product",
    items: [
      "Interaction Design",
      "Wireframing",
      "Prototyping",
      "SaaS Design",
      "Design Systems",
    ],
  },
  {
    title: "Analytics & Optimisation",
    variant: "analytics",
    items: [
      "Microsoft Clarity",
      "A/B Testing",
      "User Behaviour Analysis",
      "Conversion Optimisation",
    ],
  },
];

const designTools = [
  { label: "Figma", src: "/images/tools/figma.svg" },
  { label: "Adobe CC", src: "/images/tools/adobe.svg" },
  { label: "Notion", src: "/images/tools/notion.svg" },
  { label: "HubSpot", src: "/images/tools/hubspot.svg" },
  { label: "Clarity", src: "/images/tools/clarity.svg" },
];

const exploringTools = [
  { label: "Claude", icon: "claude" as const },
  { label: "Cursor", icon: "cursor" as const },
  { label: "Lovable", icon: "lovable" as const },
  { label: "Coding Basics", icon: "code" as const },
];

const expertiseTitleClass: Record<ExpertiseVariant, string> = {
  research: styles.expertiseTitleResearch,
  product: styles.expertiseTitleProduct,
  analytics: styles.expertiseTitleAnalytics,
  tools: styles.expertiseTitleTools,
};

const expertiseCardTintClass: Record<
  Exclude<ExpertiseVariant, "tools">,
  string
> = {
  research: styles.expertiseCardResearch,
  product: styles.expertiseCardProduct,
  analytics: styles.expertiseCardAnalytics,
};

function ToolIconRow({
  tools,
  renderIcon,
}: {
  tools: { label: string; src?: string; icon?: (typeof exploringTools)[number]["icon"] }[];
  renderIcon?: (tool: (typeof exploringTools)[number]) => ReactNode;
}) {
  return (
    <div className={styles.toolIconRow}>
      {tools.map((tool) => (
        <div key={tool.label} className={styles.toolIconItem}>
          {tool.src ? (
            <img
              className={styles.toolIconImg}
              src={tool.src}
              alt=""
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
            />
          ) : renderIcon && "icon" in tool && tool.icon ? (
            <span className={styles.toolIconGraphic} aria-hidden>
              {renderIcon(tool as (typeof exploringTools)[number])}
            </span>
          ) : null}
          <span className={styles.toolIconLabel}>{tool.label}</span>
        </div>
      ))}
    </div>
  );
}

function ExploringToolIcon({ icon }: { icon: (typeof exploringTools)[number]["icon"] }) {
  if (icon === "claude") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="#d97706" />
        <path
          d="M12 6l1.2 3.7H17l-3 2.2 1.1 3.6L12 13.3 8.9 15.5l1.1-3.6-3-2.2h3.8L12 6z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (icon === "cursor") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 8l7-4 7 4v8l-7 4-7-4V8z" fill="#0a0a0a" />
        <path d="M12 4v16M5 8l7 4 7-4" stroke="#fff" strokeWidth="1" opacity="0.35" />
      </svg>
    );
  }

  if (icon === "lovable") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 20s-7-4.5-7-9.5a4 4 0 0 1 7-2.5 4 4 0 0 1 7 2.5C19 15.5 12 20 12 20z"
          fill="url(#lovableGrad)"
        />
        <defs>
          <linearGradient id="lovableGrad" x1="5" y1="6" x2="19" y2="18">
            <stop stopColor="#f472b6" />
            <stop offset="1" stopColor="#fb923c" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#5b3df5" />
      <path
        d="M9 8h6M8 12h8M9 16h6"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

type ExperienceEntry = {
  period: string;
  role: string;
  companies: string[];
  logoSrc: string;
  logoAlt: string;
};

const experience: ExperienceEntry[] = [
  {
    period: "NOV 2024 — PRESENT",
    role: "Freelance UX / Product Designer",
    companies: ["Pillowcase Studio", "RazeHQ", "Fly My Visa", "Snout"],
    logoSrc: "/images/experience/freelance.svg",
    logoAlt: "Freelance",
  },
  {
    period: "MAY 2024 — AUG 2024",
    role: "Contract UX Designer",
    companies: ["Ekai", "IDX Studios"],
    logoSrc: "/images/experience/contract.jpeg",
    logoAlt: "Contract UX",
  },
  {
    period: "DEC 2023 — FEB 2024",
    role: "Freelance UX Designer",
    companies: ["Studio Kitzu"],
    logoSrc: "/images/experience/studio-kitzu.svg",
    logoAlt: "Studio Kitzu",
  },
  {
    period: "NOV 2020 — FEB 2023",
    role: "UX / Visual Designer",
    companies: ["ShareChat"],
    logoSrc: "/images/experience/sharechat.png",
    logoAlt: "ShareChat",
  },
  {
    period: "FEB 2019 — MAY 2020",
    role: "Graphic / Video Designer",
    companies: ["Circle App"],
    logoSrc: "/images/experience/circle-app.png",
    logoAlt: "Circle App",
  },
];

const HERO_METRICS = [
  { value: "₹9.4L", label: "saved/month at ShareChat" },
  { value: "6+", label: "years of UX experience" },
  { value: "4K+", label: "man-hours saved by design" },
  { value: "1M+", label: "campaign impressions" },
] as const;

function careerYear(period: string) {
  if (/PRESENT/i.test(period)) return "2026";
  const years = period.match(/\d{4}/g);
  return years ? years[0] : period;
}

export function Portfolio() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const frame = requestAnimationFrame(() => scrollToSection(id));
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className={styles.frame} data-node-id="643:1449">
      <SiteHeader />

      <main id="top">
        <section className={styles.hero} aria-label="Introduction">
          <div className={`${styles.heroContent} container`}>
            <h1 className={styles.heroName}>
              Sugam
              <br className={styles.nameBreak} /> Upadhyay
            </h1>
            <p className={styles.lede}>
            UX designer simplifying complex products and AI-assisted workflows.
            </p>
            <div className={styles.heroActions}>
              <Button href="#work">View work →</Button>
              <Button variant="ghost" href="#contact">
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </section>

        <section className={`${styles.belief} container`} aria-label="About and career">
          <div className={styles.beliefGrid}>
            <div className={styles.beliefText}>
              <Reveal>
                <p className={styles.beliefLead}>
                 Product thinker, following curiosity into systems, AI, and code.
                  Over the last 5 years, I’ve worked on enterprise tools and startup products, shaping flows, interfaces, and systems with founders and developers. Building AI-first design system and agents to cut repetitive work and spend more time on product problems.
             
                </p>
                <Button variant="ghost" href="#about" className={styles.beliefMore}>
                  Read more
                </Button>
              </Reveal>
            </div>
            <aside className={styles.career} aria-label="Career timeline">
              <Reveal className={styles.timelinePhoto}>
                <img
                  className={styles.timelinePhotoImg}
                  src="/images/portrait.jpg"
                  alt="Sugam Upadhyay"
                  width={960}
                  height={960}
                  loading="lazy"
                />
                <span className={styles.badgeCircle} aria-hidden="true">
                  <svg className={styles.badgeBurst} viewBox="0 0 100 100">
                    <defs>
                      <radialGradient
                        id="burst-grad"
                        gradientUnits="userSpaceOnUse"
                        cx="50"
                        cy="50"
                        r="15"
                      >
                        <stop offset="0" stopColor="#ffffff" />
                        <stop offset="1" stopColor="#ffd8e4" />
                      </radialGradient>
                    </defs>
                    <g className={styles.badgeSpokes} stroke="url(#burst-grad)">
                      {Array.from({ length: 20 }, (_, i) => {
                        const a = (i / 20) * Math.PI * 2;
                        const x2 = 50 + Math.cos(a) * 15;
                        const y2 = 50 + Math.sin(a) * 15;
                        return (
                          <line
                            key={i}
                            x1={50 + Math.cos(a) * 2}
                            y1={50 + Math.sin(a) * 2}
                            x2={x2}
                            y2={y2}
                          />
                        );
                      })}
                    </g>
                  </svg>
                  <svg className={styles.badgeRing} viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="badge-arc"
                        d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#badge-arc">
                        6+ YEARS UX · PRODUCT DESIGN · SHARECHAT ·
                      </textPath>
                    </text>
                  </svg>
                </span>
              </Reveal>
              {experience.map((entry) => (
                <InView key={entry.period} className={styles.timelineGroup}>
                  <p className={styles.timelineYear}>{careerYear(entry.period)}</p>
                  <div className={styles.timelineItem}>
                    <span className={styles.timelineLogo}>
                      <img
                        src={entry.logoSrc}
                        alt=""
                        width={56}
                        height={56}
                        loading="lazy"
                      />
                    </span>
                    <span>
                      <strong>
                        {entry.companies.length > 1
                          ? entry.logoAlt
                          : entry.companies[0]}
                      </strong>
                      <em>{entry.role}</em>
                    </span>
                  </div>
                </InView>
              ))}
            </aside>
          </div>
        </section>

        <section className={styles.section} id="work">
          <Reveal className={styles.sectionHead}>
            <h2 className="display-title">Case studies</h2>
            <p className="head-sub">
              A few case studies in product design. The problems, the bets, and
              what shipped.
            </p>
          </Reveal>

          <div className={styles.cardGrid}>
            {WORK_CARDS.map((card) => {
              const body = (
                <>
                  <div
                    className={styles.cardMedia}
                    data-placeholder={card.imageSrc ? undefined : ""}
                  >
                    {card.imageSrc ? (
                      <img src={card.imageSrc} alt="" loading="lazy" />
                    ) : (
                      <span className={styles.cardMediaTag}>{card.tag}</span>
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <h3>{card.title}</h3>
                    <p className={styles.cardMeta}>{card.desc}</p>
                  </div>
                </>
              );

              return card.href.startsWith("/") ? (
                <Link key={card.title} className={styles.card} to={card.href}>
                  {body}
                </Link>
              ) : (
                <a key={card.title} className={styles.card} href={card.href}>
                  {body}
                </a>
              );
            })}
          </div>
        </section>

        <section className={styles.section} id="about">
          <Reveal className={styles.sectionHead}>
            <p className="eyebrow">About</p>
            <h2 className="display-title">About me</h2>
          </Reveal>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <p>
              I'm Sugam, A UX & Product Designer who design digital experiences that simplify complex workflows,
              reduce friction and create meaningful impact for both users and businesses.

              </p>
              <p>
              Over the last 6+ years, I've worked across the full design process, from user research
              and workflow mapping to interaction design, prototyping, and visual execution. I enjoy diving deep into user behaviour,
              understanding how people actually work and translating those insights into experiences that solve real problems.
              My work spans consumer products, SaaS platforms, and operational tools where efficiency, usability
              and business impact matter equally.
              </p>
              <p>At the core of my work is a simple belief, The best products feel effortless.
                </p>
              <div className={styles.expertise}>
                <h3 className={styles.expertiseHeading}>Expertise</h3>
                <div className={styles.expertiseGrid}>
                  <div className={styles.expertiseMainRow}>
                    {expertiseMainCards.map((card) => (
                      <div
                        key={card.title}
                        className={`${styles.expertiseCard} ${expertiseCardTintClass[card.variant]}`}
                      >
                        <h4
                          className={`${styles.expertiseCardTitle} ${expertiseTitleClass[card.variant]}`}
                        >
                          {card.title}
                        </h4>
                        <ul className={styles.expertiseList}>
                          {card.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className={styles.expertiseToolsBlock}>
                    <h4
                      className={`${styles.expertiseCardTitle} ${expertiseTitleClass.tools}`}
                    >
                      Tools
                    </h4>
                    <ToolIconRow tools={designTools} />
                  </div>
                  <div className={styles.expertiseExploringBlock}>
                    <h4
                      className={`${styles.expertiseCardTitle} ${styles.expertiseTitleExploring}`}
                    >
                      Currently Exploring
                    </h4>
                    <ToolIconRow
                      tools={exploringTools}
                      renderIcon={(tool) => <ExploringToolIcon icon={tool.icon} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <Reveal className={styles.sectionHead}>
            <h2 className={`${styles.ctaTitle} display-title`}>
              Let&apos;s work together
            </h2>
            <p className="head-sub">
              Available for full-time roles, contracts, and freelance projects.
              Based in India, open to remote.
            </p>
          </Reveal>
          <div className={styles.heroActions}>
            <Button href="mailto:sugam95.upadhyay@gmail.com">Get in touch</Button>
            <Button
              variant="ghost"
              href="https://www.linkedin.com/in/sugamupadhyay/"
              external
            >
              Connect on LinkedIn
            </Button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <small>© 2026 Sugam Upadhyay</small>
        <span>Designed &amp; built with intention</span>
      </footer>
    </div>
  );
}
