import { GetSlashingsBlackHoleItem } from "../../../../api/modules/explorer";
import useRouter from "../../../../hooks/useRouter";
import { addressDots } from "../../../../utils/common";
import "./Card.scss";
type BlockholeDetailsCardProps = {
  list: Array<GetSlashingsBlackHoleItem>;
};
export default function BlockholeDetailsCard(props: BlockholeDetailsCardProps) {
  const { toAccountDetail } = useRouter();
  return (
    <div className="font-size-12px color-white card-detail-box text-left">
      <div className="px-16px color-#D387FF lh-4.5vh font-bold ">
        Blackhole Block Details
      </div>
      <div className="flex color-#80838e line py-5px">
        <div className="w-33.3% text-left">Penalty Address</div>
        <div className="w-33.3% text-center">Penalty Weight</div>
        <div className="w-33.3% text-right">Current Weight</div>
      </div>
      <div className="lg:h-17vh overflow-y-scroll scrollbar-y">
        {props.list.map((item, idx) => (
          <div className="flex line lh-2.5vh text-center" key={idx}>
            <div
              className="w-33.3% color-#8AA4FF text-left cursor-pointer"
              onClick={() => toAccountDetail(item.address)}
            >
              {addressDots(item.address, 3, 5)}
            </div>
            <div className="w-33.3%">20</div>
            <div className="w-33.3%  text-right">{item.weight}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
