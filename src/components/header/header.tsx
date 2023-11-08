import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import NavLink from "./nav.link";
import { useSpring, animated } from "@react-spring/web";
import iconHam from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import { useState } from "react";
import MenuMobile from "./menu.mobile";

export interface LinksType {
  id: number;
  title: string;
  url: string;
}

const links = [
  {
    id: 0,
    title: "home",
    url: "/",
  },
  {
    id: 1,
    title: "destination",
    url: "/destination",
  },
  {
    id: 2,
    title: "crew",
    url: "/crew",
  },
  {
    id: 3,
    title: "technology",
    url: "/technology",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const animateHeader = useSpring({
    delay: 100,
    from: { y: -300 },
    to: { y: 0 },
    config: {
      mass: 1,
      friction: 9,
      tension: 50,
    },
  });

  return (
    <animated.div
      style={{ ...animateHeader }}
      className="flex justify-between items-center w-10/12 sm:w-full h-[96px]"
    >
      <Link to={"/"} className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]">
        <img src={Logo} />
      </Link>
      <div className="w-1/3 px-10 relative hidden lg:flex">
        <div className="bg-white/20 w-full h-[1px] absolute z-10"></div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm w-fit lg:w-2/3 h-[96px] hidden md:flex lg:justify-start px-[50px] lg:pl-[100px] items-center gap-[50px] lg:gap-[100px]">
        {links.map((l: LinksType) => {
          return (
            <NavLink
              key={l.id}
              id={l.id}
              title={l.title}
              url={l.url}
              current={location.pathname}
            />
          );
        })}
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="sm:hidden relative w-[24px] h-[24px]"
      >
        <img
          src={showMenu ? iconClose : iconHam}
          className="absolute top-0 left-0 z-50 w-full h-full"
        />
      </button>
      {showMenu && <MenuMobile links={links} />}
    </animated.div>
  );
};

export default Header;
