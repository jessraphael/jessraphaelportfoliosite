import { FC, useState } from "react";
import NavItem from "./NavItem";
import Button from "../Layout/Button";
import { BsGithub } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

type Props = {
  location: "home";
};

const Navbar: FC<Props> = ({ location }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { title: "Home", href: "#" },
    { title: "About Me", href: "#aboutme" },
    { title: "Projects", href: "#projects" },
    { title: "Experiences", href: "#experiences" },
  ];

  return (
    <div
      className={`fixed z-40 flex flex-row items-center w-full h-auto px-8 py-6 bg-dark`}
    >
      <div>
        <Link href="/" passHref>
          <div className="text-1xl font-black text-white select-nonehover:text-transparent bg-clip-text cursor-pointer select-none">
            Jess Raphael Ong
          </div>
        </Link>
      </div>
      {location === "home" ? (
        <>
          {/* MOBILE */}
          <div className="sm:hidden ml-auto">
            <FaBars
              className="text-white text-2xl"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
          <div
            className={`h-screen w-64 absolute right-0 top-0 bg-dark transition-all duration-300 flex flex-col gap-6 items-center pt-20 ${
              sidebarOpen ? "" : "translate-x-full"
            }`}
          >
            <FaTimes
              className="text-white text-2xl absolute top-6 right-6 "
              onClick={() => setSidebarOpen(false)}
            />
            {navItems.map((item) => {
              return (
                <NavItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  closeSidebar={() => setSidebarOpen(false)}
                />
              );
            })}
          </div>
          {/* DESKTOP */}
          <div className="hidden sm:flex flex-grow max-w-md justify-evenly">
            {navItems
              .map((item) => {
                return (
                  <NavItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  />
                );
              })}
          </div>
        </>
      ) : (
        <></>
      )}

    </div>
  );
};
export default Navbar;
