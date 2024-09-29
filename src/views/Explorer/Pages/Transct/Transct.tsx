import { useEffect, useRef, useState } from "react";
import SearchIpt from "../../components/SearchIpt";
import "./Transct.scss";
import TransitionChart from "./TransitionChart";
import VolumeChart from "./VolumeChart";
import {
  Get24hTxsResponse,
  GetStatsResponse,
  GetTransactionPageParams,
  GetTransactionPageResponse,
  get_24h_txs,
  get_stats,
  get_transaction_page,
} from "../../../../api/modules/explorer";
import { formatEther } from "ethers";
import { toFixed } from "../../../../utils/utils";
import TxList from "./TxList";

export default function Transct() {
  const [stats, setStats] = useState<GetStatsResponse | undefined>();
  // 获取统计数据
  const handleGetStats = async () => {
    const data = await get_stats();
    setStats(data);
  };
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState<GetTransactionPageResponse>();
  const params = useRef<GetTransactionPageParams>({ page: 1, page_size: 10 });
  const handleGetList = async () => {
    try {
      setLoading(true);
      const data = await get_transaction_page(params.current);
      setListData(data);
    } finally {
      setLoading(false);
    }
  };

  const [chart1Data, setChart1Data] = useState<Get24hTxsResponse>();
  const handleGetChart1 = async () => {
    const data = await get_24h_txs();
    setChart1Data(
      data && data.length
        ? data
        : [
            { hour: 1, num: 0 },
            { hour: 2, num: 0 },
            { hour: 3, num: 0 },
            { hour: 4, num: 0 },
            { hour: 5, num: 0 },
            { hour: 6, num: 0 },
            { hour: 7, num: 0 },
            { hour: 8, num: 0 },
            { hour: 9, num: 0 },
            { hour: 10, num: 0 },
            { hour: 11, num: 0 },
            { hour: 12, num: 0 },
            { hour: 13, num: 0 },
            { hour: 14, num: 0 },
            { hour: 15, num: 0 },
            { hour: 16, num: 0 },
            { hour: 17, num: 0 },
            { hour: 18, num: 0 },
            { hour: 19, num: 0 },
            { hour: 20, num: 0 },
            { hour: 21, num: 0 },
            { hour: 22, num: 0 },
            { hour: 23, num: 0 },
          ]
    );
  };

  useEffect(() => {
    handleGetList();
    handleGetStats();
    handleGetChart1();
  }, []);

  const handlePageChange = (page: number) => {
    params.current.page = page;
    handleGetList();
  };
  return (
    <div className="page-transct min-h-70vh flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-35% gap-2vh">
        <div className="flex-1 flex">
          {/* 上 左 */}
          <div className="flex-1">
            <div className="hidden lg:block">
              <SearchIpt />
            </div>
            {/* 图表 24h */}
            <div className="tb1 flex flex-col justify-evenly">
              <div className="font-size-14px flex justify-center items-center w-100% lg:py-2vh">
                <div className="flex">
                  <div className="lh-20px">24h TXN Volume Growth</div>
                  <div className="font-size-20px lh-20px ml-10px">+0.0000%</div>
                </div>
              </div>
              <div className="w-100%">
                <VolumeChart list={chart1Data || []} />
              </div>
            </div>
          </div>
        </div>
        {/* 上 右 */}
        <div className="flex flex-1">
          {/* 上 右 右 饼图 */}
          <div className="tb2 flex flex-col justify-between flex-1">
            <div className="font-size-14px h-60px lg:h-10vh flex justify-center items-center">
              TRANSACTIONS BY TYPE
            </div>
            <div className="bingtu lg:h-20vh flex justify-center px-20px">
              <TransitionChart data={stats}></TransitionChart>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100% lg:w-65% lg:ml-20px min-h-38vh">
        <div className="data-box flex gap-1vh mt-14px lg:mt-0">
          <div className="data-card flex-1">
            <div className="flex flex-col h-100% justify-between">
              <div className="font-size-14px lg:font-size-16px">
                Total Transaction Volume
              </div>
              <div className="font-size-12px lg:font-size-24px">
                {toFixed(formatEther(stats?.totalAmount || "0"))} ERB
              </div>
            </div>
          </div>
          <div className="data-card flex-1">
            <div className="flex flex-col h-100% justify-between">
              <div className="font-size-14px lg:font-size-16px">
                Total Transactions
              </div>
              <div className="font-size-12px lg:font-size-24px">
                {stats?.totalTransaction || "0"}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="table-box mt-2vh">
            <TxList
              onChange={handlePageChange}
              loading={loading}
              params={params}
              total={listData?.total || 0}
              dataSource={listData?.transactions || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
