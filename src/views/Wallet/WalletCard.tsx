import { MouseEventHandler, ReactNode } from "react";
import "./WalletCard.scss";
export interface WalletCardProps {
  label: ReactNode;
  desc: string | ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
export default function WalletCard(props: WalletCardProps) {
  return (
    <div
      onClick={props.onClick}
      className={`wallet-card select-none flex justify-center items-center min-w-100% lg:min-w-463px h-160px lg:h-32vh border-style-solid border-width-1px cursor-pointer ${props.className}`}
    >
      <div className="flex w-100% relative py-20px">
        <div className="flex-full px-20px lg:px-40px text-left">
          <div className="font-size-20px lg:font-size-38px lg:lh-48px">
            {props.label}
          </div>
          <div className="font-size-16px lg:font-size-24px mt-7vh">
            {props.desc}
          </div>
        </div>
        <div className="w-120px lg:w-198px flex justify-end items-center absolute right-0 top-26px lg:top-3vh">
          { props.children }
        </div>
      </div>
    </div>
  );
}
