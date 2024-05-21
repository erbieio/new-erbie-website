import{h as A,g as N,e as b,c as R}from"./@babel-DVGmkmWW.js";import{r as a,a as He}from"./react-Dbae-1t-.js";import{c as fe}from"./classnames-CwUkGHy7.js";import{R as ge}from"./rc-resize-observer-APHP0lmT.js";import{q as Ye,i as Je,u as Qe}from"./rc-util-EzFa6Sk3.js";import{r as Ze}from"./react-dom-RqR84h2O.js";var et=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],x=void 0;function tt(e,s){var o=e.prefixCls,f=e.invalidate,l=e.item,n=e.renderItem,u=e.responsive,S=e.responsiveDisabled,c=e.registerSize,g=e.itemKey,p=e.className,B=e.style,H=e.children,Y=e.display,v=e.order,O=e.component,z=O===void 0?"div":O,P=A(e,et),m=u&&!Y;function $(E){c(g,E)}a.useEffect(function(){return function(){$(null)}},[]);var J=n&&l!==x?n(l):H,w;f||(w={opacity:m?0:1,height:m?0:x,overflowY:m?"hidden":x,order:u?v:x,pointerEvents:m?"none":x,position:m?"absolute":x});var k={};m&&(k["aria-hidden"]=!0);var h=a.createElement(z,N({className:fe(!f&&o,p),style:b(b({},w),B)},k,P,{ref:s}),J);return u&&(h=a.createElement(ge,{onResize:function(Q){var V=Q.offsetWidth;$(V)},disabled:S},h)),h}var K=a.forwardRef(tt);K.displayName="Item";function rt(e){if(typeof MessageChannel>"u")Ye(e);else{var s=new MessageChannel;s.port1.onmessage=function(){return e()},s.port2.postMessage(void 0)}}function at(){var e=a.useRef(null),s=function(f){e.current||(e.current=[],rt(function(){Ze.unstable_batchedUpdates(function(){e.current.forEach(function(l){l()}),e.current=null})})),e.current.push(f)};return s}function M(e,s){var o=a.useState(s),f=R(o,2),l=f[0],n=f[1],u=Je(function(S){e(function(){n(S)})});return[l,u]}var X=He.createContext(null),nt=["component"],it=["className"],st=["className"],ft=function(s,o){var f=a.useContext(X);if(!f){var l=s.component,n=l===void 0?"div":l,u=A(s,nt);return a.createElement(n,N({},u,{ref:o}))}var S=f.className,c=A(f,it),g=s.className,p=A(s,st);return a.createElement(X.Provider,{value:null},a.createElement(K,N({ref:o,className:fe(S,g)},c,p)))},pe=a.forwardRef(ft);pe.displayName="RawItem";var lt=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],we="responsive",Ie="invalidate";function ot(e){return"+ ".concat(e.length," ...")}function ut(e,s){var o=e.prefixCls,f=o===void 0?"rc-overflow":o,l=e.data,n=l===void 0?[]:l,u=e.renderItem,S=e.renderRawItem,c=e.itemKey,g=e.itemWidth,p=g===void 0?10:g,B=e.ssr,H=e.style,Y=e.className,v=e.maxCount,O=e.renderRest,z=e.renderRawRest,P=e.suffix,m=e.component,$=m===void 0?"div":m,J=e.itemComponent,w=e.onVisibleChange,k=A(e,lt),h=B==="full",E=at(),Q=M(E,null),V=R(Q,2),U=V[0],xe=V[1],_=U||0,be=M(E,new Map),le=R(be,2),oe=le[0],ze=le[1],Pe=M(E,0),ue=R(Pe,2),De=ue[0],We=ue[1],Me=M(E,0),de=R(Me,2),F=de[0],Ae=de[1],Ke=M(E,0),ce=R(Ke,2),T=ce[0],Oe=ce[1],$e=a.useState(null),ve=R($e,2),Z=ve[0],me=ve[1],ke=a.useState(null),ye=R(ke,2),L=ye[0],Ve=ye[1],I=a.useMemo(function(){return L===null&&h?Number.MAX_SAFE_INTEGER:L||0},[L,U]),Ue=a.useState(!1),Re=R(Ue,2),Fe=Re[0],Te=Re[1],ee="".concat(f,"-item"),Se=Math.max(De,F),te=v===we,y=n.length&&te,Ee=v===Ie,Le=y||typeof v=="number"&&n.length>v,C=a.useMemo(function(){var t=n;return y?U===null&&h?t=n:t=n.slice(0,Math.min(n.length,_/p)):typeof v=="number"&&(t=n.slice(0,v)),t},[n,p,U,v,y]),re=a.useMemo(function(){return y?n.slice(I+1):n.slice(C.length)},[n,C,y,I]),j=a.useCallback(function(t,r){var i;return typeof c=="function"?c(t):(i=c&&(t==null?void 0:t[c]))!==null&&i!==void 0?i:r},[c]),je=a.useCallback(u||function(t){return t},[u]);function G(t,r,i){L===t&&(r===void 0||r===Z)||(Ve(t),i||(Te(t<n.length-1),w==null||w(t)),r!==void 0&&me(r))}function Ge(t,r){xe(r.clientWidth)}function he(t,r){ze(function(i){var d=new Map(i);return r===null?d.delete(t):d.set(t,r),d})}function Xe(t,r){Ae(r),We(F)}function qe(t,r){Oe(r)}function ae(t){return oe.get(j(C[t],t))}Qe(function(){if(_&&typeof Se=="number"&&C){var t=T,r=C.length,i=r-1;if(!r){G(0,null);return}for(var d=0;d<r;d+=1){var W=ae(d);if(h&&(W=W||0),W===void 0){G(d-1,void 0,!0);break}if(t+=W,i===0&&t<=_||d===i-1&&t+ae(i)<=_){G(i,null);break}else if(t+Se>_){G(d-1,t-W-T+F);break}}P&&ae(0)+T>_&&me(null)}},[_,oe,F,T,j,C]);var _e=Fe&&!!re.length,Ce={};Z!==null&&y&&(Ce={position:"absolute",left:Z,top:0});var D={prefixCls:ee,responsive:y,component:J,invalidate:Ee},Be=S?function(t,r){var i=j(t,r);return a.createElement(X.Provider,{key:i,value:b(b({},D),{},{order:r,item:t,itemKey:i,registerSize:he,display:r<=I})},S(t,r))}:function(t,r){var i=j(t,r);return a.createElement(K,N({},D,{order:r,key:i,item:t,renderItem:je,itemKey:i,registerSize:he,display:r<=I}))},ne,Ne={order:_e?I:Number.MAX_SAFE_INTEGER,className:"".concat(ee,"-rest"),registerSize:Xe,display:_e};if(z)z&&(ne=a.createElement(X.Provider,{value:b(b({},D),Ne)},z(re)));else{var ie=O||ot;ne=a.createElement(K,N({},D,Ne),typeof ie=="function"?ie(re):ie)}var se=a.createElement($,N({className:fe(!Ee&&f,Y),style:H,ref:s},k),C.map(Be),Le?ne:null,P&&a.createElement(K,N({},D,{responsive:te,responsiveDisabled:!y,order:I,className:"".concat(ee,"-suffix"),registerSize:qe,display:!0,style:Ce}),P));return te&&(se=a.createElement(ge,{onResize:Ge,disabled:!y},se)),se}var q=a.forwardRef(ut);q.displayName="Overflow";q.Item=pe;q.RESPONSIVE=we;q.INVALIDATE=Ie;export{q as F};
