var r,u;function o(){if(u)return r;u=1;var n=function(){return typeof(function(){}).name=="string"},e=Object.getOwnPropertyDescriptor;if(e)try{e([],"length")}catch(a){e=null}n.functionsHaveConfigurableNames=function(){if(!n()||!e)return!1;var t=e(function(){},"name");return!!t&&!!t.configurable};var i=Function.prototype.bind;return n.boundFunctionsHaveNames=function(){return n()&&typeof i=="function"&&(function(){}).bind().name!==""},r=n,r}export{o as r};
