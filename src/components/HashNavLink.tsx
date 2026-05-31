import type { ReactNode, MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

type HashNavLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
};

export function HashNavLink({ to, className, children }: HashNavLinkProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const hashIndex = to.indexOf("#");
    if (hashIndex === -1) return;

    const path = to.slice(0, hashIndex) || "/";
    const id = to.slice(hashIndex + 1);
    if (!id) return;

    e.preventDefault();

    if (pathname === path) {
      scrollToSection(id);
      window.history.pushState(null, "", `${path}#${id}`);
    } else {
      navigate(`${path}#${id}`);
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
