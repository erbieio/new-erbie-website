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
import { PaginationProps, Skeleton } from "antd";
import useRouter from "../../../../hooks/useRouter";
import { toFixed } from "../../../../utils/utils";
import { formatEther } from "ethers";
import TableHeader from "../../components/TableHeader";

export interface TableMenuItem {
  label: string;
  active: boolean;
  filter: number | null;
}

export default function Chain() {
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
      label: "BlackHole Blocks",
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
  const {toBlockDetail} = useRouter()
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
      setStatLoading(false);
    }
  };
  const handleToBlockDetail = (blockNumber: number | string) => {
    toBlockDetail(blockNumber);
  };
  const { toAccountDetail } = useRouter();
  const [statloading, setStatLoading] = useState(false);
  const columns: Array<TableColumn> = [
    {
      title: "Height",
      key: "number",
      render(row) {
        const rowData = row as BlockItem;
        return (
          <span
            className="link hover:color-#1677ff"
            onClick={() => handleToBlockDetail(rowData.number)}
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
        return `${toFixed(
          ((rowData.gasUsed || 0) / (rowData.gasLimit || 0)) * 100,
          5
        )} %`;
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
      <div className="chain-header flex-1 mt-14px lg:mt-0 w-100%">
        <div className="flex flex-col lg:flex-row w-100% lg:h-48px">
          <div className="flex-1 flex gap-8px lg:gap-10px">
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
          <div className="flex-1 lg:ml-26px pt-14px lg:pt-0 hidden lg:block">
            <SearchIpt className="font-size-14px" />
          </div>
        </div>
        {/* 左下 */}
        <div className="lg:h-65.2vh">
          <div className="table-list mt-14px flex-1 h-100%">
            <TableHeader
              titlePC="CHAIN INFORMATION"
              titleH5="CHAIN"
              params={params}
              onChange={handleChangePage}
              total={blockData.total}
            />
            <div className="flex h-100% lg:h-90%  overflow-x-scroll scrollbar-x">
              <Table
                columns={columns}
                dataSources={blockData?.blocks}
                loading={loading}
              ></Table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14px lg:mt-0 w-100% lg:w-250px lg:ml-22px gap-8px lg:gap-0 flex justify-between flex-row lg:flex-col">
        <div className="flex flex-col gap-8px lg:gap-1.5vh w-full">
          <div className="total-card flex justify-center items-center">
            <div className="w-100%">
              <div className="font-size-10px lg:font-size-16px">
                Block Height
              </div>
              <div className="font-size-10px lg:font-size-24px lg:mt-16px">
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

          <div>
            <div className="total-card flex justify-center items-center">
              <div className="w-100%">
                <div className="font-size-10px lg:font-size-16px">
                  Total CSBT
                </div>
                <div className="font-size-10px lg:font-size-24px lg:mt-16px">
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

        <div className="total-card flex justify-center items-center">
          <div className="w-100%">
            <div className="font-size-10px lg:font-size-16px">
              Total ERB Rewards
            </div>
            <div className="font-size-10px lg:font-size-24px lg:mt-16px">
              <Skeleton
                loading={statloading}
                active
                paragraph={{ rows: 1, width: "100% " }}
                title={false}
              >
                {formatEther(stats?.totalRewardAmount || "0")}
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
