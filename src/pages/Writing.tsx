import { content } from "../content";
import FileBrowser from "../components/FileBrowser";

export default function Writing() {
  return (
    <div className="container">
      <header className="section-heading">
        <p className="kicker">Scripts</p>
        <h1>Writing</h1>
      </header>
      <FileBrowser root={content.writing} basePath="/writing" />
    </div>
  );
}
