import{j as e,r}from"./react-Dbae-1t-.js";import{u as A,c as x,f as _,t as u,m as L,h as M,p as P,g as H,q as $,n as V,r as q,i as J}from"./index-CLaTjx55.js";import{F as B,s as Q,c as I,P as U}from"./antd-B5ZNfozw.js";import{f}from"./ethers-BstvhKrt.js";import{T as W}from"./Table-DO5BEPwe.js";import{l as K}from"./react-copy-to-clipboard-C0D6sVbx.js";import{f as z,c as Y}from"./react-router-xprjhg_w.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DZNLuWiI.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-Jg3vAkUA.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-BVoFLaC3.js";import"./@ant-design-cuQt8M9U.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-BVHHFr75.js";import"./rc-motion-BZqazZvp.js";import"./rc-tooltip-DnJT57xg.js";import"./@rc-component-CUxUE6TK.js";import"./rc-overflow-NmepX_0j.js";import"./rc-menu-B0tG2zAN.js";import"./rc-select-WrRboq2N.js";import"./rc-virtual-list-CazHB5-2.js";import"./rc-field-form-BUohAxhv.js";import"./rc-dialog-D3B5c-yV.js";import"./rc-notification-u0yXLBVH.js";import"./rc-table-kU0EmM_j.js";import"./rc-tree-CEA37Pdq.js";import"./rc-checkbox-r8DBUZxc.js";import"./rc-pagination-UmMZijbf.js";import"./rc-picker-Bm-4DQFX.js";import"./rc-dropdown-Bl2C0d0y.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CqS0ikQ4.js";import"./rc-textarea-PNgz88ka.js";import"./copy-to-clipboard-D4KqLzmm.js";import"./toggle-selection-BHUZwh74.js";function Z(t){const{toAccountDetail:n,toTxDetail:c}=A(),a=[{title:e.jsx("div",{className:"whitespace-nowrap",children:"TXN Hash"}),key:"hash",align:"center",render(s){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>c(s.hash),children:x(s.hash,6,6)})}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"TXN Time"}),key:"timestamp",align:"center",width:70,render(s){return e.jsx("div",{className:"whitespace-nowrap",children:_(s.timestamp)})}},{title:"Sender",key:"from",align:"center",render(s){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>n(s.from),children:x(s.from,6,6)})}},{title:"Receiver",key:"to",align:"center",width:150,render(s){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>n(s.to),children:x(s.to,6,6)})}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Transaction Value"}),key:"value",align:"center",render(s){return u(f(s.value),M)}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"TXN Type"}),key:"input",align:"center",render(s){return e.jsx("div",{className:"overflow-hidden whitespace-nowrap",title:L(s.input),children:L(s.input)})}},{title:"Status",key:"status",align:"center",render(s){return e.jsx("div",{className:"px-4px rounded-4px ".concat(s.status===1?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," rgba(168, 255, 210, .2)"),children:s.status===1?"Success":"Defeat"})}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"TXN Fee"}),align:"center",key:"gasPrice",render(s){return u(f(s.gasPrice*s.gasUsed),P)}}];return e.jsx("div",{children:e.jsx(B,{pagination:!1,dataSource:t.list,loading:t.loading,columns:a})})}function ee(t){const{toAccountDetail:n,toTxDetail:c}=A(),a=[{title:"Account",key:t.type===2?"staker":"validator",render(s){const o=s,m=t.type===2?o.staker:o.validator;return e.jsx("span",{className:"link hover:color-blue",onClick:()=>n(m),children:x(m,6,6)})}},{title:"TXN Hash",key:"tx_hash",render(s){const o=s;return e.jsx("span",{className:"link hover:color-blue",onClick:()=>c(o.tx_hash),children:x(o.tx_hash,3,3)})}},{title:"Block Height",key:"block_number"},{title:"Stake Time",key:"timestamp",render(s){return _(s.timestamp)}},{title:"Value",key:"amount",render(s){return f(s.amount)}}];return e.jsx("div",{children:e.jsx(W,{columns:a,dataSources:t.list,loading:t.loading})})}function te(t){const{toAccountDetail:n}=A();r.useEffect(()=>{},[t.list]);const c=[{title:"Address",fixed:"left",align:"center",key:"address",render(a){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>n(a.address),children:x(a.address,6,6)})}},{title:e.jsxs("div",{className:"whitespace-nowrap",children:["SNFT Number",e.jsx("i",{className:"i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"})]}),key:"address",align:"center",render(a){return parseInt(a.address.slice(3),16)}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Creation Time"}),key:"createdAt",align:"center",render(a){return e.jsx("div",{className:"whitespace-nowrap",children:_(a.reward_at)})}},{title:"Creator",key:"creator",align:"center",render(a){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>n(a.creator),children:a.creator?x(a.creator,6,6):"-"})}},{title:"Owner",key:"owner",align:"center",render(a){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>n(a.owner),children:a.owner?x(a.owner,6,6):"-"})}},{title:e.jsx("div",{className:"whitespace-nowrap",children:"Owner Get Time"}),key:"reward_at",align:"center",render(a){return _(a.reward_at)}}];return e.jsx("div",{children:e.jsx(B,{pagination:!1,dataSource:t.list,loading:t.loading,columns:c})})}function se(t){var o,m,v,g,h,N,w,k,y,b;const n=z(),[c,a]=r.useState("");r.useEffect(()=>{n.address&&a(n.address)},[n]);const s=r.useMemo(()=>{var T,S,C;return(T=t.data)!=null&&T.stakerReward?u(f((BigInt((S=t.data)==null?void 0:S.stakerReward)+BigInt((C=t.data)==null?void 0:C.validatorReward)).toString()),4):0},[(o=t.data)==null?void 0:o.stakerReward,(m=t.data)==null?void 0:m.validatorReward]);return e.jsxs("div",{className:"card-box h-100% flex flex-col justify-evenly mt-14px lg:mt-0",children:[e.jsxs("div",{children:[e.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-16px pt-10px lg:pt-0",children:"Account Detail"}),e.jsxs("div",{className:"link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between",children:[e.jsxs("span",{children:[" ",x(c)," "]})," ",e.jsx(K.CopyToClipboard,{text:c,onCopy:()=>Q.open({content:"Copied to clipboard",type:"success"}),children:e.jsx("i",{className:"i-ep-copy-document color-white font-size-18px"})})]}),e.jsx("div",{className:"px-16px",children:e.jsx(I,{loading:t.loading,active:!0,paragraph:{rows:6},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"ERB Balance"}),e.jsxs("div",{children:[u(f(((v=t.data)==null?void 0:v.balance)||"0"))," ERB"]})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Total Staking"}),e.jsx("div",{children:u(f(((g=t.data)==null?void 0:g.stakerAmount)||"0"))})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Total Staked"}),e.jsx("div",{children:u(f(((h=t.data)==null?void 0:h.validatorAmount)||"0"))})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center  text-line",children:[e.jsx("div",{children:"Online Weight"}),e.jsx("div",{children:(N=t.data)==null?void 0:N.weight})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"ERB Income"}),e.jsx("div",{children:s})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"TXN"}),e.jsx("div",{children:(w=t.data)==null?void 0:w.nonce})]}),e.jsx("div",{className:"line"})]})})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-14px",children:"Other Information"}),e.jsx("div",{className:"px-16px",children:e.jsx(I,{loading:t.loading,active:!0,paragraph:{rows:3},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Owned CSBT"}),e.jsx("div",{children:(k=t.data)==null?void 0:k.snftCount})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Royalty profits"}),e.jsxs("div",{children:[u(((y=t.data)==null?void 0:y.profit)||"0")," ERB"]})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Owned NFTs"}),e.jsx("div",{children:(b=t.data)==null?void 0:b.nftCount})]}),e.jsx("div",{className:"line"})]})})})]})]})}function yt(){const t=z(),n=Y(),[c,a]=r.useState(!1),s=H(),[o,m]=r.useState(0),[v,g]=r.useState(),[h,N]=r.useState([{label:"TXN",checked:!0,value:1},{label:"Staked",checked:!1,value:2},{label:"CSBT",checked:!1,value:3}]),[w,k]=r.useState([]),[y,b]=r.useState([]),[T,S]=r.useState([]),[C,E]=r.useState(!1),X=async i=>{try{E(!0);const d=await $(i);g(d)}finally{setTimeout(()=>{E(!1)},100)}},p=r.useRef({page:1,page_size:10}),R=async()=>{try{a(!0);const i=await V({...p.current,addr:t.address});k(i.transactions),m(i.total)}finally{a(!1)}},D=async()=>{try{if(a(!0),l===2){const i={...p.current,staker:l===2?t.address:""},d=await q(i);b(d.data),m(d.total)}}finally{a(!1)}},F=async()=>{try{a(!0);const i=await J({...p.current,owner:t.address});S(i.nfts),m(i.total)}finally{a(!1)}},l=r.useMemo(()=>{var i;return p.current.page=1,(i=h.find(d=>d.checked))==null?void 0:i.value},[h]),O=i=>{const d=h.map(j=>j);d.forEach(j=>{j.value===i.value?j.checked=!0:j.checked=!1}),N(d)};r.useEffect(()=>{t.address&&(l===1&&R(),l===2&&D(),l===3&&F())},[n.pathname,t.address,l]);const G=i=>{p.current.page=i,l===1&&R(),l===2&&D(),l===3&&F()};return r.useEffect(()=>{t.address&&X(t.address)},[t.address]),e.jsxs("div",{className:"account-detail flex h-100% flex-col lg:flex-row lg:h-72vh",children:[e.jsx("div",{className:"w-100% lg:w-330px",children:e.jsx(se,{loading:C,data:v})}),e.jsxs("div",{className:"lg:w-70% lg:ml-24px flex flex-col gap-2vh mt-20px lg:mt-0",children:[e.jsx("div",{className:"flex font-size-14px gap-1vh justify-between",children:h.map((i,d)=>e.jsx("div",{onClick:()=>O(i),className:"w-32% bg-#2A223E lh-4vh cursor-pointer menu-card ".concat(i.checked?"active":""),children:i.label},d))}),e.jsxs("div",{className:"table-box h-100%",children:[e.jsxs("div",{className:"text-left px-10px py-8px lh-4vh flex flex-row items-center justify-between w-100%",children:[e.jsx("div",{className:"font-size-16px hidden lg:block",children:"TRANSACTIONS LIST"}),e.jsx("div",{className:"font-size-16px block lg:hidden",children:"TRANSACTIONS"}),e.jsx("div",{children:e.jsx(U,{current:p.current.page,pageSize:p.current.page_size,total:o,onChange:G,showQuickJumper:!!s.isMobile,simple:!!s.isMobile})})]}),e.jsxs("div",{className:" overflow-x-scroll scrollbar-x lg:h-60vh",children:[l===1?e.jsx(Z,{list:w,loading:c}):e.jsx(e.Fragment,{}),l===2?e.jsx(ee,{list:y,loading:c,type:l}):e.jsx(e.Fragment,{}),l===3?e.jsx(te,{list:T,loading:c}):e.jsx(e.Fragment,{})]})]})]})]})}export{yt as default};
