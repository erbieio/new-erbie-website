import { useLocation, useNavigate } from "react-router-dom";
import { EXPLORER_PAGE_LIST, ExplorerPageItem } from "../../const";
import "./ExplorerMenus.scss";
import { useDispatch } from "react-redux";
import { setAnimate } from "../../store/pageAnimateSlice";
import { useState } from "react";

export default function ExplorerMenus() {
  const navigator = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [menuList] = useState(EXPLORER_PAGE_LIST);
  const handleClick = (e: ExplorerPageItem) => {
    dispatch(setAnimate(""));
    const t = setTimeout(() => {
      navigator(e.path);
      clearTimeout(t);
    });
  };

  return (
    <div className="explorer-menus">
      {menuList.map((item, i) => (
        <div
          className={`explorer-card select-none h-36px lg:h-12.1vh font-size-12px hover:underline lg:font-size-16px w-25% lg:w-130px cursor-pointer flex items-center justify-center ${
            location.pathname === item.path ? "active" : ""
          }`}
          key={i}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
