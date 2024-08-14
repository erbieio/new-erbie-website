import bg2 from "../../assets/wallet-bg1.svg";
import bg2active from "../../assets/wallet-bg1-active.svg";
import bg3 from "../../assets/wallet-bg2.svg";
import bg3active from "../../assets/wallet-bg2-active.svg";
import WalletCard from "./WalletCard";
import erbie from '../../assets/wallet/erbie.svg'
import tg from "../../assets/wallet/tg.svg";
import metamask from "../../assets/wallet/metamask.svg";
import into from "../../assets/wallet/intoken.svg";
import gate from "../../assets/wallet/gate.svg";
import base from "../../assets/wallet/basewallet.svg";
import walletConnect from "../../assets/wallet/walletConnect.svg";
import pcbg from "../../assets/wallet/pcbg.svg";
import h5bg from "../../assets/wallet/h5bg.svg";

import "./Wallet.scss";

function label1() {
  return (
    <div>
      Official <br /> Wallet
    </div>
  );
}
function label2() {
  return (
    <div>
      Other EVM <br />
      Wallet
    </div>
  );
}

export default function Wallet() {
  return (
    <div className="page-wallet pb-30px lg:pb-0 flex items-center justify-center">
      <div className="flex justify-around flex-col gap-40px lg:gap-80px lg:flex-row w-100%">
        <div className="left-box lg:mb-0 lg:h-70vh relative w-100% lg:w-50% flex justify-end  flex-col-reverse lg:flex-col">
          <img src={pcbg} className="lg:h-37vh hidden lg:block" alt="" />
          <img
            src={h5bg}
            className="h-auto w-90% block lg:hidden m-auto"
            alt=""
          />

          <div className="lg:absolute left-0 right-0 top-0px lg:top-50px text-center lg:text-left">
            <div className="font-size-24px lg:font-size-42px lh-36px mb-18px lg:mb-0 lg:lh-60px">
              Get started with Erbie <br /> Wallet Portfolio
            </div>
            <div className="font-size-14px mt-12px lh-30px hidden lg:block">
              The Erbie Wallet is your portal to the Erbie ecosystem, acting as
              a secure means for storing and transacting your crypto assets on
              Erbie.
            </div>
          </div>
        </div>
        <div className="right-box w-100% lg:w-40% flex flex-col justify-between w-100%">
          <WalletCard
            label={label1()}
            desc={
              <div className="flex gap-20px font-size-26px h-30px items-center">
                <a
                  href="https://chromewebstore.google.com/detail/erbiewallet/focaabpomeijajpoahmbcpkbggogljhl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={erbie} className="w-36px" alt="" />
                </a>
                <a
                  href="https://t.me/ErbieChainBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tg} className="w-36px" alt="" />
                </a>
              </div>
            }
          >
            <img src={bg2} className="w-100px lg:w-180px default-img" alt="" />
            <img
              src={bg2active}
              className="w-100px lg:w-180px active-img"
              alt=""
            />
          </WalletCard>
          <WalletCard
            label={label2()}
            desc={
              <div className="flex gap-20px font-size-26px items-center h-30px">
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={metamask} className="w-36px" alt="" />
                </a>
                <a
                  href="https://token.im/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={into} className="w-36px" alt="" />
                </a>
                <a
                  href="https://www.gate.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gate} className="w-36px" alt="" />
                </a>
                <a
                  href="https://www.base.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={base} className="w-36px" alt="" />
                </a>
                <a
                  href="https://walletconnect.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={walletConnect} className="w-36px" alt="" />
                </a>
              </div>
            }
            className="mt-20px lg:mt-0 lg:mt-0"
            // onClick={handleToPlayStore}
          >
            <img src={bg3} className="w-100px lg:w-150px default-img" alt="" />
            <img
              src={bg3active}
              className="w-145px lg:w-220px active-img translate-y--30px"
              alt=""
            />
          </WalletCard>
        </div>
      </div>
    </div>
  );
}
