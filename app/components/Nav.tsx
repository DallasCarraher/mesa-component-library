import { useCallback, useEffect, useRef, useState } from "react";

import { COMPONENTS } from "./constants";
import { useEventListener } from "~/hooks/useEventListener";
import { Icon } from "./Icon/Icon";
import walkSharp from "~/assets/icons/walk-sharp.svg";

import styles from "./Nav.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const Nav = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [placeholder, setPlaceholder] = useState("Search");
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    setActive(window.location.pathname.replace("/", ""));
  }, []);

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
          <Icon svg={walkSharp} height={30} invert />
        </h1>
        <span className="subtitle">a component library & design system</span>
      </div>
      <div className="search-container">
        <input
          ref={searchRef}
          type="search"
          placeholder={placeholder}
          aria-label="search"
          value={search}
          onFocus={() => setPlaceholder("Type to search components")}
          onBlur={() => setPlaceholder("Search")}
          onChange={handleChange}
        />
        {placeholder === "Search" && (
          <span className="slash-hint">press '/'</span>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <a href="/" className={active === "" ? "active" : undefined}>
              Overview
            </a>
          </li>
          {COMPONENTS.filter((link) => link.match(RegExp(search, "g"))).map(
            (link, idx) => (
              <li key={`${link}-${idx}`}>
                <a
                  href={`/${link}`}
                  className={active === link ? "active" : undefined}
                >
                  .{link}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};
