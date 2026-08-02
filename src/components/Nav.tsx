import { NavLink, Link } from "react-router-dom";
import { content } from "../content";
import styles from "./Nav.module.css";

const links = [
  { to: "/acting", label: "Acting" },
  { to: "/writing", label: "Writing" },
  { to: "/directing", label: "Directing" },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand}>
          {content.name}
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
