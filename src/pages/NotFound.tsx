import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <header className="section-heading">
        <p className="kicker">404</p>
        <h1>Not found</h1>
      </header>
      <p className="muted">
        That page doesn't exist. <Link to="/">Go home</Link>.
      </p>
    </div>
  );
}
