System.register(["./call-bind-legacy-b9j9Ev5K.js","./react-legacy-DxSpAB0g.js","./copy-to-clipboard-legacy-D4OEbE8m.js"],(function(e,t){"use strict";var r,n,o;return{setters:[function(e){r=e.g},function(e){n=e.r},function(e){o=e.c}],execute:function(){var t={};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var i=l(n),u=l(o),f=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function s(e,t,r){return t&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,r)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(r,e);var t=d(r);function r(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return h(O(e=t.call.apply(t,[this].concat(o))),"onClick",(function(t){var r=e.props,n=r.text,o=r.onCopy,c=r.children,f=r.options,l=i.default.Children.only(c),p=(0,u.default)(n,f);o&&o(n,p),// Bypass onClick if it was present
l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t)})),e}return s(r,[{key:"render",value:function(){var e=this.props;e.text,e.onCopy,e.options;var t=e.children,r=y(e,f),n=i.default.Children.only(t);return i.default.cloneElement(n,a(a({},r),{},{onClick:this.onClick}))}}]),r}(i.default.PureComponent);t.CopyToClipboard=j,h(j,"defaultProps",{onCopy:void 0,options:void 0});var g=t.CopyToClipboard;g.CopyToClipboard=g,e("C",r(g))}}}));