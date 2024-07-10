import { useEffect, useMemo, useState } from "react";
import "./TxDetail.scss";
import {
  get_transaction_Hash,
  get_transaction_logs,
  GetTransactionByHashResponse,
  GetTransactionLogsResponse,
} from "../../../../api/modules/explorer";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { useParams } from "react-router-dom";
import { addressDots, formatDate } from "../../../../utils/common";
import { formatEther, formatUnits } from "ethers";
import { toFixed, txInputToType } from "../../../../utils/utils";
import useRouter from "../../../../hooks/useRouter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { message } from "antd";

type MenuItem = {
  label: string;
  value: number;
  select: boolean;
};
export default function TxDetail() {
  const [messageApi, messageContext] = message.useMessage();
  const params = useParams<{ txhash: string }>();
  const { toAccountDetail, toBlockDetail } = useRouter();
  const [menus, setMenus] = useState<Array<MenuItem>>([
    {
      label: "Log(0)",
      value: 1,
      select: true,
    },
    {
      label: "Input Data",
      value: 2,
      select: false,
    },
  ]);

  const handleMenuClick = (v: MenuItem) => {
    const list = menus.map((item) => item);
    list.forEach((c) => {
      if (c.value === v.value) {
        c.select = true;
      } else {
        c.select = false;
      }
    });
    setMenus(list);
  };

  const currentMenu = useMemo(() => {
    const v = menus.find((item) => item.select);
    return v?.value;
  }, [menus]);
  // const [erbieData, setErbieData] =
  //   useState<GetTransactionErbieByHashResponse>();
  const [data, setData] = useState<GetTransactionByHashResponse>();
  const [logs, setLogs] = useState<GetTransactionLogsResponse>([]);
  const handleGetData = () => {
    const hash = params.txhash;
    if (hash) {
      get_transaction_Hash(hash).then((data) => setData(data));
      // get_transaction_erbie_Hash(hash).then((eData) => setErbieData(eData));
      get_transaction_logs(hash).then((list) => setLogs(list));
    }
  };
  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  return (
    <div className="tx-detail justify-start lg:flex-row lg:h-72vh text-left">
      {messageContext}
      <div className="lg:h-38vh bg-box w-100%">
        <div className="font-size-16px line h-6vh flex items-center">
          Transaction Details
        </div>
        <div className="font-size-14px flex items-center color-#8AA4FF line">
          {addressDots(params.txhash || "", 10, 10)}
          <CopyToClipboard
            text={params.txhash as string}
            onCopy={() =>
              messageApi.open({
                content: "Copied to clipboard",
                type: "success",
              })
            }
          >
            <i className="i-material-symbols-content-copy-outline-rounded color-#D387FF ml-8px cursor-pointer"></i>
          </CopyToClipboard>
        </div>
        <div className="font-size-12px line">
          {data?.status === 1 ? (
            <span className="success color-#9effcc bg-#3B4C43 rounded-4px px-6px">
              Success
            </span>
          ) : (
            <span
              className="failed #FE4FA7  rounded-4px px-6px
          bg-#4C293A"
            >
              Failed
            </span>
          )}
        </div>
        <div className="font-size-12px">
          <div className="line flex flex-wrap">
            <div className="line-c">Transaction Block</div>
            <div
              className="line-c"
              onClick={() => toBlockDetail(data?.blockNumber || "")}
            >
              {data?.blockNumber}
            </div>
            <div className="line-c">TXN Hash</div>
            <div className="line-c">
              {addressDots("0x833e501a98.698729fff0f7a701", 6, 6)}
              <CopyToClipboard
                text={params.txhash as string}
                onCopy={() =>
                  messageApi.open({
                    content: "Copied to clipboard",
                    type: "success",
                  })
                }
              >
                <i className="i-material-symbols-content-copy-outline-rounded color-#D387FF ml-4px font-size-16px  cursor-pointer"></i>
              </CopyToClipboard>
            </div>
          </div>
          <div className="line flex  flex-wrap">
            <div className="line-c">Timestamp</div>
            <div className="line-c">{formatDate(data?.timestamp || 0)}</div>
            <div className="line-c">From</div>
            <div className="line-c">
              <span
                className="hover:color-#8AA4FF cursor-pointer"
                onClick={() => toAccountDetail(data?.from as string)}
              >
                {addressDots(data?.from || "", 6, 6)}
              </span>
              <CopyToClipboard
                text={data?.from as string}
                onCopy={() =>
                  messageApi.open({
                    content: "Copied to clipboard",
                    type: "success",
                  })
                }
              >
                <i className="i-material-symbols-content-copy-outline-rounded color-#D387FF ml-4px font-size-16px  cursor-pointer"></i>
              </CopyToClipboard>
            </div>
          </div>
          <div className="line flex  flex-wrap">
            <div className="line-c">Gas Price</div>
            <div className="line-c">
              {formatUnits(data?.gasPrice || 0, "gwei")} Gwei
            </div>
            <div className="line-c">Receiver</div>
            <div className="line-c">
              <span
                className="hover:color-#8AA4FF cursor-pointer"
                onClick={() =>
                  data?.to ? toAccountDetail(data?.to as string) : ""
                }
              >
                {addressDots(data?.to || "", 6, 6)}
              </span>
              {data?.to ? (
                <CopyToClipboard
                  text={data?.to as string}
                  onCopy={() =>
                    messageApi.open({
                      content: "Copied to clipboard",
                      type: "success",
                    })
                  }
                >
                  <i className="i-material-symbols-content-copy-outline-rounded color-#D387FF ml-4px  font-size-16px cursor-pointer"></i>
                </CopyToClipboard>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="line flex  flex-wrap">
            <div className="line-c">TXN Type</div>
            <div className="line-c">{txInputToType(data?.input || "")}</div>
            <div className="line-c">TXN Fee</div>
            <div className="line-c">
              ≈
              {data ? toFixed(formatEther(data.gasPrice * data.gasUsed), 6) : 0}{" "}
              ERB
            </div>
          </div>
          <div className="line flex  flex-wrap">
            <div className="line-c">Volume</div>
            <div className="line-c">{formatEther(data?.value || 0)} ERB</div>
            <div className="line-c">Gas Used</div>
            <div className="line-c">{data?.gasUsed} gas</div>
          </div>
        </div>
      </div>
      <div className="flex text-center gap-14px mt-2vh">
        {menus.map((item) => (
          <div
            onClick={() => handleMenuClick(item)}
            className={`lh-5vh border-1px border-solid  lg:w-256px cursor-pointer menu-item px-10px ${
              item.select ? "select" : "color-white border-#eee"
            }`}
            key={item.value}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="lg:h-25vh bg-box mt-2vh">
        <div className="line color-gray font-size-12px lg:font-size-14px">
          Transaction Ledger Transaction Receipt Event Logs
        </div>
        <div className="px-16px">
          {currentMenu === 1 ? (
            <div className="lg:h-20vh overflow-y-scroll scrollbar-y">
              <JsonView
                className="w-100%"
                enableClipboard={false}
                src={logs}
              ></JsonView>
            </div>
          ) : (
            <div className="break-words break-all py-14px lg:h-20vh overflow-y-scroll scrollbar-y">
              {data?.input}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
