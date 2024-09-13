import './DetailCard.scss'
import tokenIcon from '../../../../assets/token/token.svg'
import Copy from '../../../../components/Copy';
const DetailCard = () => {
    return (
      <div className="token-detail-card pt-6vh text-left">
        <div className="title">Token Detail</div>
        <div className="mt-16px flex items-center gap-8px font-bold px-18px">
          <img src={tokenIcon} alt="" />
          <span className="color-white">PEPE</span>
          <span className="color-#999">PEPE</span>
        </div>
        <div className="font-size-12px font-200">
          <div className="line-card">
            <span>Creator</span>
            <div>
              0x20d95a...47362c771e <Copy text="123123" />
            </div>
          </div>
          <div className="line-card">
            <span>Supply</span>
            <div>36900</div>
          </div>
          <div className="line-card">
            <span>Transfers</span>
            <div>36900</div>
          </div>
          <div className="line-card">
            <span>Holders</span>
            <div>36900</div>
          </div>
        </div>

        <div className="title mt-6vh">Contract</div>
        <div className="font-size-12px font-200">
          <div className="line-card">
            <span>0x21231234324rtrtyrhngd</span>
            <div>
              <Copy text="123123" />
            </div>
          </div>
          <div className="line-card">
            <span>Calls</span>
            <div>36900</div>
          </div>
        </div>
      </div>
    );
}

export default DetailCard;
