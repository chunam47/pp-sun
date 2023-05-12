import React from "react";
import BlockContent from "../../components/BlockContent";
import Image from "next/image";
import iconFire from "@assets/images/icon-fire.svg";
import img from "@assets/images/sun.svg";

const GetPepe = () => {
  return (
    <React.Fragment>
      <BlockContent className="relative pt-[1px]" id="aridrop">
        <div className="mt-[200px] relative get-pepe">
          <div className="absolute top-[-103px] left-0 z-[5] opacity-[0.8] img-sun-responsive">
            <Image alt="" src={img} />
          </div>
          <div className="max-w-[620px] w-full flex flex-col justify-center items-center mt-[103px] p-8 mx-auto bg-[#0E2D25] rounded-[20px] border-[6px] border-[#ACF10E]">
            <h2 className="text-white font-[400] text-[32px] leading-[46px] mb-2 text-center">
              You get <span className="text-[#ACF10E]">$PPSUN now</span>
            </h2>
            <span className="text-[#73A095] font-[400] text-[18px] leading-[32px] w-[90%] text-center mb-6 content-get-pepe">
              A total of 84,000,000,000,000 $PPSUN tokens are now available to
              be claimed by &quot;audience&quot; who are randomly selected
              through our airdrop campaign. $PPSUN tokens that have not been
              claimed within
            </span>
            <div className="flex bg-[#26423A] items-center rounded-xl px-5 py-2">
              <Image alt="" src={iconFire} />
              <span className="ml-4 text-[#ACF10E] font-[400] text-[16px] leading-[26px] day-get-pepe ">
                31 days will be burned
              </span>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center text-[#73A095] font-[400] leading-5 text-[14px] mt-6 claimed-get-pepe">
                <span>Claimed</span>
                <span>84,000,000,000,000</span>
              </div>
              <div className="w-full range-get-pepe">
                <input
                  type="range"
                  value="0"
                  min="0"
                  max="100"
                  step="1"
                  className="progress w-full"
                />
              </div>
            </div>
            <div className="flex gap-8 justify-evenly w-[90%] mt-14">
              <button className="bg-[#73A095] rounded-xl py-[10px] px-4 text-white text-[16px] leading-5 glow-on-hover">
                <span className="flex justify-center items-center text-center">
                  Wallet not connected
                </span>
              </button>
            </div>
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default GetPepe;
