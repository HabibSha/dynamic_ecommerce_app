import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { BsHeart, BsCart2 } from "react-icons/bs";
import { IoGitCompareOutline } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { productCatLinks } from "../constants";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full">
        <article className="shadow-sm font-Poppins">
          {/* Upper Header */}
          <header className="text-slate-300 bg-bgHeaderPri border-b border-slate-700 py-1 upper">
            <div className="max-w-[1580px] mx-auto h-[35px] flex items-center justify-between sm:px-6 px-4">
              <p className="text-xs">Free Shipping Over $100 & Free Returns</p>
              <div>
                <a href="" className="text-xs">
                  Hotline: +055-544-333-120
                </a>
              </div>
            </div>
          </header>
          {/* Middle Header */}
          <header className="max-w-[1580px] mx-auto h-[72px] flex items-center justify-between sm:px-6 px-4 middle">
            <div className="flex gap-3">
              {/* For Small Device */}
              <div className="lg:hidden flex flex-1 justify-end items-center">
                {showMenu ? (
                  <div
                    className="w-[260px] text-[22px] text-slate-800 cursor-pointer absolute top-4 left-2 z-50"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <div className="flex items-center gap-1 mb-3">
                      <AiOutlineClose />{" "}
                      <span className="text-[17px] text-black font-medium">
                        Menu
                      </span>
                    </div>
                    <div className="border-b-[1px] border-gray-300"></div>
                  </div>
                ) : (
                  <div
                    className="text-[22px] cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    <AiOutlineMenu />
                  </div>
                )}
              </div>

              <div
                className={`${
                  showMenu ? "left-0 top-0" : "-left-[275px] top-0"
                } lg:hidden w-[275px] h-screen z-30 absolute duration-300 ease-linear px-3 bg-white drop-shadow-lg`}
              >
                <nav>
                  <ul className="text-sm flex flex-col items-start list-none mt-[65px] md:gap-6 gap-4">
                    <li>
                      <NavLink
                        to={"/"}
                        className="hover:text-bgColor duration-300"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"products"}
                        className="hover:text-bgColor duration-300"
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"new-arrivals"}
                        className="hover:text-bgColor duration-300"
                      >
                        New Arrivals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"all-brands"}
                        className="hover:text-bgColor duration-300"
                      >
                        All Brands
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"contact"} className="hover:text-bgColor">
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"about"} className="hover:text-bgColor">
                        About
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <Link to={"/"}>
                <p className="lg:2xl sm:text-xl text-lg font-bold">
                  E-COMMERCE
                </p>
              </Link>
            </div>

            {/* For Large Screen */}

            <div className="hidden lg:block relative px-6">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search product here..."
                className="2xl:w-[700px] xl:w-[600px] lg:w-[470px] md:w-[400px] placeholder:text-sm placeholder:text-gray-500 px-4 py-2 border border-gray-300 focus:outline-none rounded-sm"
              />
              <button className="ml-3 py-2 px-6 bg-bgColor hover:bg-bgHover duration-300 text-white border rounded-md">
                Search
              </button>
            </div>

            <div className="flex items-center md:gap-6 gap-4">
              {/* For Large Screen */}
              <div className="hidden xl:block">
                <Link
                  to={"login"}
                  className="whitespace-nowrap hover:text-bgColor duration-300"
                >
                  Login
                </Link>{" "}
                <span>/</span>{" "}
                <Link
                  to={"register"}
                  className="whitespace-nowrap hover:text-bgColor duration-300"
                >
                  Register
                </Link>
                <span className="py-2 border-r-2 border-gray-200 ml-7"></span>
              </div>

              <div
                className="relative xl:hidden block"
                onClick={() => setToggle(!toggle)}
              >
                <div className="text-[21px] sm:text-[23px] lg:text-[28px] text-black hover:text-bgColor cursor-pointer">
                  <CiUser />
                </div>
                {toggle && (
                  <div className="absolute w-[150px] bg-white flex flex-col right-0 my-[17px] border-t-[3px] border-bgColor rounded-md duration-300 px-3 py-2 shadow drop-shadow-md">
                    <Link
                      to={"register"}
                      className="whitespace-nowrap hover:text-bgColor duration-300"
                    >
                      Register
                    </Link>
                    <Link
                      to={"login"}
                      className="whitespace-nowrap hover:text-bgColor duration-300 mt-1"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>

              <div className="text-[21px] sm:text-[23px] lg:text-[28px] hover:text-bgColor relative cursor-pointer">
                <IoGitCompareOutline />
                <span className="text-xs text-white text-center absolute -top-2 -right-2 bg-bgColor w-[18px] p-[1px] rounded-full">
                  0
                </span>
              </div>

              <div className="sm:block hidden text-[23px] lg:text-[28px] hover:text-bgColor relative cursor-pointer">
                <BsHeart />
                <span className="text-xs text-white text-center absolute -top-2 -right-2 bg-bgColor w-[18px] p-[1px] rounded-full">
                  0
                </span>
              </div>

              <div className="text-[21px] sm:text-[23px] lg:text-[28px] hover:text-bgColor relative cursor-pointer">
                <BsCart2 />
                <span className="text-xs text-white text-center absolute -top-2 -right-2 bg-bgColor w-[18px] p-[1px] rounded-full">
                  0
                </span>
              </div>
            </div>
          </header>
          <header className="max-w-full mb-4 lg:mb-0 sm:px-6 px-4">
            {/* For Small Screen */}

            <div className="lg:hidden flex">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search product here..."
                className="w-full placeholder:text-sm placeholder:text-gray-500 border border-gray-300 focus:outline-none rounded-md"
              />
              <button className="ml-3 py-2 px-6 bg-bgColor hover:bg-bgHover duration-300 text-white border rounded-md">
                Search
              </button>
            </div>
          </header>

          <header className="lg:border-t lg:block hidden lower">
            <nav className="max-w-[1580px] mx-auto h-[50px] flex items-center gap-2 sm:px-6 px-4">
              <div className="text-sm list-none">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="text-lg">
                    <RiMenu3Line />
                    {isOpen && (
                      <div className="w-[295px] flex justify-between items-center gap-1 absolute top-0 left-0 z-50 mt-3 px-5">
                        <span className="text-[17px] text-black font-medium">
                          Product Categories
                        </span>
                        <AiOutlineClose />
                      </div>
                    )}
                  </div>
                  <div className="font-medium uppercase flex items-center gap-2">
                    Product Categories{" "}
                    <span className="text-xl ml-4">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </div>
                </button>
                <div
                  className={`${
                    isOpen ? "left-0 top-0" : "-left-[300px] top-0"
                  } w-[300px] h-screen z-30 absolute duration-300 ease-linear px-3 bg-white drop-shadow-lg`}
                >
                  <ul className="mt-12 border-t">
                    {productCatLinks.map((productCat) => {
                      return <p key={productCat.id}>{productCat.title}</p>;
                    })}
                  </ul>
                </div>
              </div>
              <ul className="text-sm flex items-center list-none lg:gap-8 gap-5">
                <li className="text-slate-300 ml-1">|</li>
                <li>
                  <NavLink
                    to={"/"}
                    className="font-medium hover:text-bgColor duration-300"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"products"}
                    className="font-medium hover:text-bgColor duration-300"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"new-arrivals"}
                    className="font-medium hover:text-bgColor duration-300"
                  >
                    New Arrivals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"all-brands"}
                    className="font-medium hover:text-bgColor duration-300"
                  >
                    All Brands
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"contact"}
                    className="font-medium hover:text-bgColor"
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"about"}
                    className="font-medium hover:text-bgColor"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </article>
      </section>
    </>
  );
};

export default Header;

// {/* <section className="w-full">
//         <article className="shadow-sm font-Poppins">
//           {/* Upper Header */}
//           <header className="text-slate-200 bg-bgHeaderPri border-b border-slate-700 py-1 upper">
//             <div className="max-w-[1580px] mx-auto h-[35px] flex items-center justify-between sm:px-8 px-6">
//               <p className="text-xs">Free Shipping Over $100 & Free Returns</p>
//               <div>
//                 <a href="" className="text-xs">
//                   Hotline: +055-544-333-120
//                 </a>
//               </div>
//             </div>
//           </header>
//           {/* Middle Header */}
//           <header className="max-w-[1580px] mx-auto h-[75px] flex items-center justify-between sm:px-8 px-6 middle">
//             <Link to={"/"}>
//               <div>
//                 <p className="text-2xl font-bold">E-COMMERCE</p>
//               </div>
//             </Link>

//             {/* <div className="relative px-6">
//           <div className="absolute text-xl text-slate-400 top-3 text-[20px] ml-4">
//             <BiSearch />
//           </div>
//           <input
//             type="text"
//             placeholder="Search your Product"
//             className="lg:w-[470px] md:max-w-[470px] text-black pl-12 pr-4 py-2 border border-slate-400 outline-none rounded-md"
//           />
//         </div> */}

//             <div className="flex items-center sm:gap-8 gap-5">
//               <nav className="sm:block hidden">
//                 <ul className="md:text-base text-sm flex items-center list-none md:gap-8 gap-5">
//                   <li>
//                     <NavLink
//                       to={"/"}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-bgColor font-medium"
//                           : "hover:text-bgColor hover:font-medium"
//                       }
//                     >
//                       Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to={"products"}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-bgColor font-medium"
//                           : "hover:text-bgColor hover:font-medium"
//                       }
//                     >
//                       Products
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to={"contact"}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-bgColor hover:text-bgHover font-medium"
//                           : "hover:text-bgColor hover:font-medium"
//                       }
//                     >
//                       Contact
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink
//                       to={"about"}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "text-bgColor hover:text-bgHover font-medium"
//                           : "hover:text-bgColor hover:font-medium"
//                       }
//                     >
//                       About
//                     </NavLink>
//                   </li>
//                 </ul>
//               </nav>

//               <div className="text-[25px] relative cursor-pointer">
//                 <AiOutlineShoppingCart />
//                 <span className="text-xs text-white text-center absolute -top-2 -right-2 bg-bgColor w-[18px] p-[1px] rounded-full">
//                   0
//                 </span>
//               </div>
//               <div className="relative" onClick={() => setToggle(!toggle)}>
//                 <div className="text-[28px] text-black hover:text-slate-700 cursor-pointer">
//                   <RxAvatar />
//                 </div>
//                 {toggle && (
//                   <div className="absolute w-[130px] bg-white flex flex-col right-0 my-[17px] border-t-[3px] border-bgColor px-3 py-2 shadow drop-shadow-md">
//                     <Link
//                       to={"new-product"}
//                       className="whitespace-nowrap hover:text-bgColor hover:font-medium"
//                     >
//                       New Product
//                     </Link>
//                     <Link
//                       to={"login"}
//                       className="whitespace-nowrap hover:text-bgColor hover:font-medium"
//                     >
//                       Login
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <div className="sm:hidden flex flex-1 justify-end items-center">
//                 {showMenu ? (
//                   <div
//                     className="text-[22px] cursor-pointer"
//                     onClick={() => setShowMenu(!showMenu)}
//                   >
//                     <AiOutlineClose />
//                   </div>
//                 ) : (
//                   <div
//                     className="text-[22px] cursor-pointer"
//                     onClick={() => setShowMenu(!showMenu)}
//                   >
//                     <AiOutlineMenu />
//                   </div>
//                 )}
//               </div>

//               <div
//                 className={`${
//                   showMenu ? "left-0 top-14" : "-left-[80%] top-14"
//                 } sm:hidden w-[80%] h-screen absolute duration-300 ease-linear p-6 bg-slate-200 drop-shadow-lg`}
//               >
//                 <nav className="hover:text-bgColor hover:font-medium">
//                   <ul className="md:text-base text-sm flex flex-col items-start list-none md:gap-8 gap-5">
//                     <li>
//                       <NavLink
//                         to={"/"}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "text-bgColor hover:text-bgHover font-medium"
//                             : "hover:text-bgColor hover:font-medium"
//                         }
//                       >
//                         Home
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         to={"products"}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "text-bgColor hover:text-bgHover font-medium"
//                             : "hover:text-bgColor hover:font-medium"
//                         }
//                       >
//                         Products
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         to={"contact"}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "text-bgColor hover:text-bgHover font-medium"
//                             : "hover:text-bgColor hover:font-medium"
//                         }
//                       >
//                         Contact
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink
//                         to={"about"}
//                         className={({ isActive }) =>
//                           isActive
//                             ? "text-bgColor hover:text-bgHover font-medium"
//                             : "hover:text-bgColor hover:font-medium"
//                         }
//                       >
//                         About
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </header>
//         </article>
//       </section> */}
