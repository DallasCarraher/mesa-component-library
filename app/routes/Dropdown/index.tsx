import dropdown from "~/styles/dropdown.css";
import styles from "~/global.css";
import { Nav, links as navLinks } from "~/components/Nav";
import { Dropdown } from "~/components/Dropdown/Dropdown";

export function links() {
  return [
    ...navLinks(),
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: dropdown },
  ];
}

export default function Index() {
  return (
    <div className="layout">
      <Nav />
      <div className="home dropdown">
        <h3 className="title">.dropdown</h3>
      </div>
    </div>
  );
}
