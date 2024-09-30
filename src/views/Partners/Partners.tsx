import mandra from '../../assets/partners/mardra.svg'
import l2 from '../../assets/partners/l2.svg'
import limino from '../../assets/partners/limino.svg'
import link from '../../assets/partners/linklayer.svg'
import em from '../../assets/partners/em.svg'
import urora from '../../assets/partners/urora.svg'
import './Partners.scss'
const Partners = () => {
    return (
      <div className="page-partners">
        <div className="flex flex-col items-center lg:flex-row w-100% lg:h-82vh lg:w-auto">
          <div className="flex flex-col lg:flex-row lg:h-70vh gap-3vh">
            <div className="flex-1 flex flex-col h-100% gap-10px lg:gap-3vh mobile-box">
              <div className="flex items-center justify-between left-card">
                <div className="flex justify-center items-center">
                  <img src={mandra} className="w-30vw lg:w-auto" alt="" />
                </div>
                <div className="pl-14px lg:px-20px">
                  <div className="color-#D387FF text-left font-size-16px lg:font-size-20px font-bold mb-10px">
                    Mandra Capital
                  </div>
                  <div className="text-left font-size-14px hidden lg:block">
                    Mandra Capital is an investment holding company focused on
                    early-stage opportunities in information technology, life
                    sciences, materials, and technologies.In Web3, an angel
                    investor for OKX exchange, an early investor in Fil, and the
                    leading investor in Erbie.
                  </div>
                  <div className="text-left font-size-12px block lg:hidden">
                    In Web3, an angel investor for OKX exchange, an early
                    investor in Fil, and the leading investor in ErbieChain.
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between flex-row-reverse lg:flex-row left-card">
                <div className="flex justify-center items-center">
                  <img src={l2} className="w-30vw lg:w-auto" alt="" />
                </div>
                <div className="pr-14px lg:px-20px">
                  <div className="color-#D387FF text-left  font-size-16px lg:font-size-20px font-bold mb-10px">
                    Liquid 2 Ventures
                  </div>
                  <div className="text-left font-size-14px hidden lg:block">
                    Liquid 2 Ventures is a venture capital firm based in San
                    Francisco, California. It was founded by NFL Hall of Fame
                    quarterback Joe Montana, Cloudant founder Mike Miller, and
                    TalkBin founder Michael Ma.
                  </div>
                  <div className='text-left font-size-12px block lg:hidden'>
                    Liquid 2 is a venture capital firm based in SanFrancisco.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-100% right-card px-14px lg:px-30px py-2.5vh ">
                <div className="text-center color-#D387FF font-size-20px font-bold mb-3vh">
                  Ecosystem & Partners
                </div>
                <div className="flex flex-wrap lg:flex-col gap-1.2vh justify-evenly">
                  <div className="right-list-card">
                    <div className="flex justify-center items-center">
                      <img src={limino} alt="" />
                    </div>
                    <div className="text-box">
                      <div>
                        <div className="tit">LIMINO</div>
                        <div className="desc">
                          EVM Chain-based Crypto Asset Circulation Hub,
                          including Wallet Defi NFTFi Swap, etc.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-list-card">
                    <div className="flex justify-center items-center">
                      <img src={link} alt="" />
                    </div>
                    <div className="text-box">
                      <div>
                        <div className="tit">LinkLayerAI</div>
                        <div className="desc">
                          AI Powered Web3 — Transforming Data into Valuable
                          Assets AI Agent solutions for multiple scenarios
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-list-card">
                    <div className="flex justify-center items-center">
                      <img src={em} alt="" />
                    </div>
                    <div className="text-box">
                      <div>
                        <div className="tit">E/M GROUP</div>
                        <div className="desc">
                          Experiential Media Group is the leading provider of
                          premier museum-quality exhibitions throughout the
                          world.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-list-card">
                    <div className="flex justify-center items-center">
                      <img src={urora} alt="" />
                    </div>
                    <div className="text-box">
                      <div>
                        <div className="tit">URORA</div>
                        <div className="desc">
                          URORA offers developers an all-in-one service for push
                          notifications, authentication, SMS, messaging, and
                          analytics.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Partners;
