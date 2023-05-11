import React from "react";
type Props = {
  children: React.ReactNode;
  style?: Object;
  className?: string;
};

const BlockContent = ({ children, style = {}, className = "" }: Props) => {
  return (
    <div className={`${className} block-content px-[20px]`} style={style}>
      {children}
    </div>
  );
};

export default BlockContent;
