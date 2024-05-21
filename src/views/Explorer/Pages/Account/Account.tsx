import { useState } from "react";
import PageNation from "../../../../components/PageNation";
import Table from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import './Account.scss'
import GrowChart from "./GrowChart";
export default function Account() {
  const columns = [
    {
      title:'Address',
      key:'Height'
    },
    {
      title:'Balance（ERB）',
      key:'Proposer'
    },
    {
      title:'Total Staking',
      key:'Height'
    },
    {
      title:'Total Staked',
      key:'Height'
    },
    {
      title:'Owned CSBT',
      key:'Height'
    },

  ]
  const handleSearch = () => {

  }

  const [loading] = useState(false)
  return (
    <div className="page-account">
      <div className="flex">
        <div className="flex-1">
          <div>
            <SearchIpt onSearch={handleSearch} />
          </div>
          <div className="table-box h-65vh mt-2vh">
            <div className="flex justify-between pt-10px px-10px pb-14px">
              <div className="uppercase font-size-16px">Account Informations</div>
              <PageNation total={248} page={2} pageSize={10} />
            </div>
            <div className="flex h-90%">
              <Table columns={columns} dataSources={[]} loading={loading} />
            </div>
          </div>
        </div>
        <div className="w-250px ml-22px flex flex-col justify-between">
          <div className="data-card h-16vh">
            <div>
              <div className="font-size-16px">Total Coin Addresses</div>
              <div className="font-size-24px">345</div>
            </div>
          </div>
          <div className="data-card h-36vh">
            <div className="w-100%">
              <div className="font-size-14px">24h Account Growth <br />+0.00% </div>
              <div className="w-100%">
                <GrowChart />
              </div>
            </div>
          </div>
          <div className="data-card h-16vh">
            <div>
              <div className="font-size-16px">Total Coin Addresses</div>
              <div className="font-size-24px">345</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
