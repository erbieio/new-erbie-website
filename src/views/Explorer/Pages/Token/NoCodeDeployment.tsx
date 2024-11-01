import { useState } from "react";
import './NoCodeDeployment.scss'
interface ListItem {
    label: string
    value: number
    selected: boolean
}

const NoCodeDeployment = () => {
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

    const handleClick = (e: ListItem) => {
        const arr = list.map(e => e);
        arr.forEach((item) => {
          if (item.value === e.value) {
            item.selected = true;
          } else {
            item.selected = false;
          }
        });
        setList(arr);
    };
    return (
      <div className="no-code-deployment">
        <div className="font-size-12px text-left">
          This method is suitable for users who lack programming sks. There is
          no need to wite any code, simply filouthe reguired information in a
          form to generate and deploy a smartcontract.This method is suitable
          for users who lack programming sks. There is no need to wite any code,
          simply filouthe reguired information in a form to generate and deploy
          a smartcontract.
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
        <div className="flex flex-col justify-start deployment-form">
          <div className="flex justify-between gap-14px">
            <div className="flex-1">
              <div className="text-left label">TOKEN Name</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">TOKEN Symbol</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-left label">TOKEN Logo URL</div>
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
          <div className="flex gap-14px mt-2vh">
            <div className="w-24.3%">
              <div className="text-left label">Totalsupply</div>
              <div>
                <input placeholder="Enter" type="text" />
              </div>
            </div>
            <div className="w-75.7% flex justify-start font-size-12px text-left mt-3vh">
              The Total Supply is the actual total supply * 10^n, where n is the
              number of decimals.The Total Supply is the actual total supply *
              10^n, where n is the number of decimals.
            </div>
          </div>
        </div>
        <div className="justify-between flex gap-20px mt-4vh">
          <div className="dp-btn flex-1">Clear</div>
          <div className="dp-btn flex-1">Confirm</div>
        </div>
      </div>
    );
}

export default NoCodeDeployment;
