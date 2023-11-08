import { useEffect, useState } from "react";

interface PropsType {
  value: string;
  active: string;
  setActive: (arg: string) => void;
}

const DesButton = ({ value, active, setActive }: PropsType) => {
  const [title, setTitle] = useState(value);

  useEffect(() => {
    const f = value[0].toUpperCase();
    const slice = value.slice(1);
    const newTitle = f + slice;
    setTitle(newTitle);
  }, []);

  return (
    <button
      onClick={() => setActive(value)}
      className={`text-white font-barlow ${
        active === value ? "border-b-2" : null
      }  pb-[6px]`}
    >
      {title}
    </button>
  );
};

export default DesButton;
