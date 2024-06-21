import { Pagination, Table, TableColumnsType } from "antd";
import { useRef, useState } from "react";
import BlockDetailCard from "./BlockDetailCard";
// import RewardListCard from "./RewardListCard";
// import DelegateAccounts from "./DelegateAccounts";
import { GetTransitionPageListItem } from '../../../../api/modules/explorer';
import { addressDots, formatDate } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
import { formatEther } from "ethers";
import { toFixed, txInputToType } from "../../../../utils/utils";
import './BlockDetail.scss'
import BlockholeDetailsCard from "./BlockholeDetailsCard";
import NodeAddressCard from "./NodeAddressCard";
import { ERBIE_TX_FEE_LENGTH } from "../../../../const/coin";
// import { useParams } from "react-router-dom";
export default function BlockDetail() {
  // const params = useParams()
  const pageParams = useRef({
    page: 1,
    page_size: 10,

  });
  const handleChangePage = (page: number) => {
    pageParams.current.page = page;

  };
  const {toAccountDetail} = useRouter()
  const [total] = useState(0)
  const [list] = useState([])
  const columns: TableColumnsType<GetTransitionPageListItem> = [
    {
      title: "TXN Hash",
      key: "hash",
      align: 'center',
      fixed: "left",
      render(v) {
        return (
          <span className="link hover:color-blue">
            {addressDots(v.hash, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "TXN Time",
      key: "timestamp",
      align: 'center',
      width:70,
      render(v) {
        return <div className="whitespace-nowrap">{formatDate(v.timestamp)}</div>;
      },
    },
    {
      title: "Sender",
      key: "from",
      align: 'center',
      // width: 150,
      render(v) {
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(v.from)}
          >
            {addressDots(v.from, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "Receiver",
      key: "to",
      align: 'center',
      width: 150,
      render(v) {
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(v.to)}
          >
            {addressDots(v.to, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "Transaction Value",
      key: "value",
      align: 'center',
      render(v) {
        return formatEther(v.value);
      },
    },
    {
      title: "TXN Type",
      key: "input",
      align: 'center',
      render(v) {
        return (
          <div
            className="overflow-hidden whitespace-nowrap"
            title={txInputToType(v.input)}
          >
            {txInputToType(v.input)}
          </div>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      align: 'center',
      render(v) {
        return (
          <div
            className={`px-4px rounded-4px ${
              v.status === 1
                ? "color-#9effcc bg-#3B4C43"
                : "color-#FE4FA7 bg-#4C293A"
            } ${"rgba(168, 255, 210, .2)"}`}
          >
            {v.status === 1 ? "Success" : "Defeat"}
          </div>
        );
      },
    },
    {
      title: "TXN Fee",
      align: 'center',
      key: "gasPrice",
      render(v) {
        return toFixed(formatEther(v.gasPrice * v.gasUsed),ERBIE_TX_FEE_LENGTH)
      },
    },
  ];
  // const [reward, setReward] = useState<GetBlockRewa>()
  // const handleGetReward = async() => {
  //   if(params.block) {
  //     const data = await get_block_reward(params.block)
  //   }
  // }
  return (
    <div className="block-detail flex flex-col lg:flex-row lg:h-72vh">
      <div className="lg:w-35% flex flex-col lg:flex-row lg:flex-col gap-1.3vh mt-14px lg:mt-0">
        <BlockDetailCard />
        {/* <RewardListCard /> */}
        <BlockholeDetailsCard />
        {/* <DelegateAccounts /> */}
        <NodeAddressCard />
      </div>
      <div className="w-100% lg:ml-20px table-box mt-14px lg:mt-0">
      <div className="text-left px-10px py-8px lh-4vh flex flex-col lg:flex-row items-center justify-between w-100%">
            <div className="font-size-16px">TRANSACTIONS LIST</div>
            <div>
              <Pagination
                current={pageParams.current.page}
                pageSize={pageParams.current.page_size}
                total={total}
                onChange={handleChangePage}
              />
            </div>
          </div>
          <div className=" overflow-x-scroll scrollbar-x h-100% lg:h-60vh">
            <Table columns={columns} dataSource={list}></Table>
            </div>
      </div>
    </div>
  )
}
