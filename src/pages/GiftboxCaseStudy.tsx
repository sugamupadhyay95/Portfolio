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

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "brief", label: "Background" },
  { id: "core-decision", label: "Approach" },
  { id: "screens", label: "Solution" },
  { id: "design-system", label: "System" },
  { id: "reflection", label: "Reflection" },
  { id: "gallery", label: "The work" },
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
    designSystem,
    reflection,
    gallery,
  } = giftboxCaseStudy;

  return (
    <CaseStudyShell
      title={"Corporate\ngifting has\na trust\nproblem"}
      deck={description}
      toc={TOC}
      heroArt={{ src: heroImage.src, alt: heroImage.alt }}
      leadFigure={{ src: heroImage.src, alt: heroImage.alt }}
      figmaHref={GIFTBOX_FIGMA_URL}
    >
      <h2 id="overview">Overview</h2>
      <p>
        Corporate gifting has a trust problem. HR managers spend days
        coordinating bulk gifts across vendors they've never met, for prices
        that aren't fixed, on platforms designed for retail. Giftbox was built
        to fix that.
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
      <p>{brief.competitorNote}</p>

      <h2 id="core-decision">{coreDecision.title}</h2>
      {coreDecision.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <CaseStudyFigure
        src={coreDecision.image.src}
        alt={coreDecision.image.alt}
        caption="Quote-first cart — range pricing and a Request Quotes CTA instead of checkout."
      />

      <h2 id="screens">{screens.title}</h2>
      {screens.items.map((screen) => (
        <div key={screen.num}>
          <h3>
            {screen.num} — {screen.title}
          </h3>
          <p>
            <strong>{screen.subhead}</strong>
          </p>
          <p>{screen.body}</p>
          <ul>
            {screen.callouts.map((callout) => (
              <li key={callout.id}>
                <strong>
                  {callout.id}. {callout.label}.
                </strong>{" "}
                {callout.desc}
              </li>
            ))}
          </ul>
          {screen.images.map((img) => (
            <CaseStudyFigure key={img.src} src={img.src} alt={img.alt} />
          ))}
        </div>
      ))}

      <h2 id="design-system">{designSystem.title}</h2>
      {designSystem.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <CaseStudyFigure
        src={designSystem.image.src}
        alt={designSystem.image.alt}
      />

      <h2 id="reflection">{reflection.title}</h2>
      {reflection.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2 id="gallery">{gallery.title}</h2>
      {gallery.images.map((img) => (
        <CaseStudyFigure key={img.src} src={img.src} alt={img.alt} />
      ))}
    </CaseStudyShell>
  );
}
