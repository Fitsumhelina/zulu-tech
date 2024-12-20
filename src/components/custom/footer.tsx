"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import { FaLinkedin, FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import {FaUpwork} from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <h3 className="text-xl font-bold">
              <Logo />
            </h3>
            <p className="text-gray-400 mb-4">Turning Vision into Reality</p>
          </div>
          <div className="grid grid-cols md:grid-cols-2 gap-8 sm:gap-20 mb-4">
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
              <h2 className="mb-6 text-sm font-semibol uppercase text-white">
                Get in Touch
              </h2>
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
                  Zuulu.tech@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div>
               {/* social media */}
               <div className="flex md:flex-col gap-5 text-gray-200">
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
    </footer>
  );
};
