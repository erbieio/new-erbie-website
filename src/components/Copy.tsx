import { Tooltip } from "antd";
import { ReactNode, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Copy = (props: {
  text: string;
  children?: ReactNode;
    message?: ReactNode;
  className?: string
}) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopy = () => {
    if (copySuccess) {
      return;
    }
    setCopySuccess(true);
    const t = setTimeout(() => {
      setCopySuccess(false);
      clearTimeout(t);
    }, 2000);
  };
  return (
    <CopyToClipboard text={props.text} onCopy={handleCopy}>
      <Tooltip
        color={"#0D0316"}
        title={
          props.message ? (
            props.message
          ) : (
            <span className="color-white font-bold font-size-12px">
              Copied to clipboard
            </span>
          )
        }
        open={copySuccess}
      >
        {props.children ? (
          props.children
        ) : (
          <i
            className={`${
              copySuccess
                ? "i-ep-success-filled color-#DC91E5"
                : "i-material-symbols-content-copy-outline"
            } font-size-16px cursor-pointer ${props.className}`}
          ></i>
        )}
      </Tooltip>
    </CopyToClipboard>
  );
};

export default Copy;
