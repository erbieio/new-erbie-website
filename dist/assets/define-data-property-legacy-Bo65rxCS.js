!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}System.register(["./es-define-property-legacy-93GeT_7W.js","./es-errors-legacy-BGzuxDfi.js","./gopd-legacy-K-jukfvW.js"],(function(n,o){"use strict";var t,l,r,u;return{setters:[function(e){t=e.e},function(e){l=e.s,r=e.t},function(e){u=e.g}],execute:function(){var o=t,i=l,f=r,a=u;n("d",(function(n,t,l){if(!n||"object"!==e(n)&&"function"!=typeof n)throw new f("`obj` must be an object or a function`");if("string"!=typeof t&&"symbol"!==e(t))throw new f("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new f("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new f("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new f("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new f("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,u=arguments.length>4?arguments[4]:null,b=arguments.length>5?arguments[5]:null,s=arguments.length>6&&arguments[6],y=!!a&&a(n,t);if(o)o(n,t,{configurable:null===b&&y?y.configurable:!b,enumerable:null===r&&y?y.enumerable:!r,value:l,writable:null===u&&y?y.writable:!u});else{if(!s&&(r||u||b))throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
n[t]=l}}))}}}))}();
