import { useEffect } from "react";
import { useLocation, useNavigate, useOutlet } from "react-router-dom";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import { PAGE_LIST } from "../const";
import { debounce } from "../utils/common";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setAnimate } from "../store/pageAnimateSlice";

export default function LayOut() {
  const animate = useSelector((state: RootState) => state.pageAnimate.animate);
  const currentOutlet = useOutlet();
  const location = useLocation();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleWheel = debounce((e: WheelEvent) => {
    if (window.screen.width < 1024) {
      dispatch(setAnimate(""))
      return;
    }
    let dir = "";
    if (e.deltaY > 0) {
      //向下
      dir = "down";
    } else {
      //向上
      dir = "top";
    }
    const pathname = location.pathname;
    const nextRoute = PAGE_LIST.find((item) => item.path === pathname);
    if (nextRoute) {
      const { prev, next } = nextRoute;
      dispatch(setAnimate(dir === "top" ? "scroll-down" : "scroll-top"));
      const t = setTimeout(() => {
        if(dir === "top" && prev) {
          navigator(dir === "top" ? String(prev) : String(next));
        } else if(dir === "down" && next) {
          navigator(String(next));
        }
        
        clearTimeout(t);
      });
    }
  }, 500);
  useEffect(() => {
    document.addEventListener("wheel", handleWheel);
    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  });
  return (
    <div className="max-w-1600px m-auto px-20px lg:px-40px">
      <TransitionGroup>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            appear={true}
            timeout={400}
            unmountOnExit={true}
            classNames={animate}
          >
            {currentOutlet}
          </CSSTransition>
        </SwitchTransition>
      </TransitionGroup>
    </div>
  );
}
