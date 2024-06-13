import './HomeCard.scss'
export interface HomeCardProps {
    label: string
    value: string | number
}

export default function HomeCard(props: HomeCardProps) {
  return (
    <div className=' py-2vh text-center home-card w-33.3% h-80px lg:h-12vh flex flex-col justify-between'>
      <div  className='font-size-13px font-bold lg:font-400 lg:font-size-15px color-#8B5EAD lg:color-white'>{props.label}</div>
      <div className='font-size-16px lg:font-size-24px'>{props.value}</div>
    </div>
  )
}
