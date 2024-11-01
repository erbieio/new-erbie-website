import{r,j as t}from"./react-By7fMB0e.js";import{u as k,S as E,T as D,b as O,t as h,g as z,m as L,n as R,o as F,p as G}from"./index-C5PpTl6-.js";import{i as B}from"./echarts-CrZI9CbR.js";import{F as I}from"./antd-BDZB70Cv.js";import{f as x}from"./ethers-BstvhKrt.js";import"./@babel-CPdS0LiP.js";import"./react-dom-BRHH_8_y.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BBHgilwK.js";import"./react-router-DovjImOu.js";import"./@remix-run-CSnr7utK.js";import"./react-syntax-highlighter-B8jXOhry.js";import"./lowlight-CX6iN8Bb.js";import"./highlight.js-BlS-V1FS.js";import"./fault-DEd0IiX8.js";import"./format-CuHvLGe3.js";import"./react-redux-BCSK5X4k.js";import"./use-sync-external-store-tXIRQS9o.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./moment-CbGOrKEH.js";import"./react-transition-group-CpSDfe61.js";import"./dom-helpers-D0mFdbeO.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-D_McvzTm.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./call-bind-CsL2PN8e.js";import"./set-function-length-D5MMniOg.js";import"./es-abstract-QiJPtVge.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./@ant-design-D3FTDQRl.js";import"./rc-util-BRxKhk2h.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CJ4s3n-9.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-B9dDainz.js";import"./rc-motion-2xQU8S4B.js";import"./rc-tooltip-D0Dn-zZD.js";import"./@rc-component-DEHkSfE8.js";import"./rc-overflow-DFopUFm4.js";import"./rc-menu-C8vjE82v.js";import"./rc-select-BFEaZ3rb.js";import"./rc-virtual-list-kx-0GHFZ.js";import"./rc-field-form-DMvQqfZX.js";import"./rc-dialog-CPpkCHff.js";import"./rc-notification-C1fCFk_m.js";import"./rc-table-BnRBvHef.js";import"./rc-tree-ClKoxxWB.js";import"./rc-checkbox-C46gwUVs.js";import"./rc-pagination-j3WqyJQR.js";import"./rc-picker-qRuqHPZZ.js";import"./rc-dropdown-B1q-Y8vR.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-DLZYG-Up.js";import"./rc-textarea-2ijBKS9Q.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";function H(s){const i=r.useRef(null),n={xAxis:{type:"category",data:s.data.map(d=>d.hour),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:0}},axisLabel:{margin:26}},yAxis:{type:"value",min:5,splitNumber:3,nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#acaaaa",width:1}}},series:[{data:s.data.map(d=>d.num),type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:4,shadowOffsetY:4}}],grid:{left:"14%",right:"6%",top:"14%",bottom:"24%"}};let o;const l=()=>{o&&o.dispose(),i.current&&(o=B(i.current),o.setOption(n))};return r.useEffect(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[s.data]),t.jsx("div",{className:"w-100%",children:t.jsx("div",{id:"growth-chart",className:"w-84vw lg:w-21vw h-20vh lg:h-22vh",ref:i})})}function de(){const{toAccountDetail:s}=k(),i=[{title:"Address",key:"address",align:"center",render(e){return t.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>s(e.address),children:O(e.address,6,6)})}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"Balance（ERB）"}),key:"balance",defaultSortOrder:"descend",align:"center",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(e){return h(x(e.balance))}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"Total Staking"}),align:"center",key:"staker_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(e){return h(x((e==null?void 0:e.stakerAmount)||"0"))}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"Total Staked"}),align:"center",key:"validator_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(e){return h(x((e==null?void 0:e.validatorAmount)||"0"))}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"Owned CSBT"}),dataIndex:"snftCount",sortDirections:["ascend","descend"],align:"center",key:"snft_count",sorter:{multiple:void 0}}],[n,o]=r.useState(),l=async()=>{const e=await z();o(e)},[d,f]=r.useState(!1);let m="balance DESC";const p=r.useRef({page:1,page_size:11,order:""}),[a,g]=r.useState(),u=async()=>{try{f(!0);const e=await L({...p.current,order:m});g(e)}finally{f(!1)}},w=(e,K,c)=>{c.order?c.order==="ascend"?m="".concat(c.columnKey," ASC"):c.order==="descend"&&(m="".concat(c.columnKey," DESC")):m="balance DESC",u()},[v,j]=r.useState(),y=async()=>{const e=await R();j(e&&e.length?e:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}])},[N,S]=r.useState(0),C=async()=>{const e=await F();S(e)},[A,b]=r.useState(0),_=async()=>{const e=await G();b(e)};r.useEffect(()=>{u(),l(),y(),C(),_()},[]);const T=e=>{p.current.page=e,u()};return t.jsx("div",{className:"page-account",children:t.jsxs("div",{className:"flex flex-col lg:flex-row overflow-hidden flex-col-reverse",children:[t.jsxs("div",{className:"flex-1",children:[t.jsx("div",{className:"hidden lg:block",children:t.jsx(E,{})}),t.jsxs("div",{className:"table-box lg:h-65vh mt-2vh",children:[t.jsx(D,{titlePC:"ACCOUNT INFORMATION",titleH5:"ACCOUNT",params:p,onChange:T,total:(a==null?void 0:a.total)||0}),t.jsx("div",{className:"h-90% flex w-100% overflow-x-scroll scrollbar-x",children:t.jsx(I,{columns:i,dataSource:a==null?void 0:a.accounts,loading:d,pagination:!1,onChange:w})})]})]}),t.jsxs("div",{className:"w-100% lg:w-25vw lg:ml-22px flex flex-col justify-between gap-10px lg:gap-20px mt-20px lg:mt-0",children:[t.jsx("div",{className:"data-card lg:h-16vh",children:t.jsxs("div",{children:[t.jsx("div",{className:"font-size-16px",children:"Total Coin Addresses"}),t.jsx("div",{className:"font-size-24px",children:A})]})}),t.jsx("div",{className:"data-card lg:h-36vh",children:t.jsxs("div",{className:"w-100%",children:[t.jsxs("div",{className:"font-size-14px",children:["24h Account Growth ",t.jsx("br",{}),(N*100).toFixed(2),"%"]}),t.jsx("div",{className:"w-100%",children:t.jsx(H,{data:v||[]})})]})}),t.jsx("div",{className:"data-card lg:h-16vh",children:t.jsxs("div",{children:[t.jsx("div",{className:"font-size-16px",children:"Total Active Addresses"}),t.jsx("div",{className:"font-size-24px",children:n==null?void 0:n.activeAccount})]})})]})]})})}export{de as default};
