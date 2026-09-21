import {
  CaseStudyChips,
  CaseStudyCompare,
  CaseStudyFigure,
  CaseStudyMetrics,
  CaseStudyShell,
} from "../components/caseStudy/CaseStudy";
import { PROFILE_MODERATION_FIGMA_URL } from "../data/profileModerationCaseStudy";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "solution", label: "Solution" },
  { id: "impact", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
];

export const DECISION_CARDS = [
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

export const PROCESS_STEPS = [
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
      deck="Redesign of the content moderation SaaS used by 50+ operations employees daily. Deep user research revealed friction points that were costing the company hundreds of hours per week."
      toc={TOC}
      heroArt={{
        src: "/case-studies/profile-moderation/Content.png",
        alt: "Profile Moderation Tool interface",
      }}
      figmaHref={PROFILE_MODERATION_FIGMA_URL}
    >
      <h2 id="overview">Reducing profile moderation time at Sharechat</h2>
      <p>
        I revamped ShareChat’s internal profile moderation tool used by BPO
        teams to review user profiles on Moj. By restructuring the workflow
        around uninterrupted content review and faster actions, we reduced
        Average Handling Time from 105–110 seconds to approximately 90 seconds
        per profile ans saved 4.3L INR per month.
      </p>
      <CaseStudyMetrics
        items={[
          { num: "Product", lbl: "Enterprise tool · ShareChat" },
          { num: "Role", lbl: "UX Designer" },
          { num: "Users", lbl: "50+ BPO moderators" },
          { num: "2022", lbl: "Year shipped" },
        ]}
      />
      <CaseStudyChips
        items={["UX Research", "Information Architecture", "Wireframing", "Visual Design"]}
      />

      <h2 id="problem">What was slowing moderators down?</h2>
      <p>
      Moderators reviewed profile information, posts and videos before answering questions and taking an action. The average handling time was 105–110 seconds per profile. At 18,000–20,000 daily reviews, even small usability issues created significant operational friction.
      </p>
      <ul>
        <li>
        Video playback was interrupted when moderators moved the cursor towards
        the action panel, preventing them from reviewing content and recording
        decisions in parallel.
            </li>
            <li>
        Key metadata was missing from the review screen, creating information gaps and forcing moderators to make decisions with limited context.
            </li>
            <li>
        The expanded genre list occupied too much screen space, weakened the information hierarchy and pushed other questions below the fold.
            </li>
            <li>
        The Moj Camera indicator had low visibility, making it difficult to identify the content source at a glance.
            </li>
            <li>
        The interface showed only the remaining profiles, not the completed count. Without a clear sense of progress during long shifts, moderators often felt frustrated and demotivated.
            </li>
          </ul>
      <h3>Objective</h3>
      <p>
        Reduce AHT from 105–110 seconds to 90 seconds by minimising interaction
        friction, scrolling and context switching, without overhauling the
        familiar interface or creating a new learning curve for moderators.
      </p>
      <CaseStudyFigure
            src="/case-studies/profile-moderation/Old UI Screenshot.png"
            alt="Annotated breakdown of the old moderation interface showing five friction points"
        caption="Old interface — five friction points mapped from interviews and session recordings"
      />

      <h2 id="approach">Approach</h2>
      <p>
      The redesign started with individual usability issues but the work became more valuable when I connected them to the complete moderation workflow. Interviews and behavioural observation helped me understand where time was being lost. A clearer View-and-Action model then helped turn those findings into a structure the team could build without making the tool unfamiliar to moderators.
      </p>

      <h3 id="approach">Observing the review workflow</h3>
      <p>
      I interviewed BPO moderators and used Microsoft Clarity session recordings to observe how they moved between videos, metadata and questions. This helped me identify recurring friction points and connect them to the complete moderation workflow, without making the tool unfamiliar to existing users.
      </p>
      
      <h3 id="approach">Finding one pattern behind multiple problems</h3>
      <p>
      The five usability issues pointed to one underlying problem, frequent context switching between content review and decision-making. This shifted the focus from isolated UI fixes to improving the end-to-end moderation workflow.ntified a recurring pattern where moderators would move between videos, metadata and questions in a specific sequence. This helped me identify recurring friction points and connect them to the complete moderation workflow, without making the tool unfamiliar to existing users.
      </p>

      <h3 id="approach">Organising the workflow around View and Action</h3>
      <p>
      I mapped the experience around the two activities moderators needed to perform together:
      </p>
      <CaseStudyMetrics
        items={[
          { num: "View", lbl: "Understand the profile, posts and video content" },
          { num: "Action", lbl: "Take a decision based on the content and profile information" },
        ]}
      />
      <p>This became the foundation for the new information architecture. Instead of moving through content and controls as a forced sequence, moderators could keep both parts of the task visible and work between them seamlessly.
      </p>

      <h3 id="approach">Creating a new information architecture</h3>
      <p> The existing interface was already part of the moderator's daily routine. A complete visual overhaul could reduce familiarity and introduce a new learning curve. 
</p>
<p>
I kept the recognisable parts of the tool while changing the structure and interactions that were creating delays. The Senior UX Designer reviewed the key decisions, and I worked with developers during implementation to make sure the intended workflow was carried into the build.
</p>

      <h2 id="solution">solution</h2>
      <p>
      The redesigned moderation tool retained its familiar structure but reorganised the review experience into four focused zones: Profile Information, Video Preview, Questions and History. Each change addressed a specific point of delay while keeping the full review context available on one screen:
      </p>
      <ul>
  <li>
    <strong>Autoplay and parallel interaction: </strong>
     The first video played automatically in an independent panel,
    allowing moderators to answer questions while continuing to
    review the content.
  </li>

  <li>
    <strong>Compact genre selection: </strong>
     A multi-select dropdown replaced the expanded list, freeing
    vertical space and keeping at least three additional questions
    visible above the fold.
  </li>

  <li>
    <strong>Key metadata at the point of decision: </strong>
     MCPP score, 30-day metric, posts, followers, language and profile
    ID were brought into the review view, with a more visible
    Moj Camera indicator.
              </li>

  <li>
    <strong>Progress visibility: </strong>
     Completed and remaining profile counts appeared together,
    giving moderators a clearer view of their output during a shift.
  </li>
</ul>

      <CaseStudyCompare
        layout="vertical"
        afterSrc="/case-studies/profile-moderation/After Screenshot.png"
        beforeSrc="/case-studies/profile-moderation/Before Screenshot.png"
        afterAlt="Redesigned moderation interface — autoplay, full metadata, compact dropdowns, progress bar"
        beforeAlt="Old moderation interface — manual video play, limited metadata"
        afterCaption="Redesigned interface: four panels, autoplay, full metadata, visible Camera icon, Compact genre selection, AHT ~90 seconds."
        beforeCaption="Old interface: single panel, click-to-play, minimal metadata, AHT 105–110 seconds."
      />
<h3 id="solution">Trade off: Improvement without relearning</h3>
<p>A complete interface overhaul could have created a stronger visual change, but it would also have introduced a new learning curve for moderators using the tool every day. I kept the existing mental model and focused the redesign on the interactions creating the most delay. This improved efficiency without requiring the team to relearn the moderation workflow.

</p>

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
        to roughly 75–85 hours of moderator time saved every single day, the
        kind of compounding impact that makes small UX decisions strategically
        significant.
      </p>
      <ul>
        <li>AHT target met</li>
        <li>Cost savings achieved</li>
        <li>Zero additional headcount</li>
      </ul>

      <h2 id="reflection">Reflection</h2>

      <p> 
        <strong>Micro-frictions compound into operational impact:</strong> Interaction delays may seem small at the task level, but across 18,000–20,000 daily reviews, they directly affect throughput and operational cost.
      </p>
      <p>
      <strong>Workflow mattered more than a visual overhaul: </strong> The strongest improvement came from organising content review and decision-making around the moderator’s actual task, not from making the interface look completely different.
      </p>
      <p>
      <strong>Familiarity is part of usability:</strong> Preserving familiar interaction patterns respected the moderator's existing mental model, reduced the adoption barrier and avoided increasing time-to-proficiency.
      </p>
    </CaseStudyShell>
  );
}
