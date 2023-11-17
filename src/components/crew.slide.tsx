interface PropsType {
  id: number;
  active: number;
  setActive: (arg: number) => void;
}

const CrewSlide = ({ id, active, setActive }: PropsType) => {
  return (
    <button
      onClick={() => setActive(id)}
      className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full ${
        id === active ? "bg-white" : "bg-white/20"
      }`}
    ></button>
  );
};

export default CrewSlide;
