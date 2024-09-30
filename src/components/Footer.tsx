import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAnimate } from "../store/pageAnimateSlice";

export default function Footer() {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleTo = (path: string) => {
    dispatch(setAnimate(""));
    const t = setTimeout(() => {
      navigator(path);
      clearTimeout(t);
    }, 300);
  };
  return (
    <div className="flex footer px-16px lg:px-40px py-24px lg:h-9vh lg:py-0 font-size-12px font-bold items-center  border-t-width-1px border-t-style-solid border-t-color-#2A1F32">
      <div className="flex-col lg:flex-row flex justify-between flex-1">
        <div className="text-left">Copyright © 2024 - Erbie</div>
        <div className="flex mt-16px lg:mt-0">
          <div>
            <span
              className="link color-#7B779B "
              onClick={() => handleTo("/PrivacyPolicy")}
            >
              Privacy Policy
            </span>
          </div>
          <div className="ml-24px lg:ml-40px">
            <span
              className="link color-#7B779B "
              onClick={() => handleTo("/TermsOfUse")}
            >
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
