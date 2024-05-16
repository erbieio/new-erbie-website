import PageNation from "../../../../components/PageNation";
import Table from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import "./Csbt.scss";
export default function Csbt() {
  const handleSearch = () => {

  }
  const columns = [
    {
      title: "Name",
      key: "Height",
    },
    {
      title: "Number",
      key: "Proposer",
    },
    {
      title: "Creation Time",
      key: "Proposer",
    },
    {
      title: "Owner",
      key: "Height",
    },
    {
      title: "Owner Get Time",
      key: "Height",
    },
  ];
  return (
    <div className="page-csbt">
      <div className="flex">
        <div className="flex-1">
          <div><SearchIpt onSearch={handleSearch} /></div>
          <div className="table-box h-65vh mt-2vh">
            <div className="px-10px pt-10px pb-14px">
              <div className="flex justify-between">
                <div>CHAINLAYER SBT</div>
                <PageNation total={58} pageSize={10} page={1} ></PageNation>
              </div>
              </div>
              <div className="h-90% flex">
              <Table columns={columns} dataSources={[]} />
              </div>
          </div>
        </div>
        <div className="w-250px ml-22px flex flex-col gap-2vh">
          <div className="data-panel">
            <div>
              <div className="tit">Mined CSBT Number</div>
              <div className="val">8005000</div>
            </div>
          </div>
          <div className="data-panel">
            <div>
              <div className="tit">Minted Personal CSBT</div>
              <div className="val">8005000</div>
            </div>
          </div>
          <div className="data-panel">
            <div>
              <div className="tit">Minted Group CSBT</div>
              <div className="val">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
