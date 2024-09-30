System.register(["./@babel-legacy-Hf2i0Sc8.js","./react-legacy-DxSpAB0g.js","./rc-util-legacy-DbiAop8j.js","./resize-observer-polyfill-legacy-D_RrGN2a.js"],(function(e,t){"use strict";var n,r,u,i,o,c,f,a,l,s,h,d,v;return{setters:[function(e){n=e.i,r=e.j,u=e.a,i=e._,o=e.e,c=e.d,f=e.g},function(e){a=e.r},function(e){l=e.s,s=e.e,h=e.H,d=e.y},function(e){v=e.i}],execute:function(){var t=a.createContext(null),g=new Map,y=new v((function(e){e.forEach((function(e){var t,n=e.target;null===(t=g.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))})),m=function(e){n(o,e);var t=r(o);function o(){return u(this,o),t.apply(this,arguments)}return i(o,[{key:"render",value:function(){return this.props.children}}]),o}(a.Component);
/**
       * Collect all the resize event from children ResizeObserver
       */function p(e,n){var r=e.children,u=e.disabled,i=a.useRef(null),f=a.useRef(null),d=a.useContext(t),v="function"==typeof r,p=v?r(i):r,R=a.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),b=!v&&a.isValidElement(p)&&l(p),w=b?p.ref:null,E=s(w,i),C=function(){var e;return h(i.current)||(// Support `nativeElement` format
i.current&&"object"===c(i.current)?h(null===(e=i.current)||void 0===e?void 0:e.nativeElement):null)||h(f.current)};a.useImperativeHandle(n,(function(){return C()}));var H=a.useRef(e);H.current=e;var j=a.useCallback((function(e){var t=H.current,n=t.onResize,r=t.data,u=e.getBoundingClientRect(),i=u.width,c=u.height,f=e.offsetWidth,a=e.offsetHeight,l=Math.floor(i),s=Math.floor(c);if(R.current.width!==l||R.current.height!==s||R.current.offsetWidth!==f||R.current.offsetHeight!==a){var h={width:l,height:s,offsetWidth:f,offsetHeight:a};R.current=h;var v=f===Math.round(i)?i:f,g=a===Math.round(c)?c:a,y=o(o({},h),{},{offsetWidth:v,offsetHeight:g});null==d||d(y,e,r),n&&Promise.resolve().then((function(){n(y,e)}))}}),[]);return a.useEffect((function(){var e,t,n=C();return n&&!u&&(e=n,t=j,g.has(e)||(g.set(e,new Set),y.observe(e)),g.get(e).add(t)),function(){return function(e,t){g.has(e)&&(g.get(e).delete(t),g.get(e).size||(y.unobserve(e),g.delete(e)))}
/**
       * Fallback to findDOMNode if origin ref do not provide any dom element
       */(n,j)}}),[i.current,u]),a.createElement(m,{ref:f},b?a.cloneElement(p,{ref:E}):p)}var R=a.forwardRef(p);function b(e,t){var n=e.children;return("function"==typeof n?[n]:d(n)).map((function(n,r){var u=(null==n?void 0:n.key)||"".concat("rc-observer-key","-").concat(r);return a.createElement(R,f({},e,{key:u,ref:0===r?t:void 0}),n)}))}e("R",a.forwardRef(b)).Collection=function(e){var n=e.children,r=e.onBatchResize,u=a.useRef(0),i=a.useRef([]),o=a.useContext(t),c=a.useCallback((function(e,t,n){u.current+=1;var c=u.current;i.current.push({size:e,element:t,data:n}),Promise.resolve().then((function(){c===u.current&&(null==r||r(i.current),i.current=[])})),// Continue bubbling if parent exist
null==o||o(e,t,n)}),[r,o]);return a.createElement(t.Provider,{value:c},n)}}}}));