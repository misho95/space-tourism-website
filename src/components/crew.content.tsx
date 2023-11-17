import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CrewDataType } from "../pages/crew.page";
import CrewSlide from "./crew.slide";

interface PropsType {
  data: CrewDataType | undefined;
  active: number;
  setActive: (arg: number) => void;
}

const CrewContent = ({ data, active, setActive }: PropsType) => {
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
      <animated.div
        style={{ ...animateSlide }}
        className="flex flex-col lg:gap-[100px] w-11/12 lg:w-1/2 h-full justify-center items-center lg:items-start font-barlow"
      >
        <h1 className="text-white font-barlow text-[16px] sm:text-[20px] lg:text-[28px] flex gap-3 select-none w-full">
          <span className="text-white/50">02</span>
          <span>MEET YOUR CREW</span>
        </h1>
        <animated.div
          style={{ ...animateSlide }}
          className="w-11/12 lg:w-1/2 h-full flex flex-col justify-center items-center sm:hidden"
        >
          <img src={data?.images.png} className="w-fit h-fit" />
          <div className="w-full h-[1px] bg-white/20 mb-5"></div>
          <div className="flex gap-3 justify-center items-center w-full">
            <CrewSlide id={0} active={active} setActive={setActive} />
            <CrewSlide id={1} active={active} setActive={setActive} />
            <CrewSlide id={2} active={active} setActive={setActive} />
            <CrewSlide id={3} active={active} setActive={setActive} />
          </div>
        </animated.div>

        <div className="w-min text-center lg:text-left">
          <h2 className="text-white/50 text-[16px] sm:text-[24px] lg:text-[32px] font-Bellefair w-[400px]">
            {data?.role}
          </h2>
          <h1 className="text-white text-[24px] sm:text-[40px] lg:text-[56px] font-Bellefair">
            {data?.name}
          </h1>
          <p className="text-[#D0D6F9] text-[15px] sm:text-[16px] lg:text-[18px] ">
            {data?.bio}
          </p>
        </div>

        <div className="hidden sm:flex gap-3 justify-center items-center w-full">
          <CrewSlide id={0} active={active} setActive={setActive} />
          <CrewSlide id={1} active={active} setActive={setActive} />
          <CrewSlide id={2} active={active} setActive={setActive} />
          <CrewSlide id={3} active={active} setActive={setActive} />
        </div>
      </animated.div>
      <animated.div
        style={{ ...animateSlide }}
        className="w-11/12 lg:w-1/2 h-full hidden justify-center items-center sm:flex"
      >
        <img src={data?.images.png} className="w-fit h-full" />
      </animated.div>
    </>
  );
};

export default CrewContent;
