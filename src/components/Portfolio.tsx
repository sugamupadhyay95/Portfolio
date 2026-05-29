import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { SiteHeader } from "./SiteHeader";

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

const skills = [
  "UX Research",
  "Figma",
  "Interaction Design",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "Clarity Analytics",
  "Adobe XD",
  "Motion Design",
  "Framer",
  "Canva Systems",
  "HubSpot",
] as const;

const skillChipStyles: Record<(typeof skills)[number], string> = {
  "UX Research": styles.skillResearch,
  Figma: styles.skillPrototyping,
  "Interaction Design": styles.skillWireframing,
  Prototyping: styles.skillPrototyping,
  "Usability Testing": styles.skillResearch,
  "Design Systems": styles.skillDesignSystems,
  "Clarity Analytics": styles.skillAnalytics,
  "Adobe XD": styles.skillWireframing,
  "Motion Design": styles.skillDefault,
  Framer: styles.skillPrototyping,
  "Canva Systems": styles.skillDesignSystems,
  HubSpot: styles.skillDefault,
};

const experience = [
  {
    period: "2024 – Now",
    role: "Freelance UX / Product Designer",
    org: "Pillowcase Studio · RazeHQ · Fly My Visa",
  },
  {
    period: "May – Aug 2024",
    role: "Contract UX Designer",
    org: "IDX Studios",
  },
  {
    period: "Nov 2023 – Mar 2024",
    role: "Freelance Designer",
    org: "Studio Kitzu",
  },
  {
    period: "2022 – 2023",
    role: "UX Designer",
    org: "ShareChat",
  },
  {
    period: "2019 – 2022",
    role: "Visual & Product Designer",
    org: "ShareChat · Circle App",
  },
] as const;

const processSteps = [
  {
    n: "01",
    title: "Discover",
    lines: ["User interviews, stakeholder goals, analytics review,", "competitive audit"],
  },
  {
    n: "02",
    title: "Define",
    lines: ["Problem framing, user personas, journey maps, jobs-", "to-be-done"],
  },
  {
    n: "03",
    title: "Ideate",
    lines: ["Sketching, IA, user flows, design principles, concept", "exploration"],
  },
  {
    n: "04",
    title: "Design",
    lines: ["Wireframes → high-fidelity prototypes in Figma, design", "system"],
  },
  {
    n: "05",
    title: "Validate",
    lines: ["Usability testing, iteration, dev handoff, post-launch", "metrics"],
  },
] as const;

const HERO_METRICS = [
  { value: "₹9.4L", label: "saved/month at ShareChat" },
  { value: "6+", label: "years of UX experience" },
  { value: "4K+", label: "man-hours saved by design" },
  { value: "1M+", label: "campaign impressions" },
] as const;

export function Portfolio() {
  return (
    <div className={styles.frame} data-node-id="643:1449">
      <SiteHeader />

      <main id="top">
        <section className={styles.hero} data-node-id="643:1450" aria-label="Introduction">
          <div className={styles.heroLeft} data-node-id="643:1451">
            <div className={styles.heroTag}>
              <span className={styles.heroTagRule} aria-hidden />
              <p className={styles.heroTagText}>UX / Product Designer</p>
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
              I research, design, and ship digital products that are genuinely useful, turning complex systems into
              clear, satisfying experiences.
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
            <span className={styles.sectionRule} aria-hidden />
            <span className={styles.sectionKicker}>Selected Work</span>
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
            <span className={styles.sectionRule} aria-hidden />
            <span className={styles.sectionKicker}>Who I Am</span>
          </div>
          <h2 className={styles.sectionTitle}>A designer who measures impact</h2>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCopy}>
              <p>
                I&apos;ve been designing digital products since 2019, working across the full spectrum from consumer
                apps to enterprise SaaS. What drives me is the moment a complex workflow becomes effortless — not
                through decoration, but through understanding how people actually think and work.
              </p>
              <p>
                At ShareChat I embedded with operations teams to understand moderation workflows firsthand. That
                fieldwork led directly to designs that saved millions in monthly costs. I believe the best UX insights
                come from observing real behaviour, not assumptions.
              </p>
              <p>Currently freelancing and open to senior UX / product design roles in product-led companies.</p>
              <div className={styles.skills}>
                {skills.map((s) => (
                  <span key={s} className={`${styles.skillPill} ${skillChipStyles[s]}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.timeline}>
              {experience.map((row) => (
                <div key={row.period} className={styles.timelineRow}>
                  <span className={styles.timelinePeriod}>{row.period}</span>
                  <div>
                    <p className={styles.timelineRole}>{row.role}</p>
                    <p className={styles.timelineOrg}>{row.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionMuted} id="process" data-node-id="643:1568">
          <div className={styles.sectionLabel}>
            <span className={styles.sectionRule} aria-hidden />
            <span className={styles.sectionKicker}>How I Work</span>
          </div>
          <h2 className={styles.sectionTitle}>My design process</h2>

          <div className={styles.process} data-node-id="643:1574">
            <div className={styles.processLine} aria-hidden />
            <ol className={styles.processSteps}>
              {processSteps.map((step) => (
                <li key={step.n} className={styles.processStep}>
                  <div className={styles.stepNum}>{step.n}</div>
                  <p className={styles.stepTitle}>{step.title}</p>
                  <p className={styles.stepDesc}>
                    {step.lines[0]}
                    <br />
                    {step.lines[1]}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.sectionMuted} id="case-study-guide" aria-labelledby="case-study-guide-title">
          <div className={styles.sectionLabel}>
            <span className={styles.sectionRule} aria-hidden />
            <span className={styles.sectionKicker}>Resources</span>
          </div>
          <h2 className={styles.sectionTitle} id="case-study-guide-title">
            Case Study Guide
          </h2>
          <p className={styles.guideLead}>
            Use the navigation label from your Figma file — this anchor matches the &quot;Case Study Guide&quot; nav item
            for in-page jumps.
          </p>
        </section>

        <section className={styles.contact} id="contact" data-node-id="643:1595">
          <div className={styles.sectionLabelCenter}>
            <span className={styles.sectionKicker}>Get in Touch</span>
          </div>
          <h2 className={styles.sectionTitleCenter}>Open for new opportunities</h2>
          <a className={styles.emailLink} href="mailto:sugam95.upadhyay@gmail.com">
            sugam95.upadhyay@gmail.com
          </a>
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
