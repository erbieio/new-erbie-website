import{r as c,j as s}from"./react-Dbae-1t-.js";import{u as b,b as m,w,x as F,t as p,H as T,I as k}from"./index-Ti_SyAvp.js";import{J as y}from"./react18-json-view-CjXsvSGL.js";import{C as n}from"./Copy-COGTfV1E.js";import{f as C}from"./react-router-d-_b1Iim.js";import{a as A,f as x}from"./ethers-BstvhKrt.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-B7T5vhQH.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DZNLuWiI.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./moment-CbGOrKEH.js";import"./antd-B1Bfy7T0.js";import"./@ant-design-DhuGsSLu.js";import"./rc-util-b8MotyWn.js";import"./@babel-DVGmkmWW.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-BT50-agu.js";import"./rc-motion-CPn7kFV_.js";import"./rc-tooltip-BTFSS5G-.js";import"./@rc-component-CkHcVsFC.js";import"./rc-overflow-D66kcHkR.js";import"./rc-menu-FgsZTwbW.js";import"./rc-select-Brpe2Itd.js";import"./rc-virtual-list-WFI9C2wp.js";import"./rc-field-form-b9ZynPVK.js";import"./rc-dialog-BmS-XQkh.js";import"./rc-notification-cP4c8BM8.js";import"./rc-table-B1BzEA06.js";import"./rc-tree-De_PNtof.js";import"./rc-checkbox-DsYJivWK.js";import"./rc-pagination-BlBRvBEP.js";import"./rc-picker-pQPBJH7o.js";import"./rc-dropdown-CnEtRwlx.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-BXdVvGXm.js";import"./rc-textarea-CoSCeEUD.js";import"./react-transition-group-Jg3vAkUA.js";import"./dom-helpers-D0mFdbeO.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./react-copy-to-clipboard-D2eCtbQ0.js";import"./copy-to-clipboard-D4KqLzmm.js";import"./toggle-selection-BHUZwh74.js";function Qe(){const r=C(),{toAccountDetail:a,toBlockDetail:h}=b(),[t,d]=c.useState([{label:"Log(0)",value:1,select:!0},{label:"Input Data",value:2,select:!1}]),v=i=>{const l=t.map(o=>o);l.forEach(o=>{o.value===i.value?o.select=!0:o.select=!1}),d(l)},N=c.useMemo(()=>{const i=t.find(l=>l.select);return i==null?void 0:i.value},[t]),[e,f]=c.useState(),[j,u]=c.useState([]),g=()=>{const i=r.txhash;i&&(T(i).then(l=>f(l)),k(i).then(l=>u(l)))};return c.useEffect(()=>{g()},[r]),s.jsxs("div",{className:"tx-detail justify-start lg:flex-row lg:h-72vh text-left",children:[s.jsxs("div",{className:"lg:h-38vh bg-box w-100% mt-14px lg:mt-0",children:[s.jsx("div",{className:"font-size-16px line h-6vh flex items-center",children:"Transaction Details"}),s.jsxs("div",{className:"font-size-14px flex items-center line",children:[s.jsx("span",{className:" color-#8AA4FF",children:m(r.txhash||"",10,10)}),s.jsx(n,{className:"ml-4px",text:r.txhash})]}),s.jsx("div",{className:"font-size-12px line",children:(e==null?void 0:e.status)===1?s.jsx("span",{className:"success color-#9effcc bg-#3B4C43 rounded-4px px-6px",children:"Success"}):s.jsx("span",{className:"failed #FE4FA7  rounded-4px px-6px\r\n          bg-#4C293A",children:"Failed"})}),s.jsxs("div",{className:"font-size-12px",children:[s.jsxs("div",{className:" flex flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Transaction Block"}),s.jsx("div",{className:"line-c line",onClick:()=>h((e==null?void 0:e.blockNumber)||""),children:e==null?void 0:e.blockNumber}),s.jsx("div",{className:"line-c line",children:"TXN Hash"}),s.jsxs("div",{className:"line-c line",children:[m(r.txhash||"",6,6),s.jsx(n,{className:"ml-4px",text:r.txhash})]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Timestamp"}),s.jsx("div",{className:"line-c line",children:w((e==null?void 0:e.timestamp)||0)}),s.jsx("div",{className:"line-c line",children:"From"}),s.jsxs("div",{className:"line-c line",children:[s.jsx("span",{className:"hover:color-#8AA4FF cursor-pointer",onClick:()=>a(e==null?void 0:e.from),children:m((e==null?void 0:e.from)||"",6,6)}),s.jsx(n,{className:"ml-4px",text:e==null?void 0:e.from})]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Gas Price"}),s.jsxs("div",{className:"line-c line",children:[A((e==null?void 0:e.gasPrice)||0,"gwei")," Gwei"]}),s.jsx("div",{className:"line-c line",children:"Receiver"}),s.jsxs("div",{className:"line-c line",children:[s.jsx("span",{className:"hover:color-#8AA4FF cursor-pointer",onClick:()=>e!=null&&e.to?a(e==null?void 0:e.to):"",children:m((e==null?void 0:e.to)||"",6,6)}),e!=null&&e.to?s.jsx(n,{className:"ml-4px",text:e==null?void 0:e.to}):s.jsx(s.Fragment,{})]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"TXN Type"}),s.jsx("div",{className:"line-c line",children:F((e==null?void 0:e.input)||"")}),s.jsx("div",{className:"line-c line",children:"TXN Fee"}),s.jsxs("div",{className:"line-c line",children:["≈",e?p(x(e.gasPrice*e.gasUsed),6):0," ","ERB"]})]}),s.jsxs("div",{className:" flex  flex-wrap",children:[s.jsx("div",{className:"line-c line",children:"Volume"}),s.jsxs("div",{className:"line-c line",children:[x((e==null?void 0:e.value)||0)," ERB"]}),s.jsx("div",{className:"line-c line",children:"Gas Used"}),s.jsxs("div",{className:"line-c line",children:[e!=null&&e.gasUsed?p(e==null?void 0:e.gasUsed,5):0," gas"]})]})]})]}),s.jsx("div",{className:"flex text-center gap-14px mt-2vh",children:t.map(i=>s.jsx("div",{onClick:()=>v(i),className:"lh-5vh border-1px border-solid  lg:w-256px cursor-pointer menu-item px-10px ".concat(i.select?"select":"color-white"),children:i.label},i.value))}),s.jsxs("div",{className:"lg:h-25vh bg-box mt-2vh",children:[s.jsx("div",{className:"line color-gray font-size-12px lg:font-size-14px",children:"Transaction Ledger Transaction Receipt Event Logs"}),s.jsx("div",{className:"px-16px",children:N===1?s.jsx("div",{className:"lg:h-20vh overflow-y-scroll scrollbar-y",children:s.jsx(y,{className:"w-100%",enableClipboard:!1,src:j})}):s.jsx("div",{className:"break-words break-all py-14px lg:h-20vh overflow-y-scroll scrollbar-y",children:e==null?void 0:e.input})})]})]})}export{Qe as default};
