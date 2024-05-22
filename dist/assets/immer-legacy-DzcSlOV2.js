!function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,f=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){f=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(f)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return(t=i(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}System.register([],(function(r,i){"use strict";return{execute:function(){r({a:p,c:G,i:s});var i=Symbol.for("immer-nothing"),u=Symbol.for("immer-draftable"),c=Symbol.for("immer-state");function f(e){throw new Error("[Immer] minified error nr: ".concat(e,". Full error at: https://bit.ly/3cXEKWf"))}var l=Object.getPrototypeOf;function s(e){return!!e&&!!e[c]}function p(e){var t;return!!e&&(_(e)||Array.isArray(e)||!!e[u]||!(null===(t=e.constructor)||void 0===t||!t[u])||m(e)||g(e))}var y=Object.prototype.constructor.toString();function _(e){if(!e||"object"!==a(e))return!1;var t=l(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===y}function v(e,t){0===d(e)?Reflect.ownKeys(e).forEach((function(r){t(r,e[r],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function d(e){var t=e[c];return t?t.type_:Array.isArray(e)?1:m(e)?2:g(e)?3:0}function b(e,t){return 2===d(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function h(e,t,r){var n=d(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function m(e){return e instanceof Map}function g(e){return e instanceof Set}function w(e){return e.copy_||e.base_}function O(e,t){if(m(e))return new Map(e);if(g(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);var r=_(e);if(!0===t||"class_only"===t&&!r){var i=Object.getOwnPropertyDescriptors(e);delete i[c];for(var a=Reflect.ownKeys(i),u=0;u<a.length;u++){var f=a[u],s=i[f];!1===s.writable&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(i[f]={configurable:!0,writable:!0,// could live with !!desc.set as well here...
enumerable:s.enumerable,value:e[f]})}return Object.create(l(e),i)}var p=l(e);if(null!==p&&r)return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);var y=Object.create(p);return Object.assign(y,e)}function P(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return j(e)||s(e)||!p(e)||(d(e)>1&&(e.set=e.add=e.clear=e.delete=S),Object.freeze(e),r&&Object.entries(e).forEach((function(e){var r=t(e,2);r[0];return P(r[1],!0)}))),e}function S(){f(2)}function j(e){return Object.isFrozen(e)}var z,A={};function D(e){var t=A[e];return t||f(0),t}function F(){return z}function k(e,t){t&&(D("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function E(e){C(e),e.drafts_.forEach(N),e.drafts_=null}function C(e){e===z&&(z=e.parent_)}function M(e){return z={drafts_:[],parent_:z,immer_:e,// Whenever the modified draft contains a draft from another scope, we
// need to prevent auto-freezing so the unowned draft can be finalized.
canAutoFreeze_:!0,unfinalizedDrafts_:0}}function N(e){var t=e[c];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function x(e,t){t.unfinalizedDrafts_=t.drafts_.length;var r=t.drafts_[0];return void 0!==e&&e!==r?(r[c].modified_&&(E(t),f(4)),p(e)&&(e=R(t,e),t.parent_||K(t,e)),t.patches_&&D("Patches").generateReplacementPatches_(r[c].base_,e,t.patches_,t.inversePatches_)):e=R(t,r,[]),E(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==i?e:void 0}function R(e,t,r){if(j(t))return t;var n=t[c];if(!n)return v(t,(function(o,i){return I(e,n,t,o,i,r)})),t;if(n.scope_!==e)return t;if(!n.modified_)return K(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;var o=n.copy_,i=o,a=!1;3===n.type_&&(i=new Set(o),o.clear(),a=!0),v(i,(function(t,i){return I(e,n,o,t,i,r,a)})),K(e,o,!1),r&&e.patches_&&D("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function I(e,t,r,n,o,i,u){if(s(o)){var c=R(e,o,i&&t&&3!==t.type_&&// Set objects are atomic since they have no keys.
!b(t.assigned_,n)?i.concat(n):void 0);if(h(r,n,c),!s(c))return;e.canAutoFreeze_=!1}else u&&r.add(o);if(p(o)&&!j(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;R(e,o),t&&t.scope_.parent_||"symbol"===a(n)||!Object.prototype.propertyIsEnumerable.call(r,n)||K(e,o)}}function K(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&P(t,r)}var U={get:function(e,t){if(t===c)return e;var r=w(e);if(!b(r,t))return function(e,t,r){var n,o=L(t,r);return o?"value"in o?o.value:// This is a very special case, if the prop is a getter defined by the
// prototype, we should invoke it with the draft as context!
null===(n=o.get)||void 0===n?void 0:n.call(e.draft_):void 0}(e,r,t);var n=r[t];return e.finalized_||!p(n)?n:n===T(e.base_,t)?($(e),e.copy_[t]=B(n,e)):n},has:function(e,t){return t in w(e)},ownKeys:function(e){return Reflect.ownKeys(w(e))},set:function(e,t,r){var n,o,i=L(w(e),t);if(null!=i&&i.set)return i.set.call(e.draft_,r),!0;if(!e.modified_){var a=T(w(e),t),u=null==a?void 0:a[c];if(u&&u.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((n=r)===(o=a)?0!==n||1/n==1/o:n!=n&&o!=o)&&(void 0!==r||b(e.base_,t)))return!0;$(e),X(e)}return e.copy_[t]===r&&(// special case: handle new props with value 'undefined'
void 0!==r||t in e.copy_)||// special case: NaN
Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:function(e,t){return void 0!==T(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,$(e),X(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},// Note: We never coerce `desc.value` into an Immer draft, because we can't make
// the same guarantee in ES5 mode.
getOwnPropertyDescriptor:function(e,t){var r=w(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){f(11)},getPrototypeOf:function(e){return l(e.base_)},setPrototypeOf:function(){f(12)}},W={};function T(e,t){var r=e[c];return(r?w(r):e)[t]}function L(e,t){if(t in e)for(var r=l(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=l(r)}}function X(e){e.modified_||(e.modified_=!0,e.parent_&&X(e.parent_))}function $(e){e.copy_||(e.copy_=O(e.base_,e.scope_.immer_.useStrictShallowCopy_))}v(U,(function(e,t){W[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),W.deleteProperty=function(e,t){return W.set.call(this,e,t,void 0)},W.set=function(e,t,r){return U.set.call(this,e[0],t,r,e[0])};var q=function(){return t=function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var o=t;t=e;var u=r;return function(){for(var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return u.produce(r,(function(r){var n;return(n=t).call.apply(n,[e,r].concat(i))}))}}var c;if("function"!=typeof t&&f(6),void 0!==n&&"function"!=typeof n&&f(7),p(e)){var l=M(r),s=B(e,void 0),y=!0;try{c=t(s),y=!1}finally{y?E(l):C(l)}return k(l,n),x(c,l)}if(!e||"object"!==a(e)){if(void 0===(c=t(e))&&(c=e),c===i&&(c=void 0),r.autoFreeze_&&P(c,!0),n){var _=[],v=[];D("Patches").generateReplacementPatches_(e,c,_,v),n(_,v)}return c}f(1)},this.produceWithPatches=function(e,t){return"function"==typeof e?function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return r.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(o))}))}:[r.produce(e,t,(function(e,t){n=e,o=t})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),"boolean"==typeof(null==t?void 0:t.useStrictShallowCopy)&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)},(r=[{key:"createDraft",value:function(e){p(e)||f(8),s(e)&&(e=G(e));var t=M(this),r=B(e,void 0);return r[c].isManual_=!0,C(t),r}},{key:"finishDraft",value:function(e,t){var r=e&&e[c];r&&r.isManual_||f(9);var n=r.scope_;return k(n,t),x(void 0,n)}
/**
         * Pass true to automatically freeze all copies created by Immer.
         *
         * By default, auto-freezing is enabled.
         */},{key:"setAutoFreeze",value:function(e){this.autoFreeze_=e}
/**
         * Pass true to enable strict shallow copy.
         *
         * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
         */},{key:"setUseStrictShallowCopy",value:function(e){this.useStrictShallowCopy_=e}},{key:"applyPatches",value:function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));var o=D("Patches").applyPatches_;return s(e)?o(e,t):this.produce(e,(function(e){return o(e,t)}))}}])&&e(t.prototype,r),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,n}();function B(e,t){var r=m(e)?D("MapSet").proxyMap_(e,t):g(e)?D("MapSet").proxySet_(e,t):function(e,t){var r=Array.isArray(e),n={type_:r?1:0,// Track which produce call this is associated with.
scope_:t?t.scope_:F(),// True for both shallow and deep changes.
modified_:!1,// Used during finalization.
finalized_:!1,// Track which properties have been assigned (true) or deleted (false).
assigned_:{},// The parent draft state.
parent_:t,// The base state.
base_:e,// The base proxy.
draft_:null,// set below
// The base copy with any updated values.
copy_:null,// Called by the `produce` function.
revoke_:null,isManual_:!1},o=n,i=U;r&&(o=[n],i=W);var a=Proxy.revocable(o,i),u=a.revoke,c=a.proxy;return n.draft_=c,n.revoke_=u,c}(e,t);return(t?t.scope_:F()).drafts_.push(r),r}function G(e){return s(e)||f(10),H(e)}function H(e){if(!p(e)||j(e))return e;var t,r=e[c];if(r){if(!r.modified_)return r.base_;r.finalized_=!0,t=O(e,r.scope_.immer_.useStrictShallowCopy_)}else t=O(e,!0);return v(t,(function(e,r){h(t,e,H(r))})),r&&(r.finalized_=!1),t}var J=new q;r("p",J.produce);J.produceWithPatches.bind(J),J.setAutoFreeze.bind(J),J.setUseStrictShallowCopy.bind(J),J.applyPatches.bind(J),J.createDraft.bind(J),J.finishDraft.bind(J)}}}))}();