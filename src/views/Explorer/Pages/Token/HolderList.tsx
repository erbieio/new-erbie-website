import { Table, type TableColumnsType } from "antd";
import { GetContractHoldersByAddrItem } from "../../../../api/modules/explorer";
import { addressDots } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
import "./TokenList.scss";
import { MutableRefObject } from "react";
import TableHeader from "../../components/TableHeader";
import { PageNationProps } from "../../../../components/PageNation";
import { toFixed } from '../../../../utils/utils';
import { formatEther } from "ethers";

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
  const tokenType = localStorage.getItem("tokenType");
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
            {addressDots(v.address, 12, 12)}
          </div>
        );
      },
    },
    {
      title: "Quantity",
      align: "center",
      render(v) {
        console.log(toFixed(formatEther(BigInt(v.quantity).toString()),4));
        return tokenType === "ERC20"
          ? toFixed(formatEther(BigInt(v.quantity).toString()),4)
          : v.quantity;
      },
    },
    {
      title: "Percentage",
      align: "center",
      key: "amount",
      render(v) {
        return (
          toFixed(
            (Number(v.quantity) / Number(props.totalAmount))
              .toFixed(6)
              .toString(),
            6
          ) + "%"
        );
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
