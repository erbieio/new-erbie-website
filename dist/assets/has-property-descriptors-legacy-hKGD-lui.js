System.register(["./es-define-property-legacy-Ps18BbWy.js"],(function(e,t){"use strict";var r;return{setters:[function(e){r=e.r}],execute:function(){var t=r(),n=function(){return!!t};n.hasArrayLengthDefineBug=function(){// node v0.6 has a bug where array lengths can be Set but not Defined
if(!t)return null;try{return 1!==t([],"length",{value:1}).length}catch(e){// In Firefox 4-22, defining length on an array throws an exception.
return!0}},e("h",n)}}}));
