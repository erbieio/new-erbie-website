import{r as l,j as e}from"./react-CBAF3Uyv.js";import{T as b}from"./Table-hrV4qC6e.js";import{g as y,S,a as B,b as C}from"./index-DxI6YCc3.js";import{b as D}from"./react-router-B1CwxP5x.js";import{a as T}from"./antd-tjsnniQG.js";import"./call-bind-CXEXM7Og.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-B7YY3Jzv.js";import"./define-data-property-CU6ZIYlb.js";import"./es-define-property-BlwJlMsL.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-fNsJIl-I.js";import"./react-dom-CAO6cgV8.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BkXhjwix.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-5N5A0sYr.js";import"./use-sync-external-store-D2Dpb26n.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-B5T9i_5D.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-Kd1d3tEm.js";import"./define-properties-B83jVO4R.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-Bi3ojizx.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-zd_hqtaf.js";import"./functions-have-names-V93JBYlf.js";import"./ethers--KTxgaFs.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-Dnz4wIc_.js";import"./@ant-design-DLcYMCCw.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CKeVMnuN.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-CaJsZViS.js";import"./rc-motion-Bd7Q4xoI.js";import"./rc-tooltip-CX4wyfNv.js";import"./@rc-component-BOCTuM-L.js";import"./rc-overflow-H3bjrn7Q.js";import"./rc-menu-CKZfAY2V.js";import"./rc-select-DcGRbnvD.js";import"./rc-virtual-list-BV2RSdGp.js";import"./rc-field-form-Bz2glXx2.js";import"./rc-table-D-vWsHob.js";import"./rc-tree-tOruMbh5.js";import"./rc-checkbox-CqzKyVf8.js";import"./rc-pagination-mZ8SMLhn.js";import"./rc-picker-DQ2GMR-p.js";import"./rc-dropdown-BhTuwjNa.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-BA8btAXH.js";import"./rc-textarea-DwTM2ccn.js";function qe(){const c=D(),d=t=>{},s=l.useRef({page:1,page_size:11}),[p,f]=l.useState([{label:"Blocks",filter:null,active:!0},{label:"Blackhole Blocks",filter:1,active:!1},{label:"Penalty Blocks",filter:2,active:!1}]),[h,m]=l.useState(!1),[i,g]=l.useState(),[a,u]=l.useState({blocks:[],total:0}),n=async()=>{try{m(!0);const t=await B(s.current);u(t)}finally{m(!1)}};l.useEffect(()=>{n(),j()},[]);const v=t=>{s.current.page=t,n()},j=async()=>{const t=await y();g(t)},N=t=>{c("/explorer/blockDetail/".concat(t))},k=t=>{c("/explorer/accountDetail/".concat(t))},w=[{title:"Height",key:"number",render(t){const r=t;return e.jsx("span",{className:"link hover:color-#1677ff",onClick:()=>N(r.number),children:r.number})}},{title:"Proposer",key:"miner",render(t){const r=t;return e.jsx("span",{className:"link hover:color-#1677ff",onClick:()=>k(r.miner),children:"".concat(C(r.miner,5,18))})}},{title:"TXN",key:"totalTransaction"},{title:"Gas Used",key:"Height",render(t){const r=t;return"".concat(r.gasUsed," %")}},{title:"Gas Limit",key:"gasLimit",render(t){return t.gasLimit}},{title:"Block Size",key:"size",render(t){const r=t;return"".concat(r.size," Bytes")}}],z=t=>{const r=p.map(o=>o);r.forEach(o=>{o.filter===t.filter?o.active=!0:o.active=!1}),f(r);const x=t.filter;x?s.current.filter=x:delete s.current.filter,s.current.page=1,n()};return e.jsxs("div",{className:"page-chain flex flex-col flex-col-reverse lg:flex-row",children:[e.jsxs("div",{className:"chain-header flex-1 mt-20px lg:mt-0 w-100%",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row w-100% lg:h-48px",children:[e.jsx("div",{className:"flex-1 flex gap-10px",children:p.map(t=>e.jsx("div",{className:"chain-btn white-space ".concat(t.active?"active":""),onClick:()=>z(t),children:t.label},t.label))}),e.jsx("div",{className:"flex-1 lg:ml-26px pt-20px lg:pt-0",children:e.jsx(S,{onSearch:d,className:"font-size-14px"})})]}),e.jsx("div",{className:"lg:h-63.5vh",children:e.jsxs("div",{className:"table-list mt-14px flex-1 h-100%",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between p-10px",children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"CHAIN INFORMATION"}),e.jsx(T,{current:s.current.page,pageSize:s.current.page_size,total:a.total,onChange:v})]}),e.jsx("div",{className:"flex h-90%",children:e.jsx(b,{columns:w,dataSources:a==null?void 0:a.blocks,loading:h})})]})})]}),e.jsxs("div",{className:"mt-20px lg:mt-0 w-100% lg:w-250px lg:ml-22px flex justify-between flex-row lg:flex-col",children:[e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Block Height"}),e.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:i==null?void 0:i.totalBlock})]})}),e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Total ERB Rewards"}),e.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:i==null?void 0:i.rewardCoinCount})]})}),e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Total CSBT"}),e.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:i==null?void 0:i.rewardSNFTCount})]})})]})]})}export{qe as default};
