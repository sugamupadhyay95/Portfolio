import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import {
  GIFTBOX_FIGMA_URL,
  giftboxCaseStudy,
} from "../data/giftboxCaseStudy";
import base from "./ProfileModerationCaseStudy.module.css";
import styles from "./GiftboxCaseStudy.module.css";

function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className={base.sectionTag}>
      <span className={base.tagAccent} />
      <span>{children}</span>
    </div>
  );
}

function Divider() {
  return <div className={base.divider} />;
}

function ImagePlaceholder({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <div className={base.imgWrap}>
      <img
        src={src}
        alt={alt}
        className={className ?? base.sectionImg}
        loading={loading}
        decoding="async"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          (e.currentTarget.parentElement as HTMLElement).setAttribute(
            "data-placeholder",
            alt
          );
        }}
      />
    </div>
  );
}

export function GiftboxCaseStudy() {
  const {
    breadcrumb,
    tag,
    title,
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
    <div className={base.page}>
      <SiteHeader />

      <div className={base.pageChrome}>
        <nav className={base.breadcrumb} aria-label="Breadcrumb">
          <span className={base.accentBar} aria-hidden="true" />
          <Link to="/#work">Selected Work</Link>
          <span className={base.breadcrumbSep} aria-hidden="true">
            /
          </span>
          <span>{breadcrumb}</span>
        </nav>
        <Link className={base.backLink} to="/">
          ← Back to home
        </Link>
      </div>

      <main className={base.main}>
        <div className={base.pageTitleRow}>
          <h1 className={base.pageTitle}>Case Studies</h1>
        </div>

        {/* Hero */}
        <section className={base.heroSection} aria-labelledby="hero-title">
          <div className={base.heroLeft}>
            <div className={base.heroText}>
              <SectionTag>{tag}</SectionTag>
              <h2 className={base.caseTitle} id="hero-title">
                {title}
              </h2>
              <p className={base.caseDesc}>{description}</p>
              <div className={base.caseMetrics}>
                {metrics.map((item) => (
                  <div key={item.key} className={base.metricItem}>
                    <span className={base.metricKey}>{item.key}</span>
                    <span className={base.metricVal}>{item.value}</span>
                  </div>
                ))}
              </div>
              <a
                className={base.ctaBtn}
                href={GIFTBOX_FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Figma →
              </a>
            </div>

            <div className={base.techChips} aria-label="Skills and tools">
              {techChips.map((chip) => (
                <span key={chip} className={base.chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className={base.heroRight}>
            <ImagePlaceholder
              src={heroImage.src}
              alt={heroImage.alt}
              className={base.heroImg}
              loading="eager"
            />
          </div>
        </section>

        {/* 01 — The Brief */}
        <section
          className={`${base.section} ${base.sectionNoDivider}`}
          aria-labelledby="brief-title"
        >
          <SectionTag>{brief.sectionTag}</SectionTag>
          <h2 className={base.sectionTitle} id="brief-title">
            {brief.title}
          </h2>
          <Divider />
          <p className={base.bodyText}>{brief.subheading}</p>
          <div className={styles.problemCards} role="list">
            {brief.problems.map((problem) => (
              <article key={problem.num} className={styles.problemCard} role="listitem">
                <span className={styles.problemCardNum}>{problem.num}</span>
                <h3 className={styles.problemCardTitle}>{problem.title}</h3>
                <p className={styles.problemCardDesc}>{problem.desc}</p>
              </article>
            ))}
          </div>
          <p className={styles.competitorNote}>{brief.competitorNote}</p>
        </section>

        {/* 02 — Core UX Decision */}
        <section
          className={styles.coreDecisionSection}
          aria-labelledby="core-decision-title"
        >
          <div className={styles.coreDecisionText}>
            <SectionTag>{coreDecision.sectionTag}</SectionTag>
            <h2 className={base.sectionTitle} id="core-decision-title">
              {coreDecision.title}
            </h2>
            <Divider />
            <div className={styles.coreDecisionBody}>
              {coreDecision.body.map((paragraph, i) => (
                <p key={i} className={base.bodyText}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            src={coreDecision.image.src}
            alt={coreDecision.image.alt}
          />
        </section>

        {/* 03 — The Screens */}
        <section
          className={styles.screensSection}
          aria-labelledby="screens-title"
        >
          <div className={styles.screensIntro}>
            <SectionTag>{screens.sectionTag}</SectionTag>
            <h2 className={base.sectionTitle} id="screens-title">
              {screens.title}
            </h2>
            <Divider />
          </div>

          {screens.items.map((screen) => (
            <article key={screen.num} className={styles.screenBlock}>
              <div className={styles.screenHeader}>
                <span className={styles.screenNum}>{screen.num}</span>
                <h3 className={styles.screenTitle}>{screen.title}</h3>
              </div>

              <div className={styles.screenContent}>
                <div className={styles.screenTextCol}>
                  <p className={styles.screenSubhead}>{screen.subhead}</p>
                  <p className={base.bodyText}>{screen.body}</p>
                  <ul className={styles.calloutList} aria-label={`${screen.title} annotations`}>
                    {screen.callouts.map((callout) => (
                      <li key={callout.id} className={styles.calloutItem}>
                        <span className={styles.calloutId}>{callout.id}</span>
                        <div className={styles.calloutBody}>
                          <span className={styles.calloutLabel}>{callout.label}</span>
                          <span className={styles.calloutDesc}>{callout.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.screenImgCol}>
                  {screen.images.length > 1 ? (
                    <div className={styles.dualImages}>
                      {screen.images.map((img) => (
                        <ImagePlaceholder
                          key={img.src}
                          src={img.src}
                          alt={img.alt}
                        />
                      ))}
                    </div>
                  ) : (
                    <ImagePlaceholder
                      src={screen.images[0].src}
                      alt={screen.images[0].alt}
                    />
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* 08 — Design System */}
        <section className={base.section} aria-labelledby="design-system-title">
          <SectionTag>{designSystem.sectionTag}</SectionTag>
          <h2 className={base.sectionTitle} id="design-system-title">
            {designSystem.title}
          </h2>
          <Divider />
          <div className={base.reflectionBody}>
            {designSystem.body.map((paragraph, i) => (
              <p key={i} className={base.bodyText}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={base.fullWidthImgSection}>
            <ImagePlaceholder
              src={designSystem.image.src}
              alt={designSystem.image.alt}
            />
          </div>
        </section>

        {/* 09 — Reflection */}
        <section className={base.section} aria-labelledby="reflection-title">
          <SectionTag>{reflection.sectionTag}</SectionTag>
          <h2 className={base.sectionTitle} id="reflection-title">
            {reflection.title}
          </h2>
          <Divider />
          <div className={base.reflectionBody}>
            {reflection.body.map((paragraph, i) => (
              <p key={i} className={base.bodyText}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Closing gallery */}
        <section className={styles.gallerySection} aria-labelledby="gallery-title">
          <SectionTag>{gallery.sectionTag}</SectionTag>
          <h2 className={base.sectionTitle} id="gallery-title">
            {gallery.title}
          </h2>
          <Divider />
          <div className={styles.galleryGrid}>
            {gallery.images.map((img) => (
              <div key={img.src} className={styles.galleryItem}>
                <ImagePlaceholder src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={base.footer}>
        <span>© 2025 Sugam Upadhyay</span>
        <a
          className={base.footerLink}
          href={GIFTBOX_FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source file in Figma
        </a>
      </footer>
    </div>
  );
}
