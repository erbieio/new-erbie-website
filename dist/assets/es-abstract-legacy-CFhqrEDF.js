!function(){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(e)}System.register(["./get-intrinsic-legacy-CXG_Wl3y.js","./call-bind-legacy-GKmFuFy5.js","./es-errors-legacy-BGzuxDfi.js","./hasown-legacy-DQJLwrtL.js","./has-property-descriptors-legacy-BIFhRJfA.js","./es-define-property-legacy--y_Ghgnh.js","./is-callable-legacy-mO_k_9mf.js"],(function(e,t){"use strict";var n,o,i,u,f,a,c,s,l;return{setters:[function(r){n=r.g},function(r){o=r.c,i=r.r},function(r){u=r.s,f=r.t},function(r){a=r.h},function(r){c=r.h},function(r){s=r.r},function(r){l=r.r}],execute:function(){var t,b,y,p;function v(){return p?y:(p=1,// http://262.ecma-international.org/5.1/#sec-9.11
y=l())}e({a:v,b:function(){if(H)return z;H=1;var r=n,e=r("%Symbol.species%",!0),t=f,o=ar(),i=or();// https://262.ecma-international.org/6.0/#sec-speciesconstructor
return z=function(r,n){if("Object"!==i(r))throw new t("Assertion failed: Type(O) is not Object");var u=r.constructor;if(void 0===u)return n;if("Object"!==i(u))throw new t("O.constructor is not an Object");var f=e?u[e]:void 0;if(null==f)return n;if(o(f))return f;throw new t("no constructor found")},z},c:or,r:function(){if(b)return t;b=1;var r=n,e=o,i=u,f=r("%Promise.resolve%",!0),a=f&&e(f);// https://262.ecma-international.org/9.0/#sec-promise-resolve
return t=function(r,e){if(!a)throw new i("This environment does not support Promises.");return a(r,e)}}});var g,w,m,h,d,j,S,O,V,A,D,G,P,W,E,x,C,N,T,_,I,B,K,q,F,J,L,R,U,Z,k,z,H,M={exports:{}};function Q(){return w?g:(w=1,// TODO: remove, semver-major
g=n)}function X(){if(h)return m;h=1;var e=f,t=a,n={__proto__:null,"[[Configurable]]":!0,"[[Enumerable]]":!0,"[[Get]]":!0,"[[Set]]":!0,"[[Value]]":!0,"[[Writable]]":!0};// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
return m=function(o){if(!o||"object"!==r(o))return!1;for(var i in o)// eslint-disable-line
if(t(o,i)&&!n[i])return!1;var u=t(o,"[[Value]]")||t(o,"[[Writable]]"),f=t(o,"[[Get]]")||t(o,"[[Set]]");if(u&&f)throw new e("Property Descriptors may not be both accessor and data descriptors");return!0}}function Y(){if(O)return S;O=1;var r=c,e=s(),t=r.hasArrayLengthDefineBug(),o=t&&function(){if(j)return d;j=1;var r=n("%Array%"),e=!r.isArray&&i()("Object.prototype.toString");return d=r.isArray||function(r){return"[object Array]"===e(r)}}(),u=i()("Object.prototype.propertyIsEnumerable");// eslint-disable-next-line max-params
return S=function(r,n,i,f,a,c){if(!e){if(!r(c))// ES3 does not support getters/setters
return!1;if(!c["[[Configurable]]"]||!c["[[Writable]]"])return!1;// fallback for ES3
if(a in f&&u(f,a)!==!!c["[[Enumerable]]"])// a non-enumerable existing property
return!1;// property does not exist at all, or exists but is enumerable
var s=c["[[Value]]"];// eslint-disable-next-line no-param-reassign
// will use [[Define]]
return f[a]=s,n(f[a],s)}return t&&"length"===a&&"[[Value]]"in c&&o(f)&&f.length!==c["[[Value]]"]?(// eslint-disable-next-line no-param-reassign
f.length=c["[[Value]]"],f.length===c["[[Value]]"]):(e(f,a,i(c)),!0)},S}function $(){return A?V:(A=1,V=function(r){if(void 0===r)return r;var e={};return"[[Value]]"in r&&(e.value=r["[[Value]]"]),"[[Writable]]"in r&&(e.writable=!!r["[[Writable]]"]),"[[Get]]"in r&&(e.get=r["[[Get]]"]),"[[Set]]"in r&&(e.set=r["[[Set]]"]),"[[Enumerable]]"in r&&(e.enumerable=!!r["[[Enumerable]]"]),"[[Configurable]]"in r&&(e.configurable=!!r["[[Configurable]]"]),e})}function rr(){if(G)return D;G=1;var r=f,e=X(),t=$();// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor
return D=function(n){if(void 0!==n&&!e(n))throw new r("Assertion failed: `Desc` must be a Property Descriptor");return t(n)}}function er(){if(W)return P;W=1;var r=f,e=a,t=X();// https://262.ecma-international.org/5.1/#sec-8.10.2
return P=function(n){if(void 0===n)return!1;if(!t(n))throw new r("Assertion failed: `Desc` must be a Property Descriptor");return!(!e(n,"[[Value]]")&&!e(n,"[[Writable]]"))}}function tr(){return x?E:(x=1,// https://262.ecma-international.org/6.0/#sec-ispropertykey
E=function(e){return"string"==typeof e||"symbol"===r(e)})}function nr(){if(_)return T;_=1;var r=N?C:(N=1,C=Number.isNaN||function(r){return r!=r});// http://262.ecma-international.org/5.1/#sec-9.12
return T=function(e,t){return e===t?// 0 === -0, but they are not identical.
0!==e||1/e==1/t:r(e)&&r(t)}}function or(){if(q)return K;q=1;var e=B?I:(B=1,// https://262.ecma-international.org/5.1/#sec-8
I=function(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"===r(e)?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":void 0});// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values
return K=function(t){return"symbol"===r(t)?"Symbol":"bigint"==typeof t?"BigInt":e(t)}}function ir(){return J?F:(J=1,// http://262.ecma-international.org/5.1/#sec-9.2
F=function(r){return!!r})}function ur(){if(R)return L;R=1;var r=a,e=f,t=or(),n=ir(),o=v();// https://262.ecma-international.org/5.1/#sec-8.10.5
return L=function(i){if("Object"!==t(i))throw new e("ToPropertyDescriptor requires an object");var u={};if(r(i,"enumerable")&&(u["[[Enumerable]]"]=n(i.enumerable)),r(i,"configurable")&&(u["[[Configurable]]"]=n(i.configurable)),r(i,"value")&&(u["[[Value]]"]=i.value),r(i,"writable")&&(u["[[Writable]]"]=n(i.writable)),r(i,"get")){var f=i.get;if(void 0!==f&&!o(f))throw new e("getter must be a function");u["[[Get]]"]=f}if(r(i,"set")){var a=i.set;if(void 0!==a&&!o(a))throw new e("setter must be a function");u["[[Set]]"]=a}if((r(u,"[[Get]]")||r(u,"[[Set]]"))&&(r(u,"[[Value]]")||r(u,"[[Writable]]")))throw new e("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");return u}}function fr(){if(Z)return U;Z=1;var r=f,e=X(),t=Y(),n=rr(),o=er(),i=tr(),u=nr(),a=ur(),c=or();// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow
return U=function(f,s,l){if("Object"!==c(f))throw new r("Assertion failed: Type(O) is not Object");if(!i(s))throw new r("Assertion failed: IsPropertyKey(P) is not true");var b=e(l)?l:a(l);if(!e(b))throw new r("Assertion failed: Desc is not a valid Property Descriptor");return t(o,u,n,f,s,b)}}function ar(){if(k)return M.exports;k=1;var r=Q()("%Reflect.construct%",!0),e=fr();try{e({},"",{"[[Get]]":function(){}})}catch(o){// Accessor properties aren't supported
e=null}// https://262.ecma-international.org/6.0/#sec-isconstructor
if(e&&r){var t={},n={};e(n,"length",{"[[Get]]":function(){throw t},"[[Enumerable]]":!0}),M.exports=function(e){try{// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
r(e,n)}catch(o){return o===t}}}else M.exports=function(r){// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
return"function"==typeof r&&!!r.prototype};return M.exports}}}}))}();
