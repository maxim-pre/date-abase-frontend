//Main navigation item for desktop and tablet menu 

import { Link } from "react-router-dom";

const NavItem = ({ url, label }) => {
  return (
    <div className="px-4">
      <Link to={url} className="relative">
        <span className="after:content-[''] after:bg-white after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute after:duration-300 after:hover:w-[100%]">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default NavItem;
