import{j as e,r as i}from"./react-Dbae-1t-.js";import{u as E,b as m,f as _,t as h,l as R,e as G,o as P,p as H,m as M,q as $,h as V}from"./index-BF0BSGFc.js";import{F as D,s as q,c as B,P as U}from"./antd-DAkfjCL3.js";import{f as p}from"./ethers--KTxgaFs.js";import{T as W}from"./Table-D0q6FHG3.js";import{l as J}from"./react-copy-to-clipboard-C0D6sVbx.js";import{f as I,c as K}from"./react-router-xprjhg_w.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DP2quqAp.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./react-transition-group-BAxSnyq0.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./moment-CbGOrKEH.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./rc-util-EzFa6Sk3.js";import"./@ant-design-CpSj2o_1.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-APHP0lmT.js";import"./rc-motion-CHgVpSnu.js";import"./rc-tooltip-CWDKJ352.js";import"./@rc-component-BwJj1XrC.js";import"./rc-overflow-B7atUzjy.js";import"./rc-menu-DstS957B.js";import"./rc-select-DfUtNXTk.js";import"./rc-virtual-list-khs1ZQ38.js";import"./rc-field-form-BVbN0N0C.js";import"./rc-notification-CrSkqE7m.js";import"./rc-table-BHxaoavx.js";import"./rc-tree-Csjy5B6L.js";import"./rc-checkbox-BIqD4YZd.js";import"./rc-pagination-DjL2-7nn.js";import"./rc-picker-CbG8ME25.js";import"./rc-dropdown-BUgfdAv9.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-CXG740_T.js";import"./rc-textarea-u6IfKFWK.js";import"./copy-to-clipboard-D4KqLzmm.js";import"./toggle-selection-BHUZwh74.js";function Q(a){const{toAccountDetail:r}=E(),l=[{title:"TXN Hash",key:"hash",align:"center",render(t){return e.jsx("span",{className:"link hover:color-blue",children:m(t.hash,6,6)})}},{title:"TXN Time",key:"timestamp",align:"center",width:70,render(t){return e.jsx("div",{className:"whitespace-nowrap",children:_(t.timestamp)})}},{title:"Sender",key:"from",align:"center",render(t){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(t.from),children:m(t.from,6,6)})}},{title:"Receiver",key:"to",align:"center",width:150,render(t){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(t.to),children:m(t.to,6,6)})}},{title:"Transaction Value",key:"value",align:"center",render(t){return h(p(t.value),G)}},{title:"TXN Type",key:"input",align:"center",render(t){return e.jsx("div",{className:"overflow-hidden whitespace-nowrap",title:R(t.input),children:R(t.input)})}},{title:"Status",key:"status",align:"center",render(t){return e.jsx("div",{className:"px-4px rounded-4px ".concat(t.status===1?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," rgba(168, 255, 210, .2)"),children:t.status===1?"Success":"Defeat"})}},{title:"TXN Fee",align:"center",key:"gasPrice",render(t){return h(p(t.gasPrice*t.gasUsed),P)}}];return e.jsx("div",{children:e.jsx(D,{pagination:!1,dataSource:a.list,loading:a.loading,columns:l})})}function Y(a){const{toAccountDetail:r}=E(),l=[{title:"Account",key:a.type===2?"staker":"validator",render(t){const c=t,d=a.type===2?c.staker:c.validator;return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(d),children:m(d,6,6)})}},{title:"TXN Hash",key:"tx_hash",render(t){const c=t;return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(c.tx_hash),children:m(c.tx_hash,3,3)})}},{title:"Block Height",key:"block_number"},{title:"Stake Time",key:"timestamp",render(t){return _(t.timestamp)}},{title:"Value",key:"amount",render(t){return p(t.amount)}}];return e.jsx("div",{children:e.jsx(W,{columns:l,dataSources:a.list,loading:a.loading})})}function Z(a){const{toAccountDetail:r}=E();i.useEffect(()=>{},[a.list]);const l=[{title:"Address",fixed:"left",align:"center",key:"address",render(t){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(t.address),children:m(t.address,6,6)})}},{title:e.jsxs("div",{children:["SNFT Number",e.jsx("i",{className:"i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"})]}),key:"address",align:"center",render(t){return parseInt(t.address.slice(3),16)}},{title:"Creation Time",key:"createdAt",align:"center",render(t){return _(t.reward_at)}},{title:"Creator",key:"creator",align:"center",render(t){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(t.creator),children:t.creator?m(t.creator,6,6):"-"})}},{title:"Owner",key:"owner",align:"center",render(t){return e.jsx("span",{className:"link hover:color-blue",onClick:()=>r(t.owner),children:t.owner?m(t.owner,6,6):"-"})}},{title:"Owner Get Time",key:"reward_at",align:"center",render(t){return _(t.reward_at)}}];return e.jsx("div",{children:e.jsx(D,{pagination:!1,dataSource:a.list,loading:a.loading,columns:l})})}function ee(a){var d,v,g,x,k,N,y,b,w,T;const r=I(),[l,t]=i.useState("");i.useEffect(()=>{r.address&&t(r.address)},[r]);const c=i.useMemo(()=>{var S,C,f;return(S=a.data)!=null&&S.stakerReward?h(p((BigInt((C=a.data)==null?void 0:C.stakerReward)+BigInt((f=a.data)==null?void 0:f.validatorReward)).toString()),4):0},[(d=a.data)==null?void 0:d.stakerReward,(v=a.data)==null?void 0:v.validatorReward]);return e.jsxs("div",{className:"card-box h-100% flex flex-col justify-evenly mt-14px lg:mt-0",children:[e.jsxs("div",{children:[e.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-16px",children:"Account Detail"}),e.jsxs("div",{className:"link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between",children:[e.jsxs("span",{children:[" ",m(l)," "]})," ",e.jsx(J.CopyToClipboard,{text:l,onCopy:()=>q.open({content:"Copied to clipboard",type:"success"}),children:e.jsx("i",{className:"i-ep-copy-document color-white font-size-18px"})})]}),e.jsx("div",{className:"px-16px",children:e.jsx(B,{loading:a.loading,active:!0,paragraph:{rows:6},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"ERB Balance"}),e.jsxs("div",{children:[h(p(((g=a.data)==null?void 0:g.balance)||"0"))," ERB"]})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Total Staking"}),e.jsx("div",{children:h(p(((x=a.data)==null?void 0:x.stakerAmount)||"0"))})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Total Staked"}),e.jsx("div",{children:h(p(((k=a.data)==null?void 0:k.validatorAmount)||"0"))})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center  text-line",children:[e.jsx("div",{children:"Online Weight"}),e.jsx("div",{children:(N=a.data)==null?void 0:N.weight})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"ERB Income"}),e.jsx("div",{children:c})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"TXN"}),e.jsx("div",{children:(y=a.data)==null?void 0:y.nonce})]}),e.jsx("div",{className:"line"})]})})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-14px",children:"Other Information"}),e.jsx("div",{className:"px-16px",children:e.jsx(B,{loading:a.loading,active:!0,paragraph:{rows:3},children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Owned CSBT"}),e.jsx("div",{children:(b=a.data)==null?void 0:b.snftCount})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Royalty profits"}),e.jsxs("div",{children:[h(((w=a.data)==null?void 0:w.profit)||"0")," ERB"]})]}),e.jsx("div",{className:"line"}),e.jsxs("div",{className:"flex justify-between items-center text-line",children:[e.jsx("div",{children:"Owned NFTs"}),e.jsx("div",{children:(T=a.data)==null?void 0:T.nftCount})]}),e.jsx("div",{className:"line"})]})})})]})]})}function kt(){const a=I(),r=K(),[l,t]=i.useState(!1),[c,d]=i.useState(0),[v,g]=i.useState(),[x,k]=i.useState([{label:"TXN",checked:!0,value:1},{label:"Staked",checked:!1,value:2},{label:"CSBT",checked:!1,value:3}]),[N,y]=i.useState([]),[b,w]=i.useState([]),[T,S]=i.useState([]),[C,f]=i.useState(!1),X=async s=>{try{f(!0);const o=await H(s);g(o)}finally{setTimeout(()=>{f(!1)},100)}},u=i.useRef({page:1,page_size:10}),A=async()=>{try{t(!0);const s=await M({...u.current,addr:a.address});y(s.transactions),d(s.total)}finally{t(!1)}},F=async()=>{try{if(t(!0),n===2){const s={...u.current,staker:n===2?a.address:""},o=await $(s);w(o.data),d(o.total)}}finally{t(!1)}},L=async()=>{try{t(!0);const s=await V({...u.current,owner:a.address});S(s.nfts),d(s.total)}finally{t(!1)}},n=i.useMemo(()=>{var s;return u.current.page=1,(s=x.find(o=>o.checked))==null?void 0:s.value},[x]),z=s=>{const o=x.map(j=>j);o.forEach(j=>{j.value===s.value?j.checked=!0:j.checked=!1}),k(o)};i.useEffect(()=>{a.address&&(n===1&&A(),n===2&&F(),n===3&&L())},[r.pathname,a.address,n]);const O=s=>{u.current.page=s,n===1&&A(),n===2&&F(),n===3&&L()};return i.useEffect(()=>{a.address&&X(a.address)},[a.address]),e.jsxs("div",{className:"account-detail flex h-100% flex-col lg:flex-row lg:h-72vh",children:[e.jsx("div",{className:"w-100% lg:w-330px",children:e.jsx(ee,{loading:C,data:v})}),e.jsxs("div",{className:"lg:w-70% lg:ml-24px flex flex-col gap-2vh mt-20px lg:mt-0",children:[e.jsx("div",{className:"flex font-size-14px gap-1vh justify-between",children:x.map((s,o)=>e.jsx("div",{onClick:()=>z(s),className:"w-32% bg-#2A223E lh-4vh cursor-pointer menu-card ".concat(s.checked?"active":""),children:s.label},o))}),e.jsxs("div",{className:"table-box h-100%",children:[e.jsxs("div",{className:"text-left px-10px py-8px lh-4vh flex flex-col lg:flex-row items-center justify-between w-100%",children:[e.jsx("div",{className:"font-size-16px",children:"TRANSACTIONS LIST"}),e.jsx("div",{children:e.jsx(U,{current:u.current.page,pageSize:u.current.page_size,total:c,onChange:O})})]}),e.jsxs("div",{className:" overflow-x-scroll scrollbar-x lg:h-60vh",children:[n===1?e.jsx(Q,{list:N,loading:l}):e.jsx(e.Fragment,{}),n===2?e.jsx(Y,{list:b,loading:l,type:n}):e.jsx(e.Fragment,{}),n===3?e.jsx(Z,{list:T,loading:l}):e.jsx(e.Fragment,{})]})]})]})]})}export{kt as default};