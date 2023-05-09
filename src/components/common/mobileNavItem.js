import { Link } from "react-router-dom";

const MobileNavItem = ({ url, label, toggleNav }) => {
  return (
    <div
      className="my-4 text-gray-100 text-2xl"
      onClick={() => {
        toggleNav();
      }}
    >
      <Link to={url} className="relative">
        <a className="after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 after:hover:w-[100%]">
          {label}
        </a>
      </Link>
    </div>
  );
};

export default MobileNavItem;
