import{r as c,j as s}from"./react-CBAF3Uyv.js";import{u as b,b as m,p as w,q as F,t as p,B as T,C as k}from"./index-xAoclQb_.js";import{J as C}from"./react18-json-view-ChA-gM5r.js";import{C as n}from"./Copy-B5HtD5a_.js";import{f as y}from"./react-router-Cg2BjMzq.js";import{a as A,f as x}from"./ethers-BstvhKrt.js";import"./call-bind-CXEXM7Og.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-B7YY3Jzv.js";import"./define-data-property-CU6ZIYlb.js";import"./es-define-property-BlwJlMsL.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-fNsJIl-I.js";import"./react-dom-CAO6cgV8.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-COMZ-ied.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-CwRJ-DD5.js";import"./use-sync-external-store-D2Dpb26n.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./moment-CbGOrKEH.js";import"./antd-eRRje2Ho.js";import"./@ant-design-BhbmE8ll.js";import"./rc-util-BP4h4mt2.js";import"./@babel-DVGmkmWW.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CKeVMnuN.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-DRkAdlsj.js";import"./rc-motion-DxZvkECQ.js";import"./rc-tooltip-R1AhgAbI.js";import"./@rc-component-C_NO3vzf.js";import"./rc-overflow-CQFp6Klr.js";import"./rc-menu-ChuIwD84.js";import"./rc-select-BHEmQ8mv.js";import"./rc-virtual-list-BZYwoG_O.js";import"./rc-field-form-Bcdl2DBL.js";import"./rc-dialog-1J_M1aSn.js";import"./rc-notification-CWMsTWjb.js";import"./rc-table-C95vKcHA.js";import"./rc-tree-DN3K87pb.js";import"./rc-checkbox-CkQQ1GOt.js";import"./rc-pagination-DCWIXoQN.js";import"./rc-picker-BA1LYPcQ.js";import"./rc-dropdown-BucgODLR.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-MkKoHOyq.js";import"./rc-textarea-DWAZ4Vwp.js";import"./react-transition-group-Brw6IWwr.js";import"./dom-helpers-D0mFdbeO.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-Kd1d3tEm.js";import"./define-properties-B83jVO4R.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-Bi3ojizx.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-zd_hqtaf.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./react-copy-to-clipboard-DdKSRBY3.js";import"./copy-to-clipboard-D4KqLzmm.js";import"./toggle-selection-BHUZwh74.js";function Qe(){const r=y(),{toAccountDetail:a,toBlockDetail:h}=b(),[t,d]=c.useState([{label:"Log(0)",value:1,select:!0},{label:"Input Data",value:2,select:!1}]),v=i=>{const l=t.map(o=>o);l.forEach(o=>{o.value===i.value?o.select=!0:o.select=!1}),d(l)},N=c.useMemo(()=>{const i=t.find(l=>l.select);return i==null?void 0:i.value},[t]),[e,f]=c.useState(),[j,u]=c.useState([]),g=()=>{const i=r.txhash;i&&(T(i).then(l=>f(l)),k(i).then(l=>u(l)))};return c.useEffect(()=>{g()},[r]),s.jsxs("div",{className:"tx-detail justify-start lg:flex-row lg:h-72vh text-left",children:[s.jsxs("div",{className:"lg:h-38vh bg-box w-100% mt-14px lg:mt-0",children:[s.jsx("div",{className:"font-size-16px line h-6vh flex items-center",children:"Transaction Details"}),s.jsxs("div",{className:"font-size-14px flex items-center line",children:[s.jsx("span",{className:" color-#8AA4FF",children:m(r.txhash||"",10,10)}),s.jsx(n,{className:"ml-4px",text:r.txhash})]}),s.jsx("div",{className:"font-size-12px line",children:(e==null?void 0:e.status)===1?s.jsx("span",{className:"success color-#9effcc bg-#3B4C43 rounded-4px px-6px",children:"Success"}):s.jsx("span",{className:"failed #FE4FA7  rounded-4px px-6px\r\n          bg-#4C293A",children:"Failed"})}),s.jsxs("div",{className:"font-size-12px",children:[s.jsxs("div",{className:" flex flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Transaction Block"}),s.jsx("div",{className:"line-c line",onClick:()=>h((e==null?void 0:e.blockNumber)||""),children:e==null?void 0:e.blockNumber}),s.jsx("div",{className:"line-c line",children:"TXN Hash"}),s.jsxs("div",{className:"line-c line",children:[m(r.txhash||"",6,6),s.jsx(n,{className:"ml-4px",text:r.txhash})]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Timestamp"}),s.jsx("div",{className:"line-c line",children:w((e==null?void 0:e.timestamp)||0)}),s.jsx("div",{className:"line-c line",children:"From"}),s.jsxs("div",{className:"line-c line",children:[s.jsx("span",{className:"hover:color-#8AA4FF cursor-pointer",onClick:()=>a(e==null?void 0:e.from),children:m((e==null?void 0:e.from)||"",6,6)}),s.jsx(n,{className:"ml-4px",text:e==null?void 0:e.from})]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Gas Price"}),s.jsxs("div",{className:"line-c line",children:[A((e==null?void 0:e.gasPrice)||0,"gwei")," Gwei"]}),s.jsx("div",{className:"line-c line",children:"Receiver"}),s.jsxs("div",{className:"line-c line",children:[s.jsx("span",{className:"hover:color-#8AA4FF cursor-pointer",onClick:()=>e!=null&&e.to?a(e==null?void 0:e.to):"",children:m((e==null?void 0:e.to)||"",6,6)}),e!=null&&e.to?s.jsx(n,{className:"ml-4px",text:e==null?void 0:e.to}):s.jsx(s.Fragment,{})]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"TXN Type"}),s.jsx("div",{className:"line-c line",children:F((e==null?void 0:e.input)||"")}),s.jsx("div",{className:"line-c line",children:"TXN Fee"}),s.jsxs("div",{className:"line-c line",children:["≈",e?p(x(e.gasPrice*e.gasUsed),6):0," ","ERB"]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Volume"}),s.jsxs("div",{className:"line-c line",children:[x((e==null?void 0:e.value)||0)," ERB"]}),s.jsx("div",{className:"line-c line",children:"Gas Used"}),s.jsxs("div",{className:"line-c line",children:[e!=null&&e.gasUsed?p(e==null?void 0:e.gasUsed,5):0," gas"]})]})]})]}),s.jsx("div",{className:"flex text-center gap-14px mt-2vh",children:t.map(i=>s.jsx("div",{onClick:()=>v(i),className:"lh-5vh border-1px border-solid  lg:w-256px cursor-pointer menu-item px-10px ".concat(i.select?"select":"color-white"),children:i.label},i.value))}),s.jsxs("div",{className:"lg:h-25vh bg-box mt-2vh",children:[s.jsx("div",{className:"line color-gray font-size-12px lg:font-size-14px",children:"Transaction Ledger Transaction Receipt Event Logs"}),s.jsx("div",{className:"px-16px",children:N===1?s.jsx("div",{className:"lg:h-20vh overflow-y-scroll scrollbar-y",children:s.jsx(C,{className:"w-100%",enableClipboard:!1,src:j})}):s.jsx("div",{className:"break-words break-all py-14px lg:h-20vh overflow-y-scroll scrollbar-y",children:e==null?void 0:e.input})})]})]})}export{Qe as default};
