interface PropsType {
  id: number;
  active: number;
  setActive: (arg: number) => void;
}

const TechSlide = ({ id, active, setActive }: PropsType) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full text-[16px] sm:text-[18px] lg:text-[32px] ${
        id === active
          ? "bg-white text-black"
          : "bg-transparent border-2 border-white/20 text-white"
      }`}
    >
      {id + 1}
    </button>
  );
};

export default TechSlide;
