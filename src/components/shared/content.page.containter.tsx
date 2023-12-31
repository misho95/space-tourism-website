import { useSpring, animated } from "@react-spring/web";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const ContentPageContainer = ({ children }: PropsType) => {
  const animateContent = useSpring({
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    config: {
      mass: 2,
      friction: 50,
      tension: 80,
      clamp: true,
      precision: 0.00001,
      velocity: 0.0001,
    },
  });

  return (
    <animated.div
      style={{ ...animateContent }}
      className="flex flex-col lg:flex-row w-10/12 h-full justify-evenly items-center gap-3 lg:gap-10"
    >
      {children}
    </animated.div>
  );
};

export default ContentPageContainer;
