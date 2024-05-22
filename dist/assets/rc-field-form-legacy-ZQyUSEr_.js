System.register(["./react-legacy-C1KIogah.js","./@babel-legacy-Hf2i0Sc8.js","./rc-util-legacy-BuYkPS32.js","./@rc-component-legacy-Rmf4cg5p.js"],(function(e,t){"use strict";var n,r,i,a,s,o,u,l,c,d,f,g,v,h,m,p,F,y,V,b,E,k;return{setters:[function(e){n=e.r},function(e){r=e.e,i=e.n,a=e.o,s=e.f,o=e.b,u=e.d,l=e.i,c=e.j,d=e.a,f=e.k,g=e._,v=e.h,h=e.g,m=e.c},function(e){p=e.b,F=e.p,y=e.C,V=e.D,b=e.n,E=e.x},function(e){k=e.S}],execute:function(){var e="RC_FORM_INTERNAL_HOOKS",t=function(){p(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},P=n.createContext({getFieldValue:t,getFieldsValue:t,getFieldError:t,getFieldWarning:t,getFieldsError:t,isFieldsTouched:t,isFieldTouched:t,isFieldValidating:t,isFieldsValidating:t,resetFields:t,setFields:t,setFieldValue:t,setFieldsValue:t,validateFields:t,submit:t,getInternalHooks:function(){return t(),{dispatch:t,initEntityValue:t,registerField:t,useSubscribe:t,setInitialValues:t,destroyForm:t,setCallbacks:t,registerWatch:t,getFields:t,setValidateMessages:t,setPreserve:t,getInitialValue:t}}}),w=n.createContext(null);// eslint-disable-next-line @typescript-eslint/no-explicit-any
function C(e){return null==e?[]:Array.isArray(e)?e:[e]}var x="'${name}' is not a valid ${type}",M={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:x,method:x,array:x,object:x,number:x,date:x,boolean:x,integer:x,float:x,regexp:x,email:x,url:x,hex:x},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},N=k;
/**
       * Replace with template.
       *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
       */
function R(e,t){return e.replace(/\$\{\w+\}/g,(function(e){var n=e.slice(2,-1);return t[n]}))}var I="CODE_LOGIC_ERROR";function $(e,t,n,r,i){return A.apply(this,arguments)}
/**
       * We use `async-validator` to validate the value.
       * But only check one value in a time to avoid namePath validate issue.
       */function A(){return A=i(a().mark((function e(t,i,u,l,c){var d,f,g,v,h,m,p,y,V;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:// Bug of `async-validator`
// https://github.com/react-component/field-form/issues/316
// https://github.com/react-component/field-form/issues/313
return delete(d=r({},u)).ruleIndex,// https://github.com/ant-design/ant-design/issues/40497#issuecomment-1422282378
N.warning=function(){},d.validator&&(f=d.validator,d.validator=function(){try{return f.apply(void 0,arguments)}catch(e){return console.error(e),Promise.reject(I)}}),// We should special handle array validate
g=null,d&&"array"===d.type&&d.defaultField&&(g=d.defaultField,delete d.defaultField),v=new N(o({},t,[d])),h=F(M,l.validateMessages),v.messages(h),m=[],e.prev=10,e.next=13,Promise.resolve(v.validate(o({},t,i),r({},l)));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),e.t0.errors&&(m=e.t0.errors.map((function(e,t){var r=e.message,i=r===I?h.default:r;return n.isValidElement(i)?// Wrap ReactNode with `key`
n.cloneElement(i,{key:"error_".concat(t)}):i})));case 18:if(m.length||!g){e.next=23;break}return e.next=21,Promise.all(i.map((function(e,n){return $("".concat(t,".").concat(n),e,g,l,c)})));case 21:return p=e.sent,e.abrupt("return",p.reduce((function(e,t){return[].concat(s(e),s(t))}),[]));case 23:// Replace message with variables
return y=r(r({},u),{},{name:t,enum:(u.enum||[]).join(", ")},c),V=m.map((function(e){return"string"==typeof e?R(e,y):e})),e.abrupt("return",V);case 26:case"end":return e.stop()}}),e,null,[[10,15]])}))),A.apply(this,arguments)}function L(e,t,n,s,o,u){var l,c=e.join("."),d=n.map((function(e,t){var n=e.validator,i=r(r({},e),{},{ruleIndex:t});// Replace validator if needed
return n&&(i.validator=function(e,t,r){var i=!1,a=n(e,t,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];// Wait a tick to make sure return type is a promise
Promise.resolve().then((function(){p(!i,"Your validator function has already return a promise. `callback` will be ignored."),i||r.apply(void 0,t)}))}));// Wrap callback only accept when promise not provided
i=a&&"function"==typeof a.then&&"function"==typeof a.catch,
/**
               * 1. Use promise as the first priority.
               * 2. If promise not exist, use callback with warning instead
               */
p(i,"`callback` is deprecated. Please return a promise instead."),i&&a.then((function(){r()})).catch((function(e){r(e||" ")}))}),i})).sort((function(e,t){var n=e.warningOnly,r=e.ruleIndex,i=t.warningOnly,a=t.ruleIndex;return!!n==!!i?r-a:n?1:-1}));// Fill rule with context
if(!0===o)// >>>>> Validate by serialization
l=new Promise(function(){var e=i(a().mark((function e(n,r){var i,o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<d.length)){e.next=12;break}return o=d[i],e.next=5,$(c,t,o,s,u);case 5:if(!(l=e.sent).length){e.next=9;break}return r([{errors:l,rule:o}]),e.abrupt("return");case 9:i+=1,e.next=1;break;case 12:/* eslint-enable */n([]);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());else{// >>>>> Validate by parallel
var f=d.map((function(e){return $(c,t,e,s,u).then((function(t){return{errors:t,rule:e}}))}));l=(o?function(e){return O.apply(this,arguments)}(f):function(e){return S.apply(this,arguments)}(f)).then((function(e){// Always change to rejection for Field to catch
return Promise.reject(e)}))}// Internal catch error to avoid console error log.
return l.catch((function(e){return e})),l}function S(){return(S=i(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t).then((function(e){var t;return(t=[]).concat.apply(t,s(e))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=i(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.abrupt("return",new Promise((function(e){t.forEach((function(r){r.then((function(r){r.errors.length&&e([r]),(n+=1)===t.length&&e([])}))}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
       * Convert name to internal supported format.
       * This function should keep since we still thinking if need support like `a.b.c` format.
       * 'a' => ['a']
       * 123 => [123]
       * ['a', 123] => ['a', 123]
       */function U(e){return C(e)}function T(e,t){var n={};return t.forEach((function(t){var r=y(e,t);n=V(n,t,r)})),n}
/**
       * Check if `namePathList` includes `namePath`.
       * @param namePathList A list of `InternalNamePath[]`
       * @param namePath Compare `InternalNamePath`
       * @param partialMatch True will make `[a, b]` match `[a, b, c]`
       */function W(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e&&e.some((function(e){return j(t,e,n)}))}
/**
       * Check if `namePath` is super set or equal of `subNamePath`.
       * @param namePath A list of `InternalNamePath[]`
       * @param subNamePath Compare `InternalNamePath`
       * @param partialMatch True will make `[a, b]` match `[a, b, c]`
       */function j(e,t){return!(!e||!t)&&!(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&e.length!==t.length)&&t.every((function(t,n){return e[n]===t}))}// Like `shallowEqual`, but we not check the data which may cause re-render
function _(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&"object"===u(t.target)&&e in t.target?t.target[e]:t}
/**
       * Moves an array item from one position in an array to another.
       *
       * Note: This is a pure function so a new array will be returned, instead
       * of altering the array argument.
       *
       * @param array         Array in which to move an item.         (required)
       * @param moveIndex     The index of the item to move.          (required)
       * @param toIndex       The index to move item at moveIndex to. (required)
       */function D(e,t,n){var r=e.length;if(t<0||t>=r||n<0||n>=r)return e;var i=e[t],a=t-n;return a>0?[].concat(s(e.slice(0,n)),[i],s(e.slice(n,t)),s(e.slice(t+1,r))):a<0?[].concat(s(e.slice(0,t)),s(e.slice(t+1,n+1)),[i],s(e.slice(n+1,r))):e}var H=["name"],q=[];function z(e,t,n,r,i,a){return"function"==typeof e?e(t,n,"source"in a?{source:a.source}:{}):r!==i}var J=function(t){l(v,t);var u=c(v);function v(t){var l;return d(this,v),l=u.call(this,t),o(f(l),"state",{resetCount:0}),o(f(l),"cancelRegisterFunc",null),o(f(l),"mounted",!1),o(f(l),"touched",!1),o(f(l),"dirty",!1),o(f(l),"validatePromise",void 0),o(f(l),"prevValidating",void 0),o(f(l),"errors",q),o(f(l),"warnings",q),o(f(l),"cancelRegister",(function(){var e=l.props,t=e.preserve,n=e.isListField,r=e.name;l.cancelRegisterFunc&&l.cancelRegisterFunc(n,t,U(r)),l.cancelRegisterFunc=null})),o(f(l),"getNamePath",(function(){var e=l.props,t=e.name,n=e.fieldContext.prefixName;return void 0!==t?[].concat(s(void 0===n?[]:n),s(t)):[]})),o(f(l),"getRules",(function(){var e=l.props,t=e.rules,n=void 0===t?[]:t,r=e.fieldContext;return n.map((function(e){return"function"==typeof e?e(r):e}))})),o(f(l),"refresh",(function(){l.mounted&&l.setState((function(e){return{resetCount:e.resetCount+1}}))})),o(f(l),"metaCache",null),o(f(l),"triggerMetaEvent",(function(e){var t=l.props.onMetaChange;if(t){var n=r(r({},l.getMeta()),{},{destroy:e});b(l.metaCache,n)||t(n),l.metaCache=n}else l.metaCache=null})),o(f(l),"onStoreChange",(function(e,t,n){var r=l.props,i=r.shouldUpdate,a=r.dependencies,s=void 0===a?[]:a,o=r.onReset,u=n.store,c=l.getNamePath(),d=l.getValue(e),f=l.getValue(u),g=t&&W(t,c);switch("valueUpdate"!==n.type||"external"!==n.source||b(d,f)||(l.touched=!0,l.dirty=!0,l.validatePromise=null,l.errors=q,l.warnings=q,l.triggerMetaEvent()),n.type){case"reset":if(!t||g)return l.touched=!1,l.dirty=!1,l.validatePromise=void 0,l.errors=q,l.warnings=q,l.triggerMetaEvent(),null==o||o(),void l.refresh();break;case"remove":if(i)return void l.reRender();break;case"setField":var v=n.data;if(g)return"touched"in v&&(l.touched=v.touched),"validating"in v&&!("originRCField"in v)&&(l.validatePromise=v.validating?Promise.resolve([]):null),"errors"in v&&(l.errors=v.errors||q),"warnings"in v&&(l.warnings=v.warnings||q),l.dirty=!0,l.triggerMetaEvent(),void l.reRender();if("value"in v&&W(t,c,!0))return void l.reRender();if(i&&!c.length&&z(i,e,u,d,f,n))return void l.reRender();break;case"dependenciesUpdate":if(s.map(U).some((function(e){return W(n.relatedFields,e)})))return void l.reRender();break;default:if(g||(!s.length||c.length||i)&&z(i,e,u,d,f,n))return void l.reRender()}!0===i&&l.reRender()})),o(f(l),"validateRules",(function(e){var t=l.getNamePath(),n=l.getValue(),r=e||{},o=r.triggerName,u=r.validateOnly,c=void 0!==u&&u,d=Promise.resolve().then(i(a().mark((function r(){var i,u,c,f,g,v,h;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(l.mounted){r.next=2;break}return r.abrupt("return",[]);case 2:if(i=l.props,u=i.validateFirst,c=void 0!==u&&u,f=i.messageVariables,g=i.validateDebounce,v=l.getRules(),o&&(v=v.filter((function(e){return e})).filter((function(e){var t=e.validateTrigger;return!t||C(t).includes(o)}))),!g||!o){r.next=10;break}return r.next=8,new Promise((function(e){setTimeout(e,g)}));case 8:if(l.validatePromise===d){r.next=10;break}return r.abrupt("return",[]);case 10:return(h=L(t,n,v,e,c,f)).catch((function(e){return e})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;if(l.validatePromise===d){var t;l.validatePromise=null;var n=[],r=[];null===(t=e.forEach)||void 0===t||t.call(e,(function(e){var t=e.rule.warningOnly,i=e.errors,a=void 0===i?q:i;t?r.push.apply(r,s(a)):n.push.apply(n,s(a))})),l.errors=n,l.warnings=r,l.triggerMetaEvent(),l.reRender()}})),r.abrupt("return",h);case 13:case"end":return r.stop()}}),r)}))));return c||(l.validatePromise=d,l.dirty=!0,l.errors=q,l.warnings=q,l.triggerMetaEvent(),l.reRender()),d})),o(f(l),"isFieldValidating",(function(){return!!l.validatePromise})),o(f(l),"isFieldTouched",(function(){return l.touched})),o(f(l),"isFieldDirty",(function(){return!(!l.dirty&&void 0===l.props.initialValue)||void 0!==(0,l.props.fieldContext.getInternalHooks(e).getInitialValue)(l.getNamePath())})),o(f(l),"getErrors",(function(){return l.errors})),o(f(l),"getWarnings",(function(){return l.warnings})),o(f(l),"isListField",(function(){return l.props.isListField})),o(f(l),"isList",(function(){return l.props.isList})),o(f(l),"isPreserve",(function(){return l.props.preserve})),o(f(l),"getMeta",(function(){return l.prevValidating=l.isFieldValidating(),{touched:l.isFieldTouched(),validating:l.prevValidating,errors:l.errors,warnings:l.warnings,name:l.getNamePath(),validated:null===l.validatePromise}})),o(f(l),"getOnlyChild",(function(e){if("function"==typeof e){var t=l.getMeta();return r(r({},l.getOnlyChild(e(l.getControlled(),t,l.props.fieldContext))),{},{isFunction:!0})}var i=E(e);return 1===i.length&&n.isValidElement(i[0])?{child:i[0],isFunction:!1}:{child:i,isFunction:!1}})),o(f(l),"getValue",(function(e){var t=l.props.fieldContext.getFieldsValue,n=l.getNamePath();return y(e||t(!0),n)})),o(f(l),"getControlled",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l.props,i=n.name,a=n.trigger,s=n.validateTrigger,u=n.getValueFromEvent,c=n.normalize,d=n.valuePropName,f=n.getValueProps,g=n.fieldContext,v=void 0!==s?s:g.validateTrigger,h=l.getNamePath(),m=g.getInternalHooks,p=g.getFieldsValue,F=m(e).dispatch,y=l.getValue(),V=f||function(e){return o({},d,e)},b=t[a],E=void 0!==i?V(y):{},k=r(r({},t),E);return k[a]=function(){var e;l.touched=!0,l.dirty=!0,l.triggerMetaEvent();for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e=u?u.apply(void 0,n):_.apply(void 0,[d].concat(n)),c&&(e=c(e,y,p(!0))),F({type:"updateValue",namePath:h,value:e}),b&&b.apply(void 0,n)},C(v||[]).forEach((function(e){var t=k[e];k[e]=function(){t&&t.apply(void 0,arguments);var n=l.props.rules;n&&n.length&&F({type:"validateField",namePath:h,triggerName:e})}})),k})),t.fieldContext&&(0,(0,t.fieldContext.getInternalHooks)(e).initEntityValue)(f(l)),l}return g(v,[{key:"componentDidMount",value:function(){var t=this.props,n=t.shouldUpdate,r=t.fieldContext;if(this.mounted=!0,r){var i=(0,r.getInternalHooks)(e).registerField;this.cancelRegisterFunc=i(this)}!0===n&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var e,t=this.state.resetCount,r=this.props.children,i=this.getOnlyChild(r),a=i.child;return i.isFunction?e=a:n.isValidElement(a)?e=n.cloneElement(a,this.getControlled(a.props)):(p(!a,"`children` of Field is not validate ReactElement."),e=a),n.createElement(n.Fragment,{key:t},e)}}]),v}(n.Component);function K(e){var t=e.name,r=v(e,H),i=n.useContext(P),a=n.useContext(w),s=void 0!==t?U(t):void 0,o="keep";return r.isListField||(o="_".concat((s||[]).join("_"))),n.createElement(J,h({key:o,name:s,isListField:!!a},r,{fieldContext:i}))}o(J,"contextType",P),o(J,"defaultProps",{trigger:"onChange",valuePropName:"value"});var G="__@field_split__";
/**
       * Convert name path into string to fast the fetch speed of Map.
       */function Y(e){return e.map((function(e){return"".concat(u(e),":").concat(e)})).join(G)}
/**
       * NameMap like a `Map` but accepts `string[]` as key.
       */var B=function(){function e(){d(this,e),o(this,"kvs",new Map)}return g(e,[{key:"set",value:function(e,t){this.kvs.set(Y(e),t)}},{key:"get",value:function(e){return this.kvs.get(Y(e))}},{key:"update",value:function(e,t){var n=t(this.get(e));n?this.set(e,n):this.delete(e)}},{key:"delete",value:function(e){this.kvs.delete(Y(e))}// Since we only use this in test, let simply realize this
},{key:"map",value:function(e){return s(this.kvs.entries()).map((function(t){var n=m(t,2),r=n[0],i=n[1],a=r.split(G);return e({key:a.map((function(e){var t=e.match(/^([^:]*):(.*)$/),n=m(t,3),r=n[1],i=n[2];return"number"===r?Number(i):i})),value:i})}))}},{key:"toJSON",value:function(){var e={};return this.map((function(t){var n=t.key,r=t.value;return e[n.join(".")]=r,null})),e}}]),e}(),Q=["name"],X=g((function t(n){var i=this;d(this,t),o(this,"formHooked",!1),o(this,"forceRootUpdate",void 0),o(this,"subscribable",!0),o(this,"store",{}),o(this,"fieldEntities",[]),o(this,"initialValues",{}),o(this,"callbacks",{}),o(this,"validateMessages",null),o(this,"preserve",null),o(this,"lastValidatePromise",null),o(this,"getForm",(function(){return{getFieldValue:i.getFieldValue,getFieldsValue:i.getFieldsValue,getFieldError:i.getFieldError,getFieldWarning:i.getFieldWarning,getFieldsError:i.getFieldsError,isFieldsTouched:i.isFieldsTouched,isFieldTouched:i.isFieldTouched,isFieldValidating:i.isFieldValidating,isFieldsValidating:i.isFieldsValidating,resetFields:i.resetFields,setFields:i.setFields,setFieldValue:i.setFieldValue,setFieldsValue:i.setFieldsValue,validateFields:i.validateFields,submit:i.submit,_init:!0,getInternalHooks:i.getInternalHooks}})),o(this,"getInternalHooks",(function(t){return t===e?(i.formHooked=!0,{dispatch:i.dispatch,initEntityValue:i.initEntityValue,registerField:i.registerField,useSubscribe:i.useSubscribe,setInitialValues:i.setInitialValues,destroyForm:i.destroyForm,setCallbacks:i.setCallbacks,setValidateMessages:i.setValidateMessages,getFields:i.getFields,setPreserve:i.setPreserve,getInitialValue:i.getInitialValue,registerWatch:i.registerWatch}):(p(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)})),o(this,"useSubscribe",(function(e){i.subscribable=e})),o(this,"prevWithoutPreserves",null),o(this,"setInitialValues",(function(e,t){if(i.initialValues=e||{},t){var n,r=F(e,i.store);null===(n=i.prevWithoutPreserves)||void 0===n||n.map((function(t){var n=t.key;r=V(r,n,y(e,n))})),i.prevWithoutPreserves=null,i.updateStore(r)}})),o(this,"destroyForm",(function(){var e=new B;i.getFieldEntities(!0).forEach((function(t){i.isMergedPreserve(t.isPreserve())||e.set(t.getNamePath(),!0)})),i.prevWithoutPreserves=e})),o(this,"getInitialValue",(function(e){var t=y(i.initialValues,e);return e.length?F(t):t})),o(this,"setCallbacks",(function(e){i.callbacks=e})),o(this,"setValidateMessages",(function(e){i.validateMessages=e})),o(this,"setPreserve",(function(e){i.preserve=e})),o(this,"watchList",[]),o(this,"registerWatch",(function(e){return i.watchList.push(e),function(){i.watchList=i.watchList.filter((function(t){return t!==e}))}})),o(this,"notifyWatch",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(i.watchList.length){var t=i.getFieldsValue(),n=i.getFieldsValue(!0);i.watchList.forEach((function(r){r(t,n,e)}))}})),o(this,"timeoutId",null),o(this,"warningUnhooked",(function(){})),o(this,"updateStore",(function(e){i.store=e})),o(this,"getFieldEntities",(function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?i.fieldEntities.filter((function(e){return e.getNamePath().length})):i.fieldEntities})),o(this,"getFieldsMap",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new B;return i.getFieldEntities(e).forEach((function(e){var n=e.getNamePath();t.set(n,e)})),t})),o(this,"getFieldEntitiesForNamePathList",(function(e){if(!e)return i.getFieldEntities(!0);var t=i.getFieldsMap(!0);return e.map((function(e){var n=U(e);return t.get(n)||{INVALIDATE_NAME_PATH:U(e)}}))})),o(this,"getFieldsValue",(function(e,t){var n,r,a;if(i.warningUnhooked(),!0===e||Array.isArray(e)?(n=e,r=t):e&&"object"===u(e)&&(a=e.strict,r=e.filter),!0===n&&!r)return i.store;var s=i.getFieldEntitiesForNamePathList(Array.isArray(n)?n:null),o=[];return s.forEach((function(e){var t,i,s,u,l="INVALIDATE_NAME_PATH"in e?e.INVALIDATE_NAME_PATH:e.getNamePath();if(a){if(null!==(s=(u=e).isList)&&void 0!==s&&s.call(u))return}else if(!n&&null!==(t=(i=e).isListField)&&void 0!==t&&t.call(i))return;if(r){var c="getMeta"in e?e.getMeta():null;r(c)&&o.push(l)}else o.push(l)})),T(i.store,o.map(U))})),o(this,"getFieldValue",(function(e){i.warningUnhooked();var t=U(e);return y(i.store,t)})),o(this,"getFieldsError",(function(e){return i.warningUnhooked(),i.getFieldEntitiesForNamePathList(e).map((function(t,n){return t&&!("INVALIDATE_NAME_PATH"in t)?{name:t.getNamePath(),errors:t.getErrors(),warnings:t.getWarnings()}:{name:U(e[n]),errors:[],warnings:[]}}))})),o(this,"getFieldError",(function(e){i.warningUnhooked();var t=U(e);return i.getFieldsError([t])[0].errors})),o(this,"getFieldWarning",(function(e){i.warningUnhooked();var t=U(e);return i.getFieldsError([t])[0].warnings})),o(this,"isFieldsTouched",(function(){i.warningUnhooked();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a=t[0],o=t[1],u=!1;0===t.length?r=null:1===t.length?Array.isArray(a)?(r=a.map(U),u=!1):(r=null,u=a):(r=a.map(U),u=o);var l=i.getFieldEntities(!0),c=function(e){return e.isFieldTouched()};if(!r)return u?l.every((function(e){return c(e)||e.isList()})):l.some(c);var d=new B;r.forEach((function(e){d.set(e,[])})),l.forEach((function(e){var t=e.getNamePath();r.forEach((function(n){n.every((function(e,n){return t[n]===e}))&&d.update(n,(function(t){return[].concat(s(t),[e])}))}))}));var f=function(e){return e.some(c)},g=d.map((function(e){return e.value}));return u?g.every(f):g.some(f)})),o(this,"isFieldTouched",(function(e){return i.warningUnhooked(),i.isFieldsTouched([e])})),o(this,"isFieldsValidating",(function(e){i.warningUnhooked();var t=i.getFieldEntities();if(!e)return t.some((function(e){return e.isFieldValidating()}));var n=e.map(U);return t.some((function(e){var t=e.getNamePath();return W(n,t)&&e.isFieldValidating()}))})),o(this,"isFieldValidating",(function(e){return i.warningUnhooked(),i.isFieldsValidating([e])})),o(this,"resetWithFieldInitialValue",(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new B,r=i.getFieldEntities(!0);r.forEach((function(e){var t=e.props.initialValue,r=e.getNamePath();if(void 0!==t){var i=n.get(r)||new Set;i.add({entity:e,value:t}),n.set(r,i)}})),t.entities?e=t.entities:t.namePathList?(e=[],t.namePathList.forEach((function(t){var r,i=n.get(t);i&&(r=e).push.apply(r,s(s(i).map((function(e){return e.entity}))))}))):e=r,e.forEach((function(e){if(void 0!==e.props.initialValue){var r=e.getNamePath();if(void 0!==i.getInitialValue(r))p(!1,"Form already set 'initialValues' with path '".concat(r.join("."),"'. Field can not overwrite it."));else{var a=n.get(r);if(a&&a.size>1)p(!1,"Multiple Field with path '".concat(r.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(a){var o=i.getFieldValue(r);e.isListField()||t.skipExist&&void 0!==o||i.updateStore(V(i.store,r,s(a)[0].value))}}}}))})),o(this,"resetFields",(function(e){i.warningUnhooked();var t=i.store;if(!e)return i.updateStore(F(i.initialValues)),i.resetWithFieldInitialValue(),i.notifyObservers(t,null,{type:"reset"}),void i.notifyWatch();var n=e.map(U);n.forEach((function(e){var t=i.getInitialValue(e);i.updateStore(V(i.store,e,t))})),i.resetWithFieldInitialValue({namePathList:n}),i.notifyObservers(t,n,{type:"reset"}),i.notifyWatch(n)})),o(this,"setFields",(function(e){i.warningUnhooked();var t=i.store,n=[];e.forEach((function(e){var r=e.name,a=v(e,Q),s=U(r);n.push(s),"value"in a&&i.updateStore(V(i.store,s,a.value)),i.notifyObservers(t,[s],{type:"setField",data:e})})),i.notifyWatch(n)})),o(this,"getFields",(function(){return i.getFieldEntities(!0).map((function(e){var t=e.getNamePath(),n=e.getMeta(),a=r(r({},n),{},{name:t,value:i.getFieldValue(t)});return Object.defineProperty(a,"originRCField",{value:!0}),a}))})),o(this,"initEntityValue",(function(e){var t=e.props.initialValue;if(void 0!==t){var n=e.getNamePath();void 0===y(i.store,n)&&i.updateStore(V(i.store,n,t))}})),o(this,"isMergedPreserve",(function(e){var t=void 0!==e?e:i.preserve;return null==t||t})),o(this,"registerField",(function(e){i.fieldEntities.push(e);var t=e.getNamePath();if(i.notifyWatch([t]),void 0!==e.props.initialValue){var n=i.store;i.resetWithFieldInitialValue({entities:[e],skipExist:!0}),i.notifyObservers(n,[e.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(i.fieldEntities=i.fieldEntities.filter((function(t){return t!==e})),!i.isMergedPreserve(r)&&(!n||a.length>1)){var s=n?void 0:i.getInitialValue(t);if(t.length&&i.getFieldValue(t)!==s&&i.fieldEntities.every((function(e){// Only reset when no namePath exist
return!j(e.getNamePath(),t)}))){var o=i.store;i.updateStore(V(o,t,s,!0)),i.notifyObservers(o,[t],{type:"remove"}),i.triggerDependenciesUpdate(o,t)}}i.notifyWatch([t])}})),o(this,"dispatch",(function(e){switch(e.type){case"updateValue":var t=e.namePath,n=e.value;i.updateValue(t,n);break;case"validateField":var r=e.namePath,a=e.triggerName;i.validateFields([r],{triggerName:a})}})),o(this,"notifyObservers",(function(e,t,n){if(i.subscribable){var a=r(r({},n),{},{store:i.getFieldsValue(!0)});i.getFieldEntities().forEach((function(n){(0,n.onStoreChange)(e,t,a)}))}else i.forceRootUpdate()})),o(this,"triggerDependenciesUpdate",(function(e,t){var n=i.getDependencyChildrenFields(t);return n.length&&i.validateFields(n),i.notifyObservers(e,n,{type:"dependenciesUpdate",relatedFields:[t].concat(s(n))}),n})),o(this,"updateValue",(function(e,t){var n=U(e),r=i.store;i.updateStore(V(i.store,n,t)),i.notifyObservers(r,[n],{type:"valueUpdate",source:"internal"}),i.notifyWatch([n]);var a=i.triggerDependenciesUpdate(r,n),o=i.callbacks.onValuesChange;o&&o(T(i.store,[n]),i.getFieldsValue()),i.triggerOnFieldsChange([n].concat(s(a)))})),o(this,"setFieldsValue",(function(e){i.warningUnhooked();var t=i.store;if(e){var n=F(i.store,e);i.updateStore(n)}i.notifyObservers(t,null,{type:"valueUpdate",source:"external"}),i.notifyWatch()})),o(this,"setFieldValue",(function(e,t){i.setFields([{name:e,value:t}])})),o(this,"getDependencyChildrenFields",(function(e){var t=new Set,n=[],r=new B;return i.getFieldEntities().forEach((function(e){(e.props.dependencies||[]).forEach((function(t){var n=U(t);r.update(n,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set;return t.add(e),t}))}))})),function e(i){(r.get(i)||new Set).forEach((function(r){if(!t.has(r)){t.add(r);var i=r.getNamePath();r.isFieldDirty()&&i.length&&(n.push(i),e(i))}}))}(e),n})),o(this,"triggerOnFieldsChange",(function(e,t){var n=i.callbacks.onFieldsChange;if(n){var r=i.getFields();if(t){var a=new B;t.forEach((function(e){var t=e.name,n=e.errors;a.set(t,n)})),r.forEach((function(e){e.errors=a.get(e.name)||e.errors}))}var s=r.filter((function(t){var n=t.name;return W(e,n)}));s.length&&n(s,r)}})),o(this,"validateFields",(function(e,t){var n,a;i.warningUnhooked(),Array.isArray(e)||"string"==typeof e||"string"==typeof t?(n=e,a=t):a=e;var o=!!n,u=o?n.map(U):[],l=[],c=String(Date.now()),d=new Set,f=a||{},g=f.recursive,v=f.dirty;i.getFieldEntities(!0).forEach((function(e){if(o||u.push(e.getNamePath()),e.props.rules&&e.props.rules.length&&(!v||e.isFieldDirty())){var t=e.getNamePath();if(d.add(t.join(c)),!o||W(u,t,g)){var n=e.validateRules(r({validateMessages:r(r({},M),i.validateMessages)},a));l.push(n.then((function(){return{name:t,errors:[],warnings:[]}})).catch((function(e){var n,r=[],i=[];return null===(n=e.forEach)||void 0===n||n.call(e,(function(e){var t=e.rule.warningOnly,n=e.errors;t?i.push.apply(i,s(n)):r.push.apply(r,s(n))})),r.length?Promise.reject({name:t,errors:r,warnings:i}):{name:t,errors:r,warnings:i}})))}}}));var h=function(e){var t=!1,n=e.length,r=[];return e.length?new Promise((function(i,a){e.forEach((function(e,s){e.catch((function(e){return t=!0,e})).then((function(e){n-=1,r[s]=e,n>0||(t&&a(r),i(r))}))}))})):Promise.resolve([])}(l);i.lastValidatePromise=h,h.catch((function(e){return e})).then((function(e){var t=e.map((function(e){return e.name}));i.notifyObservers(i.store,t,{type:"validateFinish"}),i.triggerOnFieldsChange(t,e)}));var m=h.then((function(){return i.lastValidatePromise===h?Promise.resolve(i.getFieldsValue(u)):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:i.getFieldsValue(u),errorFields:t,outOfDate:i.lastValidatePromise!==h})}));m.catch((function(e){return e}));var p=u.filter((function(e){return d.has(e.join(c))}));return i.triggerOnFieldsChange(p),m})),o(this,"submit",(function(){i.warningUnhooked(),i.validateFields().then((function(e){var t=i.callbacks.onFinish;if(t)try{t(e)}catch(n){console.error(n)}})).catch((function(e){var t=i.callbacks.onFinishFailed;t&&t(e)}))})),this.forceRootUpdate=n}));function Z(e){var t=n.useRef(),r=n.useState({}),i=m(r,2)[1];if(!t.current)if(e)t.current=e;else{var a=new X((function(){i({})}));t.current=a.getForm()}return[t.current]}var ee=n.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),te=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],ne=function(t,i){var a=t.name,o=t.initialValues,l=t.fields,c=t.form,d=t.preserve,f=t.children,g=t.component,p=void 0===g?"form":g,F=t.validateMessages,y=t.validateTrigger,V=void 0===y?"onChange":y,b=t.onValuesChange,E=t.onFieldsChange,k=t.onFinish,C=t.onFinishFailed,x=v(t,te),M=n.useContext(ee),N=Z(c),R=m(N,1)[0],I=R.getInternalHooks(e),$=I.useSubscribe,A=I.setInitialValues,L=I.setCallbacks,S=I.setValidateMessages,O=I.setPreserve,U=I.destroyForm;// Pass ref with form instance
n.useImperativeHandle(i,(function(){return R})),// Register form into Context
n.useEffect((function(){return M.registerForm(a,R),function(){M.unregisterForm(a)}}),[M,R,a]),// Pass props to store
S(r(r({},M.validateMessages),F)),L({onValuesChange:b,onFieldsChange:function(e){if(M.triggerFormChange(a,e),E){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];E.apply(void 0,[e].concat(n))}},onFinish:function(e){M.triggerFormFinish(a,e),k&&k(e)},onFinishFailed:C}),O(d);// Set initial value, init store value when first mount
var T,W=n.useRef(null);A(o,!W.current),W.current||(W.current=!0),n.useEffect((function(){return U}),// eslint-disable-next-line react-hooks/exhaustive-deps
[]);var j="function"==typeof f;T=j?f(R.getFieldsValue(!0),R):f,// Not use subscribe when using render props
$(!j);// Listen if fields provided. We use ref to save prev data here to avoid additional render
var _=n.useRef();n.useEffect((function(){(function(e,t){if(e===t)return!0;if(!e&&t||e&&!t)return!1;if(!e||!t||"object"!==u(e)||"object"!==u(t))return!1;var n=Object.keys(e),r=Object.keys(t),i=new Set([].concat(n,r));return s(i).every((function(n){var r=e[n],i=t[n];return"function"==typeof r&&"function"==typeof i||r===i}))})(_.current||[],l||[])||R.setFields(l||[]),_.current=l}),[l,R]);var D=n.useMemo((function(){return r(r({},R),{},{validateTrigger:V})}),[R,V]),H=n.createElement(w.Provider,{value:null},n.createElement(P.Provider,{value:D},T));return!1===p?H:n.createElement(p,h({},x,{onSubmit:function(e){e.preventDefault(),e.stopPropagation(),R.submit()},onReset:function(e){var t;e.preventDefault(),R.resetFields(),null===(t=x.onReset)||void 0===t||t.call(x,e)}}),H)};function re(e){try{return JSON.stringify(e)}catch(t){return Math.random()}}var ie=n.forwardRef(ne);ie.FormProvider=function(e){var t=e.validateMessages,i=e.onFormChange,a=e.onFormFinish,s=e.children,u=n.useContext(ee),l=n.useRef({});return n.createElement(ee.Provider,{value:r(r({},u),{},{validateMessages:r(r({},u.validateMessages),t),// =========================================================
// =                  Global Form Control                  =
// =========================================================
triggerFormChange:function(e,t){i&&i(e,{changedFields:t,forms:l.current}),u.triggerFormChange(e,t)},triggerFormFinish:function(e,t){a&&a(e,{values:t,forms:l.current}),u.triggerFormFinish(e,t)},registerForm:function(e,t){e&&(l.current=r(r({},l.current),{},o({},e,t))),u.registerForm(e,t)},unregisterForm:function(e){var t=r({},l.current);delete t[e],l.current=t,u.unregisterForm(e)}})},s)},ie.Field=K,ie.List=function(e){var t=e.name,i=e.initialValue,a=e.children,o=e.rules,u=e.validateTrigger,l=e.isListField,c=n.useContext(P),d=n.useContext(w),f=n.useRef({keys:[],id:0}).current,g=n.useMemo((function(){var e=U(c.prefixName)||[];return[].concat(s(e),s(U(t)))}),[c.prefixName,t]),v=n.useMemo((function(){return r(r({},c),{},{prefixName:g})}),[c,g]),h=n.useMemo((function(){return{getKey:function(e){var t=g.length,n=e[t];return[f.keys[n],e.slice(t+1)]}}}),[g]);return"function"!=typeof a?(p(!1,"Form.List only accepts function as children."),null):n.createElement(w.Provider,{value:h},n.createElement(P.Provider,{value:v},n.createElement(K,{name:[],shouldUpdate:function(e,t,n){return"internal"!==n.source&&e!==t},rules:o,validateTrigger:u,initialValue:i,isList:!0,isListField:null!=l?l:!!d},(function(e,t){var n=e.value,r=void 0===n?[]:n,i=e.onChange,o=c.getFieldValue,u=function(){return o(g||[])||[]},l={add:function(e,t){var n=u();t>=0&&t<=n.length?(f.keys=[].concat(s(f.keys.slice(0,t)),[f.id],s(f.keys.slice(t))),i([].concat(s(n.slice(0,t)),[e],s(n.slice(t))))):(f.keys=[].concat(s(f.keys),[f.id]),i([].concat(s(n),[e]))),f.id+=1},remove:function(e){var t=u(),n=new Set(Array.isArray(e)?e:[e]);n.size<=0||(f.keys=f.keys.filter((function(e,t){return!n.has(t)})),i(t.filter((function(e,t){return!n.has(t)}))))},move:function(e,t){if(e!==t){var n=u();e<0||e>=n.length||t<0||t>=n.length||(f.keys=D(f.keys,e,t),i(D(n,e,t)))}}},d=r||[];return Array.isArray(d)||(d=[]),a(d.map((function(e,t){var n=f.keys[t];return void 0===n&&(f.keys[t]=f.id,n=f.keys[t],f.id+=1),{name:t,key:n,isListField:!0}})),l,t)}))))},ie.useForm=Z,ie.useWatch=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var a=r[0],s=r[1],o=void 0===s?{}:s,u=function(e){return e&&!!e._init}(o)?{form:o}:o,l=u.form,c=n.useState(),d=m(c,2),f=d[0],g=d[1],v=n.useMemo((function(){return re(f)}),[f]),h=n.useRef(v);h.current=v;var p=n.useContext(P),F=l||p,V=F&&F._init,b=U(a),E=n.useRef(b);return E.current=b,n.useEffect((function(){if(V){var t=F.getFieldsValue,n=(0,F.getInternalHooks)(e).registerWatch,r=function(e,t){var n=u.preserve?t:e;return"function"==typeof a?a(n):y(n,E.current)},i=n((function(e,t){var n=r(e,t),i=re(n);h.current!==i&&(h.current=i,g(n))})),s=r(t(),t(!0));return f!==s&&g(s),i}}),// We do not need re-register since namePath content is the same
// eslint-disable-next-line react-hooks/exhaustive-deps
[V]),f}}}}));
