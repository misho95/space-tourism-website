import { useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import NavLink from "./nav.link";
import { useSpring, animated } from "@react-spring/web";

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
  const location = useLocation();
  const animateHeader = useSpring({
    delay: 100,
    from: { y: -300 },
    to: { y: 0 },
    config: {
      mass: 1,
      friction: 5,
      tension: 50,
    },
  });

  return (
    <animated.div
      style={{ ...animateHeader }}
      className="flex justify-between items-center w-full h-[96px]"
    >
      <img src={Logo} className="w-[48px] h-[48px]" />
      <div className="w-1/3 px-10 relative">
        <div className="bg-white/20 w-full h-[1px] absolute z-10"></div>
      </div>
      <div className="bg-white/5 backdrop-blur-sm w-2/3 h-[96px] flex justify-start pl-[100px] items-center gap-[100px]">
        {links.map((l) => {
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
    </animated.div>
  );
};

export default Header;
