import './Card.scss'
export default function TXNCard() {
  return (
    <div className="card-box h-100% flex flex-col justify-evenly">
      <div>
      <div className='color-#D387FF font-size-16px font-bold text-left px-16px'>Account Detail</div>
      <div className='link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between'><span>0x20d95a2...93be529ae71c847362c771e</span>  <i className='i-ep-copy-document color-white font-size-18px'></i></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>ERB Balance</div>
        <div>0.00 ERB</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>Total Staking</div>
        <div>0</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>Total Staked</div>
        <div>0</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>Online Weight</div>
        <div>non-validator</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>ERB Income</div>
        <div>0</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>TXN</div>
        <div>0</div>
      </div>
      <div className='line'></div>
      </div>


     <div>
     <div className='color-#D387FF font-size-16px font-bold'>Other Information</div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>Owned CSBT</div>
        <div>0</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>Royalty profits</div>
        <div>0.00 ERB</div>
      </div>
      <div className='line'></div>
      <div className='flex justify-between items-center px-16px text-line'>
        <div>Owned NFTs</div>
        <div>0</div>
      </div>
      <div className='line'></div>
     </div>

    </div>
  )
}
