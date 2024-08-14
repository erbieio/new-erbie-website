import {
  AddressBlockReward,
  BlockReward,
  SnftBlockReward,
} from "../../../../api/modules/explorer";
import { formatEther } from "ethers";
import { addressDots } from "../../../../utils/common";
import lv1 from "../../../../assets/fold-lv1.svg";
import lv2 from "../../../../assets/fold-lv2.svg";
import lv3 from "../../../../assets/fold-lv3.svg";

import "./TableFold.scss";
import { ERBIE_COIN } from "../../../../const/coin";
// import { Popover } from "antd";
import NoData from "../../../../components/NoData";
import useRouter from "../../../../hooks/useRouter";
import { toFixed } from "../../../../utils/utils";
export interface TableFoldProps {
  loading: boolean;
  data: Array<BlockReward>;
}

function Fold(data: Array<BlockReward>) {
  const one = data.find((item) => item.identity === 1) as AddressBlockReward;
  const list = data.filter(
    (item) => item.identity === 2
  ) as Array<AddressBlockReward>;
  const list2 = data.filter(
    (item) => item.identity === 3
  ) as Array<SnftBlockReward>;
  const { toAccountDetail, toBlockDetail } = useRouter();
  return (
    <div className="fold-component font-size-12px">
      {one && list ? (
        <div className="flex w-100% items-start">
          <div className="w-25% lh-40px h-40px">
            <div className="fold-component-card flex h-40px">
              <img src={lv1} alt="" className="w-14px mr-5px" />
              <div>
                <span
                  className="link hover:color-#1677ff"
                  onClick={() => toAccountDetail(one.address)}
                >
                  {one ? addressDots(one.address, 3, 4) : ""}
                </span>
              </div>
              <div className="color-#a1a1a1 ml-8px">
                {one ? toFixed(formatEther(one.amount)) : ""} {ERBIE_COIN}
              </div>
            </div>
            <div className="fold-component-card h-40px"></div>
          </div>
          <div className="w-75% flex flex-wrap">
            {list && list.length ? (
              list.map((item) => (
                <div
                  key={item.address}
                  onClick={() => toAccountDetail(item.address)}
                  className="w-33.3333% h-40px flex fold-component-card whitespace-normal"
                >
                  <img src={lv2} alt="" className="w-14px mr-5px" />
                  <div>
                    <span className="link hover:color-#1677ff">
                      {addressDots(item.address, 3, 4)}
                    </span>
                  </div>
                  <div className="color-#a1a1a1 ml-8px whitespace-normal w-80px">
                    {toFixed(formatEther(item.amount || "0"))} {ERBIE_COIN}
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="flex">
        {list2 && list2.length ? (
          list2.map((item) => (
            <div
              key={item.address}
              onClick={(e) => {
                e.stopPropagation()
                toAccountDetail(item.address);
              }}
              className="w-25% lh-30px fold-component-card py-5px"
            >
              <div className="flex h-24px">
                <img src={lv3} alt="" className="w-12px mr-7px" />
                <div>
                  <span className="link hover:color-#1677ff">
                    {addressDots(item.address, 3, 4)}
                  </span>
                </div>
                <span className="link color-#a1a1a1 ml-8px" onClick={(e) => {
                  e.stopPropagation()
                  toBlockDetail(item.block_number)
                }}>
                  #{item.block_number}
                </span>
              </div>
              <div className="flex h-24px">
                <div className="h-24px pl-19px">
                  <span className="link hover:color-#1677ff">
                    {addressDots(item.snft, 3, 10)}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      {!one && !list.length && !list2.length && <NoData />}
    </div>
  );
}

export default function TableFold(props: TableFoldProps) {
  return (
    <div className="table-fold flex justify-center items-center min-h-15vh">
      {props.loading ? (
        <i className="i-svg-spinners-ring-resize font-size-24px color-#1677ff"></i>
      ) : (
        Fold(props.data)
      )}
    </div>
  );
}
