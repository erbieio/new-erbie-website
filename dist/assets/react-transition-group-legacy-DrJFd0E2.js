System.register(["./@babel-legacy-Hf2i0Sc8.js","./dom-helpers-legacy-qjv8orql.js","./react-legacy-tsTD2afp.js","./react-dom-legacy-oo3lAXd2.js"],(function(t,e){"use strict";var n,r,i,o,s,a,u,l,c;return{setters:[function(t){n=t.r,r=t.s,i=t.g,o=t.k},function(t){s=t.a,a=t.r},function(t){u=t.a,l=t.r},function(t){c=t.R}],execute:function(){var e=!1,p=u.createContext(null),d=function(t){return t.scrollTop},f="unmounted",h="exited",E="entering",m="entered",x="exiting",v=function(t){function i(e,n){var r;r=t.call(this,e,n)||this;var i,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(i=h,r.appearStatus=E):i=m:i=e.unmountOnExit||e.mountOnEnter?f:h,r.state={status:i},r.nextCallback=null,r}n(i,t),i.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:h}:null};var o=i.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==m&&(e=E):n!==E&&n!==m||(e=x)}this.updateStatus(!1,e)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},o.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this);n&&d(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:f})},o.performEnter=function(t){var n=this,r=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[c.findDOMNode(this),i],s=o[0],a=o[1],u=this.getTimeouts(),l=i?u.appear:u.enter;!t&&!r||e?this.safeSetState({status:m},(function(){n.props.onEntered(s)})):(this.props.onEnter(s,a),this.safeSetState({status:E},(function(){n.props.onEntering(s,a),n.onTransitionEnd(l,(function(){n.safeSetState({status:m},(function(){n.props.onEntered(s,a)}))}))})))},o.performExit=function(){var t=this,n=this.props.exit,r=this.getTimeouts(),i=this.props.nodeRef?void 0:c.findDOMNode(this);n&&!e?(this.props.onExit(i),this.safeSetState({status:x},(function(){t.props.onExiting(i),t.onTransitionEnd(r.exit,(function(){t.safeSetState({status:h},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:h},(function(){t.props.onExited(i)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},o.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:c.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],s=i[1];this.props.addEndListener(o,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},o.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var i=r(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);// allows for nested Transitions
return u.createElement(p.Provider,{value:null},"function"==typeof n?n(t,i):u.cloneElement(u.Children.only(n),i))},i}(u.Component);function g(){}v.contextType=p,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:g,onEntering:g,onEntered:g,onExit:g,onExiting:g,onExited:g},v.UNMOUNTED=f,v.EXITED=h,v.ENTERING=E,v.ENTERED=m,v.EXITING=x;var C=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return a(t,e)}))},S=t("C",function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var r=e.resolveArguments(t,n),i=r[0],o=r[1];e.removeClasses(i,"exit"),e.addClass(i,o?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var r=e.resolveArguments(t,n),i=r[0],o=r[1]?"appear":"enter";e.addClass(i,o,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var r=e.resolveArguments(t,n),i=r[0],o=r[1]?"appear":"enter";e.removeClasses(i,o),e.addClass(i,o,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,r="string"==typeof n,i=r?(r&&n?n+"-":"")+t:n[t];return{baseClassName:i,activeClassName:r?i+"-active":n[t+"Active"],doneClassName:r?i+"-done":n[t+"Done"]}},e}n(e,t);var o=e.prototype;return o.addClass=function(t,e,n){var r=this.getClassNames(e)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&i&&(r+=" "+i),"active"===n&&t&&d(t),r&&(this.appliedClasses[e][n]=r,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s(t,e)}))}(t,r))},o.removeClasses=function(t,e){var n=this.appliedClasses[e],r=n.base,i=n.active,o=n.done;this.appliedClasses[e]={},r&&C(t,r),i&&C(t,i),o&&C(t,o)},o.render=function(){var t=this.props;t.classNames;var e=r(t,["classNames"]);return u.createElement(v,i({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(u.Component));
/**
       * Given `this.props.children`, return an object mapping key to child.
       *
       * @param {*} children `this.props.children`
       * @return {object} Mapping of key to child
       */
function b(t,e){var n=Object.create(null);return t&&l.Children.map(t,(function(t){return t})).forEach((function(t){// run the map function here instead so that the key is the computed one
n[t.key]=function(t){return e&&l.isValidElement(t)?e(t):t}(t)})),n}
/**
       * When you're adding or removing children some may be added or removed in the
       * same render pass. We want to show *both* since we want to simultaneously
       * animate elements in and out. This function takes a previous set of keys
       * and a new set of keys and merges them with its best guess of the correct
       * ordering. In the future we may expose some of the utilities in
       * ReactMultiChild to make this easy, but for now React itself does not
       * directly have this concept of the union of prevChildren and nextChildren
       * so we implement it here.
       *
       * @param {object} prev prev children as returned from
       * `ReactTransitionChildMapping.getChildMapping()`.
       * @param {object} next next children as returned from
       * `ReactTransitionChildMapping.getChildMapping()`.
       * @return {object} a key set that contains all keys in `prev` and all keys
       * in `next` in a reasonable order.
       */function y(t,e,n){return null!=n[e]?n[e]:t.props[e]}function k(t,e,n){var r=b(t.children),i=function(t,e){function n(n){return n in e?e[n]:t[n]}// For each key of `next`, the list of keys to insert before that key in
// the combined list
t=t||{},e=e||{};var r,i=Object.create(null),o=[];for(var s in t)s in e?o.length&&(i[s]=o,o=[]):o.push(s);var a={};for(var u in e){if(i[u])for(r=0;r<i[u].length;r++){var l=i[u][r];a[i[u][r]]=n(l)}a[u]=n(u)}// Finally, add the keys which didn't appear before any key in `next`
for(r=0;r<o.length;r++)a[o[r]]=n(o[r]);return a}(e,r);return Object.keys(i).forEach((function(o){var s=i[o];if(l.isValidElement(s)){var a=o in e,u=o in r,c=e[o],p=l.isValidElement(c)&&!c.props.in;// item is new (entering)
!u||a&&!p?u||!a||p?u&&a&&l.isValidElement(c)&&(// item hasn't changed transition states
// copy over the last transition props;
// console.log('unchanged', key)
i[o]=l.cloneElement(s,{onExited:n.bind(null,s),in:c.props.in,exit:y(s,"exit",t),enter:y(s,"enter",t)})):// item is old (exiting)
// console.log('leaving', key)
i[o]=l.cloneElement(s,{in:!1}):// console.log('entering', key)
i[o]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:y(s,"exit",t),enter:y(s,"enter",t)})}})),i}S.defaultProps={classNames:""},S.propTypes={};var N,O,T=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},R=t("T",function(t){function e(e,n){var r,i=(r=t.call(this,e,n)||this).handleExited.bind(o(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}n(e,t);var s=e.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,r,i=e.children,o=e.handleExited;return{children:e.firstRender?(n=t,r=o,b(n.children,(function(t){return l.cloneElement(t,{onExited:r.bind(null,t),in:!0,appear:y(t,"appear",n),enter:y(t,"enter",n),exit:y(t,"exit",n)})}))):k(t,i,o),firstRender:!1}},s.handleExited=function(t,e){var n=b(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=i({},e.children);return delete n[t.key],{children:n}})))},s.render=function(){var t=this.props,e=t.component,n=t.childFactory,i=r(t,["component","childFactory"]),o=this.state.contextValue,s=T(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===e?u.createElement(p.Provider,{value:o},s):u.createElement(p.Provider,{value:o},u.createElement(e,i,s))},e}(u.Component));R.propTypes={},R.defaultProps={component:"div",childFactory:function(t){return t}};var D="out-in",M="in-out",P=function(t,e,n){return function(){var r;t.props[e]&&(r=t.props)[e].apply(r,arguments),n()}},A=((N={})[D]=function(t){var e=t.current,n=t.changeState;return u.cloneElement(e,{in:!1,onExited:P(e,"onExited",(function(){n(E,null)}))})},N[M]=function(t){var e=t.current,n=t.changeState,r=t.children;return[e,u.cloneElement(r,{in:!0,onEntered:P(r,"onEntered",(function(){n(E)}))})]},N),j=((O={})[D]=function(t){var e=t.children,n=t.changeState;return u.cloneElement(e,{in:!0,onEntered:P(e,"onEntered",(function(){n(m,u.cloneElement(e,{in:!0}))}))})},O[M]=function(t){var e=t.current,n=t.children,r=t.changeState;return[u.cloneElement(e,{in:!1,onExited:P(e,"onExited",(function(){r(m,u.cloneElement(n,{in:!0}))}))}),u.cloneElement(n,{in:!0})]},O),V=t("S",function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).state={status:m,current:null},e.appeared=!1,e.changeState=function(t,n){void 0===n&&(n=e.state.current),e.setState({status:t,current:n})},e}n(e,t);var r=e.prototype;return r.componentDidMount=function(){this.appeared=!0},e.getDerivedStateFromProps=function(t,e){return null==t.children?{current:null}:e.status===E&&t.mode===M?{status:E}:!e.current||(n=e.current,r=t.children,n===r||u.isValidElement(n)&&u.isValidElement(r)&&null!=n.key&&n.key===r.key)?{current:u.cloneElement(t.children,{in:!0})}:{status:x};var n,r},r.render=function(){var t,e=this.props,n=e.children,r=e.mode,i=this.state,o=i.status,s=i.current,a={children:n,current:s,changeState:this.changeState,status:o};switch(o){case E:t=j[r](a);break;case x:t=A[r](a);break;case m:t=s}return u.createElement(p.Provider,{value:{isMounting:!this.appeared}},t)},e}(u.Component));V.propTypes={},V.defaultProps={mode:D}}}}));
