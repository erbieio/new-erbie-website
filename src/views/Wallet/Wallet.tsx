import bg2 from "../../assets/wallet-bg1.svg";
import bg2active from "../../assets/wallet-bg1-active.svg";
import bg3 from "../../assets/wallet-bg2.svg";
import bg3active from "../../assets/wallet-bg2-active.svg";
import WalletCard from "./WalletCard";
import erbie from '../../assets/wallet/erbie.svg'
import metamask from "../../assets/wallet/metamask.svg";
import gate from "../../assets/wallet/gate.svg";
import okx from '../../assets/wallet/okx.svg'
import trustWallet from "../../assets/partners/trustWallet.svg";
import pcbg from "../../assets/wallet/pcbg.svg";
import h5bg from "../../assets/wallet/h5bg.svg";
import limino from "../../assets/partners/limino2.svg";
import "./Wallet.scss";

function label1() {
  return (
    <div>
      <div className="hidden lg:block">
        Supported <br /> Wallets
      </div>
      <div className="block lg:hidden">Supported Wallets</div>
    </div>
  );
}
function label2() {
  return (
    <div>
      <div className="hidden lg:block">
        Other EVM <br />
        Wallets
      </div>
      <div className="block lg:hidden">
        Other EVM Wallets
      </div>
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

          <div className="lg:absolute left-0 right-0 top-0px lg:top-0px text-center lg:text-left">
            <div className="font-size-24px lg:font-size-42px lh-36px mb-18px lg:mb-0 lg:lh-56px">
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
                  <img src={limino} className="w-36px rounded-full" alt="" />
                </a>
              </div>
            }
          >
            <img
              src={bg2}
              className="w-100px lg:w-180px default-img mr-20px lg:mr-40px"
              alt=""
            />
            <img
              src={bg2active}
              className="w-100px lg:w-170px active-img mr-20px lg:mr-40px"
              alt=""
            />
          </WalletCard>
          <WalletCard
            label={label2()}
            desc={
              <div className="flex gap-20px font-size-26px items-center h-36px icon-list">
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={metamask} className="w-36px" alt="" />
                </a>
                <a
                  href="https://www.okx.com/web3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={okx} className="w-36px" alt="" />
                </a>
                <a
                  href="https://trustwallet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-36px h-36px p-5px bg-white rounded-full flex items-center justify-center">
                    <img src={trustWallet} className="w-100% h-100%" alt="" />
                  </div>
                </a>
                <a
                  href="https://www.gate.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gate} className="w-36px" alt="" />
                </a>
              </div>
            }
            className="mt-20px lg:mt-0 lg:mt-0"
            // onClick={handleToPlayStore}
          >
            <img
              src={bg3}
              className="w-84px lg:w-148px default-img mr-28px mt-6px lg:mr-36px"
              alt=""
            />
            <img
              src={bg3active}
              className="w-110px lg:w-194px mt--12px lg:mt--20px active-img mr-22px lg:mt--25px lg:mr-27px"
              alt=""
            />
          </WalletCard>
        </div>
      </div>
    </div>
  );
}
