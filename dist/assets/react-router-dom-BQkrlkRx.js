import{r as n,R as k}from"./react-Dbae-1t-.js";import{a as z}from"./react-dom-RqR84h2O.js";import{m as A,D as N,a as B,R as H,u as Y}from"./react-router-xprjhg_w.js";import{c as q,b as G,E as J}from"./@remix-run-CSnr7utK.js";/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},E.apply(this,arguments)}const K="6";try{window.__reactRouterVersion=K}catch(t){}function ue(t,i){return q({basename:void 0,future:E({},void 0,{v7_prependBasename:!0}),history:G({window:void 0}),hydrationData:Q(),routes:t,mapRouteProperties:A,unstable_dataStrategy:void 0,window:void 0}).initialize()}function Q(){var t;let i=(t=window)==null?void 0:t.__staticRouterHydrationData;return i&&i.errors&&(i=E({},i,{errors:W(i.errors)})),i}function W(t){if(!t)return null;let i=Object.entries(t),e={};for(let[s,r]of i)if(r&&r.__type==="RouteErrorResponse")e[s]=new J(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let u=window[r.__subType];if(typeof u=="function")try{let l=new u(r.message);l.stack="",e[s]=l}catch(l){}}if(e[s]==null){let u=new Error(r.message);u.stack="",e[s]=u}}else e[s]=r;return e}const X=n.createContext({isTransitioning:!1}),Z=n.createContext(new Map),$="startTransition",O=k[$],ee="flushSync",I=z[ee];function te(t){O?O(t):t()}function S(t){I?I(t):t()}class ne{constructor(){this.status="pending",this.promise=new Promise((i,e)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",i(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",e(s))}})}}function le(t){let{fallbackElement:i,router:e,future:s}=t,[r,u]=n.useState(e.state),[l,T]=n.useState(),[p,h]=n.useState({isTransitioning:!1}),[o,_]=n.useState(),[m,y]=n.useState(),[w,L]=n.useState(),R=n.useRef(new Map),{v7_startTransition:C}=s||{},g=n.useCallback(a=>{C?te(a):a()},[C]),P=n.useCallback((a,f)=>{let{deletedFetchers:c,unstable_flushSync:F,unstable_viewTransitionOpts:d}=f;c.forEach(v=>R.current.delete(v)),a.fetchers.forEach((v,M)=>{v.data!==void 0&&R.current.set(M,v.data)});let j=e.window==null||typeof e.window.document.startViewTransition!="function";if(!d||j){F?S(()=>u(a)):g(()=>u(a));return}if(F){S(()=>{m&&(o&&o.resolve(),m.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:d.currentLocation,nextLocation:d.nextLocation})});let v=e.window.document.startViewTransition(()=>{S(()=>u(a))});v.finished.finally(()=>{S(()=>{_(void 0),y(void 0),T(void 0),h({isTransitioning:!1})})}),S(()=>y(v));return}m?(o&&o.resolve(),m.skipTransition(),L({state:a,currentLocation:d.currentLocation,nextLocation:d.nextLocation})):(T(a),h({isTransitioning:!0,flushSync:!1,currentLocation:d.currentLocation,nextLocation:d.nextLocation}))},[e.window,m,o,R,g]);n.useLayoutEffect(()=>e.subscribe(P),[e,P]),n.useEffect(()=>{p.isTransitioning&&!p.flushSync&&_(new ne)},[p]),n.useEffect(()=>{if(o&&l&&e.window){let a=l,f=o.promise,c=e.window.document.startViewTransition(async()=>{g(()=>u(a)),await f});c.finished.finally(()=>{_(void 0),y(void 0),T(void 0),h({isTransitioning:!1})}),y(c)}},[g,l,o,e.window]),n.useEffect(()=>{o&&l&&r.location.key===l.location.key&&o.resolve()},[o,m,r.location,l]),n.useEffect(()=>{!p.isTransitioning&&w&&(T(w.state),h({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),L(void 0))},[p.isTransitioning,w]),n.useEffect(()=>{},[]);let b=n.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:a=>e.navigate(a),push:(a,f,c)=>e.navigate(a,{state:f,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(a,f,c)=>e.navigate(a,{replace:!0,state:f,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[e]),x=e.basename||"/",D=n.useMemo(()=>({router:e,navigator:b,static:!1,basename:x}),[e,b,x]);return n.createElement(n.Fragment,null,n.createElement(N.Provider,{value:D},n.createElement(B.Provider,{value:r},n.createElement(Z.Provider,{value:R.current},n.createElement(X.Provider,{value:p},n.createElement(H,{basename:x,location:r.location,navigationType:r.historyAction,navigator:b,future:{v7_relativeSplatPath:e.future.v7_relativeSplatPath}},r.initialized||e.future.v7_partialHydration?n.createElement(re,{routes:e.routes,future:e.future,state:r}):i))))),null)}function re(t){let{routes:i,future:e,state:s}=t;return Y(i,void 0,s,e)}var U;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(U||(U={}));var V;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(V||(V={}));export{le as R,ue as c};
