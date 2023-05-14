import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import imgContent from "@assets/images/pepetomomics.png";

const Pepetomomics = () => {
  return (
    <React.Fragment>
      <BlockContent id="pepetomomics" className="relative pt-[60px]">
        <div className="flex flex-col justify-center items-center mt-[200px] mb-[214px] relative px-28">
          <div className="amination-sun">
            <img alt="" src={img.src} className="img opacity-[0.8]" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="title-app mb-6 text-center">$PPSunomics</h2>
            <span className="text-white text-[30px] leading-8 font-[400] text-center desc-pepetomomics">
              Token Supply: 500,000,000,000,000
            </span>

            <img alt="" src={imgContent.src} />
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default Pepetomomics;
