!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},l=Object.prototype,a=l.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var l=t&&t.prototype instanceof x?t:x,a=Object.create(l.prototype),i=new C(n||[]);return o(a,"_invoke",{value:z(e,r,i)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var d="suspendedStart",g="suspendedYield",y="executing",v="completed",m={};function x(){}function j(){}function b(){}var w={};f(w,c,(function(){return this}));var k=Object.getPrototypeOf,N=k&&k(k(P([])));N&&N!==l&&a.call(N,c)&&(w=N);var E=b.prototype=x.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,r){function n(l,o,i,c){var s=p(t[l],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):r.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var l;o(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,l){n(e,t,r,l)}))}return l=l?l.then(a,a):a()}})}function z(e,t,n){var l=d;return function(a,o){if(l===y)throw Error("Generator is already running");if(l===v){if("throw"===a)throw o;return{value:r,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(l===d)throw l=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);l=y;var s=p(e,t,n);if("normal"===s.type){if(l=n.done?v:g,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(l=v,n.method="throw",n.arg=s.arg)}}}function O(e,t){var n=t.method,l=e.iterator[n];if(l===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(l,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var l=-1,o=function e(){for(;++l<t.length;)if(a.call(t,l))return e.value=t[l],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},L(S.prototype),f(S.prototype,s,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,l,a){void 0===a&&(a=Promise);var o=new S(h(e,t,r,l),a);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(E),f(E,u,"Generator"),f(E,c,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,l){return i.type="throw",i.arg=e,t.next=n,l&&(t.method="next",t.arg=r),!!l}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var l=n.arg;T(r)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(e,t,r,n,l,a,o){try{var i=e[a](o),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,l)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(l,a){var o=e.apply(t,n);function i(e){r(o,l,a,i,c,"next",e)}function c(e){r(o,l,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,i=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-C1KIogah.js","./Table-legacy-B7VXVt4w.js","./index-legacy-B29onY6h.js","./antd-legacy-BkueixiI.js","./call-bind-legacy-DrJKC_yv.js","./get-intrinsic-legacy-DTOfxSa4.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-C3jDkclw.js","./define-data-property-legacy-Dcxkp_cM.js","./es-define-property-legacy-BMvU1XNX.js","./gopd-legacy-DpYUglOi.js","./has-property-descriptors-legacy-DLWj1j5L.js","./react-dom-legacy-D5wIYavC.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-CwREB4hO.js","./react-router-legacy-CybkWckQ.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-CGKEAQ0U.js","./use-sync-external-store-legacy-Czk-TMoy.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-DsuIJjpp.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./moment-legacy-BglnxN2U.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-Cf8ZRBjS.js","./define-properties-legacy-CN6rGbwN.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-2nkejVRf.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-DUIXL7cD.js","./functions-have-names-legacy-DewFt_VA.js","./ethers-legacy-kCWJjqgc.js","./echarts-legacy-DFgybjKn.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js","./rc-util-legacy-BuYkPS32.js","./@ant-design-legacy-2laMwOuD.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-CuylIhHI.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-CoITla2m.js","./rc-motion-legacy-DDL4XNb8.js","./rc-tooltip-legacy-R7MjxFVG.js","./@rc-component-legacy-Rmf4cg5p.js","./rc-overflow-legacy-Bi3rZcCQ.js","./rc-menu-legacy-CzulGnyb.js","./rc-select-legacy-msFc-8wc.js","./rc-virtual-list-legacy-i8skpeVA.js","./rc-field-form-legacy-ZQyUSEr_.js","./rc-table-legacy-CuWSBl2I.js","./rc-tree-legacy-OTY8dyEV.js","./rc-checkbox-legacy-BOEM0OS5.js","./rc-pagination-legacy-qnMFntAo.js","./rc-picker-legacy-Bb1EYURa.js","./rc-dropdown-legacy-CGh9ZKpD.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-BW21cw47.js","./rc-textarea-legacy-2A9A3OXu.js"],(function(e,r){"use strict";var a,o,i,c,s,u,f,h;return{setters:[function(e){a=e.r,o=e.j},function(e){i=e.T},function(e){c=e.g,s=e.S,u=e.a,f=e.b},function(e){h=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".page-chain .chain-btn{flex:1 1 auto;cursor:pointer;border-width:1px;--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));border-style:solid;padding:12px 8px;font-size:12px;background:rgba(56,55,82,.6)}@media (min-width: 1024px){.page-chain .chain-btn{min-width:80px;font-size:14px}}.page-chain .chain-btn.active{background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}.page-chain .total-card{width:33%;padding:10px;border:1px solid #D87CEE;background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-chain .total-card{height:22.8vh;width:100%;padding:20px}}.page-chain .table-list{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.05)}\n",document.head.appendChild(r),e("default",(function(){var e=a.useRef({page:1,page_size:11}),r=l(a.useState([{label:"Blocks",filter:null,active:!0},{label:"Blackhole Blocks",filter:1,active:!1},{label:"Penalty Blocks",filter:2,active:!1}]),2),p=r[0],d=r[1],g=l(a.useState(!1),2),y=g[0],v=g[1],m=l(a.useState(),2),x=m[0],j=m[1],b=l(a.useState({blocks:[],total:0}),2),w=b[0],k=b[1],N=function(){var r=n(t().mark((function r(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,u(e.current);case 4:n=t.sent,k(n);case 6:return t.prev=6,v(!1),t.finish(6);case 9:case"end":return t.stop()}}),r,null,[[0,,6,9]])})));return function(){return r.apply(this,arguments)}}();a.useEffect((function(){N(),E()}),[]);var E=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:r=e.sent,j(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=[{title:"Height",key:"number",render:function(e){var t=e;return o.jsx("span",{className:"link hover:color-#1677ff",children:t.number})}},{title:"Proposer",key:"miner",render:function(e){var t=e;return o.jsx("span",{className:"link hover:color-#1677ff",children:"".concat(f(t.miner,5,18))})}},{title:"TXN",key:"totalTransaction"},{title:"Gas Used",key:"Height",render:function(e){return"".concat(e.gasUsed," %")}},{title:"Gas Limit",key:"gasLimit",render:function(e){return e.gasLimit}},{title:"Block Size",key:"size",render:function(e){return"".concat(e.size," Bytes")}}];return o.jsxs("div",{className:"page-chain flex flex-col flex-col-reverse lg:flex-row",children:[o.jsxs("div",{className:"chain-header flex-1 mt-20px lg:mt-0 w-100%",children:[o.jsxs("div",{className:"flex flex-col lg:flex-row w-100% lg:h-48px",children:[o.jsx("div",{className:"flex-1 flex gap-10px",children:p.map((function(t){return o.jsx("div",{className:"chain-btn white-space ".concat(t.active?"active":""),onClick:function(){return function(t){var r=p.map((function(e){return e}));r.forEach((function(e){e.filter===t.filter?e.active=!0:e.active=!1})),d(r);var n=t.filter;n?e.current.filter=n:delete e.current.filter,e.current.page=1,N()}(t)},children:t.label},t.label)}))}),o.jsx("div",{className:"flex-1 lg:ml-26px pt-20px lg:pt-0",children:o.jsx(s,{onSearch:function(e){},className:"font-size-14px"})})]}),o.jsx("div",{className:"lg:h-63.5vh",children:o.jsxs("div",{className:"table-list mt-14px flex-1 h-100%",children:[o.jsxs("div",{className:"flex flex-col lg:flex-row justify-between p-10px",children:[o.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"CHAIN INFORMATION"}),o.jsx(h,{current:e.current.page,pageSize:e.current.page_size,total:w.total,onChange:function(t){e.current.page=t,N()}})]}),o.jsx("div",{className:"flex h-90%",children:o.jsx(i,{columns:L,dataSources:null==w?void 0:w.blocks,loading:y})})]})})]}),o.jsxs("div",{className:"mt-20px lg:mt-0 w-100% lg:w-250px lg:ml-22px flex justify-between flex-row lg:flex-col",children:[o.jsx("div",{className:"total-card flex justify-center items-center",children:o.jsxs("div",{children:[o.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Block Height"}),o.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:null==x?void 0:x.totalBlock})]})}),o.jsx("div",{className:"total-card flex justify-center items-center",children:o.jsxs("div",{children:[o.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Total ERB Rewards"}),o.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:null==x?void 0:x.rewardCoinCount})]})}),o.jsx("div",{className:"total-card flex justify-center items-center",children:o.jsxs("div",{children:[o.jsx("div",{className:"font-size-12px lg:font-size-16px",children:"Total CSBT"}),o.jsx("div",{className:"font-size-16px lg:font-size-24px mt-16px",children:null==x?void 0:x.rewardSNFTCount})]})})]})]})}))}}}))}();