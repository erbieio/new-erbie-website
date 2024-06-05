import "./Docs.scss";
import guthubimg from "../../assets/github.svg";
import Button from "../../components/Button";
import DocCard from "./DocCard";
import img1 from '../../assets/doccard1.svg'
import img2 from '../../assets/doccard2.svg'
import img3 from '../../assets/doccard3.svg'
import img4 from '../../assets/doccard4.svg'
import img5 from '../../assets/doccard5.svg'
import img6 from '../../assets/doccard6.svg'
import imglight1 from '../../assets/doc1Light.svg'
import imglight2 from '../../assets/doc2Light.svg'
import imglight3 from '../../assets/doc3Light.svg'
import imglight4 from '../../assets/doc4Light.svg'
import imglight5 from '../../assets/doc5Light.svg'
import imglight6 from '../../assets/doc6Light.svg'
import earch from '../../assets/earth.svg'
import { ERBIE_DOCUMENT } from "../../const/website";

export default function Docs() {
  const arr = [
    {
      label:'Running a Validator',
      desc:"Learn the deployment methods for running Erbie's node as a validator.",
      img: img1,
      lightImg: imglight1,
      link: `${ERBIE_DOCUMENT}/newnavigation/guide/run.html`
    },
    {
      label:'Become a Staker',
      desc:"Participate in Erbie's infrastructure and earn rewards as a staker.",
      img: img2,
      lightImg: imglight2,
      link: `${ERBIE_DOCUMENT}/newnavigation/guide/staking.html`
    },
    {
      label:'Start Learning',
      desc:"Develop a profound understanding of the core logic of Erbie's decentralized network.",
      img: img3,
      lightImg: imglight3,
      link: `${ERBIE_DOCUMENT}/index.html`
    },
    {
      label:'Chain Layer SBT',
      desc: "Aggregate web data into services through the unique ChainLayer SBT.",
      img: img4,
      lightImg: imglight4,
      link: `${ERBIE_DOCUMENT}/newnavigation/csbt/introduction.html`

    },
    {
      label:'DRE Consensus',
      desc:"Practical Byzantine Fault Tolerance protocol for fully asynchronous environments.",
      img: img5,
      lightImg: imglight5,
      link: `${ERBIE_DOCUMENT}/newnavigation/learn/consensus/index.html`

    },
    {
      label:'Developer Guide',
      desc:"Build the Dapps by enabling rich data interaction with Erbie through various types of APIs.",
      img: img6,
      lightImg: imglight6,
      link: `${ERBIE_DOCUMENT}/newnavigation/interfaces/OpenAPI/index.html`
    },

  ]
  return (
    <div className="page-docs">
      <div className="flex flex-col lg:flex-row w-100% lg:w-auto">
      <div className="mb-35px lg:mb-0 w-100% h-62vh lg:w-30% pt-44px lg:h-70vh relative rounded-20px border-width-1px border-style-solid border-color-#5C3475 github-box ">
        <div className="github-con h-100% px-32px flex flex-col justify-between pb-20px lg:pb-40px">
          <img src={guthubimg} className="h-46px transform-translate-y--24px lg:h-58px" />
          <div className="flex justify-center items-center">
          <img src={earch} className="animate-rotate w-40vh h-40vh object-cover" alt="" />
          </div>
            <Button onClick={() => window.open('https://github.com/erbieio/','__blank')}><div className="uppercase">Learn More</div></Button>
        </div>
      </div>
      <div className="flex-1 flex flex-wrap lg:ml-20px gap-10px lg:gap-20px h-603px lg:h-70vh mb-35px lg:mb-0 justify-around">
        {arr.map((item,i) => <DocCard key={i} label={item.label} desc={item.desc} link={item.link}>
          <img src={item.img} className="w-54px lg:w-84px defaultImg" alt="" />
          <img src={item.lightImg} className="w-54px lg:w-84px lightImg" alt="" />
        </DocCard>)}
      </div>
      </div>

    </div>
  );
}
