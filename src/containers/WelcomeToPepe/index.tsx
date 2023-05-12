import React from "react";
import BlockContent from "../../components/BlockContent";
import img from "@assets/images/sun.svg";
import Image from "next/image";
import useMediaQuery from "../../hook/useMedia";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const WelcomeToPepe = () => {
  const matches = useMediaQuery("(max-width: 1025px)");
  return (
    <React.Fragment>
      <BlockContent className="relative pt-[1px]" id="about-us">
        <div className="flex flex-col justify-center items-center relative welcome-to-pepe mt-[300px]">
          <div className="absolute top-[-250px] right-0 z-[-1] opacity-[0.8] img-sun-responsive">
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
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              spaceBetween={50}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <div className="">
                <div className="flex gap-14 mt-14 items-center justify-center flex-wrap">
                  <SwiperSlide>
                    <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
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
                    <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
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
                    <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
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
            <SwiperComponent
              className="mt-6 max-w-[600px]"
              autoplay={{
                delay: 3000,
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
                    <div className="flex gap-5 items-center justify-center">
                      <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                        <div>
                          <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                          <span>
                            is an AI-driven meme project that aims to promote
                            truth-seeking and help the community gain free
                            tickets to Justin&apos;s comedy show.
                          </span>
                          <br />
                          <br />
                          <span></span>
                        </div>
                      </div>
                      <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                        <div>
                          <span>Through the</span>{" "}
                          <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                          <span>
                            token the community can enjoy moments of relaxation
                            and entertainment after a stressful workday.
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex gap-5 items-center justify-center">
                      <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                        <div>
                          <span>Through the</span>{" "}
                          <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                          <span>
                            token the community can enjoy moments of relaxation
                            and entertainment after a stressful workday.
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                          <div>
                            <span className="text-[#ACF10E]">$PPSUN</span>{" "}
                            <span>
                              is a token created by the community, for the
                              community, and for Justin&apos;s comedy show.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex gap-5 items-center justify-center">
                      <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                        <div>
                          <span>Through the</span>{" "}
                          <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                          <span>
                            token the community can enjoy moments of relaxation
                            and entertainment after a stressful workday.
                          </span>
                        </div>
                      </div>
                      <div className="min-h-[400px] h-full flex items-center text-[16px] leading-8 p-6 border-[3px] rounded-[20px] text-white border-[#ECFF76] w-[278px]">
                        <div>
                          <span>Through the</span>{" "}
                          <span className="text-[#ACF10E]"> $PPSUN</span>{" "}
                          <span>
                            token the community can enjoy moments of relaxation
                            and entertainment after a stressful workday.
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </SwiperComponent>
          )}
        </div>
      </BlockContent>
    </React.Fragment>
  );
};

export default WelcomeToPepe;
