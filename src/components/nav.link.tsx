import { Link } from "react-router-dom";

interface PropsType {
  id: number;
  title: string;
  url: string;
  current: string;
}

const NavLink = ({ id, title, url, current }: PropsType) => {
  return (
    <Link
      className={`text-white flex items-center gap-3 font-barlow text-lg h-full  ${
        url === current ? "border-b-[3px]" : null
      } duration-100`}
      to={url}
    >
      <span>{`0${id}`}</span>
      <span>{title.toUpperCase()}</span>
    </Link>
  );
};

export default NavLink;
