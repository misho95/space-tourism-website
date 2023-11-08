import { useSpring, animated } from "@react-spring/web";

const HomePage = () => {
  const animateContent = useSpring({
    delay: 300,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      mass: 5,
      friction: 120,
      tension: 120,
    },
  });

  return (
    <animated.div
      style={{ ...animateContent }}
      className="flex flex-col lg:flex-row w-10/12 h-full items-center justify-around lg:justify-between lg:items-end pb-[130px] "
    >
      <div className="w-full lg:w-min select-none flex flex-col text-center">
        <h3 className="text-[#D0D6F9] text-[16px] sm:text-[20px] lg:text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className="text-[80px] sm:text-[150px] text-white">SPACE</h1>
        <p className="text-[#D0D6F9] text-[15px] sm:text-[16px] lg:text-[18px] ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className="text-[20px] sm:text-[32px] bg-white rounded-full w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] lg:w-[274px] lg:h-[274px]">
        EXPLORE
      </button>
    </animated.div>
  );
};

export default HomePage;
