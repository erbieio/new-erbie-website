import { Table, type TableColumnsType, TableProps } from "antd";
import { GetStakerListItem } from "../../../../api/modules/explorer";
import { formatEther } from "ethers";
import { addressDots } from "../../../../utils/common";
import { SorterResult } from "../../../../api/api";
import useRouter from "../../../../hooks/useRouter";
import { toFixed } from "../../../../utils/utils";
import "./TokenList.scss";
import { useRef } from "react";
import TableHeader from "../../components/TableHeader";
interface HolderListTableProps {
  dataSource: Array<GetStakerListItem>;
  sorter: (order: string) => void;
  loading: boolean;
}

export default function HolderList(props: HolderListTableProps) {
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
      title: "Holder Address",
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
      title: "Quantity",
      align: "center",
      render(v) {
        return <div className="link hover:color-#1677ff">{v.block_number}</div>;
      },
    },
    {
      title: "Percentage",
      align: "center",
      key: "amount",
      render(v) {
        return toFixed(formatEther(v.amount));
      },
    },
  ];
  const params = useRef<{ page: number; page_size: number }>({
    page: 1,
    page_size: 11,
  });
  const handleChangePage = () => {};
  return (
    <div className="w-100% token-list overflow-x-scroll scrollbar-x">
      <TableHeader
        title="HOLDER LIST"
        params={params}
        total={0}
        onChange={handleChangePage}
      />
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
