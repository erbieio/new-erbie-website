import{r as a,j as t}from"./react-Dbae-1t-.js";import{T as g}from"./Table-D9QLz1vy.js";import{S,b as d,g as w,e as C}from"./index-DPWS70e-.js";import{h as l}from"./moment-CbGOrKEH.js";import{b}from"./react-router-CRc4GyLw.js";import{a as k}from"./antd-CNAC7LZF.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-n0I-0IF8.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DP2quqAp.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-BAxSnyq0.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./ethers--KTxgaFs.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-EzFa6Sk3.js";import"./@ant-design-CpSj2o_1.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-APHP0lmT.js";import"./rc-motion-CHgVpSnu.js";import"./rc-tooltip-CWDKJ352.js";import"./@rc-component-BwJj1XrC.js";import"./rc-overflow-B7atUzjy.js";import"./rc-menu-DstS957B.js";import"./rc-select-DfUtNXTk.js";import"./rc-virtual-list-khs1ZQ38.js";import"./rc-field-form-BVbN0N0C.js";import"./rc-notification-CrSkqE7m.js";import"./rc-table-BHxaoavx.js";import"./rc-tree-Csjy5B6L.js";import"./rc-checkbox-BIqD4YZd.js";import"./rc-pagination-DjL2-7nn.js";import"./rc-picker-CbG8ME25.js";import"./rc-dropdown-BUgfdAv9.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CXG740_T.js";import"./rc-textarea-u6IfKFWK.js";function Ot(){const c=()=>{},x=b(),o=e=>{x("/explorer/accountDetail/".concat(e))},h=[{title:"Address",key:"address",render(e){const r=e;return t.jsx("a",{className:"link",onClick:()=>o(r.address),children:d(r.address,6,6)})}},{title:"Number",key:"address",render(e){return parseInt(e.address.slice(3),16)}},{title:"Creation Time",key:"createdAt",render(e){return l(e.createdAt*1e3).format("YYYY/MM/DD HH:mm:ss")}},{title:"Owner",key:"owner",render(e){const r=e;return t.jsx("span",{className:"link hover:color-blue",onClick:()=>o(r.owner),children:d(r.owner,6,6)})}},{title:"Owner Get Time",key:"reward_at",render(e){return l(e.reward_at*1e3).format("YYYY/MM/DD HH:mm:ss")}}],[m,v]=a.useState(),j=async()=>{const e=await w();v(e)},[u,n]=a.useState(!1),i=a.useRef({page:1,page_size:11}),[s,f]=a.useState(),p=async()=>{try{n(!0);const e=await C({...i.current,collection_id:"",owner:""});f(e)}finally{n(!1)}};a.useEffect(()=>{p(),j()},[]);const N=e=>{i.current.page=e,p()};return t.jsx("div",{className:"page-csbt",children:t.jsxs("div",{className:"flex",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{children:t.jsx(S,{onSearch:c})}),t.jsxs("div",{className:"table-box h-65vh mt-2vh",children:[t.jsx("div",{className:"px-10px pt-10px pb-14px",children:t.jsxs("div",{className:"flex justify-between",children:[t.jsx("div",{children:"CHAINLAYER SBT"}),t.jsx(k,{onChange:N,total:(s==null?void 0:s.total)||0,pageSize:i.current.page_size,current:i.current.page})]})}),t.jsx("div",{className:"h-90% flex",children:t.jsx(g,{columns:h,dataSources:(s==null?void 0:s.nfts)||[],loading:u})})]})]}),t.jsxs("div",{className:"w-250px ml-22px flex flex-col gap-2vh",children:[t.jsx("div",{className:"data-panel",children:t.jsxs("div",{children:[t.jsx("div",{className:"tit",children:"Mined CSBT Number"}),t.jsx("div",{className:"val",children:m?m.totalSNFT:0})]})}),t.jsx("div",{className:"data-panel",children:t.jsxs("div",{children:[t.jsx("div",{className:"tit",children:"Minted Personal CSBT"}),t.jsx("div",{className:"val",children:"--"})]})}),t.jsx("div",{className:"data-panel",children:t.jsxs("div",{children:[t.jsx("div",{className:"tit",children:"Minted Group CSBT"}),t.jsx("div",{className:"val",children:"--"})]})})]})]})})}export{Ot as default};