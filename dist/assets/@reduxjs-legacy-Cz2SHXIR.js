!function(){var e=["reducerPath"];function r(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(r.indexOf(n)>=0)continue;t[n]=e[n]}return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function t(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,c=!0,a=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){a=!0,u=e},f:function(){try{c||null==t.return||t.return()}finally{if(a)throw u}}}}function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,u,c=[],a=!0,f=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;a=!1}else for(;!(a=(n=i.call(t)).done)&&(c.push(n.value),c.length!==r);a=!0);}catch(e){f=!0,o=e}finally{try{if(!a&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(f)throw o}}return c}}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,w(n.key),n)}}function a(e,r,t){return r=y(r),function(e,r){if(r&&("object"===m(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(r,t||[],y(e).constructor):r.apply(e,t))}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,r,t){var n=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=y(e)););return e}(e,r);if(n){var o=Object.getOwnPropertyDescriptor(n,r);return o.get?o.get.call(arguments.length<3?e:t):o.value}},f.apply(this,arguments)}function l(e){var r="function"==typeof Map?new Map:void 0;return l=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(r){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return s(e,arguments,y(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),d(t,e)},l(e)}function s(e,r,t){if(p())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,r);var o=new(e.bind.apply(e,n));return t&&d(o,t.prototype),o}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function d(e,r){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},d(e,r)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r,t){return(r=w(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e){var r=function(e,r){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==m(r)?r:r+""}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}System.register(["./redux-legacy-C-zmtTaD.js","./immer-legacy-DzcSlOV2.js","./reselect-legacy-D-PssLgQ.js","./redux-thunk-legacy-BpL4lFo3.js"],(function(i,u){"use strict";var p,v,w,g,O,j,S,E,P,T,C,_,A,R;return{setters:[function(e){p=e.i,v=e.c,w=e.a,g=e.b,O=e.d,j=e.e},function(e){S=e.i,E=e.c,P=e.a,T=e.p},function(e){C=e.c,_=e.w},function(e){A=e.t,R=e.w}],execute:function(){i("a",(function(e){var r,t,n=I(),i=e||{},c=i.reducer,a=void 0===c?void 0:c,f=i.middleware,l=i.devTools,s=void 0===l||l,d=i.preloadedState,y=void 0===d?void 0:d,b=i.enhancers,j=void 0===b?void 0:b;if("function"==typeof a)r=a;else{if(!p(a))throw new Error(Y(1));r=v(a)}t="function"==typeof f?f(n):n();var S=O;s&&(S=u(h({// Enable capture of stack traces for dispatched Redux actions
trace:!X},"object"===m(s)&&s)));var E=w.apply(void 0,o(t)),P=q(E),T="function"==typeof j?j(P):P(),C=S.apply(void 0,o(T));return g(r,y,C)}));!function(){var e=C.apply(void 0,arguments),r=Object.assign((function(){var r=e.apply(void 0,arguments),t=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return r.apply(void 0,[S(e)?E(e):e].concat(n))};return Object.assign(t,r),t}),{withTypes:function(){return r}})}(_);var u="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===m(arguments[0])?O:O.apply(null,arguments)};function k(e,r){function t(){if(r){var t=r.apply(void 0,arguments);if(!t)throw new Error(Y(0));return h(h({type:e,payload:t.payload},"meta"in t&&{meta:t.meta}),"error"in t&&{error:t.error})}return{type:e,payload:arguments.length<=0?void 0:arguments[0]}}return t.toString=function(){return"".concat(e)},t.type=e,t.match=function(r){return j(r)&&r.type===e},t}var x=function(e){function r(){var e;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=a(this,r,[].concat(n)),Object.setPrototypeOf(e,r.prototype),e}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&d(e,r)}(r,e),t=r,n=[{key:"concat",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return f(y(r.prototype),"concat",this).apply(this,t)}},{key:"prepend",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 1===t.length&&Array.isArray(t[0])?s(r,o(t[0].concat(this))):s(r,o(t.concat(this)))}}],i=[{key:Symbol.species,get:function(){return r}}],n&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,i}(l(Array));function M(e){return P(e)?T(e,(function(){})):e}function D(e,r,t){if(e.has(r)){var n=e.get(r);return t.update&&(n=t.update(n,r,e),e.set(r,n)),n}if(!t.insert)throw new Error(Y(10));var o=t.insert(r,e);return e.set(r,o),o}var I=function(){return function(e){var r=null!=e?e:{},t=r.thunk,n=void 0===t||t,o=(r.immutableCheck,r.serializableCheck,r.actionCreatorCheck,new x);return n&&("boolean"==typeof n?o.push(A):o.push(R(n.extraArgument))),o}},N=function(e){return function(r){setTimeout(r,e)}},B="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:N(10),q=function(e){return function(r){var t=(null!=r?r:{}).autoBatch,n=void 0===t||t,o=new x(e);return n&&o.push(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"raf"};return function(r){return function(){var t=r.apply(void 0,arguments),n=!0,o=!1,i=!1,u=new Set,c="tick"===e.type?queueMicrotask:"raf"===e.type?B:"callback"===e.type?e.queueNotification:N(e.timeout),a=function(){i=!1,o&&(o=!1,u.forEach((function(e){return e()})))};return Object.assign({},t,{// Override the base `store.subscribe` method to keep original listeners
// from running if we're delaying notifications
subscribe:function(e){var r=t.subscribe((function(){return n&&e()}));return u.add(e),function(){r(),u.delete(e)}},// Override the base `store.dispatch` method so that we can check actions
// for the `shouldAutoBatch` flag and determine if batching is active
dispatch:function(e){try{var r;return n=!(null!=e&&null!==(r=e.meta)&&void 0!==r&&r.RTK_autoBatch),(o=!n)&&(i||(i=!0,c(a))),t.dispatch(e)}finally{n=!0}}})}}}("object"===m(n)?n:void 0)),o}},X=!0;function F(e){var r,t={},n=[],o={addCase:function(e,r){var n="string"==typeof e?e:e.type;if(!n)throw new Error(Y(28));if(n in t)throw new Error(Y(29));return t[n]=r,o},addMatcher:function(e,r){return n.push({matcher:e,reducer:r}),o},addDefaultCase:function(e){return r=e,o}};return e(o),[t,n,r]}var U=Symbol.for("rtk-slice-createasyncthunk");function W(e,r){return"".concat(e,"/").concat(r)}function L(){var i,u=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).creators,c=null==u||null===(i=u.asyncThunk)||void 0===i?void 0:i[U];return function(i){var u=i.name,a=i.reducerPath,f=void 0===a?u:a;if(!u)throw new Error(Y(11));var l=("function"==typeof i.reducers?i.reducers(function(){function e(e,r){return h({_reducerDefinitionType:"asyncThunk",payloadCreator:e},r)}return e.withTypes=function(){return e},{reducer:function(e){return Object.assign(b({},e.name,(function(){return e.apply(void 0,arguments)}))[e.name],{_reducerDefinitionType:"reducer"/* reducer */})},preparedReducer:function(e,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:r}},asyncThunk:e}}()):i.reducers)||{},s=Object.keys(l),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase:function(e,r){var t="string"==typeof e?e:e.type;if(!t)throw new Error(Y(12));if(t in p.sliceCaseReducersByType)throw new Error(Y(13));return p.sliceCaseReducersByType[t]=r,d},addMatcher:function(e,r){return p.sliceMatchers.push({matcher:e,reducer:r}),d},exposeAction:function(e,r){return p.actionCreators[e]=r,d},exposeCaseReducer:function(e,r){return p.sliceCaseReducersByName[e]=r,d}};function y(){var e=n("function"==typeof i.extraReducers?F(i.extraReducers):[i.extraReducers],3),r=e[0],u=void 0===r?{}:r,c=e[1],a=void 0===c?[]:c,f=e[2],l=void 0===f?void 0:f,s=h(h({},u),p.sliceCaseReducersByType);return function(e,r){var t,i=n(F(r),3),u=i[0],c=i[1],a=i[2];if("function"==typeof e)t=function(){return M(e())};else{var f=M(e);t=function(){return f}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t(),r=arguments.length>1?arguments[1]:void 0,n=[u[r.type]].concat(o(c.filter((function(e){return(0,e.matcher)(r)})).map((function(e){return e.reducer}))));return 0===n.filter((function(e){return!!e})).length&&(n=[a]),n.reduce((function(e,t){if(t){if(S(e)){var n=t(e,r);return void 0===n?e:n}if(P(e))return T(e,(function(e){return t(e,r)}));var o=t(e,r);if(void 0===o){if(null===e)return e;throw new Error(Y(9))}return o}return e}),e)}return l.getInitialState=t,l}(i.initialState,(function(e){for(var r in s)e.addCase(r,s[r]);var n,o=t(p.sliceMatchers);try{for(o.s();!(n=o.n()).done;){var i=n.value;e.addMatcher(i.matcher,i.reducer)}}catch(d){o.e(d)}finally{o.f()}var u,c=t(a);try{for(c.s();!(u=c.n()).done;){var f=u.value;e.addMatcher(f.matcher,f.reducer)}}catch(d){c.e(d)}finally{c.f()}l&&e.addDefaultCase(l)}))}s.forEach((function(e){var r=l[e],t={reducerName:e,type:W(u,e),createNotation:"function"==typeof i.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(r)?function(e,r,t){var n,o,i=e.type,u=e.reducerName,c=e.createNotation;if("reducer"in r){if(c&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(r))throw new Error(Y(17));n=r.reducer,o=r.prepare}else n=r;t.addCase(i,n).exposeCaseReducer(u,n).exposeAction(u,o?k(i,o):k(i))}(t,r,d):function(e,r,t,n){var o=e.type,i=e.reducerName;if(!n)throw new Error(Y(18));var u=r.payloadCreator,c=r.fulfilled,a=r.pending,f=r.rejected,l=r.settled,s=r.options,p=n(o,u,s);t.exposeAction(i,p),c&&t.addCase(p.fulfilled,c);a&&t.addCase(p.pending,a);f&&t.addCase(p.rejected,f);l&&t.addMatcher(p.settled,l);t.exposeCaseReducer(i,{fulfilled:c||z,pending:a||z,rejected:f||z,settled:l||z})}(t,r,d,c)}));var v,w=function(e){return e},m=new Map;function g(e,r){return v||(v=y()),v(e,r)}function O(){return v||(v=y()),v.getInitialState()}function j(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function t(t){var n=t[e];return void 0===n&&r&&(n=O()),n}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=D(m,r,{insert:function(){return new WeakMap}});return D(t,e,{insert:function(){for(var t={},o=0,u=Object.entries(null!==(c=i.selectors)&&void 0!==c?c:{});o<u.length;o++){var c,a=n(u[o],2),f=a[0],l=a[1];t[f]=V(l,e,O,r)}return t}})}return{reducerPath:e,getSelectors:o,get selectors(){return o(t)},selectSlice:t}}var E=h(h({name:u,reducer:g,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:O},j(f)),{},{injectInto:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.reducerPath,i=r(n,e),u=null!=o?o:f;return t.inject({reducerPath:u,reducer:g},i),h(h({},E),j(u,!0))}});return E}}function V(e,r,t,n){function o(o){var i=r(o);void 0===i&&n&&(i=t());for(var u=arguments.length,c=new Array(u>1?u-1:0),a=1;a<u;a++)c[a-1]=arguments[a];return e.apply(void 0,[i].concat(c))}return o.unwrapped=e,o}i("c",L());function z(){}var K="listenerMiddleware",G=function(e){var r=e.type,t=e.actionCreator,n=e.matcher,o=e.predicate,i=e.effect;if(r)o=k(r).match;else if(t)r=t.type,o=t.match;else if(n)o=n;else if(!o)throw new Error(Y(21));return function(e,r){if("function"!=typeof e)throw new Error(Y(32))}(i),{predicate:o,type:r,effect:i}},H=Object.assign((function(e){var r=G(e),t=r.type,n=r.predicate,o=r.effect,i=function(){for(var e="",r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;r--;)e+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return e}();return{id:i,effect:o,type:t,predicate:n,pending:new Set,unsubscribe:function(){throw new Error(Y(22))}}}),{withTypes:function(){return H}}),J=Object.assign(k("".concat(K,"/add")),{withTypes:function(){return J}});k("".concat(K,"/removeAll"));var Q=Object.assign(k("".concat(K,"/remove")),{withTypes:function(){return Q}});function Y(e){return"Minified Redux Toolkit error #".concat(e,"; visit https://redux-toolkit.js.org/Errors?code=").concat(e," for the full message or use the non-minified dev environment for full errors. ")}}}}))}();
