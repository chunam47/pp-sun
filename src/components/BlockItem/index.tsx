import Image from "next/image";
import React from "react";

interface BlockItemProps {
  img: string;
  title?: string;
  decs?: string;
  colorTitle?: string;
  colorDecs?: string;
}
const BlockItem = ({
  img,
  title,
  decs,
  colorTitle = "#fff",
  colorDecs = "#fff",
}: BlockItemProps) => {
  return (
    <React.Fragment>
      <div className="relative">
        <Image src={img} alt="" className="absolute" />
        <div className="ml-12">
          <div
            className="title-responsive text-[24px] leading-8 font-[600] mb-3"
            style={{ color: colorTitle }}
          >
            {title}
          </div>
          <span
            className="desc-title text-[20px] font-[400] leading-5"
            style={{ color: colorTitle }}
          >
            {decs}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlockItem;
