import { useNavigate } from "react-router-dom";
import { PAGE_LIST } from "../const";
import { useDispatch } from "react-redux";
import { setAnimate } from "../store/pageAnimateSlice";

export default function useRouter() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const to = (path: string) => {
    const r = PAGE_LIST.find((item) => item.path === path);
    if (r) {
      // animate
    } else {
      // no animate
      dispatch(setAnimate(""));
    }
    const t = setTimeout(() => {
      navigator(path);
      clearTimeout(t);
    });
  };
  const toAccountDetail = (address: string) => {
    to(`/explorer/accountDetail/${address}`);
  };
  const toBlockDetail = (block: number | string) => {
    to(`/explorer/blockDetail/${block}`);
  };
  const toTxDetail = (hash: string) => {
    to(`/explorer/txDetail/${hash}`);
  };
  return {
    to,
    toAccountDetail,
    toBlockDetail,
    toTxDetail,
  };
}
