import PageNation from "../../../../components/PageNation";
import Table from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import "./Transct.scss";
import TransitionChart from "./TransitionChart";
import VolumeChart from "./VolumeChart";
export default function Transct() {
  const handleSearch = () => {};
  const columns = [
    {
      title:'Height',
      key:'Height'
    },
    {
      title:'Proposer',
      key:'Proposer'
    },
    {
      title:'TXN',
      key:'Height'
    },
    {
      title:'Creation Time',
      key:'Height'
    },
    {
      title:'Gas Used',
      key:'Height'
    },
    {
      title:'Gas Limit',
      key:'Height'
    },
    {
      title:'Block Size',
      key:'Height'
    },
  ]
  return (
    <div className="page-transct min-h-70vh flex">
      <div className="flex flex-col flex-1 gap-2vh">
        <div className="flex-1 flex">
          {/* 上 左 */}
          <div className="flex-1">
            <SearchIpt onSearch={handleSearch} />
            {/* 图表 24h */}
            <div className="tb1 flex">
              <div className="font-size-14px flex justify-center items-center w-35%">
                <div>
                  <div>24h TXN Volume Growth</div>
                  <div className="mt-20px font-size-20px">+0.0000%</div>
                </div>
              </div>
              <div className="w-65%">
                <VolumeChart />
              </div>
            </div>
          </div>
        </div>
        {/* 上 右 */}
        <div className="flex flex-1">
          {/* 上 右 左 */}
          <div className="data-box flex flex-col gap-10px">
            <div className="data-card">
              <div className="flex flex-col h-100% justify-between">
                <div className="font-size-16px">Total Transaction Volumn</div>
                <div className="font-size-24px">12.08 KERB</div>
              </div>
            </div>
            <div className="data-card">
              <div className="flex flex-col h-100% justify-between">
                <div className="font-size-16px">Total Transactions</div>
                <div className="font-size-24px">17</div>
              </div>
            </div>
          </div>
          {/* 上 右 右 饼图 */}
          <div className="tb2 flex flex-col justify-between flex-1 border-white border-1px border-solid">
            <div className="font-size-14px h-10vh flex justify-center items-center">TRANSACTIONS BY TYPE</div>
            <div className="bingtu h-20vh flex justify-center">
              <TransitionChart></TransitionChart>
            </div>
          </div>
        </div>
      </div>
      <div className="table-box flex-1 ml-20px min-h-38vh">
        <div className="flex justify-between px-10px pt-10px pb-14px">
          <div className="font-size-16px uppercase">Transct Informations</div>
          <div>
            <PageNation total={180} page={1} pageSize={10} />
          </div>
        </div>
        <div className="flex min-h-60vh">
        <Table columns={columns} dataSources={[]} />
        </div>
      </div>
    </div>
  );
}
