import styles from "~/global.css";
import { Nav, links as navLinks } from "~/components/Nav";

export function links() {
  return [...navLinks(), { rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div className="layout">
      <Nav />
      <div className="home dropdown">
        <h3 className="title">.box</h3>
      </div>
    </div>
  );
}
