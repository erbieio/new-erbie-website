!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(t,r,n){var i;return i=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(i)?i:i+"")in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return r};var t,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),l=new _(n||[]);return o(a,"_invoke",{value:T(e,r,l)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",g="completed",x={};function m(){}function b(){}function j(){}var w={};d(w,c,(function(){return this}));var k=Object.getPrototypeOf,N=k&&k(k(P([])));N&&N!==n&&a.call(N,c)&&(w=N);var S=j.prototype=m.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(i,o,l,c){var s=h(t[i],t,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==e(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):r.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(a,a):a()}})}function T(e,r,n){var i=p;return function(a,o){if(i===v)throw Error("Generator is already running");if(i===g){if("throw"===a)throw o;return{value:t,done:!0}}for(n.method=a,n.arg=o;;){var l=n.delegate;if(l){var c=L(l,n);if(c){if(c===x)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var s=h(e,r,n);if("normal"===s.type){if(i=n.done?g:y,s.arg===x)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i=g,n.method="throw",n.arg=s.arg)}}}function L(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var a=h(i,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,x;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,x):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,x)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function P(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,o=function e(){for(;++i<r.length;)if(a.call(r,i))return e.value=r[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(e(r)+" is not iterable")}return b.prototype=j,o(S,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},r.awrap=function(e){return{__await:e}},O(E.prototype),d(E.prototype,s,(function(){return this})),r.AsyncIterator=E,r.async=function(e,t,n,i,a){void 0===a&&(a=Promise);var o=new E(f(e,t,n,i),a);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},O(S),d(S,u,"Generator"),d(S,c,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=P,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return l.type="throw",l.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;A(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),x}},r}function a(e,t,r,n,i,a,o){try{var l=e[a](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,i)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function l(e){a(o,n,i,l,c,"next",e)}function c(e){a(o,n,i,l,c,"throw",e)}l(void 0)}))}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,o,l=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-DxSpAB0g.js","./index-legacy-BtzDotKC.js","./antd-legacy-DcLpKIi7.js","./ethers-legacy-CRNzbMtm.js","./Table-legacy-Cr3oY15J.js","./moment-legacy-BglnxN2U.js","./react-copy-to-clipboard-legacy-CkTSeomj.js","./react-router-legacy-B729MmvI.js","./call-bind-legacy-b9j9Ev5K.js","./get-intrinsic-legacy-DCImVJtN.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-CFl_MoOY.js","./define-data-property-legacy-oxlhW6df.js","./es-define-property-legacy-FJkJvxnv.js","./gopd-legacy-K-jukfvW.js","./has-property-descriptors-legacy-D8icEZ1F.js","./react-dom-legacy-B0bx0NKw.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-BlFCUOQ7.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-ngw-NNWi.js","./use-sync-external-store-legacy-DTTney0Y.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-D73axzEw.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-cjM3kHxr.js","./define-properties-legacy-Dlns_JZW.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-Bg4qZNx9.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-o_jnKihu.js","./functions-have-names-legacy-DewFt_VA.js","./echarts-legacy-DFgybjKn.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js","./rc-util-legacy-Qq4_lPuU.js","./@ant-design-legacy-Ddm2OMcW.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-D4BrmxoT.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-DBHzm-Bl.js","./rc-motion-legacy-DJBZBtd3.js","./rc-tooltip-legacy-DRxXnPKi.js","./@rc-component-legacy-CkjvlQgF.js","./rc-overflow-legacy-Di_b1E_a.js","./rc-menu-legacy-CqE9t5fr.js","./rc-select-legacy-DAOKQpUE.js","./rc-virtual-list-legacy-BJBT2qr6.js","./rc-field-form-legacy-c-G8Ukn8.js","./rc-dialog-legacy-DTTa1o-J.js","./rc-notification-legacy-Cc7hsl-H.js","./rc-table-legacy-C8k8zIXD.js","./rc-tree-legacy-D2-e7sCD.js","./rc-checkbox-legacy-BzN1Okv-.js","./rc-pagination-legacy-BSh3OrcD.js","./rc-picker-legacy-C-ujPuKF.js","./rc-dropdown-legacy-BB81kU1y.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-C0xlfYzz.js","./rc-textarea-legacy-By2JdYe9.js","./copy-to-clipboard-legacy-D4OEbE8m.js","./toggle-selection-legacy-PgVyXVGf.js"],(function(e,t){"use strict";var n,a,c,s,u,d,f,h,p,y,v,g,x,m,b,j,w,k,N,S,O,E,T,L;return{setters:[function(e){n=e.j,a=e.r},function(e){c=e.u,s=e.c,u=e.l,d=e.t,f=e.m,h=e.f,p=e.p,y=e.g,v=e.q,g=e.n,x=e.r,m=e.h},function(e){b=e.F,j=e.s,w=e.c,k=e.P},function(e){N=e.f},function(e){S=e.T},function(e){O=e.h},function(e){E=e.l},function(e){T=e.f,L=e.c},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");function C(e){var t=c(),r=t.toAccountDetail,i=t.toTxDetail,a=[{title:n.jsx("div",{className:"whitespace-nowrap",children:"TXN Hash"}),key:"hash",align:"center",// width:180,
// fixed: "left",
render:function(e){return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return i(e.hash)},children:s(e.hash,6,6)})}},{title:n.jsx("div",{className:"whitespace-nowrap",children:"TXN Time"}),key:"timestamp",align:"center",width:70,render:function(e){return n.jsx("div",{className:"whitespace-nowrap",children:u(e.timestamp)})}},{title:"Sender",key:"from",align:"center",// width: 150,
render:function(e){return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return r(e.from)},children:s(e.from,6,6)})}},{title:"Receiver",key:"to",align:"center",width:150,render:function(e){return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return r(e.to)},children:s(e.to,6,6)})}},{title:n.jsx("div",{className:"whitespace-nowrap",children:"Transaction Value"}),key:"value",align:"center",render:function(e){return d(N(e.value),h)}},{title:n.jsx("div",{className:"whitespace-nowrap",children:"TXN Type"}),key:"input",align:"center",render:function(e){return n.jsx("div",{className:"overflow-hidden whitespace-nowrap",title:f(e.input),children:f(e.input)})}},{title:"Status",key:"status",align:"center",render:function(e){return n.jsx("div",{className:"px-4px rounded-4px ".concat(1===e.status?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," ","rgba(168, 255, 210, .2)"),children:1===e.status?"Success":"Defeat"})}},{title:n.jsx("div",{className:"whitespace-nowrap",children:"TXN Fee"}),align:"center",key:"gasPrice",render:function(e){return d(N(e.gasPrice*e.gasUsed),p)}}];return n.jsx("div",{children:n.jsx(b,{pagination:!1,dataSource:e.list,loading:e.loading,columns:a})})}function A(e){var t=c(),r=t.toAccountDetail,i=t.toTxDetail,a=[{title:"Account",key:2===e.type?"staker":"validator",render:function(t){var i=t,a=2===e.type?i.staker:i.validator;return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return r(a)},children:s(a,6,6)})}},{title:"TXN Hash",key:"tx_hash",render:function(e){var t=e;return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return i(t.tx_hash)},children:s(t.tx_hash,3,3)})}},{title:"Block Height",key:"block_number"},{title:"Stake Time",key:"timestamp",render:function(e){var t=e;return n.jsx("div",{className:"whitespace-nowrap",children:O(1e3*t.timestamp).format("YYYY/MM/DD HH:mm:ss")})}},{title:"Value",key:"amount",render:function(e){return N(e.amount)}}];return n.jsx("div",{children:n.jsx(S,{columns:a,dataSources:e.list,loading:e.loading})})}function _(e){var t=c().toAccountDetail;a.useEffect((function(){}),[e.list]);var r=[{title:"Address",fixed:"left",align:"center",key:"address",render:function(e){return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.address)},children:s(e.address,6,6)})}},{title:n.jsxs("div",{className:"whitespace-nowrap",children:["SNFT Number",n.jsx("i",{className:"i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"})]}),key:"address",align:"center",render:function(e){return parseInt(e.address.slice(3),16)}},{title:n.jsx("div",{className:"whitespace-nowrap",children:"Creation Time"}),key:"createdAt",align:"center",render:function(e){return n.jsx("div",{className:"whitespace-nowrap",children:u(e.reward_at)})}},{title:"Creator",key:"creator",align:"center",render:function(e){return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.creator)},children:e.creator?s(e.creator,6,6):"-"})}},{title:"Owner",key:"owner",align:"center",render:function(e){return n.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.owner)},children:e.owner?s(e.owner,6,6):"-"})}},{title:n.jsx("div",{className:"whitespace-nowrap",children:"Owner Get Time"}),key:"reward_at",align:"center",render:function(e){return u(e.reward_at)}}];return n.jsx("div",{children:n.jsx(b,{pagination:!1,dataSource:e.list,loading:e.loading,columns:r})})}function P(e){var t,r,i,o,c,u,f,h,p,y,v=T(),g=l(a.useState(""),2),x=g[0],m=g[1];a.useEffect((function(){v.address&&m(v.address)}),[v]);var b=a.useMemo((function(){var t,r,n;return null!==(t=e.data)&&void 0!==t&&t.stakerReward?d(N((BigInt(null===(r=e.data)||void 0===r?void 0:r.stakerReward)+BigInt(null===(n=e.data)||void 0===n?void 0:n.validatorReward)).toString()),4):0}),[null===(t=e.data)||void 0===t?void 0:t.stakerReward,null===(r=e.data)||void 0===r?void 0:r.validatorReward]);return n.jsxs("div",{className:"card-box h-100% flex flex-col justify-evenly mt-14px lg:mt-0",children:[n.jsxs("div",{children:[n.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-16px pt-10px lg:pt-0",children:"Account Detail"}),n.jsxs("div",{className:"link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between",children:[n.jsxs("span",{children:[" ",s(x)," "]})," ",n.jsx(E.CopyToClipboard,{text:x,onCopy:function(){return j.open({content:"Copied to clipboard",type:"success"})},children:n.jsx("i",{className:"i-ep-copy-document color-white font-size-18px"})})]}),n.jsx("div",{className:"px-16px",children:n.jsx(w,{loading:e.loading,active:!0,paragraph:{rows:6},children:n.jsxs("div",{children:[n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"ERB Balance"}),n.jsxs("div",{children:[d(N((null===(i=e.data)||void 0===i?void 0:i.balance)||"0"))," ERB"]})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"Total Staking"}),n.jsx("div",{children:d(N((null===(o=e.data)||void 0===o?void 0:o.stakerAmount)||"0"))})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"Total Staked"}),n.jsx("div",{children:d(N((null===(c=e.data)||void 0===c?void 0:c.validatorAmount)||"0"))})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center  text-line",children:[n.jsx("div",{children:"Online Weight"}),n.jsx("div",{children:null===(u=e.data)||void 0===u?void 0:u.weight})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"ERB Income"}),n.jsx("div",{children:b})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"TXN"}),n.jsx("div",{children:null===(f=e.data)||void 0===f?void 0:f.nonce})]}),n.jsx("div",{className:"line"})]})})})]}),n.jsxs("div",{children:[n.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-14px",children:"Other Information"}),n.jsx("div",{className:"px-16px",children:n.jsx(w,{loading:e.loading,active:!0,paragraph:{rows:3},children:n.jsxs("div",{children:[n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"Owned CSBT"}),n.jsx("div",{children:null===(h=e.data)||void 0===h?void 0:h.snftCount})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"Royalty profits"}),n.jsxs("div",{children:[d((null===(p=e.data)||void 0===p?void 0:p.profit)||"0")," ERB"]})]}),n.jsx("div",{className:"line"}),n.jsxs("div",{className:"flex justify-between items-center text-line",children:[n.jsx("div",{children:"Owned NFTs"}),n.jsx("div",{children:null===(y=e.data)||void 0===y?void 0:y.nftCount})]}),n.jsx("div",{className:"line"})]})})})]})]})}t.textContent=".account-detail .menu-card.active{transition:ease .3s;border-width:1px;border-style:solid;border-image:linear-gradient(to right,#8f41e9,#facb7c) 1;background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}.account-detail .table-box{background:rgba(255,255,255,.05)}.card-box{backdrop-filter:blur(25px);border-width:1px;border-style:solid;border-image:linear-gradient(to bottom,rgba(180,112,207,.5),rgba(232,217,154,.6)) 1}.card-box .line{border-bottom:1px solid #4E3D5A;margin:0 -16px}.card-box .text-line{height:4vh;font-size:12px}.card-box .stake-line{height:2.99vh;display:flex;align-items:center;text-align:left;font-size:12px}.card-box .staked-card{height:3.04vh;display:flex;align-items:center;justify-content:space-between;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid;padding-left:16px;padding-right:16px;font-size:12px}.card-box .csbt-card{height:3.04vh;display:flex;align-items:center;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid;padding-left:16px;padding-right:16px;font-size:12px}.card-box .staked-table thead th{border-top-width:1px;--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(78 61 90 / var(--un-border-top-opacity));border-top-style:solid;padding-left:10px;padding-right:10px}.card-box .staked-table tr td,.card-box .staked-table thead th{height:3vh;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid}.card-box .csbt-table thead th{border-top-width:1px;--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(78 61 90 / var(--un-border-top-opacity));border-top-style:solid;padding-left:10px;padding-right:10px}.card-box .csbt-table tr td,.card-box .csbt-table thead th{height:3.16vh;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid}\n",document.head.appendChild(t),e("default",(function(){var e=T(),t=L(),c=l(a.useState(!1),2),s=c[0],u=c[1],d=y(),f=l(a.useState(0),2),h=f[0],p=f[1],b=l(a.useState(),2),j=b[0],w=b[1],N=l(a.useState([{label:"TXN",checked:!0,value:1},{label:"Staked",checked:!1,value:2},{label:"CSBT",checked:!1,value:3}]),2),S=N[0],O=N[1],E=l(a.useState([]),2),z=E[0],F=E[1],D=l(a.useState([]),2),I=D[0],R=D[1],B=l(a.useState([]),2),G=B[0],M=B[1],X=l(a.useState(!1),2),Y=X[0],H=X[1],q=function(){var e=o(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,H(!0),e.next=4,v(t);case 4:r=e.sent,w(r);case 6:return e.prev=6,setTimeout((function(){H(!1)}),100),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(t){return e.apply(this,arguments)}}(),U=a.useRef({page:1,page_size:10}),V=function(){var t=o(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,g(r(r({},U.current),{},{addr:e.address}));case 4:n=t.sent,F(n.transactions),p(n.total);case 7:return t.prev=7,u(!1),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[0,,7,10]])})));return function(){return t.apply(this,arguments)}}(),J=function(){var t=o(i().mark((function t(){var n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,u(!0),2!==W){t.next=9;break}return n=r(r({},U.current),{},{staker:2===W?e.address:""}),t.next=6,x(n);case 6:a=t.sent,R(a.data),p(a.total);case 9:return t.prev=9,u(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,,9,12]])})));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=o(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,m(r(r({},U.current),{},{owner:e.address}));case 4:n=t.sent,M(n.nfts),p(n.total);case 7:return t.prev=7,u(!1),t.finish(7);case 10:case"end":return t.stop()}}),t,null,[[0,,7,10]])})));return function(){return t.apply(this,arguments)}}(),W=a.useMemo((function(){var e;return U.current.page=1,null===(e=S.find((function(e){return e.checked})))||void 0===e?void 0:e.value}),[S]);a.useEffect((function(){e.address&&(1===W&&V(),2===W&&J(),3===W&&Q())}),[t.pathname,e.address,W]);return a.useEffect((function(){e.address&&q(e.address)}),[e.address]),n.jsxs("div",{className:"account-detail flex h-100% flex-col lg:flex-row lg:h-72vh",children:[n.jsx("div",{className:"w-100% lg:w-330px",children:n.jsx(P,{loading:Y,data:j})}),n.jsxs("div",{className:"lg:w-70% lg:ml-24px flex flex-col gap-2vh mt-20px lg:mt-0",children:[n.jsx("div",{className:"flex font-size-14px gap-1vh justify-between",children:S.map((function(e,t){return n.jsx("div",{onClick:function(){return t=e,r=S.map((function(e){return e})),r.forEach((function(e){e.value===t.value?e.checked=!0:e.checked=!1})),void O(r);var t,r},className:"w-32% bg-#2A223E lh-4vh cursor-pointer menu-card ".concat(e.checked?"active":""),children:e.label},t)}))}),n.jsxs("div",{className:"table-box h-100%",children:[n.jsxs("div",{className:"text-left px-10px py-8px lh-4vh flex flex-row items-center justify-between w-100%",children:[n.jsx("div",{className:"font-size-16px hidden lg:block",children:"TRANSACTIONS LIST"}),n.jsx("div",{className:"font-size-16px block lg:hidden",children:"TRANSACTIONS"}),n.jsx("div",{children:n.jsx(k,{current:U.current.page,pageSize:U.current.page_size,total:h,onChange:function(e){U.current.page=e,1===W&&V();2===W&&J();3===W&&Q()},showQuickJumper:!!d.isMobile,simple:!!d.isMobile})})]}),n.jsxs("div",{className:" overflow-x-scroll scrollbar-x lg:h-60vh",children:[1===W?n.jsx(C,{list:z,loading:s}):n.jsx(n.Fragment,{}),2===W?n.jsx(A,{list:I,loading:s,type:W}):n.jsx(n.Fragment,{}),3===W?n.jsx(_,{list:G,loading:s}):n.jsx(n.Fragment,{})]})]})]})]})}))}}}))}();