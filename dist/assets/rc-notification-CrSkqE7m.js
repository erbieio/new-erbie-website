import{c as H,d as ve,g as J,b as ae,h as de,e as F,f as O}from"./@babel-DVGmkmWW.js";import{r as a,a as W}from"./react-Dbae-1t-.js";import{r as Re}from"./react-dom-RqR84h2O.js";import{c as z}from"./classnames-CwUkGHy7.js";import{a as Ae}from"./rc-motion-CHgVpSnu.js";import{B as pe,K as Le}from"./rc-util-EzFa6Sk3.js";var be=a.forwardRef(function(e,r){var d=e.prefixCls,i=e.style,u=e.className,C=e.duration,h=C===void 0?4.5:C,R=e.eventKey,p=e.content,N=e.closable,_=e.closeIcon,L=_===void 0?"x":_,f=e.props,m=e.onClick,b=e.onNoticeClose,A=e.times,v=e.hovering,w=a.useState(!1),M=H(w,2),S=M[0],g=M[1],x=v||S,c=function(){b(R)},k=function(l){(l.key==="Enter"||l.code==="Enter"||l.keyCode===Le.ENTER)&&c()};a.useEffect(function(){if(!x&&h>0){var o=setTimeout(function(){c()},h*1e3);return function(){clearTimeout(o)}}},[h,x,A]);var n=a.useMemo(function(){return ve(N)==="object"&&N!==null?N:N?{closeIcon:L}:{}},[N,L]),t=pe(n,!0),s="".concat(d,"-notice");return a.createElement("div",J({},f,{ref:r,className:z(s,u,ae({},"".concat(s,"-closable"),N)),style:i,onMouseEnter:function(l){var y;g(!0),f==null||(y=f.onMouseEnter)===null||y===void 0||y.call(f,l)},onMouseLeave:function(l){var y;g(!1),f==null||(y=f.onMouseLeave)===null||y===void 0||y.call(f,l)},onClick:m}),a.createElement("div",{className:"".concat(s,"-content")},p),N&&a.createElement("a",J({tabIndex:0,className:"".concat(s,"-close"),onKeyDown:k,"aria-label":"Close"},t,{onClick:function(l){l.preventDefault(),l.stopPropagation(),c()}}),n.closeIcon))}),me=W.createContext({}),Ge=function(r){var d=r.children,i=r.classNames;return W.createElement(me.Provider,{value:{classNames:i}},d)},ce=8,le=3,ue=16,Me=function(r){var d={offset:ce,threshold:le,gap:ue};if(r&&ve(r)==="object"){var i,u,C;d.offset=(i=r.offset)!==null&&i!==void 0?i:ce,d.threshold=(u=r.threshold)!==null&&u!==void 0?u:le,d.gap=(C=r.gap)!==null&&C!==void 0?C:ue}return[!!r,d]},Pe=["className","style","classNames","styles"],_e=function(r){var d=r.configList,i=r.placement,u=r.prefixCls,C=r.className,h=r.style,R=r.motion,p=r.onAllNoticeRemoved,N=r.onNoticeClose,_=r.stack,L=a.useContext(me),f=L.classNames,m=a.useRef({}),b=a.useState(null),A=H(b,2),v=A[0],w=A[1],M=a.useState([]),S=H(M,2),g=S[0],x=S[1],c=d.map(function(E){return{config:E,key:String(E.key)}}),k=Me(_),n=H(k,2),t=n[0],s=n[1],o=s.offset,l=s.threshold,y=s.gap,I=t&&(g.length>0||c.length<=l),V=typeof R=="function"?R(i):R;return a.useEffect(function(){t&&g.length>1&&x(function(E){return E.filter(function(T){return c.some(function(G){var X=G.key;return T===X})})})},[g,c,t]),a.useEffect(function(){var E;if(t&&m.current[(E=c[c.length-1])===null||E===void 0?void 0:E.key]){var T;w(m.current[(T=c[c.length-1])===null||T===void 0?void 0:T.key])}},[c,t]),W.createElement(Ae,J({key:i,className:z(u,"".concat(u,"-").concat(i),f==null?void 0:f.list,C,ae(ae({},"".concat(u,"-stack"),!!t),"".concat(u,"-stack-expanded"),I)),style:h,keys:c,motionAppear:!0},V,{onAllRemoved:function(){p(i)}}),function(E,T){var G=E.config,X=E.className,ye=E.style,Ce=E.index,re=G,Y=re.key,Ne=re.times,P=String(Y),K=G,ge=K.className,he=K.style,U=K.classNames,Q=K.styles,ke=de(K,Pe),Z=c.findIndex(function(B){return B.key===P}),q={};if(t){var j=c.length-1-(Z>-1?Z:Ce-1),ie=i==="top"||i==="bottom"?"-50%":"0";if(j>0){var $,ee,te;q.height=I?($=m.current[P])===null||$===void 0?void 0:$.offsetHeight:v==null?void 0:v.offsetHeight;for(var se=0,ne=0;ne<j;ne++){var oe;se+=((oe=m.current[c[c.length-1-ne].key])===null||oe===void 0?void 0:oe.offsetHeight)+y}var Ee=(I?se:j*o)*(i.startsWith("top")?1:-1),Se=!I&&v!==null&&v!==void 0&&v.offsetWidth&&(ee=m.current[P])!==null&&ee!==void 0&&ee.offsetWidth?((v==null?void 0:v.offsetWidth)-o*2*(j<3?j:3))/((te=m.current[P])===null||te===void 0?void 0:te.offsetWidth):1;q.transform="translate3d(".concat(ie,", ").concat(Ee,"px, 0) scaleX(").concat(Se,")")}else q.transform="translate3d(".concat(ie,", 0, 0)")}return W.createElement("div",{ref:T,className:z("".concat(u,"-notice-wrapper"),X,U==null?void 0:U.wrapper),style:F(F(F({},ye),q),Q==null?void 0:Q.wrapper),onMouseEnter:function(){return x(function(D){return D.includes(P)?D:[].concat(O(D),[P])})},onMouseLeave:function(){return x(function(D){return D.filter(function(xe){return xe!==P})})}},W.createElement(be,J({},ke,{ref:function(D){Z>-1?m.current[P]=D:delete m.current[P]},prefixCls:u,classNames:U,styles:Q,className:z(ge,f==null?void 0:f.notice),style:he,times:Ne,key:Y,eventKey:Y,onNoticeClose:N,hovering:t&&g.length>0})))})},Ie=a.forwardRef(function(e,r){var d=e.prefixCls,i=d===void 0?"rc-notification":d,u=e.container,C=e.motion,h=e.maxCount,R=e.className,p=e.style,N=e.onAllRemoved,_=e.stack,L=e.renderNotifications,f=a.useState([]),m=H(f,2),b=m[0],A=m[1],v=function(t){var s,o=b.find(function(l){return l.key===t});o==null||(s=o.onClose)===null||s===void 0||s.call(o),A(function(l){return l.filter(function(y){return y.key!==t})})};a.useImperativeHandle(r,function(){return{open:function(t){A(function(s){var o=O(s),l=o.findIndex(function(V){return V.key===t.key}),y=F({},t);if(l>=0){var I;y.times=(((I=s[l])===null||I===void 0?void 0:I.times)||0)+1,o[l]=y}else y.times=0,o.push(y);return h>0&&o.length>h&&(o=o.slice(-h)),o})},close:function(t){v(t)},destroy:function(){A([])}}});var w=a.useState({}),M=H(w,2),S=M[0],g=M[1];a.useEffect(function(){var n={};b.forEach(function(t){var s=t.placement,o=s===void 0?"topRight":s;o&&(n[o]=n[o]||[],n[o].push(t))}),Object.keys(S).forEach(function(t){n[t]=n[t]||[]}),g(n)},[b]);var x=function(t){g(function(s){var o=F({},s),l=o[t]||[];return l.length||delete o[t],o})},c=a.useRef(!1);if(a.useEffect(function(){Object.keys(S).length>0?c.current=!0:c.current&&(N==null||N(),c.current=!1)},[S]),!u)return null;var k=Object.keys(S);return Re.createPortal(a.createElement(a.Fragment,null,k.map(function(n){var t=S[n],s=a.createElement(_e,{key:n,configList:t,placement:n,prefixCls:i,className:R==null?void 0:R(n),style:p==null?void 0:p(n),motion:C,onNoticeClose:v,onAllNoticeRemoved:x,stack:_});return L?L(s,{prefixCls:i,key:n}):s})),u)}),He=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],we=function(){return document.body},fe=0;function Te(){for(var e={},r=arguments.length,d=new Array(r),i=0;i<r;i++)d[i]=arguments[i];return d.forEach(function(u){u&&Object.keys(u).forEach(function(C){var h=u[C];h!==void 0&&(e[C]=h)})}),e}function Ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.getContainer,d=r===void 0?we:r,i=e.motion,u=e.prefixCls,C=e.maxCount,h=e.className,R=e.style,p=e.onAllRemoved,N=e.stack,_=e.renderNotifications,L=de(e,He),f=a.useState(),m=H(f,2),b=m[0],A=m[1],v=a.useRef(),w=a.createElement(Ie,{container:b,ref:v,prefixCls:u,motion:i,maxCount:C,className:h,style:R,onAllRemoved:p,stack:N,renderNotifications:_}),M=a.useState([]),S=H(M,2),g=S[0],x=S[1],c=a.useMemo(function(){return{open:function(n){var t=Te(L,n);(t.key===null||t.key===void 0)&&(t.key="rc-notification-".concat(fe),fe+=1),x(function(s){return[].concat(O(s),[{type:"open",config:t}])})},close:function(n){x(function(t){return[].concat(O(t),[{type:"close",key:n}])})},destroy:function(){x(function(n){return[].concat(O(n),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){A(d())}),a.useEffect(function(){v.current&&g.length&&(g.forEach(function(k){switch(k.type){case"open":v.current.open(k.config);break;case"close":v.current.close(k.key);break;case"destroy":v.current.destroy();break}}),x(function(k){return k.filter(function(n){return!g.includes(n)})}))},[g]),[c,w]}export{be as N,Ge as a,Ue as u};
