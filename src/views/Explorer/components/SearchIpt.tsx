import { KeyboardEvent, useRef, useState } from "react";
import "./SearchIpt.scss";
import { message } from "antd";
import useRouter from "../../../hooks/useRouter";
export interface SearchIptProps {
  className?: string;
}
export default function SearchIpt(props: SearchIptProps) {
  const [focus, setFocus] = useState(false);
  const searchVal = useRef("");
  const [messageApi, messageContext] = message.useMessage();
  const { toAccountDetail, toTxDetail, toBlockDetail } = useRouter();
  const handleSearch = () => {
    const val = searchVal.current;
    if (val) {
      if (
        !val.startsWith("0x") &&
        !val.startsWith("0X") &&
        !isNaN(Number(val)) &&
        Number(val) > -1 &&
        typeof Number(val) === "number"
      ) {
        toBlockDetail(val);
      } else if (
        (val.startsWith("0x") || val.startsWith("0X")) &&
        val.length == 42
      ) {
        toAccountDetail(val);
      } else if (
        (val.startsWith("0x") || val.startsWith("0X")) &&
        val.length == 66
      ) {
        toTxDetail(val);
      } else {
        messageApi.open({
          type: "warning",
          content: "Didn't find what you were looking for",
        });
      }
    } else {
      messageApi.open({
        type: "warning",
        content: "The query string cannot be empty",
      });
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div
      className={`search-box flex ${focus ? "focus" : ""} ${props.className}`}
    >
      {messageContext}
      <input
        className={`font-size-12px lg:font-size-16px color-white`}
        placeholder="Search by Address/ Txn Hash/ Block"
        onChange={(e) => (searchVal.current = e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={handleKeyDown}
      />
      <i
        className="i-mingcute-search-line font-size-26px cursor-pointer color-#9A98B9 hover:color-#8C2DDA"
        onClick={handleSearch}
      ></i>
    </div>
  );
}
