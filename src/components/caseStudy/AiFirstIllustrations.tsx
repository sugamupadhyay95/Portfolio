import styles from "../../pages/AiFirstDesignSystem.module.css";
import { aiFirstDesignSystem } from "../../data/aiFirstDesignSystem";

const STAGES = aiFirstDesignSystem.stages;

function Arrow() {
  return (
    <svg
      className={styles.stageArrow}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

function StageSvg({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg className={styles.ill} viewBox="0 0 200 150" aria-hidden>
        <rect className={styles.acc} x="24" y="20" width="26" height="26" rx="7" />
        <rect className={styles.accT2} x="56" y="20" width="26" height="26" rx="7" />
        <rect className={styles.accT} x="88" y="20" width="26" height="26" rx="7" />
        <text x="130" y="46" fontSize="32" letterSpacing="-1">
          Aa
        </text>
        <rect className={styles.acc} x="24" y="102" width="8" height="10" rx="2" />
        <rect className={styles.acc} x="38" y="92" width="8" height="20" rx="2" />
        <rect className={styles.acc} x="52" y="80" width="8" height="32" rx="2" />
        <path className={styles.oa3} d="M86 112 V96 Q86 80 102 80 H124" />
        <rect className={styles.bar} x="146" y="102" width="34" height="18" rx="4" />
        <rect className={styles.accT2} x="142" y="96" width="34" height="18" rx="4" />
        <rect className={styles.box} x="138" y="90" width="34" height="18" rx="4" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg className={styles.ill} viewBox="0 0 200 150" aria-hidden>
        <rect className={styles.acc} x="24" y="18" width="76" height="28" rx="6" />
        <rect className={styles.onAcc} x="44" y="29" width="36" height="6" rx="3" />
        <rect className={styles.oa} x="109" y="19" width="67" height="26" rx="6" />
        <rect className={styles.acc} x="124" y="29" width="36" height="6" rx="3" />
        <rect className={styles.barM} x="24" y="62" width="30" height="5" rx="2.5" />
        <rect className={styles.box} x="24" y="72" width="152" height="30" rx="6" />
        <rect className={styles.bar} x="34" y="84" width="52" height="6" rx="3" />
        <circle className={styles.acc} cx="30" cy="126" r="5" />
        <circle className={styles.accT2} cx="50" cy="126" r="5" />
        <circle className={styles.oa} cx="70" cy="126" r="4.5" />
        <circle className={styles.bar} cx="90" cy="126" r="5" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg className={styles.ill} viewBox="0 0 200 150" aria-hidden>
        <rect className={styles.box} x="44" y="10" width="112" height="130" rx="8" />
        <rect className={styles.barM} x="58" y="24" width="52" height="8" rx="4" />
        <rect className={styles.bar} x="58" y="36" width="80" height="4" rx="2" />
        <rect className={styles.barM} x="58" y="56" width="24" height="4" rx="2" />
        <rect className={styles.acc} x="92" y="52" width="14" height="12" rx="3" />
        <rect className={styles.accT2} x="110" y="52" width="14" height="12" rx="3" />
        <rect className={styles.oa} x="129" y="53" width="13" height="10" rx="3" />
        <rect className={styles.barM} x="58" y="76" width="24" height="4" rx="2" />
        <circle className={styles.acc} cx="99" cy="78" r="4.5" />
        <circle className={styles.accT2} cx="113" cy="78" r="4.5" />
        <circle className={styles.oa} cx="127" cy="78" r="4" />
        <circle className={styles.bar} cx="141" cy="78" r="4.5" />
        <rect className={styles.barM} x="58" y="96" width="24" height="4" rx="2" />
        <rect className={styles.bar} x="92" y="94" width="52" height="4" rx="2" />
        <rect className={styles.bar} x="92" y="103" width="36" height="4" rx="2" />
        <rect className={styles.barM} x="58" y="120" width="24" height="4" rx="2" />
        <circle className={styles.acc} cx="99" cy="122" r="7" />
        <path className={styles.chk} d="M95.5 122.2l2.6 2.6 5-5.2" />
        <rect className={styles.bar} x="112" y="120" width="30" height="4" rx="2" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg className={styles.ill} viewBox="0 0 200 150" aria-hidden>
        <rect className={styles.box} x="24" y="14" width="152" height="122" rx="10" />
        <rect className={styles.acc} x="38" y="28" width="58" height="24" rx="6" />
        <rect className={styles.onAcc} x="52" y="37" width="30" height="6" rx="3" />
        <path
          className={styles.acc}
          d="M152 30 Q153.6 38.4 162 40 Q153.6 41.6 152 50 Q150.4 41.6 142 40 Q150.4 38.4 152 30 Z"
        />
        <circle className={styles.accT} cx="46" cy="76" r="7" />
        <path className={styles.chkA} d="M42.6 76.2l2.6 2.6 5-5.2" />
        <rect className={styles.barM} x="60" y="73" width="86" height="6" rx="3" />
        <circle className={styles.accT} cx="46" cy="98" r="7" />
        <path className={styles.chkA} d="M42.6 98.2l2.6 2.6 5-5.2" />
        <rect className={styles.barM} x="60" y="95" width="66" height="6" rx="3" />
        <circle className={styles.accT} cx="46" cy="120" r="7" />
        <path className={styles.chkA} d="M42.6 120.2l2.6 2.6 5-5.2" />
        <rect className={styles.barM} x="60" y="117" width="78" height="6" rx="3" />
      </svg>
    );
  }
  return (
    <svg className={styles.ill} viewBox="0 0 200 150" aria-hidden>
      <rect className={styles.box} x="28" y="6" width="144" height="138" rx="10" />
      <rect className={styles.barM} x="42" y="18" width="44" height="7" rx="3.5" />
      <rect className={styles.barM} x="42" y="34" width="22" height="4" rx="2" />
      <rect className={styles.box} x="42" y="41" width="116" height="16" rx="4" />
      <rect className={styles.barM} x="42" y="62" width="22" height="4" rx="2" />
      <rect className={styles.box} x="42" y="69" width="116" height="16" rx="4" />
      <rect className={styles.barM} x="42" y="90" width="22" height="4" rx="2" />
      <rect className={styles.box} x="42" y="97" width="116" height="16" rx="4" />
      <rect className={styles.oa} x="43" y="119" width="40" height="16" rx="4" />
      <rect className={styles.acc} x="91" y="118" width="52" height="18" rx="4" />
      <rect className={styles.onAcc} x="101" y="124" width="32" height="6" rx="3" />
    </svg>
  );
}

export function AiFirstHeroStages() {
  return (
    <ol className={styles.stages} aria-label="The system, built layer by layer">
      {STAGES.map((stage, index) => (
        <li key={stage.name} style={{ ["--i" as string]: index }}>
          <div className={styles.tile}>
            <StageSvg index={index} />
            {index < STAGES.length - 1 ? <Arrow /> : null}
          </div>
          <p className={styles.stageName}>
            <span className={styles.stageNum}>{index + 1}</span>
            {stage.name}
          </p>
          <p className={styles.stageDesc}>{stage.desc}</p>
        </li>
      ))}
    </ol>
  );
}

export function AiFirstTokenRow() {
  return (
    <div className={styles.tokens} role="list">
      <div className={styles.tok} role="listitem">
        <div className={styles.tokGraphic} aria-hidden>
          <span className={styles.dot} />
          <span className={styles.dot} style={{ opacity: 0.65 }} />
          <span className={styles.dot} style={{ opacity: 0.3 }} />
        </div>
        <b>Color</b>
      </div>
      <div className={styles.tok} role="listitem">
        <div className={styles.tokGraphic} aria-hidden>
          <span className={styles.aa}>Aa</span>
        </div>
        <b>Typography</b>
      </div>
      <div className={styles.tok} role="listitem">
        <div className={styles.tokGraphic} aria-hidden>
          <span className={styles.sp} style={{ height: 14 }} />
          <span className={styles.sp} style={{ height: 24 }} />
          <span className={styles.sp} style={{ height: 38 }} />
        </div>
        <b>Spacing</b>
      </div>
      <div className={styles.tok} role="listitem">
        <div className={styles.tokGraphic} aria-hidden>
          <span className={styles.rd} />
        </div>
        <b>Radius</b>
      </div>
      <div className={styles.tok} role="listitem">
        <div className={styles.tokGraphic} aria-hidden>
          <span className={styles.el} />
        </div>
        <b>Elevation</b>
      </div>
    </div>
  );
}

export function AiFirstSkillMap() {
  return (
    <div className={styles.skillmap}>
      <div className={styles.smCol}>
        <div className={styles.smNode}>
          <strong>Button skill</strong>
          <span>Variants, states and structure</span>
        </div>
        <div className={styles.smNode}>
          <strong>Input skill</strong>
          <span>Variants, states and structure</span>
        </div>
      </div>
      <div className={styles.smJoin} aria-hidden>
        <svg
          viewBox="0 0 84 130"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 34 C 34 34, 40 65, 72 65" />
          <path d="M2 96 C 34 96, 40 65, 72 65" />
          <path d="M64 57 L 74 65 L 64 73" />
        </svg>
      </div>
      <div className={styles.smCol}>
        <div className={`${styles.smNode} ${styles.smMain}`}>
          <strong>Form Layout skill</strong>
          <span>Calls the component skills and combines them into a larger UI pattern</span>
        </div>
      </div>
    </div>
  );
}

export function AiFirstSurveyMock() {
  return (
    <figure
      className={styles.mock}
      aria-label="Survey form built from the Input and Button skills"
    >
      <h3 className={styles.mockTitle}>Survey</h3>
      {[
        ["Name", "Full name"],
        ["Phone", "Phone number"],
        ["Email", "you@company.com"],
      ].map(([label, placeholder]) => (
        <div className={styles.mrow} key={label}>
          <div>
            <span className={styles.fieldLabel}>{label}</span>
            <div className={styles.fieldIn}>{placeholder}</div>
          </div>
          <div className={styles.skillTag}>Input skill</div>
        </div>
      ))}
      <div className={styles.mrow}>
        <div>
          <span className={styles.fieldLabel}>Description</span>
          <div className={`${styles.fieldIn} ${styles.fieldTall}`}>Tell us more</div>
        </div>
        <div className={styles.skillTag}>Input skill</div>
      </div>
      <div className={`${styles.mrow} ${styles.mrowLast}`}>
        <div className={styles.mockBtns}>
          <span className={styles.btnSec}>Cancel</span>
          <span className={styles.btnPri}>Send response</span>
        </div>
        <div className={styles.skillTag}>Button skill</div>
      </div>
    </figure>
  );
}
