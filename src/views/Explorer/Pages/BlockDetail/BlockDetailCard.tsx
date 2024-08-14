import {
  GetBlockDetailResponse,
  GetTransactionPageResponse,
  GetTransitionPageListItem,
} from "../../../../api/modules/explorer";
import { addressDots, formatDate } from "../../../../utils/common";
import "./Card.scss";
interface BlockDetailCardProps {
  data: GetBlockDetailResponse | undefined;
  listTX: GetTransactionPageResponse | undefined;
}
export default function BlockDetailCard(props: BlockDetailCardProps) {
  const gasusedlvsolo = (data: Array<GetTransitionPageListItem>) => {
    if (data && data.length) {
      let text = 0;
      for (let i = 0; i < data.length; i++) {
        text = text + data[i].gasPrice;
      }
      return text / data.length;
    }
    return 0;
  };
  return (
    <div className="font-size-12px color-white card-detail-box">
      <div className=" color-#D387FF lh-4.5vh font-bold  text-left px-16px">
        Block Details # {props.data?.number}
      </div>
      <div className="flex justify-between items-center line lh-3vh">
        <div className=" whitespace-nowrap text-ellipsis">
          Block Generation Time
        </div>
        <div className="whitespace-nowrap text-ellipsis">
          <div className="whitespace-nowrap">
            {formatDate(props.data?.timestamp || 0)}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center line lh-3vh">
        <div>Block Size</div>
        <div>{props.data?.size || 0} Bytes</div>
      </div>
      <div className="flex justify-between items-center line lh-3vh">
        <div>Gas Used</div>
        <div>
          {props.data?.gasUsed}(
          {((props.data?.gasUsed || 0) / (props.data?.gasLimit || 0)).toFixed(
            5
          )}
          %)
        </div>
      </div>
      <div className="flex justify-between items-center line lh-3vh">
        <div>Gas Price</div>
        <div>
          {gasusedlvsolo(props.listTX?.transactions || []) / 1000000000} GWei
        </div>
      </div>
      <div className="flex justify-between items-center line lh-3vh">
        <div>Gas Limit</div>
        <div>{props.data?.gasLimit}</div>
      </div>
      <div className="flex justify-between items-center line lh-3vh">
        <div>Parent Hash</div>
        <div className="link hover:color-blue">
          {addressDots(props.data?.parentHash || "", 6, 6)}
        </div>
      </div>
    </div>
  );
}
