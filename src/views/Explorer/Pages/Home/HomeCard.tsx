import './HomeCard.scss'
export interface HomeCardProps {
    label: string
    value: string | number
}

export default function HomeCard(props: HomeCardProps) {
  return (
    <div className=' py-2vh text-center home-card w-33.3% h-104px lg:h-12vh flex flex-col justify-between'>
      <div  className='font-size-15px color-#8B5EAD lg:color-white'>{props.label}</div>
      <div className='font-size-24px'>{props.value}</div>
    </div>
  )
}
