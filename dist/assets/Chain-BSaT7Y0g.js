import{r as a,j as e}from"./react-Dbae-1t-.js";import{T}from"./Table-iv8ZKo_N.js";import{g as C,u as D,S as R,a as E,b as L}from"./index-PK9vjt7K.js";import{b as _}from"./react-router-CRc4GyLw.js";import{a as $,c as p}from"./antd-CNAC7LZF.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-n0I-0IF8.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DP2quqAp.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-BAxSnyq0.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./ethers--KTxgaFs.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-EzFa6Sk3.js";import"./@ant-design-CpSj2o_1.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-APHP0lmT.js";import"./rc-motion-CHgVpSnu.js";import"./rc-tooltip-CWDKJ352.js";import"./@rc-component-BwJj1XrC.js";import"./rc-overflow-B7atUzjy.js";import"./rc-menu-DstS957B.js";import"./rc-select-DfUtNXTk.js";import"./rc-virtual-list-khs1ZQ38.js";import"./rc-field-form-BVbN0N0C.js";import"./rc-notification-CrSkqE7m.js";import"./rc-table-BHxaoavx.js";import"./rc-tree-Csjy5B6L.js";import"./rc-checkbox-BIqD4YZd.js";import"./rc-pagination-DjL2-7nn.js";import"./rc-picker-CbG8ME25.js";import"./rc-dropdown-BUgfdAv9.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CXG740_T.js";import"./rc-textarea-u6IfKFWK.js";function Ye(){const h=_(),g=t=>{},s=a.useRef({page:1,page_size:11}),[m,u]=a.useState([{label:"Blocks",filter:null,active:!0},{label:"Blackhole Blocks",filter:1,active:!1},{label:"Penalty Blocks",filter:2,active:!1}]),[v,x]=a.useState(!1),[i,j]=a.useState(),[o,N]=a.useState({blocks:[],total:0}),w=.5436,n=async()=>{try{x(!0);const t=await E(s.current);N(t)}finally{x(!1)}};a.useEffect(()=>{n(),b()},[]);const k=t=>{s.current.page=t,n()},b=async()=>{try{d(!0);const t=await C();j(t)}finally{const t=setTimeout(()=>{d(!1),clearTimeout(t)},100)}},z=t=>{h("/explorer/blockDetail/".concat(t))},{toAccountDetail:y}=D(),[c,d]=a.useState(!1),S=[{title:"Height",key:"number",render(t){const r=t;return e.jsx("span",{className:"link hover:color-#1677ff",onClick:()=>z(r.number),children:r.number})}},{title:"Proposer",key:"miner",render(t){const r=t;return e.jsx("span",{className:"link hover:color-#1677ff",onClick:()=>y(r.miner),children:"".concat(L(r.miner,5,18))})}},{title:"TXN",key:"totalTransaction"},{title:"Gas Used",key:"Height",render(t){const r=t;return"".concat(r.gasUsed," %")}},{title:"Gas Limit",key:"gasLimit",render(t){return t.gasLimit}},{title:"Block Size",key:"size",render(t){const r=t;return"".concat(r.size," Bytes")}}],B=t=>{const r=m.map(l=>l);r.forEach(l=>{l.filter===t.filter?l.active=!0:l.active=!1}),u(r);const f=t.filter;f?s.current.filter=f:delete s.current.filter,s.current.page=1,n()};return e.jsxs("div",{className:"page-chain flex flex-col flex-col-reverse lg:flex-row",children:[e.jsxs("div",{className:"chain-header flex-1 mt-14px lg:mt-0 w-100%",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row w-100% lg:h-48px",children:[e.jsx("div",{className:"flex-1 flex gap-10px",children:m.map(t=>e.jsx("div",{className:"chain-btn white-space ".concat(t.active?"active":""),onClick:()=>B(t),children:t.label},t.label))}),e.jsx("div",{className:"flex-1 lg:ml-26px pt-20px lg:pt-0",children:e.jsx(R,{onSearch:g,className:"font-size-14px"})})]}),e.jsx("div",{className:"lg:h-63.5vh",children:e.jsxs("div",{className:"table-list mt-14px flex-1 h-100%",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between p-10px",children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"CHAIN INFORMATION"}),e.jsx($,{current:s.current.page,pageSize:s.current.page_size,total:o.total,onChange:k})]}),e.jsx("div",{className:"flex h-100% lg:h-90%  overflow-x-scroll scrollbar-x",children:e.jsx(T,{columns:S,dataSources:o==null?void 0:o.blocks,loading:v})})]})})]}),e.jsxs("div",{className:"mt-14px lg:mt-0 w-100% lg:w-250px lg:ml-22px gap-10px lg:gap-0 flex justify-between flex-row lg:flex-col",children:[e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{className:"w-100%",children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Block Height"}),e.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:e.jsx(p,{loading:c,title:!1,active:!0,paragraph:{rows:1,width:"100% "},children:i==null?void 0:i.totalBlock})})]})}),e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{className:"w-100%",children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Total ERB Rewards"}),e.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:e.jsx(p,{loading:c,active:!0,paragraph:{rows:1,width:"100% "},title:!1,children:i?Math.floor(Number(i==null?void 0:i.rewardCoinCount)*w*100)/100:0})})]})}),e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{className:"w-100%",children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Total CSBT"}),e.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:e.jsx(p,{loading:c,title:!1,active:!0,paragraph:{rows:1,width:"100% "},children:i==null?void 0:i.rewardSNFTCount})})]})})]})]})}export{Ye as default};
