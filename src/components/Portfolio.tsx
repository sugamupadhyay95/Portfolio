import { Link } from "react-router-dom";
import styles from "./Portfolio.module.css";
import { SiteHeader } from "./SiteHeader";

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

export function Portfolio() {
  return (
    <div className={styles.frame} data-node-id="643:1449">
      <SiteHeader />

      <main id="top">
        <section className={styles.hero} data-node-id="643:1450" aria-label="Introduction">
          <div className={styles.heroLeft} data-node-id="643:1451">
            <div className={styles.heroTag}>
              <span className={styles.heroTagRule} aria-hidden />
              <p className={styles.heroTagText}>UX / Product Designer · 6+ Years</p>
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
            <blockquote className={styles.heroQuote}>
              <p>&quot;I like to read people and love</p>
              <p>designing for them.&quot;</p>
            </blockquote>
            <div className={styles.statsGrid} data-node-id="643:1466">
              <div className={styles.statCard}>
                <p className={styles.statValue}>₹9.4L</p>
                <p className={styles.statLabel}>saved/month at ShareChat</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>6+</p>
                <p className={styles.statLabel}>years of UX experience</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>4K+</p>
                <p className={styles.statLabel}>man-hours saved by design</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>1M+</p>
                <p className={styles.statLabel}>campaign impressions</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionMuted} id="work" data-node-id="643:1488">
          <div className={styles.sectionLabel}>
            <span className={styles.sectionRule} aria-hidden />
            <span className={styles.sectionKicker}>Selected Work</span>
          </div>
          <h2 className={styles.sectionTitle}>Case Studies</h2>

          <div className={styles.workGrid} data-node-id="643:1494">
            <article className={styles.featuredCase} data-node-id="643:1495">
              <div className={styles.featuredBody}>
                <p className={styles.caseTag}>SaaS · Ops Tool · ShareChat</p>
                <Link to="/case-studies/profile-moderation-tool" className={styles.featuredTitleLink}>
                  <h3 className={styles.featuredTitle}>Profile Moderation Tool — Saving ₹4.3L/Month</h3>
                </Link>
                <p className={styles.caseDesc}>
                  A full redesign of the content moderation SaaS used by 50+ operations employees daily. Deep user
                  research revealed friction points that were costing the company hundreds of hours per week.
                </p>
                <div className={styles.metricsRow}>
                  <div>
                    <p className={styles.metricValue}>₹4.3L</p>
                    <p className={styles.metricLabel}>saved / month</p>
                  </div>
                  <div>
                    <p className={styles.metricValue}>−20s</p>
                    <p className={styles.metricLabel}>avg. handle time</p>
                  </div>
                  <div>
                    <p className={styles.metricValue}>50+</p>
                    <p className={styles.metricLabel}>employees impacted</p>
                  </div>
                </div>
                <Link className={styles.textLink} to="/case-studies/profile-moderation-tool">
                  Read case study <span aria-hidden>→</span>
                </Link>
              </div>
              <div className={styles.caseVisual}>
                <img
                  className={styles.caseThumb}
                  src="/case-studies/profile-moderation/section-hero.png"
                  alt="Profile Moderation Tool case study preview"
                  loading="lazy"
                />
              </div>
            </article>

            <article className={styles.caseCard}>
              <p className={styles.caseTag}>Dashboard · Notifications · ShareChat</p>
              <h3 className={styles.caseTitle}>Mastertool Dashboard</h3>
              <p className={styles.caseDesc}>
                Bulk notification scheduler and tagging tools that saved 4,000+ man-hours and ₹9.4L per month in
                operations costs.
              </p>
              <div className={styles.metricsRow}>
                <div>
                  <p className={styles.metricValue}>₹9.4L</p>
                  <p className={styles.metricLabel}>saved / month</p>
                </div>
                <div>
                  <p className={styles.metricValue}>4K+</p>
                  <p className={styles.metricLabel}>man-hours saved</p>
                </div>
              </div>
            </article>

            <article className={styles.caseCard}>
              <p className={styles.caseTag}>Web · Consumer · ShareChat</p>
              <h3 className={styles.caseTitle}>Careers &amp; Profile Web Redesign</h3>
              <p className={styles.caseDesc}>
                Revamped three key web surfaces — Careers, Explore, and Profile pages — resulting in a measurable lift
                in daily active users.
              </p>
              <div className={styles.metricsRow}>
                <div>
                  <p className={styles.metricValue}>+0.24%</p>
                  <p className={styles.metricLabel}>DAU boost</p>
                </div>
              </div>
            </article>

            <article className={styles.caseCard}>
              <p className={styles.caseTag}>Freelance · Gifting Platform</p>
              <h3 className={styles.caseTitle}>RazeHQ — End-to-End UX</h3>
              <p className={styles.caseDesc}>
                Full product design from discovery to prototype for a corporate gifting platform — research, IA,
                wireframes, and high-fidelity screens.
              </p>
              <div className={styles.metricsRow}>
                <div>
                  <p className={styles.metricValue}>Full</p>
                  <p className={styles.metricLabel}>UX ownership</p>
                </div>
              </div>
            </article>

            <article className={styles.caseCard}>
              <p className={styles.caseTag}>Social · Campaign · ShareChat</p>
              <h3 className={styles.caseTitle}>Moj App Campaign Design System</h3>
              <p className={styles.caseDesc}>
                Social media template grids reducing design time from 5 hrs to 2 hrs per asset, enabling campaigns that
                generated 1M+ impressions.
              </p>
              <div className={styles.metricsRow}>
                <div>
                  <p className={styles.metricValue}>5→2hrs</p>
                  <p className={styles.metricLabel}>design time</p>
                </div>
                <div>
                  <p className={styles.metricValue}>1M+</p>
                  <p className={styles.metricLabel}>impressions</p>
                </div>
              </div>
            </article>
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
                  <span key={s} className={styles.skillPill}>
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
