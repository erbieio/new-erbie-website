import{r as o,j as e}from"./react-Dbae-1t-.js";import{u as C,S as A,b,t as h,g as E,i as k,j as z}from"./index-B8KFNPyr.js";import{i as D}from"./echarts-CrZI9CbR.js";import{P as _,F as L}from"./antd-DAkfjCL3.js";import{f as x}from"./ethers--KTxgaFs.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-n0I-0IF8.js";import"./react-router-CRc4GyLw.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DP2quqAp.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-BAxSnyq0.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./rc-util-EzFa6Sk3.js";import"./@ant-design-CpSj2o_1.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-APHP0lmT.js";import"./rc-motion-CHgVpSnu.js";import"./rc-tooltip-CWDKJ352.js";import"./@rc-component-BwJj1XrC.js";import"./rc-overflow-B7atUzjy.js";import"./rc-menu-DstS957B.js";import"./rc-select-DfUtNXTk.js";import"./rc-virtual-list-khs1ZQ38.js";import"./rc-field-form-BVbN0N0C.js";import"./rc-notification-CrSkqE7m.js";import"./rc-table-BHxaoavx.js";import"./rc-tree-Csjy5B6L.js";import"./rc-checkbox-BIqD4YZd.js";import"./rc-pagination-DjL2-7nn.js";import"./rc-picker-CbG8ME25.js";import"./rc-dropdown-BUgfdAv9.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CXG740_T.js";import"./rc-textarea-u6IfKFWK.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";function T(s){const n=o.useRef(null),r={xAxis:{type:"category",data:s.data.map(c=>c.hour),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:0}},axisLabel:{margin:26}},yAxis:{type:"value",min:5,splitNumber:3,nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#acaaaa",width:1}}},series:[{data:s.data.map(c=>c.num),type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:4,shadowOffsetY:4}}],grid:{left:"14%",right:"6%",top:"14%",bottom:"24%"}};let i;const l=()=>{i&&i.dispose(),n.current&&(i=D(n.current),i.setOption(r))};return o.useEffect(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[s.data]),e.jsx("div",{className:"w-100%",children:e.jsx("div",{id:"growth-chart",className:"w-84vw lg:w-21vw h-20vh lg:h-22vh",ref:n})})}function Ue(){const{toAccountDetail:s}=C(),n=[{title:"Address",key:"address",align:"center",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>s(t.address),children:b(t.address,6,6)})}},{title:"Balance（ERB）",key:"balance",defaultSortOrder:"descend",align:"center",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return h(x(t.balance))}},{title:"Total Staking",align:"center",key:"staker_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return h(x((t==null?void 0:t.stakerAmount)||"0"))}},{title:"Total Staked",align:"center",key:"validator_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return h(x((t==null?void 0:t.validatorAmount)||"0"))}},{title:"Owned CSBT",dataIndex:"snftCount",sortDirections:["ascend","descend"],align:"center",key:"snft_count",sorter:{multiple:void 0}}],[r,i]=o.useState(),l=async()=>{const t=await E();i(t)},c=()=>{},[g,f]=o.useState(!1);let d="balance DESC";const p=o.useRef({page:1,page_size:11,order:""}),[a,v]=o.useState(),u=async()=>{try{f(!0);const t=await k({...p.current,order:d});v(t)}finally{f(!1)}},w=(t,O,m)=>{m.order?m.order==="ascend"?d="".concat(m.columnKey," ASC"):m.order==="descend"&&(d="".concat(m.columnKey," DESC")):d="balance DESC",u()},[j,y]=o.useState(),S=async()=>{const t=await z();y(t&&t.length?t:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}])};o.useEffect(()=>{u(),l(),S()},[]);const N=t=>{p.current.page=t,u()};return e.jsx("div",{className:"page-account",children:e.jsxs("div",{className:"flex flex-col lg:flex-row overflow-hidden mt-20px lg:mt-0",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{children:e.jsx(A,{onSearch:c})}),e.jsxs("div",{className:"table-box lg:h-65vh mt-2vh",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between pt-10px px-10px pb-14px",children:[e.jsx("div",{className:"uppercase font-size-16px",children:"Account Informations"}),e.jsx(_,{total:a==null?void 0:a.total,current:p.current.page,pageSize:p.current.page_size,onChange:N})]}),e.jsx("div",{className:"h-90% flex w-100% overflow-x-scroll scrollbar-x",children:e.jsx(L,{columns:n,dataSource:a==null?void 0:a.accounts,loading:g,pagination:!1,onChange:w})})]})]}),e.jsxs("div",{className:"w-100% lg:w-25vw lg:ml-22px flex flex-col justify-between gap-10px lg:gap-20px mt-20px lg:mt-0",children:[e.jsx("div",{className:"data-card h-16vh",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-16px",children:"Total Coin Addresses"}),e.jsx("div",{className:"font-size-24px",children:r==null?void 0:r.totalAccount})]})}),e.jsx("div",{className:"data-card h-36vh",children:e.jsxs("div",{className:"w-100%",children:[e.jsxs("div",{className:"font-size-14px",children:["24h Account Growth ",e.jsx("br",{}),"+0.00%"," "]}),e.jsx("div",{className:"w-100%",children:e.jsx(T,{data:j||[]})})]})}),e.jsx("div",{className:"data-card h-16vh",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-16px",children:"Total Active Addresses"}),e.jsx("div",{className:"font-size-24px",children:r==null?void 0:r.activeAccount})]})})]})]})})}export{Ue as default};