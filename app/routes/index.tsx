import global from "~/global.css";
import index from "~/styles/index.css";
import { Nav, links as navLinks } from "~/components/Nav";

export function links() {
  return [
    ...navLinks(),
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: index },
  ];
}

export default function Overview() {
  return (
    <div className="layout">
      <Nav />
      <div className="home">
        <h2>What is Mesa?</h2>
        <p>
          Aiming to be a component library and design system for React that is
          focused on simplicity, the goal of this library is to provide the user
          with a set of components that can be easily implemented into a
          project, hopefully streamlining the development process and allowing
          you to focus on the function of your website or web application. This
          library is not focused on being visually appealing or overly
          prescriptive.
          <br />
          <br />
          The components are designed to be 'dead-simple', straightforward, and
          easy to use. By focusing on simplicity, I'm hoping to create a library
          that is distraction-free, allowing developers to quickly and easily
          build out their projects.
        </p>
      </div>
    </div>
  );
}
