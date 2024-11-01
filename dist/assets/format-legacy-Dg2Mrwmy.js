System.register([],(function(e,t){"use strict";return{execute:function(){var t={exports:{}};!function(e){!function(){//// Export the API
var t;// CommonJS / Node module
function n(e){for(var t,n,r,a,o=1,s=[].slice.call(arguments),c=0,i=e.length,f="",p=!1,l=!1,u=function(){return s[o++]},g=function(){for(var n="";/\d/.test(e[c]);)n+=e[c++],t=e[c];return n.length>0?parseInt(n):null};c<i;++c)if(t=e[c],p)switch(p=!1,"."==t?(l=!1,t=e[++c]):"0"==t&&"."==e[c+1]?(l=!0,t=e[c+=2]):l=!0,a=g(),t){case"b":// number in binary
f+=parseInt(u(),10).toString(2);break;case"c":f+="string"==typeof(// character
n=u())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":// number in decimal
f+=parseInt(u(),10);break;case"f":// floating point number
r=String(parseFloat(u()).toFixed(a||6)),f+=l?r:r.replace(/^0/,"");break;case"j":// JSON
f+=JSON.stringify(u());break;case"o":// number in octal
f+="0"+parseInt(u(),10).toString(8);break;case"s":// string
f+=u();break;case"x":// lowercase hexadecimal
f+="0x"+parseInt(u(),10).toString(16);break;case"X":// uppercase hexadecimal
f+="0x"+parseInt(u(),10).toString(16).toUpperCase();break;default:f+=t}else"%"===t?p=!0:f+=t;return f}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!=typeof console&&"function"==typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()}(t),e("f",t.exports)}}}));
