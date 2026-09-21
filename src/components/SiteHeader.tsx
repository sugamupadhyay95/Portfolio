import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashNavLink } from "./HashNavLink";
import styles from "./SiteHeader.module.css";

export const RESUME_PDF_URL = "/resume.pdf";

const navLinks = [
  { to: "/#work", label: "Work", hash: "#work" },
  { to: "/#about", label: "About", hash: "#about" },
  { to: "/#contact", label: "Contact", hash: "#contact" },
] as const;

export function SiteHeader() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  const isActive = (itemHash: string) => pathname === "/" && hash === itemHash;

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${open ? styles.open : ""}`}
    >
      <div className={styles.inner}>
        <HashNavLink className={styles.logo} to="/#top">
          Sugam Upadhyay
        </HashNavLink>

        <button
          className={styles.toggle}
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((item) => (
            <HashNavLink
              key={item.to}
              className={`${styles.link} ${isActive(item.hash) ? styles.active : ""}`}
              to={item.to}
            >
              {item.label}
            </HashNavLink>
          ))}
          <a
            className={styles.link}
            href={RESUME_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
