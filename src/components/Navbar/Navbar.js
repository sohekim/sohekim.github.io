import React from "react";
import { MenuItems } from "./MenuItems";
import { ReactComponent as Logo } from "../../resources/small_logo.svg";
import "./Navbar.css";
// import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [isClicked, setIsClicked] = React.useState(false);

  const renderLogo = () => {
    return <Logo className="logo" />;
  };

  function handleClick() {
    setIsClicked(!isClicked);
  }

  const [isAboutClicked, setIsAboutClicked] = React.useState(false);

  function handleAboutClick() {
    setIsAboutClicked(!isAboutClicked);
  }

  return (
    <div className="outside">
      <nav className="navbar-container">
        <a href="/">
          <Logo className="logo" />
        </a>

        <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            // if (item.title === "Projects")
            //   return (
            //     <li key={index}>
            //       <AnchorLink className={item.cName} href="#project-section">
            //         Projects
            //       </AnchorLink>
            //     </li>
            //   );
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
