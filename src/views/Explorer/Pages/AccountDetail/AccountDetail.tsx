import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./AccountDetail.scss";
import TXNCard from "./TXNCard";
import StakeCard from "./StakeCard";
import StakedCard from "./StakedCard";
import CSBTCard from "./CSBTCard";
import { Pagination } from "antd";
import Table, { TableColumn } from "../../../../components/Table";
export interface AcccountDetailMenusItem {
  label: string;
  checked: boolean;
  value: number;
}
export default function AccountDetail() {
  const params = useParams();
  const location = useLocation();
  const [list, setList] = useState<Array<AcccountDetailMenusItem>>([
    {
      label: "TXN",
      checked: true,
      value: 1,
    },
    {
      label: "Stake",
      checked: false,
      value: 2,
    },
    {
      label: "Staked",
      checked: false,
      value: 3,
    },
    {
      label: "CSBT",
      checked: false,
      value: 4,
    },
  ]);

  const currentMenu = useMemo(() => {
    return list.find((item) => item.checked)?.value;
  }, [list]);

  const handleMenuClick = (e: AcccountDetailMenusItem) => {
    const newList = list.map((item) => item);
    newList.forEach((item) => {
      if (item.value === e.value) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
    setList(newList);
  };
  useEffect(() => {
    console.log("searchParams", params.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);


  const columns: Array<TableColumn> = [
    {
      title: "TXN Hash",
      key: "address",
      //   render(v){
      //     const data = v as GetSnftMetaItem;
      //     return <a className="link">{addressDots(data.address,6,6)}</a>
      //   }
    },
    {
      title: "TXN Time",
      key: "address",
    },
    {
      title: "Sender",
      key: "createdAt",
    },
    {
      title: "Receiver",
      key: "owner",
    },
    {
      title: "Transaction Value",
      key: "reward_at",
    },
    {
      title: "TXN Type",
      key: "reward_at",
    },
    {
      title: "Status",
      key: "reward_at",
    },
    {
      title: "TXN Fee",
      key: "reward_at",
    },
  ];
  return (
    <div className="account-detail flex h-100% h-72vh">
      <div className="w-330px">
        {currentMenu === 1 ? <TXNCard /> : <></>}
        {currentMenu === 2 ? <StakeCard /> : <></>}
        {currentMenu === 3 ? <StakedCard /> : <></>}
        {currentMenu === 4 ? <CSBTCard /> : <></>}
      </div>
      <div className="w-70% ml-24px flex flex-col gap-2vh">
        <div className="flex font-size-14px gap-1vh justify-between">
          {list.map((item, i) => (
            <div
              key={i}
              onClick={() => handleMenuClick(item)}
              className={`w-24% bg-#2A223E lh-4vh cursor-pointer menu-card ${
                item.checked ? "active" : ""
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="table-box h-100%">
          <div className="text-left px-10px py-8px lh-4vh flex items-center justify-between">
            <div className="font-size-16px">TRANSACTIONS LIST</div>
            <div>
              <Pagination current={1} pageSize={10} total={88} />
            </div>
          </div>
          <div>
            <Table dataSources={[]} columns={columns} loading={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
