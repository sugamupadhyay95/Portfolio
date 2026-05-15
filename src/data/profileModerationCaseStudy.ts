/** Sections aligned to Figma layer names in `case study 1/layout` (node `656:895`). */

export const PROFILE_MODERATION_FIGMA_URL =
  "https://www.figma.com/design/JoTfdOUxCB2aj3FJo830Xv/Resume---Portfolio?node-id=645-1951";

export type CaseStudySection = {
  id: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
};

const base = "/case-studies/profile-moderation";

export const profileModerationCaseStudySections: CaseStudySection[] = [
  {
    id: "hero",
    heading: "Overview",
    imageSrc: `${base}/section-hero.png`,
    imageAlt:
      "Profile Moderation Tool hero: project context, role, platform, users, and product UI preview.",
  },
  {
    id: "problem",
    heading: "The problem",
    imageSrc: `${base}/section-the-problem.png`,
    imageAlt: "Baseline AHT and friction points slowing moderators down.",
  },
  {
    id: "explain",
    heading: "Problem deep-dive",
    imageSrc: `${base}/section-image-explain.png`,
    imageAlt: "Annotated breakdown of moderation workflow issues.",
  },
  {
    id: "insights",
    heading: "Key insights",
    imageSrc: `${base}/section-info-diagram.png`,
    imageAlt: "Insight diagram across moderator pain points.",
  },
  {
    id: "research",
    heading: "The research",
    imageSrc: `${base}/section-the-research.png`,
    imageAlt: "Research approach, personas, and findings.",
  },
  {
    id: "ia",
    heading: "Information architecture",
    imageSrc: `${base}/section-ia.png`,
    imageAlt: "Information architecture of the moderation experience.",
  },
  {
    id: "decisions",
    heading: "Design decisions",
    imageSrc: `${base}/section-design-decisions.png`,
    imageAlt: "Design decisions and solution rationale.",
  },
  {
    id: "before-after",
    heading: "Before vs after",
    imageSrc: `${base}/section-before-after.png`,
    imageAlt: "Before and after comparison of the moderation interface.",
  },
  {
    id: "process",
    heading: "Process",
    imageSrc: `${base}/section-process.png`,
    imageAlt: "Design and delivery process.",
  },
  {
    id: "closing",
    heading: "Impact & reflection",
    imageSrc: `${base}/section-closing.png`,
    imageAlt: "Impact metrics, outcomes, and project reflection.",
  },
];
