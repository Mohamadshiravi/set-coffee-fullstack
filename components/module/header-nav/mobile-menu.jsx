import { CgProfile } from "react-icons/cg";
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaComments } from "react-icons/lia";
import { GoUnread } from "react-icons/go";
import { TbLayoutDashboard } from "react-icons/tb";
import Link from "next/link";
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import axios from "axios";
import { ShowSwal } from "@/utils/helper-function";

export default function MobileMenu({
  isNavOpen,
  CloseMenu,
  pathName,
  theUser,
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } w-full h-screen fixed top-0 left-0 z-[51] backdrop-blur-sm`}
        onClick={CloseMenu}
      ></div>
      <div
        className={`${
          isNavOpen ? "  translate-x-0" : " translate-x-[100%]"
        }      h-screen fixed top-0 w-[300px] duration-300 right-0 shadow-lg bg-gray-100 z-[52] overflow-x-hidden overflow-y-scroll transition-all`}
      >
        {!theUser ? (
          <div className="p-2 mt-2">
            <Link
              href={"/auth/login"}
              className="bg-zinc-800 shadow-lg shadow-zinc-500 text-white text-xl moraba-bold rounded-lg p-4 w-full flex items-center justify-center gap-4 hover:bg-zinc-900 transition"
            >
              <CgProfile className="text-3xl" />
              <span> ورود | عضویت</span>
            </Link>
          </div>
        ) : (
          <div className="p-2">
            <div className="flex gap-3 items-center border-b border-zinc-100">
              <div className="w-full">
                <h2 className="text-zinc-800 font-bold text-xl truncate w-full text-left">
                  {theUser.name}
                </h2>
                <h3 className="text-zinc-600 text-sm truncate w-full text-left">
                  {theUser.email}
                </h3>
              </div>
              <div className="w-[90px] aspect-square overflow-hidden rounded-full bg-gray-200">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={theUser.avatar || "/img/bg-photo/guest.jpg"}
                  width={800}
                  height={800}
                  alt={theUser.name}
                />
              </div>
            </div>
            <label className="realtive select-none">
              <input
                type="checkbox"
                checked={isProfileOpen}
                onChange={() => {
                  setIsProfileOpen(!isProfileOpen);
                }}
                className="absolute peer w-0 h-0"
              />
              <div className="bg-zinc-800 mt-2 shadow-lg shadow-zinc-500 text-white text-xl rounded-lg peer-checked:rounded-none peer-checked:rounded-t-lg py-3 px-4 w-full flex items-center justify-between hover:bg-zinc-900 transition">
                <span className="text-lg font-mono font-bold">
                  {theUser.username}
                </span>
                <IoIosArrowDown
                  className={`${
                    isProfileOpen ? "rotate-0" : "rotate-180"
                  } transition-all`}
                />
              </div>
              <ul className="hidden peer-checked:flex flex-col bg-zinc-800 p-2 rounded-b-lg gap-3 moraba-bold text-sm font-bold items-center">
                {theUser.role === "ADMIN" && (
                  <Link
                    href={"/p-admin"}
                    className="flex bg-stone-100 hover:bg-stone-200 transition-all cursor-pointer items-center justify-start w-full gap-4 text-zinc-700 p-2 rounded-lg"
                  >
                    <span className="block bg-backicon p-2 rounded-lg">
                      <GrUserAdmin className="text-2xl text-icon" />
                    </span>
                    <h3>پنل ادمین</h3>
                  </Link>
                )}
                <Link
                  href={"/p-user"}
                  className="flex bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer items-center justify-start w-full gap-4 text-white p-2 rounded-lg"
                >
                  <span className="block bg-backicon p-2 rounded-lg">
                    <TbLayoutDashboard className="text-xl text-icon" />
                  </span>
                  <h3>پنل کاربری</h3>
                </Link>
                <Link
                  href={"/p-user/tikets"}
                  className="flex bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer items-center justify-start w-full gap-4 text-white p-2 rounded-lg"
                >
                  <span className="block bg-backicon p-2 rounded-lg">
                    <GoUnread className="text-xl text-icon" />
                  </span>
                  <h3>تیکت های پشتیبانی</h3>
                </Link>
                <li className="flex bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer items-center justify-start w-full gap-4 text-white p-2 rounded-lg">
                  <span className="block bg-backicon p-2 rounded-lg">
                    <HiOutlineDocumentText className="text-xl text-icon" />
                  </span>
                  <h3>سفارش ها</h3>
                </li>
                <Link
                  href={"/p-user/comments"}
                  className="flex bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer items-center justify-start w-full gap-4 text-white p-2 rounded-lg"
                >
                  <span className="block bg-backicon p-2 rounded-lg">
                    <LiaComments className="text-xl text-icon" />
                  </span>
                  <h3>کامنت ها</h3>
                </Link>
                <Link
                  href={"/p-user/account-details"}
                  className="flex bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer items-center justify-start w-full gap-4 text-white p-2 rounded-lg"
                >
                  <span className="block bg-backicon p-2 rounded-lg">
                    <FaRegCircleUser className="text-xl text-icon" />
                  </span>
                  <h3>جزئیات حساب</h3>
                </Link>
                <hr className="border w-full border-zinc-700" />
                <button
                  onClick={logOutHandler}
                  className="flex bg-red-500 hover:bg-red-600 transition-all cursor-pointer items-center justify-center w-full text-zinc-700 p-2 rounded-lg"
                >
                  <h3>خروج</h3>
                </button>
              </ul>
            </label>
          </div>
        )}
        <div className="flex flex-col gap-4 p-2 moraba-bold font-bold text-lg text-zinc-700">
          <Link
            href={"/"}
            className={`cursor-pointer py-2 px-3 hover:bg-mybrown2 hover:text-white transition rounded-lg ${
              pathName === "/"
                ? "bg-mybrown2 text-white"
                : "bg-white text-zinc-800"
            }`}
          >
            صفحه اصلی
          </Link>
          <Link
            href={"/products"}
            className={`cursor-pointer py-2 px-3 hover:bg-mybrown2 hover:text-white transition rounded-lg ${
              pathName === "/products"
                ? "bg-mybrown2 text-white"
                : "bg-white text-zinc-800"
            }`}
          >
            فروشگاه
          </Link>
          <Link
            href={"/blog"}
            className={`cursor-pointer py-2 px-3 hover:bg-mybrown2 hover:text-white transition rounded-lg ${
              pathName === "/blog"
                ? "bg-mybrown2 text-white"
                : "bg-white text-zinc-800"
            }`}
          >
            وبلاگ
          </Link>
          <Link
            href={"/contact-us"}
            className={`cursor-pointer py-2 px-3 hover:bg-mybrown2 hover:text-white transition rounded-lg ${
              pathName === "/contact-us"
                ? "bg-mybrown2 text-white"
                : "bg-white text-zinc-800"
            }`}
          >
            تماس با ما
          </Link>
          <Link
            href={"/about-us"}
            className={`cursor-pointer py-2 px-3 hover:bg-mybrown2 hover:text-white transition rounded-lg ${
              pathName === "/about-us"
                ? "bg-mybrown2 text-white"
                : "bg-white text-zinc-800"
            }`}
          >
            درباره ما
          </Link>
          <Link
            href={"about-site"}
            className={`cursor-pointer py-2 px-3 hover:bg-mybrown2 hover:text-white transition rounded-lg ${
              pathName === "/about-site"
                ? "bg-mybrown2 text-white"
                : "bg-white text-zinc-800"
            }`}
          >
            درباره سایت
          </Link>
        </div>
        <div className="p-2 flex flex-col gap-2">
          {theUser && (
            <Link
              href={"p-user/wishlist"}
              className="bg-red-700 text-nowrap text-white shadow-lg shadow-red-300 text-xl moraba-bold rounded-lg p-4 w-full flex items-center justify-center gap-4 hover:bg-red-800 transition"
            >
              <IoHeartCircleSharp className="text-3xl" />
              <span>علاقه مندی ها</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
  async function logOutHandler() {
    const res = await axios.post("/api/auth/logout");
    if (res.status === 200) {
      const isClicked = await ShowSwal(
        "success",
        "شما با موفقت از اکانت خود خارج شدید"
      );
      if (isClicked) {
        return (location.href = "/");
      } else {
        return (location.href = "/");
      }
    }
  }
}
