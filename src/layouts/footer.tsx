/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import logo from "@assets/images/logo.svg";
import iconSkype from "@assets/images/icon-skype.svg";
import iconTele from "@assets/images/icon-tele.svg";
import iconA from "@assets/images/button-a.png";
import React from "react";
import BlockContent from "../components/BlockContent";
import iconDiscord from "@assets/images/icon-discord.svg";

// import BlockContent from "../components/BlockContent";
export default function Footer() {
  const data = [
    {
      title: "Airdrop",
      onclick: "#aridrop",
    },
    {
      title: "About Us",
      onclick: "#about-us",
    },
    {
      title: "$PPSunomics",
      onclick: "#rektomomics",
    },
  ];

  const dataBottomIcon = [
    {
      title: "Telegram",
      onclick: "https://t.me/pepesunarb",
      src: iconTele,
    },
    {
      title: "Discord",
      onclick: "https://discord.gg/yZaAnnjH4g",
      src: iconDiscord,
    },
    {
      title: "Tweeter",
      onclick: "https://twitter.com/pepesunarb",
      src: iconSkype,
    },
  ];
  return (
    <div className="footer bg-[#0e2d25] ">
      <BlockContent>
        <div className="content-footer w-full flex flex-row items-center justify-between py-8 ">
          <div className="flex flex-row gap-10 footer-left ">
            <img
              alt="logo"
              src={logo.src}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            />
            <div className="text-[14px] text-[#EFFFCA] w-[350px]">
              A journey of a thousand miles begins with a single step
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 wrap-footer-right">
            <div className="flex items-center justify-center gap-6 footer-right">
              {data.map((item, index) => (
                <a
                  key={index}
                  className=" cursor-pointer text-[#ECFF76] duration-300 glow-on-hover"
                  href={item.onclick}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-end gap-4">
              {dataBottomIcon.map((item, index) => (
                <a href={item.onclick} className="glow-on-hover" key={index}>
                  <img alt={item.title} src={item.src.src} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlockContent>
    </div>
  );
}
