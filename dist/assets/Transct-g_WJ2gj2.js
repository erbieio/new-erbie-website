import{r as o,j as e}from"./react-Dbae-1t-.js";import{k as v,u as S,S as k,t as h,b as u,f as E,l as C,g as z,m as L,n as R,o as B}from"./index-Bwkit6iI.js";import{u as A,a as D,b as H,c as _,d as F,e as Y,i as g}from"./echarts-CrZI9CbR.js";import{P as X,F as O}from"./antd-DAkfjCL3.js";import{f as x}from"./ethers--KTxgaFs.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./react-router-xprjhg_w.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DP2quqAp.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-BAxSnyq0.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./rc-util-EzFa6Sk3.js";import"./@ant-design-CpSj2o_1.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-APHP0lmT.js";import"./rc-motion-CHgVpSnu.js";import"./rc-tooltip-CWDKJ352.js";import"./@rc-component-BwJj1XrC.js";import"./rc-overflow-B7atUzjy.js";import"./rc-menu-DstS957B.js";import"./rc-select-DfUtNXTk.js";import"./rc-virtual-list-khs1ZQ38.js";import"./rc-field-form-BVbN0N0C.js";import"./rc-notification-CrSkqE7m.js";import"./rc-table-BHxaoavx.js";import"./rc-tree-Csjy5B6L.js";import"./rc-checkbox-BIqD4YZd.js";import"./rc-pagination-DjL2-7nn.js";import"./rc-picker-CbG8ME25.js";import"./rc-dropdown-BUgfdAv9.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CXG740_T.js";import"./rc-textarea-u6IfKFWK.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";A([D,H,_,F,Y]);function I(r){const l=o.useRef(null);let s;const a=v(()=>{if(s&&s.dispose(),l.current&&r.data){s=g(l.current);const i={tooltip:{trigger:"item"},legend:{right:"center",y:"center",orient:"vertical",borderRadius:120,left:"0",icon:"circle",itemStyle:{},textStyle:{color:"white"}},series:[{name:"TRANSACTIONS BY TYPE",type:"pie",radius:"88%",left:"220px",data:[{value:r.data.totalErbieTx,name:"Erbie Transactions",itemStyle:{color:"#740091"}},{value:r.data.totalTransaction-r.data.totalErbieTx-r.data.totalTransferTx,name:"Contract Transactions",itemStyle:{color:"#393552"}},{value:r.data.totalTransferTx,name:"Regular Way",itemStyle:{color:"#4A336B"}}],label:{show:!1},seriesLayoutBy:"column",center:["50%","50%"],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],grid:{left:"10%",right:"10%",top:"10%",bottom:"20%"}};s.setOption(i)}},500);return o.useEffect(()=>(r.data&&a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[r.data]),e.jsx("div",{className:"w-100% flex justify-center",children:e.jsx("div",{id:"transition-chart",className:"w-84vw h-20vh lg:w-26vw lg:w-18vh",ref:l})})}function P(r){const l=r.list.map(c=>c.num),s=o.useRef(null);let a;const i=v(()=>{a&&a.dispose();const c={xAxis:{type:"category",data:r.list.map(d=>d.hour),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:0}},axisLabel:{margin:23}},yAxis:{type:"value",min:5,splitNumber:3,nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",color:"#eee",width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#acaaaa",width:1}}},series:[{data:l,type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:5,shadowOffsetY:5}}],grid:{left:"6%",right:"4%",top:"10%",bottom:"22%"}};s.current&&(a=g(s.current),a.setOption(c))},500);return o.useEffect(()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[r.list]),e.jsx("div",{className:"w-100% flex justify-center",children:e.jsx("div",{id:"volume-chart",className:"h-20vh w-84vw lg:h-22vh lg:w-23vw",ref:s})})}function st(){const{toAccountDetail:r,toBlockDetail:l,toTxDetail:s}=S(),a=[{title:"TXN Hash",key:"blockHash",align:"center",fixed:"left",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>s(t.blockHash),children:u(t.blockHash,6,6)})}},{title:"TXN Time",key:"timestamp",align:"center",render(t){return e.jsx("div",{className:"whitespace-nowrap",children:E(t.timestamp,"YYYY/MM/DD HH:mm:ss")})}},{title:"Block Height",key:"blockNumber",align:"center",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>l(t.blockNumber),children:t.blockNumber})}},{title:"Sender",key:"from",align:"center",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>r(t.from),children:u(t.from,6,6)})}},{title:"Receiver",key:"to",align:"center",render(t){return e.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>r(t.to),children:u(t.to,6,6)})}},{title:"Value (ERB)	",key:"value",align:"center",render(t){return h(x(t.value))}},{title:"TXN Type",key:"Height",align:"center",render(t){return e.jsx("div",{className:"whitespace-nowrap",children:C(t.input)})}},{title:"Status",key:"Height",align:"center",render(t){return e.jsx("div",{className:"px-4px rounded-4px ".concat(t.status===1?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," rgba(168, 255, 210, .2)"),children:t.status===1?"Success":"Defeat"})}},{title:"TXN Fee",align:"center",render(t){return h(x(t.gasPrice*t.gasUsed),B)}}],[i,c]=o.useState(),d=async()=>{const t=await z();c(t)},[j,p]=o.useState(!1),[n,y]=o.useState(),m=o.useRef({page:1,page_size:10}),f=async()=>{try{p(!0);const t=await L(m.current);y(t)}finally{p(!1)}},[w,N]=o.useState(),b=async()=>{const t=await R();N(t&&t.length?t:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}])};o.useEffect(()=>{f(),d(),b()},[]);const T=t=>{m.current.page=t,f()};return e.jsxs("div",{className:"page-transct min-h-70vh flex flex-col flex-col-reverse lg:flex-row",children:[e.jsxs("div",{className:"flex flex-col lg:w-35% gap-2vh",children:[e.jsx("div",{className:"flex-1 flex",children:e.jsxs("div",{className:"flex-1",children:[e.jsx(k,{}),e.jsxs("div",{className:"tb1 flex flex-col justify-evenly",children:[e.jsx("div",{className:"font-size-14px flex justify-center items-center w-100% py-2vh",children:e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"lh-20px",children:"24h TXN Volume Growth"}),e.jsx("div",{className:"font-size-20px lh-20px ml-10px",children:"+0.0000%"})]})}),e.jsx("div",{className:"w-100%",children:e.jsx(P,{list:w||[]})})]})]})}),e.jsx("div",{className:"flex flex-1",children:e.jsxs("div",{className:"tb2 flex flex-col justify-between flex-1",children:[e.jsx("div",{className:"font-size-14px h-10vh flex justify-center items-center",children:"TRANSACTIONS BY TYPE"}),e.jsx("div",{className:"bingtu h-20vh flex justify-center px-20px",children:e.jsx(I,{data:i})})]})})]}),e.jsxs("div",{className:"w-100% lg:w-65% lg:ml-20px min-h-38vh",children:[e.jsxs("div",{className:"data-box flex gap-1vh mt-14px lg:mt-0",children:[e.jsx("div",{className:"data-card flex-1",children:e.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[e.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transaction Volume"}),e.jsxs("div",{className:"font-size-12px lg:font-size-24px",children:[h(x((i==null?void 0:i.totalAmount)||"0"))," ERB"]})]})}),e.jsx("div",{className:"data-card flex-1",children:e.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[e.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transactions"}),e.jsx("div",{className:"font-size-12px lg:font-size-24px",children:(i==null?void 0:i.totalTransaction)||"0"})]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"table-box mt-2vh",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between px-10px pt-10px pb-14px",children:[e.jsx("div",{className:"font-size-16px uppercase",children:"Transct Informations"}),e.jsx("div",{children:e.jsx(X,{current:m.current.page,pageSize:m.current.page_size,total:n==null?void 0:n.total,onChange:T})})]}),e.jsx("div",{className:"lg:min-h-50vh",children:e.jsx("div",{className:"overflow-x-scroll scrollbar-x",children:e.jsx(O,{columns:a,dataSource:n==null?void 0:n.transactions,loading:j,pagination:!1})})})]})})]})]})}export{st as default};
