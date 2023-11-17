import { useEffect, useState } from "react";

interface PropsType {
  id: number;
  value: string;
  active: number;
  setActive: (arg: number) => void;
}

const DesButton = ({ id, value, active, setActive }: PropsType) => {
  const [title, setTitle] = useState(value);

  useEffect(() => {
    const f = value[0].toUpperCase();
    const slice = value.slice(1);
    const newTitle = f + slice;
    setTitle(newTitle);
  }, []);

  return (
    <button
      onClick={() => setActive(id)}
      className={`text-white font-barlow ${
        active === id ? "border-b-2" : null
      }  pb-[6px]`}
    >
      {title}
    </button>
  );
};

export default DesButton;
