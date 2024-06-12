import './Card.scss'
export default function BlockDetailCard() {
  return (
    <div className='font-size-12px color-white card-detail-box'>
        <div className=' color-#D387FF lh-4.5vh font-bold  text-left px-16px'>Block Details # 128088</div>
        <div className='flex justify-between items-center line lh-3vh'>
            <div>Block Generation Time</div>
            <div>5 Min Age</div>
        </div>
        <div className='flex justify-between items-center line lh-3vh'>
            <div>Block Size</div>
            <div>2011 Bytes</div>
        </div>
        <div className='flex justify-between items-center line lh-3vh'>
            <div>Gas Used</div>
            <div>0(0%)</div>
        </div>
        <div className='flex justify-between items-center line lh-3vh'>
            <div>Gas Price</div>
            <div>0 Wei</div>
        </div>
        <div className='flex justify-between items-center line lh-3vh'>
            <div>Gas Limit</div>
            <div>8000000</div>
        </div>
        <div className='flex justify-between items-center line lh-3vh'>
            <div>Parent Hash</div>
            <div>0x...95a271f3f3998e</div>
        </div>
    </div>
  )
}
