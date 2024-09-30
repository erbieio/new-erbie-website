import "./DetailCard.scss";
import Copy from "../../../../components/Copy";
import { GetContractItem, get_contract_transfer_num } from '../../../../api/modules/explorer';
import { addressDots } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
import { formatEther } from "ethers";
import TokenIcon from "./TokenIcon";
import { useEffect, useState } from "react";
const DetailCard = (props: { data: GetContractItem | undefined }) => {
  const { toAccountDetail } = useRouter()
  const [total, setTotal] = useState(0)
  const handleGetTransfer = async (addr: string) => {
    const res = await get_contract_transfer_num(addr)
    setTotal(res)
  }
  useEffect(() => {
    if (props.data?.contract_address) {
          handleGetTransfer(props.data.contract_address);
    }

  }, [props.data?.contract_address])
  return (
    <div className="token-detail-card pt-16px lg:pt-5vh text-left">
      <div className="title">Token Detail</div>
      <div className="mt-16px flex items-center gap-8px font-bold px-18px">
        <TokenIcon name={props.data?.token_name} />
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
            {props.data?.contract_type === "ERC20" && props.data?.total_supply
              ? Number(formatEther(BigInt(props.data.total_supply).toString()))
              : ""}
            {props.data?.contract_type !== "ERC20" && props.data?.total_supply
              ? Number(props.data.total_supply)
              : ""}
          </div>
        </div>
        <div className="line-card">
          <span>Transfers</span>
          <div>{total || '-'}</div>
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
            <Copy text={props.data?.contract_address || ""} />
          </div>
        </div>
        <div className="line-card">
          <span>Verified</span>
          <div>{props.data?.verified ? "Yes" : "No"}</div>
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
