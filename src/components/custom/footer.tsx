"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import { FaLinkedin, FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
export const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-20 text-xl">
      <div className="container mx-auto px-8 mb-4">
        <div className="flex w- flex-col md:flex-row justify-between items-start mb-4">
          <div className="mb-10">
            <h3 className="text-xl font-bold ">
              <Logo width={200} height={200} />
            </h3>
            <Link href="/privacy" className="text-gray-400 hover:text-white mb-10 ml-3 text-sm" >Privacy Notice</Link>
          </div>
          <div className="flex flex-col md:flex-row   md:justify-evenly gap-4 md:gap-20  ml-5 mb-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Service
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Software Development</li>
                <li className="mb-4">Talent Outsourcing</li>
                <li className="mb-4">Custom Solutions</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Get in Touch
              </h2>
              <div className="flex flex-col md:flex-row items-start justify-start  gap-3 md:gap-20">
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 flex items-center">
                    <MdLocationOn className="mr-2 text-white" />
                    Addis Ababa, Ethiopia
                  </li>
                  <li className="mb-4 flex items-center">
                    <MdPhone className="mr-2 text-white" />
                    +251912323811
                  </li>
                  <li className="mb-4 flex items-center">
                    <MdEmail className="mr-2 text-white" />
                    zuulu.tech@gmail.com
                  </li>
                </ul>
                <div className="sm:hidden border border-gray-400 w-1/3 "></div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                  <li className="mb-4 flex items-center">
                    <MdLocationOn className="mr-2 text-white" />
                    Warsaw, Poland, Europe
                  </li>
                  <li className="flex items-center pl-6 gap-7">
                    <span>Coming soon</span>
                    <div className="loader"></div>
                  </li>
                </ul>
              </div>


            </div>
          </div>
          <div>
            {/* social media */}
            <div className="flex md:flex-col gap-5 text-gray-200 ml-5 mt-10 sm:mt-0">
              <Link
                href="https://www.upwork.com/agencies/zulu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaUpwork className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/zulu-software/"
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@zulu_tech?_t=8sJIKXbjuI2&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <FaTiktok className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/zulutech_/profilecard/?igsh=MXhkOW02ejNpZnRicQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61565672262914&mibextid=kFxxJD"
                target="_blank"
                rel="noopener noreferrer"
                className="block "
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@zulu-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
