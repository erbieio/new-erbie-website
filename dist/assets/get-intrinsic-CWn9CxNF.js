import{e as N,_ as O,r as $,a as G,s as T,t as k,u as C}from"./es-errors-DzOT6E3C.js";import{h as M}from"./has-symbols-eVqrYdw7.js";import{h as j}from"./has-proto-JnoBQRdH.js";import{f as W}from"./function-bind-BbkWVFrm.js";import{h as D}from"./hasown-DYqjtFKE.js";var r,J=N,V=O,z=$,q=G,P=T,d=k,L=C,x=Function,R=function(i){try{return x('"use strict"; return ('+i+").constructor;")()}catch(t){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(i){c=null}var w=function(){throw new d},Y=c?function(){try{return arguments.callee,w}catch(i){try{return c(arguments,"callee").get}catch(t){return w}}}():w,u=M(),H=j(),o=Object.getPrototypeOf||(H?function(i){return i.__proto__}:null),A={},K=typeof Uint8Array>"u"||!o?r:o(Uint8Array),s={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?r:ArrayBuffer,"%ArrayIteratorPrototype%":u&&o?o([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":typeof Atomics>"u"?r:Atomics,"%BigInt%":typeof BigInt>"u"?r:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?r:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?r:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":J,"%eval%":eval,"%EvalError%":V,"%Float32Array%":typeof Float32Array>"u"?r:Float32Array,"%Float64Array%":typeof Float64Array>"u"?r:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?r:FinalizationRegistry,"%Function%":x,"%GeneratorFunction%":A,"%Int8Array%":typeof Int8Array>"u"?r:Int8Array,"%Int16Array%":typeof Int16Array>"u"?r:Int16Array,"%Int32Array%":typeof Int32Array>"u"?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":u&&o?o(o([][Symbol.iterator]())):r,"%JSON%":typeof JSON=="object"?JSON:r,"%Map%":typeof Map>"u"?r:Map,"%MapIteratorPrototype%":typeof Map>"u"||!u||!o?r:o(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?r:Promise,"%Proxy%":typeof Proxy>"u"?r:Proxy,"%RangeError%":z,"%ReferenceError%":q,"%Reflect%":typeof Reflect>"u"?r:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?r:Set,"%SetIteratorPrototype%":typeof Set>"u"||!u||!o?r:o(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":u&&o?o(""[Symbol.iterator]()):r,"%Symbol%":u?Symbol:r,"%SyntaxError%":P,"%ThrowTypeError%":Y,"%TypedArray%":K,"%TypeError%":d,"%Uint8Array%":typeof Uint8Array>"u"?r:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?r:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?r:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?r:Uint32Array,"%URIError%":L,"%WeakMap%":typeof WeakMap>"u"?r:WeakMap,"%WeakRef%":typeof WeakRef>"u"?r:WeakRef,"%WeakSet%":typeof WeakSet>"u"?r:WeakSet};if(o)try{null.error}catch(i){var Q=o(o(i));s["%Error.prototype%"]=Q}var X=function i(t){var n;if(t==="%AsyncFunction%")n=R("async function () {}");else if(t==="%GeneratorFunction%")n=R("function* () {}");else if(t==="%AsyncGeneratorFunction%")n=R("async function* () {}");else if(t==="%AsyncGenerator%"){var e=i("%AsyncGeneratorFunction%");e&&(n=e.prototype)}else if(t==="%AsyncIteratorPrototype%"){var a=i("%AsyncGenerator%");a&&o&&(n=o(a.prototype))}return s[t]=n,n},B={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},g=W,F=D,Z=g.call(Function.call,Array.prototype.concat),rr=g.call(Function.apply,Array.prototype.splice),_=g.call(Function.call,String.prototype.replace),b=g.call(Function.call,String.prototype.slice),tr=g.call(Function.call,RegExp.prototype.exec),er=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,or=/\\(\\)?/g,nr=function(t){var n=b(t,0,1),e=b(t,-1);if(n==="%"&&e!=="%")throw new P("invalid intrinsic syntax, expected closing `%`");if(e==="%"&&n!=="%")throw new P("invalid intrinsic syntax, expected opening `%`");var a=[];return _(t,er,function(p,l,y,m){a[a.length]=y?_(m,or,"$1"):l||p}),a},ar=function(t,n){var e=t,a;if(F(B,e)&&(a=B[e],e="%"+a[0]+"%"),F(s,e)){var p=s[e];if(p===A&&(p=X(e)),typeof p>"u"&&!n)throw new d("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:a,name:e,value:p}}throw new P("intrinsic "+t+" does not exist!")},sr=function(t,n){if(typeof t!="string"||t.length===0)throw new d("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new d('"allowMissing" argument must be a boolean');if(tr(/^%?[^%]*%?$/,t)===null)throw new P("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=nr(t),a=e.length>0?e[0]:"",p=ar("%"+a+"%",n),l=p.name,y=p.value,m=!1,U=p.alias;U&&(a=U[0],rr(e,Z([0,1],U)));for(var h=1,v=!0;h<e.length;h+=1){var f=e[h],S=b(f,0,1),E=b(f,-1);if((S==='"'||S==="'"||S==="`"||E==='"'||E==="'"||E==="`")&&S!==E)throw new P("property names with quotes must have matching quotes");if((f==="constructor"||!v)&&(m=!0),a+="."+f,l="%"+a+"%",F(s,l))y=s[l];else if(y!=null){if(!(f in y)){if(!n)throw new d("base intrinsic for "+t+" exists, but the property is not available.");return}if(c&&h+1>=e.length){var I=c(y,f);v=!!I,v&&"get"in I&&!("originalValue"in I.get)?y=I.get:y=y[f]}else v=F(y,f),y=y[f];v&&!m&&(s[l]=y)}}return y};export{sr as g};
