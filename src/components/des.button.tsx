import { useEffect, useState } from "react";

const DesButton = ({ value, active, setActive }) => {
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
