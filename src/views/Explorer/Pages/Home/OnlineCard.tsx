import './OnlineCard.scss'
export interface OnlineCardProps {
    label: string
    value: string | number
}
export default function OnlineCard(props: OnlineCardProps) {
  return (
    <div className='online-card flex justify-center items-center'>
        <div>
        <div className='text-center'>{props.label}</div>
        <div className='text-center'>{props.value}</div>
        </div>
    </div>
  )
}
