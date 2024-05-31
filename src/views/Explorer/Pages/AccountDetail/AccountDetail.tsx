import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./AccountDetail.scss";
import TXNCard from "./TXNCard";
import StakeCard from "./StakeCard";
import StakedCard from "./StakedCard";
import CSBTCard from "./CSBTCard";
import { Pagination } from "antd";
import {
  GetAccountDetailResponse,
  GetPledgePageItem,
  GetSnftMetaItem,
  GetTransitionPageListItem,
  get_account_detail,
  get_pledge_page,
  get_snft_meta_page,
  get_transaction_page,
} from "../../../../api/modules/explorer";
import TXNTable from "./TXNTable";
import StakeTable from "./StakeTable";
import CSBTTable from "./CSBTTable";
export interface AcccountDetailMenusItem {
  label: string;
  checked: boolean;
  value: number;
}
export default function AccountDetail() {
  const params = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [accountDetail, setAccountDetail] = useState<GetAccountDetailResponse>()
  const [list, setList] = useState<Array<AcccountDetailMenusItem>>([
    {
      label: "TXN",
      checked: true,
      value: 1,
    },
    {
      label: "Stake",
      checked: false,
      value: 2,
    },
    {
      label: "Staked",
      checked: false,
      value: 3,
    },
    {
      label: "CSBT",
      checked: false,
      value: 4,
    },
  ]);

  const [tableList, setTableList] = useState<Array<GetTransitionPageListItem>>(
    []
  );
  const [stakeList, setStakeList] = useState<Array<GetPledgePageItem>>([]);

  const [csbtList, setCsbtList] = useState<Array<GetSnftMetaItem>>([]);
  const [loadingAccount , setLoadingAccount] = useState(false)
  const handleGetAccount = async(addr: string) => {
    try {
      setLoadingAccount(true)
      const data = await get_account_detail(addr)
      setAccountDetail(data)
    } finally {
      setLoadingAccount(false)
    }
  }
  const pageParams = useRef({
    page: 1,
    page_size: 10,
    // addr: "",
    // types: "",
  });
  const handleGetTXTableList = async () => {
    try {
      setLoading(true);
      const data = await get_transaction_page({
        ...pageParams.current,
        addr: params.address,
      });
      setTableList(data.transactions);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  };

  const handleGetStakeList = async () => {
    try {
      setLoading(true);
      if (currentMenu === 2 || currentMenu === 3) {
        const p = {
          ...pageParams.current,
          staker: currentMenu === 2 ? params.address : "",
          validator: currentMenu === 3 ? params.address : "",
        };
        const stakeData = await get_pledge_page(p);
        setStakeList(stakeData.data);
        setTotal(stakeData.total);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGetCSBTList = async () => {
    try {
      setLoading(true);
      const data = await get_snft_meta_page({
        ...pageParams.current,
        owner: params.address,
      });
      setCsbtList(data.nfts);
      setTotal(data.total);
    } finally {
      setLoading(false);
    }
  };

  const currentMenu = useMemo(() => {
    pageParams.current.page = 1;
    return list.find((item) => item.checked)?.value;
  }, [list]);

  const handleMenuClick = (e: AcccountDetailMenusItem) => {
    const newList = list.map((item) => item);
    newList.forEach((item) => {
      if (item.value === e.value) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });
    setList(newList);
  };
  useEffect(() => {
    if (params.address) {
      if (currentMenu === 1) {
        handleGetTXTableList();
      }
      if (currentMenu === 2 || currentMenu === 3) {
        handleGetStakeList();
      }
      if (currentMenu === 4) {
        handleGetCSBTList();
      }

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, params.address, currentMenu]);
  const handleChangePage = (page: number) => {
    pageParams.current.page = page;
    if (currentMenu === 1) {
      handleGetTXTableList();
    }
    if (currentMenu === 2 || currentMenu === 3) {
      handleGetStakeList();
    }
    if (currentMenu === 4) {
      handleGetCSBTList();
    }
  };
  useEffect(() => {
    if (params.address) {
      handleGetAccount(params.address)
    }
  },[params.address])

  return (
    <div className="account-detail flex h-100% h-72vh">
      <div className="w-330px">
        {currentMenu === 1 ? <TXNCard loading={loadingAccount} data={accountDetail} /> : <></>}
        {currentMenu === 2 ? <StakeCard /> : <></>}
        {currentMenu === 3 ? <StakedCard /> : <></>}
        {currentMenu === 4 ? <CSBTCard /> : <></>}
      </div>
      <div className="w-70% ml-24px flex flex-col gap-2vh">
        <div className="flex font-size-14px gap-1vh justify-between">
          {list.map((item, i) => (
            <div
              key={i}
              onClick={() => handleMenuClick(item)}
              className={`w-24% bg-#2A223E lh-4vh cursor-pointer menu-card ${
                item.checked ? "active" : ""
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="table-box h-100%">
          <div className="text-left px-10px py-8px lh-4vh flex items-center justify-between w-100%">
            <div className="font-size-16px">TRANSACTIONS LIST</div>
            <div>
              <Pagination
                current={pageParams.current.page}
                pageSize={pageParams.current.page_size}
                total={total}
                onChange={handleChangePage}
              />
            </div>
          </div>
          <div className=" overflow-x-scroll scrollbar-x h-60vh">
            {currentMenu === 1 ? (
              <TXNTable list={tableList} loading={loading} />
            ) : (
              <></>
            )}
            {currentMenu === 2 || currentMenu === 3 ? (
              <StakeTable
                list={stakeList}
                loading={loading}
                type={currentMenu}
              />
            ) : (
              <></>
            )}
            {currentMenu === 4 ? (
              <CSBTTable list={csbtList} loading={loading} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}