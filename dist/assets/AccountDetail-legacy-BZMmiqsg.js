!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(r){n(e,r,l[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(l,r))}))}return e}function n(r,t,n){var l;return l=function(r,t){if("object"!=e(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var l=n.call(r,t||"default");if("object"!=e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(t,"string"),(t="symbol"==e(l)?l:l+"")in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function l(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var r,t={},n=Object.prototype,s=n.hasOwnProperty,i=Object.defineProperty||function(e,r,t){e[r]=t.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag";function u(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{u({},"")}catch(r){u=function(e,r,t){return e[r]=t}}function x(e,r,t,n){var l=r&&r.prototype instanceof m?r:m,s=Object.create(l.prototype),a=new P(n||[]);return i(s,"_invoke",{value:E(e,t,a)}),s}function h(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(e){return{type:"throw",arg:e}}}t.wrap=x;var f="suspendedStart",j="suspendedYield",p="executing",v="completed",b={};function m(){}function y(){}function g(){}var N={};u(N,c,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(L([])));w&&w!==n&&s.call(w,c)&&(N=w);var O=g.prototype=m.prototype=Object.create(N);function S(e){["next","throw","return"].forEach((function(r){u(e,r,(function(e){return this._invoke(r,e)}))}))}function D(r,t){function n(l,i,a,c){var o=h(r[l],r,i);if("throw"!==o.type){var d=o.arg,u=d.value;return u&&"object"==e(u)&&s.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(u).then((function(e){d.value=e,a(d)}),(function(e){return n("throw",e,a,c)}))}c(o.arg)}var l;i(this,"_invoke",{value:function(e,r){function s(){return new t((function(t,l){n(e,r,t,l)}))}return l=l?l.then(s,s):s()}})}function E(e,t,n){var l=f;return function(s,i){if(l===p)throw Error("Generator is already running");if(l===v){if("throw"===s)throw i;return{value:r,done:!0}}for(n.method=s,n.arg=i;;){var a=n.delegate;if(a){var c=F(a,n);if(c){if(c===b)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(l===f)throw l=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);l=p;var o=h(e,t,n);if("normal"===o.type){if(l=n.done?v:j,o.arg===b)continue;return{value:o.arg,done:n.done}}"throw"===o.type&&(l=v,n.method="throw",n.arg=o.arg)}}}function F(e,t){var n=t.method,l=e.iterator[n];if(l===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,F(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var s=h(l,e.iterator,t.arg);if("throw"===s.type)return t.method="throw",t.arg=s.arg,t.delegate=null,b;var i=s.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,b):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function T(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function z(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function L(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var l=-1,i=function e(){for(;++l<t.length;)if(s.call(t,l))return e.value=t[l],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return y.prototype=g,i(O,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:y,configurable:!0}),y.displayName=u(g,d,"GeneratorFunction"),t.isGeneratorFunction=function(e){var r="function"==typeof e&&e.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,d,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},S(D.prototype),u(D.prototype,o,(function(){return this})),t.AsyncIterator=D,t.async=function(e,r,n,l,s){void 0===s&&(s=Promise);var i=new D(x(e,r,n,l),s);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(O),u(O,d,"Generator"),u(O,c,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var r=Object(e),t=[];for(var n in r)t.push(n);return t.reverse(),function e(){for(;t.length;){var n=t.pop();if(n in r)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(z),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,l){return a.type="throw",a.arg=e,t.next=n,l&&(t.method="next",t.arg=r),!!l}for(var l=this.tryEntries.length-1;l>=0;--l){var i=this.tryEntries[l],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=s.call(i,"catchLoc"),o=s.call(i,"finallyLoc");if(c&&o){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!o)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=r&&r<=l.finallyLoc&&(l=null);var i=l?l.completion:{};return i.type=e,i.arg=r,l?(this.method="next",this.next=l.finallyLoc,b):this.complete(i)},complete:function(e,r){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&r&&(this.next=r),b},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),z(t),b}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var n=t.completion;if("throw"===n.type){var l=n.arg;z(t)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),b}},t}function s(e,r,t,n,l,s,i){try{var a=e[s](i),c=a.value}catch(o){return void t(o)}a.done?r(c):Promise.resolve(c).then(n,l)}function i(e){return function(){var r=this,t=arguments;return new Promise((function(n,l){var i=e.apply(r,t);function a(e){s(i,n,l,a,c,"next",e)}function c(e){s(i,n,l,a,c,"throw",e)}a(void 0)}))}}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,l,s,i,a=[],c=!0,o=!1;try{if(s=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;c=!1}else for(;!(c=(n=s.call(t)).done)&&(a.push(n.value),a.length!==r);c=!0);}catch(e){o=!0,l=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(o)throw l}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}System.register(["./react-legacy-B2ecEqTO.js","./index-legacy-CgIOLcT_.js","./react-copy-to-clipboard-legacy-DGoXRjvp.js","./react-router-legacy-CISFq-iN.js","./antd-legacy-DyD8mCKm.js","./ethers-legacy-kCWJjqgc.js","./utils-legacy-BljDkB6z.js","./Table-legacy-DIEwxOWH.js","./call-bind-legacy-GKmFuFy5.js","./get-intrinsic-legacy-CXG_Wl3y.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-B4FR5P5p.js","./define-data-property-legacy-DenQ9IDl.js","./es-define-property-legacy--y_Ghgnh.js","./gopd-legacy-CJWyhuEd.js","./has-property-descriptors-legacy-BIFhRJfA.js","./react-dom-legacy-BBw5LNvY.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-C61an_yI.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-C42M3Mp6.js","./use-sync-external-store-legacy-Cjy4gzco.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-CdsvtTJ7.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./moment-legacy-BglnxN2U.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-oT1QLxTi.js","./define-properties-legacy-h10uDkoQ.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-CFhqrEDF.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-BAOcIVwq.js","./functions-have-names-legacy-DewFt_VA.js","./echarts-legacy-DFgybjKn.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js","./rc-util-legacy-Pri6j-ww.js","./@ant-design-legacy-DIuJHTGP.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-QayJL2FV.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-D8eRBkrI.js","./rc-motion-legacy-D5Vd4IsE.js","./rc-tooltip-legacy-CUASOSud.js","./@rc-component-legacy-B8-EyL2q.js","./rc-overflow-legacy-DvSHBEcK.js","./rc-menu-legacy-Bi4JbmoZ.js","./rc-select-legacy-nDK9qvZg.js","./rc-virtual-list-legacy-Yakco8-C.js","./rc-field-form-legacy-D4sITDQU.js","./rc-notification-legacy-zpnuzxP4.js","./rc-table-legacy-BFePlR8a.js","./rc-tree-legacy-Cm2GuMMr.js","./rc-checkbox-legacy-CKw5dOM2.js","./rc-pagination-legacy-BT2AYMBO.js","./rc-picker-legacy-Cvf5rcsc.js","./rc-dropdown-legacy--GrLU3ed.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-DQrz8rvS.js","./rc-textarea-legacy-fCmSoi_V.js","./copy-to-clipboard-legacy-D4OEbE8m.js","./toggle-selection-legacy-PgVyXVGf.js"],(function(e,r){"use strict";var n,s,c,o,d,u,x,h,f,j,p,v,b,m,y,g,N,k,w;return{setters:[function(e){n=e.r,s=e.j},function(e){c=e.b,o=e.f,d=e.m,u=e.k,x=e.n,h=e.e},function(e){f=e.l},function(e){j=e.e,p=e.b,v=e.c},function(e){b=e.s,m=e.c,y=e.F,g=e.a},function(e){N=e.f},function(e){k=e.t},function(e){w=e.T},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");function O(e){var r,t,l,i,o,d,u=j(),x=a(n.useState(""),2),h=x[0],p=x[1];return n.useEffect((function(){u.address&&p(u.address)}),[u]),s.jsxs("div",{className:"card-box h-100% flex flex-col justify-evenly",children:[s.jsxs("div",{children:[s.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-16px",children:"Account Detail"}),s.jsxs("div",{className:"link color-blue mb-2vh mt-1vh font-size-12px text-left px-16px flex justify-between",children:[s.jsxs("span",{children:[" ",c(h)," "]})," ",s.jsx(f.CopyToClipboard,{text:h,onCopy:function(){return b.success("Copied to clipboard")},children:s.jsx("i",{className:"i-ep-copy-document color-white font-size-18px"})})]}),s.jsx("div",{className:"px-16px",children:s.jsx(m,{loading:e.loading,active:!0,paragraph:{rows:6},children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"ERB Balance"}),s.jsxs("div",{children:[N((null===(r=e.data)||void 0===r?void 0:r.balance)||"0")," ERB"]})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"Total Staking"}),s.jsx("div",{children:N((null===(t=e.data)||void 0===t?void 0:t.stakerAmount)||"0")})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"Total Staked"}),s.jsx("div",{children:N((null===(l=e.data)||void 0===l?void 0:l.validatorAmount)||"0")})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center  text-line",children:[s.jsx("div",{children:"Online Weight"}),s.jsx("div",{children:null===(i=e.data)||void 0===i?void 0:i.weight})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"ERB Income"}),s.jsx("div",{children:null===(o=e.data)||void 0===o?void 0:o.rewardCoinCount})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"TXN"}),s.jsx("div",{children:"0"})]}),s.jsx("div",{className:"line"})]})})})]}),s.jsxs("div",{children:[s.jsx("div",{className:"color-#D387FF font-size-16px font-bold text-left px-14px",children:"Other Information"}),s.jsx("div",{className:"px-16px",children:s.jsx(m,{loading:e.loading,active:!0,paragraph:{rows:3},children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"Owned CSBT"}),s.jsx("div",{children:null===(d=e.data)||void 0===d?void 0:d.rewardSNFTCount})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"Royalty profits"}),s.jsx("div",{children:"0 ERB"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between items-center text-line",children:[s.jsx("div",{children:"Owned NFTs"}),s.jsx("div",{children:"0"})]}),s.jsx("div",{className:"line"})]})})})]})]})}function S(){return s.jsxs("div",{className:"card-list flex flex-col h-100% gap-2vh",children:[s.jsxs("div",{className:"card-box py-1vh",children:[s.jsx("div",{className:"color-#D387FF font-size-12px lh-3.1vh text-left px-16px font-bold",children:"Block Details # 128088"}),s.jsxs("div",{className:"flex justify-between px-16px stake-line",children:[s.jsx("div",{children:"Block Generation Time"}),s.jsx("div",{children:"5 Min Ago"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between px-16px stake-line",children:[s.jsx("div",{children:"Block Size"}),s.jsx("div",{children:"2011 Bytes"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between px-16px stake-line",children:[s.jsx("div",{children:"Gas Used"}),s.jsx("div",{children:"0(0%)"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between px-16px stake-line",children:[s.jsx("div",{children:"Gas Price"}),s.jsx("div",{children:"0 Gwei"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between px-16px stake-line",children:[s.jsx("div",{children:"Gas Limit"}),s.jsx("div",{children:"8000000"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"flex justify-between px-16px stake-line",children:[s.jsx("div",{children:"Parent Hash"}),s.jsx("div",{children:s.jsx("span",{className:"link color-blue",children:"0x...95a271f3f3998e"})})]}),s.jsx("div",{className:"line"})]}),s.jsxs("div",{className:"card-box font-size-12px text-left  py-1vh",children:[s.jsx("div",{className:"color-#D387FF font-size-12px px-16px lh-3.1vh text-left font-bold",children:"Reward List"}),s.jsx("div",{className:"stake-line",children:"Proposer"}),s.jsx("div",{className:"line"}),s.jsx("div",{className:"stake-line",children:s.jsx("span",{className:"link color-blue ",children:"Dxdb33217fe3f7...4e23ab7/55d05"})}),s.jsx("div",{className:"line"}),s.jsx("div",{className:"stake-line",children:"Validator"}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]}),s.jsx("div",{className:"line"}),s.jsx("div",{className:"stake-line",children:"Staker"}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]})]}),s.jsxs("div",{className:"card-box  py-1vh",children:[s.jsx("div",{className:"color-#D387FF font-size-12px px-16px lh-3.1vh text-left font-bold",children:"Delegated Accounts"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"stake-line",children:[s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"}),"|",s.jsx("span",{className:"link color-blue",children:"Dxdb33...fe3f74bd"})]})]})]})}function D(){return s.jsxs("div",{className:"card-list flex flex-col gap-2vh",children:[s.jsxs("div",{className:"card-box",children:[s.jsx("div",{className:"color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh",children:"Block Details # 128088"}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Block Generation Time"}),s.jsx("div",{children:"5 Min Ago"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Block Size"}),s.jsx("div",{children:"2011 Bytes"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Gas Used"}),s.jsx("div",{children:"0(0%)"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Gas Price"}),s.jsx("div",{children:"0 Gwei"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Gas Limit"}),s.jsx("div",{children:"8000000"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Parent Hash"}),s.jsx("div",{children:s.jsx("span",{className:"link color-blue",children:"0x...95a271f3f3998e"})})]})]}),s.jsxs("div",{className:"card-box",children:[s.jsx("div",{className:"color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh",children:"Blackhole Block Details"}),s.jsxs("table",{className:"font-size-12px staked-table w-100%",cellPadding:0,cellSpacing:0,children:[s.jsxs("thead",{className:"color-#80838E",children:[s.jsx("th",{children:"Penalty Address"}),s.jsx("th",{children:"Penalty Weight"}),s.jsx("th",{children:"Current Weight"})]}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"20"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"20"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"20"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"20"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"20"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"20"})]})]})]})]}),s.jsxs("div",{className:"card-box font-size-12px",children:[s.jsx("div",{className:"color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh",children:"Node Address"}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"staked-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"})]})]})]})}function E(){return s.jsxs("div",{className:"card-list flex flex-col gap-2vh",children:[s.jsxs("div",{className:"card-box",children:[s.jsx("div",{className:"color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh",children:"Block Details # 128088"}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Block Generation Time"}),s.jsx("div",{children:"5 Min Ago"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Block Size"}),s.jsx("div",{children:"2011 Bytes"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Gas Used"}),s.jsx("div",{children:"0(0%)"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Gas Price"}),s.jsx("div",{children:"0 Gwei"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Gas Limit"}),s.jsx("div",{children:"8000000"})]}),s.jsxs("div",{className:"staked-card",children:[s.jsx("div",{children:"Parent Hash"}),s.jsx("div",{children:s.jsx("span",{className:"link color-blue",children:"0x...95a271f3f3998e"})})]})]}),s.jsxs("div",{className:"card-box",children:[s.jsx("div",{className:"color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh",children:"Punishment Details"}),s.jsxs("table",{className:"font-size-12px csbt-table w-100%",cellPadding:0,cellSpacing:0,children:[s.jsxs("thead",{className:"color-#80838E",children:[s.jsx("th",{children:"Address"}),s.jsx("th",{children:"Sum"}),s.jsx("th",{children:"Type"}),s.jsx("th",{})]}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"Muti-sign.."}),s.jsx("td",{children:"^"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"4000"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsxs("td",{children:["  ",s.jsx("span",{className:"link color-blue",children:"Oxe...645"})]}),s.jsx("td",{children:"4000"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"4000"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"4000"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"link color-blue",children:"Oxe...645"})}),s.jsx("td",{children:"20"}),s.jsx("td",{children:"Muti-sign.."}),s.jsx("td",{})]})]})]})]}),s.jsxs("div",{className:"card-box font-size-12px",children:[s.jsx("div",{className:"color-#D387FF font-size-12px font-bold text-left px-16px  lh-4vh",children:"Node Address"}),s.jsx("div",{className:"line"}),s.jsxs("div",{className:"csbt-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue ml-20px",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"csbt-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue ml-20px",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"csbt-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue ml-20px",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"csbt-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue ml-20px",children:"Oxdb33..55d05"})]}),s.jsxs("div",{className:"csbt-card",children:[s.jsx("span",{className:"link color-blue",children:"Oxdb33..55d05"}),s.jsx("span",{className:"link color-blue ml-20px",children:"Oxdb33..55d05"})]})]})]})}function F(e){var r=p(),t=function(e){r("/explorer/accountDetail/".concat(e))},n=[{title:"TXN Hash",key:"hash",width:300,fixed:"left",render:function(e){return s.jsx("span",{className:"link hover:color-blue",children:c(e.hash,6,6)})}},{title:"TXN Time",key:"timestamp",width:200,render:function(e){return o(e.timestamp)}},{title:"Sender",key:"from",width:150,render:function(e){return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.from)},children:c(e.from,6,6)})}},{title:"Receiver",key:"to",width:150,render:function(e){return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.to)},children:c(e.to,6,6)})}},{title:"Transaction Value",key:"value",render:function(e){return N(e.value)}},{title:"TXN Type",key:"input",render:function(e){return s.jsx("div",{className:"max-w-80px text-ellipsis overflow-hidden",title:k(e.input),children:k(e.input)})}},{title:"Status",key:"status",render:function(e){return s.jsx("div",{className:"px-4px rounded-4px ".concat(1===e.status?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," ","rgba(168, 255, 210, .2)"),children:1===e.status?"Success":"Defeat"})}},{title:"TXN Fee",key:"gasPrice",render:function(e){return N(e.gasPrice*e.gasUsed).slice(0,10)}}];return s.jsx("div",{children:s.jsx(y,{dataSource:e.list,loading:e.loading,columns:n})})}function T(e){var r=p(),t=function(e){r("/explorer/accountDetail/".concat(e))},n=[{title:"Account",key:2===e.type?"staker":"validator",render:function(r){var n=r,l=2===e.type?n.staker:n.validator;return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(l)},children:c(l,6,6)})}},{title:"TXN Hash",key:"tx_hash",render:function(e){var r=e;return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(r.tx_hash)},children:c(r.tx_hash,3,3)})}},{title:"Block Height",key:"block_number"},{title:"Stake Time",key:"timestamp",render:function(e){return o(e.timestamp)}},{title:"Value",key:"amount",render:function(e){return N(e.amount)}}];return s.jsx("div",{children:s.jsx(w,{columns:n,dataSources:e.list,loading:e.loading})})}function z(e){var r=p(),t=function(e){r("/explorer/accountDetail/".concat(e))},n=[{title:"Address",fixed:"left",key:"address",render:function(e){return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.address)},children:c(e.address,6,6)})}},{title:s.jsxs("div",{children:["SNFT Number",s.jsx("i",{className:"i-material-symbols-help-outline-rounded font-size-18px cursor-pointer"})]}),key:"address",render:function(e){return parseInt(e.address.slice(3),16)}},{title:"Creation Time",key:"createdAt",render:function(e){return o(e.createdAt)}},{title:"Creator",key:"creator",render:function(e){return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.creator)},children:e.creator?c(e.creator,6,6):"-"})}},{title:"Owner",key:"owner",render:function(e){return s.jsx("span",{className:"link hover:color-blue",onClick:function(){return t(e.owner)},children:e.owner?c(e.owner,6,6):"-"})}},{title:"Owner Get Time",key:"reward_at",render:function(e){return o(e.reward_at)}}];return s.jsx("div",{children:s.jsx(y,{dataSource:e.list,loading:e.loading,columns:n})})}r.textContent=".account-detail .menu-card.active{transition:ease .3s;border-width:1px;border-style:solid;border-image:linear-gradient(to right,#8f41e9,#facb7c) 1;background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}.account-detail .table-box{background:rgba(255,255,255,.05)}.card-box{backdrop-filter:blur(25px);border-width:1px;border-style:solid;border-image:linear-gradient(to bottom,rgba(180,112,207,.5),rgba(232,217,154,.6)) 1}.card-box .line{border-bottom:1px solid #4E3D5A;margin:0 -16px}.card-box .text-line{height:4vh;font-size:12px}.card-box .stake-line{height:2.99vh;display:flex;align-items:center;padding-left:16px;padding-right:16px;text-align:left;font-size:12px}.card-box .staked-card{height:3.04vh;display:flex;align-items:center;justify-content:space-between;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid;padding-left:16px;padding-right:16px;font-size:12px}.card-box .csbt-card{height:3.04vh;display:flex;align-items:center;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid;padding-left:16px;padding-right:16px;font-size:12px}.card-box .staked-table thead th{border-top-width:1px;--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(78 61 90 / var(--un-border-top-opacity));border-top-style:solid;padding-left:10px;padding-right:10px}.card-box .staked-table tr td,.card-box .staked-table thead th{height:3vh;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid}.card-box .csbt-table thead th{border-top-width:1px;--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(78 61 90 / var(--un-border-top-opacity));border-top-style:solid;padding-left:10px;padding-right:10px}.card-box .csbt-table tr td,.card-box .csbt-table thead th{height:3.16vh;border-bottom-width:1px;--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(78 61 90 / var(--un-border-bottom-opacity));border-bottom-style:solid}\n",document.head.appendChild(r),e("default",(function(){var e=j(),r=v(),c=a(n.useState(!1),2),o=c[0],f=c[1],p=a(n.useState(0),2),b=p[0],m=p[1],y=a(n.useState(),2),N=y[0],k=y[1],w=a(n.useState([{label:"TXN",checked:!0,value:1},{label:"Stake",checked:!1,value:2},{label:"Staked",checked:!1,value:3},{label:"CSBT",checked:!1,value:4}]),2),P=w[0],L=w[1],A=a(n.useState([]),2),C=A[0],G=A[1],B=a(n.useState([]),2),_=B[0],I=B[1],R=a(n.useState([]),2),M=R[0],X=R[1],H=a(n.useState(!1),2),U=H[0],V=H[1],W=function(){var e=i(l().mark((function e(r){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V(!0),e.next=4,d(r);case 4:t=e.sent,k(t);case 6:return e.prev=6,setTimeout((function(){V(!1)}),300),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(r){return e.apply(this,arguments)}}(),Y=n.useRef({page:1,page_size:10}),q=function(){var r=i(l().mark((function r(){var n;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,f(!0),r.next=4,u(t(t({},Y.current),{},{addr:e.address}));case 4:n=r.sent,G(n.transactions),m(n.total);case 7:return r.prev=7,f(!1),r.finish(7);case 10:case"end":return r.stop()}}),r,null,[[0,,7,10]])})));return function(){return r.apply(this,arguments)}}(),J=function(){var r=i(l().mark((function r(){var n,s;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,f(!0),2!==K&&3!==K){r.next=9;break}return n=t(t({},Y.current),{},{staker:2===K?e.address:"",validator:3===K?e.address:""}),r.next=6,x(n);case 6:s=r.sent,I(s.data),m(s.total);case 9:return r.prev=9,f(!1),r.finish(9);case 12:case"end":return r.stop()}}),r,null,[[0,,9,12]])})));return function(){return r.apply(this,arguments)}}(),$=function(){var r=i(l().mark((function r(){var n;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,f(!0),r.next=4,h(t(t({},Y.current),{},{owner:e.address}));case 4:n=r.sent,X(n.nfts),m(n.total);case 7:return r.prev=7,f(!1),r.finish(7);case 10:case"end":return r.stop()}}),r,null,[[0,,7,10]])})));return function(){return r.apply(this,arguments)}}(),K=n.useMemo((function(){var e;return Y.current.page=1,null===(e=P.find((function(e){return e.checked})))||void 0===e?void 0:e.value}),[P]);n.useEffect((function(){e.address&&(1===K&&q(),2!==K&&3!==K||J(),4===K&&$())}),[r.pathname,e.address,K]);return n.useEffect((function(){e.address&&W(e.address)}),[e.address]),s.jsxs("div",{className:"account-detail flex h-100% h-72vh",children:[s.jsxs("div",{className:"w-330px",children:[1===K?s.jsx(O,{loading:U,data:N}):s.jsx(s.Fragment,{}),2===K?s.jsx(S,{}):s.jsx(s.Fragment,{}),3===K?s.jsx(D,{}):s.jsx(s.Fragment,{}),4===K?s.jsx(E,{}):s.jsx(s.Fragment,{})]}),s.jsxs("div",{className:"w-70% ml-24px flex flex-col gap-2vh",children:[s.jsx("div",{className:"flex font-size-14px gap-1vh justify-between",children:P.map((function(e,r){return s.jsx("div",{onClick:function(){return r=e,t=P.map((function(e){return e})),t.forEach((function(e){e.value===r.value?e.checked=!0:e.checked=!1})),void L(t);var r,t},className:"w-24% bg-#2A223E lh-4vh cursor-pointer menu-card ".concat(e.checked?"active":""),children:e.label},r)}))}),s.jsxs("div",{className:"table-box h-100%",children:[s.jsxs("div",{className:"text-left px-10px py-8px lh-4vh flex items-center justify-between w-100%",children:[s.jsx("div",{className:"font-size-16px",children:"TRANSACTIONS LIST"}),s.jsx("div",{children:s.jsx(g,{current:Y.current.page,pageSize:Y.current.page_size,total:b,onChange:function(e){Y.current.page=e,1===K&&q();2!==K&&3!==K||J();4===K&&$()}})})]}),s.jsxs("div",{className:" overflow-x-scroll scrollbar-x h-60vh",children:[1===K?s.jsx(F,{list:C,loading:o}):s.jsx(s.Fragment,{}),2===K||3===K?s.jsx(T,{list:_,loading:o,type:K}):s.jsx(s.Fragment,{}),4===K?s.jsx(z,{list:M,loading:o}):s.jsx(s.Fragment,{})]})]})]})]})}))}}}))}();
