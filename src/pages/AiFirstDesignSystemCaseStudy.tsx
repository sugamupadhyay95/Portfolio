import { useEffect } from "react";
import {
  CaseStudyQuote,
  CaseStudyShell,
} from "../components/caseStudy/CaseStudy";
import {
  AiFirstHeroStages,
  AiFirstSkillMap,
  AiFirstSurveyMock,
  AiFirstTokenRow,
} from "../components/caseStudy/AiFirstIllustrations";
import { aiFirstDesignSystem as copy } from "../data/aiFirstDesignSystem";
import styles from "./AiFirstDesignSystem.module.css";

const TOC = [
  { id: "summary", label: "Summary" },
  { id: "problem", label: "Problem" },
  { id: "foundation", label: "Foundation" },
  { id: "skills", label: "AI skills" },
  { id: "test", label: "Test" },
  { id: "value", label: "Value" },
  { id: "next", label: "Next" },
];

export function AiFirstDesignSystemCaseStudy() {
  useEffect(() => {
    const previous = document.title;
    document.title = "AI-first design system — Sugam Upadhyay";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <CaseStudyShell
      title={copy.title}
      toc={TOC}
      heroContent={
        <div className={styles.pageHero}>
          <div className={styles.pageHeroInner}>
            <h1 className={styles.pageHeroTitle}>{copy.title}</h1>
            <div className={styles.pageHeroRight}>
              <AiFirstHeroStages />
              <p className={styles.pageHeroLede}>{copy.deck}</p>
            </div>
          </div>
          <dl className={styles.heroMeta}>
            {copy.meta.map((item) => (
              <div key={item.lbl}>
                <dt>{item.lbl}</dt>
                <dd>{item.num}</dd>
              </div>
            ))}
          </dl>
        </div>
      }
    >
      <h2 id="summary">Summary</h2>
      <dl className={styles.brief}>
        {copy.summary.map((row) => (
          <div className={styles.briefRow} key={row.dt}>
            <dt>{row.dt}</dt>
            <dd>{row.dd}</dd>
          </div>
        ))}
      </dl>

      <h2 id="problem">The setup problem</h2>
      <p>{copy.setup.intro}</p>
      <div className={styles.chain} aria-label="Repeated setup steps">
        {copy.setup.chain.map((step, index) => (
          <span key={step}>
            <span className={styles.chainStep}>{step}</span>
            {index < copy.setup.chain.length - 1 ? (
              <span className={styles.chainArrow}> → </span>
            ) : null}
          </span>
        ))}
      </div>
      <p>{copy.setup.after}</p>
      <CaseStudyQuote>{copy.setup.question}</CaseStudyQuote>

      <h2 id="foundation">System foundation</h2>
      <h3>Tokens first</h3>
      <p>{copy.foundation.tokensIntro}</p>
      <div className={styles.bodyIll}>
        <AiFirstTokenRow />
      </div>
      <h3>Button as a stress test</h3>
      <p>{copy.foundation.button}</p>
      <h3>Growing around real product needs</h3>
      <p>{copy.foundation.growing}</p>
      <ul className={styles.compgrid}>
        {copy.foundation.components.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className={styles.caption}>{copy.foundation.caption}</p>

      <h2 id="skills">Making the system usable by AI</h2>
      <p>{copy.skills.intro}</p>
      <p className={styles.docband}>
        <strong>Documentation skill.</strong> Generates consistent documentation
        for any component: variants, states, usage, behaviour and accessibility.
      </p>
      <div className={styles.bodyIll}>
        <AiFirstSkillMap />
      </div>
      {copy.skills.afterMap.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <h2 id="test">End-to-end test</h2>
      <p>{copy.test.intro}</p>
      <div className={styles.shift}>
        <span className={styles.shiftFrom}>{copy.test.from}</span>
        <p className={styles.shiftTo}>{copy.test.to}</p>
      </div>
      <div className={styles.bodyIll}>
        <AiFirstSurveyMock />
      </div>
      <p className={styles.caption}>{copy.test.caption}</p>
      <p className={styles.callout}>
        <strong>The key validation.</strong> The workflow reused the existing
        Input and Button logic instead of generating new components. The new
        interface kept the same component rules and visual language.
      </p>

      <h2 id="value">What the system changes</h2>
      <p>{copy.value.intro}</p>
      <div className={styles.split}>
        <div>
          <h3 className={styles.splitMuted}>Handled by the system</h3>
          <ul className={styles.splitList}>
            {copy.value.system.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Left for design time</h3>
          <ul className={styles.splitList}>
            {copy.value.design.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.closeLine}>
        {copy.value.closeLead}
        <span className={styles.closeMuted}>{copy.value.closeRest}</span>
      </p>

      <h2 id="next">Next iteration</h2>
      {copy.next.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </CaseStudyShell>
  );
}
