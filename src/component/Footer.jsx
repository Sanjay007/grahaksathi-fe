import React from "react";
import { Link,useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className={` ${isAdminPage ? "hidden" :""}  bg-[#382811] dark:bg-gray-800 `}>
      <footer className="max-w-screen-lg mx-auto p-4  md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl ">
          <Link href="#" className="flex flex-col-reverse text-2xl py-4 font-semibold text-white dark:text-white">
            {/* put SVG here */}
            <p className="py-4">Grahak Sathi</p>
            {/* <img src={"/logo-white-svg-main.svg"} height={100} width={125} alt="logo" style={{ objectFit: "cover" }} /> */}
          </Link>
          <h3 className="text-white">Sell old smartphones online. Instantly.</h3>
          <p className="my-6 text-sm text-[#828286] dark:text-gray-400">
            Seal the deal in just 3 steps! Get a price offer, fix a convenient location for pickup and finally, receive payment before the phone leaves your hands Say goodbye to standing at a shop counter and negotiating or going crazy answering
            messages from prospective buyers when they see your listing on a classifieds platform. Extraavalue is a breeze. Best Price - Zero Hassle!
          </p>
          <p className="my-6 text-sm text-[#828286] dark:text-gray-400">
            From your first smartphone - new or used, to your next smartphone on upgrade - Extravalue is going to make that experience and transition seamless, hassle- free and affordable through a range of new solutions.
          </p>

          <section>
            <ul className="grid grid-cols-2 md:grid-cols-4 w-1/2 md:w-4/5 whitespace-nowrap gap-3 justify-normal items-center my-6 text-white dark:text-white">
              <li>
                <Link href="#" className="hover:underline hover:underline-offset-4 ">
                  Sell Now
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:underline-offset-4  ">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:underline-offset-4 ">
                  Premium
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:underline-offset-4  ">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:underline-offset-4 ">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline hover:underline-offset-4">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:hover:underline hover:underline-offset-4">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:hover:underline hover:underline-offset-4">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="text-white font-semibold text-sm mb-2 md:hidden">Quick Links</h3>
            <ul className=" grid grid-cols-1 md:flex md:justify-between w-2/1 md:w-full whitespace-nowrap gap-1 justify-normal items-center text-white dark:text-white">
              <h3 className="hidden md:block text-white font-semibold text-sm mb-1">Quick Links</h3>
              <li>
                <Link href="#" className="cursor-pointer font-semibold text-[#828286] dark:text-gray-400 hover:text-[#ee5535] ">
                  Sell old Apple phone
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer font-semibold text-[#828286] dark:text-gray-400 hover:text-[#ee5535]">
                  Sell old Samsung phone
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer font-semibold text-[#828286] dark:text-gray-400 hover:text-[#ee5535]">
                  Sell old Xiaomi phone
                </Link>
              </li>
              <li>
                <Link href="#" className="cursor-pointer font-semibold text-[#828286] dark:text-gray-400 hover:text-[#ee5535]">
                  Sell old Vivo phone
                </Link>
              </li>
            </ul>
          </section>
          <div className="flex my-6 items-baseline mb-5">
            <p className="text-white font-semibold text-xs mr-2">Follow us on</p>
            <Link className="hover:underline mx-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-125 ease-linear transition-all transform-gpu rounded-sm" href="#">
              <img src="/1.png" width={18} height={18} alt="" />
            </Link>
            <Link className="hover:underline mx-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-125 ease-linear transition-all transform-gpu rounded-sm" href="#">
              <img src="/2.png" width={18} height={18} alt="" />
            </Link>
            <Link className="hover:underline mx-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-125 ease-linear transition-all transform-gpu rounded-sm" href="#">
              <img src="/3.png" width={18} height={18} alt="" />
            </Link>
            <Link className="hover:underline mx-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:scale-125 ease-linear transition-all transform-gpu rounded-sm" href="#">
              <img src="/4.png" width={18} height={18} alt="" />
            </Link>
          </div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2021-2022{" "}
            <Link href="#" className="hover:underline">
              Grahak Sathi™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
