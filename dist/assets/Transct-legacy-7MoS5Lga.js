!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},l=Object.prototype,a=l.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var l=t&&t.prototype instanceof x?t:x,a=Object.create(l.prototype),i=new _(n||[]);return o(a,"_invoke",{value:L(e,r,i)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var y="suspendedStart",p="suspendedYield",g="executing",m="completed",v={};function x(){}function j(){}function b(){}var w={};f(w,c,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(C([])));k&&k!==l&&a.call(k,c)&&(w=k);var S=b.prototype=x.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function T(t,r){function n(l,o,i,c){var s=d(t[l],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):r.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var l;o(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,l){n(e,t,r,l)}))}return l=l?l.then(a,a):a()}})}function L(e,t,n){var l=y;return function(a,o){if(l===g)throw Error("Generator is already running");if(l===m){if("throw"===a)throw o;return{value:r,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(l===y)throw l=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);l=g;var s=d(e,t,n);if("normal"===s.type){if(l=n.done?m:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(l=m,n.method="throw",n.arg=s.arg)}}}function O(e,t){var n=t.method,l=e.iterator[n];if(l===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(l,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var l=-1,o=function e(){for(;++l<t.length;)if(a.call(t,l))return e.value=t[l],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},n.awrap=function(e){return{__await:e}},E(T.prototype),f(T.prototype,s,(function(){return this})),n.AsyncIterator=T,n.async=function(e,t,r,l,a){void 0===a&&(a=Promise);var o=new T(h(e,t,r,l),a);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(S),f(S,u,"Generator"),f(S,c,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=C,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,l){return i.type="throw",i.arg=e,t.next=n,l&&(t.method="next",t.arg=r),!!l}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var l=n.arg;A(r)}return l}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(e,t,r,n,l,a,o){try{var i=e[a](o),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,l)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(l,a){var o=e.apply(t,n);function i(e){r(o,l,a,i,c,"next",e)}function c(e){r(o,l,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,i=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-B2ecEqTO.js","./index-legacy-DU2fGyaS.js","./echarts-legacy-DFgybjKn.js","./antd-legacy-B5vMJEXG.js","./ethers-legacy-kCWJjqgc.js","./call-bind-legacy-GKmFuFy5.js","./get-intrinsic-legacy-CXG_Wl3y.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./set-function-length-legacy-B4FR5P5p.js","./define-data-property-legacy-DenQ9IDl.js","./es-define-property-legacy--y_Ghgnh.js","./gopd-legacy-CJWyhuEd.js","./has-property-descriptors-legacy-BIFhRJfA.js","./react-dom-legacy-BBw5LNvY.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-BFRhbhuJ.js","./react-router-legacy-Bkp7kxOn.js","./@remix-run-legacy-DHZ5-zef.js","./react-redux-legacy-C42M3Mp6.js","./use-sync-external-store-legacy-Cjy4gzco.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./react-transition-group-legacy-CdsvtTJ7.js","./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./moment-legacy-BglnxN2U.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-oT1QLxTi.js","./define-properties-legacy-h10uDkoQ.js","./object-keys-legacy-DqqXkVar.js","./es-abstract-legacy-CFhqrEDF.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-BAOcIVwq.js","./functions-have-names-legacy-DewFt_VA.js","./rc-util-legacy-Pri6j-ww.js","./@ant-design-legacy-DIuJHTGP.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-QayJL2FV.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-D8eRBkrI.js","./rc-motion-legacy-D5Vd4IsE.js","./rc-tooltip-legacy-CUASOSud.js","./@rc-component-legacy-B8-EyL2q.js","./rc-overflow-legacy-DvSHBEcK.js","./rc-menu-legacy-Bi4JbmoZ.js","./rc-select-legacy-nDK9qvZg.js","./rc-virtual-list-legacy-Yakco8-C.js","./rc-field-form-legacy-D4sITDQU.js","./rc-notification-legacy-zpnuzxP4.js","./rc-table-legacy-BFePlR8a.js","./rc-tree-legacy-Cm2GuMMr.js","./rc-checkbox-legacy-CKw5dOM2.js","./rc-pagination-legacy-BT2AYMBO.js","./rc-picker-legacy-Cvf5rcsc.js","./rc-dropdown-legacy--GrLU3ed.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-DQrz8rvS.js","./rc-textarea-legacy-fCmSoi_V.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js"],(function(e,r){"use strict";var a,o,i,c,s,u,f,h,d,y,p,g,m,v,x,j,b,w,N,k,S,E,T;return{setters:[function(e){a=e.r,o=e.j},function(e){i=e.k,c=e.u,s=e.S,u=e.t,f=e.b,h=e.f,d=e.l,y=e.g,p=e.m,g=e.n,m=e.o},function(e){v=e.u,x=e.a,j=e.b,b=e.c,w=e.d,N=e.e,k=e.i},function(e){S=e.P,E=e.F},function(e){T=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");function L(e){var t,r=a.useRef(null),n=i((function(){if(t&&t.dispose(),r.current&&e.data){t=k(r.current);var n={tooltip:{trigger:"item"},legend:{right:"center",// 设置图例组件离容器右侧的距离
y:"center",// 设置图例组件离容器顶部/底部的距离
orient:"vertical",// 图例列表的布局朝向
borderRadius:120,left:"0",icon:"circle",itemStyle:{},textStyle:{color:"white"}},series:[{name:"TRANSACTIONS BY TYPE",type:"pie",radius:"88%",left:"220px",data:[{value:e.data.totalErbieTx,name:"Erbie Transactions",itemStyle:{color:"#740091"}},{value:e.data.totalTransaction-e.data.totalErbieTx-e.data.totalTransferTx,name:"Contract Transactions",itemStyle:{color:"#393552"}},{value:e.data.totalTransferTx,name:"Regular Way",itemStyle:{color:"#4A336B"}}],label:{show:!1},seriesLayoutBy:"column",center:["50%","50%"],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],grid:{left:"10%",right:"10%",top:"10%",bottom:"20%"}};t.setOption(n)}}),500);return a.useEffect((function(){return e.data&&n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e.data]),o.jsx("div",{className:"w-100% flex justify-center",children:o.jsx("div",{id:"transition-chart",className:"w-84vw h-20vh lg:w-26vw lg:w-18vh",ref:r})})}function O(e){var t,r=e.list.map((function(e){return e.num})),n=a.useRef(null),l=i((function(){t&&t.dispose();var l={xAxis:{type:"category",data:e.list.map((function(e){return e.hour})),axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",// 设置为虚线
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
width:1}}},series:[{data:r,type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:5,shadowOffsetY:5}}],grid:{left:"6%",right:"4%",top:"10%",bottom:"22%"}};n.current&&(t=k(n.current)).setOption(l)}),500);return a.useEffect((function(){return l(),window.addEventListener("resize",l),function(){window.removeEventListener("resize",l)}}),[e.list]),o.jsx("div",{className:"w-100% flex justify-center",children:o.jsx("div",{id:"volume-chart",className:"h-20vh w-84vw lg:h-22vh lg:w-23vw",ref:n})})}r.textContent=".page-transct .data-box .data-card{height:auto;display:flex;align-items:center;justify-content:center;padding-top:10px;padding-bottom:10px;border:1px solid #fff}@media (min-width: 1024px){.page-transct .data-box .data-card{height:13vh;padding-top:20px;padding-bottom:20px}}.page-transct .tb1{margin-top:2vh;height:33vh;background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px)}.page-transct .tb2{height:30vh;width:317px;background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px)}.page-transct .table-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.05)}\n",document.head.appendChild(r),e("default",(function(){var e=c(),r=e.toAccountDetail,i=e.toBlockDetail,v=e.toTxDetail,x=[{title:"TXN Hash",key:"blockHash",align:"center",fixed:"left",render:function(e){return o.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return v(e.blockHash)},children:f(e.blockHash,6,6)})}},{title:"TXN Time",key:"timestamp",align:"center",render:function(e){return o.jsx("div",{className:"whitespace-nowrap",children:h(e.timestamp,"YYYY/MM/DD HH:mm:ss")})}},{title:"Block Height",key:"blockNumber",align:"center",render:function(e){return o.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return i(e.blockNumber)},children:e.blockNumber})}},{title:"Sender",key:"from",align:"center",render:function(e){return o.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return r(e.from)},children:f(e.from,6,6)})}},{title:"Receiver",key:"to",align:"center",render:function(e){return o.jsx("div",{className:"link hover:color-#1677ff",onClick:function(){return r(e.to)},children:f(e.to,6,6)})}},{title:"Value (ERB)\t",key:"value",align:"center",render:function(e){return u(T(e.value))}},{title:"TXN Type",key:"Height",align:"center",render:function(e){return o.jsx("div",{className:"whitespace-nowrap",children:d(e.input)})}},{title:"Status",key:"Height",align:"center",render:function(e){return o.jsx("div",{className:"px-4px rounded-4px ".concat(1===e.status?"color-#9effcc bg-#3B4C43":"color-#FE4FA7 bg-#4C293A"," ","rgba(168, 255, 210, .2)"),children:1===e.status?"Success":"Defeat"})}},{title:"TXN Fee",align:"center",render:function(e){return u(T(e.gasPrice*e.gasUsed),m)}}],j=l(a.useState(),2),b=j[0],w=j[1],N=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:r=e.sent,w(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=l(a.useState(!1),2),z=k[0],A=k[1],_=l(a.useState(),2),C=_[0],P=_[1],B=a.useRef({page:1,page_size:10}),F=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,p(B.current);case 4:r=e.sent,P(r);case 6:return e.prev=6,A(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}(),Y=l(a.useState(),2),R=Y[0],G=Y[1],H=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:r=e.sent,G(r&&r.length?r:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.useEffect((function(){F(),N(),H()}),[]);return o.jsxs("div",{className:"page-transct min-h-70vh flex flex-col flex-col-reverse lg:flex-row",children:[o.jsxs("div",{className:"flex flex-col lg:w-35% gap-2vh",children:[o.jsx("div",{className:"flex-1 flex",children:o.jsxs("div",{className:"flex-1",children:[o.jsx(s,{}),o.jsxs("div",{className:"tb1 flex flex-col justify-evenly",children:[o.jsx("div",{className:"font-size-14px flex justify-center items-center w-100% py-2vh",children:o.jsxs("div",{className:"flex",children:[o.jsx("div",{className:"lh-20px",children:"24h TXN Volume Growth"}),o.jsx("div",{className:"font-size-20px lh-20px ml-10px",children:"+0.0000%"})]})}),o.jsx("div",{className:"w-100%",children:o.jsx(O,{list:R||[]})})]})]})}),o.jsx("div",{className:"flex flex-1",children:o.jsxs("div",{className:"tb2 flex flex-col justify-between flex-1",children:[o.jsx("div",{className:"font-size-14px h-10vh flex justify-center items-center",children:"TRANSACTIONS BY TYPE"}),o.jsx("div",{className:"bingtu h-20vh flex justify-center px-20px",children:o.jsx(L,{data:b})})]})})]}),o.jsxs("div",{className:"w-100% lg:w-65% lg:ml-20px min-h-38vh",children:[o.jsxs("div",{className:"data-box flex gap-1vh mt-14px lg:mt-0",children:[o.jsx("div",{className:"data-card flex-1",children:o.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[o.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transaction Volume"}),o.jsxs("div",{className:"font-size-12px lg:font-size-24px",children:[u(T((null==b?void 0:b.totalAmount)||"0"))," ERB"]})]})}),o.jsx("div",{className:"data-card flex-1",children:o.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[o.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transactions"}),o.jsx("div",{className:"font-size-12px lg:font-size-24px",children:(null==b?void 0:b.totalTransaction)||"0"})]})})]}),o.jsx("div",{children:o.jsxs("div",{className:"table-box mt-2vh",children:[o.jsxs("div",{className:"flex flex-col lg:flex-row lg:justify-between px-10px pt-10px pb-14px",children:[o.jsx("div",{className:"font-size-16px uppercase",children:"Transct Informations"}),o.jsx("div",{children:o.jsx(S,{current:B.current.page,pageSize:B.current.page_size,total:null==C?void 0:C.total,onChange:function(e){B.current.page=e,F()}})})]}),o.jsx("div",{className:"lg:min-h-50vh",children:o.jsx("div",{className:"overflow-x-scroll scrollbar-x",children:o.jsx(E,{columns:x,dataSource:null==C?void 0:C.transactions,loading:z,pagination:!1})})})]})})]})]})})),v([x,j,b,w,N])}}}))}();