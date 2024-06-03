import { GetPledgePageItem } from "../../../../api/modules/explorer";
import Table, { TableColumn } from "../../../../components/Table";
import { useNavigate } from "react-router-dom";
import { addressDots, formatDate } from "../../../../utils/common";
import { formatEther } from "ethers";

export interface StakeTableProps {
  list: Array<GetPledgePageItem>;
  loading: boolean;
  type: 2 | 3; // STAKE  STAKED
}
export default function StakeTable(props: StakeTableProps) {
  const navigator = useNavigate();
  const toAccountDetail = (address: string) => {
    navigator(`/explorer/accountDetail/${address}`);
  };
  const columns: Array<TableColumn> = [
    {
      title: "Account",
      key: props.type === 2 ? "staker" : "validator",
      render(val) {
        const data = val as GetPledgePageItem;
        const addr = props.type === 2 ? data.staker : data.validator;
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(addr)}
          >
            {addressDots(addr, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "TXN Hash",
      key: "tx_hash",
      render(val) {
        const data = val as GetPledgePageItem;
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(data.tx_hash)}
          >
            {addressDots(data.tx_hash, 3, 3)}
          </span>
        );
      },
    },
    {
      title: "Block Height",
      key: "block_number",
    },
    {
      title: "Stake Time",
      key: "timestamp",
      render(val) {
        const data = val as GetPledgePageItem;
        return formatDate(data.timestamp);
      },
    },
    {
      title: "Value",
      key: "amount",
      render(val) {
        const data = val as GetPledgePageItem;
        return formatEther(data.amount);
      },
    },
  ];
  return (
    <div>
      <Table        columns={columns}
        dataSources={props.list}
        loading={props.loading}
      />
    </div>
  );
}
