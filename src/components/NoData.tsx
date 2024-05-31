import empty from '../assets/empty.svg'
import './NoData.scss'
export interface NoDataProps {
    text?: string
    icon?: string
}
export default function NoData(props: NoDataProps) {
  return (
    <div className='no-data w-100%  py-20px'>
        <div className='flex justify-center items-center'>
            {
                props.icon ? <i className={`font-size-40 ${props.icon}`}></i> : <img className='empty-img w-90px' src={empty} alt="" />
            }
        </div>
        <div className='text-center mt-10px font-size-14px color-#80838E'>{props.text || 'No Data'}</div>
    </div>
  )
}
