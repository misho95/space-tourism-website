import { useSpring, animated } from "@react-spring/web";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const ContentPageContainer = ({ children }: PropsType) => {
  const animateContent = useSpring({
    delay: 300,
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: {
      mass: 2,
      friction: 30,
      tension: 80,
    },
  });

  return (
    <animated.div
      style={{ ...animateContent }}
      className="flex flex-col lg:flex-row w-10/12 h-full justify-between items-center "
    >
      {children}
    </animated.div>
  );
};

export default ContentPageContainer;
