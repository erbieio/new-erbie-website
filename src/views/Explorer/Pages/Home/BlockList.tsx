import { useEffect, useRef, useState } from "react";
import "./BlockList.scss";
import {
  BlockItem,
  BlockReward,
  GetBlockPageParams,
  get_block_page,
  get_block_reward,
} from "../../../../api/modules/explorer";
import {
  type PaginationProps,
  Popover,
  Table,
  TableColumnsType,
} from "antd";
import { addressDots, formatDate } from "../../../../utils/common";
import TableFold from "./TableFold";
import useRouter from "../../../../hooks/useRouter";
import TableHeader from "../../components/TableHeader";

export default function BlockList() {
  const [list, setList] = useState<Array<BlockItem>>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const { toAccountDetail, toBlockDetail } = useRouter();
  const params = useRef({
    page: 1,
    page_size: 10,
  });

  const handleGetBlockPage = async (params: GetBlockPageParams) => {
    try {
      setLoading(true);
      const data = await get_block_page(params);
      const newList = data.blocks.map((item) => ({
        ...item,
        number: item.number,
        miner: item.miner,
        totalTransaction: item.totalTransaction,
        timestamp: item.timestamp,
        size: item.size,
        show: false,
        loading: false,
      }));
      setList(newList);
      setTotalPage(data.total);
      return data;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetBlockPage(params.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChangePage: PaginationProps["onChange"] = (page) => {
    params.current.page = page;
    handleGetBlockPage(params.current);
  };

  // 展示区块收益点击事件
  const handleShow = async (val: BlockItem) => {
    if (!loadReward) {
      await handleGetReward(val.number.toString());
    }
  };

  // 区块收益
  const [reward, setReward] = useState<Array<BlockReward>>([]);
  const [loadReward, setLoadReward] = useState(false);
  const handleGetReward = async (block: string) => {
    try {
      setLoadReward(true);
      const data = await get_block_reward(block);
      setReward(data);
    } finally {
      setLoadReward(false);
    }
  };

  const columns: TableColumnsType<BlockItem> = [
    {
      title: "Height",
      dataIndex: "number",
      width: "14%",
      render(_value, record) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toBlockDetail(record.number)}
          >
            {record.number}
          </div>
        );
      },
    },
    {
      title: "Proposers",
      dataIndex: "miner",
      width: "36%",
      render(_value, record) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(record.miner)}
          >
            {addressDots(record.miner, 10)}
          </div>
        );
      },
    },
    {
      title: "TXN",
      dataIndex: "totalTransaction",
      width: "10%",
    },
    {
      title: "Age",
      dataIndex: "timestamp",
      width: "19%",
      render(_value, record) {
        return (
          <div className="whitespace-nowrap">
            {formatDate(Number(record.timestamp))}
          </div>
        );
      },
    },
    {
      title: "Block Size",
      dataIndex: "size",
      width: "15%",
      render(_value, record) {
        return (
          <div className="whitespace-nowrap">{record.size + " Bytes"}</div>
        );
      },
    },
    {
      title: "",
      dataIndex: "action",
      width: "6%",
      fixed: "right",
      render(_value, record) {
        return (
          <Popover
            placement="left"
            title={""}
            trigger="click"
            content={
              <div className="scrollbar-x overflow-x-scroll">
                <div className="w-662px lg:w-662px">
                  <TableFold loading={loadReward} data={reward} />
                </div>
              </div>
            }
          >
            <i
              className="font-size-18px cursor-pointer i-mi-chevron-down"
              onClick={(e) => {
                e.stopPropagation();
                handleShow(record);
              }}
            ></i>
          </Popover>
        );
      },
    },
  ];
  return (
    <div className="block-list h-100%">
      <TableHeader
        titleH5="Blocks"
        titlePC="Block List"
        total={totalPage}
        onChange={handleChangePage}
        params={params}
      />
      <div className="scrollbar-x overflow-x-scroll h-90%">
        <Table
          columns={columns}
          dataSource={list}
          loading={loading}
          pagination={false}
        />
      </div>
    </div>
  );
}
