import { Table, type TableColumnsType, TableProps } from "antd";
import { GetStakerListItem } from "../../../../api/modules/explorer";
import { formatEther } from "ethers";
import { addressDots } from "../../../../utils/common";
import { SorterResult } from "../../../../api/api";
import useRouter from "../../../../hooks/useRouter";
import { toFixed } from "../../../../utils/utils";
import "./TokenList.scss";
import moment from "moment";
interface StakerTableProps {
  dataSource: Array<GetStakerListItem>;
  sorter?: (order: string) => void;
  loading?: boolean;
}

export default function TokenList(props: StakerTableProps) {
  const { toAccountDetail } = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onChange: TableProps<GetStakerListItem>["onChange"] = (
    _pagination,
    _filters,
    sorter: SorterResult<GetStakerListItem>
  ) => {
    if (sorter && sorter.order) {
      if (sorter.order === "ascend") {
        props.sorter && props.sorter(`${sorter.columnKey} ASC`);
      } else if (sorter.order === "descend") {
        props.sorter && props.sorter(`${sorter.columnKey} DESC`);
      }
    } else {
      props.sorter && props.sorter("");
    }
  };
  const columns: TableColumnsType<GetStakerListItem> = [
    {
      title: "Token Name",
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
      title: "type",
      align: "center",
      render(v) {
        return <div className="link hover:color-#1677ff">{v.block_number}</div>;
      },
    },
    {
      title: "Contract",
      align: "center",
      key: "amount",
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
      title: "Items",
      align: "center",
      render(v) {
        return (
          <div className="whitespace-nowrap">
            {moment(v.timestamp * 1000).format("YYYY/MM/DD HH:mm:ss")}
          </div>
        );
      },
    },
    {
      title: "Holder",
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
    <div className="w-100% token-list overflow-x-scroll scrollbar-x">
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
