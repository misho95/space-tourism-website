import { Link } from "react-router-dom";

interface PropsType {
  id: number;
  title: string;
  url: string;
  setShowMenu: (arg: boolean) => void;
}

const MenuLinksMobile = ({ id, title, url, setShowMenu }: PropsType) => {
  return (
    <Link
      onClick={() => setShowMenu(false)}
      to={url}
      className="text-white flex gap-3 font-barlow w-full px-10"
    >
      <span className="font-semibold">{`0${id}`}</span>
      <span>{title.toUpperCase()}</span>
    </Link>
  );
};

export default MenuLinksMobile;
