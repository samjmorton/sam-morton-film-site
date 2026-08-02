import { content } from "../content";
import VideoGrid from "../components/VideoGrid";

export default function Directing() {
  return (
    <div className="container">
      <header className="section-heading">
        <p className="kicker">Selected work</p>
        <h1>Directing</h1>
      </header>
      <VideoGrid items={content.directing} />
    </div>
  );
}
