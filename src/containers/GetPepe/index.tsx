/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import BlockContent from "../../components/BlockContent";
import Image from "next/image";
import iconFire from "@assets/images/icon-fire.svg";
import img from "@assets/images/sun.svg";
import { styled } from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContractRead, useContractWrite } from "wagmi";

import abi from "../../constans/abi.json";
import BigNumber from "bignumber.js";
import { numberExponentToLarge, numberWithCommas } from "../../until";

const GetPepe = () => {
  const [value, setValue] = useState<any>();
  const [connect, setConnect] = useState(false);
  const { isConnected, address } = useAccount();
  const [claimed, setClaimed] = useState<any>(false);
  const [whitelist, setWhitelist] = useState<any>(false);
  const [totalAir, setTotalAir] = useState<any>(0);
  const [amountClaim, setAmountClaim] = useState<any>(0);

  const { data: readClaimed } = useContractRead({
    address: "0x98D6301dF1E9af50cAeA7d58C00817233db2181F",
    abi: abi.abi,
    functionName: "claimed",
    args: [address],
  });

  const { data: readWhitelist } = useContractRead({
    address: "0x98D6301dF1E9af50cAeA7d58C00817233db2181F",
    abi: abi.abi,
    functionName: "whitelist",
    args: [address],
  });

  const { data: totalAirRead } = useContractRead({
    address: "0x98D6301dF1E9af50cAeA7d58C00817233db2181F",
    abi: abi.abi,
    functionName: "totalAir",
  });

  const { data: amountClaimed, refetch } = useContractRead({
    address: "0x98D6301dF1E9af50cAeA7d58C00817233db2181F",
    abi: abi.abi,
    functionName: "amountClaimed",
  });

  useEffect(() => {
    setTimeout(() => {
      refetch();
    }, 3000);
  });

  useEffect(() => {
    setClaimed(readClaimed);
  }, [readClaimed]);

  useEffect(() => {
    setAmountClaim(amountClaimed);
  }, [amountClaimed]);

  useEffect(() => {
    setWhitelist(readWhitelist);
  }, [readWhitelist]);

  useEffect(() => {
    setTotalAir(totalAirRead);
  }, [totalAirRead]);

  const { write, isSuccess } = useContractWrite({
    address: "0x98D6301dF1E9af50cAeA7d58C00817233db2181F",
    abi: abi.abi,
    functionName: "claim",
  });

  useEffect(() => {
    setConnect(isConnected);
  }, [isConnected, claimed]);

  useEffect(() => {
    const temp = (Number(amountClaim) / Number(totalAir)) * 100;
    setValue(BigNumber(temp).toString());
  }, [amountClaim, totalAir]);

  useEffect(() => {
    if (isSuccess) {
      setClaimed(true);
    }
  }, [isSuccess]);
  console.log(amountClaimed);

  return (
    <React.Fragment>
      <BlockContent className="relative pt-[1px]" id="aridrop">
        <div className="mt-[200px] relative get-pepe">
          <div className="absolute top-[-103px] left-0 z-[5] opacity-[0.8] img-sun-responsive">
            <img alt="" src={img.src} />
          </div>
          <div className="max-w-[620px] w-full flex flex-col justify-center items-center mt-[103px] p-8 mx-auto bg-[#0E2D25] rounded-[20px] border-[6px] border-[#ACF10E]">
            <h2 className="text-white font-[400] text-[32px] leading-[46px] mb-2 text-center">
              You get <span className="text-[#ACF10E]">$PPSUN now</span>
            </h2>
            <span className="text-[#73A095] font-[400] text-[18px] leading-[32px] w-[90%] text-center mb-6 content-get-pepe">
              A total of{" "}
              {numberWithCommas(
                BigNumber(totalAir).dividedBy(10e18).toString()
              )}{" "}
              $PPSUN tokens are now available to be claimed by
              &quot;audience&quot; who are randomly selected through our airdrop
              campaign. $PPSUN tokens that have not been claimed within
            </span>
            <div className="flex bg-[#26423A] items-center rounded-xl px-5 py-2">
              <img alt="" src={iconFire.src} />
              <span className="ml-4 text-[#ACF10E] font-[400] text-[16px] leading-[26px] day-get-pepe ">
                31 days will be burned
              </span>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center text-[#73A095] font-[400] leading-5 text-[14px] mt-6 claimed-get-pepe">
                <span>Claimed</span>
                <span>
                  {numberWithCommas(
                    BigNumber(totalAir).dividedBy(10e18).toString()
                  )}
                </span>
              </div>
              <WrapperInput className="w-full" value={value}>
                <input
                  type="range"
                  value={value}
                  min="0"
                  max="100"
                  step="1"
                  className="progress w-full"
                  readOnly
                />
              </WrapperInput>
            </div>
            <div className="flex gap-4 justify-center flex-wrap mt-14">
              {connect && (
                <>
                  {claimed === false && whitelist === true ? (
                    <button
                      className="bg-[#73A095] py-2 px-5 text-white font-medium rounded-xl font-montserrat btn-lauch glow-on-hover"
                      onClick={() => write()}
                    >
                      Claim
                    </button>
                  ) : (
                    <button
                      className="bg-[#ccc] py-2 px-5 text-white font-medium rounded-xl font-montserrat btn-lauch"
                      disabled
                    >
                      Claim
                    </button>
                  )}
                </>
              )}
              <div className="bg-[#73A095] button-connect rounded-xl text-center text-white text-[16px] leading-5 glow-on-hover">
                <ConnectButton label="Wallet not connected" />
              </div>
            </div>
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default GetPepe;

const WrapperInput = styled.div<{ value: number }>`
  .progress {
    width: 100%;
    background: linear-gradient(
      to right,
      #82cfd0 ${(props) => props.value}%,
      #82cfd0 ${(props) => props.value}%,
      #26423a 0%,
      #26423a 100%
    );
    border-radius: 8px;
    height: 7px;
    outline: none;
    transition: background 450ms ease-in;
    -webkit-appearance: none;
  }

  .progress::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: ew-resize;
    background: #acf10e;
  }
`;
