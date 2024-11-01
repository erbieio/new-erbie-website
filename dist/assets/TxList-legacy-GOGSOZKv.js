System.register(["./react-legacy-OG6ByqCe.js","./index-legacy-BT2aQmBq.js","./antd-legacy-oTHwqDN0.js","./ethers-legacy-CRNzbMtm.js"],(function(e,n){"use strict";var t,r,i,c,a,l,s,o,u,d;return{setters:[function(e){t=e.j},function(e){r=e.u,i=e.b,c=e.x,a=e.t,l=e.y,s=e.T,o=e.z},function(e){u=e.F},function(e){d=e.f}],execute:function(){e("T",(function(e){var n=r(),h=n.toTxDetail,f=n.toBlockDetail,m=n.toAccountDetail,g=[{title:t.jsx("div",{className:"whitespace-nowrap",children:"TXN Hash"}),key:"blockHash",align:"center",fixed:"left",render:function(e){return t.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return h(e.hash)},children:i(e.hash,6,6)})}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"TXN Time"}),key:"timestamp",align:"center",render:function(e){return t.jsx("div",{className:"whitespace-nowrap",children:c(e.timestamp,"YYYY/MM/DD HH:mm:ss")})}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"Block Height"}),key:"blockNumber",align:"center",render:function(e){return t.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return f(e.blockNumber)},children:e.blockNumber})}},{title:"Sender",key:"from",align:"center",render:function(e){return t.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return m(e.from)},children:i(e.from,6,6)})}},{title:"Receiver",key:"to",align:"center",render:function(e){return t.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return m(e.to)},children:i(e.to,6,6)})}},{title:t.jsxs("div",{className:"whitespace-nowrap",children:["Value (",e.symbol||"ERB",")"]}),key:"value",align:"center",render:function(e){return a(d(e.value))}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"TXN Type"}),key:"Height",align:"center",render:function(e){return t.jsx("div",{className:"whitespace-nowrap",children:l(e.input)})}},{title:"Status",key:"Height",align:"center",render:function(e){return t.jsx("div",{className:"px-4px rounded-4px ".concat(1===e.status?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," ","rgba(168, 255, 210, .2)"),children:1===e.status?"Success":"Defeat"})}},{title:t.jsx("div",{className:"whitespace-nowrap",children:"TXN Fee"}),align:"center",render:function(e){return a(d(e.gasPrice*e.gasUsed),o)}}];return t.jsxs("div",{children:[t.jsx(s,{titlePC:e.titlePC||"TRANSCT INFORMATION",titleH5:e.titleH5||"TRANSCT",total:(null==e?void 0:e.total)||0,params:e.params,onChange:e.onChange}),t.jsx("div",{className:"lg:h-51.2vh",children:t.jsx("div",{className:"overflow-x-scroll scrollbar-x",children:t.jsx(u,{columns:g,dataSource:e.dataSource,loading:e.loading,pagination:!1})})})]})}))}}}));
