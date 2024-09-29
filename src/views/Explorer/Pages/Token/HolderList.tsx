import { Table, type TableColumnsType } from "antd";
import { GetContractHoldersByAddrItem } from "../../../../api/modules/explorer";
import { addressDots } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
import "./TokenList.scss";
import { MutableRefObject } from "react";
import TableHeader from "../../components/TableHeader";
import { PageNationProps } from "../../../../components/PageNation";
import { toFixed } from "../../../../utils/utils";
interface HolderListTableProps {
  dataSource: Array<GetContractHoldersByAddrItem>;
  sorter?: (order: string) => void;
  loading: boolean;
  params: MutableRefObject<{ page: number; page_size: number }>;
  onChange: PageNationProps["change"];
  total: number;
  totalAmount: string
}

export default function HolderList(props: HolderListTableProps) {
  const { toAccountDetail } = useRouter();
  const columns: TableColumnsType<GetContractHoldersByAddrItem> = [
    {
      title: "Holder Address",
      align: "center",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(v.address)}
          >
            {addressDots(v.address, 10, 10)}
          </div>
        );
      },
    },
    {
      title: "Quantity",
      align: "center",
      render(v) {
        return v.quantity;
      },
    },
    {
      title: "Percentage",
      align: "center",
      key: "amount",
      render(v) {
        return toFixed(v.quantity / Number(props.totalAmount),4) + "%";
      },
    },
  ];

  return (
    <div className="w-100%  overflow-x-scroll scrollbar-x">
      <TableHeader
        titlePC="HOLDER LIST"
        titleH5="HOLDERS"
        params={props.params}
        total={props.total}
        onChange={props.onChange}
      />
      <Table
        columns={columns}
        dataSource={props.dataSource}
        pagination={false}
        loading={props.loading}
      ></Table>
    </div>
  );
}
