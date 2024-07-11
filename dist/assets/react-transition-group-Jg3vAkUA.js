import{r as k,s as A,g as I,k as j}from"./@babel-DVGmkmWW.js";import{a as w,r as W}from"./dom-helpers-D0mFdbeO.js";import{a as p,r as v}from"./react-Dbae-1t-.js";import{R as D}from"./react-dom-RqR84h2O.js";const F={disabled:!1},T=p.createContext(null);var V=function(a){return a.scrollTop},N="unmounted",x="exited",f="entering",h="entered",b="exiting",E=function(o){k(a,o);function a(e,n){var t;t=o.call(this,e,n)||this;var r=n,i=r&&!r.isMounting?e.enter:e.appear,s;return t.appearStatus=null,e.in?i?(s=x,t.appearStatus=f):s=h:e.unmountOnExit||e.mountOnEnter?s=N:s=x,t.state={status:s},t.nextCallback=null,t}a.getDerivedStateFromProps=function(n,t){var r=n.in;return r&&t.status===N?{status:x}:null};var u=a.prototype;return u.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},u.componentDidUpdate=function(n){var t=null;if(n!==this.props){var r=this.state.status;this.props.in?r!==f&&r!==h&&(t=f):(r===f||r===h)&&(t=b)}this.updateStatus(!1,t)},u.componentWillUnmount=function(){this.cancelNextCallback()},u.getTimeouts=function(){var n=this.props.timeout,t,r,i;return t=r=i=n,n!=null&&typeof n!="number"&&(t=n.exit,r=n.enter,i=n.appear!==void 0?n.appear:r),{exit:t,enter:r,appear:i}},u.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var r=this.props.nodeRef?this.props.nodeRef.current:D.findDOMNode(this);r&&V(r)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:N})},u.performEnter=function(n){var t=this,r=this.props.enter,i=this.context?this.context.isMounting:n,s=this.props.nodeRef?[i]:[D.findDOMNode(this),i],l=s[0],c=s[1],d=this.getTimeouts(),m=i?d.appear:d.enter;if(!n&&!r||F.disabled){this.safeSetState({status:h},function(){t.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:f},function(){t.props.onEntering(l,c),t.onTransitionEnd(m,function(){t.safeSetState({status:h},function(){t.props.onEntered(l,c)})})})},u.performExit=function(){var n=this,t=this.props.exit,r=this.getTimeouts(),i=this.props.nodeRef?void 0:D.findDOMNode(this);if(!t||F.disabled){this.safeSetState({status:x},function(){n.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:b},function(){n.props.onExiting(i),n.onTransitionEnd(r.exit,function(){n.safeSetState({status:x},function(){n.props.onExited(i)})})})},u.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},u.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},u.setNextCallback=function(n){var t=this,r=!0;return this.nextCallback=function(i){r&&(r=!1,t.nextCallback=null,n(i))},this.nextCallback.cancel=function(){r=!1},this.nextCallback},u.onTransitionEnd=function(n,t){this.setNextCallback(t);var r=this.props.nodeRef?this.props.nodeRef.current:D.findDOMNode(this),i=n==null&&!this.props.addEndListener;if(!r||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[r,this.nextCallback],l=s[0],c=s[1];this.props.addEndListener(l,c)}n!=null&&setTimeout(this.nextCallback,n)},u.render=function(){var n=this.state.status;if(n===N)return null;var t=this.props,r=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var i=A(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return p.createElement(T.Provider,{value:null},typeof r=="function"?r(n,i):p.cloneElement(p.Children.only(r),i))},a}(p.Component);E.contextType=T;E.propTypes={};function C(){}E.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C};E.UNMOUNTED=N;E.EXITED=x;E.ENTERING=f;E.ENTERED=h;E.EXITING=b;var X=function(a,u){return a&&u&&u.split(" ").forEach(function(e){return w(a,e)})},P=function(a,u){return a&&u&&u.split(" ").forEach(function(e){return W(a,e)})},$=function(o){k(a,o);function a(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=o.call.apply(o,[this].concat(t))||this,e.appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(i,s){var l=e.resolveArguments(i,s),c=l[0],d=l[1];e.removeClasses(c,"exit"),e.addClass(c,d?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(i,s)},e.onEntering=function(i,s){var l=e.resolveArguments(i,s),c=l[0],d=l[1],m=d?"appear":"enter";e.addClass(c,m,"active"),e.props.onEntering&&e.props.onEntering(i,s)},e.onEntered=function(i,s){var l=e.resolveArguments(i,s),c=l[0],d=l[1],m=d?"appear":"enter";e.removeClasses(c,m),e.addClass(c,m,"done"),e.props.onEntered&&e.props.onEntered(i,s)},e.onExit=function(i){var s=e.resolveArguments(i),l=s[0];e.removeClasses(l,"appear"),e.removeClasses(l,"enter"),e.addClass(l,"exit","base"),e.props.onExit&&e.props.onExit(i)},e.onExiting=function(i){var s=e.resolveArguments(i),l=s[0];e.addClass(l,"exit","active"),e.props.onExiting&&e.props.onExiting(i)},e.onExited=function(i){var s=e.resolveArguments(i),l=s[0];e.removeClasses(l,"exit"),e.addClass(l,"exit","done"),e.props.onExited&&e.props.onExited(i)},e.resolveArguments=function(i,s){return e.props.nodeRef?[e.props.nodeRef.current,i]:[i,s]},e.getClassNames=function(i){var s=e.props.classNames,l=typeof s=="string",c=l&&s?s+"-":"",d=l?""+c+i:s[i],m=l?d+"-active":s[i+"Active"],G=l?d+"-done":s[i+"Done"];return{baseClassName:d,activeClassName:m,doneClassName:G}},e}var u=a.prototype;return u.addClass=function(n,t,r){var i=this.getClassNames(t)[r+"ClassName"],s=this.getClassNames("enter"),l=s.doneClassName;t==="appear"&&r==="done"&&l&&(i+=" "+l),r==="active"&&n&&V(n),i&&(this.appliedClasses[t][r]=i,X(n,i))},u.removeClasses=function(n,t){var r=this.appliedClasses[t],i=r.base,s=r.active,l=r.done;this.appliedClasses[t]={},i&&P(n,i),s&&P(n,s),l&&P(n,l)},u.render=function(){var n=this.props;n.classNames;var t=A(n,["classNames"]);return p.createElement(E,I({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(p.Component);$.defaultProps={classNames:""};$.propTypes={};function _(o,a){var u=function(t){return a&&v.isValidElement(t)?a(t):t},e=Object.create(null);return o&&v.Children.map(o,function(n){return n}).forEach(function(n){e[n.key]=u(n)}),e}function H(o,a){o=o||{},a=a||{};function u(c){return c in a?a[c]:o[c]}var e=Object.create(null),n=[];for(var t in o)t in a?n.length&&(e[t]=n,n=[]):n.push(t);var r,i={};for(var s in a){if(e[s])for(r=0;r<e[s].length;r++){var l=e[s][r];i[e[s][r]]=u(l)}i[s]=u(s)}for(r=0;r<n.length;r++)i[n[r]]=u(n[r]);return i}function g(o,a,u){return u[a]!=null?u[a]:o.props[a]}function y(o,a){return _(o.children,function(u){return v.cloneElement(u,{onExited:a.bind(null,u),in:!0,appear:g(u,"appear",o),enter:g(u,"enter",o),exit:g(u,"exit",o)})})}function z(o,a,u){var e=_(o.children),n=H(a,e);return Object.keys(n).forEach(function(t){var r=n[t];if(v.isValidElement(r)){var i=t in a,s=t in e,l=a[t],c=v.isValidElement(l)&&!l.props.in;s&&(!i||c)?n[t]=v.cloneElement(r,{onExited:u.bind(null,r),in:!0,exit:g(r,"exit",o),enter:g(r,"enter",o)}):!s&&i&&!c?n[t]=v.cloneElement(r,{in:!1}):s&&i&&v.isValidElement(l)&&(n[t]=v.cloneElement(r,{onExited:u.bind(null,r),in:l.props.in,exit:g(r,"exit",o),enter:g(r,"enter",o)}))}}),n}var q=Object.values||function(o){return Object.keys(o).map(function(a){return o[a]})},B={component:"div",childFactory:function(a){return a}},U=function(o){k(a,o);function a(e,n){var t;t=o.call(this,e,n)||this;var r=t.handleExited.bind(j(t));return t.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},t}var u=a.prototype;return u.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},u.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(n,t){var r=t.children,i=t.handleExited,s=t.firstRender;return{children:s?y(n,i):z(n,r,i),firstRender:!1}},u.handleExited=function(n,t){var r=_(this.props.children);n.key in r||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(i){var s=I({},i.children);return delete s[n.key],{children:s}}))},u.render=function(){var n=this.props,t=n.component,r=n.childFactory,i=A(n,["component","childFactory"]),s=this.state.contextValue,l=q(this.state.children).map(r);return delete i.appear,delete i.enter,delete i.exit,t===null?p.createElement(T.Provider,{value:s},l):p.createElement(T.Provider,{value:s},p.createElement(t,i,l))},a}(p.Component);U.propTypes={};U.defaultProps=B;var M,O;function J(o,a){return!(o===a||p.isValidElement(o)&&p.isValidElement(a)&&o.key!=null&&o.key===a.key)}var S={out:"out-in",in:"in-out"},R=function(a,u,e){return function(){var n;a.props[u]&&(n=a.props)[u].apply(n,arguments),e()}},Q=(M={},M[S.out]=function(o){var a=o.current,u=o.changeState;return p.cloneElement(a,{in:!1,onExited:R(a,"onExited",function(){u(f,null)})})},M[S.in]=function(o){var a=o.current,u=o.changeState,e=o.children;return[a,p.cloneElement(e,{in:!0,onEntered:R(e,"onEntered",function(){u(f)})})]},M),Y=(O={},O[S.out]=function(o){var a=o.children,u=o.changeState;return p.cloneElement(a,{in:!0,onEntered:R(a,"onEntered",function(){u(h,p.cloneElement(a,{in:!0}))})})},O[S.in]=function(o){var a=o.current,u=o.children,e=o.changeState;return[p.cloneElement(a,{in:!1,onExited:R(a,"onExited",function(){e(h,p.cloneElement(u,{in:!0}))})}),p.cloneElement(u,{in:!0})]},O),L=function(o){k(a,o);function a(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e=o.call.apply(o,[this].concat(t))||this,e.state={status:h,current:null},e.appeared=!1,e.changeState=function(i,s){s===void 0&&(s=e.state.current),e.setState({status:i,current:s})},e}var u=a.prototype;return u.componentDidMount=function(){this.appeared=!0},a.getDerivedStateFromProps=function(n,t){return n.children==null?{current:null}:t.status===f&&n.mode===S.in?{status:f}:t.current&&J(t.current,n.children)?{status:b}:{current:p.cloneElement(n.children,{in:!0})}},u.render=function(){var n=this.props,t=n.children,r=n.mode,i=this.state,s=i.status,l=i.current,c={children:t,current:l,changeState:this.changeState,status:s},d;switch(s){case f:d=Y[r](c);break;case b:d=Q[r](c);break;case h:d=l}return p.createElement(T.Provider,{value:{isMounting:!this.appeared}},d)},a}(p.Component);L.propTypes={};L.defaultProps={mode:S.out};export{$ as C,L as S,U as T};
