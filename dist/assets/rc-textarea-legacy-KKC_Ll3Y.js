System.register(["./@babel-legacy-Hf2i0Sc8.js","./classnames-legacy-D4BrmxoT.js","./rc-input-legacy-CnxSYX8q.js","./rc-util-legacy-DbiAop8j.js","./react-legacy-DxSpAB0g.js","./rc-resize-observer-legacy-udwJkKBu.js"],(function(e,t){"use strict";var n,a,r,o,i,l,u,s,c,d,f,g,m,p,v,h,b;return{setters:[function(e){n=e.h,a=e.c,r=e.d,o=e.e,i=e.g,l=e.b,u=e.f},function(e){s=e.c},function(e){c=e.u,d=e.B,f=e.r},function(e){g=e.B,m=e.u,p=e.o},function(e){v=e.r,h=e.a},function(e){b=e.R}],execute:function(){// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
       * calculateNodeHeight(uiTextNode, useCache = false)
       */
var t,x=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],y={};function w(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t||((t=document.createElement("textarea")).setAttribute("tab-index","-1"),t.setAttribute("aria-hidden","true"),document.body.appendChild(t)),// Fix wrap="off" issue
// https://github.com/ant-design/ant-design/issues/6577
e.getAttribute("wrap")?t.setAttribute("wrap",e.getAttribute("wrap")):t.removeAttribute("wrap");// Copy all CSS properties that have an impact on the height of the content in
// the textbox
var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&y[n])return y[n];var a=window.getComputedStyle(e),r=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),o=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),i=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),l={sizingStyle:x.map((function(e){return"".concat(e,":").concat(a.getPropertyValue(e))})).join(";"),paddingSize:o,borderSize:i,boxSizing:r};return t&&n&&(y[n]=l),l}(e,n),i=o.paddingSize,l=o.borderSize,u=o.boxSizing,s=o.sizingStyle;// Need to have the overflow attribute to hide the scrollbar otherwise
// text-lines will not calculated properly as the shadow will technically be
// narrower for content
t.setAttribute("style","".concat(s,";").concat("\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n")),t.value=e.value||e.placeholder||"";var c,d=void 0,f=void 0,g=t.scrollHeight;if("border-box"===u?// border-box: add border, since height = content + padding + border
g+=l:"content-box"===u&&(// remove padding, since height = content
g-=i),null!==a||null!==r){// measure height of a textarea with a single row
t.value=" ";var m=t.scrollHeight-i;null!==a&&(d=m*a,"border-box"===u&&(d=d+i+l),g=Math.max(d,g)),null!==r&&(f=m*r,"border-box"===u&&(f=f+i+l),c=g>f?"":"hidden",g=Math.min(f,g))}var p={height:g,overflowY:c,resize:"none"};return d&&(p.minHeight=d),f&&(p.maxHeight=f),p}var z=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],S=v.forwardRef((function(e,t){var u=e,c=u.prefixCls;u.onPressEnter;var d=u.defaultValue,f=u.value,h=u.autoSize,x=u.onResize,y=u.className,S=u.style,C=u.disabled,E=u.onChange;u.onInternalAutoSize;var R=n(u,z),A=g(d,{value:f,postState:function(e){return null!=e?e:""}}),V=a(A,2),F=V[0],N=V[1],P=v.useRef();v.useImperativeHandle(t,(function(){return{textArea:P.current}}));var j=v.useMemo((function(){return h&&"object"===r(h)?[h.minRows,h.maxRows]:[]}),[h]),H=a(j,2),T=H[0],B=H[1],I=!!h,L=v.useState(2),k=a(L,2),D=k[0],M=k[1],W=v.useState(),K=a(W,2),Y=K[0],X=K[1],q=function(){M(0)};m((function(){I&&q()}),[f,T,B,I]),m((function(){if(0===D)M(1);else if(1===D){var e=w(P.current,!1,T,B);M(2),X(e)}else!function(){try{if(document.activeElement===P.current){var e=P.current,t=e.selectionStart,n=e.selectionEnd,a=e.scrollTop;P.current.setSelectionRange(t,n),P.current.scrollTop=a}}catch(r){}}()}),[D]);var G=v.useRef(),J=function(){p.cancel(G.current)};v.useEffect((function(){return J}),[]);var O=I?Y:null,Q=o(o({},S),O);return 0!==D&&1!==D||(Q.overflowY="hidden",Q.overflowX="hidden"),v.createElement(b,{onResize:function(e){2===D&&(null==x||x(e),h&&(J(),G.current=p((function(){q()}))))},disabled:!(h||x)},v.createElement("textarea",i({},R,{ref:P,style:Q,className:s(c,y,l({},"".concat(c,"-disabled"),C)),disabled:C,value:F,onChange:function(e){N(e.target.value),null==E||E(e)}})))})),C=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"];e("T",h.forwardRef((function(e,t){var r,m,p=e.defaultValue,b=e.value,x=e.onFocus,y=e.onBlur,w=e.onChange,z=e.allowClear,E=e.maxLength,R=e.onCompositionStart,A=e.onCompositionEnd,V=e.suffix,F=e.prefixCls,N=void 0===F?"rc-textarea":F,P=e.showCount,j=e.count,H=e.className,T=e.style,B=e.disabled,I=e.hidden,L=e.classNames,k=e.styles,D=e.onResize,M=n(e,C),W=g(p,{value:b,defaultValue:p}),K=a(W,2),Y=K[0],X=K[1],q=null==Y?"":String(Y),G=h.useState(!1),J=a(G,2),O=J[0],Q=J[1],U=h.useRef(!1),Z=h.useState(null),$=a(Z,2),_=$[0],ee=$[1],te=v.useRef(null),ne=function(){var e;return null===(e=te.current)||void 0===e?void 0:e.textArea},ae=function(){ne().focus()};v.useImperativeHandle(t,(function(){return{resizableTextArea:te.current,focus:ae,blur:function(){ne().blur()}}})),v.useEffect((function(){Q((function(e){return!B&&e}))}),[B]);// =========================== Select Range ===========================
var re=h.useState(null),oe=a(re,2),ie=oe[0],le=oe[1];h.useEffect((function(){var e;ie&&(e=ne()).setSelectionRange.apply(e,u(ie))}),[ie]);// ============================== Count ===============================
var ue,se=c(j,P),ce=null!==(r=se.max)&&void 0!==r?r:E,de=Number(ce)>0,fe=se.strategy(q),ge=!!ce&&fe>ce,me=function(e,t){var n=t;!U.current&&se.exceedFormatter&&se.max&&se.strategy(t)>se.max&&t!==(n=se.exceedFormatter(t,{max:se.max}))&&le([ne().selectionStart||0,ne().selectionEnd||0]),X(n),f(e.currentTarget,e,w,n)},pe=V;se.show&&(ue=se.showFormatter?se.showFormatter({value:q,count:fe,maxLength:ce}):"".concat(fe).concat(de?" / ".concat(ce):""),pe=h.createElement(h.Fragment,null,pe,h.createElement("span",{className:s("".concat(N,"-data-count"),null==L?void 0:L.count),style:null==k?void 0:k.count},ue)));var ve=!M.autoSize&&!P&&!z;return h.createElement(d,{value:q,allowClear:z,handleReset:function(e){X(""),ae(),f(ne(),e,w)},suffix:pe,prefixCls:N,classNames:o(o({},L),{},{affixWrapper:s(null==L?void 0:L.affixWrapper,(m={},l(m,"".concat(N,"-show-count"),P),l(m,"".concat(N,"-textarea-allow-clear"),z),m))}),disabled:B,focused:O,className:s(H,ge&&"".concat(N,"-out-of-range")),style:o(o({},T),_&&!ve?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":"string"==typeof ue?ue:void 0}},hidden:I},h.createElement(S,i({},M,{maxLength:E,onKeyDown:function(e){var t=M.onPressEnter,n=M.onKeyDown;"Enter"===e.key&&t&&t(e),null==n||n(e)},onChange:function(e){me(e,e.target.value)},onFocus:function(e){Q(!0),null==x||x(e)},onBlur:function(e){Q(!1),null==y||y(e)},onCompositionStart:function(e){U.current=!0,null==R||R(e)},onCompositionEnd:function(e){U.current=!1,me(e,e.currentTarget.value),null==A||A(e)},className:s(null==L?void 0:L.textarea),style:o(o({},null==k?void 0:k.textarea),{},{resize:null==T?void 0:T.resize}),disabled:B,prefixCls:N,onResize:function(e){var t;null==D||D(e),null!==(t=ne())&&void 0!==t&&t.style.height&&ee(!0)},ref:te})))})))}}}));