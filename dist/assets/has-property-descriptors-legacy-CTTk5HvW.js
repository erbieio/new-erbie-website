System.register(["./es-define-property-legacy-93GeT_7W.js"],(function(e,t){"use strict";var n;return{setters:[function(e){n=e.e}],execute:function(){var t=n,r=function(){return!!t};r.hasArrayLengthDefineBug=function(){// node v0.6 has a bug where array lengths can be Set but not Defined
if(!t)return null;try{return 1!==t([],"length",{value:1}).length}catch(e){// In Firefox 4-22, defining length on an array throws an exception.
return!0}},e("h",r)}}}));
