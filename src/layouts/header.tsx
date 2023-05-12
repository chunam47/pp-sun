import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@assets/images/logo.svg";
import iconSkype from "@assets/images/icon-skype.svg";
import iconTele from "@assets/images/icon-tele.svg";
import iconDiscord from "@assets/images/icon-discord.svg";

import BlockContent from "../components/BlockContent";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);
  const dataMenu = [
    {
      title: "Airdrop",
      onclick: "#aridrop",
    },
    {
      title: "About Us",
      onclick: "#about-us",
    },
    {
      title: "Pepetomomics",
      onclick: "#pepetomomics",
    },
    {
      title: "Whitepaper",
      onclick: "#whitepaper",
    },
    {
      title: "Earn",
      onclick: "#earn",
      className: "coming-soon",
      onClick: () => setAlert(true),
      contentAlert: "Coming Soon !!!",
    },
  ];
  const [active, setActive] = useState<any>("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  const handleClickMenu = (val: any) => {
    sessionStorage.setItem("menu-active", val.onclick);
  };

  useEffect(() => {
    setActive(sessionStorage.getItem("menu-active"));
  }, [handleClickMenu]);

  return (
    <React.Fragment>
      <div className={`header-app w-full fixed z-10`}>
        <BlockContent>
          <div className="flex justify-between items-center py-[15px]">
            <div className="flex gap-4">
              <Image
                alt="logo"
                src={logo}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  sessionStorage.setItem("menu-active", "");
                }}
                className="cursor-pointer"
              />
              <Menu className="menu flex justify-between bg-transparent">
                {dataMenu.map((item, key) => (
                  <Menu.Item
                    className="glow-on-hover menu__item relative"
                    key={key}
                  >
                    {alert && item?.contentAlert && (
                      <span className="absolute top-[50%] left-0 right-0 translate-y-[-50%] rounded-full bg-[#f2dede] text-[6px] text-[#a94442] px-[4px]">
                        {item?.contentAlert}
                      </span>
                    )}

                    <a
                      onClick={
                        item.onClick
                          ? item?.onClick
                          : () => handleClickMenu(item)
                      }
                      href={item.onclick}
                      className={`${active === item.onclick && "active-menu"} ${
                        item?.className
                      }`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
            <div className="flex gap-20 items-center">
              <div className="flex gap-4 items-center link-app-header">
                <a href="#" className="glow-on-hover cursor-pointer">
                  <Image alt="" src={iconSkype} />
                </a>
                <a href="#" className="glow-on-hover cursor-pointer">
                  <Image alt="" src={iconDiscord} />
                </a>
                <a href="#" className="glow-on-hover cursor-pointer">
                  <Image alt="" src={iconTele} />
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <button className="glow-on-hover py-2 px-3 text-white font-medium bg-transparent border-2 border-[#ECFF76] rounded-xl font-montserrat btn-lauch ">
                  Buy Now
                </button>
                <div className="glow-on-hover text-white font-medium bg-transparent border-2 border-[#ECFF76] rounded-xl font-montserrat btn-lauch button-connect">
                  <ConnectButton />
                </div>
              </div>
            </div>
            <div className="menuButton hidden" onClick={showDrawer}>
              <MenuUnfoldOutlined />
            </div>
            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <Menu>
                {dataMenu.map((item, key) => (
                  <Menu.Item key={key} className="capitalize">
                    <a
                      onClick={
                        item.onClick
                          ? item?.onClick
                          : () => {
                              handleClickMenu(item);
                              setVisible(false);
                            }
                      }
                      className={`${active === item.onclick && "active-menu"}`}
                      href={`${item.onclick}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
                <div className="py-2 px-3 w-fit">
                  <div className="flex gap-4 items-center link-app-header mb-5">
                    <a href="#" className="cursor-pointer">
                      <Image alt="" src={iconSkype} />
                    </a>
                    <a href="#" className="cursor-pointer">
                      <Image alt="" src={iconDiscord} />
                    </a>
                    <a href="#" className="cursor-pointer">
                      <Image alt="" src={iconTele} />
                    </a>
                  </div>
                  <div className="flex flex-col gap-8">
                    <button className="text-white p-4 font-[400] bg-transparent border-2 border-[#ECFF76] rounded-xl btn-lauch ">
                      Buy Now
                    </button>
                    <div className="glow-on-hover p-4 text-white font-medium bg-transparent border-2 border-[#ECFF76] rounded-xl font-montserrat btn-lauch button-connect">
                      <ConnectButton />
                    </div>
                  </div>
                </div>
              </Menu>
            </Drawer>
          </div>
        </BlockContent>
      </div>
    </React.Fragment>
  );
}
