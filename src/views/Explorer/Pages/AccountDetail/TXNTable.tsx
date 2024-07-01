import { GetTransitionPageListItem } from "../../../../api/modules/explorer";
import { addressDots, formatDate } from "../../../../utils/common";
import { formatEther } from "ethers";
import { toFixed, txInputToType } from "../../../../utils/utils";
import { TableColumnsType, Table } from "antd";
import useRouter from "../../../../hooks/useRouter";
import {
  ERBIE_COIN_FIXED_LENGTH,
  ERBIE_TX_FEE_LENGTH,
} from "../../../../const/coin";

export interface TXTTableProps {
  list: Array<GetTransitionPageListItem>;
  loading: boolean;
}
export default function TXNTable(props: TXTTableProps) {
  const { toAccountDetail, toTxDetail } = useRouter();
  const columns: TableColumnsType<GetTransitionPageListItem> = [
    {
      title: "TXN Hash",
      key: "hash",
      align: "center",
      // width:180,
      // fixed: "left",
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
        return toFixed(formatEther(v.value), ERBIE_COIN_FIXED_LENGTH);
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
  return (
    <div>
      <Table
        pagination={false}
        dataSource={props.list}
        loading={props.loading}
        columns={columns}
      />
    </div>
  );
}
