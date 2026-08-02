import { useState } from "react";
import type { VideoItem } from "../types";
import Modal from "./Modal";
import VideoPlayer from "./VideoPlayer";
import styles from "./Grid.module.css";

type Props = {
  items: VideoItem[];
};

export default function VideoGrid({ items }: Props) {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.card}
              onClick={() => setActive(item)}
              aria-label={`Play ${item.title}`}
            >
              <div className={styles.thumbWrap}>
                <img
                  src={item.thumbnail}
                  alt=""
                  className={styles.thumb}
                  loading="lazy"
                />
                <span className={styles.play} aria-hidden="true">▶</span>
              </div>
              <div className={styles.meta}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.sub}>
                  <span>{item.role}</span>
                  <span className={styles.dot}>·</span>
                  <span>{item.year}</span>
                </p>
                {item.description && (
                  <p className={styles.desc}>{item.description}</p>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        size="video"
      >
        {active && (
          <VideoPlayer source={active.source} title={active.title} autoPlay />
        )}
      </Modal>
    </>
  );
}
