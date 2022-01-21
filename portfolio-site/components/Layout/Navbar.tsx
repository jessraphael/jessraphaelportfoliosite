import { FC, useState } from "react";
import NavItem from "./NavItem";
import userData from "../data";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

type Props = {
  location: "home";
};

const Navbar: FC<Props> = ({ location }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { title: "", href: "#home" },
    // { title: "About Me", href: "#aboutme" },
    // { title: "Projects", href: "#projects" },
    // { title: "Experiences", href: "#experiences" },
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
            {navItems.map((item) => {
              return (
                <NavItem key={item.title} title={item.title} href={item.href} />
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="space-x-4 flex flex-row items-center ml-auto">
        <a
          href={userData.socialLinks.facebook}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook h-5 w-5"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.258,4.458c0-0.144,0.02-0.455,0.06-0.931c0.043-0.477,0.223-0.976,0.546-1.5c0.32-0.522,0.839-0.991,1.561-1.406
                C11.144,0.208,12.183,0,13.539,0h3.82v4.163h-2.797c-0.277,0-0.535,0.104-0.768,0.309c-0.231,0.205-0.35,0.4-0.35,0.581v2.59h3.914
                c-0.041,0.507-0.086,1-0.138,1.476l-0.155,1.258c-0.062,0.425-0.125,0.819-0.187,1.182h-3.462v11.542H8.258V11.558H5.742V7.643
                h2.516V4.458z"
            />
          </svg>
        </a>
        <a
          href={userData.socialLinks.instagram}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram h-5 w-5"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        </a>

        <a href={userData.socialLinks.github}>
          <BsGithub className="text-white text-2xl cursor-pointer" />
        </a>

        <a
          href={userData.socialLinks.linkedin}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-linkedin h-5 w-5"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
