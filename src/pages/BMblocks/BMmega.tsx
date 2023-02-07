import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Layout from "components/Layout";
import Menu from "components/Menu";
import BMblog from "components/blocks/BMblog";
import Collaborate from "components/blocks/Collaborate";
import LandingHeader from "components/blocks/LandingHeader";
import Footer from "components/Footer";

import QueenImg from "assets/imgs/mega/queen.png";
import MultiQueenImg from "assets/imgs/mega/multipleQueen.png";
import AntonImg from "assets/imgs/mega/Anton.png";
import AntonLandImg from "assets/imgs/mega/AntonLand.png";
import JewelCoverImg from "assets/imgs/mega/JewelCover.png";
import BloodWarImg from "assets/imgs/mega/bloodWar.png";
import GadeImg from "assets/imgs/mega/gade.png";
import Megalast from "assets/imgs/mega/megalast.png";

interface BMmegaProps {}

const bgStyle = {
  background: "rgba(255,255,255,0.2)",
  border: "1px solid #707070",
  borderRadius: "36px",
  padding: "20px"
};

const BMmega: React.FC<BMmegaProps> = () => {
  const layoutView = useRef(null);

  return (
    <Layout ref={layoutView}>
      <div className="landing-container">
        <LandingHeader />
        <Menu />
        <div className="bm-content">
          <div className="content text-center" style={{ overflowX: "auto" }}>
            <h2 className="text-46 md:text-64 font-bold">BM MEGA</h2>
            <p className="text-24 font-semibold">
              Imagination, Technology, History and Reality are the Main Building
              Blocks of the BM Mega.
            </p>
            <div className="flex flex-wrap mt-4">
              <div className="w-full md:w-[40%]">
                <img src={QueenImg} alt="queen" />
              </div>
              <div className="mt-4 md:pt-[40px] lg:pt-[30px] xl:pt-[80px] w-full md:w-[60%]">
                <p className="text-left text-19 font-medium" style={bgStyle}>
                  BM Mega is the most specialized and comprehensive NFT
                  collection in the field of video games’ characters. This
                  collection consists of 50 unique collections, each of which
                  contains 12 unique characters with a fascinating and
                  astonishing story.
                </p>
              </div>
            </div>
            <div>
              <AnimationOnScroll animateIn="fadeIn">
                <img
                  src={MultiQueenImg}
                  alt="multiqueen"
                  className="mt-[50px] md:mt-[100px]"
                />
              </AnimationOnScroll>
            </div>

            <div>
              {" "}
              <AnimationOnScroll animateIn="flipInY">
                <p className="text-left text-19 font-medium" style={bgStyle}>
                  Finally, each collection contains a work called The Last
                  Supper, in which all 12 characters of the collection are
                  cryptically talking to each other around a table in a certain
                  standing position and form, each of which conveys an important
                  message. In the Mega Collection, the bridge is made from
                  imagination to reality, and this feature is realizable right
                  where the unique ability and feature that each character has,
                  is made in the real world in the form of a hashed jewel, and
                  its NFT is tradable in the NFT Market Place.
                </p>
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="flipInX">
              <div className="text-46 md:text-82 my-[20px]">
                <span className="text-orange">ANT</span>verse
              </div>
              <div className="max-w-[862px] m-auto">
                Difficulty or luck, love or hate, science or habit, each became
                a factor for an ant in a corner of a galaxy to surpass its
                congeners and discover a unique power within itself. Ant Verse
                tells a story of 12 mutant ants, each of them, during an event
                and under special circumstances, left the routine of their lives
                and under the influence of the circumstances around them, to
                achieve a goal that is thought to be madness for other members
                of the society, they reach extraordinary capabilities.
              </div>
            </AnimationOnScroll>
            <div className="flex flex-wrap mt-[80px]">
              <div className="flex items-center text-left w-full md:w-[40%]">
                <div className="w-5/6">
                  <AnimationOnScroll animateIn="bounceInLeft">
                    <video
                      className="m-auto mix-blend-screen"
                      loop
                      autoPlay
                      muted
                    >
                      <source
                        src={require("assets/imgs/mega/girl1.mp4")}
                        type="video/mp4"
                      />
                    </video>
                  </AnimationOnScroll>
                </div>
              </div>
              <div className="text-left text-19 font-medium mt-4 w-full md:w-[60%]">
                <AnimationOnScroll animateIn="bounceInRight">
                  <p className="md:p-[20px] md:pr-[40px]">
                    The life story of these 12 ants is mysteriously tied
                    together in such a way that it is difficult to guess the
                    beginning and the end of this strange story. The desire for
                    immortality in one has ignited a flame in the heart of the
                    other so that both of them can be a factor in the revolution
                    in a government that another ant has planned for centuries.
                    These mutant ants are interacting with each other and their
                    ability to grow and improve is still active. Their biggest
                    characteristic is rarity, so that with the improvement and
                    evolution of other characteristics,
                  </p>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="text-30 md:text-42 font-bold my-[40px] tracking-wide">
              <AnimationOnScroll animateIn="flipInX">
                “These Mutants Would Become Rarer”
              </AnimationOnScroll>
            </div>
            <div>
              <AnimationOnScroll animateIn="bounceInLeft">
                <img src={AntonImg} alt="anton" />
              </AnimationOnScroll>
            </div>

            <div className="flex flex-wrap mt-[20px]">
              <div className="w-full md:w-[60%]">
                <AnimationOnScroll animateIn="bounceInLeft">
                  <p className="text-33 font-semibold mt-4">
                    “ANTVerse” in Gaming
                  </p>
                  <p
                    className="text-left text-19 font-medium mt-4"
                    style={bgStyle}
                  >
                    In Addition To The Unique Story Of How They Were Formed, The
                    Mutant Ants of the Mega Collection were actually made for
                    the development of video games, and all of them were
                    individually converted into NFTs, creating a unique and
                    professional collection. On the other hand, the features and
                    capabilities of these characters have also become NFT and
                    are tradable. Even the cards that enhance the abilities of
                    the characters (known as Magical Potion) are works of art
                    that have no equivalent in the real world and are offered in
                    NFT format.
                  </p>
                </AnimationOnScroll>
              </div>
              <div className="pt-4 flex items-center w-full md:w-[40%]">
                <AnimationOnScroll animateIn="bounceInRight">
                  <div className="md:text-right w-full">
                    <img
                      src={AntonLandImg}
                      alt="antonland"
                      className="max-h-[400px] inline-block"
                    />
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
            <div className="text-31 font-semibold my-[50px]">
              <AnimationOnScroll animateIn="flipInX">
                “The abilities of each character can be activated in three
                parts”
              </AnimationOnScroll>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-[40%] flex items-center">
                <AnimationOnScroll animateIn="bounceInLeft">
                  <div className="md:pr-[65px] text-left">
                    <p className="pl-4 text-20 font-bold">
                      The First Part of the Hashed Gems
                    </p>
                    <p
                      className="text-left text-18 font-medium mt-4"
                      style={bgStyle}
                    >
                      You can use BMJewel hashed items to activate the first
                      unique abilities (out of 3) of each character; By buying
                      jewelry for your character’s ability, use the code
                      engraved on it to activate the desired ability.
                    </p>
                  </div>
                </AnimationOnScroll>
              </div>
              <div className="w-full md:w-[60%] mt-4">
                <AnimationOnScroll animateIn="bounceInRight">
                  <img src={JewelCoverImg} alt="JewelCover" />
                </AnimationOnScroll>
              </div>
            </div>
            <div className="flex flex-wrap mt-5">
              <div className="w-full md:w-[40%]">
                <AnimationOnScroll animateIn="bounceInLeft">
                  <img src={BloodWarImg} alt="JewelCover" />
                </AnimationOnScroll>
              </div>
              <div className="w-full md:w-[60%] mt-4 flex items-center">
                <AnimationOnScroll animateIn="bounceInRight">
                  <div className="md:pl-[65px] text-left">
                    <p className="pl-4 text-20 font-bold">
                      The second Part of the BM Cards
                    </p>
                    <p
                      className="text-left text-18 font-medium mt-4"
                      style={bgStyle}
                    >
                      The second step to promote and develop your character is
                      available by purchasing magical potion game cards at
                      BMVerse NFT Market Place. Magical potions are actually a
                      part of works of art that were created 40 years ago in the
                      field of pen dotting.
                    </p>
                  </div>
                </AnimationOnScroll>
              </div>
            </div>
            <div>
              <AnimationOnScroll animateIn="wobble">
                <img src={GadeImg} alt="gade" />
              </AnimationOnScroll>
            </div>
            <AnimationOnScroll animateIn="bounceInRight">
              <div
                className="max-w-[800px] m-auto text-left text-16 font-semibold"
                style={bgStyle}
              >
                <p className="pb-4">
                  Activating the third ability of each character requires its
                  owner’s taste and expertise. The third ability is activated
                  only if the character is developed by its owner. This
                  development includes a change in the appearance or a special
                  improvement in the characteristics by using coding and so on.
                  After receiving the third ability of each character, you will
                  actually have access to one of the codes available in the Last
                  Supper work. The Ant Verse Last Supper is a work of art taken
                  from Da Vinci’s Last Supper, in which all 12 characters are
                  mysteriously standing around a table that needs to be decoded.
                </p>
              </div>
            </AnimationOnScroll>
            <div>
              <AnimationOnScroll animateIn="bounceInLeft">
                <img
                  src={Megalast}
                  alt="megalast"
                  className="pt-[70px] md:w-[80%] m-auto"
                />
              </AnimationOnScroll>
            </div>
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

export default BMmega;
