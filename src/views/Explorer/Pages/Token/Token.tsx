import { useMemo, useRef, useState } from "react";
import './Token.scss'
import SearchIpt from "../../components/SearchIpt";
import TokenList from "./TokenList";
import NftList from "./NftList";
import TableHeader from "../../components/TableHeader";
export interface TokenMenu {
  label: string
  value: number
  select: boolean
}

export default function Token() {
  const [list, setList] = useState<TokenMenu[]>([
    {
      label: "Tokens",
      value: 0,
      select: true,
    },
    {
      label: "NFTs",
      value: 1,
      select: false,
    },
  ]);
  const handleClickMenu = (e: TokenMenu) => {
    const arr = list.map(e => e)
    arr.forEach(item => {
      if (item.value === e.value) {
        item.select = true
      } else {
        item.select = false
      }
    })
    setList(arr)
  }

  const selectMenu = useMemo(() => {
    return list.find(item => item.select)!
  }, [list])
  const params = useRef({
    page: 1,
    page_size:10
  })
  const [tokenList] = useState([]);
  const [nftList] = useState([]);
  const handlePageChange = (page: number) => {
    params.current.page = page
  }
  return (
    <div className="page-token flex flex-col-reverse flex-col lg:flex-row lg:h-72vh gap-20px">
      <div className="flex w-100% lg:w-75% flex-col gap-20px">
        <div className="flex gap-16px h-48px">
          <div className="tab-list flex gap-16px w-100% lg:w-30%">
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
              selectMenu.value === 1
                ? "TOKENS INFORMATION"
                : "NFTs INFORMATION"
            }
            params={params}
            total={0}
            onChange={handlePageChange}
          />
          {selectMenu.value === 0 && <TokenList dataSource={tokenList} />}
          {selectMenu.value === 1 && <NftList dataSource={nftList} />}
        </div>
      </div>
      <div className="flex w-100% lg:w-25% flex-row justify-between flex-wrap lg:flex-col gap-14px mt-14px lg:mt-0">
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
