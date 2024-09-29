import { SetStateAction, useEffect, useRef, useState } from "react";
import logo from "../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { PAGE_LIST, PageItem } from "../const";
import { useDispatch } from "react-redux";
import { setAnimate } from "../store/pageAnimateSlice";
import "./Header.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { message } from "antd";
import { debounce } from "../utils/common";

export default function Header() {
  const navigator = useNavigate();
  const location = useLocation();
  const [menuList, setMenuList] = useState<Array<PageItem>>([]);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChangeMenu = (v: boolean) => {
    setOpenMenu(v);
    if (v) {
      let idx = 0;
      const list: SetStateAction<PageItem[]> = [];
      const t3 = setTimeout(() => {
        const t1 = setInterval(() => {
          if (list.length != PAGE_LIST.length) {
            list.push({ ...PAGE_LIST[idx] });
            setMenuList(list.map((item) => item));
            idx = idx + 1;
          } else {
            idx = 0;
            clearInterval(t1);
            clearTimeout(t3);
          }
        }, 30);
      }, 10);
    } else {
      let idx2 = menuList.length;
      const t2 = setInterval(() => {
        if (menuList.length != 0) {
          menuList.splice(idx2, 1);
          setMenuList(menuList.map((item) => item));
          idx2 = idx2 - 1;
        } else {
          clearInterval(t2);
        }
      }, 75);
    }
  };
  const dispatch = useDispatch();
  const handleRoute = (item: PageItem) => {
    const currentItem = PAGE_LIST.find((c) => c.path === location.pathname);
    if (window.screen.width < 1024) {
      dispatch(setAnimate(""));
    } else {
      if (currentItem && currentItem.index > item.index) {
        dispatch(setAnimate("scroll-down"));
      } else {
        dispatch(setAnimate("scroll-top"));
      }
    }

    const t = setTimeout(() => {
      navigator(item.path);
      clearTimeout(t);
      handleChangeMenu(false);
    });
  };
  const goHome = () => {
    navigator("/");
    handleChangeMenu(false);
  };
  const lastTop = useRef(0);
  const [dir, setDir] = useState("down");
  const handleScroll = debounce(() => {
    if (location.pathname === "/" || location.pathname === "/newsDetail") {
      if (dir !== "top") {
        setDir("top");
      }
      return;
    }
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < lastTop.current) {
      // down
      if (dir !== "down") {
        setDir("down");
      }
    } else {
      // top
      if (dir !== "top") {
        setDir("top");
      }
    }
    lastTop.current = scrollTop;
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <div className={`layout-header ${dir}`}>
      <div className="flex items-center justify-between">
        <img
          src={logo}
          className="h-20px lg:h-33px cursor-pointer"
          onClick={goHome}
          alt=""
        />
        <div className="block lg:hidden">
          <Button onClick={() => handleChangeMenu(!openMenu)} align="center">
            <div className="relative w-100% h-100%">
              <i
                className={`${
                  !openMenu
                    ? "i-ic-round-equals font-size-24px"
                    : "i-material-symbols-close-small-outline-rounded font-size-28px"
                }  absolute z-100  right--4px top-5px`}
              ></i>
            </div>
          </Button>
        </div>
      </div>
      {/* pc show */}
      <div className={`hidden lg:flex flex-col lg:flex-row `}>
        {PAGE_LIST.map((item, i) =>
          item.name ? (
            <div
              className={`px-16px lg:px-48px flex items-center py-16px lg:py-0 justify-start lg:justify-center cursor-pointer uppercase hover:color-white ${
                item.path === location.pathname ? "color-white" : "color-#777"
              }`}
              key={item.path}
              onClick={() => handleRoute(item)}
            >
              {item.name}
            </div>
          ) : (
            <div key={i}></div>
          )
        )}
      </div>
      <div className="hidden lg:flex justify-start px-16px lg:px-0 lg:justify-end items-center">
        <Button onClick={() => message.warning("Coming soon")}>
          <div className="uppercase px-8px">Get in Touch</div>
        </Button>
      </div>
      {/* mobile show */}
      <div
        className={`mini-menus lg:hidden flex-col ${
          openMenu ? "open-menus" : "close-menus"
        }`}
      >
        <div>
          <TransitionGroup>
            {menuList
              .filter((item) => item.name)
              .map((item) => (
                <CSSTransition
                  key={item.path}
                  timeout={300}
                  classNames="slider"
                >
                  <div
                    className={`px-16px lg:px-48px flex items-center py-16px lg:py-0 justify-start lg:justify-center cursor-pointer uppercase ${
                      item.path === location.pathname
                        ? "color-white"
                        : "color-#777"
                    }`}
                    onClick={() => handleRoute(item)}
                  >
                    {item.name}
                  </div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
        {openMenu ? (
          <div className="flex justify-start px-16px lg:px-0 lg:justify-end mt-20px  mb-20px">
            <Button>
              <div className="uppercase  px-8px">Get in Touch</div>
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
