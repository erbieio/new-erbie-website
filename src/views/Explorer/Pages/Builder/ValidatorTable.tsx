import { Table, type TableProps, type TableColumnsType } from 'antd';
import './ValidatorTable.scss'
import { GetValidatorListItem } from '../../../../api/modules/explorer';
import { formatEther } from 'ethers';
import { addressDots, formatDate } from '../../../../utils/common';
interface ValidatorTableProps {
  dataSource: Array<GetValidatorListItem>
  sorter: (order: string) => void

}
type SorterResult<T> = {  
  field: keyof T;  
  order: 'ascend' | 'descend';  
  columnKey?: React.Key;
  column: TableColumnsType<unknown>
};  
export default function ValidatorTable(props: ValidatorTableProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onChange: TableProps<GetValidatorListItem>['onChange'] = (pagination, filters, sorter: SorterResult<GetValidatorListItem>) => {
    if(sorter.order) {
      if(sorter.order === "ascend") {
        props.sorter(`${sorter.columnKey} ASC`)
      } else if(sorter.order === "descend") {
        props.sorter(`${sorter.columnKey} DESC`)
      }
    } else {
      props.sorter('')
    }
  };
  const columns: TableColumnsType<GetValidatorListItem> = [
    {
      title: "Validator",
      align: 'center',
      render(v){
        return <div className='link hover:color-#1677ff'>{addressDots(v.address)}</div>
      }
    },

    {
      title: "Total Staking",
      align: 'center',
      key:"amount",
      // sortOrder: sortedInfo.columnKey === 'amount' ? sortedInfo.order : null,
      sorter: {
        multiple: undefined,
      },
      render(v){
        return formatEther(v.amount)
      }
    },
    {
      title: "Total Rewards (ERB)",
      align: 'center',
      key:"reward",
      sorter: {
        multiple: undefined,
      },
      render(v){
        return formatEther(v.reward)
      }
    },
    {
      title: "Time",
      align: 'center',
      key:"timestamp",
      sorter: {
        multiple: undefined,
      },
      render(v){
        return formatDate(v.timestamp)
      }
    },
    {
      title: "Latest Active",
      align: 'center',
      key:"block_number",
      sorter: {
        multiple: undefined,
      },
      render(v){
        return <div className='link hover:color-#1677ff'>{v.block_number}</div>
      }
    },
    {
      title: "Online Weight",
      dataIndex: "weight",
      key:"weight",
      sorter: {
        multiple: undefined,
      },
      align: 'center'
    },
    {
      title: "Reputation Score",
      dataIndex: "score",
      key:"score",
      sorter: {
        multiple: undefined,
      },
      align: 'center'
    },

  ];
  return (
    <div className='w-100% validator-table'>
      <Table columns={columns} dataSource={props.dataSource} pagination={false} onChange={onChange}></Table>
    </div>
  )
}
