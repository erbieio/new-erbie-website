import{r}from"./react-CBAF3Uyv.js";import{i as p,g as _,r as A,j as B,m as T,A as w,p as J,s as z,a as W}from"./@remix-run-CSnr7utK.js";/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},b.apply(this,arguments)}const N=r.createContext(null),$=r.createContext(null),R=r.createContext(null),U=r.createContext(null),E=r.createContext({outlet:null,matches:[],isDataRoute:!1}),k=r.createContext(null);function P(){return r.useContext(U)!=null}function L(){return P()||p(!1),r.useContext(U).location}function j(e){r.useContext(R).static||r.useLayoutEffect(e)}function oe(){let{isDataRoute:e}=r.useContext(E);return e?te():q()}function q(){P()||p(!1);let e=r.useContext(N),{basename:t,future:n,navigator:l}=r.useContext(R),{matches:i}=r.useContext(E),{pathname:u}=L(),o=JSON.stringify(_(i,n.v7_relativeSplatPath)),f=r.useRef(!1);return j(()=>{f.current=!0}),r.useCallback(function(m,s){if(s===void 0&&(s={}),!f.current)return;if(typeof m=="number"){l.go(m);return}let a=A(m,JSON.parse(o),u,s.relative==="path");e==null&&t!=="/"&&(a.pathname=a.pathname==="/"?t:B([t,a.pathname])),(s.replace?l.replace:l.push)(a,s.state,s)},[t,l,o,u,e])}const G=r.createContext(null);function le(e){let t=r.useContext(E).outlet;return t&&r.createElement(G.Provider,{value:e},t)}function ie(e,t,n,l){P()||p(!1);let{navigator:i}=r.useContext(R),{matches:u}=r.useContext(E),o=u[u.length-1],f=o?o.params:{};o&&o.pathname;let d=o?o.pathnameBase:"/";o&&o.route;let m=L(),s;s=m;let a=s.pathname||"/",v=a;if(d!=="/"){let c=d.replace(/^\//,"").split("/");v="/"+a.replace(/^\//,"").split("/").slice(c.length).join("/")}let h=T(e,{pathname:v});return Y(h&&h.map(c=>Object.assign({},c,{params:Object.assign({},f,c.params),pathname:B([d,i.encodeLocation?i.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?d:B([d,i.encodeLocation?i.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),u,n,l)}function K(){let e=ee(),t=W(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,null)}const Q=r.createElement(K,null);class V extends r.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){}render(){return this.state.error!==void 0?r.createElement(E.Provider,{value:this.props.routeContext},r.createElement(k.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X(e){let{routeContext:t,match:n,children:l}=e,i=r.useContext(N);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(E.Provider,{value:t},l)}function Y(e,t,n,l){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var u;if((u=n)!=null&&u.errors)e=n.matches;else return null}let o=e,f=(i=n)==null?void 0:i.errors;if(f!=null){let s=o.findIndex(a=>a.route.id&&(f==null?void 0:f[a.route.id])!==void 0);s>=0||p(!1),o=o.slice(0,Math.min(o.length,s+1))}let d=!1,m=-1;if(n&&l&&l.v7_partialHydration)for(let s=0;s<o.length;s++){let a=o[s];if((a.route.HydrateFallback||a.route.hydrateFallbackElement)&&(m=s),a.route.id){let{loaderData:v,errors:h}=n,g=a.route.loader&&v[a.route.id]===void 0&&(!h||h[a.route.id]===void 0);if(a.route.lazy||g){d=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((s,a,v)=>{let h,g=!1,c=null,C=null;n&&(h=f&&a.route.id?f[a.route.id]:void 0,c=a.route.errorElement||Q,d&&(m<0&&v===0?(re("route-fallback"),g=!0,C=null):m===v&&(g=!0,C=a.route.hydrateFallbackElement||null)));let I=t.concat(o.slice(0,v+1)),O=()=>{let x;return h?x=c:g?x=C:a.route.Component?x=r.createElement(a.route.Component,null):a.route.element?x=a.route.element:x=s,r.createElement(X,{match:a,routeContext:{outlet:s,matches:I,isDataRoute:n!=null},children:x})};return n&&(a.route.ErrorBoundary||a.route.errorElement||v===0)?r.createElement(V,{location:n.location,revalidation:n.revalidation,component:c,error:h,children:O(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):O()},null)}var M=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(M||{}),y=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(y||{});function Z(e){let t=r.useContext(N);return t||p(!1),t}function S(e){let t=r.useContext($);return t||p(!1),t}function H(e){let t=r.useContext(E);return t||p(!1),t}function D(e){let t=H(),n=t.matches[t.matches.length-1];return n.route.id||p(!1),n.route.id}function ee(){var e;let t=r.useContext(k),n=S(y.UseRouteError),l=D(y.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[l]}function te(){let{router:e}=Z(M.UseNavigateStable),t=D(y.UseNavigateStable),n=r.useRef(!1);return j(()=>{n.current=!0}),r.useCallback(function(i,u){u===void 0&&(u={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,b({fromRouteId:t},u)))},[e,t])}const F={};function re(e,t,n){F[e]||(F[e]=!0)}function se(e){let{basename:t="/",children:n=null,location:l,navigationType:i=w.Pop,navigator:u,static:o=!1,future:f}=e;P()&&p(!1);let d=t.replace(/^\/*/,"/"),m=r.useMemo(()=>({basename:d,navigator:u,static:o,future:b({v7_relativeSplatPath:!1},f)}),[d,f,u,o]);typeof l=="string"&&(l=J(l));let{pathname:s="/",search:a="",hash:v="",state:h=null,key:g="default"}=l,c=r.useMemo(()=>{let C=z(s,d);return C==null?null:{location:{pathname:C,search:a,hash:v,state:h,key:g},navigationType:i}},[d,s,a,v,h,g,i]);return c==null?null:r.createElement(R.Provider,{value:m},r.createElement(U.Provider,{children:n,value:c}))}new Promise(()=>{});function ue(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{N as D,se as R,$ as a,oe as b,L as c,le as d,ue as m,ie as u};
