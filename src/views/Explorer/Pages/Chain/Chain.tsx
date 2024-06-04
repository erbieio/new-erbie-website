import { useEffect, useRef, useState } from "react";
import Table, { TableColumn } from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import "./Chain.scss";
import {
  get_block_page,
  GetBlockPageParams,
  GetBlockResponse,
  BlockItem,
  get_stats,
  GetStatsResponse,
} from "../../../../api/modules/explorer";
import { addressDots } from "../../../../utils/common";
import { Pagination, PaginationProps, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";

export interface TableMenuItem {
  label: string;
  active: boolean;
  filter: number | null;
}

export default function Chain() {
  const navigator = useNavigate();
  const handleSearch = (v: string) => {
    console.log("search", v);
  };
  const params = useRef<GetBlockPageParams>({
    page: 1,
    page_size: 11,
  });
  const [tableMenus, setTableMenus] = useState<Array<TableMenuItem>>([
    {
      label: "Blocks",
      filter: null,
      active: true,
    },
    {
      label: "Blackhole Blocks",
      filter: 1,
      active: false,
    },
    {
      label: "Penalty Blocks",
      filter: 2,
      active: false,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<GetStatsResponse>();
  const [blockData, setBlockData] = useState<GetBlockResponse>({
    blocks: [],
    total: 0,
  });
  const multiple = 0.5436;
  const handleGetBlocks = async () => {
    try {
      setLoading(true);
      const data = await get_block_page(params.current);
      setBlockData(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetBlocks();
    handleGetStats();
  }, []);
  // get table list
  const handleChangePage: PaginationProps["onChange"] = (page) => {
    params.current.page = page;
    handleGetBlocks();
  };

  // get total stats
  const handleGetStats = async () => {
    try {
      setStatLoading(true);
      const data = await get_stats();
      setStats(data);
    } finally {
      const t = setTimeout(() => {
        setStatLoading(false);
        clearTimeout(t);
      }, 100);
    }
  };
  const toBlockDetail = (blockNumber: number | string) => {
    navigator(`/explorer/blockDetail/${blockNumber}`);
  };
  const toAccountDetail = (address: string) => {
    navigator(`/explorer/accountDetail/${address}`);
  };
  const [statloading, setStatLoading] = useState(false);
  // const [totalRewards, setTotalRewards] = useState(0)
  // const totalERBRewards = useMemo(() => {
  //   // const ReduceRewardPeriod = 365 * 720 * 24
  //   // const DeflationRate = 0.85
  // }, [stats])

  const columns: Array<TableColumn> = [
    {
      title: "Height",
      key: "number",
      render(row) {
        const rowData = row as BlockItem;
        return (
          <span
            className="link hover:color-#1677ff"
            onClick={() => toBlockDetail(rowData.number)}
          >
            {rowData.number}
          </span>
        );
      },
    },
    {
      title: "Proposer",
      key: "miner",
      render(row) {
        const rowData = row as BlockItem;
        return (
          <span
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(rowData.miner)}
          >{`${addressDots(rowData.miner, 5, 18)}`}</span>
        );
      },
    },
    {
      title: "TXN",
      key: "totalTransaction",
    },
    {
      title: "Gas Used",
      key: "Height",
      render(row) {
        const rowData = row as BlockItem;
        return `${rowData.gasUsed} %`;
      },
    },
    {
      title: "Gas Limit",
      key: "gasLimit",
      render(row) {
        const rowData = row as BlockItem;
        return rowData.gasLimit;
      },
    },
    {
      title: "Block Size",
      key: "size",
      render(row) {
        const rowData = row as BlockItem;
        return `${rowData.size} Bytes`;
      },
    },
  ];

  // category search
  const handleFilter = (item: TableMenuItem) => {
    const menus = tableMenus.map((v) => v);
    menus.forEach((child) => {
      if (child.filter === item.filter) {
        child.active = true;
      } else {
        child.active = false;
      }
    });
    setTableMenus(menus);
    const filter: number | null = item.filter;
    if (filter) {
      params.current.filter = filter;
    } else {
      delete params.current.filter;
    }
    params.current.page = 1;
    handleGetBlocks();
  };

  return (
    <div className="page-chain flex flex-col flex-col-reverse lg:flex-row">
      <div className="chain-header flex-1 mt-20px lg:mt-0 w-100%">
        <div className="flex flex-col lg:flex-row w-100% lg:h-48px">
          <div className="flex-1 flex gap-10px">
            {tableMenus.map((item) => (
              <div
                key={item.label}
                className={`chain-btn white-space ${
                  item.active ? "active" : ""
                }`}
                onClick={() => handleFilter(item)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex-1 lg:ml-26px pt-20px lg:pt-0">
            <SearchIpt onSearch={handleSearch} className="font-size-14px" />
          </div>
        </div>
        {/* 左下 */}
        <div className="lg:h-63.5vh">
          <div className="table-list mt-14px flex-1 h-100%">
            <div className="flex flex-col lg:flex-row justify-between p-10px">
              <div className="font-size-12px lg:font-size-16px">
                CHAIN INFORMATION
              </div>
              <Pagination
                current={params.current.page}
                pageSize={params.current.page_size}
                total={blockData.total}
                onChange={handleChangePage}
              ></Pagination>
            </div>
            <div className="flex h-90%">
              <Table
                columns={columns}
                dataSources={blockData?.blocks}
                loading={loading}
              ></Table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20px lg:mt-0 w-100% lg:w-250px lg:ml-22px flex justify-between flex-row lg:flex-col">
        <div className="total-card flex justify-center items-center">
          <div className="w-100%">
            <div className="font-size-12px lg:font-size-16px">Block Height</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">
              <Skeleton
                loading={statloading}
                title={false}
                active
                paragraph={{ rows: 1, width: "100% " }}
              >
                {stats?.totalBlock}
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="total-card flex justify-center items-center">
          <div className="w-100%">
            <div className="font-size-12px lg:font-size-16px">
              Total ERB Rewards
            </div>
            <div className="font-size-16px lg:font-size-24px mt-16px">
              <Skeleton
                loading={statloading}
                active
                paragraph={{ rows: 1, width: "100% " }}
                title={false}
              >
                {stats
                  ? Math.floor(
                      Number(stats?.rewardCoinCount) * multiple * 100
                    ) / 100
                  : 0}
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="total-card flex justify-center items-center">
          <div className="w-100%">
            <div className="font-size-12px lg:font-size-16px">Total CSBT</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">
              <Skeleton
                loading={statloading}
                title={false}
                active
                paragraph={{ rows: 1, width: "100% " }}
              >
                {stats?.rewardSNFTCount}
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
