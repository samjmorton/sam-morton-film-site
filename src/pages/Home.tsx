import { content } from "../content";
import VideoPlayer from "../components/VideoPlayer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.wrap}`}>
      <section className={styles.hero}>
        <img
          src={content.headshot}
          alt={`Headshot of ${content.name}`}
          className={styles.headshot}
        />
        <div className={styles.heroText}>
          <p className={styles.kicker}>{content.tagline}</p>
          <h1 className={styles.name}>{content.name}</h1>
          <div className={styles.actions}>
            <a
              href={content.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.resume}
            >
              View Resume ↗
            </a>
          </div>
        </div>
      </section>

      <section className={styles.reel} aria-label="Showreel">
        <p className={styles.reelKicker}>Reel</p>
        <VideoPlayer source={content.reel} title={`${content.name} — Reel`} />
      </section>
    </div>
  );
}
