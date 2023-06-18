import React from "react";
import Link from "next/link";
import { MdOutlineCloudDownload } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-50">
      <header className="text-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-black-900 mb-4 md:mb-0">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

            <span className="ml-3 text-xl space-x-1">👉 Ruchi Mandliya</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
            <Link href={"/"} className="mr-5 hover:text-gray-600">
              Home
            </Link>
            <Link href={"#"} className="mr-5 hover:text-gray-600">
              About
            </Link>
            <Link href={"#"} className="mr-5 hover:text-gray-600">
              Skills
            </Link>
            <Link href={"#"} className="mr-5 hover:text-gray-600">
              Projects
            </Link>
            <Link href={"#"} className="mr-5 hover:text-gray-600">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Download CV
            <MdOutlineCloudDownload className="text-xl ml-2" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
