import useRouter from "../../../../hooks/useRouter";
import { addressDots } from "../../../../utils/common";
import "./Card.scss";

type NodeAddressCardProps = {
  list: Array<string>;
};
export default function NodeAddressCard(props: NodeAddressCardProps) {
  const { toAccountDetail } = useRouter();
  return (
    <div className="font-size-12px color-white card-detail-box text-left h-auto lg:h-180px">
      <div className="px-16px color-#D387FF lh-4.5vh font-bold">
        Node Address
      </div>
      {props.list.map((addr, idx) => (
        <div
          className="line lh-3vh text-ellipsis whitespace-nowrap hover:color-#8AA4FF cursor-pointer"
          onClick={() => toAccountDetail(addr)}
          key={idx}
        >
          {addressDots(addr)}
        </div>
      ))}
    </div>
  );
}
