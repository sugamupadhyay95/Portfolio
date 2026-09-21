import {
  useCallback,
  useRef,
  useState,
  type PointerEvent,
  type ReactNode,
} from "react";
import styles from "./SkillDeck.module.css";

export type SkillCard = {
  area: string;
  accent: string;
  skills: string;
  tools: string;
  glow: string;
  art: ReactNode;
};

export type SkillDeckProps = {
  cards?: SkillCard[];
};

const STACK = [
  { transform: "translateY(0) scale(1) rotate(0deg)", zIndex: 60 },
  { transform: "translateY(16px) scale(0.96) rotate(-2.5deg)", zIndex: 50 },
  { transform: "translateY(28px) scale(0.92) rotate(2deg)", zIndex: 40 },
] as const;

function ResearchArt() {
  return (
    <svg viewBox="0 0 300 150" aria-hidden className={styles.art}>
      <circle className={styles.ring} cx="150" cy="75" r="38" />
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const x = 150 + Math.cos(angle) * 58;
        const y = 75 + Math.sin(angle) * 52;
        return (
          <g key={i}>
            <line className={styles.dash} x1="150" y1="75" x2={x} y2={y} />
            <circle
              className={styles.pulse}
              style={{ animationDelay: `${i * 0.22}s` }}
              cx={x}
              cy={y}
              r="5"
            />
          </g>
        );
      })}
    </svg>
  );
}

function DesignArt() {
  return (
    <svg viewBox="0 0 300 150" aria-hidden className={styles.art}>
      <rect
        className={styles.bob}
        style={{ animationDelay: "0s" }}
        x="58"
        y="38"
        width="92"
        height="72"
        rx="14"
      />
      <rect
        className={styles.bob}
        style={{ animationDelay: "-1.1s" }}
        x="104"
        y="28"
        width="92"
        height="72"
        rx="14"
      />
      <rect
        className={styles.bob}
        style={{ animationDelay: "-2.2s" }}
        x="150"
        y="44"
        width="92"
        height="72"
        rx="14"
      />
    </svg>
  );
}

function AnalyticsArt() {
  return (
    <svg viewBox="0 0 300 150" aria-hidden className={styles.art}>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          className={styles.rise}
          style={{ animationDelay: `${i * 0.18}s` }}
          x={86 + i * 34}
          y="36"
          width="18"
          height="88"
          rx="3"
        />
      ))}
    </svg>
  );
}

const DEFAULT_CARDS: SkillCard[] = [
  {
    area: "Research",
    accent: "var(--chip-research-text)",
    skills:
      "User Research · User Interviews · User Flows · Journey Mapping · Usability Testing",
    tools: "Notion",
    glow: "radial-gradient(ellipse at 50% 42%, color-mix(in srgb, var(--chip-research-text) 42%, transparent), transparent 72%)",
    art: <ResearchArt />,
  },
  {
    area: "Design",
    accent: "var(--chip-wireframing-text)",
    skills:
      "Interaction Design · Wireframing · Prototyping · SaaS Design · Design Systems",
    tools: "Figma · Adobe CC · HubSpot · Claude · Cursor · Lovable · Coding Basics",
    glow: "radial-gradient(ellipse at 50% 42%, color-mix(in srgb, var(--chip-wireframing-text) 42%, transparent), transparent 72%)",
    art: <DesignArt />,
  },
  {
    area: "Analytics",
    accent: "var(--chip-prototyping-text)",
    skills: "A/B Testing · User Behaviour Analysis · Conversion Optimisation",
    tools: "Microsoft Clarity",
    glow: "radial-gradient(ellipse at 50% 42%, color-mix(in srgb, var(--chip-prototyping-text) 42%, transparent), transparent 72%)",
    art: <AnalyticsArt />,
  },
];

export default function SkillDeck({ cards = DEFAULT_CARDS }: SkillDeckProps) {
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const dragging = useRef(false);
  const startX = useRef(0);
  const lastDx = useRef(0);
  const busy = useRef(false);

  const next = useCallback(() => {
    setOrder((o) => [...o.slice(1), o[0]]);
  }, []);

  const prev = useCallback(() => {
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (busy.current) return;
    dragging.current = true;
    startX.current = e.clientX;
    lastDx.current = 0;
    e.currentTarget.style.transition = "none";
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - startX.current;
    lastDx.current = dx;
    e.currentTarget.style.transform = `translateX(${dx}px) rotate(${dx / 18}deg)`;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    dragging.current = false;
    const dx = lastDx.current;
    const el = e.currentTarget;

    const finish = (fn: () => void) => {
      busy.current = true;
      window.setTimeout(() => {
        el.style.transition = "";
        el.style.transform = "";
        el.style.opacity = "";
        fn();
        busy.current = false;
      }, 260);
    };

    if (Math.abs(dx) < 6) {
      el.style.transition = "";
      el.style.transform = "";
      next();
      return;
    }

    if (dx < -60) {
      el.style.transition = "transform 260ms ease, opacity 260ms ease";
      el.style.transform = "translateX(-500px) rotate(-16deg)";
      el.style.opacity = "0";
      finish(next);
      return;
    }

    if (dx > 60) {
      el.style.transition = "transform 260ms ease, opacity 260ms ease";
      el.style.transform = "translateX(500px) rotate(16deg)";
      el.style.opacity = "0";
      finish(prev);
      return;
    }

    el.style.transition = "";
    el.style.transform = "";
  };

  return (
    <div className={styles.deck}>
      <div className={styles.stage}>
        {cards.map((card, i) => {
          const pos = order.indexOf(i);
          const stack = STACK[Math.min(Math.max(pos, 0), STACK.length - 1)];
          const front = pos === 0;
          return (
            <div
              key={card.area}
              className={`${styles.card} ${front ? styles.front : ""}`}
              style={{
                zIndex: stack.zIndex,
                transform: stack.transform,
                pointerEvents: front ? "auto" : "none",
                ["--accent" as string]: card.accent,
              }}
              onPointerDown={front ? onPointerDown : undefined}
              onPointerMove={front ? onPointerMove : undefined}
              onPointerUp={front ? onPointerUp : undefined}
              onPointerCancel={front ? onPointerUp : undefined}
            >
              <div className={styles.illu}>
                <div
                  className={styles.glow}
                  style={{ background: card.glow }}
                />
                {card.art}
                <span className={styles.grain} aria-hidden />
              </div>
              <div className={styles.panel}>
                <span className={styles.stamp} aria-hidden />
                <h4 className={styles.area}>{card.area}</h4>
                <p className={styles.label}>Skills</p>
                <p className={styles.value}>{card.skills}</p>
                <p className={styles.label}>Tools</p>
                <p className={styles.value}>{card.tools}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.hint}>← DRAG NEXT · TAP NEXT · DRAG PREVIOUS →</p>
    </div>
  );
}
