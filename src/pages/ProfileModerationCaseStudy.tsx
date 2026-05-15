import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import {
  PROFILE_MODERATION_FIGMA_URL,
  profileModerationCaseStudySections,
} from "../data/profileModerationCaseStudy";
import styles from "./ProfileModerationCaseStudy.module.css";

export function ProfileModerationCaseStudy() {
  return (
    <div className={styles.page} data-node-id="645:1951">
      <SiteHeader />

      <div className={styles.pageChrome}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/#work">Selected work</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span>Profile Moderation Tool</span>
        </nav>
        <Link className={styles.backLink} to="/">
          ← Back to home
        </Link>
      </div>

      <main className={styles.main}>
        {profileModerationCaseStudySections.map((sec, index) => (
          <section
            key={sec.id}
            className={styles.slice}
            aria-labelledby={`section-${sec.id}`}
          >
            <h2 className={styles.sliceTitle} id={`section-${sec.id}`}>
              {sec.heading}
            </h2>
            <figure className={styles.figure}>
              <img
                className={styles.sliceImg}
                src={sec.imageSrc}
                alt={sec.imageAlt}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          </section>
        ))}
      </main>

      <footer className={styles.footer}>
        <span>© 2025 Sugam Upadhyay</span>
        <a
          className={styles.footerLink}
          href={PROFILE_MODERATION_FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source file in Figma
        </a>
      </footer>
    </div>
  );
}