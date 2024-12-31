"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaLinkedin, FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mjkvqylb");
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    const errors: FormErrors = {};

    if (!name) {
      errors.name = "Name is required.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address.";
    }
    if (!message) {
      errors.message = "Message is required.";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        await handleSubmit(event);
        setShowPopup(true);
        form.reset();
        setTimeout(() => setShowPopup(false), 3000);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br p-6">
      <div className="mx-auto max-w-7xl mt-10">
        <div className="rounded-3xl sm:p-8 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-white/10 transform -skew-y-6" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/5 transform -skew-y-6" />

          <div className="bg-white dark:bg-gray-800 rounded-sm sm:rounded-lg shadow-xl p-8 relative">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-black">
                {/* <div className="absolute max-sm:top-0 max-sm:sticky top-[50%] right-2 transform -translate-y-1/2  w-12 bg-blue-500 rounded-l-lg p-2 space-y-4">
                  <Link
                    href="#"
                    className="block text-white hover:text-gray-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="block text-white hover:text-gray-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="block text-white hover:text-gray-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                </div> */}
                <h2 className="text-[#7B7FF6] text-2xl font-semibold mb-4">
                  {"Haven't Found What You Were Looking For?"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {"Please briefly describe your question, and we'll get back with an answer shortly."}
                </p>

                <form className="space-y-6" onSubmit={validateForm}>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="please describe your question here..."
                      className="  border-gray-200 text-black dark:text-white py-2 min-h-[120px]"

                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between gap-2">
                    <div className="w-1/2">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="  outline-none text-black dark:text-white border-gray-200 py-7"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm">{formErrors.name}</p>
                      )}
                    </div>

                    <div className="w-1/2">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className=" border-gray-200 text-black dark:text-white outline-none py-7"


                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm">{formErrors.email}</p>
                      )}
                    </div>

                  </div>



                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-[#6366F1] py-5 text-white"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </div>

              <div className="flex flex-col md:flex-row  justify-around md:border-2 border-gray-200 rounded-xl items-center">



                <div className="flex flex-col items-center  text-black dark:text-white">
                  <div className="rounded-md  mb-8">
                    <Image
                      src="/images/contact-us.avif"
                      alt="Contact illustration"
                      className="object-contain  rounded-md"
                      width={200}
                      height={200}
                    />
                  </div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4 flex items-center">
                      <MdLocationOn className="mr-2 text-black dark:text-white" />
                      Addis Ababa, Ethiopia
                    </li>
                    <li className="mb-4 flex items-center">
                      <MdPhone className="mr-2" />
                      +251912323811
                    </li>
                    <li className="mb-4 flex items-center">
                      <MdEmail className="mr-2 text-b;ack dark:text-white" />
                      zuulu.tech@gmail.com
                    </li>
                  </ul>
                </div>

                {/* social media */}
                <div className="flex md:flex-col gap-5 text-gray-800 dark:text-gray-200">
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
                    <FaTiktok className="w-6 h-6 " />
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
          </div>

          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
              <div className="bg-white p-8 rounded shadow-lg text-center">
                <p className="text-lg font-semibold text-gray-700 mb-4">
                  Thanks for your submission!
                </p>
                <Button
                  onClick={() => setShowPopup(false)}
                  className="bg-blue-500 hover:bg-[#6366F1] py-2 px-4 text-white rounded"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
