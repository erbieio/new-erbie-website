import{j as e,r as m}from"./react-Dbae-1t-.js";import{f as B,b as c,u as b,r as P,s as F,l as S,t as z,v as _,m as E,w as L,x as G,o as R}from"./index-D9Wn6AEW.js";import{f as X}from"./react-router-xprjhg_w.js";import{P as H,F as I}from"./antd-B5ZNfozw.js";import{f as T}from"./ethers-BstvhKrt.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DZNLuWiI.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-Jg3vAkUA.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-BVoFLaC3.js";import"./@ant-design-cuQt8M9U.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-BVHHFr75.js";import"./rc-motion-BZqazZvp.js";import"./rc-tooltip-DnJT57xg.js";import"./@rc-component-CUxUE6TK.js";import"./rc-overflow-NmepX_0j.js";import"./rc-menu-B0tG2zAN.js";import"./rc-select-WrRboq2N.js";import"./rc-virtual-list-CazHB5-2.js";import"./rc-field-form-BUohAxhv.js";import"./rc-dialog-D3B5c-yV.js";import"./rc-notification-u0yXLBVH.js";import"./rc-table-kU0EmM_j.js";import"./rc-tree-CEA37Pdq.js";import"./rc-checkbox-r8DBUZxc.js";import"./rc-pagination-UmMZijbf.js";import"./rc-picker-Bm-4DQFX.js";import"./rc-dropdown-Bl2C0d0y.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CqS0ikQ4.js";import"./rc-textarea-PNgz88ka.js";function U(l){var o,s,v,x,n,h,g,u,k;const a=d=>{if(d&&d.length){let f=0;for(let N=0;N<d.length;N++)f=f+d[N].gasPrice;return f/d.length}return 0};return e.jsxs("div",{className:"font-size-12px color-white card-detail-box",children:[e.jsxs("div",{className:" color-#D387FF lh-4.5vh font-bold  text-left px-16px",children:["Block Details # ",(o=l.data)==null?void 0:o.number]}),e.jsxs("div",{className:"flex justify-between items-center line lh-3vh",children:[e.jsx("div",{className:" whitespace-nowrap text-ellipsis",children:"Block Generation Time"}),e.jsx("div",{className:"whitespace-nowrap text-ellipsis",children:B(((s=l.data)==null?void 0:s.timestamp)||0)})]}),e.jsxs("div",{className:"flex justify-between items-center line lh-3vh",children:[e.jsx("div",{children:"Block Size"}),e.jsxs("div",{children:[((v=l.data)==null?void 0:v.size)||0," Bytes"]})]}),e.jsxs("div",{className:"flex justify-between items-center line lh-3vh",children:[e.jsx("div",{children:"Gas Used"}),e.jsxs("div",{children:[(x=l.data)==null?void 0:x.gasUsed,"(",((((n=l.data)==null?void 0:n.gasUsed)||0)/(((h=l.data)==null?void 0:h.gasLimit)||0)).toFixed(4),"%)"]})]}),e.jsxs("div",{className:"flex justify-between items-center line lh-3vh",children:[e.jsx("div",{children:"Gas Price"}),e.jsxs("div",{children:[a(((g=l.listTX)==null?void 0:g.transactions)||[])/1e9," GWei"]})]}),e.jsxs("div",{className:"flex justify-between items-center line lh-3vh",children:[e.jsx("div",{children:"Gas Limit"}),e.jsx("div",{children:(u=l.data)==null?void 0:u.gasLimit})]}),e.jsxs("div",{className:"flex justify-between items-center line lh-3vh",children:[e.jsx("div",{children:"Parent Hash"}),e.jsx("div",{className:"link hover:color-blue",children:c(((k=l.data)==null?void 0:k.parentHash)||"",6,6)})]})]})}function O(l){const{toAccountDetail:a}=b();return e.jsxs("div",{className:"font-size-12px color-white card-detail-box text-left h-20vh",children:[e.jsx("div",{className:"px-16px color-#D387FF lh-4.5vh font-bold",children:"Details"}),l==null?void 0:l.list.map((o,s)=>e.jsx("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap hover:color-#8AA4FF cursor-pointer",onClick:()=>a(o),children:c(o)},s))]})}function W(l){const{toAccountDetail:a}=b();return e.jsxs("div",{className:"font-size-12px color-white card-detail-box text-left",children:[e.jsx("div",{className:"px-16px color-#D387FF lh-4.5vh font-bold ",children:"Blackhole Block Details"}),e.jsxs("div",{className:"flex color-#80838e line py-5px",children:[e.jsx("div",{className:"w-33.3% text-left",children:"Penalty Address"}),e.jsx("div",{className:"w-33.3% text-center",children:"Penalty Weight"}),e.jsx("div",{className:"w-33.3% text-right",children:"Current Weight"})]}),l.list.map((o,s)=>e.jsxs("div",{className:"flex line lh-2.5vh text-center",children:[e.jsx("div",{className:"w-33.3% color-#8AA4FF text-left cursor-pointer",onClick:()=>a(o.address),children:c(o.address,3,5)}),e.jsx("div",{className:"w-33.3%",children:"20"}),e.jsx("div",{className:"w-33.3%  text-right",children:o.weight})]},s))]})}function M(l){const{toAccountDetail:a}=b();return e.jsxs("div",{className:"font-size-12px color-white card-detail-box text-left h-auto lg:h-180px",children:[e.jsx("div",{className:"px-16px color-#D387FF lh-4.5vh font-bold",children:"Node Address"}),l.list.map((o,s)=>e.jsx("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap hover:color-#8AA4FF cursor-pointer",onClick:()=>a(o),children:c(o)},s))]})}function V(l){var o,s;const{toAccountDetail:a}=b();return e.jsxs("div",{className:"font-size-12px color-white card-detail-box text-left",children:[e.jsx("div",{className:" color-#D387FF lh-4.5vh font-bold  text-left px-16px",children:"Punishment Details"}),e.jsxs("div",{className:"list-block h-auto lg:h-190px",children:[e.jsxs("div",{className:"flex justify-evenly line",children:[e.jsx("div",{className:"w-35%",children:"Address"}),e.jsx("div",{className:"w-25%",children:"Number"}),e.jsx("div",{className:"w-40%",children:"Type "})]}),e.jsx("div",{children:(s=(o=l==null?void 0:l.data)==null?void 0:o.data)==null?void 0:s.map((v,x)=>e.jsxs("div",{className:"flex h-2.8vh line items-center",children:[e.jsx("div",{className:"w-35% hover:color-#8AA4FF cursor-pointer",onClick:()=>a(v.address),children:c(v.address,4,4)}),e.jsx("div",{className:"w-25%",children:v.block_number}),e.jsx("div",{className:"w-40%",children:"Multi-signatures "})]},x))})]})]})}function $(l){var g,u,k,d,f,N,r;const[a,o]=m.useState(),[s,v]=m.useState([]),[x,n]=m.useState([]),{toAccountDetail:h}=b();return m.useEffect(()=>{var t,p,A;if(l.data){const j=(t=l.data)==null?void 0:t.find(w=>w.identity===1);j&&o(j);const C=(p=l.data)==null?void 0:p.filter(w=>w.identity===2);v(C);const y=(A=l.data)==null?void 0:A.filter(w=>w.identity===3);n(y)}},[l.data]),e.jsxs("div",{className:"font-size-12px color-white card-detail-box text-left",children:[e.jsx("div",{className:"color-#D387FF lh-4.5vh font-bold  text-left px-16px",children:"Reward List"}),e.jsx("div",{className:"font-bold line  lh-3vh",children:"Proposer"}),e.jsx("div",{className:"line lh-3vh",children:e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>h((a==null?void 0:a.address)||""),children:c((a==null?void 0:a.address)||"")})}),e.jsx("div",{className:"font-bold line lh-3vh",children:"Validator"}),e.jsxs("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap",children:[e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[0])==null?void 0:t.address)||"")},children:c((g=s[0])==null?void 0:g.address,6,6)}),e.jsx("span",{className:"mx-5px",children:"|"}),e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[1])==null?void 0:t.address)||"")},children:c((u=s[1])==null?void 0:u.address,6,6)})]}),e.jsxs("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap",children:[e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[2])==null?void 0:t.address)||"")},children:c((k=s[2])==null?void 0:k.address,6,6)}),e.jsx("span",{className:"mx-5px",children:"|"}),e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[3])==null?void 0:t.proxy)||"")},children:c((d=s[3])==null?void 0:d.address,6,6)})]}),e.jsxs("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap",children:[e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[4])==null?void 0:t.address)||"")},children:c((f=s[4])==null?void 0:f.address,6,6)}),e.jsx("span",{className:"mx-5px",children:"|"}),e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[5])==null?void 0:t.address)||"")},children:c((N=s[5])==null?void 0:N.address,6,6)})]}),e.jsx("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap",children:e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var t;return h(((t=s[6])==null?void 0:t.address)||"")},children:c((r=s[6])==null?void 0:r.address,6,6)})}),e.jsx("div",{className:"font-bold line  lh-3vh",children:"Staker"}),e.jsx("div",{className:"line lh-3vh text-ellipsis whitespace-nowrap flex",children:x.map((t,p)=>e.jsxs("div",{children:[e.jsx("span",{className:"link hover:color-#8AA4FF",onClick:()=>h((t==null?void 0:t.address)||""),children:c(t==null?void 0:t.address,2,2)}),p!==x.length-1?e.jsx("span",{className:"mx-5px",children:"|"}):e.jsx(e.Fragment,{})]},p))})]})}function q(l){var h,g,u,k,d,f,N;const[a,o]=m.useState(),[s,v]=m.useState([]),{toAccountDetail:x}=b(),n="0x0000000000000000000000000000000000000000";return m.useEffect(()=>{var r,t;if(l.data){const p=(r=l.data)==null?void 0:r.find(j=>j.identity===1);p&&o(p);const A=(t=l.data)==null?void 0:t.filter(j=>j.identity===2);v(A)}},[l.data]),e.jsxs("div",{className:"font-size-12px color-white card-detail-box text-left",children:[e.jsx("div",{className:"px-16px color-#D387FF lh-4.5vh font-bold ",children:"Delegated Accounts"}),e.jsxs("div",{className:"line lh-3vh  flex justify-between",children:[e.jsxs("span",{className:"link hover:color-#8AA4FF",onClick:()=>x((a==null?void 0:a.proxy)||""),children:[e.jsx("img",{src:P,className:"w-12px mr-3px",alt:""}),c((a==null?void 0:a.proxy)||n,2,3)," "]}),e.jsx("span",{className:"mx-3px",children:"|"}),e.jsxs("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var r;return x(((r=s[0])==null?void 0:r.proxy)||"")},children:[e.jsx("img",{src:F,className:"h-12px mr-3px",alt:""}),c(((h=s[0])==null?void 0:h.proxy)||n,2,3)]}),e.jsx("span",{className:"mx-3px",children:"|"}),e.jsxs("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var r;return x(((r=s[1])==null?void 0:r.proxy)||n)},children:[e.jsx("img",{src:F,className:"h-12px m4-3px",alt:""}),c(((g=s[1])==null?void 0:g.proxy)||n,2,3)]})]}),e.jsxs("div",{className:"line lh-3vh  flex justify-between",children:[e.jsxs("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var r;return x(((r=s[2])==null?void 0:r.proxy)||n)},children:[e.jsx("img",{src:F,className:"h-12px mr-3px",alt:""}),c(((u=s[2])==null?void 0:u.proxy)||n,2,3)]}),e.jsx("span",{className:"mx-3px",children:"|"}),e.jsxs("span",{className:"link ",onClick:()=>{var r;return x(((r=s[3])==null?void 0:r.proxy)||n)},children:[e.jsx("img",{src:F,className:"h-12px mr-3px",alt:""}),c(((k=s[3])==null?void 0:k.proxy)||n,2,3)]}),e.jsx("span",{className:"mx-3px",children:"|"}),e.jsxs("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var r;return x(((r=s[4])==null?void 0:r.proxy)||n)},children:[e.jsx("img",{src:F,className:"h-12px mr-3px",alt:""}),c(((d=s[4])==null?void 0:d.proxy)||n,2,3)]})]}),e.jsxs("div",{className:"line lh-3vh flex justify-start",children:[e.jsxs("span",{className:"link hover:color-#8AA4FF",onClick:()=>{var r;return x(((r=s[5])==null?void 0:r.proxy)||"")},children:[e.jsx("img",{src:F,className:"h-12px mr-3px",alt:""}),c(((f=s[5])==null?void 0:f.proxy)||n,2,3)]}),e.jsx("span",{className:"mx-3px",children:"|"}),e.jsxs("span",{className:"link ",onClick:()=>{var r;return x(((r=s[6])==null?void 0:r.proxy)||"")},children:[e.jsx("img",{src:F,className:"h-12px mr-3px",alt:""}),c(((N=s[6])==null?void 0:N.proxy)||n,2,3)]})]})]})}function xs(){const l=X(),a=m.useRef({page:1,page_size:10}),o=i=>{a.current.page=i},{toAccountDetail:s,toTxDetail:v}=b(),[x]=m.useState(0),[n,h]=m.useState(),g=[{title:"TXN Hash",key:"hash",align:"center",fixed:"left",render(i){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>v(i.hash),children:c(i.hash,6,6)})}},{title:"TXN Time",key:"timestamp",align:"center",width:70,render(i){return e.jsx("div",{className:"whitespace-nowrap",children:B(i.timestamp)})}},{title:"Sender",key:"from",align:"center",render(i){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>s(i.from),children:c(i.from,6,6)})}},{title:"Receiver",key:"to",align:"center",width:150,render(i){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>s(i.to),children:c(i.to,6,6)})}},{title:"Transaction Value",key:"value",align:"center",render(i){return T(i.value)}},{title:"TXN Type",key:"input",align:"center",render(i){return e.jsx("div",{className:"overflow-hidden whitespace-nowrap",title:S(i.input),children:S(i.input)})}},{title:"Status",key:"status",align:"center",render(i){return e.jsx("div",{className:"px-4px rounded-4px ".concat(i.status===1?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," rgba(168, 255, 210, .2)"),children:i.status===1?"Success":"Defeat"})}},{title:"TXN Fee",align:"center",key:"gasPrice",render(i){return z(T(i.gasPrice*i.gasUsed),R)}}],[u,k]=m.useState(),[d,f]=m.useState(),N=async()=>{if(l.blockNumber){const i=await _(l.blockNumber);k(i)}},r=async()=>{l.blockNumber&&(a.current.number=Number(l.blockNumber));const i=await E(a.current);h(i)},t=async()=>{if(l.blockNumber){const i=await L(Number(l.blockNumber));f(i)}},[p,A]=m.useState(),[j,C]=m.useState(),y=m.useMemo(()=>{if(j&&p){if(j.data.length)return 1;if(p.data.length)return 2}return 3},[j,p]),w=async i=>{const D=await G({page:1,page_size:6,reason:i,number:Number(l.blockNumber)});i===1&&C(D),i===2&&A(D)};return m.useEffect(()=>{N(),r(),t(),w(1),w(2)},[]),e.jsxs("div",{className:"block-detail flex flex-col lg:flex-row lg:h-72vh",children:[e.jsxs("div",{className:"lg:w-340px flex flex-col lg:flex-row lg:flex-col gap-1.3vh mt-14px lg:mt-0",children:[e.jsx(U,{data:d,listTX:n}),y===2?e.jsxs(e.Fragment,{children:[e.jsx(V,{data:p}),e.jsx(O,{list:(d==null?void 0:d.proof)||[]})]}):e.jsx(e.Fragment,{}),y===1?e.jsxs(e.Fragment,{children:[e.jsx(W,{list:(j==null?void 0:j.data)||[]}),e.jsx(M,{list:(d==null?void 0:d.proposers)||[]})]}):e.jsx(e.Fragment,{}),y===3?e.jsxs(e.Fragment,{children:[e.jsx($,{data:u}),e.jsx(q,{data:u})]}):e.jsx(e.Fragment,{})]}),e.jsxs("div",{className:"flex-1 lg:ml-20px table-box mt-14px lg:mt-0",children:[e.jsxs("div",{className:"text-left px-10px py-8px lh-4vh flex flex-col lg:flex-row items-center justify-between w-100%",children:[e.jsx("div",{className:"font-size-16px",children:"TRANSACTIONS LIST"}),e.jsx("div",{children:e.jsx(H,{current:a.current.page,pageSize:a.current.page_size,total:x,onChange:o})})]}),e.jsx("div",{className:" overflow-x-scroll scrollbar-x h-100% lg:h-60vh",children:e.jsx(I,{columns:g,dataSource:n==null?void 0:n.transactions,pagination:!1})})]})]})}export{xs as default};
