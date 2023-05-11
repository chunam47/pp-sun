import React from "react";
type Props = {
  children: React.ReactNode;
  style?: Object;
  className?: string;
  id?: any;
};

const BlockContent = ({ children, style = {}, className = "", id }: Props) => {
  return (
    <div
      className={`${className} block-content px-[20px]`}
      style={style}
      id={id}
    >
      {children}
    </div>
  );
};

export default BlockContent;
