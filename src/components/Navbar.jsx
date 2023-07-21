import { NavLink, Link } from "react-router-dom";

import { ReactComponent as ACLogoIcon } from "../assets/acLogoIcon.svg";
import { ReactComponent as HomeIcon } from "../assets/homeIcon.svg";
import { ReactComponent as HomeFilledIcon } from "../assets/homeFilledIcon.svg";
import { ReactComponent as userIcon } from "../assets/userIcon.svg";
import { ReactComponent as userFilledIcon } from "../assets/userFilledIcon.svg";
import { ReactComponent as settingIcon } from "../assets/settingIcon.svg";
import { ReactComponent as settingFilledIcon } from "../assets/settingFilledIcon.svg";

export default function Navbar(){
  return (
    <section id="navbar" className="">
      <nav>
        <NavLink to="/main">
          {/* {({ isActive, isPending }) => (
          <span className={isActive ? "active" : ""}>Tasks</span>
        )} */}
          <span>
            <HomeIcon />
          </span>
          <span className="text-lg font-bold">首頁</span>
        </NavLink>
        <NavLink to="/user"></NavLink>
        <NavLink to="/settings"></NavLink>
      </nav>
    </section>
  );
}