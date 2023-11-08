import { Link } from "react-router-dom";

interface PropsType {
  id: number;
  title: string;
  url: string;
}

const MenuLinksMobile = ({ id, title, url }: PropsType) => {
  return (
    <Link to={url} className="text-white flex gap-3 font-barlow w-full px-10">
      <span className="font-semibold">{`0${id}`}</span>
      <span>{title.toUpperCase()}</span>
    </Link>
  );
};

export default MenuLinksMobile;
