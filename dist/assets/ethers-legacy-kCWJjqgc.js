!function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function e(t,e,r){n(t,e),e.set(t,r)}function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function r(t,e,n){return(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==f(e)?e:e+""}function a(t,e){return t.get(u(t,e))}function o(t,e,n){return t.set(u(t,e),n),n}function u(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}System.register([],(function(i,s){"use strict";return{execute:function(){var s;i("f",(
/**
             *  Converts %%value%% into a //decimal string// using 18 decimal places.
             */
function(t){return e=t,n=18,r=18,r=U(n,"unit"),P.fromValue(e,r,{decimals:r,width:512}).toString();var e,n,r}));/* Do NOT modify this file; see /src.ts/_admin/update-version.ts */
/**
             *  The current version of Ethers.
             */
var c="6.12.1";
/**
             *  Property helper functions.
             *
             *  @_subsection api/utils:Properties  [about-properties]
             */
/**
             *  Assigns the %%values%% to %%target%% as read-only values.
             *
             *  It %%types%% is specified, the values are checked.
             */function h(t,e,n){for(var r in e){var i=e[r];Object.defineProperty(t,r,{enumerable:!0,value:i,writable:!1})}}
/**
             *  All errors in ethers include properties to ensure they are both
             *  human-readable (i.e. ``.message``) and machine-readable (i.e. ``.code``).
             *
             *  The [[isError]] function can be used to check the error ``code`` and
             *  provide a type guard for the properties present on that error interface.
             *
             *  @_section: api/utils/errors:Errors  [about-errors]
             */function v(t){if(null==t)return"null";if(Array.isArray(t))return"[ "+t.map(v).join(", ")+" ]";if(t instanceof Uint8Array){for(var e="0123456789abcdef",n="0x",r=0;r<t.length;r++)n+=e[t[r]>>4],n+=e[15&t[r]];return n}if("object"===f(t)&&"function"==typeof t.toJSON)return v(t.toJSON());switch(f(t)){case"boolean":case"symbol":case"number":return t.toString();case"bigint":return BigInt(t).toString();case"string":return JSON.stringify(t);case"object":var i=Object.keys(t);return i.sort(),"{ "+i.map((function(e){return"".concat(v(e),": ").concat(v(t[e]))})).join(", ")+" }"}return"[ COULD NOT SERIALIZE ]"}
/**
             *  Returns a new Error configured to the format ethers emits errors, with
             *  the %%message%%, [[api:ErrorCode]] %%code%% and additional properties
             *  for the corresponding EthersError.
             *
             *  Each error in ethers includes the version of ethers, a
             *  machine-readable [[ErrorCode]], and depending on %%code%%, additional
             *  required properties. The error message will also include the %%message%%,
             *  ethers version, %%code%% and all additional properties, serialized.
             */
/**
             *  Throws an EthersError with %%message%%, %%code%% and additional error
             *  %%info%% when %%check%% is falsish..
             *
             *  @see [[api:makeError]]
             */
function m(t,e,n,r){if(!t)throw function(t,e,n){var r,i=t,a=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error("value will overwrite populated values: ".concat(v(n)));for(var o in n)if("shortMessage"!==o){var u=n[o];//                try {
a.push(o+"="+v(u))}}switch(a.push("code=".concat(e)),a.push("version=".concat(c)),a.length&&(t+=" ("+a.join(", ")+")"),e){case"INVALID_ARGUMENT":r=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":r=new RangeError(t);break;default:r=new Error(t)}return h(r,{code:e}),n&&Object.assign(r,n),null==r.shortMessage&&h(r,{shortMessage:i}),r}(e,n,r)}
/**
             *  A simple helper to simply ensuring provided arguments match expected
             *  constraints, throwing if not.
             *
             *  In TypeScript environments, the %%check%% has been asserted true, so
             *  any further code does not need additional compile-time checks.
             */function g(t,e,n,r){m(t,e,"INVALID_ARGUMENT",{argument:n,value:r})}
/**
             *  Get a typed Uint8Array for %%value%%. If already a Uint8Array
             *  the original %%value%% is returned; if a copy is required use
             *  [[getBytesCopy]].
             *
             *  @see: getBytesCopy
             */
function d(t,e){
/**
             *  Some data helpers.
             *
             *
             *  @_subsection api/utils:Data Helpers  [about-data]
             */return function(t,e,n){if(t instanceof Uint8Array)return t;if("string"==typeof t&&t.match(/^0x([0-9a-f][0-9a-f])*$/i)){for(var r=new Uint8Array((t.length-2)/2),i=2,a=0;a<r.length;a++)r[a]=parseInt(t.substring(i,i+2),16),i+=2;return r}g(!1,"invalid BytesLike value",e,t)}(t,e)}
/**
             *  Some mathematic operations.
             *
             *  @_subsection: api/utils:Math Helpers  [about-maths]
             */["NFD","NFC","NFKD","NFKC"].reduce((function(t,e){try{// General test for normalize
/* c8 ignore start */if("test"!=="test".normalize(e))throw new Error("bad");/* c8 ignore stop */if("NFD"===e)/* c8 ignore start */if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken");/* c8 ignore stop */t.push(e)}catch(n){}return t}),[]);var y=BigInt(0),b=BigInt(1),p=9007199254740991;
/**
             *  Convert %%value%% from a twos-compliment representation of %%width%%
             *  bits to its value.
             *
             *  If the highest bit is ``1``, the result will be negative.
             */
function w(t,e){var n=N(t,"value"),r=BigInt(U(e,"width"));// Top bit set; treat as a negative value
return m(n>>r===y,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>r-b?-((~n&(b<<r)-b)+b):n}
/**
             *  Mask %%value%% with a bitmask of %%bits%% ones.
             */function I(t,e){var n=N(t,"value"),r=BigInt(U(e,"bits"));return n&(b<<r)-b}
/**
             *  Gets a BigInt from %%value%%. If it is an invalid value for
             *  a BigInt, then an ArgumentError will be thrown for %%name%%.
             */function k(t,e){switch(f(t)){case"bigint":return t;case"number":return g(Number.isInteger(t),"underflow",e||"value",t),g(t>=-p&&t<=p,"overflow",e||"value",t),BigInt(t);case"string":try{if(""===t)throw new Error("empty string");return"-"===t[0]&&"-"!==t[1]?-BigInt(t.substring(1)):BigInt(t)}catch(n){g(!1,"invalid BigNumberish string: ".concat(n.message),e||"value",t)}}g(!1,"invalid BigNumberish value",e||"value",t)}
/**
             *  Returns %%value%% as a bigint, validating it is valid as a bigint
             *  value and that it is positive.
             */function N(t,e){var n=k(t,e);return m(n>=y,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}var S="0123456789abcdef";
/*
             * Converts %%value%% to a BigInt. If %%value%% is a Uint8Array, it
             * is treated as Big Endian data.
             */
/**
             *  Gets a //number// from %%value%%. If it is an invalid value for
             *  a //number//, then an ArgumentError will be thrown for %%name%%.
             */
function U(t,e){switch(f(t)){case"bigint":return g(t>=-p&&t<=p,"overflow",e||"value",t),Number(t);case"number":return g(Number.isInteger(t),"underflow",e||"value",t),g(t>=-p&&t<=p,"overflow",e||"value",t),t;case"string":try{if(""===t)throw new Error("empty string");return U(BigInt(t),e)}catch(n){g(!1,"invalid numeric string: ".concat(n.message),e||"value",t)}}g(!1,"invalid numeric value",e||"value",t)}
/**
             *  The **FixedNumber** class permits using values with decimal places,
             *  using fixed-pont math.
             *
             *  Fixed-point math is still based on integers under-the-hood, but uses an
             *  internal offset to store fractional components below, and each operation
             *  corrects for this after each operation.
             *
             *  @_section: api/utils/fixed-point-math:Fixed-Point Maths  [about-fixed-point-math]
             */for(var E=BigInt(-1),A=BigInt(0),F=BigInt(1),B=BigInt(5),T={},C="0000";C.length<80;)C+=C;// Returns a string "1" followed by decimal "0"s
function x(t){for(var e=C;e.length<t;)e+=e;return BigInt("1"+e.substring(0,t))}function M(t,e,n){var r=BigInt(e.width);if(e.signed){var i=F<<r-F;m(null==n||t>=-i&&t<i,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t=t>A?w(I(t,r),r):-w(I(-t,r),r)}else{var a=F<<r;m(null==n||t>=0&&t<a,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t=(t%a+a)%a&a-F}return t}function R(t){"number"==typeof t&&(t="fixed128x".concat(t));var e=!0,n=128,r=18;if("string"==typeof t)// Parse the format string
if("fixed"===t);else if("ufixed"===t)e=!1;else{var i=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);g(i,"invalid fixed format","format",t),e="u"!==i[1],n=parseInt(i[2]),r=parseInt(i[3])}else if(t){// Extract the values from the object
var a=t,o=function(t,e,n){return null==a[t]?n:(g(f(a[t])===e,"invalid fixed format ("+t+" not "+e+")","format."+t,a[t]),a[t])};e=o("signed","boolean",e),n=o("width","number",n),r=o("decimals","number",r)}return g(n%8==0,"invalid FixedNumber width (not byte aligned)","format.width",n),g(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r),{signed:e,width:n,decimals:r,name:(e?"":"u")+"fixed"+String(n)+"x"+String(r)}}
/**
             *  A FixedNumber represents a value over its [[FixedFormat]]
             *  arithmetic field.
             *
             *  A FixedNumber can be used to perform math, losslessly, on
             *  values which have decmial places.
             *
             *  A FixedNumber has a fixed bit-width to store values in, and stores all
             *  values internally by multiplying the value by 10 raised to the power of
             *  %%decimals%%.
             *
             *  If operations are performed that cause a value to grow too high (close to
             *  positive infinity) or too low (close to negative infinity), the value
             *  is said to //overflow//.
             *
             *  For example, an 8-bit signed value, with 0 decimals may only be within
             *  the range ``-128`` to ``127``; so ``-128 - 1`` will overflow and become
             *  ``127``. Likewise, ``127 + 1`` will overflow and become ``-127``.
             *
             *  Many operation have a normal and //unsafe// variant. The normal variant
             *  will throw a [[NumericFaultError]] on any overflow, while the //unsafe//
             *  variant will silently allow overflow, corrupting its value value.
             *
             *  If operations are performed that cause a value to become too small
             *  (close to zero), the value loses precison and is said to //underflow//.
             *
             *  For example, an value with 1 decimal place may store a number as small
             *  as ``0.1``, but the value of ``0.1 / 2`` is ``0.05``, which cannot fit
             *  into 1 decimal place, so underflow occurs which means precision is lost
             *  and the value becomes ``0``.
             *
             *  Some operations have a normal and //signalling// variant. The normal
             *  variant will silently ignore underflow, while the //signalling// variant
             *  will thow a [[NumericFaultError]] on underflow.
             */
var j=new WeakMap,_=new WeakMap,O=new WeakMap,L=new WeakSet,P=function(){// Use this when changing this file to get some typing info,
// but then switch to any to mask the internal type
//constructor(guard: any, value: bigint, format: _FixedFormat) {
/**
                 *  @private
                 */
function i(t,a,u){var l,s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n(l=this,s=L),s.add(l),
/**
                 *  The specific fixed-point arithmetic field for this value.
                 */
r(this,"format",void 0),e(this,j,void 0),// The actual value (accounting for decimals)
e(this,_,void 0),// A base-10 value to multiple values by to maintain the magnitude
e(this,O,void 0),
/**
                 *  This is a property so console.log shows a human-meaningful value.
                 *
                 *  @private
                 */
r(this,"_value",void 0),
/**
             *  Many classes use file-scoped values to guard the constructor,
             *  making it effectively private. This facilitates that pattern
             *  by ensuring the %%givenGaurd%% matches the file-scoped %%guard%%,
             *  throwing if not, indicating the %%className%% if provided.
             */
function(t,e,n){if(t!==e){var r=n,i="new";i+=" "+n,m(!1,"private constructor; use ".concat(r+=".","from* methods"),"UNSUPPORTED_OPERATION",{operation:i})}}(t,T,"FixedNumber"),o(_,this,a),o(j,this,u);var f=function(t,e){var n="";t<A&&(n="-",t*=E);var r=t.toString();// No decimal point for whole values
if(0===e)return n+r;// Pad out to the whole component (including a whole digit)
for(;r.length<=e;)r=C+r;// Insert the decimal point
var i=r.length-e;// Trim the whole component (leaving at least one 0)
for(r=r.substring(0,i)+"."+r.substring(i);"0"===r[0]&&"."!==r[1];)r=r.substring(1);// Trim the decimal component (leaving at least one 0)
for(;"0"===r[r.length-1]&&"."!==r[r.length-2];)r=r.substring(0,r.length-1);return n+r}(a,u.decimals);h(this,{format:u.name,_value:f}),o(O,this,x(u.decimals))}
/**
                 *  If true, negative values are permitted, otherwise only
                 *  positive values and zero are allowed.
                 */return s=i,c=[{key:"fromValue",value:function(t,e,n){var r=null==e?0:U(e),a=R(n),o=k(t,"value"),u=r-a.decimals;if(u>0){var l=x(u);m(o%l===A,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),o/=l}else u<0&&(o*=x(-u));return M(o,a,"fromValue"),new i(T,o,a)}
/**
                 *  Creates a new [[FixedNumber]] for %%value%% with %%format%%.
                 *
                 *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
                 *  in %%format%%, either due to overflow or underflow (precision loss).
                 */},{key:"fromString",value:function(t,e){var n=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);g(n&&n[2].length+n[3].length>0,"invalid FixedNumber string value","value",t);// Pad out the decimals
for(var r=R(e),a=n[2]||"0",o=n[3]||"";o.length<r.decimals;)o+=C;// Check precision is safe
m(o.substring(r.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),// Remove extra padding
o=o.substring(0,r.decimals);var u=BigInt(n[1]+a+o);return M(u,r,"fromString"),new i(T,u,r)}
/**
                 *  Creates a new [[FixedNumber]] with the big-endian representation
                 *  %%value%% with %%format%%.
                 *
                 *  This will throw a [[NumericFaultError]] if %%value%% cannot fit
                 *  in %%format%% due to overflow.
                 */},{key:"fromBytes",value:function(t,e){var n=function(t){if(t instanceof Uint8Array){var e,n="0x0",r=l(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;n+=S[i>>4],n+=S[15&i]}}catch(a){r.e(a)}finally{r.f()}return BigInt(n)}return k(t)}(d(t,"value")),r=R(e);return r.signed&&(n=w(n,r.width)),M(n,r,"fromBytes"),new i(T,n,r)}}],(f=[{key:"signed",get:function(){return a(j,this).signed}
/**
                 *  The number of bits available to store the value.
                 */},{key:"width",get:function(){return a(j,this).width}
/**
                 *  The number of decimal places in the fixed-point arithment field.
                 */},{key:"decimals",get:function(){return a(j,this).decimals}
/**
                 *  The value as an integer, based on the smallest unit the
                 *  [[decimals]] allow.
                 */},{key:"value",get:function(){return a(_,this)}},{key:"addUnsafe",value:
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% added
                 *  to %%other%%, ignoring overflow.
                 */
function(t){return u(L,this,V).call(this,t)}
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% added
                 *  to %%other%%. A [[NumericFaultError]] is thrown if overflow
                 *  occurs.
                 */},{key:"add",value:function(t){return u(L,this,V).call(this,t,"add")}},{key:"subUnsafe",value:
/**
                 *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
                 *  from %%this%%, ignoring overflow.
                 */
function(t){return u(L,this,$).call(this,t)}
/**
                 *  Returns a new [[FixedNumber]] with the result of %%other%% subtracted
                 *  from %%this%%. A [[NumericFaultError]] is thrown if overflow
                 *  occurs.
                 */},{key:"sub",value:function(t){return u(L,this,$).call(this,t,"sub")}},{key:"mulUnsafe",value:
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
                 *  by %%other%%, ignoring overflow and underflow (precision loss).
                 */
function(t){return u(L,this,W).call(this,t)}
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
                 *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
                 *  occurs.
                 */},{key:"mul",value:function(t){return u(L,this,W).call(this,t,"mul")}
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% multiplied
                 *  by %%other%%. A [[NumericFaultError]] is thrown if overflow
                 *  occurs or if underflow (precision loss) occurs.
                 */},{key:"mulSignal",value:function(t){u(L,this,D).call(this,t);var e=a(_,this)*a(_,t);return m(e%a(O,this)===A,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),u(L,this,z).call(this,e/a(O,this),"mulSignal")}},{key:"divUnsafe",value:
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% divided
                 *  by %%other%%, ignoring underflow (precision loss). A
                 *  [[NumericFaultError]] is thrown if overflow occurs.
                 */
function(t){return u(L,this,J).call(this,t)}
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% divided
                 *  by %%other%%, ignoring underflow (precision loss). A
                 *  [[NumericFaultError]] is thrown if overflow occurs.
                 */},{key:"div",value:function(t){return u(L,this,J).call(this,t,"div")}
/**
                 *  Returns a new [[FixedNumber]] with the result of %%this%% divided
                 *  by %%other%%. A [[NumericFaultError]] is thrown if underflow
                 *  (precision loss) occurs.
                 */},{key:"divSignal",value:function(t){m(a(_,t)!==A,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),u(L,this,D).call(this,t);var e=a(_,this)*a(O,this);return m(e%a(_,t)===A,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),u(L,this,z).call(this,e/a(_,t),"divSignal")}
/**
                 *  Returns a comparison result between %%this%% and %%other%%.
                 *
                 *  This is suitable for use in sorting, where ``-1`` implies %%this%%
                 *  is smaller, ``1`` implies %%this%% is larger and ``0`` implies
                 *  both are equal.
                 */},{key:"cmp",value:function(t){var e=this.value,n=t.value,r=this.decimals-t.decimals;// Coerce a and b to the same magnitude
// Comnpare
return r>0?n*=x(r):r<0&&(e*=x(-r)),e<n?-1:e>n?1:0}
/**
                 *  Returns true if %%other%% is equal to %%this%%.
                 */},{key:"eq",value:function(t){return 0===this.cmp(t)}
/**
                 *  Returns true if %%other%% is less than to %%this%%.
                 */},{key:"lt",value:function(t){return this.cmp(t)<0}
/**
                 *  Returns true if %%other%% is less than or equal to %%this%%.
                 */},{key:"lte",value:function(t){return this.cmp(t)<=0}
/**
                 *  Returns true if %%other%% is greater than to %%this%%.
                 */},{key:"gt",value:function(t){return this.cmp(t)>0}
/**
                 *  Returns true if %%other%% is greater than or equal to %%this%%.
                 */},{key:"gte",value:function(t){return this.cmp(t)>=0}
/**
                 *  Returns a new [[FixedNumber]] which is the largest **integer**
                 *  that is less than or equal to %%this%%.
                 *
                 *  The decimal component of the result will always be ``0``.
                 */},{key:"floor",value:function(){var t=a(_,this);return a(_,this)<A&&(t-=a(O,this)-F),t=a(_,this)/a(O,this)*a(O,this),u(L,this,z).call(this,t,"floor")}
/**
                 *  Returns a new [[FixedNumber]] which is the smallest **integer**
                 *  that is greater than or equal to %%this%%.
                 *
                 *  The decimal component of the result will always be ``0``.
                 */},{key:"ceiling",value:function(){var t=a(_,this);return a(_,this)>A&&(t+=a(O,this)-F),t=a(_,this)/a(O,this)*a(O,this),u(L,this,z).call(this,t,"ceiling")}
/**
                 *  Returns a new [[FixedNumber]] with the decimal component
                 *  rounded up on ties at %%decimals%% places.
                 */},{key:"round",value:function(t){// Not enough precision to not already be rounded
if(null==t&&(t=0),t>=this.decimals)return this;var e=this.decimals-t,n=B*x(e-1),r=this.value+n,o=x(e);return M(r=r/o*o,a(j,this),"round"),new i(T,r,a(j,this))}
/**
                 *  Returns true if %%this%% is equal to ``0``.
                 */},{key:"isZero",value:function(){return a(_,this)===A}
/**
                 *  Returns true if %%this%% is less than ``0``.
                 */},{key:"isNegative",value:function(){return a(_,this)<A}
/**
                 *  Returns the string representation of %%this%%.
                 */},{key:"toString",value:function(){return this._value}
/**
                 *  Returns a float approximation.
                 *
                 *  Due to IEEE 754 precission (or lack thereof), this function
                 *  can only return an approximation and most values will contain
                 *  rounding errors.
                 */},{key:"toUnsafeFloat",value:function(){return parseFloat(this.toString())}
/**
                 *  Return a new [[FixedNumber]] with the same value but has had
                 *  its field set to %%format%%.
                 *
                 *  This will throw if the value cannot fit into %%format%%.
                 */},{key:"toFormat",value:function(t){return i.fromString(this.toString(),t)}
/**
                 *  Creates a new [[FixedNumber]] for %%value%% divided by
                 *  %%decimal%% places with %%format%%.
                 *
                 *  This will throw a [[NumericFaultError]] if %%value%% (once adjusted
                 *  for %%decimals%%) cannot fit in %%format%%, either due to overflow
                 *  or underflow (precision loss).
                 */}])&&t(s.prototype,f),c&&t(s,c),Object.defineProperty(s,"prototype",{writable:!1}),s;var s,f,c}();function D(t){g(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)}function z(t,e){
/*
                            const width = BigInt(this.width);
                            if (this.signed) {
                                const limit = (BN_1 << (width - BN_1));
                                assert(safeOp == null || (val >= -limit  && val < limit), "overflow", "NUMERIC_FAULT", {
                                    operation: <string>safeOp, fault: "overflow", value: val
                                });
                    
                                if (val > BN_0) {
                                    val = fromTwos(mask(val, width), width);
                                } else {
                                    val = -fromTwos(mask(-val, width), width);
                                }
                    
                            } else {
                                const masked = mask(val, width);
                                assert(safeOp == null || (val >= 0 && val === masked), "overflow", "NUMERIC_FAULT", {
                                    operation: <string>safeOp, fault: "overflow", value: val
                                });
                                val = masked;
                            }
                    */return t=M(t,a(j,this),e),new s(T,t,a(j,this))}function V(t,e){return u(L,this,D).call(this,t),u(L,this,z).call(this,a(_,this)+a(_,t),e)}function $(t,e){return u(L,this,D).call(this,t),u(L,this,z).call(this,a(_,this)-a(_,t),e)}function W(t,e){return u(L,this,D).call(this,t),u(L,this,z).call(this,a(_,this)*a(_,t)/a(O,this),e)}function J(t,e){return m(a(_,t)!==A,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),u(L,this,D).call(this,t),u(L,this,z).call(this,a(_,this)*a(O,this)/a(_,t),e)}//const f1 = FixedNumber.fromString("12.56", "fixed16x2");
//const f2 = FixedNumber.fromString("0.3", "fixed16x2");
//console.log(f1.divSignal(f2));
//const BUMP = FixedNumber.from("0.5");
/**
             *  Most interactions with Ethereum requires integer values, which use
             *  the smallest magnitude unit.
             *
             *  For example, imagine dealing with dollars and cents. Since dollars
             *  are divisible, non-integer values are possible, such as ``$10.77``.
             *  By using the smallest indivisible unit (i.e. cents), the value can
             *  be kept as the integer ``1077``.
             *
             *  When receiving decimal input from the user (as a decimal string),
             *  the value should be converted to an integer and when showing a user
             *  a value, the integer value should be converted to a decimal string.
             *
             *  This creates a clear distinction, between values to be used by code
             *  (integers) and values used for display logic to users (decimals).
             *
             *  The native unit in Ethereum, //ether// is divisible to 18 decimal places,
             *  where each individual unit is called a //wei//.
             *
             *  @_subsection api/utils:Unit Conversion  [about-units]
             */
/**
             *  Converts %%value%% into a //decimal string//, assuming %%unit%% decimal
             *  places. The %%unit%% may be the number of decimal places or the name of
             *  a unit (e.g. ``"gwei"`` for 9 decimal places).
             *
             */
s=P}}}))}();
