import HomeCard from "./HomeCard";
import { useEffect, useState } from "react";

import OnlineCard from "./OnlineCard";
import BlockList from "./BlockList";
import {
  GetOnlineAddrResopnse,
  GetStatsResponse,
  get_onlineAddr,
  get_stats,
} from "../../../../api/modules/explorer";
import SearchIpt from "../../components/SearchIpt";
import WorldCharts from "./WorldCharts";
import { toFixed } from "../../../../utils/utils";
export default function Home() {
  const [stats, setStats] = useState<GetStatsResponse>();
  const [onlineAddr, setOnlineAddr] = useState<GetOnlineAddrResopnse>();

  // 获取统计数据
  const handleGetStats = async () => {
    const data = await get_stats();
    setStats(data);
  };
  // 获取在线矿工数据
  const handleGetOnlineAddr = async () => {
    const data = await get_onlineAddr();
    console.log("online", data);
    setOnlineAddr(data);
  };
  useEffect(() => {
    handleGetStats();
    handleGetOnlineAddr();
  }, []);

  return (
    <div className="page-explorer-home flex justify-center items-center w-100%">
      <div className=" flex flex-col lg:flex-row w-100%">
        <div className="lg:mr-30px flex-1 flex flex-col justify-evenly">
          <div className="hidden lg:block">
            <div className="flex flex-wrap lg:flex-nowrap lg:border-l-style-solid border-color-white border-l-width-1px">
              <HomeCard
                label="Block Height"
                value={stats && stats.totalBlock ? stats.totalBlock - 1 : 0}
              />
              <HomeCard
                label="Block Time"
                value={`${stats?.avgBlockTime || 0} ms`}
              />
              <HomeCard
                label="Blockhole Block"
                value={`${stats?.totalBlackHole || 0}`}
              />
            </div>
            <div className="flex lg:border-l-style-solid lg:border-color-white lg:border-l-width-1px  lg:hidden">
              <HomeCard
                label="Total Transactions"
                value={`${stats?.totalTransaction || 0}`}
              />
              <HomeCard
                label="Total Staking"
                value={`${toFixed(
                  (Number(stats?.totalPledge) / 1000000000000000000).toString()
                )}`}
              />
              <HomeCard
                label="Total CSBT"
                value={`${stats?.rewardSNFTCount || 0}`}
              />
            </div>
          </div>
          <div className="mt-20px lg:mt-45px lg:mt-2.3vh hidden lg:block">
            <SearchIpt />
          </div>
          <div className="mt-14px lg:mt-2.3vh">
            {/* <img src={ditu} className="h-180px lg:h-30vh" alt="" /> */}
            <WorldCharts />
          </div>
          <div className="block lg:hidden">
            <div className="flex flex-wrap lg:flex-nowrap lg:border-l-style-solid border-color-white border-l-width-1px">
              <HomeCard
                label="Block Height"
                value={stats && stats.totalBlock ? stats.totalBlock - 1 : 0}
              />
              <HomeCard
                label="Block Time"
                value={`${stats?.avgBlockTime || 0} ms`}
              />
              <HomeCard
                label="Blockhole"
                value={`${stats?.totalBlackHole || 0}`}
              />
            </div>
            <div className="flex lg:border-l-style-solid lg:border-color-white lg:border-l-width-1px  lg:hidden">
              <HomeCard
                label="Transactions"
                value={`${stats?.totalTransaction || 0}`}
              />
              <HomeCard
                label="Total Staking"
                value={`${toFixed(
                  (Number(stats?.totalPledge) / 1000000000000000000).toString()
                )}`}
              />
              <HomeCard
                label="Total CSBT"
                value={`${stats?.rewardSNFTCount || 0}`}
              />
            </div>
          </div>
          <div className="flex justify-between gap-12px mt-20px hidden lg:flex">
            <OnlineCard
              label="Online Nodes"
              value={onlineAddr?.onlineNode4h || 0}
            />
            <OnlineCard
              label="Online Validators"
              value={`${stats?.totalValidator}/${onlineAddr?.onlineNode4h}`}
            />
            <OnlineCard label="Total Stakers" value={stats?.totalStaker || 0} />
          </div>
        </div>
        <div className="flex-1 right-box w-100%">
          <div className="hidden lg:flex border-l-style-solid border-color-white border-l-width-1px">
            <HomeCard
              label="Total Transactions"
              value={`${
                stats && stats.totalTransaction ? stats.totalTransaction : 0
              }`}
            />
            <HomeCard
              label="Total Staking"
              value={`${toFixed(
                (Number(stats?.totalPledge) / 1000000000000000000).toString()
              )}`}
            />
            <HomeCard
              label="Total CSBT"
              value={`${
                stats && stats.rewardSNFTCount ? stats.rewardSNFTCount : 0
              }`}
            />
          </div>
          <div className="mt-20px lg:mt-2.3vh h-80%">
            <BlockList />
          </div>
        </div>
      </div>
    </div>
  );
}
