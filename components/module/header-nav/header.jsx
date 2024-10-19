"use client";

import { CgProfile } from "react-icons/cg";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import ProfileSection from "./profile-section";

export default function Header({ theUser, wishLength }) {
  const pathName = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavTop, setIsNavTop] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    setUserCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);
  useEffect(() => {
    function HandleNavBar() {
      const currentScrolled = window.pageYOffset;
      if (currentScrolled > 100) {
        setIsNavTop(true);
        setIsProfileOpen(false);
      } else {
        setIsNavTop(false);
      }
    }

    window.addEventListener("scroll", HandleNavBar);
    return () => {
      window.removeEventListener("scroll", HandleNavBar);
    };
  });
  return (
    <>
      <nav
        id={isNavTop ? "animate-fade" : "no-id"}
        className={` select-none  ${
          isNavTop
            ? "h-[75px] w-[98%] rounded-xl fixed bg-white/80 py-2 top-2 left-[1%]"
            : "absolute py-4 bg-white w-full top-0 left-0"
        } ${
          isNavTop ? "lg:px-20" : "lg:px-18"
        } sm:px-8 px-3 flex border-zinc-200 items-center border justify-center backdrop-blur-xl z-40 transition-all transition`}
      >
        <div className="flex items-center w-full justify-between">
          <button
            onClick={OpenMenu}
            className="lg:hidden shadow-md shadow-zinc-500 block hover:bg-zinc-900 transition bg-zinc-800 text-white h-[50px] aspect-square flex items-center justify-center text-3xl rounded-lg"
          >
            <RxHamburgerMenu />
          </button>
          <img src="/img/logo/logonew.png" />
          <div className="moraba-bold text-zinc-600 text-sm lg:flex gap-8 hidden">
            <Link
              href={"/"}
              className={`after:content-[''] hover:after:bg-mybrown2 after:absolute hover:after:h-[3px] hover:after:w-full hover:after:left-0 after:rounded-xl cursor-pointer after:transition-all after:-bottom-3 relative ${
                pathName === "/"
                  ? "after:bg-mybrown2 after:h-[3px] after:left-0 after:w-full"
                  : "after:bg-gray-200 after:h-[5px] after:left-[50%] after:w-[5px]"
              }`}
            >
              صفحه اصلی
            </Link>
            <Link
              href={"/products"}
              className={`after:content-[''] hover:after:bg-mybrown2 after:absolute hover:after:h-[3px] hover:after:w-full hover:after:left-0 after:rounded-xl cursor-pointer after:transition-all after:-bottom-3 relative ${
                pathName === "/products"
                  ? "after:bg-mybrown2 after:h-[3px] after:left-0 after:w-full"
                  : "after:bg-gray-200 after:h-[5px] after:left-[50%] after:w-[5px]"
              }`}
            >
              فروشگاه
            </Link>
            <Link
              href={"/blog"}
              className={`after:content-[''] hover:after:bg-mybrown2 after:absolute hover:after:h-[3px] hover:after:w-full hover:after:left-0 after:rounded-xl cursor-pointer after:transition-all after:-bottom-3 relative ${
                pathName === "/blog"
                  ? "after:bg-mybrown2 after:h-[3px] after:left-0 after:w-full"
                  : "after:bg-gray-200 after:h-[5px] after:left-[50%] after:w-[5px]"
              }`}
            >
              وبلاگ
            </Link>
            <Link
              href={"/contact-us"}
              className={`after:content-[''] hover:after:bg-mybrown2 after:absolute hover:after:h-[3px] hover:after:w-full hover:after:left-0 after:rounded-xl cursor-pointer after:transition-all after:-bottom-3 relative ${
                pathName === "/contact-us"
                  ? "after:bg-mybrown2 after:h-[3px] after:left-0 after:w-full"
                  : "after:bg-gray-200 after:h-[5px] after:left-[50%] after:w-[5px]"
              }`}
            >
              تماس با ما
            </Link>
            <Link
              href={"/about-us"}
              className={`after:content-[''] hover:after:bg-mybrown2 after:absolute hover:after:h-[3px] hover:after:w-full hover:after:left-0 after:rounded-xl cursor-pointer after:transition-all after:-bottom-3 relative ${
                pathName === "/about-us"
                  ? "after:bg-mybrown2 after:h-[3px] after:left-0 after:w-full"
                  : "after:bg-gray-200 after:h-[5px] after:left-[50%] after:w-[5px]"
              }`}
            >
              درباره ما
            </Link>
            <Link
              href={"/about-site"}
              className={`after:content-[''] hover:after:bg-mybrown2 after:absolute hover:after:h-[3px] hover:after:w-full hover:after:left-0 after:rounded-xl cursor-pointer after:transition-all after:-bottom-3 relative ${
                pathName === "/about-site"
                  ? "after:bg-mybrown2 after:h-[3px] after:left-0 after:w-full"
                  : "after:bg-gray-200 after:h-[5px] after:left-[50%] after:w-[5px]"
              }`}
            >
              درباره سایت
            </Link>
          </div>
          <div className="flex items-center text-sm gap-3 h-[50px]">
            {theUser && (
              <Link
                href={"/p-user/wishlist"}
                className="bg-gray-100 relative text-zinc-800 moraba-bold rounded-lg aspect-square items-center justify-center h-full sm:flex hidden hover:bg-zinc-200 transition"
              >
                <CiHeart className="text-3xl" />
                <span className="bg-mybrown2 rounded-full text-sm text-white w-[25px] block aspect-square moraba-bold flex items-center justify-center absolute -top-2 -right-2">
                  {wishLength}
                </span>
              </Link>
            )}
            <Link
              href={"/cart"}
              className="bg-gray-100 aspect-square flex items-center justify-center relative text-zinc-800 moraba-bold rounded-lg h-full hover:bg-zinc-200 transition"
            >
              <PiShoppingCartSimpleLight className="text-3xl" />
              <span className="bg-mybrown2 rounded-full text-sm text-white w-[25px] block aspect-square moraba-bold flex items-center justify-center absolute -top-2 -right-2">
                {userCart.length}
              </span>
            </Link>
            {!theUser ? (
              <Link
                href={"/auth/login"}
                className={`bg-zinc-800 relative text-white moraba-bold shadow-xl shadow-zinc-600 ${
                  isNavTop ? "px-0 aspect-square" : "px-4"
                } items-center justify-center rounded-lg h-full lg:flex hidden items-center gap-2 hover:bg-zinc-900 transition`}
              >
                <span className={`${isNavTop ? "hidden" : "block"}`}>
                  ورود | عضویت
                </span>
                <CgProfile
                  className={`${isNavTop ? "text-3xl" : "text-2xl"}`}
                />
              </Link>
            ) : (
              <ProfileSection
                isProfileOpen={isProfileOpen}
                isNavTop={isNavTop}
                theUser={theUser}
                setIsProfileOpen={setIsProfileOpen}
              />
            )}
          </div>
        </div>
      </nav>
      <MobileMenu
        CloseMenu={CloseMenu}
        isNavOpen={isNavOpen}
        pathName={pathName}
        theUser={theUser}
      />
    </>
  );
  function OpenMenu() {
    setIsNavOpen(true);
  }
  function CloseMenu() {
    setIsNavOpen(false);
  }
}
