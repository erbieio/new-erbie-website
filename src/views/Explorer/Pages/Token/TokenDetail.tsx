import { useMemo, useState } from "react";
import DetailCard from "./DetailCard";
import './TokenDetail.scss'
import TxList from "./TxList";
import SourceCode from "./SocureCode";
import HolderList from "./HolderList";
export interface MenuItem {
  label: string;
  value: number;
  select: boolean;
}
const TokenDetail = () => {
      const [list, setList] = useState<MenuItem[]>([
        {
          label: "TXN",
          value: 0,
          select: true,
        },
        {
          label: "Holders",
          value: 1,
          select: false,
        },
        {
          label: "Contracts",
          value: 2,
          select: false,
        },
      ]);
    const selectMenu = useMemo(() => {
       return list.find(item => item.select)!
    },[list])
      const handleClickMenu = (e: MenuItem) => {
        const arr = list.map((e) => e);
        arr.forEach((item) => {
          if (item.value === e.value) {
            item.select = true;
          } else {
            item.select = false;
          }
        });
        setList(arr);
      };
    return (
      <div className="token-detail flex flex-col lg:flex-row lg:h-72vh gap-20px">
        <div className="w-100% lg:w-285px mt-16px lg:mt-0">
          <DetailCard />
        </div>
        <div className="flex flex-col flex-1 gap-16px">
          <div className="tab-list flex gap-14px">
            {list.map((item) => (
              <div
                className={`menu-btn ${item.select && "active"}`}
                key={item.value}
                onClick={() => handleClickMenu(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
          {selectMenu.value === 0 && <TxList />}
          {selectMenu.value === 1 && <HolderList />}
          {selectMenu.value === 2 && <SourceCode />}
        </div>
      </div>
    );
}

export default TokenDetail;
