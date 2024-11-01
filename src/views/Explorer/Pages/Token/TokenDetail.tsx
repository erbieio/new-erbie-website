import { useEffect, useMemo, useRef, useState } from "react";
import DetailCard from "./DetailCard";
import "./TokenDetail.scss";
// import SourceCode from "./SocureCode";
import HolderList from "./HolderList";
import { useParams, useSearchParams } from "react-router-dom";
import {
  get_contract_holders_page,
  get_contract_source_code,
  GetContractHoldersByAddrResponse,
  GetContractListByAddrParams,
  GetContractTxsByAddrResponse,
} from "../../../../api/modules/explorer";
import {
  get_contract_detail,
  get_contract_tx_page,
  GetContractItem,
} from "../../../../api/modules/explorer";
import TxList from "../Transct/TxList";
// import ComingSoon from "../../../../components/ComingSoon";
// import VerifyPublishCode from "./VerifyPublishCode";
import SourceCode from "./SocureCode";
export interface MenuItem {
  label: string;
  value: number;
  select: boolean;
}
const TokenDetail = () => {
  const params = useParams<{ tokenAddress: string }>();
  const [search] = useSearchParams();
  const [token, setToken] = useState<GetContractItem>();
  const [list, setList] = useState<MenuItem[]>([
    {
      label: "TXN",
      value: 0,
      select: true,
    },
    {
      label: "Holders",
      value: 1,
      select: false,
    },
    {
      label: "Contracts",
      value: 2,
      select: false,
    },
  ]);
  const index = search.get("index");

  const selectMenu = useMemo(() => {
    return list.find((item) => item.select)!;
  }, [list]);
  const handleClickMenu = (e: MenuItem) => {
    const arr = list.map((e) => e);
    arr.forEach((item) => {
      if (item.value === e.value) {
        item.select = true;
        searchParams.current.page = 1;
      } else {
        item.select = false;
      }
    });
    setList(arr);
    if (e.value === 0) {
      handleGeTxs();
    }
    if (e.value === 1) {
      handleGetHolders();
    }
  };
  const searchParams = useRef<GetContractListByAddrParams>({
    page: 1,
    page_size: 10,
    addr: "",
  });
  const [txs, setTxs] = useState<GetContractTxsByAddrResponse>();
  const [loading, setLoading] = useState(false);
  const handleGeTxs = async () => {
    try {
      setLoading(true);
      const data = await get_contract_tx_page(searchParams.current);
      setTxs(data);
    } finally {
      setLoading(false);
    }
  };
  const [holders, setHolders] = useState<GetContractHoldersByAddrResponse>();
  const handleGetHolders = async () => {
    try {
      setLoading(true);
      const data = await get_contract_holders_page(searchParams.current);
      setHolders(data);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (page: number) => {
    searchParams.current.page = page;
    const e = list.find((item) => item.select);
    if (e?.value === 0) {
      handleGeTxs();
    }
    if (e?.value === 1) {
      handleGetHolders();
    }
  };
  const [code, setCode] = useState('')
  useEffect(() => {
    if (params.tokenAddress) {
      searchParams.current.addr = params.tokenAddress;
      get_contract_detail(params.tokenAddress).then((res) => setToken(res));
      get_contract_source_code(params.tokenAddress).then(res => setCode(res))
    }
  }, [params.tokenAddress]);
  useEffect(() => {
    handleGeTxs();
    if (index) {
      list.forEach((item) => {
        if (Number(index) === item.value) {
          handleClickMenu(item);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="token-detail flex flex-col lg:flex-row lg:h-73vh gap-20px">
      <div className="w-100% lg:w-285px mt-16px lg:mt-0">
        <DetailCard data={token} />
      </div>
      <div className="flex flex-col flex-1 gap-16px">
        <div className="tab-list flex gap-14px">
          {list.map((item) => (
            <div
              className={`menu-btn ${item.select && "active"}`}
              key={item.value}
              onClick={() => handleClickMenu(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="token-list">
          {selectMenu.value === 0 && (
            <TxList
              titlePC="TRANSACTIONS LIST"
              titleH5="TRANSACTIONS"
              loading={loading}
              dataSource={txs?.contract_txs || []}
              total={txs?.total || 0}
              onChange={handleChange}
              params={searchParams}
              symbol={token?.symbol}
            />
          )}
          {selectMenu.value === 1 && (
            <HolderList
              loading={loading}
              dataSource={holders?.holders || []}
              total={holders?.total || 0}
              onChange={handleChange}
              params={searchParams}
              totalAmount={holders?.total_amount || "0"}
            />
          )}
          {/* {selectMenu.value === 2 && <SourceCode />} */}
          {selectMenu.value === 2 && (
            <div className="flex h-100% items-center justify-center">
              {/* <VerifyPublishCode /> */}
              <SourceCode code={code} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenDetail;
