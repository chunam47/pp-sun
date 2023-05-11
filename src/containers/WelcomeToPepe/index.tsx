import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import Image from "next/image";
import useMediaQuery from "../../hook/useMedia";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const WelcomeToPepe = () => {
  const matches = useMediaQuery("(max-width: 551px)");
  return (
    <React.Fragment>
      <BlockContent className="relative">
        <div
          id="about-us"
          className="flex flex-col justify-center items-center relative welcome-to-pepe"
        >
          <div className="absolute top-[-84px] right-0 z-[-1] opacity-[0.8] img-sun-responsive">
            <Image alt="" src={img} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="title-app mb-10">Welcome to $PPSUN</h2>
            <span className="text-[24px] leading-7 font-[400] text-white text-center w-[80%]">
              First Ever MeMe about Justin Sun
            </span>
          </div>
          {matches ? (
            <SwiperComponent
              className="mt-6 w-[278px]"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <div className="">
                <div className="flex gap-14 mt-14 items-center justify-center flex-wrap">
                  <SwiperSlide>
                    <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                      <div>
                        <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                        <span>
                          is an AI-driven meme project that aims to promote
                          truth-seeking and help the community gain free tickets
                          to Justin&apos;s comedy show.
                        </span>
                        <br />
                        <br />
                        <span></span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                      <div>
                        <span>Through the</span>{" "}
                        <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                        <span>
                          token the community can enjoy moments of relaxation
                          and entertainment after a stressful workday.
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                      <div>
                        <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                        <span>
                          is a token created by the community, for the
                          community, and for Justin&apos;s comedy show.
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </SwiperComponent>
          ) : (
            <>
              <div className="flex gap-14 mt-14 items-center justify-center flex-wrap">
                <div>
                  <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                    <div>
                      <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                      <span>
                        is an AI-driven meme project that aims to promote
                        truth-seeking and help the community gain free tickets
                        to Justin&apos;s comedy show.
                      </span>
                      <br />
                      <br />
                      <span></span>
                    </div>
                  </div>
                </div>
                {/* <hr className="line-hr" /> */}
                <div>
                  <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                    <div>
                      <span>Through the</span>{" "}
                      <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                      <span>
                        token the community can enjoy moments of relaxation and
                        entertainment after a stressful workday.
                      </span>
                    </div>
                  </div>
                </div>
                {/* <hr className="line-hr" /> */}
                <div>
                  <div className="min-h-[198px] h-full flex items-center text-[12px] leading-4 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                    <div>
                      <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                      <span>
                        is a token created by the community, for the community,
                        and for Justin&apos;s comedy show.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default WelcomeToPepe;
