System.register(["./define-properties-legacy-h10uDkoQ.js","./@babel-legacy-swh58CBx.js","./call-bind-legacy-Ccg016BC.js","./es-errors-legacy-BGzuxDfi.js","./es-abstract-legacy-C4bT99lB.js","./set-function-name-legacy-BAOcIVwq.js"],(function(n,t){"use strict";var e,r,i,o,c,f,u,a,l;return{setters:[function(n){e=n.d},function(n){r=n.n},function(n){i=n.c},function(n){o=n.t},function(n){c=n.r,f=n.a,u=n.b,a=n.c},function(n){l=n.r}],execute:function(){var t=function(){if("function"!=typeof Promise)throw new TypeError("`Promise.prototype.finally` requires a global `Promise` be available.")};t();var s=o,y=c(),p=f(),m=u(),b=a(),v=l(),g=Promise,P=v((function(n){var t=this;if("Object"!==b(t))throw new s("receiver is not an Object");var e=m(t,g),r=n,i=n;// may throw
return p(n)&&(r=function(n,t){return function(e){var r=t();return y(n,r).then((function(){return e}))}}(e,n),i=function(n,t){return function(e){var r=t();return y(n,r).then((function(){throw e}))}}(e,n)),t.then(r,i)}),"finally",!0),h=t,j=P,w=function(){return h(),"function"==typeof Promise.prototype.finally?Promise.prototype.finally:j},d=t,O=w,q=e,x=e,E=P,G=w,K=function(){d();var n=O();return q(Promise.prototype,{finally:n},{finally:function(){return Promise.prototype.finally!==n}}),n},S=i(G());x(S,{getPolyfill:G,implementation:E,shim:K}),n("p",r(S))}}}));