System.register([],(function(s,a){"use strict";return{execute:function(){function a(s,a){return s.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}
/**
       * Removes a CSS class from a given element.
       * 
       * @param element the element
       * @param className the CSS class name
       */s({a:
/**
       * Adds a CSS class to a given element.
       * 
       * @param element the element
       * @param className the CSS class name
       */
function(s,a){s.classList?s.classList.add(a):
/**
       * Checks if a given element has a CSS class.
       * 
       * @param element the element
       * @param className the CSS class name
       */
function(s,a){return s.classList?!!a&&s.classList.contains(a):-1!==(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+a+" ")}(s,a)||("string"==typeof s.className?s.className=s.className+" "+a:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+a))},r:function(s,e){s.classList?s.classList.remove(e):"string"==typeof s.className?s.className=a(s.className,e):s.setAttribute("class",a(s.className&&s.className.baseVal||"",e))}})}}}));
