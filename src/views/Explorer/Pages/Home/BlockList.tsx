import { useEffect, useRef, useState } from "react";
import "./BlockList.scss";
import {
  BlockItem,
  BlockReward,
  GetBlockPageParams,
  get_block_page,
  get_block_reward,
} from "../../../../api/modules/explorer";
import { TableColumn } from "../../../../components/Table";
import { Pagination, type PaginationProps, Popover } from "antd";
import { addressDots, formatDate } from "../../../../utils/common";
import TableFold from "./TableFold";
import Loading from "../../../../components/Loading";
import { useNavigate } from "react-router-dom";

export default function BlockList() {
  const [list, setList] = useState<Array<BlockItem>>([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
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
    setPage(page);
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

  const columns: Array<TableColumn> = [
    {
      title: "Height",
      key: "number",
      width: "14%",
    },
    {
      title: "Proposers",
      key: "miner",
      width: "36%",
    },
    {
      title: "TXN",
      key: "totalTransaction",
      width: "10%",
    },
    {
      title: "Age",
      key: "timestamp",
      width: "19%",
    },
    {
      title: "Block Size",
      key: "size",
      width: "15%",
    },
    {
      title: "",
      key: "action",
      width: "6%",
    },
  ];
  const navigator = useNavigate()
  const toAccountDetail = (address: string) => {
    navigator(`/explorer/accountDetail/${address}`)
  } 
  return (
    <div className="block-list h-100%">
      <div className="font-size-16px text-left py-10px px-16px tit justify-between flex h-6.4vh">
        <div className="items-center h-100% flex">Block List</div>
        <div className="flex items-center page-box">
          <Pagination
            current={page}
            pageSize={10}
            total={totalPage}
            onChange={handleChangePage}
            pageSizeOptions={[]}
          />
        </div>
      </div>
      <div className="scrollbar-x h-90%">
        <div className="flex list-header px-5px">
          {columns.map((item, i) => (
            <div
              className="font-size-12px px-5px h-5vh lh-2vh flex justify-center items-center color-#80838E text-center whitespace-normal"
              style={{ width: item.width }}
              key={i}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="list-body max-h-46vh scrollbar-y">
          <Loading loading={loading}>
            {list.map((item, i) => {
              return (
                <div className="list-card-box w-100%" key={i}>
                  <div
                    className="flex font-size-12px justify-between lh-4.44vh list-card px-4px"
                    key={item.number}
                  >
                    <div className="px-6px w-14% flex justify-center items-center">
                      <div className="link hover:color-#1677ff">
                        {item.number}
                      </div>
                    </div>
                    <div className="px-6px w-36% flex justify-center items-center">
                      <div className="link hover:color-#1677ff" onClick={() => toAccountDetail(item.miner)}>
                        {addressDots(item.miner, 10)}
                      </div>
                    </div>
                    <div className="px-6px  w-10% flex justify-center items-center">
                      {item.totalTransaction}
                    </div>
                    <div className="px-6px w-19% flex justify-center items-center">
                      {formatDate(Number(item.timestamp))}
                    </div>
                    <div className="px-6px w-15% flex justify-center items-center lh-19px">
                      {item.size} Bytes
                    </div>
                    <div className="px-6px w-6% flex justify-center items-center">
                      <Popover
                        placement="left"
                        title={""}
                        trigger="click"
                        content={
                          <div className="w-662px">
                            <TableFold loading={loadReward} data={reward} />
                          </div>
                        }
                      >
                        <i
                          className="font-size-18px cursor-pointer i-mi-chevron-down"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShow(item);
                          }}
                        ></i>
                      </Popover>
                    </div>
                  </div>
                </div>
              );
            })}
          </Loading>
        </div>
      </div>
    </div>
  );
}
