import { useEffect, useMemo, useRef, useState } from "react";
import './Token.scss'
import SearchIpt from "../../components/SearchIpt";
import TokenList from "./TokenList";
import NftList from "./NftList";
import TableHeader from "../../components/TableHeader";
import { get_contract_page, GetContractParams, GetContractResponse, GetContractType } from "../../../../api/modules/explorer";
export interface TokenMenu {
  label: string
  value: GetContractType
  select: boolean
}

export default function Token() {
  const [list, setList] = useState<TokenMenu[]>([
    {
      label: "Tokens",
      value: "0",
      select: true,
    },
    {
      label: "NFTs",
      value: "1",
      select: false,
    },
  ]);
  const handleClickMenu = (e: TokenMenu) => {
    const arr = list.map(e => e)
    arr.forEach(item => {
      if (item.value === e.value) {
        item.select = true
        params.current.ctype = e.value
      } else {
        item.select = false
      }
    })
    setList(arr)
    params.current.page = 0
    getData()
  }

  const selectMenu = useMemo(() => {
    return list.find(item => item.select)!
  }, [list])
  const [loading,setLoading] = useState(false)
  const params = useRef<GetContractParams>({
    page: 1,
    page_size: 10,
    ctype: "0"
  })
  const [data, setData] = useState<GetContractResponse>();

  const getData = async () => {
    try {
      setLoading(true);
    const data = await get_contract_page(params.current)
    setData(data);
    } finally {
      setLoading(false)
    }
  }

  const handlePageChange = (page: number) => {
    params.current.page = page
    getData();
  }

  useEffect(() => {
    getData();
  },[])
  return (
    <div className="page-token flex flex-col-reverse flex-col lg:flex-row lg:h-73vh gap-10px lg:gap-20px">
      <div className="flex w-100% lg:w-75% flex-col gap-8px lg:gap-20px">
        <div className="flex gap-10px lg:gap-16px h-48px">
          <div className="tab-list flex gap-10px lg:gap-16px w-100% lg:w-30%">
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
          <div className=" hidden lg:block flex-1">
            <SearchIpt className="flex-1" />
          </div>
        </div>
        <div className="list-con">
          <TableHeader
            title={
              selectMenu.value === "0"
                ? "TOKENS INFORMATION"
                : "NFTs INFORMATION"
            }
            params={params}
            total={data?.total || 0}
            onChange={handlePageChange}
          />
          {selectMenu.value === "0" && (
            <TokenList dataSource={data?.contracts || []} loading={loading} />
          )}
          {selectMenu.value === "1" && (
            <NftList dataSource={data?.contracts || []} loading={loading} />
          )}
        </div>
      </div>
      <div className="flex w-100% lg:w-25% flex-row justify-between flex-wrap lg:flex-col gap-10px lg:gap-14px mt-14px lg:mt-0">
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Token Number</div>
            <div className="val">1222222</div>
          </div>
        </div>
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">NFT Number</div>
            <div className="val">1222222</div>
          </div>
        </div>
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Contracts</div>
            <div className="val">1222222</div>
          </div>
        </div>
        <div className="data-panel">
          <div className="w-100% px-10px lg:px-20px">
            <div className="tit">Contracts Calls</div>
            <div className="val">1222222</div>
          </div>
        </div>
      </div>
    </div>
  );
}
