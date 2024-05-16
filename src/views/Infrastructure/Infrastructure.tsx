import "./Infrastructure.scss";
import video from '../../assets/demo.mp4'
import share from '../../assets/shareright.svg'

export default function Infrastructure() {
  return (
    <div className="page-infrastructure flex items-center justify-center">
      <div className="flex flex-col lg:flex-row">
        <div className="bg-box mb-20px py-15px px-30px lg:mb-0 w-100% flex justify-center items-center lg:w-55% h-275px lg:min-h-70vh border-white border-solid border-1px rounded-20px">
          <video autoPlay={true} className="h-100% w-100%" muted loop>
            <source src={video}></source>
          </video>
        </div>
        <div className="lg:flex-1 right-box lg:ml-36px flex justify-between flex-wrap gap-2vh">
          <div className="right-box-top h-auto lg:h-32vh py-20px px-40px text-left flex items-center">
            <div>
              <div className="font-size-26px">DRE Consensus</div>
              <div className="font-size-14px mt-10px text-box">
                Dynamic Random Election (DRE)-based Consensus Mechanism: A set
                of practical Byzantine fault-tolerant protocols for completely
                asynchronous environments.
              </div>
              <div className="font-size-14px mt-10px text-box">
                Inherits the low energy consumption advantage of POS and is more
                decentralized.
              </div>
            </div>
          </div>
          <div className="flex items-center hardware-box pl-40px pr-30px py-20px lg:h-23vh w-100%">
            <div className="flex justify-between flex-1">
              <div className="flex justify-start items-center">
              </div>
              <div className="w-30% text-left">
                <div className="font-size-20px mb-10px">Hardware</div>
                <div className="font-size-14px underline">
                  CPU with 4+ <br />
                  cores16 GB+
                  <br />
                  SSD with 2+TB
                  <br />
                  25+ MBit/s
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="right-box-bottom cursor-pointer w-100%" onClick={() => window.open('https://www.erbie.io/docs/install/run/deploy/index.html', '__blank')}>
            <div>Become A Vaildator</div>
            <img src={share} className="ml-30px w-20px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
