import PageNation from "../../../../components/PageNation";
import Table from "../../../../components/Table";
import SearchIpt from "../../components/SearchIpt";
import "./Validator.scss";
export default function Validator() {
  const handleSearch = () => {};
  const columns = [
    {
      title: "Validator",
      key: "Height",
    },
    {
      title: "Type",
      key: "Proposer",
    },

    {
      title: "Total Rewards（ERB）",
      key: "Height",
    },
    {
      title: "Time",
      key: "Proposer",
    },
    {
      title: "Latest Active",
      key: "Height",
    },
    {
      title: "Online Weight",
      key: "Height",
    },
    {
      title: "Reputation Score",
      key: "Height",
    },

  ];
  return (
    <div className="page-validator flex flex-col flex-col-reverse lg:flex-row">
      <div className="flex-1 h-100%">
        <div className="flex flex-col lg:flex-row mt-20px lg:mt-0">
          <div className="w-35% flex gap-12px">
            <div className="flex-1 data-card">Validator Data</div>
            <div className="flex-1 data-card">Staker Data</div>
          </div>
          <div className="w-100% lg:w-65% mt-20px lg:mt-0">
            <SearchIpt className="lg:ml-12px" onSearch={handleSearch} />
          </div>
        </div>
        <div className="h-63.8vh mt-12px">
          <div className="table-box h-100%">
            <div className="flex flex-col lg:flex-row justify-between px-10px pt-10px pb-14px">
              <div>VALIDATOR INFORMATION</div>
              <div>
                <PageNation page={1} pageSize={10} total={125} />
              </div>
            </div>
            <div className="flex h-90%">
              <Table columns={columns} dataSources={[]} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-100% lg:w-250px flex flex-wrap gap-22px lg:gap-10px ml-0 lg:ml-22px flex-row lg:flex-col mt-20px lg:mt-0">
        <div className="data-panel">
          <div>
            <div className="tit">Validator Number</div>
            <div className="val">8005000</div>
          </div>
        </div>
        <div className="data-panel">
          <div>
            <div className="tit">Staker of Validator</div>
            <div className="val">8005000</div>
          </div>
        </div>
        <div className="data-panel">
          <div>
            <div className="tit">Staker Number</div>
            <div className="val">8005000</div>
          </div>
        </div>
        <div className="data-panel">
          <div>
            <div className="tit">Staker of Staker</div>
            <div className="val">8005000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
