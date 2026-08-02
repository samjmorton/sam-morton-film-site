import type { VideoSource } from "../types";
import styles from "./VideoPlayer.module.css";

type Props = {
  source: VideoSource;
  title: string;
  autoPlay?: boolean;
};

export default function VideoPlayer({ source, title, autoPlay = false }: Props) {
  if (source.kind === "youtube") {
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      ...(autoPlay ? { autoplay: "1" } : {}),
    });
    return (
      <div className={styles.frame}>
        <iframe
          src={`https://www.youtube.com/embed/${source.id}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (source.kind === "vimeo") {
    const params = new URLSearchParams({
      title: "0",
      byline: "0",
      portrait: "0",
      ...(autoPlay ? { autoplay: "1" } : {}),
    });
    return (
      <div className={styles.frame}>
        <iframe
          src={`https://player.vimeo.com/video/${source.id}?${params.toString()}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={styles.frame}>
      <video
        src={source.url}
        controls
        autoPlay={autoPlay}
        playsInline
        preload="metadata"
      />
    </div>
  );
}
