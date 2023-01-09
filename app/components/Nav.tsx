import { useCallback, useRef, useState } from "react";

import { COMPONENTS } from "./constants";
import { useEventListener } from "~/hooks/useEventListener";
import { Icon } from "./Icon/Icon";
import removeOutline from "~/assets/icons/walk-sharp.svg";

import styles from "./Nav.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const Nav = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("search");

  const searchOnForwardSlash = useCallback((e: KeyboardEvent) => {
    if (e.key === "/") {
      searchRef.current?.focus();
    }
  }, []);
  useEventListener("keydown", searchOnForwardSlash);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "/") return null;
    setSearch(e.target.value);
  };

  return (
    <div className="nav">
      <div className="title">
        <h1>
          <a href="/">Mesa</a>
          <Icon svg={removeOutline} height={30} invert />
        </h1>
        <span className="subtitle">a dead-simple component library</span>
      </div>
      <input
        ref={searchRef}
        type="search"
        placeholder={placeholder}
        aria-label="search"
        value={search}
        onFocus={() => setPlaceholder("Type to search components")}
        onBlur={() => setPlaceholder("search")}
        onChange={handleChange}
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
