import{r as t,a as Cn}from"./react-By7fMB0e.js";import{K as I,w as lt,f as ct,A as dn,b as st,l as ft,e as dt,u as vt,B as In,p as mt,t as gt,c as pt,y as ht}from"./rc-util-BRxKhk2h.js";import{c as Ge}from"./classnames-CJ4s3n-9.js";import{F as bt}from"./rc-overflow-DFopUFm4.js";import"./react-dom-BRHH_8_y.js";import"./rc-resize-observer-B9dDainz.js";import"./rc-motion-2xQU8S4B.js";import{d as vn,c as ue,e as Q,b as ie,g as Ke,h as nn,q as St,f as Ie}from"./@babel-CPdS0LiP.js";import{T as wt}from"./@rc-component-DEHkSfE8.js";import{L as Ct}from"./rc-virtual-list-kx-0GHFZ.js";var mn=function(e){var a=e.className,o=e.customizeIcon,r=e.customizeIconProps,i=e.children,u=e.onMouseDown,c=e.onClick,v=typeof o=="function"?o(r):o;return t.createElement("span",{className:a,onMouseDown:function(s){s.preventDefault(),u==null||u(s)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:c,"aria-hidden":!0},v!==void 0?v:t.createElement("span",{className:Ge(a.split(/\s+/).map(function(g){return"".concat(g,"-icon")}))},i))},yt=function(e,a,o,r,i){var u=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,c=arguments.length>6?arguments[6]:void 0,v=arguments.length>7?arguments[7]:void 0,g=Cn.useMemo(function(){if(vn(r)==="object")return r.clearIcon;if(i)return i},[r,i]),s=Cn.useMemo(function(){return!!(!u&&r&&(o.length||c)&&!(v==="combobox"&&c===""))},[r,u,o.length,c,v]);return{allowClear:s,clearIcon:Cn.createElement(mn,{className:"".concat(e,"-clear"),onMouseDown:a,customizeIcon:g},"×")}},$n=t.createContext(null);function It(){return t.useContext($n)}function Et(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=ue(e,2),o=a[0],r=a[1],i=t.useRef(null),u=function(){window.clearTimeout(i.current)};t.useEffect(function(){return u},[]);var c=function(g,s){u(),i.current=window.setTimeout(function(){r(g),s&&s()},n)};return[o,c,u]}function Bn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(r){(r||e.current===null)&&(e.current=r),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Rt(n,e,a,o){var r=t.useRef(null);r.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function i(u){var c;if(!((c=r.current)!==null&&c!==void 0&&c.customizedTrigger)){var v=u.target;v.shadowRoot&&u.composed&&(v=u.composedPath()[0]||v),r.current.open&&n().filter(function(g){return g}).every(function(g){return!g.contains(v)&&g!==v})&&r.current.triggerOpen(!1)}}return window.addEventListener("mousedown",i),function(){return window.removeEventListener("mousedown",i)}},[])}function Dt(n){return![I.ESC,I.SHIFT,I.BACKSPACE,I.TAB,I.WIN_KEY,I.ALT,I.META,I.WIN_KEY_RIGHT,I.CTRL,I.SEMICOLON,I.EQUALS,I.CAPS_LOCK,I.CONTEXT_MENU,I.F1,I.F2,I.F3,I.F4,I.F5,I.F6,I.F7,I.F8,I.F9,I.F10,I.F11,I.F12].includes(n)}var xt=function(e,a){var o,r=e.prefixCls,i=e.id,u=e.inputElement,c=e.disabled,v=e.tabIndex,g=e.autoFocus,s=e.autoComplete,m=e.editable,O=e.activeDescendantId,l=e.value,E=e.maxLength,w=e.onKeyDown,C=e.onMouseDown,_=e.onChange,Z=e.onPaste,U=e.onCompositionStart,T=e.onCompositionEnd,X=e.open,ee=e.attrs,A=u||t.createElement("input",null),oe=A,ae=oe.ref,j=oe.props,z=j.onKeyDown,$=j.onChange,H=j.onMouseDown,K=j.onCompositionStart,G=j.onCompositionEnd,Y=j.style;return lt(!("maxLength"in A.props)),A=t.cloneElement(A,Q(Q(Q({type:"search"},j),{},{id:i,ref:ct(a,ae),disabled:c,tabIndex:v,autoComplete:s||"off",autoFocus:g,className:Ge("".concat(r,"-selection-search-input"),(o=A)===null||o===void 0||(o=o.props)===null||o===void 0?void 0:o.className),role:"combobox","aria-expanded":X||!1,"aria-haspopup":"listbox","aria-owns":"".concat(i,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(i,"_list"),"aria-activedescendant":X?O:void 0},ee),{},{value:m?l:"",maxLength:E,readOnly:!m,unselectable:m?null:"on",style:Q(Q({},Y),{},{opacity:m?null:0}),onKeyDown:function(b){w(b),z&&z(b)},onMouseDown:function(b){C(b),H&&H(b)},onChange:function(b){_(b),$&&$(b)},onCompositionStart:function(b){U(b),K&&K(b)},onCompositionEnd:function(b){T(b),G&&G(b)},onPaste:Z})),A},zn=t.forwardRef(xt);function Wn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var Mt=typeof window<"u"&&window.document&&window.document.documentElement,Ot=Mt;function Pt(n){return n!=null}function Nt(n){return!n&&n!==0}function _n(n){return["string","number"].includes(vn(n))}function Un(n){var e=void 0;return n&&(_n(n.title)?e=n.title.toString():_n(n.label)&&(e=n.label.toString())),e}function Vt(n,e){Ot?t.useLayoutEffect(n,e):t.useEffect(n,e)}function Tt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var An=function(e){e.preventDefault(),e.stopPropagation()},_t=function(e){var a=e.id,o=e.prefixCls,r=e.values,i=e.open,u=e.searchValue,c=e.autoClearSearchValue,v=e.inputRef,g=e.placeholder,s=e.disabled,m=e.mode,O=e.showSearch,l=e.autoFocus,E=e.autoComplete,w=e.activeDescendantId,C=e.tabIndex,_=e.removeIcon,Z=e.maxTagCount,U=e.maxTagTextLength,T=e.maxTagPlaceholder,X=T===void 0?function(P){return"+ ".concat(P.length," ...")}:T,ee=e.tagRender,A=e.onToggleOpen,oe=e.onRemove,ae=e.onInputChange,j=e.onInputPaste,z=e.onInputKeyDown,$=e.onInputMouseDown,H=e.onInputCompositionStart,K=e.onInputCompositionEnd,G=t.useRef(null),Y=t.useState(0),M=ue(Y,2),b=M[0],L=M[1],q=t.useState(!1),De=ue(q,2),Ce=De[0],xe=De[1],ne="".concat(o,"-selection"),ve=i||m==="multiple"&&c===!1||m==="tags"?u:"",$e=m==="tags"||m==="multiple"&&c===!1||O&&(i||Ce);Vt(function(){L(G.current.scrollWidth)},[ve]);var te=function(h,N,F,J,B){return t.createElement("span",{title:Un(h),className:Ge("".concat(ne,"-item"),ie({},"".concat(ne,"-item-disabled"),F))},t.createElement("span",{className:"".concat(ne,"-item-content")},N),J&&t.createElement(mn,{className:"".concat(ne,"-item-remove"),onMouseDown:An,onClick:B,customizeIcon:_},"×"))},Me=function(h,N,F,J,B,ce){var ye=function(Ae){An(Ae),A(!i)};return t.createElement("span",{onMouseDown:ye},ee({label:N,value:h,disabled:F,closable:J,onClose:B,isMaxTag:!!ce}))},_e=function(h){var N=h.disabled,F=h.label,J=h.value,B=!s&&!N,ce=F;if(typeof U=="number"&&(typeof F=="string"||typeof F=="number")){var ye=String(ce);ye.length>U&&(ce="".concat(ye.slice(0,U),"..."))}var Oe=function(Le){Le&&Le.stopPropagation(),oe(h)};return typeof ee=="function"?Me(J,ce,N,B,Oe):te(h,ce,N,B,Oe)},y=function(h){var N=typeof X=="function"?X(h):X;return typeof ee=="function"?Me(void 0,N,!1,!1,void 0,!0):te({title:N},N,!1)},d=t.createElement("div",{className:"".concat(ne,"-search"),style:{width:b},onFocus:function(){xe(!0)},onBlur:function(){xe(!1)}},t.createElement(zn,{ref:v,open:i,prefixCls:o,id:a,inputElement:null,disabled:s,autoFocus:l,autoComplete:E,editable:$e,activeDescendantId:w,value:ve,onKeyDown:z,onMouseDown:$,onChange:ae,onPaste:j,onCompositionStart:H,onCompositionEnd:K,tabIndex:C,attrs:dn(e,!0)}),t.createElement("span",{ref:G,className:"".concat(ne,"-search-mirror"),"aria-hidden":!0},ve," ")),x=t.createElement(bt,{prefixCls:"".concat(ne,"-overflow"),data:r,renderItem:_e,renderRest:y,suffix:d,itemKey:Tt,maxCount:Z});return t.createElement(t.Fragment,null,x,!r.length&&!ve&&t.createElement("span",{className:"".concat(ne,"-placeholder")},g))},At=function(e){var a=e.inputElement,o=e.prefixCls,r=e.id,i=e.inputRef,u=e.disabled,c=e.autoFocus,v=e.autoComplete,g=e.activeDescendantId,s=e.mode,m=e.open,O=e.values,l=e.placeholder,E=e.tabIndex,w=e.showSearch,C=e.searchValue,_=e.activeValue,Z=e.maxLength,U=e.onInputKeyDown,T=e.onInputMouseDown,X=e.onInputChange,ee=e.onInputPaste,A=e.onInputCompositionStart,oe=e.onInputCompositionEnd,ae=e.title,j=t.useState(!1),z=ue(j,2),$=z[0],H=z[1],K=s==="combobox",G=K||w,Y=O[0],M=C||"";K&&_&&!$&&(M=_),t.useEffect(function(){K&&H(!1)},[K,_]);var b=s!=="combobox"&&!m&&!w?!1:!!M,L=ae===void 0?Un(Y):ae,q=t.useMemo(function(){return Y?null:t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:b?{visibility:"hidden"}:void 0},l)},[Y,b,l,o]);return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(zn,{ref:i,prefixCls:o,id:r,open:m,inputElement:a,disabled:u,autoFocus:c,autoComplete:v,editable:G,activeDescendantId:g,value:M,onKeyDown:U,onMouseDown:T,onChange:function(Ce){H(!0),X(Ce)},onPaste:ee,onCompositionStart:A,onCompositionEnd:oe,tabIndex:E,attrs:dn(e,!0),maxLength:K?Z:void 0})),!K&&Y?t.createElement("span",{className:"".concat(o,"-selection-item"),title:L,style:b?{visibility:"hidden"}:void 0},Y.label):null,q)},Lt=function(e,a){var o=t.useRef(null),r=t.useRef(!1),i=e.prefixCls,u=e.open,c=e.mode,v=e.showSearch,g=e.tokenWithEnter,s=e.disabled,m=e.autoClearSearchValue,O=e.onSearch,l=e.onSearchSubmit,E=e.onToggleOpen,w=e.onInputKeyDown,C=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(b){o.current.focus(b)},blur:function(){o.current.blur()}}});var _=Bn(0),Z=ue(_,2),U=Z[0],T=Z[1],X=function(b){var L=b.which;(L===I.UP||L===I.DOWN)&&b.preventDefault(),w&&w(b),L===I.ENTER&&c==="tags"&&!r.current&&!u&&(l==null||l(b.target.value)),Dt(L)&&E(!0)},ee=function(){T(!0)},A=t.useRef(null),oe=function(b){O(b,!0,r.current)!==!1&&E(!0)},ae=function(){r.current=!0},j=function(b){r.current=!1,c!=="combobox"&&oe(b.target.value)},z=function(b){var L=b.target.value;if(g&&A.current&&/[\r\n]/.test(A.current)){var q=A.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");L=L.replace(q,A.current)}A.current=null,oe(L)},$=function(b){var L=b.clipboardData,q=L==null?void 0:L.getData("text");A.current=q||""},H=function(b){var L=b.target;if(L!==o.current){var q=document.body.style.msTouchAction!==void 0;q?setTimeout(function(){o.current.focus()}):o.current.focus()}},K=function(b){var L=U();b.target!==o.current&&!L&&!(c==="combobox"&&s)&&b.preventDefault(),(c!=="combobox"&&(!v||!L)||!u)&&(u&&m!==!1&&O("",!0,!1),E())},G={inputRef:o,onInputKeyDown:X,onInputMouseDown:ee,onInputChange:z,onInputPaste:$,onInputCompositionStart:ae,onInputCompositionEnd:j},Y=c==="multiple"||c==="tags"?t.createElement(_t,Ke({},e,G)):t.createElement(At,Ke({},e,G));return t.createElement("div",{ref:C,className:"".concat(i,"-selector"),onClick:H,onMouseDown:K},Y)},Ft=t.forwardRef(Lt),kt=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Kt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},$t=function(e,a){var o=e.prefixCls;e.disabled;var r=e.visible,i=e.children,u=e.popupElement,c=e.animation,v=e.transitionName,g=e.dropdownStyle,s=e.dropdownClassName,m=e.direction,O=m===void 0?"ltr":m,l=e.placement,E=e.builtinPlacements,w=e.dropdownMatchSelectWidth,C=e.dropdownRender,_=e.dropdownAlign,Z=e.getPopupContainer,U=e.empty,T=e.getTriggerDOMNode,X=e.onPopupVisibleChange,ee=e.onPopupMouseEnter,A=nn(e,kt),oe="".concat(o,"-dropdown"),ae=u;C&&(ae=C(u));var j=t.useMemo(function(){return E||Kt(w)},[E,w]),z=c?"".concat(oe,"-").concat(c):v,$=typeof w=="number",H=t.useMemo(function(){return $?null:w===!1?"minWidth":"width"},[w,$]),K=g;$&&(K=Q(Q({},K),{},{width:w}));var G=t.useRef(null);return t.useImperativeHandle(a,function(){return{getPopupElement:function(){var M;return(M=G.current)===null||M===void 0?void 0:M.popupElement}}}),t.createElement(wt,Ke({},A,{showAction:X?["click"]:[],hideAction:X?["click"]:[],popupPlacement:l||(O==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:j,prefixCls:oe,popupTransitionName:z,popup:t.createElement("div",{onMouseEnter:ee},ae),ref:G,stretch:H,popupAlign:_,popupVisible:r,getPopupContainer:Z,popupClassName:Ge(s,ie({},"".concat(oe,"-empty"),U)),popupStyle:K,getTriggerDOMNode:T,onPopupVisibleChange:X}),i)},Bt=t.forwardRef($t);function Ln(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a!=null?a:o!==void 0?o:"rc-index-key-".concat(e)}function En(n){return typeof n<"u"&&!Number.isNaN(n)}function Hn(n,e){var a=n||{},o=a.label,r=a.value,i=a.options,u=a.groupLabel,c=o||(e?"children":"label");return{label:c,value:r||"value",options:i||"options",groupLabel:u||c}}function zt(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,r=[],i=Hn(a,!1),u=i.label,c=i.value,v=i.options,g=i.groupLabel;function s(m,O){Array.isArray(m)&&m.forEach(function(l){if(O||!(v in l)){var E=l[c];r.push({key:Ln(l,r.length),groupOption:O,data:l,label:l[u],value:E})}else{var w=l[g];w===void 0&&o&&(w=l.label),r.push({key:Ln(l,r.length),group:!0,data:l,label:w}),s(l[v],!0)}})}return s(n,!1),r}function Rn(n){var e=Q({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return st(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}var Wt=function(e,a,o){if(!a||!a.length)return null;var r=!1,i=function c(v,g){var s=St(g),m=s[0],O=s.slice(1);if(!m)return[v];var l=v.split(m);return r=r||l.length>1,l.reduce(function(E,w){return[].concat(Ie(E),Ie(c(w,O)))},[]).filter(Boolean)},u=i(e,a);return r?typeof o<"u"?u.slice(0,o):u:null},xn=t.createContext(null);function Ut(n){var e=n.visible,a=n.values;if(!e)return null;var o=50;return t.createElement("span",{"aria-live":"polite",style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0}},"".concat(a.slice(0,o).map(function(r){var i=r.label,u=r.value;return["number","string"].includes(vn(i))?i:u}).join(", ")),a.length>o?", ...":null)}var Ht=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],jt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"],Dn=function(e){return e==="tags"||e==="multiple"},Gt=t.forwardRef(function(n,e){var a,o=n.id,r=n.prefixCls,i=n.className,u=n.showSearch,c=n.tagRender,v=n.direction,g=n.omitDomProps,s=n.displayValues,m=n.onDisplayValuesChange,O=n.emptyOptions,l=n.notFoundContent,E=l===void 0?"Not Found":l,w=n.onClear,C=n.mode,_=n.disabled,Z=n.loading,U=n.getInputElement,T=n.getRawInputElement,X=n.open,ee=n.defaultOpen,A=n.onDropdownVisibleChange,oe=n.activeValue,ae=n.onActiveValueChange,j=n.activeDescendantId,z=n.searchValue,$=n.autoClearSearchValue,H=n.onSearch,K=n.onSearchSplit,G=n.tokenSeparators,Y=n.allowClear,M=n.suffixIcon,b=n.clearIcon,L=n.OptionList,q=n.animation,De=n.transitionName,Ce=n.dropdownStyle,xe=n.dropdownClassName,ne=n.dropdownMatchSelectWidth,ve=n.dropdownRender,$e=n.dropdownAlign,te=n.placement,Me=n.builtinPlacements,_e=n.getPopupContainer,y=n.showAction,d=y===void 0?[]:y,x=n.onFocus,P=n.onBlur,h=n.onKeyUp,N=n.onKeyDown,F=n.onMouseDown,J=nn(n,Ht),B=Dn(C),ce=(u!==void 0?u:B)||C==="combobox",ye=Q({},J);jt.forEach(function(V){delete ye[V]}),g==null||g.forEach(function(V){delete ye[V]});var Oe=t.useState(!1),Ae=ue(Oe,2),Le=Ae[0],se=Ae[1];t.useEffect(function(){se(ft())},[]);var Ye=t.useRef(null),Se=t.useRef(null),ge=t.useRef(null),fe=t.useRef(null),Be=t.useRef(null),pe=t.useRef(!1),Xe=Et(),Pe=ue(Xe,3),Ne=Pe[0],Ee=Pe[1],gn=Pe[2];t.useImperativeHandle(e,function(){var V,D;return{focus:(V=fe.current)===null||V===void 0?void 0:V.focus,blur:(D=fe.current)===null||D===void 0?void 0:D.blur,scrollTo:function(be){var re;return(re=Be.current)===null||re===void 0?void 0:re.scrollTo(be)}}});var Re=t.useMemo(function(){var V;if(C!=="combobox")return z;var D=(V=s[0])===null||V===void 0?void 0:V.value;return typeof D=="string"||typeof D=="number"?String(D):""},[z,C,s]),an=C==="combobox"&&typeof U=="function"&&U()||null,we=typeof T=="function"&&T(),pn=dt(Se,we==null||(a=we.props)===null||a===void 0?void 0:a.ref),rn=t.useState(!1),un=ue(rn,2),hn=un[0],ln=un[1];vt(function(){ln(!0)},[]);var cn=In(!1,{defaultValue:ee,value:X}),qe=ue(cn,2),tn=qe[0],on=qe[1],le=hn?tn:!1,sn=!E&&O;(_||sn&&le&&C==="combobox")&&(le=!1);var Qe=sn?!1:le,f=t.useCallback(function(V){var D=V!==void 0?V:!le;_||(on(D),le!==D&&(A==null||A(D)))},[_,le,on,A]),S=t.useMemo(function(){return(G||[]).some(function(V){return["\n","\r\n"].includes(V)})},[G]),p=t.useContext(xn)||{},R=p.maxCount,k=p.rawValues,W=function(D,he,be){if(!(B&&En(R)&&(k==null?void 0:k.size)>=R)){var re=!0,me=D;ae==null||ae(null);var Te=Wt(D,G,En(R)?R-k.size:void 0),Ue=be?null:Te;return C!=="combobox"&&Ue&&(me="",K==null||K(Ue),f(!1),re=!1),H&&Re!==me&&H(me,{source:he?"typing":"effect"}),re}},Fe=function(D){!D||!D.trim()||H(D,{source:"submit"})};t.useEffect(function(){!le&&!B&&C!=="combobox"&&W("",!1,!1)},[le]),t.useEffect(function(){tn&&_&&on(!1),_&&!pe.current&&Ee(!1)},[_]);var Ve=Bn(),ze=ue(Ve,2),de=ze[0],We=ze[1],bn=function(D){var he=de(),be=D.which;if(be===I.ENTER&&(C!=="combobox"&&D.preventDefault(),le||f(!0)),We(!!Re),be===I.BACKSPACE&&!he&&B&&!Re&&s.length){for(var re=Ie(s),me=null,Te=re.length-1;Te>=0;Te-=1){var Ue=re[Te];if(!Ue.disabled){re.splice(Te,1),me=Ue;break}}me&&m(re,{type:"remove",values:[me]})}for(var He=arguments.length,en=new Array(He>1?He-1:0),je=1;je<He;je++)en[je-1]=arguments[je];if(le){var fn;(fn=Be.current)===null||fn===void 0||fn.onKeyDown.apply(fn,[D].concat(en))}N==null||N.apply(void 0,[D].concat(en))},Sn=function(D){for(var he=arguments.length,be=new Array(he>1?he-1:0),re=1;re<he;re++)be[re-1]=arguments[re];if(le){var me;(me=Be.current)===null||me===void 0||me.onKeyUp.apply(me,[D].concat(be))}h==null||h.apply(void 0,[D].concat(be))},Mn=function(D){var he=s.filter(function(be){return be!==D});m(he,{type:"remove",values:[D]})},Je=t.useRef(!1),ke=function(){Ee(!0),_||(x&&!Je.current&&x.apply(void 0,arguments),d.includes("focus")&&f(!0)),Je.current=!0},qn=function(){pe.current=!0,Ee(!1,function(){Je.current=!1,pe.current=!1,f(!1)}),!_&&(Re&&(C==="tags"?H(Re,{source:"submit"}):C==="multiple"&&H("",{source:"blur"})),P&&P.apply(void 0,arguments))},Ze=[];t.useEffect(function(){return function(){Ze.forEach(function(V){return clearTimeout(V)}),Ze.splice(0,Ze.length)}},[]);var Jn=function(D){var he,be=D.target,re=(he=ge.current)===null||he===void 0?void 0:he.getPopupElement();if(re&&re.contains(be)){var me=setTimeout(function(){var en=Ze.indexOf(me);if(en!==-1&&Ze.splice(en,1),gn(),!Le&&!re.contains(document.activeElement)){var je;(je=fe.current)===null||je===void 0||je.focus()}});Ze.push(me)}for(var Te=arguments.length,Ue=new Array(Te>1?Te-1:0),He=1;He<Te;He++)Ue[He-1]=arguments[He];F==null||F.apply(void 0,[D].concat(Ue))},Qn=t.useState({}),Zn=ue(Qn,2),et=Zn[1];function nt(){et({})}var On;we&&(On=function(D){f(D)}),Rt(function(){var V;return[Ye.current,(V=ge.current)===null||V===void 0?void 0:V.getPopupElement()]},Qe,f,!!we);var tt=t.useMemo(function(){return Q(Q({},n),{},{notFoundContent:E,open:le,triggerOpen:Qe,id:o,showSearch:ce,multiple:B,toggleOpen:f})},[n,E,Qe,le,o,ce,B,f]),Pn=!!M||Z,Nn;Pn&&(Nn=t.createElement(mn,{className:Ge("".concat(r,"-arrow"),ie({},"".concat(r,"-arrow-loading"),Z)),customizeIcon:M,customizeIconProps:{loading:Z,searchValue:Re,open:le,focused:Ne,showSearch:ce}}));var ot=function(){var D;w==null||w(),(D=fe.current)===null||D===void 0||D.focus(),m([],{type:"clear",values:s}),W("",!1,!1)},Vn=yt(r,ot,s,Y,b,_,Re,C),at=Vn.allowClear,rt=Vn.clearIcon,it=t.createElement(L,{ref:Be}),ut=Ge(r,i,ie(ie(ie(ie(ie(ie(ie(ie(ie(ie({},"".concat(r,"-focused"),Ne),"".concat(r,"-multiple"),B),"".concat(r,"-single"),!B),"".concat(r,"-allow-clear"),Y),"".concat(r,"-show-arrow"),Pn),"".concat(r,"-disabled"),_),"".concat(r,"-loading"),Z),"".concat(r,"-open"),le),"".concat(r,"-customize-input"),an),"".concat(r,"-show-search"),ce)),Tn=t.createElement(Bt,{ref:ge,disabled:_,prefixCls:r,visible:Qe,popupElement:it,animation:q,transitionName:De,dropdownStyle:Ce,dropdownClassName:xe,direction:v,dropdownMatchSelectWidth:ne,dropdownRender:ve,dropdownAlign:$e,placement:te,builtinPlacements:Me,getPopupContainer:_e,empty:O,getTriggerDOMNode:function(){return Se.current},onPopupVisibleChange:On,onPopupMouseEnter:nt},we?t.cloneElement(we,{ref:pn}):t.createElement(Ft,Ke({},n,{domRef:Se,prefixCls:r,inputElement:an,ref:fe,id:o,showSearch:ce,autoClearSearchValue:$,mode:C,activeDescendantId:j,tagRender:c,values:s,open:le,onToggleOpen:f,activeValue:oe,searchValue:Re,onSearch:W,onSearchSubmit:Fe,onRemove:Mn,tokenWithEnter:S}))),wn;return we?wn=Tn:wn=t.createElement("div",Ke({className:ut},ye,{ref:Ye,onMouseDown:Jn,onKeyDown:bn,onKeyUp:Sn,onFocus:ke,onBlur:qn}),t.createElement(Ut,{visible:Ne&&!le,values:s}),Tn,Nn,at&&rt),t.createElement($n.Provider,{value:tt},wn)}),jn=function(){return null};jn.isSelectOptGroup=!0;var Gn=function(){return null};Gn.isSelectOption=!0;function Yt(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Xt=["disabled","title","children","style","className"];function Fn(n){return typeof n=="string"||typeof n=="number"}var qt=function(e,a){var o=It(),r=o.prefixCls,i=o.id,u=o.open,c=o.multiple,v=o.mode,g=o.searchValue,s=o.toggleOpen,m=o.notFoundContent,O=o.onPopupScroll,l=t.useContext(xn),E=l.maxCount,w=l.flattenOptions,C=l.onActiveValue,_=l.defaultActiveFirstOption,Z=l.onSelect,U=l.menuItemSelectedIcon,T=l.rawValues,X=l.fieldNames,ee=l.virtual,A=l.direction,oe=l.listHeight,ae=l.listItemHeight,j=l.optionRender,z="".concat(r,"-item"),$=mt(function(){return w},[u,w],function(y,d){return d[0]&&y[1]!==d[1]}),H=t.useRef(null),K=t.useMemo(function(){return c&&En(E)&&(T==null?void 0:T.size)>=E},[c,E,T==null?void 0:T.size]),G=function(d){d.preventDefault()},Y=function(d){var x;(x=H.current)===null||x===void 0||x.scrollTo(typeof d=="number"?{index:d}:d)},M=function(d){for(var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,P=$.length,h=0;h<P;h+=1){var N=(d+h*x+P)%P,F=$[N]||{},J=F.group,B=F.data;if(!J&&!(B!=null&&B.disabled)&&!K)return N}return-1},b=t.useState(function(){return M(0)}),L=ue(b,2),q=L[0],De=L[1],Ce=function(d){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;De(d);var P={source:x?"keyboard":"mouse"},h=$[d];if(!h){C(null,-1,P);return}C(h.value,d,P)};t.useEffect(function(){Ce(_!==!1?M(0):-1)},[$.length,g]);var xe=t.useCallback(function(y){return T.has(y)&&v!=="combobox"},[v,Ie(T).toString(),T.size]);t.useEffect(function(){var y=setTimeout(function(){if(!c&&u&&T.size===1){var x=Array.from(T)[0],P=$.findIndex(function(h){var N=h.data;return N.value===x});P!==-1&&(Ce(P),Y(P))}});if(u){var d;(d=H.current)===null||d===void 0||d.scrollTo(void 0)}return function(){return clearTimeout(y)}},[u,g]);var ne=function(d){d!==void 0&&Z(d,{selected:!T.has(d)}),c||s(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(d){var x=d.which,P=d.ctrlKey;switch(x){case I.N:case I.P:case I.UP:case I.DOWN:{var h=0;if(x===I.UP?h=-1:x===I.DOWN?h=1:Yt()&&P&&(x===I.N?h=1:x===I.P&&(h=-1)),h!==0){var N=M(q+h,h);Y(N),Ce(N,!0)}break}case I.ENTER:{var F,J=$[q];J&&!(J!=null&&(F=J.data)!==null&&F!==void 0&&F.disabled)&&!K?ne(J.value):ne(void 0),u&&d.preventDefault();break}case I.ESC:s(!1),u&&d.stopPropagation()}},onKeyUp:function(){},scrollTo:function(d){Y(d)}}}),$.length===0)return t.createElement("div",{role:"listbox",id:"".concat(i,"_list"),className:"".concat(z,"-empty"),onMouseDown:G},m);var ve=Object.keys(X).map(function(y){return X[y]}),$e=function(d){return d.label};function te(y,d){var x=y.group;return{role:x?"presentation":"option",id:"".concat(i,"_list_").concat(d)}}var Me=function(d){var x=$[d];if(!x)return null;var P=x.data||{},h=P.value,N=x.group,F=dn(P,!0),J=$e(x);return x?t.createElement("div",Ke({"aria-label":typeof J=="string"&&!N?J:null},F,{key:d},te(x,d),{"aria-selected":xe(h)}),h):null},_e={role:"listbox",id:"".concat(i,"_list")};return t.createElement(t.Fragment,null,ee&&t.createElement("div",Ke({},_e,{style:{height:0,width:0,overflow:"hidden"}}),Me(q-1),Me(q),Me(q+1)),t.createElement(Ct,{itemKey:"key",ref:H,data:$,height:oe,itemHeight:ae,fullHeight:!1,onMouseDown:G,onScroll:O,virtual:ee,direction:A,innerProps:ee?null:_e},function(y,d){var x=y.group,P=y.groupOption,h=y.data,N=y.label,F=y.value,J=h.key;if(x){var B,ce=(B=h.title)!==null&&B!==void 0?B:Fn(N)?N.toString():void 0;return t.createElement("div",{className:Ge(z,"".concat(z,"-group"),h.className),title:ce},N!==void 0?N:J)}var ye=h.disabled,Oe=h.title;h.children;var Ae=h.style,Le=h.className,se=nn(h,Xt),Ye=gt(se,ve),Se=xe(F),ge=ye||!Se&&K,fe="".concat(z,"-option"),Be=Ge(z,fe,Le,ie(ie(ie(ie({},"".concat(fe,"-grouped"),P),"".concat(fe,"-active"),q===d&&!ge),"".concat(fe,"-disabled"),ge),"".concat(fe,"-selected"),Se)),pe=$e(y),Xe=!U||typeof U=="function"||Se,Pe=typeof pe=="number"?pe:pe||F,Ne=Fn(Pe)?Pe.toString():void 0;return Oe!==void 0&&(Ne=Oe),t.createElement("div",Ke({},dn(Ye),ee?{}:te(y,d),{"aria-selected":Se,className:Be,title:Ne,onMouseMove:function(){q===d||ge||Ce(d)},onClick:function(){ge||ne(F)},style:Ae}),t.createElement("div",{className:"".concat(fe,"-content")},typeof j=="function"?j(y,{index:d}):Pe),t.isValidElement(U)||Se,Xe&&t.createElement(mn,{className:"".concat(z,"-option-state"),customizeIcon:U,customizeIconProps:{value:F,disabled:ge,isSelected:Se}},Se?"✓":null))}))},Jt=t.forwardRef(qt);const Qt=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var i=a.current,u=i.values,c=i.options,v=n.map(function(m){if(m.label===void 0){var O;return Q(Q({},m),{},{label:(O=u.get(m.value))===null||O===void 0?void 0:O.label})}return m}),g=new Map,s=new Map;return v.forEach(function(m){g.set(m.value,m),s.set(m.value,e.get(m.value)||c.get(m.value))}),a.current.values=g,a.current.options=s,v},[n,e]),r=t.useCallback(function(i){return e.get(i)||a.current.options.get(i)},[e]);return[o,r]};function yn(n,e){return Wn(n).join("").toUpperCase().includes(e)}const Zt=function(n,e,a,o,r){return t.useMemo(function(){if(!a||o===!1)return n;var i=e.options,u=e.label,c=e.value,v=[],g=typeof o=="function",s=a.toUpperCase(),m=g?o:function(l,E){return r?yn(E[r],s):E[i]?yn(E[u!=="children"?u:"label"],s):yn(E[c],s)},O=g?function(l){return Rn(l)}:function(l){return l};return n.forEach(function(l){if(l[i]){var E=m(a,O(l));if(E)v.push(l);else{var w=l[i].filter(function(C){return m(a,O(C))});w.length&&v.push(Q(Q({},l),{},ie({},i,w)))}return}m(a,O(l))&&v.push(l)}),v},[n,o,r,a,e])};var kn=0,eo=pt();function no(){var n;return eo?(n=kn,kn+=1):n="TEST_OR_SSR",n}function to(n){var e=t.useState(),a=ue(e,2),o=a[0],r=a[1];return t.useEffect(function(){r("rc_select_".concat(no()))},[]),n||o}var oo=["children","value"],ao=["children"];function ro(n){var e=n,a=e.key,o=e.props,r=o.children,i=o.value,u=nn(o,oo);return Q({key:a,value:i!==void 0?i:a,children:r},u)}function Yn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ht(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var r=a,i=r.type.isSelectOptGroup,u=r.key,c=r.props,v=c.children,g=nn(c,ao);return e||!i?ro(a):Q(Q({key:"__RC_SELECT_GRP__".concat(u===null?o:u,"__"),label:u},g),{},{options:Yn(v)})}).filter(function(a){return a})}var io=function(e,a,o,r,i){return t.useMemo(function(){var u=e,c=!e;c&&(u=Yn(a));var v=new Map,g=new Map,s=function(l,E,w){w&&typeof w=="string"&&l.set(E[w],E)},m=function O(l){for(var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w=0;w<l.length;w+=1){var C=l[w];!C[o.options]||E?(v.set(C[o.value],C),s(g,C,o.label),s(g,C,r),s(g,C,i)):O(C[o.options],!0)}};return m(u),{options:u,valueOptions:v,labelOptions:g}},[e,a,o,r,i])};function Kn(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var uo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","labelRender","value","defaultValue","labelInValue","onChange","maxCount"],lo=["inputValue"];function co(n){return!n||vn(n)!=="object"}var so=t.forwardRef(function(n,e){var a=n.id,o=n.mode,r=n.prefixCls,i=r===void 0?"rc-select":r,u=n.backfill,c=n.fieldNames,v=n.inputValue,g=n.searchValue,s=n.onSearch,m=n.autoClearSearchValue,O=m===void 0?!0:m,l=n.onSelect,E=n.onDeselect,w=n.dropdownMatchSelectWidth,C=w===void 0?!0:w,_=n.filterOption,Z=n.filterSort,U=n.optionFilterProp,T=n.optionLabelProp,X=n.options,ee=n.optionRender,A=n.children,oe=n.defaultActiveFirstOption,ae=n.menuItemSelectedIcon,j=n.virtual,z=n.direction,$=n.listHeight,H=$===void 0?200:$,K=n.listItemHeight,G=K===void 0?20:K,Y=n.labelRender,M=n.value,b=n.defaultValue,L=n.labelInValue,q=n.onChange,De=n.maxCount,Ce=nn(n,uo),xe=to(a),ne=Dn(o),ve=!!(!X&&A),$e=t.useMemo(function(){return _===void 0&&o==="combobox"?!1:_},[_,o]),te=t.useMemo(function(){return Hn(c,ve)},[JSON.stringify(c),ve]),Me=In("",{value:g!==void 0?g:v,postState:function(S){return S||""}}),_e=ue(Me,2),y=_e[0],d=_e[1],x=io(X,A,te,U,T),P=x.valueOptions,h=x.labelOptions,N=x.options,F=t.useCallback(function(f){var S=Wn(f);return S.map(function(p){var R,k,W,Fe,Ve;if(co(p))R=p;else{var ze;W=p.key,k=p.label,R=(ze=p.value)!==null&&ze!==void 0?ze:W}var de=P.get(R);if(de){var We;k===void 0&&(k=de==null?void 0:de[T||te.label]),W===void 0&&(W=(We=de==null?void 0:de.key)!==null&&We!==void 0?We:R),Fe=de==null?void 0:de.disabled,Ve=de==null?void 0:de.title}return{label:k,value:R,key:W,disabled:Fe,title:Ve}})},[te,T,P]),J=In(b,{value:M}),B=ue(J,2),ce=B[0],ye=B[1],Oe=t.useMemo(function(){var f,S=ne&&ce===null?[]:ce,p=F(S);return o==="combobox"&&Nt((f=p[0])===null||f===void 0?void 0:f.value)?[]:p},[ce,F,o,ne]),Ae=Qt(Oe,P),Le=ue(Ae,2),se=Le[0],Ye=Le[1],Se=t.useMemo(function(){if(!o&&se.length===1){var f=se[0];if(f.value===null&&(f.label===null||f.label===void 0))return[]}return se.map(function(S){var p;return Q(Q({},S),{},{label:(p=typeof Y=="function"?Y(S):S.label)!==null&&p!==void 0?p:S.value})})},[o,se,Y]),ge=t.useMemo(function(){return new Set(se.map(function(f){return f.value}))},[se]);t.useEffect(function(){if(o==="combobox"){var f,S=(f=se[0])===null||f===void 0?void 0:f.value;d(Pt(S)?String(S):"")}},[se]);var fe=Kn(function(f,S){var p=S!=null?S:f;return ie(ie({},te.value,f),te.label,p)}),Be=t.useMemo(function(){if(o!=="tags")return N;var f=Ie(N),S=function(R){return P.has(R)};return Ie(se).sort(function(p,R){return p.value<R.value?-1:1}).forEach(function(p){var R=p.value;S(R)||f.push(fe(R,p.label))}),f},[fe,N,P,se,o]),pe=Zt(Be,te,y,$e,U),Xe=t.useMemo(function(){return o!=="tags"||!y||pe.some(function(f){return f[U||"value"]===y})||pe.some(function(f){return f[te.value]===y})?pe:[fe(y)].concat(Ie(pe))},[fe,U,o,pe,y,te]),Pe=t.useMemo(function(){return Z?Ie(Xe).sort(function(f,S){return Z(f,S)}):Xe},[Xe,Z]),Ne=t.useMemo(function(){return zt(Pe,{fieldNames:te,childrenAsData:ve})},[Pe,te,ve]),Ee=function(S){var p=F(S);if(ye(p),q&&(p.length!==se.length||p.some(function(W,Fe){var Ve;return((Ve=se[Fe])===null||Ve===void 0?void 0:Ve.value)!==(W==null?void 0:W.value)}))){var R=L?p:p.map(function(W){return W.value}),k=p.map(function(W){return Rn(Ye(W.value))});q(ne?R:R[0],ne?k:k[0])}},gn=t.useState(null),Re=ue(gn,2),an=Re[0],we=Re[1],pn=t.useState(0),rn=ue(pn,2),un=rn[0],hn=rn[1],ln=oe!==void 0?oe:o!=="combobox",cn=t.useCallback(function(f,S){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},R=p.source,k=R===void 0?"keyboard":R;hn(S),u&&o==="combobox"&&f!==null&&k==="keyboard"&&we(String(f))},[u,o]),qe=function(S,p,R){var k=function(){var Je,ke=Ye(S);return[L?{label:ke==null?void 0:ke[te.label],value:S,key:(Je=ke==null?void 0:ke.key)!==null&&Je!==void 0?Je:S}:S,Rn(ke)]};if(p&&l){var W=k(),Fe=ue(W,2),Ve=Fe[0],ze=Fe[1];l(Ve,ze)}else if(!p&&E&&R!=="clear"){var de=k(),We=ue(de,2),bn=We[0],Sn=We[1];E(bn,Sn)}},tn=Kn(function(f,S){var p,R=ne?S.selected:!0;R?p=ne?[].concat(Ie(se),[f]):[f]:p=se.filter(function(k){return k.value!==f}),Ee(p),qe(f,R),o==="combobox"?we(""):(!Dn||O)&&(d(""),we(""))}),on=function(S,p){Ee(S);var R=p.type,k=p.values;(R==="remove"||R==="clear")&&k.forEach(function(W){qe(W.value,!1,R)})},le=function(S,p){if(d(S),we(null),p.source==="submit"){var R=(S||"").trim();if(R){var k=Array.from(new Set([].concat(Ie(ge),[R])));Ee(k),qe(R,!0),d("")}return}p.source!=="blur"&&(o==="combobox"&&Ee(S),s==null||s(S))},sn=function(S){var p=S;o!=="tags"&&(p=S.map(function(k){var W=h.get(k);return W==null?void 0:W.value}).filter(function(k){return k!==void 0}));var R=Array.from(new Set([].concat(Ie(ge),Ie(p))));Ee(R),R.forEach(function(k){qe(k,!0)})},Qe=t.useMemo(function(){var f=j!==!1&&C!==!1;return Q(Q({},x),{},{flattenOptions:Ne,onActiveValue:cn,defaultActiveFirstOption:ln,onSelect:tn,menuItemSelectedIcon:ae,rawValues:ge,fieldNames:te,virtual:f,direction:z,listHeight:H,listItemHeight:G,childrenAsData:ve,maxCount:De,optionRender:ee})},[De,x,Ne,cn,ln,tn,ae,ge,te,j,C,z,H,G,ve,ee]);return t.createElement(xn.Provider,{value:Qe},t.createElement(Gt,Ke({},Ce,{id:xe,prefixCls:i,ref:e,omitDomProps:lo,mode:o,displayValues:Se,onDisplayValuesChange:on,direction:z,searchValue:y,onSearch:le,autoClearSearchValue:O,onSearchSplit:sn,dropdownMatchSelectWidth:C,OptionList:Jt,emptyOptions:!Ne.length,activeValue:an,activeDescendantId:"".concat(xe,"_list_").concat(un)})))}),Xn=so;Xn.Option=Gn;Xn.OptGroup=jn;export{Gn as O,Xn as T,jn as a};