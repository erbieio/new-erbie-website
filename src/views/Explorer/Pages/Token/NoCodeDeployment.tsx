import { useMemo, useState } from "react";
import "./NoCodeDeployment.scss";
import { message } from "antd";

interface ListItem {
  label: string;
  value: number;
  selected: boolean;
}

const NoCodeDeployment = () => {
  const [messageApi, messageContext] = message.useMessage();

  const [list, setList] = useState<ListItem[]>([
    {
      label: "ERC-20",
      value: 1,
      selected: true,
    },
    {
      label: "ERC-21",
      value: 2,
      selected: false,
    },
  ]);

  const selectProtype = useMemo(() => {
    return list.find(item => item.selected)?.value
  },[list])

  const handleClick = (e: ListItem) => {
    const arr = list.map((e) => e);
    arr.forEach((item) => {
      if (item.value === e.value) {
        item.selected = true;
      } else {
        item.selected = false;
      }
    });
    setList(arr);
  };

  const handleConfirm = () => {
    messageApi.warning("Coming soon");
  };
  return (
    <div className="no-code-deployment pb-20px lg:pb-0">
      {messageContext}
      <div className="font-size-12px text-left">
        This method is suitable for users who lack programming sks. There is no
        need to wite any code, simply filouthe reguired information in a form to
        generate and deploy a smartcontract.This method is suitable for users
        who lack programming sks. There is no need to wite any code, simply
        filouthe reguired information in a form to generate and deploy a
        smartcontract.
      </div>
      <div className="flex justify-start erc-card-box">
        <div className="bg-#0C0A11 rounded-8px flex">
          {list.map((item) => (
            <div
              key={item.value}
              onClick={() => handleClick(item)}
              className={`${item.selected ? "selected" : ""} erc-card`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      {selectProtype === 1 && (
        <div className="flex flex-col justify-start deployment-form">
          <div className="flex flex-col lg:flex-row justify-between gap-14px">
            <div className="flex-1">
              <div className="text-left label">Token Name</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">Token Symbol</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">Token Logo URL</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">Decimals</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-14px mt-2vh">
            <div className="w-100% lg:w-24.3%">
              <div className="text-left label">TotalSupply</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="w-100% lg:w-75.7% flex justify-start font-size-12px text-left mt-0px lg:mt-3vh">
              The Total Supply is the actual total supply * 10^n, where n is the
              number of decimals.The Total Supply is the actual total supply *
              10^n, where n is the number of decimals.
            </div>
          </div>
        </div>
      )}
      {selectProtype === 2 && (
        <div className="flex flex-col justify-start deployment-form">
          <div className="flex flex-col lg:flex-row justify-between gap-14px">
            <div className="flex-1">
              <div className="text-left label">Token Name</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">Token Logo URL</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">BaseTokenURL</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">TotalSupply</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-14px mt-2vh">
            <div className="w-100% lg:w-24.3%">
              <div className="text-left label">InitialFeePerNFT</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="w-100% lg:w-75.7% flex justify-start font-size-12px text-left mt-0px lg:mt-3vh"></div>
          </div>
        </div>
      )}
      <div className="justify-between flex gap-20px mt-4vh">
        <div className="dp-btn flex-1">Clear</div>
        <div className="dp-btn flex-1" onClick={handleConfirm}>
          Confirm
        </div>
      </div>
    </div>
  );
};

export default NoCodeDeployment;
