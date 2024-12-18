import { Table, type TableColumnsType, TableProps } from "antd";
import { GetContractItem } from "../../../../api/modules/explorer";
import { addressDots } from "../../../../utils/common";
import { SorterResult } from "../../../../api/api";
import useRouter from "../../../../hooks/useRouter";
import "./TokenList.scss";

interface StakerTableProps {
  dataSource: Array<GetContractItem>;
  sorter?: (order: string) => void;
  loading?: boolean;
}

export default function TokenList(props: StakerTableProps) {
  const { toTokenDetail } = useRouter();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onChange: TableProps<GetContractItem>["onChange"] = (
    _pagination,
    _filters,
    sorter: SorterResult<GetContractItem>
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
  const columns: TableColumnsType<GetContractItem> = [
    {
      title: "Token Name",
      align: "center",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => {
              localStorage.setItem("tokenType", v.contract_type);
              toTokenDetail(v.contract_address);
            }}
          >
            <div>

              {v.token_name || "-"}
            </div>
          </div>
        );
      },
    },
    {
      title: "type",
      align: "center",
      render(v) {
        return <div className="">{v.contract_type}</div>;
      },
    },
    {
      title: "Contract",
      align: "center",
      key: "amount",
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => {
              localStorage.setItem("tokenType", v.contract_type);
              toTokenDetail(v.contract_address + `?index=2`);
            }}
          >
            {addressDots(v.contract_address, 10, 10)}
          </div>
        );
      },
    },
    {
      title: "Items",
      align: "center",
      render(v) {
        return <div className="whitespace-nowrap">{v.total_supply || "-"}</div>;
      },
    },
    {
      title: "Holder",
      align: "center",
      render(v) {
        return <div className="whitespace-nowrap">{v.holders}</div>;
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
