/** @format */

import { Link } from "react-router-dom";
import "../css/Navbar.css"

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  //   add the other link as well
];

export const Navbar = () => {
  return (
    <div className="Navbar">
      <Link id="header-link-home" to={"/"}>
        Home
      </Link>
      <Link id="header-link-about" to={"/about"}>
        About
      </Link>
      {/* <Link id="header-link-movies" to={"/movies"}>
        Movies
      </Link> */}
    </div>
  );
  //map through the link ad display it in header
};
