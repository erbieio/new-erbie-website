import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./AccountDetail.scss";
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
import AccountDetailCard from "./AccountDetailCard";
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
  const [accountDetail, setAccountDetail] =
    useState<GetAccountDetailResponse>();
  const [list, setList] = useState<Array<AcccountDetailMenusItem>>([
    {
      label: "TXN",
      checked: true,
      value: 1,
    },
    {
      label: "Staked",
      checked: false,
      value: 2,
    },
    {
      label: "CSBT",
      checked: false,
      value: 3,
    },
  ]);

  const [tableList, setTableList] = useState<Array<GetTransitionPageListItem>>(
    []
  );
  const [stakeList, setStakeList] = useState<Array<GetPledgePageItem>>([]);

  const [csbtList, setCsbtList] = useState<Array<GetSnftMetaItem>>([]);
  const [loadingAccount, setLoadingAccount] = useState(false);
  const handleGetAccount = async (addr: string) => {
    try {
      setLoadingAccount(true);
      const data = await get_account_detail(addr);
      setAccountDetail(data);
    } finally {
      setTimeout(() => {
        setLoadingAccount(false);
      }, 100);
    }
  };
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
      if (currentMenu === 2) {
        const p = {
          ...pageParams.current,
          staker: currentMenu === 2 ? params.address : "",
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
      if (currentMenu === 2) {
        handleGetStakeList();
      }
      if (currentMenu === 3) {
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
    if (currentMenu === 2) {
      handleGetStakeList();
    }
    if (currentMenu === 3) {
      handleGetCSBTList();
    }
  };
  useEffect(() => {
    if (params.address) {
      handleGetAccount(params.address);
    }
  }, [params.address]);

  return (
    <div className="account-detail flex h-100% flex-col lg:flex-row lg:h-72vh">
      <div className="w-100% lg:w-330px">
        <AccountDetailCard loading={loadingAccount} data={accountDetail} />
      </div>
      <div className="lg:w-70% lg:ml-24px flex flex-col gap-2vh mt-20px lg:mt-0">
        <div className="flex font-size-14px gap-1vh justify-between">
          {list.map((item, i) => (
            <div
              key={i}
              onClick={() => handleMenuClick(item)}
              className={`w-32% bg-#2A223E lh-4vh cursor-pointer menu-card ${
                item.checked ? "active" : ""
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="table-box h-100%">
          <div className="text-left px-10px py-8px lh-4vh flex flex-col lg:flex-row items-center justify-between w-100%">
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
          <div className=" overflow-x-scroll scrollbar-x lg:h-60vh">
            {currentMenu === 1 ? (
              <TXNTable list={tableList} loading={loading} />
            ) : (
              <></>
            )}
            {currentMenu === 2 ? (
              <StakeTable
                list={stakeList}
                loading={loading}
                type={currentMenu}
              />
            ) : (
              <></>
            )}
            {currentMenu === 3 ? (
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
