import{r as i,j as e}from"./react-CBAF3Uyv.js";import{u as C,g as b,S as A,c as k,t as u,a as E,i as z,j as _}from"./index-C2gWG0MG.js";import{i as D}from"./echarts-CrZI9CbR.js";import{P as T,F as O}from"./antd-PzIqpPj_.js";import{f as x}from"./ethers-BstvhKrt.js";import"./call-bind-CXEXM7Og.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-B7YY3Jzv.js";import"./define-data-property-CU6ZIYlb.js";import"./es-define-property-BlwJlMsL.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-fNsJIl-I.js";import"./react-dom-CAO6cgV8.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BDzmUGOd.js";import"./react-router-Bhs03PUC.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-CwRJ-DD5.js";import"./use-sync-external-store-D2Dpb26n.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-Brw6IWwr.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-Kd1d3tEm.js";import"./define-properties-B83jVO4R.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-Bi3ojizx.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-zd_hqtaf.js";import"./functions-have-names-V93JBYlf.js";import"./rc-util-QCJIF2Vz.js";import"./@ant-design-BnmYyEVZ.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CKeVMnuN.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-5S44p-O-.js";import"./rc-motion-CH1JEF2r.js";import"./rc-tooltip-Cu8iVr43.js";import"./@rc-component-BriCudg9.js";import"./rc-overflow-CNtTx3br.js";import"./rc-menu-daKVGrV9.js";import"./rc-select-Cxbqm2bu.js";import"./rc-virtual-list-ypa5-6V7.js";import"./rc-field-form-aL4nyAMB.js";import"./rc-dialog-CXFQymF9.js";import"./rc-notification-BST5fa4j.js";import"./rc-table-T0JI0DD8.js";import"./rc-tree-Dx3fAiaQ.js";import"./rc-checkbox-pyhp67yT.js";import"./rc-pagination-DYoz4Sc2.js";import"./rc-picker-DQglgLpr.js";import"./rc-dropdown-CcgYhkwP.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CLMQVBH5.js";import"./rc-textarea-Cqv_Qx9X.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";function L(a){const s=i.useRef(null),p={xAxis:{type:"category",data:a.data.map(l=>l.hour),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:0}},axisLabel:{margin:26}},yAxis:{type:"value",min:5,splitNumber:3,nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#acaaaa",width:1}}},series:[{data:a.data.map(l=>l.num),type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:4,shadowOffsetY:4}}],grid:{left:"14%",right:"6%",top:"14%",bottom:"24%"}};let r;const n=()=>{r&&r.dispose(),s.current&&(r=D(s.current),r.setOption(p))};return i.useEffect(()=>(n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}),[a.data]),e.jsx("div",{className:"w-100%",children:e.jsx("div",{id:"growth-chart",className:"w-84vw lg:w-21vw h-20vh lg:h-22vh",ref:s})})}function We(){const{toAccountDetail:a}=C(),s=b(),p=[{title:"Address",key:"address",align:"center",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>a(t.address),children:k(t.address,6,6)})}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Balance（ERB）"}),key:"balance",defaultSortOrder:"descend",align:"center",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return u(x(t.balance))}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Total Staking"}),align:"center",key:"staker_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return u(x((t==null?void 0:t.stakerAmount)||"0"))}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Total Staked"}),align:"center",key:"validator_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render(t){return u(x((t==null?void 0:t.validatorAmount)||"0"))}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Owned CSBT"}),dataIndex:"snftCount",sortDirections:["ascend","descend"],align:"center",key:"snft_count",sorter:{multiple:void 0}}],[r,n]=i.useState(),l=async()=>{const t=await E();n(t)},[g,f]=i.useState(!1);let d="balance DESC";const m=i.useRef({page:1,page_size:11,order:""}),[o,w]=i.useState(),h=async()=>{try{f(!0);const t=await z({...m.current,order:d});w(t)}finally{f(!1)}},v=(t,R,c)=>{c.order?c.order==="ascend"?d="".concat(c.columnKey," ASC"):c.order==="descend"&&(d="".concat(c.columnKey," DESC")):d="balance DESC",h()},[j,y]=i.useState(),N=async()=>{const t=await _();y(t&&t.length?t:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}])};i.useEffect(()=>{h(),l(),N()},[]);const S=t=>{m.current.page=t,h()};return e.jsx("div",{className:"page-account",children:e.jsxs("div",{className:"flex flex-col lg:flex-row overflow-hidden flex-col-reverse",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"hidden lg:block",children:e.jsx(A,{})}),e.jsxs("div",{className:"table-box lg:h-65vh mt-2vh",children:[e.jsxs("div",{className:"font-size-16px text-left py-10px px-10px lg:px-16px tit items-center justify-between flex flex-row lg:flex-row lg:h-6.4vh",children:[e.jsx("div",{className:"hidden lg:block",children:"ACCOUNT INFORMATION"}),e.jsx("div",{className:"block lg:hidden",children:"ACCOUNT"}),e.jsx(T,{total:o==null?void 0:o.total,current:m.current.page,pageSize:m.current.page_size,onChange:S,showQuickJumper:!!s.isMobile,simple:!!s.isMobile})]}),e.jsx("div",{className:"h-90% flex w-100% overflow-x-scroll scrollbar-x",children:e.jsx(O,{columns:p,dataSource:o==null?void 0:o.accounts,loading:g,pagination:!1,onChange:v})})]})]}),e.jsxs("div",{className:"w-100% lg:w-25vw lg:ml-22px flex flex-col justify-between gap-10px lg:gap-20px mt-20px lg:mt-0",children:[e.jsx("div",{className:"data-card lg:h-16vh",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-16px",children:"Total Coin Addresses"}),e.jsx("div",{className:"font-size-24px",children:r==null?void 0:r.totalAccount})]})}),e.jsx("div",{className:"data-card lg:h-36vh",children:e.jsxs("div",{className:"w-100%",children:[e.jsxs("div",{className:"font-size-14px",children:["24h Account Growth ",e.jsx("br",{}),"+0.00%"]}),e.jsx("div",{className:"w-100%",children:e.jsx(L,{data:j||[]})})]})}),e.jsx("div",{className:"data-card lg:h-16vh",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-size-16px",children:"Total Active Addresses"}),e.jsx("div",{className:"font-size-24px",children:r==null?void 0:r.activeAccount})]})})]})]})})}export{We as default};
