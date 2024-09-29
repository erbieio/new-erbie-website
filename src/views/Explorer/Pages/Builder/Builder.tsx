import { useEffect, useMemo, useRef, useState } from "react";

import SearchIpt from "../../components/SearchIpt";
import "./Builder.scss";
import {
  GetStakerOrder,
  GetValidatorOrder,
  get_staker_page,
  get_validator_page,
  GetValidatorResponse,
  GetStakerResponse,
  GetStatsResponse,
  get_stats,
} from "../../../../api/modules/explorer";
import ValidatorTable from "./ValidatorTable";
import StakerTable from "./StakerTable";
import { Skeleton } from "antd";
import { formatEther } from "ethers";
import {
  ERBIE_COIN_FIXED_LENGTH,
  ERBIE_COIN_PRECISION,
} from "../../../../const/coin";
import { toFixed } from "../../../../utils/utils";
import TableHeader from "../../components/TableHeader";

export interface ValidatorMenuItem {
  label: string;
  active: boolean;
  value: number;
}

export default function Validator() {
  const [loading, setLoading] = useState(false);
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
  const params = useRef<{ page: number; page_size: number }>({
    page: 1,
    page_size: 11,
  });
  let validatorOrder: GetValidatorOrder = "";
  let stakerOrder: GetStakerOrder = "";
  const [showTable, setShowTable] = useState(1);
  const [validatorData, setValidatorData] = useState<GetValidatorResponse>({
    data: [],
    total: 0,
  });
  const [stakerData, setStakerData] = useState<GetStakerResponse>({
    data: [],
    total: 0,
  });

  //  get validator list
  const handleGetValidatorList = async () => {
    try {
      setLoading(true);
      const data = await get_validator_page({
        ...params.current,
        order: validatorOrder,
      });
      setValidatorData(data);
    } finally {
      setLoading(false);
    }
  };
  // get staker list
  const handleGetStakerList = async () => {
    try {
      const data = await get_staker_page({
        ...params.current,
        order: stakerOrder,
        name: "",
      });
      setStakerData(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetValidatorList();
    handleGetStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [tableMenus, setTableMenus] = useState<Array<ValidatorMenuItem>>([
    {
      label: "Validator Data",
      value: 1,
      active: true,
    },
    {
      label: "Staker Data",
      value: 2,
      active: false,
    },
  ]);

  const currentFilter = useMemo(() => {
    return tableMenus.find((item) => item.active)?.value;
  }, [tableMenus]);

  const handleFilter = (v: ValidatorMenuItem) => {
    // 重置页码和筛选条件
    params.current.page = 1;
    validatorOrder = "";
    stakerOrder = "";

    const menus = tableMenus.map((item) => item);
    menus.forEach((child) => {
      if (child.value === v.value) {
        child.active = true;
        setShowTable(v.value);
      } else {
        child.active = false;
      }
    });
    setTableMenus(menus);
    if (v.value === 1) {
      // Validator Data
      handleGetValidatorList();
    } else {
      // Staker Data
      handleGetStakerList();
    }
  };

  const handleValidatorSorter = (v: string) => {
    const str = v as GetValidatorOrder;
    validatorOrder = str;
    handleGetValidatorList();
  };

  const handleStakerSorter = (v: string) => {
    const str = v as GetStakerOrder;
    stakerOrder = str;
    handleGetStakerList();
  };

  const handleChangePage = (page: number) => {
    params.current.page = page;
    if (currentFilter === 1) {
      handleGetValidatorList();
    } else {
      handleGetStakerList();
    }
  };

  const totalStakeOfStaker = useMemo(() => {
    if (stats) {
      return toFixed(
        (
          (BigInt(stats.totalPledge) - BigInt(stats.validatorTotalPledge)) /
          BigInt(ERBIE_COIN_PRECISION)
        ).toString(),
        ERBIE_COIN_FIXED_LENGTH
      );
    }
    return 0;
  }, [stats]);
  return (
    <div className="page-validator flex flex-col flex-col-reverse lg:flex-row">
      <div className="flex-1 flex gap-2vh flex-col">
        <div className="flex flex-col lg:flex-row mt-8px lg:mt-0">
          <div className="w-100% lg:w-35% flex gap-10px lg:gap-12px">
            {tableMenus.map((item) => (
              <div
                key={item.value}
                onClick={() => handleFilter(item)}
                className={`flex-1 data-card ${item.active ? "active" : ""}`}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="w-100% lg:w-65% mt-14px lg:mt-0 hidden lg:block">
            <SearchIpt className="lg:ml-12px" />
          </div>
        </div>
        <div className="lg:h-100% flex flex-col">
          <div className="table-box h-100%">
            <TableHeader
              titlePC="VALIDATOR INFORMATION"
              titleH5="VALIDATOR"
              onChange={handleChangePage}
              params={params}
              total={
                currentFilter === 1 ? validatorData.total : stakerData.total
              }
            />
            <div className="flex h-100% lg:h-90% overflow-x-scroll scrollbar-x">
              {showTable === 1 ? (
                <ValidatorTable
                  dataSource={validatorData.data}
                  sorter={handleValidatorSorter}
                  loading={loading}
                />
              ) : (
                <StakerTable
                  dataSource={stakerData.data}
                  sorter={handleStakerSorter}
                  loading={loading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-100% lg:w-250px flex flex-wrap justify-between gap-8px lg:gap-10px ml-0 lg:ml-22px flex-row lg:flex-col mt-14px lg:mt-0">
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Validator Number</div>
            <div className="val">
              <Skeleton
                loading={statloading}
                title={false}
                active
                paragraph={{ rows: 1, width: "100% " }}
              >
                {stats ? stats.totalValidator : "0"}
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Stake of Validator</div>
            <div className="val">
              <Skeleton
                loading={statloading}
                title={false}
                active
                paragraph={{ rows: 1, width: "100% " }}
              >
                {stats ? formatEther(stats.validatorTotalPledge) : 0}
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Staker Number</div>
            <div className="val">
              <Skeleton
                loading={statloading}
                title={false}
                active
                paragraph={{ rows: 1, width: "100% " }}
              >
                {stats ? stats.totalStaker : "--"}
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Stake of Staker</div>
            <div className="val">
              <Skeleton
                loading={statloading}
                title={false}
                active
                paragraph={{ rows: 1, width: "100% " }}
              >
                {totalStakeOfStaker}
              </Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
