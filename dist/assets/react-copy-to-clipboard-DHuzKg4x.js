import{r as T}from"./react-CBAF3Uyv.js";import{c as x}from"./copy-to-clipboard-D4KqLzmm.js";var l={};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}Object.defineProperty(l,"__esModule",{value:!0});l.CopyToClipboard=void 0;var c=P(T),R=P(x),E=["text","onCopy","options","children"];function P(e){return e&&e.__esModule?e:{default:e}}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k(e,t){if(e==null)return{};var n=D(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function D(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return t&&$(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function B(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}function b(e,t){return b=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},b(e,t)}function M(e){var t=W();return function(){var r=a(e),o;if(t){var i=a(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return N(this,o)}}function N(e,t){if(t&&(s(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},a(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){B(n,e);var t=M(n);function n(){var r;I(this,n);for(var o=arguments.length,i=new Array(o),f=0;f<o;f++)i[f]=arguments[f];return r=t.call.apply(t,[this].concat(i)),O(C(r),"onClick",function(y){var u=r.props,h=u.text,v=u.onCopy,w=u.children,j=u.options,p=c.default.Children.only(w),S=(0,R.default)(h,j);v&&v(h,S),p&&p.props&&typeof p.props.onClick=="function"&&p.props.onClick(y)}),r}return q(n,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,f=k(o,E),y=c.default.Children.only(i);return c.default.cloneElement(y,m(m({},f),{},{onClick:this.onClick}))}}]),n}(c.default.PureComponent);l.CopyToClipboard=g;O(g,"defaultProps",{onCopy:void 0,options:void 0});var z=l,d=z.CopyToClipboard;d.CopyToClipboard=d;var L=d;export{L as l};
