import { KeyboardEvent, useState } from "react";
import search from "../../../assets/search.svg";
import './SearchIpt.scss';
export interface SearchIptProps {
    onSearch: (v: string) => void
    className?: string
}
export default function SearchIpt(props: SearchIptProps) {
  const [focus, setFocus] = useState(false)
  const [val, setVal] = useState('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      props.onSearch(val)
    }
  }
  return (
    <div>
      <div className={`search-box flex ${focus ? "focus" : ""} ${props.className}`}>
        <input
          className={`font-size-12px lg:font-size-16px color-white`}
          placeholder="Search by Address/ Txn Hash/ Block"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onKeyDown={handleKeyDown}
        />
        <img src={search} className="w-24px h-24px cursor-pointer" onClick={() => props.onSearch(val)} alt="" />
      </div>
    </div>
  );
}
