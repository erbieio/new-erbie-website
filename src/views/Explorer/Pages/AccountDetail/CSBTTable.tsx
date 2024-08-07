import { GetSnftMetaItem } from "../../../../api/modules/explorer";
import { addressDots, formatDate } from "../../../../utils/common";
import { TableColumnsType, Table } from "antd";
import useRouter from "../../../../hooks/useRouter";
import { useEffect } from "react";
export interface CSBTTableProps {
  list: Array<GetSnftMetaItem>;
  loading: boolean;
}
export default function CSBTTable(props: CSBTTableProps) {
  const { toAccountDetail } = useRouter();
  useEffect(() => {
    console.log(props.list);
  }, [props.list]);
  const columns: TableColumnsType<GetSnftMetaItem> = [
    {
      title: "Address",
      fixed: "left",
      align: "center",
      key: "address",
      render(v) {
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(v.address)}
          >
            {addressDots(v.address, 6, 6)}
          </span>
        );
      },
    },
    {
      title: (
        <div className="whitespace-nowrap">
          SNFT Number
          <i className="i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"></i>
        </div>
      ),
      key: "address",
      align: "center",
      render(v) {
        return parseInt(v.address.slice(3), 16);
      },
    },
    {
      title: <div className="whitespace-nowrap">Creation Time</div>,
      key: "createdAt",
      align: "center",
      render(v) {
        return (
          <div className="whitespace-nowrap">{formatDate(v.reward_at)}</div>
        );
      },
    },
    {
      title: "Creator",
      key: "creator",
      align: "center",
      render(v) {
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(v.creator)}
          >
            {v.creator ? addressDots(v.creator, 6, 6) : "-"}
          </span>
        );
      },
    },
    {
      title: "Owner",
      key: "owner",
      align: "center",
      render(v) {
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(v.owner)}
          >
            {v.owner ? addressDots(v.owner, 6, 6) : "-"}
          </span>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">Owner Get Time</div>,
      key: "reward_at",
      align: "center",
      render(v) {
        return formatDate(v.reward_at);
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
