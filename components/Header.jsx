import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.svg";

const Header = () => {
  return (
    <header className="h-auto flex items-center justify-center px-8 mt-4 pt-4 mb-12">
      <div className="w-20 h-20 flex flex-col items-center justify-center gap-4">
        <Image src={Logo} alt="METRIX LOGO" />
        <h1 className="font-anton flex flex-col text-white leading-none text-4xl">
          Metrix
        </h1>
      </div>
    </header>
  );
};

export default Header;
