import { useNavigate } from "react-router-dom";
import { GetSnftMetaItem } from "../../../../api/modules/explorer";

import { addressDots, formatDate } from "../../../../utils/common";
import { TableColumnsType, Table } from "antd";
export interface CSBTTableProps {
  list: Array<GetSnftMetaItem>;
  loading: boolean;
}
export default function CSBTTable(props: CSBTTableProps) {
    const navigator = useNavigate()
    const toAccountDetail = (address: string) => {
        navigator(`/explorer/accountDetail/${address}`);
      };
  const columns: TableColumnsType<GetSnftMetaItem> = [
    {
      title: "Address",
      fixed: 'left',
      key: "address",
      render(v) {
        return (
          <span className="link hover:color-blue" onClick={() => toAccountDetail(v.address)}>
            {addressDots(v.address, 6, 6)}
          </span>
        );
      },
    },
    {
      title: <div>SNFT Number<i className="i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"></i></div>,
      key: "address",
      render(v) {
        return parseInt(v.address.slice(3), 16);
      },
    },
    {
      title: "Creation Time",
      key: "createdAt",
      render(v) {
        return formatDate(v.createdAt)
      },
    },
    {
      title: "Creator",
      key: "creator",
      render(v) {
        return (
          <span className="link hover:color-blue" onClick={() => toAccountDetail(v.creator)}>
            {v.creator ? addressDots(v.creator, 6, 6) : '-'}
          </span>
        );
      },
    },
    {
      title: "Owner",
      key: "owner",
      render(v) {
        return (
          <span className="link hover:color-blue" onClick={() => toAccountDetail(v.owner)}>
            {v.owner ? addressDots(v.owner, 6, 6) : '-'}
          </span>
        );
      },
    },
    {
      title: "Owner Get Time",
      key: "reward_at",
      render(v) {
        return formatDate(v.reward_at)
      }
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
