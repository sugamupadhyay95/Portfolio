import { HashNavLink } from "./HashNavLink";
import styles from "./SiteHeader.module.css";

/** Replace with your resume PDF path or URL when ready (e.g. /resume.pdf or a hosted link). */
export const RESUME_PDF_URL = "/resume.pdf";

const navLinks = [
  { to: "/#work", label: "Work" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className={styles.nav} data-node-id="643:1613">
      <HashNavLink className={styles.brand} to="/#top">
        Sugam Upadhyay
      </HashNavLink>
      <nav aria-label="Primary">
        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li key={item.to}>
              <HashNavLink className={styles.navLink} to={item.to}>
                {item.label}
              </HashNavLink>
            </li>
          ))}
          <li>
            <a
              className={styles.navLink}
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
