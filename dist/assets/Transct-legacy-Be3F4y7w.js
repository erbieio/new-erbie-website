!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},a=Object.prototype,l=a.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var a=t&&t.prototype instanceof x?t:x,l=Object.create(a.prototype),i=new _(n||[]);return o(l,"_invoke",{value:k(e,r,i)}),l}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var y="suspendedStart",p="suspendedYield",g="executing",m="completed",v={};function x(){}function j(){}function b(){}var w={};f(w,c,(function(){return this}));var N=Object.getPrototypeOf,E=N&&N(N(G([])));E&&E!==a&&l.call(E,c)&&(w=E);var T=b.prototype=x.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,r){function n(a,o,i,c){var s=d(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==e(f)&&l.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):r.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}var a;o(this,"_invoke",{value:function(e,t){function l(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(l,l):l()}})}function k(e,t,n){var a=y;return function(l,o){if(a===g)throw Error("Generator is already running");if(a===m){if("throw"===l)throw o;return{value:r,done:!0}}for(n.method=l,n.arg=o;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===y)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=g;var s=d(e,t,n);if("normal"===s.type){if(a=n.done?m:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=m,n.method="throw",n.arg=s.arg)}}}function O(e,t){var n=t.method,a=e.iterator[n];if(a===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var l=d(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,v;var o=l.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function G(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){for(;++a<t.length;)if(l.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,o(T,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:j,configurable:!0}),j.displayName=f(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,u,"GeneratorFunction")),e.prototype=Object.create(T),e},n.awrap=function(e){return{__await:e}},L(S.prototype),f(S.prototype,s,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var o=new S(h(e,t,r,a),l);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},L(T),f(T,u,"Generator"),f(T,c,(function(){return this})),f(T,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=G,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=l.call(o,"catchLoc"),s=l.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:G(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(e,t,r,n,a,l,o){try{var i=e[l](o),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,a)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var o=e.apply(t,n);function i(e){r(o,a,l,i,c,"next",e)}function c(e){r(o,a,l,i,c,"throw",e)}i(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,i=[],c=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy-OG6ByqCe.js","./index-legacy-DqJiI9-D.js","./echarts-legacy-DFgybjKn.js","./TxList-legacy-DHJZ7AZl.js","./ethers-legacy-CRNzbMtm.js","./@babel-legacy-swh58CBx.js","./react-dom-legacy-DLFN5MI-.js","./scheduler-legacy-BLiPNYov.js","./react-router-dom-legacy-CIP-kHDh.js","./react-router-legacy-wOy7u23K.js","./@remix-run-legacy-DHZ5-zef.js","./react-syntax-highlighter-legacy-CAk-_vFC.js","./lowlight-legacy-BgZ6hLma.js","./highlight.js-legacy-DTe1h0ZA.js","./fault-legacy-B6Hnn6yD.js","./format-legacy-Dg2Mrwmy.js","./react-redux-legacy-U9xN_G-3.js","./use-sync-external-store-legacy-Dd8R3_tl.js","./@reduxjs-legacy-Cz2SHXIR.js","./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js","./moment-legacy-BglnxN2U.js","./antd-legacy-oTHwqDN0.js","./@ant-design-legacy-Cs8eITwL.js","./rc-util-legacy-848S57G3.js","./@emotion-legacy-BFSK4Cf6.js","./stylis-legacy-Bck4_XLq.js","./classnames-legacy-CB5qBmms.js","./resize-observer-polyfill-legacy-D_RrGN2a.js","./@ctrl-legacy-CW7W2jwS.js","./rc-resize-observer-legacy-D_18lVwl.js","./rc-motion-legacy-DOcBr6U6.js","./rc-tooltip-legacy-C32VMNB4.js","./@rc-component-legacy-C9RAWUKQ.js","./rc-overflow-legacy-DjZaRXRV.js","./rc-menu-legacy-CRKyJ3Oy.js","./rc-select-legacy-BG7Ox6QF.js","./rc-virtual-list-legacy-NUoDhZmD.js","./rc-field-form-legacy-DSSb_rHF.js","./rc-dialog-legacy-DSUuh2Ly.js","./rc-notification-legacy-BCHw7eTF.js","./rc-table-legacy-BVlG_DT0.js","./rc-tree-legacy-DwOkh8hB.js","./rc-checkbox-legacy-6okj4Xbn.js","./rc-pagination-legacy-D8fMRPZs.js","./rc-picker-legacy-24ZCFRky.js","./rc-dropdown-legacy-ITgGpI0b.js","./throttle-debounce-legacy-0AQhZfp2.js","./rc-input-legacy-Crup_0U-.js","./rc-textarea-legacy-C3waq7_Y.js","./react-transition-group-legacy-D35zTfag.js","./dom-helpers-legacy-qjv8orql.js","./axios-legacy-DIZ7aKIB.js","./promise.prototype.finally-legacy-BGyM1kNP.js","./define-properties-legacy-h10uDkoQ.js","./object-keys-legacy-DqqXkVar.js","./define-data-property-legacy-DenQ9IDl.js","./es-define-property-legacy--y_Ghgnh.js","./get-intrinsic-legacy-CXG_Wl3y.js","./es-errors-legacy-BGzuxDfi.js","./has-symbols-legacy-BRWH93J9.js","./has-proto-legacy-CaU-e2f2.js","./function-bind-legacy-CpC9yIiO.js","./hasown-legacy-DQJLwrtL.js","./gopd-legacy-CJWyhuEd.js","./has-property-descriptors-legacy-BIFhRJfA.js","./call-bind-legacy-Ccg016BC.js","./set-function-length-legacy-B4FR5P5p.js","./es-abstract-legacy-C4bT99lB.js","./is-callable-legacy-mO_k_9mf.js","./set-function-name-legacy-BAOcIVwq.js","./functions-have-names-legacy-DewFt_VA.js","./tslib-legacy-DIlQIBK1.js","./zrender-legacy-s2IJVcQ4.js"],(function(e,r){"use strict";var l,o,i,c,s,u,f,h,d,y,p,g,m,v,x,j,b,w;return{setters:[function(e){l=e.r,o=e.j},function(e){i=e.q,c=e.t,s=e.S,u=e.g,f=e.r,h=e.v,d=e.w},function(e){y=e.u,p=e.a,g=e.b,m=e.c,v=e.d,x=e.e,j=e.i},function(e){b=e.T},function(e){w=e.f},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");function N(e){var t,r=l.useRef(null),n=i((function(){if(t&&t.dispose(),r.current&&e.data){t=j(r.current);var n=e.data.totalErbieTx,a=e.data.totalTransaction-e.data.totalErbieTx-e.data.totalTransferTx,l=e.data.totalTransferTx,o=c(100*Number(n/e.data.totalTransaction),2),i=c(100*Number(a/e.data.totalTransaction),2),s=c(100*Number(l/e.data.totalTransaction),2),u={tooltip:{trigger:"item"},legend:{right:"center",// 设置图例组件离容器右侧的距离
y:"center",// 设置图例组件离容器顶部/底部的距离
orient:"vertical",// 图例列表的布局朝向
borderRadius:120,left:"0",icon:"circle",itemStyle:{},textStyle:{color:"white"}},series:[{name:"TRANSACTIONS BY TYPE",type:"pie",radius:"88%",left:"220px",data:[{value:e.data.totalErbieTx,name:"Erbie Transactions (".concat(o,"%)"),itemStyle:{color:"#740091"}},{value:e.data.totalTransaction-e.data.totalErbieTx-e.data.totalTransferTx,name:"Contract Transactions (".concat(i,"%)"),itemStyle:{color:"#393552"}},{value:e.data.totalTransferTx,name:"Regular Way (".concat(s,"%)"),itemStyle:{color:"#4A336B"}}],label:{show:!1},seriesLayoutBy:"column",center:["50%","50%"],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],grid:{left:"10%",right:"10%",top:"10%",bottom:"20%"}};t.setOption(u)}}),500);return l.useEffect((function(){return e.data&&n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e.data]),o.jsx("div",{className:"w-100% flex justify-center",children:o.jsx("div",{id:"transition-chart",className:"w-84vw h-20vh lg:w-26vw lg:w-18vh",ref:r})})}function E(e){var t,r=l.useRef(null),n=i((function(){var n=e.list.map((function(e){return{value:e.num}})),a=e.list.map((function(e){return{value:e.hour}}));t&&t.dispose();var l={xAxis:{type:"category",data:a,axisTick:{show:!1},axisLine:{lineStyle:{type:"dotted",// 设置为虚线
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
width:1}}},series:[{data:n,type:"line",smooth:!0,lineStyle:{color:"#D300FE",width:3,shadowColor:"#D300FE",shadowBlur:18,shadowOffsetX:5,shadowOffsetY:5}}],grid:{left:"12%",right:"4%",top:"10%",bottom:"22%"}};r.current&&(t=j(r.current)).setOption(l)}),500);return l.useEffect((function(){return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[e.list]),o.jsx("div",{className:"w-100% flex justify-center",children:o.jsx("div",{id:"volume-chart",className:"h-20vh w-84vw lg:h-22vh lg:w-22vw",ref:r})})}r.textContent=".page-transct .data-box .data-card{height:auto;display:flex;align-items:center;justify-content:center;padding-top:10px;padding-bottom:10px;border:1px solid rgba(255,255,255,.3);background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px)}@media (min-width: 1024px){.page-transct .data-box .data-card{height:13vh;padding-top:20px;padding-bottom:20px}}.page-transct .tb1{margin-top:2vh;padding-top:15px;padding-bottom:15px;background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px);border:1px solid rgba(255,255,255,.3)}@media (min-width: 1024px){.page-transct .tb1{height:33vh;padding-top:0;padding-bottom:0}}.page-transct .tb2{width:317px;background:linear-gradient(180deg,rgba(211,135,255,.05),rgba(211,135,255,.1));backdrop-filter:blur(25px);border:1px solid rgba(255,255,255,.3)}@media (min-width: 1024px){.page-transct .tb2{height:30vh}}.page-transct .table-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.05)}\n",document.head.appendChild(r),e("default",(function(){var e=a(l.useState(),2),r=e[0],i=e[1],y=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:r=e.sent,i(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=a(l.useState(!1),2),g=p[0],m=p[1],v=a(l.useState(),2),x=v[0],j=v[1],T=l.useRef({page:1,page_size:10}),L=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,f(T.current);case 4:r=e.sent,j(r);case 6:return e.prev=6,m(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}(),S=a(l.useState(),2),k=S[0],O=S[1],z=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:r=e.sent,O(r&&r.length?r:[{hour:1,num:0},{hour:2,num:0},{hour:3,num:0},{hour:4,num:0},{hour:5,num:0},{hour:6,num:0},{hour:7,num:0},{hour:8,num:0},{hour:9,num:0},{hour:10,num:0},{hour:11,num:0},{hour:12,num:0},{hour:13,num:0},{hour:14,num:0},{hour:15,num:0},{hour:16,num:0},{hour:17,num:0},{hour:18,num:0},{hour:19,num:0},{hour:20,num:0},{hour:21,num:0},{hour:22,num:0},{hour:23,num:0}]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=a(l.useState(0),2),_=A[0],G=A[1],P=function(){var e=n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:r=e.sent,G(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l.useEffect((function(){L(),y(),z(),P()}),[]);return o.jsxs("div",{className:"page-transct min-h-70vh flex flex-col lg:flex-row",children:[o.jsxs("div",{className:"flex flex-col lg:w-35% gap-2vh",children:[o.jsx("div",{className:"flex-1 flex",children:o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"hidden lg:block",children:o.jsx(s,{})}),o.jsxs("div",{className:"tb1 flex flex-col justify-evenly",children:[o.jsx("div",{className:"font-size-14px flex justify-center items-center w-100% lg:py-2vh",children:o.jsxs("div",{className:"flex",children:[o.jsx("div",{className:"lh-20px",children:"24h TXN Volume Growth"}),o.jsxs("div",{className:"font-size-20px lh-20px ml-10px",children:[(100*_).toFixed(2),"%"]})]})}),o.jsx("div",{className:"w-100%",children:o.jsx(E,{list:k||[]})})]})]})}),o.jsx("div",{className:"flex flex-1",children:o.jsxs("div",{className:"tb2 flex flex-col justify-between flex-1",children:[o.jsx("div",{className:"font-size-14px h-60px lg:h-10vh flex justify-center items-center",children:"TRANSACTIONS BY TYPE"}),o.jsx("div",{className:"bingtu lg:h-20vh flex justify-center px-20px",children:o.jsx(N,{data:r})})]})})]}),o.jsxs("div",{className:"w-100% lg:w-65% lg:ml-20px min-h-38vh",children:[o.jsxs("div",{className:"data-box flex gap-1vh mt-14px lg:mt-0",children:[o.jsx("div",{className:"data-card flex-1",children:o.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[o.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transaction Volume"}),o.jsxs("div",{className:"font-size-12px lg:font-size-24px",children:[c(w((null==r?void 0:r.totalAmount)||"0"))," ERB"]})]})}),o.jsx("div",{className:"data-card flex-1",children:o.jsxs("div",{className:"flex flex-col h-100% justify-between",children:[o.jsx("div",{className:"font-size-14px lg:font-size-16px",children:"Total Transactions"}),o.jsx("div",{className:"font-size-12px lg:font-size-24px",children:(null==r?void 0:r.totalTransaction)||"0"})]})})]}),o.jsx("div",{children:o.jsx("div",{className:"table-box mt-2vh",children:o.jsx(b,{onChange:function(e){T.current.page=e,L()},loading:g,params:T,total:(null==x?void 0:x.total)||0,dataSource:(null==x?void 0:x.transactions)||[]})})})]})]})})),y([p,g,m,v,x])}}}))}();