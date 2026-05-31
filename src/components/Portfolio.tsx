import { useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { SiteHeader } from "./SiteHeader";
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

function CaseCardImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  return (
    <div
      className={styles.caseVisual}
      data-placeholder={src ? undefined : alt}
    >
      {src ? (
        <img
          className={styles.caseThumb}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            (e.currentTarget.parentElement as HTMLElement).setAttribute(
              "data-placeholder",
              alt
            );
          }}
        />
      ) : null}
      <span className={styles.casePlaceholderLabel}>{alt}</span>
    </div>
  );
}

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
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#166534" />
      <path
        d="M9 8h6M8 12h8M9 16h6"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

type ExpTagVariant = "green" | "blue" | "coral" | "purple" | "neutral" | "explore";

type ExperienceEntry = {
  period: string;
  role: string;
  companies: string[];
  logoSrc: string;
  logoAlt: string;
  tags: { label: string; variant: ExpTagVariant }[];
  exploring?: { label: string }[];
};

const experience: ExperienceEntry[] = [
  {
    period: "NOV 2024 — PRESENT",
    role: "Freelance UX / Product Designer",
    companies: ["Pillowcase Studio", "RazeHQ", "Fly My Visa", "Snout"],
    logoSrc: "/images/experience/freelance.svg",
    logoAlt: "Freelance",
    tags: [
      { label: "Product Strategy", variant: "green" },
      { label: "UX Research", variant: "green" },
      { label: "Interaction Design", variant: "green" },
    ],
    exploring: [
      { label: "Figma Make" },
      { label: "Claude" },
      { label: "Cursor" },
      { label: "Lovable" },
      { label: "Basic Coding" },
    ],
  },
  {
    period: "MAY 2024 — AUG 2024",
    role: "Contract UX Designer",
    companies: ["Ekai", "IDX Studios"],
    logoSrc: "/images/experience/contract.jpeg",
    logoAlt: "Contract UX",
    tags: [
      { label: "SaaS Design", variant: "blue" },
      { label: "User Flows", variant: "blue" },
      { label: "Motion", variant: "blue" },
      { label: "Website Design", variant: "blue" },
    ],
  },
  {
    period: "DEC 2023 — FEB 2024",
    role: "Freelance UX Designer",
    companies: ["Studio Kitzu"],
    logoSrc: "/images/experience/studio-kitzu.svg",
    logoAlt: "Studio Kitzu",
    tags: [
      { label: "Figma Templates", variant: "coral" },
      { label: "Social Campaigns", variant: "coral" },
    ],
  },
  {
    period: "NOV 2020 — FEB 2023",
    role: "UX / Visual Designer",
    companies: ["ShareChat"],
    logoSrc: "/images/experience/sharechat.png",
    logoAlt: "ShareChat",
    tags: [
      { label: "Design Systems", variant: "purple" },
      { label: "Ops SaaS", variant: "purple" },
      { label: "Analytics", variant: "purple" },
    ],
  },
  {
    period: "FEB 2019 — MAY 2020",
    role: "Graphic / Video Designer",
    companies: ["Circle App"],
    logoSrc: "/images/experience/circle-app.png",
    logoAlt: "Circle App",
    tags: [
      { label: "Video Editing", variant: "neutral" },
      { label: "Hyperlocal Ads", variant: "neutral" },
      { label: "Broadcasting", variant: "neutral" },
    ],
  },
];

const expTagClass: Record<ExpTagVariant, string> = {
  green: styles.expTagGreen,
  blue: styles.expTagBlue,
  coral: styles.expTagCoral,
  purple: styles.expTagPurple,
  neutral: styles.expTagNeutral,
  explore: styles.expTagExplore,
};

function TimelineIcon({ entry }: { entry: ExperienceEntry }) {
  return (
    <span className={styles.timelineIcon}>
      <img
        className={styles.timelineLogo}
        src={entry.logoSrc}
        alt=""
        width={36}
        height={36}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

function TimelineCompanies({ companies }: { companies: string[] }) {
  return (
    <p className={styles.timelineOrg}>
      {companies.map((name, index) => (
        <span key={name}>
          {index > 0 ? <span className={styles.orgSep}> · </span> : null}
          <span className={styles.timelineCompany}>{name}</span>
        </span>
      ))}
    </p>
  );
}

const HERO_METRICS = [
  { value: "₹9.4L", label: "saved/month at ShareChat" },
  { value: "6+", label: "years of UX experience" },
  { value: "4K+", label: "man-hours saved by design" },
  { value: "1M+", label: "campaign impressions" },
] as const;

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
        <section className={styles.hero} data-node-id="643:1450" aria-label="Introduction">
          <div className={styles.heroLeft} data-node-id="643:1451">
            <div className={styles.heroTag}>
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Curious about</span>
              <span className={styles.heroTitleLine}>
                <span className={styles.heroTitleAccent}>people,</span>
                <span className={styles.heroTitleRest}> Obsessive</span>
              </span>
              <span className={styles.heroTitleLine}>about craft.</span>
            </h1>
            <p className={styles.heroBody}>
            I'm a UX & Product Designer simplifying complex workflows and build products
            people actually enjoy using. I combine research, product thinking, and AI-assisted workflows
            to move from insights to solutions faster.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.btnPrimary} href="#work">
                View Work
              </a>
              <a className={styles.btnOutline} href="#contact">
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className={styles.heroRight} data-node-id="643:1465">
            <img
              className={styles.heroPortrait}
              src="/images/hero-stamp.png"
              alt="Portrait stamp illustration — 6+ years of design experience"
              width={520}
              height={520}
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        <section
          className={styles.metricsSection}
          aria-label="Impact metrics"
          data-node-id="643:1466"
        >
          <div className={styles.statsGrid}>
            {HERO_METRICS.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sectionMuted} id="work" data-node-id="643:1488">
          <div className={styles.sectionLabel}>
          </div>
          <h2 className={styles.sectionTitle}>Case Studies</h2>

          <div className={styles.workGrid} data-node-id="643:1494">
            {WORK_CARDS.map((card) => (
              <article key={card.title} className={styles.caseCard}>
                <div className={styles.caseCardBody}>
                  <p className={styles.caseTag}>{card.tag}</p>
                  <Link to={card.href} className={styles.featuredTitleLink}>
                    <h3 className={styles.caseTitle}>{card.title}</h3>
                  </Link>
                  <p className={styles.caseDesc}>{card.desc}</p>
                  <div className={styles.metricsRow}>
                    {card.metrics.map((m) => (
                      <div key={m.label}>
                        <p className={styles.metricValue}>{m.value}</p>
                        <p className={styles.metricLabel}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link className={styles.textLink} to={card.href}>
                    Read case study <span aria-hidden>→</span>
                  </Link>
                </div>
                <CaseCardImage src={card.imageSrc} alt={card.imageAlt} />
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="about" data-node-id="643:1500">
          <div className={styles.sectionLabel}>
          </div>
          <h2 className={styles.sectionTitle}>About Me</h2>

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
            <div className={styles.experienceTimeline} aria-label="Work experience">
              <div className={styles.timelineTrack} aria-hidden="true" />
              {experience.map((entry) => (
                <article key={entry.period} className={styles.timelineEntry}>
                  <div className={styles.timelineMarker}>
                    <TimelineIcon entry={entry} />
                  </div>
                  <div className={styles.timelineContent}>
                    <p className={styles.timelinePeriod}>{entry.period}</p>
                    <h3 className={styles.timelineRole}>{entry.role}</h3>
                    <TimelineCompanies companies={entry.companies} />
                    <div className={styles.timelineTags}>
                      {entry.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className={`${styles.expTag} ${expTagClass[tag.variant]}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                    {entry.exploring ? (
                      <div className={styles.timelineExploring}>
                        <span className={styles.exploringLabel}>
                          Currently exploring
                        </span>
                        <div className={styles.timelineTags}>
                          {entry.exploring.map((item) => (
                            <span
                              key={item.label}
                              className={`${styles.expTag} ${styles.expTagExplore}`}
                            >
                              {item.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact" data-node-id="643:1595">
          <h2 className={styles.sectionTitleCenter}>
            &ldquo;I like to read people and love designing for them.&rdquo;
          </h2>
          <div className={styles.contactConnect}>
            <div className={styles.sectionLabelCenter}>
              <span className={styles.sectionKicker}>Get in Touch</span>
            </div>
            <div className={styles.contactLinks}>
              <a
                className={styles.contactLink}
                href="mailto:sugam95.upadhyay@gmail.com"
              >
                <img
                  className={styles.contactIcon}
                  src="/images/contact/gmail.svg"
                  alt=""
                  width={24}
                  height={24}
                  decoding="async"
                />
                sugam95.upadhyay@gmail.com
              </a>
              <a
                className={styles.contactLink}
                href="https://www.linkedin.com/in/sugamupadhyay/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.contactIcon}
                  src="/images/contact/linkedin.svg"
                  alt=""
                  width={24}
                  height={24}
                  decoding="async"
                />
                LinkedIn
              </a>
            </div>
          </div>
          <p className={styles.contactNote}>
            Available for full-time roles, contracts, and freelance projects · Based in India, open to remote
          </p>
        </section>
      </main>

      <footer className={styles.footer} data-node-id="643:1608">
        <span>© 2025 Sugam Upadhyay</span>
        <span>Designed &amp; built with intention · UX / Product Design</span>
      </footer>
    </div>
  );
}
