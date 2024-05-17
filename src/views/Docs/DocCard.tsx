import { MouseEventHandler, ReactNode } from "react";
import "./DocCard.scss";
export interface DocCardProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  label: string;
  desc: string;
  link: string
}
export default function DocCard(props: DocCardProps) {
  return (
    <div className="relative flex flex-wrap flex-col-reverse justify-end items-center lg:flex-row w-48% lg:w-48% h-auto lg:h-21.6vh doc-card py-24px lg:py-20px px-10px lg:pl-30px">
      <div className="flex w-100% justify-center lg:justify-start">
        <div className="lg:w-75% text-center lg:text-left">
          <div className="font-size-12px lg:font-size-20px label cursor-pointer"><a href={props.link} target="__blank">{props.label}</a></div>
          <div className="hidden lg:block font-size-12px mt-10px">{props.desc}</div>
        </div>
      </div>
      <div className="w-100% lg:w-auto mb-24px lg:mb-0 lg:absolute lg:mt-0 right-0 top-0 bottom-0 lg:left-70%">
        <div className="flex justify-center items-center w-100% h-65px lg:h-100%">{props.children}</div>
      </div> 
    </div>
  );
}
