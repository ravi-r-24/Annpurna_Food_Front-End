import React from "react";
import navbar from "../Data/navbar";
import { Person, Search, ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  return (
    <>
      <div className="w-full laptop:px-16 laptop:py-4 grid laptop:grid-cols-10 border border-black">
        {/* brandIcon */}
        <div className="col-span-1">
          <img
            src={navbar.brandIcon.url}
            alt="brand-icon"
            className="laptop:w-[4rem] laptop:h-[4rem]"
          />
        </div>

        {/* navlinks */}
        <div className="col-span-4">
          <ul className="flex items-center h-full space-x-4">
            {navbar.navitems.map((item) => (
              <li
                key={navbar.navitems.id}
                className="text-slate-800 laptop:font-bold laptop:text-lg font-nunito-sans"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* searchbar */}
        <div className="col-span-5 h-full flex items-center">
          <div className="flex w-4/5 laptop:h-[2.5rem] shadow-slate">
            <input type="search" className="w-10/12 rounded-l"></input>
            <button className="w-2/12 bg-slate-900 text-white rounded-r">
              <Search />
            </button>
          </div>

          {/* login/signup */}
          <div className="w-1/5 h-full flex">
            <div className="w-1/2 h-full flex items-center justify-end">
              <button className="bg-slate-900 text-white laptop:w-[2.5rem] laptop:h-[2.5rem] rounded-full">
                <Person />
              </button>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end">
              <button className="laptop:w-[2.5rem] laptop:h-[2.5rem] rounded-full bg-slate-900 text-white flex items-center justify-center">
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
