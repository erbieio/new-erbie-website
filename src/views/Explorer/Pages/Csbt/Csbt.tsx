import { useEffect, useRef, useState } from "react";
import Table, { TableColumn } from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import "./Csbt.scss";
import {
  GetSnftMetaItem,
  GetSnftMetaResponse,
  GetStatsResponse,
  get_snft_meta_page,
  get_stats,
} from "../../../../api/modules/explorer";
import { Pagination, Skeleton } from "antd";
import { addressDots } from "../../../../utils/common";
import moment from "moment";
import useRouter from "../../../../hooks/useRouter";
export default function Csbt() {
  const handleSearch = () => {};
  const { toAccountDetail } = useRouter();
  const columns: Array<TableColumn> = [
    {
      title: "Address",
      key: "address",
      render(v) {
        const data = v as GetSnftMetaItem;
        return (
          <span
            className="link hover:color-#1677ff"
            onClick={() => toAccountDetail(data.address)}
          >
            {addressDots(data.address, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "Number",
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
        return moment(data.reward_at * 1000).format("YYYY/MM/DD HH:mm:ss");
      },
    },
    {
      title: "Owner",
      key: "owner",
      render(v) {
        const data = v as GetSnftMetaItem;
        return (
          <span
            className="link hover:color-blue"
            onClick={() => toAccountDetail(data.owner)}
          >
            {addressDots(data.owner, 6, 6)}
          </span>
        );
      },
    },
    {
      title: "Owner Get Time",
      key: "reward_at",
      render(v) {
        const data = v as GetSnftMetaItem;
        return moment(data.reward_at * 1000).format("YYYY/MM/DD HH:mm:ss");
      },
    },
  ];
  const [stats, setStats] = useState<GetStatsResponse>();

  // get total stats
  const [statloading, setStatLoading] = useState(false);
  const handleGetStats = async () => {
    try {
      setStatLoading(true);
      const data = await get_stats();
      setStats(data);
    } finally {
      setStatLoading(false);
    }
  };
  const [loading, setLoading] = useState(false);

  const params = useRef<{
    page: number;
    page_size: number;
  }>({
    page: 1,
    page_size: 11,
  });

  const [csbtData, setCsbtData] = useState<GetSnftMetaResponse>();
  const handleGetList = async () => {
    try {
      setLoading(true);
      const data = await get_snft_meta_page({
        ...params.current,
        collection_id: "",
        owner: "",
      });
      setCsbtData(data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetList();
    handleGetStats();
  }, []);

  const handleChangePage = (page: number) => {
    params.current.page = page;
    handleGetList();
  };
  return (
    <div className="page-csbt">
      <div className="flex flex-col flex-col-reverse lg:flex-row">
        <div className="flex-1">
          <div>
            <SearchIpt onSearch={handleSearch} />
          </div>
          <div className="table-box lg:h-65vh mt-2vh">
            <div className="px-10px pt-10px pb-14px">
              <div className="flex lg:justify-between flex-col lg:flex-row">
                <div>CHAINLAYER SBT</div>
                <Pagination
                  onChange={handleChangePage}
                  total={csbtData?.total || 0}
                  pageSize={params.current.page_size}
                  current={params.current.page}
                ></Pagination>
              </div>
            </div>
            <div className="h-90% flex overflow-x-scroll scrollbar-x">
              <Table
                columns={columns}
                dataSources={csbtData?.nfts || []}
                loading={loading}
              />
            </div>
          </div>
        </div>
        <div className="w-100% lg:w-250px lg:ml-22px flex flex-row justify-between lg:flex-col gap-10px mb-14px mt-14px lg:mt-0 lg:mb-0 lg:gap-2vh">
          <div className="data-panel">
            <div className="w-100% px-10px lg:px-20px">
              <div className="tit">Mined CSBT Number</div>
              <div className="val">
                <Skeleton
                  loading={statloading}
                  title={false}
                  active
                  paragraph={{ rows: 1, width: "100% " }}
                >
                  {stats ? stats.totalSNFT : 0}
                </Skeleton>
              </div>
            </div>
          </div>
          <div className="data-panel">
            <div className="w-100% px-10px lg:px-20px">
              <div className="tit">Minted Personal CSBT</div>
              <div className="val">--</div>
            </div>
          </div>
          <div className="data-panel">
            <div className="w-100% px-10px lg:px-20px">
              <div className="tit">Minted Group CSBT</div>
              <div className="val">--</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
