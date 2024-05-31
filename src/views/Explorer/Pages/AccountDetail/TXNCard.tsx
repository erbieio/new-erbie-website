import { useParams } from "react-router-dom";
import "./Card.scss";
import { addressDots } from "../../../../utils/common";
import { useEffect, useState } from "react";
import { GetAccountDetailResponse } from "../../../../api/modules/explorer";
import { Skeleton, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { formatEther } from "ethers";
export interface TXNCardProps {
  loading: boolean;
  data: GetAccountDetailResponse | undefined;
}
export default function TXNCard(props: TXNCardProps) {
  const params = useParams();
  const [addr, setAddr] = useState("");
  useEffect(() => {
    if (params.address) {
      setAddr(params.address);
    }
  }, [params]);
  return (
    <div className="card-box h-100% flex flex-col justify-evenly">
      <div>
        <div className="color-#D387FF font-size-16px font-bold text-left px-16px">
          Account Detail
        </div>
        <div className="link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between">
          <span> {addressDots(addr)} </span>{" "}
          <CopyToClipboard
            text={addr}
            onCopy={() => message.success("Copied to clipboard")}
          >
            <i className="i-ep-copy-document color-white font-size-18px"></i>
          </CopyToClipboard>
        </div>
        <Skeleton loading={props.loading} active paragraph={{ rows: 6 }}>
          <div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>ERB Balance</div>
              <div>{formatEther(props.data?.balance || "0")} ERB</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>Total Staking</div>
              <div>{formatEther(props.data?.stakerAmount || "0")}</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>Total Staked</div>
              <div>{formatEther(props.data?.validatorAmount || "0")}</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>Online Weight</div>
              <div>{props.data?.weight}</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>ERB Income</div>
              <div>{props.data?.rewardCoinCount}</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>TXN</div>
              <div>0</div>
            </div>
            <div className="line"></div>
          </div>
        </Skeleton>
      </div>
      <div>
        <div className="color-#D387FF font-size-16px font-bold text-left px-14px">
          Other Information
        </div>
        <Skeleton loading={props.loading} active paragraph={{ rows: 3 }}>
          <div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>Owned CSBT</div>
              <div>{props.data?.rewardSNFTCount}</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>Royalty profits</div>
              <div>0 ERB</div>
            </div>
            <div className="line"></div>
            <div className="flex justify-between items-center px-16px text-line">
              <div>Owned NFTs</div>
              <div>0</div>
            </div>
            <div className="line"></div>
          </div>
        </Skeleton>
      </div>
    </div>
  );
}