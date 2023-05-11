import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import imgContent from "@assets/images/pepetomomics.svg";

import Image from "next/image";
import { styled } from "styled-components";

const Pepetomomics = () => {
  return (
    <React.Fragment>
      <BlockContent>
        <div
          className="flex flex-col justify-center items-center mt-[276px] mb-[214px] relative"
          id="pepetomomics"
        >
          <div className="amination-sun">
            <Image alt="" src={img} className="img opacity-[0.8]" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="title-app mb-6 text-center">$PPSunomics</h2>
            <span className="text-white text-[30px] leading-9 font-[400] mb-[100px] text-center desc-pepetomomics">
              Token Supply: 500,000,000,000,000
            </span>

            <Image alt="" src={imgContent} />
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default Pepetomomics;
