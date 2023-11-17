import { useEffect } from "react";
import DesButton from "./des.button";
import { useSpring, animated } from "@react-spring/web";
import { DataType } from "../pages/des.page";

interface PropsType {
  data: DataType | undefined;
  active: number;
  setActive: (arg: number) => void;
}

const DesContent = ({ data, active, setActive }: PropsType) => {
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
        className="flex flex-col gap-[50px] lg:gap-[100px] w-11/12 lg:w-1/2 h-fit lg:h-full justify-center items-start "
      >
        <h1 className="text-white font-barlow text-[16px] sm:text-[20px] lg:text-[28px] flex gap-3 select-none">
          <span className="text-white/50">01</span>
          <span>PICK YOUR DESTINATION</span>
        </h1>
        <div className="w-full flex justify-center items-center lg:block">
          <img
            src={data?.images.png}
            className="w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px]"
          />
        </div>
      </animated.div>
      <animated.div
        style={{ ...animateSlide }}
        className="w-11/12 lg:w-1/2 h-full flex justify-center items-center font-barlow"
      >
        <div className=" lg:w-min lg:h-min text-center lg:text-left">
          <div className="flex justify-center lg:justify-start gap-9">
            <DesButton
              id={0}
              value={"moon"}
              active={active}
              setActive={setActive}
            />
            <DesButton
              id={1}
              value={"mars"}
              active={active}
              setActive={setActive}
            />
            <DesButton
              id={2}
              value={"europa"}
              active={active}
              setActive={setActive}
            />
            <DesButton
              id={3}
              value={"titan"}
              active={active}
              setActive={setActive}
            />
          </div>
          <h1 className="text-white text-[56px] sm:text-[80px] lg:text-[100px] font-Bellefair px-[70px] lg:pr-[150px]">
            {data?.name}
          </h1>
          <p className="text-[#D0D6F9] text-[15px] sm:text-[16px] lg:text-[18px]">
            {data?.description}
          </p>
          <div className="w-full h-[1px] bg-white/20 my-10"></div>
          <div className="flex justify-between gap-3">
            <span>
              <h3 className="text-[#D0D6F9] text-[14px]">AVG. DISTANCE</h3>
              <h2 className="text-white text-[28px]">{data?.distance}</h2>
            </span>
            <span>
              <h3 className="text-[#D0D6F9] text-[14px]">EST. TRAVEL TIME</h3>
              <h2 className="text-white text-[28px]">{data?.travel}</h2>
            </span>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default DesContent;
