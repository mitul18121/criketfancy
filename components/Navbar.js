import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Cricket1 from "../images/cricket.png";
import { parseCookies } from "nookies";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const cookieuser = parseCookies();
  const verifyUser = cookieuser.user ? JSON.parse(cookieuser.user) : "";
  const router = useRouter();

  const active = (route) => {
    if (route === router.pathname) {
      return "lg:inline-flex lg:w-auto w-full lg:ml-3 px-3 py-2 rounded text-white font-bold items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 hover:text-white ";
    } else {
      return "lg:inline-flex lg:w-auto w-full lg:ml-3 px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gradient-to-r from-green-400 to-blue-500 hover:text-white ";
    }
  };

  return (
    <nav className="flex items-center flex-wrap bg-gradient-to-r from-green-400 to-indigo-500 p-3 ">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 ">
          <Image src={Cricket1} alt="logo" height={50} width={50} />
          <span className="text-xl text-white font-bold uppercase tracking-wide ml-3">
            Animation cricket
          </span>
        </a>
      </Link>
      <button
        onClick={() => setIsActive(!isActive)}
        className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          isActive ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {!verifyUser ? (
            <>
              <Link href="/login">
                <a className={active("/login")}>Login</a>
              </Link>
              <Link href="/register">
                <a className={active("/register")}>Register</a>
              </Link>
            </>
          ) : (
            <>
              <Link href="/">
                <a className={active("/")}>Home</a>
              </Link>
              <Link href="/upcoming">
                <a className={active("/upcoming")}>Upcoming Matches</a>
              </Link>
              <Link href="/cricketnews">
                <a className={active("/cricketnews")}>news</a>
              </Link>
              <Link href="/aboutus">
                <a className={active("/aboutus")}>About us</a>
              </Link>
              <Link href="/logout">
                <a className={active("/logout")}>Logout</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
