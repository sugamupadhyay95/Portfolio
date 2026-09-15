import {
  CaseStudyChips,
  CaseStudyCompare,
  CaseStudyFigure,
  CaseStudyMetrics,
  CaseStudyQuote,
  CaseStudyShell,
} from "../components/caseStudy/CaseStudy";
import { PROFILE_MODERATION_FIGMA_URL } from "../data/profileModerationCaseStudy";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Decisions" },
  { id: "before-after", label: "Comparison" },
  { id: "process", label: "Process" },
  { id: "impact", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
];

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

export function ProfileModerationCaseStudy() {
  return (
    <CaseStudyShell
      title={"Profile\nModeration\nTool"}
      deck="A full redesign of the content moderation SaaS used by 50+ operations employees daily. Deep user research revealed friction points that were costing the company hundreds of hours per week."
      toc={TOC}
      heroArt={{
        src: "/case-studies/profile-moderation/Content.png",
        alt: "Profile Moderation Tool interface",
      }}
      leadFigure={{
        src: "/case-studies/profile-moderation/After Screenshot.png",
        alt: "Redesigned four-panel moderation interface",
      }}
      figmaHref={PROFILE_MODERATION_FIGMA_URL}
    >
      <h2 id="overview">Overview</h2>
      <p>
        The Profile Moderation Tool is an internal web app used by BPO teams to
        review user-generated profiles on Moj, India's short-video platform.
        Moderators assess profiles across multiple dimensions, authenticity,
        content type, upload frequency, engagement quality, and policy
        compliance. With 18–20k profiles reviewed daily, even small
        inefficiencies at the individual level compound into significant
        operational costs.
      </p>
      <CaseStudyMetrics
        items={[
          { num: "Product", lbl: "Internal web app · ShareChat" },
          { num: "Role", lbl: "Product Designer" },
          { num: "Users", lbl: "50+ BPO moderators" },
          { num: "2024", lbl: "Year shipped" },
        ]}
      />
      <CaseStudyChips
        items={["Figma", "Clarity", "Research", "Wireframing", "Prototyping"]}
      />

      <h2 id="problem">What was slowing moderators down?</h2>
      <p>
        The baseline AHT (Average Handle Time) sat at 105–110 seconds per
        profile. Through interviews and Clarity session recordings, four
        friction points emerged:
      </p>
      <ul>
        <li>
          Videos required a manual click to play, and hovering to watch blocked
          all other interactions — moderators couldn't read metadata or answer
          questions while previewing content.
        </li>
        <li>
          Key profile metadata was missing from the review view, forcing
          moderators to mentally fill in gaps or navigate away.
        </li>
        <li>
          The genre selection question used a full expanded list that consumed
          excessive screen real estate, pushing other questions out of view.
        </li>
        <li>
          The Moj Camera icon was not visible, making it harder to identify
          camera-originated content at a glance.
        </li>
        <li>
          No visibility into completed count — moderators could only see
          remaining profiles, with no sense of progress or daily output. This
          made it hard to self-pace or feel accomplishment during long shifts.
        </li>
      </ul>
      <CaseStudyFigure
        src="/case-studies/profile-moderation/Old UI Screenshot.png"
        alt="Annotated breakdown of the old moderation interface showing five friction points"
        caption="Old interface — five friction points mapped from interviews and session recordings"
      />

      <h2 id="research">Understanding the moderator</h2>
      <p>
        I interviewed 2–3 members of the BPO team and integrated Microsoft
        Clarity to observe real sessions. This helped map exactly where time was
        being lost and validate which pain points had the highest frequency.
      </p>
      <CaseStudyFigure
        src="/case-studies/profile-moderation/Persona Card.png"
        alt="Persona card — BPO content moderator working on Moj profiles"
      />
      <CaseStudyQuote>
        “Every extra click or scroll I have to do breaks my flow. When videos
        don't autoplay, I lose my rhythm and it takes a second to recalibrate
        for each profile.”
      </CaseStudyQuote>

      <h2 id="architecture">Restructuring the four-panel layout</h2>
      <p>
        The redesign organised the screen into four distinct zones, each with a
        single clear purpose: Profile Info, Video Preview, Questions, and
        History.
      </p>
      <CaseStudyFigure
        src="/case-studies/profile-moderation/div.case-visual.png"
        alt="Four-panel information architecture diagram"
        caption="Each zone has one job — watch on the left, answer on the right, at the same time."
      />
      <p>
        This separation keeps the moderator's attention in the right place at
        the right time — they can watch a video on the left while answering
        questions on the right simultaneously, which was impossible in the
        original layout.
      </p>

      <h2 id="decisions">Four changes, one goal</h2>
      <p>
        The redesign organised the screen into four distinct zones, each with a
        single clear purpose:
      </p>
      {DECISION_CARDS.map((card) => (
        <div key={card.num}>
          <h3>
            {card.num} — {card.title}
          </h3>
          <p>{card.desc}</p>
          <p>
            <strong>{card.impact}</strong>
          </p>
          <CaseStudyCompare
            beforeSrc={card.beforeSrc}
            afterSrc={card.afterSrc}
            beforeAlt={`${card.title} — before`}
            afterAlt={`${card.title} — after`}
          />
        </div>
      ))}

      <h2 id="before-after">Key UI changes at a glance</h2>
      <CaseStudyCompare
        beforeSrc="/case-studies/profile-moderation/Before Screenshot.png"
        afterSrc="/case-studies/profile-moderation/After Screenshot.png"
        beforeAlt="Old moderation interface — manual video play, limited metadata"
        afterAlt="Redesigned moderation interface — autoplay, full metadata, compact dropdowns, progress bar"
      />
      <p>
        Old interface: single panel, click-to-play, minimal metadata, AHT
        105–110 seconds. Redesigned interface: four panels, autoplay, full
        metadata, Camera icon, AHT ~90 seconds.
      </p>

      <h2 id="process">How it came together</h2>
      <ol>
        {PROCESS_STEPS.map((step) => (
          <li key={step.title}>
            <strong>{step.title}.</strong> {step.desc}
          </li>
        ))}
      </ol>

      <h2 id="impact">Results after release</h2>
      <CaseStudyMetrics
        items={[
          { num: "~17s", lbl: "Reduction in AHT per profile (105–110s → ~90s)" },
          { num: "₹4.3L", lbl: "Monthly cost savings from improved throughput" },
          { num: "18–20k", lbl: "Profiles reviewed daily across 56 moderators" },
        ]}
      />
      <p>
        At 18–20k daily reviews, a 15–17 second reduction per profile translates
        to roughly 75–85 hours of moderator time saved every single day — the
        kind of compounding impact that makes small UX decisions strategically
        significant.
      </p>
      <ul>
        <li>AHT target met</li>
        <li>Cost savings achieved</li>
        <li>Zero additional headcount</li>
      </ul>

      <h2 id="reflection">What I learned</h2>
      <p>
        This project reinforced that high-impact UX work doesn't always mean a
        visual overhaul. The old and new UIs look similar — the meaningful
        changes were about workflow: removing forced sequences (click → wait →
        answer), surfacing the right context at the right time, and making
        corrections frictionless. Small behavioural improvements at scale
        compound into significant business outcomes.
      </p>
      <p>
        If I were to extend this further, I'd explore keyboard-shortcut-first
        navigation for power users, and predictive pre-fill for the genre field
        based on content signals — reducing question-answering time even
        further.
      </p>
    </CaseStudyShell>
  );
}
