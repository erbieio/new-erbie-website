import { useLocation, useNavigate } from "react-router-dom";
import { EXPLORER_PAGE_LIST, ExplorerPageItem } from "../../const";
import "./ExplorerMenus.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAnimate } from "../../store/pageAnimateSlice";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { RootState } from "../../store";

export default function ExplorerMenus() {
  const navigator = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const explorerFixed = useSelector((state: RootState) => state.pageAnimate.explorerFixed);
  const [menuList] = useState(EXPLORER_PAGE_LIST);
  const handleClick = (e: ExplorerPageItem) => {
    dispatch(setAnimate(""));
    navigator(e.path);
  };
  const [show, setShow] = useState(false);
  const root = document.getElementsByTagName("body");
  console.log("root", root);
  useEffect(() => {
    if (root.length) {
      if (show) {
        root[0].style.overflow = "hidden";
      } else {
        root[0].style.overflow = "auto";
      }
    }
  }, [root, show]);
  return (
    <>
      <div className="explorer-menus">
        {menuList.map((item) => (
          <div
            className={`explorer-card select-none h-36px lg:h-12.1vh font-size-12px hover:underline lg:font-size-16px w-16.5% lg:w-130px cursor-pointer flex items-center justify-center ${
              location.pathname === item.path ? "active" : ""
            }`}
            key={item.path}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      {/* 适配移动端 */}

      <div className="relative">
        <div className="flex justify-start lg:hidden">
          <Button align="right" onClick={() => setShow(!show)}>
            <i
              className={`${
                show ? "i-ep-arrow-right" : "i-ep-arrow-down"
              } font-size-20px`}
            ></i>
          </Button>
        </div>
        <div
          className={`${show ? "block" : "hidden"} fixed left-0 right-0 ${
            explorerFixed ? "top-62px" : "top-132px"
          } bg-#0D0316 bottom-0 z-99`}
        >
          {menuList.map((item) => (
            <div
              className={`select-none h-64px  font-size-14px font-bold uppercase hover:underline cursor-pointer flex items-center justify-start px-20px ${
                location.pathname === item.path ? "color-#8B5EAD" : ""
              }`}
              key={item.path}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
