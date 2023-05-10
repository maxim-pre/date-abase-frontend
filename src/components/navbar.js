import NavItem from "./common/navItem";
import MobileNavItem from "./common/mobileNavItem";
import Logo from "../static/images/Dater.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const Navbar = ({ user }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between px-4 h-16 items-center bg-red-500 text-gray-100">
        <div className="object-cover h-16">
          <img src={Logo} className="h-16" />
        </div>

        {!user._id && (
          <div className="hidden sm:flex">
            <NavItem url={"/"} label={"Login"} />
            <NavItem url={"/signup"} label={"Signup"} />
          </div>
        )}

        {user._id && (
          <div className="hidden sm:flex">
            <NavItem url={"/dashboard"} label={"Dashboard"} />
            <NavItem url={"/conversations"} label={"Conversations"} />
            <NavItem url={"/browse"} label={"Browse"} />
            <NavItem url={"/logout"} label={"Logout"} />
          </div>
        )}

        <div
          className="sm:hidden"
          onClick={() => {
            toggleNav();
          }}
        >
          {!nav ? (
            <RxHamburgerMenu className="text-xl cursor-pointer" />
          ) : (
            <TfiClose className="text-xl cursor-pointer " />
          )}
        </div>
      </div>
      {nav && (
        <div className="h-screen w-full absolute flex items-center justify-center flex-col bg-red-500 pb-16 z-10 text-center">
          {!user._id && (
            <div className="">
              <MobileNavItem url={"/"} label={"Login"} toggleNav={toggleNav} />
              <MobileNavItem
                url={"/signup"}
                label={"Signup"}
                toggleNav={toggleNav}
              />
            </div>
          )}

          {user._id && (
            <div className="">
              <MobileNavItem
                url={"/dashboard"}
                label={"Dashboard"}
                toggleNav={toggleNav}
              />
              <MobileNavItem
                url={"/conversations"}
                label={"Conversations"}
                toggleNav={toggleNav}
              />
              <MobileNavItem
                url={"/browse"}
                label={"Browse"}
                toggleNav={toggleNav}
              />
              <MobileNavItem
                url={"/logout"}
                label={"Logout"}
                toggleNav={toggleNav}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
