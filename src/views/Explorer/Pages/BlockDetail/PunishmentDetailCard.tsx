import { GetSlashingsResponse } from "../../../../api/modules/explorer";
import useRouter from "../../../../hooks/useRouter";
import { addressDots } from "../../../../utils/common";
import "./Card.scss";
type PunishmentDetailCardProps = {
  data: GetSlashingsResponse | undefined;
};
export default function PunishmentDetailCard(props: PunishmentDetailCardProps) {
  const { toAccountDetail } = useRouter();
  return (
    <div className="font-size-12px color-white card-detail-box text-left">
      <div className=" color-#D387FF lh-4.5vh font-bold  text-left px-16px">
        Punishment Details
      </div>
      <div className="list-block h-auto lg:h-190px">
        <div className="flex justify-evenly line">
          <div className="w-35%">Address</div>
          <div className="w-25%">Number</div>
          <div className="w-40%">Type </div>
        </div>
        <div>
          {props?.data?.data?.map((item, i) => (
            <div className="flex h-2.8vh line items-center" key={i}>
              <div
                className="w-35% hover:color-#8AA4FF cursor-pointer"
                onClick={() => toAccountDetail(item.address)}
              >
                {addressDots(item.address, 4, 4)}
              </div>
              <div className="w-25%">{item.block_number}</div>
              <div className="w-40%">Multi-signatures </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
