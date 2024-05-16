import PageNation from "../../../../components/PageNation";
import Table from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import "./Chain.scss";
export default function Chain() {
  const handleSearch = (v: string) => {
    console.log("search", v);
  };

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
    <div className="page-chain flex flex-col flex-col-reverse lg:flex-row">
      {/* <i className="i-svg-spinners-pulse-rings-multiple font-size-80px color-#1677ff mr-4px"></i> */}
      <div className="chain-header flex-1 mt-20px lg:mt-0 w-100%">
        <div className="flex flex-col lg:flex-row w-100% lg:h-48px">
        <div className="flex-1 flex gap-10px">
          <div className="chain-btn white-space">Blocks</div>
          <div className="chain-btn white-space">Blackhole Blocks</div>
          <div className="chain-btn white-space">Penalty Blocks</div>
        </div>
        <div className="flex-1 lg:ml-26px pt-20px lg:pt-0">
          <SearchIpt onSearch={handleSearch} className="font-size-14px" />
        </div>
        </div>
        {/* 左下 */}
        <div className="lg:h-63.5vh">
          <div className="table-list mt-14px flex-1 h-100%">
            <div className="flex flex-col lg:flex-row justify-between p-10px">
              <div className="font-size-12px lg:font-size-16px">CHAIN INFORMATION</div>
              <PageNation page={1} pageSize={10} total={135} />
            </div>
            <div className="flex h-90%">
            <Table columns={columns} dataSources={[]}></Table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20px lg:mt-0 w-100% lg:w-250px lg:ml-22px flex justify-between flex-row lg:flex-col">
        <div className="total-card flex justify-center items-center">
          <div>
            <div className="font-size-12px lg:font-size-16px">Block Height</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">80005000</div>
          </div>
        </div>
        <div className="total-card flex justify-center items-center">
          <div>
            <div className="font-size-12px lg:font-size-16px">Total ERB Rewards</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">49000455</div>
          </div>
        </div>
        <div className="total-card flex justify-center items-center">
          <div>
            <div className="font-size-12px lg:font-size-16px">Total CSBT</div>
            <div className="font-size-16px lg:font-size-24px mt-16px">239009</div>
          </div>
        </div>
      </div>
    </div>
  );
}
