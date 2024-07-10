import useRouter from "../../../../hooks/useRouter";
import { addressDots } from "../../../../utils/common";
import "./Card.scss";
type DetailCardProps = {
  list: Array<string>;
};
export default function DetailsCard(props: DetailCardProps) {
  const { toAccountDetail } = useRouter();
  return (
    <div className="font-size-12px color-white card-detail-box text-left h-20vh">
      <div className="px-16px color-#D387FF lh-4.5vh font-bold">Details</div>
      {props?.list.map((addr, i) => (
        <div
          className="line lh-3vh text-ellipsis whitespace-nowrap hover:color-#8AA4FF cursor-pointer"
          key={i}
          onClick={() => toAccountDetail(addr)}
        >
          {addressDots(addr)}
        </div>
      ))}
    </div>
  );
}
