import {
  CaseStudyChips,
  CaseStudyFigure,
  CaseStudyMetrics,
  CaseStudyShell,
} from "../components/caseStudy/CaseStudy";
import {
  GIFTBOX_FIGMA_URL,
  giftboxCaseStudy,
} from "../data/giftboxCaseStudy";
import styles from "./GiftboxCaseStudy.module.css";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "brief", label: "Background" },
  { id: "core-decision", label: "Approach" },
  { id: "screens", label: "Solution" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
];

export function GiftboxCaseStudy() {
  const {
    description,
    metrics,
    techChips,
    heroImage,
    brief,
    coreDecision,
    screens,
    outcomes,
    reflection,
  } = giftboxCaseStudy;

  return (
    <CaseStudyShell
      title={"Corporate\ngifting\nplatform"}
      deck={description}
      toc={TOC}
      heroArt={{ src: heroImage.src, alt: heroImage.alt }}
      figmaHref={GIFTBOX_FIGMA_URL}
    >
      <h2 id="overview">Overview</h2>
      <p>
        Giftbox helps businesses discover products, curate multi-brand gifts,
        and request vendor quotes in one place.
      </p>
      <p>
        I designed the platform from ideation to prototype for RazeHQ, shaping
        the user flows, visual direction, high-fidelity UI, and design system
        over six weeks. The core challenge was adapting familiar ecommerce
        patterns to a B2B purchase journey where quantities, customisation, and
        negotiation influence the final price.
      </p>
      <CaseStudyMetrics
        items={metrics.map((item) => ({
          num: item.value,
          lbl: item.key,
        }))}
      />
      <CaseStudyChips items={[...techChips]} />

      <h2 id="brief">{brief.title}</h2>
      <p>{brief.subheading}</p>
      {brief.problems.map((problem) => (
        <div key={problem.num}>
          <h3>
            {problem.num} — {problem.title}
          </h3>
          <p>{problem.desc}</p>
        </div>
      ))}

      <h2 id="core-decision">{coreDecision.title}</h2>
      <p>{coreDecision.intro}</p>
      <h3>{coreDecision.subheading}</h3>
      {coreDecision.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p>{coreDecision.prioritiesIntro}</p>
      <ul>
        {coreDecision.priorities.map((item) => (
          <li key={item.title}>
            <strong>{item.title}:</strong> {item.desc}
          </li>
        ))}
      </ul>
      {coreDecision.closing.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <h3>{coreDecision.consistencyHeading}</h3>
      <p>{coreDecision.consistencyBody}</p>

      <h2 id="screens">{screens.title}</h2>
      {screens.items.map((screen) => (
        <div key={screen.title} className={styles.solutionItem}>
          <h3>{screen.title}</h3>
          <p>{screen.body}</p>
          {screen.images.map((img) => (
            <CaseStudyFigure key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>
      ))}

      <h2 id="outcomes">{outcomes.title}</h2>
      {outcomes.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2 id="reflection">{reflection.title}</h2>
      {reflection.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </CaseStudyShell>
  );
}
