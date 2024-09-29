import "./DetailCard.scss";
import tokenIcon from "../../../../assets/token/token.svg";
import Copy from "../../../../components/Copy";
import { GetContractItem } from "../../../../api/modules/explorer";
import { addressDots } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
import { formatEther } from "ethers";
const DetailCard = (props: { data: GetContractItem | undefined }) => {
  const {toAccountDetail} = useRouter()
  return (
    <div className="token-detail-card pt-16px lg:pt-6vh text-left">
      <div className="title">Token Detail</div>
      <div className="mt-16px flex items-center gap-8px font-bold px-18px">
        <img src={tokenIcon} alt="" />
        <span className="color-white">{props.data?.token_name}</span>
        <span className="color-#999">{props.data?.symbol}</span>
      </div>
      <div className="font-size-12px font-200">
        <div className="line-card">
          <span>Creator</span>
          <div>
            <span
              className="link hover:color-#1677ff"
              onClick={() =>
                toAccountDetail(props.data?.contract_creator || "")
              }
            >
              {props.data
                ? addressDots(props.data.contract_creator, 6, 8)
                : "-"}{" "}
            </span>

            <Copy text={props.data?.contract_creator || ""} />
          </div>
        </div>
        <div className="line-card">
          <span>Supply</span>
          <div>
            {props.data?.total_supply
              ? formatEther(props.data.total_supply)
              : "0"}
          </div>
        </div>
        <div className="line-card">
          <span>Transfers</span>
          <div>-</div>
        </div>
        <div className="line-card">
          <span>Holders</span>
          <div>{props.data?.holders}</div>
        </div>
      </div>

      <div className="title mt-30px lg:mt-6vh">Contract</div>
      <div className="font-size-12px font-200">
        <div className="line-card">
          <span>
            {props.data ? addressDots(props.data.contract_address, 10, 10) : ""}
          </span>
          <div>
            <Copy text="123123" />
          </div>
        </div>
        <div className="line-card">
          <span>Calls</span>
          <div>{props.data?.call_times}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
