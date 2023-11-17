import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import TechSlide from "./tech.slide";
import { TechDataType } from "../../pages/tech.page";
interface PropsType {
  data: TechDataType | undefined;
  active: number;
  setActive: (arg: number) => void;
}

const TechContent = ({ data, active, setActive }: PropsType) => {
  const [animateSlide, api] = useSpring(() => ({
    from: { x: 500 },
    config: {
      mass: 1,
      friction: 30,
      tension: 60,
      clamp: true,
      precision: 1,
      velocity: 1,
    },
  }));

  const callSlide = () => {
    api.start({
      from: {
        x: 100,
      },
      to: {
        x: 0,
      },
    });
  };

  useEffect(() => {
    callSlide();
  }, [active]);

  return (
    <>
      <h1 className="text-white font-barlow text-[16px] sm:text-[20px] lg:text-[28px] flex gap-3 select-none w-full flex lg:hidden">
        <span className="text-white/50">03</span>
        <span>SPACE LAUNCH 101</span>
      </h1>
      <animated.div
        style={{ ...animateSlide }}
        className="w-full lg:w-1/2 lg:h-full flex flex-col justify-center items-center lg:hidden gap-6"
      >
        <img src={data?.images.landscape} className="w-fit h-fit" />
        <div className="flex gap-3 justify-center items-center lg:justify-start w-full">
          <TechSlide id={0} active={active} setActive={setActive} />
          <TechSlide id={1} active={active} setActive={setActive} />
          <TechSlide id={2} active={active} setActive={setActive} />
        </div>
      </animated.div>
      <animated.div
        style={{ ...animateSlide }}
        className="flex flex-col gap-[50px] lg:gap-[100px] w-11/12 lg:w-1/2 h-fit lg:h-full justify-center items-start"
      >
        <div className="flex gap-6 justify-between w-full">
          <div className="hidden lg:flex flex-col  gap-3 justify-center items-center lg:justify-start w-full">
            <TechSlide id={0} active={active} setActive={setActive} />
            <TechSlide id={1} active={active} setActive={setActive} />
            <TechSlide id={2} active={active} setActive={setActive} />
          </div>

          <div className="flex  flex-col gap-2 w-full lg:w-min text-center lg:text-left">
            <h5 className="text-[#D0D6F9] text-[15px] sm:text-[16px] lg:text-[18px] ">
              THE TERMINOLOGY…
            </h5>
            <h1 className="text-white text-[24px] sm:text-[40px] lg:text-[56px] font-Bellefair w-full lg:w-[500px]">
              {data?.name}
            </h1>
            <p className="text-[#D0D6F9] text-[15px] sm:text-[16px] lg:text-[18px] ">
              {data?.description}
            </p>
          </div>
        </div>
      </animated.div>
      <animated.div
        style={{ ...animateSlide }}
        className="w-11/12 lg:w-1/2 lg:h-full hidden justify-center items-center lg:flex"
      >
        <img src={data?.images.portrait} className="w-fit h-fit" />
      </animated.div>
    </>
  );
};

export default TechContent;
