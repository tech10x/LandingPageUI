"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import brandLogo from "@/assets/images/Tech10x-logo.png";
import { usePathname } from "next/navigation";
import { BsExclamationOctagonFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { PiPresentationChartBold } from "react-icons/pi";
import { FcSupport } from "react-icons/fc";
import { IoCloseCircleOutline } from "react-icons/io5";
const SideHeader = ({ closeMenu }) => {
  const pathname = usePathname();
  return (
    <nav className="bg-white shadow-2xl h-screen fixed top-0 left-0 min-w-[320px] py-6 px-4 overflow-auto">
      <div className="mt-0">
        <button
          className="float-right mt-2 hover:transition-transform hover:scale-110 hover:rounded-full"
          onClick={closeMenu}
        >
          <IoCloseCircleOutline className="text-5xl font-bold hover:text-blue-900" />
        </button>
        <ul onClick={closeMenu}>
          <Link
            href="/"
            className={"text-2xl font-bold text-black flex items-center gap-2"}
          >
            <Image
              src={brandLogo}
              alt="Tech10x logo"
              height={100}
              width={200}
              className={"inline-block"}
              loading="eager"
              priority={true}
            />
          </Link>
          <li>
            <Link
              prefetch={true}
              className={`text-black hover:text-blue-900 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/services" ? "link-active" : ""
              }`}
              href="/services"
            >
              <FcSupport className="w-[18px] h-[18px] mr-4" />
              <span>Service</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={`text-black hover:text-blue-900 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/projects" ? "link-active" : ""
              }`}
              href="/projects"
            >
              <PiPresentationChartBold className="w-[18px] h-[18px] mr-4" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={`text-black hover:text-blue-900 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/about" ? "link-active" : ""
              }`}
              href="/about"
            >
              <BsExclamationOctagonFill className="w-[18px] h-[18px] mr-4" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={`text-black hover:text-blue-900 text-sm flex items-center hover:bg-blue-50 rounded px-4 py-3 transition-all ${
                pathname === "/contact" ? "link-active" : ""
              }`}
              href="/contact"
            >
              <FaPhoneVolume className="w-[18px] h-[18px] mr-4" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideHeader;
