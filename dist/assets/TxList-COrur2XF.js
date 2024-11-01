import{j as a}from"./react-By7fMB0e.js";import{u as d,b as r,x as m,t as l,y as h,T as x,z as u}from"./index-C5PpTl6-.js";import{F as N}from"./antd-BDZB70Cv.js";import{f as s}from"./ethers-BstvhKrt.js";const f=t=>{const{toTxDetail:n,toBlockDetail:c,toAccountDetail:i}=d(),o=[{title:a.jsx("div",{className:"whitespace-nowrap",children:"TXN Hash"}),key:"blockHash",align:"center",fixed:"left",render(e){return a.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>n(e.hash),children:r(e.hash,6,6)})}},{title:a.jsx("div",{className:"whitespace-nowrap",children:"TXN Time"}),key:"timestamp",align:"center",render(e){return a.jsx("div",{className:"whitespace-nowrap",children:m(e.timestamp,"YYYY/MM/DD HH:mm:ss")})}},{title:a.jsx("div",{className:"whitespace-nowrap",children:"Block Height"}),key:"blockNumber",align:"center",render(e){return a.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>c(e.blockNumber),children:e.blockNumber})}},{title:"Sender",key:"from",align:"center",render(e){return a.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>i(e.from),children:r(e.from,6,6)})}},{title:"Receiver",key:"to",align:"center",render(e){return a.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>i(e.to),children:r(e.to,6,6)})}},{title:a.jsxs("div",{className:"whitespace-nowrap",children:["Value (",t.symbol||"ERB",")"]}),key:"value",align:"center",render(e){return l(s(e.value))}},{title:a.jsx("div",{className:"whitespace-nowrap",children:"TXN Type"}),key:"Height",align:"center",render(e){return a.jsx("div",{className:"whitespace-nowrap",children:h(e.input)})}},{title:"Status",key:"Height",align:"center",render(e){return a.jsx("div",{className:"px-4px rounded-4px ".concat(e.status===1?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," rgba(168, 255, 210, .2)"),children:e.status===1?"Success":"Defeat"})}},{title:a.jsx("div",{className:"whitespace-nowrap",children:"TXN Fee"}),align:"center",render(e){return l(s(e.gasPrice*e.gasUsed),u)}}];return a.jsxs("div",{children:[a.jsx(x,{titlePC:t.titlePC||"TRANSCT INFORMATION",titleH5:t.titleH5||"TRANSCT",total:(t==null?void 0:t.total)||0,params:t.params,onChange:t.onChange}),a.jsx("div",{className:"lg:h-51.2vh",children:a.jsx("div",{className:"overflow-x-scroll scrollbar-x",children:a.jsx(N,{columns:o,dataSource:t.dataSource,loading:t.loading,pagination:!1})})})]})},v=f;export{v as T};
