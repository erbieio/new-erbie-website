!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register([],(function(e,r){"use strict";return{execute:function(){var r,n,o=Object.prototype.toString,c=function(e){var r=o.call(e),n="[object Arguments]"===r;return n||(n="[object Array]"!==r&&null!==e&&"object"===t(e)&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===o.call(e.callee)),n};var l=Array.prototype.slice,i=c,u=Object.keys,f=u?function(t){return u(t)}:function(){if(n)return r;var e;if(n=1,!Object.keys){// modified from https://github.com/es-shims/es5-shim
var o=Object.prototype.hasOwnProperty,l=Object.prototype.toString,i=c,u=Object.prototype.propertyIsEnumerable,f=!u.call({toString:null},"toString"),a=u.call((function(){}),"prototype"),y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(t){var e=t.constructor;return e&&e.prototype===t},s={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},b=function(){/* global window */if("undefined"==typeof window)return!1;for(var e in window)try{if(!s["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"===t(window[e]))try{p(window[e])}catch(r){return!0}}catch(r){return!0}return!1}();e=function(e){var r=null!==e&&"object"===t(e),n="[object Function]"===l.call(e),c=i(e),u=r&&"[object String]"===l.call(e),s=[];if(!r&&!n&&!c)throw new TypeError("Object.keys called on a non-object");var g=a&&n;if(u&&e.length>0&&!o.call(e,0))for(var h=0;h<e.length;++h)s.push(String(h));if(c&&e.length>0)for(var $=0;$<e.length;++$)s.push(String($));else for(var j in e)g&&"prototype"===j||!o.call(e,j)||s.push(String(j));if(f)for(var w=function(t){/* global window */if("undefined"==typeof window||!b)return p(t);try{return p(t)}catch(e){return!1}}(e),m=0;m<y.length;++m)w&&"constructor"===y[m]||!o.call(e,y[m])||s.push(y[m]);return s}}return r=e}(),a=Object.keys;f.shim=function(){if(Object.keys){var t=function(){// Safari 5.0 bug
var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2);t||(Object.keys=function(t){// eslint-disable-line func-name-matching
return i(t)?a(l.call(t)):a(t)})}else Object.keys=f;return Object.keys||f};e("o",f)}}}))}();
