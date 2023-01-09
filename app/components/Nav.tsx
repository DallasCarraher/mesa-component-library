import { useState } from "react";
import { COMPONENTS } from "./constants";

import styles from "./Nav.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const Nav = () => {
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("search");

  return (
    <div className="nav">
      <h1>
        <a href="/">Mesa UI</a>
      </h1>
      <input
        type="search"
        placeholder={placeholder}
        aria-label="search"
        value={search}
        onFocus={() => setPlaceholder("Type to search components")}
        onBlur={() => setPlaceholder("search")}
        onChange={(e) => setSearch(e.target.value)}
      />
      <nav>
        <ul>
          {COMPONENTS.filter((link) => link.includes(search)).map(
            (link, idx) => (
              <li key={`${link}-${idx}`}>
                <a href={`/${link}`}>{link}</a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};
