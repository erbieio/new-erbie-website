import { useEffect, useRef, useState } from "react";

import SearchIpt from "../../components/SearchIpt";
import "./Account.scss";
import GrowChart from "./GrowChart";
import { GetAccountPageListItem, GetAccountPageOrder, GetAccountPageParams, GetAccountPageResponse, GetStatsResponse, get_account_page, get_stats, get_24h_accounts, Get24hTxsResponse } from '../../../../api/modules/explorer';
import { Pagination, Table, TableColumnsType, TableProps } from 'antd';
import { addressDots } from "../../../../utils/common";
import { formatEther } from "ethers";
import { SorterResult } from "../../../../api/api";
export default function Account() {
  const columns: TableColumnsType<GetAccountPageListItem> = [
    {
      title: "Address",
      key:"address",
      align: 'center',
      render(v){
        return <div className='link hover:color-#1677ff'>{ addressDots(v.address, 6 ,6) }</div>
      }
    },
    {
      title: "Balance（ERB）",
      key: "balance",
      defaultSortOrder: 'descend',
      align: 'center',
      sortDirections: ['ascend', 'descend'],
      sorter: {
        multiple: undefined,
      },
      render(v){
        return formatEther(v.balance)
      }
    },
    {
      title: "Total Staking",
      align: 'center',
      key:'staker_amount',
      sortDirections: ['ascend', 'descend'],
      sorter: {
        multiple: undefined,
      },
      render(v){
        return formatEther(v?.stakerAmount || '0')
      }
    },
    {
      title: "Total Staked",
      align: 'center',
      key:'validator_amount',
      sortDirections: ['ascend', 'descend'],
      sorter: {
        multiple: undefined,
      },
      render(v){
        return formatEther(v?.validatorAmount || '0')
      }
    },
    {
      title: "Owned CSBT",
      dataIndex: "snftCount",
      sortDirections: ['ascend', 'descend'],
      align: 'center',
      key:'snft_count',
      sorter: {
        multiple: undefined,
      },
    },
  ];

  const [stats, setStats] = useState<GetStatsResponse>();
  // 获取统计数据
  const handleGetStats = async () => {
    const data = await get_stats();
    setStats(data);
  };
  const handleSearch = () => {};
  const [loading, setLoading] = useState(false);
  let getListOrder: GetAccountPageOrder = "balance DESC"
  const params = useRef<GetAccountPageParams>({
    page: 1,
    page_size: 11,
    order: ''
  })
  const [accountData, setAccountData] = useState<GetAccountPageResponse>()
  const handleGetList = async() => {
    try {
      setLoading(true)
      const data = await get_account_page({...params.current,order: getListOrder})
      setAccountData(data)
    } finally {
      setLoading(false)
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleChange: TableProps<GetAccountPageListItem>['onChange'] = (pagination, filters, sorter: SorterResult<GetAccountPageListItem>) => {
    if(sorter.order) {
      if(sorter.order === "ascend") {
        getListOrder = `${sorter.columnKey} ASC` as GetAccountPageOrder
      } else if(sorter.order === "descend") {
        getListOrder = `${sorter.columnKey} DESC` as GetAccountPageOrder
      }
    } else {
      getListOrder = 'balance DESC'
    }
    handleGetList()
  };


  // 24h addount chart
  const [accountChartData, setAccountChartData] = useState<Get24hTxsResponse>()
  const handleGetChart = async()=> {
    const data = await get_24h_accounts()
    setAccountChartData(data)
  }
  useEffect(() => {
    handleGetList()
    handleGetStats()
    handleGetChart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handlePageChange = (page: number) => {
    params.current.page = page
    handleGetList()
  }

  return (
    <div className="page-account">
      <div className="flex">
        <div className="flex-1">
          <div>
            <SearchIpt onSearch={handleSearch} />
          </div>
          <div className="table-box h-65vh mt-2vh">
            <div className="flex justify-between pt-10px px-10px pb-14px">
              <div className="uppercase font-size-16px">
                Account Informations
              </div>
              <Pagination total={accountData?.total} current={params.current.page} pageSize={params.current.page_size} onChange={handlePageChange} />
            </div>
            <div className="h-90% flex w-100%">
              <Table columns={columns} dataSource={accountData?.accounts} loading={loading} pagination={false} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="w-25vw ml-22px flex flex-col justify-between">
          <div className="data-card h-16vh">
            <div>
              <div className="font-size-16px">Total Coin Addresses</div>
              <div className="font-size-24px">{stats?.totalAccount}</div>
            </div>
          </div>
          <div className="data-card h-36vh">
            <div className="w-100%">
              <div className="font-size-14px">
                24h Account Growth <br />
                +0.00%{" "}
              </div>
              <div className="w-100%">
                <GrowChart data={accountChartData || []} />
              </div>
            </div>
          </div>
          <div className="data-card h-16vh">
            <div>
              <div className="font-size-16px">Total Active Addresses</div>
              <div className="font-size-24px">{stats?.activeAccount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
