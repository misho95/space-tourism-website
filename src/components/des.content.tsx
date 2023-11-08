import { useEffect } from "react";
import DesButton from "./des.button";
import { useSpring, animated } from "@react-spring/web";
import { DataType } from "../pages/des.page";

interface PropsType {
  data: DataType | undefined;
  active: string;
  setActive: (arg: string) => void;
}

const DesContent = ({ data, active, setActive }: PropsType) => {
  const [animateSlide, api] = useSpring(() => ({
    from: { x: 500 },
    config: {
      mass: 1,
      friction: 30,
      tension: 60,
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
        className="flex flex-col gap-[100px] w-1/2 h-full justify-center items-start"
      >
        <h1 className="text-white font-barlow text-[28px] flex gap-3 select-none">
          <span className="text-white/50">01</span>
          <span>PICK YOUR DESTINATION</span>
        </h1>
        <div>
          <img src={data?.images.png} className="w-[445px] h-[445px]" />
        </div>
      </animated.div>
      <animated.div
        style={{ ...animateSlide }}
        className="w-1/2 h-full flex justify-center items-center"
      >
        <div className="w-min h-min">
          <div className="flex gap-9">
            <DesButton value={"moon"} active={active} setActive={setActive} />
            <DesButton value={"mars"} active={active} setActive={setActive} />
            <DesButton value={"europa"} active={active} setActive={setActive} />
            <DesButton value={"titan"} active={active} setActive={setActive} />
          </div>
          <h1 className="text-white text-[100px] font-Bellefair pr-[150px]">
            {data?.name}
          </h1>
          <p className="text-[#D0D6F9] text-[18px]">{data?.description}</p>
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
