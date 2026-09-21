import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./CaseStudy.module.css";

export type TocItem = { id: string; label: string };

export function CaseStudyFigure({
  src,
  alt,
  caption,
  lead = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  lead?: boolean;
}) {
  return (
    <figure className={lead ? styles.lead : styles.shot}>
      <div className={styles.figure}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function CaseStudyChips({ items }: { items: string[] }) {
  return (
    <div className={styles.chips}>
      {items.map((chip) => (
        <span key={chip} className={styles.chip}>
          {chip}
        </span>
      ))}
    </div>
  );
}

export function CaseStudyQuote({ children }: { children: ReactNode }) {
  return <blockquote className={styles.quote}>{children}</blockquote>;
}

export function CaseStudyMetrics({
  items,
}: {
  items: { num: string; lbl: string }[];
}) {
  return (
    <div className={styles.metrics}>
      {items.map((item) => (
        <div key={item.lbl} className={styles.metric}>
          <div className={styles.metricNum}>{item.num}</div>
          <div className={styles.metricLbl}>{item.lbl}</div>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeCaption,
  afterCaption,
  layout = "horizontal",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeCaption?: string;
  afterCaption?: string;
  layout?: "horizontal" | "vertical";
}) {
  const after = (
    <figure>
      <div className={styles.figure}>
        <img src={afterSrc} alt={afterAlt} loading="lazy" />
      </div>
      {afterCaption ? (
        <figcaption className={styles.compareCaption}>{afterCaption}</figcaption>
      ) : (
        <figcaption className={styles.compareLabel}>After</figcaption>
      )}
    </figure>
  );

  const before = (
    <figure>
      <div className={styles.figure}>
        <img src={beforeSrc} alt={beforeAlt} loading="lazy" />
      </div>
      {beforeCaption ? (
        <figcaption className={styles.compareCaption}>{beforeCaption}</figcaption>
      ) : (
        <figcaption className={styles.compareLabel}>Before</figcaption>
      )}
    </figure>
  );

  return (
    <div
      className={`${styles.compare} ${layout === "vertical" ? styles.compareVertical : ""}`}
    >
      {layout === "vertical" ? (
        <>
          {after}
          {before}
        </>
      ) : (
        <>
          {before}
          {after}
        </>
      )}
    </div>
  );
}

function DefaultCaseStudyHero({
  title,
  deck,
  heroArt,
}: {
  title: string;
  deck: string;
  heroArt?: { src: string; alt: string };
}) {
  return (
    <>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroDesc}>{deck}</p>
      </div>
      {heroArt ? (
        <div className={styles.heroArt} aria-hidden>
          <div className={styles.device}>
            <div className={styles.deviceScreen}>
              <img src={heroArt.src} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CaseStudyShell({
  title,
  deck,
  toc,
  heroArt,
  heroContent,
  figmaHref,
  children,
}: {
  title: string;
  deck?: string;
  toc: TocItem[];
  heroArt?: { src: string; alt: string };
  heroContent?: ReactNode;
  figmaHref?: string;
  children: ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const [activeId, setActiveId] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    document.documentElement.classList.add("case-study-page");
    return () => document.documentElement.classList.remove("case-study-page");
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      setBarVisible(window.scrollY > window.innerHeight * 0.55);

      const headings = toc
        .map((t) => document.getElementById(t.id))
        .filter(Boolean) as HTMLElement[];
      let current = toc[0]?.id ?? "";
      for (const el of headings) {
        if (el.getBoundingClientRect().top < 140) current = el.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  return (
    <div className={styles.page}>
      <header className={`${styles.topbar} ${barVisible ? styles.topbarVisible : ""}`}>
        <Link className={styles.back} to="/#work" aria-label="Back to work">
          ←
        </Link>
        <p className={styles.topbarTitle}>{title.replace(/\n/g, " ")}</p>
        <div className={styles.progress} aria-hidden>
          <span style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <article className={styles.sheet}>
        <Link className={styles.close} to="/#work" aria-label="Close case study">
          ×
        </Link>

        <header className={`${styles.hero} ${heroContent ? styles.heroCustom : ""}`}>
          {heroContent ?? (
            <DefaultCaseStudyHero
              title={title}
              deck={deck ?? ""}
              heroArt={heroArt}
            />
          )}
        </header>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="On this page">
            <ul>
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={activeId === item.id ? styles.tocActive : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.main}>
            {children}
            {figmaHref ? (
              <p className={styles.figmaLine}>
                <a href={figmaHref} target="_blank" rel="noopener noreferrer">
                  View in Figma →
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </article>
    </div>
  );
}
