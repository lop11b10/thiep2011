(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Zy(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Td={exports:{}},pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function gE(){if(Qv)return pl;Qv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return pl.Fragment=e,pl.jsx=i,pl.jsxs=i,pl}var Jv;function vE(){return Jv||(Jv=1,Td.exports=gE()),Td.exports}var wt=vE(),bd={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function _E(){if($v)return he;$v=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),_=Symbol.for("react.view_transition"),M=Symbol.iterator;function E(A){return A===null||typeof A!="object"?null:(A=M&&A[M]||A["@@iterator"],typeof A=="function"?A:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,x={};function L(A,V,nt){this.props=A,this.context=V,this.refs=x,this.updater=nt||T}L.prototype.isReactComponent={},L.prototype.setState=function(A,V){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,V,"setState")},L.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function R(){}R.prototype=L.prototype;function N(A,V,nt){this.props=A,this.context=V,this.refs=x,this.updater=nt||T}var Y=N.prototype=new R;Y.constructor=N,S(Y,L.prototype),Y.isPureReactComponent=!0;var G=Array.isArray;function P(){}var q={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function w(A,V,nt){var $=nt.ref;return{$$typeof:s,type:A,key:V,ref:$!==void 0?$:null,props:nt}}function X(A,V){return w(A.type,V,A.props)}function ft(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function ct(A){var V={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(nt){return V[nt]})}var _t=/\/+/g;function ht(A,V){return typeof A=="object"&&A!==null&&A.key!=null?ct(""+A.key):V.toString(36)}function Z(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(P,P):(A.status="pending",A.then(function(V){A.status==="pending"&&(A.status="fulfilled",A.value=V)},function(V){A.status==="pending"&&(A.status="rejected",A.reason=V)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function rt(A,V,nt,$,St){var bt=typeof A;(bt==="undefined"||bt==="boolean")&&(A=null);var Dt=!1;if(A===null)Dt=!0;else switch(bt){case"bigint":case"string":case"number":Dt=!0;break;case"object":switch(A.$$typeof){case s:case e:Dt=!0;break;case g:return Dt=A._init,rt(Dt(A._payload),V,nt,$,St)}}if(Dt)return St=St(A),Dt=$===""?"."+ht(A,0):$,G(St)?(nt="",Dt!=null&&(nt=Dt.replace(_t,"$&/")+"/"),rt(St,V,nt,"",function(kt){return kt})):St!=null&&(ft(St)&&(St=X(St,nt+(St.key==null||A&&A.key===St.key?"":(""+St.key).replace(_t,"$&/")+"/")+Dt)),V.push(St)),1;Dt=0;var O=$===""?".":$+":";if(G(A))for(var Mt=0;Mt<A.length;Mt++)$=A[Mt],bt=O+ht($,Mt),Dt+=rt($,V,nt,bt,St);else if(Mt=E(A),typeof Mt=="function")for(A=Mt.call(A),Mt=0;!($=A.next()).done;)$=$.value,bt=O+ht($,Mt++),Dt+=rt($,V,nt,bt,St);else if(bt==="object"){if(typeof A.then=="function")return rt(Z(A),V,nt,$,St);throw V=String(A),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Dt}function tt(A,V,nt){if(A==null)return A;var $=[],St=0;return rt(A,$,"","",function(bt){return V.call(nt,bt,St++)}),$}function At(A){if(A._status===-1){var V=A._result,nt=V();nt.then(function($){(A._status===0||A._status===-1)&&(A._status=1,A._result=$,nt.status===void 0&&(nt.status="fulfilled",nt.value=$))},function($){(A._status===0||A._status===-1)&&(A._status=2,A._result=$,nt.status===void 0&&(nt.status="rejected",nt.reason=$))}),A._status===-1&&(A._status=0,A._result=nt)}if(A._status===1)return A._result.default;throw A._result}var H=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function z(A){var V=q.T,nt={};nt.types=V!==null?V.types:null,q.T=nt;try{var $=A(),St=q.S;St!==null&&St(nt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(P,H)}catch(bt){H(bt)}finally{V!==null&&nt.types!==null&&(V.types=nt.types),q.T=V}}function Tt(A){var V=q.T;if(V!==null){var nt=V.types;nt===null?V.types=[A]:nt.indexOf(A)===-1&&nt.push(A)}else z(Tt.bind(null,A))}var Nt={map:tt,forEach:function(A,V,nt){tt(A,function(){V.apply(this,arguments)},nt)},count:function(A){var V=0;return tt(A,function(){V++}),V},toArray:function(A){return tt(A,function(V){return V})||[]},only:function(A){if(!ft(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return he.Activity=m,he.Children=Nt,he.Component=L,he.Fragment=i,he.Profiler=l,he.PureComponent=N,he.StrictMode=r,he.Suspense=p,he.ViewTransition=_,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,he.__COMPILER_RUNTIME={__proto__:null,c:function(A){return q.H.useMemoCache(A)}},he.addTransitionType=Tt,he.cache=function(A){return function(){return A.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(A,V,nt){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var $=S({},A.props),St=A.key;if(V!=null)for(bt in V.key!==void 0&&(St=""+V.key),V)!U.call(V,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&V.ref===void 0||($[bt]=V[bt]);var bt=arguments.length-2;if(bt===1)$.children=nt;else if(1<bt){for(var Dt=Array(bt),O=0;O<bt;O++)Dt[O]=arguments[O+2];$.children=Dt}return w(A.type,St,$)},he.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:c,_context:A},A},he.createElement=function(A,V,nt){var $,St={},bt=null;if(V!=null)for($ in V.key!==void 0&&(bt=""+V.key),V)U.call(V,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(St[$]=V[$]);var Dt=arguments.length-2;if(Dt===1)St.children=nt;else if(1<Dt){for(var O=Array(Dt),Mt=0;Mt<Dt;Mt++)O[Mt]=arguments[Mt+2];St.children=O}if(A&&A.defaultProps)for($ in Dt=A.defaultProps,Dt)St[$]===void 0&&(St[$]=Dt[$]);return w(A,bt,St)},he.createRef=function(){return{current:null}},he.forwardRef=function(A){return{$$typeof:d,render:A}},he.isValidElement=ft,he.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:At}},he.memo=function(A,V){return{$$typeof:v,type:A,compare:V===void 0?null:V}},he.startTransition=z,he.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},he.use=function(A){return q.H.use(A)},he.useActionState=function(A,V,nt){return q.H.useActionState(A,V,nt)},he.useCallback=function(A,V){return q.H.useCallback(A,V)},he.useContext=function(A){return q.H.useContext(A)},he.useDebugValue=function(){},he.useDeferredValue=function(A,V){return q.H.useDeferredValue(A,V)},he.useEffect=function(A,V){return q.H.useEffect(A,V)},he.useEffectEvent=function(A){return q.H.useEffectEvent(A)},he.useId=function(){return q.H.useId()},he.useImperativeHandle=function(A,V,nt){return q.H.useImperativeHandle(A,V,nt)},he.useInsertionEffect=function(A,V){return q.H.useInsertionEffect(A,V)},he.useLayoutEffect=function(A,V){return q.H.useLayoutEffect(A,V)},he.useMemo=function(A,V){return q.H.useMemo(A,V)},he.useOptimistic=function(A,V){return q.H.useOptimistic(A,V)},he.useReducer=function(A,V,nt){return q.H.useReducer(A,V,nt)},he.useRef=function(A){return q.H.useRef(A)},he.useState=function(A){return q.H.useState(A)},he.useSyncExternalStore=function(A,V,nt){return q.H.useSyncExternalStore(A,V,nt)},he.useTransition=function(){return q.H.useTransition()},he.version="19.3.1",he}var t_;function Lp(){return t_||(t_=1,bd.exports=_E()),bd.exports}var Ve=Lp();const yE=Zy(Ve);var Ad={exports:{}},ml={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function SE(){return e_||(e_=1,(function(s){function e(Z,rt){var tt=Z.length;Z.push(rt);t:for(;0<tt;){var At=tt-1>>>1,H=Z[At];if(0<l(H,rt))Z[At]=rt,Z[tt]=H,tt=At;else break t}}function i(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var rt=Z[0],tt=Z.pop();if(tt!==rt){Z[0]=tt;t:for(var At=0,H=Z.length,z=H>>>1;At<z;){var Tt=2*(At+1)-1,Nt=Z[Tt],A=Tt+1,V=Z[A];if(0>l(Nt,tt))A<H&&0>l(V,Nt)?(Z[At]=V,Z[A]=tt,At=A):(Z[At]=Nt,Z[Tt]=tt,At=Tt);else if(A<H&&0>l(V,tt))Z[At]=V,Z[A]=tt,At=A;else break t}}return rt}function l(Z,rt){var tt=Z.sortIndex-rt.sortIndex;return tt!==0?tt:Z.id-rt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],v=[],g=1,m=null,_=3,M=!1,E=!1,T=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function N(Z){for(var rt=i(v);rt!==null;){if(rt.callback===null)r(v);else if(rt.startTime<=Z)r(v),rt.sortIndex=rt.expirationTime,e(p,rt);else break;rt=i(v)}}function Y(Z){if(T=!1,N(Z),!E)if(i(p)!==null)E=!0,G||(G=!0,ft());else{var rt=i(v);rt!==null&&ht(Y,rt.startTime-Z)}}var G=!1,P=-1,q=5,U=-1;function w(){return S?!0:!(s.unstable_now()-U<q)}function X(){if(S=!1,G){var Z=s.unstable_now();U=Z;var rt=!0;try{t:{E=!1,T&&(T=!1,L(P),P=-1),M=!0;var tt=_;try{e:{for(N(Z),m=i(p);m!==null&&!(m.expirationTime>Z&&w());){var At=m.callback;if(typeof At=="function"){m.callback=null,_=m.priorityLevel;var H=At(m.expirationTime<=Z);if(Z=s.unstable_now(),typeof H=="function"){m.callback=H,N(Z),rt=!0;break e}m===i(p)&&r(p),N(Z)}else r(p);m=i(p)}if(m!==null)rt=!0;else{var z=i(v);z!==null&&ht(Y,z.startTime-Z),rt=!1}}break t}finally{m=null,_=tt,M=!1}rt=void 0}}finally{rt?ft():G=!1}}}var ft;if(typeof R=="function")ft=function(){R(X)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,_t=ct.port2;ct.port1.onmessage=X,ft=function(){_t.postMessage(null)}}else ft=function(){x(X,0)};function ht(Z,rt){P=x(function(){Z(s.unstable_now())},rt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(Z){switch(_){case 1:case 2:case 3:var rt=3;break;default:rt=_}var tt=_;_=rt;try{return Z()}finally{_=tt}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(Z,rt){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var tt=_;_=Z;try{return rt()}finally{_=tt}},s.unstable_scheduleCallback=function(Z,rt,tt){var At=s.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?At+tt:At):tt=At,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=tt+H,Z={id:g++,callback:rt,priorityLevel:Z,startTime:tt,expirationTime:H,sortIndex:-1},tt>At?(Z.sortIndex=tt,e(v,Z),i(p)===null&&Z===i(v)&&(T?(L(P),P=-1):T=!0,ht(Y,tt-At))):(Z.sortIndex=H,e(p,Z),E||M||(E=!0,G||(G=!0,ft()))),Z},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(Z){var rt=_;return function(){var tt=_;_=rt;try{return Z.apply(this,arguments)}finally{_=tt}}}})(Rd)),Rd}var n_;function xE(){return n_||(n_=1,Cd.exports=SE()),Cd.exports}var wd={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function ME(){if(i_)return An;i_=1;var s=Lp();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(g,m,_){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:g,containerInfo:m,implementation:_}}var p=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.browser=function(g){return{$$typeof:c,_reason:g}},An.createPortal=function(g,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(g,m,null,_)},An.flushSync=function(g){var m=p.T,_=r.p;try{if(p.T=null,r.p=2,g)return g()}finally{p.T=m,r.p=_,r.d.f()}},An.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(g,m))},An.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},An.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var _=m.as,M=v(_,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,T=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?r.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:E,fetchPriority:T}):_==="script"&&r.d.X(g,{crossOrigin:M,integrity:E,fetchPriority:T,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=v(m.as,m.crossOrigin);r.d.M(g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&r.d.M(g)},An.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,M=v(_,m.crossOrigin);r.d.L(g,_,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(g,m){if(typeof g=="string")if(m){var _=v(m.as,m.crossOrigin);r.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else r.d.m(g)},An.requestFormReset=function(g){r.d.r(g)},An.unstable_batchedUpdates=function(g,m){return g(m)},An.useFormState=function(g,m,_){return p.H.useFormState(g,m,_)},An.useFormStatus=function(){return p.H.useHostTransitionStatus()},An.version="19.3.1",An}var a_;function EE(){if(a_)return wd.exports;a_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wd.exports=ME(),wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function TE(){if(r_)return ml;r_=1;var s=xE(),e=Lp(),i=EE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function v(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,b=u.child;b;){if(b===a){y=!0,a=u,o=f;break}if(b===o){y=!0,o=u,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,o=u;break}if(b===o){y=!0,o=f,a=u;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,o,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,o,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,o,u,f))return!0;t=t.sibling}return!1}function _(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=_(t);return a===null||T(n,t,a.child,{foundSelf:!1}),n}function T(t,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(t,n,a.child,o))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var x=null,L=null;function R(t,n,a){return t===a?!0:t===n?(x=t,!0):!1}function N(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(x=t),!0):!1}function Y(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function G(t,n,a){for(var o=0,u=t;u;u=a(u))o++;u=0;for(var f=n;f;f=a(f))u++;for(;0<o-u;)t=a(t),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,q=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ft=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),Tt=Symbol.for("react.legacy_hidden"),Nt=Symbol.for("react.memo_cache_sentinel"),A=Symbol.for("react.view_transition"),V=Symbol.for("react.recoverable"),nt=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=nt&&t[nt]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function bt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case ct:return"Profiler";case ft:return"StrictMode";case rt:return"Suspense";case tt:return"SuspenseList";case z:return"Activity";case A:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ht:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case Z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return n=t.displayName||null,n!==null?n:bt(t.type)||"Memo";case H:n=t._payload,t=t._init;try{return bt(t(n))}catch{}}return null}var Dt=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Mt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,kt={pending:!1,data:null,method:null,action:null},jt=[],Gt=-1;function Jt(t){return{current:t}}function Vt(t){0>Gt||(t.current=jt[Gt],jt[Gt]=null,Gt--)}function Lt(t,n){Gt++,jt[Gt]=t.current,t.current=n}var de=Jt(null),B=Jt(null),C=Jt(null),ut=Jt(null);function yt(t,n){switch(Lt(C,n),Lt(B,t),Lt(de,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?sv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=sv(n),t=ov(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Vt(de),Lt(de,t)}function xt(){Vt(de),Vt(B),Vt(C)}function Et(t){var n=t.memoizedState;n!==null&&(Gs._currentValue=n.memoizedState,Lt(ut,t)),n=de.current;var a=ov(n,t.type);n!==a&&(Lt(B,t),Lt(de,a))}function Kt(t){B.current===t&&(Vt(de),Vt(B)),ut.current===t&&(Vt(ut),Gs._currentValue=kt)}var Ot,Pt;function ie(t){if(Ot===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ot=n&&n[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+t+Pt}var Rt=!1;function qt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(zt){var j=zt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(zt){j=zt}mt=!1;try{var at=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(at!==void 0?Object.defineProperty(t.prototype,"props",at):delete t.prototype.props)}}}else{try{throw Error()}catch(zt){j=zt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(zt){if(zt&&j&&typeof zt.stack=="string")return[zt.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var I=y.split(`
`),J=b.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===J.length)for(o=I.length-1,u=J.length-1;1<=o&&0<=u&&I[o]!==J[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==J[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==J[u]){var ot=`
`+I[o].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=o&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ie(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return t.child!==n&&n!==null?ie("Suspense Fallback"):ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return qt(t.type,!1);case 11:return qt(t.type.render,!1);case 1:return qt(t.type,!0);case 31:return ie("Activity");case 30:return ie("ViewTransition");default:return""}}function ae(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var It=Object.prototype.hasOwnProperty,Bt=s.unstable_scheduleCallback,Yt=s.unstable_cancelCallback,pe=s.unstable_shouldYield,F=s.unstable_requestPaint,Ct=s.unstable_now,dt=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,vt=s.unstable_UserBlockingPriority,Ht=s.unstable_NormalPriority,le=s.unstable_LowPriority,ge=s.unstable_IdlePriority,se=s.log,ce=s.unstable_setDisableYieldValue,Ue=null,Re=null;function sn(t){if(typeof se=="function"&&ce(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ue,t)}catch{}}var an=Math.clz32?Math.clz32:Ca,ea=Math.log,ns=Math.LN2;function Ca(t){return t>>>=0,t===0?32:31-(ea(t)/ns|0)|0}var na=256,li=262144,Ii=4194304;function ui(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ia(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=ui(o):(y&=b,y!==0?u=ui(y):a||(a=b&~t,a!==0&&(u=ui(a))))):(b=o&~f,b!==0?u=ui(b):y!==0?u=ui(y):a||(a=o&~t,a!==0&&(u=ui(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Fi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function gr(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var o=31-an(a),u=1<<o;n|=t[o],a&=~u}return n}function D(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q(){var t=Ii;return Ii<<=1,(Ii&62914560)===0&&(Ii=4194304),t}function st(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function lt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function it(t,n,a,o,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,J=t.hiddenUpdates;for(a=y&~a;0<a;){var ot=31-an(a),mt=1<<ot;b[ot]=0,I[ot]=-1;var j=J[ot];if(j!==null)for(J[ot]=null,ot=0;ot<j.length;ot++){var at=j[ot];at!==null&&(at.lane&=-536870913)}a&=~mt}o!==0&&Ut(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-an(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Xt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-an(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Zt(t,n){var a=n&-n;return a=(a&42)!==0?1:$t(a),(a&(t.suspendedLanes|n))!==0?0:a}function $t(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oe(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fe(){var t=Mt.p;return t!==0?t:(t=window.event,t===void 0?32:kv(t.type))}function re(t,n){var a=Mt.p;try{return Mt.p=t,n()}finally{Mt.p=a}}var ye=Math.random().toString(36).slice(2),Se="__reactFiber$"+ye,Te="__reactProps$"+ye,on="__reactContainer$"+ye,Le="__reactEvents$"+ye,ne="__reactListeners$"+ye,Sn="__reactHandles$"+ye,Pe="__reactResources$"+ye,Un="__reactMarker$"+ye,aa="__reactLoad$"+ye;function ci(t){delete t[Se],delete t[Te],delete t[ne],delete t[Sn]}function bi(t){var n;if(n=t[Se])return n;for(var a=t.parentNode;a;){if(n=a[on]||a[Se]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Tv(t);t!==null;){if(a=t[Se])return a;t=Tv(t)}return n}t=a,a=t.parentNode}return null}function Ze(t){if(t=t[Se]||t[on]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Hn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Hi(t){var n=t[Pe];return n||(n=t[Pe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ze(t){t[Un]=!0}function is(t){t[aa]=void 0}var zl=new Set,bo={};function vr(t,n){as(t,n),as(t+"Capture",n)}function as(t,n){for(bo[t]=n,t=0;t<n.length;t++)zl.add(n[t])}var OS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kp={},qp={};function PS(t){return It.call(qp,t)?!0:It.call(kp,t)?!1:OS.test(t)?qp[t]=!0:(kp[t]=!0,!1)}var Oe=!1;function Yp(){var t=Oe;return Oe=!1,t}function Bl(t,n,a){if(PS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Il(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ra(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,o)}}function jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zS(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $c(t){if(!t._valueTracker){var n=Wp(t)?"checked":"value";t._valueTracker=zS(t,n,""+t[n])}}function jp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Wp(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}var BS=/[\n"\\]/g;function fi(t){return t.replace(BS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tf(t,n,a,o,u,f,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+jn(n)):t.value!==""+jn(n)&&(t.value=""+jn(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?y==="number"&&t.value==n?ef(t,jn(t.value)):ef(t,jn(n)):a!=null?ef(t,jn(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+jn(b):t.removeAttribute("name")}function Zp(t,n,a,o,u,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){$c(t);return}a=a!=null?""+jn(a):"",n=n!=null?""+jn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),$c(t)}function ef(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function rs(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+jn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Kp(t,n,a){if(n!=null&&(n=""+jn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+jn(a):""}function Qp(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=jn(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),$c(t)}function ss(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var IS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||IS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function $p(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="",Oe=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(Jp(t,u,o),Oe=!0)}else for(var f in n)n.hasOwnProperty(f)&&Jp(t,f,n[f])}function nf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var FS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),HS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fl(t){return HS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gi(){}var af=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var os=null,ls=null;function tm(t){var n=Ze(t);if(n&&(t=n.stateNode)){var a=t[Te]||null;t:switch(t=n.stateNode,n.type){case"input":if(tf(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Te]||null;if(!u)throw Error(r(90));tf(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&jp(o)}break t;case"textarea":Kp(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&rs(t,!!a.multiple,n,!1)}}}var sf=!1;function em(t,n,a){if(sf)return t(n,a);sf=!0;try{var o=t(n);return o}finally{if(sf=!1,(os!==null||ls!==null)&&(Fu(),os&&(n=os,t=ls,ls=os=null,tm(n),t)))for(n=0;n<t.length;n++)tm(t[n])}}function Ao(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Te]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=!1;if(sa)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){of=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{of=!1}var Ra=null,lf=null,Hl=null;function nm(){if(Hl)return Hl;var t,n=lf,a=n.length,o,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return Hl=u.slice(t,1<o?1-o:void 0)}function Gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function im(){return!1}function Ln(t){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vl:im,this.isPropagationStopped=im,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Ln(wa),Ro=P({},wa,{view:0,detail:0}),GS=Ln(Ro),uf,cf,wo,kl=P({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wo&&(wo&&t.type==="mousemove"?(uf=t.screenX-wo.screenX,cf=t.screenY-wo.screenY):cf=uf=0,wo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:cf}}),am=Ln(kl),VS=P({},kl,{dataTransfer:0}),XS=Ln(VS),kS=P({},Ro,{relatedTarget:0}),ff=Ln(kS),qS=P({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=Ln(qS),WS=P({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jS=Ln(WS),ZS=P({},wa,{data:0}),rm=Ln(ZS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $S(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=JS[t])?!!n[t]:!1}function hf(){return $S}var tx=P({},Ro,{key:function(t){if(t.key){var n=KS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ex=Ln(tx),nx=P({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Ln(nx),ix=P({},wa,{submitter:0}),ax=Ln(ix),rx=P({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),sx=Ln(rx),ox=P({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Ln(ox),ux=P({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cx=Ln(ux),fx=P({},wa,{newState:0,oldState:0,source:0}),hx=Ln(fx),dx=[9,13,27,32],df=sa&&"CompositionEvent"in window,Do=null;sa&&"documentMode"in document&&(Do=document.documentMode);var px=sa&&"TextEvent"in window&&!Do,om=sa&&(!df||Do&&8<Do&&11>=Do),lm=" ",um=!1;function cm(t,n){switch(t){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function mx(t,n){switch(t){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(um=!0,lm);case"textInput":return t=n.data,t===lm&&um?null:t;default:return null}}function gx(t,n){if(us)return t==="compositionend"||!df&&cm(t,n)?(t=nm(),Hl=lf=Ra=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vx[t.type]:n==="textarea"}function dm(t,n,a,o){os?ls?ls.push(o):ls=[o]:os=o,n=qu(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var No=null,Uo=null;function _x(t){tv(t,0)}function ql(t){var n=Hn(t);if(jp(n))return t}function pm(t,n){if(t==="change")return n}var mm=!1;if(sa){var pf;if(sa){var mf="oninput"in document;if(!mf){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),mf=typeof gm.oninput=="function"}pf=mf}else pf=!1;mm=pf&&(!document.documentMode||9<document.documentMode)}function vm(){No&&(No.detachEvent("onpropertychange",_m),Uo=No=null)}function _m(t){if(t.propertyName==="value"&&ql(Uo)){var n=[];dm(n,Uo,t,rf(t)),em(_x,n)}}function yx(t,n,a){t==="focusin"?(vm(),No=n,Uo=a,No.attachEvent("onpropertychange",_m)):t==="focusout"&&vm()}function Sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Uo)}function xx(t,n){if(t==="click")return ql(n)}function Mx(t,n){if(t==="input"||t==="change")return ql(n)}function Ex(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Ex;function Lo(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!It.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function gf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,n){var a=ym(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ym(a)}}function xm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?xm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gf(t.document)}return n}function vf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Tx=sa&&"documentMode"in document&&11>=document.documentMode,cs=null,_f=null,Oo=null,yf=!1;function Em(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yf||cs==null||cs!==gf(o)||(o=cs,"selectionStart"in o&&vf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oo&&Lo(Oo,o)||(Oo=o,o=qu(_f,"onSelect"),0<o.length&&(n=new Xl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=cs)))}function _r(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var fs={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionrun:_r("Transition","TransitionRun"),transitionstart:_r("Transition","TransitionStart"),transitioncancel:_r("Transition","TransitionCancel"),transitionend:_r("Transition","TransitionEnd")},Sf={},Tm={};sa&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function yr(t){if(Sf[t])return Sf[t];if(!fs[t])return t;var n=fs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tm)return Sf[t]=n[a];return t}var bm=yr("animationend"),Am=yr("animationiteration"),Cm=yr("animationstart"),bx=yr("transitionrun"),Ax=yr("transitionstart"),Cx=yr("transitioncancel"),Rm=yr("transitionend"),wm=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Ai(t,n){wm.set(t,n),vr(n,[t])}var Rx=0;function oa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Di.identifierPrefix;var a=Rx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Dm(t){if(t==null||typeof t=="string")return t;var n=null,a=Ns;if(a!==null)for(var o=0;o<a.length;o++){var u=t[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function la(t,n){return t=Dm(t),n=Dm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],hs=0,Mf=0;function Wl(){for(var t=hs,n=Mf=hs=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&Nm(a,u,f)}}function jl(t,n,a,o){hi[hs++]=t,hi[hs++]=n,hi[hs++]=a,hi[hs++]=o,Mf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ef(t,n,a,o){return jl(t,n,a,o),Zl(t)}function Sr(t,n){return jl(t,null,null,n),Zl(t)}function Nm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-an(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Zl(t){if(50<nl)throw nl=0,Iu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ds={};function wx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,o){return new wx(t,n,a,o)}function Tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ua(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Um(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Kl(t,n,a,o,u,f){var y=0;if(o=t,typeof o=="function")Tf(o)&&(y=1);else if(typeof o=="string")y=iE(t,a,de.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(o){case z:return t=Gn(31,a,n,u),t.elementType=z,t.lanes=f,t;case X:return xr(a.children,u,f,n);case ft:y=8,u|=24;break;case ct:return t=Gn(12,a,n,u|2),t.elementType=ct,t.lanes=f,t;case rt:return t=Gn(13,a,n,u),t.elementType=rt,t.lanes=f,t;case tt:return t=Gn(19,a,n,u),t.elementType=tt,t.lanes=f,t;case Tt:case A:return t=u|32,t=Gn(30,a,n,t),t.elementType=A,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case ht:y=10;break t;case _t:y=9;break t;case Z:y=11;break t;case At:y=14;break t;case H:y=16,o=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Gn(y,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function xr(t,n,a,o){return t=Gn(7,t,o,n),t.lanes=a,t}function bf(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function Lm(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function Af(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Om=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Om.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ae(n)},Om.set(t,n),n)}return{value:t,source:n,stack:ae(n)}}var ps=[],ms=0,Ql=null,Po=0,pi=[],mi=0,Da=null,Vi=1,Xi="";function ca(t,n){ps[ms++]=Po,ps[ms++]=Ql,Ql=t,Po=n}function Pm(t,n,a){pi[mi++]=Vi,pi[mi++]=Xi,pi[mi++]=Da,Da=t;var o=Vi;t=Xi;var u=32-an(o)-1;o&=~(1<<u),a+=1;var f=32-an(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Vi=1<<32-an(n)+u|a<<u|o,Xi=f+t}else Vi=1<<f|a<<u|o,Xi=t}function Jl(t){t.return!==null&&(ca(t,1),Pm(t,1,0))}function Cf(t){for(;t===Ql;)Ql=ps[--ms],ps[ms]=null,Po=ps[--ms],ps[ms]=null;for(;t===Da;)Da=pi[--mi],pi[mi]=null,Xi=pi[--mi],pi[mi]=null,Vi=pi[--mi],pi[mi]=null}function zm(t,n){pi[mi++]=Vi,pi[mi++]=Xi,pi[mi++]=Da,Vi=n.id,Xi=n.overflow,Da=t}var gn=null,Ye=null,Ee=!1,Na=null,gi=!1,Rf=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zo(di(n,t)),Rf}function Bm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Se]=t,n[Te]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<al.length;a++)Ae(al[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),Zp(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Qp(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||av(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||Ua(t,!0)}function $l(t){for(gn=t.return;gn;)switch(gn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:gn=gn.return}}function gs(t){if(t!==gn)return!1;if(!Ee)return $l(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ad(t.type,t.memoizedProps)),a=!a),a&&Ye&&Ua(t),$l(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=Ev(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=Ev(t)}else n===27?(n=Ye,ja(t.type)?(t=dd,dd=null,Ye=t):Ye=n):Ye=gn?_i(t.stateNode.nextSibling):null;return!0}function Mr(){Ye=gn=null,Ee=!1}function wf(){var t=Na;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),Na=null),t}function zo(t){Na===null?Na=[t]:Na.push(t)}var Df=Jt(null),Er=null,fa=null;function La(t,n,a){Lt(Df,n._currentValue),n._currentValue=a}function ha(t){t._currentValue=Df.current,Vt(Df)}function tu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Nf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),tu(f.return,a,t),o||(y=null);break t}f=b.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),tu(y,a,t),y=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),tu(u.return,a,t),y=u.child,y=y!==null?y.sibling:null):y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function Tr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=u.type;Zn(u.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(u===ut.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Gs):t=[Gs])}u=u.return}return t!==null&&Nf(n,t,a,o),n.flags|=262144,t!==null}function eu(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function xn(t){return Im(Er,t)}function nu(t,n){return Er===null&&br(t),Im(t,n)}function Im(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(t===null)throw Error(r(308));fa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else fa=fa.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Nx=s.unstable_scheduleCallback,Ux=s.unstable_NormalPriority,ln={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new Dx,data:new Map,refCount:0}}function Bo(t){t.refCount--,t.refCount===0&&Nx(Ux,function(){t.controller.abort()})}function Fm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var o=n[t];a.indexOf(o)===-1&&a.push(o)}}}var Io=null;function Lx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Fo=null,Lf=0,Ar=0,vs=null;function Ox(t,n){if(Fo===null){var a=Fo=[];Lf=0,Ar=Zh(),vs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lf++,n.then(Hm,Hm),n}function Hm(){if(--Lf===0&&(Io=null,Fo!==null)){vs!==null&&(vs.status="fulfilled");var t=Fo;Fo=null,Ar=0,vs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Px(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gm=O.S;O.S=function(t,n){if(L0=Ct(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(t,n),Io!==null)for(var a=Ps;a!==null;)Fm(a,Io),a=a.next;if(a=t.types,a!==null){for(var o=Ps;o!==null;)Fm(o,a),o=o.next;if(Ar!==0){o=Io,o===null&&(o=Io=[]);for(var u=0;u<a.length;u++){var f=a[u];o.indexOf(f)===-1&&o.push(f)}}}Gm!==null&&Gm(t,n)};var Cr=Jt(null);function Of(){var t=Cr.current;return t!==null?t:qe.pooledCache}function iu(t,n){n===null?Lt(Cr,Cr.current):Lt(Cr,n.pool)}function Vm(){var t=Of();return t===null?null:{parent:ln._currentValue,pool:t}}var _s=Error(r(460)),Pf=Error(r(474)),au=Error(r(542)),ru={then:function(){}};function Xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ym(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ym(t),t}throw wr=n,_s}}function Rr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wr=a,_s):a}}var wr=null;function qm(){if(wr===null)throw Error(r(459));var t=wr;return wr=null,t}function Ym(t){if(t===_s||t===au)throw Error(r(483))}var ys=null,Ho=0;function su(t){var n=Ho;return Ho+=1,ys===null&&(ys=[]),km(ys,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ou(t,n){throw n.$$typeof===q?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Wm(t){function n(K,k){if(t){var et=K.deletions;et===null?(K.deletions=[k],K.flags|=16):et.push(k)}}function a(K,k){if(!t)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key===null?k.set(K.index,K):k.set(K.key,K),K=K.sibling;return k}function u(K,k){return K=ua(K,k),K.index=0,K.sibling=null,K}function f(K,k,et){return K.index=et,t?(et=K.alternate,et!==null?(et=et.index,et<k?(K.flags|=2,k):et):(K.flags|=134217730,k)):(K.flags|=1048576,k)}function y(K){return t&&K.alternate===null&&(K.flags|=134217730),K}function b(K,k,et,pt){return k===null||k.tag!==6?(k=bf(et,K.mode,pt),k.return=K,k):(k=u(k,et),k.return=K,k)}function I(K,k,et,pt){var Wt=et.type;return Wt===X?(K=ot(K,k,et.props.children,pt,et.key),Oa(K,et),K):k!==null&&(k.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===H&&Rr(Wt)===k.type)?(k=u(k,et.props),Oa(k,et),k.return=K,k):(k=Kl(et.type,et.key,et.props,null,K.mode,pt),Oa(k,et),k.return=K,k)}function J(K,k,et,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Af(et,K.mode,pt),k.return=K,k):(k=u(k,et.children||[]),k.return=K,k)}function ot(K,k,et,pt,Wt){return k===null||k.tag!==7?(k=xr(et,K.mode,pt,Wt),k.return=K,k):(k=u(k,et),k.return=K,k)}function mt(K,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bf(""+k,K.mode,et),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case U:return et=Kl(k.type,k.key,k.props,null,K.mode,et),Oa(et,k),et.return=K,et;case w:return k=Af(k,K.mode,et),k.return=K,k;case H:return k=Rr(k),mt(K,k,et)}if(Dt(k)||$(k))return k=xr(k,K.mode,et,null),k.return=K,k;if(typeof k.then=="function")return mt(K,su(k),et);if(k.$$typeof===ht)return mt(K,nu(K,k),et);ou(K,k)}return null}function j(K,k,et,pt){var Wt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Wt!==null?null:b(K,k,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case U:return et.key===Wt?I(K,k,et,pt):null;case w:return et.key===Wt?J(K,k,et,pt):null;case H:return et=Rr(et),j(K,k,et,pt)}if(Dt(et)||$(et))return Wt!==null?null:ot(K,k,et,pt,null);if(typeof et.then=="function")return j(K,k,su(et),pt);if(et.$$typeof===ht)return j(K,k,nu(K,et),pt);ou(K,et)}return null}function at(K,k,et,pt,Wt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(et)||null,b(k,K,""+pt,Wt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case U:return K=K.get(pt.key===null?et:pt.key)||null,I(k,K,pt,Wt);case w:return K=K.get(pt.key===null?et:pt.key)||null,J(k,K,pt,Wt);case H:return pt=Rr(pt),at(K,k,et,pt,Wt)}if(Dt(pt)||$(pt))return K=K.get(et)||null,ot(k,K,pt,Wt,null);if(typeof pt.then=="function")return at(K,k,et,su(pt),Wt);if(pt.$$typeof===ht)return at(K,k,et,nu(k,pt),Wt);ou(k,pt)}return null}function zt(K,k,et,pt){for(var Wt=null,De=null,ee=k,ue=k=0,fn=null;ee!==null&&ue<et.length;ue++){ee.index>ue?(fn=ee,ee=null):fn=ee.sibling;var Ne=j(K,ee,et[ue],pt);if(Ne===null){ee===null&&(ee=fn);break}t&&ee&&Ne.alternate===null&&n(K,ee),k=f(Ne,k,ue),De===null?Wt=Ne:De.sibling=Ne,De=Ne,ee=fn}if(ue===et.length)return a(K,ee),Ee&&ca(K,ue),Wt;if(ee===null){for(;ue<et.length;ue++)ee=mt(K,et[ue],pt),ee!==null&&(k=f(ee,k,ue),De===null?Wt=ee:De.sibling=ee,De=ee);return Ee&&ca(K,ue),Wt}for(ee=o(ee);ue<et.length;ue++)fn=at(ee,K,ue,et[ue],pt),fn!==null&&(t&&(Ne=fn.alternate,Ne!==null&&ee.delete(Ne.key===null?ue:Ne.key)),k=f(fn,k,ue),De===null?Wt=fn:De.sibling=fn,De=fn);return t&&ee.forEach(function($a){return n(K,$a)}),Ee&&ca(K,ue),Wt}function Qt(K,k,et,pt){if(et==null)throw Error(r(151));for(var Wt=null,De=null,ee=k,ue=k=0,fn=null,Ne=et.next();ee!==null&&!Ne.done;ue++,Ne=et.next()){ee.index>ue?(fn=ee,ee=null):fn=ee.sibling;var $a=j(K,ee,Ne.value,pt);if($a===null){ee===null&&(ee=fn);break}t&&ee&&$a.alternate===null&&n(K,ee),k=f($a,k,ue),De===null?Wt=$a:De.sibling=$a,De=$a,ee=fn}if(Ne.done)return a(K,ee),Ee&&ca(K,ue),Wt;if(ee===null){for(;!Ne.done;ue++,Ne=et.next())Ne=mt(K,Ne.value,pt),Ne!==null&&(k=f(Ne,k,ue),De===null?Wt=Ne:De.sibling=Ne,De=Ne);return Ee&&ca(K,ue),Wt}for(ee=o(ee);!Ne.done;ue++,Ne=et.next())Ne=at(ee,K,ue,Ne.value,pt),Ne!==null&&(t&&(fn=Ne.alternate,fn!==null&&ee.delete(fn.key===null?ue:fn.key)),k=f(Ne,k,ue),De===null?Wt=Ne:De.sibling=Ne,De=Ne);return t&&ee.forEach(function(mE){return n(K,mE)}),Ee&&ca(K,ue),Wt}function _e(K,k,et,pt){if(typeof et=="object"&&et!==null&&et.type===X&&et.key===null&&et.props.ref===void 0&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case U:t:{for(var Wt=et.key;k!==null;){if(k.key===Wt){if(Wt=et.type,Wt===X){if(k.tag===7){a(K,k.sibling),pt=u(k,et.props.children),Oa(pt,et),pt.return=K,K=pt;break t}}else if(k.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===H&&Rr(Wt)===k.type){a(K,k.sibling),pt=u(k,et.props),Oa(pt,et),pt.return=K,K=pt;break t}a(K,k);break}else n(K,k);k=k.sibling}et.type===X?(pt=xr(et.props.children,K.mode,pt,et.key),Oa(pt,et),pt.return=K,K=pt):(pt=Kl(et.type,et.key,et.props,null,K.mode,pt),Oa(pt,et),pt.return=K,K=pt)}return y(K);case w:t:{for(Wt=et.key;k!==null;){if(k.key===Wt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(K,k.sibling),pt=u(k,et.children||[]),pt.return=K,K=pt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}pt=Af(et,K.mode,pt),pt.return=K,K=pt}return y(K);case H:return et=Rr(et),_e(K,k,et,pt)}if(Dt(et))return zt(K,k,et,pt);if($(et)){if(Wt=$(et),typeof Wt!="function")throw Error(r(150));return et=Wt.call(et),Qt(K,k,et,pt)}if(typeof et.then=="function")return _e(K,k,su(et),pt);if(et.$$typeof===ht)return _e(K,k,nu(K,et),pt);ou(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(K,k.sibling),pt=u(k,et),pt.return=K,K=pt):(a(K,k),pt=bf(et,K.mode,pt),pt.return=K,K=pt),y(K)):a(K,k)}return function(K,k,et,pt){try{Ho=0;var Wt=_e(K,k,et,pt);return ys=null,Wt}catch(ee){if(ee===_s||ee===au)throw ee;var De=Gn(29,ee,null,K.mode);return De.lanes=pt,De.return=K,De}finally{}}}var Dr=Wm(!0),jm=Wm(!1),Pa=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Zl(t),Nm(t,null,a),n}return jl(t,o,n,a),Zl(t)}function Go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xt(t,a)}}function If(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ff=!1;function Vo(){if(Ff){var t=vs;if(t!==null)throw t}}function Xo(t,n,a,o){Ff=!1;var u=t.updateQueue;Pa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var I=b,J=I.next;I.next=null,y===null?f=J:y.next=J,y=I;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,b=ot.lastBaseUpdate,b!==y&&(b===null?ot.firstBaseUpdate=J:b.next=J,ot.lastBaseUpdate=I))}if(f!==null){var mt=u.baseState;y=0,ot=J=I=null,b=f;do{var j=b.lane&-536870913,at=j!==b.lane;if(at?(we&j)===j:(o&j)===j){j!==0&&j===Ar&&(Ff=!0),ot!==null&&(ot=ot.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var zt=t,Qt=b;j=n;var _e=a;switch(Qt.tag){case 1:if(zt=Qt.payload,typeof zt=="function"){mt=zt.call(_e,mt,j);break t}mt=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=Qt.payload,j=typeof zt=="function"?zt.call(_e,mt,j):zt,j==null)break t;mt=P({},mt,j);break t;case 2:Pa=!0}}j=b.callback,j!==null&&(t.flags|=64,at&&(t.flags|=8192),at=u.callbacks,at===null?u.callbacks=[j]:at.push(j))}else at={lane:j,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ot===null?(J=ot=at,I=mt):ot=ot.next=at,y|=j;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;at=b,b=at.next,at.next=null,u.lastBaseUpdate=at,u.shared.pending=null}}while(!0);ot===null&&(I=mt),u.baseState=I,u.firstBaseUpdate=J,u.lastBaseUpdate=ot,f===null&&(u.shared.lanes=0),ka|=y,t.lanes=y,t.memoizedState=mt}}function Zm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Km(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zm(a[t],n)}var Ia=Jt(null),lu=Jt(0);function Qm(t,n){t=va,Lt(lu,t),Lt(Ia,n),va=t|n.baseLanes}function Hf(){Lt(lu,va),Lt(Ia,Ia.current)}function Gf(){va=lu.current,Vt(Ia),Vt(lu)}var Mn=Jt(null),Rn=null;function Fa(t){var n=t.alternate;Lt(En,En.current&1),Lt(Mn,t),Rn===null&&(n===null||Ia.current!==null||n.memoizedState!==null)&&(Rn=t)}function Vf(t){Lt(En,En.current),Lt(Mn,t),Rn===null&&(Rn=t)}function Jm(t){t.tag===22?(Lt(En,En.current),Lt(Mn,t),Rn===null&&(Rn=t)):Ha()}function Ha(){Lt(En,En.current),Lt(Mn,Mn.current)}function Kn(t){Vt(Mn),Rn===t&&(Rn=null),Vt(En)}var En=Jt(0);function ko(t,n){Lt(Mn,Mn.current),Lt(En,n)}function Xf(t){Vt(En),Vt(Mn),Rn===t&&(Rn=null)}function uu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||hd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var da=0,ve=null,ke=null,un=null,cu=!1,Ss=!1,Nr=!1,fu=0,qo=0,xs=null,zx=0;function en(){throw Error(r(321))}function kf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function qf(t,n,a,o,u,f){return da=f,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Pg:zg,Nr=!1,f=a(o,u),Nr=!1,Ss&&(f=tg(n,a,o,u)),$m(t),f}function $m(t){O.H=_u;var n=ke!==null&&ke.next!==null;if(da=0,un=ke=ve=null,cu=!1,qo=0,xs=null,n)throw Error(r(300));t===null||cn||(t=t.dependencies,t!==null&&eu(t)&&(cn=!0))}function tg(t,n,a,o){ve=t;var u=0;do{if(Ss&&(xs=null),qo=0,Ss=!1,25<=u)throw Error(r(301));if(u+=1,un=ke=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=kx,f=n(a,o)}while(Ss);return f}function Bx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?Yo(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(ve.flags|=1024),n}function Yf(){var t=fu!==0;return fu=0,t}function Wf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function jf(t){if(cu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}cu=!1}da=0,un=ke=ve=null,Ss=!1,qo=fu=0,xs=null}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?ve.memoizedState=un=t:un=un.next=t,un}function rn(){if(ke===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=un===null?ve.memoizedState:un.next;if(n!==null)un=n,ke=t;else{if(t===null)throw ve.alternate===null?Error(r(467)):Error(r(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?ve.memoizedState=un=t:un=un.next=t}return un}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yo(t){var n=qo;return qo+=1,xs===null&&(xs=[]),t=km(xs,t,n),n=ve,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Pg:zg),t}function du(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Yo(t);if(t.$$typeof===V)return;if(t.$$typeof===ht)return xn(t)}throw Error(r(438,String(t)))}function Zf(t){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hu(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Nt;return n.index++,a}function pa(t,n){return typeof n=="function"?n(t):n}function pu(t){var n=rn();return Kf(n,ke,t)}function Kf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=y=null,I=null,J=n,ot=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(we&mt)===mt:(da&mt)===mt){var j=J.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===Ar&&(ot=!0);else if((da&j)===j){J=J.next,j===Ar&&(ot=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(b=I=mt,y=f):I=I.next=mt,ve.lanes|=j,ka|=j;mt=J.action,Nr&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else j={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},I===null?(b=I=j,y=f):I=I.next=j,ve.lanes|=mt,ka|=mt;J=J.next}while(J!==null&&J!==n);if(I===null?y=f:I.next=b,!Zn(f,t.memoizedState)&&(cn=!0,ot&&(a=vs,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=I,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Qf(t){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);Zn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function eg(t,n,a){var o=ve,u=rn(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Zn((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,cn=!0),u=u.queue,th(ag.bind(null,o,u,t),[t]),t=u.getSnapshot!==n||y||un!==null&&(un.memoizedState.tag&1)!==0,Ms(t?9:8,{destroy:void 0},ig.bind(null,o,u,a,n),null),t){if(o.flags|=2048,qe===null)throw Error(r(349));f||(da&127)!==0||ng(o,n,a)}return a}function ng(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=hu(),ve.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function ig(t,n,a,o){n.value=a,n.getSnapshot=o,rg(n)&&sg(t)}function ag(t,n,a){return a(function(){rg(n)&&sg(t)})}function rg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function sg(t){var n=Sr(t,2);n!==null&&qn(n,t,2)}function Jf(t){var n=On();if(typeof t=="function"){var a=t;if(t=a(),Nr){sn(!0);try{a()}finally{sn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:t},n}function og(t,n,a,o){return t.baseState=a,Kf(t,ke,typeof o=="function"?o:pa)}function Ix(t,n,a,o,u){if(vu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,lg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lg(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=O.T,y={};y.types=f!==null?f.types:null,O.T=y;try{var b=a(u,o),I=O.S;I!==null&&I(y,b),ug(t,n,b)}catch(J){$f(t,n,J)}finally{f!==null&&y.types!==null&&(f.types=y.types),O.T=f}}else try{f=a(u,o),ug(t,n,f)}catch(J){$f(t,n,J)}}function ug(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(t,n,o)},function(o){return $f(t,n,o)}):cg(t,n,a)}function cg(t,n,a){n.status="fulfilled",n.value=a,fg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lg(t,a)))}function $f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fg(n),n=n.next;while(n!==o)}t.action=null}function fg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function hg(t,n){return n}function dg(t,n){if(Ee){var a=qe.formState;if(a!==null){t:{var o=ve;if(Ee){if(Ye){e:{for(var u=Ye,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=_i(u.nextSibling),o=u.data==="F!";break t}}Ua(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:n},a.queue=o,a=Ug.bind(null,ve,o),o.dispatch=a,o=Jf(!1),f=rh.bind(null,ve,!1,o.queue),o=On(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ix.bind(null,ve,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function pg(t){var n=rn();return mg(n,ke,t)}function mg(t,n,a){if(n=Kf(t,n,hg)[0],t=pu(pa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Yo(n)}catch(y){throw y===_s?au:y}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Ms(9,{destroy:void 0},Fx.bind(null,u,a),null)),[o,f,t]}function Fx(t,n){t.action=n}function gg(t){var n=rn(),a=ke;if(a!==null)return mg(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ms(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ve.updateQueue,n===null&&(n=hu(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function vg(){return rn().memoizedState}function mu(t,n,a,o){var u=On();ve.flags|=t,u.memoizedState=Ms(1|n,{destroy:void 0},a,o===void 0?null:o)}function gu(t,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&kf(o,ke.memoizedState.deps)?u.memoizedState=Ms(n,f,a,o):(ve.flags|=t,u.memoizedState=Ms(1|n,f,a,o))}function _g(t,n){mu(8390656,8,t,n)}function th(t,n){gu(2048,8,t,n)}function Hx(t){ve.flags|=4;var n=ve.updateQueue;if(n===null)n=hu(),ve.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function yg(t){var n=rn().memoizedState;return Hx({ref:n,nextImpl:t}),function(){if((Be&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Sg(t,n){return gu(4,2,t,n)}function xg(t,n){return gu(4,4,t,n)}function Mg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Eg(t,n,a){a=a!=null?a.concat([t]):null,gu(4,4,Mg.bind(null,n,t),a)}function eh(){}function Tg(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&kf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function bg(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&kf(n,o[1]))return o[0];if(o=t(),Nr){sn(!0);try{t()}finally{sn(!1)}}return a.memoizedState=[o,n],o}function nh(t,n,a){return a===void 0||(da&1073741824)!==0&&(we&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=P0(),ve.lanes|=t,ka|=t,a)}function Ag(t,n,a,o){return Zn(a,n)?a:Ia.current!==null?(t=nh(t,a,o),Zn(t,n)||(cn=!0),t):(da&106)===0||(da&1073741824)!==0&&(we&261930)===0?(cn=!0,t.memoizedState=a):(t=P0(),ve.lanes|=t,ka|=t,n)}function Cg(t,n,a,o,u){var f=Mt.p;Mt.p=f!==0&&8>f?f:8;var y=O.T,b={};b.types=y!==null?y.types:null,O.T=b,rh(t,!1,n,a);try{var I=u(),J=O.S;if(J!==null&&J(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ot=Px(I,o);Wo(t,n,ot,ti(t))}else Wo(t,n,o,ti(t))}catch(mt){Wo(t,n,{then:function(){},status:"rejected",reason:mt},ti())}finally{Mt.p=f,y!==null&&b.types!==null&&(y.types=b.types),O.T=y}}function Gx(){}function ih(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Rg(t).queue;Cg(t,u,n,kt,a===null?Gx:function(){return wg(t),a(o)})}function Rg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:kt,baseState:kt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:kt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wg(t){var n=Rg(t);n.next===null&&(n=t.alternate.memoizedState),Wo(t,n.next.queue,{},ti())}function ah(){return xn(Gs)}function Dg(){return rn().memoizedState}function Ng(){return rn().memoizedState}function Vx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=za(a);var o=Ba(n,t,a);o!==null&&(qn(o,n,a),Go(o,n,a)),n={cache:Uf()},t.payload=n;return}n=n.return}}function Xx(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vu(t)?Lg(n,a):(a=Ef(t,n,a,o),a!==null&&(qn(a,t,o),Og(a,n,o)))}function Ug(t,n,a){var o=ti();Wo(t,n,a,o)}function Wo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vu(t))Lg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,y))return jl(t,n,u,0),qe===null&&Wl(),!1}catch{}finally{}if(a=Ef(t,n,u,o),a!==null)return qn(a,t,o),Og(a,n,o),!0}return!1}function rh(t,n,a,o){if(o={lane:2,revertLane:Zh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},vu(t)){if(n)throw Error(r(479))}else n=Ef(t,a,o,2),n!==null&&qn(n,t,2)}function vu(t){var n=t.alternate;return t===ve||n!==null&&n===ve}function Lg(t,n){Ss=cu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Og(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Xt(t,a)}}var _u={readContext:xn,use:du,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en,useEffectEvent:en},Pg={readContext:xn,use:du,useCallback:function(t,n){return On().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:_g,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,mu(4194308,4,Mg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return mu(4194308,4,t,n)},useInsertionEffect:function(t,n){mu(4,2,t,n)},useMemo:function(t,n){var a=On();n=n===void 0?null:n;var o=t();if(Nr){sn(!0);try{t()}finally{sn(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=On();if(a!==void 0){var u=a(n);if(Nr){sn(!0);try{a(n)}finally{sn(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Xx.bind(null,ve,t),[o.memoizedState,t]},useRef:function(t){var n=On();return t={current:t},n.memoizedState=t},useState:function(t){t=Jf(t);var n=t.queue,a=Ug.bind(null,ve,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:eh,useDeferredValue:function(t,n){var a=On();return nh(a,t,n)},useTransition:function(){var t=Jf(!1);return t=Cg.bind(null,ve,t.queue,!0,!1),On().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ve,u=On();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),qe===null)throw Error(r(349));(we&127)!==0||ng(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_g(ag.bind(null,o,f,t),[t]),o.flags|=2048,Ms(9,{destroy:void 0},ig.bind(null,o,f,a,n),null),a},useId:function(){var t=On(),n=qe.identifierPrefix;if(Ee){var a=Xi,o=Vi;a=(o&~(1<<32-an(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:ah,useFormState:dg,useActionState:dg,useOptimistic:function(t){var n=On();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rh.bind(null,ve,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zf,useCacheRefresh:function(){return On().memoizedState=Vx.bind(null,ve)},useEffectEvent:function(t){var n=On(),a={impl:t};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zg={readContext:xn,use:du,useCallback:Tg,useContext:xn,useEffect:th,useImperativeHandle:Eg,useInsertionEffect:Sg,useLayoutEffect:xg,useMemo:bg,useReducer:pu,useRef:vg,useState:function(){return pu(pa)},useDebugValue:eh,useDeferredValue:function(t,n){var a=rn();return Ag(a,ke.memoizedState,t,n)},useTransition:function(){var t=pu(pa)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:ah,useFormState:pg,useActionState:pg,useOptimistic:function(t,n){var a=rn();return og(a,ke,t,n)},useMemoCache:Zf,useCacheRefresh:Ng,useEffectEvent:yg},kx={readContext:xn,use:du,useCallback:Tg,useContext:xn,useEffect:th,useImperativeHandle:Eg,useInsertionEffect:Sg,useLayoutEffect:xg,useMemo:bg,useReducer:Qf,useRef:vg,useState:function(){return Qf(pa)},useDebugValue:eh,useDeferredValue:function(t,n){var a=rn();return ke===null?nh(a,t,n):Ag(a,ke.memoizedState,t,n)},useTransition:function(){var t=Qf(pa)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:Yo(t),n]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:ah,useFormState:gg,useActionState:gg,useOptimistic:function(t,n){var a=rn();return ke!==null?og(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:Ng,useEffectEvent:yg};function sh(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var oh={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=za(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(qn(n,t,o),Go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(qn(n,t,o),Go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=za(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(qn(n,t,a),Go(n,t,a))}};function Bg(t,n,a,o,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Lo(a,o)||!Lo(u,f):!0}function Ig(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&oh.enqueueReplaceState(n,n.state,null)}function Ur(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Fg(t){Yl(t)}function Hg(t){console.error(t)}function Gg(t){Yl(t)}function yu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function lh(t,n,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){yu(t,n)},a}function Xg(t){return t=za(t),t.tag=3,t}function kg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Vg(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Vg(n,a,o),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function qx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Tr(n,a,u,!0),a=Mn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Rn===null?Hu():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ru?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Yh(t,o,u)),!1;case 22:return a.flags|=65536,o===ru?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Yh(t,o,u)),!1}throw Error(r(435,a.tag))}return Yh(t,o,u),Hu(),!1}if(Ee)return n=Mn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Rf&&(t=Error(r(422),{cause:o}),zo(di(t,a)))):(o!==Rf&&(n=Error(r(423),{cause:o}),zo(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=lh(t.stateNode,o,u),If(t,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),el===null?el=[f]:el.push(f),nn!==4&&(nn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=lh(a.stateNode,o,t),If(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xg(u),kg(u,t,a,o),If(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var uh=Error(r(461)),cn=!1;function dn(t,n,a,o){n.child=t===null?jm(n,null,a,o):Dr(n,t.child,a,o)}function qg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return br(n),o=qf(t,n,a,y,f,u),b=Yf(),t!==null&&!cn?(Wf(t,n,u),ma(t,n,u)):(Ee&&b&&Jl(n),n.flags|=1,dn(t,n,o,u),n.child)}function Yg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Tf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wg(t,n,f,o,u)):(t=Kl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!vh(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Lo,a(y,o)&&t.ref===n.ref)return ma(t,n,u)}return n.flags|=1,t=ua(f,o),t.ref=n.ref,t.return=n,n.child=t}function Wg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Lo(f,o)&&t.ref===n.ref)if(cn=!1,n.pendingProps=o=f,vh(t,u))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,ma(t,n,u)}return ch(t,n,a,o,u)}function jg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Zg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&iu(n,f!==null?f.cachePool:null),f!==null?Qm(n,f):Hf(),Jm(n);else return o=n.lanes=536870912,Zg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(iu(n,f.cachePool),Qm(n,f),Ha(),n.memoizedState=null):(t!==null&&iu(n,null),Hf(),Ha());return dn(t,n,u,a),n.child}function jo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zg(t,n,a,o,u){var f=Of();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&iu(n,null),Hf(),Jm(n),t!==null&&Tr(t,n,o,!0),n.childLanes=u,null}function Su(t,n){return n=xu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Kg(t,n,a){return Dr(n,t.child,null,a),t=Su(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function Yx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(o.mode==="hidden")return t=Su(n,o),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},jo(null,t);if(Vf(n),(t=Ye)?(t=Mv(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(t),a.return=n,n.child=a,gn=n,Ye=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return Su(n,o)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(Vf(n),u)if(n.flags&256)n.flags&=-257,n=Kg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Tr(t,n,a,!1),u=(a&t.childLanes)!==0,cn||u){if(Ia.current===null){if(o=qe,o!==null&&(y=Zt(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Sr(t,y),qn(o,t,y),uh;Hu()}n=Kg(t,n,a)}else t=f.treeContext,Ye=_i(y.nextSibling),gn=n,Ee=!0,Na=null,gi=!1,t!==null&&zm(n,t),n=Su(n,o),n.flags|=134221824;return n}return t=ua(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Es(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ch(t,n,a,o,u){return br(n),a=qf(t,n,a,o,void 0,u),o=Yf(),t!==null&&!cn?(Wf(t,n,u),ma(t,n,u)):(Ee&&o&&Jl(n),n.flags|=1,dn(t,n,a,u),n.child)}function Qg(t,n,a,o,u,f){return br(n),n.updateQueue=null,a=tg(n,o,a,u),$m(t),o=Yf(),t!==null&&!cn?(Wf(t,n,f),ma(t,n,f)):(Ee&&o&&Jl(n),n.flags|=1,dn(t,n,a,f),n.child)}function Jg(t,n,a,o,u){if(br(n),n.stateNode===null){var f=ds,y=a.contextType;typeof y=="object"&&y!==null&&(f=xn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=oh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},zf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?xn(y):ds,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(sh(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&oh.enqueueReplaceState(f,f.state,null),Xo(n,o,f,u),Vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=Ur(a,b);f.props=I;var J=f.context,ot=a.contextType;y=ds,typeof ot=="object"&&ot!==null&&(y=xn(ot));var mt=a.getDerivedStateFromProps;ot=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ot||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==y)&&Ig(n,f,o,y),Pa=!1;var j=n.memoizedState;f.state=j,Xo(n,o,f,u),Vo(),J=n.memoizedState,b||j!==J||Pa?(typeof mt=="function"&&(sh(n,a,mt,o),J=n.memoizedState),(I=Pa||Bg(n,a,I,o,j,J,y))?(ot||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=y,o=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bf(t,n),y=n.memoizedProps,ot=Ur(a,y),f.props=ot,mt=n.pendingProps,j=f.context,J=a.contextType,I=ds,typeof J=="object"&&J!==null&&(I=xn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==mt||j!==I)&&Ig(n,f,o,I),Pa=!1,j=n.memoizedState,f.state=j,Xo(n,o,f,u),Vo();var at=n.memoizedState;y!==mt||j!==at||Pa||t!==null&&t.dependencies!==null&&eu(t.dependencies)?(typeof b=="function"&&(sh(n,a,b,o),at=n.memoizedState),(ot=Pa||Bg(n,a,ot,o,j,at,I)||t!==null&&t.dependencies!==null&&eu(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=I,o=ot):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Es(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Dr(n,t.child,null,u),n.child=Dr(n,null,a,u)):dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ma(t,n,u),t}function $g(t,n,a,o){return Mr(),n.flags|=256,dn(t,n,a,o),n.child}var fh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hh(t){return{baseLanes:t,cachePool:Vm()}}function dh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function t0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(En.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(u?Fa(n):Ha(),(t=Ye)?(t=Mv(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(t),a.return=n,n.child=a,gn=n,Ye=null)):t=null,t===null)throw Ua(n);return hd(t)?n.lanes=32:n.lanes=536870912,null}return f=o.children,o=o.fallback,u?(Ha(),u=n.mode,f=xu({mode:"hidden",children:f},u),o=xr(o,u,a,null),f.return=n,o.return=n,f.sibling=o,n.child=f,o=n.child,o.memoizedState=hh(a),o.childLanes=dh(t,y,a),n.memoizedState=fh,jo(null,o)):(Fa(n),ph(n,f))}var b=t.memoizedState;if(b!==null){var I=b.dehydrated;if(I!==null)return Wx(t,n,f,y,o,I,b,a)}return u?(Ha(),u=o.fallback,f=n.mode,b=t.child,I=b.sibling,o=ua(b,{mode:"hidden",children:o.children}),o.subtreeFlags=b.subtreeFlags&1206910976,I!==null?u=ua(I,u):(u=xr(u,f,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,jo(null,o),o=n.child,u=t.child.memoizedState,u===null?u=hh(a):(f=u.cachePool,f!==null?(b=ln._currentValue,f=f.parent!==b?{parent:b,pool:b}:f):f=Vm(),u={baseLanes:u.baseLanes|a,cachePool:f}),o.memoizedState=u,o.childLanes=dh(t,y,a),n.memoizedState=fh,jo(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=ua(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function ph(t,n){return n=xu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xu(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function Mu(t,n,a){return Dr(n,t.child,null,a),t=ph(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wx(t,n,a,o,u,f,y,b){if(a)return n.flags&256?(Fa(n),n.flags&=-257,Mu(t,n,b)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),f=u.fallback,y=n.mode,u=xu({mode:"visible",children:u.children},y),f=xr(f,y,b,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Dr(n,t.child,null,b),u=n.child,u.memoizedState=hh(b),u.childLanes=dh(t,o,b),n.memoizedState=fh,jo(null,u));if(Fa(n),hd(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var I=o.dgst;return o=I,o!==""&&(u=Error(r(419)),u.stack="",u.digest=o,zo({value:u,source:null,stack:null})),Mu(t,n,b)}if(cn||Tr(t,n,b,!1),o=(b&t.childLanes)!==0,cn||o){if(Ia.current!==null)return Mu(t,n,b);if(o=qe,o!==null&&(u=Zt(o,b),u!==0&&u!==y.retryLane))throw y.retryLane=u,Sr(t,u),qn(o,t,u),uh;return fd(f)||Hu(),Mu(t,n,b)}return fd(f)?(n.flags|=192,n.child=t.child,null):(t=y.treeContext,Ye=_i(f.nextSibling),gn=n,Ee=!0,Na=null,gi=!1,t!==null&&zm(n,t),n=ph(n,u.children),n.flags|=134221824,n)}function e0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),tu(t.return,n,a)}function n0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&uu(a)===null&&(n=t),t=t.sibling}return n}function Eu(t,n,a,o,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function mh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function gh(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=En.current;if(n.flags&128)return ko(n,y),null;var b=(y&2)!==0;if(b?(y=y&1|2,n.flags|=128):y&=1,ko(n,y),u==="backwards"&&t!==null?(mh(t),dn(t,n,o,a),mh(t)):dn(t,n,o,a),o=Ee?Po:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,a,n);else if(t.tag===19)e0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=n0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,mh(n)),Eu(n,!0,u,null,f,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&uu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Eu(n,!0,a,null,f,o);break;case"together":Eu(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=n0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Eu(n,!1,u,a,f,o)}return n.child}function i0(t,n,a){var o=n.pendingProps;return La(n,n.type,o.value),dn(t,n,o.children,a),n.child}function ma(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Tr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ua(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ua(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function vh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&eu(t)))}function jx(t,n,a){switch(n.tag){case 3:yt(n,n.stateNode.containerInfo),La(n,ln,t.memoizedState.cache),Mr();break;case 27:case 5:Et(n);break;case 4:yt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Fa(n),n.flags|=128,null;o=Tr(t,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?t0(t,n,a):(Fa(n),t=ma(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return gh(t,n,a);if(u=(t.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Tr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return gh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ko(n,En.current),o)break;return null;case 22:return n.lanes=0,jg(t,n,a,n.pendingProps);case 24:La(n,ln,t.memoizedState.cache)}return ma(t,n,a)}function a0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!vh(t,a)&&(n.flags&128)===0)return cn=!1,jx(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Ee&&(n.flags&1048576)!==0&&Pm(n,Po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=Rr(n.elementType),n.type=t,typeof t=="function")Tf(t)?(o=Ur(t,o),n.tag=1,n=Jg(null,n,t,o,a)):(n.tag=0,n=ch(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===Z){n.tag=11,n=qg(null,n,t,o,a);break t}else if(u===At){n.tag=14,n=Yg(null,n,t,o,a);break t}else if(u===ht){n.tag=10,n.type=t,n=i0(null,n,a);break t}}throw n=bt(t)||t,Error(r(306,n,""))}}return n;case 0:return ch(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ur(o,n.pendingProps),Jg(t,n,o,u,a);case 3:t:{if(yt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bf(t,n),Xo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,La(n,ln,o),o!==f.cache&&Nf(n,[ln],a,!0),Vo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$g(t,n,o,a);break t}else if(o!==u){u=di(Error(r(424)),n),zo(u),n=$g(t,n,o,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ye=_i(t.firstChild),gn=n,Ee=!0,Na=null,gi=!0,a=jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Mr(),o===u){n=ma(t,n,a);break t}dn(t,n,o,a)}n=n.child}return n;case 26:return Es(t,n),t===null?(a=wv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(n.stateNode=lv(n.type,n.pendingProps,C.current,n)):n.memoizedState=wv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Et(n),t===null&&Ee&&(o=n.stateNode=bv(n.type,n.pendingProps,C.current),gn=n,gi=!0,u=Ye,ja(n.type)?(dd=u,Ye=_i(o.firstChild)):Ye=u),dn(t,n,n.pendingProps.children,a),Es(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((u=o=Ye)&&(o=VM(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,gn=n,Ye=_i(o.firstChild),gi=!1,u=!0):u=!1),u||Ua(n)),Et(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,ad(u,f)?o=null:y!==null&&ad(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=qf(t,n,Bx,null,null,a),Gs._currentValue=u),Es(t,n),dn(t,n,o,a),n.child;case 6:return t===null&&Ee&&((t=a=Ye)&&(a=XM(a,n.pendingProps,gi),a!==null?(n.stateNode=a,gn=n,Ye=null,t=!0):t=!1),t||Ua(n)),null;case 13:return t0(t,n,a);case 4:return yt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Dr(n,null,o,a):dn(t,n,o,a),n.child;case 11:return qg(t,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Es(t,n),dn(t,n,o,a),n.child;case 8:return dn(t,n,n.pendingProps.children,a),n.child;case 12:return dn(t,n,n.pendingProps.children,a),n.child;case 10:return i0(t,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,br(n),u=xn(u),o=o(u),n.flags|=1,dn(t,n,o,a),n.child;case 14:return Yg(t,n,n.type,n.pendingProps,a);case 15:return Wg(t,n,n.type,n.pendingProps,a);case 19:return gh(t,n,a);case 31:return Yx(t,n,a);case 22:return jg(t,n,a,n.pendingProps);case 24:return br(n),o=xn(ln),t===null?(u=Of(),u===null&&(u=qe,f=Uf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},zf(n),La(n,ln,u)):((t.lanes&a)!==0&&(Bf(t,n),Xo(n,null,null,a),Vo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,ln,o)):(o=f.cache,La(n,ln,o),o!==u.cache&&Nf(n,[ln],a,!0))),dn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=t===null?18882560:18874368:Ee&&Jl(n),t!==null&&t.memoizedProps.name!==o.name?n.flags|=4194816:Es(t,n),dn(t,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ga(t){t.flags|=4}function _h(t,n,a,o,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?Lv(n,o):Lv(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(F0())t.flags|=8192;else throw wr=ru,Pf}else t.flags&=-16777217}function r0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ov(n))if(F0())t.flags|=8192;else throw wr=ru,Pf}function Tu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Q():536870912,t.lanes|=n,Rs|=n)}function Zo(t,n){if(!Ee)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Zx(t,n,a){var o=n.pendingProps;switch(Cf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ha(ln),xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(gs(n)?ga(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wf())),We(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ga(n),f!==null?(We(n),r0(n,f)):(We(n),_h(n,u,null,o,a))):f?f!==t.memoizedState?(ga(n),We(n),r0(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ga(n),We(n),_h(n,u,t,o,a)),null;case 27:if(Kt(n),a=C.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),n.subtreeFlags&=-33554433,null}t=de.current,gs(n)?Bm(n):(t=bv(u,o,a),n.stateNode=t,ga(n))}return We(n),n.subtreeFlags&=-33554433,null;case 5:if(Kt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),n.subtreeFlags&=-33554433,null}if(f=de.current,gs(n))Bm(n);else{var y=sl(C.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[Se]=n,f[Te]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ga(n)}}return We(n),n.subtreeFlags&=-33554433,_h(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ga(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=C.current,gs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=gn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Se]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||av(t.nodeValue,a)),t||Ua(n,!0)}else t=sl(t).createTextNode(o),t[Se]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=gs(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Se]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=gs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Se]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Tu(n,n.updateQueue),We(n),null);case 4:return xt(),t===null&&$h(n.stateNode.containerInfo),n.flags|=67108864,We(n),null;case 10:return ha(n.type),We(n),null;case 19:if(Xf(n),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Zo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=uu(t),f!==null){for(n.flags|=128,Zo(o,!1),t=f.updateQueue,n.updateQueue=t,Tu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Um(a,t),a=a.sibling;return ko(n,En.current&1|2),Ee&&ca(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ct()>zu&&(n.flags|=128,u=!0,Zo(o,!1),n.lanes=4194304)}else{if(!u)if(t=uu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Tu(n,t),Zo(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!f.alternate&&!Ee)return We(n),null}else 2*Ct()-o.renderingStartTime>zu&&a!==536870912&&(n.flags|=128,u=!0,Zo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}if(o.tail!==null){t=o.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ct(),t.sibling=null,f=En.current,f=u?f&1|2:f&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Ee?ko(n,f):(a=f,Lt(Mn,n),Lt(En,a),Rn===null&&(Rn=n)),Ee&&ca(n,o.treeForkCount),t}return We(n),null;case 22:case 23:return Kn(n),Gf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Tu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Vt(Cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(ln),We(n),null;case 25:return null;case 30:return n.flags|=33554432,We(n),null}throw Error(r(156,n.tag))}function Kx(t,n){switch(Cf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ha(ln),xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Kt(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Xf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return xt(),null;case 10:return ha(n.type),null;case 22:case 23:return Kn(n),Gf(),t!==null&&Vt(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ha(ln),null;case 25:return null;default:return null}}function s0(t,n){switch(Cf(n),n.tag){case 3:ha(ln),xt();break;case 26:case 27:case 5:Kt(n);break;case 4:xt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Xf(n);break;case 10:ha(n.type);break;case 22:case 23:Kn(n),Gf(),t!==null&&Vt(Cr);break;case 24:ha(ln)}}function Ko(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(b){He(n,n.return,b)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,u=n;var I=a,J=b;try{J()}catch(ot){He(u,I,ot)}}}o=o.next}while(o!==f)}}catch(ot){He(n,n.return,ot)}}function o0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Km(n,a)}catch(o){He(t,t.return,o)}}}function l0(t,n,a){a.props=Ur(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){He(t,n,o)}}function ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:var u=t.stateNode,f=oa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=mv(f)),o=u.ref;break;case 7:if(t.stateNode===null){var y=new ei(t);m(t.child,!1,HM,y,void 0,void 0),t.stateNode=y}o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(b){He(t,n,b)}}function Tn(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){He(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){He(t,n,u)}else a.current=null}function bu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)xv(t.stateNode,n[a])}function u0(t){for(var n=t.return;n!==null&&(Sh(n)&&xv(t.stateNode,n.stateNode),!yh(n));)n=n.return}function Qo(t){for(var n=t.return;n!==null&&(Sh(n)&&GM(t.stateNode,n.stateNode),!yh(n));)n=n.return}function yh(t){return t.tag===5||t.tag===3||t.tag===27}function Sh(t){return t&&t.tag===7&&t.stateNode!==null}function xh(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){He(t,t.return,u)}}function Mh(t,n,a){try{var o=t.stateNode;MM(o,t.type,a,n),o[Te]=n}catch(u){He(t,t.return,u)}}function c0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Eh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Th(t,n,a,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi)),bu(t,o),Oe=!0;else if(u!==4&&(u===27&&(bu(t,o),o=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(Th(t,n,a,o),t=t.sibling;t!==null;)Th(t,n,a,o),t=t.sibling}function Au(t,n,a,o){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),bu(t,o),Oe=!0;else if(u!==4&&(u===27&&(bu(t,o),o=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Au(t,n,a,o),t=t.sibling;t!==null;)Au(t,n,a,o),t=t.sibling}function f0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[Se]=t,n[Te]=a}catch(f){He(t,t.return,f)}}var Cu=!1,Qn=null;function h0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Cu=!0)}var qi=null;function d0(){var t=qi;return qi=null,t}var Vn=0;function Ts(t,n,a,o,u){return Vn=0,p0(t.child,n,a,o,u)}function p0(t,n,a,o,u){for(var f=!1;t!==null;){if(t.tag===5){var y=t.stateNode;if(o!==null){var b=od(y);o.push(b),b.view&&(f=!0)}else f||od(y).view&&(f=!0);Cu=!0,dv(y,Vn===0?n:n+"_"+Vn,a),Vn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||p0(t.child,n,a,o,u)&&(f=!0));t=t.sibling}return f}function Yi(t,n){for(;t!==null;)t.tag===5?pv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Yi(t.child,n)),t=t.sibling}function Ru(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ru(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=la(n.default,n.share),n!=="none"&&(Ts(t,a,n,null,!1)||Yi(t.child,!1))}t=t.sibling}}function bh(t,n){if(t.tag===30){var a=t.stateNode,o=t.memoizedProps,u=oa(o,a),f=la(o.default,a.paired?o.share:o.enter);f!=="none"?Ts(t,u,f,null,!1)?(Ru(t),a.paired||n||Us(t,o.onEnter)):Yi(t.child,!1):Ru(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bh(t,n),t=t.sibling;else Ru(t)}function Ah(t){if(Qn!==null&&Qn.size!==0){var n=Qn;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var f=la(a.default,a.share);if(f!=="none"&&(Ts(t,o,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Us(t,a.onShare)):Yi(t.child,!1)),n.delete(o),n.size===0)break}}}Ah(t)}t=t.sibling}}}function Ch(t){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode),o=Qn!==null?Qn.get(a):void 0,u=la(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Ts(t,a,u,null,!1)?o!==void 0?(u=t.stateNode,o.paired=u,u.paired=o,Qn.delete(a),Us(t,n.onShare)):Us(t,n.onExit):Yi(t.child,!1)),Qn!==null&&Ah(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Ch(t),t=t.sibling;else Qn!==null&&Ah(t)}function m0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=oa(n,t.stateNode);n=la(n.default,n.update),t.flags&=-5,n!=="none"&&Ts(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&m0(t);t=t.sibling}}function Rh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Yi(t.child,!1))}Rh(t)}t=t.sibling}}function wu(t){if(t.tag===30)t.stateNode.paired=null,Yi(t.child,!1),Rh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)wu(t),t=t.sibling;else Rh(t)}function g0(t){for(t=t.child;t!==null;)t.tag===30?Yi(t.child,!1):(t.subtreeFlags&33554432)!==0&&g0(t),t=t.sibling}function wh(t,n,a,o,u,f,y){for(var b=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&Vn<f.length){var J=f[Vn],ot=od(I);(J.view||ot.view)&&(b=!0);var mt;if(mt=(t.flags&4)===0)if(ot.clip)mt=!0;else{mt=J.rect;var j=ot.rect;mt=mt.y!==j.y||mt.x!==j.x||mt.height!==j.height||mt.width!==j.width}mt&&(t.flags|=4),ot.abs?ot=!J.abs:(J=J.rect,ot=ot.rect,ot=J.height!==ot.height||J.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&dv(I,Vn===0?a:a+"_"+Vn,u),b&&(t.flags&4)!==0||(qi===null&&(qi=[]),qi.push(I,Vn===0?o:o+"_"+Vn,n.memoizedProps)),Vn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?t.flags|=n.flags&32:wh(t,n.child,a,o,u,f,y)&&(b=!0));n=n.sibling}return b}function v0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,o=t.stateNode,u=oa(a,o),f=la(a.default,a.update),y;y=t.memoizedState,t.memoizedState=null,o=t;var b=t.child;Vn=0,u=wh(o,b,u,u,f,y,!1),(t.flags&4)!==0&&u&&Us(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&v0(t);t=t.sibling}}var vn=!1,Ie=!1,Wi=!1,Dh=!1,_0=typeof WeakSet=="function"?WeakSet:Set,_n=null,ji=!1,Jo=!1,Du=!1,Nh=!1;function Qx(t,n,a){if(t=t.containerInfo,nd=Vs,t=Mm(t),vf(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else t:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{o.nodeType,y.nodeType}catch{o=null;break t}var b=0,I=-1,J=-1,ot=0,mt=0,j=t,at=null;e:for(;;){for(var zt;j!==o||f!==0&&j.nodeType!==3||(I=b+f),j!==y||u!==0&&j.nodeType!==3||(J=b+u),j.nodeType===3&&(b+=j.nodeValue.length),(zt=j.firstChild)!==null;)at=j,j=zt;for(;;){if(j===t)break e;if(at===o&&++ot===f&&(I=b),at===y&&++mt===u&&(J=b),(zt=j.nextSibling)!==null)break;j=at,at=j.parentNode}j=zt}o=I===-1||J===-1?null:{start:I,end:J}}else o=null}o=o||{start:0,end:0}}else o=null;for(id={focusedElem:t,selectionRange:o},Vs=!1,a=(a&335544064)===a,_n=n,n=a?9270:1024;_n!==null;){if(t=_n,a&&(o=t.deletions,o!==null))for(f=0;f<o.length;f++)a&&Ch(o[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&h0(t),Nu(a);else{if(t.tag===22){if(o=t.alternate,t.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&Ch(o),Nu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&h0(t),Nu(a);continue}}o=t.child,(t.subtreeFlags&n)!==0&&o!==null?(o.return=t,_n=o):(a&&m0(t),Nu(a))}}Qn=null}function Nu(t){for(;_n!==null;){var n=_n,a=t,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var f=n.stateNode;try{var y=Ur(n.type,u);a=f.getSnapshotBeforeUpdate(y,o),f.__reactInternalSnapshotBeforeUpdate=a}catch(b){He(n,n.return,b)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)cd(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":cd(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=oa(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=la(u.default,u.update),u!=="none"&&Ts(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(o=n.sibling,o!==null){o.return=n.return,_n=o;break}_n=n.return}}function y0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),o&4&&Ko(5,a);break;case 1:if(Zi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){He(a,a.return,y)}else{var u=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){He(a,a.return,y)}}o&64&&o0(a),o&512&&ki(a,a.return);break;case 3:if(Zi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(t,n)}catch(y){He(a,a.return,y)}}break;case 27:n===null&&o&4&&f0(a);case 26:case 5:Zi(t,a),n===null&&o&4&&xh(a),o&512&&ki(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),o&4&&E0(t,a);break;case 13:Zi(t,a),o&4&&T0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=uM.bind(null,a),kM(t,a))));break;case 22:if(o=a.memoizedState!==null||vn,!o){var f=n!==null&&n.memoizedState!==null||Ie;n=vn,u=Ie,vn=o,(Ie=f)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),wi(t,a,o)):Zi(t,a),vn=n,Ie=u}break;case 30:Zi(t,a),o&512&&ki(a,a.return);break;case 7:o&512&&ki(a,a.return);default:Zi(t,a)}}function Uh(t,n){for(t=t.child;t!==null;)S0(t,n),t=t.sibling}function S0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(I){He(t,t.return,I)}Lh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Oe=!0}catch(I){He(t,t.return,I)}break;case 18:try{var b=t.stateNode;n?hv(b,!0):hv(t.stateNode,!1)}catch(I){He(t,t.return,I)}break;case 22:case 23:t.memoizedState===null&&Uh(t,n);break;default:Uh(t,n)}}function Lh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,o=n;switch(a.tag){case 4:S0(a,o);break t;case 22:a.memoizedState===null&&Lh(a,o);break t;default:Lh(a,o)}}t=t.sibling}}function x0(t){var n=t.alternate;n!==null&&(t.alternate=null,x0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ci(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qe=null,Xn=!1;function Ci(t,n,a){for(a=a.child;a!==null;)M0(t,n,a),a=a.sibling}function M0(t,n,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ue,a)}catch{}switch(a.tag){case 26:Ie||Tn(a,n),Ci(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Tn(a,n),Qo(a);var o=Qe,u=Xn;ja(a.type)&&(Qe=a.stateNode,Xn=!1),Ci(t,n,a),Av(a.stateNode,a.type,a.memoizedProps),Qe=o,Xn=u;break;case 5:Ie||Tn(a,n),Qo(a);case 6:if(a.tag===6&&Qo(a),o=Qe,u=Xn,Qe=null,Ci(t,n,a),Qe=o,Xn=u,Qe!==null)if(Xn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode),Oe=!0}catch(f){He(a,n,f)}else try{Qe.removeChild(a.stateNode),Oe=!0}catch(f){He(a,n,f)}break;case 18:Qe!==null&&(Xn?(t=Qe,fv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Xs(t)):fv(Qe,a.stateNode));break;case 4:o=Qe,u=Xn,Qe=a.stateNode.containerInfo,Xn=!0,Ci(t,n,a),Qe=o,Xn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),Ie||Ga(4,a,n),Ci(t,n,a);break;case 1:Ie||(Tn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&l0(a,n,o)),Ci(t,n,a);break;case 21:Ci(t,n,a);break;case 22:Ie=(o=Ie)||a.memoizedState!==null,Ci(t,n,a),Ie=o;break;case 30:Tn(a,n),Ci(t,n,a);break;case 7:Ie||Tn(a,n),Ci(t,n,a);break;default:Ci(t,n,a)}}function E0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Xs(t)}catch(a){He(n,n.return,a)}}}function T0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xs(t)}catch(a){He(n,n.return,a)}}function Jx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _0),n;default:throw Error(r(435,t.tag))}}function Uu(t,n){var a=Jx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=cM.bind(null,t,o);o.then(u,u)}})}function Pn(t,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],y=t,b=n,I=b;t:for(;I!==null;){switch(I.tag){case 27:if(ja(I.type)){Qe=I.stateNode,Xn=!1;break t}break;case 5:Qe=I.stateNode,Xn=!1;break t;case 3:case 4:Qe=I.stateNode.containerInfo,Xn=!0;break t}I=I.return}if(Qe===null)throw Error(r(160));M0(y,b,f),Qe=null,Xn=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)b0(n,t,a),n=n.sibling}var Ri=null;function b0(t,n,a){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=t.updateQueue,o=o!==null?o.events:null,o!==null))for(var f=0;f<o.length;f++){var y=o[f];y.ref.impl=y.nextImpl}Pn(n,t,a),zn(t),u&4&&(Ga(3,t,t.return),Ko(3,t),Ga(5,t,t.return));break;case 1:Pn(n,t,a),zn(t),u&512&&(Ie||o===null||Tn(o,o.return)),u&64&&vn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ri,Pn(n,t,a),zn(t),u&512&&(Ie||o===null||Tn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=t.memoizedState,o===null)if(a===null)if(t.stateNode===null)if(vn)t.stateNode=lv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Un]||o[Se]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),bn(o,n,a),o[Se]=t,ze(o),n=o;break t;case"link":if(f=Uv("link","href",u).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}o=u.createElement(n),bn(o,n,a),u.head.appendChild(o);break;case"meta":if(f=Uv("meta","content",u).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(o=f[y],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}o=u.createElement(n),bn(o,n,a),u.head.appendChild(o);break;default:throw Error(r(468,n))}o[Se]=t,ze(o),n=o}t.stateNode=n}else vn||vd(f,t.type,t.stateNode);else t.stateNode=Nv(f,a,t.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||Ie||n.parentNode.removeChild(n)):u.count--,a===null?vn||vd(f,t.type,t.stateNode):Nv(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Mh(t,t.memoizedProps,o.memoizedProps);break;case 27:Pn(n,t,a),zn(t),u&512&&(Ie||o===null||Tn(o,o.return)),o!==null&&u&4&&Mh(t,t.memoizedProps,o.memoizedProps);break;case 5:if(f=Wi,Wi=!1,Pn(n,t,a),Wi=f,zn(t),u&512&&(Ie||o===null||Tn(o,o.return)),t.flags&32){n=t.stateNode;try{ss(n,""),Oe=!0}catch(ot){He(t,t.return,ot)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,Mh(t,n,o!==null?o.memoizedProps:n)),u&1024&&(Dh=!0);break;case 6:if(Pn(n,t,a),zn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Oe=!0}catch(ot){He(t,t.return,ot)}}break;case 3:if(Oe=!1,Wu=null,f=Ri,Ri=ol(n.containerInfo),Pn(n,t,a),Ri=f,zn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Xs(n.containerInfo)}catch(ot){He(t,t.return,ot)}Dh&&(Dh=!1,A0(t)),Oe=!1;break;case 4:u=Wi,Wi=vn,o=Yp(),f=Ri,Ri=ol(t.stateNode.containerInfo),Pn(n,t,a),zn(t),Ri=f,Oe&&Jo&&(Du=!0),Oe=o,Wi=u;break;case 12:Pn(n,t,a),zn(t);break;case 31:Pn(n,t,a),zn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 13:Pn(n,t,a),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Pu=Ct()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 22:f=t.memoizedState!==null,y=o!==null&&o.memoizedState!==null;var b=vn,I=Ie,J=Wi;vn=b||f,Wi=J||f,Ie=I||y,Pn(n,t,a),Ie=I,Wi=J,vn=b,zn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||o===null||y||vn||Ie||(n=y||Ie,a=vn,o=Ie,vn=f||vn,Ie=n,Va(t,2),vn=a,Ie=o),!f&&Wi||Uh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Uu(t,a))));break;case 19:Pn(n,t,a),zn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Uu(t,n)));break;case 30:u&512&&(Ie||o===null||Tn(o,o.return)),u=Yp(),f=Jo,y=(a&335544064)===a,b=t.memoizedProps,Jo=y&&la(b.default,b.update)!=="none",Pn(n,t,a),zn(t),y&&o!==null&&Oe&&(t.flags|=4),Jo=f,Oe=u;break;case 21:break;case 7:u&512&&(Ie||o===null||Tn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=t);default:Pn(n,t,a),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(c0(o)){a=o;break}o=o.return}o=null;for(var u=t.return;u!==null;){if(Sh(u)){var f=u.stateNode;o===null?o=[f]:o.push(f)}if(yh(u))break;u=u.return}var y=o;if(a==null)throw Error(r(160));switch(a.tag){case 27:var b=a.stateNode,I=Eh(t);Au(t,I,b,y);break;case 5:var J=a.stateNode;a.flags&32&&(ss(J,""),a.flags&=-33);var ot=Eh(t);Au(t,ot,J,y);break;case 3:case 4:var mt=a.stateNode.containerInfo,j=Eh(t);Th(t,j,mt,y);break;default:throw Error(r(161))}}catch(at){He(t,t.return,at)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function A0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;A0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Vs=!0,n.reset(),Vs=!1),t=t.sibling}}function bs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)C0(n,t),n=n.sibling;else v0(n)}function C0(t,n){var a=t.alternate;if(a===null)bh(t,!1);else switch(t.tag){case 3:if(Nh=ji=!1,d0(),bs(n,t),!ji&&!Du){if(t=qi,t!==null)for(var o=0;o<t.length;o+=3){a=t[o];var u=t[o+1];pv(a,t[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Nh=!0}qi=null;break;case 5:bs(n,t);break;case 4:o=ji,ji=!1,bs(n,t),ji&&(Du=!0),ji=o;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?bh(t,!1):bs(n,t));break;case 30:o=ji,u=d0(),ji=!1,bs(n,t),ji&&(t.flags|=4);var f=t.memoizedProps,y=t.stateNode;n=oa(f,y),y=oa(a.memoizedProps,y);var b=la(f.default,f.update);b==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,Vn=0,n=wh(t,a,n,y,b,f,!0),Vn!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Us(t,t.memoizedProps.onUpdate),qi=u):u!==null&&(u.push.apply(u,qi),qi=u),ji=(t.flags&32)!==0?!0:o;break;default:bs(n,t)}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y0(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,o=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,o);break;case 1:Tn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&l0(a,a.return,u),Va(a,o);break;case 27:(o&2)!==0&&Av(a.stateNode,a.type,a.memoizedProps);case 5:Tn(a,a.return),a.tag!==5&&a.tag!==27||Qo(a),Va(a,o);break;case 6:Qo(a);break;case 26:Tn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ie||u.parentNode.removeChild(u),Va(a,o);break;case 22:a.memoizedState===null&&Va(a,o);break;case 30:Tn(a,a.return),Va(a,o);break;case 7:Tn(a,a.return);default:Va(a,o)}t=t.sibling}}function wi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,y=f.flags,b=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:wi(u,f,a),Ko(4,f);break;case 1:if(wi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){He(o,o.return,ot)}if(o=f,u=o.updateQueue,u!==null){var I=o.stateNode;try{var J=u.shared.hiddenCallbacks;if(J!==null)for(u.shared.hiddenCallbacks=null,u=0;u<J.length;u++)Zm(J[u],I)}catch(ot){He(o,o.return,ot)}}b&&y&64&&o0(f),ki(f,f.return);break;case 27:(a&2)!==0&&f0(f);case 5:f.tag!==5&&f.tag!==27||u0(f),wi(u,f,a),b&&o===null&&y&4&&xh(f),ki(f,f.return);break;case 6:u0(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||vn||vd(ol(I.ownerDocument),f.type,I),wi(u,f,a),b&&o===null&&y&4&&xh(f),ki(f,f.return);break;case 12:wi(u,f,a);break;case 31:wi(u,f,a),b&&y&4&&E0(u,f);break;case 13:wi(u,f,a),b&&y&4&&T0(u,f);break;case 22:f.memoizedState===null&&wi(u,f,a),ki(f,f.return);break;case 30:wi(u,f,a),ki(f,f.return);break;case 7:ki(f,f.return);default:wi(u,f,a)}n=n.sibling}}function Oh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bo(a))}function Ph(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Bo(t))}function vi(t,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)R0(t,n,a,o),n=n.sibling;else u&&g0(n)}function R0(t,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&wu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,o),f&2048&&Ko(9,n);break;case 1:vi(t,n,a,o);break;case 3:vi(t,n,a,o),u&&Nh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Bo(f)));break;case 12:if(f&2048){vi(t,n,a,o),f=n.stateNode;try{var y=n.memoizedProps,b=y.id,I=y.onPostCommit;typeof I=="function"&&I(b,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(J){He(n,n.return,J)}}else vi(t,n,a,o);break;case 31:vi(t,n,a,o);break;case 13:vi(t,n,a,o);break;case 23:break;case 22:y=n.stateNode,b=n.alternate,n.memoizedState!==null?(u&&b!==null&&b.memoizedState===null&&wu(b),y._visibility&2?vi(t,n,a,o):$o(t,n)):(u&&b!==null&&b.memoizedState!==null&&wu(n),y._visibility&2?vi(t,n,a,o):(y._visibility|=2,As(t,n,a,o,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Oh(b,n);break;case 24:vi(t,n,a,o),f&2048&&Ph(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Yi(f.child,!0),Yi(n.child,!0))),vi(t,n,a,o);break;default:vi(t,n,a,o)}}function As(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,b=a,I=o,J=y.flags;switch(y.tag){case 0:case 11:case 15:As(f,y,b,I,u),Ko(8,y);break;case 23:break;case 22:var ot=y.stateNode;y.memoizedState!==null?ot._visibility&2?As(f,y,b,I,u):$o(f,y):(ot._visibility|=2,As(f,y,b,I,u)),u&&J&2048&&Oh(y.alternate,y);break;case 24:As(f,y,b,I,u),u&&J&2048&&Ph(y.alternate,y);break;default:As(f,y,b,I,u)}n=n.sibling}}function $o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:$o(a,o),u&2048&&Oh(o.alternate,o);break;case 24:$o(a,o),u&2048&&Ph(o.alternate,o);break;default:$o(a,o)}n=n.sibling}}var Lr=8192;function Or(t,n,a){if(t.subtreeFlags&Lr)for(t=t.child;t!==null;)w0(t,n,a),t=t.sibling}function w0(t,n,a){switch(t.tag){case 26:Or(t,n,a),t.flags&Lr&&(t.memoizedState!==null?aE(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&zv(a,t)));break;case 5:Or(t,n,a),t.flags&Lr&&(t=t.stateNode,(n&335544128)===n&&zv(a,t));break;case 3:case 4:var o=Ri;Ri=ol(t.stateNode.containerInfo),Or(t,n,a),Ri=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Lr,Lr=16777216,Or(t,n,a),Lr=o):Or(t,n,a));break;case 30:if((t.flags&Lr)!==0&&(o=t.memoizedProps.name,o!=null&&o!=="auto")){var u=t.stateNode;u.paired=null,Qn===null&&(Qn=new Map),Qn.set(o,u)}Or(t,n,a);break;default:Or(t,n,a)}}function D0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,U0(o,t)}D0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(t),t=t.sibling}function N0(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Lu(t)):tl(t);break;default:tl(t)}}function Lu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,U0(o,t)}D0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),Lu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Lu(n));break;default:Lu(n)}t=t.sibling}}function U0(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Bo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=t;_n!==null;){o=_n;var u=o.sibling,f=o.return;if(x0(o),o===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var $x={getCacheForType:function(t){var n=xn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return xn(ln).controller.signal}},tM=typeof WeakMap=="function"?WeakMap:Map,Be=0,qe=null,be=null,we=0,Fe=0,Jn=null,Xa=!1,Cs=!1,zh=!1,va=0,nn=0,ka=0,Pr=0,Ou=0,$n=0,Rs=0,el=null,kn=null,Bh=!1,Pu=0,L0=0,zu=1/0,Bu=null,qa=null,$e=0,Di=null,zr=null,Ki=0,Ih=0,Fh=null,O0=null,ws=null,Ds=null,Ns=null,nl=0,Iu=null;function ti(){return(Be&2)!==0&&we!==0?we&-we:O.T!==null?Zh():fe()}function P0(){if($n===0)if((we&536870912)===0||Ee){var t=li;li<<=1,(li&3932160)===0&&(li=262144),$n=t}else $n=536870912;return t=Mn.current,t!==null&&(t.flags|=32),$n}function Us(t,n){if(n!=null){var a=t.stateNode,o=a.ref;o===null&&(o=a.ref=mv(oa(t.memoizedProps,a))),Ds===null&&(Ds=[]),Ds.push(n.bind(null,o))}}function qn(t,n,a){(t===qe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(Ls(t,0),Ya(t,we,$n,!1)),lt(t,a),((Be&2)===0||t!==qe)&&(t===qe&&((Be&2)===0&&(Pr|=a),nn===4&&Ya(t,we,$n,!1)),Qi(t))}function z0(t,n,a){if((Be&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Fi(t,n),u=o?iM(t,n):Gh(t,n,!0),f=o;do{if(u===0){Cs&&!o&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!eM(a)){u=Gh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var b=t;u=el;var I=b.current.memoizedState.isDehydrated;if(I&&(Ls(b,y).flags|=256),y=Gh(b,y,!1),y!==2&&y!==6){if(zh&&!I){b.errorRecoveryDisabledLanes|=f,Pr|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Ls(t,0),Ya(t,n,0,!0);break}t:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(o,n,$n,!Xa);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Pu+300-Ct(),10<u)){if(Ya(o,n,$n,!Xa),ia(o,0,!0)!==0)break t;Ki=n,o.timeoutHandle=sd(B0.bind(null,o,a,kn,Bu,Bh,n,$n,Pr,Rs,Xa,f,"Throttled",-0,0),u);break t}B0(o,a,kn,Bu,Bh,n,$n,Pr,Rs,Xa,f,null,-0,0)}}break}while(!0);Qi(t)}function B0(t,n,a,o,u,f,y,b,I,J,ot,mt,j,at){t.timeoutHandle=-1;var zt=n.subtreeFlags,Qt=(f&335544064)===f;if(mt=null,(Qt||zt&8192||(zt&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},Qn=null,w0(n,f,mt),Qt&&(zt=mt,Qt=t.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(zt.count++,zt.waitingForViewTransition=!0,zt=cl.bind(zt),Qt.finished.then(zt,zt))),zt=(f&62914560)===f?Pu-Ct():(f&4194048)===f?L0-Ct():0,zt=rE(mt,zt),zt!==null)){Ki=f,t.cancelPendingCommit=zt(q0.bind(null,t,n,f,a,o,u,y,b,I,J,ot,mt,null,j,at)),Ya(t,f,y,!J);return}q0(t,n,f,a,o,u,y,b,I,J,ot,mt)}function eM(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,o){n=gr(t,n),n&=~Ou,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-an(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&Ut(t,a,n)}function Fu(){return(Be&6)===0?(il(0),!1):!0}function Hh(){if(be!==null){if(Fe===0)var t=be.return;else t=be,fa=Er=null,jf(t),ys=null,Ho=0,t=be;for(;t!==null;)s0(t.alternate,t),t=t.return;be=null}}function Ls(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,bM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,Hh(),qe=t,be=a=ua(t.current,null),we=n,Fe=0,Jn=null,Xa=!1,Cs=Fi(t,n),zh=!1,Rs=$n=Ou=Pr=ka=nn=0,kn=el=null,Bh=!1,va=gr(t,n),Wl(),a}function I0(t,n){ve=null,O.H=_u,n===_s||n===au?(n=qm(),Fe=3):n===Pf?(n=qm(),Fe=4):Fe=n===uh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,be===null&&(nn=1,yu(t,di(n,t.current)))}function F0(){var t=Mn.current;return t===null?!0:(we&4194048)===we?Rn===null:(we&62914560)===we||(we&536870912)!==0?t===Rn:!1}function H0(){var t=O.H;return O.H=_u,t===null?_u:t}function G0(){var t=O.A;return O.A=$x,t}function Hu(){nn=4,Xa||(we&4194048)!==we&&Mn.current!==null||(Cs=!0),(ka&134217727)===0&&(Pr&134217727)===0||qe===null||Ya(qe,we,$n,!1)}function Gh(t,n,a){var o=Be;Be|=2;var u=H0(),f=G0();(qe!==t||we!==n)&&(Bu=null,Ls(t,n)),n=!1;var y=nn;t:do try{if(Fe!==0&&be!==null){var b=be,I=Jn;switch(Fe){case 8:Hh(),y=6;break t;case 3:case 2:case 9:case 6:Mn.current===null&&(n=!0);var J=Fe;if(Fe=0,Jn=null,Os(t,b,I,J),a&&Cs){y=0;break t}break;default:J=Fe,Fe=0,Jn=null,Os(t,b,I,J)}}nM(),y=nn;break}catch(ot){I0(t,ot)}while(!0);return n&&t.shellSuspendCounter++,fa=Er=null,Be=o,O.H=u,O.A=f,be===null&&(qe=null,we=0,Wl()),y}function nM(){for(;be!==null;)V0(be)}function iM(t,n){var a=Be;Be|=2;var o=H0(),u=G0();qe!==t||we!==n?(Bu=null,zu=Ct()+500,Ls(t,n)):Cs=Fi(t,n);t:do try{if(Fe!==0&&be!==null){n=be;var f=Jn;e:switch(Fe){case 1:Fe=0,Jn=null,Os(t,n,f,1);break;case 2:case 9:if(Xm(f)){Fe=0,Jn=null,X0(n);break}n=function(){Fe!==2&&Fe!==9||qe!==t||(Fe=7),Qi(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Xm(f)?(Fe=0,Jn=null,X0(n)):(Fe=0,Jn=null,Os(t,n,f,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var b=be;if(y?Ov(y):b.stateNode.complete){Fe=0,Jn=null;var I=b.sibling;if(I!==null)be=I;else{var J=b.return;J!==null?(be=J,Gu(J)):be=null}break e}}Fe=0,Jn=null,Os(t,n,f,5);break;case 6:Fe=0,Jn=null,Os(t,n,f,6);break;case 8:Hh(),nn=6;break t;default:throw Error(r(462))}}aM();break}catch(ot){I0(t,ot)}while(!0);return fa=Er=null,O.H=o,O.A=u,Be=a,be!==null?0:(qe=null,we=0,Wl(),nn)}function aM(){for(;be!==null&&!pe();)V0(be)}function V0(t){var n=a0(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?Gu(t):be=n}function X0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Qg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=Qg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:jf(n);var o=n;o===gn&&(Ee?($l(o),o.tag===5&&o.stateNode!=null&&(Ye=o.stateNode)):($l(o),Ee=!0));default:s0(a,n),n=be=Um(n,va),n=a0(a,n,va)}t.memoizedProps=t.pendingProps,n===null?Gu(t):be=n}function Os(t,n,a,o){fa=Er=null,jf(n),ys=null,Ho=0;var u=n.return;try{if(qx(t,u,n,a,we)){nn=1,yu(t,di(a,t.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;nn=1,yu(t,di(a,t.current)),be=null;return}n.flags&32768?(Ee||o===1?t=!0:Cs||(we&536870912)!==0?t=!1:(Xa=t=!0,(o===2||o===9||o===3||o===6)&&(o=Mn.current,o!==null&&o.tag===13&&(o.flags|=16384))),k0(n,t)):Gu(n)}function Gu(t){var n=t;do{if((n.flags&32768)!==0){k0(n,Xa);return}t=n.return;var a=Zx(n.alternate,n,va);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);nn===0&&(nn=5)}function k0(t,n){do{var a=Kx(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);nn=6,be=null}function q0(t,n,a,o,u,f,y,b,I,J,ot,mt){t.cancelPendingCommit=null;do Vu();while($e!==0);if((Be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===qe&&(be=qe=null,we=0),zr=n,Di=t,Ki=a,Fh=u,O0=o,rM(t,n,a,y,b,I,mt)}}function rM(t,n,a,o,u,f,y){var b=n.lanes|n.childLanes;if(Ih=b,b|=Mf,it(t,a,b,o,u,f),Ds=null,(a&335544064)===a?(Ns=Lx(t),o=10262):(Ns=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(t.callbackNode=null,t.callbackPriority=0,fM(Ht,function(){return qh(),null})):(t.callbackNode=null,t.callbackPriority=0),Cu=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=Mt.p,Mt.p=2,f=Be,Be|=4;try{Qx(t,n,a)}finally{Be=f,Mt.p=u,O.T=o}}$e=1,Cu?ws=NM(y,t.containerInfo,Ns,Vh,Xh,oM,kh,qh,sM):(Vh(),Xh(),kh())}function sM(t){if($e!==0){var n=Di.onRecoverableError;n(t,{componentStack:null})}}function oM(){$e===3&&($e=0,C0(zr,Di),$e=4)}function Vh(){if($e===1){$e=0;var t=Di,n=zr,a=Ki,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var u=Mt.p;Mt.p=2;var f=Be;Be|=4;try{Jo=Du=!1,b0(n,t,a),a=id;var y=Mm(t.containerInfo),b=a.focusedElem,I=a.selectionRange;if(y!==b&&b&&b.ownerDocument&&xm(b.ownerDocument.documentElement,b)){if(I!==null&&vf(b)){var J=I.start,ot=I.end;if(ot===void 0&&(ot=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ot,b.value.length);else{var mt=b.ownerDocument||document,j=mt&&mt.defaultView||window;if(j.getSelection){var at=j.getSelection(),zt=b.textContent.length,Qt=Math.min(I.start,zt),_e=I.end===void 0?Qt:Math.min(I.end,zt);!at.extend&&Qt>_e&&(y=_e,_e=Qt,Qt=y);var K=Sm(b,Qt),k=Sm(b,_e);if(K&&k&&(at.rangeCount!==1||at.anchorNode!==K.node||at.anchorOffset!==K.offset||at.focusNode!==k.node||at.focusOffset!==k.offset)){var et=mt.createRange();et.setStart(K.node,K.offset),at.removeAllRanges(),Qt>_e?(at.addRange(et),at.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),at.addRange(et))}}}}for(mt=[],at=b;at=at.parentNode;)at.nodeType===1&&mt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Vs=!!nd,id=nd=null}finally{Be=f,Mt.p=u,O.T=o}}t.current=n,$e=2}}function Xh(){if($e===2){$e=0;var t=Di,n=zr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Mt.p;Mt.p=2;var u=Be;Be|=4;try{y0(t,n.alternate,n)}finally{Be=u,Mt.p=o,O.T=a}}$e=3}}function kh(){if($e===4||$e===3){$e=0;var t=ws;ws=null,F();var n=Di,a=zr,o=Ki,u=O0,f=(o&335544064)===o?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?$e=5:($e=0,zr=Di=null,Y0(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(qa=null),oe(o),a=a.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ue,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=O.T,f=Mt.p,Mt.p=2,O.T=null;try{for(var y=n.onRecoverableError,b=0;b<u.length;b++){var I=u[b];y(I.value,{componentStack:I.stack})}}finally{O.T=a,Mt.p=f}}if(u=Ds,y=Ns,Ns=null,u!==null&&(Ds=null,y===null&&(y=[]),t!==null))for(I=0;I<u.length;I++)a=(0,u[I])(y),a!==void 0&&t.finished.finally(a);(Ki&3)!==0&&Vu(),Qi(n),f=n.pendingLanes,(o&261930)!==0&&(f&42)!==0?n===Iu?nl++:(nl=0,Iu=n):(nl=0,Iu=null),il(0)}}function Y0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Bo(n)))}function Vu(){return ws!==null&&(ws.skipTransition(),ws=null),Vh(),Xh(),kh(),qh()}function qh(){if($e!==5)return!1;var t=Di,n=Ih;Ih=0;var a=oe(Ki),o=O.T,u=Mt.p;try{Mt.p=32>a?32:a,O.T=null,a=Fh,Fh=null;var f=Di,y=Ki;if($e=0,zr=Di=null,Ki=0,(Be&6)!==0)throw Error(r(331));var b=Be;if(Be|=4,N0(f.current),R0(f,f.current,y,a),Be=b,il(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ue,f)}catch{}return!0}finally{Mt.p=u,O.T=o,Y0(t,n)}}function W0(t,n,a){n=di(a,n),n=lh(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(lt(t,2),Qi(t))}function He(t,n,a){if(t.tag===3)W0(t,t,a);else for(;n!==null;){if(n.tag===3){W0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(qa===null||!qa.has(o))){t=di(a,t),a=Xg(2),o=Ba(n,a,2),o!==null&&(kg(a,o,n,t),lt(o,2),Qi(o));break}}n=n.return}}function Yh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new tM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(zh=!0,u.add(a),t=lM.bind(null,t,n,a),n.then(t,t))}function lM(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(we&a)===a&&((nn===4||nn===3&&(we&62914560)===we&&300>Ct()-Pu)&&(Be&2)===0?Ls(t,0):Ou|=a,Rs===we&&(Rs=0)),Qi(t)}function j0(t,n){n===0&&(n=Q()),t=Sr(t,n),t!==null&&(lt(t,n),Qi(t))}function uM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),j0(t,a)}function cM(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),j0(t,a)}function fM(t,n){return Bt(t,n)}var Ps=null,zs=null,Wh=!1,Xu=!1,jh=!1,Wa=0;function Qi(t){t!==zs&&t.next===null&&(zs===null?Ps=zs=t:zs=zs.next=t),Xu=!0,Wh||(Wh=!0,dM())}function il(t,n){if(!jh&&Xu){jh=!0;do for(var a=!1,o=Ps;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-an(42|t)+1)-1,f&=u&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,J0(o,f))}else f=we,f=ia(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Fi(o,f)||(a=!0,J0(o,f));o=o.next}while(a);jh=!1}}function hM(){Z0()}function Z0(){Xu=Wh=!1;var t=0;Wa!==0&&TM()&&(t=Wa);for(var n=Ct(),a=null,o=Ps;o!==null;){var u=o.next,f=K0(o,n);f===0?(o.next=null,a===null?Ps=u:a.next=u,u===null&&(zs=a)):(a=o,(t!==0||(f&3)!==0)&&(Xu=!0)),o=u}$e!==0&&$e!==5||il(t),Wa!==0&&(Wa=0)}function K0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-an(f),b=1<<y,I=u[y];I===-1?((b&a)===0||(b&o)!==0)&&(u[y]=D(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=qe,a=we,a=ia(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Yt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fi(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Yt(o),oe(a)){case 2:case 8:a=vt;break;case 32:a=Ht;break;case 268435456:a=ge;break;default:a=Ht}return o=Q0.bind(null,t),a=Bt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Yt(o),t.callbackPriority=2,t.callbackNode=null,2}function Q0(t,n){if($e!==0&&$e!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vu()&&t.callbackNode!==a)return null;var o=we;return o=ia(t,t===qe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(z0(t,o,n),K0(t,Ct()),t.callbackNode!=null&&t.callbackNode===a?Q0.bind(null,t):null)}function J0(t,n){if(Vu())return null;z0(t,n,!0)}function dM(){AM(function(){(Be&6)!==0?Bt(gt,hM):Z0()})}function Zh(){if(Wa===0){var t=Ar;t===0&&(t=na,na<<=1,(na&261888)===0&&(na=256)),Wa=t}return Wa}function $0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fl(t)}function pM(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=$0((u[Te]||null).action),y=o.submitter;y&&(n=(n=y[Te]||null)?$0(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new Xl("action","action",null,o,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var I=new FormData(u,y);ih(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=new FormData(u,y),ih(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Kh=0;Kh<xf.length;Kh++){var Qh=xf[Kh],mM=Qh.toLowerCase(),gM=Qh[0].toUpperCase()+Qh.slice(1);Ai(mM,"on"+gM)}Ai(bm,"onAnimationEnd"),Ai(Am,"onAnimationIteration"),Ai(Cm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(bx,"onTransitionRun"),Ai(Ax,"onTransitionStart"),Ai(Cx,"onTransitionCancel"),Ai(Rm,"onTransitionEnd"),as("onMouseEnter",["mouseout","mouseover"]),as("onMouseLeave",["mouseout","mouseover"]),as("onPointerEnter",["pointerout","pointerover"]),as("onPointerLeave",["pointerout","pointerover"]),vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),vr("onBeforeInput",["compositionend","keypress","textInput","paste"]),vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));function tv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],I=b.instance,J=b.currentTarget;if(b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=J;try{f(u)}catch(ot){Yl(ot)}u.currentTarget=null,f=I}else for(y=0;y<o.length;y++){if(b=o[y],I=b.instance,J=b.currentTarget,b=b.listener,I!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=J;try{f(u)}catch(ot){Yl(ot)}u.currentTarget=null,f=I}}}}function Ae(t,n){var a=n[Le];a===void 0&&(a=n[Le]=new Set);var o=t+"__bubble";a.has(o)||(ev(n,t,2,!1),a.add(o))}function Jh(t,n,a){var o=0;n&&(o|=4),ev(a,t,o,n)}var ku="_reactListening"+Math.random().toString(36).slice(2);function $h(t){if(!t[ku]){t[ku]=!0,zl.forEach(function(a){a!=="selectionchange"&&(vM.has(a)||Jh(a,!1,t),Jh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ku]||(n[ku]=!0,Jh("selectionchange",!1,n))}}function ev(t,n,a,o){switch(kv(n)){case 2:var u=uE;break;case 8:u=cE;break;default:u=yd}a=u.bind(null,n,a,t),u=void 0,!of||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function td(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===u)break;if(y===4)for(y=o.return;y!==null;){var I=y.tag;if((I===3||I===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;b!==null;){if(y=bi(b),y===null)return;if(I=y.tag,I===5||I===6||I===26||I===27){o=f=y;continue t}b=b.parentNode}}o=o.return}em(function(){var J=f,ot=rf(a),mt=[];t:{var j=wm.get(t);if(j!==void 0){var at=Xl,zt=t;switch(t){case"keypress":if(Gl(a)===0)break t;case"keydown":case"keyup":at=ex;break;case"focusin":zt="focus",at=ff;break;case"focusout":zt="blur",at=ff;break;case"beforeblur":case"afterblur":at=ff;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=XS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=sx;break;case bm:case Am:case Cm:at=YS;break;case Rm:at=lx;break;case"scroll":case"scrollend":at=GS;break;case"wheel":at=cx;break;case"copy":case"cut":case"paste":at=jS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=sm;break;case"submit":at=ax;break;case"toggle":case"beforetoggle":at=hx}var Qt=(n&4)!==0,_e=!Qt&&(t==="scroll"||t==="scrollend"),K=Qt?j!==null?j+"Capture":null:j;Qt=[];for(var k=J,et;k!==null;){var pt=k;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||K===null||(pt=Ao(k,K),pt!=null&&Qt.push(rl(k,pt,et))),_e)break;k=k.return}0<Qt.length&&(j=new at(j,zt,null,a,ot),mt.push({event:j,listeners:Qt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",at&&a!==af&&(zt=a.relatedTarget||a.fromElement)&&(bi(zt)||zt[on]))break t;(j||at)&&(zt=ot.window===ot?ot:(at=ot.ownerDocument)?at.defaultView||at.parentWindow:window,j?(at=a.relatedTarget||a.toElement,j=J,at=at?bi(at):null,at!==null&&(_e=c(at),Qt=at.tag,at!==_e||Qt!==5&&Qt!==27&&Qt!==6)&&(at=null)):(j=null,at=J),j!==at&&(Qt=am,pt="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=sm,pt="onPointerLeave",K="onPointerEnter",k="pointer"),_e=j==null?zt:Hn(j),et=at==null?zt:Hn(at),zt=new Qt(pt,k+"leave",j,a,ot),zt.target=_e,zt.relatedTarget=et,pt=null,bi(ot)===J&&(Qt=new Qt(K,k+"enter",at,a,ot),Qt.target=et,Qt.relatedTarget=_e,pt=Qt),_e=pt,Qt=j&&at?G(j,at,_M):null,j!==null&&nv(mt,zt,j,Qt,!1),at!==null&&_e!==null&&nv(mt,_e,at,Qt,!0)))}t:{if(j=J?Hn(J):window,at=j.nodeName&&j.nodeName.toLowerCase(),at==="select"||at==="input"&&j.type==="file")var Wt=pm;else if(hm(j))if(mm)Wt=Mx;else{Wt=Sx;var De=yx}else at=j.nodeName,!at||at.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?J&&nf(J.elementType)&&(Wt=pm):Wt=xx;if(Wt&&(Wt=Wt(t,J))){dm(mt,Wt,a,ot);break t}De&&De(t,j,J)}switch(De=J?Hn(J):window,t){case"focusin":(hm(De)||De.contentEditable==="true")&&(cs=De,_f=J,Oo=null);break;case"focusout":Oo=_f=cs=null;break;case"mousedown":yf=!0;break;case"contextmenu":case"mouseup":case"dragend":yf=!1,Em(mt,a,ot);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Em(mt,a,ot)}var ee;if(df)t:{switch(t){case"compositionstart":var ue="onCompositionStart";break t;case"compositionend":ue="onCompositionEnd";break t;case"compositionupdate":ue="onCompositionUpdate";break t}ue=void 0}else us?cm(t,a)&&(ue="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ue="onCompositionStart");ue&&(om&&a.locale!=="ko"&&(us||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&us&&(ee=nm()):(Ra=ot,lf="value"in Ra?Ra.value:Ra.textContent,us=!0)),De=qu(J,ue),0<De.length&&(ue=new rm(ue,t,null,a,ot),mt.push({event:ue,listeners:De}),ee?ue.data=ee:(ee=fm(a),ee!==null&&(ue.data=ee)))),(ee=px?mx(t,a):gx(t,a))&&(ue=qu(J,"onBeforeInput"),0<ue.length&&(De=new rm("onBeforeInput","beforeinput",null,a,ot),mt.push({event:De,listeners:ue}),De.data=ee)),pM(mt,t,J,a,ot)}tv(mt,n)})}function rl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function qu(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ao(t,a),u!=null&&o.unshift(rl(t,u,f)),u=Ao(t,n),u!=null&&o.push(rl(t,u,f))),t.tag===3)return o;t=t.return}return[]}function _M(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function nv(t,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var b=a,I=b.alternate,J=b.stateNode;if(b=b.tag,I!==null&&I===o)break;b!==5&&b!==26&&b!==27||J===null||(I=J,u?(J=Ao(a,f),J!=null&&y.unshift(rl(a,J,I))):u||(J=Ao(a,f),J!=null&&y.push(rl(a,J,I)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var yM=/\r\n?/g,SM=/\u0000|\uFFFD/g;function iv(t){return(typeof t=="string"?t:""+t).replace(yM,`
`).replace(SM,"")}function av(t,n){return n=iv(n),iv(t)===n}function Ge(t,n,a,o,u,f){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||ss(t,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&ss(t,""+o);else return;break;case"className":Il(t,"class",o);break;case"tabIndex":Il(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(t,a,o);break;case"style":$p(t,o,f);return;case"data":if(n!=="object"){Il(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Fl(o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",u.name,u,null),Ge(t,n,"formEncType",u.formEncType,u,null),Ge(t,n,"formMethod",u.formMethod,u,null),Ge(t,n,"formTarget",u.formTarget,u,null)):(Ge(t,n,"encType",u.encType,u,null),Ge(t,n,"method",u.method,u,null),Ge(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Fl(o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Gi);return;case"onScroll":o!=null&&Ae("scroll",t);return;case"onScrollEnd":o!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Fl(o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),Bl(t,"popover",o);break;case"xlinkActuate":ra(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ra(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ra(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ra(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ra(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ra(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ra(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ra(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ra(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Bl(t,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=FS.get(a)||a,Bl(t,a,o);else return}Oe=!0}function ed(t,n,a,o,u,f){switch(a){case"style":$p(t,o,f);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof o=="string")ss(t,o);else if(typeof o=="number"||typeof o=="bigint")ss(t,""+o);else return;break;case"onScroll":o!=null&&Ae("scroll",t);return;case"onScrollEnd":o!=null&&Ae("scrollend",t);return;case"onClick":o!=null&&(t.onclick=Gi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!bo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[Te]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,o,u);break t}Oe=!0,a in t?t[a]=o:o===!0?t.setAttribute(a,""):Bl(t,a,o)}return}Oe=!0}function bn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,y,a,null)}}u&&Ge(t,n,"srcSet",a.srcSet,a,null),o&&Ge(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var b=f=y=u=null,I=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ot=a[o];if(ot!=null)switch(o){case"name":u=ot;break;case"type":y=ot;break;case"checked":I=ot;break;case"defaultChecked":J=ot;break;case"value":f=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:Ge(t,n,o,ot,a,null)}}Zp(t,f,b,I,J,y,u,!1);return;case"select":Ae("invalid",t),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:Ge(t,n,u,b,a,null)}n=f,a=y,t.multiple=!!o,n!=null?rs(t,!!o,n,!1):a!=null&&rs(t,!!o,a,!0);return;case"textarea":Ae("invalid",t),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(t,n,y,b,a,null)}Qp(t,o,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(t,n,I,o,a,null)}return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(o=0;o<al.length;o++)Ae(al[o],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,J,o,a,null)}return;default:if(nf(n)){for(ot in a)a.hasOwnProperty(ot)&&(o=a[ot],o!==void 0&&ed(t,n,ot,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ge(t,n,b,o,a,null))}var xM={};function MM(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,b=null,I=null,J=null,ot=null;for(at in a){var mt=a[at];if(a.hasOwnProperty(at)&&mt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":I=mt;default:o.hasOwnProperty(at)||Ge(t,n,at,null,o,mt)}}for(var j in o){var at=o[j];if(mt=a[j],o.hasOwnProperty(j)&&(at!=null||mt!=null))switch(j){case"type":at!==mt&&(Oe=!0),f=at;break;case"name":at!==mt&&(Oe=!0),u=at;break;case"checked":at!==mt&&(Oe=!0),J=at;break;case"defaultChecked":at!==mt&&(Oe=!0),ot=at;break;case"value":at!==mt&&(Oe=!0),y=at;break;case"defaultValue":at!==mt&&(Oe=!0),b=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==mt&&Ge(t,n,j,at,o,mt)}}tf(t,y,b,I,J,ot,f,u);return;case"select":at=y=b=j=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":at=I;default:o.hasOwnProperty(f)||Ge(t,n,f,null,o,I)}for(u in o)if(f=o[u],I=a[u],o.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":f!==I&&(Oe=!0),j=f;break;case"defaultValue":f!==I&&(Oe=!0),b=f;break;case"multiple":f!==I&&(Oe=!0),y=f;default:f!==I&&Ge(t,n,u,f,o,I)}n=b,a=y,o=at,j!=null?rs(t,!!a,j,!1):!!o!=!!a&&(n!=null?rs(t,!!a,n,!0):rs(t,!!a,a?[]:"",!1));return;case"textarea":at=j=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(t,n,b,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":u!==f&&(Oe=!0),j=u;break;case"defaultValue":u!==f&&(Oe=!0),at=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ge(t,n,y,u,o,f)}Kp(t,j,at);return;case"option":for(var zt in a)if(j=a[zt],a.hasOwnProperty(zt)&&j!=null&&!o.hasOwnProperty(zt))switch(zt){case"selected":t.selected=!1;break;default:Ge(t,n,zt,null,o,j)}for(I in o)if(j=o[I],at=a[I],o.hasOwnProperty(I)&&j!==at&&(j!=null||at!=null))switch(I){case"selected":j!==at&&(Oe=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Ge(t,n,I,j,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)j=a[Qt],a.hasOwnProperty(Qt)&&j!=null&&!o.hasOwnProperty(Qt)&&Ge(t,n,Qt,null,o,j);for(J in o)if(j=o[J],at=a[J],o.hasOwnProperty(J)&&j!==at&&(j!=null||at!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,n));break;default:Ge(t,n,J,j,o,at)}return;default:if(nf(n)){for(var _e in a)j=a[_e],a.hasOwnProperty(_e)&&j!==void 0&&!o.hasOwnProperty(_e)&&ed(t,n,_e,void 0,o,j);for(ot in o)j=o[ot],at=a[ot],!o.hasOwnProperty(ot)||j===at||j===void 0&&at===void 0||ed(t,n,ot,j,o,at);return}}for(var K in a)j=a[K],a.hasOwnProperty(K)&&j!=null&&!o.hasOwnProperty(K)&&Ge(t,n,K,null,o,j);for(mt in o)j=o[mt],at=a[mt],!o.hasOwnProperty(mt)||j===at||j==null&&at==null||Ge(t,n,mt,j,o,at)}function rv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function EM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,b=u.duration;if(f&&b&&rv(y)){for(y=0,b=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],J=I.startTime;if(J>b)break;var ot=I.transferSize,mt=I.initiatorType;ot&&rv(mt)&&(I=I.responseEnd,y+=ot*(I<b?1:(b-J)/(I-J)))}if(--o,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var nd=null,id=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function sv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ov(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function lv(t,n,a,o){return a=sl(a).createElement(t),a[Se]=o,a[Te]=n,bn(a,t,n),ze(a),a}function ad(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function TM(){var t=window.event;return t&&t.type==="popstate"?t===rd?!1:(rd=t,!0):(rd=null,!1)}var sd=typeof setTimeout=="function"?setTimeout:void 0,bM=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,cv=typeof requestAnimationFrame=="function"?requestAnimationFrame:sd,AM=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(t){return uv.resolve(null).then(t).catch(CM)}:sd;function CM(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function fv(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Xs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")pd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,pd(a);for(var f=a.firstChild;f;){var y=f.nextSibling,b=f.nodeName;f[Un]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&pd(t.ownerDocument.body);a=u}while(a);Xs(n)}function hv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function dv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&o++}o===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function pv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function RM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function od(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return RM(n,a,t)}function wM(t){return t.documentElement.clientHeight}function DM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function NM(t,n,a,o,u,f,y,b,I){var J=n.nodeType===9?n:n.ownerDocument;try{var ot=J.startViewTransition({update:function(){var j=J.defaultView,at=j.navigation&&j.navigation.transition,zt=J.fonts.status;o();var Qt=[];if(zt==="loaded"&&(wM(J),J.fonts.status==="loading"&&Qt.push(J.fonts.ready)),zt=Qt.length,t!==null)for(var _e=t.suspenseyImages,K=0,k=0;k<_e.length;k++){var et=_e[k];if(!et.complete){var pt=et.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<j.innerHeight&&pt.left<j.innerWidth){if(K+=Pv(et),K>ju){Qt.length=zt;break}et=new Promise(DM.bind(et)),Qt.push(et)}}}if(0<Qt.length)return j=Promise.race([Promise.all(Qt),new Promise(function(Wt){return setTimeout(Wt,500)})]).then(u,u),(at?Promise.allSettled([at.finished,j]):j).then(f,f);if(u(),at)return at.finished.then(f,f);f()},types:a});J.__reactViewTransition=ot;var mt=[];return ot.ready.then(function(){for(var j=J.documentElement.getAnimations({subtree:!0}),at=0;at<j.length;at++){var zt=j[at],Qt=zt.effect,_e=Qt.pseudoElement;if(_e!=null&&_e.startsWith("::view-transition")){mt.push(zt),zt=Qt.getKeyframes();for(var K=_e=void 0,k=!0,et=0;et<zt.length;et++){var pt=zt[et],Wt=pt.width;if(_e===void 0)_e=Wt;else if(_e!==Wt){k=!1;break}if(Wt=pt.height,K===void 0)K=Wt;else if(K!==Wt){k=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}k&&_e!==void 0&&K!==void 0&&(Qt.setKeyframes(zt),k=getComputedStyle(Qt.target,Qt.pseudoElement),k.width!==_e||k.height!==K)&&(k=zt[0],k.width=_e,k.height=K,k=zt[zt.length-1],k.width=_e,k.height=K,Qt.setKeyframes(zt))}}y()},function(j){J.__reactViewTransition===ot&&(J.__reactViewTransition=null);try{if(typeof j=="object"&&j!==null)switch(j.name){case"InvalidStateError":(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null)}j!==null&&I(j)}finally{o(),u(),y()}}),ot.finished.finally(function(){for(var j=0;j<mt.length;j++)mt[j].cancel();J.__reactViewTransition===ot&&(J.__reactViewTransition=null),b()}),ot}catch{return o(),u(),y(),null}}function Br(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Br.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Br.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&o.push(a[u])}return o},Br.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function mv(t){return{name:t,group:new Br("group",t),imagePair:new Br("image-pair",t),old:new Br("old",t),new:new Br("new",t)}}function ei(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ei.prototype.addEventListener=function(t,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(vv(f,t,n,a)===-1){var y=this,b=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(b=function(I){y.removeEventListener(t,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),o!==null&&(u=y.removeEventListener.bind(y,t,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=Bs(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:b,cleanup:u}),m(this._fragmentFiber.child,!1,UM,t,b,o)}this._eventListeners=f}};function UM(t,n,a,o){return S(t).addEventListener(n,a,o),!1}ei.prototype.removeEventListener=function(t,n,a){var o=this._eventListeners;if(o!==null&&(n=vv(o,t,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var f=u.cleanup;u=Bs(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,LM,t,a,u),o.splice(n,1),f!==null&&f()}};function LM(t,n,a,o){return S(t).removeEventListener(n,a,o),!1}function Bs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function gv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function vv(t,n,a,o){if(t.length===0)return-1;o=gv(o);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&gv(f.optionsOrUseCapture)===o)return u}return-1}ei.prototype.dispatchEvent=function(t){var n=_(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];o.addEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture))}if(n.appendChild(o),t=o.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],o.removeEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture));return n.removeChild(o),t}return n.dispatchEvent(t)},ei.prototype.focus=function(t){m(this._fragmentFiber.child,!0,_v,t,void 0,void 0)};function _v(t,n){return t.tag===6?!1:(t=S(t),qM(t,n))}ei.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,ld,n,void 0,void 0);for(var a=n.length-1;0<=a&&!_v(n[a],t);a--);};function ld(t,n){return n.push(t),!1}ei.prototype.blur=function(){var t=_(this._fragmentFiber);t!==null&&(t=S(t),t=sl(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,OM,t,void 0,void 0))};function OM(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ei.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,PM,t,void 0,void 0)};function PM(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ei.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,zM,t,void 0,void 0);for(var a=n=0;a<Ni.length;a++){var o=Ni[a];o.fragmentInstance===this&&o.observer===t?t.unobserve(o.instance):Ni[n++]=o}Ni.length=n}};function zM(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Ni=[],ud=!1;function BM(t,n,a){Ni.push({fragmentInstance:t,observer:n,instance:a}),ud||(ud=!0,YM(function(){ud=!1;var o=Ni;Ni=[];for(var u=0;u<o.length;u++){var f=o[u];f.observer.unobserve(f.instance)}}))}ei.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,IM,t,void 0,void 0),t};function IM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ei.prototype.getRootNode=function(t){var n=_(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ei.prototype.compareDocumentPosition=function(t){var n=_(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,ld,a,void 0,void 0);var o=S(n);if(a.length===0){if(a=o,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),u=S(a[a.length-1]);var f=M(this._fragmentFiber)?n.parentElement:o;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(t),b=u.compareDocumentPosition(t),I=y&Node.DOCUMENT_POSITION_CONTAINED_BY||b&Node.DOCUMENT_POSITION_CONTAINED_BY;return b=o&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&b&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===t||f&&u===t||I||b?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||FM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function FM(t,n,a,o,u){var f=bi(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=_(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=G(a,f,Y),n===null?n=!1:(m(n,!0,R,f,a),f=x,x=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===o)&&(n=G(o,f,Y),n===null?n=!1:(m(n,!0,N,f,o),f=x,L=x=null,n=f!==null)),n):!1}function yv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ei.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];m(this._fragmentFiber.child,!1,ld,n,void 0,void 0);var a=t!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||_(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){t=S(o),yv(t,a);return}if(o=S(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(t);return}o.scrollIntoView(t)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=S(u),yv(u,a)):S(u).scrollIntoView(t),o+=a?-1:1}};function HM(t,n){return t=S(t),Sv(t,n),!1}function Sv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function xv(t,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];t.addEventListener(u.type,u.attachedListener,Bs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,b=0;b<Ni.length;b++){var I=Ni[b];(I.fragmentInstance!==n||I.observer!==f||I.instance!==t)&&(Ni[y++]=I)}Ni.length=y,f.observe(t)}),Sv(t,n))}function GM(t,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];t.removeEventListener(u.type,u.attachedListener,Bs(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?BM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function cd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cd(a),ci(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function VM(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Un])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function XM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_i(t.nextSibling),t===null))return null;return t}function Mv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function hd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var dd=null;function Ev(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return _i(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Tv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function qM(t,n){function a(){o=!0}if(t.ownerDocument.activeElement===t)return!0;var o=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return o}function YM(t){cv(function(){cv(function(n){return t(n)})})}function bv(t,n,a){switch(n=sl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Av(t,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&Ge(t,n,o,null,xM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Gi&&(t.onclick=null),ci(t)}function pd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ci(t)}var yi=new Map,Cv=new Set;function ol(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=Mt.d;Mt.d={f:WM,r:jM,D:ZM,C:KM,L:QM,m:JM,X:tE,S:$M,M:eE};function WM(){var t=_a.f(),n=Fu();return t||n}function jM(t){var n=Ze(t);n!==null&&n.tag===5&&n.type==="form"?wg(n):_a.r(t)}var Is=typeof document>"u"?null:document;function Rv(t,n,a){var o=Is;if(o&&typeof n=="string"&&n){var u=fi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Cv.has(u)||(Cv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",t),ze(n),o.head.appendChild(n)))}}function ZM(t){_a.D(t),Rv("dns-prefetch",t,null)}function KM(t,n){_a.C(t,n),Rv("preconnect",t,n)}function QM(t,n,a){_a.L(t,n,a);var o=Is;if(o&&t&&n){var u='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fi(a.imageSizes)+'"]')):u+='[href="'+fi(t)+'"]';var f=u;switch(n){case"style":f=Fs(t);break;case"script":f=Hs(t)}if(!(yi.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ll(f))||n==="script"&&o.querySelector(ul(f))))){var y=o.createElement("link");bn(y,"link",t),n==="style"&&(y[aa]=!0,y.onload=y.onerror=function(){is(y)}),ze(y),o.head.appendChild(y)}}}function JM(t,n){_a.m(t,n);var a=Is;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fi(o)+'"][href="'+fi(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Hs(t)}if(!yi.has(f)&&(t=P({rel:"modulepreload",href:t},n),yi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ul(f)))return}o=a.createElement("link"),bn(o,"link",t),ze(o),a.head.appendChild(o)}}}function $M(t,n,a){_a.S(t,n,a);var o=Is;if(o&&t){var u=Hi(o).hoistableStyles,f=Fs(t);n=n||"default";var y=u.get(f);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(ll(f)))b.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(f))&&md(t,a);var I=y=o.createElement("link");ze(I),bn(I,"link",t),I._p=new Promise(function(J,ot){I.onload=J,I.onerror=ot}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yu(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},u.set(f,y)}}}function tE(t,n){_a.X(t,n);var a=Is;if(a&&t){var o=Hi(a).hoistableScripts,u=Hs(t),f=o.get(u);f||(f=a.querySelector(ul(u)),f||(t=P({src:t,async:!0},n),(n=yi.get(u))&&gd(t,n),f=a.createElement("script"),ze(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function eE(t,n){_a.M(t,n);var a=Is;if(a&&t){var o=Hi(a).hoistableScripts,u=Hs(t),f=o.get(u);f||(f=a.querySelector(ul(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&gd(t,n),f=a.createElement("script"),ze(f),bn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wv(t,n,a,o){var u=(u=C.current)?ol(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Fs(a.href),n=Hi(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fs(a.href);var f=Hi(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(ll(t)))?f._p||(y.instance=f,y.state.loading=5):(f=yi.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,f)),nE(u,t,f,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Hs(a),n=Hi(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Fs(t){return'href="'+fi(t)+'"'}function ll(t){return'link[rel="stylesheet"]['+t+"]"}function Dv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function nE(t,n,a,o){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[aa]!==!0){o.loading=1;return}}else n=t.createElement("link"),n[aa]=!0,n.onload=n.onerror=is.bind(null,n),bn(n,"link",a),ze(n),t.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Hs(t){return'[src="'+fi(t)+'"]'}function ul(t){return"script[async]"+t}function Nv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+fi(a.href)+'"]');if(o)return n.instance=o,ze(o),o;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ze(o),bn(o,"style",u),Yu(o,a.precedence,t),n.instance=o;case"stylesheet":u=Fs(a.href);var f=t.querySelector(ll(u));if(f)return n.state.loading|=4,n.instance=f,ze(f),f;o=Dv(a),(u=yi.get(u))&&md(o,u),f=(t.ownerDocument||t).createElement("link"),ze(f);var y=f;return y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),bn(f,"link",o),n.state.loading|=4,Yu(f,a.precedence,t),n.instance=f;case"script":return f=Hs(a.src),(u=t.querySelector(ul(f)))?(n.instance=u,ze(u),u):(o=a,(u=yi.get(f))&&(o=P({},a),gd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),ze(u),bn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yu(o,a.precedence,t));return n.instance}function Yu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Wu=null;function Uv(t,n,a){if(Wu===null){var o=new Map,u=Wu=new Map;u.set(a,o)}else u=Wu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Un]||f[Se]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var b=o.get(y);b?b.push(f):o.set(y,[f])}}return o}function vd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function iE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Lv(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Ov(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Pv(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function zv(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=Pv(n),t.suspenseyImages.push(n)),t=sE.bind(t),n.decode().then(t,t))}function aE(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Fs(o.href),f=n.querySelector(ll(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=cl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,ze(f);return}f=n.ownerDocument||n,o=Dv(o),(u=yi.get(u))&&md(o,u),f=f.createElement("link"),ze(f);var y=f;y._p=new Promise(function(b,I){y.onload=b,y.onerror=I}),bn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ju=0;function rE(t,n){return t.stylesheets&&t.count===0&&Ku(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ju===0&&(ju=62500*EM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ku(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ju?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Bv(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Ku(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function cl(){this.count--,Bv(this)}function sE(){this.imgCount--,Bv(this)}var Zu=null;function Ku(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zu=new Map,n.forEach(oE,t),Zu=null,cl.call(t))}function oE(t,n){if(!(n.state.loading&4)){var a=Zu.get(t);if(a)var o=a.get(null);else{a=new Map,Zu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=cl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Gs={$$typeof:ht,Provider:null,Consumer:null,_currentValue:kt,_currentValue2:kt,_threadCount:0};function lE(t,n,a,o,u,f,y,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function Iv(t,n,a,o,u,f,y,b,I,J,ot,mt){return t=new lE(t,n,a,y,I,J,ot,mt,b),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=Uf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},zf(f),t}function Fv(t){return t?(t=ds,t):ds}function Hv(t,n,a,o,u,f){u=Fv(u),o.context===null?o.context=u:o.pendingContext=u,o=za(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ba(t,o,n),a!==null&&(qn(a,t,n),Go(a,t,n))}function Gv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function _d(t,n){Gv(t,n),(t=t.alternate)&&Gv(t,n)}function Vv(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&qn(n,t,67108864),_d(t,67108864)}}function Xv(t){if(t.tag===13||t.tag===31){var n=ti();n=$t(n);var a=Sr(t,n);a!==null&&qn(a,t,n),_d(t,n)}}var Vs=!0;function uE(t,n,a,o){var u=O.T;O.T=null;var f=Mt.p;try{Mt.p=2,yd(t,n,a,o)}finally{Mt.p=f,O.T=u}}function cE(t,n,a,o){var u=O.T;O.T=null;var f=Mt.p;try{Mt.p=8,yd(t,n,a,o)}finally{Mt.p=f,O.T=u}}function yd(t,n,a,o){if(Vs){var u=Sd(o);if(u===null)td(t,n,o,Qu,a),qv(t,o);else if(hE(u,t,n,a,o))o.stopPropagation();else if(qv(t,o),n&4&&-1<fE.indexOf(t)){for(;u!==null;){var f=Ze(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=ui(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var I=1<<31-an(y);b.entanglements[1]|=I,y&=~I}Qi(f),(Be&6)===0&&(zu=Ct()+500,il(0))}}break;case 31:case 13:b=Sr(f,2),b!==null&&qn(b,f,2),Fu(),_d(f,2)}if(f=Sd(o),f===null&&td(t,n,o,Qu,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else td(t,n,o,null,a)}}function Sd(t){return t=rf(t),xd(t)}var Qu=null;function xd(t){if(Qu=null,t=bi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Qu=t,null}function kv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dt()){case gt:return 2;case vt:return 8;case Ht:case le:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Md=!1,Za=null,Ka=null,Qa=null,fl=new Map,hl=new Map,Ja=[],fE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":fl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(n.pointerId)}}function dl(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ze(n),n!==null&&Vv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function hE(t,n,a,o,u){switch(n){case"focusin":return Za=dl(Za,t,n,a,o,u),!0;case"dragenter":return Ka=dl(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=dl(Qa,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return fl.set(f,dl(fl.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,hl.set(f,dl(hl.get(f)||null,t,n,a,o,u)),!0}return!1}function Yv(t){var n=bi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,re(t.priority,function(){Xv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,re(t.priority,function(){Xv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ju(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);af=o,a.target.dispatchEvent(o),af=null}else return n=Ze(a),n!==null&&Vv(n),t.blockedOn=a,!1;n.shift()}return!0}function Wv(t,n,a){Ju(t)&&a.delete(n)}function dE(){Md=!1,Za!==null&&Ju(Za)&&(Za=null),Ka!==null&&Ju(Ka)&&(Ka=null),Qa!==null&&Ju(Qa)&&(Qa=null),fl.forEach(Wv),hl.forEach(Wv)}function $u(t,n){t.blockedOn===n&&(t.blockedOn=null,Md||(Md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,dE)))}var tc=null;function jv(t){tc!==t&&(tc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){tc===t&&(tc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(xd(o||a)===null)continue;break}var f=Ze(a);f!==null&&(t.splice(n,3),n-=3,ih(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Xs(t){function n(I){return $u(I,t)}Za!==null&&$u(Za,t),Ka!==null&&$u(Ka,t),Qa!==null&&$u(Qa,t),fl.forEach(n),hl.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Yv(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[Te]||null;if(typeof f=="function")y||jv(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Te]||null)b=y.formAction;else if(xd(u)!==null)continue}else b=y.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),jv(a)}}}function Zv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ed(t){this._internalRoot=t}ec.prototype.render=Ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();Hv(a,o,t,n,null,null)},ec.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Hv(t.current,2,null,t,null,null),Fu(),n[on]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var n=fe();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&Yv(t)}};var Kv=e.version;if(Kv!=="19.3.1")throw Error(r(527,Kv,"19.3.1"));Mt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=v(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var pE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Ue=nc.inject(pE),Re=nc}catch{}}return ml.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Fg,f=Hg,y=Gg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Iv(t,1,!1,null,null,a,o,null,u,f,y,Zv),t[on]=n.current,$h(t),new Ed(n)},ml.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Fg,y=Hg,b=Gg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Iv(t,1,!0,n,a??null,o,u,I,f,y,b,Zv),n.context=Fv(null),a=n.current,o=ti(),o=$t(o),u=za(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,lt(n,a),Qi(n),t[on]=n.current,$h(t),new ec(n)},ml.version="19.3.1",ml}var s_;function bE(){if(s_)return Ad.exports;s_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ad.exports=TE(),Ad.exports}var AE=bE();const CE=Zy(AE);var Op={};(function s(e,i,r,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),h=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var H=new OffscreenCanvas(1,1),z=H.getContext("2d");z.fillRect(0,0,1,1);var Tt=H.transferToImageBitmap();z.createPattern(Tt,"no-repeat")}catch{return!1}return!0})();function p(){}function v(H){var z=i.exports.Promise,Tt=z!==void 0?z:e.Promise;return typeof Tt=="function"?new Tt(H):(H(p,p),null)}var g=(function(H,z){return{transform:function(Tt){if(H)return Tt;if(z.has(Tt))return z.get(Tt);var Nt=new OffscreenCanvas(Tt.width,Tt.height),A=Nt.getContext("2d");return A.drawImage(Tt,0,0),z.set(Tt,Nt),Nt},clear:function(){z.clear()}}})(d,new Map),m=(function(){var H=Math.floor(16.666666666666668),z,Tt,Nt={},A=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(z=function(V){var nt=Math.random();return Nt[nt]=requestAnimationFrame(function $(St){A===St||A+H-1<St?(A=St,delete Nt[nt],V()):Nt[nt]=requestAnimationFrame($)}),nt},Tt=function(V){Nt[V]&&cancelAnimationFrame(Nt[V])}):(z=function(V){return setTimeout(V,H)},Tt=function(V){return clearTimeout(V)}),{frame:z,cancel:Tt}})(),_=(function(){var H,z,Tt={};function Nt(A){function V(nt,$){A.postMessage({options:nt||{},callback:$})}A.init=function($){var St=$.transferControlToOffscreen();A.postMessage({canvas:St},[St])},A.fire=function($,St,bt){if(z)return V($,null),z;var Dt=Math.random().toString(36).slice(2);return z=v(function(O){function Mt(kt){kt.data.callback===Dt&&(delete Tt[Dt],A.removeEventListener("message",Mt),z=null,g.clear(),bt(),O())}A.addEventListener("message",Mt),V($,Dt),Tt[Dt]=Mt.bind(null,{data:{callback:Dt}})}),z},A.reset=function(){A.postMessage({reset:!0});for(var $ in Tt)Tt[$](),delete Tt[$]}}return function(){if(H)return H;if(!r&&c){var A=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{H=new Worker(URL.createObjectURL(new Blob([A])))}catch(V){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",V),null}Nt(H)}return H}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function E(H,z){return z?z(H):H}function T(H){return H!=null}function S(H,z,Tt){return E(H&&T(H[z])?H[z]:M[z],Tt)}function x(H){return H<0?0:Math.floor(H)}function L(H,z){return Math.floor(Math.random()*(z-H))+H}function R(H){return parseInt(H,16)}function N(H){return H.map(Y)}function Y(H){var z=String(H).replace(/[^0-9a-f]/gi,"");return z.length<6&&(z=z[0]+z[0]+z[1]+z[1]+z[2]+z[2]),{r:R(z.substring(0,2)),g:R(z.substring(2,4)),b:R(z.substring(4,6))}}function G(H){var z=S(H,"origin",Object);return z.x=S(z,"x",Number),z.y=S(z,"y",Number),z}function P(H){H.width=document.documentElement.clientWidth,H.height=document.documentElement.clientHeight}function q(H){var z=H.getBoundingClientRect();H.width=z.width,H.height=z.height}function U(H){var z=document.createElement("canvas");return z.style.position="fixed",z.style.top="0px",z.style.left="0px",z.style.pointerEvents="none",z.style.zIndex=H,z}function w(H,z,Tt,Nt,A,V,nt,$,St){H.save(),H.translate(z,Tt),H.rotate(V),H.scale(Nt,A),H.arc(0,0,1,nt,$,St),H.restore()}function X(H){var z=H.angle*(Math.PI/180),Tt=H.spread*(Math.PI/180);return{x:H.x,y:H.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:H.startVelocity*.5+Math.random()*H.startVelocity,angle2D:-z+(.5*Tt-Math.random()*Tt),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:H.color,shape:H.shape,tick:0,totalTicks:H.ticks,decay:H.decay,drift:H.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:H.gravity*3,ovalScalar:.6,scalar:H.scalar,flat:H.flat}}function ft(H,z){z.x+=Math.cos(z.angle2D)*z.velocity+z.drift,z.y+=Math.sin(z.angle2D)*z.velocity+z.gravity,z.velocity*=z.decay,z.flat?(z.wobble=0,z.wobbleX=z.x+10*z.scalar,z.wobbleY=z.y+10*z.scalar,z.tiltSin=0,z.tiltCos=0,z.random=1):(z.wobble+=z.wobbleSpeed,z.wobbleX=z.x+10*z.scalar*Math.cos(z.wobble),z.wobbleY=z.y+10*z.scalar*Math.sin(z.wobble),z.tiltAngle+=.1,z.tiltSin=Math.sin(z.tiltAngle),z.tiltCos=Math.cos(z.tiltAngle),z.random=Math.random()+2);var Tt=z.tick++/z.totalTicks,Nt=z.x+z.random*z.tiltCos,A=z.y+z.random*z.tiltSin,V=z.wobbleX+z.random*z.tiltCos,nt=z.wobbleY+z.random*z.tiltSin;if(H.fillStyle="rgba("+z.color.r+", "+z.color.g+", "+z.color.b+", "+(1-Tt)+")",H.beginPath(),h&&z.shape.type==="path"&&typeof z.shape.path=="string"&&Array.isArray(z.shape.matrix))H.fill(rt(z.shape.path,z.shape.matrix,z.x,z.y,Math.abs(V-Nt)*.1,Math.abs(nt-A)*.1,Math.PI/10*z.wobble));else if(z.shape.type==="bitmap"){var $=Math.PI/10*z.wobble,St=Math.abs(V-Nt)*.1,bt=Math.abs(nt-A)*.1,Dt=z.shape.bitmap.width*z.scalar,O=z.shape.bitmap.height*z.scalar,Mt=new DOMMatrix([Math.cos($)*St,Math.sin($)*St,-Math.sin($)*bt,Math.cos($)*bt,z.x,z.y]);Mt.multiplySelf(new DOMMatrix(z.shape.matrix));var kt=H.createPattern(g.transform(z.shape.bitmap),"no-repeat");kt.setTransform(Mt),H.globalAlpha=1-Tt,H.fillStyle=kt,H.fillRect(z.x-Dt/2,z.y-O/2,Dt,O),H.globalAlpha=1}else if(z.shape==="circle")H.ellipse?H.ellipse(z.x,z.y,Math.abs(V-Nt)*z.ovalScalar,Math.abs(nt-A)*z.ovalScalar,Math.PI/10*z.wobble,0,2*Math.PI):w(H,z.x,z.y,Math.abs(V-Nt)*z.ovalScalar,Math.abs(nt-A)*z.ovalScalar,Math.PI/10*z.wobble,0,2*Math.PI);else if(z.shape==="star")for(var jt=Math.PI/2*3,Gt=4*z.scalar,Jt=8*z.scalar,Vt=z.x,Lt=z.y,de=5,B=Math.PI/de;de--;)Vt=z.x+Math.cos(jt)*Jt,Lt=z.y+Math.sin(jt)*Jt,H.lineTo(Vt,Lt),jt+=B,Vt=z.x+Math.cos(jt)*Gt,Lt=z.y+Math.sin(jt)*Gt,H.lineTo(Vt,Lt),jt+=B;else H.moveTo(Math.floor(z.x),Math.floor(z.y)),H.lineTo(Math.floor(z.wobbleX),Math.floor(A)),H.lineTo(Math.floor(V),Math.floor(nt)),H.lineTo(Math.floor(Nt),Math.floor(z.wobbleY));return H.closePath(),H.fill(),z.tick<z.totalTicks}function ct(H,z,Tt,Nt,A){var V=z.slice(),nt=H.getContext("2d"),$,St,bt=v(function(Dt){function O(){$=St=null,nt.clearRect(0,0,Nt.width,Nt.height),g.clear(),A(),Dt()}function Mt(){r&&!(Nt.width===l.width&&Nt.height===l.height)&&(Nt.width=H.width=l.width,Nt.height=H.height=l.height),!Nt.width&&!Nt.height&&(Tt(H),Nt.width=H.width,Nt.height=H.height),nt.clearRect(0,0,Nt.width,Nt.height),V=V.filter(function(kt){return ft(nt,kt)}),V.length?$=m.frame(Mt):O()}$=m.frame(Mt),St=O});return{addFettis:function(Dt){return V=V.concat(Dt),bt},canvas:H,promise:bt,reset:function(){$&&m.cancel($),St&&St()}}}function _t(H,z){var Tt=!H,Nt=!!S(z||{},"resize"),A=!1,V=S(z,"disableForReducedMotion",Boolean),nt=c&&!!S(z||{},"useWorker"),$=nt?_():null,St=Tt?P:q,bt=H&&$?!!H.__confetti_initialized:!1,Dt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,O;function Mt(jt,Gt,Jt){for(var Vt=S(jt,"particleCount",x),Lt=S(jt,"angle",Number),de=S(jt,"spread",Number),B=S(jt,"startVelocity",Number),C=S(jt,"decay",Number),ut=S(jt,"gravity",Number),yt=S(jt,"drift",Number),xt=S(jt,"colors",N),Et=S(jt,"ticks",Number),Kt=S(jt,"shapes"),Ot=S(jt,"scalar"),Pt=!!S(jt,"flat"),ie=G(jt),Rt=Vt,qt=[],me=H.width*ie.x,ae=H.height*ie.y;Rt--;)qt.push(X({x:me,y:ae,angle:Lt,spread:de,startVelocity:B,color:xt[Rt%xt.length],shape:Kt[L(0,Kt.length)],ticks:Et,decay:C,gravity:ut,drift:yt,scalar:Ot,flat:Pt}));return O?O.addFettis(qt):(O=ct(H,qt,St,Gt,Jt),O.promise)}function kt(jt){var Gt=V||S(jt,"disableForReducedMotion",Boolean),Jt=S(jt,"zIndex",Number);if(Gt&&Dt)return v(function(B){B()});Tt&&O?H=O.canvas:Tt&&!H&&(H=U(Jt),document.body.appendChild(H)),Nt&&!bt&&St(H);var Vt={width:H.width,height:H.height};$&&!bt&&$.init(H),bt=!0,$&&(H.__confetti_initialized=!0);function Lt(){if($){var B={getBoundingClientRect:function(){if(!Tt)return H.getBoundingClientRect()}};St(B),$.postMessage({resize:{width:B.width,height:B.height}});return}Vt.width=Vt.height=null}function de(){O=null,Nt&&(A=!1,e.removeEventListener("resize",Lt)),Tt&&H&&(document.body.contains(H)&&document.body.removeChild(H),H=null,bt=!1)}return Nt&&!A&&(A=!0,e.addEventListener("resize",Lt,!1)),$?$.fire(jt,Vt,de):Mt(jt,Vt,de)}return kt.reset=function(){$&&$.reset(),O&&O.reset()},kt}var ht;function Z(){return ht||(ht=_t(null,{useWorker:!0,resize:!0})),ht}function rt(H,z,Tt,Nt,A,V,nt){var $=new Path2D(H),St=new Path2D;St.addPath($,new DOMMatrix(z));var bt=new Path2D;return bt.addPath(St,new DOMMatrix([Math.cos(nt)*A,Math.sin(nt)*A,-Math.sin(nt)*V,Math.cos(nt)*V,Tt,Nt])),bt}function tt(H){if(!h)throw new Error("path confetti are not supported in this browser");var z,Tt;typeof H=="string"?z=H:(z=H.path,Tt=H.matrix);var Nt=new Path2D(z),A=document.createElement("canvas"),V=A.getContext("2d");if(!Tt){for(var nt=1e3,$=nt,St=nt,bt=0,Dt=0,O,Mt,kt=0;kt<nt;kt+=2)for(var jt=0;jt<nt;jt+=2)V.isPointInPath(Nt,kt,jt,"nonzero")&&($=Math.min($,kt),St=Math.min(St,jt),bt=Math.max(bt,kt),Dt=Math.max(Dt,jt));O=bt-$,Mt=Dt-St;var Gt=10,Jt=Math.min(Gt/O,Gt/Mt);Tt=[Jt,0,0,Jt,-Math.round(O/2+$)*Jt,-Math.round(Mt/2+St)*Jt]}return{type:"path",path:z,matrix:Tt}}function At(H){var z,Tt=1,Nt="#000000",A='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof H=="string"?z=H:(z=H.text,Tt="scalar"in H?H.scalar:Tt,A="fontFamily"in H?H.fontFamily:A,Nt="color"in H?H.color:Nt);var V=10*Tt,nt=""+V+"px "+A,$=new OffscreenCanvas(V,V),St=$.getContext("2d");St.font=nt;var bt=St.measureText(z),Dt=Math.ceil(bt.actualBoundingBoxRight+bt.actualBoundingBoxLeft),O=Math.ceil(bt.actualBoundingBoxAscent+bt.actualBoundingBoxDescent),Mt=2,kt=bt.actualBoundingBoxLeft+Mt,jt=bt.actualBoundingBoxAscent+Mt;Dt+=Mt+Mt,O+=Mt+Mt,$=new OffscreenCanvas(Dt,O),St=$.getContext("2d"),St.font=nt,St.fillStyle=Nt,St.fillText(z,kt,jt);var Gt=1/Tt;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[Gt,0,0,Gt,-Dt*Gt/2,-O*Gt/2]}}i.exports=function(){return Z().apply(this,arguments)},i.exports.reset=function(){Z().reset()},i.exports.create=_t,i.exports.shapeFromPath=tt,i.exports.shapeFromText=At})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Op,!1);const Dd=Op.exports;Op.exports.create;const RE=`
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`,wE=`
                uniform float u_time;
                uniform vec2 u_resolution;
                uniform float u_interactive_fidelity;
                varying vec2 vUv;

                mat2 rotate2d(float _angle){
                    return mat2(cos(_angle),-sin(_angle),
                                sin(_angle),cos(_angle));
                }

                void main() {
                    vec2 p = vUv * 2.0 - 1.0;
                    p.x *= u_resolution.x / u_resolution.y;
                    p = rotate2d(0.55) * p;

                    vec3 color = vec3(0.0);
                    float spread = 0.06 * (0.3 + u_interactive_fidelity * 0.7);

                    for(int i = 0; i < 3; i++) {
                        float offset = float(1 - i) * spread;
                        float y = p.y + offset + (sin(p.x * 2.5 - u_time * 1.5) * 0.12);
                        float wave = smoothstep(0.85, 0.99, sin(y * 6.0 + u_time * 2.0) * 0.5 + 0.5);
                        
                        // Modulating color mixing logic for the violet-indigo theme
                        if(i == 0) color.r += wave * 1.2; 
                        if(i == 1) color.g += wave * 0.5; 
                        if(i == 2) color.b += wave * 1.8; 
                    }

                    float vignette = exp(-length(vUv * 2.0 - 1.0) * 0.8);
                    color *= vignette;

                    gl_FragColor = vec4(color, 1.0);
                }
            `,o_={speed:1,fidelity:.5,scale:1,brightness:1,opacity:1,hue:0,saturation:1};function l_(s,e,i){const r=s.createShader(e);if(!r)throw new Error("Unable to create Stream Convergence shader");if(s.shaderSource(r,i),s.compileShader(r),!s.getShaderParameter(r,s.COMPILE_STATUS))throw new Error(s.getShaderInfoLog(r)??"Stream Convergence shader compilation failed");return r}function DE({className:s="",...e}){const i=Ve.useRef(null),r=Ve.useRef(null),l=Ve.useRef({...o_,...e});l.current={...o_,...e},Ve.useEffect(()=>{const h=i.current,d=r.current;if(!h||!d)return;const p=d.getContext("webgl",{alpha:!0,antialias:!1});if(!p)return;const v=l_(p,p.VERTEX_SHADER,RE),g=l_(p,p.FRAGMENT_SHADER,`precision highp float;
${wE}`),m=p.createProgram();if(!m)return;if(p.attachShader(m,v),p.attachShader(m,g),p.linkProgram(m),!p.getProgramParameter(m,p.LINK_STATUS))throw new Error(p.getProgramInfoLog(m)??"Stream Convergence program link failed");p.useProgram(m);const _=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,_),p.bufferData(p.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),p.STATIC_DRAW);const M=p.getAttribLocation(m,"position");p.enableVertexAttribArray(M),p.vertexAttribPointer(M,2,p.FLOAT,!1,0,0);const E=p.getUniformLocation(m,"u_time"),T=p.getUniformLocation(m,"u_resolution"),S=p.getUniformLocation(m,"u_interactive_fidelity");let x=0,L=!0;const R=()=>{const P=h.getBoundingClientRect(),q=Math.min(window.devicePixelRatio||1,2);d.width=Math.max(1,Math.round(P.width*q)),d.height=Math.max(1,Math.round(P.height*q)),p.viewport(0,0,d.width,d.height),p.uniform2f(T,d.width,d.height)},N=P=>{const q=l.current;p.uniform1f(E,P*3e-4*q.speed),p.uniform1f(S,q.fidelity),p.drawArrays(p.TRIANGLES,0,6),x=L&&!document.hidden?requestAnimationFrame(N):0},Y=new ResizeObserver(R),G=new IntersectionObserver(([P])=>{L=(P==null?void 0:P.isIntersecting)??!0,L&&!x&&(x=requestAnimationFrame(N)),!L&&x&&(cancelAnimationFrame(x),x=0)});return Y.observe(h),G.observe(h),R(),x=requestAnimationFrame(N),()=>{x&&cancelAnimationFrame(x),Y.disconnect(),G.disconnect(),p.deleteBuffer(_),p.deleteShader(v),p.deleteShader(g),p.deleteProgram(m)}},[]);const c=l.current;return wt.jsx("div",{ref:i,className:`threeui-background stream-convergence${s?` ${s}`:""}`,children:wt.jsx("canvas",{ref:r,style:{opacity:c.opacity,filter:`hue-rotate(${c.hue}deg) saturate(${c.saturation}) brightness(${c.brightness})`,transform:`scale(${c.scale})`}})})}const gl={variant:"play",mode:"dark",hue:0,saturation:1,brightness:1},NE={play:"Play",plus:"Add",mail:"Send mail"};function Nd(s,e,i){return Math.min(i,Math.max(e,s))}function UE({variant:s}){return s==="play"?wt.jsx("svg",{viewBox:"0 0 32 32","aria-hidden":"true",children:wt.jsx("path",{d:"M11.75 8.7c0-1.28 1.4-2.08 2.5-1.43l12 7.3a1.66 1.66 0 0 1 0 2.86l-12 7.3a1.66 1.66 0 0 1-2.5-1.43V8.7Z"})}):s==="plus"?wt.jsx("svg",{viewBox:"0 0 32 32","aria-hidden":"true",children:wt.jsx("path",{d:"M16 7v18M7 16h18"})}):wt.jsxs("svg",{viewBox:"0 0 32 32","aria-hidden":"true",children:[wt.jsx("rect",{x:"5.25",y:"7.5",width:"21.5",height:"17",rx:"3.25"}),wt.jsx("path",{d:"m7.25 10 7.35 5.72a2.26 2.26 0 0 0 2.8 0L24.75 10"})]})}function u_({variant:s=gl.variant,mode:e=gl.mode,hue:i=gl.hue,saturation:r=gl.saturation,brightness:l=gl.brightness,ariaLabel:c,disabled:h=!1,type:d="button",onClick:p,className:v,style:g}){const m=s==="plus"||s==="mail"?s:"play",_=e==="light"?"light":"dark",M={"--circle-button-hue":`${Nd(i,-180,180)}deg`,"--circle-button-saturation":Nd(r,0,2),"--circle-button-brightness":Nd(l,.35,1.65),...g};return wt.jsxs("div",{className:`circle-buttons circle-buttons--${m} circle-buttons--${_}${v?` ${v}`:""}`,"data-mode":_,"data-variant":m,style:M,children:[wt.jsx("div",{className:"circle-buttons__atmosphere","aria-hidden":"true"}),wt.jsxs("button",{className:"circle-button",type:d,"aria-label":c??NE[m],disabled:h,onClick:p,children:[wt.jsx("span",{className:"circle-button__aura","aria-hidden":"true"}),wt.jsx("span",{className:"circle-button__rim","aria-hidden":"true"}),wt.jsx("span",{className:"circle-button__face","aria-hidden":"true"}),wt.jsxs("span",{className:"circle-button__details","aria-hidden":"true",children:[wt.jsx("i",{}),wt.jsx("i",{}),wt.jsx("i",{}),wt.jsx("i",{}),wt.jsx("b",{}),wt.jsx("b",{}),wt.jsx("b",{}),wt.jsx("b",{})]}),wt.jsx("span",{className:"circle-button__icon",children:wt.jsx(UE,{variant:m})})]})]})}const Ir={variant:"primary",mode:"dark",label:"Get your card",ring:!0,hue:0,saturation:1,brightness:1};function Ud(s,e,i){return Math.min(i,Math.max(e,s))}function c_({variant:s=Ir.variant,mode:e=Ir.mode,label:i=Ir.label,ring:r=Ir.ring,hue:l=Ir.hue,saturation:c=Ir.saturation,brightness:h=Ir.brightness,disabled:d=!1,type:p="button",onClick:v,className:g="",style:m}){const _=s==="ghost"?"ghost":"primary";return wt.jsx("div",{className:`lumen-cta lumen-cta--${e==="light"?"light":"dark"}${g?` ${g}`:""}`,"data-variant":_,style:{"--lumen-cta-hue":`${Ud(l,-180,180)}deg`,"--lumen-cta-saturation":Ud(c,0,2),"--lumen-cta-brightness":Ud(h,.35,1.65),...m},children:wt.jsxs("button",{className:`lumen-cta__button${_==="ghost"?" lumen-cta__button--ghost":""}`,type:p,disabled:d,onClick:v,children:[i,r?wt.jsx("i",{className:"lumen-cta__ring","aria-hidden":"true"}):null]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="165",LE=0,f_=1,OE=2,Ky=1,PE=2,Ta=3,hr=0,Wn=1,ri=2,cr=0,co=1,_p=2,h_=3,d_=4,zE=5,Wr=100,BE=101,IE=102,FE=103,HE=104,GE=200,VE=201,XE=202,kE=203,yp=204,Sp=205,qE=206,YE=207,WE=208,jE=209,ZE=210,KE=211,QE=212,JE=213,$E=214,t1=0,e1=1,n1=2,Ic=3,i1=4,a1=5,r1=6,s1=7,Qy=0,o1=1,l1=2,fr=0,u1=1,c1=2,f1=3,h1=4,d1=5,p1=6,m1=7,Jy=300,mo=301,go=302,xp=303,Mp=304,Wc=306,Ep=1e3,Kr=1001,Tp=1002,Ei=1003,g1=1004,ic=1005,zi=1006,Ld=1007,Qr=1008,dr=1009,v1=1010,_1=1011,Fc=1012,$y=1013,vo=1014,or=1015,jc=1016,tS=1017,eS=1018,_o=1020,y1=35902,S1=1021,x1=1022,$i=1023,M1=1024,E1=1025,fo=1026,yo=1027,T1=1028,nS=1029,b1=1030,iS=1031,aS=1033,Od=33776,Pd=33777,zd=33778,Bd=33779,p_=35840,m_=35841,g_=35842,v_=35843,__=36196,y_=37492,S_=37496,x_=37808,M_=37809,E_=37810,T_=37811,b_=37812,A_=37813,C_=37814,R_=37815,w_=37816,D_=37817,N_=37818,U_=37819,L_=37820,O_=37821,Id=36492,P_=36494,z_=36495,A1=36283,B_=36284,I_=36285,F_=36286,C1=3200,R1=3201,w1=0,D1=1,sr="",Mi="srgb",mr="srgb-linear",zp="display-p3",Zc="display-p3-linear",Hc="linear",Ke="srgb",Gc="rec709",Vc="p3",ks=7680,H_=519,N1=512,U1=513,L1=514,rS=515,O1=516,P1=517,z1=518,B1=519,G_=35044,V_="300 es",ba=2e3,Xc=2001;class xo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X_=1234567;const ho=Math.PI/180,wl=180/Math.PI;function es(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Cn(s,e,i){return Math.max(e,Math.min(i,s))}function Bp(s,e){return(s%e+e)%e}function I1(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function F1(s,e,i){return s!==e?(i-s)/(e-s):0}function bl(s,e,i){return(1-i)*s+i*e}function H1(s,e,i,r){return bl(s,e,1-Math.exp(-i*r))}function G1(s,e=1){return e-Math.abs(Bp(s,e*2)-e)}function V1(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function X1(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function k1(s,e){return s+Math.floor(Math.random()*(e-s+1))}function q1(s,e){return s+Math.random()*(e-s)}function Y1(s){return s*(.5-Math.random())}function W1(s){s!==void 0&&(X_=s);let e=X_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j1(s){return s*ho}function Z1(s){return s*wl}function K1(s){return(s&s-1)===0&&s!==0}function Q1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function J1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $1(s,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),v=c((e+r)/2),g=h((e+r)/2),m=c((e-r)/2),_=h((e-r)/2),M=c((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":s.set(d*g,p*m,p*_,d*v);break;case"YZY":s.set(p*_,d*g,p*m,d*v);break;case"ZXZ":s.set(p*m,p*_,d*g,d*v);break;case"XZX":s.set(d*g,p*E,p*M,d*v);break;case"YXY":s.set(p*M,d*g,p*E,d*v);break;case"ZYZ":s.set(p*E,p*M,d*g,d*v);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Si={DEG2RAD:ho,RAD2DEG:wl,generateUUID:es,clamp:Cn,euclideanModulo:Bp,mapLinear:I1,inverseLerp:F1,lerp:bl,damp:H1,pingpong:G1,smoothstep:V1,smootherstep:X1,randInt:k1,randFloat:q1,randFloatSpread:Y1,seededRandom:W1,degToRad:j1,radToDeg:Z1,isPowerOfTwo:K1,ceilPowerOfTwo:Q1,floorPowerOfTwo:J1,setQuaternionFromProperEuler:$1,normalize:Bn,denormalize:oo};class te{constructor(e=0,i=0){te.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Me{constructor(e,i,r,l,c,h,d,p,v){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,v)}set(e,i,r,l,c,h,d,p,v){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=h,g[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],v=r[1],g=r[4],m=r[7],_=r[2],M=r[5],E=r[8],T=l[0],S=l[3],x=l[6],L=l[1],R=l[4],N=l[7],Y=l[2],G=l[5],P=l[8];return c[0]=h*T+d*L+p*Y,c[3]=h*S+d*R+p*G,c[6]=h*x+d*N+p*P,c[1]=v*T+g*L+m*Y,c[4]=v*S+g*R+m*G,c[7]=v*x+g*N+m*P,c[2]=_*T+M*L+E*Y,c[5]=_*S+M*R+E*G,c[8]=_*x+M*N+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],v=e[7],g=e[8];return i*h*g-i*d*v-r*c*g+r*d*p+l*c*v-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],v=e[7],g=e[8],m=g*h-d*v,_=d*p-g*c,M=v*c-h*p,E=i*m+r*_+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=m*T,e[1]=(l*v-g*r)*T,e[2]=(d*r-l*h)*T,e[3]=_*T,e[4]=(g*i-l*p)*T,e[5]=(l*c-d*i)*T,e[6]=M*T,e[7]=(r*p-v*i)*T,e[8]=(h*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),v=Math.sin(c);return this.set(r*p,r*v,-r*(p*h+v*d)+h+e,-l*v,l*p,-l*(-v*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Fd.makeScale(e,i)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fd=new Me;function sS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function kc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tT(){const s=kc("canvas");return s.style.display="block",s}const k_={};function oS(s){s in k_||(k_[s]=!0,console.warn(s))}function eT(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const q_=new Me().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Y_=new Me().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ac={[mr]:{transfer:Hc,primaries:Gc,toReference:s=>s,fromReference:s=>s},[Mi]:{transfer:Ke,primaries:Gc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zc]:{transfer:Hc,primaries:Vc,toReference:s=>s.applyMatrix3(Y_),fromReference:s=>s.applyMatrix3(q_)},[zp]:{transfer:Ke,primaries:Vc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Y_),fromReference:s=>s.applyMatrix3(q_).convertLinearToSRGB()}},nT=new Set([mr,Zc]),Xe={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!nT.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,i){if(this.enabled===!1||e===i||!e||!i)return s;const r=ac[e].toReference,l=ac[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ac[s].primaries},getTransfer:function(s){return s===sr?Hc:ac[s].transfer}};function po(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hd(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qs;class iT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qs===void 0&&(qs=kc("canvas")),qs.width=e.width,qs.height=e.height;const r=qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=kc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=po(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(po(i[r]/255)*255):i[r]=po(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aT=0;class lS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Gd(l[h].image)):c.push(Gd(l[h]))}else c=Gd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Gd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rT=0;class Fn extends xo{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=Kr,l=Kr,c=zi,h=Qr,d=$i,p=dr,v=Fn.DEFAULT_ANISOTROPY,g=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=es(),this.name="",this.source=new lS(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=v,this.format=d,this.internalFormat=null,this.type=p,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ep:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ep:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Jy;Fn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,v=p[0],g=p[4],m=p[8],_=p[1],M=p[5],E=p[9],T=p[2],S=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(m-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(m+T)<.1&&Math.abs(E+S)<.1&&Math.abs(v+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(v+1)/2,N=(M+1)/2,Y=(x+1)/2,G=(g+_)/4,P=(m+T)/4,q=(E+S)/4;return R>N&&R>Y?R<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(R),l=G/r,c=P/r):N>Y?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=G/l,c=q/l):Y<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(Y),r=P/c,l=q/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-E)*(S-E)+(m-T)*(m-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(m-T)/L,this.z=(_-g)/L,this.w=Math.acos((v+M+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sT extends xo{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Je(0,0,e,i),this.scissorTest=!1,this.viewport=new Je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new lS(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends sT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class uS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oT extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],v=r[l+1],g=r[l+2],m=r[l+3];const _=c[h+0],M=c[h+1],E=c[h+2],T=c[h+3];if(d===0){e[i+0]=p,e[i+1]=v,e[i+2]=g,e[i+3]=m;return}if(d===1){e[i+0]=_,e[i+1]=M,e[i+2]=E,e[i+3]=T;return}if(m!==T||p!==_||v!==M||g!==E){let S=1-d;const x=p*_+v*M+g*E+m*T,L=x>=0?1:-1,R=1-x*x;if(R>Number.EPSILON){const Y=Math.sqrt(R),G=Math.atan2(Y,x*L);S=Math.sin(S*G)/Y,d=Math.sin(d*G)/Y}const N=d*L;if(p=p*S+_*N,v=v*S+M*N,g=g*S+E*N,m=m*S+T*N,S===1-d){const Y=1/Math.sqrt(p*p+v*v+g*g+m*m);p*=Y,v*=Y,g*=Y,m*=Y}}e[i]=p,e[i+1]=v,e[i+2]=g,e[i+3]=m}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],v=r[l+2],g=r[l+3],m=c[h],_=c[h+1],M=c[h+2],E=c[h+3];return e[i]=d*E+g*m+p*M-v*_,e[i+1]=p*E+g*_+v*m-d*M,e[i+2]=v*E+g*M+d*_-p*m,e[i+3]=g*E-d*m-p*_-v*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,v=d(r/2),g=d(l/2),m=d(c/2),_=p(r/2),M=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=_*g*m+v*M*E,this._y=v*M*m-_*g*E,this._z=v*g*E+_*M*m,this._w=v*g*m-_*M*E;break;case"YXZ":this._x=_*g*m+v*M*E,this._y=v*M*m-_*g*E,this._z=v*g*E-_*M*m,this._w=v*g*m+_*M*E;break;case"ZXY":this._x=_*g*m-v*M*E,this._y=v*M*m+_*g*E,this._z=v*g*E+_*M*m,this._w=v*g*m-_*M*E;break;case"ZYX":this._x=_*g*m-v*M*E,this._y=v*M*m+_*g*E,this._z=v*g*E-_*M*m,this._w=v*g*m+_*M*E;break;case"YZX":this._x=_*g*m+v*M*E,this._y=v*M*m+_*g*E,this._z=v*g*E-_*M*m,this._w=v*g*m-_*M*E;break;case"XZY":this._x=_*g*m-v*M*E,this._y=v*M*m-_*g*E,this._z=v*g*E+_*M*m,this._w=v*g*m+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],v=i[2],g=i[6],m=i[10],_=r+d+m;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-v)*M,this._z=(h-l)*M}else if(r>d&&r>m){const M=2*Math.sqrt(1+r-d-m);this._w=(g-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+v)/M}else if(d>m){const M=2*Math.sqrt(1+d-r-m);this._w=(c-v)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+m-r-d);this._w=(h-l)/M,this._x=(c+v)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,v=i._z,g=i._w;return this._x=r*g+h*d+l*v-c*p,this._y=l*g+h*p+c*d-r*v,this._z=c*g+h*v+r*p-l*d,this._w=h*g-r*d-l*p-c*v,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const v=Math.sqrt(p),g=Math.atan2(v,d),m=Math.sin((1-i)*g)/v,_=Math.sin(i*g)/v;return this._w=h*m+this._w*_,this._x=r*m+this._x*_,this._y=l*m+this._y*_,this._z=c*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,i=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(W_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(W_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,v=2*(h*l-d*r),g=2*(d*i-c*l),m=2*(c*r-h*i);return this.x=i+p*v+h*m-d*g,this.y=r+p*g+d*v-c*m,this.z=l+p*m+c*g-h*v,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Cn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vd=new W,W_=new Ll;class Ol{constructor(e=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ui):Ui.fromBufferAttribute(c,h),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),rc.copy(r.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),sc.subVectors(this.max,vl),Ys.subVectors(e.a,vl),Ws.subVectors(e.b,vl),js.subVectors(e.c,vl),tr.subVectors(Ws,Ys),er.subVectors(js,Ws),Fr.subVectors(Ys,js);let i=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Fr.z,Fr.y,tr.z,0,-tr.x,er.z,0,-er.x,Fr.z,0,-Fr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Fr.y,Fr.x,0];return!Xd(i,Ys,Ws,js,sc)||(i=[1,0,0,0,1,0,0,0,1],!Xd(i,Ys,Ws,js,sc))?!1:(oc.crossVectors(tr,er),i=[oc.x,oc.y,oc.z],Xd(i,Ys,Ws,js,sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ya=[new W,new W,new W,new W,new W,new W,new W,new W],Ui=new W,rc=new Ol,Ys=new W,Ws=new W,js=new W,tr=new W,er=new W,Fr=new W,vl=new W,sc=new W,oc=new W,Hr=new W;function Xd(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Hr.fromArray(s,c);const d=l.x*Math.abs(Hr.x)+l.y*Math.abs(Hr.y)+l.z*Math.abs(Hr.z),p=e.dot(Hr),v=i.dot(Hr),g=r.dot(Hr);if(Math.max(-Math.max(p,v,g),Math.min(p,v,g))>d)return!1}return!0}const lT=new Ol,_l=new W,kd=new W;class Pl{constructor(e=new W,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lT.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_l.subVectors(e,this.center);const i=_l.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(_l,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_l.copy(e.center).add(kd)),this.expandByPoint(_l.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sa=new W,qd=new W,lc=new W,nr=new W,Yd=new W,uc=new W,Wd=new W;class Kc{constructor(e=new W,i=new W(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){qd.copy(e).add(i).multiplyScalar(.5),lc.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(qd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(lc),d=nr.dot(this.direction),p=-nr.dot(lc),v=nr.lengthSq(),g=Math.abs(1-h*h);let m,_,M,E;if(g>0)if(m=h*p-d,_=h*d-p,E=c*g,m>=0)if(_>=-E)if(_<=E){const T=1/g;m*=T,_*=T,M=m*(m+h*_+2*d)+_*(h*m+_+2*p)+v}else _=c,m=Math.max(0,-(h*_+d)),M=-m*m+_*(_+2*p)+v;else _=-c,m=Math.max(0,-(h*_+d)),M=-m*m+_*(_+2*p)+v;else _<=-E?(m=Math.max(0,-(-h*c+d)),_=m>0?-c:Math.min(Math.max(-c,-p),c),M=-m*m+_*(_+2*p)+v):_<=E?(m=0,_=Math.min(Math.max(-c,-p),c),M=_*(_+2*p)+v):(m=Math.max(0,-(h*c+d)),_=m>0?c:Math.min(Math.max(-c,-p),c),M=-m*m+_*(_+2*p)+v);else _=h>0?-c:c,m=Math.max(0,-(h*_+d)),M=-m*m+_*(_+2*p)+v;return r&&r.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(qd).addScaledVector(lc,_),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const v=1/this.direction.x,g=1/this.direction.y,m=1/this.direction.z,_=this.origin;return v>=0?(r=(e.min.x-_.x)*v,l=(e.max.x-_.x)*v):(r=(e.max.x-_.x)*v,l=(e.min.x-_.x)*v),g>=0?(c=(e.min.y-_.y)*g,h=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,h=(e.min.y-_.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-_.z)*m,p=(e.max.z-_.z)*m):(d=(e.max.z-_.z)*m,p=(e.min.z-_.z)*m),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,c){Yd.subVectors(i,e),uc.subVectors(r,e),Wd.crossVectors(Yd,uc);let h=this.direction.dot(Wd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;nr.subVectors(this.origin,e);const p=d*this.direction.dot(uc.crossVectors(nr,uc));if(p<0)return null;const v=d*this.direction.dot(Yd.cross(nr));if(v<0||p+v>h)return null;const g=-d*nr.dot(Wd);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,r,l,c,h,d,p,v,g,m,_,M,E,T,S){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,v,g,m,_,M,E,T,S)}set(e,i,r,l,c,h,d,p,v,g,m,_,M,E,T,S){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=p,x[2]=v,x[6]=g,x[10]=m,x[14]=_,x[3]=M,x[7]=E,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Zs.setFromMatrixColumn(e,0).length(),c=1/Zs.setFromMatrixColumn(e,1).length(),h=1/Zs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),v=Math.sin(l),g=Math.cos(c),m=Math.sin(c);if(e.order==="XYZ"){const _=h*g,M=h*m,E=d*g,T=d*m;i[0]=p*g,i[4]=-p*m,i[8]=v,i[1]=M+E*v,i[5]=_-T*v,i[9]=-d*p,i[2]=T-_*v,i[6]=E+M*v,i[10]=h*p}else if(e.order==="YXZ"){const _=p*g,M=p*m,E=v*g,T=v*m;i[0]=_+T*d,i[4]=E*d-M,i[8]=h*v,i[1]=h*m,i[5]=h*g,i[9]=-d,i[2]=M*d-E,i[6]=T+_*d,i[10]=h*p}else if(e.order==="ZXY"){const _=p*g,M=p*m,E=v*g,T=v*m;i[0]=_-T*d,i[4]=-h*m,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*g,i[9]=T-_*d,i[2]=-h*v,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const _=h*g,M=h*m,E=d*g,T=d*m;i[0]=p*g,i[4]=E*v-M,i[8]=_*v+T,i[1]=p*m,i[5]=T*v+_,i[9]=M*v-E,i[2]=-v,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const _=h*p,M=h*v,E=d*p,T=d*v;i[0]=p*g,i[4]=T-_*m,i[8]=E*m+M,i[1]=m,i[5]=h*g,i[9]=-d*g,i[2]=-v*g,i[6]=M*m+E,i[10]=_-T*m}else if(e.order==="XZY"){const _=h*p,M=h*v,E=d*p,T=d*v;i[0]=p*g,i[4]=-m,i[8]=v*g,i[1]=_*m+T,i[5]=h*g,i[9]=M*m-E,i[2]=E*m-M,i[6]=d*g,i[10]=T*m+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uT,e,cT)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ir.crossVectors(r,ni),ir.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ir.crossVectors(r,ni)),ir.normalize(),cc.crossVectors(ni,ir),l[0]=ir.x,l[4]=cc.x,l[8]=ni.x,l[1]=ir.y,l[5]=cc.y,l[9]=ni.y,l[2]=ir.z,l[6]=cc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],v=r[12],g=r[1],m=r[5],_=r[9],M=r[13],E=r[2],T=r[6],S=r[10],x=r[14],L=r[3],R=r[7],N=r[11],Y=r[15],G=l[0],P=l[4],q=l[8],U=l[12],w=l[1],X=l[5],ft=l[9],ct=l[13],_t=l[2],ht=l[6],Z=l[10],rt=l[14],tt=l[3],At=l[7],H=l[11],z=l[15];return c[0]=h*G+d*w+p*_t+v*tt,c[4]=h*P+d*X+p*ht+v*At,c[8]=h*q+d*ft+p*Z+v*H,c[12]=h*U+d*ct+p*rt+v*z,c[1]=g*G+m*w+_*_t+M*tt,c[5]=g*P+m*X+_*ht+M*At,c[9]=g*q+m*ft+_*Z+M*H,c[13]=g*U+m*ct+_*rt+M*z,c[2]=E*G+T*w+S*_t+x*tt,c[6]=E*P+T*X+S*ht+x*At,c[10]=E*q+T*ft+S*Z+x*H,c[14]=E*U+T*ct+S*rt+x*z,c[3]=L*G+R*w+N*_t+Y*tt,c[7]=L*P+R*X+N*ht+Y*At,c[11]=L*q+R*ft+N*Z+Y*H,c[15]=L*U+R*ct+N*rt+Y*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],v=e[13],g=e[2],m=e[6],_=e[10],M=e[14],E=e[3],T=e[7],S=e[11],x=e[15];return E*(+c*p*m-l*v*m-c*d*_+r*v*_+l*d*M-r*p*M)+T*(+i*p*M-i*v*_+c*h*_-l*h*M+l*v*g-c*p*g)+S*(+i*v*m-i*d*M-c*h*m+r*h*M+c*d*g-r*v*g)+x*(-l*d*g-i*p*m+i*d*_+l*h*m-r*h*_+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],v=e[7],g=e[8],m=e[9],_=e[10],M=e[11],E=e[12],T=e[13],S=e[14],x=e[15],L=m*S*v-T*_*v+T*p*M-d*S*M-m*p*x+d*_*x,R=E*_*v-g*S*v-E*p*M+h*S*M+g*p*x-h*_*x,N=g*T*v-E*m*v+E*d*M-h*T*M-g*d*x+h*m*x,Y=E*m*p-g*T*p-E*d*_+h*T*_+g*d*S-h*m*S,G=i*L+r*R+l*N+c*Y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/G;return e[0]=L*P,e[1]=(T*_*c-m*S*c-T*l*M+r*S*M+m*l*x-r*_*x)*P,e[2]=(d*S*c-T*p*c+T*l*v-r*S*v-d*l*x+r*p*x)*P,e[3]=(m*p*c-d*_*c-m*l*v+r*_*v+d*l*M-r*p*M)*P,e[4]=R*P,e[5]=(g*S*c-E*_*c+E*l*M-i*S*M-g*l*x+i*_*x)*P,e[6]=(E*p*c-h*S*c-E*l*v+i*S*v+h*l*x-i*p*x)*P,e[7]=(h*_*c-g*p*c+g*l*v-i*_*v-h*l*M+i*p*M)*P,e[8]=N*P,e[9]=(E*m*c-g*T*c-E*r*M+i*T*M+g*r*x-i*m*x)*P,e[10]=(h*T*c-E*d*c+E*r*v-i*T*v-h*r*x+i*d*x)*P,e[11]=(g*d*c-h*m*c-g*r*v+i*m*v+h*r*M-i*d*M)*P,e[12]=Y*P,e[13]=(g*T*l-E*m*l+E*r*_-i*T*_-g*r*S+i*m*S)*P,e[14]=(E*d*l-h*T*l-E*r*p+i*T*p+h*r*S-i*d*S)*P,e[15]=(h*m*l-g*d*l+g*r*p-i*m*p-h*r*_+i*d*_)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,v=c*h,g=c*d;return this.set(v*h+r,v*d-l*p,v*p+l*d,0,v*d+l*p,g*d+r,g*p-l*h,0,v*p-l*d,g*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,v=c+c,g=h+h,m=d+d,_=c*v,M=c*g,E=c*m,T=h*g,S=h*m,x=d*m,L=p*v,R=p*g,N=p*m,Y=r.x,G=r.y,P=r.z;return l[0]=(1-(T+x))*Y,l[1]=(M+N)*Y,l[2]=(E-R)*Y,l[3]=0,l[4]=(M-N)*G,l[5]=(1-(_+x))*G,l[6]=(S+L)*G,l[7]=0,l[8]=(E+R)*P,l[9]=(S-L)*P,l[10]=(1-(_+T))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Zs.set(l[0],l[1],l[2]).length();const h=Zs.set(l[4],l[5],l[6]).length(),d=Zs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Li.copy(this);const v=1/c,g=1/h,m=1/d;return Li.elements[0]*=v,Li.elements[1]*=v,Li.elements[2]*=v,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=m,Li.elements[9]*=m,Li.elements[10]*=m,i.setFromRotationMatrix(Li),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ba){const p=this.elements,v=2*c/(i-e),g=2*c/(r-l),m=(i+e)/(i-e),_=(r+l)/(r-l);let M,E;if(d===ba)M=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===Xc)M=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=g,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ba){const p=this.elements,v=1/(i-e),g=1/(r-l),m=1/(h-c),_=(i+e)*v,M=(r+l)*g;let E,T;if(d===ba)E=(h+c)*m,T=-2*m;else if(d===Xc)E=c*m,T=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*v,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Zs=new W,Li=new je,uT=new W(0,0,0),cT=new W(1,1,1),ir=new W,cc=new W,ni=new W,j_=new je,Z_=new Ll;class Aa{constructor(e=0,i=0,r=0,l=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],v=l[5],g=l[9],m=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,v)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,v)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Cn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,v));break;case"YZX":this._z=Math.asin(Cn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,v),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,v),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return j_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Z_.setFromEuler(this),this.setFromQuaternion(Z_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fT=0;const K_=new W,Ks=new Ll,xa=new je,fc=new W,yl=new W,hT=new W,dT=new Ll,Q_=new W(1,0,0),J_=new W(0,1,0),$_=new W(0,0,1),ty={type:"added"},pT={type:"removed"},Qs={type:"childadded",child:null},jd={type:"childremoved",child:null};class Nn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new W,i=new Aa,r=new Ll,l=new W(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new Me}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,i){return Ks.setFromAxisAngle(e,i),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Q_,e)}rotateY(e){return this.rotateOnAxis(J_,e)}rotateZ(e){return this.rotateOnAxis($_,e)}translateOnAxis(e,i){return K_.copy(e).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Q_,e)}translateY(e){return this.translateOnAxis(J_,e)}translateZ(e){return this.translateOnAxis($_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?fc.copy(e):fc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(yl,fc,this.up):xa.lookAt(fc,yl,this.up),this.quaternion.setFromRotationMatrix(xa),l&&(xa.extractRotation(l.matrixWorld),Ks.setFromRotationMatrix(xa),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ty),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(pT),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ty),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,hT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,dT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const c=i[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++){const d=l[c];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let v=0,g=p.length;v<g;v++){const m=p[v];c(e.shapes,m)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,v=this.material.length;p<v;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),v=h(e.textures),g=h(e.images),m=h(e.shapes),_=h(e.skeletons),M=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),v.length>0&&(r.textures=v),g.length>0&&(r.images=g),m.length>0&&(r.shapes=m),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const v in d){const g=d[v];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new W(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new W,Ma=new W,Zd=new W,Ea=new W,Js=new W,$s=new W,ey=new W,Kd=new W,Qd=new W,Jd=new W;class Bi{constructor(e=new W,i=new W,r=new W){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Oi.subVectors(e,i),l.cross(Oi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Oi.subVectors(l,i),Ma.subVectors(r,i),Zd.subVectors(e,i);const h=Oi.dot(Oi),d=Oi.dot(Ma),p=Oi.dot(Zd),v=Ma.dot(Ma),g=Ma.dot(Zd),m=h*v-d*d;if(m===0)return c.set(0,0,0),null;const _=1/m,M=(v*p-d*g)*_,E=(h*g-d*p)*_;return c.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Ea)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ea.x),p.addScaledVector(h,Ea.y),p.addScaledVector(d,Ea.z),p)}static isFrontFacing(e,i,r,l){return Oi.subVectors(r,i),Ma.subVectors(e,i),Oi.cross(Ma).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ma.subVectors(this.a,this.b),Oi.cross(Ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Js.subVectors(l,r),$s.subVectors(c,r),Kd.subVectors(e,r);const p=Js.dot(Kd),v=$s.dot(Kd);if(p<=0&&v<=0)return i.copy(r);Qd.subVectors(e,l);const g=Js.dot(Qd),m=$s.dot(Qd);if(g>=0&&m<=g)return i.copy(l);const _=p*m-g*v;if(_<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(Js,h);Jd.subVectors(e,c);const M=Js.dot(Jd),E=$s.dot(Jd);if(E>=0&&M<=E)return i.copy(c);const T=M*v-p*E;if(T<=0&&v>=0&&E<=0)return d=v/(v-E),i.copy(r).addScaledVector($s,d);const S=g*E-M*m;if(S<=0&&m-g>=0&&M-E>=0)return ey.subVectors(c,l),d=(m-g)/(m-g+(M-E)),i.copy(l).addScaledVector(ey,d);const x=1/(S+T+_);return h=T*x,d=_*x,i.copy(r).addScaledVector(Js,h).addScaledVector($s,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},hc={h:0,s:0,l:0};function $d(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ce{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Xe.workingColorSpace){return this.r=e,this.g=i,this.b=r,Xe.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Xe.workingColorSpace){if(e=Bp(e,1),i=Cn(i,0,1),r=Cn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=$d(h,c,e+1/3),this.g=$d(h,c,e),this.b=$d(h,c,e-1/3)}return Xe.toWorkingColorSpace(this,l),this}setStyle(e,i=Mi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Mi){const r=cS[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=Hd(e.r),this.g=Hd(e.g),this.b=Hd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Xe.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Cn(Dn.r*255,0,255))*65536+Math.round(Cn(Dn.g*255,0,255))*256+Math.round(Cn(Dn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Dn.copy(this),i);const r=Dn.r,l=Dn.g,c=Dn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,v;const g=(d+h)/2;if(d===h)p=0,v=0;else{const m=h-d;switch(v=g<=.5?m/(h+d):m/(2-h-d),h){case r:p=(l-c)/m+(l<c?6:0);break;case l:p=(c-r)/m+2;break;case c:p=(r-l)/m+4;break}p/=6}return e.h=p,e.s=v,e.l=g,e}getRGB(e,i=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Dn.copy(this),i),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Mi){Xe.fromWorkingColorSpace(Dn.copy(this),e);const i=Dn.r,r=Dn.g,l=Dn.b;return e!==Mi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL(hc);const r=bl(ar.h,hc.h,i),l=bl(ar.s,hc.s,i),c=bl(ar.l,hc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ce;Ce.NAMES=cS;let mT=0;class Mo extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=es(),this.name="",this.type="Material",this.blending=co,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yp,this.blendDst=Sp,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(r.blending=this.blending),this.side!==hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==yp&&(r.blendSrc=this.blendSrc),this.blendDst!==Sp&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ic&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jr extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=Qy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new W,dc=new te;class Ti{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=G_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return oS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(e),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=oo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G_&&(e.usage=this.usage),e}}class fS extends Ti{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class hS extends Ti{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class si extends Ti{constructor(e,i,r){super(new Float32Array(e),i,r)}}let gT=0;const xi=new je,tp=new Nn,to=new W,ii=new Ol,Sl=new Ol,yn=new W;class oi extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?hS:fS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Me().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,r){return xi.makeTranslation(e,i,r),this.applyMatrix4(xi),this}scale(e,i,r){return xi.makeScale(e,i,r),this.applyMatrix4(xi),this}lookAt(e){return tp.lookAt(e),tp.updateMatrix(),this.applyMatrix4(tp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new si(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Sl.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ii.min,Sl.min),ii.expandByPoint(yn),yn.addVectors(ii.max,Sl.max),ii.expandByPoint(yn)):(ii.expandByPoint(Sl.min),ii.expandByPoint(Sl.max))}ii.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)yn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let v=0,g=d.count;v<g;v++)yn.fromBufferAttribute(d,v),p&&(to.fromBufferAttribute(e,v),yn.add(to)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let q=0;q<r.count;q++)d[q]=new W,p[q]=new W;const v=new W,g=new W,m=new W,_=new te,M=new te,E=new te,T=new W,S=new W;function x(q,U,w){v.fromBufferAttribute(r,q),g.fromBufferAttribute(r,U),m.fromBufferAttribute(r,w),_.fromBufferAttribute(c,q),M.fromBufferAttribute(c,U),E.fromBufferAttribute(c,w),g.sub(v),m.sub(v),M.sub(_),E.sub(_);const X=1/(M.x*E.y-E.x*M.y);isFinite(X)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(m,-M.y).multiplyScalar(X),S.copy(m).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(X),d[q].add(T),d[U].add(T),d[w].add(T),p[q].add(S),p[U].add(S),p[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let q=0,U=L.length;q<U;++q){const w=L[q],X=w.start,ft=w.count;for(let ct=X,_t=X+ft;ct<_t;ct+=3)x(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const R=new W,N=new W,Y=new W,G=new W;function P(q){Y.fromBufferAttribute(l,q),G.copy(Y);const U=d[q];R.copy(U),R.sub(Y.multiplyScalar(Y.dot(U))).normalize(),N.crossVectors(G,U);const X=N.dot(p[q])<0?-1:1;h.setXYZW(q,R.x,R.y,R.z,X)}for(let q=0,U=L.length;q<U;++q){const w=L[q],X=w.start,ft=w.count;for(let ct=X,_t=X+ft;ct<_t;ct+=3)P(e.getX(ct+0)),P(e.getX(ct+1)),P(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new W,c=new W,h=new W,d=new W,p=new W,v=new W,g=new W,m=new W;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),g.subVectors(h,c),m.subVectors(l,c),g.cross(m),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,S),d.add(g),p.add(g),v.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,v.x,v.y,v.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),m.subVectors(l,c),g.cross(m),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i),yn.normalize(),e.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,p){const v=d.array,g=d.itemSize,m=d.normalized,_=new v.constructor(p.length*g);let M=0,E=0;for(let T=0,S=p.length;T<S;T++){d.isInterleavedBufferAttribute?M=p[T]*d.data.stride+d.offset:M=p[T]*g;for(let x=0;x<g;x++)_[E++]=v[M++]}return new Ti(_,g,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],v=e(p,r);i.setAttribute(d,v)}const c=this.morphAttributes;for(const d in c){const p=[],v=c[d];for(let g=0,m=v.length;g<m;g++){const _=v[g],M=e(_,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const v=h[d];i.addGroup(v.start,v.count,v.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const v in p)p[v]!==void 0&&(e[v]=p[v]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const v=r[p];e.data.attributes[p]=v.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const v=this.morphAttributes[p],g=[];for(let m=0,_=v.length;m<_;m++){const M=v[m];g.push(M.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const v in l){const g=l[v];this.setAttribute(v,g.clone(i))}const c=e.morphAttributes;for(const v in c){const g=[],m=c[v];for(let _=0,M=m.length;_<M;_++)g.push(m[_].clone(i));this.morphAttributes[v]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let v=0,g=h.length;v<g;v++){const m=h[v];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ny=new je,Gr=new Kc,pc=new Pl,iy=new W,eo=new W,no=new W,io=new W,ep=new W,mc=new W,gc=new te,vc=new te,_c=new te,ay=new W,ry=new W,sy=new W,yc=new W,Sc=new W;class Yn extends Nn{constructor(e=new oi,i=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){mc.set(0,0,0);for(let p=0,v=c.length;p<v;p++){const g=d[p],m=c[p];g!==0&&(ep.fromBufferAttribute(m,e),h?mc.addScaledVector(ep,g):mc.addScaledVector(ep.sub(i),g))}i.add(mc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(c),Gr.copy(e.ray).recast(e.near),!(pc.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(pc,iy)===null||Gr.origin.distanceToSquared(iy)>(e.far-e.near)**2))&&(ny.copy(c).invert(),Gr.copy(e.ray).applyMatrix4(ny),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Gr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,v=c.attributes.uv,g=c.attributes.uv1,m=c.attributes.normal,_=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const S=_[E],x=h[S.materialIndex],L=Math.max(S.start,M.start),R=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,Y=R;N<Y;N+=3){const G=d.getX(N),P=d.getX(N+1),q=d.getX(N+2);l=xc(this,x,e,r,v,g,m,G,P,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const L=d.getX(S),R=d.getX(S+1),N=d.getX(S+2);l=xc(this,h,e,r,v,g,m,L,R,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const S=_[E],x=h[S.materialIndex],L=Math.max(S.start,M.start),R=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,Y=R;N<Y;N+=3){const G=N,P=N+1,q=N+2;l=xc(this,x,e,r,v,g,m,G,P,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),T=Math.min(p.count,M.start+M.count);for(let S=E,x=T;S<x;S+=3){const L=S,R=S+1,N=S+2;l=xc(this,h,e,r,v,g,m,L,R,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function vT(s,e,i,r,l,c,h,d){let p;if(e.side===Wn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===hr,d),p===null)return null;Sc.copy(d),Sc.applyMatrix4(s.matrixWorld);const v=i.ray.origin.distanceTo(Sc);return v<i.near||v>i.far?null:{distance:v,point:Sc.clone(),object:s}}function xc(s,e,i,r,l,c,h,d,p,v){s.getVertexPosition(d,eo),s.getVertexPosition(p,no),s.getVertexPosition(v,io);const g=vT(s,e,i,r,eo,no,io,yc);if(g){l&&(gc.fromBufferAttribute(l,d),vc.fromBufferAttribute(l,p),_c.fromBufferAttribute(l,v),g.uv=Bi.getInterpolation(yc,eo,no,io,gc,vc,_c,new te)),c&&(gc.fromBufferAttribute(c,d),vc.fromBufferAttribute(c,p),_c.fromBufferAttribute(c,v),g.uv1=Bi.getInterpolation(yc,eo,no,io,gc,vc,_c,new te)),h&&(ay.fromBufferAttribute(h,d),ry.fromBufferAttribute(h,p),sy.fromBufferAttribute(h,v),g.normal=Bi.getInterpolation(yc,eo,no,io,ay,ry,sy,new W),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:d,b:p,c:v,normal:new W,materialIndex:0};Bi.getNormal(eo,no,io,m.normal),g.face=m}return g}class Eo extends oi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],v=[],g=[],m=[];let _=0,M=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new si(v,3)),this.setAttribute("normal",new si(g,3)),this.setAttribute("uv",new si(m,2));function E(T,S,x,L,R,N,Y,G,P,q,U){const w=N/P,X=Y/q,ft=N/2,ct=Y/2,_t=G/2,ht=P+1,Z=q+1;let rt=0,tt=0;const At=new W;for(let H=0;H<Z;H++){const z=H*X-ct;for(let Tt=0;Tt<ht;Tt++){const Nt=Tt*w-ft;At[T]=Nt*L,At[S]=z*R,At[x]=_t,v.push(At.x,At.y,At.z),At[T]=0,At[S]=0,At[x]=G>0?1:-1,g.push(At.x,At.y,At.z),m.push(Tt/P),m.push(1-H/q),rt+=1}}for(let H=0;H<q;H++)for(let z=0;z<P;z++){const Tt=_+z+ht*H,Nt=_+z+ht*(H+1),A=_+(z+1)+ht*(H+1),V=_+(z+1)+ht*H;p.push(Tt,Nt,V),p.push(Nt,A,V),tt+=6}d.addGroup(M,tt,U),M+=tt,_+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function So(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function In(s){const e={};for(let i=0;i<s.length;i++){const r=So(s[i]);for(const l in r)e[l]=r[l]}return e}function _T(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function dS(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const yT={clone:So,merge:In};var ST=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ST,this.fragmentShader=xT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=_T(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class pS extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=ba}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new W,oy=new te,ly=new te;class ai extends pS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wl*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,oy,ly),i.subVectors(ly,oy)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ho*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,v=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/v,l*=h.width/p,r*=h.height/v}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ao=-90,ro=1;class MT extends Nn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(ao,ro,e,i);l.layers=this.layers,this.add(l);const c=new ai(ao,ro,e,i);c.layers=this.layers,this.add(c);const h=new ai(ao,ro,e,i);h.layers=this.layers,this.add(h);const d=new ai(ao,ro,e,i);d.layers=this.layers,this.add(d);const p=new ai(ao,ro,e,i);p.layers=this.layers,this.add(p);const v=new ai(ao,ro,e,i);v.layers=this.layers,this.add(v)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const v of i)this.remove(v);if(e===ba)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const v of i)this.add(v),v.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,v,g]=this.children,m=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,v),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(m,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class mS extends Fn{constructor(e,i,r,l,c,h,d,p,v,g){e=e!==void 0?e:[],i=i!==void 0?i:mo,super(e,i,r,l,c,h,d,p,v,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ET extends $r{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new mS(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:zi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Eo(5,5,5),c=new pr({name:"CubemapFromEquirect",uniforms:So(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:cr});c.uniforms.tEquirect.value=i;const h=new Yn(l,c),d=i.minFilter;return i.minFilter===Qr&&(i.minFilter=zi),new MT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const np=new W,TT=new W,bT=new Me;class qr{constructor(e=new W(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=np.subVectors(r,i).cross(TT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(np),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||bT.getNormalMatrix(e),l=this.coplanarPoint(np).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Pl,Mc=new W;class Fp{constructor(e=new qr,i=new qr,r=new qr,l=new qr,c=new qr,h=new qr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ba){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],p=l[3],v=l[4],g=l[5],m=l[6],_=l[7],M=l[8],E=l[9],T=l[10],S=l[11],x=l[12],L=l[13],R=l[14],N=l[15];if(r[0].setComponents(p-c,_-v,S-M,N-x).normalize(),r[1].setComponents(p+c,_+v,S+M,N+x).normalize(),r[2].setComponents(p+h,_+g,S+E,N+L).normalize(),r[3].setComponents(p-h,_-g,S-E,N-L).normalize(),r[4].setComponents(p-d,_-m,S-T,N-R).normalize(),i===ba)r[5].setComponents(p+d,_+m,S+T,N+R).normalize();else if(i===Xc)r[5].setComponents(d,m,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Mc.x=l.normal.x>0?e.max.x:e.min.x,Mc.y=l.normal.y>0?e.max.y:e.min.y,Mc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gS(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function AT(s){const e=new WeakMap;function i(d,p){const v=d.array,g=d.usage,m=v.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,v,g),d.onUploadCallback();let M;if(v instanceof Float32Array)M=s.FLOAT;else if(v instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(v instanceof Int16Array)M=s.SHORT;else if(v instanceof Uint32Array)M=s.UNSIGNED_INT;else if(v instanceof Int32Array)M=s.INT;else if(v instanceof Int8Array)M=s.BYTE;else if(v instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:_,type:M,bytesPerElement:v.BYTES_PER_ELEMENT,version:d.version,size:m}}function r(d,p,v){const g=p.array,m=p._updateRange,_=p.updateRanges;if(s.bindBuffer(v,d),m.count===-1&&_.length===0&&s.bufferSubData(v,0,g),_.length!==0){for(let M=0,E=_.length;M<E;M++){const T=_[M];s.bufferSubData(v,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}m.count!==-1&&(s.bufferSubData(v,m.offset*g.BYTES_PER_ELEMENT,g,m.offset,m.count),m.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const v=e.get(d);if(v===void 0)e.set(d,i(d,p));else if(v.version<d.version){if(v.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(v.buffer,d,p),v.version=d.version}}return{get:l,remove:c,update:h}}class lr extends oi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),v=d+1,g=p+1,m=e/d,_=i/p,M=[],E=[],T=[],S=[];for(let x=0;x<g;x++){const L=x*_-h;for(let R=0;R<v;R++){const N=R*m-c;E.push(N,-L,0),T.push(0,0,1),S.push(R/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<d;L++){const R=L+v*x,N=L+v*(x+1),Y=L+1+v*(x+1),G=L+1+v*x;M.push(R,N,G),M.push(N,Y,G)}this.setIndex(M),this.setAttribute("position",new si(E,3)),this.setAttribute("normal",new si(T,3)),this.setAttribute("uv",new si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.widthSegments,e.heightSegments)}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,KT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ab=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,OA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xe={alphahash_fragment:CT,alphahash_pars_fragment:RT,alphamap_fragment:wT,alphamap_pars_fragment:DT,alphatest_fragment:NT,alphatest_pars_fragment:UT,aomap_fragment:LT,aomap_pars_fragment:OT,batching_pars_vertex:PT,batching_vertex:zT,begin_vertex:BT,beginnormal_vertex:IT,bsdfs:FT,iridescence_fragment:HT,bumpmap_pars_fragment:GT,clipping_planes_fragment:VT,clipping_planes_pars_fragment:XT,clipping_planes_pars_vertex:kT,clipping_planes_vertex:qT,color_fragment:YT,color_pars_fragment:WT,color_pars_vertex:jT,color_vertex:ZT,common:KT,cube_uv_reflection_fragment:QT,defaultnormal_vertex:JT,displacementmap_pars_vertex:$T,displacementmap_vertex:tb,emissivemap_fragment:eb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:ab,envmap_fragment:rb,envmap_common_pars_fragment:sb,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:yb,envmap_vertex:ub,fog_vertex:cb,fog_pars_vertex:fb,fog_fragment:hb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:vb,lights_pars_begin:_b,lights_toon_fragment:Sb,lights_toon_pars_fragment:xb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Eb,lights_physical_fragment:Tb,lights_physical_pars_fragment:bb,lights_fragment_begin:Ab,lights_fragment_maps:Cb,lights_fragment_end:Rb,logdepthbuf_fragment:wb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ub,map_fragment:Lb,map_pars_fragment:Ob,map_particle_fragment:Pb,map_particle_pars_fragment:zb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Fb,morphcolor_vertex:Hb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Vb,morphtarget_vertex:Xb,normal_fragment_begin:kb,normal_fragment_maps:qb,normal_pars_fragment:Yb,normal_pars_vertex:Wb,normal_vertex:jb,normalmap_pars_fragment:Zb,clearcoat_normal_fragment_begin:Kb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:Jb,iridescence_pars_fragment:$b,opaque_fragment:tA,packing:eA,premultiplied_alpha_fragment:nA,project_vertex:iA,dithering_fragment:aA,dithering_pars_fragment:rA,roughnessmap_fragment:sA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:lA,shadowmap_pars_vertex:uA,shadowmap_vertex:cA,shadowmask_pars_fragment:fA,skinbase_vertex:hA,skinning_pars_vertex:dA,skinning_vertex:pA,skinnormal_vertex:mA,specularmap_fragment:gA,specularmap_pars_fragment:vA,tonemapping_fragment:_A,tonemapping_pars_fragment:yA,transmission_fragment:SA,transmission_pars_fragment:xA,uv_pars_fragment:MA,uv_pars_vertex:EA,uv_vertex:TA,worldpos_vertex:bA,background_vert:AA,background_frag:CA,backgroundCube_vert:RA,backgroundCube_frag:wA,cube_vert:DA,cube_frag:NA,depth_vert:UA,depth_frag:LA,distanceRGBA_vert:OA,distanceRGBA_frag:PA,equirect_vert:zA,equirect_frag:BA,linedashed_vert:IA,linedashed_frag:FA,meshbasic_vert:HA,meshbasic_frag:GA,meshlambert_vert:VA,meshlambert_frag:XA,meshmatcap_vert:kA,meshmatcap_frag:qA,meshnormal_vert:YA,meshnormal_frag:WA,meshphong_vert:jA,meshphong_frag:ZA,meshphysical_vert:KA,meshphysical_frag:QA,meshtoon_vert:JA,meshtoon_frag:$A,points_vert:t2,points_frag:e2,shadow_vert:n2,shadow_frag:i2,sprite_vert:a2,sprite_frag:r2},Ft={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Ji={basic:{uniforms:In([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:In([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:In([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:In([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:In([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ce(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:In([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:In([Ft.points,Ft.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:In([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:In([Ft.common,Ft.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:In([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:In([Ft.sprite,Ft.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:In([Ft.common,Ft.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:In([Ft.lights,Ft.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ji.physical={uniforms:In([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Ec={r:0,b:0,g:0},Xr=new Aa,s2=new je;function o2(s,e,i,r,l,c,h){const d=new Ce(0);let p=c===!0?0:1,v,g,m=null,_=0,M=null;function E(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?i:e).get(R)),R}function T(L){let R=!1;const N=E(L);N===null?x(d,p):N&&N.isColor&&(x(N,1),R=!0);const Y=s.xr.getEnvironmentBlendMode();Y==="additive"?r.buffers.color.setClear(0,0,0,1,h):Y==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,R){const N=E(R);N&&(N.isCubeTexture||N.mapping===Wc)?(g===void 0&&(g=new Yn(new Eo(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:So(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Y,G,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Xr.copy(R.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(Xr)),g.material.toneMapped=Xe.getTransfer(N.colorSpace)!==Ke,(m!==N||_!==N.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,m=N,_=N.version,M=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(v===void 0&&(v=new Yn(new lr(2,2),new pr({name:"BackgroundMaterial",uniforms:So(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(v)),v.material.uniforms.t2D.value=N,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.toneMapped=Xe.getTransfer(N.colorSpace)!==Ke,N.matrixAutoUpdate===!0&&N.updateMatrix(),v.material.uniforms.uvTransform.value.copy(N.matrix),(m!==N||_!==N.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,m=N,_=N.version,M=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null))}function x(L,R){L.getRGB(Ec,dS(s)),r.buffers.color.setClear(Ec.r,Ec.g,Ec.b,R,h)}return{getClearColor:function(){return d},setClearColor:function(L,R=1){d.set(L),p=R,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(d,p)},render:T,addToRenderList:S}}function l2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(w,X,ft,ct,_t){let ht=!1;const Z=m(ct,ft,X);c!==Z&&(c=Z,v(c.object)),ht=M(w,ct,ft,_t),ht&&E(w,ct,ft,_t),_t!==null&&e.update(_t,s.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,N(w,X,ft,ct),_t!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function p(){return s.createVertexArray()}function v(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function m(w,X,ft){const ct=ft.wireframe===!0;let _t=r[w.id];_t===void 0&&(_t={},r[w.id]=_t);let ht=_t[X.id];ht===void 0&&(ht={},_t[X.id]=ht);let Z=ht[ct];return Z===void 0&&(Z=_(p()),ht[ct]=Z),Z}function _(w){const X=[],ft=[],ct=[];for(let _t=0;_t<i;_t++)X[_t]=0,ft[_t]=0,ct[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:ft,attributeDivisors:ct,object:w,attributes:{},index:null}}function M(w,X,ft,ct){const _t=c.attributes,ht=X.attributes;let Z=0;const rt=ft.getAttributes();for(const tt in rt)if(rt[tt].location>=0){const H=_t[tt];let z=ht[tt];if(z===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),H===void 0||H.attribute!==z||z&&H.data!==z.data)return!0;Z++}return c.attributesNum!==Z||c.index!==ct}function E(w,X,ft,ct){const _t={},ht=X.attributes;let Z=0;const rt=ft.getAttributes();for(const tt in rt)if(rt[tt].location>=0){let H=ht[tt];H===void 0&&(tt==="instanceMatrix"&&w.instanceMatrix&&(H=w.instanceMatrix),tt==="instanceColor"&&w.instanceColor&&(H=w.instanceColor));const z={};z.attribute=H,H&&H.data&&(z.data=H.data),_t[tt]=z,Z++}c.attributes=_t,c.attributesNum=Z,c.index=ct}function T(){const w=c.newAttributes;for(let X=0,ft=w.length;X<ft;X++)w[X]=0}function S(w){x(w,0)}function x(w,X){const ft=c.newAttributes,ct=c.enabledAttributes,_t=c.attributeDivisors;ft[w]=1,ct[w]===0&&(s.enableVertexAttribArray(w),ct[w]=1),_t[w]!==X&&(s.vertexAttribDivisor(w,X),_t[w]=X)}function L(){const w=c.newAttributes,X=c.enabledAttributes;for(let ft=0,ct=X.length;ft<ct;ft++)X[ft]!==w[ft]&&(s.disableVertexAttribArray(ft),X[ft]=0)}function R(w,X,ft,ct,_t,ht,Z){Z===!0?s.vertexAttribIPointer(w,X,ft,_t,ht):s.vertexAttribPointer(w,X,ft,ct,_t,ht)}function N(w,X,ft,ct){T();const _t=ct.attributes,ht=ft.getAttributes(),Z=X.defaultAttributeValues;for(const rt in ht){const tt=ht[rt];if(tt.location>=0){let At=_t[rt];if(At===void 0&&(rt==="instanceMatrix"&&w.instanceMatrix&&(At=w.instanceMatrix),rt==="instanceColor"&&w.instanceColor&&(At=w.instanceColor)),At!==void 0){const H=At.normalized,z=At.itemSize,Tt=e.get(At);if(Tt===void 0)continue;const Nt=Tt.buffer,A=Tt.type,V=Tt.bytesPerElement,nt=A===s.INT||A===s.UNSIGNED_INT||At.gpuType===$y;if(At.isInterleavedBufferAttribute){const $=At.data,St=$.stride,bt=At.offset;if($.isInstancedInterleavedBuffer){for(let Dt=0;Dt<tt.locationSize;Dt++)x(tt.location+Dt,$.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Dt=0;Dt<tt.locationSize;Dt++)S(tt.location+Dt);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let Dt=0;Dt<tt.locationSize;Dt++)R(tt.location+Dt,z/tt.locationSize,A,H,St*V,(bt+z/tt.locationSize*Dt)*V,nt)}else{if(At.isInstancedBufferAttribute){for(let $=0;$<tt.locationSize;$++)x(tt.location+$,At.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let $=0;$<tt.locationSize;$++)S(tt.location+$);s.bindBuffer(s.ARRAY_BUFFER,Nt);for(let $=0;$<tt.locationSize;$++)R(tt.location+$,z/tt.locationSize,A,H,z*V,z/tt.locationSize*$*V,nt)}}else if(Z!==void 0){const H=Z[rt];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(tt.location,H);break;case 3:s.vertexAttrib3fv(tt.location,H);break;case 4:s.vertexAttrib4fv(tt.location,H);break;default:s.vertexAttrib1fv(tt.location,H)}}}}L()}function Y(){q();for(const w in r){const X=r[w];for(const ft in X){const ct=X[ft];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete X[ft]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const X=r[w.id];for(const ft in X){const ct=X[ft];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete X[ft]}delete r[w.id]}function P(w){for(const X in r){const ft=r[X];if(ft[w.id]===void 0)continue;const ct=ft[w.id];for(const _t in ct)g(ct[_t].object),delete ct[_t];delete ft[w.id]}}function q(){U(),h=!0,c!==l&&(c=l,v(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:U,dispose:Y,releaseStatesOfGeometry:G,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function u2(s,e,i){let r;function l(v){r=v}function c(v,g){s.drawArrays(r,v,g),i.update(g,r,1)}function h(v,g,m){m!==0&&(s.drawArraysInstanced(r,v,g,m),i.update(g,r,m))}function d(v,g,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<m;M++)this.render(v[M],g[M]);else{_.multiDrawArraysWEBGL(r,v,0,g,0,m);let M=0;for(let E=0;E<m;E++)M+=g[E];i.update(M,r,1)}}function p(v,g,m,_){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<v.length;E++)h(v[E],g[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,v,0,g,0,_,0,m);let E=0;for(let T=0;T<m;T++)E+=g[T];for(let T=0;T<_.length;T++)i.update(E,r,_[T])}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function c2(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==$i&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const P=G===jc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==dr&&r.convert(G)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==or&&!P)}function p(G){if(G==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=i.precision!==void 0?i.precision:"highp";const g=p(v);g!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",g,"instead."),v=g);const m=i.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,Y=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:v,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:T,maxAttributes:S,maxVertexUniforms:x,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:N,maxSamples:Y}}function f2(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new qr,d=new Me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){const M=m.length!==0||_||r!==0||l;return l=_,r=m.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(m,_){i=g(m,_,0)},this.setState=function(m,_,M){const E=m.clippingPlanes,T=m.clipIntersection,S=m.clipShadows,x=s.get(m);if(!l||E===null||E.length===0||c&&!S)c?g(null):v();else{const L=c?0:r,R=L*4;let N=x.clippingState||null;p.value=N,N=g(E,_,R,M);for(let Y=0;Y!==R;++Y)N[Y]=i[Y];x.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function v(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(m,_,M,E){const T=m!==null?m.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const x=M+T*4,L=_.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<x)&&(S=new Float32Array(x));for(let R=0,N=M;R!==T;++R,N+=4)h.copy(m[R]).applyMatrix4(L,d),h.normal.toArray(S,N),S[N+3]=h.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function h2(s){let e=new WeakMap;function i(h,d){return d===xp?h.mapping=mo:d===Mp&&(h.mapping=go),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===xp||d===Mp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new ET(p.height);return v.fromEquirectangularTexture(s,h),e.set(h,v),h.addEventListener("dispose",l),i(v.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class d2 extends pS{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=v*this.view.offsetX,h=c+v*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const lo=4,uy=[.125,.215,.35,.446,.526,.582],Zr=20,ip=new d2,cy=new Ce;let ap=null,rp=0,sp=0,op=!1;const Yr=(1+Math.sqrt(5))/2,so=1/Yr,fy=[new W(-Yr,so,0),new W(Yr,so,0),new W(-so,0,Yr),new W(so,0,Yr),new W(0,Yr,-so),new W(0,Yr,so),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class hy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=my(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=py(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ap,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ap=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:jc,format:$i,colorSpace:mr,depthBuffer:!1},l=dy(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dy(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p2(c)),this._blurMaterial=m2(c,e,i)}return l}_compileMaterial(e){const i=new Yn(this._lodPlanes[0],e);this._renderer.compile(i,ip)}_sceneToCubeUV(e,i,r,l){const d=new ai(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(cy),g.toneMapping=fr,g.autoClear=!1;const M=new jr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new Yn(new Eo,M);let T=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,T=!0):(M.color.copy(cy),T=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(d.up.set(0,p[x],0),d.lookAt(v[x],0,0)):L===1?(d.up.set(0,0,p[x]),d.lookAt(0,v[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,v[x]));const R=this._cubeSize;Tc(l,L*R,x>2?R:0,R,R),g.setRenderTarget(l),T&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=m,e.background=S}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===mo||e.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=my()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=py());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Yn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Tc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,ip)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=fy[(l-c-1)%fy.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,v=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,m=new Yn(this._lodPlanes[l],v),_=v.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),T=c/E,S=isFinite(c)?1+Math.floor(g*T):Zr;S>Zr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const x=[];let L=0;for(let P=0;P<Zr;++P){const q=P/T,U=Math.exp(-q*q/2);x.push(U),P===0?L+=U:P<S&&(L+=2*U)}for(let P=0;P<x.length;P++)x[P]=x[P]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:R}=this;_.dTheta.value=E,_.mipInt.value=R-r;const N=this._sizeLods[l],Y=3*N*(l>R-lo?l-R+lo:0),G=4*(this._cubeSize-N);Tc(i,Y,G,3*N,2*N),p.setRenderTarget(i),p.render(m,ip)}}function p2(s){const e=[],i=[],r=[];let l=s;const c=s-lo+1+uy.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>s-lo?p=uy[h-s+lo-1]:h===0&&(p=0),r.push(p);const v=1/(d-2),g=-v,m=1+v,_=[g,g,m,g,m,m,g,g,m,m,g,m],M=6,E=6,T=3,S=2,x=1,L=new Float32Array(T*E*M),R=new Float32Array(S*E*M),N=new Float32Array(x*E*M);for(let G=0;G<M;G++){const P=G%3*2/3-1,q=G>2?0:-1,U=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];L.set(U,T*E*G),R.set(_,S*E*G);const w=[G,G,G,G,G,G];N.set(w,x*E*G)}const Y=new oi;Y.setAttribute("position",new Ti(L,T)),Y.setAttribute("uv",new Ti(R,S)),Y.setAttribute("faceIndex",new Ti(N,x)),e.push(Y),l>lo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function dy(s,e,i){const r=new $r(s,e,i);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function m2(s,e,i){const r=new Float32Array(Zr),l=new W(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function py(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function my(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Hp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g2(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,v=p===xp||p===Mp,g=p===mo||p===go;if(v||g){let m=e.get(d);const _=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new hy(s)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return v&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new hy(s)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function l(d){let p=0;const v=6;for(let g=0;g<v;g++)d[g]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function v2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&oS("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function _2(s,e,i,r){const l={},c=new WeakMap;function h(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const T=_.morphAttributes[E];for(let S=0,x=T.length;S<x;S++)e.remove(T[S])}_.removeEventListener("dispose",h),delete l[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(m,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function p(m){const _=m.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const M=m.morphAttributes;for(const E in M){const T=M[E];for(let S=0,x=T.length;S<x;S++)e.update(T[S],s.ARRAY_BUFFER)}}function v(m){const _=[],M=m.index,E=m.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let R=0,N=L.length;R<N;R+=3){const Y=L[R+0],G=L[R+1],P=L[R+2];_.push(Y,G,G,P,P,Y)}}else if(E!==void 0){const L=E.array;T=E.version;for(let R=0,N=L.length/3-1;R<N;R+=3){const Y=R+0,G=R+1,P=R+2;_.push(Y,G,G,P,P,Y)}}else return;const S=new(sS(_)?hS:fS)(_,1);S.version=T;const x=c.get(m);x&&e.remove(x),c.set(m,S)}function g(m){const _=c.get(m);if(_){const M=m.index;M!==null&&_.version<M.version&&v(m)}else v(m);return c.get(m)}return{get:d,update:p,getWireframeAttribute:g}}function y2(s,e,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function p(_,M){s.drawElements(r,M,c,_*h),i.update(M,r,1)}function v(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,_*h,E),i.update(M,r,E))}function g(_,M,E){if(E===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let S=0;S<E;S++)this.render(_[S]/h,M[S]);else{T.multiDrawElementsWEBGL(r,M,0,c,_,0,E);let S=0;for(let x=0;x<E;x++)S+=M[x];i.update(S,r,1)}}function m(_,M,E,T){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)v(_[x]/h,M[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,T,0,E);let x=0;for(let L=0;L<E;L++)x+=M[L];for(let L=0;L<T.length;L++)i.update(x,r,T[L])}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=v,this.renderMultiDraw=g,this.renderMultiDrawInstances=m}function S2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function x2(s,e,i){const r=new WeakMap,l=new Je;function c(h,d,p){const v=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==m){let w=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),S===!0&&(N=3);let Y=d.attributes.position.count*N,G=1;Y>e.maxTextureSize&&(G=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const P=new Float32Array(Y*G*4*m),q=new uS(P,Y,G,m);q.type=or,q.needsUpdate=!0;const U=N*4;for(let X=0;X<m;X++){const ft=x[X],ct=L[X],_t=R[X],ht=Y*G*4*X;for(let Z=0;Z<ft.count;Z++){const rt=Z*U;E===!0&&(l.fromBufferAttribute(ft,Z),P[ht+rt+0]=l.x,P[ht+rt+1]=l.y,P[ht+rt+2]=l.z,P[ht+rt+3]=0),T===!0&&(l.fromBufferAttribute(ct,Z),P[ht+rt+4]=l.x,P[ht+rt+5]=l.y,P[ht+rt+6]=l.z,P[ht+rt+7]=0),S===!0&&(l.fromBufferAttribute(_t,Z),P[ht+rt+8]=l.x,P[ht+rt+9]=l.y,P[ht+rt+10]=l.z,P[ht+rt+11]=_t.itemSize===4?l.w:1)}}_={count:m,texture:q,size:new te(Y,G)},r.set(d,_),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<v.length;S++)E+=v[S];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",v)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function M2(s,e,i,r){let l=new WeakMap;function c(p){const v=r.render.frame,g=p.geometry,m=e.get(p,g);if(l.get(m)!==v&&(e.update(m),l.set(m,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==v&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==v&&(_.update(),l.set(_,v))}return m}function h(){l=new WeakMap}function d(p){const v=p.target;v.removeEventListener("dispose",d),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:c,dispose:h}}class vS extends Fn{constructor(e,i,r,l,c,h,d,p,v,g=fo){if(g!==fo&&g!==yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===fo&&(r=vo),r===void 0&&g===yo&&(r=_o),super(null,l,c,h,d,p,g,r,v),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:Ei,this.minFilter=p!==void 0?p:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const _S=new Fn,yS=new vS(1,1);yS.compareFunction=rS;const SS=new uS,xS=new oT,MS=new mS,gy=[],vy=[],_y=new Float32Array(16),yy=new Float32Array(9),Sy=new Float32Array(4);function To(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=gy[l];if(c===void 0&&(c=new Float32Array(l),gy[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(c,d)}return c}function pn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Qc(s,e){let i=vy[e];i===void 0&&(i=new Int32Array(e),vy[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function E2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function T2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2fv(this.addr,e),mn(i,e)}}function b2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;s.uniform3fv(this.addr,e),mn(i,e)}}function A2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4fv(this.addr,e),mn(i,e)}}function C2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;Sy.set(r),s.uniformMatrix2fv(this.addr,!1,Sy),mn(i,r)}}function R2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;yy.set(r),s.uniformMatrix3fv(this.addr,!1,yy),mn(i,r)}}function w2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;_y.set(r),s.uniformMatrix4fv(this.addr,!1,_y),mn(i,r)}}function D2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function N2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2iv(this.addr,e),mn(i,e)}}function U2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3iv(this.addr,e),mn(i,e)}}function L2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4iv(this.addr,e),mn(i,e)}}function O2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function P2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2uiv(this.addr,e),mn(i,e)}}function z2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3uiv(this.addr,e),mn(i,e)}}function B2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4uiv(this.addr,e),mn(i,e)}}function I2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);const c=this.type===s.SAMPLER_2D_SHADOW?yS:_S;i.setTexture2D(e||c,l)}function F2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||xS,l)}function H2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||MS,l)}function G2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||SS,l)}function V2(s){switch(s){case 5126:return E2;case 35664:return T2;case 35665:return b2;case 35666:return A2;case 35674:return C2;case 35675:return R2;case 35676:return w2;case 5124:case 35670:return D2;case 35667:case 35671:return N2;case 35668:case 35672:return U2;case 35669:case 35673:return L2;case 5125:return O2;case 36294:return P2;case 36295:return z2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return F2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}function X2(s,e){s.uniform1fv(this.addr,e)}function k2(s,e){const i=To(e,this.size,2);s.uniform2fv(this.addr,i)}function q2(s,e){const i=To(e,this.size,3);s.uniform3fv(this.addr,i)}function Y2(s,e){const i=To(e,this.size,4);s.uniform4fv(this.addr,i)}function W2(s,e){const i=To(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function j2(s,e){const i=To(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Z2(s,e){const i=To(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function K2(s,e){s.uniform1iv(this.addr,e)}function Q2(s,e){s.uniform2iv(this.addr,e)}function J2(s,e){s.uniform3iv(this.addr,e)}function $2(s,e){s.uniform4iv(this.addr,e)}function tC(s,e){s.uniform1uiv(this.addr,e)}function eC(s,e){s.uniform2uiv(this.addr,e)}function nC(s,e){s.uniform3uiv(this.addr,e)}function iC(s,e){s.uniform4uiv(this.addr,e)}function aC(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||_S,c[h])}function rC(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||xS,c[h])}function sC(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||MS,c[h])}function oC(s,e,i){const r=this.cache,l=e.length,c=Qc(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||SS,c[h])}function lC(s){switch(s){case 5126:return X2;case 35664:return k2;case 35665:return q2;case 35666:return Y2;case 35674:return W2;case 35675:return j2;case 35676:return Z2;case 5124:case 35670:return K2;case 35667:case 35671:return Q2;case 35668:case 35672:return J2;case 35669:case 35673:return $2;case 5125:return tC;case 36294:return eC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return oC}}class uC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=V2(i.type)}}class cC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lC(i.type)}}class fC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function xy(s,e){s.seq.push(e),s.map[e.id]=e}function hC(s,e,i){const r=s.name,l=r.length;for(lp.lastIndex=0;;){const c=lp.exec(r),h=lp.lastIndex;let d=c[1];const p=c[2]==="]",v=c[3];if(p&&(d=d|0),v===void 0||v==="["&&h+2===l){xy(i,v===void 0?new uC(d,s,e):new cC(d,s,e));break}else{let m=i.map[d];m===void 0&&(m=new fC(d),xy(i,m)),i=m}}}class Bc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);hC(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function My(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const dC=37297;let pC=0;function mC(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function gC(s){const e=Xe.getPrimaries(Xe.workingColorSpace),i=Xe.getPrimaries(s);let r;switch(e===i?r="":e===Vc&&i===Gc?r="LinearDisplayP3ToLinearSRGB":e===Gc&&i===Vc&&(r="LinearSRGBToLinearDisplayP3"),s){case mr:case Zc:return[r,"LinearTransferOETF"];case Mi:case zp:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Ey(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+mC(s.getShaderSource(e),h)}else return l}function vC(s,e){const i=gC(e);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function _C(s,e){let i;switch(e){case u1:i="Linear";break;case c1:i="Reinhard";break;case f1:i="OptimizedCineon";break;case h1:i="ACESFilmic";break;case p1:i="AgX";break;case m1:i="Neutral";break;case d1:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function yC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function SC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function xC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function Tl(s){return s!==""}function Ty(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function by(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MC=/^[ \t]*#include +<([\w\d./]+)>/gm;function bp(s){return s.replace(MC,TC)}const EC=new Map;function TC(s,e){let i=xe[e];if(i===void 0){const r=EC.get(e);if(r!==void 0)i=xe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bp(i)}const bC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ay(s){return s.replace(bC,AC)}function AC(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Cy(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===PE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ta&&(e="SHADOWMAP_TYPE_VSM"),e}function RC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function DC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qy:e="ENVMAP_BLENDING_MULTIPLY";break;case o1:e="ENVMAP_BLENDING_MIX";break;case l1:e="ENVMAP_BLENDING_ADD";break}return e}function NC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function UC(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=CC(i),v=RC(i),g=wC(i),m=DC(i),_=NC(i),M=yC(i),E=SC(c),T=l.createProgram();let S,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),x.length>0&&(x+=`
`)):(S=[Cy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),x=[Cy(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",i.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fr?"#define TONE_MAPPING":"",i.toneMapping!==fr?xe.tonemapping_pars_fragment:"",i.toneMapping!==fr?_C("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,vC("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),h=bp(h),h=Ty(h,i),h=by(h,i),d=bp(d),d=Ty(d,i),d=by(d,i),h=Ay(h),d=Ay(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===V_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=L+S+h,N=L+x+d,Y=My(l,l.VERTEX_SHADER,R),G=My(l,l.FRAGMENT_SHADER,N);l.attachShader(T,Y),l.attachShader(T,G),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(X){if(s.debug.checkShaderErrors){const ft=l.getProgramInfoLog(T).trim(),ct=l.getShaderInfoLog(Y).trim(),_t=l.getShaderInfoLog(G).trim();let ht=!0,Z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,Y,G);else{const rt=Ey(l,Y,"vertex"),tt=Ey(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ft+`
`+rt+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(ct===""||_t==="")&&(Z=!1);Z&&(X.diagnostics={runnable:ht,programLog:ft,vertexShader:{log:ct,prefix:S},fragmentShader:{log:_t,prefix:x}})}l.deleteShader(Y),l.deleteShader(G),q=new Bc(l,T),U=xC(l,T)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(T,dC)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Y,this.fragmentShader=G,this}let LC=0;class OC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new PC(e),i.set(e,r)),r}}class PC{constructor(e){this.id=LC++,this.code=e,this.usedTimes=0}}function zC(s,e,i,r,l,c,h){const d=new Ip,p=new OC,v=new Set,g=[],m=l.logarithmicDepthBuffer,_=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return v.add(U),U===0?"uv":`uv${U}`}function S(U,w,X,ft,ct){const _t=ft.fog,ht=ct.geometry,Z=U.isMeshStandardMaterial?ft.environment:null,rt=(U.isMeshStandardMaterial?i:e).get(U.envMap||Z),tt=rt&&rt.mapping===Wc?rt.image.height:null,At=E[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const H=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,z=H!==void 0?H.length:0;let Tt=0;ht.morphAttributes.position!==void 0&&(Tt=1),ht.morphAttributes.normal!==void 0&&(Tt=2),ht.morphAttributes.color!==void 0&&(Tt=3);let Nt,A,V,nt;if(At){const ce=Ji[At];Nt=ce.vertexShader,A=ce.fragmentShader}else Nt=U.vertexShader,A=U.fragmentShader,p.update(U),V=p.getVertexShaderID(U),nt=p.getFragmentShaderID(U);const $=s.getRenderTarget(),St=ct.isInstancedMesh===!0,bt=ct.isBatchedMesh===!0,Dt=!!U.map,O=!!U.matcap,Mt=!!rt,kt=!!U.aoMap,jt=!!U.lightMap,Gt=!!U.bumpMap,Jt=!!U.normalMap,Vt=!!U.displacementMap,Lt=!!U.emissiveMap,de=!!U.metalnessMap,B=!!U.roughnessMap,C=U.anisotropy>0,ut=U.clearcoat>0,yt=U.dispersion>0,xt=U.iridescence>0,Et=U.sheen>0,Kt=U.transmission>0,Ot=C&&!!U.anisotropyMap,Pt=ut&&!!U.clearcoatMap,ie=ut&&!!U.clearcoatNormalMap,Rt=ut&&!!U.clearcoatRoughnessMap,qt=xt&&!!U.iridescenceMap,me=xt&&!!U.iridescenceThicknessMap,ae=Et&&!!U.sheenColorMap,It=Et&&!!U.sheenRoughnessMap,Bt=!!U.specularMap,Yt=!!U.specularColorMap,pe=!!U.specularIntensityMap,F=Kt&&!!U.transmissionMap,Ct=Kt&&!!U.thicknessMap,dt=!!U.gradientMap,gt=!!U.alphaMap,vt=U.alphaTest>0,Ht=!!U.alphaHash,le=!!U.extensions;let ge=fr;U.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ge=s.toneMapping);const se={shaderID:At,shaderType:U.type,shaderName:U.name,vertexShader:Nt,fragmentShader:A,defines:U.defines,customVertexShaderID:V,customFragmentShaderID:nt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:bt,batchingColor:bt&&ct._colorsTexture!==null,instancing:St,instancingColor:St&&ct.instanceColor!==null,instancingMorph:St&&ct.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:mr,alphaToCoverage:!!U.alphaToCoverage,map:Dt,matcap:O,envMap:Mt,envMapMode:Mt&&rt.mapping,envMapCubeUVHeight:tt,aoMap:kt,lightMap:jt,bumpMap:Gt,normalMap:Jt,displacementMap:_&&Vt,emissiveMap:Lt,normalMapObjectSpace:Jt&&U.normalMapType===D1,normalMapTangentSpace:Jt&&U.normalMapType===w1,metalnessMap:de,roughnessMap:B,anisotropy:C,anisotropyMap:Ot,clearcoat:ut,clearcoatMap:Pt,clearcoatNormalMap:ie,clearcoatRoughnessMap:Rt,dispersion:yt,iridescence:xt,iridescenceMap:qt,iridescenceThicknessMap:me,sheen:Et,sheenColorMap:ae,sheenRoughnessMap:It,specularMap:Bt,specularColorMap:Yt,specularIntensityMap:pe,transmission:Kt,transmissionMap:F,thicknessMap:Ct,gradientMap:dt,opaque:U.transparent===!1&&U.blending===co&&U.alphaToCoverage===!1,alphaMap:gt,alphaTest:vt,alphaHash:Ht,combine:U.combine,mapUv:Dt&&T(U.map.channel),aoMapUv:kt&&T(U.aoMap.channel),lightMapUv:jt&&T(U.lightMap.channel),bumpMapUv:Gt&&T(U.bumpMap.channel),normalMapUv:Jt&&T(U.normalMap.channel),displacementMapUv:Vt&&T(U.displacementMap.channel),emissiveMapUv:Lt&&T(U.emissiveMap.channel),metalnessMapUv:de&&T(U.metalnessMap.channel),roughnessMapUv:B&&T(U.roughnessMap.channel),anisotropyMapUv:Ot&&T(U.anisotropyMap.channel),clearcoatMapUv:Pt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:ie&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(U.sheenRoughnessMap.channel),specularMapUv:Bt&&T(U.specularMap.channel),specularColorMapUv:Yt&&T(U.specularColorMap.channel),specularIntensityMapUv:pe&&T(U.specularIntensityMap.channel),transmissionMapUv:F&&T(U.transmissionMap.channel),thicknessMapUv:Ct&&T(U.thicknessMap.channel),alphaMapUv:gt&&T(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Jt||C),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ht.attributes.uv&&(Dt||gt),fog:!!_t,useFog:U.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:ct.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Dt&&U.map.isVideoTexture===!0&&Xe.getTransfer(U.map.colorSpace)===Ke,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ri,flipSided:U.side===Wn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:le&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&U.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return se.vertexUv1s=v.has(1),se.vertexUv2s=v.has(2),se.vertexUv3s=v.has(3),v.clear(),se}function x(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const X in U.defines)w.push(X),w.push(U.defines[X]);return U.isRawShaderMaterial===!1&&(L(w,U),R(w,U),w.push(s.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function L(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function R(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.skinning&&d.enable(4),w.morphTargets&&d.enable(5),w.morphNormals&&d.enable(6),w.morphColors&&d.enable(7),w.premultipliedAlpha&&d.enable(8),w.shadowMapEnabled&&d.enable(9),w.doubleSided&&d.enable(10),w.flipSided&&d.enable(11),w.useDepthPacking&&d.enable(12),w.dithering&&d.enable(13),w.transmission&&d.enable(14),w.sheen&&d.enable(15),w.opaque&&d.enable(16),w.pointsUvs&&d.enable(17),w.decodeVideoTexture&&d.enable(18),w.alphaToCoverage&&d.enable(19),U.push(d.mask)}function N(U){const w=E[U.type];let X;if(w){const ft=Ji[w];X=yT.clone(ft.uniforms)}else X=U.uniforms;return X}function Y(U,w){let X;for(let ft=0,ct=g.length;ft<ct;ft++){const _t=g[ft];if(_t.cacheKey===w){X=_t,++X.usedTimes;break}}return X===void 0&&(X=new UC(s,w,U,c),g.push(X)),X}function G(U){if(--U.usedTimes===0){const w=g.indexOf(U);g[w]=g[g.length-1],g.pop(),U.destroy()}}function P(U){p.remove(U)}function q(){p.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:N,acquireProgram:Y,releaseProgram:G,releaseShaderCache:P,programs:g,dispose:q}}function BC(){let s=new WeakMap;function e(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function i(c){s.delete(c)}function r(c,h,d){s.get(c)[h]=d}function l(){s=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function IC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ry(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wy(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(m,_,M,E,T,S){let x=s[e];return x===void 0?(x={id:m.id,object:m,geometry:_,material:M,groupOrder:E,renderOrder:m.renderOrder,z:T,group:S},s[e]=x):(x.id=m.id,x.object=m,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=m.renderOrder,x.z=T,x.group=S),e++,x}function d(m,_,M,E,T,S){const x=h(m,_,M,E,T,S);M.transmission>0?r.push(x):M.transparent===!0?l.push(x):i.push(x)}function p(m,_,M,E,T,S){const x=h(m,_,M,E,T,S);M.transmission>0?r.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function v(m,_){i.length>1&&i.sort(m||IC),r.length>1&&r.sort(_||Ry),l.length>1&&l.sort(_||Ry)}function g(){for(let m=e,_=s.length;m<_;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:v}}function FC(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new wy,s.set(r,[h])):l>=c.length?(h=new wy,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function HC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new W,color:new Ce};break;case"SpotLight":i={position:new W,direction:new W,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=i,i}}}function GC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let VC=0;function XC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kC(s){const e=new HC,i=GC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)r.probe.push(new W);const l=new W,c=new je,h=new je;function d(v){let g=0,m=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,E=0,T=0,S=0,x=0,L=0,R=0,N=0,Y=0,G=0,P=0;v.sort(XC);for(let U=0,w=v.length;U<w;U++){const X=v[U],ft=X.color,ct=X.intensity,_t=X.distance,ht=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)g+=ft.r*ct,m+=ft.g*ct,_+=ft.b*ct;else if(X.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(X.sh.coefficients[Z],ct);P++}else if(X.isDirectionalLight){const Z=e.get(X);if(Z.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const rt=X.shadow,tt=i.get(X);tt.shadowBias=rt.bias,tt.shadowNormalBias=rt.normalBias,tt.shadowRadius=rt.radius,tt.shadowMapSize=rt.mapSize,r.directionalShadow[M]=tt,r.directionalShadowMap[M]=ht,r.directionalShadowMatrix[M]=X.shadow.matrix,L++}r.directional[M]=Z,M++}else if(X.isSpotLight){const Z=e.get(X);Z.position.setFromMatrixPosition(X.matrixWorld),Z.color.copy(ft).multiplyScalar(ct),Z.distance=_t,Z.coneCos=Math.cos(X.angle),Z.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),Z.decay=X.decay,r.spot[T]=Z;const rt=X.shadow;if(X.map&&(r.spotLightMap[Y]=X.map,Y++,rt.updateMatrices(X),X.castShadow&&G++),r.spotLightMatrix[T]=rt.matrix,X.castShadow){const tt=i.get(X);tt.shadowBias=rt.bias,tt.shadowNormalBias=rt.normalBias,tt.shadowRadius=rt.radius,tt.shadowMapSize=rt.mapSize,r.spotShadow[T]=tt,r.spotShadowMap[T]=ht,N++}T++}else if(X.isRectAreaLight){const Z=e.get(X);Z.color.copy(ft).multiplyScalar(ct),Z.halfWidth.set(X.width*.5,0,0),Z.halfHeight.set(0,X.height*.5,0),r.rectArea[S]=Z,S++}else if(X.isPointLight){const Z=e.get(X);if(Z.color.copy(X.color).multiplyScalar(X.intensity),Z.distance=X.distance,Z.decay=X.decay,X.castShadow){const rt=X.shadow,tt=i.get(X);tt.shadowBias=rt.bias,tt.shadowNormalBias=rt.normalBias,tt.shadowRadius=rt.radius,tt.shadowMapSize=rt.mapSize,tt.shadowCameraNear=rt.camera.near,tt.shadowCameraFar=rt.camera.far,r.pointShadow[E]=tt,r.pointShadowMap[E]=ht,r.pointShadowMatrix[E]=X.shadow.matrix,R++}r.point[E]=Z,E++}else if(X.isHemisphereLight){const Z=e.get(X);Z.skyColor.copy(X.color).multiplyScalar(ct),Z.groundColor.copy(X.groundColor).multiplyScalar(ct),r.hemi[x]=Z,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ft.LTC_FLOAT_1,r.rectAreaLTC2=Ft.LTC_FLOAT_2):(r.rectAreaLTC1=Ft.LTC_HALF_1,r.rectAreaLTC2=Ft.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=m,r.ambient[2]=_;const q=r.hash;(q.directionalLength!==M||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==x||q.numDirectionalShadows!==L||q.numPointShadows!==R||q.numSpotShadows!==N||q.numSpotMaps!==Y||q.numLightProbes!==P)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=S,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=N+Y-G,r.spotLightMap.length=Y,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=P,q.directionalLength=M,q.pointLength=E,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=x,q.numDirectionalShadows=L,q.numPointShadows=R,q.numSpotShadows=N,q.numSpotMaps=Y,q.numLightProbes=P,r.version=VC++)}function p(v,g){let m=0,_=0,M=0,E=0,T=0;const S=g.matrixWorldInverse;for(let x=0,L=v.length;x<L;x++){const R=v[x];if(R.isDirectionalLight){const N=r.directional[m];N.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),m++}else if(R.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(R.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),h.identity(),c.copy(R.matrixWorld),c.premultiply(S),h.extractRotation(c),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(R.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),_++}else if(R.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(S),T++}}}return{setup:d,setupView:p,state:r}}function Dy(s){const e=new kC(s),i=[],r=[];function l(g){v.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:v,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function qC(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Dy(s),e.set(l,[d])):c>=h.length?(d=new Dy(s),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class YC extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WC extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KC(s,e,i){let r=new Fp;const l=new te,c=new te,h=new Je,d=new YC({depthPacking:R1}),p=new WC,v={},g=i.maxTextureSize,m={[hr]:Wn,[Wn]:hr,[ri]:ri},_=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:jC,fragmentShader:ZC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Yn(E,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let x=this.type;this.render=function(G,P,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const U=s.getRenderTarget(),w=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),ft=s.state;ft.setBlending(cr),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const ct=x!==Ta&&this.type===Ta,_t=x===Ta&&this.type!==Ta;for(let ht=0,Z=G.length;ht<Z;ht++){const rt=G[ht],tt=rt.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;l.copy(tt.mapSize);const At=tt.getFrameExtents();if(l.multiply(At),c.copy(tt.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/At.x),l.x=c.x*At.x,tt.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/At.y),l.y=c.y*At.y,tt.mapSize.y=c.y)),tt.map===null||ct===!0||_t===!0){const z=this.type!==Ta?{minFilter:Ei,magFilter:Ei}:{};tt.map!==null&&tt.map.dispose(),tt.map=new $r(l.x,l.y,z),tt.map.texture.name=rt.name+".shadowMap",tt.camera.updateProjectionMatrix()}s.setRenderTarget(tt.map),s.clear();const H=tt.getViewportCount();for(let z=0;z<H;z++){const Tt=tt.getViewport(z);h.set(c.x*Tt.x,c.y*Tt.y,c.x*Tt.z,c.y*Tt.w),ft.viewport(h),tt.updateMatrices(rt,z),r=tt.getFrustum(),N(P,q,tt.camera,rt,this.type)}tt.isPointLightShadow!==!0&&this.type===Ta&&L(tt,q),tt.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(U,w,X)};function L(G,P){const q=e.update(T);_.defines.VSM_SAMPLES!==G.blurSamples&&(_.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new $r(l.x,l.y)),_.uniforms.shadow_pass.value=G.map.texture,_.uniforms.resolution.value=G.mapSize,_.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(P,null,q,_,T,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(P,null,q,M,T,null)}function R(G,P,q,U){let w=null;const X=q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(X!==void 0)w=X;else if(w=q.isPointLight===!0?p:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ft=w.uuid,ct=P.uuid;let _t=v[ft];_t===void 0&&(_t={},v[ft]=_t);let ht=_t[ct];ht===void 0&&(ht=w.clone(),_t[ct]=ht,P.addEventListener("dispose",Y)),w=ht}if(w.visible=P.visible,w.wireframe=P.wireframe,U===Ta?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:m[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ft=s.properties.get(w);ft.light=q}return w}function N(G,P,q,U,w){if(G.visible===!1)return;if(G.layers.test(P.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===Ta)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,G.matrixWorld);const ct=e.update(G),_t=G.material;if(Array.isArray(_t)){const ht=ct.groups;for(let Z=0,rt=ht.length;Z<rt;Z++){const tt=ht[Z],At=_t[tt.materialIndex];if(At&&At.visible){const H=R(G,At,U,w);G.onBeforeShadow(s,G,P,q,ct,H,tt),s.renderBufferDirect(q,null,ct,H,G,tt),G.onAfterShadow(s,G,P,q,ct,H,tt)}}}else if(_t.visible){const ht=R(G,_t,U,w);G.onBeforeShadow(s,G,P,q,ct,ht,null),s.renderBufferDirect(q,null,ct,ht,G,null),G.onAfterShadow(s,G,P,q,ct,ht,null)}}const ft=G.children;for(let ct=0,_t=ft.length;ct<_t;ct++)N(ft[ct],P,q,U,w)}function Y(G){G.target.removeEventListener("dispose",Y);for(const q in v){const U=v[q],w=G.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}function QC(s){function e(){let F=!1;const Ct=new Je;let dt=null;const gt=new Je(0,0,0,0);return{setMask:function(vt){dt!==vt&&!F&&(s.colorMask(vt,vt,vt,vt),dt=vt)},setLocked:function(vt){F=vt},setClear:function(vt,Ht,le,ge,se){se===!0&&(vt*=ge,Ht*=ge,le*=ge),Ct.set(vt,Ht,le,ge),gt.equals(Ct)===!1&&(s.clearColor(vt,Ht,le,ge),gt.copy(Ct))},reset:function(){F=!1,dt=null,gt.set(-1,0,0,0)}}}function i(){let F=!1,Ct=null,dt=null,gt=null;return{setTest:function(vt){vt?nt(s.DEPTH_TEST):$(s.DEPTH_TEST)},setMask:function(vt){Ct!==vt&&!F&&(s.depthMask(vt),Ct=vt)},setFunc:function(vt){if(dt!==vt){switch(vt){case t1:s.depthFunc(s.NEVER);break;case e1:s.depthFunc(s.ALWAYS);break;case n1:s.depthFunc(s.LESS);break;case Ic:s.depthFunc(s.LEQUAL);break;case i1:s.depthFunc(s.EQUAL);break;case a1:s.depthFunc(s.GEQUAL);break;case r1:s.depthFunc(s.GREATER);break;case s1:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=vt}},setLocked:function(vt){F=vt},setClear:function(vt){gt!==vt&&(s.clearDepth(vt),gt=vt)},reset:function(){F=!1,Ct=null,dt=null,gt=null}}}function r(){let F=!1,Ct=null,dt=null,gt=null,vt=null,Ht=null,le=null,ge=null,se=null;return{setTest:function(ce){F||(ce?nt(s.STENCIL_TEST):$(s.STENCIL_TEST))},setMask:function(ce){Ct!==ce&&!F&&(s.stencilMask(ce),Ct=ce)},setFunc:function(ce,Ue,Re){(dt!==ce||gt!==Ue||vt!==Re)&&(s.stencilFunc(ce,Ue,Re),dt=ce,gt=Ue,vt=Re)},setOp:function(ce,Ue,Re){(Ht!==ce||le!==Ue||ge!==Re)&&(s.stencilOp(ce,Ue,Re),Ht=ce,le=Ue,ge=Re)},setLocked:function(ce){F=ce},setClear:function(ce){se!==ce&&(s.clearStencil(ce),se=ce)},reset:function(){F=!1,Ct=null,dt=null,gt=null,vt=null,Ht=null,le=null,ge=null,se=null}}}const l=new e,c=new i,h=new r,d=new WeakMap,p=new WeakMap;let v={},g={},m=new WeakMap,_=[],M=null,E=!1,T=null,S=null,x=null,L=null,R=null,N=null,Y=null,G=new Ce(0,0,0),P=0,q=!1,U=null,w=null,X=null,ft=null,ct=null;const _t=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ht=!1,Z=0;const rt=s.getParameter(s.VERSION);rt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(rt)[1]),ht=Z>=1):rt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),ht=Z>=2);let tt=null,At={};const H=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),Tt=new Je().fromArray(H),Nt=new Je().fromArray(z);function A(F,Ct,dt,gt){const vt=new Uint8Array(4),Ht=s.createTexture();s.bindTexture(F,Ht),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<dt;le++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(Ct+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return Ht}const V={};V[s.TEXTURE_2D]=A(s.TEXTURE_2D,s.TEXTURE_2D,1),V[s.TEXTURE_CUBE_MAP]=A(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[s.TEXTURE_2D_ARRAY]=A(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),V[s.TEXTURE_3D]=A(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),nt(s.DEPTH_TEST),c.setFunc(Ic),Gt(!1),Jt(f_),nt(s.CULL_FACE),kt(cr);function nt(F){v[F]!==!0&&(s.enable(F),v[F]=!0)}function $(F){v[F]!==!1&&(s.disable(F),v[F]=!1)}function St(F,Ct){return g[F]!==Ct?(s.bindFramebuffer(F,Ct),g[F]=Ct,F===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ct),F===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function bt(F,Ct){let dt=_,gt=!1;if(F){dt=m.get(Ct),dt===void 0&&(dt=[],m.set(Ct,dt));const vt=F.textures;if(dt.length!==vt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Ht=0,le=vt.length;Ht<le;Ht++)dt[Ht]=s.COLOR_ATTACHMENT0+Ht;dt.length=vt.length,gt=!0}}else dt[0]!==s.BACK&&(dt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(dt)}function Dt(F){return M!==F?(s.useProgram(F),M=F,!0):!1}const O={[Wr]:s.FUNC_ADD,[BE]:s.FUNC_SUBTRACT,[IE]:s.FUNC_REVERSE_SUBTRACT};O[FE]=s.MIN,O[HE]=s.MAX;const Mt={[GE]:s.ZERO,[VE]:s.ONE,[XE]:s.SRC_COLOR,[yp]:s.SRC_ALPHA,[ZE]:s.SRC_ALPHA_SATURATE,[WE]:s.DST_COLOR,[qE]:s.DST_ALPHA,[kE]:s.ONE_MINUS_SRC_COLOR,[Sp]:s.ONE_MINUS_SRC_ALPHA,[jE]:s.ONE_MINUS_DST_COLOR,[YE]:s.ONE_MINUS_DST_ALPHA,[KE]:s.CONSTANT_COLOR,[QE]:s.ONE_MINUS_CONSTANT_COLOR,[JE]:s.CONSTANT_ALPHA,[$E]:s.ONE_MINUS_CONSTANT_ALPHA};function kt(F,Ct,dt,gt,vt,Ht,le,ge,se,ce){if(F===cr){E===!0&&($(s.BLEND),E=!1);return}if(E===!1&&(nt(s.BLEND),E=!0),F!==zE){if(F!==T||ce!==q){if((S!==Wr||R!==Wr)&&(s.blendEquation(s.FUNC_ADD),S=Wr,R=Wr),ce)switch(F){case co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _p:s.blendFunc(s.ONE,s.ONE);break;case h_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _p:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case h_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,L=null,N=null,Y=null,G.set(0,0,0),P=0,T=F,q=ce}return}vt=vt||Ct,Ht=Ht||dt,le=le||gt,(Ct!==S||vt!==R)&&(s.blendEquationSeparate(O[Ct],O[vt]),S=Ct,R=vt),(dt!==x||gt!==L||Ht!==N||le!==Y)&&(s.blendFuncSeparate(Mt[dt],Mt[gt],Mt[Ht],Mt[le]),x=dt,L=gt,N=Ht,Y=le),(ge.equals(G)===!1||se!==P)&&(s.blendColor(ge.r,ge.g,ge.b,se),G.copy(ge),P=se),T=F,q=!1}function jt(F,Ct){F.side===ri?$(s.CULL_FACE):nt(s.CULL_FACE);let dt=F.side===Wn;Ct&&(dt=!dt),Gt(dt),F.blending===co&&F.transparent===!1?kt(cr):kt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),c.setFunc(F.depthFunc),c.setTest(F.depthTest),c.setMask(F.depthWrite),l.setMask(F.colorWrite);const gt=F.stencilWrite;h.setTest(gt),gt&&(h.setMask(F.stencilWriteMask),h.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),h.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):$(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(F){U!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),U=F)}function Jt(F){F!==LE?(nt(s.CULL_FACE),F!==w&&(F===f_?s.cullFace(s.BACK):F===OE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$(s.CULL_FACE),w=F}function Vt(F){F!==X&&(ht&&s.lineWidth(F),X=F)}function Lt(F,Ct,dt){F?(nt(s.POLYGON_OFFSET_FILL),(ft!==Ct||ct!==dt)&&(s.polygonOffset(Ct,dt),ft=Ct,ct=dt)):$(s.POLYGON_OFFSET_FILL)}function de(F){F?nt(s.SCISSOR_TEST):$(s.SCISSOR_TEST)}function B(F){F===void 0&&(F=s.TEXTURE0+_t-1),tt!==F&&(s.activeTexture(F),tt=F)}function C(F,Ct,dt){dt===void 0&&(tt===null?dt=s.TEXTURE0+_t-1:dt=tt);let gt=At[dt];gt===void 0&&(gt={type:void 0,texture:void 0},At[dt]=gt),(gt.type!==F||gt.texture!==Ct)&&(tt!==dt&&(s.activeTexture(dt),tt=dt),s.bindTexture(F,Ct||V[F]),gt.type=F,gt.texture=Ct)}function ut(){const F=At[tt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function yt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(F){Tt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Tt.copy(F))}function It(F){Nt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Nt.copy(F))}function Bt(F,Ct){let dt=p.get(Ct);dt===void 0&&(dt=new WeakMap,p.set(Ct,dt));let gt=dt.get(F);gt===void 0&&(gt=s.getUniformBlockIndex(Ct,F.name),dt.set(F,gt))}function Yt(F,Ct){const gt=p.get(Ct).get(F);d.get(Ct)!==gt&&(s.uniformBlockBinding(Ct,gt,F.__bindingPointIndex),d.set(Ct,gt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},tt=null,At={},g={},m=new WeakMap,_=[],M=null,E=!1,T=null,S=null,x=null,L=null,R=null,N=null,Y=null,G=new Ce(0,0,0),P=0,q=!1,U=null,w=null,X=null,ft=null,ct=null,Tt.set(0,0,s.canvas.width,s.canvas.height),Nt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:nt,disable:$,bindFramebuffer:St,drawBuffers:bt,useProgram:Dt,setBlending:kt,setMaterial:jt,setFlipSided:Gt,setCullFace:Jt,setLineWidth:Vt,setPolygonOffset:Lt,setScissorTest:de,activeTexture:B,bindTexture:C,unbindTexture:ut,compressedTexImage2D:yt,compressedTexImage3D:xt,texImage2D:qt,texImage3D:me,updateUBOMapping:Bt,uniformBlockBinding:Yt,texStorage2D:ie,texStorage3D:Rt,texSubImage2D:Et,texSubImage3D:Kt,compressedTexSubImage2D:Ot,compressedTexSubImage3D:Pt,scissor:ae,viewport:It,reset:pe}}function JC(s,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new te,g=new WeakMap;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,C){return M?new OffscreenCanvas(B,C):kc("canvas")}function T(B,C,ut){let yt=1;const xt=de(B);if((xt.width>ut||xt.height>ut)&&(yt=ut/Math.max(xt.width,xt.height)),yt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Et=Math.floor(yt*xt.width),Kt=Math.floor(yt*xt.height);m===void 0&&(m=E(Et,Kt));const Ot=C?E(Et,Kt):m;return Ot.width=Et,Ot.height=Kt,Ot.getContext("2d").drawImage(B,0,0,Et,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Et+"x"+Kt+")."),Ot}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),B;return B}function S(B){return B.generateMipmaps&&B.minFilter!==Ei&&B.minFilter!==zi}function x(B){s.generateMipmap(B)}function L(B,C,ut,yt,xt=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Et=C;if(C===s.RED&&(ut===s.FLOAT&&(Et=s.R32F),ut===s.HALF_FLOAT&&(Et=s.R16F),ut===s.UNSIGNED_BYTE&&(Et=s.R8)),C===s.RED_INTEGER&&(ut===s.UNSIGNED_BYTE&&(Et=s.R8UI),ut===s.UNSIGNED_SHORT&&(Et=s.R16UI),ut===s.UNSIGNED_INT&&(Et=s.R32UI),ut===s.BYTE&&(Et=s.R8I),ut===s.SHORT&&(Et=s.R16I),ut===s.INT&&(Et=s.R32I)),C===s.RG&&(ut===s.FLOAT&&(Et=s.RG32F),ut===s.HALF_FLOAT&&(Et=s.RG16F),ut===s.UNSIGNED_BYTE&&(Et=s.RG8)),C===s.RG_INTEGER&&(ut===s.UNSIGNED_BYTE&&(Et=s.RG8UI),ut===s.UNSIGNED_SHORT&&(Et=s.RG16UI),ut===s.UNSIGNED_INT&&(Et=s.RG32UI),ut===s.BYTE&&(Et=s.RG8I),ut===s.SHORT&&(Et=s.RG16I),ut===s.INT&&(Et=s.RG32I)),C===s.RGB&&ut===s.UNSIGNED_INT_5_9_9_9_REV&&(Et=s.RGB9_E5),C===s.RGBA){const Kt=xt?Hc:Xe.getTransfer(yt);ut===s.FLOAT&&(Et=s.RGBA32F),ut===s.HALF_FLOAT&&(Et=s.RGBA16F),ut===s.UNSIGNED_BYTE&&(Et=Kt===Ke?s.SRGB8_ALPHA8:s.RGBA8),ut===s.UNSIGNED_SHORT_4_4_4_4&&(Et=s.RGBA4),ut===s.UNSIGNED_SHORT_5_5_5_1&&(Et=s.RGB5_A1)}return(Et===s.R16F||Et===s.R32F||Et===s.RG16F||Et===s.RG32F||Et===s.RGBA16F||Et===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Et}function R(B,C){let ut;return B?C===null||C===vo||C===_o?ut=s.DEPTH24_STENCIL8:C===or?ut=s.DEPTH32F_STENCIL8:C===Fc&&(ut=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===vo||C===_o?ut=s.DEPTH_COMPONENT24:C===or?ut=s.DEPTH_COMPONENT32F:C===Fc&&(ut=s.DEPTH_COMPONENT16),ut}function N(B,C){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ei&&B.minFilter!==zi?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function Y(B){const C=B.target;C.removeEventListener("dispose",Y),P(C),C.isVideoTexture&&g.delete(C)}function G(B){const C=B.target;C.removeEventListener("dispose",G),U(C)}function P(B){const C=r.get(B);if(C.__webglInit===void 0)return;const ut=B.source,yt=_.get(ut);if(yt){const xt=yt[C.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&q(B),Object.keys(yt).length===0&&_.delete(ut)}r.remove(B)}function q(B){const C=r.get(B);s.deleteTexture(C.__webglTexture);const ut=B.source,yt=_.get(ut);delete yt[C.__cacheKey],h.memory.textures--}function U(B){const C=r.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(C.__webglFramebuffer[yt]))for(let xt=0;xt<C.__webglFramebuffer[yt].length;xt++)s.deleteFramebuffer(C.__webglFramebuffer[yt][xt]);else s.deleteFramebuffer(C.__webglFramebuffer[yt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[yt])}else{if(Array.isArray(C.__webglFramebuffer))for(let yt=0;yt<C.__webglFramebuffer.length;yt++)s.deleteFramebuffer(C.__webglFramebuffer[yt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let yt=0;yt<C.__webglColorRenderbuffer.length;yt++)C.__webglColorRenderbuffer[yt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[yt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ut=B.textures;for(let yt=0,xt=ut.length;yt<xt;yt++){const Et=r.get(ut[yt]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),h.memory.textures--),r.remove(ut[yt])}r.remove(B)}let w=0;function X(){w=0}function ft(){const B=w;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),w+=1,B}function ct(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.wrapR||0),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.colorSpace),C.join()}function _t(B,C){const ut=r.get(B);if(B.isVideoTexture&&Vt(B),B.isRenderTargetTexture===!1&&B.version>0&&ut.__version!==B.version){const yt=B.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Nt(ut,B,C);return}}i.bindTexture(s.TEXTURE_2D,ut.__webglTexture,s.TEXTURE0+C)}function ht(B,C){const ut=r.get(B);if(B.version>0&&ut.__version!==B.version){Nt(ut,B,C);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ut.__webglTexture,s.TEXTURE0+C)}function Z(B,C){const ut=r.get(B);if(B.version>0&&ut.__version!==B.version){Nt(ut,B,C);return}i.bindTexture(s.TEXTURE_3D,ut.__webglTexture,s.TEXTURE0+C)}function rt(B,C){const ut=r.get(B);if(B.version>0&&ut.__version!==B.version){A(ut,B,C);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture,s.TEXTURE0+C)}const tt={[Ep]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Tp]:s.MIRRORED_REPEAT},At={[Ei]:s.NEAREST,[g1]:s.NEAREST_MIPMAP_NEAREST,[ic]:s.NEAREST_MIPMAP_LINEAR,[zi]:s.LINEAR,[Ld]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},H={[N1]:s.NEVER,[B1]:s.ALWAYS,[U1]:s.LESS,[rS]:s.LEQUAL,[L1]:s.EQUAL,[z1]:s.GEQUAL,[O1]:s.GREATER,[P1]:s.NOTEQUAL};function z(B,C){if(C.type===or&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===zi||C.magFilter===Ld||C.magFilter===ic||C.magFilter===Qr||C.minFilter===zi||C.minFilter===Ld||C.minFilter===ic||C.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,tt[C.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,tt[C.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,tt[C.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,At[C.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,At[C.minFilter]),C.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,H[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ei||C.minFilter!==ic&&C.minFilter!==Qr||C.type===or&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const ut=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function Tt(B,C){let ut=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",Y));const yt=C.source;let xt=_.get(yt);xt===void 0&&(xt={},_.set(yt,xt));const Et=ct(C);if(Et!==B.__cacheKey){xt[Et]===void 0&&(xt[Et]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,ut=!0),xt[Et].usedTimes++;const Kt=xt[B.__cacheKey];Kt!==void 0&&(xt[B.__cacheKey].usedTimes--,Kt.usedTimes===0&&q(C)),B.__cacheKey=Et,B.__webglTexture=xt[Et].texture}return ut}function Nt(B,C,ut){let yt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(yt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(yt=s.TEXTURE_3D);const xt=Tt(B,C),Et=C.source;i.bindTexture(yt,B.__webglTexture,s.TEXTURE0+ut);const Kt=r.get(Et);if(Et.version!==Kt.__version||xt===!0){i.activeTexture(s.TEXTURE0+ut);const Ot=Xe.getPrimaries(Xe.workingColorSpace),Pt=C.colorSpace===sr?null:Xe.getPrimaries(C.colorSpace),ie=C.colorSpace===sr||Ot===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Rt=T(C.image,!1,l.maxTextureSize);Rt=Lt(C,Rt);const qt=c.convert(C.format,C.colorSpace),me=c.convert(C.type);let ae=L(C.internalFormat,qt,me,C.colorSpace,C.isVideoTexture);z(yt,C);let It;const Bt=C.mipmaps,Yt=C.isVideoTexture!==!0,pe=Kt.__version===void 0||xt===!0,F=Et.dataReady,Ct=N(C,Rt);if(C.isDepthTexture)ae=R(C.format===yo,C.type),pe&&(Yt?i.texStorage2D(s.TEXTURE_2D,1,ae,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,ae,Rt.width,Rt.height,0,qt,me,null));else if(C.isDataTexture)if(Bt.length>0){Yt&&pe&&i.texStorage2D(s.TEXTURE_2D,Ct,ae,Bt[0].width,Bt[0].height);for(let dt=0,gt=Bt.length;dt<gt;dt++)It=Bt[dt],Yt?F&&i.texSubImage2D(s.TEXTURE_2D,dt,0,0,It.width,It.height,qt,me,It.data):i.texImage2D(s.TEXTURE_2D,dt,ae,It.width,It.height,0,qt,me,It.data);C.generateMipmaps=!1}else Yt?(pe&&i.texStorage2D(s.TEXTURE_2D,Ct,ae,Rt.width,Rt.height),F&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,qt,me,Rt.data)):i.texImage2D(s.TEXTURE_2D,0,ae,Rt.width,Rt.height,0,qt,me,Rt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Yt&&pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,ae,Bt[0].width,Bt[0].height,Rt.depth);for(let dt=0,gt=Bt.length;dt<gt;dt++)if(It=Bt[dt],C.format!==$i)if(qt!==null)if(Yt){if(F)if(C.layerUpdates.size>0){for(const vt of C.layerUpdates){const Ht=It.width*It.height;i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,vt,It.width,It.height,1,qt,It.data.slice(Ht*vt,Ht*(vt+1)),0,0)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,It.width,It.height,Rt.depth,qt,It.data,0,0)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,dt,ae,It.width,It.height,Rt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?F&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,It.width,It.height,Rt.depth,qt,me,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,dt,ae,It.width,It.height,Rt.depth,0,qt,me,It.data)}else{Yt&&pe&&i.texStorage2D(s.TEXTURE_2D,Ct,ae,Bt[0].width,Bt[0].height);for(let dt=0,gt=Bt.length;dt<gt;dt++)It=Bt[dt],C.format!==$i?qt!==null?Yt?F&&i.compressedTexSubImage2D(s.TEXTURE_2D,dt,0,0,It.width,It.height,qt,It.data):i.compressedTexImage2D(s.TEXTURE_2D,dt,ae,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?F&&i.texSubImage2D(s.TEXTURE_2D,dt,0,0,It.width,It.height,qt,me,It.data):i.texImage2D(s.TEXTURE_2D,dt,ae,It.width,It.height,0,qt,me,It.data)}else if(C.isDataArrayTexture)if(Yt){if(pe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,ae,Rt.width,Rt.height,Rt.depth),F)if(C.layerUpdates.size>0){let dt;switch(me){case s.UNSIGNED_BYTE:switch(qt){case s.ALPHA:dt=1;break;case s.LUMINANCE:dt=1;break;case s.LUMINANCE_ALPHA:dt=2;break;case s.RGB:dt=3;break;case s.RGBA:dt=4;break;default:throw new Error(`Unknown texel size for format ${qt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:dt=1;break;default:throw new Error(`Unknown texel size for type ${me}.`)}const gt=Rt.width*Rt.height*dt;for(const vt of C.layerUpdates)i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,Rt.width,Rt.height,1,qt,me,Rt.data.slice(gt*vt,gt*(vt+1)));C.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,qt,me,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,ae,Rt.width,Rt.height,Rt.depth,0,qt,me,Rt.data);else if(C.isData3DTexture)Yt?(pe&&i.texStorage3D(s.TEXTURE_3D,Ct,ae,Rt.width,Rt.height,Rt.depth),F&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,qt,me,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,ae,Rt.width,Rt.height,Rt.depth,0,qt,me,Rt.data);else if(C.isFramebufferTexture){if(pe)if(Yt)i.texStorage2D(s.TEXTURE_2D,Ct,ae,Rt.width,Rt.height);else{let dt=Rt.width,gt=Rt.height;for(let vt=0;vt<Ct;vt++)i.texImage2D(s.TEXTURE_2D,vt,ae,dt,gt,0,qt,me,null),dt>>=1,gt>>=1}}else if(Bt.length>0){if(Yt&&pe){const dt=de(Bt[0]);i.texStorage2D(s.TEXTURE_2D,Ct,ae,dt.width,dt.height)}for(let dt=0,gt=Bt.length;dt<gt;dt++)It=Bt[dt],Yt?F&&i.texSubImage2D(s.TEXTURE_2D,dt,0,0,qt,me,It):i.texImage2D(s.TEXTURE_2D,dt,ae,qt,me,It);C.generateMipmaps=!1}else if(Yt){if(pe){const dt=de(Rt);i.texStorage2D(s.TEXTURE_2D,Ct,ae,dt.width,dt.height)}F&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,me,Rt)}else i.texImage2D(s.TEXTURE_2D,0,ae,qt,me,Rt);S(C)&&x(yt),Kt.__version=Et.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function A(B,C,ut){if(C.image.length!==6)return;const yt=Tt(B,C),xt=C.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+ut);const Et=r.get(xt);if(xt.version!==Et.__version||yt===!0){i.activeTexture(s.TEXTURE0+ut);const Kt=Xe.getPrimaries(Xe.workingColorSpace),Ot=C.colorSpace===sr?null:Xe.getPrimaries(C.colorSpace),Pt=C.colorSpace===sr||Kt===Ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const ie=C.isCompressedTexture||C.image[0].isCompressedTexture,Rt=C.image[0]&&C.image[0].isDataTexture,qt=[];for(let gt=0;gt<6;gt++)!ie&&!Rt?qt[gt]=T(C.image[gt],!0,l.maxCubemapSize):qt[gt]=Rt?C.image[gt].image:C.image[gt],qt[gt]=Lt(C,qt[gt]);const me=qt[0],ae=c.convert(C.format,C.colorSpace),It=c.convert(C.type),Bt=L(C.internalFormat,ae,It,C.colorSpace),Yt=C.isVideoTexture!==!0,pe=Et.__version===void 0||yt===!0,F=xt.dataReady;let Ct=N(C,me);z(s.TEXTURE_CUBE_MAP,C);let dt;if(ie){Yt&&pe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Bt,me.width,me.height);for(let gt=0;gt<6;gt++){dt=qt[gt].mipmaps;for(let vt=0;vt<dt.length;vt++){const Ht=dt[vt];C.format!==$i?ae!==null?Yt?F&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt,0,0,Ht.width,Ht.height,ae,Ht.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt,Bt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?F&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt,0,0,Ht.width,Ht.height,ae,It,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt,Bt,Ht.width,Ht.height,0,ae,It,Ht.data)}}}else{if(dt=C.mipmaps,Yt&&pe){dt.length>0&&Ct++;const gt=de(qt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,Bt,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){Yt?F&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,qt[gt].width,qt[gt].height,ae,It,qt[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Bt,qt[gt].width,qt[gt].height,0,ae,It,qt[gt].data);for(let vt=0;vt<dt.length;vt++){const le=dt[vt].image[gt].image;Yt?F&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt+1,0,0,le.width,le.height,ae,It,le.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt+1,Bt,le.width,le.height,0,ae,It,le.data)}}else{Yt?F&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ae,It,qt[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Bt,ae,It,qt[gt]);for(let vt=0;vt<dt.length;vt++){const Ht=dt[vt];Yt?F&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt+1,0,0,ae,It,Ht.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt+1,Bt,ae,It,Ht.image[gt])}}}S(C)&&x(s.TEXTURE_CUBE_MAP),Et.__version=xt.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function V(B,C,ut,yt,xt,Et){const Kt=c.convert(ut.format,ut.colorSpace),Ot=c.convert(ut.type),Pt=L(ut.internalFormat,Kt,Ot,ut.colorSpace);if(!r.get(C).__hasExternalTextures){const Rt=Math.max(1,C.width>>Et),qt=Math.max(1,C.height>>Et);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?i.texImage3D(xt,Et,Pt,Rt,qt,C.depth,0,Kt,Ot,null):i.texImage2D(xt,Et,Pt,Rt,qt,0,Kt,Ot,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),Jt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,xt,r.get(ut).__webglTexture,0,Gt(C)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,yt,xt,r.get(ut).__webglTexture,Et),i.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(B,C,ut){if(s.bindRenderbuffer(s.RENDERBUFFER,B),C.depthBuffer){const yt=C.depthTexture,xt=yt&&yt.isDepthTexture?yt.type:null,Et=R(C.stencilBuffer,xt),Kt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=Gt(C);Jt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot,Et,C.width,C.height):ut?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,Et,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Et,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,B)}else{const yt=C.textures;for(let xt=0;xt<yt.length;xt++){const Et=yt[xt],Kt=c.convert(Et.format,Et.colorSpace),Ot=c.convert(Et.type),Pt=L(Et.internalFormat,Kt,Ot,Et.colorSpace),ie=Gt(C);ut&&Jt(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Pt,C.width,C.height):Jt(C)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,Pt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $(B,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),_t(C.depthTexture,0);const yt=r.get(C.depthTexture).__webglTexture,xt=Gt(C);if(C.depthTexture.format===fo)Jt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(C.depthTexture.format===yo)Jt(C)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function St(B){const C=r.get(B),ut=B.isWebGLCubeRenderTarget===!0;if(B.depthTexture&&!C.__autoAllocateDepthBuffer){if(ut)throw new Error("target.depthTexture not supported in Cube render targets");$(C.__webglFramebuffer,B)}else if(ut){C.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)i.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[yt]),C.__webglDepthbuffer[yt]=s.createRenderbuffer(),nt(C.__webglDepthbuffer[yt],B,!1)}else i.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),nt(C.__webglDepthbuffer,B,!1);i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(B,C,ut){const yt=r.get(B);C!==void 0&&V(yt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ut!==void 0&&St(B)}function Dt(B){const C=B.texture,ut=r.get(B),yt=r.get(C);B.addEventListener("dispose",G);const xt=B.textures,Et=B.isWebGLCubeRenderTarget===!0,Kt=xt.length>1;if(Kt||(yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture()),yt.__version=C.version,h.memory.textures++),Et){ut.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(C.mipmaps&&C.mipmaps.length>0){ut.__webglFramebuffer[Ot]=[];for(let Pt=0;Pt<C.mipmaps.length;Pt++)ut.__webglFramebuffer[Ot][Pt]=s.createFramebuffer()}else ut.__webglFramebuffer[Ot]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ut.__webglFramebuffer=[];for(let Ot=0;Ot<C.mipmaps.length;Ot++)ut.__webglFramebuffer[Ot]=s.createFramebuffer()}else ut.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Ot=0,Pt=xt.length;Ot<Pt;Ot++){const ie=r.get(xt[Ot]);ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture(),h.memory.textures++)}if(B.samples>0&&Jt(B)===!1){ut.__webglMultisampledFramebuffer=s.createFramebuffer(),ut.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ut.__webglMultisampledFramebuffer);for(let Ot=0;Ot<xt.length;Ot++){const Pt=xt[Ot];ut.__webglColorRenderbuffer[Ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ut.__webglColorRenderbuffer[Ot]);const ie=c.convert(Pt.format,Pt.colorSpace),Rt=c.convert(Pt.type),qt=L(Pt.internalFormat,ie,Rt,Pt.colorSpace,B.isXRRenderTarget===!0),me=Gt(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,qt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ot,s.RENDERBUFFER,ut.__webglColorRenderbuffer[Ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(ut.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(ut.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Et){i.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),z(s.TEXTURE_CUBE_MAP,C);for(let Ot=0;Ot<6;Ot++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)V(ut.__webglFramebuffer[Ot][Pt],B,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Pt);else V(ut.__webglFramebuffer[Ot],B,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);S(C)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Ot=0,Pt=xt.length;Ot<Pt;Ot++){const ie=xt[Ot],Rt=r.get(ie);i.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),z(s.TEXTURE_2D,ie),V(ut.__webglFramebuffer,B,ie,s.COLOR_ATTACHMENT0+Ot,s.TEXTURE_2D,0),S(ie)&&x(s.TEXTURE_2D)}i.unbindTexture()}else{let Ot=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ot=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,yt.__webglTexture),z(Ot,C),C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)V(ut.__webglFramebuffer[Pt],B,C,s.COLOR_ATTACHMENT0,Ot,Pt);else V(ut.__webglFramebuffer,B,C,s.COLOR_ATTACHMENT0,Ot,0);S(C)&&x(Ot),i.unbindTexture()}B.depthBuffer&&St(B)}function O(B){const C=B.textures;for(let ut=0,yt=C.length;ut<yt;ut++){const xt=C[ut];if(S(xt)){const Et=B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Kt=r.get(xt).__webglTexture;i.bindTexture(Et,Kt),x(Et),i.unbindTexture()}}}const Mt=[],kt=[];function jt(B){if(B.samples>0){if(Jt(B)===!1){const C=B.textures,ut=B.width,yt=B.height;let xt=s.COLOR_BUFFER_BIT;const Et=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=r.get(B),Ot=C.length>1;if(Ot)for(let Pt=0;Pt<C.length;Pt++)i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Pt=0;Pt<C.length;Pt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),Ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Pt]);const ie=r.get(C[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,ut,yt,0,0,ut,yt,xt,s.NEAREST),p===!0&&(Mt.length=0,kt.length=0,Mt.push(s.COLOR_ATTACHMENT0+Pt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Mt.push(Et),kt.push(Et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ot)for(let Pt=0;Pt<C.length;Pt++){i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Pt]);const ie=r.get(C[Pt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,ie,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const C=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Gt(B){return Math.min(l.maxSamples,B.samples)}function Jt(B){const C=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Vt(B){const C=h.render.frame;g.get(B)!==C&&(g.set(B,C),B.update())}function Lt(B,C){const ut=B.colorSpace,yt=B.format,xt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ut!==mr&&ut!==sr&&(Xe.getTransfer(ut)===Ke?(yt!==$i||xt!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ut)),C}function de(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(v.width=B.naturalWidth||B.width,v.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(v.width=B.displayWidth,v.height=B.displayHeight):(v.width=B.width,v.height=B.height),v}this.allocateTextureUnit=ft,this.resetTextureUnits=X,this.setTexture2D=_t,this.setTexture2DArray=ht,this.setTexture3D=Z,this.setTextureCube=rt,this.rebindTextures=bt,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=V,this.useMultisampledRTT=Jt}function $C(s,e){function i(r,l=sr){let c;const h=Xe.getTransfer(l);if(r===dr)return s.UNSIGNED_BYTE;if(r===tS)return s.UNSIGNED_SHORT_4_4_4_4;if(r===eS)return s.UNSIGNED_SHORT_5_5_5_1;if(r===y1)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===v1)return s.BYTE;if(r===_1)return s.SHORT;if(r===Fc)return s.UNSIGNED_SHORT;if(r===$y)return s.INT;if(r===vo)return s.UNSIGNED_INT;if(r===or)return s.FLOAT;if(r===jc)return s.HALF_FLOAT;if(r===S1)return s.ALPHA;if(r===x1)return s.RGB;if(r===$i)return s.RGBA;if(r===M1)return s.LUMINANCE;if(r===E1)return s.LUMINANCE_ALPHA;if(r===fo)return s.DEPTH_COMPONENT;if(r===yo)return s.DEPTH_STENCIL;if(r===T1)return s.RED;if(r===nS)return s.RED_INTEGER;if(r===b1)return s.RG;if(r===iS)return s.RG_INTEGER;if(r===aS)return s.RGBA_INTEGER;if(r===Od||r===Pd||r===zd||r===Bd)if(h===Ke)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Od)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Od)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pd)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zd)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bd)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===p_||r===m_||r===g_||r===v_)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===p_)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===m_)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===g_)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===v_)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===__||r===y_||r===S_)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===__||r===y_)return h===Ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===S_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===x_||r===M_||r===E_||r===T_||r===b_||r===A_||r===C_||r===R_||r===w_||r===D_||r===N_||r===U_||r===L_||r===O_)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===x_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===M_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===E_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===T_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===b_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===A_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===C_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===R_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===w_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===D_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===N_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===U_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===L_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===O_)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Id||r===P_||r===z_)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Id)return h===Ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===P_)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===z_)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===A1||r===B_||r===I_||r===F_)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(r===B_)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===I_)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===F_)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_o?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class tR extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ur extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eR={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,v=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(v&&e.hand){h=!0;for(const T of e.hand.values()){const S=i.getJointPose(T,r),x=this._getHandJoint(v,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=v.joints["index-finger-tip"],m=v.joints["thumb-tip"],_=g.position.distanceTo(m.position),M=.02,E=.005;v.inputState.pinching&&_>M+E?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!v.inputState.pinching&&_<=M-E&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(eR)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),v!==null&&(v.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ur;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const nR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new pr({vertexShader:nR,fragmentShader:iR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yn(new lr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class rR extends xo{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,v=null,g=null,m=null,_=null,M=null,E=null;const T=new aR,S=i.getContextAttributes();let x=null,L=null;const R=[],N=[],Y=new te;let G=null;const P=new ai;P.layers.enable(1),P.viewport=new Je;const q=new ai;q.layers.enable(2),q.viewport=new Je;const U=[P,q],w=new tR;w.layers.enable(1),w.layers.enable(2);let X=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let V=R[A];return V===void 0&&(V=new up,R[A]=V),V.getTargetRaySpace()},this.getControllerGrip=function(A){let V=R[A];return V===void 0&&(V=new up,R[A]=V),V.getGripSpace()},this.getHand=function(A){let V=R[A];return V===void 0&&(V=new up,R[A]=V),V.getHandSpace()};function ct(A){const V=N.indexOf(A.inputSource);if(V===-1)return;const nt=R[V];nt!==void 0&&(nt.update(A.inputSource,A.frame,v||h),nt.dispatchEvent({type:A.type,data:A.inputSource}))}function _t(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",_t),l.removeEventListener("inputsourceschange",ht);for(let A=0;A<R.length;A++){const V=N[A];V!==null&&(N[A]=null,R[A].disconnect(V))}X=null,ft=null,T.reset(),e.setRenderTarget(x),M=null,_=null,m=null,l=null,L=null,Nt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){c=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){d=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||h},this.setReferenceSpace=function(A){v=A},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(A){if(l=A,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",_t),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(Y),l.renderState.layers===void 0){const V={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,V),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new $r(M.framebufferWidth,M.framebufferHeight,{format:$i,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let V=null,nt=null,$=null;S.depth&&($=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,V=S.stencil?yo:fo,nt=S.stencil?_o:vo);const St={colorFormat:i.RGBA8,depthFormat:$,scaleFactor:c};m=new XRWebGLBinding(l,i),_=m.createProjectionLayer(St),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new $r(_.textureWidth,_.textureHeight,{format:$i,type:dr,depthTexture:new vS(_.textureWidth,_.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),v=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ht(A){for(let V=0;V<A.removed.length;V++){const nt=A.removed[V],$=N.indexOf(nt);$>=0&&(N[$]=null,R[$].disconnect(nt))}for(let V=0;V<A.added.length;V++){const nt=A.added[V];let $=N.indexOf(nt);if($===-1){for(let bt=0;bt<R.length;bt++)if(bt>=N.length){N.push(nt),$=bt;break}else if(N[bt]===null){N[bt]=nt,$=bt;break}if($===-1)break}const St=R[$];St&&St.connect(nt)}}const Z=new W,rt=new W;function tt(A,V,nt){Z.setFromMatrixPosition(V.matrixWorld),rt.setFromMatrixPosition(nt.matrixWorld);const $=Z.distanceTo(rt),St=V.projectionMatrix.elements,bt=nt.projectionMatrix.elements,Dt=St[14]/(St[10]-1),O=St[14]/(St[10]+1),Mt=(St[9]+1)/St[5],kt=(St[9]-1)/St[5],jt=(St[8]-1)/St[0],Gt=(bt[8]+1)/bt[0],Jt=Dt*jt,Vt=Dt*Gt,Lt=$/(-jt+Gt),de=Lt*-jt;V.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(de),A.translateZ(Lt),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const B=Dt+Lt,C=O+Lt,ut=Jt-de,yt=Vt+($-de),xt=Mt*O/C*B,Et=kt*O/C*B;A.projectionMatrix.makePerspective(ut,yt,xt,Et,B,C),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function At(A,V){V===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(V.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(l===null)return;T.texture!==null&&(A.near=T.depthNear,A.far=T.depthFar),w.near=q.near=P.near=A.near,w.far=q.far=P.far=A.far,(X!==w.near||ft!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),X=w.near,ft=w.far,P.near=X,P.far=ft,q.near=X,q.far=ft,P.updateProjectionMatrix(),q.updateProjectionMatrix(),A.updateProjectionMatrix());const V=A.parent,nt=w.cameras;At(w,V);for(let $=0;$<nt.length;$++)At(nt[$],V);nt.length===2?tt(w,P,q):w.projectionMatrix.copy(P.projectionMatrix),H(A,w,V)};function H(A,V,nt){nt===null?A.matrix.copy(V.matrixWorld):(A.matrix.copy(nt.matrixWorld),A.matrix.invert(),A.matrix.multiply(V.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(V.projectionMatrix),A.projectionMatrixInverse.copy(V.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=wl*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(A){p=A,_!==null&&(_.fixedFoveation=A),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=A)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(w)};let z=null;function Tt(A,V){if(g=V.getViewerPose(v||h),E=V,g!==null){const nt=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let $=!1;nt.length!==w.cameras.length&&(w.cameras.length=0,$=!0);for(let bt=0;bt<nt.length;bt++){const Dt=nt[bt];let O=null;if(M!==null)O=M.getViewport(Dt);else{const kt=m.getViewSubImage(_,Dt);O=kt.viewport,bt===0&&(e.setRenderTargetTextures(L,kt.colorTexture,_.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(L))}let Mt=U[bt];Mt===void 0&&(Mt=new ai,Mt.layers.enable(bt),Mt.viewport=new Je,U[bt]=Mt),Mt.matrix.fromArray(Dt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Dt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(O.x,O.y,O.width,O.height),bt===0&&(w.matrix.copy(Mt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),$===!0&&w.cameras.push(Mt)}const St=l.enabledFeatures;if(St&&St.includes("depth-sensing")){const bt=m.getDepthInformation(nt[0]);bt&&bt.isValid&&bt.texture&&T.init(e,bt,l.renderState)}}for(let nt=0;nt<R.length;nt++){const $=N[nt],St=R[nt];$!==null&&St!==void 0&&St.update($,V,v||h)}z&&z(A,V),V.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:V}),E=null}const Nt=new gS;Nt.setAnimationLoop(Tt),this.setAnimationLoop=function(A){z=A},this.dispose=function(){}}}const kr=new Aa,sR=new je;function oR(s,e){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,dS(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,L,R,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),m(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),_(S,x),x.isMeshPhysicalMaterial&&M(S,x,N)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),T(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(h(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,L,R):x.isSpriteMaterial?v(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Wn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Wn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const L=e.get(x),R=L.envMap,N=L.envMapRotation;R&&(S.envMap.value=R,kr.copy(N),kr.x*=-1,kr.y*=-1,kr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),S.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(kr)),S.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,L,R){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*L,S.scale.value=R*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,L){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const L=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function lR(s,e,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,R){const N=R.program;r.uniformBlockBinding(L,N)}function v(L,R){let N=l[L.id];N===void 0&&(E(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",S));const Y=R.program;r.updateUBOMapping(L,Y);const G=e.render.frame;c[L.id]!==G&&(_(L),c[L.id]=G)}function g(L){const R=m();L.__bindingPointIndex=R;const N=s.createBuffer(),Y=L.__size,G=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,Y,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,N),N}function m(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const R=l[L.id],N=L.uniforms,Y=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let G=0,P=N.length;G<P;G++){const q=Array.isArray(N[G])?N[G]:[N[G]];for(let U=0,w=q.length;U<w;U++){const X=q[U];if(M(X,G,U,Y)===!0){const ft=X.__offset,ct=Array.isArray(X.value)?X.value:[X.value];let _t=0;for(let ht=0;ht<ct.length;ht++){const Z=ct[ht],rt=T(Z);typeof Z=="number"||typeof Z=="boolean"?(X.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,ft+_t,X.__data)):Z.isMatrix3?(X.__data[0]=Z.elements[0],X.__data[1]=Z.elements[1],X.__data[2]=Z.elements[2],X.__data[3]=0,X.__data[4]=Z.elements[3],X.__data[5]=Z.elements[4],X.__data[6]=Z.elements[5],X.__data[7]=0,X.__data[8]=Z.elements[6],X.__data[9]=Z.elements[7],X.__data[10]=Z.elements[8],X.__data[11]=0):(Z.toArray(X.__data,_t),_t+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ft,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,R,N,Y){const G=L.value,P=R+"_"+N;if(Y[P]===void 0)return typeof G=="number"||typeof G=="boolean"?Y[P]=G:Y[P]=G.clone(),!0;{const q=Y[P];if(typeof G=="number"||typeof G=="boolean"){if(q!==G)return Y[P]=G,!0}else if(q.equals(G)===!1)return q.copy(G),!0}return!1}function E(L){const R=L.uniforms;let N=0;const Y=16;for(let P=0,q=R.length;P<q;P++){const U=Array.isArray(R[P])?R[P]:[R[P]];for(let w=0,X=U.length;w<X;w++){const ft=U[w],ct=Array.isArray(ft.value)?ft.value:[ft.value];for(let _t=0,ht=ct.length;_t<ht;_t++){const Z=ct[_t],rt=T(Z),tt=N%Y;tt!==0&&Y-tt<rt.boundary&&(N+=Y-tt),ft.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=N,N+=rt.storage}}}const G=N%Y;return G>0&&(N+=Y-G),L.__size=N,L.__cache={},this}function T(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function S(L){const R=L.target;R.removeEventListener("dispose",S);const N=h.indexOf(R.__bindingPointIndex);h.splice(N,1),s.deleteBuffer(l[R.id]),delete l[R.id],delete c[R.id]}function x(){for(const L in l)s.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:p,update:v,dispose:x}}class uR{constructor(e={}){const{canvas:i=tT(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:v=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=h;const M=new Uint32Array(4),E=new Int32Array(4);let T=null,S=null;const x=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mi,this.toneMapping=fr,this.toneMappingExposure=1;const R=this;let N=!1,Y=0,G=0,P=null,q=-1,U=null;const w=new Je,X=new Je;let ft=null;const ct=new Ce(0);let _t=0,ht=i.width,Z=i.height,rt=1,tt=null,At=null;const H=new Je(0,0,ht,Z),z=new Je(0,0,ht,Z);let Tt=!1;const Nt=new Fp;let A=!1,V=!1;const nt=new je,$=new W,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Dt(){return P===null?rt:1}let O=r;function Mt(D,Q){return i.getContext(D,Q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:v,powerPreference:g,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pp}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",dt,!1),i.addEventListener("webglcontextcreationerror",gt,!1),O===null){const Q="webgl2";if(O=Mt(Q,D),O===null)throw Mt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let kt,jt,Gt,Jt,Vt,Lt,de,B,C,ut,yt,xt,Et,Kt,Ot,Pt,ie,Rt,qt,me,ae,It,Bt,Yt;function pe(){kt=new v2(O),kt.init(),It=new $C(O,kt),jt=new c2(O,kt,e,It),Gt=new QC(O),Jt=new S2(O),Vt=new BC,Lt=new JC(O,kt,Gt,Vt,jt,It,Jt),de=new h2(R),B=new g2(R),C=new AT(O),Bt=new l2(O,C),ut=new _2(O,C,Jt,Bt),yt=new M2(O,ut,C,Jt),qt=new x2(O,jt,Lt),Pt=new f2(Vt),xt=new zC(R,de,B,kt,jt,Bt,Pt),Et=new oR(R,Vt),Kt=new FC,Ot=new qC(kt),Rt=new o2(R,de,B,Gt,yt,_,p),ie=new KC(R,yt,jt),Yt=new lR(O,Jt,jt,Gt),me=new u2(O,kt,Jt),ae=new y2(O,kt,Jt),Jt.programs=xt.programs,R.capabilities=jt,R.extensions=kt,R.properties=Vt,R.renderLists=Kt,R.shadowMap=ie,R.state=Gt,R.info=Jt}pe();const F=new rR(R,O);this.xr=F,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=kt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=kt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(D){D!==void 0&&(rt=D,this.setSize(ht,Z,!1))},this.getSize=function(D){return D.set(ht,Z)},this.setSize=function(D,Q,st=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=D,Z=Q,i.width=Math.floor(D*rt),i.height=Math.floor(Q*rt),st===!0&&(i.style.width=D+"px",i.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(ht*rt,Z*rt).floor()},this.setDrawingBufferSize=function(D,Q,st){ht=D,Z=Q,rt=st,i.width=Math.floor(D*st),i.height=Math.floor(Q*st),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(w)},this.getViewport=function(D){return D.copy(H)},this.setViewport=function(D,Q,st,lt){D.isVector4?H.set(D.x,D.y,D.z,D.w):H.set(D,Q,st,lt),Gt.viewport(w.copy(H).multiplyScalar(rt).round())},this.getScissor=function(D){return D.copy(z)},this.setScissor=function(D,Q,st,lt){D.isVector4?z.set(D.x,D.y,D.z,D.w):z.set(D,Q,st,lt),Gt.scissor(X.copy(z).multiplyScalar(rt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(D){Gt.setScissorTest(Tt=D)},this.setOpaqueSort=function(D){tt=D},this.setTransparentSort=function(D){At=D},this.getClearColor=function(D){return D.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(D=!0,Q=!0,st=!0){let lt=0;if(D){let it=!1;if(P!==null){const Ut=P.texture.format;it=Ut===aS||Ut===iS||Ut===nS}if(it){const Ut=P.texture.type,Xt=Ut===dr||Ut===vo||Ut===Fc||Ut===_o||Ut===tS||Ut===eS,Zt=Rt.getClearColor(),$t=Rt.getClearAlpha(),oe=Zt.r,fe=Zt.g,re=Zt.b;Xt?(M[0]=oe,M[1]=fe,M[2]=re,M[3]=$t,O.clearBufferuiv(O.COLOR,0,M)):(E[0]=oe,E[1]=fe,E[2]=re,E[3]=$t,O.clearBufferiv(O.COLOR,0,E))}else lt|=O.COLOR_BUFFER_BIT}Q&&(lt|=O.DEPTH_BUFFER_BIT),st&&(lt|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",dt,!1),i.removeEventListener("webglcontextcreationerror",gt,!1),Kt.dispose(),Ot.dispose(),Vt.dispose(),de.dispose(),B.dispose(),yt.dispose(),Bt.dispose(),Yt.dispose(),xt.dispose(),F.dispose(),F.removeEventListener("sessionstart",Ue),F.removeEventListener("sessionend",Re),sn.stop()};function Ct(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const D=Jt.autoReset,Q=ie.enabled,st=ie.autoUpdate,lt=ie.needsUpdate,it=ie.type;pe(),Jt.autoReset=D,ie.enabled=Q,ie.autoUpdate=st,ie.needsUpdate=lt,ie.type=it}function gt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function vt(D){const Q=D.target;Q.removeEventListener("dispose",vt),Ht(Q)}function Ht(D){le(D),Vt.remove(D)}function le(D){const Q=Vt.get(D).programs;Q!==void 0&&(Q.forEach(function(st){xt.releaseProgram(st)}),D.isShaderMaterial&&xt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,st,lt,it,Ut){Q===null&&(Q=St);const Xt=it.isMesh&&it.matrixWorld.determinant()<0,Zt=ia(D,Q,st,lt,it);Gt.setMaterial(lt,Xt);let $t=st.index,oe=1;if(lt.wireframe===!0){if($t=ut.getWireframeAttribute(st),$t===void 0)return;oe=2}const fe=st.drawRange,re=st.attributes.position;let ye=fe.start*oe,Se=(fe.start+fe.count)*oe;Ut!==null&&(ye=Math.max(ye,Ut.start*oe),Se=Math.min(Se,(Ut.start+Ut.count)*oe)),$t!==null?(ye=Math.max(ye,0),Se=Math.min(Se,$t.count)):re!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,re.count));const Te=Se-ye;if(Te<0||Te===1/0)return;Bt.setup(it,lt,Zt,st,$t);let on,Le=me;if($t!==null&&(on=C.get($t),Le=ae,Le.setIndex(on)),it.isMesh)lt.wireframe===!0?(Gt.setLineWidth(lt.wireframeLinewidth*Dt()),Le.setMode(O.LINES)):Le.setMode(O.TRIANGLES);else if(it.isLine){let ne=lt.linewidth;ne===void 0&&(ne=1),Gt.setLineWidth(ne*Dt()),it.isLineSegments?Le.setMode(O.LINES):it.isLineLoop?Le.setMode(O.LINE_LOOP):Le.setMode(O.LINE_STRIP)}else it.isPoints?Le.setMode(O.POINTS):it.isSprite&&Le.setMode(O.TRIANGLES);if(it.isBatchedMesh)it._multiDrawInstances!==null?Le.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances):Le.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else if(it.isInstancedMesh)Le.renderInstances(ye,Te,it.count);else if(st.isInstancedBufferGeometry){const ne=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Sn=Math.min(st.instanceCount,ne);Le.renderInstances(ye,Te,Sn)}else Le.render(ye,Te)};function ge(D,Q,st){D.transparent===!0&&D.side===ri&&D.forceSinglePass===!1?(D.side=Wn,D.needsUpdate=!0,li(D,Q,st),D.side=hr,D.needsUpdate=!0,li(D,Q,st),D.side=ri):li(D,Q,st)}this.compile=function(D,Q,st=null){st===null&&(st=D),S=Ot.get(st),S.init(Q),L.push(S),st.traverseVisible(function(it){it.isLight&&it.layers.test(Q.layers)&&(S.pushLight(it),it.castShadow&&S.pushShadow(it))}),D!==st&&D.traverseVisible(function(it){it.isLight&&it.layers.test(Q.layers)&&(S.pushLight(it),it.castShadow&&S.pushShadow(it))}),S.setupLights();const lt=new Set;return D.traverse(function(it){const Ut=it.material;if(Ut)if(Array.isArray(Ut))for(let Xt=0;Xt<Ut.length;Xt++){const Zt=Ut[Xt];ge(Zt,st,it),lt.add(Zt)}else ge(Ut,st,it),lt.add(Ut)}),L.pop(),S=null,lt},this.compileAsync=function(D,Q,st=null){const lt=this.compile(D,Q,st);return new Promise(it=>{function Ut(){if(lt.forEach(function(Xt){Vt.get(Xt).currentProgram.isReady()&&lt.delete(Xt)}),lt.size===0){it(D);return}setTimeout(Ut,10)}kt.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let se=null;function ce(D){se&&se(D)}function Ue(){sn.stop()}function Re(){sn.start()}const sn=new gS;sn.setAnimationLoop(ce),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(D){se=D,F.setAnimationLoop(D),D===null?sn.stop():sn.start()},F.addEventListener("sessionstart",Ue),F.addEventListener("sessionend",Re),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(Q),Q=F.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,Q,P),S=Ot.get(D,L.length),S.init(Q),L.push(S),nt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Nt.setFromProjectionMatrix(nt),V=this.localClippingEnabled,A=Pt.init(this.clippingPlanes,V),T=Kt.get(D,x.length),T.init(),x.push(T),F.enabled===!0&&F.isPresenting===!0){const Ut=R.xr.getDepthSensingMesh();Ut!==null&&an(Ut,Q,-1/0,R.sortObjects)}an(D,Q,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(tt,At),bt=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,bt&&Rt.addToRenderList(T,D),this.info.render.frame++,A===!0&&Pt.beginShadows();const st=S.state.shadowsArray;ie.render(st,D,Q),A===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=T.opaque,it=T.transmissive;if(S.setupLights(),Q.isArrayCamera){const Ut=Q.cameras;if(it.length>0)for(let Xt=0,Zt=Ut.length;Xt<Zt;Xt++){const $t=Ut[Xt];ns(lt,it,D,$t)}bt&&Rt.render(D);for(let Xt=0,Zt=Ut.length;Xt<Zt;Xt++){const $t=Ut[Xt];ea(T,D,$t,$t.viewport)}}else it.length>0&&ns(lt,it,D,Q),bt&&Rt.render(D),ea(T,D,Q);P!==null&&(Lt.updateMultisampleRenderTarget(P),Lt.updateRenderTargetMipmap(P)),D.isScene===!0&&D.onAfterRender(R,D,Q),Bt.resetDefaultState(),q=-1,U=null,L.pop(),L.length>0?(S=L[L.length-1],A===!0&&Pt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?T=x[x.length-1]:T=null};function an(D,Q,st,lt){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)st=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)S.pushLight(D),D.castShadow&&S.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Nt.intersectsSprite(D)){lt&&$.setFromMatrixPosition(D.matrixWorld).applyMatrix4(nt);const Xt=yt.update(D),Zt=D.material;Zt.visible&&T.push(D,Xt,Zt,st,$.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Nt.intersectsObject(D))){const Xt=yt.update(D),Zt=D.material;if(lt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),$.copy(D.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),$.copy(Xt.boundingSphere.center)),$.applyMatrix4(D.matrixWorld).applyMatrix4(nt)),Array.isArray(Zt)){const $t=Xt.groups;for(let oe=0,fe=$t.length;oe<fe;oe++){const re=$t[oe],ye=Zt[re.materialIndex];ye&&ye.visible&&T.push(D,Xt,ye,st,$.z,re)}}else Zt.visible&&T.push(D,Xt,Zt,st,$.z,null)}}const Ut=D.children;for(let Xt=0,Zt=Ut.length;Xt<Zt;Xt++)an(Ut[Xt],Q,st,lt)}function ea(D,Q,st,lt){const it=D.opaque,Ut=D.transmissive,Xt=D.transparent;S.setupLightsView(st),A===!0&&Pt.setGlobalState(R.clippingPlanes,st),lt&&Gt.viewport(w.copy(lt)),it.length>0&&Ca(it,Q,st),Ut.length>0&&Ca(Ut,Q,st),Xt.length>0&&Ca(Xt,Q,st),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function ns(D,Q,st,lt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[lt.id]===void 0&&(S.state.transmissionRenderTarget[lt.id]=new $r(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?jc:dr,minFilter:Qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const Ut=S.state.transmissionRenderTarget[lt.id],Xt=lt.viewport||w;Ut.setSize(Xt.z,Xt.w);const Zt=R.getRenderTarget();R.setRenderTarget(Ut),R.getClearColor(ct),_t=R.getClearAlpha(),_t<1&&R.setClearColor(16777215,.5),bt?Rt.render(st):R.clear();const $t=R.toneMapping;R.toneMapping=fr;const oe=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),S.setupLightsView(lt),A===!0&&Pt.setGlobalState(R.clippingPlanes,lt),Ca(D,st,lt),Lt.updateMultisampleRenderTarget(Ut),Lt.updateRenderTargetMipmap(Ut),kt.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let re=0,ye=Q.length;re<ye;re++){const Se=Q[re],Te=Se.object,on=Se.geometry,Le=Se.material,ne=Se.group;if(Le.side===ri&&Te.layers.test(lt.layers)){const Sn=Le.side;Le.side=Wn,Le.needsUpdate=!0,na(Te,st,lt,on,Le,ne),Le.side=Sn,Le.needsUpdate=!0,fe=!0}}fe===!0&&(Lt.updateMultisampleRenderTarget(Ut),Lt.updateRenderTargetMipmap(Ut))}R.setRenderTarget(Zt),R.setClearColor(ct,_t),oe!==void 0&&(lt.viewport=oe),R.toneMapping=$t}function Ca(D,Q,st){const lt=Q.isScene===!0?Q.overrideMaterial:null;for(let it=0,Ut=D.length;it<Ut;it++){const Xt=D[it],Zt=Xt.object,$t=Xt.geometry,oe=lt===null?Xt.material:lt,fe=Xt.group;Zt.layers.test(st.layers)&&na(Zt,Q,st,$t,oe,fe)}}function na(D,Q,st,lt,it,Ut){D.onBeforeRender(R,Q,st,lt,it,Ut),D.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),it.onBeforeRender(R,Q,st,lt,D,Ut),it.transparent===!0&&it.side===ri&&it.forceSinglePass===!1?(it.side=Wn,it.needsUpdate=!0,R.renderBufferDirect(st,Q,lt,it,D,Ut),it.side=hr,it.needsUpdate=!0,R.renderBufferDirect(st,Q,lt,it,D,Ut),it.side=ri):R.renderBufferDirect(st,Q,lt,it,D,Ut),D.onAfterRender(R,Q,st,lt,it,Ut)}function li(D,Q,st){Q.isScene!==!0&&(Q=St);const lt=Vt.get(D),it=S.state.lights,Ut=S.state.shadowsArray,Xt=it.state.version,Zt=xt.getParameters(D,it.state,Ut,Q,st),$t=xt.getProgramCacheKey(Zt);let oe=lt.programs;lt.environment=D.isMeshStandardMaterial?Q.environment:null,lt.fog=Q.fog,lt.envMap=(D.isMeshStandardMaterial?B:de).get(D.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,oe===void 0&&(D.addEventListener("dispose",vt),oe=new Map,lt.programs=oe);let fe=oe.get($t);if(fe!==void 0){if(lt.currentProgram===fe&&lt.lightsStateVersion===Xt)return ui(D,Zt),fe}else Zt.uniforms=xt.getUniforms(D),D.onBuild(st,Zt,R),D.onBeforeCompile(Zt,R),fe=xt.acquireProgram(Zt,$t),oe.set($t,fe),lt.uniforms=Zt.uniforms;const re=lt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(re.clippingPlanes=Pt.uniform),ui(D,Zt),lt.needsLights=gr(D),lt.lightsStateVersion=Xt,lt.needsLights&&(re.ambientLightColor.value=it.state.ambient,re.lightProbe.value=it.state.probe,re.directionalLights.value=it.state.directional,re.directionalLightShadows.value=it.state.directionalShadow,re.spotLights.value=it.state.spot,re.spotLightShadows.value=it.state.spotShadow,re.rectAreaLights.value=it.state.rectArea,re.ltc_1.value=it.state.rectAreaLTC1,re.ltc_2.value=it.state.rectAreaLTC2,re.pointLights.value=it.state.point,re.pointLightShadows.value=it.state.pointShadow,re.hemisphereLights.value=it.state.hemi,re.directionalShadowMap.value=it.state.directionalShadowMap,re.directionalShadowMatrix.value=it.state.directionalShadowMatrix,re.spotShadowMap.value=it.state.spotShadowMap,re.spotLightMatrix.value=it.state.spotLightMatrix,re.spotLightMap.value=it.state.spotLightMap,re.pointShadowMap.value=it.state.pointShadowMap,re.pointShadowMatrix.value=it.state.pointShadowMatrix),lt.currentProgram=fe,lt.uniformsList=null,fe}function Ii(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=Bc.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function ui(D,Q){const st=Vt.get(D);st.outputColorSpace=Q.outputColorSpace,st.batching=Q.batching,st.batchingColor=Q.batchingColor,st.instancing=Q.instancing,st.instancingColor=Q.instancingColor,st.instancingMorph=Q.instancingMorph,st.skinning=Q.skinning,st.morphTargets=Q.morphTargets,st.morphNormals=Q.morphNormals,st.morphColors=Q.morphColors,st.morphTargetsCount=Q.morphTargetsCount,st.numClippingPlanes=Q.numClippingPlanes,st.numIntersection=Q.numClipIntersection,st.vertexAlphas=Q.vertexAlphas,st.vertexTangents=Q.vertexTangents,st.toneMapping=Q.toneMapping}function ia(D,Q,st,lt,it){Q.isScene!==!0&&(Q=St),Lt.resetTextureUnits();const Ut=Q.fog,Xt=lt.isMeshStandardMaterial?Q.environment:null,Zt=P===null?R.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:mr,$t=(lt.isMeshStandardMaterial?B:de).get(lt.envMap||Xt),oe=lt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,fe=!!st.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),re=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Se=!!st.morphAttributes.color;let Te=fr;lt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Te=R.toneMapping);const on=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Le=on!==void 0?on.length:0,ne=Vt.get(lt),Sn=S.state.lights;if(A===!0&&(V===!0||D!==U)){const ze=D===U&&lt.id===q;Pt.setState(lt,D,ze)}let Pe=!1;lt.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Sn.state.version||ne.outputColorSpace!==Zt||it.isBatchedMesh&&ne.batching===!1||!it.isBatchedMesh&&ne.batching===!0||it.isBatchedMesh&&ne.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&ne.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&ne.instancing===!1||!it.isInstancedMesh&&ne.instancing===!0||it.isSkinnedMesh&&ne.skinning===!1||!it.isSkinnedMesh&&ne.skinning===!0||it.isInstancedMesh&&ne.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ne.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&ne.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&ne.instancingMorph===!1&&it.morphTexture!==null||ne.envMap!==$t||lt.fog===!0&&ne.fog!==Ut||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Pt.numPlanes||ne.numIntersection!==Pt.numIntersection)||ne.vertexAlphas!==oe||ne.vertexTangents!==fe||ne.morphTargets!==re||ne.morphNormals!==ye||ne.morphColors!==Se||ne.toneMapping!==Te||ne.morphTargetsCount!==Le)&&(Pe=!0):(Pe=!0,ne.__version=lt.version);let Un=ne.currentProgram;Pe===!0&&(Un=li(lt,Q,it));let aa=!1,ci=!1,bi=!1;const Ze=Un.getUniforms(),Hn=ne.uniforms;if(Gt.useProgram(Un.program)&&(aa=!0,ci=!0,bi=!0),lt.id!==q&&(q=lt.id,ci=!0),aa||U!==D){Ze.setValue(O,"projectionMatrix",D.projectionMatrix),Ze.setValue(O,"viewMatrix",D.matrixWorldInverse);const ze=Ze.map.cameraPosition;ze!==void 0&&ze.setValue(O,$.setFromMatrixPosition(D.matrixWorld)),jt.logarithmicDepthBuffer&&Ze.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ze.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),U!==D&&(U=D,ci=!0,bi=!0)}if(it.isSkinnedMesh){Ze.setOptional(O,it,"bindMatrix"),Ze.setOptional(O,it,"bindMatrixInverse");const ze=it.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ze.setValue(O,"boneTexture",ze.boneTexture,Lt))}it.isBatchedMesh&&(Ze.setOptional(O,it,"batchingTexture"),Ze.setValue(O,"batchingTexture",it._matricesTexture,Lt),Ze.setOptional(O,it,"batchingColorTexture"),it._colorsTexture!==null&&Ze.setValue(O,"batchingColorTexture",it._colorsTexture,Lt));const Hi=st.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&qt.update(it,st,Un),(ci||ne.receiveShadow!==it.receiveShadow)&&(ne.receiveShadow=it.receiveShadow,Ze.setValue(O,"receiveShadow",it.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Hn.envMap.value=$t,Hn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Q.environment!==null&&(Hn.envMapIntensity.value=Q.environmentIntensity),ci&&(Ze.setValue(O,"toneMappingExposure",R.toneMappingExposure),ne.needsLights&&Fi(Hn,bi),Ut&&lt.fog===!0&&Et.refreshFogUniforms(Hn,Ut),Et.refreshMaterialUniforms(Hn,lt,rt,Z,S.state.transmissionRenderTarget[D.id]),Bc.upload(O,Ii(ne),Hn,Lt)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Bc.upload(O,Ii(ne),Hn,Lt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ze.setValue(O,"center",it.center),Ze.setValue(O,"modelViewMatrix",it.modelViewMatrix),Ze.setValue(O,"normalMatrix",it.normalMatrix),Ze.setValue(O,"modelMatrix",it.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const ze=lt.uniformsGroups;for(let is=0,zl=ze.length;is<zl;is++){const bo=ze[is];Yt.update(bo,Un),Yt.bind(bo,Un)}}return Un}function Fi(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function gr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(D,Q,st){Vt.get(D.texture).__webglTexture=Q,Vt.get(D.depthTexture).__webglTexture=st;const lt=Vt.get(D);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=st===void 0,lt.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Q){const st=Vt.get(D);st.__webglFramebuffer=Q,st.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(D,Q=0,st=0){P=D,Y=Q,G=st;let lt=!0,it=null,Ut=!1,Xt=!1;if(D){const $t=Vt.get(D);$t.__useDefaultFramebuffer!==void 0?(Gt.bindFramebuffer(O.FRAMEBUFFER,null),lt=!1):$t.__webglFramebuffer===void 0?Lt.setupRenderTarget(D):$t.__hasExternalTextures&&Lt.rebindTextures(D,Vt.get(D.texture).__webglTexture,Vt.get(D.depthTexture).__webglTexture);const oe=D.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Xt=!0);const fe=Vt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(fe[Q])?it=fe[Q][st]:it=fe[Q],Ut=!0):D.samples>0&&Lt.useMultisampledRTT(D)===!1?it=Vt.get(D).__webglMultisampledFramebuffer:Array.isArray(fe)?it=fe[st]:it=fe,w.copy(D.viewport),X.copy(D.scissor),ft=D.scissorTest}else w.copy(H).multiplyScalar(rt).floor(),X.copy(z).multiplyScalar(rt).floor(),ft=Tt;if(Gt.bindFramebuffer(O.FRAMEBUFFER,it)&&lt&&Gt.drawBuffers(D,it),Gt.viewport(w),Gt.scissor(X),Gt.setScissorTest(ft),Ut){const $t=Vt.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Q,$t.__webglTexture,st)}else if(Xt){const $t=Vt.get(D.texture),oe=Q||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,$t.__webglTexture,st||0,oe)}q=-1},this.readRenderTargetPixels=function(D,Q,st,lt,it,Ut,Xt){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Vt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Xt!==void 0&&(Zt=Zt[Xt]),Zt){Gt.bindFramebuffer(O.FRAMEBUFFER,Zt);try{const $t=D.texture,oe=$t.format,fe=$t.type;if(!jt.textureFormatReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-lt&&st>=0&&st<=D.height-it&&O.readPixels(Q,st,lt,it,It.convert(oe),It.convert(fe),Ut)}finally{const $t=P!==null?Vt.get(P).__webglFramebuffer:null;Gt.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(D,Q,st,lt,it,Ut,Xt){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Vt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Xt!==void 0&&(Zt=Zt[Xt]),Zt){Gt.bindFramebuffer(O.FRAMEBUFFER,Zt);try{const $t=D.texture,oe=$t.format,fe=$t.type;if(!jt.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=D.width-lt&&st>=0&&st<=D.height-it){const re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.bufferData(O.PIXEL_PACK_BUFFER,Ut.byteLength,O.STREAM_READ),O.readPixels(Q,st,lt,it,It.convert(oe),It.convert(fe),0),O.flush();const ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await eT(O,ye,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ut)}finally{O.deleteBuffer(re),O.deleteSync(ye)}return Ut}}finally{const $t=P!==null?Vt.get(P).__webglFramebuffer:null;Gt.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.copyFramebufferToTexture=function(D,Q=null,st=0){D.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,D=arguments[1]);const lt=Math.pow(2,-st),it=Math.floor(D.image.width*lt),Ut=Math.floor(D.image.height*lt),Xt=Q!==null?Q.x:0,Zt=Q!==null?Q.y:0;Lt.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,st,0,0,Xt,Zt,it,Ut),Gt.unbindTexture()},this.copyTextureToTexture=function(D,Q,st=null,lt=null,it=0){D.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,D=arguments[1],Q=arguments[2],it=arguments[3]||0,st=null);let Ut,Xt,Zt,$t,oe,fe;st!==null?(Ut=st.max.x-st.min.x,Xt=st.max.y-st.min.y,Zt=st.min.x,$t=st.min.y):(Ut=D.image.width,Xt=D.image.height,Zt=0,$t=0),lt!==null?(oe=lt.x,fe=lt.y):(oe=0,fe=0);const re=It.convert(Q.format),ye=It.convert(Q.type);Lt.setTexture2D(Q,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);const Se=O.getParameter(O.UNPACK_ROW_LENGTH),Te=O.getParameter(O.UNPACK_IMAGE_HEIGHT),on=O.getParameter(O.UNPACK_SKIP_PIXELS),Le=O.getParameter(O.UNPACK_SKIP_ROWS),ne=O.getParameter(O.UNPACK_SKIP_IMAGES),Sn=D.isCompressedTexture?D.mipmaps[it]:D.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Sn.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Sn.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zt),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,it,oe,fe,Ut,Xt,re,ye,Sn.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,it,oe,fe,Sn.width,Sn.height,re,Sn.data):O.texSubImage2D(O.TEXTURE_2D,it,oe,fe,re,ye,Sn),O.pixelStorei(O.UNPACK_ROW_LENGTH,Se),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Te),O.pixelStorei(O.UNPACK_SKIP_PIXELS,on),O.pixelStorei(O.UNPACK_SKIP_ROWS,Le),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ne),it===0&&Q.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Gt.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,st=null,lt=null,it=0){D.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),st=arguments[0]||null,lt=arguments[1]||null,D=arguments[2],Q=arguments[3],it=arguments[4]||0);let Ut,Xt,Zt,$t,oe,fe,re,ye,Se;const Te=D.isCompressedTexture?D.mipmaps[it]:D.image;st!==null?(Ut=st.max.x-st.min.x,Xt=st.max.y-st.min.y,Zt=st.max.z-st.min.z,$t=st.min.x,oe=st.min.y,fe=st.min.z):(Ut=Te.width,Xt=Te.height,Zt=Te.depth,$t=0,oe=0,fe=0),lt!==null?(re=lt.x,ye=lt.y,Se=lt.z):(re=0,ye=0,Se=0);const on=It.convert(Q.format),Le=It.convert(Q.type);let ne;if(Q.isData3DTexture)Lt.setTexture3D(Q,0),ne=O.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)Lt.setTexture2DArray(Q,0),ne=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);const Sn=O.getParameter(O.UNPACK_ROW_LENGTH),Pe=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Un=O.getParameter(O.UNPACK_SKIP_PIXELS),aa=O.getParameter(O.UNPACK_SKIP_ROWS),ci=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Te.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Te.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$t),O.pixelStorei(O.UNPACK_SKIP_ROWS,oe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fe),D.isDataTexture||D.isData3DTexture?O.texSubImage3D(ne,it,re,ye,Se,Ut,Xt,Zt,on,Le,Te.data):Q.isCompressedArrayTexture?O.compressedTexSubImage3D(ne,it,re,ye,Se,Ut,Xt,Zt,on,Te.data):O.texSubImage3D(ne,it,re,ye,Se,Ut,Xt,Zt,on,Le,Te),O.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pe),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Un),O.pixelStorei(O.UNPACK_SKIP_ROWS,aa),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ci),it===0&&Q.generateMipmaps&&O.generateMipmap(ne),Gt.unbindTexture()},this.initRenderTarget=function(D){Vt.get(D).__webglFramebuffer===void 0&&Lt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Lt.setTextureCube(D,0):D.isData3DTexture?Lt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Lt.setTexture2DArray(D,0):Lt.setTexture2D(D,0),Gt.unbindTexture()},this.resetState=function(){Y=0,G=0,P=null,Gt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===zp?"display-p3":"srgb",i.unpackColorSpace=Xe.workingColorSpace===Zc?"display-p3":"srgb"}}class cR extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ap extends Mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qc=new W,Yc=new W,Ny=new je,xl=new Kc,bc=new Pl,cp=new W,Uy=new W;class ES extends Nn{constructor(e=new oi,i=new Ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)qc.fromBufferAttribute(i,l-1),Yc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=qc.distanceTo(Yc);e.setAttribute("lineDistance",new si(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,e.ray.intersectsSphere(bc)===!1)return;Ny.copy(l).invert(),xl.copy(e.ray).applyMatrix4(Ny);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,v=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const M=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=M,S=E-1;T<S;T+=v){const x=g.getX(T),L=g.getX(T+1),R=Ac(this,e,xl,p,x,L);R&&i.push(R)}if(this.isLineLoop){const T=g.getX(E-1),S=g.getX(M),x=Ac(this,e,xl,p,T,S);x&&i.push(x)}}else{const M=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let T=M,S=E-1;T<S;T+=v){const x=Ac(this,e,xl,p,T,T+1);x&&i.push(x)}if(this.isLineLoop){const T=Ac(this,e,xl,p,E-1,M);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ac(s,e,i,r,l,c){const h=s.geometry.attributes.position;if(qc.fromBufferAttribute(h,l),Yc.fromBufferAttribute(h,c),i.distanceSqToSegment(qc,Yc,cp,Uy)>r)return;cp.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(cp);if(!(p<e.near||p>e.far))return{distance:p,point:Uy.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,object:s}}const Ly=new W,Oy=new W;class fR extends ES{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Ly.fromBufferAttribute(i,l),Oy.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Ly.distanceTo(Oy);e.setAttribute("lineDistance",new si(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class TS extends Mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Py=new je,Cp=new Kc,Cc=new Pl,Rc=new W;class hR extends Nn{constructor(e=new oi,i=new TS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;Py.copy(l).invert(),Cp.copy(e.ray).applyMatrix4(Py);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,v=r.index,m=r.attributes.position;if(v!==null){const _=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let E=_,T=M;E<T;E++){const S=v.getX(E);Rc.fromBufferAttribute(m,S),zy(Rc,S,p,l,e,i,this)}}else{const _=Math.max(0,h.start),M=Math.min(m.count,h.start+h.count);for(let E=_,T=M;E<T;E++)Rc.fromBufferAttribute(m,E),zy(Rc,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zy(s,e,i,r,l,c,h){const d=Cp.distanceSqToPoint(s);if(d<i){const p=new W;Cp.closestPointToPoint(s,p),p.applyMatrix4(r);const v=l.ray.origin.distanceTo(p);if(v<l.near||v>l.far)return;c.push({distance:v,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:h})}}class Rp extends Fn{constructor(e,i,r,l,c,h,d,p,v){super(e,i,r,l,c,h,d,p,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=e;h++)r=this.getPoint(h/e),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=e*r[c-1];let d=0,p=c-1,v;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),v=r[l]-h,v<0)d=l+1;else if(v>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(c-1);const g=r[l],_=r[l+1]-g,M=(h-g)/_;return(l+M)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),p=i||(h.isVector2?new te:new W);return p.copy(d).sub(h).normalize(),p}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i){const r=new W,l=[],c=[],h=[],d=new W,p=new je;for(let M=0;M<=e;M++){const E=M/e;l[M]=this.getTangentAt(E,new W)}c[0]=new W,h[0]=new W;let v=Number.MAX_VALUE;const g=Math.abs(l[0].x),m=Math.abs(l[0].y),_=Math.abs(l[0].z);g<=v&&(v=g,r.set(1,0,0)),m<=v&&(v=m,r.set(0,1,0)),_<=v&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),h[M]=h[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Cn(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(p.makeRotationAxis(d,E))}h[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(Cn(c[0].dot(c[e]),-1,1));M/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(M=-M);for(let E=1;E<=e;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],M*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gp extends ta{constructor(e=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(e,i=new te){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+e*c;let p=this.aX+this.xRadius*Math.cos(d),v=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),m=Math.sin(this.aRotation),_=p-this.aX,M=v-this.aY;p=_*g-M*m+this.aX,v=_*m+M*g+this.aY}return r.set(p,v)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class dR extends Gp{constructor(e,i,r,l,c,h){super(e,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Vp(){let s=0,e=0,i=0,r=0;function l(c,h,d,p){s=c,e=d,i=-3*c+3*h-2*d-p,r=2*c-2*h+d+p}return{initCatmullRom:function(c,h,d,p,v){l(h,d,v*(d-c),v*(p-h))},initNonuniformCatmullRom:function(c,h,d,p,v,g,m){let _=(h-c)/v-(d-c)/(v+g)+(d-h)/g,M=(d-h)/g-(p-h)/(g+m)+(p-d)/m;_*=g,M*=g,l(h,d,_,M)},calc:function(c){const h=c*c,d=h*c;return s+e*c+i*h+r*d}}}const wc=new W,fp=new Vp,hp=new Vp,dp=new Vp;class pR extends ta{constructor(e=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=l}getPoint(e,i=new W){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*e;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let v,g;this.closed||d>0?v=l[(d-1)%c]:(wc.subVectors(l[0],l[1]).add(l[0]),v=wc);const m=l[d%c],_=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(wc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(v.distanceToSquared(m),M),T=Math.pow(m.distanceToSquared(_),M),S=Math.pow(_.distanceToSquared(g),M);T<1e-4&&(T=1),E<1e-4&&(E=T),S<1e-4&&(S=T),fp.initNonuniformCatmullRom(v.x,m.x,_.x,g.x,E,T,S),hp.initNonuniformCatmullRom(v.y,m.y,_.y,g.y,E,T,S),dp.initNonuniformCatmullRom(v.z,m.z,_.z,g.z,E,T,S)}else this.curveType==="catmullrom"&&(fp.initCatmullRom(v.x,m.x,_.x,g.x,this.tension),hp.initCatmullRom(v.y,m.y,_.y,g.y,this.tension),dp.initCatmullRom(v.z,m.z,_.z,g.z,this.tension));return r.set(fp.calc(p),hp.calc(p),dp.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new W().fromArray(l))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function By(s,e,i,r,l){const c=(r-e)*.5,h=(l-i)*.5,d=s*s,p=s*d;return(2*i-2*r+c+h)*p+(-3*i+3*r-2*c-h)*d+c*s+i}function mR(s,e){const i=1-s;return i*i*e}function gR(s,e){return 2*(1-s)*s*e}function vR(s,e){return s*s*e}function Al(s,e,i,r){return mR(s,e)+gR(s,i)+vR(s,r)}function _R(s,e){const i=1-s;return i*i*i*e}function yR(s,e){const i=1-s;return 3*i*i*s*e}function SR(s,e){return 3*(1-s)*s*s*e}function xR(s,e){return s*s*s*e}function Cl(s,e,i,r,l){return _R(s,e)+yR(s,i)+SR(s,r)+xR(s,l)}class bS extends ta{constructor(e=new te,i=new te,r=new te,l=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new te){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Cl(e,l.x,c.x,h.x,d.x),Cl(e,l.y,c.y,h.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class MR extends ta{constructor(e=new W,i=new W,r=new W,l=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=i,this.v2=r,this.v3=l}getPoint(e,i=new W){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Cl(e,l.x,c.x,h.x,d.x),Cl(e,l.y,c.y,h.y,d.y),Cl(e,l.z,c.z,h.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class AS extends ta{constructor(e=new te,i=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=i}getPoint(e,i=new te){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new te){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ER extends ta{constructor(e=new W,i=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=i}getPoint(e,i=new W){const r=i;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,i){return this.getPoint(e,i)}getTangent(e,i=new W){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,i){return this.getTangent(e,i)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class CS extends ta{constructor(e=new te,i=new te,r=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new te){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Al(e,l.x,c.x,h.x),Al(e,l.y,c.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TR extends ta{constructor(e=new W,i=new W,r=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=r}getPoint(e,i=new W){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Al(e,l.x,c.x,h.x),Al(e,l.y,c.y,h.y),Al(e,l.z,c.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RS extends ta{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,i=new te){const r=i,l=this.points,c=(l.length-1)*e,h=Math.floor(c),d=c-h,p=l[h===0?h:h-1],v=l[h],g=l[h>l.length-2?l.length-1:h+1],m=l[h>l.length-3?l.length-1:h+2];return r.set(By(d,p.x,v.x,g.x,m.x),By(d,p.y,v.y,g.y,m.y)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];e.points.push(l.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const l=e.points[i];this.points.push(new te().fromArray(l))}return this}}var Iy=Object.freeze({__proto__:null,ArcCurve:dR,CatmullRomCurve3:pR,CubicBezierCurve:bS,CubicBezierCurve3:MR,EllipseCurve:Gp,LineCurve:AS,LineCurve3:ER,QuadraticBezierCurve:CS,QuadraticBezierCurve3:TR,SplineCurve:RS});class bR extends ta{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(i)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iy[r](i,e))}return this}getPoint(e,i){const r=e*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],p=d.getLength(),v=p===0?0:1-h/p;return d.getPointAt(v,i)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),e.push(i);return this.cacheLengths=e,e}getSpacedPoints(e=40){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return this.autoClose&&i.push(i[0]),i}getPoints(e=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?e*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?e*h.points.length:e,p=h.getPoints(d);for(let v=0;v<p.length;v++){const g=p[v];r&&r.equals(g)||(i.push(g),r=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(e){super.copy(e),this.curves=[];for(let i=0,r=e.curves.length;i<r;i++){const l=e.curves[i];this.curves.push(l.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];e.curves.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let i=0,r=e.curves.length;i<r;i++){const l=e.curves[i];this.curves.push(new Iy[l.type]().fromJSON(l))}return this}}class Fy extends bR{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let i=1,r=e.length;i<r;i++)this.lineTo(e[i].x,e[i].y);return this}moveTo(e,i){return this.currentPoint.set(e,i),this}lineTo(e,i){const r=new AS(this.currentPoint.clone(),new te(e,i));return this.curves.push(r),this.currentPoint.set(e,i),this}quadraticCurveTo(e,i,r,l){const c=new CS(this.currentPoint.clone(),new te(e,i),new te(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(e,i,r,l,c,h){const d=new bS(this.currentPoint.clone(),new te(e,i),new te(r,l),new te(c,h));return this.curves.push(d),this.currentPoint.set(c,h),this}splineThru(e){const i=[this.currentPoint.clone()].concat(e),r=new RS(i);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,i,r,l,c,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+d,i+p,r,l,c,h),this}absarc(e,i,r,l,c,h){return this.absellipse(e,i,r,r,l,c,h),this}ellipse(e,i,r,l,c,h,d,p){const v=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+v,i+g,r,l,c,h,d,p),this}absellipse(e,i,r,l,c,h,d,p){const v=new Gp(e,i,r,l,c,h,d,p);if(this.curves.length>0){const m=v.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(v);const g=v.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}const Dc=new W,Nc=new W,pp=new W,Uc=new Bi;class AR extends oi{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(ho*i),h=e.getIndex(),d=e.getAttribute("position"),p=h?h.count:d.count,v=[0,0,0],g=["a","b","c"],m=new Array(3),_={},M=[];for(let E=0;E<p;E+=3){h?(v[0]=h.getX(E),v[1]=h.getX(E+1),v[2]=h.getX(E+2)):(v[0]=E,v[1]=E+1,v[2]=E+2);const{a:T,b:S,c:x}=Uc;if(T.fromBufferAttribute(d,v[0]),S.fromBufferAttribute(d,v[1]),x.fromBufferAttribute(d,v[2]),Uc.getNormal(pp),m[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,m[1]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,m[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(m[0]===m[1]||m[1]===m[2]||m[2]===m[0]))for(let L=0;L<3;L++){const R=(L+1)%3,N=m[L],Y=m[R],G=Uc[g[L]],P=Uc[g[R]],q=`${N}_${Y}`,U=`${Y}_${N}`;U in _&&_[U]?(pp.dot(_[U].normal)<=c&&(M.push(G.x,G.y,G.z),M.push(P.x,P.y,P.z)),_[U]=null):q in _||(_[q]={index0:v[L],index1:v[R],normal:pp.clone()})}}for(const E in _)if(_[E]){const{index0:T,index1:S}=_[E];Dc.fromBufferAttribute(d,T),Nc.fromBufferAttribute(d,S),M.push(Dc.x,Dc.y,Dc.z),M.push(Nc.x,Nc.y,Nc.z)}this.setAttribute("position",new si(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wS extends Fy{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(e);return i}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let i=0,r=e.holes.length;i<r;i++){const l=e.holes[i];this.holes.push(l.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];e.holes.push(l.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let i=0,r=e.holes.length;i<r;i++){const l=e.holes[i];this.holes.push(new Fy().fromJSON(l))}return this}}const CR={triangulate:function(s,e,i=2){const r=e&&e.length,l=r?e[0]*i:s.length;let c=DS(s,0,l,i,!0);const h=[];if(!c||c.next===c.prev)return h;let d,p,v,g,m,_,M;if(r&&(c=UR(s,e,c,i)),s.length>80*i){d=v=s[0],p=g=s[1];for(let E=i;E<l;E+=i)m=s[E],_=s[E+1],m<d&&(d=m),_<p&&(p=_),m>v&&(v=m),_>g&&(g=_);M=Math.max(v-d,g-p),M=M!==0?32767/M:0}return Dl(c,h,i,d,p,M,0),h}};function DS(s,e,i,r,l){let c,h;if(l===XR(s,e,i,r)>0)for(c=e;c<i;c+=r)h=Hy(c,s[c],s[c+1],h);else for(c=i-r;c>=e;c-=r)h=Hy(c,s[c],s[c+1],h);return h&&Jc(h,h.next)&&(Ul(h),h=h.next),h}function ts(s,e){if(!s)return s;e||(e=s);let i=s,r;do if(r=!1,!i.steiner&&(Jc(i,i.next)||tn(i.prev,i,i.next)===0)){if(Ul(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function Dl(s,e,i,r,l,c,h){if(!s)return;!h&&c&&BR(s,r,l,c);let d=s,p,v;for(;s.prev!==s.next;){if(p=s.prev,v=s.next,c?wR(s,r,l,c):RR(s)){e.push(p.i/i|0),e.push(s.i/i|0),e.push(v.i/i|0),Ul(s),s=v.next,d=v.next;continue}if(s=v,s===d){h?h===1?(s=DR(ts(s),e,i),Dl(s,e,i,r,l,c,2)):h===2&&NR(s,e,i,r,l,c):Dl(ts(s),e,i,r,l,c,1);break}}}function RR(s){const e=s.prev,i=s,r=s.next;if(tn(e,i,r)>=0)return!1;const l=e.x,c=i.x,h=r.x,d=e.y,p=i.y,v=r.y,g=l<c?l<h?l:h:c<h?c:h,m=d<p?d<v?d:v:p<v?p:v,_=l>c?l>h?l:h:c>h?c:h,M=d>p?d>v?d:v:p>v?p:v;let E=r.next;for(;E!==e;){if(E.x>=g&&E.x<=_&&E.y>=m&&E.y<=M&&uo(l,d,c,p,h,v,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function wR(s,e,i,r){const l=s.prev,c=s,h=s.next;if(tn(l,c,h)>=0)return!1;const d=l.x,p=c.x,v=h.x,g=l.y,m=c.y,_=h.y,M=d<p?d<v?d:v:p<v?p:v,E=g<m?g<_?g:_:m<_?m:_,T=d>p?d>v?d:v:p>v?p:v,S=g>m?g>_?g:_:m>_?m:_,x=wp(M,E,e,i,r),L=wp(T,S,e,i,r);let R=s.prevZ,N=s.nextZ;for(;R&&R.z>=x&&N&&N.z<=L;){if(R.x>=M&&R.x<=T&&R.y>=E&&R.y<=S&&R!==l&&R!==h&&uo(d,g,p,m,v,_,R.x,R.y)&&tn(R.prev,R,R.next)>=0||(R=R.prevZ,N.x>=M&&N.x<=T&&N.y>=E&&N.y<=S&&N!==l&&N!==h&&uo(d,g,p,m,v,_,N.x,N.y)&&tn(N.prev,N,N.next)>=0))return!1;N=N.nextZ}for(;R&&R.z>=x;){if(R.x>=M&&R.x<=T&&R.y>=E&&R.y<=S&&R!==l&&R!==h&&uo(d,g,p,m,v,_,R.x,R.y)&&tn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;N&&N.z<=L;){if(N.x>=M&&N.x<=T&&N.y>=E&&N.y<=S&&N!==l&&N!==h&&uo(d,g,p,m,v,_,N.x,N.y)&&tn(N.prev,N,N.next)>=0)return!1;N=N.nextZ}return!0}function DR(s,e,i){let r=s;do{const l=r.prev,c=r.next.next;!Jc(l,c)&&NS(l,r,r.next,c)&&Nl(l,c)&&Nl(c,l)&&(e.push(l.i/i|0),e.push(r.i/i|0),e.push(c.i/i|0),Ul(r),Ul(r.next),r=s=c),r=r.next}while(r!==s);return ts(r)}function NR(s,e,i,r,l,c){let h=s;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&HR(h,d)){let p=US(h,d);h=ts(h,h.next),p=ts(p,p.next),Dl(h,e,i,r,l,c,0),Dl(p,e,i,r,l,c,0);return}d=d.next}h=h.next}while(h!==s)}function UR(s,e,i,r){const l=[];let c,h,d,p,v;for(c=0,h=e.length;c<h;c++)d=e[c]*r,p=c<h-1?e[c+1]*r:s.length,v=DS(s,d,p,r,!1),v===v.next&&(v.steiner=!0),l.push(FR(v));for(l.sort(LR),c=0;c<l.length;c++)i=OR(l[c],i);return i}function LR(s,e){return s.x-e.x}function OR(s,e){const i=PR(s,e);if(!i)return e;const r=US(i,s);return ts(r,r.next),ts(i,i.next)}function PR(s,e){let i=e,r=-1/0,l;const c=s.x,h=s.y;do{if(h<=i.y&&h>=i.next.y&&i.next.y!==i.y){const _=i.x+(h-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(_<=c&&_>r&&(r=_,l=i.x<i.next.x?i:i.next,_===c))return l}i=i.next}while(i!==e);if(!l)return null;const d=l,p=l.x,v=l.y;let g=1/0,m;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&uo(h<v?c:r,h,p,v,h<v?r:c,h,i.x,i.y)&&(m=Math.abs(h-i.y)/(c-i.x),Nl(i,s)&&(m<g||m===g&&(i.x>l.x||i.x===l.x&&zR(l,i)))&&(l=i,g=m)),i=i.next;while(i!==d);return l}function zR(s,e){return tn(s.prev,s,e.prev)<0&&tn(e.next,s,s.next)<0}function BR(s,e,i,r){let l=s;do l.z===0&&(l.z=wp(l.x,l.y,e,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,IR(l)}function IR(s){let e,i,r,l,c,h,d,p,v=1;do{for(i=s,s=null,c=null,h=0;i;){for(h++,r=i,d=0,e=0;e<v&&(d++,r=r.nextZ,!!r);e++);for(p=v;d>0||p>0&&r;)d!==0&&(p===0||!r||i.z<=r.z)?(l=i,i=i.nextZ,d--):(l=r,r=r.nextZ,p--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;i=r}c.nextZ=null,v*=2}while(h>1);return s}function wp(s,e,i,r,l){return s=(s-i)*l|0,e=(e-r)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function FR(s){let e=s,i=s;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==s);return i}function uo(s,e,i,r,l,c,h,d){return(l-h)*(e-d)>=(s-h)*(c-d)&&(s-h)*(r-d)>=(i-h)*(e-d)&&(i-h)*(c-d)>=(l-h)*(r-d)}function HR(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!GR(s,e)&&(Nl(s,e)&&Nl(e,s)&&VR(s,e)&&(tn(s.prev,s,e.prev)||tn(s,e.prev,e))||Jc(s,e)&&tn(s.prev,s,s.next)>0&&tn(e.prev,e,e.next)>0)}function tn(s,e,i){return(e.y-s.y)*(i.x-e.x)-(e.x-s.x)*(i.y-e.y)}function Jc(s,e){return s.x===e.x&&s.y===e.y}function NS(s,e,i,r){const l=Oc(tn(s,e,i)),c=Oc(tn(s,e,r)),h=Oc(tn(i,r,s)),d=Oc(tn(i,r,e));return!!(l!==c&&h!==d||l===0&&Lc(s,i,e)||c===0&&Lc(s,r,e)||h===0&&Lc(i,s,r)||d===0&&Lc(i,e,r))}function Lc(s,e,i){return e.x<=Math.max(s.x,i.x)&&e.x>=Math.min(s.x,i.x)&&e.y<=Math.max(s.y,i.y)&&e.y>=Math.min(s.y,i.y)}function Oc(s){return s>0?1:s<0?-1:0}function GR(s,e){let i=s;do{if(i.i!==s.i&&i.next.i!==s.i&&i.i!==e.i&&i.next.i!==e.i&&NS(i,i.next,s,e))return!0;i=i.next}while(i!==s);return!1}function Nl(s,e){return tn(s.prev,s,s.next)<0?tn(s,e,s.next)>=0&&tn(s,s.prev,e)>=0:tn(s,e,s.prev)<0||tn(s,s.next,e)<0}function VR(s,e){let i=s,r=!1;const l=(s.x+e.x)/2,c=(s.y+e.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==s);return r}function US(s,e){const i=new Dp(s.i,s.x,s.y),r=new Dp(e.i,e.x,e.y),l=s.next,c=e.prev;return s.next=e,e.prev=s,i.next=l,l.prev=i,r.next=i,i.prev=r,c.next=r,r.prev=c,r}function Hy(s,e,i,r){const l=new Dp(s,e,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Ul(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Dp(s,e,i){this.i=s,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function XR(s,e,i,r){let l=0;for(let c=e,h=i-r;c<i;c+=r)l+=(s[h]-s[c])*(s[c+1]+s[h+1]),h=c;return l}class Rl{static area(e){const i=e.length;let r=0;for(let l=i-1,c=0;c<i;l=c++)r+=e[l].x*e[c].y-e[c].x*e[l].y;return r*.5}static isClockWise(e){return Rl.area(e)<0}static triangulateShape(e,i){const r=[],l=[],c=[];Gy(e),Vy(r,e);let h=e.length;i.forEach(Gy);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,Vy(r,i[p]);const d=CR.triangulate(r,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function Gy(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vy(s,e){for(let i=0;i<e.length;i++)s.push(e[i].x),s.push(e[i].y)}class Xp extends oi{constructor(e=new wS([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:i};const r=[],l=[],c=[],h=[];let d=0,p=0;if(Array.isArray(e)===!1)v(e);else for(let g=0;g<e.length;g++)v(e[g]),this.addGroup(d,p,g),d+=p,p=0;this.setIndex(r),this.setAttribute("position",new si(l,3)),this.setAttribute("normal",new si(c,3)),this.setAttribute("uv",new si(h,2));function v(g){const m=l.length/3,_=g.extractPoints(i);let M=_.shape;const E=_.holes;Rl.isClockWise(M)===!1&&(M=M.reverse());for(let S=0,x=E.length;S<x;S++){const L=E[S];Rl.isClockWise(L)===!0&&(E[S]=L.reverse())}const T=Rl.triangulateShape(M,E);for(let S=0,x=E.length;S<x;S++){const L=E[S];M=M.concat(L)}for(let S=0,x=M.length;S<x;S++){const L=M[S];l.push(L.x,L.y,0),c.push(0,0,1),h.push(L.x,L.y)}for(let S=0,x=T.length;S<x;S++){const L=T[S],R=L[0]+m,N=L[1]+m,Y=L[2]+m;r.push(R,N,Y),p+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),i=this.parameters.shapes;return kR(i,e)}static fromJSON(e,i){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const h=i[e.shapes[l]];r.push(h)}return new Xp(r,e.curveSegments)}}function kR(s,e){if(e.shapes=[],Array.isArray(s))for(let i=0,r=s.length;i<r;i++){const l=s[i];e.shapes.push(l.uuid)}else e.shapes.push(s.uuid);return e}class LS extends Nn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const mp=new je,Xy=new W,ky=new W;class qR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fp,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Xy.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xy),ky.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ky),i.updateMatrixWorld(),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qy=new je,Ml=new W,gp=new W;class YR extends qR{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),Ml.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ml),gp.copy(r.position),gp.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(gp),r.updateMatrixWorld(),l.makeTranslation(-Ml.x,-Ml.y,-Ml.z),qy.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qy)}}class WR extends LS{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new YR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jR extends LS{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Yy=new je;class ZR{constructor(e,i,r=0,l=1/0){this.ray=new Kc(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return Yy.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yy),this}intersectObject(e,i=!0,r=[]){return Np(e,this,r,i),r.sort(Wy),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Np(e[l],this,r,i);return r.sort(Wy),r}}function Wy(s,e){return s.distance-e.distance}function Np(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Np(c[h],e,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);function Jr(s,e,i,r,l,c){s.beginPath(),s.moveTo(e+c,i),s.arcTo(e+r,i,e+r,i+l,c),s.arcTo(e+r,i+l,e,i+l,c),s.arcTo(e,i+l,e,i,c),s.arcTo(e,i,e+r,i,c),s.closePath()}function KR(s,e,i,r,l,c){const h=e.width/e.height,d=l/c;let p=0,v=0,g=e.width,m=e.height;h>d?(g=e.height*d,p=(e.width-g)/2):(m=e.width/d,v=(e.height-m)/2),s.drawImage(e,p,v,g,m,i,r,l,c)}function QR(s,e,i,r,l,c,h){const[d,p,v]=i||["#1b2a4a","#2b4570","#ffd166"],g=r+c/2,m=l+h/2;s.save(),Jr(s,r,l,c,h,18),s.clip();const _=s.createLinearGradient(r,l,r+c,l+h);_.addColorStop(0,d),_.addColorStop(.65,p),_.addColorStop(1,"#090b14"),s.fillStyle=_,s.fillRect(r,l,c,h);const M=s.createRadialGradient(g,m-20,12,g,m-20,c*.65);M.addColorStop(0,`${v}55`),M.addColorStop(.5,`${v}18`),M.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=M,s.fillRect(r,l,c,h);for(let E=0;E<28;E++){const T=r+((Math.sin(E*78.233)*.5+.5)*.92+.04)*c,S=l+((Math.cos(E*45.164)*.5+.5)*.88+.04)*h,x=E%4*1.1+1.2;s.beginPath(),s.arc(T,S,x,0,Math.PI*2),s.fillStyle=E%3===0?`${v}bb`:"rgba(255,255,255,0.45)",s.fill()}switch(s.strokeStyle=v,s.fillStyle=v,s.lineCap="round",s.lineJoin="round",e){case"chalkboard":{s.fillStyle="#12332a",Jr(s,g-170,m-115,340,210,14),s.fill(),s.lineWidth=10,s.strokeStyle="#c88a4b",s.stroke(),s.fillStyle="#fff9e6",s.font='bold 64px "Cormorant Garamond", Georgia, serif',s.textAlign="center",s.fillText("20 / 11",g,m-12),s.font='italic 28px "Cormorant Garamond", Georgia, serif',s.fillStyle=v,s.fillText("Tri Ân Thầy Cô",g,m+44),s.fillStyle="#a46b34",s.fillRect(g-120,m+90,240,12);break}case"phoenix":{s.strokeStyle="#4a251d",s.lineWidth=7,s.beginPath(),s.moveTo(r+25,m+95),s.quadraticCurveTo(g-20,m+10,r+c-40,m-95),s.stroke(),[[g-80,m+10,34],[g+10,m-45,42],[g+95,m-60,30],[g-10,m+35,26]].forEach(([T,S,x])=>{for(let L=0;L<5;L++){const R=L/5*Math.PI*2;s.beginPath(),s.ellipse(T+Math.cos(R)*x*.55,S+Math.sin(R)*x*.55,x*.45,x*.24,R,0,Math.PI*2),s.fillStyle=L%2===0?"#ff5c77":"#ff8fa3",s.fill()}s.beginPath(),s.arc(T,S,x*.18,0,Math.PI*2),s.fillStyle="#ffd166",s.fill()});break}case"book":{s.fillStyle="rgba(255,248,230,0.92)",s.beginPath(),s.moveTo(g,m-40),s.quadraticCurveTo(g-85,m-75,g-165,m-30),s.lineTo(g-165,m+95),s.quadraticCurveTo(g-85,m+55,g,m+95),s.quadraticCurveTo(g+85,m+55,g+165,m+95),s.lineTo(g+165,m-30),s.quadraticCurveTo(g+85,m-75,g,m-40),s.fill(),s.strokeStyle=v,s.lineWidth=4,s.beginPath(),s.moveTo(g,m-40),s.lineTo(g,m+95),s.stroke();for(let E=-2;E<=2;E++)s.beginPath(),s.moveTo(g+E*14,m-50),s.lineTo(g+E*52,m-160),s.strokeStyle=`${v}66`,s.lineWidth=3,s.stroke();break}case"sunset":{const E=s.createRadialGradient(g,m-30,15,g,m-30,130);E.addColorStop(0,"#fff3b0"),E.addColorStop(.4,v),E.addColorStop(1,"rgba(255,158,100,0)"),s.fillStyle=E,s.beginPath(),s.arc(g,m-30,130,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255,255,255,0.65)",s.lineWidth=6,Jr(s,g-125,m-135,250,260,12),s.stroke(),s.beginPath(),s.moveTo(g,m-135),s.lineTo(g,m+125),s.moveTo(g-125,m-5),s.lineTo(g+125,m-5),s.stroke();break}case"group":{s.strokeStyle=`${v}88`,s.lineWidth=2.5,s.beginPath(),s.moveTo(r+20,m-120),s.quadraticCurveTo(g,m-60,r+c-20,m-120),s.stroke();for(let T=0;T<9;T++){const S=(T+1)/10,x=r+20+S*(c-40),L=m-120+Math.sin(S*Math.PI)*30;s.beginPath(),s.arc(x,L,6,0,Math.PI*2),s.fillStyle="#fff3b0",s.fill()}[-110,-55,0,55,110].forEach((T,S)=>{const x=m+15+(S%2===0?-8:4);s.fillStyle=S===2?v:"rgba(255,255,255,0.85)",s.beginPath(),s.arc(g+T,x,20,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(g+T,x+68,26,42,0,Math.PI,Math.PI*2),s.fill()});break}case"paperplane":{s.setLineDash([8,10]),s.strokeStyle=`${v}aa`,s.lineWidth=3,s.beginPath(),s.moveTo(g-150,m+120),s.bezierCurveTo(g-60,m+80,g-10,m+10,g+20,m-20),s.stroke(),s.setLineDash([]),s.fillStyle="#ffffff",s.beginPath(),s.moveTo(g+125,m-95),s.lineTo(g-55,m-15),s.lineTo(g+20,m+15),s.closePath(),s.fill(),s.fillStyle=v,s.beginPath(),s.moveTo(g+125,m-95),s.lineTo(g+20,m+15),s.lineTo(g+40,m+75),s.closePath(),s.fill();break}case"lantern":{const E=s.createRadialGradient(g,m-20,10,g,m-20,95);E.addColorStop(0,"#fffbe6"),E.addColorStop(.55,"#ffb703"),E.addColorStop(1,"#fb8500"),s.fillStyle=E,s.beginPath(),s.moveTo(g-65,m-95),s.quadraticCurveTo(g,m-125,g+65,m-95),s.lineTo(g+45,m+45),s.lineTo(g-45,m+45),s.closePath(),s.fill(),s.strokeStyle="rgba(255,255,255,0.6)",s.lineWidth=3,s.beginPath(),s.ellipse(g,m+45,45,10,0,0,Math.PI*2),s.stroke();break}case"guitar":{s.fillStyle=v,s.beginPath(),s.arc(g-25,m+45,62,0,Math.PI*2),s.arc(g+15,m-10,44,0,Math.PI*2),s.fill(),s.strokeStyle="#1b2d2a",s.lineWidth=10,s.beginPath(),s.moveTo(g+35,m-35),s.lineTo(g+125,m-135),s.stroke(),s.fillStyle="#0f1f1c",s.beginPath(),s.arc(g-10,m+25,22,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.font="bold 42px serif",s.fillText("♪",g-120,m-70),s.fillText("♫",g+80,m+50);break}case"gradcap":{s.fillStyle=v,s.beginPath(),s.moveTo(g,m-85),s.lineTo(g+135,m-25),s.lineTo(g,m+35),s.lineTo(g-135,m-25),s.closePath(),s.fill(),s.fillStyle="rgba(255,255,255,0.9)",s.beginPath(),s.moveTo(g-75,m+15),s.lineTo(g-75,m+75),s.quadraticCurveTo(g,m+105,g+75,m+75),s.lineTo(g+75,m+15),s.lineTo(g,m+46),s.closePath(),s.fill(),s.strokeStyle="#ffd166",s.lineWidth=4,s.beginPath(),s.moveTo(g+125,m-22),s.lineTo(g+125,m+65),s.stroke();break}case"bouquet":default:{s.fillStyle="#e5989b",s.beginPath(),s.moveTo(g-75,m-10),s.lineTo(g+75,m-10),s.lineTo(g,m+125),s.closePath(),s.fill(),[[g-48,m-45,"#ff758f"],[g+48,m-45,"#ff8fa3"],[g,m-75,"#ffd166"],[g-22,m-15,"#ffb3c1"],[g+22,m-15,"#ff4d6d"]].forEach(([T,S,x])=>{s.beginPath(),s.arc(T,S,32,0,Math.PI*2),s.fillStyle=x,s.fill(),s.beginPath(),s.arc(T,S,11,0,Math.PI*2),s.fillStyle="#fff3b0",s.fill()});break}}s.restore()}function jy(s,e,i,r,l,c=null){s.clearRect(0,0,r,l),s.fillStyle="#090a12",Jr(s,4,4,r-8,l-8,26),s.fill();const h=16,d=16,p=r-32,v=l-32;c?(s.save(),Jr(s,h,d,p,v,22),s.clip(),KR(s,c,h,d,p,v),s.restore()):QR(s,e.iconType,e.themeColors,h,d,p,v);const g=s.createLinearGradient(0,0,r,l);g.addColorStop(0,"#ffd166"),g.addColorStop(.5,"#ff9ebb"),g.addColorStop(1,"#ffd166"),s.strokeStyle=g,s.lineWidth=4,Jr(s,h,d,p,v,22),s.stroke(),s.strokeStyle="rgba(255, 224, 150, 0.28)",s.lineWidth=1.5,Jr(s,7,7,r-14,l-14,26),s.stroke()}function Up(s,e,i){const c=document.createElement("canvas");c.width=800,c.height=600;const h=c.getContext("2d");if(jy(h,s,e,800,600,null),s!=null&&s.imageUrl){const d=new Image;d.crossOrigin="anonymous",d.onload=()=>{jy(h,s,e,800,600,d),typeof i=="function"&&i(c)},d.src=s.imageUrl}return c}const El=4200,Pi=[new Ce("#ffd166"),new Ce("#ff758f"),new Ce("#ff9e64"),new Ce("#72efdd"),new Ce("#c77dff"),new Ce("#fff8e7")];function JR(){const e=document.createElement("canvas");e.width=64,e.height=64;const i=e.getContext("2d"),r=64/2,l=i.createRadialGradient(r,r,0,r,r,r);l.addColorStop(0,"rgba(255, 255, 255, 1)"),l.addColorStop(.22,"rgba(255, 245, 225, 0.85)"),l.addColorStop(.5,"rgba(255, 215, 140, 0.28)"),l.addColorStop(1,"rgba(255, 215, 140, 0)"),i.fillStyle=l,i.fillRect(0,0,64,64);const c=new Rp(e);return c.needsUpdate=!0,c}function $R(s){const e=new Float32Array(s*3),i=new Float32Array(s*3),r=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s),h=5.6,d=3.6,p=h/2,v=d/2,g=-.15;for(let m=0;m<s;m++){const _=m*3;c[m]=Math.random()*Math.PI*2;const M=Math.random()*Math.PI*2,E=Math.acos(2*Math.random()-1),T=12+Math.random()*16;e[_]=T*Math.sin(E)*Math.cos(M),e[_+1]=T*Math.sin(E)*Math.sin(M),e[_+2]=T*Math.cos(E)-2;const S=Math.random();let x=0,L=0,R=0,N=Pi[Math.floor(Math.random()*Pi.length)];if(S<.24){const q=Math.random()*(2*h+2*d);q<h?(x=-p+q,L=v):q<h+d?(x=p,L=v-(q-h)):q<2*h+d?(x=p-(q-h-d),L=-v):(x=-p,L=-v+(q-2*h-d)),x+=(Math.random()-.5)*.09,L+=(Math.random()-.5)*.09,R=(Math.random()-.5)*.14,N=Math.random()<.65?Pi[0]:Pi[5]}else if(S<.44){const q=Math.random();x=(Math.random()<.5?-1:1)*p*(1-q)+(Math.random()-.5)*.08,L=v*(1-q)+g*q+(Math.random()-.5)*.08,R=.14+q*.08,N=Math.random()<.7?Pi[0]:Pi[2]}else if(S<.56){const q=Math.random(),U=Math.random()<.5?-1:1;x=U*p*(1-q)+U*.45*q+(Math.random()-.5)*.07,L=-v*(1-q)+(g-.1)*q+(Math.random()-.5)*.07,R=.08,N=Pi[5]}else if(S<.72){const q=Math.random()*Math.PI*2,U=Math.sqrt(Math.random())*.036,w=16*Math.pow(Math.sin(q),3),X=13*Math.cos(q)-5*Math.cos(2*q)-2*Math.cos(3*q)-Math.cos(4*q);x=w*U,L=X*U+g,R=.24+(Math.random()-.5)*.08,N=Math.random()<.72?Pi[1]:Pi[0]}else x=(Math.random()-.5)*h*.94,L=(Math.random()-.5)*d*.92,R=(Math.random()-.5)*.22,N=Pi[Math.floor(Math.random()*Pi.length)];i[_]=x,i[_+1]=L,i[_+2]=R;const Y=Math.random()*Math.PI*2,G=8.5+Math.random()*14.5,P=(Math.random()-.5)*12;r[_]=Math.cos(Y)*G,r[_+1]=P,r[_+2]=Math.sin(Y)*G-2,l[_]=N.r,l[_+1]=N.g,l[_+2]=N.b}return{startPositions:e,envelopePositions:i,galaxyPositions:r,colors:l,phases:c}}function tw({stage:s,photos:e,onEnvelopeFormed:i,onEnvelopeClick:r,onSelectPhoto:l}){const c=Ve.useRef(null),h=Ve.useRef(s),d=Ve.useRef({onEnvelopeFormed:i,onEnvelopeClick:r,onSelectPhoto:l}),p=Ve.useRef([]),v=Ve.useRef(null);return Ve.useEffect(()=>{h.current=s},[s]),Ve.useEffect(()=>{d.current={onEnvelopeFormed:i,onEnvelopeClick:r,onSelectPhoto:l}},[i,r,l]),Ve.useEffect(()=>{!e||!v.current||v.current(e)},[e]),Ve.useEffect(()=>{const g=c.current;if(!g)return;const m=g.clientWidth||window.innerWidth,_=g.clientHeight||window.innerHeight,M=m/_,E=new cR,T=new ai(48,M,.1,120),S=Bt=>Bt>=1.15?19.6:Math.min(35.5,19.6*(1.15/Math.max(Bt,.52)));T.position.set(0,.1,S(M));const x=new uR({antialias:!0,alpha:!0,powerPreference:"high-performance"});x.setSize(m,_),x.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),x.setClearColor(0,0),g.appendChild(x.domElement);const L=new jR(16774628,.9);E.add(L);const R=new WR(16765286,2.2,30);R.position.set(0,2,8),E.add(R);const N=$R(El),Y=new Float32Array(N.startPositions),G=new Float32Array(El*3),P=new oi;P.setAttribute("position",new Ti(Y,3)),P.setAttribute("color",new Ti(N.colors,3));const q=JR(),U=new TS({size:.2,map:q,vertexColors:!0,transparent:!0,opacity:.92,blending:_p,depthWrite:!1,sizeAttenuation:!0}),w=new hR(P,U);E.add(w);const X=new ur;E.add(X);const ft=new jr({color:1709352,transparent:!0,opacity:0,side:ri,depthWrite:!1}),ct=new Yn(new lr(5.55,3.55),ft);X.add(ct);const _t=new AR(new Eo(5.6,3.6,.14)),ht=new Ap({color:16765286,transparent:!0,opacity:0}),Z=new fR(_t,ht);X.add(Z);const rt=new ur;rt.position.set(0,1.8,.08),X.add(rt);const tt=new wS;tt.moveTo(-2.8,0),tt.lineTo(2.8,0),tt.lineTo(0,-1.95),tt.closePath();const At=new jr({color:2497850,transparent:!0,opacity:0,side:ri,depthWrite:!1}),H=new Yn(new Xp(tt),At);rt.add(H);const z=new oi().setFromPoints([new W(-2.8,0,.01),new W(0,-1.95,.01),new W(2.8,0,.01)]),Tt=new Ap({color:16765286,transparent:!0,opacity:0});rt.add(new ES(z,Tt));const Nt=new Yn(new lr(6.2,4.2),new jr({visible:!1}));X.add(Nt);const A=new ur;A.visible=!1,A.scale.set(.001,.001,.001),A.rotation.x=.25,A.rotation.z=-.03,E.add(A);const V=[],nt=[],$=9,St=new lr(2.72,2.04),bt=new lr(2.84,2.16),Dt=Bt=>{const Yt=Array.isArray(Bt)&&Bt.length>0?Bt:[];if(Yt.length===nt.length&&nt.length>0){nt.forEach((F,Ct)=>{var Ht;const dt=Yt[Ct],gt=Up(dt,Ct,()=>{F.texture&&(F.texture.needsUpdate=!0)}),vt=new Rp(gt);vt.colorSpace=Mi,vt.anisotropy=4,(Ht=F.texture)==null||Ht.dispose(),F.texture=vt,F.material.map=vt,F.material.needsUpdate=!0});return}for(;A.children.length>0;)A.remove(A.children[0]);nt.forEach(F=>{var Ct;(Ct=F.texture)==null||Ct.dispose(),F.material.dispose(),F.backingMat.dispose()}),V.length=0,nt.length=0;const pe=Yt.length;for(let F=0;F<pe;F++){const Ct=Yt[F],dt=Up(Ct,F,()=>{var Ue;(Ue=nt[F])!=null&&Ue.texture&&(nt[F].texture.needsUpdate=!0)}),gt=new Rp(dt);gt.colorSpace=Mi,gt.anisotropy=4;const vt=new ur,Ht=F/pe*Math.PI*2;vt.position.set(Math.sin(Ht)*$,Math.sin(Ht*2)*.25,Math.cos(Ht)*$),vt.userData={index:F,baseAngle:Ht,hoverScale:1};const le=new jr({map:gt,transparent:!0,opacity:.98,side:ri}),ge=new Yn(St,le);ge.userData={index:F},vt.add(ge);const se=new jr({color:16765286,transparent:!0,opacity:.22,side:ri}),ce=new Yn(bt,se);ce.position.z=-.025,vt.add(ce),A.add(vt),V.push(ge),nt.push({holder:vt,mesh:ge,material:le,backingMat:se,texture:gt})}p.current=nt};Dt(e),v.current=Dt;let O=0,Mt=performance.now(),kt=0,jt=!1,Gt=h.current,Jt=0,Vt=.001,Lt=0,de=.22,B=!1,C={x:0,y:0},ut=0,yt=-1,xt=!1;const Et=new ZR,Kt=new te(-99,-99),Ot=(Bt,Yt)=>{const pe=x.domElement.getBoundingClientRect();Kt.x=(Bt-pe.left)/pe.width*2-1,Kt.y=-((Yt-pe.top)/pe.height)*2+1},Pt=Bt=>{B=!0,C={x:Bt.clientX,y:Bt.clientY},ut=Bt.clientX,Ot(Bt.clientX,Bt.clientY)},ie=Bt=>{if(Ot(Bt.clientX,Bt.clientY),B&&h.current==="orbit"){const Yt=Bt.clientX-ut;Lt+=Yt*.0065,de=Si.clamp(Yt*.045,-2.5,2.5),ut=Bt.clientX}},Rt=Bt=>{var pe,F,Ct,dt;const Yt=Math.hypot(Bt.clientX-C.x,Bt.clientY-C.y);if(B=!1,Yt<9){if(Ot(Bt.clientX,Bt.clientY),Et.setFromCamera(Kt,T),h.current==="ready")Et.intersectObject(Nt,!1).length>0&&((F=(pe=d.current).onEnvelopeClick)==null||F.call(pe));else if(h.current==="orbit"){const gt=Et.intersectObjects(V,!1);if(gt.length>0){const vt=gt[0].object.userData.index;(dt=(Ct=d.current).onSelectPhoto)==null||dt.call(Ct,vt)}}}},qt=x.domElement;qt.addEventListener("pointerdown",Pt),window.addEventListener("pointermove",ie),window.addEventListener("pointerup",Rt);const me=()=>{if(!g)return;const Bt=g.clientWidth||window.innerWidth,Yt=g.clientHeight||window.innerHeight,pe=Bt/Yt;T.aspect=pe,T.position.z=S(pe),T.updateProjectionMatrix(),x.setSize(Bt,Yt)};window.addEventListener("resize",me);const ae=new W,It=Bt=>{var dt,gt;O=requestAnimationFrame(It);const Yt=Math.min((Bt-Mt)/1e3,.05);Mt=Bt;const pe=Bt*.001,F=h.current;if(F!==Gt){if(F==="dark"||F==="gathering"){kt=0,jt=!1,Jt=0,Vt=.001,A.visible=!1,A.scale.set(.001,.001,.001),rt.rotation.x=0,X.visible=!0,X.scale.set(1,1,1);for(let vt=0;vt<Y.length;vt++)Y[vt]=N.startPositions[vt]}else if(F==="opening"){Jt=0,A.visible=!0,Vt=.02,Lt=-.6,de=.85;for(let vt=0;vt<El;vt++){const Ht=vt*3,le=Y[Ht],ge=Y[Ht+1],se=Y[Ht+2],ce=Math.hypot(le,ge,se)||1,Ue=4.5+Math.random()*8.5;G[Ht]=le/ce*Ue+(Math.random()-.5)*2.5,G[Ht+1]=ge/ce*Ue+(Math.random()-.5)*2.5,G[Ht+2]=se/ce*Ue+(Math.random()-.5)*3}}Gt=F}const Ct=P.attributes.position;if(F==="dark")U.opacity=.12,ft.opacity=0,ht.opacity=0,At.opacity=0,Tt.opacity=0;else if(F==="gathering"||F==="ready"){F==="gathering"?(kt=Math.min(1,kt+Yt*.2),kt>=.98&&!jt&&(jt=!0,(gt=(dt=d.current).onEnvelopeFormed)==null||gt.call(dt))):kt=1;const vt=1-Math.pow(1-kt,3),Ht=(1-vt)*3.6;U.opacity=.35+vt*.6,U.size=.17+Math.sin(pe*2)*.015;for(let Ue=0;Ue<El;Ue++){const Re=Ue*3,sn=N.startPositions[Re],an=N.startPositions[Re+1],ea=N.startPositions[Re+2],ns=N.envelopePositions[Re],Ca=N.envelopePositions[Re+1],na=N.envelopePositions[Re+2],li=Ht*(.6+Ue%7*.08),Ii=Si.lerp(sn,ns,vt),ui=Si.lerp(an,Ca,vt),ia=Si.lerp(ea,na,vt),Fi=Math.cos(li),gr=Math.sin(li),D=Ii*Fi-ia*gr,Q=Ii*gr+ia*Fi,st=vt>.85?.025:0;Y[Re]=D+Math.sin(pe*1.8+N.phases[Ue])*st,Y[Re+1]=ui+Math.cos(pe*1.5+N.phases[Ue])*st,Y[Re+2]=Q}Ct.needsUpdate=!0;const le=Si.clamp((vt-.72)/.28,0,1),ge=xt?1.45:1;ft.opacity=le*.22*ge,ht.opacity=le*.55*ge,At.opacity=le*.26*ge,Tt.opacity=le*.65*ge;const se=Math.sin(pe*1.6)*.12*le,ce=Math.sin(pe*.9)*.14*le;X.position.y=se,X.rotation.y=ce,w.position.y=se,w.rotation.y=ce}else if(F==="opening"||F==="orbit"){Jt+=Yt;const vt=Math.min(1,Jt/1.35);rt.rotation.x=-vt*Math.PI*.82;const Ht=Math.max(0,1-Jt/1.65);ft.opacity=Ht*.22,ht.opacity=Ht*.55,At.opacity=Ht*.26,Tt.opacity=Ht*.65,X.scale.setScalar(1+(1-Ht)*.35),Ht<=.01&&(X.visible=!1),w.position.y=0,w.rotation.y+=Yt*.04,U.opacity=.72,U.size=.15;const le=Jt<.7?.018:.045;for(let ge=0;ge<El;ge++){const se=ge*3;Jt<.9&&(Y[se]+=G[se]*Yt,Y[se+1]+=G[se+1]*Yt,Y[se+2]+=G[se+2]*Yt,G[se]*=.94,G[se+1]*=.94,G[se+2]*=.94),Y[se]=Si.lerp(Y[se],N.galaxyPositions[se],le),Y[se+1]=Si.lerp(Y[se+1],N.galaxyPositions[se+1],le),Y[se+2]=Si.lerp(Y[se+2],N.galaxyPositions[se+2],le)}Ct.needsUpdate=!0,Vt=Si.lerp(Vt,1,Math.min(1,Yt*1.65)),A.scale.setScalar(Vt),B||(de=Si.lerp(de,.18,Yt*1.8),Lt+=de*Yt),A.rotation.y=Lt,nt.forEach((ge,se)=>{const{holder:ce,material:Ue,backingMat:Re}=ge;ce.getWorldPosition(ae),ce.lookAt(T.position.x,ae.y,T.position.z);const sn=ce.userData.baseAngle;ce.position.y=Math.sin(pe*1.4+sn*2)*.26;const an=se===yt?1.13:1;ce.userData.hoverScale=Si.lerp(ce.userData.hoverScale,an,Yt*10),ce.scale.setScalar(ce.userData.hoverScale);const ea=Si.clamp((ae.z+8)/16,.55,1);Ue.opacity=se===yt?1:.72+ea*.28,Re.opacity=se===yt?.62:.18+ea*.14})}if(Et.setFromCamera(Kt,T),F==="ready")xt=Et.intersectObject(Nt,!1).length>0,yt=-1,qt.style.cursor=xt?"pointer":"default";else if(F==="orbit"){xt=!1;const vt=Et.intersectObjects(V,!1);yt=vt.length>0?vt[0].object.userData.index:-1,qt.style.cursor=yt>=0?"pointer":B?"grabbing":"grab"}else xt=!1,yt=-1,qt.style.cursor="default";x.render(E,T)};return O=requestAnimationFrame(It),()=>{cancelAnimationFrame(O),qt.removeEventListener("pointerdown",Pt),window.removeEventListener("pointermove",ie),window.removeEventListener("pointerup",Rt),window.removeEventListener("resize",me),P.dispose(),U.dispose(),q.dispose(),ct.geometry.dispose(),ft.dispose(),_t.dispose(),ht.dispose(),H.geometry.dispose(),At.dispose(),z.dispose(),Tt.dispose(),St.dispose(),bt.dispose(),nt.forEach(Bt=>{var Yt;(Yt=Bt.texture)==null||Yt.dispose(),Bt.material.dispose(),Bt.backingMat.dispose()}),x.dispose(),x.domElement.parentNode===g&&g.removeChild(x.domElement)}},[]),wt.jsx("div",{ref:c,className:"three-stage","aria-label":"Không gian 3D thiệp 20/11"})}const ew={teacherTitle:"Kính gửi Thầy / Cô kính yêu",className:"Tập thể lớp 11B10",badgeText:"Tri Ân Ngày Nhà Giáo Việt Nam 20 • 11",headline:"Người Gieo Mầm Ánh Sáng",shortWish:"Cảm ơn Thầy Cô đã kiên nhẫn thắp lên ngọn lửa tri thức và dẫn dắt chúng em bằng cả trái tim. Chúc Thầy Cô luôn mạnh khỏe, hạnh phúc và mãi rạng ngời bên những chuyến đò thanh xuân!",fullLetter:[`Có một nghề bụi phấn bám đầy tay,
Người ta bảo đó là nghề trong sạch nhất.
Có một nghề không trồng cây vào đất,
Mà mang lại cho đời đầy trái ngọt hoa tươi.`,"Thầy Cô kính mến,","Nhân ngày Nhà giáo Việt Nam 20/11, tập thể lớp 11B10 chúng em xin gửi đến Thầy Cô những lời chúc chân thành và lòng biết ơn sâu sắc nhất. Cảm ơn Thầy Cô đã không quản ngại nắng mưa, tận tụy từng trang giáo án, kiên nhẫn lắng nghe những ngây ngô tuổi học trò và nâng đỡ chúng em qua từng chặng đường trưởng thành.","Mỗi bài giảng của Thầy Cô không chỉ truyền đạt kiến thức mà còn gieo vào lòng chúng em niềm tin, lòng nhân ái và ước mơ vươn xa. Những nụ cười rạng rỡ trên bục giảng, những cái gật đầu khích lệ hay cả những lời nhắc nhở ân cần đều trở thành ký ức đẹp đẽ nhất của thanh xuân.","Kính chúc Thầy Cô luôn dồi dào sức khỏe, giữ mãi ngọn lửa nhiệt huyết với sự nghiệp trồng người và luôn bình an, hạnh phúc bên gia đình cùng 42 thành viên 11B10!"],photos:[{id:"class-01",title:"Khoảnh Khắc Áo Đấu 11B10",date:"Lớp 11B10 • SS: 42",caption:"Các chàng trai 11B10 rạng rỡ giơ cao những chiếc áo số trước bảng xanh thân thương.",themeColors:["#1b2a4a","#2b4570","#ffd166"],iconType:"chalkboard",imageUrl:"./photos/class-01.webp"},{id:"class-02",title:"Những Số Áo Thanh Xuân",date:"Kỷ Niệm Lớp Học",caption:"Từ số 99, 07, 14 đến 17 — mỗi chiếc áo là một nét tính cách gắn kết 11B10.",themeColors:["#162936","#285266","#72efdd"],iconType:"group",imageUrl:"./photos/class-02.webp"},{id:"class-03",title:"Nụ Cười Trên Bục Giảng",date:"Phòng Học 11B10",caption:"Khoảnh khắc hồn nhiên, vui tươi khi cả lớp cùng nhìn về phía những tấm áo mới.",themeColors:["#211a3b","#413275","#c77dff"],iconType:"chalkboard",imageUrl:"./photos/class-03.webp"},{id:"class-04",title:"Tiếng Vỗ Tay Giòn Giã",date:"Giờ Sinh Hoạt",caption:"Cả lớp cùng vỗ tay cổ vũ nhiệt tình trong niềm vui rộn ràng của tuổi học trò.",themeColors:["#3b1f2b","#7d3b43","#ff9e64"],iconType:"group",imageUrl:"./photos/class-04.webp"},{id:"class-05",title:"Sắc Trắng Đồng Phục",date:"Thanh Xuân 11B10",caption:"Dưới bức ảnh Bác và bảng đen phấn trắng, kỷ niệm tuổi mười bảy mãi vẹn nguyên.",themeColors:["#112b3c","#205375","#90e0ef"],iconType:"book",imageUrl:"./photos/class-05.webp"},{id:"class-06",title:"Đội Hình 11B10 Tự Tin",date:"Trước Giờ Ra Sân",caption:"Ánh mắt lấp lánh quyết tâm và niềm tự hào khi khoác chung màu áo của lớp.",themeColors:["#2c1b12","#5e3924","#ffd166"],iconType:"lantern",imageUrl:"./photos/class-06.webp"},{id:"class-07",title:"Bầu Không Khí Rộn Ràng",date:"Ký Ức Phấn Trắng",caption:"Những tràng cười giòn tan vang khắp phòng học, xua tan bao mệt mỏi bài vở.",themeColors:["#1b2d2a","#2e574f","#80ed99"],iconType:"guitar",imageUrl:"./photos/class-07.webp"},{id:"class-08",title:"Tinh Thần Đồng Đội",date:"Tập Thể 11B10",caption:"Sát cánh bên nhau từ sân cỏ đến trang vở, tạo nên một 11B10 thật đặc biệt.",themeColors:["#1e1b33","#3b3466","#f4a261"],iconType:"paperplane",imageUrl:"./photos/class-08.webp"},{id:"class-09",title:"Góc Bảng Xanh Thân Thuộc",date:"Sĩ Số 42 • 11B10",caption:'Dòng chữ "Lớp 11B10" góc phải bảng đen luôn nhắc nhớ chúng em về mái nhà chung.',themeColors:["#3b1628","#78213e","#ff758f"],iconType:"chalkboard",imageUrl:"./photos/class-09.webp"},{id:"class-10",title:"Rạng Rỡ Tuổi Mười Bảy",date:"Khoảnh Khắc Đáng Nhớ",caption:"Lưu lại ánh nhìn trìu mến và những phút giây vô tư bên bạn bè cùng trang lứa.",themeColors:["#1b2a4a","#2b4570","#ffd166"],iconType:"sunset",imageUrl:"./photos/class-10.webp"},{id:"class-11",title:"Trang Kỷ Yếu Lớp Học",date:"Tháng 11 • Tri Ân",caption:"Từng gương mặt thân quen trên lớp học sẽ mãi là ký ức không thể nào quên.",themeColors:["#162936","#285266","#72efdd"],iconType:"gradcap",imageUrl:"./photos/class-11.webp"},{id:"class-12",title:"Đại Gia Đình 11B10 & Thầy",date:"Sân Trường Nắng Đẹp",caption:"Cả 42 thành viên 11B10 quây quần rạng rỡ bên Thầy dưới tán cây xanh sân trường.",themeColors:["#211a3b","#413275","#ffd166"],iconType:"group",imageUrl:"./photos/class-12.webp"},{id:"class-13",title:"Nắng Sân Trường & Tình Thầy Trò",date:"Kỷ Niệm 20/11",caption:"Những túi quà nhỏ bé nhưng đong đầy tấm lòng tri ân sâu sắc gửi tới Thầy Cô.",themeColors:["#361529","#6e254e","#ff85a1"],iconType:"bouquet",imageUrl:"./photos/class-13.webp"},{id:"class-14",title:"Thả Tim Gửi Thầy Yêu Quý",date:"Ngày Nhà Giáo 20/11",caption:"Cả lớp cùng giơ tay tạo hình trái tim gửi trọn yêu thương tới người lái đò tận tụy.",themeColors:["#2c1b12","#5e3924","#ff758f"],iconType:"phoenix",imageUrl:"./photos/class-14.webp"},{id:"class-15",title:"Tập Thể 11B10 Bên Cô Kính Yêu",date:"Kỷ Niệm Lớp 11B10",caption:"Khoảnh khắc ấm áp cả lớp quây quần bên Cô cùng món quà nhỏ đầy yêu thương.",themeColors:["#361529","#6e254e","#ff85a1"],iconType:"bouquet",imageUrl:"./photos/class-15.jpg"},{id:"class-16",title:"Nụ Cười Rạng Rỡ Cùng Cô",date:"Mái Trường 11B10",caption:"Những nụ cười trong trẻo bên Cô sẽ mãi là ký ức đẹp nhất của tuổi học trò.",themeColors:["#1b2a4a","#2b4570","#ffd166"],iconType:"group",imageUrl:"./photos/class-16.jpg"}]},Pc={C3:130.81,D3:146.83,E3:164.81,F3:174.61,G3:196,A3:220,B3:246.94,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},vp=[{note:"E4",chord:["C3","G3","E4"],dur:.75},{note:"G4",chord:null,dur:.75},{note:"A4",chord:["F3","C4","A4"],dur:1.5},{note:"G4",chord:null,dur:.75},{note:"E4",chord:["C3","G3","E4"],dur:.75},{note:"D4",chord:["G3","D4"],dur:1.5},{note:"C4",chord:["A3","E4"],dur:.75},{note:"D4",chord:null,dur:.75},{note:"E4",chord:["C3","G3"],dur:1.5},{note:"G4",chord:null,dur:.75},{note:"E4",chord:["F3","C4"],dur:.75},{note:"D4",chord:["G3","B3"],dur:1.5},{note:"E4",chord:["C3","G3"],dur:.75},{note:"G4",chord:null,dur:.75},{note:"C5",chord:["A3","E4"],dur:1.5},{note:"A4",chord:["F3","C4"],dur:.75},{note:"G4",chord:null,dur:.75},{note:"E4",chord:["C3","G3"],dur:1.5},{note:"A4",chord:["F3","C4"],dur:.75},{note:"C5",chord:null,dur:.75},{note:"D5",chord:["G3","D4"],dur:1.5},{note:"C5",chord:["C3","G3"],dur:.75},{note:"A4",chord:["F3","C4"],dur:.75},{note:"G4",chord:["C3","E4"],dur:1.5},{note:"E4",chord:["A3","E4"],dur:.75},{note:"D4",chord:["G3","B3"],dur:.75},{note:"C4",chord:["C3","G3","C4"],dur:2.25}];class nw{constructor(){this.ctx=null,this.masterGain=null,this.delayNode=null,this.isPlaying=!1,this.stepIndex=0,this.loopTimer=null}ensureContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.55,this.delayNode=this.ctx.createDelay(1),this.delayNode.delayTime.value=.28;const i=this.ctx.createGain();i.gain.value=.28;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1800,this.delayNode.connect(r),r.connect(i),i.connect(this.delayNode),r.connect(this.masterGain),this.masterGain.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}playTone(e,i,r,l=.14,c="sine"){if(!this.ctx||!this.masterGain)return;const h=this.ctx.createOscillator(),d=this.ctx.createOscillator(),p=this.ctx.createGain();h.type=c,h.frequency.setValueAtTime(e,i),d.type="triangle",d.frequency.setValueAtTime(e*2,i);const v=this.ctx.createGain();v.gain.value=.14,p.gain.setValueAtTime(1e-4,i),p.gain.exponentialRampToValueAtTime(l,i+.03),p.gain.exponentialRampToValueAtTime(l*.45,i+r*.4),p.gain.exponentialRampToValueAtTime(1e-4,i+r),h.connect(p),d.connect(v),v.connect(p),p.connect(this.masterGain),this.delayNode&&p.connect(this.delayNode),h.start(i),d.start(i),h.stop(i+r+.05),d.stop(i+r+.05)}playSparkleGather(){const e=this.ensureContext();if(!e)return;const i=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((l,c)=>{this.playTone(l,i+c*.12,.7,.06,"sine")})}playEnvelopeOpen(){const e=this.ensureContext();if(!e)return;const i=e.currentTime;[261.63,329.63,392,493.88,523.25,659.25,783.99,987.77,1046.5].forEach((l,c)=>{this.playTone(l,i+c*.065,1.35,.085,"sine")})}scheduleNextStep(){if(!this.isPlaying||!this.ctx)return;const e=vp[this.stepIndex%vp.length],r=e.dur*.56,l=this.ctx.currentTime+.03;e.note&&Pc[e.note]&&this.playTone(Pc[e.note],l,r*1.4,.12,"sine"),e.chord&&e.chord.forEach((c,h)=>{Pc[c]&&this.playTone(Pc[c],l+h*.04,r*1.8,.04,"triangle")}),this.stepIndex=(this.stepIndex+1)%vp.length,this.loopTimer=window.setTimeout(()=>{this.scheduleNextStep()},r*1e3)}startMelody(){this.ensureContext()&&(this.isPlaying||(this.isPlaying=!0,this.stepIndex=0,this.scheduleNextStep()))}stopMelody(){this.isPlaying=!1,this.loopTimer!==null&&(window.clearTimeout(this.loopTimer),this.loopTimer=null)}toggleMusic(){return this.isPlaying?this.stopMelody():this.startMelody(),this.isPlaying}}const zc=new nw;function iw(){const s=ew,[e,i]=Ve.useState("dark"),[r,l]=Ve.useState(!1),[c,h]=Ve.useState(!1),[d,p]=Ve.useState(""),[v,g]=Ve.useState(null),[m,_]=Ve.useState(!1);Ve.useEffect(()=>{if(e!=="dark")return;const Y=window.setTimeout(()=>{i("gathering")},850);return()=>window.clearTimeout(Y)},[e]),Ve.useEffect(()=>{if(e!=="orbit"){p("");return}const Y=s.shortWish;let G=0;const P=window.setInterval(()=>{G+=1,G>=Y.length?(p(Y),window.clearInterval(P)):p(Y.slice(0,G))},32);return()=>window.clearInterval(P)},[e,s.shortWish]);const M=Ve.useCallback(()=>{i(Y=>Y==="gathering"?"ready":Y)},[]),E=Ve.useCallback(()=>{e!=="ready"&&e!=="gathering"||(zc.playEnvelopeOpen(),zc.startMelody(),l(!0),Dd({particleCount:95,spread:85,origin:{y:.52},colors:["#ffd166","#ff758f","#ffe79e","#72efdd","#ffffff"]}),window.setTimeout(()=>{Dd({particleCount:55,angle:60,spread:65,origin:{x:.15,y:.6},colors:["#ffd166","#ff758f","#fff3b0"]}),Dd({particleCount:55,angle:120,spread:65,origin:{x:.85,y:.6},colors:["#ffd166","#ff758f","#fff3b0"]})},240),i("opening"),window.setTimeout(()=>{i("orbit")},1600))},[e]),T=Ve.useCallback(()=>{g(null),_(!1),h(!1),zc.stopMelody(),l(!1),i("dark")},[]),S=Ve.useCallback(()=>{const Y=zc.toggleMusic();l(Y)},[]),[x,L]=Ve.useState(""),R=v!==null?s.photos[v]:null;Ve.useEffect(()=>{if(v===null||!R){L("");return}const Y=Up(R,v,G=>{L(G.toDataURL("image/png"))});L(Y.toDataURL("image/png"))},[v,R]);const N=Ve.useMemo(()=>e==="dark"?.04:e==="gathering"?.16:e==="ready"?.24:.4,[e]);return wt.jsxs("div",{className:"app-root",children:[wt.jsx("div",{className:"ambient-shader-layer",style:{opacity:N},children:wt.jsx(DE,{speed:e==="orbit"?.75:.45,fidelity:.55,hue:32,saturation:1.15,brightness:.9,opacity:1})}),wt.jsx(tw,{stage:e,photos:s.photos,onEnvelopeFormed:M,onEnvelopeClick:E,onSelectPhoto:Y=>g(Y)}),wt.jsx("div",{className:"stage-vignette"}),(e==="opening"||e==="orbit")&&wt.jsxs("header",{className:"hud-top",children:[wt.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[wt.jsx("button",{type:"button",className:"hud-pill",onClick:T,title:"Xem lại hiệu ứng tụ hạt từ đầu",children:"🔄 Xem lại"}),wt.jsx("button",{type:"button",className:"hud-pill",onClick:()=>h(Y=>!Y),children:c?"💌 Hiện lời chúc":"🖼️ Ngắm vòng ảnh"})]}),wt.jsxs("div",{className:"hud-music-wrap",children:[wt.jsxs("button",{type:"button",className:"music-label",onClick:S,"aria-label":r?"Tắt nhạc nền":"Bật nhạc nền",children:[wt.jsxs("span",{className:`music-bars ${r?"music-bars--active":""}`,children:[wt.jsx("span",{}),wt.jsx("span",{}),wt.jsx("span",{})]}),wt.jsx("span",{children:r?"Bụi Phấn · Đang phát":"Bật nhạc 20/11"})]}),wt.jsx(u_,{variant:"play",mode:"dark",hue:38,brightness:r?1.25:.85,ariaLabel:r?"Tạm dừng nhạc":"Phát nhạc",className:"threeui-inline-circle",onClick:S})]})]}),wt.jsxs("main",{className:"ui-overlay",children:[e==="ready"&&wt.jsxs("div",{className:"envelope-prompt",children:[wt.jsxs("div",{className:"envelope-prompt__row",children:[wt.jsx(u_,{variant:"mail",mode:"dark",hue:36,brightness:1.15,ariaLabel:"Mở lá thư 20/11",className:"threeui-inline-circle threeui-mail-btn",onClick:E}),wt.jsx(c_,{variant:"primary",mode:"dark",label:"Chạm Để Mở Lá Thư 20/11",hue:145,saturation:1.05,brightness:1.15,className:"threeui-inline-cta",onClick:E})]}),wt.jsx("p",{className:"envelope-prompt__hint",children:"Nhấn trực tiếp vào phong thư phát sáng hoặc nút để mở"})]}),e==="orbit"&&wt.jsx("div",{className:"central-wish-reveal",children:wt.jsxs("section",{className:`central-wish-card ${c?"central-wish-card--hidden":""}`,"aria-hidden":c,"aria-label":"Lời chúc 20/11 gửi Thầy Cô",children:[wt.jsx("span",{className:"central-wish-card__corner central-wish-card__corner--tl"}),wt.jsx("span",{className:"central-wish-card__corner central-wish-card__corner--tr"}),wt.jsx("span",{className:"central-wish-card__corner central-wish-card__corner--bl"}),wt.jsx("span",{className:"central-wish-card__corner central-wish-card__corner--br"}),wt.jsx("div",{className:"wish-badge",children:s.badgeText}),wt.jsx("p",{className:"wish-teacher",children:s.teacherTitle}),wt.jsx("h1",{className:"wish-headline",children:s.headline}),wt.jsxs("div",{className:"wish-divider","aria-hidden":"true",children:[wt.jsx("span",{}),wt.jsx("i",{children:"✦"}),wt.jsx("span",{})]}),wt.jsx("p",{className:"wish-body",children:d||" "}),wt.jsxs("p",{className:"wish-class",children:["— ",s.className," —"]}),wt.jsx("div",{className:"wish-actions",children:wt.jsx(c_,{variant:"primary",mode:"dark",label:"📜 Đọc Tâm Thư",hue:145,saturation:1,brightness:1.12,className:"threeui-inline-cta threeui-inline-cta--compact",onClick:()=>_(!0)})})]})})]}),e==="orbit"&&wt.jsx("footer",{className:"hud-bottom",children:wt.jsx("div",{className:"hud-hint",children:"Kéo hoặc vuốt để xoay vòng ảnh 3D • Nhấn vào từng ảnh kỷ niệm để phóng to"})}),R&&wt.jsx("div",{className:"modal-backdrop",onClick:()=>g(null),role:"dialog","aria-modal":"true","aria-label":R.title,children:wt.jsxs("div",{className:"modal-card modal-card--lightbox",onClick:Y=>Y.stopPropagation(),children:[wt.jsx("button",{type:"button",className:"modal-close",onClick:()=>g(null),"aria-label":"Đóng",children:"×"}),wt.jsx("div",{className:"lightbox-preview",children:x&&wt.jsx("img",{src:x,alt:R.title})}),wt.jsxs("div",{className:"lightbox-nav",children:[wt.jsx("button",{type:"button",className:"hud-pill",onClick:()=>g((v-1+s.photos.length)%s.photos.length),children:"← Ảnh trước"}),wt.jsxs("span",{style:{fontSize:"0.88rem",color:"rgba(255, 231, 158, 0.85)"},children:["Ảnh ",v+1," / ",s.photos.length]}),wt.jsx("button",{type:"button",className:"hud-pill",onClick:()=>g((v+1)%s.photos.length),children:"Ảnh tiếp →"})]})]})}),m&&wt.jsx("div",{className:"modal-backdrop",onClick:()=>_(!1),role:"dialog","aria-modal":"true","aria-label":"Tâm thư tri ân 20/11",children:wt.jsxs("div",{className:"modal-card",onClick:Y=>Y.stopPropagation(),children:[wt.jsx("button",{type:"button",className:"modal-close",onClick:()=>_(!1),"aria-label":"Đóng",children:"×"}),wt.jsx("div",{className:"wish-badge",children:s.badgeText}),wt.jsx("h2",{style:{margin:"4px 0 6px",fontFamily:'"Playfair Display", Georgia, serif',fontSize:"1.65rem",color:"#ffd166"},children:s.teacherTitle}),s.fullLetter.map((Y,G)=>G===0?wt.jsx("blockquote",{className:"letter-scroll__poem",children:Y},G):wt.jsx("p",{className:"letter-scroll__para",children:Y},G)),wt.jsxs("div",{className:"letter-scroll__sig",children:["Thương mến gửi Thầy Cô,",wt.jsx("br",{}),s.className]})]})})]})}CE.createRoot(document.getElementById("root")).render(wt.jsx(yE.StrictMode,{children:wt.jsx(iw,{})}));
