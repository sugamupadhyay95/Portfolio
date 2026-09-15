import { SiteHeader } from "../components/SiteHeader";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/ui/Reveal";
import { useTheme } from "../theme/ThemeProvider";
import tokens from "../tokens/template.json";
import styles from "./StyleGuide.module.css";

const SPACING = tokens.spacing;

const COLOR_KEYS = [
  ["bg", "Background"],
  ["surface", "Surface"],
  ["surface-2", "Surface 2"],
  ["border", "Border"],
  ["text", "Text"],
  ["text-muted", "Muted"],
  ["primary", "Primary"],
  ["on-primary", "On primary"],
  ["light-pink", "Pink"],
] as const;

export function StyleGuide() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={`${styles.main} container`}>
        <header className={styles.hero}>
          <p className="eyebrow">Internal</p>
          <h1 className="display-title">Style guide</h1>
          <p className="head-sub">
            Spacing, type, buttons, navigation, and motion for the personal
            site template. Switch modes to inspect both themes.
          </p>
          <div className={styles.modeRow}>
            <Button
              variant={theme === "dark" ? "primary" : "ghost"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </Button>
            <Button
              variant={theme === "light" ? "primary" : "ghost"}
              onClick={() => setTheme("light")}
            >
              Light
            </Button>
          </div>
        </header>

        <section className={styles.block}>
          <h2>Color</h2>
          <div className={styles.swatches}>
            {COLOR_KEYS.map(([token, label]) => (
              <div key={token} className={styles.swatch}>
                <span
                  className={styles.chip}
                  style={{ background: `var(--${token})` }}
                />
                <strong>{label}</strong>
                <code>--{token}</code>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h2>Spacing</h2>
          <div className={styles.spaceList}>
            {SPACING.map((n) => (
              <div key={n} className={styles.spaceRow}>
                <span>{n}px</span>
                <i style={{ width: n }} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.block}>
          <h2>Typography</h2>
          <p className="eyebrow">Eyebrow / mono label</p>
          <h3 className="display-title">Display heading</h3>
          <p className="head-sub" style={{ marginLeft: 0, textAlign: "left" }}>
            Serif lede — research-led product design, 1.12rem, weight 300.
          </p>
          <p className={styles.bodySample}>
            Body copy uses Helvetica Neue at 16px / 1.6. Section gap is 120px;
            page gutter is 32px; max width 1320px.
          </p>
        </section>

        <section className={styles.block}>
          <h2>Buttons</h2>
          <div className={styles.modeRow}>
            <Button>Primary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section className={styles.block}>
          <h2>Navigation</h2>
          <p className={styles.bodySample}>
            The header is fixed. On viewports wider than 860px, links sit in a
            centered frosted pill. Below that, a hamburger opens the same links
            plus the theme toggle. Hover and active states use primary.
          </p>
        </section>

        <section className={styles.block}>
          <h2>Motion</h2>
          <p className={styles.bodySample}>
            Easing <code>cubic-bezier(0.22, 1, 0.36, 1)</code>. Buttons lift 1px
            on hover. Reveal fades up 30px over 750ms.
          </p>
          <Reveal>
            <div className={styles.motionCard}>Scroll-reveal sample</div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
