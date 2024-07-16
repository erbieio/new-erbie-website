import { MouseEventHandler, ReactNode } from "react";
import RImg from "../assets/button-r.svg";
import "./Button.scss";
export interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  align?: "center" | "right";
}
export default function Button(props: ButtonProps) {
  return (
    <div className="flex button rounded-4px h-40px" onClick={props.onClick}>
      <div className="button-box relative pr-14px">
        <div
          className={`px-0px min-w-30px lg:px-18px lg:pr-10px flex ${
            props.align === "right" ? "justify-end" : "justify-center"
          } items-center h-100%  h-36px cursor-pointer select-none font-size-12px color-white`}
        >
          {props.children}
        </div>
        <div className="pr-3px  bg-#0D0316 absolute right--6px top--4px h-44px right-icon w-21px">
          <div className="flex h-100% justify-center py-2px items-center">
            <img
              src={RImg}
              className={`h-100% block ${props.className}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
