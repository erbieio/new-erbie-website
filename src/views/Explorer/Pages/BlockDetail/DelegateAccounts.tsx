import { useEffect, useState } from "react";
import lv1 from "../../../../assets/fold-lv1.svg";
import lv2 from "../../../../assets/fold-lv2.svg";
import {
  AddressBlockReward,
  GetBlockRewardResponse,
} from "../../../../api/modules/explorer";
import "./Card.scss";
import useRouter from "../../../../hooks/useRouter";
import { addressDots } from "../../../../utils/common";
type DelegateAccounts = {
  data: GetBlockRewardResponse | undefined;
};
export default function DelegateAccounts(props: DelegateAccounts) {
  const [one, setOne] = useState<AddressBlockReward>();
  const [list, setList] = useState<Array<AddressBlockReward>>([]);
  const { toAccountDetail } = useRouter();
  const nullAddr = "0x0000000000000000000000000000000000000000";
  useEffect(() => {
    if (props.data) {
      const one = props.data?.find(
        (item) => item.identity === 1
      ) as AddressBlockReward;
      if (one) {
        setOne(one);
      }
      const list = props.data?.filter(
        (item) => item.identity === 2
      ) as Array<AddressBlockReward>;
      setList(list);
    }
  }, [props.data]);
  return (
    <div className="font-size-12px color-white card-detail-box text-left">
      <div className="px-16px color-#D387FF lh-4.5vh font-bold ">
        Delegated Accounts
      </div>
      <div className="line lh-3vh  flex justify-between">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(one?.proxy || "")}
        >
          <img src={lv1} className="w-12px mr-3px" alt="" />
          {addressDots(one?.proxy || nullAddr, 2, 3)}{" "}
        </span>
        <span className="mx-3px">|</span>
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[0]?.proxy || "")}
        >
          <img src={lv2} className="h-12px mr-3px" alt="" />
          {addressDots(list[0]?.proxy || nullAddr, 2, 3)}
        </span>
        <span className="mx-3px">|</span>
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[1]?.proxy || nullAddr)}
        >
          <img src={lv2} className="h-12px m4-3px" alt="" />
          {addressDots(list[1]?.proxy || nullAddr, 2, 3)}
        </span>
      </div>
      <div className="line lh-3vh  flex justify-between">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[2]?.proxy || nullAddr)}
        >
          <img src={lv2} className="h-12px mr-3px" alt="" />
          {addressDots(list[2]?.proxy || nullAddr, 2, 3)}
        </span>
        <span className="mx-3px">|</span>
        <span
          className="link "
          onClick={() => toAccountDetail(list[3]?.proxy || nullAddr)}
        >
          <img src={lv2} className="h-12px mr-3px" alt="" />
          {addressDots(list[3]?.proxy || nullAddr, 2, 3)}
        </span>
        <span className="mx-3px">|</span>
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[4]?.proxy || nullAddr)}
        >
          <img src={lv2} className="h-12px mr-3px" alt="" />
          {addressDots(list[4]?.proxy || nullAddr, 2, 3)}
        </span>
      </div>
      <div className="line lh-3vh flex justify-start">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[5]?.proxy || "")}
        >
          <img src={lv2} className="h-12px mr-3px" alt="" />
          {addressDots(list[5]?.proxy || nullAddr, 2, 3)}
        </span>
        <span className="mx-3px">|</span>
        <span
          className="link "
          onClick={() => toAccountDetail(list[6]?.proxy || "")}
        >
          <img src={lv2} className="h-12px mr-3px" alt="" />
          {addressDots(list[6]?.proxy || nullAddr, 2, 3)}
        </span>
      </div>
    </div>
  );
}
