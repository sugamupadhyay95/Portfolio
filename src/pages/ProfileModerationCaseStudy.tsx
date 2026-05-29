import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { PROFILE_MODERATION_FIGMA_URL } from "../data/profileModerationCaseStudy";
import styles from "./ProfileModerationCaseStudy.module.css";

const TECH_CHIPS = ["Figma", "Clarity", "Research", "Wireframing", "Prototyping"];

const IA_ZONES = ["Profile Info", "Video Preview", "Questions", "History"];

const DECISION_CARDS = [
  {
    num: "01",
    title: "Autoplay + parallel interaction",
    desc: "The first video now plays automatically by default, sorted by highest view count. The video panel is independent — moderators can answer questions while the video plays, eliminating the forced wait.",
    impact: "~5s saved per profile on video loading alone",
    beforeSrc: "/case-studies/profile-moderation/decisions/01-before.png",
    afterSrc: "/case-studies/profile-moderation/decisions/01-after.png",
  },
  {
    num: "02",
    title: "Genre dropdown instead of expanded list",
    desc: "The genre selection was collapsed into a compact dropdown, freeing vertical space and keeping 3+ additional questions visible above the fold at all times.",
    impact: "Space freed for 3+ more questions above the fold",
    beforeSrc: "/case-studies/profile-moderation/decisions/02-before.png",
    afterSrc: "/case-studies/profile-moderation/decisions/02-after.png",
  },
  {
    num: "03",
    title: "Complete metadata surface",
    desc: "MCPP score, 30-day number, posts, followers, language, and profile ID are all visible at a glance. No more navigating away from the review to find context.",
    impact: "All context visible without leaving the screen",
    beforeSrc: "/case-studies/profile-moderation/decisions/03-before.png",
    afterSrc: "/case-studies/profile-moderation/decisions/03-after.png",
  },
  {
    num: "04",
    title: "Progress visibility",
    desc: "Added completed count alongside remaining in the top bar. Seeing work done — not just work left — sustains moderator focus and morale during long shifts.",
    impact: "Progress motivation, reduces cognitive fatigue",
    beforeSrc: "/case-studies/profile-moderation/decisions/04-before.png",
    afterSrc: "/case-studies/profile-moderation/decisions/04-after.png",
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery",
    desc: "Interviews with 2–3 BPO moderators + Clarity session recording integration to map friction points quantitatively.",
  },
  {
    title: "Information architecture",
    desc: "Defined the four-panel structure: Profile info → Video preview → Questions → History. Each zone has one job.",
  },
  {
    title: "Wireframing",
    desc: "Low-fi wireframes validated with the BPO team before moving to visual design, ensuring the layout matched actual review workflows.",
  },
  {
    title: "Visual design & handoff",
    desc: "High-fidelity designs built out the four-panel interface with all metadata fields and the redesigned question panel.",
  },
  {
    title: "Post-release measurement",
    desc: "AHT tracked against the 90-second target. Achieved and sustained post-release.",
  },
];

const IMPACT_METRICS = [
  {
    value: "~17s",
    label: "Reduction in AHT per profile (105–110s → ~90s)",
  },
  {
    value: "₹4.3L",
    label: "Monthly cost savings from improved throughput",
  },
  {
    value: "18–20k",
    label: "Profiles reviewed daily across 56 moderators",
  },
];

const IMPACT_HIGHLIGHTS = [
  "AHT target met",
  "Cost savings achieved",
  "Zero additional headcount",
];

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className={styles.sectionTag}>
      <span className={styles.tagAccent} />
      <span>{children}</span>
    </div>
  );
}

function Divider() {
  return <div className={styles.divider} />;
}

function ImagePlaceholder({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <div className={styles.imgWrap}>
      <img
        src={src}
        alt={alt}
        className={className ?? styles.sectionImg}
        loading={loading}
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          (e.currentTarget.parentElement as HTMLElement).setAttribute(
            "data-placeholder",
            alt
          );
        }}
      />
    </div>
  );
}

export function ProfileModerationCaseStudy() {
  return (
    <div className={styles.page} data-node-id="645:1951">
      <SiteHeader />

      {/* Page Header Chrome */}
      <div className={styles.pageChrome} data-node-id="645:1952">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <span className={styles.accentBar} aria-hidden="true" />
          <Link to="/#work">Selected Work</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span>Profile Moderation Tool</span>
        </nav>
        <Link className={styles.backLink} to="/">
          ← Back to home
        </Link>
      </div>

      <main className={styles.main} data-node-id="663:920">
        {/* Page Title */}
        <div className={styles.pageTitleRow} data-node-id="645:1955">
          <h1 className={styles.pageTitle}>Case Studies</h1>
        </div>

        {/* ── 01 / Hero ───────────────────────────────────────────── */}
        <section
          className={styles.heroSection}
          aria-labelledby="hero-title"
          data-node-id="740:3587"
        >
          <div className={styles.heroLeft} data-node-id="740:3588">
            {/* Hero text block */}
            <div className={styles.heroText} data-node-id="653:3839">
              <SectionTag>SaaS · Ops Tool · ShareChat</SectionTag>
              <h2 className={styles.caseTitle} id="hero-title">
                Profile Moderation Tool
              </h2>
              <p className={styles.caseDesc}>
                A full redesign of the content moderation SaaS used by 50+
                operations employees daily. Deep user research revealed friction
                points that were costing the company hundreds of hours per week.
              </p>
              <div className={styles.caseMetrics} data-node-id="653:3846">
                <div className={styles.metricItem}>
                  <span className={styles.metricKey}>Role</span>
                  <span className={styles.metricVal}>Product Designer</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricKey}>Platform</span>
                  <span className={styles.metricVal}>Internal Web App</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricKey}>Users</span>
                  <span className={styles.metricVal}>50+ BPO Moderators</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricKey}>Year</span>
                  <span className={styles.metricVal}>2024</span>
                </div>
              </div>
              <a
                className={styles.ctaBtn}
                href={PROFILE_MODERATION_FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-node-id="653:3865"
              >
                View in Figma →
              </a>
            </div>

            {/* Tech stack chips */}
            <div
              className={styles.techChips}
              data-node-id="652:614"
              aria-label="Tech stack"
            >
              {TECH_CHIPS.map((chip) => (
                <span key={chip} className={styles.chip}>
                  {chip}
                </span>
              ))}
            </div>

            {/* Overview block */}
            <div className={styles.overviewBlock} data-node-id="648:662">
              <SectionTag>01 — Overview</SectionTag>
              <h3 className={styles.sectionTitleSm}>What is this tool?</h3>
              <Divider />
              <p className={styles.bodyText}>
                The Profile Moderation Tool is an internal web app used by BPO
                teams to review user-generated profiles on Moj, India's
                short-video platform. Moderators assess profiles across multiple
                dimensions: authenticity, content type, upload frequency,
                engagement quality, and policy compliance. With 18–20k profiles
                reviewed daily, even small inefficiencies at the individual
                level compound into significant operational costs.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div className={styles.heroRight} data-node-id="653:3887">
            <ImagePlaceholder
              src="/case-studies/profile-moderation/Content.png"
              alt="Profile Moderation Tool — UI preview showing the four-panel moderation interface"
              className={styles.heroImg}
              loading="eager"
            />
          </div>
        </section>

        {/* ── 02 / The Problem ────────────────────────────────────── */}
        <section
          className={styles.section}
          aria-labelledby="problem-title"
          data-node-id="656:896"
        >
          <SectionTag>02 — The Problem</SectionTag>
          <h2 className={styles.sectionTitle} id="problem-title">
            What was slowing moderators down?
          </h2>
          <Divider />
          <p className={styles.bodyText}>
            The baseline AHT (Average Handle Time) sat at 105–110 seconds per
            profile. Through interviews and Clarity session recordings, four
            friction points emerged:
          </p>
          <ul className={styles.problemList}>
            <li>
              Videos required a manual click to play, and hovering to watch
              blocked all other interactions — moderators couldn't read metadata
              or answer questions while previewing content.
            </li>
            <li>
              Key profile metadata was missing from the review view, forcing
              moderators to mentally fill in gaps or navigate away.
            </li>
            <li>
              The genre selection question used a full expanded list that
              consumed excessive screen real estate, pushing other questions out
              of view.
            </li>
            <li>
              The Moj Camera icon was not visible, making it harder to identify
              camera-originated content at a glance.
            </li>
            <li>
              No visibility into completed count — moderators could only see
              remaining profiles, with no sense of progress or daily output.
              This made it hard to self-pace or feel accomplishment during long
              shifts.
            </li>
          </ul>
        </section>

        {/* Problem — Old UI Screenshot */}
        <div
          className={styles.fullWidthImgSection}
          data-node-id="663:993"
        >
          <ImagePlaceholder
            src="/case-studies/profile-moderation/Old UI Screenshot.png"
            alt="Annotated breakdown of the old moderation interface showing five friction points"
          />
        </div>

        {/* ── 03 / Research ───────────────────────────────────────── */}
        <section
          className={styles.researchSection}
          aria-labelledby="research-title"
          data-node-id="665:2545"
        >
          <div className={styles.researchText} data-node-id="663:983">
            <SectionTag>03 — Research</SectionTag>
            <h2 className={styles.sectionTitle} id="research-title">
              Understanding the moderator
            </h2>
            <Divider />
            <p className={styles.bodyText}>
              I interviewed 2–3 members of the BPO team and integrated
              Microsoft Clarity to observe real sessions. This helped map
              exactly where time was being lost and validate which pain points
              had the highest frequency.
            </p>
          </div>
          <div className={styles.personaBlock} data-node-id="663:1125">
            <div className={styles.personaCard} data-node-id="663:1113">
              <ImagePlaceholder
                src="/case-studies/profile-moderation/Persona Card.png"
                alt="Persona card — BPO content moderator working on Moj profiles"
                className={styles.personaImg}
              />
            </div>
            <blockquote
              className={styles.personaQuote}
              data-node-id="663:1121"
            >
              "Every extra click or scroll I have to do breaks my flow. When
              videos don't autoplay, I lose my rhythm and it takes a second to
              recalibrate for each profile."
            </blockquote>
          </div>
        </section>

        {/* ── 04 / Information Architecture ───────────────────────── */}
        <section
          className={styles.iaSection}
          aria-labelledby="ia-title"
          data-node-id="671:1148"
        >
          <div className={styles.iaText} data-node-id="665:2543">
            <SectionTag>04 — Information Architecture</SectionTag>
            <h2 className={styles.sectionTitle} id="ia-title">
              Restructuring the four-panel layout
            </h2>
            <Divider />
            <p className={styles.bodyText}>
              The redesign organised the screen into four distinct zones, each
              with a single clear purpose:
            </p>
          </div>
          <div className={styles.iaLayoutBlock} data-node-id="665:2646">
            <div className={styles.iaChipDiagram} data-node-id="665:2647">
              <div
                className={styles.iaZoneChips}
                data-node-id="664:977"
                aria-label="Four UI zones"
              >
                {IA_ZONES.map((zone) => (
                  <span key={zone} className={styles.chip}>
                    {zone}
                  </span>
                ))}
              </div>
              <div className={styles.iaDiagram} data-node-id="665:2546">
                <ImagePlaceholder
                  src="/case-studies/profile-moderation/div.case-visual.png"
                  alt="Four-panel information architecture diagram"
                  className={styles.sectionImg}
                />
              </div>
            </div>
            <p className={styles.iaDesc} data-node-id="664:978">
              This separation keeps the moderator's attention in the right place
              at the right time — they can watch a video on the left while
              answering questions on the right simultaneously, which was
              impossible in the original layout.
            </p>
          </div>
        </section>

        {/* ── 05 / Design Decisions ───────────────────────────────── */}
        <section
          className={styles.section}
          aria-labelledby="decisions-title"
          data-node-id="671:1139"
        >
          <div
            className={styles.decisionContent}
            data-node-id="671:1140"
          >
            <SectionTag>05 — Design Decisions</SectionTag>
            <h2 className={styles.sectionTitle} id="decisions-title">
              Four changes, one goal
            </h2>
            <Divider />
            <div
              className={styles.decisionCardsBlock}
              data-node-id="695:1882"
            >
              <p className={styles.bodyText}>
                The redesign organised the screen into four distinct zones, each
                with a single clear purpose:
              </p>
              <div
                className={styles.decisionCards}
                data-node-id="689:1306"
                role="list"
              >
                {DECISION_CARDS.map((card) => (
                  <article
                    key={card.num}
                    className={styles.decisionCard}
                    role="listitem"
                  >
                    <div className={styles.decisionCardContent}>
                      <span className={styles.cardNum}>{card.num}</span>
                      <div className={styles.cardBody}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDesc}>{card.desc}</p>
                        <span className={styles.cardImpactChip}>
                          <span
                            className={styles.cardImpactIcon}
                            aria-hidden="true"
                          >
                            ↓
                          </span>
                          {card.impact}
                        </span>
                      </div>
                    </div>
                    <div className={styles.decisionCardVisual}>
                      <div className={styles.decisionCompare}>
                        <div className={styles.decisionCompareCol}>
                          <span className={styles.decisionCompareLabel}>
                            Before
                          </span>
                          <div className={styles.decisionCompareImgWrap}>
                            <ImagePlaceholder
                              src={card.beforeSrc}
                              alt={`${card.title} — before`}
                              className={styles.decisionCompareImg}
                            />
                          </div>
                        </div>
                        <div className={styles.decisionCompareCol}>
                          <span className={styles.decisionCompareLabel}>
                            After
                          </span>
                          <div className={styles.decisionCompareImgWrap}>
                            <ImagePlaceholder
                              src={card.afterSrc}
                              alt={`${card.title} — after`}
                              className={styles.decisionCompareImg}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 / Before vs After ────────────────────────────────── */}
        <section
          className={styles.beforeAfterSection}
          aria-labelledby="before-after-title"
          data-node-id="711:1279"
        >
          <div
            className={styles.beforeAfterText}
            data-node-id="711:1281"
          >
            <SectionTag>06 — Before vs After</SectionTag>
            <h2 className={styles.sectionTitle} id="before-after-title">
              Key UI changes at a glance
            </h2>
            <Divider />
          </div>

          <div
            className={styles.comparisonImages}
            data-node-id="711:2726"
          >
            {/* Before */}
            <div className={styles.beforeState} data-node-id="711:2727">
              <div className={styles.compLabel} data-node-id="711:2728">
                <span>Before</span>
                <span className={styles.compChip}>OLD</span>
              </div>
              <div
                className={styles.compImgWrap}
                data-node-id="711:2732"
              >
                <ImagePlaceholder
                  src="/case-studies/profile-moderation/Before Screenshot.png"
                  alt="Old moderation interface — manual video play, limited metadata"
                  className={styles.compImg}
                />
              </div>
              <div
                className={styles.compCaption}
                data-node-id="711:3264"
              >
                <p className={styles.captionTitle}>
                  Old moderation interface
                </p>
                <p className={styles.captionSub}>
                Single panel · click-to-play · minimal metadata,
                AHT 105–110 seconds
                </p>
              </div>
            </div>

            {/* After */}
            <div className={styles.afterState} data-node-id="711:2733">
              <div className={styles.compLabel} data-node-id="711:2734">
                <span>After</span>
                <span className={styles.compChipAfter}>NEW</span>
              </div>
              <div
                className={styles.compImgWrap}
                data-node-id="711:2738"
              >
                <ImagePlaceholder
                  src="/case-studies/profile-moderation/After Screenshot.png"
                  alt="Redesigned moderation interface — autoplay, full metadata, compact dropdowns, progress bar"
                  className={styles.compImg}
                />
              </div>
              <div
                className={styles.compCaption}
                data-node-id="711:3287"
              >
                <p className={styles.captionTitle}>Redesigned interface</p>
                <p className={styles.captionSub}>
                Four panels · autoplay · full metadata · Camera icon,
                AHT ~90 seconds
                </p>
              </div>
            </div>
          </div>

          {/* Impact metrics strip */}
          <div
            className={styles.metricsStrip}
            data-node-id="711:3291"
          >
            <span className={styles.stripLabel}>Average handle time</span>
            <span className={styles.stripValue}>105–110s → ~90s</span>
            <span className={styles.stripValue}>₹4.3L/month saved</span>
          </div>
        </section>

        {/* ── 07 / Process ────────────────────────────────────────── */}
        <section
          className={styles.section}
          aria-labelledby="process-title"
          data-node-id="715:3303"
        >
          <SectionTag>07 — Process</SectionTag>
          <h2 className={styles.sectionTitle} id="process-title">
            How it came together
          </h2>
          <Divider />
          <ol
            className={styles.processList}
            data-node-id="715:3395"
            aria-label="Design process steps"
          >
            {PROCESS_STEPS.map((step, i) => (
              <li
                key={i}
                className={styles.processStep}
                data-node-id={`715:${3396 + i}`}
              >
                <span
                  className={styles.stepBadge}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={styles.stepContent}>
                  <strong className={styles.stepTitle}>{step.title}</strong>
                  <span className={styles.stepDesc}>{step.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── 08 / Impact ─────────────────────────────────────────── */}
        <section
          className={styles.impactSection}
          aria-labelledby="impact-title"
          data-node-id="715:3432"
        >
          <div className={styles.impactText} data-node-id="715:3433">
            <SectionTag>08 — Impact</SectionTag>
            <h2 className={styles.sectionTitle} id="impact-title">
              Results after release
            </h2>
            <Divider />
          </div>

          <div
            className={styles.impactMetrics}
            data-node-id="715:3442"
          >
            {IMPACT_METRICS.map((m) => (
              <div
                key={m.value}
                className={styles.impactCard}
              >
                <span className={styles.impactValue}>{m.value}</span>
                <span className={styles.impactLabel}>{m.label}</span>
              </div>
            ))}
          </div>

          <p className={styles.bodyText} data-node-id="715:3540">
            At 18–20k daily reviews, a 15–17 second reduction per profile
            translates to roughly 75–85 hours of moderator time saved every
            single day — the kind of compounding impact that makes small UX
            decisions strategically significant.
          </p>

          <div
            className={styles.impactHighlights}
            data-node-id="715:3553"
          >
            {IMPACT_HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                className={styles.highlight}
                data-node-id={`715:${3554 + i * 2}`}
              >
                <span className={styles.highlightNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 09 / Reflection ─────────────────────────────────────── */}
        <section
          className={styles.section}
          aria-labelledby="reflection-title"
          data-node-id="715:3466"
        >
          <SectionTag>09 — Reflection</SectionTag>
          <h2 className={styles.sectionTitle} id="reflection-title">
            What I learned
          </h2>
          <Divider />
          <div className={styles.reflectionBody}>
            <p className={styles.bodyText}>
              This project reinforced that high-impact UX work doesn't always
              mean a visual overhaul. The old and new UIs look similar — the
              meaningful changes were about workflow: removing forced sequences
              (click → wait → answer), surfacing the right context at the right
              time, and making corrections frictionless. Small behavioural
              improvements at scale compound into significant business outcomes.
            </p>
            <p className={styles.bodyText}>
              If I were to extend this further, I'd explore keyboard-shortcut-first
              navigation for power users, and predictive pre-fill for the genre
              field based on content signals — reducing question-answering time
              even further.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2025 Sugam Upadhyay</span>
        <a
          className={styles.footerLink}
          href={PROFILE_MODERATION_FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source file in Figma
        </a>
      </footer>
    </div>
  );
}
