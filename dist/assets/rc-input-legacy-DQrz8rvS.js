System.register(["./classnames-legacy-QayJL2FV.js","./react-legacy-B2ecEqTO.js","./@babel-legacy-Hf2i0Sc8.js","./rc-util-legacy-Pri6j-ww.js"],(function(e,n){"use strict";var t,a,o,l,r,c,s,u,i,f,d,p;return{setters:[function(e){t=e.c},function(e){a=e.r,o=e.a},function(e){l=e.d,r=e.b,c=e.g,s=e.e,u=e.h,i=e.c,f=e.f},function(e){d=e.z,p=e.y}],execute:function(){// TODO: It's better to use `Proxy` replace the `element.value`. But we still need support IE11.
function n(e,n,t){// A bug report filed on WebKit's Bugzilla tracker, dating back to 2009, specifically addresses the issue of cloneNode() not copying files of <input type="file"> elements.
// As of the last update, this bug was still marked as "NEW," indicating that it might not have been resolved yet​​.
// https://bugs.webkit.org/show_bug.cgi?id=28123
var a=n.cloneNode(!0),o=Object.create(e,{target:{value:a},currentTarget:{value:a}});// click clear icon
// Fill data
return a.value=t,// Fill selection. Some type like `email` not support selection
// https://github.com/ant-design/ant-design/issues/47833
"number"==typeof n.selectionStart&&"number"==typeof n.selectionEnd&&(a.selectionStart=n.selectionStart,a.selectionEnd=n.selectionEnd),o}function v(e,t,a,o){if(a){var l=t;"click"!==t.type?// Trigger by composition event, this means we need force change the input value
// https://github.com/ant-design/ant-design/issues/45737
// https://github.com/ant-design/ant-design/issues/46598
"file"===e.type||void 0===o?a(l):a(l=n(t,e,o)):a(// Clone a new target for event.
// Avoid the following usage, the setQuery method gets the original value.
// const [query, setQuery] = React.useState('');
// <Input
//   allowClear
//   value={query}
//   onChange={(e)=> {
//     setQuery((prevStatus) => e.target.value);
//   }}
// />
l=n(t,e,""))}}e({r:v,u:x});var m=e("B",(function(e){var n,u,i=e.inputElement,f=e.children,d=e.prefixCls,p=e.prefix,v=e.suffix,m=e.addonBefore,g=e.addonAfter,x=e.className,y=e.style,h=e.disabled,w=e.readOnly,E=e.focused,C=e.triggerFocus,N=e.allowClear,b=e.value,S=e.handleReset,R=e.hidden,F=e.classes,j=e.classNames,B=e.dataAttrs,W=e.styles,k=e.components,z=null!=f?f:i,A=(null==k?void 0:k.affixWrapper)||"span",D=(null==k?void 0:k.groupWrapper)||"span",I=(null==k?void 0:k.wrapper)||"span",K=(null==k?void 0:k.groupAddon)||"span",L=a.useRef(null),P=function(e){return!!(e.prefix||e.suffix||e.allowClear)}(e),M=a.cloneElement(z,{value:b,className:t(z.props.className,!P&&(null==j?void 0:j.variant))||null});// ================== Prefix & Suffix ================== //
if(P){var O,T=null;// ================== Clear Icon ================== //
if(N){var V,H=!h&&!w&&b,q="".concat(d,"-clear-icon"),G="object"===l(N)&&null!=N&&N.clearIcon?N.clearIcon:"✖";T=o.createElement("span",{onClick:S,onMouseDown:function(e){return e.preventDefault()},className:t(q,(V={},r(V,"".concat(q,"-hidden"),!H),r(V,"".concat(q,"-has-suffix"),!!v),V)),role:"button",tabIndex:-1},G)}var J="".concat(d,"-affix-wrapper"),Q=t(J,(r(O={},"".concat(d,"-disabled"),h),r(O,"".concat(J,"-disabled"),h),r(O,"".concat(J,"-focused"),E),r(O,"".concat(J,"-readonly"),w),r(O,"".concat(J,"-input-with-clear-btn"),v&&N&&b),O),null==F?void 0:F.affixWrapper,null==j?void 0:j.affixWrapper,null==j?void 0:j.variant),U=(v||N)&&o.createElement("span",{className:t("".concat(d,"-suffix"),null==j?void 0:j.suffix),style:null==W?void 0:W.suffix},T,v);M=o.createElement(A,c({className:Q,style:null==W?void 0:W.affixWrapper,onClick:function(e){var n;null!==(n=L.current)&&void 0!==n&&n.contains(e.target)&&(null==C||C())}},null==B?void 0:B.affixWrapper,{ref:L}),p&&o.createElement("span",{className:t("".concat(d,"-prefix"),null==j?void 0:j.prefix),style:null==W?void 0:W.prefix},p),M,U)}// ================== Addon ================== //
if(function(e){return!(!e.addonBefore&&!e.addonAfter)}(e)){var X="".concat(d,"-group"),Y="".concat(X,"-addon"),Z="".concat(X,"-wrapper"),$=t("".concat(d,"-wrapper"),X,null==F?void 0:F.wrapper,null==j?void 0:j.wrapper),_=t(Z,r({},"".concat(Z,"-disabled"),h),null==F?void 0:F.group,null==j?void 0:j.groupWrapper);// Need another wrapper for changing display:table to display:inline-block
// and put style prop in wrapper
M=o.createElement(D,{className:_},o.createElement(I,{className:$},m&&o.createElement(K,{className:Y},m),M,g&&o.createElement(K,{className:Y},g)))}// `className` and `style` are always on the root element
return o.cloneElement(M,{className:t(null===(n=M.props)||void 0===n?void 0:n.className,x)||null,style:s(s({},null===(u=M.props)||void 0===u?void 0:u.style),y),hidden:R})})),g=["show"];function x(e,n){return a.useMemo((function(){var t={};n&&(t.show="object"===l(n)&&n.formatter?n.formatter:!!n);var a=t=s(s({},t),e),o=a.show,r=u(a,g);return s(s({},r),{},{show:!!o,showFormatter:"function"==typeof o?o:void 0,strategy:r.strategy||function(e){return e.length}})}),[e,n])}var y=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"];e("I",a.forwardRef((function(e,n){var l=e.autoComplete,g=e.onChange,h=e.onFocus,w=e.onBlur,E=e.onPressEnter,C=e.onKeyDown,N=e.prefixCls,b=void 0===N?"rc-input":N,S=e.disabled,R=e.htmlSize,F=e.className,j=e.maxLength,B=e.suffix,W=e.showCount,k=e.count,z=e.type,A=void 0===z?"text":z,D=e.classes,I=e.classNames,K=e.styles,L=e.onCompositionStart,P=e.onCompositionEnd,M=u(e,y),O=a.useState(!1),T=i(O,2),V=T[0],H=T[1],q=a.useRef(!1),G=a.useRef(null),J=function(e){G.current&&function(e,n){if(e){e.focus(n);// Selection content
var t=(n||{}).cursor;if(t){var a=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}(G.current,e)},Q=d(e.defaultValue,{value:e.value}),U=i(Q,2),X=U[0],Y=U[1],Z=null==X?"":String(X),$=a.useState(null),_=i($,2),ee=_[0],ne=_[1],te=x(k,W),ae=te.max||j,oe=te.strategy(Z),le=!!ae&&oe>ae;// ======================= Ref ========================
a.useImperativeHandle(n,(function(){return{focus:J,blur:function(){var e;null===(e=G.current)||void 0===e||e.blur()},setSelectionRange:function(e,n,t){var a;null===(a=G.current)||void 0===a||a.setSelectionRange(e,n,t)},select:function(){var e;null===(e=G.current)||void 0===e||e.select()},input:G.current}})),a.useEffect((function(){H((function(e){return(!e||!S)&&e}))}),[S]);var re=function(e,n,t){var a,o,l=n;if(!q.current&&te.exceedFormatter&&te.max&&te.strategy(n)>te.max)n!==(l=te.exceedFormatter(n,{max:te.max}))&&ne([(null===(a=G.current)||void 0===a?void 0:a.selectionStart)||0,(null===(o=G.current)||void 0===o?void 0:o.selectionEnd)||0]);else if("compositionEnd"===t.source)// Avoid triggering twice
// https://github.com/ant-design/ant-design/issues/46587
return;Y(l),G.current&&v(G.current,e,g,l)};a.useEffect((function(){var e;ee&&(null===(e=G.current)||void 0===e||e.setSelectionRange.apply(e,f(ee)))}),[ee]);var ce,se=function(e){re(e,e.target.value,{source:"change"})},ue=function(e){q.current=!1,re(e,e.currentTarget.value,{source:"compositionEnd"}),null==P||P(e)},ie=function(e){E&&"Enter"===e.key&&E(e),null==C||C(e)},fe=function(e){H(!0),null==h||h(e)},de=function(e){H(!1),null==w||w(e)},pe=le&&"".concat(b,"-out-of-range");// ====================== Render ======================

return o.createElement(m,c({},M,{prefixCls:b,className:t(F,pe),handleReset:function(e){Y(""),J(),G.current&&v(G.current,e,g)},value:Z,focused:V,triggerFocus:J,suffix:function(){// Max length value
var e=Number(ae)>0;if(B||te.show){var n=te.showFormatter?te.showFormatter({value:Z,count:oe,maxLength:ae}):"".concat(oe).concat(e?" / ".concat(ae):"");return o.createElement(o.Fragment,null,te.show&&o.createElement("span",{className:t("".concat(b,"-show-count-suffix"),r({},"".concat(b,"-show-count-has-suffix"),!!B),null==I?void 0:I.count),style:s({},null==K?void 0:K.count)},n),B)}return null}(),disabled:S,classes:D,classNames:I,styles:K}),(ce=p(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear",// Input elements must be either controlled or uncontrolled,
// specify either the value prop, or the defaultValue prop, but not both.
"defaultValue","showCount","count","classes","htmlSize","styles","classNames"]),o.createElement("input",c({autoComplete:l},ce,{onChange:se,onFocus:fe,onBlur:de,onKeyDown:ie,className:t(b,r({},"".concat(b,"-disabled"),S),null==I?void 0:I.input),style:null==K?void 0:K.input,ref:G,size:R,type:A,onCompositionStart:function(e){q.current=!0,null==L||L(e)},onCompositionEnd:ue}))))})))}}}));
