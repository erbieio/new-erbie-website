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
      <div className="lg:h-15vh overflow-y-scroll scrollbar-y">
        {props.list.map((addr, idx) => (
          <div
            className="line lh-3vh text-ellipsis whitespace-nowrap hover:color-#8AA4FF cursor-pointer flex-1"
            onClick={() => toAccountDetail(addr)}
            key={idx}
          >
            {addressDots(addr, 10, 10)}
          </div>
        ))}
      </div>
    </div>
  );
}
