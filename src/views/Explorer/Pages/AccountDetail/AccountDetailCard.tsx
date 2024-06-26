import { useParams } from "react-router-dom";
import "./Card.scss";
import { addressDots } from "../../../../utils/common";
import { useEffect, useMemo, useState } from "react";
import { GetAccountDetailResponse } from "../../../../api/modules/explorer";
import { Skeleton, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { formatEther } from "ethers";
import { toFixed } from "../../../../utils/utils";
export interface TAccountDetailCardProps {
  loading: boolean;
  data: GetAccountDetailResponse | undefined;
}
export default function AccountDetailCard(props: TAccountDetailCardProps) {
  const params = useParams();
  const [addr, setAddr] = useState("");
  useEffect(() => {
    if (params.address) {
      setAddr(params.address);
    }
  }, [params]);

  const erbieIncome = useMemo(() => {
    if (props.data?.stakerReward) {
      return toFixed(
        formatEther(
          (
            BigInt(props.data?.stakerReward) +
            BigInt(props.data?.validatorReward)
          ).toString()
        ),
        4
      );
    }
    return 0;
  }, [props.data?.stakerReward, props.data?.validatorReward]);
  return (
    <div className="card-box h-100% flex flex-col justify-evenly mt-14px lg:mt-0">
      <div>
        <div className="color-#D387FF font-size-16px font-bold text-left px-16px">
          Account Detail
        </div>
        <div className="link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between">
          <span> {addressDots(addr)} </span>{" "}
          <CopyToClipboard
            text={addr}
            onCopy={() =>
              message.open({
                content: "Copied to clipboard",
                type: "success",
              })
            }
          >
            <i className="i-ep-copy-document color-white font-size-18px"></i>
          </CopyToClipboard>
        </div>
        <div className="px-16px">
          <Skeleton loading={props.loading} active paragraph={{ rows: 6 }}>
            <div>
              <div className="flex justify-between items-center text-line">
                <div>ERB Balance</div>
                <div>
                  {toFixed(formatEther(props.data?.balance || "0"))} ERB
                </div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center text-line">
                <div>Total Staking</div>
                <div>
                  {toFixed(formatEther(props.data?.stakerAmount || "0"))}
                </div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center text-line">
                <div>Total Staked</div>
                <div>
                  {toFixed(formatEther(props.data?.validatorAmount || "0"))}
                </div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center  text-line">
                <div>Online Weight</div>
                <div>{props.data?.weight}</div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center text-line">
                <div>ERB Income</div>
                <div>{erbieIncome}</div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center text-line">
                <div>TXN</div>
                <div>{props.data?.nonce}</div>
              </div>
              <div className="line"></div>
            </div>
          </Skeleton>
        </div>
      </div>
      <div>
        <div className="color-#D387FF font-size-16px font-bold text-left px-14px">
          Other Information
        </div>
        <div className="px-16px">
          <Skeleton loading={props.loading} active paragraph={{ rows: 3 }}>
            <div>
              <div className="flex justify-between items-center text-line">
                <div>Owned CSBT</div>
                <div>{props.data?.snftCount}</div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center text-line">
                <div>Royalty profits</div>
                <div>{toFixed(props.data?.profit || "0")} ERB</div>
              </div>
              <div className="line"></div>
              <div className="flex justify-between items-center text-line">
                <div>Owned NFTs</div>
                <div>{props.data?.nftCount}</div>
              </div>
              <div className="line"></div>
            </div>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
