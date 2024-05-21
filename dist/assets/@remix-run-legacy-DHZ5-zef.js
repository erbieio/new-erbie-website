!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(r){f=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),u=new T(n||[]);return i(o,"_invoke",{value:P(e,r,u)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",v="suspendedYield",m="executing",y="completed",b={};function g(){}function w(){}function x(){}var k={};f(k,s,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(_([])));S&&S!==a&&o.call(S,s)&&(k=S);var D=x.prototype=g.prototype=Object.create(k);function L(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function R(t,r){function n(a,i,u,s){var c=h(t[a],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==e(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,u,s)}),(function(e){n("throw",e,u,s)})):r.resolve(f).then((function(e){l.value=e,u(l)}),(function(e){return n("throw",e,u,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(o,o):o()}})}function P(e,t,n){var a=p;return function(o,i){if(a===m)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var s=A(u,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var c=h(e,t,n);if("normal"===c.type){if(a=n.done?y:v,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=y,n.method="throw",n.arg=c.arg)}}}function A(e,t){var n=t.method,a=e.iterator[n];if(a===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,A(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=h(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,b;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,b):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return w.prototype=x,i(D,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,f(e,l,"GeneratorFunction")),e.prototype=Object.create(D),e},n.awrap=function(e){return{__await:e}},L(R.prototype),f(R.prototype,c,(function(){return this})),n.AsyncIterator=R,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var i=new R(d(e,t,r,a),o);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(D),f(D,l,"Generator"),f(D,s,(function(){return this})),f(D,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return u.type="throw",u.arg=e,t.next=n,a&&(t.method="next",t.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;M(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),b}},n}function r(e,t,r,n,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void r(c)}u.done?t(s):Promise.resolve(s).then(n,a)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function u(e){r(i,a,o,u,s,"next",e)}function s(e){r(i,a,o,u,s,"throw",e)}u(void 0)}))}}function a(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function i(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,r||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}function s(e,t){return f(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,u=[],s=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return u}}(e,t)||p(e,t)||l()}function c(e){return f(e)||v(e)||p(e)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e){if(Array.isArray(e))return e}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=p(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function h(e){return function(e){if(Array.isArray(e))return m(e)}(e)||v(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function v(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register([],(function(r,o){"use strict";return{execute:function(){
/**
       * @remix-run/router v1.16.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
       * Actions represent the type of change to a location value.
       */var u;r({a:q,b:
/**
       * Browser history stores the location in regular URLs. This is the standard for
       * most web apps, but it requires some configuration on the server to ensure you
       * serve the same app at multiple URLs.
       *
       * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
       */
function(e){void 0===e&&(e={});return function(e,t,r,n){void 0===n&&(n={});var a=n,i=a.window,s=void 0===i?document.defaultView:i,c=a.v5Compat,l=void 0!==c&&c,d=s.history,h=u.Pop,v=null,g=w();// Index should only be null when we initialize. If not, it's because the
// user called history.pushState or history.replaceState directly, in which
// case we should log a warning as it will result in bugs.
null==g&&(g=0,d.replaceState(o({},d.state,{idx:g}),""));function w(){return(d.state||{idx:null}).idx}function x(){h=u.Pop;var e=w(),t=null==e?null:e-g;g=e,v&&v({action:h,location:D.location,delta:t})}function k(e,t){h=u.Push;var r=y(D.location,e,t),n=m(r,g=w()+1),a=D.createHref(r);// try...catch because iOS limits us to 100 pushState calls :/
try{d.pushState(n,"",a)}catch(o){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(o instanceof DOMException&&"DataCloneError"===o.name)throw o;// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
s.location.assign(a)}l&&v&&v({action:h,location:D.location,delta:1})}function E(e,t){h=u.Replace;var r=y(D.location,e,t),n=m(r,g=w()),a=D.createHref(r);d.replaceState(n,"",a),l&&v&&v({action:h,location:D.location,delta:0})}function S(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
var t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:b(e);// Treating this as a full URL will strip any trailing spaces so we need to
// pre-encode them since they might be part of a matching splat param from
// an ancestor route
return p(t,"No window.location.(origin|href) available to create URL for href: "+(r=r.replace(/ $/,"%20"))),new URL(r,t)}var D={get action(){return h},get location(){return e(s,d)},listen:function(e){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(f,x),v=e,function(){s.removeEventListener(f,x),v=null}},createHref:function(e){return t(s,e)},createURL:S,encodeLocation:function(e){// Encode a Location the same way window.location would
var t=S(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:k,replace:E,go:function(e){return d.go(e)}};return D}//#endregion
((function(e,t){var r=e.location;return y("",{pathname:r.pathname,search:r.search,hash:r.hash},// state defaults to `null` because `window.history.state` does
t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:b(t)}),0,e)},c://#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
       * Create a router and listen to history POP navigations
       */
function(e){var r,i=e.window?e.window:"undefined"!=typeof window?window:void 0,f=void 0!==i&&void 0!==i.document&&void 0!==i.document.createElement,m=!f;if(p(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)r=e.mapRouteProperties;else if(e.detectErrorBoundary){// If they are still using the deprecated version, wrap it with the new API
var b=e.detectErrorBoundary;r=function(e){return{hasErrorBoundary:b(e)}}}else r=ne;// Routes keyed by ID
var g,w,E={},S=x(e.routes,r,void 0,E),D=e.basename||"/",L=e.unstable_dataStrategy||de,R=o({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),P=null,A=new Set,j=null,M=null,T=null,_=null!=e.hydrationData,O=k(S,e.history.location,D),C=null;// Routes in tree format for matching
if(null==O){// If we do not match a user-provided-route, fall back to the root
// to allow the error boundary to take over
var I=Ae(404,{pathname:e.history.location.pathname}),z=Pe(S);O=z.matches,C=a({},z.route.id,I)}var F,N=O.some((function(e){return e.route.lazy})),B=O.some((function(e){return e.route.loader}));if(N)// All initialMatches need to be loaded before we're ready.  If we have lazy
// functions around still then we'll need to run them in initialize()
w=!1;else if(B)if(R.v7_partialHydration){// If partial hydration is enabled, we're initialized so long as we were
// provided with hydrationData for every route with a loader, and no loaders
// were marked for explicit hydration
var $=e.hydrationData?e.hydrationData.loaderData:null,W=e.hydrationData?e.hydrationData.errors:null,H=function(e){// No loader, nothing to initialize
return!e.route.loader||// Explicitly opting-in to running on hydration
("function"!=typeof e.route.loader||!0!==e.route.loader.hydrate)&&($&&void 0!==$[e.route.id]||W&&void 0!==W[e.route.id])};// If errors exist, don't consider routes below the boundary
if(W){var Y=O.findIndex((function(e){return void 0!==W[e.route.id]}));w=O.slice(0,Y+1).every(H)}else w=O.every(H)}else// Without partial hydration - we're initialized if we were provided any
// hydrationData - which is expected to be complete
w=null!=e.hydrationData;else// If we've got no loaders to run, then we're good to go
w=!0;var q,G={historyAction:e.history.action,location:e.history.location,matches:O,initialized:w,navigation:Z,// Don't restore on initial updateState() if we were SSR'd
restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},J=u.Pop,V=!1,X=!1,K=new Map,se=null,ce=!1,le=!1,fe=[],pe=[],ve=new Map,me=0,be=-1,ke=new Map,Ee=new Set,Me=new Map,Ie=new Map,Ne=new Set,$e=new Map,We=new Map,Ke=!1;// -- Stateful internal variables to manage navigations --
// Current navigation in progress (to be committed in completeNavigation)
// Update our state and notify the calling context of the change
function Qe(e,t){void 0===t&&(t={}),G=o({},G,e);// Prep fetcher cleanup so we can tell the UI which fetcher data entries
// can be removed
var r=[],n=[];R.v7_fetcherPersist&&G.fetchers.forEach((function(e,t){"idle"===e.state&&(Ne.has(t)?// Unmounted from the UI and can be totally removed
n.push(t):// Returned to idle but still mounted in the UI, so semi-remains for
// revalidations and such
r.push(t))})),// Iterate over a local copy so that if flushSync is used and we end up
// removing and adding a new subscriber due to the useCallback dependencies,
// we don't get ourselves into a loop calling the new subscriber immediately
h(A).forEach((function(e){return e(G,{deletedFetchers:n,unstable_viewTransitionOpts:t.viewTransitionOpts,unstable_flushSync:!0===t.flushSync})})),// Remove idle fetchers from state since we only care about in-flight fetchers.
R.v7_fetcherPersist&&(r.forEach((function(e){return G.fetchers.delete(e)})),n.forEach((function(e){return kt(e)})))}// Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
// and setting state.[historyAction/location/matches] to the new route.
// - Location is a required param
// - Navigation will always be set to IDLE_NAVIGATION
// - Can pass any other state in newState
function Ze(t,r,n){var a,i,s,c=(void 0===n?{}:n).flushSync,l=null!=G.actionData&&null!=G.navigation.formMethod&&ze(G.navigation.formMethod)&&"loading"===G.navigation.state&&!0!==(null==(a=t.state)?void 0:a._isRedirect);s=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:l?G.actionData:null;// Always preserve any existing loaderData from re-used routes
var f=r.loaderData?De(G.loaderData,r.loaderData,r.matches||[],r.errors):G.loaderData,d=G.blockers;// On a successful navigation we can assume we got through all blockers
// so we can start fresh
d.size>0&&(d=new Map(d)).forEach((function(e,t){return d.set(t,te)}));// Always respect the user flag.  Otherwise don't reset on mutation
// submission navigations unless they redirect
var h,p=!0===V||null!=G.navigation.formMethod&&ze(G.navigation.formMethod)&&!0!==(null==(i=t.state)?void 0:i._isRedirect);// On POP, enable transitions if they were enabled on the original navigation
if(g&&(S=g,g=void 0),ce||J===u.Pop||(J===u.Push?e.history.push(t,t.state):J===u.Replace&&e.history.replace(t,t.state)),J===u.Pop){// Forward takes precedence so they behave like the original navigation
var v=K.get(G.location.pathname);v&&v.has(t.pathname)?h={currentLocation:G.location,nextLocation:t}:K.has(t.pathname)&&(// If we don't have a previous forward nav, assume we're popping back to
// the new location and enable if that location previously enabled
h={currentLocation:t,nextLocation:G.location})}else if(X){// Store the applied transition on PUSH/REPLACE
var m=K.get(G.location.pathname);m?m.add(t.pathname):(m=new Set([t.pathname]),K.set(G.location.pathname,m)),h={currentLocation:G.location,nextLocation:t}}Qe(o({},r,{actionData:s,loaderData:f,historyAction:J,location:t,initialized:!0,navigation:Z,revalidation:"idle",restoreScrollPosition:_t(t,r.matches||G.matches),preventScrollReset:p,blockers:d}),{viewTransitionOpts:h,flushSync:!0===c}),// Reset stateful navigation vars
J=u.Pop,V=!1,X=!1,ce=!1,le=!1,fe=[],pe=[]}// Trigger a navigation event, which can either be a numerical POP or a PUSH
// replace with an optional submission
function et(e,t){return tt.apply(this,arguments)}// Revalidate all current loaders.  If a navigation is in progress or if this
// is interrupted by a navigation, allow this to "succeed" by calling all
// loaders during the next loader round
function tt(){return tt=n(t().mark((function r(n,a){var i,s,c,l,f,d,h,p,v,m,b,g;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("number"!=typeof n){t.next=3;break}return e.history.go(n),t.abrupt("return");case 3:if(i=oe(G.location,G.matches,D,R.v7_prependBasename,n,R.v7_relativeSplatPath,null==a?void 0:a.fromRouteId,null==a?void 0:a.relative),s=ie(R.v7_normalizeFormMethod,!1,i,a),c=s.path,l=s.submission,f=s.error,d=G.location,// When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
// URL from window.location, so we need to encode it here so the behavior
// remains the same as POP and non-data-router usages.  new URL() does all
// the same encoding we'd get from a history.pushState/window.location read
// without having to touch history
h=o({},h=y(G.location,c,a&&a.state),e.history.encodeLocation(h)),p=a&&null!=a.replace?a.replace:void 0,v=u.Push,!0===p?v=u.Replace:!1===p||null!=l&&ze(l.formMethod)&&l.formAction===G.location.pathname+G.location.search&&(// By default on submissions to the current location we REPLACE so that
// users don't have to double-click the back button to get to the prior
// location.  If the user redirects to a different location from the
// action/loader this will be ignored and the redirect will be a PUSH
v=u.Replace),m=a&&"preventScrollReset"in a?!0===a.preventScrollReset:void 0,b=!0===(a&&a.unstable_flushSync),!(g=At({currentLocation:d,nextLocation:h,historyAction:v}))){t.next=17;break}// Put the blocker into a blocked state
return Pt(g,{state:"blocked",location:h,proceed:function(){Pt(g,{state:"proceeding",proceed:void 0,reset:void 0,location:h}),// Send the same navigation through
et(n,a)},reset:function(){var e=new Map(G.blockers);e.set(g,te),Qe({blockers:e})}}),t.abrupt("return");case 17:return t.next=19,rt(v,h,{submission:l,// Send through the formData serialization error if we have one so we can
// render at the right error boundary after we match routes
pendingError:f,preventScrollReset:m,replace:a&&a.replace,enableViewTransition:a&&a.unstable_viewTransition,flushSync:b});case 19:return t.abrupt("return",t.sent);case 20:case"end":return t.stop()}}),r)}))),tt.apply(this,arguments)}// Start a navigation to the given action/location.  Can optionally provide a
// overrideNavigation which will override the normalLoad in the case of a redirect
// navigation
function rt(e,t,r){return nt.apply(this,arguments)}// Call the action matched by the leaf route for this navigation and handle
// redirects/errors
function nt(){return nt=n(t().mark((function r(n,i,u){var s,c,f,d,h,p,v,m,y,b,w,x,E,L,R;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:// Short circuit with a 404 on the root error boundary if we match nothing
if(// Abort any in-progress navigations and start a new one. Unset any ongoing
// uninterrupted revalidations unless told otherwise, since we want this
// new navigation to update history normally
q&&q.abort(),q=null,J=n,ce=!0===(u&&u.startUninterruptedRevalidation),// Save the current scroll position every time we start a new navigation,
// and track whether we should reset scroll on completion
Tt(G.location,G.matches),V=!0===(u&&u.preventScrollReset),X=!0===(u&&u.enableViewTransition),s=g||S,c=u&&u.overrideNavigation,f=k(s,i,D),d=!0===(u&&u.flushSync),f){t.next=17;break}return h=Ae(404,{pathname:i.pathname}),p=Pe(s),v=p.matches,m=p.route,// Cancel all pending deferred on 404s since we don't keep any routes
jt(),Ze(i,{matches:v,loaderData:{},errors:a({},m.id,h)},{flushSync:d}),t.abrupt("return");case 17:if(!G.initialized||le||!Te(G.location,i)||u&&u.submission&&ze(u.submission.formMethod)){t.next=20;break}return Ze(i,{matches:f},{flushSync:d}),t.abrupt("return");case 20:if(// Create a controller/Request for this navigation
q=new AbortController,y=xe(e.history,i,q.signal,u&&u.submission),!u||!u.pendingError){t.next=26;break}// If we have a pendingError, it means the user attempted a GET submission
// with binary FormData so assign here and skip to handleLoaders.  That
// way we handle calling loaders above the boundary etc.  It's not really
// different from an actionError in that sense.
b=[Re(f).route.id,{type:l.error,error:u.pendingError}],t.next=36;break;case 26:if(!(u&&u.submission&&ze(u.submission.formMethod))){t.next=36;break}return t.next=29,at(y,i,u.submission,f,{replace:u.replace,flushSync:d});case 29:if(!(w=t.sent).shortCircuited){t.next=32;break}return t.abrupt("return");case 32:b=w.pendingActionResult,c=qe(i,u.submission),d=!1,// Create a GET request for the loaders
y=xe(e.history,y.url,y.signal);case 36:return t.next=38,it(y,i,f,c,u&&u.submission,u&&u.fetcherSubmission,u&&u.replace,u&&!0===u.initialHydration,d,b);case 38:if(x=t.sent,E=x.shortCircuited,L=x.loaderData,R=x.errors,!E){t.next=44;break}return t.abrupt("return");case 44:// Clean up now that the action/loaders have completed.  Don't clean up if
// we short circuited because pendingNavigationController will have already
// been assigned to a new controller for the next navigation
q=null,Ze(i,o({matches:f},Le(b),{loaderData:L,errors:R}));case 46:case"end":return t.stop()}}),r)}))),nt.apply(this,arguments)}function at(e,t,r,n,a){return ot.apply(this,arguments)}// Call all applicable loaders for the given matches, handling redirects,
// errors, etc.
function ot(){return ot=n(t().mark((function e(r,n,a,o,i){var s,c,f,d,h,p;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i&&(i={}),bt(),Qe({navigation:Ge(n,a)},{flushSync:!0===i.flushSync}),(// Call our action and get the result
c=He(o,n)).route.action||c.route.lazy){e.next=9;break}s={type:l.error,error:Ae(405,{method:r.method,pathname:n.pathname,routeId:c.route.id})},e.next=15;break;case 9:return e.next=11,pt("action",r,[c],o);case 11:if(f=e.sent,s=f[0],!r.signal.aborted){e.next=15;break}return e.abrupt("return",{shortCircuited:!0});case 15:if(!Ue(s)){e.next=20;break}return i&&null!=i.replace?d=i.replace:(// If the user didn't explicity indicate replace behavior, replace if
// we redirected to the exact same location we're currently at to avoid
// double back-buttons
h=we(s.response.headers.get("Location"),new URL(r.url),D),d=h===G.location.pathname+G.location.search),e.next=19,dt(r,s,{submission:a,replace:d});case 19:return e.abrupt("return",{shortCircuited:!0});case 20:if(!Oe(s)){e.next=22;break}throw Ae(400,{type:"defer-action"});case 22:if(!Ce(s)){e.next=26;break}// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
return p=Re(o,c.route.id),// By default, all submissions are REPLACE navigations, but if the
// action threw an error that'll be rendered in an errorElement, we fall
// back to PUSH so that the user can use the back button to get back to
// the pre-submission form location to try again
!0!==(i&&i.replace)&&(J=u.Push),e.abrupt("return",{pendingActionResult:[p.route.id,s]});case 26:return e.abrupt("return",{pendingActionResult:[c.route.id,s]});case 27:case"end":return e.stop()}}),e)}))),ot.apply(this,arguments)}function it(e,t,r,n,a,o,i,u,s,c){return ut.apply(this,arguments)}// Trigger a fetcher load/submit for the given fetcher key
function ut(){return ut=n(t().mark((function r(n,i,u,c,l,f,d,p,v,m){var y,b,w,x,k,E,L,P,A,j,M,T,_,O,C,U,I,z,F,N,B;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:// Short circuit if we have no loaders to run
if(// Figure out the right navigation we want to use for data loading
y=c||qe(i,l),// If this was a redirect from an action we don't have a "submission" but
// we have it on the loading navigation so use that if available
b=l||f||Ye(y),w=g||S,x=ue(e.history,G,u,b,i,R.v7_partialHydration&&!0===p,R.unstable_skipActionErrorRevalidation,le,fe,pe,Ne,Me,Ee,w,D,m),k=s(x,2),E=k[0],L=k[1],// Cancel pending deferreds for no-longer-matched routes or routes we're
// about to reload.  Note that if this is an action reload we would have
// already cancelled all pending deferreds so this would be a no-op
jt((function(e){return!(u&&u.some((function(t){return t.route.id===e})))||E&&E.some((function(t){return t.route.id===e}))})),be=++me,0!==E.length||0!==L.length){t.next=10;break}return P=Dt(),Ze(i,o({matches:u,loaderData:{},// Commit pending error if we're short circuiting
errors:m&&Ce(m[1])?a({},m[0],m[1].error):null},Le(m),P?{fetchers:new Map(G.fetchers)}:{}),{flushSync:v}),t.abrupt("return",{shortCircuited:!0});case 10:// If this is an uninterrupted revalidation, we remain in our current idle
// state.  If not, we need to switch to our loading state and load data,
// preserving any new action data or existing action data (in the case of
// a revalidation interrupting an actionReload)
// If we have partialHydration enabled, then don't update the state for the
// initial data load since it's not a "navigation"
return ce||R.v7_partialHydration&&p||(L.forEach((function(e){var t=G.fetchers.get(e.key),r=Je(void 0,t?t.data:void 0);G.fetchers.set(e.key,r)})),m&&!Ce(m[1])?// This is cast to `any` currently because `RouteData`uses any and it
// would be a breaking change to use any.
// TODO: v7 - change `RouteData` to use `unknown` instead of `any`
A=a({},m[0],m[1].data):G.actionData&&(A=0===Object.keys(G.actionData).length?null:G.actionData),Qe(o({navigation:y},void 0!==A?{actionData:A}:{},L.length>0?{fetchers:new Map(G.fetchers)}:{}),{flushSync:v})),L.forEach((function(e){ve.has(e.key)&&Et(e.key),e.controller&&// Fetchers use an independent AbortController so that aborting a fetcher
// (via deleteFetcher) does not abort the triggering navigation that
// triggered the revalidation
ve.set(e.key,e.controller)})),// Proxy navigation abort through to revalidation fetchers
j=function(){return L.forEach((function(e){return Et(e.key)}))},q&&q.signal.addEventListener("abort",j),t.next=16,mt(G.matches,u,E,L,n);case 16:if(M=t.sent,T=M.loaderResults,_=M.fetcherResults,!n.signal.aborted){t.next=21;break}return t.abrupt("return",{shortCircuited:!0});case 21:if(// Clean up _after_ loaders have completed.  Don't clean up if we short
// circuited because fetchControllers would have been aborted and
// reassigned to new controllers for the next navigation
q&&q.signal.removeEventListener("abort",j),L.forEach((function(e){return ve.delete(e.key)})),!(// If any loaders returned a redirect Response, start a new REPLACE navigation
O=je([].concat(h(T),h(_))))){t.next=29;break}return O.idx>=E.length&&(// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
C=L[O.idx-E.length].key,Ee.add(C)),t.next=28,dt(n,O.result,{replace:d});case 28:return t.abrupt("return",{shortCircuited:!0});case 29:// Process and commit output from loaders
return U=Se(G,u,E,T,m,L,_,$e),I=U.loaderData,z=U.errors,// Wire up subscribers to update loaderData as promises settle
$e.forEach((function(e,t){e.subscribe((function(r){// Note: No need to updateState here since the TrackedPromise on
// loaderData is stable across resolve/reject
// Remove this instance if we were aborted or if promises have settled
(r||e.done)&&$e.delete(t)}))})),// During partial hydration, preserve SSR errors for routes that don't re-run
R.v7_partialHydration&&p&&G.errors&&Object.entries(G.errors).filter((function(e){var t=s(e,1)[0];return!E.some((function(e){return e.route.id===t}))})).forEach((function(e){var t=s(e,2),r=t[0],n=t[1];z=Object.assign(z||{},a({},r,n))})),F=Dt(),N=Lt(be),B=F||N||L.length>0,t.abrupt("return",o({loaderData:I,errors:z},B?{fetchers:new Map(G.fetchers)}:{}));case 36:case"end":return t.stop()}}),r)}))),ut.apply(this,arguments)}// Call the action for the matched fetcher.submit(), and then handle redirects,
// errors, and revalidation
function st(e,t,r,n,a,o,i){return ct.apply(this,arguments)}// Call the matched loader for fetcher.load(), handling redirects, errors, etc.
function ct(){return ct=n(t().mark((function r(n,a,o,i,u,c,l){var f,d,v,m,y,b,w,x,E,L,P,A,j,M,T,_,O,C,U,I,z,F,N,B,$,W,H;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(bt(),Me.delete(n),i.route.action||i.route.lazy){t.next=6;break}return f=Ae(405,{method:l.formMethod,pathname:o,routeId:a}),wt(n,a,f,{flushSync:c}),t.abrupt("return");case 6:// Put this fetcher into it's submitting state
return d=G.fetchers.get(n),gt(n,Ve(l,d),{flushSync:c}),// Call the action for the fetcher
v=new AbortController,m=xe(e.history,o,v.signal,l),ve.set(n,v),y=me,t.next=14,pt("action",m,[i],u);case 14:if(b=t.sent,w=b[0],!m.signal.aborted){t.next=19;break}// We can delete this so long as we weren't aborted by our own fetcher
// re-submit which would have put _new_ controller is in fetchControllers
return ve.get(n)===v&&ve.delete(n),t.abrupt("return");case 19:if(!R.v7_fetcherPersist||!Ne.has(n)){t.next=25;break}if(!Ue(w)&&!Ce(w)){t.next=23;break}return gt(n,Xe(void 0)),t.abrupt("return");case 23:t.next=38;break;case 25:if(!Ue(w)){t.next=35;break}if(ve.delete(n),!(be>y)){t.next=32;break}// A new navigation was kicked off after our action started, so that
// should take precedence over this redirect navigation.  We already
// set isRevalidationRequired so all loaders for the new route should
// fire unless opted out via shouldRevalidate
return gt(n,Xe(void 0)),t.abrupt("return");case 32:return Ee.add(n),gt(n,Je(l)),t.abrupt("return",dt(m,w,{fetcherSubmission:l}));case 35:if(!Ce(w)){t.next=38;break}return wt(n,a,w.error),t.abrupt("return");case 38:if(!Oe(w)){t.next=40;break}throw Ae(400,{type:"defer-action"});case 40:// Start the data load for current matches, or the next location if we're
// in the middle of a navigation
return x=G.navigation.location||G.location,E=xe(e.history,x,v.signal),L=g||S,p(P="idle"!==G.navigation.state?k(L,G.navigation.location,D):G.matches,"Didn't find any matches after fetcher action"),A=++me,ke.set(n,A),j=Je(l,w.data),G.fetchers.set(n,j),M=ue(e.history,G,P,l,x,!1,R.unstable_skipActionErrorRevalidation,le,fe,pe,Ne,Me,Ee,L,D,[i.route.id,w]),T=s(M,2),_=T[0],// Put all revalidating fetchers into the loading state, except for the
// current fetcher which we want to keep in it's current loading state which
// contains it's action submission info + action data
(O=T[1]).filter((function(e){return e.key!==n})).forEach((function(e){var t=e.key,r=G.fetchers.get(t),n=Je(void 0,r?r.data:void 0);G.fetchers.set(t,n),ve.has(t)&&Et(t),e.controller&&ve.set(t,e.controller)})),Qe({fetchers:new Map(G.fetchers)}),C=function(){return O.forEach((function(e){return Et(e.key)}))},v.signal.addEventListener("abort",C),t.next=56,mt(G.matches,P,_,O,E);case 56:if(U=t.sent,I=U.loaderResults,z=U.fetcherResults,!v.signal.aborted){t.next=61;break}return t.abrupt("return");case 61:if(v.signal.removeEventListener("abort",C),ke.delete(n),ve.delete(n),O.forEach((function(e){return ve.delete(e.key)})),!(F=je([].concat(h(I),h(z))))){t.next=69;break}return F.idx>=_.length&&(// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
N=O[F.idx-_.length].key,Ee.add(N)),t.abrupt("return",dt(E,F.result));case 69:// Process and commit output from loaders
B=Se(G,G.matches,_,I,void 0,O,z,$e),$=B.loaderData,W=B.errors,// Since we let revalidations complete even if the submitting fetcher was
// deleted, only put it back to idle if it hasn't been deleted
G.fetchers.has(n)&&(H=Xe(w.data),G.fetchers.set(n,H)),Lt(A),// If we are currently in a navigation loading state and this fetcher is
// more recent than the navigation, we want the newer data so abort the
// navigation and complete it with the fetcher data
"loading"===G.navigation.state&&A>be?(p(J,"Expected pending action"),q&&q.abort(),Ze(G.navigation.location,{matches:P,loaderData:$,errors:W,fetchers:new Map(G.fetchers)})):(// otherwise just update with the fetcher data, preserving any existing
// loaderData for loaders that did not need to reload.  We have to
// manually merge here since we aren't going through completeNavigation
Qe({errors:W,loaderData:De(G.loaderData,$,P,W),fetchers:new Map(G.fetchers)}),le=!1);case 73:case"end":return t.stop()}}),r)}))),ct.apply(this,arguments)}function lt(e,t,r,n,a,o,i){return ft.apply(this,arguments)}
/**
         * Utility function to handle redirects returned from an action or loader.
         * Normally, a redirect "replaces" the navigation that triggered it.  So, for
         * example:
         *
         *  - user is on /a
         *  - user clicks a link to /b
         *  - loader for /b redirects to /c
         *
         * In a non-JS app the browser would track the in-flight navigation to /b and
         * then replace it with /c when it encountered the redirect response.  In
         * the end it would only ever update the URL bar with /c.
         *
         * In client-side routing using pushState/replaceState, we aim to emulate
         * this behavior and we also do not update history until the end of the
         * navigation (including processed redirects).  This means that we never
         * actually touch history until we've processed redirects, so we just use
         * the history action from the original navigation (PUSH or REPLACE).
         */function ft(){return ft=n(t().mark((function r(n,a,o,i,u,s,c){var l,f,d,h,v,m;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=G.fetchers.get(n),gt(n,Je(c,l?l.data:void 0),{flushSync:s}),// Call the loader for this fetcher route match
f=new AbortController,d=xe(e.history,o,f.signal),ve.set(n,f),h=me,t.next=8,pt("loader",d,[i],u);case 8:// Deferred isn't supported for fetcher loads, await everything and treat it
// as a normal load.  resolveDeferredData will return undefined if this
// fetcher gets aborted, so we just leave result untouched and short circuit
// below if that happens
if(v=t.sent,!Oe(m=v[0])){t.next=17;break}return t.next=13,Be(m,d.signal,!0);case 13:if(t.t0=t.sent,t.t0){t.next=16;break}t.t0=m;case 16:m=t.t0;case 17:if(// We can delete this so long as we weren't aborted by our our own fetcher
// re-load which would have put _new_ controller is in fetchControllers
ve.get(n)===f&&ve.delete(n),!d.signal.aborted){t.next=20;break}return t.abrupt("return");case 20:if(!Ne.has(n)){t.next=23;break}return gt(n,Xe(void 0)),t.abrupt("return");case 23:if(!Ue(m)){t.next=33;break}if(!(be>h)){t.next=29;break}// A new navigation was kicked off after our loader started, so that
// should take precedence over this redirect navigation
return gt(n,Xe(void 0)),t.abrupt("return");case 29:return Ee.add(n),t.next=32,dt(d,m);case 32:return t.abrupt("return");case 33:if(!Ce(m)){t.next=36;break}return wt(n,a,m.error),t.abrupt("return");case 36:p(!Oe(m),"Unhandled fetcher deferred data"),// Put the fetcher back into an idle state
gt(n,Xe(m.data));case 38:case"end":return t.stop()}}),r)}))),ft.apply(this,arguments)}function dt(e,t,r){return ht.apply(this,arguments)}// Utility wrapper for calling dataStrategy client-side without having to
// pass around the manifest, mapRouteProperties, etc.
function ht(){return(ht=n(t().mark((function r(n,a,s){var c,l,d,h,v,m,b,g,w,x,k,E,S,L,R;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l=(c=void 0===s?{}:s).submission,d=c.fetcherSubmission,h=c.replace,a.response.headers.has("X-Remix-Revalidate")&&(le=!0),p(v=a.response.headers.get("Location"),"Expected a Location header on the redirect Response"),v=we(v,new URL(n.url),D),m=y(G.location,v,{_isRedirect:!0}),!f){t.next=12;break}if(b=!1,a.response.headers.has("X-Remix-Reload-Document")?// Hard reload if the response contained X-Remix-Reload-Document
b=!0:re.test(v)&&(g=e.history.createURL(v),b=// Hard reload if it's an absolute URL to a new origin
g.origin!==i.location.origin||// Hard reload if it's an absolute URL that does not match our basename
null==U(g.pathname,D)),!b){t.next=12;break}return h?i.location.replace(v):i.location.assign(v),t.abrupt("return");case 12:if(// There's no need to abort on redirects, since we don't detect the
// redirect until the action/loaders have settled
q=null,w=!0===h?u.Replace:u.Push,// Use the incoming submission if provided, fallback on the active one in
// state.navigation
x=G.navigation,k=x.formMethod,E=x.formAction,S=x.formEncType,!l&&!d&&k&&E&&S&&(l=Ye(G.navigation)),// If this was a 307/308 submission we want to preserve the HTTP method and
// re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
// redirected location
L=l||d,!(Q.has(a.response.status)&&L&&ze(L.formMethod))){t.next=22;break}return t.next=20,rt(w,m,{submission:o({},L,{formAction:v}),// Preserve this flag across redirects
preventScrollReset:V});case 20:t.next=25;break;case 22:// If we have a navigation submission, we will preserve it through the
// redirect navigation
return R=qe(m,l),t.next=25,rt(w,m,{overrideNavigation:R,// Send fetcher submissions through for shouldRevalidate
fetcherSubmission:d,// Preserve this flag across redirects
preventScrollReset:V});case 25:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function pt(e,t,r,n){return vt.apply(this,arguments)}function vt(){return vt=n(t().mark((function e(n,a,o,i){var u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,he(L,n,a,o,i,E,r);case 3:return u=e.sent,e.next=6,Promise.all(u.map((function(e,t){if(_e(e)){var r=e.result;return{type:l.redirect,response:ge(r,a,o[t].route.id,i,D,R.v7_relativeSplatPath)}}return ye(e)})));case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",o.map((function(){return{type:l.error,error:e.t0}})));case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),vt.apply(this,arguments)}function mt(e,t,r,n,a){return yt.apply(this,arguments)}function yt(){return yt=n(t().mark((function r(n,a,o,i,u){var s,f,d,p;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([o.length?pt("loader",u,o,a):[]].concat(h(i.map((function(t){return t.matches&&t.match&&t.controller?pt("loader",xe(e.history,t.path,t.controller.signal),[t.match],t.matches).then((function(e){return e[0]})):Promise.resolve({type:l.error,error:Ae(404,{pathname:t.path})})})))));case 2:return s=t.sent,f=c(s),d=f[0],p=f.slice(1),t.next=8,Promise.all([Fe(n,o,d,d.map((function(){return u.signal})),!1,G.loaderData),Fe(n,i.map((function(e){return e.match})),p,i.map((function(e){return e.controller?e.controller.signal:null})),!0)]);case 8:return t.abrupt("return",{loaderResults:d,fetcherResults:p});case 9:case"end":return t.stop()}}),r)}))),yt.apply(this,arguments)}function bt(){var e;// Every interruption triggers a revalidation
le=!0,// Cancel pending route-level deferreds and mark cancelled routes for
// revalidation
(e=fe).push.apply(e,h(jt())),// Abort in-flight fetcher loads
Me.forEach((function(e,t){ve.has(t)&&(pe.push(t),Et(t))}))}function gt(e,t,r){void 0===r&&(r={}),G.fetchers.set(e,t),Qe({fetchers:new Map(G.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function wt(e,t,r,n){void 0===n&&(n={});var o=Re(G.matches,t);kt(e),Qe({errors:a({},o.route.id,r),fetchers:new Map(G.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function xt(e){return R.v7_fetcherPersist&&(Ie.set(e,(Ie.get(e)||0)+1),// If this fetcher was previously marked for deletion, unmark it since we
// have a new instance
Ne.has(e)&&Ne.delete(e)),G.fetchers.get(e)||ee}function kt(e){var t=G.fetchers.get(e);// Don't abort the controller if this is a deletion of a fetcher.submit()
// in it's loading phase since - we don't want to abort the corresponding
// revalidation and want them to complete and land
!ve.has(e)||t&&"loading"===t.state&&ke.has(e)||Et(e),Me.delete(e),ke.delete(e),Ee.delete(e),Ne.delete(e),G.fetchers.delete(e)}function Et(e){var t=ve.get(e);p(t,"Expected fetch controller: "+e),t.abort(),ve.delete(e)}function St(e){var t,r=d(e);try{for(r.s();!(t=r.n()).done;){var n=t.value,a=Xe(xt(n).data);G.fetchers.set(n,a)}}catch(o){r.e(o)}finally{r.f()}}function Dt(){var e,t=[],r=!1,n=d(Ee);try{for(n.s();!(e=n.n()).done;){var a=e.value,o=G.fetchers.get(a);p(o,"Expected fetcher: "+a),"loading"===o.state&&(Ee.delete(a),t.push(a),r=!0)}}catch(i){n.e(i)}finally{n.f()}return St(t),r}function Lt(e){var t,r=[],n=d(ke);try{for(n.s();!(t=n.n()).done;){var a=s(t.value,2),o=a[0];if(a[1]<e){var i=G.fetchers.get(o);p(i,"Expected fetcher: "+o),"loading"===i.state&&(Et(o),ke.delete(o),r.push(o))}}}catch(u){n.e(u)}finally{n.f()}return St(r),r.length>0}function Rt(e){G.blockers.delete(e),We.delete(e)}// Utility function to update blockers, ensuring valid state transitions
function Pt(e,t){var r=G.blockers.get(e)||te;// Poor mans state machine :)
// https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
p("unblocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"proceeding"===t.state||"blocked"===r.state&&"unblocked"===t.state||"proceeding"===r.state&&"unblocked"===t.state,"Invalid blocker state transition: "+r.state+" -> "+t.state);var n=new Map(G.blockers);n.set(e,t),Qe({blockers:n})}function At(e){var t=e.currentLocation,r=e.nextLocation,n=e.historyAction;if(0!==We.size){// We ony support a single active blocker at the moment since we don't have
// any compelling use cases for multi-blocker yet
We.size>1&&v(!1,"A router only supports one blocker at a time");var a=Array.from(We.entries()),o=s(a[a.length-1],2),i=o[0],u=o[1],c=G.blockers.get(i);if(!c||"proceeding"!==c.state)// At this point, we know we're unblocked/blocked so we need to check the
// user-provided blocker function
return u({currentLocation:t,nextLocation:r,historyAction:n})?i:void 0}}function jt(e){var t=[];return $e.forEach((function(r,n){e&&!e(n)||(// Cancel the deferred - but do not remove from activeDeferreds here -
// we rely on the subscribers to do that so our tests can assert proper
// cleanup via _internalActiveDeferreds
r.cancel(),t.push(n),$e.delete(n))})),t}// Opt in to capturing and reporting scroll positions during navigations,
// used by the <ScrollRestoration> component
function Mt(e,t){if(M){var r=M(e,t.map((function(e){return function(e,t){var r=e.route,n=e.pathname,a=e.params;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}(e,G.loaderData)})));return r||e.key}return e.key}function Tt(e,t){if(j&&T){var r=Mt(e,t);j[r]=T()}}function _t(e,t){if(j){var r=Mt(e,t),n=j[r];if("number"==typeof n)return n}return null}return F={get basename(){return D},get future(){return R},get state(){return G},get routes(){return S},get window(){return i},initialize:// Initialize the router, all side effects should be kicked off from here.
// Implemented as a Fluent API for ease of:
//   let router = createRouter(init).initialize();
function(){if(// If history informs us of a POP navigation, start the navigation but do not update
// state.  We'll update our own state once the navigation completes
P=e.history.listen((function(t){var r=t.action,n=t.location,a=t.delta;// Ignore this event if it was just us resetting the URL from a
// blocked POP navigation
if(!Ke){v(0===We.size||null!=a,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");var o=At({currentLocation:G.location,nextLocation:n,historyAction:r});return o&&null!=a?(// Restore the URL to match the current UI, but don't update router state
Ke=!0,e.history.go(-1*a),void// Put the blocker into a blocked state
Pt(o,{state:"blocked",location:n,proceed:function(){Pt(o,{state:"proceeding",proceed:void 0,reset:void 0,location:n}),// Re-do the same POP navigation we just blocked
e.history.go(a)},reset:function(){var e=new Map(G.blockers);e.set(o,te),Qe({blockers:e})}})):rt(r,n)}Ke=!1})),f){// FIXME: This feels gross.  How can we cleanup the lines between
// scrollRestoration/appliedTransitions persistance?
!function(e,t){try{var r=e.sessionStorage.getItem(ae);if(r)for(var n=JSON.parse(r),a=0,o=Object.entries(n||{});a<o.length;a++){var i=s(o[a],2),u=i[0],c=i[1];c&&Array.isArray(c)&&t.set(u,new Set(c||[]))}}catch(l){// no-op, use default empty object
}}(i,K);var t=function(){return function(e,t){if(t.size>0){var r,n={},a=d(t);try{for(a.s();!(r=a.n()).done;){var o=s(r.value,2),i=o[0],u=o[1];n[i]=h(u)}}catch(c){a.e(c)}finally{a.f()}try{e.sessionStorage.setItem(ae,JSON.stringify(n))}catch(I){v(!1,"Failed to save applied view transitions in sessionStorage ("+I+").")}}}(i,K)};i.addEventListener("pagehide",t),se=function(){return i.removeEventListener("pagehide",t)}}// Kick off initial data load if needed.  Use Pop to avoid modifying history
// Note we don't do any handling of lazy here.  For SPA's it'll get handled
// in the normal navigation flow.  For SSR it's expected that lazy modules are
// resolved prior to router creation since we can't go into a fallbackElement
// UI for SSR'd apps
G.initialized||rt(u.Pop,G.location,{initialHydration:!0});return F}// Clean up a router and it's side effects
,subscribe:// Subscribe to state updates for the router
function(e){return A.add(e),function(){return A.delete(e)}},enableScrollRestoration:function(e,t,r){// Perform initial hydration scroll restoration, since we miss the boat on
// the initial updateState() because we've not yet rendered <ScrollRestoration/>
// and therefore have no savedScrollPositions available
if(j=e,T=t,M=r||null,!_&&G.navigation===Z){_=!0;var n=_t(G.location,G.matches);null!=n&&Qe({restoreScrollPosition:n})}return function(){j=null,T=null,M=null}},navigate:et,fetch:function(e,t,r,n){if(m)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ve.has(e)&&Et(e);var a=!0===(n&&n.unstable_flushSync),o=g||S,i=oe(G.location,G.matches,D,R.v7_prependBasename,r,R.v7_relativeSplatPath,t,null==n?void 0:n.relative),u=k(o,i,D);if(!u)return void wt(e,t,Ae(404,{pathname:i}),{flushSync:a});var s=ie(R.v7_normalizeFormMethod,!0,i,n),c=s.path,l=s.submission,f=s.error;if(f)return void wt(e,t,f,{flushSync:a});var d=He(u,c);if(V=!0===(n&&n.preventScrollReset),l&&ze(l.formMethod))return void st(e,t,c,d,u,a,l);// Store off the match so we can call it's shouldRevalidate on subsequent
// revalidations
Me.set(e,{routeId:t,path:c}),lt(e,t,c,d,u,a,l)},revalidate:function(){// If we're currently submitting an action, we don't need to start a new
// navigation, we'll just let the follow up loader execution call all loaders
if(bt(),Qe({revalidation:"loading"}),"submitting"===G.navigation.state)return;// If we're currently in an idle state, start a new navigation for the current
// action/location and mark it as uninterrupted, which will skip the history
// update in completeNavigation
if("idle"===G.navigation.state)return void rt(G.historyAction,G.location,{startUninterruptedRevalidation:!0});// Otherwise, if we're currently in a loading state, just start a new
// navigation to the navigation.location but do not trigger an uninterrupted
// revalidation so that history correctly updates once the navigation completes
rt(J||G.historyAction,G.navigation.location,{overrideNavigation:G.navigation})},// Passthrough to history-aware createHref used by useHref so we get proper
// hash-aware URLs in DOM paths
createHref:function(t){return e.history.createHref(t)},encodeLocation:function(t){return e.history.encodeLocation(t)},getFetcher:xt,deleteFetcher:function(e){if(R.v7_fetcherPersist){var t=(Ie.get(e)||0)-1;t<=0?(Ie.delete(e),Ne.add(e)):Ie.set(e,t)}else kt(e);Qe({fetchers:new Map(G.fetchers)})},dispose:function(){P&&P();se&&se();A.clear(),q&&q.abort(),G.fetchers.forEach((function(e,t){return kt(t)})),G.blockers.forEach((function(e,t){return Rt(t)}))},getBlocker:function(e,t){var r=G.blockers.get(e)||te;We.get(e)!==t&&We.set(e,t);return r},deleteBlocker:Rt,_internalFetchControllers:ve,_internalActiveDeferreds:$e,// TODO: Remove setRoutes, it's temporary to avoid dealing with
// updating the tree while validating the update algorithm.
_internalSetRoutes:function(e){E={},g=x(e,r,void 0,E)}}},g:F,i:p,m:k,p:g,r:N,s:U}),r("A",u),function(e){
/**
         * A POP indicates a change to an arbitrary index in the history stack, such
         * as a back or forward navigation. It does not describe the direction of the
         * navigation, only that the current index changed.
         *
         * Note: This is the default action for newly created history objects.
         */
e.Pop="POP",
/**
         * A PUSH indicates a new entry being added to the history stack, such as when
         * a link is clicked and a new page loads. When this happens, all subsequent
         * entries in the stack are lost.
         */
e.Push="PUSH",
/**
         * A REPLACE indicates the entry at the current index in the history stack
         * being replaced by a new one.
         */
e.Replace="REPLACE"}(u||r("A",u={}));var l,f="popstate";function p(e,t){if(!1===e||null==e)throw new Error(t)}function v(e,t){if(!e){// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{// Welcome to debugging history!
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw new Error(t);// eslint-disable-next-line no-empty
}catch(r){}}}
/**
       * For browser-based histories, we combine the state and key into an object
       */
function m(e,t){return{usr:e.state,key:e.key,idx:t}}
/**
       * Creates a Location object with a unique key from the given Path
       */function y(e,t,r,n){return void 0===r&&(r=null),o({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?g(t):t,{state:r,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}
/**
       * Creates a string URL path from the given pathname, search, and hash components.
       */function b(e){var t=e.pathname,r=void 0===t?"/":t,n=e.search,a=void 0===n?"":n,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(r+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(r+="#"===i.charAt(0)?i:"#"+i),r}
/**
       * Parses a string URL path into its separate pathname, search, and hash components.
       */function g(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(l||(l={}));var w=new Set(["lazy","caseSensitive","path","id","index","children"]);// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function x(e,t,r,n){return void 0===r&&(r=[]),void 0===n&&(n={}),e.map((function(e,a){var i=[].concat(h(r),[a]),u="string"==typeof e.id?e.id:i.join("-");if(p(!0!==e.index||!e.children,"Cannot specify children on an index route"),p(!n[u],'Found a route id collision on id "'+u+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){var s=o({},e,t(e),{id:u});return n[u]=s,s}var c=o({},e,t(e),{id:u,children:void 0});return n[u]=c,e.children&&(c.children=x(e.children,t,i,n)),c}))}
/**
       * Matches the given routes to a location and returns the match data.
       *
       * @see https://reactrouter.com/utils/match-routes
       */function k(e,t,r){void 0===r&&(r="/");var n=U(("string"==typeof t?g(t):t).pathname||"/",r);if(null==n)return null;var a=E(e);!function(e){e.sort((function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){var r=e.length===t.length&&e.slice(0,-1).every((function(e,r){return e===t[r]}));return r?// If two routes are siblings, we should try to match the earlier sibling
// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
e[e.length-1]-t[t.length-1]:// Otherwise, it doesn't really make sense to rank non-siblings by index,
// so they sort equally.
0}(e.routesMeta.map((function(e){return e.childrenIndex})),t.routesMeta.map((function(e){return e.childrenIndex})))}))}(a);for(var o=null,i=0;null==o&&i<a.length;++i){// Incoming pathnames are generally encoded from either window.location
// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
var u=C(n);o=_(a[i],u)}return o}function E(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");var a=function(e,a,o){var i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(p(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));var u=B([n,i.relativePath]),s=r.concat(i);// Add the children before adding this route to the array, so we traverse the
// route tree depth-first and child routes appear before their parents in
// the "flattened" version.
e.children&&e.children.length>0&&(p(// Our types know better, but runtime JS may not!
// @ts-expect-error
!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),E(e.children,t,s,u)),// Routes without a path shouldn't ever match by themselves unless they are
// index routes, so don't add them to the list of possible branches.
(null!=e.path||e.index)&&t.push({path:u,score:T(u,e.index),routesMeta:s})};return e.forEach((function(e,t){var r;// coarse-grain check for optional params
if(""!==e.path&&null!=(r=e.path)&&r.includes("?")){var n,o=d(S(e.path));try{for(o.s();!(n=o.n()).done;){var i=n.value;a(e,t,i)}}catch(u){o.e(u)}finally{o.f()}}else a(e,t)})),t}
/**
       * Computes all combinations of optional path segments for a given path,
       * excluding combinations that are ambiguous and of lower priority.
       *
       * For example, `/one/:two?/three/:four?/:five?` explodes to:
       * - `/one/three`
       * - `/one/:two/three`
       * - `/one/three/:four`
       * - `/one/three/:five`
       * - `/one/:two/three/:four`
       * - `/one/:two/three/:five`
       * - `/one/three/:four/:five`
       * - `/one/:two/three/:four/:five`
       */function S(e){var t=e.split("/");if(0===t.length)return[];var r=c(t),n=r[0],a=r.slice(1),o=n.endsWith("?"),i=n.replace(/\?$/,"");// Optional path segments are denoted by a trailing `?`
if(0===a.length)// Intepret empty string as omitting an optional segment
// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return o?[i,""]:[i];var u=S(a.join("/")),s=[];// for absolute paths, ensure `/` instead of empty segment
// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
return s.push.apply(s,h(u.map((function(e){return""===e?i:[i,e].join("/")})))),// Then, if this is an optional value, add all child versions without
o&&s.push.apply(s,h(u)),s.map((function(t){return e.startsWith("/")&&""===t?"/":t}))}var D=/^:[\w-]+$/,L=3,R=2,P=1,A=10,j=-2,M=function(e){return"*"===e};function T(e,t){var r=e.split("/"),n=r.length;return r.some(M)&&(n+=j),t&&(n+=R),r.filter((function(e){return!M(e)})).reduce((function(e,t){return e+(D.test(t)?L:""===t?P:A)}),n)}function _(e,t){for(var r=e.routesMeta,n={},a="/",o=[],i=0;i<r.length;++i){var u=r[i],s=i===r.length-1,c="/"===a?t:t.slice(a.length)||"/",l=O({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},c);if(!l)return null;Object.assign(n,l.params);var f=u.route;o.push({// TODO: Can this as be avoided?
params:n,pathname:B([a,l.pathname]),pathnameBase:$(B([a,l.pathnameBase])),route:f}),"/"!==l.pathnameBase&&(a=B([a,l.pathnameBase]))}return o}
/**
       * Performs pattern matching on a URL pathname and returns information about
       * the match.
       *
       * @see https://reactrouter.com/utils/match-path
       */function O(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});var r=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);v("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');var n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(function(e,t,r){return n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)"}));e.endsWith("*")?(n.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?// When matching to the end, ignore trailing slashes
a+="\\/*$":""!==e&&"/"!==e&&(// If our path is non-empty and contains anything beyond an initial slash,
// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
a+="(?:(?=\\/|$))");var o=new RegExp(a,t?void 0:"i");return[o,n]}(e.path,e.caseSensitive,e.end),n=s(r,2),a=n[0],o=n[1],i=t.match(a);if(!i)return null;var u=i[0],c=u.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:o.reduce((function(e,t,r){var n=t.paramName,a=t.isOptional;// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===n){var o=l[r]||"";c=u.slice(0,u.length-o.length).replace(/(.)\/+$/,"$1")}var i=l[r];return e[n]=a&&!i?void 0:(i||"").replace(/%2F/g,"/"),e}),{}),pathname:u,pathnameBase:c,pattern:e}}function C(e){try{return e.split("/").map((function(e){return decodeURIComponent(e).replace(/\//g,"%2F")})).join("/")}catch(t){return v(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}
/**
       * @private
       */function U(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
var r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}
/**
       * Returns a resolved path object relative to the given pathname.
       *
       * @see https://reactrouter.com/utils/resolve-path
       */function I(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}
/**
       * @private
       *
       * When processing relative navigation we want to ignore ancestor routes that
       * do not contribute to the path, such that index/pathless layout routes don't
       * interfere.
       *
       * For example, when moving a route element into an index route and/or a
       * pathless layout route, relative link behavior contained within should stay
       * the same.  Both of the following examples should link back to the root:
       *
       *   <Route path="/">
       *     <Route path="accounts" element={<Link to=".."}>
       *   </Route>
       *
       *   <Route path="/">
       *     <Route path="accounts">
       *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
       *         <Route index element={<Link to=".."} />  // <-- Does not contribute
       *       </Route
       *     </Route>
       *   </Route>
       */function z(e){return e.filter((function(e,t){return 0===t||e.route.path&&e.route.path.length>0}))}// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function F(e,t){var r=z(e);// When v7_relativeSplatPath is enabled, use the full pathname for the leaf
// match so we include splat values for "." links.  See:
// https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
return t?r.map((function(t,r){return r===e.length-1?t.pathname:t.pathnameBase})):r.map((function(e){return e.pathnameBase}))}
/**
       * @private
       */function N(e,t,r,n){var a;void 0===n&&(n=!1),"string"==typeof e?a=g(e):(p(!(a=o({},e)).pathname||!a.pathname.includes("?"),I("?","pathname","search",a)),p(!a.pathname||!a.pathname.includes("#"),I("#","pathname","hash",a)),p(!a.search||!a.search.includes("#"),I("#","search","hash",a)));var i,u=""===e||""===a.pathname,s=u?"/":a.pathname;// Routing is relative to the current pathname if explicitly requested.
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(null==s)i=r;else{var c=t.length-1;// With relative="route" (the default), each leading .. segment means
// "go up one route" instead of "go up one URL segment".  This is a key
// difference from how <a href> works and a major reason we call this a
// "to" value instead of a "href".
if(!n&&s.startsWith("..")){for(var l=s.split("/");".."===l[0];)l.shift(),c-=1;a.pathname=l.join("/")}i=c>=0?t[c]:"/"}var f=function(e,t){void 0===t&&(t="/");var r="string"==typeof e?g(e):e,n=r.pathname,a=r.search,o=void 0===a?"":a,i=r.hash,u=void 0===i?"":i,s=n?n.startsWith("/")?n:function(e,t){var r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((function(e){".."===e?// Keep the root "" segment so the pathname starts at /
r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(n,t):t;return{pathname:s,search:W(o),hash:H(u)}}(a,i),d=s&&"/"!==s&&s.endsWith("/"),h=(u||"."===s)&&r.endsWith("/");// Ensure the pathname has a trailing slash if the original "to" had one
return f.pathname.endsWith("/")||!d&&!h||(f.pathname+="/"),f}
/**
       * @private
       */var B=r("j",(function(e){return e.join("/").replace(/\/\/+/g,"/")})),$=function(e){return e.replace(/\/+$/,"").replace(/^\/*/,"/")},W=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},H=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},Y=i((function e(t,r,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===a&&(a=!1),this.status=t,this.statusText=r||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}));
/**
       * @private
       */
/**
       * Check if the given error is an ErrorResponse generated from a 4xx/5xx
       * Response thrown from an action/loader
       */
function q(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}r("E",Y);var G=["post","put","patch","delete"],J=new Set(G),V=["get"].concat(G),X=new Set(V),K=new Set([301,302,303,307,308]),Q=new Set([307,308]),Z={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ee={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},te={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},re=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=function(e){return{hasErrorBoundary:Boolean(e.hasErrorBoundary)}},ae="remix-router-transitions";function oe(e,t,r,n,a,o,i,u){var s,c;if(i){// Grab matches up to the calling route so our route-relative logic is
// relative to the correct source route
s=[];var l,f=d(t);try{for(f.s();!(l=f.n()).done;){var h=l.value;if(s.push(h),h.route.id===i){c=h;break}}}catch(v){f.e(v)}finally{f.f()}}else s=t,c=t[t.length-1];// Resolve the relative path
var p=N(a||".",F(s,o),U(e.pathname,r)||e.pathname,"path"===u);// When `to` is not specified we inherit search/hash from the current
// location, unlike when to="." and we just inherit the path.
// See https://github.com/remix-run/remix/issues/927
return null==a&&(p.search=e.search,p.hash=e.hash),// Add an ?index param for matched index routes if we don't already have one
null!=a&&""!==a&&"."!==a||!c||!c.route.index||We(p.search)||(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),// If we're operating within a basename, prepend it to the pathname.  If
// this is a root navigation, then just use the raw basename which allows
// the basename to have full control over the presence of a trailing slash
// on root actions
n&&"/"!==r&&(p.pathname="/"===p.pathname?r:B([r,p.pathname])),b(p)}// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function ie(e,t,r,n){// Return location verbatim on non-submission navigations
if(!n||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(n))return{path:r};if(n.formMethod&&(a=n.formMethod,!X.has(a.toLowerCase())))return{path:r,error:Ae(405,{method:n.formMethod})};var a,o,i,u=function(){return{path:r,error:Ae(400,{type:"invalid-body"})}},c=n.formMethod||"get",l=e?c.toUpperCase():c.toLowerCase(),f=Me(r);if(void 0!==n.body){if("text/plain"===n.formEncType){// text only support POST/PUT/PATCH/DELETE submissions
if(!ze(l))return u();var d="string"==typeof n.body?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
Array.from(n.body.entries()).reduce((function(e,t){var r=s(t,2);return""+e+r[0]+"="+r[1]+"\n"}),""):String(n.body);return{path:r,submission:{formMethod:l,formAction:f,formEncType:n.formEncType,formData:void 0,json:void 0,text:d}}}if("application/json"===n.formEncType){// json only supports POST/PUT/PATCH/DELETE submissions
if(!ze(l))return u();try{var h="string"==typeof n.body?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:l,formAction:f,formEncType:n.formEncType,formData:void 0,json:h,text:void 0}}}catch(y){return u()}}}if(p("function"==typeof FormData,"FormData is not available in this environment"),n.formData)o=ke(n.formData),i=n.formData;else if(n.body instanceof FormData)o=ke(n.body),i=n.body;else if(n.body instanceof URLSearchParams)i=Ee(o=n.body);else if(null==n.body)o=new URLSearchParams,i=new FormData;else try{i=Ee(o=new URLSearchParams(n.body))}catch(y){return u()}var v={formMethod:l,formAction:f,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(ze(v.formMethod))return{path:r,submission:v};// Flatten submission onto URLSearchParams for GET submissions
var m=g(r);// On GET navigation submissions we can drop the ?index param from the
// resulting location since all loaders will run.  But fetcher GET submissions
// only run a single loader so we need to preserve any incoming ?index params
return t&&m.search&&We(m.search)&&o.append("index",""),m.search="?"+o,{path:b(m),submission:v}}// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function ue(e,t,r,n,a,i,u,s,c,l,f,d,h,p,v,m){var y=m?Ce(m[1])?m[1].error:m[1].data:void 0,b=e.createURL(t.location),g=e.createURL(a),w=m&&Ce(m[1])?m[0]:void 0,x=w?function(e,t){var r=e;if(t){var n=e.findIndex((function(e){return e.route.id===t}));n>=0&&(r=e.slice(0,n))}return r}(r,w):r,E=m?m[1].statusCode:void 0,S=u&&E&&E>=400,D=x.filter((function(e,r){var a=e.route;if(a.lazy)// We haven't loaded this route yet so we don't know if it's got a loader!
return!0;if(null==a.loader)return!1;if(i)return!("function"==typeof a.loader&&!a.loader.hydrate)||void 0===t.loaderData[a.id]&&(// Don't re-run if the loader ran and threw an error
!t.errors||void 0===t.errors[a.id]);// Always call the loader on new route instances and pending defer cancellations
if(function(e,t,r){var n=// [a] -> [a, b]
!t||// [a, b] -> [a, c]
r.route.id!==t.route.id,a=void 0===e[r.route.id];// Handle the case that we don't have data for a re-used route, potentially
// from a prior error or from a cancelled pending deferred
// Always load if this is a net-new route or we don't yet have data
return n||a}(t.loaderData,t.matches[r],e)||c.some((function(t){return t===e.route.id})))return!0;// This is the default implementation for when we revalidate.  If the route
// provides it's own implementation, then we give them full control but
// provide this value so they can leverage it if needed after they check
// their own specific use cases
var u=t.matches[r],l=e;return ce(e,o({currentUrl:b,currentParams:u.params,nextUrl:g,nextParams:l.params},n,{actionResult:y,unstable_actionStatus:E,defaultShouldRevalidate:!S&&(// Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
s||b.pathname+b.search===g.pathname+g.search||// Search params affect all loaders
b.search!==g.search||se(u,l))}))})),L=[];return d.forEach((function(e,a){// Don't revalidate:
//  - on initial load (shouldn't be any fetchers then anyway)
//  - if fetcher won't be present in the subsequent render
//    - no longer matches the URL (v7_fetcherPersist=false)
//    - was unmounted but persisted due to v7_fetcherPersist=true
if(!i&&r.some((function(t){return t.route.id===e.routeId}))&&!f.has(a)){var u=k(p,e.path,v);// If the fetcher path no longer matches, push it in with null matches so
// we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
// currently only a use-case for Remix HMR where the route tree can change
// at runtime and remove a route previously loaded via a fetcher
if(u){// Revalidating fetchers are decoupled from the route matches since they
// load from a static href.  They revalidate based on explicit revalidation
// (submission, useRevalidator, or X-Remix-Revalidate)
var c=t.fetchers.get(a),d=He(u,e.path);!h.has(a)&&(!!l.includes(a)||(c&&"idle"!==c.state&&void 0===c.data?s:ce(d,o({currentUrl:b,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:r[r.length-1].params},n,{actionResult:y,unstable_actionStatus:E,defaultShouldRevalidate:!S&&s}))))&&L.push({key:a,routeId:e.routeId,path:e.path,matches:u,match:d,controller:new AbortController})}else L.push({key:a,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null})}})),[D,L]}function se(e,t){var r=e.route.path;// param change for this match, /users/123 -> /users/456
return e.pathname!==t.pathname||// splat param changed, which is not present in match.path
// e.g. /files/images/avatar.jpg -> files/finances.xls
null!=r&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function ce(e,t){if(e.route.shouldRevalidate){var r=e.route.shouldRevalidate(t);if("boolean"==typeof r)return r}return t.defaultShouldRevalidate}
/**
       * Execute route.lazy() methods to lazily load route modules (loader, action,
       * shouldRevalidate) and update the routeManifest in place which shares objects
       * with dataRoutes so those get updated as well.
       */function le(e,t,r){return fe.apply(this,arguments)}// Default implementation of `dataStrategy` which fetches all loaders in parallel
function fe(){return(fe=n(t().mark((function e(r,n,a){var i,u,s,c,l,f;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.lazy){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.lazy();case 4:if(i=e.sent,r.lazy){e.next=7;break}return e.abrupt("return");case 7:for(c in p(u=a[r.id],"No route found in manifest"),// Update the route in place.  This should be safe because there's no way
// we could yet be sitting on this route as we can't get there without
// resolving lazy() first.
// This is different than the HMR "update" use-case where we may actively be
// on the route being updated.  The main concern boils down to "does this
// mutation affect any ongoing navigations or any current state.matches
// values?".  If not, it should be safe to update in place.
s={},i)l=u[c],v(!(f=void 0!==l&&// This property isn't static since it should always be updated based
// on the route updates
"hasErrorBoundary"!==c),'Route "'+u.id+'" has a static property "'+c+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+c+'" will be ignored.'),f||w.has(c)||(s[c]=i[c]);// Mutate the route with the provided updates.  Do this first so we pass
// the updated version to mapRouteProperties
Object.assign(u,s),// Mutate the `hasErrorBoundary` property on the route based on the route
// updates and remove the `lazy` function so we don't resolve the lazy
// route again.
Object.assign(u,o({},n(u),{lazy:void 0}));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){return Promise.all(e.matches.map((function(e){return e.resolve()})))}function he(e,t,r,n,a,o,i,u){return pe.apply(this,arguments)}// Default logic for calling a loader/action is the user has no specified a dataStrategy
function pe(){return(pe=n(t().mark((function e(r,n,a,i,u,s,c,f){var d,h,v;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=i.reduce((function(e,t){return e.add(t.route.id)}),new Set),h=new Set,// Send all matches here to allow for a middleware-type implementation.
// handler will be a no-op for unneeded routes and we filter those results
// back out below.
e.next=4,r({matches:u.map((function(e){var t=d.has(e.route.id);// `resolve` encapsulates the route.lazy, executing the
// loader/action, and mapping return values/thrown errors to a
// HandlerResult.  Users can pass a callback to take fine-grained control
// over the execution of the loader/action
return o({},e,{shouldLoad:t,resolve:function(r){return h.add(e.route.id),t?ve(n,a,e,s,c,r,f):Promise.resolve({type:l.data,result:void 0})}})})),request:a,params:u[0].params,context:f});case 4:// Filter out any middleware-only matches for which we didn't need to run handlers
return v=e.sent,// Throw if any loadRoute implementations not called since they are what
// ensures a route is fully loaded
u.forEach((function(e){return p(h.has(e.route.id),'`match.resolve()` was not called for route id "'+e.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')})),e.abrupt("return",v.filter((function(e,t){return d.has(u[t].route.id)})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e,t,r,n,a,o,i){return me.apply(this,arguments)}function me(){return(me=n(t().mark((function e(r,a,o,i,u,c,f){var d,v,m,y,b,g,w,x,k,E,S;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m=function(e){// Setup a promise we can race against so that abort signals short circuit
var i,u=new Promise((function(e,t){return i=t}));// This will never resolve so safe to type it as Promise<HandlerResult> to
// satisfy the function return value
v=function(){return i()},a.signal.addEventListener("abort",v);var s,l=function(t){return"function"!=typeof e?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+r+'" [routeId: '+o.route.id+"]")):e.apply(void 0,[{request:a,params:o.params,context:f}].concat(h(void 0!==t?[t]:[])))};return s=c?c((function(e){return l(e)})):n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:return r=e.sent,e.abrupt("return",{type:"data",result:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{type:"error",result:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))(),Promise.race([s,u])},e.prev=1,y=o.route[r],!o.route.lazy){e.next=33;break}if(!y){e.next=15;break}return e.next=7,Promise.all([// If the handler throws, don't let it immediately bubble out,
// since we need to let the lazy() execution finish so we know if this
// route has a boundary that can handle the error
m(y).catch((function(e){b=e})),le(o.route,u,i)]);case 7:if(g=e.sent,w=s(g,1),x=w[0],void 0===b){e.next=12;break}throw b;case 12:d=x,e.next=31;break;case 15:return e.next=17,le(o.route,u,i);case 17:if(!(y=o.route[r])){e.next=24;break}return e.next=21,m(y);case 21:d=e.sent,e.next=31;break;case 24:if("action"!==r){e.next=30;break}throw k=new URL(a.url),E=k.pathname+k.search,Ae(405,{method:a.method,pathname:E,routeId:o.route.id});case 30:return e.abrupt("return",{type:l.data,result:void 0});case 31:e.next=42;break;case 33:if(y){e.next=39;break}throw S=new URL(a.url),Ae(404,{pathname:S.pathname+S.search});case 39:return e.next=41,m(y);case 41:d=e.sent;case 42:p(void 0!==d.result,"You defined "+("action"===r?"an action":"a loader")+' for route "'+o.route.id+"\" but didn't return anything from your `"+r+"` function. Please return a value or `null`."),e.next=48;break;case 45:return e.prev=45,e.t0=e.catch(1),e.abrupt("return",{type:l.error,result:e.t0});case 48:return e.prev=48,v&&a.signal.removeEventListener("abort",v),e.finish(48);case 51:return e.abrupt("return",d);case 52:case"end":return e.stop()}}),e,null,[[1,45,48,51]])})))).apply(this,arguments)}function ye(e){return be.apply(this,arguments)}// Support relative routing in internal redirects
function be(){return(be=n(t().mark((function r(n){var a,o,i,u,s,c,f;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.result,o=n.type,i=n.status,!Ie(a)){t.next=25;break}// Check between word boundaries instead of startsWith() due to the last
// paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
if(t.prev=2,!(s=a.headers.get("Content-Type"))||!/\bapplication\/json\b/.test(s)){t.next=14;break}if(null!=a.body){t.next=9;break}u=null,t.next=12;break;case 9:return t.next=11,a.json();case 11:u=t.sent;case 12:t.next=17;break;case 14:return t.next=16,a.text();case 16:u=t.sent;case 17:t.next=22;break;case 19:return t.prev=19,t.t0=t.catch(2),t.abrupt("return",{type:l.error,error:t.t0});case 22:if(o!==l.error){t.next=24;break}return t.abrupt("return",{type:l.error,error:new Y(a.status,a.statusText,u),statusCode:a.status,headers:a.headers});case 24:return t.abrupt("return",{type:l.data,data:u,statusCode:a.status,headers:a.headers});case 25:if(o!==l.error){t.next=27;break}return t.abrupt("return",{type:l.error,error:a,statusCode:q(a)?a.status:i});case 27:if(r=void 0,!(r=a)||"object"!==e(r)||"object"!==e(r.data)||"function"!=typeof r.subscribe||"function"!=typeof r.cancel||"function"!=typeof r.resolveData){t.next=29;break}return t.abrupt("return",{type:l.deferred,deferredData:a,statusCode:null==(c=a.init)?void 0:c.status,headers:(null==(f=a.init)?void 0:f.headers)&&new Headers(a.init.headers)});case 29:return t.abrupt("return",{type:l.data,data:a,statusCode:i});case 30:case"end":return t.stop()}var r}),r,null,[[2,19]])})))).apply(this,arguments)}function ge(e,t,r,n,a,o){var i=e.headers.get("Location");if(p(i,"Redirects returned/thrown from loaders/actions must have a Location header"),!re.test(i)){var u=n.slice(0,n.findIndex((function(e){return e.route.id===r}))+1);i=oe(new URL(t.url),u,a,!0,i,o),e.headers.set("Location",i)}return e}function we(e,t,r){if(re.test(e)){// Strip off the protocol+origin for same-origin + same-basename absolute redirects
var n=e,a=n.startsWith("//")?new URL(t.protocol+n):new URL(n),o=null!=U(a.pathname,r);if(a.origin===t.origin&&o)return a.pathname+a.search+a.hash}return e}// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function xe(e,t,r,n){var a=e.createURL(Me(t)).toString(),o={signal:r};if(n&&ze(n.formMethod)){var i=n.formMethod,u=n.formEncType;// Didn't think we needed this but it turns out unlike other methods, patch
// won't be properly normalized to uppercase and results in a 405 error.
// See: https://fetch.spec.whatwg.org/#concept-method
o.method=i.toUpperCase(),"application/json"===u?(o.headers=new Headers({"Content-Type":u}),o.body=JSON.stringify(n.json)):"text/plain"===u?// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
o.body=n.text:"application/x-www-form-urlencoded"===u&&n.formData?// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
o.body=ke(n.formData):// Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
o.body=n.formData}return new Request(a,o)}function ke(e){var t,r=new URLSearchParams,n=d(e.entries());try{for(n.s();!(t=n.n()).done;){var a=s(t.value,2),o=a[0],i=a[1];// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
r.append(o,"string"==typeof i?i:i.name)}}catch(u){n.e(u)}finally{n.f()}return r}function Ee(e){var t,r=new FormData,n=d(e.entries());try{for(n.s();!(t=n.n()).done;){var a=s(t.value,2),o=a[0],i=a[1];r.append(o,i)}}catch(u){n.e(u)}finally{n.f()}return r}function Se(e,t,r,n,i,u,s,c){// Process results from our revalidating fetchers
for(var l=function(e,t,r,n,o,i){// Fill in loaderData/errors from our loaders
var u,s={},c=null,l=!1,f={},d=n&&Ce(n[1])?n[1].error:void 0;// Process loader results into state.loaderData/state.errors
return r.forEach((function(r,n){var a=t[n].route.id;if(p(!Ue(r),"Cannot handle redirect results in processLoaderData"),Ce(r)){var i=r.error;// If we have a pending action error, we report it at the highest-route
// that throws a loader error, and then clear it out to indicate that
// it was consumed
void 0!==d&&(i=d,d=void 0),c=c||{};// Look upwards from the matched route for the closest ancestor error
// boundary, defaulting to the root match.  Prefer higher error values
// if lower errors bubble to the same boundary
var h=Re(e,a);null==c[h.route.id]&&(c[h.route.id]=i),// Clear our any prior loaderData for the throwing route
s[a]=void 0,// Once we find our first (highest) error, we set the status code and
// prevent deeper status codes from overriding
l||(l=!0,u=q(r.error)?r.error.status:500),r.headers&&(f[a]=r.headers)}else Oe(r)?(o.set(a,r.deferredData),s[a]=r.deferredData.data,// Error status codes always override success status codes, but if all
// loaders are successful we take the deepest status code.
null==r.statusCode||200===r.statusCode||l||(u=r.statusCode),r.headers&&(f[a]=r.headers)):(s[a]=r.data,// Error status codes always override success status codes, but if all
// loaders are successful we take the deepest status code.
r.statusCode&&200!==r.statusCode&&!l&&(u=r.statusCode),r.headers&&(f[a]=r.headers))})),// If we didn't consume the pending action error (i.e., all loaders
// resolved), then consume it here.  Also clear out any loaderData for the
// throwing route
void 0!==d&&n&&(c=a({},n[0],d),s[n[0]]=void 0),{loaderData:s,errors:c,statusCode:u||200,loaderHeaders:f}}(t,r,n,i,c),f=l.loaderData,d=l.errors,h=0;h<u.length;h++){var v=u[h],m=v.key,y=v.match,b=v.controller;p(void 0!==s&&void 0!==s[h],"Did not find corresponding fetcher result");var g=s[h];// Process fetcher non-redirect errors
if(!b||!b.signal.aborted)if(Ce(g)){var w=Re(e.matches,null==y?void 0:y.route.id);d&&d[w.route.id]||(d=o({},d,a({},w.route.id,g.error))),e.fetchers.delete(m)}else if(Ue(g))// Should never get here, redirects should get processed above, but we
// keep this to type narrow to a success result in the else
p(!1,"Unhandled fetcher revalidation redirect");else if(Oe(g))// Should never get here, deferred data should be awaited for fetchers
// in resolveDeferredResults
p(!1,"Unhandled fetcher deferred data");else{var x=Xe(g.data);e.fetchers.set(m,x)}}return{loaderData:f,errors:d}}function De(e,t,r,n){var a,i=o({},t),u=d(r);try{for(u.s();!(a=u.n()).done;){var s=a.value,c=s.route.id;if(t.hasOwnProperty(c)?void 0!==t[c]&&(i[c]=t[c]):void 0!==e[c]&&s.route.loader&&(// Preserve existing keys not included in newLoaderData and where a loader
// wasn't removed by HMR
i[c]=e[c]),n&&n.hasOwnProperty(c))// Don't keep any loader data below the boundary
break}}catch(l){u.e(l)}finally{u.f()}return i}function Le(e){return e?Ce(e[1])?{// Clear out prior actionData on errors
actionData:{}}:{actionData:a({},e[0],e[1].data)}:{}}// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function Re(e,t){return(t?e.slice(0,e.findIndex((function(e){return e.route.id===t}))+1):h(e)).reverse().find((function(e){return!0===e.route.hasErrorBoundary}))||e[0]}function Pe(e){// Prefer a root layout route if present, otherwise shim in a route object
var t=1===e.length?e[0]:e.find((function(e){return e.index||!e.path||"/"===e.path}))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ae(e,t){var r=void 0===t?{}:t,n=r.pathname,a=r.routeId,o=r.method,i=r.type,u="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(u="Bad Request",o&&n&&a?s="You made a "+o+' request to "'+n+'" but did not provide a `loader` for route "'+a+'", so there is no way to handle the request.':"defer-action"===i?s="defer() is not supported in actions":"invalid-body"===i&&(s="Unable to encode submission body")):403===e?(u="Forbidden",s='Route "'+a+'" does not match URL "'+n+'"'):404===e?(u="Not Found",s='No route matches URL "'+n+'"'):405===e&&(u="Method Not Allowed",o&&n&&a?s="You made a "+o.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+a+'", so there is no way to handle the request.':o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Y(e||500,u,new Error(s),!0)}// Find any returned redirect errors, starting from the lowest match
function je(e){for(var t=e.length-1;t>=0;t--){var r=e[t];if(Ue(r))return{result:r,idx:t}}}function Me(e){return b(o({},"string"==typeof e?g(e):e,{hash:""}))}function Te(e,t){return e.pathname===t.pathname&&e.search===t.search&&(""===e.hash?""!==t.hash:e.hash===t.hash||""!==t.hash)}function _e(e){return Ie(e.result)&&K.has(e.result.status)}function Oe(e){return e.type===l.deferred}function Ce(e){return e.type===l.error}function Ue(e){return(e&&e.type)===l.redirect}function Ie(t){return null!=t&&"number"==typeof t.status&&"string"==typeof t.statusText&&"object"===e(t.headers)&&void 0!==t.body}function ze(e){return J.has(e.toLowerCase())}function Fe(e,t,r,n,a,o){return Ne.apply(this,arguments)}function Ne(){return(Ne=n(t().mark((function e(r,n,a,o,i,u){var s,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t().mark((function e(s){var c,l,f,d,h;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(c=a[s],l=n[s]){e.next=4;break}return e.abrupt("return",1);case 4:if(f=r.find((function(e){return e.route.id===l.route.id})),d=null!=f&&!se(f,l)&&void 0!==(u&&u[l.route.id]),!Oe(c)||!i&&!d){e.next=11;break}// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
return p(h=o[s],"Expected an AbortSignal for revalidating fetcher deferred result"),e.next=11,Be(c,h,i).then((function(e){e&&(a[s]=e||a[s])}));case 11:case"end":return e.stop()}}),e)})),c=0;case 2:if(!(c<a.length)){e.next=9;break}return e.delegateYield(s(c),"t0",4);case 4:if(!e.t0){e.next=6;break}return e.abrupt("continue",6);case 6:c++,e.next=2;break;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(e,t,r){return $e.apply(this,arguments)}function $e(){return($e=n(t().mark((function e(r,n,a){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===a&&(a=!1),e.next=3,r.deferredData.resolveData(n);case 3:if(!e.sent){e.next=6;break}return e.abrupt("return");case 6:if(!a){e.next=14;break}return e.prev=7,e.abrupt("return",{type:l.data,data:r.deferredData.unwrappedData});case 11:return e.prev=11,e.t0=e.catch(7),e.abrupt("return",{type:l.error,error:e.t0});case 14:return e.abrupt("return",{type:l.data,data:r.deferredData.data});case 15:case"end":return e.stop()}}),e,null,[[7,11]])})))).apply(this,arguments)}function We(e){return new URLSearchParams(e).getAll("index").some((function(e){return""===e}))}function He(e,t){var r="string"==typeof t?g(t).search:t.search;if(e[e.length-1].route.index&&We(r||""))// Return the leaf index route when index is present
return e[e.length-1];// Otherwise grab the deepest "path contributing" match (ignoring index and
// pathless layout routes)
var n=z(e);return n[n.length-1]}function Ye(e){var t=e.formMethod,r=e.formAction,n=e.formEncType,a=e.text,o=e.formData,i=e.json;if(t&&r&&n)return null!=a?{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:a}:null!=o?{formMethod:t,formAction:r,formEncType:n,formData:o,json:void 0,text:void 0}:void 0!==i?{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:i,text:void 0}:void 0}function qe(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ge(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Je(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ve(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Xe(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}}}}))}();
