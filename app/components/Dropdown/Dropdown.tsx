import { useState } from "react";
import styles from "./Dropdown.css";
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

type DropdownProps = {
  children: React.ReactNode;
  name: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ children, name }) => {
  const [open, setOpen] = useState(false);

  return (
    <div id={`dropdown-${name}`}>
      <button onClick={() => setOpen(!open)}>{name}</button>
      {open && <div className="dropdown">{children}</div>}
    </div>
  );
};
