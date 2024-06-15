// @unocss-include
import { useEffect, useState } from "react";
import img1 from "../../assets/home-xz.svg";
import img2 from "../../assets/home-xz1.svg";
import img3 from "../../assets/home-xz2.svg";
import "./Home.scss";
export default function Home() {
  const [animate1, setAnimate1] = useState("");
  const [animate2, setAnimate2] = useState("");
  const [animate3, setAnimate3] = useState("");
  const [animate4, setAnimate4] = useState("");
  useEffect(() => {
    const t = setTimeout(() => {
      setAnimate1("animate1");
      setAnimate2("animate2");
      setAnimate3("animate3");
      setAnimate4("animate4");
      clearTimeout(t);
    }, 600);
  });

  return (
    <div className="home-page relative">
      <div className="flex lg:items-center home-page-con w-100%">
        <div className="flex flex-col lg:flex-row w-100%">
          <div className="w-100% lg:flex-1 h-200px lg:h-auto flex items-center">
            <div className="flex-1  lg:absolute left-0 lg:top-50% lg:mt--225px z-10 lg:w-50%">
              <div className="font-size-24px lg:font-size-56px lh-40px lg:lh-60px text-center lg:text-left">
                Low-Energy Layer1 For Web Data Aggregation And Monetization
              </div>
              <div className="hidden lg:block font-size-20px mt-45px pr-140px lh-30px text-left">
                Connect Web2 data to Web3 to foster multi-dimensional data
                fusion and generate new value streams.
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-45px icon-box">
                <a href="https://twitter.com/ErbieChain" target="__blank"><i className="i-ri-twitter-x-fill color-white font-size-18px mr-44px"></i></a>
                <a href="https://t.me/erbienews" target="__blank"><i className="i-ic-baseline-telegram  font-size-24px mr-44px"></i></a>
                <a href="https://medium.erbie.io/" target="__blank"><i className="i-ph-medium-logo-fill color-white font-size-30px mr-44px"></i></a>
                <a href="https://www.youtube.com/channel/UCB3-3LhjxsZk-vm47qwydgg" target="__blank"><i className="i-ant-design-youtube-filled  font-size-26px mr-44px"></i></a>
              </div>
            </div>
          </div>
          <div className="lg:flex-1 flex justify-end lg:pl-15px">
            <div
              className={`rounded-20px animate-box border-color-#2a1f32 w-100vw lg:w-553px h-300px lg:h-64vh border-solid border-1px lg:ml-93px relative mt-45px lg:mt-0 ${animate4}`}
            >
              <img
                src={img1}
                className={`absolute left--20px h-220px lg:h-54vh lg:left--100px top-16% lg:top-65px ${animate1}`}
                alt=""
              />
              <img
                src={img2}
                className={`absolute right-30px lg:right-56px h-100px lg:h-auto bottom--33px ${animate2}`}
                alt=""
              />
              <img
                src={img3}
                className={`absolute right-40px h-60px lg:h-auto lg:right-83px top--10px ${animate3}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden lg:block w-70px border-r-solid border-l-solid border-color-#232323 border-1px absolute left-20% top-0 bottom-0 z-1"></div> */}
    </div>
  );
}
