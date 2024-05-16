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
import { Pagination, PaginationProps } from "antd";
export default function Chain() {
  const handleSearch = (v: string) => {
    console.log("search", v);
  };
  const params = useRef<GetBlockPageParams>({
    page: 1,
    page_size: 11,
  });
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<GetStatsResponse>();
  const [blockData, setBlockData] = useState<GetBlockResponse>({
    blocks: [],
    total: 0,
  });
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
  // 获取分页数据
  const handleChangePage: PaginationProps["onChange"] = (page) => {
    params.current.page = page;
    handleGetBlocks();
  };

  // 获取统计数据
  const handleGetStats = async () => {
    const data = await get_stats();
    setStats(data);
  };
  const columns: Array<TableColumn> = [
    {
      title: "Height",
      key: "number",
      render(row) {
        const rowData = row as BlockItem;
        return (
          <span className="link hover:color-#1677ff">{rowData.number}</span>
        );
      },
    },
    {
      title: "Proposer",
      key: "miner",
      render(row) {
        const rowData = row as BlockItem;
        return (
          <span className="link hover:color-#1677ff">{`${addressDots(
            rowData.miner,
            5,
            18
          )}`}</span>
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
  return (
    <div className="page-chain flex flex-col flex-col-reverse lg:flex-row">
      <div className="chain-header flex-1 mt-20px lg:mt-0 w-100%">
        <div className="flex flex-col lg:flex-row w-100% lg:h-48px">
          <div className="flex-1 flex gap-10px">
            <div className="chain-btn white-space">Blocks</div>
            <div className="chain-btn white-space">Blackhole Blocks</div>
            <div className="chain-btn white-space">Penalty Blocks</div>
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
          <div>
            <div className="font-size-12px lg:font-size-16px">Block Height</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">
              {stats?.totalBlock}
            </div>
          </div>
        </div>
        <div className="total-card flex justify-center items-center">
          <div>
            <div className="font-size-12px lg:font-size-16px">
              Total ERB Rewards
            </div>
            <div className="font-size-16px lg:font-size-24px mt-16px">
              {stats?.rewardCoinCount}
            </div>
          </div>
        </div>
        <div className="total-card flex justify-center items-center">
          <div>
            <div className="font-size-12px lg:font-size-16px">Total CSBT</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">
              {stats?.rewardSNFTCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
