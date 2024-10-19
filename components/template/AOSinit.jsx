"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-sine",
    });
  }, []);
  return null;
}
