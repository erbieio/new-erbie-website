import { Table, type TableProps, type TableColumnsType } from "antd";
import { GetValidatorListItem } from "../../../../api/modules/explorer";
import { formatEther } from "ethers";
import { addressDots } from "../../../../utils/common";
import smile from "../../../../assets/builder/smile.svg";
import neutral from "../../../../assets/builder/neutral.svg";
import sad from "../../../../assets/builder/sad.svg";
import moment from "moment";
import { SorterResult } from "../../../../api/api";
import useRouter from "../../../../hooks/useRouter";
import { toFixed } from "../../../../utils/utils";
interface ValidatorTableProps {
  dataSource: Array<GetValidatorListItem>;
  sorter: (order: string) => void;
  loading: boolean;
}

export default function ValidatorTable(props: ValidatorTableProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onChange: TableProps<GetValidatorListItem>["onChange"] = (
    _pagination,
    _filters,
    sorter: SorterResult<GetValidatorListItem>
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

  const getIconPath = (v: number) => {
    if (v < 40) return sad;
    if (v >= 40 && v <= 50) return neutral;
    if (v > 50) return smile;
  };
  const { toAccountDetail, toBlockDetail } = useRouter();
  const columns: TableColumnsType<GetValidatorListItem> = [
    {
      title: "Validator",
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
      title: <div className="whitespace-nowrap">Total Staking</div>,
      align: "center",
      key: "amount",
      sorter: {
        multiple: undefined,
      },
      render(v) {
        return toFixed(formatEther(v.amount));
      },
    },
    {
      title: <div className="whitespace-nowrap">Total Rewards (ERB)</div>,
      align: "center",
      key: "reward",
      sorter: {
        multiple: undefined,
      },
      render(v) {
        return toFixed(formatEther(v.reward));
      },
    },
    {
      title: "Time",
      align: "center",
      key: "timestamp",
      sorter: {
        multiple: undefined,
      },
      render(v) {
        return (
          <div className="whitespace-nowrap">
            {moment(v.timestamp * 1000).format("YYYY/MM/DD HH:mm:ss")}
          </div>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">Latest Active</div>,
      align: "center",
      key: "block_number",
      sorter: {
        multiple: undefined,
      },
      render(v) {
        return (
          <div
            className="link hover:color-#1677ff"
            onClick={() => toBlockDetail(v.block_number)}
          >
            {v.block_number}
          </div>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">Online Weight</div>,
      key: "weight",
      sorter: {
        multiple: undefined,
      },
      align: "center",
      render(v) {
        const path = getIconPath(v.weight);
        return (
          <div className="flex items-center justify-center">
            {v.weight}{" "}
            <img src={path} className="w-14px lg:w-1vw ml-8px" alt="" />
          </div>
        );
      },
    },
    {
      title: <div className="whitespace-nowrap">Reputation Score</div>,
      dataIndex: "score",
      key: "score",
      sorter: {
        multiple: undefined,
      },
      align: "center",
    },
  ];
  return (
    <div className="w-100% validator-table  h-100% overflow-x-scroll scrollbar-x">
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
