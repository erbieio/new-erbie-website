import{r as a,j as e}from"./react-Dbae-1t-.js";import{T as S}from"./Table-BwHEn0fg.js";import{g as B,u as D,S as T,a as C,b as R,t as E}from"./index-D9Wn6AEW.js";import{b as L}from"./react-router-xprjhg_w.js";import{P,c as p}from"./antd-B5ZNfozw.js";import{f as _}from"./ethers-BstvhKrt.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DZNLuWiI.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-Jg3vAkUA.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-BVoFLaC3.js";import"./@ant-design-cuQt8M9U.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-BVHHFr75.js";import"./rc-motion-BZqazZvp.js";import"./rc-tooltip-DnJT57xg.js";import"./@rc-component-CUxUE6TK.js";import"./rc-overflow-NmepX_0j.js";import"./rc-menu-B0tG2zAN.js";import"./rc-select-WrRboq2N.js";import"./rc-virtual-list-CazHB5-2.js";import"./rc-field-form-BUohAxhv.js";import"./rc-dialog-D3B5c-yV.js";import"./rc-notification-u0yXLBVH.js";import"./rc-table-kU0EmM_j.js";import"./rc-tree-CEA37Pdq.js";import"./rc-checkbox-r8DBUZxc.js";import"./rc-pagination-UmMZijbf.js";import"./rc-picker-Bm-4DQFX.js";import"./rc-dropdown-Bl2C0d0y.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CqS0ikQ4.js";import"./rc-textarea-PNgz88ka.js";function Ze(){const g=L(),s=a.useRef({page:1,page_size:11}),[m,h]=a.useState([{label:"Blocks",filter:null,active:!0},{label:"Blackhole Blocks",filter:1,active:!1},{label:"Penalty Blocks",filter:2,active:!1}]),[u,x]=a.useState(!1),[i,v]=a.useState(),[o,j]=a.useState({blocks:[],total:0}),n=async()=>{try{x(!0);const t=await C(s.current);j(t)}finally{x(!1)}};a.useEffect(()=>{n(),w()},[]);const N=t=>{s.current.page=t,n()},w=async()=>{try{d(!0);const t=await B();v(t)}finally{d(!1)}},k=t=>{g("/explorer/blockDetail/".concat(t))},{toAccountDetail:b}=D(),[c,d]=a.useState(!1),z=[{title:"Height",key:"number",render(t){const r=t;return e.jsx("span",{className:"link hover:color-#1677ff",onClick:()=>k(r.number),children:r.number})}},{title:"Proposer",key:"miner",render(t){const r=t;return e.jsx("span",{className:"link hover:color-#1677ff",onClick:()=>b(r.miner),children:"".concat(R(r.miner,5,18))})}},{title:"TXN",key:"totalTransaction"},{title:"Gas Used",key:"Height",render(t){const r=t;return"".concat(E((r.gasUsed||0)/(r.gasLimit||0)*100,5)," %")}},{title:"Gas Limit",key:"gasLimit",render(t){return t.gasLimit}},{title:"Block Size",key:"size",render(t){const r=t;return"".concat(r.size," Bytes")}}],y=t=>{const r=m.map(l=>l);r.forEach(l=>{l.filter===t.filter?l.active=!0:l.active=!1}),h(r);const f=t.filter;f?s.current.filter=f:delete s.current.filter,s.current.page=1,n()};return e.jsxs("div",{className:"page-chain flex flex-col flex-col-reverse lg:flex-row",children:[e.jsxs("div",{className:"chain-header flex-1 mt-14px lg:mt-0 w-100%",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row w-100% lg:h-48px",children:[e.jsx("div",{className:"flex-1 flex gap-10px",children:m.map(t=>e.jsx("div",{className:"chain-btn white-space ".concat(t.active?"active":""),onClick:()=>y(t),children:t.label},t.label))}),e.jsx("div",{className:"flex-1 lg:ml-26px pt-20px lg:pt-0",children:e.jsx(T,{className:"font-size-14px"})})]}),e.jsx("div",{className:"lg:h-64.5vh",children:e.jsxs("div",{className:"table-list mt-14px flex-1 h-100%",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between p-10px",children:[e.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"CHAIN INFORMATION"}),e.jsx(P,{current:s.current.page,pageSize:s.current.page_size,total:o.total,onChange:N})]}),e.jsx("div",{className:"flex h-100% lg:h-90%  overflow-x-scroll scrollbar-x",children:e.jsx(S,{columns:z,dataSources:o==null?void 0:o.blocks,loading:u})})]})})]}),e.jsxs("div",{className:"mt-14px lg:mt-0 w-100% lg:w-250px lg:ml-22px gap-10px lg:gap-0 flex justify-between flex-row lg:flex-col",children:[e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{className:"w-100%",children:[e.jsx("div",{className:"font-size-10px lg:font-size-16px",children:"Block Height"}),e.jsx("div",{className:"font-size-10px lg:font-size-24px lg:mt-16px",children:e.jsx(p,{loading:c,title:!1,active:!0,paragraph:{rows:1,width:"100% "},children:i==null?void 0:i.totalBlock})})]})}),e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{className:"w-100%",children:[e.jsx("div",{className:"font-size-10px lg:font-size-16px",children:"Total ERB Rewards"}),e.jsx("div",{className:"font-size-10px lg:font-size-24px lg:mt-16px",children:e.jsx(p,{loading:c,active:!0,paragraph:{rows:1,width:"100% "},title:!1,children:_((i==null?void 0:i.totalRewardAmount)||"0")})})]})}),e.jsx("div",{className:"total-card flex justify-center items-center",children:e.jsxs("div",{className:"w-100%",children:[e.jsx("div",{className:"font-size-10px lg:font-size-16px",children:"Total CSBT"}),e.jsx("div",{className:"font-size-10px lg:font-size-24px lg:mt-16px",children:e.jsx(p,{loading:c,title:!1,active:!0,paragraph:{rows:1,width:"100% "},children:i==null?void 0:i.rewardSNFTCount})})]})})]})]})}export{Ze as default};
