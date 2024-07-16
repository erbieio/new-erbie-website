!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},a=Object.prototype,l=a.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(r){h=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof x?t:x,l=Object.create(a.prototype),o=new C(n||[]);return i(l,"_invoke",{value:L(e,r,o)}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",g="suspendedYield",y="executing",m="completed",v={};function x(){}function j(){}function b(){}var w={};h(w,c,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(_([])));k&&k!==a&&l.call(k,c)&&(w=k);var S=b.prototype=x.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function T(t,r){function n(a,i,o,c){var s=d(t[a],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==e(h)&&l.call(h,"__await")?r.resolve(h.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):r.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(e,t){function l(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(l,l):l()}})}function L(e,t,n){var a=p;return function(l,i){if(a===y)throw Error("Generator is already running");if(a===m){if("throw"===l)throw i;return{value:r,done:!0}}for(n.method=l,n.arg=i;;){var o=n.delegate;if(o){var c=O(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var s=d(e,t,n);if("normal"===s.type){if(a=n.done?m:g,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=m,n.method="throw",n.arg=s.arg)}}}function O(e,t){var n=t.method,a=e.iterator[n];if(a===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var l=d(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,v;var i=l.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(l.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,i(S,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=h(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,h(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},n.awrap=function(e){return{__await:e}},E(T.prototype),h(T.prototype,s,(function(){return this})),n.AsyncIterator=T,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var i=new T(f(e,t,r,a),l);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(S),h(S,u,"Generator"),h(S,c,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=_,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=l.call(i,"catchLoc"),s=l.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(e,t,r,n,a,l,i){try{var o=e[l](i),c=o.value}catch(s){return void r(s)}o.done?t(c):Promise.resolve(c).then(n,a)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var i=e.apply(t,n);function o(e){r(i,a,l,o,c,"next",e)}function c(e){r(i,a,l,o,c,"throw",e)}o(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,o=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(o.push(n.value),o.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-DxSpAB0g.js","./index-legacy-CrRMrvdS.js","./echarts-legacy-DFgybjKn.js","./antd-legacy-DcLpKIi7.js","./ethers-legacy-CRNzbMtm.js","./call-bind-legacy-b9j9Ev5K.js","./get-intrinsic-legacy-DCImVJtN.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-CFl_MoOY.js","./define-data-property-legacy-oxlhW6df.js","./es-define-property-legacy-FJkJvxnv.js","./gopd-legacy-K-jukfvW.js","./has-property-descriptors-legacy-D8icEZ1F.js","./react-dom-legacy-B0bx0NKw.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-BlFCUOQ7.js","./react-router-legacy-B729MmvI.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-ngw-NNWi.js","./use-sync-external-store-legacy-DTTney0Y.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-D73axzEw.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./moment-legacy-BglnxN2U.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-cjM3kHxr.js","./define-properties-legacy-Dlns_JZW.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-Bg4qZNx9.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-o_jnKihu.js","./functions-have-names-legacy-DewFt_VA.js","./rc-util-legacy-Qq4_lPuU.js","./@ant-design-legacy-Ddm2OMcW.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-D4BrmxoT.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-DBHzm-Bl.js","./rc-motion-legacy-DJBZBtd3.js","./rc-tooltip-legacy-DRxXnPKi.js","./@rc-component-legacy-CkjvlQgF.js","./rc-overflow-legacy-Di_b1E_a.js","./rc-menu-legacy-CqE9t5fr.js","./rc-select-legacy-DAOKQpUE.js","./rc-virtual-list-legacy-BJBT2qr6.js","./rc-field-form-legacy-c-G8Ukn8.js","./rc-dialog-legacy-DTTa1o-J.js","./rc-notification-legacy-Cc7hsl-H.js","./rc-table-legacy-C8k8zIXD.js","./rc-tree-legacy-D2-e7sCD.js","./rc-checkbox-legacy-BzN1Okv-.js","./rc-pagination-legacy-BSh3OrcD.js","./rc-picker-legacy-C-ujPuKF.js","./rc-dropdown-legacy-BB81kU1y.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-C0xlfYzz.js","./rc-textarea-legacy-By2JdYe9.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js"],(function(e,r){"use strict";var l,i,o,c,s,u,h,f,d,p,g,y,m,v,x,j,b,w,N,k,S,E,T,L;return{setters:[function(e){l=e.r,i=e.j},function(e){o=e.l,c=e.u,s=e.g,u=e.S,h=e.t,f=e.c,d=e.f,p=e.m,g=e.a,y=e.n,m=e.o,v=e.p},function(e){x=e.u,j=e.a,b=e.b,w=e.c,N=e.d,k=e.e,S=e.i},function(e){E=e.P,T=e.F},function(e){L=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");function O(e){var t,r=l.useRef(null),n=o((function(){if(t&&t.dispose(),r.current&&e.data){t=S(r.current);var n={tooltip:{trigger:"item"},legend:{right:"center",// 设置图例组件离容器右侧的距离
y:"center",// 设置图例组件离容器顶部/底部的距离
orient:"vertical",// 图例列表的布局朝向
borderRadius:120,left:"0",icon:"circle",itemStyle:{},textStyle:{color:"white"}},series:[{name:"TRANSACTIONS BY TYPE",type:"pie",radius:"88%",left:"220px",data:[{value:e.data.totalErbieTx,name:"Erbie Transactions",itemStyle:{color:"#740091"}},{value:e.data.totalTransaction-e.data.totalErbieTx-e.data.totalTransferTx,name:"Contract Transactions",itemStyle:{color:"#393552"}},{value:e.data.totalTransferTx,name:"Regular Way",itemStyle:{color:"#4A336B"}}],label:{show:!1},seriesLayoutBy:"column",center:["50%","50%"],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],grid:{left:"10%",right:"10%",top:"10%",bottom:"20%"}};t.setOption(n)}}),500);return l.useEffect((function(){return e.data&&n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e.data]),i.jsx("div",{className:"w-100% flex justify-center",children:i.jsx("div",{id:"transition-chart",className:"w-84vw h-20vh lg:w-26vw lg:w-18vh",ref:r})})}function z(e){var t,r=e.list.map((function(e){return e.num})),n=l.useRef(null),a=o((function(){t&&t.dispose();var a={xAxis:{type:"category",data:e.list.map((function(e){return e.hour})),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",// 设置为虚线
// 这里还可以设置其他线条样式，如颜色、宽度等
color:"#eee",// 刻度线颜色
width:0}},axisLabel:{margin:23}},yAxis:{type:"value",min:5,// minInterval: 200,
splitNumber:3,// 分割成10段
nameTextStyle:{fontSize:20},axisLine:{lineStyle:{type:"dotted",// 设置为虚线
// 这里还可以设置其他线条样式，如颜色、宽度等
color:"#eee",// 刻度线颜色
width:1}},splitLine:{show:!0,lineStyle:{type:"dashed",// 设置为虚线
// 这里还可以设置其他线条样式，如颜色、宽度等
color:"#acaaaa",// 刻度线颜色
width:1}}},series:[{data:r,type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:5,shadowOffsetY:5}}],grid:{left:"6%",right:"4%",top:"10%",bottom:"22%"}};n.current&&(t=S(n.current)).setOption(a)}),500);return l.useEffect((function(){return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}),[e.list]),i.jsx("div",{className:"w-100% flex justify-center",children:i.jsx("div",{id:"volume-chart",className:"h-20vh w-84vw lg:h-22vh lg:w-23vw",ref:n})})}r.textContent=".page-transct .data-box .data-card{height:auto;display:flex;align-items:center;justify-content:center;padding-top:10px;padding-bottom:10px;border:1px solid rgba(255,255,255,.5);background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-transct .data-box .data-card{height:13vh;padding-top:20px;padding-bottom:20px}}.page-transct .tb1{margin-top:2vh;padding-top:15px;padding-bottom:15px;background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-transct .tb1{height:33vh;padding-top:0;padding-bottom:0}}.page-transct .tb2{width:317px;background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-transct .tb2{height:30vh}}.page-transct .table-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.05)}\n",document.head.appendChild(r),e("default",(function(){var e=c(),r=e.toAccountDetail,o=e.toBlockDetail,x=e.toTxDetail,j=[{title:i.jsx("div",{className:"whitespace-nowrap",children:"TXN Hash"}),key:"blockHash",align:"center",fixed:"left",render:function(e){return i.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return x(e.hash)},children:f(e.hash,6,6)})}},{title:i.jsx("div",{className:"whitespace-nowrap",children:"TXN Time"}),key:"timestamp",align:"center",render:function(e){return i.jsx("div",{className:"whitespace-nowrap",children:d(e.timestamp,"YYYY/MM/DD HH:mm:ss")})}},{title:i.jsx("div",{className:"whitespace-nowrap",children:"Block Height"}),key:"blockNumber",align:"center",render:function(e){return i.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return o(e.blockNumber)},children:e.blockNumber})}},{title:"Sender",key:"from",align:"center",render:function(e){return i.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return r(e.from)},children:f(e.from,6,6)})}},{title:"Receiver",key:"to",align:"center",render:function(e){return i.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return r(e.to)},children:f(e.to,6,6)})}},{title:i.jsx("div",{className:"whitespace-nowrap",children:"Value (ERB) "}),key:"value",align:"center",render:function(e){return h(L(e.value))}},{title:i.jsx("div",{className:"whitespace-nowrap",children:"TXN Type"}),key:"Height",align:"center",render:function(e){return i.jsx("div",{className:"whitespace-nowrap",children:p(e.input)})}},{title:"Status",key:"Height",align:"center",render:function(e){return i.jsx("div",{className:"px-4px rounded-4px ".concat(1===e.status?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," ","rgba(168, 255, 210, .2)"),children:1===e.status?"Success":"Defeat"})}},{title:i.jsx("div",{className:"whitespace-nowrap",children:"TXN Fee"}),align:"center",render:function(e){return h(L(e.gasPrice*e.gasUsed),v)}}],b=s(),w=a(l.useState(),2),N=w[0],k=w[1],S=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:r=e.sent,k(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=a(l.useState(!1),2),C=A[0],_=A[1],F=a(l.useState(),2),P=F[0],R=F[1],B=l.useRef({page:1,page_size:10}),Y=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,y(B.current);case 4:r=e.sent,R(r);case 6:return e.prev=6,_(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}(),I=a(l.useState(),2),G=I[0],D=I[1],H=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:r=e.sent,D(r&&r.length?r:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l.useEffect((function(){Y(),S(),H()}),[]);return i.jsxs("div",{className:"page-transct min-h-70vh flex flex-col lg:flex-row",children:[i.jsxs("div",{className:"flex flex-col lg:w-35% gap-2vh",children:[i.jsx("div",{className:"flex-1 flex",children:i.jsxs("div",{className:"flex-1",children:[i.jsx("div",{className:"hidden lg:block",children:i.jsx(u,{})}),i.jsxs("div",{className:"tb1 flex flex-col justify-evenly",children:[i.jsx("div",{className:"font-size-14px flex justify-center items-center w-100% lg:py-2vh",children:i.jsxs("div",{className:"flex",children:[i.jsx("div",{className:"lh-20px",children:"24h TXN Volume Growth"}),i.jsx("div",{className:"font-size-20px lh-20px ml-10px",children:"+0.0000%"})]})}),i.jsx("div",{className:"w-100%",children:i.jsx(z,{list:G||[]})})]})]})}),i.jsx("div",{className:"flex flex-1",children:i.jsxs("div",{className:"tb2 flex flex-col justify-between flex-1",children:[i.jsx("div",{className:"font-size-14px h-60px lg:h-10vh flex justify-center items-center",children:"TRANSACTIONS BY TYPE"}),i.jsx("div",{className:"bingtu lg:h-20vh flex justify-center px-20px",children:i.jsx(O,{data:N})})]})})]}),i.jsxs("div",{className:"w-100% lg:w-65% lg:ml-20px min-h-38vh",children:[i.jsxs("div",{className:"data-box flex gap-1vh mt-14px lg:mt-0",children:[i.jsx("div",{className:"data-card flex-1",children:i.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[i.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transaction Volume"}),i.jsxs("div",{className:"font-size-12px lg:font-size-24px",children:[h(L((null==N?void 0:N.totalAmount)||"0"))," ERB"]})]})}),i.jsx("div",{className:"data-card flex-1",children:i.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[i.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transactions"}),i.jsx("div",{className:"font-size-12px lg:font-size-24px",children:(null==N?void 0:N.totalTransaction)||"0"})]})})]}),i.jsx("div",{children:i.jsxs("div",{className:"table-box mt-2vh",children:[i.jsxs("div",{className:"font-size-16px text-left py-10px px-10px lg:px-16px tit items-center justify-between flex flex-row lg:flex-row lg:h-6.4vh",children:[i.jsx("div",{className:"hidden lg:block",children:"TRANSCT INFOMATIONS"}),i.jsx("div",{className:"block lg:hidden",children:"TRANSCT"}),i.jsx("div",{children:i.jsx(E,{current:B.current.page,pageSize:B.current.page_size,total:null==P?void 0:P.total,onChange:function(e){B.current.page=e,Y()},showQuickJumper:!!b.isMobile,simple:!!b.isMobile})})]}),i.jsx("div",{className:"lg:h-51.2vh",children:i.jsx("div",{className:"overflow-x-scroll scrollbar-x",children:i.jsx(T,{columns:j,dataSource:null==P?void 0:P.transactions,loading:C,pagination:!1})})})]})})]})]})})),x([j,b,w,N,k])}}}))}();
