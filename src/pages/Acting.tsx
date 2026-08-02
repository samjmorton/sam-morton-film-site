import { content } from "../content";
import VideoGrid from "../components/VideoGrid";

export default function Acting() {
  return (
    <div className="container">
      <header className="section-heading">
        <p className="kicker">Selected work</p>
        <h1>Acting</h1>
      </header>
      <VideoGrid items={content.acting} />
    </div>
  );
}
