import { useEffect, useState } from "react";
import {
  AddressBlockReward,
  GetBlockRewardResponse,
  SnftBlockReward,
} from "../../../../api/modules/explorer";
import "./Card.scss";
import { addressDots } from "../../../../utils/common";
import useRouter from "../../../../hooks/useRouter";
type RewardListCardProps = {
  data: GetBlockRewardResponse | undefined;
};
export default function RewardListCard(props: RewardListCardProps) {
  const [one, setOne] = useState<AddressBlockReward>();
  const [list, setList] = useState<Array<AddressBlockReward>>([]);
  const [list2, setList2] = useState<Array<SnftBlockReward>>([]);
  const { toAccountDetail } = useRouter();
  useEffect(() => {
    if (props.data) {
      const one = props.data?.find(
        (item) => item.identity === 1
      ) as AddressBlockReward;
      if (one) {
        setOne(one);
        console.log("one", one);
      }
      const list = props.data?.filter(
        (item) => item.identity === 2
      ) as Array<AddressBlockReward>;
      setList(list);
      console.log("list", list);

      const list2 = props.data?.filter(
        (item) => item.identity === 3
      ) as Array<SnftBlockReward>;
      setList2(list2);
      console.log("list2", list2);
    }
  }, [props.data]);
  return (
    <div className="font-size-12px color-white card-detail-box text-left">
      <div className="color-#D387FF lh-4.5vh font-bold  text-left px-16px">
        Reward List
      </div>
      <div className="font-bold line  lh-3vh">Proposer</div>
      <div className="line lh-3vh">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(one?.address || "")}
        >
          {addressDots(one?.address || "")}
        </span>
      </div>
      <div className="font-bold line lh-3vh">Validator</div>
      <div className="line lh-3vh text-ellipsis whitespace-nowrap">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[0]?.address || "")}
        >
          {addressDots(list[0]?.address, 6, 6)}
        </span>
        <span className="mx-5px">|</span>
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[1]?.address || "")}
        >
          {addressDots(list[1]?.address, 6, 6)}
        </span>
      </div>
      <div className="line lh-3vh text-ellipsis whitespace-nowrap">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[2]?.address || "")}
        >
          {addressDots(list[2]?.address, 6, 6)}
        </span>
        <span className="mx-5px">|</span>
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[3]?.proxy || "")}
        >
          {addressDots(list[3]?.address, 6, 6)}
        </span>
      </div>
      <div className="line lh-3vh text-ellipsis whitespace-nowrap">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[4]?.address || "")}
        >
          {addressDots(list[4]?.address, 6, 6)}
        </span>
        <span className="mx-5px">|</span>
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[5]?.address || "")}
        >
          {addressDots(list[5]?.address, 6, 6)}
        </span>
      </div>
      <div className="line lh-3vh text-ellipsis whitespace-nowrap">
        <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[6]?.address || "")}
        >
          {addressDots(list[6]?.address, 6, 6)}
        </span>
        {/* <span className="mx-5px">|</span> */}
        {/* <span
          className="link hover:color-#8AA4FF"
          onClick={() => toAccountDetail(list[7]?.address || "")}
        >
          {addressDots(list[7]?.address, 6, 6)}
        </span> */}
      </div>
      <div className="font-bold line  lh-3vh">Staker</div>
      <div className="line lh-3vh text-ellipsis whitespace-nowrap flex">
        {list2.map((item, i) => (
          <div key={i}>
            <span
              className="link hover:color-#8AA4FF"
              onClick={() => toAccountDetail(item?.address || "")}
            >
              {addressDots(item?.address, 2, 2)}
            </span>
            {i !== list2.length - 1 ? <span className="mx-5px">|</span> : <></>}
          </div>
        ))}
      </div>
    </div>
  );
}
