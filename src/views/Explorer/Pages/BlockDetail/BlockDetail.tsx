import { Table, TableColumnsType } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import BlockDetailCard from "./BlockDetailCard";
import DetailsCard from "./DetailCard";
import {
  GetBlockDetailResponse,
  GetBlockRewardResponse,
  GetSlashingsResponse,
  GetTransactionPageParams,
  GetTransactionPageResponse,
  GetTransitionPageListItem,
  get_block_detail,
  get_block_reward,
  get_slashings,
  get_transaction_page,
} from "../../../../api/modules/explorer";
import { addressDots, formatDate } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
import { formatEther } from "ethers";
import { toFixed, txInputToType } from "../../../../utils/utils";
import "./BlockDetail.scss";
import BlockholeDetailsCard from "./BlockholeDetailsCard";
import NodeAddressCard from "./NodeAddressCard";
import { ERBIE_TX_FEE_LENGTH } from "../../../../const/coin";
import { useParams } from "react-router-dom";
import PunishmentDetailCard from "./PunishmentDetailCard";
import RewardListCard from "./RewardListCard";
import DelegateAccounts from "./DelegateAccounts";
import TableHeader from "../../components/TableHeader";
export default function BlockDetail() {
  const params = useParams<{ blockNumber: string }>();
  const pageParams = useRef<GetTransactionPageParams>({
    page: 1,
    page_size: 11,
  });
  const handleChangePage = (page: number) => {
    pageParams.current.page = page;
  };
  const { toAccountDetail, toTxDetail } = useRouter();
  const [listPage, setListPage] = useState<GetTransactionPageResponse>();
  const columns: TableColumnsType<GetTransitionPageListItem> = [
    {
      title: "TXN Hash",
      key: "hash",
      align: "center",
      fixed: "left",
      render(v) {
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toTxDetail(v.hash)}
          >
            {addressDots(v.hash, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "TXN Time",
      key: "timestamp",
      align: "center",
      width: 70,
      render(v) {
        return (
          <div className="whitespace-nowrap">{formatDate(v.timestamp)}</div>
        );
      },
    },
    {
      title: "Sender",
      key: "from",
      align: "center",
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
      align: "center",
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
      align: "center",
      render(v) {
        return formatEther(v.value);
      },
    },
    {
      title: "TXN Type",
      key: "input",
      align: "center",
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
      align: "center",
      key: "gasPrice",
      render(v) {
        return toFixed(
          formatEther(v.gasPrice * v.gasUsed),
          ERBIE_TX_FEE_LENGTH
        );
      },
    },
  ];
  // 块收益
  const [reward, setReward] = useState<GetBlockRewardResponse>();
  const [block, setBlock] = useState<GetBlockDetailResponse>();
  const handleGetReward = async () => {
    if (params.blockNumber) {
      const data = await get_block_reward(params.blockNumber);
      setReward(data);
    }
  };

  const handleGetListTX = async () => {
    if (params.blockNumber) {
      pageParams.current.number = Number(params.blockNumber);
    }
    const data = await get_transaction_page(pageParams.current);
    setListPage(data);
  };
  const handleGetBlockDetail = async () => {
    if (params.blockNumber) {
      const data = await get_block_detail(Number(params.blockNumber));
      setBlock(data);
    }
  };
  // 惩罚块 2
  const [block2, setBlock2] = useState<GetSlashingsResponse>();
  // 黑洞块 1
  const [block1, setBlock1] = useState<GetSlashingsResponse>();
  // 块类型  惩罚块 2  黑洞块 1  普通块 3
  const blockType = useMemo(() => {
    if (block1 && block2) {
      if (block1.data.length) {
        return 1;
      }
      if (block2.data.length) {
        return 2;
      }
    }
    return 3;
  }, [block1, block2]);
  const handleGetSlashingsBlock = async (reason: 1 | 2 | null) => {
    const data = await get_slashings({
      page: 1,
      page_size: 11,
      reason,
      number: Number(params.blockNumber),
    });
    reason === 1 && setBlock1(data);
    reason === 2 && setBlock2(data);
  };

  useEffect(() => {
    handleGetReward();
    handleGetListTX();
    handleGetBlockDetail();
    handleGetSlashingsBlock(1);
    handleGetSlashingsBlock(2);
    console.log(reward);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="block-detail flex flex-col lg:flex-row lg:h-72vh">
      <div className="lg:w-340px flex flex-col lg:flex-row lg:flex-col gap-1.3vh mt-14px lg:mt-0">
        <BlockDetailCard data={block} listTX={listPage} />
        {blockType === 2 ? (
          <>
            <PunishmentDetailCard data={block2} />
            <DetailsCard list={block?.proof || []} />
          </>
        ) : (
          <></>
        )}
        {blockType === 1 ? (
          <>
            <BlockholeDetailsCard list={block1?.data || []} />
            <NodeAddressCard list={block?.proposers || []} />
          </>
        ) : (
          <></>
        )}
        {blockType === 3 ? (
          <>
            <RewardListCard data={reward} />
            <DelegateAccounts data={reward} />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="flex-1 lg:ml-20px table-box mt-14px lg:mt-0">
        <TableHeader
          titleH5="TRANSACTIONS"
          titlePC="TRANSACTIONS LIST"
          params={pageParams}
          total={listPage?.total || 0}
          onChange={handleChangePage}
        />
        <div className=" overflow-x-scroll scrollbar-x h-100% lg:h-60vh">
          <Table
            columns={columns}
            dataSource={listPage?.transactions}
            pagination={false}
          ></Table>
        </div>
      </div>
    </div>
  );
}
