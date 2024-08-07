import bg1 from "../../assets/wallet-bg.svg";
import bg2 from "../../assets/wallet-bg1.svg";
import bg2active from "../../assets/wallet-bg1-active.svg";
import bg3 from "../../assets/wallet-bg2.svg";
import bg3active from "../../assets/wallet-bg2-active.svg";
import share from "../../assets/shareright.svg";
import WalletCard from "./WalletCard";
import "./Wallet.scss";

function label1() {
  return (
    <div>
      50000+ <img className="ml--14px w-30px" src={share} alt="" />
    </div>
  );
}
function label2() {
  return (
    <div>
      1400+ <img className="ml--14px w-30px" src={share} alt="" />
    </div>
  );
}

export default function Wallet() {
  const handleToPlayStore = () => {
    window.open(
      "https://chromewebstore.google.com/detail/erbiewallet/focaabpomeijajpoahmbcpkbggogljhl?authuser=0&hl=en",
      "__blank"
    )
  };
  return (
    <div className="page-wallet pb-30px lg:pb-0 flex items-center justify-center">
      <div className="flex justify-around flex-col gap-40px lg:gap-80px lg:flex-row w-100%">
        <div className="left-box lg:mb-0 lg:h-70vh relative w-100% lg:w-50% flex justify-center items-center">
          <img src={bg1} className="h-300px lg:h-100%" alt="" />
          <div className="absolute left-0 right-0 top-0px lg:top-50px text-center lg:text-left">
            <div className="font-size-24px lg:font-size-42px lh-60px">
              Get started with Erbie <br /> Wallet Portfolio
            </div>
            <div className="font-size-14px mt-12px lh-30px hidden lg:block">
              The Erbie Wallet is your portal to the Erbie ecosystem, acting as{" "}
              <br />a secure means for storing and transacting your crypto
              assets on Erbie.
            </div>
          </div>
        </div>
        <div className="right-box w-100% lg:w-50% flex flex-col justify-between w-100%">
          <WalletCard
            label={label1()}
            desc="Minapp Wallet Users"
            onClick={() => window.open("https://t.me/ErbieChainBot", "_self")}
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
            desc="Plug-in Download"
            className="mt-20px lg:mt-0 lg:mt-0"
            onClick={handleToPlayStore}
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
