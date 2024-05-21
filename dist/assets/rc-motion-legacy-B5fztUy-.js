System.register(["./@babel-legacy-Hf2i0Sc8.js","./classnames-legacy-DmWFIwmD.js","./rc-util-legacy-BQceI0rf.js","./react-legacy-tsTD2afp.js"],(function(e,n){"use strict";var t,r,o,i,a,u,c,s,f,l,v,d,m,p,y,E,h,k,g;return{setters:[function(e){t=e.h,r=e.i,o=e.j,i=e.a,a=e._,u=e.d,c=e.c,s=e.e,f=e.b,l=e.k,v=e.g},function(e){d=e.c},function(e){m=e.c,p=e.q,y=e.F,E=e.h,h=e.s,k=e.G},function(e){g=e.r}],execute:function(){e("M",(function(e){var r=e.children,o=t(e,n);return g.createElement(b.Provider,{value:o},r)}));var n=["children"],b=g.createContext({}),A=function(e){r(t,e);var n=o(t);function t(){return i(this,t),n.apply(this,arguments)}return a(t,[{key:"render",value:function(){return this.props.children}}]),t}(g.Component),L="none",C="appear",R="enter",S="leave",w="none",P="prepare",j="start",N="active",O="end",T="prepared";// ================= Transition =================
// Event wrapper. Copy from react source code
function M(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit".concat(e)]="webkit".concat(n),t["Moz".concat(e)]="moz".concat(n),t["ms".concat(e)]="MS".concat(n),t["O".concat(e)]="o".concat(n.toLowerCase()),t}var x,V,D,F=(x=m(),V="undefined"!=typeof window?window:{},D={animationend:M("Animation","AnimationEnd"),transitionend:M("Transition","TransitionEnd")},x&&("AnimationEvent"in V||delete D.animationend.animation,"TransitionEvent"in V||delete D.transitionend.transition),D),z={};if(m()){var I=document.createElement("div");z=I.style}var K={};function q(e){if(K[e])return K[e];var n=F[e];if(n)for(var t=Object.keys(n),r=t.length,o=0;o<r;o+=1){var i=t[o];if(Object.prototype.hasOwnProperty.call(n,i)&&i in z)return K[e]=n[i],K[e]}return""}var G=q("animationend"),H=q("transitionend"),U=!(!G||!H),W=G||"animationend",_=H||"transitionend";function B(e,n){return e?"object"===u(e)?e[n.replace(/-\w/g,(function(e){return e[1].toUpperCase()}))]:"".concat(e,"-").concat(n):null}var J=function(e){var n=g.useRef(),t=g.useRef(e);// Cache callback
t.current=e;// Internal motion event handler
var r=g.useCallback((function(e){t.current(e)}),[]);// Remove events
function o(e){e&&(e.removeEventListener(_,r),e.removeEventListener(W,r))}// Patch events
// Clean up when removed
return g.useEffect((function(){return function(){o(n.current)}}),[]),[function(e){n.current&&n.current!==e&&o(n.current),e&&e!==n.current&&(e.addEventListener(_,r),e.addEventListener(W,r),// Save as cache in case dom removed trigger by `motionDeadline`
n.current=e)},o]},Q=m()?g.useLayoutEffect:g.useEffect,X=[P,j,N,O],Y=[P,T],Z=!1,$=!0;// It's safe to use `useLayoutEffect` but the warning is annoying
function ee(e){return e===N||e===O}var ne=function(e,n,t){var r=y(w),o=c(r,2),i=o[0],a=o[1],u=function(){var e=g.useRef(null);function n(){p.cancel(e.current)}return g.useEffect((function(){return function(){n()}}),[]),[function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;n();var i=p((function(){o<=1?r({isCanceled:function(){return i!==e.current}}):t(r,o-1)}));e.current=i},n]}(),s=c(u,2),f=s[0],l=s[1],v=n?Y:X;return Q((function(){if(i!==w&&i!==O){var e=v.indexOf(i),n=v[e+1],r=t(i);r===Z?// Skip when no needed
a(n,!0):n&&// Do as frame for step update
f((function(e){function t(){// Skip since current queue is ood
e.isCanceled()||a(n,!0)}!0===r?t():// Only promise should be async
Promise.resolve(r).then(t)}))}}),[e,i]),g.useEffect((function(){return function(){l()}}),[]),[function(){a(P,!0)},i]},te=e("C",
/**
       * `transitionSupport` is used for none transition test case.
       * Default we use browser transition event support check.
       */
function(e){var n=e;"object"===u(e)&&(n=e.transitionSupport);var t=g.forwardRef((function(e,t){var r=e.visible,o=void 0===r||r,i=e.removeOnLeave,a=void 0===i||i,u=e.forceRender,l=e.children,v=e.motionName,m=e.leavedClassName,p=e.eventProps,w=function(e,t){return!(!e.motionName||!n||!1===t)}(e,g.useContext(b).motion),O=g.useRef(),M=g.useRef(),x=function(e,n,t,r){var o=r.motionEnter,i=void 0===o||o,a=r.motionAppear,u=void 0===a||a,l=r.motionLeave,v=void 0===l||l,d=r.motionDeadline,m=r.motionLeaveImmediately,p=r.onAppearPrepare,E=r.onEnterPrepare,h=r.onLeavePrepare,k=r.onAppearStart,b=r.onEnterStart,A=r.onLeaveStart,w=r.onAppearActive,O=r.onEnterActive,M=r.onLeaveActive,x=r.onAppearEnd,V=r.onEnterEnd,D=r.onLeaveEnd,F=r.onVisibleChanged,z=y(),I=c(z,2),K=I[0],q=I[1],G=y(L),H=c(G,2),U=H[0],W=H[1],_=y(null),B=c(_,2),X=B[0],Y=B[1],te=g.useRef(!1),re=g.useRef(null);// Used for outer render usage to avoid `visible: false & status: none` to render nothing
// =========================== Dom Node ===========================
function oe(){return t()}// ========================== Motion End ==========================
var ie=g.useRef(!1);
/**
         * Clean up status & style
         */function ae(){W(L,!0),Y(null,!0)}function ue(e){var n=oe();if(!e||e.deadline||e.target===n){var t,r=ie.current;U===C&&r?t=null==x?void 0:x(n,e):U===R&&r?t=null==V?void 0:V(n,e):U===S&&r&&(t=null==D?void 0:D(n,e)),// Only update status when `canEnd` and not destroyed
U!==L&&r&&!1!==t&&ae()}}var ce=J(ue),se=c(ce,1)[0],fe=function(e){var n,t,r;switch(e){case C:return f(n={},P,p),f(n,j,k),f(n,N,w),n;case R:return f(t={},P,E),f(t,j,b),f(t,N,O),t;case S:return f(r={},P,h),f(r,j,A),f(r,N,M),r;default:return{}}},le=g.useMemo((function(){return fe(U)}),[U]),ve=ne(U,!e,(function(e){// Only prepare step can be skip
if(e===P){var n=le[P];return n?n(oe()):Z}// Rest step is sync update
var t;return pe in le&&Y((null===(t=le[pe])||void 0===t?void 0:t.call(le,oe(),null))||null),pe===N&&(// Patch events when motion needed
se(oe()),d>0&&(clearTimeout(re.current),re.current=setTimeout((function(){ue({deadline:!0})}),d))),pe===T&&ae(),$})),de=c(ve,2),me=de[0],pe=de[1],ye=ee(pe);// ============================= Step =============================
ie.current=ye,// ============================ Status ============================
// Update with new status
Q((function(){q(n);var t,r=te.current;te.current=!0,// Appear
!r&&n&&u&&(t=C),// Enter
r&&n&&i&&(t=R),// Leave
(r&&!n&&v||!r&&m&&!n&&v)&&(t=S);var o=fe(t);// Update to next status
t&&(e||o[P])?(W(t),me()):// Set back in case no motion but prev status has prepare step
W(L)}),[n]),// ============================ Effect ============================
// Reset when motion changed
g.useEffect((function(){(// Cancel appear
U===C&&!u||// Cancel enter
U===R&&!i||// Cancel leave
U===S&&!v)&&W(L)}),[u,i,v]),g.useEffect((function(){return function(){te.current=!1,clearTimeout(re.current)}}),[]);// Trigger `onVisibleChanged`
var Ee=g.useRef(!1);g.useEffect((function(){// [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
K&&(Ee.current=!0),void 0!==K&&U===L&&(// Skip first render is invisible since it's nothing changed
(Ee.current||K)&&(null==F||F(K)),Ee.current=!0)}),[K,U]);// ============================ Styles ============================
var he=X;return le[P]&&pe===j&&(he=s({transition:"none"},he)),[U,pe,he,null!=K?K:n]}(w,o,(function(){try{// Here we're avoiding call for findDOMNode since it's deprecated
// in strict mode. We're calling it only when node ref is not
// an instance of DOM HTMLElement. Otherwise use
// findDOMNode as a final resort
return O.current instanceof HTMLElement?O.current:k(M.current)}catch(e){// Only happen when `motionDeadline` trigger but element removed.
return null}}),e),V=c(x,4),D=V[0],F=V[1],z=V[2],I=V[3],K=g.useRef(I);I&&(K.current=!0);// ====================== Refs ======================
var q,G=g.useCallback((function(e){O.current=e,E(t,e)}),[t]),H=s(s({},p),{},{visible:o});// ===================== Render =====================
if(l)if(D===L)// Stable children
q=I?l(s({},H),G):!a&&K.current&&m?l(s(s({},H),{},{className:m}),G):u||!a&&!m?l(s(s({},H),{},{style:{display:"none"}}),G):null;else{var U,W;// In motion
F===P?W="prepare":ee(F)?W="active":F===j&&(W="start");var _=B(v,"".concat(D,"-").concat(W));q=l(s(s({},H),{},{className:d(B(v,D),(U={},f(U,_,_&&W),f(U,v,"string"==typeof v),U)),style:z}),G)}// Auto inject ref if child node not have `ref` props
else// No children
q=null;return g.isValidElement(q)&&h(q)&&(q.ref||(q=g.cloneElement(q,{ref:G}))),g.createElement(A,{ref:M},q)}));return t.displayName="CSSMotion",t}(U)),re="add",oe="keep",ie="remove",ae="removed";function ue(e){var n;return n=e&&"object"===u(e)&&"key"in e?e:{key:e},s(s({},n),{},{key:String(n.key)})}function ce(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(ue)}var se=["component","children","onVisibleChanged","onAllRemoved"],fe=["status"],le=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];!
/**
       * Generate a CSSMotionList component with config
       * @param transitionSupport No need since CSSMotionList no longer depends on transition support
       * @param CSSMotion CSSMotion component
       */
function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te,u=function(e){r(c,e);var u=o(c);function c(){var e;i(this,c);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=u.call.apply(u,[this].concat(t)),f(l(e),"state",{keyEntities:[]}),// ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
f(l(e),"removeKey",(function(n){var t=e.state.keyEntities.map((function(e){return e.key!==n?e:s(s({},e),{},{status:ae})}));return e.setState({keyEntities:t}),t.filter((function(e){return e.status!==ae})).length})),e}return a(c,[{key:"render",value:function(){var e=this,r=this.state.keyEntities,o=this.props,i=o.component,a=o.children,u=o.onVisibleChanged,c=o.onAllRemoved,f=t(o,se),l=i||g.Fragment,d={};return le.forEach((function(e){d[e]=f[e],delete f[e]})),delete f.keys,g.createElement(l,f,r.map((function(r,o){var i=r.status,f=t(r,fe),l=i===re||i===oe;return g.createElement(n,v({},d,{key:f.key,visible:l,eventProps:f,onVisibleChanged:function(n){null==u||u(n,{key:f.key}),n||0===e.removeKey(f.key)&&c&&c()}}),(function(e,n){return a(s(s({},e),{},{index:o}),n)}))})))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var t=e.keys,r=n.keyEntities,o=ce(t),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[],r=0,o=n.length,i=ce(e),a=ce(n);// Check prev keys to insert or keep
i.forEach((function(e){for(var n=!1,i=r;i<o;i+=1){var u=a[i];if(u.key===e.key){// New added keys should add before current key
r<i&&(t=t.concat(a.slice(r,i).map((function(e){return s(s({},e),{},{status:re})}))),r=i),t.push(s(s({},u),{},{status:oe})),r+=1,n=!0;break}}// If not hit, it means key is removed
n||t.push(s(s({},e),{},{status:ie}))})),// Add rest to the list
r<o&&(t=t.concat(a.slice(r).map((function(e){return s(s({},e),{},{status:re})}))))
/**
         * Merge same key when it remove and add again:
         *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
         */;var u={};return t.forEach((function(e){var n=e.key;u[n]=(u[n]||0)+1})),Object.keys(u).filter((function(e){return u[e]>1})).forEach((function(e){// Remove `STATUS_REMOVE` node.
// Update `STATUS_ADD` to `STATUS_KEEP`
(t=t.filter((function(n){var t=n.key,r=n.status;return t!==e||r!==ie}))).forEach((function(n){n.key===e&&(// eslint-disable-next-line no-param-reassign
n.status=oe)}))})),t}(r,o);return{keyEntities:i.filter((function(e){var n=r.find((function(n){var t=n.key;return e.key===t}));// Remove if already mark as removed
return!n||n.status!==ae||e.status!==ie}))}}}]),c}(g.Component);f(u,"defaultProps",{component:"div"})}(U)}}}));
