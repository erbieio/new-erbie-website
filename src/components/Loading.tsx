import { useEffect, useState } from "react"

export default function Loading() {
    const [dots, setDots] = useState('.')

    const t = setInterval(() => {
        const len = dots.length;
        if(len === 1) {
            setDots('..')
        } if(len === 3) {
            setDots('.')
        } else {
            setDots(dots + '.')
        }
    }, 1000)
    useEffect(() => {
     return () => {
        clearInterval(t)
     }   
    })
    return (
      <div className='w-100% h-100% flex justify-center items-center'>
          <div className="flex items-center">
            {/* <i className='i-svg-spinners-ring-resize font-size-40px color-#1677ff mr-4px'></i> */}
            <i className="i-svg-spinners-pulse-multiple font-size-60px color-#1677ff mr-4px"></i>
            Loading{dots}
          </div>
      </div>
    )
  }
  