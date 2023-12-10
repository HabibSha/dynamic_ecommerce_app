import React from "react";

import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

import playstore from "../assets/app-icons/playstore.png";
import apple from "../assets/app-icons/apple.png";

const Footer = () => {
  return (
    <>
      <section className="bg-slate-900 font-Poppins sm:px-6 px-4">
        <article className="max-w-[1580px] mx-auto 2xl:py-[80px] py-[100px]">
          <div className="2xl:flex gap-[100px] h-[700px] lg:h-[440px] 2xl:h-[250px] block">
            <div className="2xl:w-[600px] h-[230px] sm:h-[170px]">
              <div className="max-w-[160px] text-xl text-white font-bold">
                E-COMMERCE
              </div>
              <p className="sm:text-base text-sm text-slate-300 mr-4 mt-4">
                This is E-commerce website. you can buy anything from this
                website.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mt-5">
                <div className="max-w-[200px] flex items-center gap-4 border-[1px] border-slate-200 px-4 py-2 rounded-lg cursor-pointer">
                  <img
                    src={playstore}
                    alt="PlayStore"
                    className="sm:max-w-[33px] max-w-[23px]"
                  />
                  <div>
                    <p className="sm:text-[11px] text-[10px] text-slate-300">
                      Download on
                    </p>
                    <p className="mt-1 sm:text-[13px] text-[12px] text-slate-300">
                      Google Play Store
                    </p>
                  </div>
                </div>
                <div className="max-w-[200px] flex items-center gap-4 border-[1px] border-slate-200 px-4 py-2 rounded-lg cursor-pointer">
                  <img
                    src={apple}
                    alt="AppleStore"
                    className="sm:max-w-[33px] max-w-[23px]"
                  />
                  <div>
                    <p className="sm:text-[11px] text-[10px] text-slate-300">
                      Download on
                    </p>
                    <p className="mt-1 sm:text-[13px] text-[12px] text-slate-300">
                      Apple Store
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-x-7 2xl:mt-0 mt-10 content-center justify-items-start 2xl:justify-items-center">
              <div className="">
                <ul>
                  <li className="font-medium text-white">Solutions</li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-6">
                    <Link>Marketing</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Analytics</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Commerce</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Insights</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li className="font-medium text-white">Customer Care</li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-6">
                    <Link>Help Center</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>How to Buy</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Returns & Refunds</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Contact Us</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="font-medium text-white">E-Commerce</li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-6">
                    <Link>About E-commerce</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Digital Payments</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Product Delivery</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="lg:mt-0 mt-10">
                <ul>
                  <li className="font-medium text-white">Others</li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-6">
                    <Link>About</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Blog</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Claim</Link>
                  </li>
                  <li className=" sm:text-base text-sm text-slate-300 hover:text-slate-100 mt-5">
                    <Link>Partners</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <div className="max-w-[1580px] mx-auto border-t-[0.5px] border-slate-700"></div>
        <article className="max-w-[1580px] mx-auto flex flex-col gap-5 sm:flex-row justify-between items-center py-[30px]">
          <div className="text-sm text-slate-400">
            <p>&copy; 2023 E-commerce. All rights reserved.</p>
          </div>
          <div className="flex items-center sm:gap-8 gap-5">
            <BsFacebook className="text-xl text-slate-400 hover:text-slate-300 cursor-pointer" />
            <BsInstagram className="text-xl text-slate-400 hover:text-slate-300 cursor-pointer" />
            <BsTwitter className="text-xl text-slate-400 hover:text-slate-300 cursor-pointer" />
            <BsPinterest className="text-xl text-slate-400 hover:text-slate-300 cursor-pointer" />
            <BsYoutube className="text-xl text-slate-400 hover:text-slate-300 cursor-pointer" />
          </div>
        </article>
      </section>
    </>
  );
};

export default Footer;
