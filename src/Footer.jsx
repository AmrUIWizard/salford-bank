import React from "react";

const Footer = () => {
  return (
    <div className="p-3 absolute bottom-0 text-xl w-full text-center mb-2 text-slate-400 border-t-[1px] border-slate-8  00">
      Developed By:{" "}
      <span
        onClick={() => window.open("https://amrabdelrhman.com", "_blank")}
        className="text-[#dab355] font-bold cursor-pointer hover:text-[#b29246] "
      >
        Amr Abdelrhman
      </span>
    </div>
  );
};

export default Footer;
