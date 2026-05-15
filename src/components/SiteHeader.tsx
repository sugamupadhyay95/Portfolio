import { Link } from "react-router-dom";
import styles from "./SiteHeader.module.css";

const navLinks = [
  { to: "/#work", label: "Work" },
  { to: "/#about", label: "About" },
  { to: "/#process", label: "Process" },
  { to: "/#featured-case", label: "Case Study Guide" },
  { to: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className={styles.nav} data-node-id="643:1613">
      <Link className={styles.brand} to="/">
        Sugam Upadhyay
      </Link>
      <nav aria-label="Primary">
        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link className={styles.navLink} to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
