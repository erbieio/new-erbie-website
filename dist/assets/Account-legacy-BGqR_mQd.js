!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,r,n){var o;return o=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(o)?o:o+"")in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return r};var t,r={},n=Object.prototype,a=n.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var o=t&&t.prototype instanceof j?t:j,a=Object.create(o.prototype),i=new z(n||[]);return l(a,"_invoke",{value:N(e,r,i)}),a}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=d;var y="suspendedStart",p="suspendedYield",g="executing",m="completed",v={};function j(){}function x(){}function b(){}var w={};f(w,c,(function(){return this}));var S=Object.getPrototypeOf,E=S&&S(S(C([])));E&&E!==n&&a.call(E,c)&&(w=E);var O=b.prototype=j.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,r){function n(o,l,i,c){var u=h(t[o],t,l);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):r.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(u.arg)}var o;l(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function N(e,r,n){var o=y;return function(a,l){if(o===g)throw Error("Generator is already running");if(o===m){if("throw"===a)throw l;return{value:t,done:!0}}for(n.method=a,n.arg=l;;){var i=n.delegate;if(i){var c=A(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?m:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=h(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var l=a.arg;return l?l.done?(r[e.resultName]=l.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,l=function e(){for(;++o<r.length;)if(a.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return l.next=l}}throw new TypeError(e(r)+" is not iterable")}return x.prototype=b,l(O,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},r.awrap=function(e){return{__await:e}},L(k.prototype),f(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var l=new k(d(e,t,n,o),a);return r.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},L(O),f(O,s,"Generator"),f(O,c,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=C,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),u=a.call(l,"finallyLoc");if(c&&u){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function a(e,t,r,n,o,a,l){try{var i=e[a](l),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var l=e.apply(t,r);function i(e){a(l,n,o,i,c,"next",e)}function c(e){a(l,n,o,i,c,"throw",e)}i(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-B2ecEqTO.js","./index-legacy-LIccoDQ0.js","./echarts-legacy-DFgybjKn.js","./antd-legacy-DyD8mCKm.js","./ethers-legacy-kCWJjqgc.js","./call-bind-legacy-GKmFuFy5.js","./get-intrinsic-legacy-CXG_Wl3y.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-B4FR5P5p.js","./define-data-property-legacy-DenQ9IDl.js","./es-define-property-legacy--y_Ghgnh.js","./gopd-legacy-CJWyhuEd.js","./has-property-descriptors-legacy-BIFhRJfA.js","./react-dom-legacy-BBw5LNvY.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-C61an_yI.js","./react-router-legacy-CISFq-iN.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-C42M3Mp6.js","./use-sync-external-store-legacy-Cjy4gzco.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-CdsvtTJ7.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./moment-legacy-BglnxN2U.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-oT1QLxTi.js","./define-properties-legacy-h10uDkoQ.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-CFhqrEDF.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-BAOcIVwq.js","./functions-have-names-legacy-DewFt_VA.js","./rc-util-legacy-Pri6j-ww.js","./@ant-design-legacy-DIuJHTGP.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-QayJL2FV.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-D8eRBkrI.js","./rc-motion-legacy-D5Vd4IsE.js","./rc-tooltip-legacy-CUASOSud.js","./@rc-component-legacy-B8-EyL2q.js","./rc-overflow-legacy-DvSHBEcK.js","./rc-menu-legacy-Bi4JbmoZ.js","./rc-select-legacy-nDK9qvZg.js","./rc-virtual-list-legacy-Yakco8-C.js","./rc-field-form-legacy-D4sITDQU.js","./rc-notification-legacy-zpnuzxP4.js","./rc-table-legacy-BFePlR8a.js","./rc-tree-legacy-Cm2GuMMr.js","./rc-checkbox-legacy-CKw5dOM2.js","./rc-pagination-legacy-BT2AYMBO.js","./rc-picker-legacy-Cvf5rcsc.js","./rc-dropdown-legacy--GrLU3ed.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-DQrz8rvS.js","./rc-textarea-legacy-fCmSoi_V.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js"],(function(e,t){"use strict";var n,a,c,u,s,f,d,h,y,p,g,m;return{setters:[function(e){n=e.r,a=e.j},function(e){c=e.u,u=e.S,s=e.b,f=e.g,d=e.h,h=e.i},function(e){y=e.i},function(e){p=e.a,g=e.F},function(e){m=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");function v(e){var t,r=n.useRef(null),o={xAxis:{type:"category",data:e.data.map((function(e){return e.hour})),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",// 设置为虚线
// 这里还可以设置其他线条样式，如颜色、宽度等
color:"#eee",// 刻度线颜色
width:0}},axisLabel:{margin:26}},yAxis:{type:"value",min:5,// minInterval: 200,
splitNumber:3,// 分割成10段
nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",// 设置为虚线
// 这里还可以设置其他线条样式，如颜色、宽度等
color:"#eee",// 刻度线颜色
width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",// 设置为虚线
// 这里还可以设置其他线条样式，如颜色、宽度等
color:"#acaaaa",// 刻度线颜色
width:1}}},series:[{data:e.data.map((function(e){return e.num})),type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:4,shadowOffsetY:4}}],grid:{left:"14%",right:"6%",top:"14%",bottom:"24%"}},l=function(){t&&t.dispose(),r.current&&(t=y(r.current)).setOption(o)};return n.useEffect((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[e.data]),a.jsx("div",{className:"w-100%",children:a.jsx("div",{id:"growth-chart",className:"w-84vw lg:w-21vw h-20vh lg:h-22vh",ref:r})})}t.textContent=".page-account .table-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.05)}.page-account .data-card{width:100%;display:flex;align-items:center;justify-content:center;padding:20px 10px;border:1px solid #D87CEE;background:linear-gradient(180deg,rgba(211,135,255,.06),rgba(211,135,255,.1));border-image:linear-gradient(to bottom,rgba(255,255,255,.5),rgba(211,135,255,.6)) 1;backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-account .data-card{height:auto}}.page-account .ant-table-wrapper{width:100%}\n",document.head.appendChild(t),e("default",(function(){var e=c().toAccountDetail,t=[{title:"Address",key:"address",align:"center",render:function(t){return a.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return e(t.address)},children:s(t.address,6,6)})}},{title:"Balance（ERB）",key:"balance",defaultSortOrder:"descend",align:"center",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render:function(e){return m(e.balance)}},{title:"Total Staking",align:"center",key:"staker_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render:function(e){return m((null==e?void 0:e.stakerAmount)||"0")}},{title:"Total Staked",align:"center",key:"validator_amount",sortDirections:["ascend","descend"],sorter:{multiple:void 0},render:function(e){return m((null==e?void 0:e.validatorAmount)||"0")}},{title:"Owned CSBT",dataIndex:"snftCount",sortDirections:["ascend","descend"],align:"center",key:"snft_count",sorter:{multiple:void 0}}],y=i(n.useState(),2),j=y[0],x=y[1],b=function(){var e=l(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=i(n.useState(!1),2),S=w[0],E=w[1],O="balance DESC",L=n.useRef({page:1,page_size:11,order:""}),k=i(n.useState(),2),N=k[0],A=k[1],P=function(){var e=l(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,d(r(r({},L.current),{},{order:O}));case 4:t=e.sent,A(t);case 6:return e.prev=6,E(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}(),_=i(n.useState(),2),z=_[0],C=_[1],D=function(){var e=l(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,C(t&&t.length?t:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n.useEffect((function(){P(),b(),D()}),[]);return a.jsx("div",{className:"page-account",children:a.jsxs("div",{className:"flex flex-col lg:flex-row overflow-hidden mt-20px lg:mt-0",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{children:a.jsx(u,{onSearch:function(){}})}),a.jsxs("div",{className:"table-box lg:h-65vh mt-2vh",children:[a.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between pt-10px px-10px pb-14px",children:[a.jsx("div",{className:"uppercase font-size-16px",children:"Account Informations"}),a.jsx(p,{total:null==N?void 0:N.total,current:L.current.page,pageSize:L.current.page_size,onChange:function(e){L.current.page=e,P()}})]}),a.jsx("div",{className:"h-90% flex w-100%",children:a.jsx(g,{columns:t,dataSource:null==N?void 0:N.accounts,loading:S,pagination:!1,onChange:function(e,t,r){r.order?"ascend"===r.order?O="".concat(r.columnKey," ASC"):"descend"===r.order&&(O="".concat(r.columnKey," DESC")):O="balance DESC",P()}})})]})]}),a.jsxs("div",{className:"w-100% lg:w-25vw lg:ml-22px flex flex-col justify-between gap-10px lg:gap-0 mt-20px lg:mt-0",children:[a.jsx("div",{className:"data-card h-16vh",children:a.jsxs("div",{children:[a.jsx("div",{className:"font-size-16px",children:"Total Coin Addresses"}),a.jsx("div",{className:"font-size-24px",children:null==j?void 0:j.totalAccount})]})}),a.jsx("div",{className:"data-card h-36vh",children:a.jsxs("div",{className:"w-100%",children:[a.jsxs("div",{className:"font-size-14px",children:["24h Account Growth ",a.jsx("br",{}),"+0.00%"," "]}),a.jsx("div",{className:"w-100%",children:a.jsx(v,{data:z||[]})})]})}),a.jsx("div",{className:"data-card h-16vh",children:a.jsxs("div",{children:[a.jsx("div",{className:"font-size-16px",children:"Total Active Addresses"}),a.jsx("div",{className:"font-size-24px",children:null==j?void 0:j.activeAccount})]})})]})]})})}))}}}))}();
