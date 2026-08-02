import { content } from "../content";
import styles from "./Footer.module.css";

export default function Footer() {
  const { email, instagram, imdb } = content.contact;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} {content.name}
        </span>
        <ul className={styles.links}>
          <li>
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li>
            <a href={instagram} target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
          </li>
          <li>
            <a href={imdb} target="_blank" rel="noreferrer noopener">
              IMDb
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
