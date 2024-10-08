import { Table, type TableColumnsType, TableProps } from "antd";
import { GetStakerListItem } from "../../../../api/modules/explorer";
import { formatEther } from "ethers";
import { addressDots } from "../../../../utils/common";
import { SorterResult } from "../../../../api/api";
import useRouter from "../../../../hooks/useRouter";
import { toFixed } from "../../../../utils/utils";
import moment from "moment";
interface StakerTableProps {
  dataSource: Array<GetStakerListItem>;
  sorter: (order: string) => void;
  loading: boolean;
}

export default function StakerTable(props: StakerTableProps) {
  const { toAccountDetail } = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onChange: TableProps<GetStakerListItem>["onChange"] = (
    _pagination,
    _filters,
    sorter: SorterResult<GetStakerListItem>
  ) => {
    if (sorter.order) {
      if (sorter.order === "ascend") {
        props.sorter(`${sorter.columnKey} ASC`);
      } else if (sorter.order === "descend") {
        props.sorter(`${sorter.columnKey} DESC`);
      }
    } else {
      props.sorter("");
    }
  };
  const columns: TableColumnsType<GetStakerListItem> = [
    {
      title: "Staker Address",
      align: "center",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(v.address)}
          >
            {addressDots(v.address, 6, 6)}
          </div>
        );
      },
    },
    {
      title: "Block Height",
      align: "center",
      render(v) {
        return <div className="link hover:color-#1677ff">{v.block_number}</div>;
      },
    },
    {
      title: "Stake Value",
      align: "center",
      key: "amount",
      sorter: {
        multiple: undefined,
      },
      render(v) {
        return toFixed(formatEther(v.amount));
      },
    },
    // {
    //   title: "SNFT Value",
    //   align: "center",
    //   render(v) {
    //     return formatEther(v.reward);
    //   },
    // },
    {
      title: "Stake Time",
      align: "center",
      render(v) {
        return (
          <div className="whitespace-nowrap">
            {moment(v.timestamp * 1000).format("YYYY/MM/DD HH:mm:ss")}
          </div>
        );
      },
    },
  ];
  return (
    <div className="w-100% staker-table h-100%  overflow-x-scroll scrollbar-x">
      <Table
        columns={columns}
        dataSource={props.dataSource}
        pagination={false}
        onChange={onChange}
        loading={props.loading}
      ></Table>
    </div>
  );
}
