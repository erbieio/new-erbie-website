import{j as t,r as n}from"./react-Dbae-1t-.js";import{C as y}from"./Copy-COGTfV1E.js";import{u as T,b as C,J as b,T as L,t as S,K as A,L as w,M as E}from"./index-Df7LHhoT.js";import{f as k}from"./ethers-BstvhKrt.js";/* empty css                  */import{F as H}from"./antd-B1Bfy7T0.js";import{T as R}from"./TxList-Yx7LozXy.js";import{f as D}from"./react-router-xprjhg_w.js";import"./call-bind-4VeKFXIy.js";import"./get-intrinsic-CWn9CxNF.js";import"./es-errors-DzOT6E3C.js";import"./has-symbols-eVqrYdw7.js";import"./has-proto-JnoBQRdH.js";import"./function-bind-BbkWVFrm.js";import"./hasown-DYqjtFKE.js";import"./set-function-length-D5MMniOg.js";import"./define-data-property-CxeqjjfW.js";import"./es-define-property-DnzLCweE.js";import"./gopd-9AXXY7mE.js";import"./has-property-descriptors-Ck9uAkqi.js";import"./react-copy-to-clipboard-D2eCtbQ0.js";import"./copy-to-clipboard-D4KqLzmm.js";import"./toggle-selection-BHUZwh74.js";import"./react-dom-RqR84h2O.js";import"./scheduler-D70Pw1t3.js";import"./react-router-dom-BQkrlkRx.js";import"./@remix-run-CSnr7utK.js";import"./react-redux-DZNLuWiI.js";import"./use-sync-external-store-BQt0fPyv.js";import"./@reduxjs-C9AHhNnv.js";import"./redux-BxK6wq0X.js";import"./immer-CuGu772C.js";import"./reselect-BDnngDK3.js";import"./redux-thunk-ClJT1hhx.js";import"./moment-CbGOrKEH.js";import"./react-transition-group-Jg3vAkUA.js";import"./@babel-DVGmkmWW.js";import"./dom-helpers-D0mFdbeO.js";import"./axios-BtoyVZBe.js";import"./promise.prototype.finally-DJCfT-IS.js";import"./define-properties-DbWdedhA.js";import"./object-keys-r3t7_5tw.js";import"./es-abstract-CgmC-o8X.js";import"./is-callable-DcnXhopT.js";import"./set-function-name-DTEANxoX.js";import"./functions-have-names-V93JBYlf.js";import"./echarts-CrZI9CbR.js";import"./tslib-BDyQ-Jie.js";import"./zrender-CQaTwPXd.js";import"./@ant-design-DhuGsSLu.js";import"./rc-util-b8MotyWn.js";import"./@emotion-CW87jbl0.js";import"./stylis-DsJDcYJc.js";import"./classnames-CwUkGHy7.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./@ctrl-4GH61kPu.js";import"./rc-resize-observer-BT50-agu.js";import"./rc-motion-CPn7kFV_.js";import"./rc-tooltip-BTFSS5G-.js";import"./@rc-component-CkHcVsFC.js";import"./rc-overflow-D66kcHkR.js";import"./rc-menu-FgsZTwbW.js";import"./rc-select-Brpe2Itd.js";import"./rc-virtual-list-WFI9C2wp.js";import"./rc-field-form-b9ZynPVK.js";import"./rc-dialog-BmS-XQkh.js";import"./rc-notification-cP4c8BM8.js";import"./rc-table-B1BzEA06.js";import"./rc-tree-De_PNtof.js";import"./rc-checkbox-DsYJivWK.js";import"./rc-pagination-BlBRvBEP.js";import"./rc-picker-pQPBJH7o.js";import"./rc-dropdown-CnEtRwlx.js";import"./throttle-debounce-CUWDS_la.js";import"./rc-input-BXdVvGXm.js";import"./rc-textarea-CoSCeEUD.js";const I="/assets/Logo-brandColor-BDcxUf-_.jpg",z="/assets/LLA-bot-img2-6-xN_TXzWY.jpg",P=e=>(e.name==="XL"||e.name==="L")&&t.jsxs("div",{children:[e.name==="XL"&&t.jsx("img",{src:I,className:"w-24px h-24px object-cover rounded-full"}),e.name==="L"&&t.jsx("img",{src:z,className:"w-24px h-24px object-cover rounded-full"})]}),X=e=>{var x,g,o,c,N,h,m,p,r,_,j,v,a;const{toAccountDetail:u}=T(),[f,l]=n.useState(0),i=async s=>{const d=await b(s);l(d)};return n.useEffect(()=>{var s;(s=e.data)!=null&&s.contract_address&&i(e.data.contract_address)},[(x=e.data)==null?void 0:x.contract_address]),t.jsxs("div",{className:"token-detail-card pt-16px lg:pt-5vh text-left",children:[t.jsx("div",{className:"title",children:"Token Detail"}),t.jsxs("div",{className:"mt-16px flex items-center gap-8px font-bold px-18px",children:[t.jsx(P,{name:(g=e.data)==null?void 0:g.token_name}),t.jsx("span",{className:"color-white",children:(o=e.data)==null?void 0:o.token_name}),t.jsx("span",{className:"color-#999",children:(c=e.data)==null?void 0:c.symbol})]}),t.jsxs("div",{className:"font-size-12px font-200",children:[t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:"Creator"}),t.jsxs("div",{children:[t.jsxs("span",{className:"link hover:color-#1677ff",onClick:()=>{var s;return u(((s=e.data)==null?void 0:s.contract_creator)||"")},children:[e.data?C(e.data.contract_creator,6,8):"-"," "]}),t.jsx(y,{text:((N=e.data)==null?void 0:N.contract_creator)||""})]})]}),t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:"Supply"}),t.jsxs("div",{children:[((h=e.data)==null?void 0:h.contract_type)==="ERC20"&&((m=e.data)!=null&&m.total_supply)?Number(k(BigInt(e.data.total_supply).toString())):"",((p=e.data)==null?void 0:p.contract_type)!=="ERC20"&&((r=e.data)!=null&&r.total_supply)?Number(e.data.total_supply):""]})]}),t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:"Transfers"}),t.jsx("div",{children:f||"-"})]}),t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:"Holders"}),t.jsx("div",{children:(_=e.data)==null?void 0:_.holders})]})]}),t.jsx("div",{className:"title mt-30px lg:mt-6vh",children:"Contract"}),t.jsxs("div",{className:"font-size-12px font-200",children:[t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:e.data?C(e.data.contract_address,10,10):""}),t.jsx("div",{children:t.jsx(y,{text:((j=e.data)==null?void 0:j.contract_address)||""})})]}),t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:"Verified"}),t.jsx("div",{children:(v=e.data)!=null&&v.verified?"Yes":"No"})]}),t.jsxs("div",{className:"line-card",children:[t.jsx("span",{children:"Calls"}),t.jsx("div",{children:(a=e.data)==null?void 0:a.call_times})]})]})]})};function F(e){const{toAccountDetail:u}=T(),f=localStorage.getItem("tokenType"),l=[{title:"Holder Address",align:"center",render(i){return t.jsx("div",{className:"link hover:color-#1677ff",onClick:()=>u(i.address),children:C(i.address,12,12)})}},{title:"Quantity",align:"center",render(i){return f==="ERC20"?S(k(BigInt(i.quantity).toString()),4):i.quantity}},{title:"Percentage",align:"center",key:"amount",render(i){return S((Number(i.quantity)/Number(e.totalAmount)).toFixed(6).toString(),6)+"%"}}];return t.jsxs("div",{className:"w-100%  overflow-x-scroll scrollbar-x",children:[t.jsx(L,{titlePC:"HOLDER LIST",titleH5:"HOLDERS",params:e.params,total:e.total,onChange:e.onChange}),t.jsx(H,{columns:l,dataSource:e.dataSource,pagination:!1,loading:e.loading})]})}function M(){return t.jsx("div",{className:"coming-soon flex justify-center items-center",children:t.jsx("div",{children:t.jsx("div",{className:"text-center font-size-32px font-bold",children:"Coming Soon"})})})}const ce=()=>{const e=D(),[u,f]=n.useState(),[l,i]=n.useState([{label:"TXN",value:0,select:!0},{label:"Holders",value:1,select:!1},{label:"Contracts",value:2,select:!1}]),x=n.useMemo(()=>l.find(a=>a.select),[l]),g=a=>{const s=l.map(d=>d);s.forEach(d=>{d.value===a.value?(d.select=!0,o.current.page=1):d.select=!1}),i(s),a.value===0&&p(),a.value===1&&j()},o=n.useRef({page:1,page_size:10,addr:""}),[c,N]=n.useState(),[h,m]=n.useState(!1),p=async()=>{try{m(!0);const a=await w(o.current);N(a)}finally{m(!1)}},[r,_]=n.useState(),j=async()=>{try{m(!0);const a=await E(o.current);_(a)}finally{m(!1)}},v=a=>{o.current.page=a;const s=l.find(d=>d.select);(s==null?void 0:s.value)===0&&p(),(s==null?void 0:s.value)===1&&j()};return n.useEffect(()=>{e.tokenAddress&&(o.current.addr=e.tokenAddress,A(e.tokenAddress).then(a=>f(a)))},[e.tokenAddress]),n.useEffect(()=>{p()},[]),t.jsxs("div",{className:"token-detail flex flex-col lg:flex-row lg:h-73vh gap-20px",children:[t.jsx("div",{className:"w-100% lg:w-285px mt-16px lg:mt-0",children:t.jsx(X,{data:u})}),t.jsxs("div",{className:"flex flex-col flex-1 gap-16px",children:[t.jsx("div",{className:"tab-list flex gap-14px",children:l.map(a=>t.jsx("div",{className:"menu-btn ".concat(a.select&&"active"),onClick:()=>g(a),children:a.label},a.value))}),t.jsxs("div",{className:"token-list",children:[x.value===0&&t.jsx(R,{titlePC:"TRANSACTIONS LIST",titleH5:"TRANSACTIONS",loading:h,dataSource:(c==null?void 0:c.contract_txs)||[],total:(c==null?void 0:c.total)||0,onChange:v,params:o}),x.value===1&&t.jsx(F,{loading:h,dataSource:(r==null?void 0:r.holders)||[],total:(r==null?void 0:r.total)||0,onChange:v,params:o,totalAmount:(r==null?void 0:r.total_amount)||"0"}),x.value===2&&t.jsx("div",{className:"flex h-100% items-center justify-center",children:t.jsx(M,{})})]})]})]})};export{ce as default};
