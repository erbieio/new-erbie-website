import "./Card.scss";
export default function StakeCard() {
  return (
    <div className="card-list flex flex-col h-100% gap-2vh">
      <div className="card-box py-1vh">
        <div className="color-#D387FF font-size-12px lh-3.1vh text-left px-16px font-bold">Block Details # 128088</div>
        <div className="flex justify-between px-16px stake-line">
          <div>Block Generation Time</div>
          <div>5 Min Ago</div>
        </div>
        <div className="line"></div>
        <div className="flex justify-between px-16px stake-line">
          <div>Block Size</div>
          <div>2011 Bytes</div>
        </div>
        <div className="line"></div>
        <div className="flex justify-between px-16px stake-line">
          <div>Gas Used</div>
          <div>0(0%)</div>
        </div>
        <div className="line"></div>
        <div className="flex justify-between px-16px stake-line">
          <div>Gas Price</div>
          <div>0 Gwei</div>
        </div>
        <div className="line"></div>
        <div className="flex justify-between px-16px stake-line">
          <div>Gas Limit</div>
          <div>8000000</div>
        </div>
        <div className="line"></div>
        <div className="flex justify-between px-16px stake-line">
          <div>Parent Hash</div>
          <div><span className="link color-blue">0x...95a271f3f3998e</span></div>
        </div>
        <div className="line"></div>
      </div>
      <div className="card-box font-size-12px text-left  py-1vh">
        <div className="color-#D387FF font-size-12px px-16px lh-3.1vh text-left font-bold">Reward List</div>
        <div className="stake-line">Proposer</div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue ">Dxdb33217fe3f7...4e23ab7/55d05</span></div>
        <div className="line"></div>
        <div className="stake-line">Validator</div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
        <div className="line"></div>
        <div className="stake-line">Staker</div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
      </div>
      <div className="card-box  py-1vh">
        <div className="color-#D387FF font-size-12px px-16px lh-3.1vh text-left font-bold">Delegated Accounts</div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
        <div className="line"></div>
        <div className="stake-line"><span className="link color-blue">Dxdb33...fe3f74bd</span>|<span className="link color-blue">Dxdb33...fe3f74bd</span></div>
      </div>
    </div>
  );
}
