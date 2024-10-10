import { MutableRefObject } from "react";
import TableHeader from "../../components/TableHeader";
import {
    GetContractTxItem,
  GetTransactionPageParams,
  GetTransitionPageListItem,
} from "../../../../api/modules/explorer";
import { PageNationProps } from "../../../../components/PageNation";
import { TableColumnsType, Table } from "antd";
import useRouter from "../../../../hooks/useRouter";
import { addressDots, formatDate } from "../../../../utils/common";
import { toFixed, txInputToType } from "../../../../utils/utils";
import { formatEther } from "ethers";
import { ERBIE_TX_FEE_LENGTH } from "../../../../const/coin";
import { GetContractListByAddrParams } from '../../../../api/modules/explorer';

interface TxListProps {
  dataSource: Array<GetTransitionPageListItem | GetContractTxItem>;
  total: number;
  params: MutableRefObject<GetTransactionPageParams | GetContractListByAddrParams>;
  onChange: PageNationProps["change"];
  sorter?: (order: string) => void;
  loading: boolean;
  titlePC?: string;
  titleH5?: string;
}
const TxList = (props: TxListProps) => {
  const { toTxDetail, toBlockDetail, toAccountDetail } = useRouter();
  const columns: TableColumnsType<
    GetTransitionPageListItem | GetContractTxItem
  > = [
    {
      title: <div className="whitespace-nowrap">TXN Hash</div>,
      key: "blockHash",
      align: "center",
      fixed: "left",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toTxDetail(v.hash)}
          >
            {addressDots(v.hash, 6, 6)}
          </div>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">TXN Time</div>,
      key: "timestamp",
      align: "center",
      render(v) {
        return (
          <div className="whitespace-nowrap">
            {formatDate(v.timestamp, "YYYY/MM/DD HH:mm:ss")}
          </div>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">Block Height</div>,
      key: "blockNumber",
      align: "center",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toBlockDetail(v.blockNumber)}
          >
            {v.blockNumber}
          </div>
        );
      },
    },
    {
      title: "Sender",
      key: "from",
      align: "center",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(v.from)}
          >
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
          <div
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(v.to)}
          >
            {addressDots(v.to, 6, 6)}
          </div>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">Value</div>,
      key: "value",
      align: "center",
      render(v) {
        return toFixed(formatEther(v.value));
      },
    },
    {
      title: <div className="whitespace-nowrap">TXN Type</div>,
      key: "Height",
      align: "center",
      render(v) {
        return (
          <div className="whitespace-nowrap">{txInputToType(v.input)}</div>
        );
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
      title: <div className="whitespace-nowrap">TXN Fee</div>,
      align: "center",
      render(v) {
        return toFixed(
          formatEther(v.gasPrice * v.gasUsed),
          ERBIE_TX_FEE_LENGTH
        );
      },
    },
  ];

  return (
    <div>
      <TableHeader
        titlePC={props.titlePC || "TRANSCT INFORMATION"}
        titleH5={props.titleH5 || "TRANSCT"}
        total={props?.total || 0}
        params={props.params}
        onChange={props.onChange}
      />
      <div className="lg:h-51.2vh">
        <div className="overflow-x-scroll scrollbar-x">
          <Table
            columns={columns}
            dataSource={props.dataSource}
            loading={props.loading}
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TxList;
