import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";
import Footer from "components/Footer";

interface BMcardProps {}

const BMcard: React.FC<BMcardProps> = () => {
  const layoutView = useRef(null);

  return (
    <Layout ref={layoutView}>
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="content text-center" style={{ overflow: "unset" }}>
            <h2 className="text-46 md:text-64 font-bold">BM CARD</h2>
            <video
              className="m-auto mt-3 md:mt-0 mix-blend-screen"
              loop
              autoPlay
              muted
            >
              <source
                src={require("assets/imgs/card/video1.webm")}
                type="video/webm"
              />
            </video>
            <AnimationOnScroll animateIn="bounceInLeft">
              <div className="uppercase text-32 font-semibold [word-spacing: 10px] text-left my-[60px] break-all [letter-spacing: 1px]">
                <span className="text-42 font-bold">A</span>ll the characters
                who live in the <span className="text-42 font-bold">M</span>
                etaverse of <span className="text-42 font-bold">BM</span>verser
                have magical abilities that can be activated by using and buying
                the <span className="text-42 font-bold">BM</span> cards.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn">
              <div className="md:grid grid-cols-2 gap-1">
                <video
                  className="m-auto mt-3 md:mt-0 mix-blend-screen"
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={require("assets/imgs/card/video2.webm")}
                    type="video/webm"
                  />
                </video>

                <video
                  className="m-auto mt-3 md:mt-0 mix-blend-screen"
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={require("assets/imgs/card/video3.webm")}
                    type="video/webm"
                  />
                </video>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="bounceInRight">
              <div className="uppercase text-28 [word-spacing: 10px] text-left my-[60px] break-all">
                every character in <span className="text-36">M</span>ega
                Collection will be upgraded in{" "}
                <span className="text-36">3</span> steps.{" "}
                <span className="text-36">T</span>he second ability of the
                characters can be activated in{" "}
                <span className="text-36">3</span> stages and by buying card
                games called <span className="text-36">M</span>agic{" "}
                <span className="text-36">P</span>otion{" "}
                <span className="text-36">C</span>ards.{" "}
                <span className="text-36">M</span>agic{" "}
                <span className="text-36">P</span>otions can be traded in the{" "}
                <span className="text-36">M</span>arketplace of{" "}
                <span className="text-36">BMV</span>erse.
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="fadeIn">
              <div className="md:grid grid-cols-2 gap-1">
                <video
                  className="m-auto mt-3 md:mt-0 mix-blend-screen"
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={require("assets/imgs/card/video4.webm")}
                    type="video/webm"
                  />
                </video>

                <video
                  className="m-auto mt-3 md:mt-0 mix-blend-screen"
                  loop
                  autoPlay
                  muted
                >
                  <source
                    src={require("assets/imgs/card/video5.webm")}
                    type="video/webm"
                  />
                </video>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="com-content">
          <BMblog />
        </div>
        <div className="com-content">
          <Collaborate />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default BMcard;
