"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTopBtn() {
  const [isScrolled, setIsScrolled] = useState(true);
  useEffect(() => {
    function HandleTopBtn() {
      const currentScrolled = window.pageYOffset;
      if (currentScrolled > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", HandleTopBtn);
    return () => {
      window.removeEventListener("scroll", HandleTopBtn);
    };
  });
  function GoTopFunction() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      onClick={GoTopFunction}
      className={`${
        !isScrolled ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"
      } fixed bottom-6 left-6 bg-white transition-all rounded-full sm:text-3xl text-xl text-zinc-500 p-3 z-50 shadow-3xl hover:bg-zinc-300`}
    >
      <IoIosArrowUp />
    </button>
  );
}
