!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(t,r,n){var a;return a=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(a)?a:a+"")in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return r};var t,r={},n=Object.prototype,l=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof j?t:j,l=Object.create(a.prototype),i=new A(n||[]);return o(l,"_invoke",{value:L(e,r,i)}),l}function g(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var h="suspendedStart",p="suspendedYield",v="executing",y="completed",m={};function j(){}function x(){}function b(){}var w={};d(w,c,(function(){return this}));var C=Object.getPrototypeOf,S=C&&C(C(T([])));S&&S!==n&&l.call(S,c)&&(w=S);var k=b.prototype=j.prototype=Object.create(w);function N(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,r){function n(a,o,i,c){var s=g(t[a],t,o);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==e(d)&&l.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):r.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(e,t){function l(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(l,l):l()}})}function L(e,r,n){var a=h;return function(l,o){if(a===v)throw Error("Generator is already running");if(a===y){if("throw"===l)throw o;return{value:t,done:!0}}for(n.method=l,n.arg=o;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var s=g(e,r,n);if("normal"===s.type){if(a=n.done?y:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=y,n.method="throw",n.arg=s.arg)}}}function E(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var l=g(a,e.iterator,r.arg);if("throw"===l.type)return r.method="throw",r.arg=l.arg,r.delegate=null,m;var o=l.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function T(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,o=function e(){for(;++a<r.length;)if(l.call(r,a))return e.value=r[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(e(r)+" is not iterable")}return x.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:x,configurable:!0}),x.displayName=d(b,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},r.awrap=function(e){return{__await:e}},N(O.prototype),d(O.prototype,s,(function(){return this})),r.AsyncIterator=O,r.async=function(e,t,n,a,l){void 0===l&&(l=Promise);var o=new O(f(e,t,n,a),l);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},N(k),d(k,u,"Generator"),d(k,c,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&l.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return i.type="throw",i.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=l.call(o,"catchLoc"),s=l.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function l(e,t,r,n,a,l,o){try{var i=e[l](o),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){l(o,n,a,i,c,"next",e)}function c(e){l(o,n,a,i,c,"throw",e)}i(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-B2ecEqTO.js","./index-legacy-9P6W4pOk.js","./moment-legacy-BglnxN2U.js","./react-router-legacy-CISFq-iN.js","./antd-legacy-DyD8mCKm.js","./ethers-legacy-kCWJjqgc.js","./call-bind-legacy-GKmFuFy5.js","./get-intrinsic-legacy-CXG_Wl3y.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-B4FR5P5p.js","./define-data-property-legacy-DenQ9IDl.js","./es-define-property-legacy--y_Ghgnh.js","./gopd-legacy-CJWyhuEd.js","./has-property-descriptors-legacy-BIFhRJfA.js","./react-dom-legacy-BBw5LNvY.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-C61an_yI.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-C42M3Mp6.js","./use-sync-external-store-legacy-Cjy4gzco.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-CdsvtTJ7.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-oT1QLxTi.js","./define-properties-legacy-h10uDkoQ.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-CFhqrEDF.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-BAOcIVwq.js","./functions-have-names-legacy-DewFt_VA.js","./echarts-legacy-DFgybjKn.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js","./rc-util-legacy-Pri6j-ww.js","./@ant-design-legacy-DIuJHTGP.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-QayJL2FV.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-D8eRBkrI.js","./rc-motion-legacy-D5Vd4IsE.js","./rc-tooltip-legacy-CUASOSud.js","./@rc-component-legacy-B8-EyL2q.js","./rc-overflow-legacy-DvSHBEcK.js","./rc-menu-legacy-Bi4JbmoZ.js","./rc-select-legacy-nDK9qvZg.js","./rc-virtual-list-legacy-Yakco8-C.js","./rc-field-form-legacy-D4sITDQU.js","./rc-notification-legacy-zpnuzxP4.js","./rc-table-legacy-BFePlR8a.js","./rc-tree-legacy-Cm2GuMMr.js","./rc-checkbox-legacy-CKw5dOM2.js","./rc-pagination-legacy-BT2AYMBO.js","./rc-picker-legacy-Cvf5rcsc.js","./rc-dropdown-legacy--GrLU3ed.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-DQrz8rvS.js","./rc-textarea-legacy-fCmSoi_V.js"],(function(e,t){"use strict";var n,l,c,s,u,d,f,g,h,p,v,y,m;return{setters:[function(e){n=e.j,l=e.r},function(e){c=e.b,s=e.f,u=e.S,d=e.g,f=e.c,g=e.d},function(e){h=e.h},function(e){p=e.b},function(e){v=e.F,y=e.a},function(e){m=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".page-validator .data-card{background:rgba(56,55,82,.6);display:flex;cursor:pointer;align-items:center;justify-content:center;border-width:1px;--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));border-style:solid}.page-validator .data-card.active{background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}.page-validator .table-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.05)}.page-validator .data-panel{height:17vh;width:47%;display:flex;align-items:center;justify-content:center;border:1px solid #D87CEE;background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-validator .data-panel{width:100%}}.page-validator .data-panel .tit{font-size:16px}.page-validator .data-panel .val{font-size:24px;margin-top:14px}\n",document.head.appendChild(t),e("default",(function(){var e=i(l.useState(!1),2),t=e[0],c=e[1],s=i(l.useState(),2),h=s[0],p=s[1],v=function(){var e=o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=l.useRef({page:1,page_size:11}),x="",b="",S=i(l.useState(1),2),k=S[0],N=S[1],O=i(l.useState({data:[],total:0}),2),L=O[0],E=O[1],P=i(l.useState({data:[],total:0}),2),_=P[0],A=P[1],T=function(){var e=o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,f(r(r({},j.current),{},{order:x}));case 4:t=e.sent,E(t);case 6:return e.prev=6,c(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(r(r({},j.current),{},{order:b,name:""}));case 3:t=e.sent,A(t);case 5:return e.prev=5,c(!1),e.finish(5);case 8:case"end":return e.stop()}}),e,null,[[0,,5,8]])})));return function(){return e.apply(this,arguments)}}();l.useEffect((function(){T(),v()}),[]);var M=i(l.useState([{label:"Validator Data",value:1,active:!0},{label:"Staker Data",value:2,active:!1}]),2),Z=M[0],F=M[1],I=l.useMemo((function(){var e;return null===(e=Z.find((function(e){return e.active})))||void 0===e?void 0:e.value}),[Z]);return n.jsxs("div",{className:"page-validator flex flex-col flex-col-reverse lg:flex-row",children:[n.jsxs("div",{className:"flex-1 flex gap-2vh flex-col",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row mt-20px lg:mt-0",children:[n.jsx("div",{className:"w-35% flex gap-12px",children:Z.map((function(e){return n.jsx("div",{onClick:function(){return function(e){j.current.page=1,x="",b="";var t=Z.map((function(e){return e}));t.forEach((function(t){t.value===e.value?(t.active=!0,N(e.value)):t.active=!1})),F(t),1===e.value?T():D()}(e)},className:"flex-1 data-card ".concat(e.active?"active":""),children:e.label},e.value)}))}),n.jsx("div",{className:"w-100% lg:w-65% mt-20px lg:mt-0",children:n.jsx(u,{className:"lg:ml-12px",onSearch:function(){}})})]}),n.jsx("div",{className:"h-64.6vh flex flex-col",children:n.jsxs("div",{className:"table-box h-100%",children:[n.jsxs("div",{className:"flex flex-col lg:flex-row justify-between px-10px pt-10px pb-14px",children:[n.jsx("div",{children:"VALIDATOR INFORMATION"}),n.jsx("div",{children:n.jsx(y,{onChange:function(e){j.current.page=e},current:j.current.page,pageSize:j.current.page_size,total:1===I?L.total:_.total})})]}),n.jsx("div",{className:"flex h-90%",children:1===k?n.jsx(w,{dataSource:L.data,sorter:function(e){x=e,T()},loading:t}):n.jsx(C,{dataSource:_.data,sorter:function(e){b=e,D()},loading:t})})]})})]}),n.jsxs("div",{className:"w-100% lg:w-250px flex flex-wrap gap-22px lg:gap-10px ml-0 lg:ml-22px flex-row lg:flex-col mt-20px lg:mt-0",children:[n.jsx("div",{className:"data-panel",children:n.jsxs("div",{children:[n.jsx("div",{className:"tit",children:"Validator Number"}),n.jsx("div",{className:"val",children:h?h.totalValidator:"--"})]})}),n.jsx("div",{className:"data-panel",children:n.jsxs("div",{children:[n.jsx("div",{className:"tit",children:"Stake of Validator"}),n.jsx("div",{className:"val",children:h?m(h.validatorTotalPledge):0})]})}),n.jsx("div",{className:"data-panel",children:n.jsxs("div",{children:[n.jsx("div",{className:"tit",children:"Staker Number"}),n.jsx("div",{className:"val",children:h?h.totalStaker:"--"})]})}),n.jsx("div",{className:"data-panel",children:n.jsxs("div",{children:[n.jsx("div",{className:"tit",children:"Stake of Staker"}),n.jsx("div",{className:"val",children:h?Number(m(h.totalPledge))-Number(m(h.validatorTotalPledge)):0})]})})]})]})}));var j="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%200C2.23889%200%200%202.23889%200%205C0%207.76111%202.23889%2010%205%2010C7.76111%2010%2010%207.76111%2010%205C10%202.23889%207.76111%200%205%200ZM1.98556%204.83778C1.98556%204.28111%202.43889%203.82778%202.99556%203.82778C3.55222%203.82778%204.00556%204.28111%204.00556%204.83778C4.00556%204.96%203.90556%205.06%203.78333%205.06C3.66111%205.06%203.56111%204.96%203.56111%204.83778C3.56111%204.52556%203.30667%204.27222%202.99556%204.27222C2.68333%204.27222%202.43%204.52667%202.43%204.83778C2.43%204.96%202.33%205.06%202.20778%205.06C2.08556%205.06%201.98556%204.96111%201.98556%204.83778ZM7.72%206.33C7.43444%207.32333%206.32556%208.06333%205%208.06333C3.67444%208.06333%202.56444%207.32333%202.28%206.33C2.20778%206.07778%202.39778%205.82667%202.66%205.82667H7.34111C7.60222%205.82667%207.79222%206.07778%207.72%206.33ZM7.79111%205.06C7.66889%205.06%207.56889%204.96%207.56889%204.83778C7.56889%204.52556%207.31444%204.27222%207.00333%204.27222C6.69222%204.27222%206.43778%204.52667%206.43778%204.83778C6.43778%204.96%206.33778%205.06%206.21556%205.06C6.09333%205.06%205.99333%204.96%205.99333%204.83778C5.99333%204.28111%206.44667%203.82778%207.00333%203.82778C7.56%203.82778%208.01333%204.28111%208.01333%204.83778C8.01333%204.96111%207.91333%205.06%207.79111%205.06Z'%20fill='%23FACB7B'/%3e%3c/svg%3e",x="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%200C2.23889%200%200%202.23889%200%205C0%207.76111%202.23889%2010%205%2010C7.76111%2010%2010%207.76111%2010%205C10%202.23889%207.76111%200%205%200ZM7.00222%203.26222C7.43778%203.26222%207.79%203.61556%207.79%204.05C7.79%204.48444%207.43667%204.83778%207.00222%204.83778C6.56778%204.83778%206.21444%204.48444%206.21444%204.05C6.21444%203.61556%206.56667%203.26222%207.00222%203.26222ZM2.99667%203.26222C3.43222%203.26222%203.78444%203.61556%203.78444%204.05C3.78444%204.48444%203.43111%204.83778%202.99667%204.83778C2.56222%204.83778%202.20889%204.48444%202.20889%204.05C2.20889%203.61556%202.56111%203.26222%202.99667%203.26222ZM7.79111%206.47778H2.20778C2.08556%206.47778%201.98556%206.37778%201.98556%206.25556C1.98556%206.13333%202.08556%206.03333%202.20778%206.03333H7.79C7.91222%206.03333%208.01222%206.13333%208.01222%206.25556C8.01222%206.37778%207.91333%206.47778%207.79111%206.47778Z'%20fill='%23D387FF'/%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%200C2.23889%200%200%202.23889%200%205C0%207.76111%202.23889%2010%205%2010C7.76111%2010%2010%207.76111%2010%205C10%202.23889%207.76111%200%205%200ZM2.21%204.79C2.15667%204.67889%202.20333%204.54667%202.31333%204.49333L3.28222%204.02667L2.30556%203.51C2.19667%203.45222%202.15556%203.31778%202.21333%203.21C2.27111%203.10111%202.40556%203.06%202.51333%203.11778L3.87889%203.84C3.95333%203.87889%203.99889%203.95667%203.99667%204.04111C3.99556%204.12444%203.94667%204.20111%203.87111%204.23667L2.50556%204.89444C2.47444%204.90889%202.44111%204.91667%202.40889%204.91667C2.32778%204.91667%202.24889%204.87%202.21%204.79ZM7.34%207.65222H2.65889C2.39667%207.65222%202.20667%207.40111%202.27889%207.14889C2.56444%206.15556%203.67333%205.41556%204.99889%205.41556C6.32444%205.41556%207.43444%206.15556%207.71889%207.14889C7.79222%207.40111%207.60222%207.65222%207.34%207.65222ZM7.78889%204.79C7.75111%204.86889%207.67111%204.91556%207.58889%204.91556C7.55667%204.91556%207.52333%204.90889%207.49222%204.89333L6.12667%204.23556C6.05111%204.19889%206.00222%204.12333%206.00111%204.04C6%203.95667%206.04556%203.87889%206.11889%203.83889L7.48444%203.11667C7.59333%203.05889%207.72778%203.10111%207.78444%203.20889C7.84222%203.31778%207.8%203.45222%207.69222%203.50889L6.71556%204.02556L7.68444%204.49222C7.79556%204.54667%207.84222%204.68%207.78889%204.79Z'%20fill='%23AD4428'/%3e%3c/svg%3e";function w(e){var t=p(),r=[{title:"Validator",align:"center",render:function(e){return n.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return r=e.address,void t("/explorer/accountDetail/".concat(r));var r},children:c(e.address,6,6)})}},{title:"Total Staking",align:"center",key:"amount",sorter:{multiple:void 0},render:function(e){return m(e.amount)}},{title:"Total Rewards (ERB)",align:"center",key:"reward",sorter:{multiple:void 0},render:function(e){return m(e.reward)}},{title:"Time",align:"center",key:"timestamp",sorter:{multiple:void 0},render:function(e){return h(1e3*e.timestamp).format("YYYY/MM/DD HH:mm:ss")}},{title:"Latest Active",align:"center",key:"block_number",sorter:{multiple:void 0},render:function(e){return n.jsx("div",{className:"link hover:color-#1677ff",children:e.block_number})}},{title:"Online Weight",key:"weight",sorter:{multiple:void 0},align:"center",render:function(e){var t=function(e){return e<40?b:e>=40&&e<=50?x:e>50?j:void 0}(e.weight);return n.jsxs("div",{className:"flex items-center justify-center",children:[e.weight," ",n.jsx("img",{src:t,className:"w-1vw ml-8px",alt:""})]})}},{title:"Reputation Score",dataIndex:"score",key:"score",sorter:{multiple:void 0},align:"center"}];return n.jsx("div",{className:"w-100% validator-table  h-100%",children:n.jsx(v,{columns:r,dataSource:e.dataSource,pagination:!1,onChange:function(t,r,n){n.order?"ascend"===n.order?e.sorter("".concat(n.columnKey," ASC")):"descend"===n.order&&e.sorter("".concat(n.columnKey," DESC")):e.sorter("")},loading:e.loading})})}function C(e){var t=p(),r=[{title:"Staker Address",align:"center",render:function(e){return n.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return r=e.address,void t("/explorer/accountDetail/".concat(r));var r},children:c(e.address,6,6)})}},{title:"Block Height",align:"center",render:function(e){return n.jsx("div",{className:"link hover:color-#1677ff",children:e.block_number})}},{title:"Stake Value",align:"center",key:"amount",sorter:{multiple:void 0},render:function(e){return m(e.amount)}},{title:"SNFT Value",align:"center",render:function(e){return m(e.reward)}},{title:"Stake Time",align:"center",render:function(e){return e.timestamp?s(e.timestamp):"--"}}];return n.jsx("div",{className:"w-100% staker-table h-100%",children:n.jsx(v,{columns:r,dataSource:e.dataSource,pagination:!1,onChange:function(t,r,n){n.order?"ascend"===n.order?e.sorter("".concat(n.columnKey," ASC")):"descend"===n.order&&e.sorter("".concat(n.columnKey," DESC")):e.sorter("")},loading:e.loading})})}}}}))}();