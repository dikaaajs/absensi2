"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DesktopNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [buttonActive, setButtonActive] = useState("dashboard");
  return (
    <nav>
      <div
        className={`bg-first w-[50%] md:w-[20%] text-third px-[10px] md:px-[15px] py-[20px] rounded-md h-[90%] top-1/2 -translate-y-1/2 fixed duration-300 z-50 ${
          showNav ? "left-[20px]" : "-left-[55%] md:-left-[25%]"
        }`}
      >
        {/* logo */}
        <div className="pb-[20px]">
          <h1 className="text-[2em] font-poppins-bold text-second">JCO</h1>
        </div>

        {/* navigasi */}
        <div className="flex flex-col gap-[15px] font-montserrat-bold text-[.9em]">
          <Link
            href="/"
            className={buttonActive === "dashboard" ? "nav-active" : ""}
            onClick={() => setButtonActive("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            href="/anggota"
            className={buttonActive === "anggota" ? "nav-active" : ""}
            onClick={() => setButtonActive("anggota")}
          >
            Pelajar
          </Link>
          <Link
            href="/acara"
            className={buttonActive === "acara" ? "nav-active" : ""}
            onClick={() => setButtonActive("acara")}
          >
            Acara
          </Link>
        </div>

        {/* button */}
        <button
          className={`absolute bottom-[10px]  duration-500 ${
            showNav
              ? "right-[-10%] scale-x-[-1]"
              : "right-[-35%] md:right-[-50%]"
          }`}
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#434343"
            className="bg-third rounded-full p-[5px]"
          >
            <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <div className="w-full fixed bottom-0 bg-first text-center text-white font-montserrat-bold text-[.9em] py-[10px] z-50">
      <div className="flex justify-between items-center px-[15px]">
        <div className="w-[40%] flex gap-[40px]">
          <Link className="w-fit" href={"/anggota"}>
            <img src="/people-white.svg" className="w-[25px]" alt="" />
          </Link>

          <Link className="w-fit" href={"/acara"}>
            <img src="/calendar-white.svg" className="w-[25px]" alt="" />
          </Link>
        </div>

        <div className="w-[40%] flex flex-row-reverse gap-[40px]">
          <Link className="w-fit" href={"/info"}>
            <img src="/info.svg" className="w-[25px]" alt="" />
          </Link>

          <Link className="w-fit" href={"/help"}>
            <img src="/help.svg" className="w-[25px]" alt="" />
          </Link>
        </div>
        <Link
          className="w-[40px] h-[40px] p-[10px] bg-second rounded-full fixed bottom-[-3px] left-[50%] transform -translate-x-1/2 -translate-y-1/2 outline outline-[10px] outline-first"
          href={"/"}
        >
          <img src="/dashboard.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [buttonActive, setButtonActive] = useState("dashboard");
  const [lebar, setLebar] = useState(0);

  useEffect(() => {
    setLebar(window.innerWidth);
  }, []);

  if (lebar > 425) {
    return <DesktopNav />;
  }

  if (lebar <= 425) {
    return <MobileNav />;
  }
}
