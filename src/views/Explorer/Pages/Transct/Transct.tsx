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
  GetTransitionPageListItem,
  get_24h_txs,
  get_stats,
  get_transaction_page,
} from "../../../../api/modules/explorer";
import moment from "moment";
import { addressDots } from "../../../../utils/common";
import { formatEther } from "ethers";
import { Pagination, Table, TableColumnsType } from "antd";
import { txInputToType } from "../../../../utils/utils";
export default function Transct() {
  const handleSearch = () => {};
  const columns: TableColumnsType<GetTransitionPageListItem> = [
    {
      title: "TXN Hash",
      key: "blockHash",
      align: "center",
      render(v) {
        return (
          <div className="link hover:color-#1677ff">
            {addressDots(v.blockHash, 6, 6)}
          </div>
        );
      },
    },
    {
      title: "TXN Time",
      key: "timestamp",
      align: "center",
      render(v) {
        return moment(v.timestamp * 1000).format("YYYY/MM/DD HH:mm:ss");
      },
    },
    {
      title: "Block Height",
      key: "blockNumber",
      align: "center",
      render(v) {
        return <div className="link hover:color-#1677ff">{v.blockNumber}</div>;
      },
    },
    {
      title: "Sender",
      key: "from",
      align: "center",
      render(v) {
        return (
          <div className="link hover:color-#1677ff">
            {addressDots(v.from, 6, 6)}
          </div>
        );
      },
    },
    {
      title: "Receiver",
      key: "to",
      align: "center",
      render(v) {
        return (
          <div className="link hover:color-#1677ff">
            {addressDots(v.to, 6, 6)}
          </div>
        );
      },
    },
    {
      title: "Value (ERB)	",
      key: "value",
      align: "center",
      render(v) {
        return formatEther(v.value);
      },
    },
    {
      title: "TXN Type",
      key: "Height",
      align: "center",
      render(v) {
        return txInputToType(v.input);
      },
    },
    {
      title: "Status",
      key: "Height",
      align: "center",
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
      key: "Height",
      align: "center",
      render(v) {
        return formatEther(v.gasPrice * v.gasUsed);
      },
    },
  ];
  const [stats, setStats] = useState<GetStatsResponse | undefined>();

  // 获取统计数据
  const handleGetStats = async () => {
    const data = await get_stats();
    setStats(data);
  };
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState<GetTransactionPageResponse>();
  const params = useRef<GetTransactionPageParams>({ page: 1, page_size: 9 });
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
    setChart1Data(data && data.length ? data: [
      {hour:1,num:0},
      {hour:2,num:0},
      {hour:3,num:0},
      {hour:4,num:0},
      {hour:5,num:0},
      {hour:6,num:0},
      {hour:7,num:0},
      {hour:8,num:0},
      {hour:9,num:0},
      {hour:10,num:0},
      {hour:11,num:0},
      {hour:12,num:0},
      {hour:13,num:0},
      {hour:14,num:0},
      {hour:15,num:0},
      {hour:16,num:0},
      {hour:17,num:0},
      {hour:18,num:0},
      {hour:19,num:0},
      {hour:20,num:0},
      {hour:21,num:0},
      {hour:22,num:0},
      {hour:23,num:0},
    ]);
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
    <div className="page-transct min-h-70vh flex">
      <div className="flex flex-col w-35% gap-2vh">
        <div className="flex-1 flex">
          {/* 上 左 */}
          <div className="flex-1">
            <SearchIpt onSearch={handleSearch} />
            {/* 图表 24h */}
            <div className="tb1 flex flex-col justify-evenly">
              <div className="font-size-14px flex justify-center items-center w-100% py-2vh">
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
            <div className="font-size-14px h-10vh flex justify-center items-center">
              TRANSACTIONS BY TYPE
            </div>
            <div className="bingtu h-20vh flex justify-center px-20px">
              <TransitionChart data={stats}></TransitionChart>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-65% ml-20px min-h-38vh">
        <div className="data-box flex gap-1vh">
          <div className="data-card flex-1">
            <div className="flex flex-col h-100% justify-between">
              <div className="font-size-16px">Total Transaction Volume</div>
              <div className="font-size-24px">
                {formatEther(stats?.totalAmount || "0")} ERB
              </div>
            </div>
          </div>
          <div className="data-card flex-1">
            <div className="flex flex-col h-100% justify-between">
              <div className="font-size-16px">Total Transactions</div>
              <div className="font-size-24px">
                {stats?.totalTransaction || "0"}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="table-box mt-2vh">
            <div className="flex justify-between px-10px pt-10px pb-14px">
              <div className="font-size-16px uppercase">
                Transct Informations
              </div>
              <div>
                <Pagination
                  current={params.current.page}
                  pageSize={params.current.page_size}
                  total={listData?.total}
                  onChange={handlePageChange}
                ></Pagination>
              </div>
            </div>
            <div className="min-h-50vh">
              <Table
                columns={columns}
                dataSource={listData?.transactions}
                loading={loading}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
