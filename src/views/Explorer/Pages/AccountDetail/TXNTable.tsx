import Table, { TableColumn } from '../../../../components/Table';
import { GetTransitionPageListItem } from '../../../../api/modules/explorer';
import { addressDots, formatDate } from '../../../../utils/common';
import { useNavigate } from 'react-router-dom';
import { formatEther } from 'ethers';
import { txInputToType } from '../../../../utils/utils';

export interface TXTTableProps {
    list: Array<GetTransitionPageListItem>
    loading: boolean
}
export default function TXNTable(props: TXTTableProps) {
    const navigator = useNavigate()
    const toAccountDetail = (address: string) => {
        navigator(`/explorer/accountDetail/${address}`);
      };
    const columns: Array<TableColumn> = [
        {
          title: "TXN Hash",
          key: "hash",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return (
              <span className="link hover:color-blue" >
                {addressDots(data.hash, 6, 6)}
              </span>
            );
          },
        },
        {
          title: "TXN Time",
          key: "timestamp",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return formatDate(data.timestamp);
          },
        },
        {
          title: "Sender",
          key: "from",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return (
              <span
                className="link hover:color-blue"
                onClick={() => toAccountDetail(data.from)}
              >
                {addressDots(data.from, 6, 6)}
              </span>
            );
          },
        },
        {
          title: "Receiver",
          key: "to",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return (
              <span
                className="link hover:color-blue"
                onClick={() => toAccountDetail(data.to)}
              >
                {addressDots(data.to, 6, 6)}
              </span>
            );
          },
        },
        {
          title: "Transaction Value",
          key: "value",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return formatEther(data.value);
          },
        },
        {
          title: "TXN Type",
          key: "input",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return (
              <div
                className="max-w-80px text-ellipsis overflow-hidden"
                title={txInputToType(data.input)}
              >
                {txInputToType(data.input)}
              </div>
            );
          },
        },
        {
          title: "Status",
          key: "status",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return (
              <div
                className={`px-4px rounded-4px ${
                  data.status === 1
                    ? "color-#9effcc bg-#3B4C43"
                    : "color-#FE4FA7 bg-#4C293A"
                } ${"rgba(168, 255, 210, .2)"}`}
              >
                {data.status === 1 ? "Success" : "Defeat"}
              </div>
            );
          },
        },
        {
          title: "TXN Fee",
          key: "gasPrice",
          render(v) {
            const data = v as GetTransitionPageListItem;
            return formatEther(data.gasPrice * data.gasUsed).slice(0,10);
          },
        },
      ];
  return (
    <div>
        <Table dataSources={props.list} loading={props.loading}  columns={columns}/>
    </div>
  )
}
