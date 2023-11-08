import { LinksType } from "./header";
import MenuLinksMobile from "./menu.links.mobile";
import { useSpring, animated } from "@react-spring/web";

interface PropsType {
  links: LinksType[];
}

const MenuMobile = ({ links }: PropsType) => {
  const animateMenu = useSpring({
    delay: 100,
    from: { x: 400 },
    to: { x: 0 },
  });

  return (
    <animated.div
      style={{ ...animateMenu }}
      className="fixed right-0 top-0 h-screen w-2/3 bg-white/5 backdrop-blur-2xl flex sm:hidden flex-col gap-7 pt-[100px] z-40"
    >
      {links.map((l: LinksType) => {
        return (
          <MenuLinksMobile key={l.id} id={l.id} title={l.title} url={l.url} />
        );
      })}
    </animated.div>
  );
};

export default MenuMobile;
