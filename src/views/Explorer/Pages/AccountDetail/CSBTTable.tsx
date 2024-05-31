import { useNavigate } from "react-router-dom";
import { GetSnftMetaItem } from "../../../../api/modules/explorer";
import Table, { TableColumn } from "../../../../components/Table";
import { addressDots, formatDate } from "../../../../utils/common";
export interface CSBTTableProps {
  list: Array<GetSnftMetaItem>;
  loading: boolean;
}
export default function CSBTTable(props: CSBTTableProps) {
    const navigator = useNavigate()
    const toAccountDetail = (address: string) => {
        navigator(`/explorer/accountDetail/${address}`);
      };
  const columns: Array<TableColumn> = [
    {
      title: "Address",
      key: "address",
      render(v) {
        const data = v as GetSnftMetaItem;
        return (
          <span className="link hover:color-blue" onClick={() => toAccountDetail(data.address)}>
            {addressDots(data.address, 6, 6)}
          </span>
        );
      },
    },
    {
      title: <div>SNFT Number<i className="i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"></i></div>,
      key: "address",
      render(v) {
        const data = v as GetSnftMetaItem;
        return parseInt(data.address.slice(3), 16);
      },
    },
    {
      title: "Creation Time",
      key: "createdAt",
      render(v) {
        const data = v as GetSnftMetaItem;
        return formatDate(data.createdAt)
      },
    },
    {
      title: "Creator",
      key: "creator",
      render(v) {
        const data = v as GetSnftMetaItem;
        return (
          <span className="link hover:color-blue" onClick={() => toAccountDetail(data.creator)}>
            {data.creator ? addressDots(data.creator, 6, 6) : '-'}
          </span>
        );
      },
    },
    {
      title: "Owner",
      key: "owner",
      render(v) {
        const data = v as GetSnftMetaItem;
        return (
          <span className="link hover:color-blue" onClick={() => toAccountDetail(data.owner)}>
            {data.owner ? addressDots(data.owner, 6, 6) : '-'}
          </span>
        );
      },
    },
    {
      title: "Owner Get Time",
      key: "reward_at",
      render(v) {
        const data = v as GetSnftMetaItem;
        return formatDate(data.reward_at)
      }
    },
  ];
  return (
    <div>
      <Table
        dataSources={props.list}
        loading={props.loading}
        columns={columns}
      />
    </div>
  );
}
