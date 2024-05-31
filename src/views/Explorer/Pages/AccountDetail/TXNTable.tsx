import { GetTransitionPageListItem } from "../../../../api/modules/explorer";
import { addressDots, formatDate } from "../../../../utils/common";
import { useNavigate } from "react-router-dom";
import { formatEther } from "ethers";
import { txInputToType } from "../../../../utils/utils";
import { TableColumnsType, Table } from "antd";

export interface TXTTableProps {
  list: Array<GetTransitionPageListItem>;
  loading: boolean;
}
export default function TXNTable(props: TXTTableProps) {
  const navigator = useNavigate();
  const toAccountDetail = (address: string) => {
    navigator(`/explorer/accountDetail/${address}`);
  };
  const columns: TableColumnsType<GetTransitionPageListItem> = [
    {
      title: "TXN Hash",
      key: "hash",
      width: 300,
      fixed: "left",
      render(v) {
        return (
          <span className="link hover:color-blue">
            {addressDots(v.hash, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "TXN Time",
      key: "timestamp",
      width: 200,
      render(v) {
        return formatDate(v.timestamp);
      },
    },
    {
      title: "Sender",
      key: "from",
      width: 150,
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
      render(v) {
        return formatEther(v.value);
      },
    },
    {
      title: "TXN Type",
      key: "input",
      render(v) {
        return (
          <div
            className="max-w-80px text-ellipsis overflow-hidden"
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
      key: "gasPrice",
      render(v) {
        return formatEther(v.gasPrice * v.gasUsed).slice(0, 10);
      },
    },
  ];
  return (
    <div>
      <Table
        dataSource={props.list}
        loading={props.loading}
        columns={columns}
      />
    </div>
  );
}
