import{r as i,j as e}from"./react-Dbae-1t-.js";import{u as C,g as b,S as A,c as k,t as u,a as E,j as z,k as _}from"./index-CLaTjx55.js";import{i as D}from"./echarts-CrZI9CbR.js";import{P as T,F as O}from"./antd-B5ZNfozw.js";import{f as x}from"./ethers-BstvhKrt.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./react-router-xprjhg_w.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DZNLuWiI.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-Jg3vAkUA.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./rc-util-BVoFLaC3.js";import"./@ant-design-cuQt8M9U.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-BVHHFr75.js";import"./rc-motion-BZqazZvp.js";import"./rc-tooltip-DnJT57xg.js";import"./@rc-component-CUxUE6TK.js";import"./rc-overflow-NmepX_0j.js";import"./rc-menu-B0tG2zAN.js";import"./rc-select-WrRboq2N.js";import"./rc-virtual-list-CazHB5-2.js";import"./rc-field-form-BUohAxhv.js";import"./rc-dialog-D3B5c-yV.js";import"./rc-notification-u0yXLBVH.js";import"./rc-table-kU0EmM_j.js";import"./rc-tree-CEA37Pdq.js";import"./rc-checkbox-r8DBUZxc.js";import"./rc-pagination-UmMZijbf.js";import"./rc-picker-Bm-4DQFX.js";import"./rc-dropdown-Bl2C0d0y.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CqS0ikQ4.js";import"./rc-textarea-PNgz88ka.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";function L(a){const s=i.useRef(null),p={xAxis:{type:"category",data:a.data.map(l=>l.hour),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:0}},axisLabel:{margin:26}},yAxis:{type:"value",min:5,splitNumber:3,nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#acaaaa",width:1}}},series:[{data:a.data.map(l=>l.num),type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:4,shadowOffsetY:4}}],grid:{left:"14%",right:"6%",top:"14%",bottom:"24%"}};let r;const n=()=>{r&&r.dispose(),s.current&&(r=D(s.current),r.setOption(p))};return i.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[a.data]),e.jsx("div",{className:"w-100%",children:e.jsx("div",{id:"growth-chart",className:"w-84vw lg:w-21vw h-20vh lg:h-22vh",ref:s})})}function We(){const{toAccountDetail:a}=C(),s=b(),p=[{title:"Address",key:"address",align:"center",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>a(t.address),children:k(t.address,6,6)})}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Balance（ERB）"}),key:"balance",defaultSortOrder:"descend",align:"center",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return u(x(t.balance))}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Total Staking"}),align:"center",key:"staker_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return u(x((t==null?void 0:t.stakerAmount)||"0"))}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Total Staked"}),align:"center",key:"validator_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return u(x((t==null?void 0:t.validatorAmount)||"0"))}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Owned CSBT"}),dataIndex:"snftCount",sortDirections:["ascend","descend"],align:"center",key:"snft_count",sorter:{multiple:void 0}}],[r,n]=i.useState(),l=async()=>{const t=await E();n(t)},[g,f]=i.useState(!1);let d="balance DESC";const m=i.useRef({page:1,page_size:11,order:""}),[o,w]=i.useState(),h=async()=>{try{f(!0);const t=await z({...m.current,order:d});w(t)}finally{f(!1)}},v=(t,F,c)=>{c.order?c.order==="ascend"?d="".concat(c.columnKey," ASC"):c.order==="descend"&&(d="".concat(c.columnKey," DESC")):d="balance DESC",h()},[j,y]=i.useState(),N=async()=>{const t=await _();y(t&&t.length?t:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}])};i.useEffect(()=>{h(),l(),N()},[]);const S=t=>{m.current.page=t,h()};return e.jsx("div",{className:"page-account",children:e.jsxs("div",{className:"flex flex-col lg:flex-row overflow-hidden flex-col-reverse",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"hidden lg:block",children:e.jsx(A,{})}),e.jsxs("div",{className:"table-box lg:h-65vh mt-2vh",children:[e.jsxs("div",{className:"font-size-16px text-left py-10px px-10px lg:px-16px tit items-center justify-between flex flex-row lg:flex-row lg:h-6.4vh",children:[e.jsx("div",{className:"hidden lg:block",children:"ACCOUNT INFOMATIONS"}),e.jsx("div",{className:"block lg:hidden",children:"ACCOUNT"}),e.jsx(T,{total:o==null?void 0:o.total,current:m.current.page,pageSize:m.current.page_size,onChange:S,showQuickJumper:!!s.isMobile,simple:!!s.isMobile})]}),e.jsx("div",{className:"h-90% flex w-100% overflow-x-scroll scrollbar-x",children:e.jsx(O,{columns:p,dataSource:o==null?void 0:o.accounts,loading:g,pagination:!1,onChange:v})})]})]}),e.jsxs("div",{className:"w-100% lg:w-25vw lg:ml-22px flex flex-col justify-between gap-10px lg:gap-20px mt-20px lg:mt-0",children:[e.jsx("div",{className:"data-card lg:h-16vh",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-16px",children:"Total Coin Addresses"}),e.jsx("div",{className:"font-size-24px",children:r==null?void 0:r.totalAccount})]})}),e.jsx("div",{className:"data-card lg:h-36vh",children:e.jsxs("div",{className:"w-100%",children:[e.jsxs("div",{className:"font-size-14px",children:["24h Account Growth ",e.jsx("br",{}),"+0.00%"," "]}),e.jsx("div",{className:"w-100%",children:e.jsx(L,{data:j||[]})})]})}),e.jsx("div",{className:"data-card lg:h-16vh",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-16px",children:"Total Active Addresses"}),e.jsx("div",{className:"font-size-24px",children:r==null?void 0:r.activeAccount})]})})]})]})})}export{We as default};
