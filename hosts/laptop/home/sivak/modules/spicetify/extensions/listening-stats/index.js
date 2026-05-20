"use strict";var ListeningStatsApp=(()=>{var Op=Object.create;var Yn=Object.defineProperty;var Lp=Object.getOwnPropertyDescriptor;var $p=Object.getOwnPropertyNames;var Mp=Object.getPrototypeOf,Bp=Object.prototype.hasOwnProperty;var Ae=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),Up=(e,n)=>{for(var i in n)Yn(e,i,{get:n[i],enumerable:!0})},lo=(e,n,i,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of $p(n))!Bp.call(e,l)&&l!==i&&Yn(e,l,{get:()=>n[l],enumerable:!(s=Lp(n,l))||s.enumerable});return e};var co=(e,n,i)=>(i=e!=null?Op(Mp(e)):{},lo(n||!e||!e.__esModule?Yn(i,"default",{value:e,enumerable:!0}):i,e)),zp=e=>lo(Yn({},"__esModule",{value:!0}),e);var yo=Ae((xa,ka)=>{(function(e,n){typeof xa=="object"&&typeof ka<"u"?ka.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.Dexie=n())})(xa,(function(){"use strict";var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,o){a.__proto__=o}||function(a,o){for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(a[c]=o[c])},e(t,r)};function n(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function a(){this.constructor=t}t.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)}var i=function(){return i=Object.assign||function(r){for(var a,o=1,c=arguments.length;o<c;o++){a=arguments[o];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d])}return r},i.apply(this,arguments)};function s(t,r,a){if(a||arguments.length===2)for(var o=0,c=r.length,d;o<c;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return t.concat(d||Array.prototype.slice.call(r))}typeof SuppressedError=="function"&&SuppressedError;var l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,u=Object.keys,p=Array.isArray;typeof Promise<"u"&&!l.Promise&&(l.Promise=Promise);function m(t,r){return typeof r!="object"||u(r).forEach(function(a){t[a]=r[a]}),t}var v=Object.getPrototypeOf,y={}.hasOwnProperty;function S(t,r){return y.call(t,r)}function w(t,r){typeof r=="function"&&(r=r(v(t))),(typeof Reflect>"u"?u:Reflect.ownKeys)(r).forEach(function(a){x(t,a,r[a])})}var P=Object.defineProperty;function x(t,r,a,o){P(t,r,m(a&&S(a,"get")&&typeof a.get=="function"?{get:a.get,set:a.set,configurable:!0}:{value:a,configurable:!0,writable:!0},o))}function L(t){return{from:function(r){return t.prototype=Object.create(r.prototype),x(t.prototype,"constructor",t),{extend:w.bind(null,t.prototype)}}}}var j=Object.getOwnPropertyDescriptor;function q(t,r){var a=j(t,r),o;return a||(o=v(t))&&q(o,r)}var I=[].slice;function H(t,r,a){return I.call(t,r,a)}function K(t,r){return r(t)}function B(t){if(!t)throw new Error("Assertion Failed")}function M(t){l.setImmediate?setImmediate(t):setTimeout(t,0)}function z(t,r){return t.reduce(function(a,o,c){var d=r(o,c);return d&&(a[d[0]]=d[1]),a},{})}function G(t,r){if(typeof r=="string"&&S(t,r))return t[r];if(!r)return t;if(typeof r!="string"){for(var a=[],o=0,c=r.length;o<c;++o){var d=G(t,r[o]);a.push(d)}return a}var f=r.indexOf(".");if(f!==-1){var h=t[r.substr(0,f)];return h==null?void 0:G(h,r.substr(f+1))}}function re(t,r,a){if(!(!t||r===void 0)&&!("isFrozen"in Object&&Object.isFrozen(t)))if(typeof r!="string"&&"length"in r){B(typeof a!="string"&&"length"in a);for(var o=0,c=r.length;o<c;++o)re(t,r[o],a[o])}else{var d=r.indexOf(".");if(d!==-1){var f=r.substr(0,d),h=r.substr(d+1);if(h==="")a===void 0?p(t)&&!isNaN(parseInt(f))?t.splice(f,1):delete t[f]:t[f]=a;else{var g=t[f];(!g||!S(t,f))&&(g=t[f]={}),re(g,h,a)}}else a===void 0?p(t)&&!isNaN(parseInt(r))?t.splice(r,1):delete t[r]:t[r]=a}}function te(t,r){typeof r=="string"?re(t,r,void 0):"length"in r&&[].map.call(r,function(a){re(t,a,void 0)})}function Z(t){var r={};for(var a in t)S(t,a)&&(r[a]=t[a]);return r}var Pe=[].concat;function ie(t){return Pe.apply([],t)}var J="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ie([8,16,32,64].map(function(t){return["Int","Uint","Float"].map(function(r){return r+t+"Array"})}))).filter(function(t){return l[t]}),he=new Set(J.map(function(t){return l[t]}));function _e(t){var r={};for(var a in t)if(S(t,a)){var o=t[a];r[a]=!o||typeof o!="object"||he.has(o.constructor)?o:_e(o)}return r}var Ie=null;function Oe(t){Ie=new WeakMap;var r=de(t);return Ie=null,r}function de(t){if(!t||typeof t!="object")return t;var r=Ie.get(t);if(r)return r;if(p(t)){r=[],Ie.set(t,r);for(var a=0,o=t.length;a<o;++a)r.push(de(t[a]))}else if(he.has(t.constructor))r=t;else{var c=v(t);r=c===Object.prototype?{}:Object.create(c),Ie.set(t,r);for(var d in t)S(t,d)&&(r[d]=de(t[d]))}return r}var Le={}.toString;function D(t){return Le.call(t).slice(8,-1)}var Re=typeof Symbol<"u"?Symbol.iterator:"@@iterator",me=typeof Re=="symbol"?function(t){var r;return t!=null&&(r=t[Re])&&r.apply(t)}:function(){return null};function ce(t,r){var a=t.indexOf(r);return a>=0&&t.splice(a,1),a>=0}var N={};function Y(t){var r,a,o,c;if(arguments.length===1){if(p(t))return t.slice();if(this===N&&typeof t=="string")return[t];if(c=me(t)){for(a=[];o=c.next(),!o.done;)a.push(o.value);return a}if(t==null)return[t];if(r=t.length,typeof r=="number"){for(a=new Array(r);r--;)a[r]=t[r];return a}return[t]}for(r=arguments.length,a=new Array(r);r--;)a[r]=arguments[r];return a}var We=typeof Symbol<"u"?function(t){return t[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ne=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],Ke=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ve=Ne.concat(Ke),Ze={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Be(t,r){this.name=t,this.message=r}L(Be).from(Error).extend({toString:function(){return this.name+": "+this.message}});function et(t,r){return t+". Errors: "+Object.keys(r).map(function(a){return r[a].toString()}).filter(function(a,o,c){return c.indexOf(a)===o}).join(`
`)}function O(t,r,a,o){this.failures=r,this.failedKeys=o,this.successCount=a,this.message=et(t,r)}L(O).from(Be);function X(t,r){this.name="BulkError",this.failures=Object.keys(r).map(function(a){return r[a]}),this.failuresByPos=r,this.message=et(t,this.failures)}L(X).from(Be);var pe=Ve.reduce(function(t,r){return t[r]=r+"Error",t},{}),ke=Be,fe=Ve.reduce(function(t,r){var a=r+"Error";function o(c,d){this.name=a,c?typeof c=="string"?(this.message="".concat(c).concat(d?`
 `+d:""),this.inner=d||null):typeof c=="object"&&(this.message="".concat(c.name," ").concat(c.message),this.inner=c):(this.message=Ze[r]||a,this.inner=null)}return L(o).from(ke),t[r]=o,t},{});fe.Syntax=SyntaxError,fe.Type=TypeError,fe.Range=RangeError;var Wt=Ke.reduce(function(t,r){return t[r+"Error"]=fe[r],t},{});function $i(t,r){if(!t||t instanceof Be||t instanceof TypeError||t instanceof SyntaxError||!t.name||!Wt[t.name])return t;var a=new Wt[t.name](r||t.message,t);return"stack"in t&&x(a,"stack",{get:function(){return this.inner.stack}}),a}var Ir=Ve.reduce(function(t,r){return["Syntax","Type","Range"].indexOf(r)===-1&&(t[r+"Error"]=fe[r]),t},{});Ir.ModifyError=O,Ir.DexieError=Be,Ir.BulkError=X;function He(){}function _t(t){return t}function Mi(t,r){return t==null||t===_t?r:function(a){return r(t(a))}}function Kt(t,r){return function(){t.apply(this,arguments),r.apply(this,arguments)}}function Bt(t,r){return t===He?r:function(){var a=t.apply(this,arguments);a!==void 0&&(arguments[0]=a);var o=this.onsuccess,c=this.onerror;this.onsuccess=null,this.onerror=null;var d=r.apply(this,arguments);return o&&(this.onsuccess=this.onsuccess?Kt(o,this.onsuccess):o),c&&(this.onerror=this.onerror?Kt(c,this.onerror):c),d!==void 0?d:a}}function Ht(t,r){return t===He?r:function(){t.apply(this,arguments);var a=this.onsuccess,o=this.onerror;this.onsuccess=this.onerror=null,r.apply(this,arguments),a&&(this.onsuccess=this.onsuccess?Kt(a,this.onsuccess):a),o&&(this.onerror=this.onerror?Kt(o,this.onerror):o)}}function Bi(t,r){return t===He?r:function(a){var o=t.apply(this,arguments);m(a,o);var c=this.onsuccess,d=this.onerror;this.onsuccess=null,this.onerror=null;var f=r.apply(this,arguments);return c&&(this.onsuccess=this.onsuccess?Kt(c,this.onsuccess):c),d&&(this.onerror=this.onerror?Kt(d,this.onerror):d),o===void 0?f===void 0?void 0:f:m(o,f)}}function Ui(t,r){return t===He?r:function(){return r.apply(this,arguments)===!1?!1:t.apply(this,arguments)}}function Se(t,r){return t===He?r:function(){var a=t.apply(this,arguments);if(a&&typeof a.then=="function"){for(var o=this,c=arguments.length,d=new Array(c);c--;)d[c]=arguments[c];return a.then(function(){return r.apply(o,d)})}return r.apply(this,arguments)}}var ze=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function xt(t,r){ze=t}var Dt={},er=100,mt=typeof Promise>"u"?[]:(function(){var t=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[t,v(t),t];var r=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[r,v(r),t]})(),dt=mt[0],tt=mt[1],rt=mt[2],zi=tt&&tt.then,Ut=dt&&dt.constructor,vr=!!rt;function lt(){queueMicrotask(wd)}var qr=function(t,r){Yr.push([t,r]),kn&&(lt(),kn=!1)},Fi=!0,kn=!0,yr=[],En=[],Wi=_t,Gt={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:He,pgp:!1,env:{},finalize:He},ye=Gt,Yr=[],br=0,Tn=[];function ne(t){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var r=this._PSD=ye;if(typeof t!="function"){if(t!==Dt)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Hi(this,this._value);return}this._state=null,this._value=null,++r.ref,Rs(this,t)}var Ki={get:function(){var t=ye,r=Nn;function a(o,c){var d=this,f=!t.global&&(t!==ye||r!==Nn),h=f&&!rr(),g=new ne(function(b,E){Gi(d,new Ps(Is(o,t,f,h),Is(c,t,f,h),b,E,t))});return this._consoleTask&&(g._consoleTask=this._consoleTask),g}return a.prototype=Dt,a},set:function(t){x(this,"then",t&&t.prototype===Dt?Ki:{get:function(){return t},set:Ki.set})}};w(ne.prototype,{then:Ki,_then:function(t,r){Gi(this,new Ps(null,null,t,r,ye))},catch:function(t){if(arguments.length===1)return this.then(null,t);var r=arguments[0],a=arguments[1];return typeof r=="function"?this.then(null,function(o){return o instanceof r?a(o):An(o)}):this.then(null,function(o){return o&&o.name===r?a(o):An(o)})},finally:function(t){return this.then(function(r){return ne.resolve(t()).then(function(){return r})},function(r){return ne.resolve(t()).then(function(){return An(r)})})},timeout:function(t,r){var a=this;return t<1/0?new ne(function(o,c){var d=setTimeout(function(){return c(new fe.Timeout(r))},t);a.then(o,c).finally(clearTimeout.bind(null,d))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&x(ne.prototype,Symbol.toStringTag,"Dexie.Promise"),Gt.env=Cs();function Ps(t,r,a,o,c){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof r=="function"?r:null,this.resolve=a,this.reject=o,this.psd=c}w(ne,{all:function(){var t=Y.apply(null,arguments).map(Cn);return new ne(function(r,a){t.length===0&&r([]);var o=t.length;t.forEach(function(c,d){return ne.resolve(c).then(function(f){t[d]=f,--o||r(t)},a)})})},resolve:function(t){if(t instanceof ne)return t;if(t&&typeof t.then=="function")return new ne(function(a,o){t.then(a,o)});var r=new ne(Dt,!0,t);return r},reject:An,race:function(){var t=Y.apply(null,arguments).map(Cn);return new ne(function(r,a){t.map(function(o){return ne.resolve(o).then(r,a)})})},PSD:{get:function(){return ye},set:function(t){return ye=t}},totalEchoes:{get:function(){return Nn}},newPSD:tr,usePSD:wr,scheduler:{get:function(){return qr},set:function(t){qr=t}},rejectionMapper:{get:function(){return Wi},set:function(t){Wi=t}},follow:function(t,r){return new ne(function(a,o){return tr(function(c,d){var f=ye;f.unhandleds=[],f.onunhandled=d,f.finalize=Kt(function(){var h=this;Sd(function(){h.unhandleds.length===0?c():d(h.unhandleds[0])})},f.finalize),t()},r,a,o)})}}),Ut&&(Ut.allSettled&&x(ne,"allSettled",function(){var t=Y.apply(null,arguments).map(Cn);return new ne(function(r){t.length===0&&r([]);var a=t.length,o=new Array(a);t.forEach(function(c,d){return ne.resolve(c).then(function(f){return o[d]={status:"fulfilled",value:f}},function(f){return o[d]={status:"rejected",reason:f}}).then(function(){return--a||r(o)})})})}),Ut.any&&typeof AggregateError<"u"&&x(ne,"any",function(){var t=Y.apply(null,arguments).map(Cn);return new ne(function(r,a){t.length===0&&a(new AggregateError([]));var o=t.length,c=new Array(o);t.forEach(function(d,f){return ne.resolve(d).then(function(h){return r(h)},function(h){c[f]=h,--o||a(new AggregateError(c))})})})}),Ut.withResolvers&&(ne.withResolvers=Ut.withResolvers));function Rs(t,r){try{r(function(a){if(t._state===null){if(a===t)throw new TypeError("A promise cannot be resolved with itself.");var o=t._lib&&_r();a&&typeof a.then=="function"?Rs(t,function(c,d){a instanceof ne?a._then(c,d):a.then(c,d)}):(t._state=!0,t._value=a,Ns(t)),o&&Dr()}},Hi.bind(null,t))}catch(a){Hi(t,a)}}function Hi(t,r){if(En.push(r),t._state===null){var a=t._lib&&_r();r=Wi(r),t._state=!1,t._value=r,xd(t),Ns(t),a&&Dr()}}function Ns(t){var r=t._listeners;t._listeners=[];for(var a=0,o=r.length;a<o;++a)Gi(t,r[a]);var c=t._PSD;--c.ref||c.finalize(),br===0&&(++br,qr(function(){--br===0&&Vi()},[]))}function Gi(t,r){if(t._state===null){t._listeners.push(r);return}var a=t._state?r.onFulfilled:r.onRejected;if(a===null)return(t._state?r.resolve:r.reject)(t._value);++r.psd.ref,++br,qr(bd,[a,t,r])}function bd(t,r,a){try{var o,c=r._value;!r._state&&En.length&&(En=[]),o=ze&&r._consoleTask?r._consoleTask.run(function(){return t(c)}):t(c),!r._state&&En.indexOf(c)===-1&&kd(r),a.resolve(o)}catch(d){a.reject(d)}finally{--br===0&&Vi(),--a.psd.ref||a.psd.finalize()}}function wd(){wr(Gt,function(){_r()&&Dr()})}function _r(){var t=Fi;return Fi=!1,kn=!1,t}function Dr(){var t,r,a;do for(;Yr.length>0;)for(t=Yr,Yr=[],a=t.length,r=0;r<a;++r){var o=t[r];o[0].apply(null,o[1])}while(Yr.length>0);Fi=!0,kn=!0}function Vi(){var t=yr;yr=[],t.forEach(function(o){o._PSD.onunhandled.call(null,o._value,o)});for(var r=Tn.slice(0),a=r.length;a;)r[--a]()}function Sd(t){function r(){t(),Tn.splice(Tn.indexOf(r),1)}Tn.push(r),++br,qr(function(){--br===0&&Vi()},[])}function xd(t){yr.some(function(r){return r._value===t._value})||yr.push(t)}function kd(t){for(var r=yr.length;r;)if(yr[--r]._value===t._value){yr.splice(r,1);return}}function An(t){return new ne(Dt,!1,t)}function Ye(t,r){var a=ye;return function(){var o=_r(),c=ye;try{return nr(a,!0),t.apply(this,arguments)}catch(d){r&&r(d)}finally{nr(c,!1),o&&Dr()}}}var ct={awaits:0,echoes:0,id:0},Ed=0,Pn=[],Rn=0,Nn=0,Td=0;function tr(t,r,a,o){var c=ye,d=Object.create(c);d.parent=c,d.ref=0,d.global=!1,d.id=++Td,Gt.env,d.env=vr?{Promise:ne,PromiseProp:{value:ne,configurable:!0,writable:!0},all:ne.all,race:ne.race,allSettled:ne.allSettled,any:ne.any,resolve:ne.resolve,reject:ne.reject}:{},r&&m(d,r),++c.ref,d.finalize=function(){--this.parent.ref||this.parent.finalize()};var f=wr(d,t,a,o);return d.ref===0&&d.finalize(),f}function Or(){return ct.id||(ct.id=++Ed),++ct.awaits,ct.echoes+=er,ct.id}function rr(){return ct.awaits?(--ct.awaits===0&&(ct.id=0),ct.echoes=ct.awaits*er,!0):!1}(""+zi).indexOf("[native code]")===-1&&(Or=rr=He);function Cn(t){return ct.echoes&&t&&t.constructor===Ut?(Or(),t.then(function(r){return rr(),r},function(r){return rr(),Qe(r)})):t}function Ad(t){++Nn,(!ct.echoes||--ct.echoes===0)&&(ct.echoes=ct.awaits=ct.id=0),Pn.push(ye),nr(t,!0)}function Pd(){var t=Pn[Pn.length-1];Pn.pop(),nr(t,!1)}function nr(t,r){var a=ye;if((r?ct.echoes&&(!Rn++||t!==ye):Rn&&(!--Rn||t!==ye))&&queueMicrotask(r?Ad.bind(null,t):Pd),t!==ye&&(ye=t,a===Gt&&(Gt.env=Cs()),vr)){var o=Gt.env.Promise,c=t.env;(a.global||t.global)&&(Object.defineProperty(l,"Promise",c.PromiseProp),o.all=c.all,o.race=c.race,o.resolve=c.resolve,o.reject=c.reject,c.allSettled&&(o.allSettled=c.allSettled),c.any&&(o.any=c.any))}}function Cs(){var t=l.Promise;return vr?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(l,"Promise"),all:t.all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject}:{}}function wr(t,r,a,o,c){var d=ye;try{return nr(t,!0),r(a,o,c)}finally{nr(d,!1)}}function Is(t,r,a,o){return typeof t!="function"?t:function(){var c=ye;a&&Or(),nr(r,!0);try{return t.apply(this,arguments)}finally{nr(c,!1),o&&queueMicrotask(rr)}}}function ji(t){Promise===Ut&&ct.echoes===0?Rn===0?t():enqueueNativeMicroTask(t):setTimeout(t,0)}var Qe=ne.reject;function qi(t,r,a,o){if(!t.idbdb||!t._state.openComplete&&!ye.letThrough&&!t._vip){if(t._state.openComplete)return Qe(new fe.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return Qe(new fe.DatabaseClosed);t.open().catch(He)}return t._state.dbReadyPromise.then(function(){return qi(t,r,a,o)})}else{var c=t._createTransaction(r,a,t._dbSchema);try{c.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===pe.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t.close({disableAutoOpen:!1}),t.open().then(function(){return qi(t,r,a,o)})):Qe(d)}return c._promise(r,function(d,f){return tr(function(){return ye.trans=c,o(d,f,c)})}).then(function(d){if(r==="readwrite")try{c.idbtrans.commit()}catch{}return r==="readonly"?d:c._completion.then(function(){return d})})}}var _s="4.4.2",Sr="\uFFFF",Yi=-1/0,Vt="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Ds="String expected.",Os=1e3,In="__dbnames",Xi="readonly",Ji="readwrite";function xr(t,r){return t?r?function(){return t.apply(this,arguments)&&r.apply(this,arguments)}:t:r}var Ls={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function _n(t){return typeof t=="string"&&!/\./.test(t)?function(r){return r[t]===void 0&&t in r&&(r=Oe(r),delete r[t]),r}:function(r){return r}}function $s(){throw fe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Me(t,r){try{var a=Ms(t),o=Ms(r);if(a!==o)return a==="Array"?1:o==="Array"?-1:a==="binary"?1:o==="binary"?-1:a==="string"?1:o==="string"?-1:a==="Date"?1:o!=="Date"?NaN:-1;switch(a){case"number":case"Date":case"string":return t>r?1:t<r?-1:0;case"binary":return Nd(Bs(t),Bs(r));case"Array":return Rd(t,r)}}catch{}return NaN}function Rd(t,r){for(var a=t.length,o=r.length,c=a<o?a:o,d=0;d<c;++d){var f=Me(t[d],r[d]);if(f!==0)return f}return a===o?0:a<o?-1:1}function Nd(t,r){for(var a=t.length,o=r.length,c=a<o?a:o,d=0;d<c;++d)if(t[d]!==r[d])return t[d]<r[d]?-1:1;return a===o?0:a<o?-1:1}function Ms(t){var r=typeof t;if(r!=="object")return r;if(ArrayBuffer.isView(t))return"binary";var a=D(t);return a==="ArrayBuffer"?"binary":a}function Bs(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}function Dn(t,r,a){var o=t.schema.yProps;return o?(r&&a.numFailures>0&&(r=r.filter(function(c,d){return!a.failures[d]})),Promise.all(o.map(function(c){var d=c.updatesTable;return r?t.db.table(d).where("k").anyOf(r).delete():t.db.table(d).clear()})).then(function(){return a})):a}var Xr=(function(){function t(r){this["@@propmod"]=r}return t.prototype.execute=function(r){var a,o=this["@@propmod"];if(o.add!==void 0){var c=o.add;if(p(c))return s(s([],p(r)?r:[],!0),c,!0).sort();if(typeof c=="number")return(Number(r)||0)+c;if(typeof c=="bigint")try{return BigInt(r)+c}catch{return BigInt(0)+c}throw new TypeError("Invalid term ".concat(c))}if(o.remove!==void 0){var d=o.remove;if(p(d))return p(r)?r.filter(function(h){return!d.includes(h)}).sort():[];if(typeof d=="number")return Number(r)-d;if(typeof d=="bigint")try{return BigInt(r)-d}catch{return BigInt(0)-d}throw new TypeError("Invalid subtrahend ".concat(d))}var f=(a=o.replacePrefix)===null||a===void 0?void 0:a[0];return f&&typeof r=="string"&&r.startsWith(f)?o.replacePrefix[1]+r.substring(f.length):r},t})();function Us(t,r){for(var a=u(r),o=a.length,c=!1,d=0;d<o;++d){var f=a[d],h=r[f],g=G(t,f);h instanceof Xr?(re(t,f,h.execute(g)),c=!0):g!==h&&(re(t,f,h),c=!0)}return c}var zs=(function(){function t(){}return t.prototype._trans=function(r,a,o){var c=this._tx||ye.trans,d=this.name,f=ze&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(r==="readonly"?"read":"write"," ").concat(this.name));function h(E,T,R){if(!R.schema[d])throw new fe.NotFound("Table "+d+" not part of transaction");return a(R.idbtrans,R)}var g=_r();try{var b=c&&c.db._novip===this.db._novip?c===ye.trans?c._promise(r,h,o):tr(function(){return c._promise(r,h,o)},{trans:c,transless:ye.transless||ye}):qi(this.db,r,[this.name],h);return f&&(b._consoleTask=f,b=b.catch(function(E){return console.trace(E),Qe(E)})),b}finally{g&&Dr()}},t.prototype.get=function(r,a){var o=this;return r&&r.constructor===Object?this.where(r).first(a):r==null?Qe(new fe.Type("Invalid argument to Table.get()")):this._trans("readonly",function(c){return o.core.get({trans:c,key:r}).then(function(d){return o.hook.reading.fire(d)})}).then(a)},t.prototype.where=function(r){if(typeof r=="string")return new this.db.WhereClause(this,r);if(p(r))return new this.db.WhereClause(this,"[".concat(r.join("+"),"]"));var a=u(r);if(a.length===1)return this.where(a[0]).equals(r[a[0]]);var o=this.schema.indexes.concat(this.schema.primKey).filter(function(E){if(E.compound&&a.every(function(R){return E.keyPath.indexOf(R)>=0})){for(var T=0;T<a.length;++T)if(a.indexOf(E.keyPath[T])===-1)return!1;return!0}return!1}).sort(function(E,T){return E.keyPath.length-T.keyPath.length})[0];if(o&&this.db._maxKey!==Sr){var c=o.keyPath.slice(0,a.length);return this.where(c).equals(c.map(function(E){return r[E]}))}!o&&ze&&console.warn("The query ".concat(JSON.stringify(r)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(a.join("+"),"]"));var d=this.schema.idxByName;function f(E,T){return Me(E,T)===0}var h=a.reduce(function(E,T){var R=E[0],U=E[1],k=d[T],A=r[T];return[R||k,R||!k?xr(U,k&&k.multi?function(_){var C=G(_,T);return p(C)&&C.some(function(V){return f(A,V)})}:function(_){return f(A,G(_,T))}):U]},[null,null]),g=h[0],b=h[1];return g?this.where(g.name).equals(r[g.keyPath]).filter(b):o?this.filter(b):this.where(a).equals("")},t.prototype.filter=function(r){return this.toCollection().and(r)},t.prototype.count=function(r){return this.toCollection().count(r)},t.prototype.offset=function(r){return this.toCollection().offset(r)},t.prototype.limit=function(r){return this.toCollection().limit(r)},t.prototype.each=function(r){return this.toCollection().each(r)},t.prototype.toArray=function(r){return this.toCollection().toArray(r)},t.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},t.prototype.orderBy=function(r){return new this.db.Collection(new this.db.WhereClause(this,p(r)?"[".concat(r.join("+"),"]"):r))},t.prototype.reverse=function(){return this.toCollection().reverse()},t.prototype.mapToClass=function(r){var a=this,o=a.db,c=a.name;this.schema.mappedClass=r,r.prototype instanceof $s&&(r=(function(g){n(b,g);function b(){return g!==null&&g.apply(this,arguments)||this}return Object.defineProperty(b.prototype,"db",{get:function(){return o},enumerable:!1,configurable:!0}),b.prototype.table=function(){return c},b})(r));for(var d=new Set,f=r.prototype;f;f=v(f))Object.getOwnPropertyNames(f).forEach(function(g){return d.add(g)});var h=function(g){if(!g)return g;var b=Object.create(r.prototype);for(var E in g)if(!d.has(E))try{b[E]=g[E]}catch{}return b};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=h,this.hook("reading",h),r},t.prototype.defineClass=function(){function r(a){m(this,a)}return this.mapToClass(r)},t.prototype.add=function(r,a){var o=this,c=this.schema.primKey,d=c.auto,f=c.keyPath,h=r;return f&&d&&(h=_n(f)(r)),this._trans("readwrite",function(g){return o.core.mutate({trans:g,type:"add",keys:a!=null?[a]:null,values:[h]})}).then(function(g){return g.numFailures?ne.reject(g.failures[0]):g.lastResult}).then(function(g){if(f)try{re(r,f,g)}catch{}return g})},t.prototype.upsert=function(r,a){var o=this,c=this.schema.primKey.keyPath;return this._trans("readwrite",function(d){return o.core.get({trans:d,key:r}).then(function(f){var h=f??{};return Us(h,a),c&&re(h,c,r),o.core.mutate({trans:d,type:"put",values:[h],keys:[r],upsert:!0,updates:{keys:[r],changeSpecs:[a]}}).then(function(g){return g.numFailures?ne.reject(g.failures[0]):!!f})})})},t.prototype.update=function(r,a){if(typeof r=="object"&&!p(r)){var o=G(r,this.schema.primKey.keyPath);return o===void 0?Qe(new fe.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(o).modify(a)}else return this.where(":id").equals(r).modify(a)},t.prototype.put=function(r,a){var o=this,c=this.schema.primKey,d=c.auto,f=c.keyPath,h=r;return f&&d&&(h=_n(f)(r)),this._trans("readwrite",function(g){return o.core.mutate({trans:g,type:"put",values:[h],keys:a!=null?[a]:null})}).then(function(g){return g.numFailures?ne.reject(g.failures[0]):g.lastResult}).then(function(g){if(f)try{re(r,f,g)}catch{}return g})},t.prototype.delete=function(r){var a=this;return this._trans("readwrite",function(o){return a.core.mutate({trans:o,type:"delete",keys:[r]}).then(function(c){return Dn(a,[r],c)}).then(function(c){return c.numFailures?ne.reject(c.failures[0]):void 0})})},t.prototype.clear=function(){var r=this;return this._trans("readwrite",function(a){return r.core.mutate({trans:a,type:"deleteRange",range:Ls}).then(function(o){return Dn(r,null,o)})}).then(function(a){return a.numFailures?ne.reject(a.failures[0]):void 0})},t.prototype.bulkGet=function(r){var a=this;return this._trans("readonly",function(o){return a.core.getMany({keys:r,trans:o}).then(function(c){return c.map(function(d){return a.hook.reading.fire(d)})})})},t.prototype.bulkAdd=function(r,a,o){var c=this,d=Array.isArray(a)?a:void 0;o=o||(d?void 0:a);var f=o?o.allKeys:void 0;return this._trans("readwrite",function(h){var g=c.schema.primKey,b=g.auto,E=g.keyPath;if(E&&d)throw new fe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(d&&d.length!==r.length)throw new fe.InvalidArgument("Arguments objects and keys must have the same length");var T=r.length,R=E&&b?r.map(_n(E)):r;return c.core.mutate({trans:h,type:"add",keys:d,values:R,wantResults:f}).then(function(U){var k=U.numFailures,A=U.results,_=U.lastResult,C=U.failures,V=f?A:_;if(k===0)return V;throw new X("".concat(c.name,".bulkAdd(): ").concat(k," of ").concat(T," operations failed"),C)})})},t.prototype.bulkPut=function(r,a,o){var c=this,d=Array.isArray(a)?a:void 0;o=o||(d?void 0:a);var f=o?o.allKeys:void 0;return this._trans("readwrite",function(h){var g=c.schema.primKey,b=g.auto,E=g.keyPath;if(E&&d)throw new fe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(d&&d.length!==r.length)throw new fe.InvalidArgument("Arguments objects and keys must have the same length");var T=r.length,R=E&&b?r.map(_n(E)):r;return c.core.mutate({trans:h,type:"put",keys:d,values:R,wantResults:f}).then(function(U){var k=U.numFailures,A=U.results,_=U.lastResult,C=U.failures,V=f?A:_;if(k===0)return V;throw new X("".concat(c.name,".bulkPut(): ").concat(k," of ").concat(T," operations failed"),C)})})},t.prototype.bulkUpdate=function(r){var a=this,o=this.core,c=r.map(function(h){return h.key}),d=r.map(function(h){return h.changes}),f=[];return this._trans("readwrite",function(h){return o.getMany({trans:h,keys:c,cache:"clone"}).then(function(g){var b=[],E=[];r.forEach(function(R,U){var k=R.key,A=R.changes,_=g[U];if(_){for(var C=0,V=Object.keys(A);C<V.length;C++){var W=V[C],$=A[W];if(W===a.schema.primKey.keyPath){if(Me($,k)!==0)throw new fe.Constraint("Cannot update primary key in bulkUpdate()")}else re(_,W,$)}f.push(U),b.push(k),E.push(_)}});var T=b.length;return o.mutate({trans:h,type:"put",keys:b,values:E,updates:{keys:c,changeSpecs:d}}).then(function(R){var U=R.numFailures,k=R.failures;if(U===0)return T;for(var A=0,_=Object.keys(k);A<_.length;A++){var C=_[A],V=f[Number(C)];if(V!=null){var W=k[C];delete k[C],k[V]=W}}throw new X("".concat(a.name,".bulkUpdate(): ").concat(U," of ").concat(T," operations failed"),k)})})})},t.prototype.bulkDelete=function(r){var a=this,o=r.length;return this._trans("readwrite",function(c){return a.core.mutate({trans:c,type:"delete",keys:r}).then(function(d){return Dn(a,r,d)})}).then(function(c){var d=c.numFailures,f=c.lastResult,h=c.failures;if(d===0)return f;throw new X("".concat(a.name,".bulkDelete(): ").concat(d," of ").concat(o," operations failed"),h)})},t})();function Jr(t){var r={},a=function(h,g){if(g){for(var b=arguments.length,E=new Array(b-1);--b;)E[b-1]=arguments[b];return r[h].subscribe.apply(null,E),t}else if(typeof h=="string")return r[h]};a.addEventType=d;for(var o=1,c=arguments.length;o<c;++o)d(arguments[o]);return a;function d(h,g,b){if(typeof h=="object")return f(h);g||(g=Ui),b||(b=He);var E={subscribers:[],fire:b,subscribe:function(T){E.subscribers.indexOf(T)===-1&&(E.subscribers.push(T),E.fire=g(E.fire,T))},unsubscribe:function(T){E.subscribers=E.subscribers.filter(function(R){return R!==T}),E.fire=E.subscribers.reduce(g,b)}};return r[h]=a[h]=E,E}function f(h){u(h).forEach(function(g){var b=h[g];if(p(b))d(g,h[g][0],h[g][1]);else if(b==="asap")var E=d(g,_t,function(){for(var R=arguments.length,U=new Array(R);R--;)U[R]=arguments[R];E.subscribers.forEach(function(k){M(function(){k.apply(null,U)})})});else throw new fe.InvalidArgument("Invalid event config")})}}function Qr(t,r){return L(r).from({prototype:t}),r}function Cd(t){return Qr(zs.prototype,function(a,o,c){this.db=t,this._tx=c,this.name=a,this.schema=o,this.hook=t._allTables[a]?t._allTables[a].hook:Jr(null,{creating:[Bt,He],reading:[Mi,_t],updating:[Bi,He],deleting:[Ht,He]})})}function Lr(t,r){return!(t.filter||t.algorithm||t.or)&&(r?t.justLimit:!t.replayFilter)}function Qi(t,r){t.filter=xr(t.filter,r)}function Zi(t,r,a){var o=t.replayFilter;t.replayFilter=o?function(){return xr(o(),r())}:r,t.justLimit=a&&!o}function Id(t,r){t.isMatch=xr(t.isMatch,r)}function On(t,r){if(t.isPrimKey)return r.primaryKey;var a=r.getIndexByKeyPath(t.index);if(!a)throw new fe.Schema("KeyPath "+t.index+" on object store "+r.name+" is not indexed");return a}function Fs(t,r,a){var o=On(t,r.schema);return r.openCursor({trans:a,values:!t.keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:o,range:t.range}})}function Ln(t,r,a,o){var c=t.replayFilter?xr(t.filter,t.replayFilter()):t.filter;if(t.or){var d={},f=function(h,g,b){if(!c||c(g,b,function(R){return g.stop(R)},function(R){return g.fail(R)})){var E=g.primaryKey,T=""+E;T==="[object ArrayBuffer]"&&(T=""+new Uint8Array(E)),S(d,T)||(d[T]=!0,r(h,g,b))}};return Promise.all([t.or._iterate(f,a),Ws(Fs(t,o,a),t.algorithm,f,!t.keysOnly&&t.valueMapper)])}else return Ws(Fs(t,o,a),xr(t.algorithm,c),r,!t.keysOnly&&t.valueMapper)}function Ws(t,r,a,o){var c=o?function(f,h,g){return a(o(f),h,g)}:a,d=Ye(c);return t.then(function(f){if(f)return f.start(function(){var h=function(){return f.continue()};(!r||r(f,function(g){return h=g},function(g){f.stop(g),h=He},function(g){f.fail(g),h=He}))&&d(f.value,f,function(g){return h=g}),h()})})}var _d=(function(){function t(){}return t.prototype._read=function(r,a){var o=this._ctx;return o.error?o.table._trans(null,Qe.bind(null,o.error)):o.table._trans("readonly",r).then(a)},t.prototype._write=function(r){var a=this._ctx;return a.error?a.table._trans(null,Qe.bind(null,a.error)):a.table._trans("readwrite",r,"locked")},t.prototype._addAlgorithm=function(r){var a=this._ctx;a.algorithm=xr(a.algorithm,r)},t.prototype._iterate=function(r,a){return Ln(this._ctx,r,a,this._ctx.table.core)},t.prototype.clone=function(r){var a=Object.create(this.constructor.prototype),o=Object.create(this._ctx);return r&&m(o,r),a._ctx=o,a},t.prototype.raw=function(){return this._ctx.valueMapper=null,this},t.prototype.each=function(r){var a=this._ctx;return this._read(function(o){return Ln(a,r,o,a.table.core)})},t.prototype.count=function(r){var a=this;return this._read(function(o){var c=a._ctx,d=c.table.core;if(Lr(c,!0))return d.count({trans:o,query:{index:On(c,d.schema),range:c.range}}).then(function(h){return Math.min(h,c.limit)});var f=0;return Ln(c,function(){return++f,!1},o,d).then(function(){return f})}).then(r)},t.prototype.sortBy=function(r,a){var o=r.split(".").reverse(),c=o[0],d=o.length-1;function f(b,E){return E?f(b[o[E]],E-1):b[c]}var h=this._ctx.dir==="next"?1:-1;function g(b,E){var T=f(b,d),R=f(E,d);return Me(T,R)*h}return this.toArray(function(b){return b.sort(g)}).then(a)},t.prototype.toArray=function(r){var a=this;return this._read(function(o){var c=a._ctx;if(Lr(c,!0)&&c.limit>0){var d=c.valueMapper,f=On(c,c.table.core.schema);return c.table.core.query({trans:o,limit:c.limit,values:!0,direction:c.dir==="prev"?"prev":void 0,query:{index:f,range:c.range}}).then(function(g){var b=g.result;return d?b.map(d):b})}else{var h=[];return Ln(c,function(g){return h.push(g)},o,c.table.core).then(function(){return h})}},r)},t.prototype.offset=function(r){var a=this._ctx;return r<=0?this:(a.offset+=r,Lr(a)?Zi(a,function(){var o=r;return function(c,d){return o===0?!0:o===1?(--o,!1):(d(function(){c.advance(o),o=0}),!1)}}):Zi(a,function(){var o=r;return function(){return--o<0}}),this)},t.prototype.limit=function(r){return this._ctx.limit=Math.min(this._ctx.limit,r),Zi(this._ctx,function(){var a=r;return function(o,c,d){return--a<=0&&c(d),a>=0}},!0),this},t.prototype.until=function(r,a){return Qi(this._ctx,function(o,c,d){return r(o.value)?(c(d),a):!0}),this},t.prototype.first=function(r){return this.limit(1).toArray(function(a){return a[0]}).then(r)},t.prototype.last=function(r){return this.reverse().first(r)},t.prototype.filter=function(r){return Qi(this._ctx,function(a){return r(a.value)}),Id(this._ctx,r),this},t.prototype.and=function(r){return this.filter(r)},t.prototype.or=function(r){return new this.db.WhereClause(this._ctx.table,r,this)},t.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},t.prototype.desc=function(){return this.reverse()},t.prototype.eachKey=function(r){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(o,c){r(c.key,c)})},t.prototype.eachUniqueKey=function(r){return this._ctx.unique="unique",this.eachKey(r)},t.prototype.eachPrimaryKey=function(r){var a=this._ctx;return a.keysOnly=!a.isMatch,this.each(function(o,c){r(c.primaryKey,c)})},t.prototype.keys=function(r){var a=this._ctx;a.keysOnly=!a.isMatch;var o=[];return this.each(function(c,d){o.push(d.key)}).then(function(){return o}).then(r)},t.prototype.primaryKeys=function(r){var a=this._ctx;if(Lr(a,!0)&&a.limit>0)return this._read(function(c){var d=On(a,a.table.core.schema);return a.table.core.query({trans:c,values:!1,limit:a.limit,direction:a.dir==="prev"?"prev":void 0,query:{index:d,range:a.range}})}).then(function(c){var d=c.result;return d}).then(r);a.keysOnly=!a.isMatch;var o=[];return this.each(function(c,d){o.push(d.primaryKey)}).then(function(){return o}).then(r)},t.prototype.uniqueKeys=function(r){return this._ctx.unique="unique",this.keys(r)},t.prototype.firstKey=function(r){return this.limit(1).keys(function(a){return a[0]}).then(r)},t.prototype.lastKey=function(r){return this.reverse().firstKey(r)},t.prototype.distinct=function(){var r=this._ctx,a=r.index&&r.table.schema.idxByName[r.index];if(!a||!a.multi)return this;var o={};return Qi(this._ctx,function(c){var d=c.primaryKey.toString(),f=S(o,d);return o[d]=!0,!f}),this},t.prototype.modify=function(r){var a=this,o=this._ctx;return this._write(function(c){var d;typeof r=="function"?d=r:d=function(C){return Us(C,r)};var f=o.table.core,h=f.schema.primaryKey,g=h.outbound,b=h.extractKey,E=200,T=a.db._options.modifyChunkSize;T&&(typeof T=="object"?E=T[f.name]||T["*"]||200:E=T);var R=[],U=0,k=[],A=function(C,V){var W=V.failures,$=V.numFailures;U+=C-$;for(var F=0,ae=u(W);F<ae.length;F++){var Q=ae[F];R.push(W[Q])}},_=r===Ks;return a.clone().primaryKeys().then(function(C){var V=Lr(o)&&o.limit===1/0&&(typeof r!="function"||_)&&{index:o.index,range:o.range},W=function($){var F=Math.min(E,C.length-$),ae=C.slice($,$+F);return(_?Promise.resolve([]):f.getMany({trans:c,keys:ae,cache:"immutable"})).then(function(Q){var ee=[],ge=[],$e=g?[]:null,be=_?ae:[];if(!_)for(var ve=0;ve<F;++ve){var Ee=Q[ve],Te={value:Oe(Ee),primKey:C[$+ve]};d.call(Te,Te.value,Te)!==!1&&(Te.value==null?be.push(C[$+ve]):!g&&Me(b(Ee),b(Te.value))!==0?(be.push(C[$+ve]),ee.push(Te.value)):(ge.push(Te.value),g&&$e.push(C[$+ve])))}return Promise.resolve(ee.length>0&&f.mutate({trans:c,type:"add",values:ee}).then(function(je){for(var we in je.failures)be.splice(parseInt(we),1);A(ee.length,je)})).then(function(){return(ge.length>0||V&&typeof r=="object")&&f.mutate({trans:c,type:"put",keys:$e,values:ge,criteria:V,changeSpec:typeof r!="function"&&r,isAdditionalChunk:$>0}).then(function(je){return A(ge.length,je)})}).then(function(){return(be.length>0||V&&_)&&f.mutate({trans:c,type:"delete",keys:be,criteria:V,isAdditionalChunk:$>0}).then(function(je){return Dn(o.table,be,je)}).then(function(je){return A(be.length,je)})}).then(function(){return C.length>$+F&&W($+E)})})};return W(0).then(function(){if(R.length>0)throw new O("Error modifying one or more objects",R,U,k);return C.length})})})},t.prototype.delete=function(){var r=this._ctx,a=r.range;return Lr(r)&&!r.table.schema.yProps&&(r.isPrimKey||a.type===3)?this._write(function(o){var c=r.table.core.schema.primaryKey,d=a;return r.table.core.count({trans:o,query:{index:c,range:d}}).then(function(f){return r.table.core.mutate({trans:o,type:"deleteRange",range:d}).then(function(h){var g=h.failures,b=h.numFailures;if(b)throw new O("Could not delete some values",Object.keys(g).map(function(E){return g[E]}),f-b);return f-b})})}):this.modify(Ks)},t})(),Ks=function(t,r){return r.value=null};function Dd(t){return Qr(_d.prototype,function(a,o){this.db=t;var c=Ls,d=null;if(o)try{c=o()}catch(b){d=b}var f=a._ctx,h=f.table,g=h.hook.reading.fire;this._ctx={table:h,index:f.index,isPrimKey:!f.index||h.schema.primKey.keyPath&&f.index===h.schema.primKey.name,range:c,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:d,or:f.or,valueMapper:g!==_t?g:null}})}function Od(t,r){return t<r?-1:t===r?0:1}function Ld(t,r){return t>r?-1:t===r?0:1}function kt(t,r,a){var o=t instanceof Gs?new t.Collection(t):t;return o._ctx.error=a?new a(r):new TypeError(r),o}function $r(t){return new t.Collection(t,function(){return Hs("")}).limit(0)}function $d(t){return t==="next"?function(r){return r.toUpperCase()}:function(r){return r.toLowerCase()}}function Md(t){return t==="next"?function(r){return r.toLowerCase()}:function(r){return r.toUpperCase()}}function Bd(t,r,a,o,c,d){for(var f=Math.min(t.length,o.length),h=-1,g=0;g<f;++g){var b=r[g];if(b!==o[g])return c(t[g],a[g])<0?t.substr(0,g)+a[g]+a.substr(g+1):c(t[g],o[g])<0?t.substr(0,g)+o[g]+a.substr(g+1):h>=0?t.substr(0,h)+r[h]+a.substr(h+1):null;c(t[g],b)<0&&(h=g)}return f<o.length&&d==="next"?t+a.substr(t.length):f<t.length&&d==="prev"?t.substr(0,a.length):h<0?null:t.substr(0,h)+o[h]+a.substr(h+1)}function $n(t,r,a,o){var c,d,f,h,g,b,E,T=a.length;if(!a.every(function(A){return typeof A=="string"}))return kt(t,Ds);function R(A){c=$d(A),d=Md(A),f=A==="next"?Od:Ld;var _=a.map(function(C){return{lower:d(C),upper:c(C)}}).sort(function(C,V){return f(C.lower,V.lower)});h=_.map(function(C){return C.upper}),g=_.map(function(C){return C.lower}),b=A,E=A==="next"?"":o}R("next");var U=new t.Collection(t,function(){return ir(h[0],g[T-1]+o)});U._ondirectionchange=function(A){R(A)};var k=0;return U._addAlgorithm(function(A,_,C){var V=A.key;if(typeof V!="string")return!1;var W=d(V);if(r(W,g,k))return!0;for(var $=null,F=k;F<T;++F){var ae=Bd(V,W,h[F],g[F],f,b);ae===null&&$===null?k=F+1:($===null||f($,ae)>0)&&($=ae)}return _($!==null?function(){A.continue($+E)}:C),!1}),U}function ir(t,r,a,o){return{type:2,lower:t,upper:r,lowerOpen:a,upperOpen:o}}function Hs(t){return{type:1,lower:t,upper:t}}var Gs=(function(){function t(){}return Object.defineProperty(t.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),t.prototype.between=function(r,a,o,c){o=o!==!1,c=c===!0;try{return this._cmp(r,a)>0||this._cmp(r,a)===0&&(o||c)&&!(o&&c)?$r(this):new this.Collection(this,function(){return ir(r,a,!o,!c)})}catch{return kt(this,Vt)}},t.prototype.equals=function(r){return r==null?kt(this,Vt):new this.Collection(this,function(){return Hs(r)})},t.prototype.above=function(r){return r==null?kt(this,Vt):new this.Collection(this,function(){return ir(r,void 0,!0)})},t.prototype.aboveOrEqual=function(r){return r==null?kt(this,Vt):new this.Collection(this,function(){return ir(r,void 0,!1)})},t.prototype.below=function(r){return r==null?kt(this,Vt):new this.Collection(this,function(){return ir(void 0,r,!1,!0)})},t.prototype.belowOrEqual=function(r){return r==null?kt(this,Vt):new this.Collection(this,function(){return ir(void 0,r)})},t.prototype.startsWith=function(r){return typeof r!="string"?kt(this,Ds):this.between(r,r+Sr,!0,!0)},t.prototype.startsWithIgnoreCase=function(r){return r===""?this.startsWith(r):$n(this,function(a,o){return a.indexOf(o[0])===0},[r],Sr)},t.prototype.equalsIgnoreCase=function(r){return $n(this,function(a,o){return a===o[0]},[r],"")},t.prototype.anyOfIgnoreCase=function(){var r=Y.apply(N,arguments);return r.length===0?$r(this):$n(this,function(a,o){return o.indexOf(a)!==-1},r,"")},t.prototype.startsWithAnyOfIgnoreCase=function(){var r=Y.apply(N,arguments);return r.length===0?$r(this):$n(this,function(a,o){return o.some(function(c){return a.indexOf(c)===0})},r,Sr)},t.prototype.anyOf=function(){var r=this,a=Y.apply(N,arguments),o=this._cmp;try{a.sort(o)}catch{return kt(this,Vt)}if(a.length===0)return $r(this);var c=new this.Collection(this,function(){return ir(a[0],a[a.length-1])});c._ondirectionchange=function(f){o=f==="next"?r._ascending:r._descending,a.sort(o)};var d=0;return c._addAlgorithm(function(f,h,g){for(var b=f.key;o(b,a[d])>0;)if(++d,d===a.length)return h(g),!1;return o(b,a[d])===0?!0:(h(function(){f.continue(a[d])}),!1)}),c},t.prototype.notEqual=function(r){return this.inAnyRange([[Yi,r],[r,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},t.prototype.noneOf=function(){var r=Y.apply(N,arguments);if(r.length===0)return new this.Collection(this);try{r.sort(this._ascending)}catch{return kt(this,Vt)}var a=r.reduce(function(o,c){return o?o.concat([[o[o.length-1][1],c]]):[[Yi,c]]},null);return a.push([r[r.length-1],this.db._maxKey]),this.inAnyRange(a,{includeLowers:!1,includeUppers:!1})},t.prototype.inAnyRange=function(r,a){var o=this,c=this._cmp,d=this._ascending,f=this._descending,h=this._min,g=this._max;if(r.length===0)return $r(this);if(!r.every(function(F){return F[0]!==void 0&&F[1]!==void 0&&d(F[0],F[1])<=0}))return kt(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",fe.InvalidArgument);var b=!a||a.includeLowers!==!1,E=a&&a.includeUppers===!0;function T(F,ae){for(var Q=0,ee=F.length;Q<ee;++Q){var ge=F[Q];if(c(ae[0],ge[1])<0&&c(ae[1],ge[0])>0){ge[0]=h(ge[0],ae[0]),ge[1]=g(ge[1],ae[1]);break}}return Q===ee&&F.push(ae),F}var R=d;function U(F,ae){return R(F[0],ae[0])}var k;try{k=r.reduce(T,[]),k.sort(U)}catch{return kt(this,Vt)}var A=0,_=E?function(F){return d(F,k[A][1])>0}:function(F){return d(F,k[A][1])>=0},C=b?function(F){return f(F,k[A][0])>0}:function(F){return f(F,k[A][0])>=0};function V(F){return!_(F)&&!C(F)}var W=_,$=new this.Collection(this,function(){return ir(k[0][0],k[k.length-1][1],!b,!E)});return $._ondirectionchange=function(F){F==="next"?(W=_,R=d):(W=C,R=f),k.sort(U)},$._addAlgorithm(function(F,ae,Q){for(var ee=F.key;W(ee);)if(++A,A===k.length)return ae(Q),!1;return V(ee)?!0:(o._cmp(ee,k[A][1])===0||o._cmp(ee,k[A][0])===0||ae(function(){R===d?F.continue(k[A][0]):F.continue(k[A][1])}),!1)}),$},t.prototype.startsWithAnyOf=function(){var r=Y.apply(N,arguments);return r.every(function(a){return typeof a=="string"})?r.length===0?$r(this):this.inAnyRange(r.map(function(a){return[a,a+Sr]})):kt(this,"startsWithAnyOf() only works with strings")},t})();function Ud(t){return Qr(Gs.prototype,function(a,o,c){if(this.db=t,this._ctx={table:a,index:o===":id"?null:o,or:c},this._cmp=this._ascending=Me,this._descending=function(d,f){return Me(f,d)},this._max=function(d,f){return Me(d,f)>0?d:f},this._min=function(d,f){return Me(d,f)<0?d:f},this._IDBKeyRange=t._deps.IDBKeyRange,!this._IDBKeyRange)throw new fe.MissingAPI})}function Ot(t){return Ye(function(r){return Zr(r),t(r.target.error),!1})}function Zr(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()}var en="storagemutated",ea="x-storagemutated-1",ar=Jr(null,en),zd=(function(){function t(){}return t.prototype._lock=function(){return B(!ye.global),++this._reculock,this._reculock===1&&!ye.global&&(ye.lockOwnerFor=this),this},t.prototype._unlock=function(){if(B(!ye.global),--this._reculock===0)for(ye.global||(ye.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var r=this._blockedFuncs.shift();try{wr(r[1],r[0])}catch{}}return this},t.prototype._locked=function(){return this._reculock&&ye.lockOwnerFor!==this},t.prototype.create=function(r){var a=this;if(!this.mode)return this;var o=this.db.idbdb,c=this.db._state.dbOpenError;if(B(!this.idbtrans),!r&&!o)switch(c&&c.name){case"DatabaseClosedError":throw new fe.DatabaseClosed(c);case"MissingAPIError":throw new fe.MissingAPI(c.message,c);default:throw new fe.OpenFailed(c)}if(!this.active)throw new fe.TransactionInactive;return B(this._completion._state===null),r=this.idbtrans=r||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):o.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),r.onerror=Ye(function(d){Zr(d),a._reject(r.error)}),r.onabort=Ye(function(d){Zr(d),a.active&&a._reject(new fe.Abort(r.error)),a.active=!1,a.on("abort").fire(d)}),r.oncomplete=Ye(function(){a.active=!1,a._resolve(),"mutatedParts"in r&&ar.storagemutated.fire(r.mutatedParts)}),this},t.prototype._promise=function(r,a,o){var c=this;if(r==="readwrite"&&this.mode!=="readwrite")return Qe(new fe.ReadOnly("Transaction is readonly"));if(!this.active)return Qe(new fe.TransactionInactive);if(this._locked())return new ne(function(f,h){c._blockedFuncs.push([function(){c._promise(r,a,o).then(f,h)},ye])});if(o)return tr(function(){var f=new ne(function(h,g){c._lock();var b=a(h,g,c);b&&b.then&&b.then(h,g)});return f.finally(function(){return c._unlock()}),f._lib=!0,f});var d=new ne(function(f,h){var g=a(f,h,c);g&&g.then&&g.then(f,h)});return d._lib=!0,d},t.prototype._root=function(){return this.parent?this.parent._root():this},t.prototype.waitFor=function(r){var a=this._root(),o=ne.resolve(r);if(a._waitingFor)a._waitingFor=a._waitingFor.then(function(){return o});else{a._waitingFor=o,a._waitingQueue=[];var c=a.idbtrans.objectStore(a.storeNames[0]);(function f(){for(++a._spinCount;a._waitingQueue.length;)a._waitingQueue.shift()();a._waitingFor&&(c.get(-1/0).onsuccess=f)})()}var d=a._waitingFor;return new ne(function(f,h){o.then(function(g){return a._waitingQueue.push(Ye(f.bind(null,g)))},function(g){return a._waitingQueue.push(Ye(h.bind(null,g)))}).finally(function(){a._waitingFor===d&&(a._waitingFor=null)})})},t.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new fe.Abort))},t.prototype.table=function(r){var a=this._memoizedTables||(this._memoizedTables={});if(S(a,r))return a[r];var o=this.schema[r];if(!o)throw new fe.NotFound("Table "+r+" not part of transaction");var c=new this.db.Table(r,o,this);return c.core=this.db.core.table(r),a[r]=c,c},t})();function Fd(t){return Qr(zd.prototype,function(a,o,c,d,f){var h=this;a!=="readonly"&&o.forEach(function(g){var b,E=(b=c[g])===null||b===void 0?void 0:b.yProps;E&&(o=o.concat(E.map(function(T){return T.updatesTable})))}),this.db=t,this.mode=a,this.storeNames=o,this.schema=c,this.chromeTransactionDurability=d,this.idbtrans=null,this.on=Jr(this,"complete","error","abort"),this.parent=f||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new ne(function(g,b){h._resolve=g,h._reject=b}),this._completion.then(function(){h.active=!1,h.on.complete.fire()},function(g){var b=h.active;return h.active=!1,h.on.error.fire(g),h.parent?h.parent._reject(g):b&&h.idbtrans&&h.idbtrans.abort(),Qe(g)})})}function ta(t,r,a,o,c,d,f,h){return{name:t,keyPath:r,unique:a,multi:o,auto:c,compound:d,src:(a&&!f?"&":"")+(o?"*":"")+(c?"++":"")+Vs(r),type:h}}function Vs(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function ra(t,r,a){return{name:t,primKey:r,indexes:a,mappedClass:null,idxByName:z(a,function(o){return[o.name,o]})}}function Wd(t){return t.length===1?t[0]:t}var tn=function(t){try{return t.only([[]]),tn=function(){return[[]]},[[]]}catch{return tn=function(){return Sr},Sr}};function na(t){return t==null?function(){}:typeof t=="string"?Kd(t):function(r){return G(r,t)}}function Kd(t){var r=t.split(".");return r.length===1?function(a){return a[t]}:function(a){return G(a,t)}}function js(t){return[].slice.call(t)}var Hd=0;function rn(t){return t==null?":id":typeof t=="string"?t:"[".concat(t.join("+"),"]")}function Gd(t,r,a){function o(R,U){var k=js(R.objectStoreNames),A=k.length>0?U.objectStore(k[0]):{};return{schema:{name:R.name,tables:k.map(function(_){return U.objectStore(_)}).map(function(_){var C=_.keyPath,V=_.autoIncrement,W=p(C),$=C==null,F={},ae={name:_.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:$,compound:W,keyPath:C,autoIncrement:V,unique:!0,extractKey:na(C)},indexes:js(_.indexNames).map(function(Q){return _.index(Q)}).map(function(Q){var ee=Q.name,ge=Q.unique,$e=Q.multiEntry,be=Q.keyPath,ve=p(be),Ee={name:ee,compound:ve,keyPath:be,unique:ge,multiEntry:$e,extractKey:na(be)};return F[rn(be)]=Ee,Ee}),getIndexByKeyPath:function(Q){return F[rn(Q)]}};return F[":id"]=ae.primaryKey,C!=null&&(F[rn(C)]=ae.primaryKey),ae})},hasGetAll:k.length>0&&"getAll"in A&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in A}}function c(R){if(R.type===3)return null;if(R.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var U=R.lower,k=R.upper,A=R.lowerOpen,_=R.upperOpen,C=U===void 0?k===void 0?null:r.upperBound(k,!!_):k===void 0?r.lowerBound(U,!!A):r.bound(U,k,!!A,!!_);return C}function d(R){var U=R.name;function k(C){var V=C.trans,W=C.type,$=C.keys,F=C.values,ae=C.range;return new Promise(function(Q,ee){Q=Ye(Q);var ge=V.objectStore(U),$e=ge.keyPath==null,be=W==="put"||W==="add";if(!be&&W!=="delete"&&W!=="deleteRange")throw new Error("Invalid operation type: "+W);var ve=($||F||{length:1}).length;if($&&F&&$.length!==F.length)throw new Error("Given keys array must have same length as given values array.");if(ve===0)return Q({numFailures:0,failures:{},results:[],lastResult:void 0});var Ee,Te=[],je=[],we=0,nt=function(pt){++we,Zr(pt)};if(W==="deleteRange"){if(ae.type===4)return Q({numFailures:we,failures:je,results:[],lastResult:void 0});ae.type===3?Te.push(Ee=ge.clear()):Te.push(Ee=ge.delete(c(ae)))}else{var Tt=be?$e?[F,$]:[F,null]:[$,null],bt=Tt[0],Tr=Tt[1];if(be)for(var gt=0;gt<ve;++gt)Te.push(Ee=Tr&&Tr[gt]!==void 0?ge[W](bt[gt],Tr[gt]):ge[W](bt[gt])),Ee.onerror=nt;else for(var gt=0;gt<ve;++gt)Te.push(Ee=ge[W](bt[gt])),Ee.onerror=nt}var At=function(pt){var Ar=pt.target.result;Te.forEach(function(Lt,qn){return Lt.error!=null&&(je[qn]=Lt.error)}),Q({numFailures:we,failures:je,results:W==="delete"?$:Te.map(function(Lt){return Lt.result}),lastResult:Ar})};Ee.onerror=function(pt){nt(pt),At(pt)},Ee.onsuccess=At})}function A(C){var V=C.trans,W=C.values,$=C.query,F=C.reverse,ae=C.unique;return new Promise(function(Q,ee){Q=Ye(Q);var ge=$.index,$e=$.range,be=V.objectStore(U),ve=ge.isPrimaryKey?be:be.index(ge.name),Ee=F?ae?"prevunique":"prev":ae?"nextunique":"next",Te=W||!("openKeyCursor"in ve)?ve.openCursor(c($e),Ee):ve.openKeyCursor(c($e),Ee);Te.onerror=Ot(ee),Te.onsuccess=Ye(function(je){var we=Te.result;if(!we){Q(null);return}we.___id=++Hd,we.done=!1;var nt=we.continue.bind(we),Tt=we.continuePrimaryKey;Tt&&(Tt=Tt.bind(we));var bt=we.advance.bind(we),Tr=function(){throw new Error("Cursor not started")},gt=function(){throw new Error("Cursor not stopped")};we.trans=V,we.stop=we.continue=we.continuePrimaryKey=we.advance=Tr,we.fail=Ye(ee),we.next=function(){var At=this,pt=1;return this.start(function(){return pt--?At.continue():At.stop()}).then(function(){return At})},we.start=function(At){var pt=new Promise(function(Lt,qn){Lt=Ye(Lt),Te.onerror=Ot(qn),we.fail=qn,we.stop=function(Dp){we.stop=we.continue=we.continuePrimaryKey=we.advance=gt,Lt(Dp)}}),Ar=function(){if(Te.result)try{At()}catch(Lt){we.fail(Lt)}else we.done=!0,we.start=function(){throw new Error("Cursor behind last entry")},we.stop()};return Te.onsuccess=Ye(function(Lt){Te.onsuccess=Ar,Ar()}),we.continue=nt,we.continuePrimaryKey=Tt,we.advance=bt,Ar(),pt},Q(we)},ee)})}function _(C,V){return function(W){return new Promise(function($,F){var ae;$=Ye($);var Q=W.trans,ee=W.values,ge=W.limit,$e=W.query,be=(ae=W.direction)!==null&&ae!==void 0?ae:"next",ve=ge===1/0?void 0:ge,Ee=$e.index,Te=$e.range,je=Q.objectStore(U),we=Ee.isPrimaryKey?je:je.index(Ee.name),nt=c(Te);if(ge===0)return $({result:[]});if(V){var Tt={query:nt,count:ve,direction:be},bt=ee?we.getAll(Tt):we.getAllKeys(Tt);bt.onsuccess=function(pt){return $({result:pt.target.result})},bt.onerror=Ot(F)}else if(C&&be==="next"){var bt=ee?we.getAll(nt,ve):we.getAllKeys(nt,ve);bt.onsuccess=function(Ar){return $({result:Ar.target.result})},bt.onerror=Ot(F)}else{var Tr=0,gt=ee||!("openKeyCursor"in we)?we.openCursor(nt,be):we.openKeyCursor(nt,be),At=[];gt.onsuccess=function(){var pt=gt.result;if(!pt)return $({result:At});if(At.push(ee?pt.value:pt.primaryKey),++Tr===ge)return $({result:At});pt.continue()},gt.onerror=Ot(F)}})}}return{name:U,schema:R,mutate:k,getMany:function(C){var V=C.trans,W=C.keys;return new Promise(function($,F){$=Ye($);for(var ae=V.objectStore(U),Q=W.length,ee=new Array(Q),ge=0,$e=0,be,ve=function(we){var nt=we.target;(ee[nt._pos]=nt.result)!=null,++$e===ge&&$(ee)},Ee=Ot(F),Te=0;Te<Q;++Te){var je=W[Te];je!=null&&(be=ae.get(W[Te]),be._pos=Te,be.onsuccess=ve,be.onerror=Ee,++ge)}ge===0&&$(ee)})},get:function(C){var V=C.trans,W=C.key;return new Promise(function($,F){$=Ye($);var ae=V.objectStore(U),Q=ae.get(W);Q.onsuccess=function(ee){return $(ee.target.result)},Q.onerror=Ot(F)})},query:_(g,b),openCursor:A,count:function(C){var V=C.query,W=C.trans,$=V.index,F=V.range;return new Promise(function(ae,Q){var ee=W.objectStore(U),ge=$.isPrimaryKey?ee:ee.index($.name),$e=c(F),be=$e?ge.count($e):ge.count();be.onsuccess=Ye(function(ve){return ae(ve.target.result)}),be.onerror=Ot(Q)})}}}var f=o(t,a),h=f.schema,g=f.hasGetAll,b=f.hasIdb3Features,E=h.tables.map(function(R){return d(R)}),T={};return E.forEach(function(R){return T[R.name]=R}),{stack:"dbcore",transaction:t.transaction.bind(t),table:function(R){var U=T[R];if(!U)throw new Error("Table '".concat(R,"' not found"));return T[R]},MIN_KEY:-1/0,MAX_KEY:tn(r),schema:h}}function Vd(t,r){return r.reduce(function(a,o){var c=o.create;return i(i({},a),c(a))},t)}function jd(t,r,a,o){var c=a.IDBKeyRange;a.indexedDB;var d=Vd(Gd(r,c,o),t.dbcore);return{dbcore:d}}function Mn(t,r){var a=r.db,o=jd(t._middlewares,a,t._deps,r);t.core=o.dbcore,t.tables.forEach(function(c){var d=c.name;t.core.schema.tables.some(function(f){return f.name===d})&&(c.core=t.core.table(d),t[d]instanceof t.Table&&(t[d].core=c.core))})}function Bn(t,r,a,o){a.forEach(function(c){var d=o[c];r.forEach(function(f){var h=q(f,c);(!h||"value"in h&&h.value===void 0)&&(f===t.Transaction.prototype||f instanceof t.Transaction?x(f,c,{get:function(){return this.table(c)},set:function(g){P(this,c,{value:g,writable:!0,configurable:!0,enumerable:!0})}}):f[c]=new t.Table(c,d))})})}function ia(t,r){r.forEach(function(a){for(var o in a)a[o]instanceof t.Table&&delete a[o]})}function qd(t,r){return t._cfg.version-r._cfg.version}function Yd(t,r,a,o){var c=t._dbSchema;a.objectStoreNames.contains("$meta")&&!c.$meta&&(c.$meta=ra("$meta",Ys("")[0],[]),t._storeNames.push("$meta"));var d=t._createTransaction("readwrite",t._storeNames,c);d.create(a),d._completion.catch(o);var f=d._reject.bind(d),h=ye.transless||ye;tr(function(){if(ye.trans=d,ye.transless=h,r===0)u(c).forEach(function(g){sa(a,g,c[g].primKey,c[g].indexes)}),Mn(t,a),ne.follow(function(){return t.on.populate.fire(d)}).catch(f);else return Mn(t,a),Jd(t,d,r).then(function(g){return Qd(t,g,d,a)}).catch(f)})}function Xd(t,r){qs(t._dbSchema,r),r.db.version%10===0&&!r.objectStoreNames.contains("$meta")&&r.db.createObjectStore("$meta").add(Math.ceil(r.db.version/10-1),"version");var a=zn(t,t.idbdb,r);Fn(t,t._dbSchema,r);for(var o=aa(a,t._dbSchema),c=function(b){if(b.change.length||b.recreate)return console.warn("Unable to patch indexes of table ".concat(b.name," because it has changes on the type of index or primary key.")),{value:void 0};var E=r.objectStore(b.name);b.add.forEach(function(T){ze&&console.debug("Dexie upgrade patch: Creating missing index ".concat(b.name,".").concat(T.src)),Un(E,T)})},d=0,f=o.change;d<f.length;d++){var h=f[d],g=c(h);if(typeof g=="object")return g.value}}function Jd(t,r,a){return r.storeNames.includes("$meta")?r.table("$meta").get("version").then(function(o){return o??a}):ne.resolve(a)}function Qd(t,r,a,o){var c=[],d=t._versions,f=t._dbSchema=zn(t,t.idbdb,o),h=d.filter(function(b){return b._cfg.version>=r});if(h.length===0)return ne.resolve();h.forEach(function(b){c.push(function(){var E=f,T=b._cfg.dbschema;Fn(t,E,o),Fn(t,T,o),f=t._dbSchema=T;var R=aa(E,T);R.add.forEach(function(V){sa(o,V[0],V[1].primKey,V[1].indexes)}),R.change.forEach(function(V){if(V.recreate)throw new fe.Upgrade("Not yet support for changing primary key");var W=o.objectStore(V.name);V.add.forEach(function($){return Un(W,$)}),V.change.forEach(function($){W.deleteIndex($.name),Un(W,$)}),V.del.forEach(function($){return W.deleteIndex($)})});var U=b._cfg.contentUpgrade;if(U&&b._cfg.version>r){Mn(t,o),a._memoizedTables={};var k=Z(T);R.del.forEach(function(V){k[V]=E[V]}),ia(t,[t.Transaction.prototype]),Bn(t,[t.Transaction.prototype],u(k),k),a.schema=k;var A=We(U);A&&Or();var _,C=ne.follow(function(){if(_=U(a),_&&A){var V=rr.bind(null,null);_.then(V,V)}});return _&&typeof _.then=="function"?ne.resolve(_):C.then(function(){return _})}}),c.push(function(E){var T=b._cfg.dbschema;Zd(T,E),ia(t,[t.Transaction.prototype]),Bn(t,[t.Transaction.prototype],t._storeNames,t._dbSchema),a.schema=t._dbSchema}),c.push(function(E){t.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(t.idbdb.version/10)===b._cfg.version?(t.idbdb.deleteObjectStore("$meta"),delete t._dbSchema.$meta,t._storeNames=t._storeNames.filter(function(T){return T!=="$meta"})):E.objectStore("$meta").put(b._cfg.version,"version"))})});function g(){return c.length?ne.resolve(c.shift()(a.idbtrans)).then(g):ne.resolve()}return g().then(function(){qs(f,o)})}function aa(t,r){var a={del:[],add:[],change:[]},o;for(o in t)r[o]||a.del.push(o);for(o in r){var c=t[o],d=r[o];if(!c)a.add.push([o,d]);else{var f={name:o,def:d,recreate:!1,del:[],add:[],change:[]};if(""+(c.primKey.keyPath||"")!=""+(d.primKey.keyPath||"")||c.primKey.auto!==d.primKey.auto)f.recreate=!0,a.change.push(f);else{var h=c.idxByName,g=d.idxByName,b=void 0;for(b in h)g[b]||f.del.push(b);for(b in g){var E=h[b],T=g[b];E?E.src!==T.src&&f.change.push(T):f.add.push(T)}(f.del.length>0||f.add.length>0||f.change.length>0)&&a.change.push(f)}}}return a}function sa(t,r,a,o){var c=t.db.createObjectStore(r,a.keyPath?{keyPath:a.keyPath,autoIncrement:a.auto}:{autoIncrement:a.auto});return o.forEach(function(d){return Un(c,d)}),c}function qs(t,r){u(t).forEach(function(a){r.db.objectStoreNames.contains(a)||(ze&&console.debug("Dexie: Creating missing table",a),sa(r,a,t[a].primKey,t[a].indexes))})}function Zd(t,r){[].slice.call(r.db.objectStoreNames).forEach(function(a){return t[a]==null&&r.db.deleteObjectStore(a)})}function Un(t,r){t.createIndex(r.name,r.keyPath,{unique:r.unique,multiEntry:r.multi})}function zn(t,r,a){var o={},c=H(r.objectStoreNames,0);return c.forEach(function(d){for(var f=a.objectStore(d),h=f.keyPath,g=ta(Vs(h),h||"",!0,!1,!!f.autoIncrement,h&&typeof h!="string",!0),b=[],E=0;E<f.indexNames.length;++E){var T=f.index(f.indexNames[E]);h=T.keyPath;var R=ta(T.name,h,!!T.unique,!!T.multiEntry,!1,h&&typeof h!="string",!1);b.push(R)}o[d]=ra(d,g,b)}),o}function ep(t,r,a){t.verno=r.version/10;var o=t._dbSchema=zn(t,r,a);t._storeNames=H(r.objectStoreNames,0),Bn(t,[t._allTables],u(o),o)}function tp(t,r){var a=zn(t,t.idbdb,r),o=aa(a,t._dbSchema);return!(o.add.length||o.change.some(function(c){return c.add.length||c.change.length}))}function Fn(t,r,a){for(var o=a.db.objectStoreNames,c=0;c<o.length;++c){var d=o[c],f=a.objectStore(d);t._hasGetAll="getAll"in f;for(var h=0;h<f.indexNames.length;++h){var g=f.indexNames[h],b=f.index(g).keyPath,E=typeof b=="string"?b:"["+H(b).join("+")+"]";if(r[d]){var T=r[d].idxByName[E];T&&(T.name=g,delete r[d].idxByName[E],r[d].idxByName[g]=T)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&l.WorkerGlobalScope&&l instanceof l.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}function Ys(t){return t.split(",").map(function(r,a){var o,c=r.split(":"),d=(o=c[1])===null||o===void 0?void 0:o.trim();r=c[0].trim();var f=r.replace(/([&*]|\+\+)/g,""),h=/^\[/.test(f)?f.match(/^\[(.*)\]$/)[1].split("+"):f;return ta(f,h||null,/\&/.test(r),/\*/.test(r),/\+\+/.test(r),p(h),a===0,d)})}var rp=(function(){function t(){}return t.prototype._createTableSchema=function(r,a,o){return ra(r,a,o)},t.prototype._parseIndexSyntax=function(r){return Ys(r)},t.prototype._parseStoresSpec=function(r,a){var o=this;u(r).forEach(function(c){if(r[c]!==null){var d=o._parseIndexSyntax(r[c]),f=d.shift();if(!f)throw new fe.Schema("Invalid schema for table "+c+": "+r[c]);if(f.unique=!0,f.multi)throw new fe.Schema("Primary key cannot be multiEntry*");d.forEach(function(g){if(g.auto)throw new fe.Schema("Only primary key can be marked as autoIncrement (++)");if(!g.keyPath)throw new fe.Schema("Index must have a name and cannot be an empty string")});var h=o._createTableSchema(c,f,d);a[c]=h}})},t.prototype.stores=function(r){var a=this.db;this._cfg.storesSource=this._cfg.storesSource?m(this._cfg.storesSource,r):r;var o=a._versions,c={},d={};return o.forEach(function(f){m(c,f._cfg.storesSource),d=f._cfg.dbschema={},f._parseStoresSpec(c,d)}),a._dbSchema=d,ia(a,[a._allTables,a,a.Transaction.prototype]),Bn(a,[a._allTables,a,a.Transaction.prototype,this._cfg.tables],u(d),d),a._storeNames=u(d),this},t.prototype.upgrade=function(r){return this._cfg.contentUpgrade=Se(this._cfg.contentUpgrade||He,r),this},t})();function np(t){return Qr(rp.prototype,function(a){this.db=t,this._cfg={version:a,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}var nn=ip();function ip(){if(typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"){var t=new Set,r=new FinalizationRegistry(function(f){t.delete(f)}),a=function(){return Array.from(t).map(function(f){return f.deref()}).filter(function(f){return f!==void 0})},o=function(f){var h=new WeakRef(f._novip);if(t.add(h),r.register(f._novip,h,h),t.size>f._options.maxConnections){var g=t.values().next().value;t.delete(g),r.unregister(g)}},c=function(f){if(f)for(var h=t.values(),g=h.next();!g.done;){var b=g.value;if(b.deref()===f._novip){t.delete(b),r.unregister(b);return}g=h.next()}};return{toArray:a,add:o,remove:c}}else{var d=[],a=function(){return d},o=function(b){d.push(b._novip)},c=function(b){if(b){var E=d.indexOf(b._novip);E!==-1&&d.splice(E,1)}};return{toArray:a,add:o,remove:c}}}function oa(t,r){var a=t._dbNamesDB;return a||(a=t._dbNamesDB=new jt(In,{addons:[],indexedDB:t,IDBKeyRange:r}),a.version(1).stores({dbnames:"name"})),a.table("dbnames")}function la(t){return t&&typeof t.databases=="function"}function ap(t){var r=t.indexedDB,a=t.IDBKeyRange;return la(r)?Promise.resolve(r.databases()).then(function(o){return o.map(function(c){return c.name}).filter(function(c){return c!==In})}):oa(r,a).toCollection().primaryKeys()}function sp(t,r){var a=t.indexedDB,o=t.IDBKeyRange;!la(a)&&r!==In&&oa(a,o).put({name:r}).catch(He)}function op(t,r){var a=t.indexedDB,o=t.IDBKeyRange;!la(a)&&r!==In&&oa(a,o).delete(r).catch(He)}function ca(t){return tr(function(){return ye.letThrough=!0,t()})}function lp(){var t=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!t||!indexedDB.databases)return Promise.resolve();var r;return new Promise(function(a){var o=function(){return indexedDB.databases().finally(a)};r=setInterval(o,100),o()}).finally(function(){return clearInterval(r)})}var ua;function da(t){return!("from"in t)}var ht=function(t,r){if(this)m(this,arguments.length?{d:1,from:t,to:arguments.length>1?r:t}:{d:0});else{var a=new ht;return t&&"d"in t&&m(a,t),a}};w(ht.prototype,(ua={add:function(t){return sn(this,t),this},addKey:function(t){return an(this,t,t),this},addKeys:function(t){var r=this;return t.forEach(function(a){return an(r,a,a)}),this},hasKey:function(t){var r=Wn(this).next(t).value;return r&&Me(r.from,t)<=0&&Me(r.to,t)>=0}},ua[Re]=function(){return Wn(this)},ua));function an(t,r,a){var o=Me(r,a);if(!isNaN(o)){if(o>0)throw RangeError();if(da(t))return m(t,{from:r,to:a,d:1});var c=t.l,d=t.r;if(Me(a,t.from)<0)return c?an(c,r,a):t.l={from:r,to:a,d:1,l:null,r:null},Js(t);if(Me(r,t.to)>0)return d?an(d,r,a):t.r={from:r,to:a,d:1,l:null,r:null},Js(t);Me(r,t.from)<0&&(t.from=r,t.l=null,t.d=d?d.d+1:1),Me(a,t.to)>0&&(t.to=a,t.r=null,t.d=t.l?t.l.d+1:1);var f=!t.r;c&&!t.l&&sn(t,c),d&&f&&sn(t,d)}}function sn(t,r){function a(o,c){var d=c.from,f=c.to,h=c.l,g=c.r;an(o,d,f),h&&a(o,h),g&&a(o,g)}da(r)||a(t,r)}function Xs(t,r){var a=Wn(r),o=a.next();if(o.done)return!1;for(var c=o.value,d=Wn(t),f=d.next(c.from),h=f.value;!o.done&&!f.done;){if(Me(h.from,c.to)<=0&&Me(h.to,c.from)>=0)return!0;Me(c.from,h.from)<0?c=(o=a.next(h.from)).value:h=(f=d.next(c.from)).value}return!1}function Wn(t){var r=da(t)?null:{s:0,n:t};return{next:function(a){for(var o=arguments.length>0;r;)switch(r.s){case 0:if(r.s=1,o)for(;r.n.l&&Me(a,r.n.from)<0;)r={up:r,n:r.n.l,s:1};else for(;r.n.l;)r={up:r,n:r.n.l,s:1};case 1:if(r.s=2,!o||Me(a,r.n.to)<=0)return{value:r.n,done:!1};case 2:if(r.n.r){r.s=3,r={up:r,n:r.n.r,s:0};continue}case 3:r=r.up}return{done:!0}}}}function Js(t){var r,a,o=(((r=t.r)===null||r===void 0?void 0:r.d)||0)-(((a=t.l)===null||a===void 0?void 0:a.d)||0),c=o>1?"r":o<-1?"l":"";if(c){var d=c==="r"?"l":"r",f=i({},t),h=t[c];t.from=h.from,t.to=h.to,t[c]=h[c],f[c]=h[d],t[d]=f,f.d=Qs(f)}t.d=Qs(t)}function Qs(t){var r=t.r,a=t.l;return(r?a?Math.max(r.d,a.d):r.d:a?a.d:0)+1}function Kn(t,r){return u(r).forEach(function(a){t[a]?sn(t[a],r[a]):t[a]=_e(r[a])}),t}function pa(t,r){return t.all||r.all||Object.keys(t).some(function(a){return r[a]&&Xs(r[a],t[a])})}var kr={},fa={},ma=!1;function Hn(t,r){Kn(fa,t),ma||(ma=!0,setTimeout(function(){ma=!1;var a=fa;fa={},ha(a,!1)},0))}function ha(t,r){r===void 0&&(r=!1);var a=new Set;if(t.all)for(var o=0,c=Object.values(kr);o<c.length;o++){var d=c[o];Zs(d,t,a,r)}else for(var f in t){var h=/^idb\:\/\/(.*)\/(.*)\//.exec(f);if(h){var g=h[1],b=h[2],d=kr["idb://".concat(g,"/").concat(b)];d&&Zs(d,t,a,r)}}a.forEach(function(E){return E()})}function Zs(t,r,a,o){for(var c=[],d=0,f=Object.entries(t.queries.query);d<f.length;d++){for(var h=f[d],g=h[0],b=h[1],E=[],T=0,R=b;T<R.length;T++){var U=R[T];pa(r,U.obsSet)?U.subscribers.forEach(function(C){return a.add(C)}):o&&E.push(U)}o&&c.push([g,E])}if(o)for(var k=0,A=c;k<A.length;k++){var _=A[k],g=_[0],E=_[1];t.queries.query[g]=E}}function cp(t){var r=t._state,a=t._deps.indexedDB;if(r.isBeingOpened||t.idbdb)return r.dbReadyPromise.then(function(){return r.dbOpenError?Qe(r.dbOpenError):t});r.isBeingOpened=!0,r.dbOpenError=null,r.openComplete=!1;var o=r.openCanceller,c=Math.round(t.verno*10),d=!1;function f(){if(r.openCanceller!==o)throw new fe.DatabaseClosed("db.open() was cancelled")}var h=r.dbReadyResolve,g=null,b=!1,E=function(){return new ne(function(T,R){if(f(),!a)throw new fe.MissingAPI;var U=t.name,k=r.autoSchema||!c?a.open(U):a.open(U,c);if(!k)throw new fe.MissingAPI;k.onerror=Ot(R),k.onblocked=Ye(t._fireOnBlocked),k.onupgradeneeded=Ye(function(A){if(g=k.transaction,r.autoSchema&&!t._options.allowEmptyDB){k.onerror=Zr,g.abort(),k.result.close();var _=a.deleteDatabase(U);_.onsuccess=_.onerror=Ye(function(){R(new fe.NoSuchDatabase("Database ".concat(U," doesnt exist")))})}else{g.onerror=Ot(R);var C=A.oldVersion>Math.pow(2,62)?0:A.oldVersion;b=C<1,t.idbdb=k.result,d&&Xd(t,g),Yd(t,C/10,g,R)}},R),k.onsuccess=Ye(function(){g=null;var A=t.idbdb=k.result,_=H(A.objectStoreNames);if(_.length>0)try{var C=A.transaction(Wd(_),"readonly");if(r.autoSchema)ep(t,A,C);else if(Fn(t,t._dbSchema,C),!tp(t,C)&&!d)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),A.close(),c=A.version+1,d=!0,T(E());Mn(t,C)}catch{}nn.add(t),A.onversionchange=Ye(function(V){r.vcFired=!0,t.on("versionchange").fire(V)}),A.onclose=Ye(function(){t.close({disableAutoOpen:!1})}),b&&sp(t._deps,U),T()},R)}).catch(function(T){switch(T?.name){case"UnknownError":if(r.PR1398_maxLoop>0)return r.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),E();break;case"VersionError":if(c>0)return c=0,E();break}return ne.reject(T)})};return ne.race([o,(typeof navigator>"u"?ne.resolve():lp()).then(E)]).then(function(){return f(),r.onReadyBeingFired=[],ne.resolve(ca(function(){return t.on.ready.fire(t.vip)})).then(function T(){if(r.onReadyBeingFired.length>0){var R=r.onReadyBeingFired.reduce(Se,He);return r.onReadyBeingFired=[],ne.resolve(ca(function(){return R(t.vip)})).then(T)}})}).finally(function(){r.openCanceller===o&&(r.onReadyBeingFired=null,r.isBeingOpened=!1)}).catch(function(T){r.dbOpenError=T;try{g&&g.abort()}catch{}return o===r.openCanceller&&t._close(),Qe(T)}).finally(function(){r.openComplete=!0,h()}).then(function(){if(b){var T={};t.tables.forEach(function(R){R.schema.indexes.forEach(function(U){U.name&&(T["idb://".concat(t.name,"/").concat(R.name,"/").concat(U.name)]=new ht(-1/0,[[[]]]))}),T["idb://".concat(t.name,"/").concat(R.name,"/")]=T["idb://".concat(t.name,"/").concat(R.name,"/:dels")]=new ht(-1/0,[[[]]])}),ar(en).fire(T),ha(T,!0)}return t})}function ga(t){var r=function(f){return t.next(f)},a=function(f){return t.throw(f)},o=d(r),c=d(a);function d(f){return function(h){var g=f(h),b=g.value;return g.done?b:!b||typeof b.then!="function"?p(b)?Promise.all(b).then(o,c):o(b):b.then(o,c)}}return d(r)()}function up(t,r,a){var o=arguments.length;if(o<2)throw new fe.InvalidArgument("Too few arguments");for(var c=new Array(o-1);--o;)c[o-1]=arguments[o];a=c.pop();var d=ie(c);return[t,d,a]}function eo(t,r,a,o,c){return ne.resolve().then(function(){var d=ye.transless||ye,f=t._createTransaction(r,a,t._dbSchema,o);f.explicit=!0;var h={trans:f,transless:d};if(o)f.idbtrans=o.idbtrans;else try{f.create(),f.idbtrans._explicit=!0,t._state.PR1398_maxLoop=3}catch(T){return T.name===pe.InvalidState&&t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t.close({disableAutoOpen:!1}),t.open().then(function(){return eo(t,r,a,null,c)})):Qe(T)}var g=We(c);g&&Or();var b,E=ne.follow(function(){if(b=c.call(f,f),b)if(g){var T=rr.bind(null,null);b.then(T,T)}else typeof b.next=="function"&&typeof b.throw=="function"&&(b=ga(b))},h);return(b&&typeof b.then=="function"?ne.resolve(b).then(function(T){return f.active?T:Qe(new fe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):E.then(function(){return b})).then(function(T){return o&&f._resolve(),f._completion.then(function(){return T})}).catch(function(T){return f._reject(T),Qe(T)})})}function Gn(t,r,a){for(var o=p(t)?t.slice():[t],c=0;c<a;++c)o.push(r);return o}function dp(t){return i(i({},t),{table:function(r){var a=t.table(r),o=a.schema,c={},d=[];function f(A,_,C){var V=rn(A),W=c[V]=c[V]||[],$=A==null?0:typeof A=="string"?1:A.length,F=_>0,ae=i(i({},C),{name:F?"".concat(V,"(virtual-from:").concat(C.name,")"):C.name,lowLevelIndex:C,isVirtual:F,keyTail:_,keyLength:$,extractKey:na(A),unique:!F&&C.unique});if(W.push(ae),ae.isPrimaryKey||d.push(ae),$>1){var Q=$===2?A[0]:A.slice(0,$-1);f(Q,_+1,C)}return W.sort(function(ee,ge){return ee.keyTail-ge.keyTail}),ae}var h=f(o.primaryKey.keyPath,0,o.primaryKey);c[":id"]=[h];for(var g=0,b=o.indexes;g<b.length;g++){var E=b[g];f(E.keyPath,0,E)}function T(A){var _=c[rn(A)];return _&&_[0]}function R(A,_){return{type:A.type===1?2:A.type,lower:Gn(A.lower,A.lowerOpen?t.MAX_KEY:t.MIN_KEY,_),lowerOpen:!0,upper:Gn(A.upper,A.upperOpen?t.MIN_KEY:t.MAX_KEY,_),upperOpen:!0}}function U(A){var _=A.query.index;return _.isVirtual?i(i({},A),{query:{index:_.lowLevelIndex,range:R(A.query.range,_.keyTail)}}):A}var k=i(i({},a),{schema:i(i({},o),{primaryKey:h,indexes:d,getIndexByKeyPath:T}),count:function(A){return a.count(U(A))},query:function(A){return a.query(U(A))},openCursor:function(A){var _=A.query.index,C=_.keyTail,V=_.isVirtual,W=_.keyLength;if(!V)return a.openCursor(A);function $(F){function ae(ee){ee!=null?F.continue(Gn(ee,A.reverse?t.MAX_KEY:t.MIN_KEY,C)):A.unique?F.continue(F.key.slice(0,W).concat(A.reverse?t.MIN_KEY:t.MAX_KEY,C)):F.continue()}var Q=Object.create(F,{continue:{value:ae},continuePrimaryKey:{value:function(ee,ge){F.continuePrimaryKey(Gn(ee,t.MAX_KEY,C),ge)}},primaryKey:{get:function(){return F.primaryKey}},key:{get:function(){var ee=F.key;return W===1?ee[0]:ee.slice(0,W)}},value:{get:function(){return F.value}}});return Q}return a.openCursor(U(A)).then(function(F){return F&&$(F)})}});return k}})}var pp={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:dp};function va(t,r,a,o){return a=a||{},o=o||"",u(t).forEach(function(c){if(!S(r,c))a[o+c]=void 0;else{var d=t[c],f=r[c];if(typeof d=="object"&&typeof f=="object"&&d&&f){var h=D(d),g=D(f);h!==g?a[o+c]=r[c]:h==="Object"?va(d,f,a,o+c+"."):d!==f&&(a[o+c]=r[c])}else d!==f&&(a[o+c]=r[c])}}),u(r).forEach(function(c){S(t,c)||(a[o+c]=r[c])}),a}function ya(t,r){return r.type==="delete"?r.keys:r.keys||r.values.map(t.extractKey)}var fp={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(t){return i(i({},t),{table:function(r){var a=t.table(r),o=a.schema.primaryKey,c=i(i({},a),{mutate:function(d){var f=ye.trans,h=f.table(r).hook,g=h.deleting,b=h.creating,E=h.updating;switch(d.type){case"add":if(b.fire===He)break;return f._promise("readwrite",function(){return T(d)},!0);case"put":if(b.fire===He&&E.fire===He)break;return f._promise("readwrite",function(){return T(d)},!0);case"delete":if(g.fire===He)break;return f._promise("readwrite",function(){return T(d)},!0);case"deleteRange":if(g.fire===He)break;return f._promise("readwrite",function(){return R(d)},!0)}return a.mutate(d);function T(k){var A=ye.trans,_=k.keys||ya(o,k);if(!_)throw new Error("Keys missing");return k=k.type==="add"||k.type==="put"?i(i({},k),{keys:_}):i({},k),k.type!=="delete"&&(k.values=s([],k.values,!0)),k.keys&&(k.keys=s([],k.keys,!0)),mp(a,k,_).then(function(C){var V=_.map(function(W,$){var F=C[$],ae={onerror:null,onsuccess:null};if(k.type==="delete")g.fire.call(ae,W,F,A);else if(k.type==="add"||F===void 0){var Q=b.fire.call(ae,W,k.values[$],A);W==null&&Q!=null&&(W=Q,k.keys[$]=W,o.outbound||re(k.values[$],o.keyPath,W))}else{var ee=va(F,k.values[$]),ge=E.fire.call(ae,ee,W,F,A);if(ge){var $e=k.values[$];Object.keys(ge).forEach(function(be){S($e,be)?$e[be]=ge[be]:re($e,be,ge[be])})}}return ae});return a.mutate(k).then(function(W){for(var $=W.failures,F=W.results,ae=W.numFailures,Q=W.lastResult,ee=0;ee<_.length;++ee){var ge=F?F[ee]:_[ee],$e=V[ee];ge==null?$e.onerror&&$e.onerror($[ee]):$e.onsuccess&&$e.onsuccess(k.type==="put"&&C[ee]?k.values[ee]:ge)}return{failures:$,results:F,numFailures:ae,lastResult:Q}}).catch(function(W){return V.forEach(function($){return $.onerror&&$.onerror(W)}),Promise.reject(W)})})}function R(k){return U(k.trans,k.range,1e4)}function U(k,A,_){return a.query({trans:k,values:!1,query:{index:o,range:A},limit:_}).then(function(C){var V=C.result;return T({type:"delete",keys:V,trans:k}).then(function(W){return W.numFailures>0?Promise.reject(W.failures[0]):V.length<_?{failures:[],numFailures:0,lastResult:void 0}:U(k,i(i({},A),{lower:V[V.length-1],lowerOpen:!0}),_)})})}}});return c}})}};function mp(t,r,a){return r.type==="add"?Promise.resolve([]):t.getMany({trans:r.trans,keys:a,cache:"immutable"})}function to(t,r,a){try{if(!r||r.keys.length<t.length)return null;for(var o=[],c=0,d=0;c<r.keys.length&&d<t.length;++c)Me(r.keys[c],t[d])===0&&(o.push(a?Oe(r.values[c]):r.values[c]),++d);return o.length===t.length?o:null}catch{return null}}var hp={stack:"dbcore",level:-1,create:function(t){return{table:function(r){var a=t.table(r);return i(i({},a),{getMany:function(o){if(!o.cache)return a.getMany(o);var c=to(o.keys,o.trans._cache,o.cache==="clone");return c?ne.resolve(c):a.getMany(o).then(function(d){return o.trans._cache={keys:o.keys,values:o.cache==="clone"?Oe(d):d},d})},mutate:function(o){return o.type!=="add"&&(o.trans._cache=null),a.mutate(o)}})}}}};function ro(t,r){return t.trans.mode==="readonly"&&!!t.subscr&&!t.trans.explicit&&t.trans.db._options.cache!=="disabled"&&!r.schema.primaryKey.outbound}function no(t,r){switch(t){case"query":return r.values&&!r.unique;case"get":return!1;case"getMany":return!1;case"count":return!1;case"openCursor":return!1}}var gp={stack:"dbcore",level:0,name:"Observability",create:function(t){var r=t.schema.name,a=new ht(t.MIN_KEY,t.MAX_KEY);return i(i({},t),{transaction:function(o,c,d){if(ye.subscr&&c!=="readonly")throw new fe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ye.querier));return t.transaction(o,c,d)},table:function(o){var c=t.table(o),d=c.schema,f=d.primaryKey,h=d.indexes,g=f.extractKey,b=f.outbound,E=f.autoIncrement&&h.filter(function(k){return k.compound&&k.keyPath.includes(f.keyPath)}),T=i(i({},c),{mutate:function(k){var A,_,C=k.trans,V=k.mutatedParts||(k.mutatedParts={}),W=function(Ee){var Te="idb://".concat(r,"/").concat(o,"/").concat(Ee);return V[Te]||(V[Te]=new ht)},$=W(""),F=W(":dels"),ae=k.type,Q=k.type==="deleteRange"?[k.range]:k.type==="delete"?[k.keys]:k.values.length<50?[ya(f,k).filter(function(Ee){return Ee}),k.values]:[],ee=Q[0],ge=Q[1],$e=k.trans._cache;if(p(ee)){$.addKeys(ee);var be=ae==="delete"||ee.length===ge.length?to(ee,$e):null;be||F.addKeys(ee),(be||ge)&&vp(W,d,be,ge)}else if(ee){var ve={from:(A=ee.lower)!==null&&A!==void 0?A:t.MIN_KEY,to:(_=ee.upper)!==null&&_!==void 0?_:t.MAX_KEY};F.add(ve),$.add(ve)}else $.add(a),F.add(a),d.indexes.forEach(function(Ee){return W(Ee.name).add(a)});return c.mutate(k).then(function(Ee){return ee&&(k.type==="add"||k.type==="put")&&($.addKeys(Ee.results),E&&E.forEach(function(Te){for(var je=k.values.map(function(bt){return Te.extractKey(bt)}),we=Te.keyPath.findIndex(function(bt){return bt===f.keyPath}),nt=0,Tt=Ee.results.length;nt<Tt;++nt)je[nt][we]=Ee.results[nt];W(Te.name).addKeys(je)})),C.mutatedParts=Kn(C.mutatedParts||{},V),Ee})}}),R=function(k){var A,_,C=k.query,V=C.index,W=C.range;return[V,new ht((A=W.lower)!==null&&A!==void 0?A:t.MIN_KEY,(_=W.upper)!==null&&_!==void 0?_:t.MAX_KEY)]},U={get:function(k){return[f,new ht(k.key)]},getMany:function(k){return[f,new ht().addKeys(k.keys)]},count:R,query:R,openCursor:R};return u(U).forEach(function(k){T[k]=function(A){var _=ye.subscr,C=!!_,V=ro(ye,c)&&no(k,A),W=V?A.obsSet={}:_;if(C){var $=function(be){var ve="idb://".concat(r,"/").concat(o,"/").concat(be);return W[ve]||(W[ve]=new ht)},F=$(""),ae=$(":dels"),Q=U[k](A),ee=Q[0],ge=Q[1];if(k==="query"&&ee.isPrimaryKey&&!A.values?ae.add(ge):$(ee.name||"").add(ge),!ee.isPrimaryKey)if(k==="count")ae.add(a);else{var $e=k==="query"&&b&&A.values&&c.query(i(i({},A),{values:!1}));return c[k].apply(this,arguments).then(function(be){if(k==="query"){if(b&&A.values)return $e.then(function(je){var we=je.result;return F.addKeys(we),be});var ve=A.values?be.result.map(g):be.result;A.values?F.addKeys(ve):ae.addKeys(ve)}else if(k==="openCursor"){var Ee=be,Te=A.values;return Ee&&Object.create(Ee,{key:{get:function(){return ae.addKey(Ee.primaryKey),Ee.key}},primaryKey:{get:function(){var je=Ee.primaryKey;return ae.addKey(je),je}},value:{get:function(){return Te&&F.addKey(Ee.primaryKey),Ee.value}}})}return be})}}return c[k].apply(this,arguments)}}),T}})}};function vp(t,r,a,o){function c(d){var f=t(d.name||"");function h(b){return b!=null?d.extractKey(b):null}var g=function(b){return d.multiEntry&&p(b)?b.forEach(function(E){return f.addKey(E)}):f.addKey(b)};(a||o).forEach(function(b,E){var T=a&&h(a[E]),R=o&&h(o[E]);Me(T,R)!==0&&(T!=null&&g(T),R!=null&&g(R))})}r.indexes.forEach(c)}function io(t,r,a){if(a.numFailures===0)return r;if(r.type==="deleteRange")return null;var o=r.keys?r.keys.length:"values"in r&&r.values?r.values.length:1;if(a.numFailures===o)return null;var c=i({},r);return p(c.keys)&&(c.keys=c.keys.filter(function(d,f){return!(f in a.failures)})),"values"in c&&p(c.values)&&(c.values=c.values.filter(function(d,f){return!(f in a.failures)})),c}function yp(t,r){return r.lower===void 0?!0:r.lowerOpen?Me(t,r.lower)>0:Me(t,r.lower)>=0}function bp(t,r){return r.upper===void 0?!0:r.upperOpen?Me(t,r.upper)<0:Me(t,r.upper)<=0}function ba(t,r){return yp(t,r)&&bp(t,r)}function ao(t,r,a,o,c,d){if(!a||a.length===0)return t;var f=r.query.index,h=f.multiEntry,g=r.query.range,b=o.schema.primaryKey,E=b.extractKey,T=f.extractKey,R=(f.lowLevelIndex||f).extractKey,U=a.reduce(function(A,_){var C=A,V=[];if(_.type==="add"||_.type==="put")for(var W=new ht,$=_.values.length-1;$>=0;--$){var F=_.values[$],ae=E(F);if(!W.hasKey(ae)){var Q=T(F);(h&&p(Q)?Q.some(function(ve){return ba(ve,g)}):ba(Q,g))&&(W.addKey(ae),V.push(F))}}switch(_.type){case"add":{var ee=new ht().addKeys(r.values?A.map(function(ve){return E(ve)}):A);C=A.concat(r.values?V.filter(function(ve){var Ee=E(ve);return ee.hasKey(Ee)?!1:(ee.addKey(Ee),!0)}):V.map(function(ve){return E(ve)}).filter(function(ve){return ee.hasKey(ve)?!1:(ee.addKey(ve),!0)}));break}case"put":{var ge=new ht().addKeys(_.values.map(function(ve){return E(ve)}));C=A.filter(function(ve){return!ge.hasKey(r.values?E(ve):ve)}).concat(r.values?V:V.map(function(ve){return E(ve)}));break}case"delete":var $e=new ht().addKeys(_.keys);C=A.filter(function(ve){return!$e.hasKey(r.values?E(ve):ve)});break;case"deleteRange":var be=_.range;C=A.filter(function(ve){return!ba(E(ve),be)});break}return C},t);if(U===t)return t;var k=function(A,_){return Me(R(A),R(_))||Me(E(A),E(_))};return U.sort(r.direction==="prev"||r.direction==="prevunique"?function(A,_){return k(_,A)}:k),r.limit&&r.limit<1/0&&(U.length>r.limit?U.length=r.limit:t.length===r.limit&&U.length<r.limit&&(c.dirty=!0)),d?Object.freeze(U):U}function so(t,r){return Me(t.lower,r.lower)===0&&Me(t.upper,r.upper)===0&&!!t.lowerOpen==!!r.lowerOpen&&!!t.upperOpen==!!r.upperOpen}function wp(t,r,a,o){if(t===void 0)return r!==void 0?-1:0;if(r===void 0)return 1;var c=Me(t,r);if(c===0){if(a&&o)return 0;if(a)return 1;if(o)return-1}return c}function Sp(t,r,a,o){if(t===void 0)return r!==void 0?1:0;if(r===void 0)return-1;var c=Me(t,r);if(c===0){if(a&&o)return 0;if(a)return-1;if(o)return 1}return c}function xp(t,r){return wp(t.lower,r.lower,t.lowerOpen,r.lowerOpen)<=0&&Sp(t.upper,r.upper,t.upperOpen,r.upperOpen)>=0}function kp(t,r,a,o){var c,d=kr["idb://".concat(t,"/").concat(r)];if(!d)return[];var f=d.queries[a];if(!f)return[null,!1,d,null];var h=o.query?o.query.index.name:null,g=f[h||""];if(!g)return[null,!1,d,null];switch(a){case"query":var b=(c=o.direction)!==null&&c!==void 0?c:"next",E=g.find(function(U){var k;return U.req.limit===o.limit&&U.req.values===o.values&&((k=U.req.direction)!==null&&k!==void 0?k:"next")===b&&so(U.req.query.range,o.query.range)});if(E)return[E,!0,d,g];var T=g.find(function(U){var k,A="limit"in U.req?U.req.limit:1/0;return A>=o.limit&&((k=U.req.direction)!==null&&k!==void 0?k:"next")===b&&(o.values?U.req.values:!0)&&xp(U.req.query.range,o.query.range)});return[T,!1,d,g];case"count":var R=g.find(function(U){return so(U.req.query.range,o.query.range)});return[R,!!R,d,g]}}function Ep(t,r,a,o){t.subscribers.add(a),o.addEventListener("abort",function(){t.subscribers.delete(a),t.subscribers.size===0&&Tp(t,r)})}function Tp(t,r){setTimeout(function(){t.subscribers.size===0&&ce(r,t)},3e3)}var Ap={stack:"dbcore",level:0,name:"Cache",create:function(t){var r=t.schema.name,a=i(i({},t),{transaction:function(o,c,d){var f=t.transaction(o,c,d);if(c==="readwrite"){var h=new AbortController,g=h.signal,b=function(E){return function(){if(h.abort(),c==="readwrite"){for(var T=new Set,R=0,U=o;R<U.length;R++){var k=U[R],A=kr["idb://".concat(r,"/").concat(k)];if(A){var _=t.table(k),C=A.optimisticOps.filter(function(Te){return Te.trans===f});if(f._explicit&&E&&f.mutatedParts)for(var V=0,W=Object.values(A.queries.query);V<W.length;V++)for(var $=W[V],F=0,ae=$.slice();F<ae.length;F++){var Q=ae[F];pa(Q.obsSet,f.mutatedParts)&&(ce($,Q),Q.subscribers.forEach(function(Te){return T.add(Te)}))}else if(C.length>0){A.optimisticOps=A.optimisticOps.filter(function(Te){return Te.trans!==f});for(var ee=0,ge=Object.values(A.queries.query);ee<ge.length;ee++)for(var $=ge[ee],$e=0,be=$.slice();$e<be.length;$e++){var Q=be[$e];if(Q.res!=null&&f.mutatedParts)if(E&&!Q.dirty){var ve=Object.isFrozen(Q.res),Ee=ao(Q.res,Q.req,C,_,Q,ve);Q.dirty?(ce($,Q),Q.subscribers.forEach(function(we){return T.add(we)})):Ee!==Q.res&&(Q.res=Ee,Q.promise=ne.resolve({result:Ee}))}else Q.dirty&&ce($,Q),Q.subscribers.forEach(function(we){return T.add(we)})}}}}T.forEach(function(Te){return Te()})}}};f.addEventListener("abort",b(!1),{signal:g}),f.addEventListener("error",b(!1),{signal:g}),f.addEventListener("complete",b(!0),{signal:g})}return f},table:function(o){var c=t.table(o),d=c.schema.primaryKey,f=i(i({},c),{mutate:function(h){var g=ye.trans;if(d.outbound||g.db._options.cache==="disabled"||g.explicit||g.idbtrans.mode!=="readwrite")return c.mutate(h);var b=kr["idb://".concat(r,"/").concat(o)];if(!b)return c.mutate(h);var E=c.mutate(h);return(h.type==="add"||h.type==="put")&&(h.values.length>=50||ya(d,h).some(function(T){return T==null}))?E.then(function(T){var R=i(i({},h),{values:h.values.map(function(k,A){var _;if(T.failures[A])return k;var C=!((_=d.keyPath)===null||_===void 0)&&_.includes(".")?Oe(k):i({},k);return re(C,d.keyPath,T.results[A]),C})}),U=io(b,R,T);b.optimisticOps.push(U),queueMicrotask(function(){return h.mutatedParts&&Hn(h.mutatedParts)})}):(b.optimisticOps.push(h),h.mutatedParts&&Hn(h.mutatedParts),E.then(function(T){if(T.numFailures>0){ce(b.optimisticOps,h);var R=io(b,h,T);R&&b.optimisticOps.push(R),h.mutatedParts&&Hn(h.mutatedParts)}}),E.catch(function(){ce(b.optimisticOps,h),h.mutatedParts&&Hn(h.mutatedParts)})),E},query:function(h){var g;if(!ro(ye,c)||!no("query",h))return c.query(h);var b=((g=ye.trans)===null||g===void 0?void 0:g.db._options.cache)==="immutable",E=ye,T=E.requery,R=E.signal,U=kp(r,o,"query",h),k=U[0],A=U[1],_=U[2],C=U[3];if(k&&A)k.obsSet=h.obsSet;else{var V=c.query(h).then(function(W){var $=W.result;if(k&&(k.res=$),b){for(var F=0,ae=$.length;F<ae;++F)Object.freeze($[F]);Object.freeze($)}else W.result=Oe($);return W}).catch(function(W){return C&&k&&ce(C,k),Promise.reject(W)});k={obsSet:h.obsSet,promise:V,subscribers:new Set,type:"query",req:h,dirty:!1},C?C.push(k):(C=[k],_||(_=kr["idb://".concat(r,"/").concat(o)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}),_.queries.query[h.query.index.name||""]=C)}return Ep(k,C,T,R),k.promise.then(function(W){return{result:ao(W.result,h,_?.optimisticOps,c,k,b)}})}});return f}});return a}};function Vn(t,r){return new Proxy(t,{get:function(a,o,c){return o==="db"?r:Reflect.get(a,o,c)}})}var jt=(function(){function t(r,a){var o=this;this._middlewares={},this.verno=0;var c=t.dependencies;this._options=a=i({addons:t.addons,autoOpen:!0,indexedDB:c.indexedDB,IDBKeyRange:c.IDBKeyRange,cache:"cloned",maxConnections:Os},a),this._deps={indexedDB:a.indexedDB,IDBKeyRange:a.IDBKeyRange};var d=a.addons;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var f={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:He,dbReadyPromise:null,cancelOpen:He,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:a.autoOpen};f.dbReadyPromise=new ne(function(g){f.dbReadyResolve=g}),f.openCanceller=new ne(function(g,b){f.cancelOpen=b}),this._state=f,this.name=r,this.on=Jr(this,"populate","blocked","versionchange","close",{ready:[Se,He]}),this.once=function(g,b){var E=function(){for(var T=[],R=0;R<arguments.length;R++)T[R]=arguments[R];o.on(g).unsubscribe(E),b.apply(o,T)};return o.on(g,E)},this.on.ready.subscribe=K(this.on.ready.subscribe,function(g){return function(b,E){t.vip(function(){var T=o._state;if(T.openComplete)T.dbOpenError||ne.resolve().then(b),E&&g(b);else if(T.onReadyBeingFired)T.onReadyBeingFired.push(b),E&&g(b);else{g(b);var R=o;E||g(function U(){R.on.ready.unsubscribe(b),R.on.ready.unsubscribe(U)})}})}}),this.Collection=Dd(this),this.Table=Cd(this),this.Transaction=Fd(this),this.Version=np(this),this.WhereClause=Ud(this),this.on("versionchange",function(g){g.newVersion>0?console.warn("Another connection wants to upgrade database '".concat(o.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(o.name,"'. Closing db now to resume the delete request.")),o.close({disableAutoOpen:!1})}),this.on("blocked",function(g){!g.newVersion||g.newVersion<g.oldVersion?console.warn("Dexie.delete('".concat(o.name,"') was blocked")):console.warn("Upgrade '".concat(o.name,"' blocked by other connection holding version ").concat(g.oldVersion/10))}),this._maxKey=tn(a.IDBKeyRange),this._createTransaction=function(g,b,E,T){return new o.Transaction(g,b,E,o._options.chromeTransactionDurability,T)},this._fireOnBlocked=function(g){o.on("blocked").fire(g),nn.toArray().filter(function(b){return b.name===o.name&&b!==o&&!b._state.vcFired}).map(function(b){return b.on("versionchange").fire(g)})},this.use(hp),this.use(Ap),this.use(gp),this.use(pp),this.use(fp);var h=new Proxy(this,{get:function(g,b,E){if(b==="_vip")return!0;if(b==="table")return function(R){return Vn(o.table(R),h)};var T=Reflect.get(g,b,E);return T instanceof zs?Vn(T,h):b==="tables"?T.map(function(R){return Vn(R,h)}):b==="_createTransaction"?function(){var R=T.apply(this,arguments);return Vn(R,h)}:T}});this.vip=h,d.forEach(function(g){return g(o)})}return t.prototype.version=function(r){if(isNaN(r)||r<.1)throw new fe.Type("Given version is not a positive number");if(r=Math.round(r*10)/10,this.idbdb||this._state.isBeingOpened)throw new fe.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,r);var a=this._versions,o=a.filter(function(c){return c._cfg.version===r})[0];return o||(o=new this.Version(r),a.push(o),a.sort(qd),o.stores({}),this._state.autoSchema=!1,o)},t.prototype._whenReady=function(r){var a=this;return this.idbdb&&(this._state.openComplete||ye.letThrough||this._vip)?r():new ne(function(o,c){if(a._state.openComplete)return c(new fe.DatabaseClosed(a._state.dbOpenError));if(!a._state.isBeingOpened){if(!a._state.autoOpen){c(new fe.DatabaseClosed);return}a.open().catch(He)}a._state.dbReadyPromise.then(o,c)}).then(r)},t.prototype.use=function(r){var a=r.stack,o=r.create,c=r.level,d=r.name;d&&this.unuse({stack:a,name:d});var f=this._middlewares[a]||(this._middlewares[a]=[]);return f.push({stack:a,create:o,level:c??10,name:d}),f.sort(function(h,g){return h.level-g.level}),this},t.prototype.unuse=function(r){var a=r.stack,o=r.name,c=r.create;return a&&this._middlewares[a]&&(this._middlewares[a]=this._middlewares[a].filter(function(d){return c?d.create!==c:o?d.name!==o:!1})),this},t.prototype.open=function(){var r=this;return wr(Gt,function(){return cp(r)})},t.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var r=this._state;if(nn.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}r.isBeingOpened||(r.dbReadyPromise=new ne(function(a){r.dbReadyResolve=a}),r.openCanceller=new ne(function(a,o){r.cancelOpen=o}))},t.prototype.close=function(r){var a=r===void 0?{disableAutoOpen:!0}:r,o=a.disableAutoOpen,c=this._state;o?(c.isBeingOpened&&c.cancelOpen(new fe.DatabaseClosed),this._close(),c.autoOpen=!1,c.dbOpenError=new fe.DatabaseClosed):(this._close(),c.autoOpen=this._options.autoOpen||c.isBeingOpened,c.openComplete=!1,c.dbOpenError=null)},t.prototype.delete=function(r){var a=this;r===void 0&&(r={disableAutoOpen:!0});var o=arguments.length>0&&typeof arguments[0]!="object",c=this._state;return new ne(function(d,f){var h=function(){a.close(r);var g=a._deps.indexedDB.deleteDatabase(a.name);g.onsuccess=Ye(function(){op(a._deps,a.name),d()}),g.onerror=Ot(f),g.onblocked=a._fireOnBlocked};if(o)throw new fe.InvalidArgument("Invalid closeOptions argument to db.delete()");c.isBeingOpened?c.dbReadyPromise.then(h):h()})},t.prototype.backendDB=function(){return this.idbdb},t.prototype.isOpen=function(){return this.idbdb!==null},t.prototype.hasBeenClosed=function(){var r=this._state.dbOpenError;return r&&r.name==="DatabaseClosed"},t.prototype.hasFailed=function(){return this._state.dbOpenError!==null},t.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(t.prototype,"tables",{get:function(){var r=this;return u(this._allTables).map(function(a){return r._allTables[a]})},enumerable:!1,configurable:!0}),t.prototype.transaction=function(){var r=up.apply(this,arguments);return this._transaction.apply(this,r)},t.prototype._transaction=function(r,a,o){var c=this,d=ye.trans;(!d||d.db!==this||r.indexOf("!")!==-1)&&(d=null);var f=r.indexOf("?")!==-1;r=r.replace("!","").replace("?","");var h,g;try{if(g=a.map(function(E){var T=E instanceof c.Table?E.name:E;if(typeof T!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return T}),r=="r"||r===Xi)h=Xi;else if(r=="rw"||r==Ji)h=Ji;else throw new fe.InvalidArgument("Invalid transaction mode: "+r);if(d){if(d.mode===Xi&&h===Ji)if(f)d=null;else throw new fe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");d&&g.forEach(function(E){if(d&&d.storeNames.indexOf(E)===-1)if(f)d=null;else throw new fe.SubTransaction("Table "+E+" not included in parent transaction.")}),f&&d&&!d.active&&(d=null)}}catch(E){return d?d._promise(null,function(T,R){R(E)}):Qe(E)}var b=eo.bind(null,this,h,g,d,o);return d?d._promise(h,b,"lock"):ye.trans?wr(ye.transless,function(){return c._whenReady(b)}):this._whenReady(b)},t.prototype.table=function(r){if(!S(this._allTables,r))throw new fe.InvalidTable("Table ".concat(r," does not exist"));return this._allTables[r]},t})(),Pp=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Rp=(function(){function t(r){this._subscribe=r}return t.prototype.subscribe=function(r,a,o){return this._subscribe(!r||typeof r=="function"?{next:r,error:a,complete:o}:r)},t.prototype[Pp]=function(){return this},t})(),jn;try{jn={indexedDB:l.indexedDB||l.mozIndexedDB||l.webkitIndexedDB||l.msIndexedDB,IDBKeyRange:l.IDBKeyRange||l.webkitIDBKeyRange}}catch{jn={indexedDB:null,IDBKeyRange:null}}function oo(t){var r=!1,a,o=new Rp(function(c){var d=We(t);function f(C){var V=_r();try{d&&Or();var W=tr(t,C);return d&&(W=W.finally(rr)),W}finally{V&&Dr()}}var h=!1,g,b={},E={},T={get closed(){return h},unsubscribe:function(){h||(h=!0,g&&g.abort(),R&&ar.storagemutated.unsubscribe(A))}};c.start&&c.start(T);var R=!1,U=function(){return ji(_)};function k(){return pa(E,b)}var A=function(C){Kn(b,C),k()&&U()},_=function(){if(!(h||!jn.indexedDB)){b={};var C={};g&&g.abort(),g=new AbortController;var V={subscr:C,signal:g.signal,requery:U,querier:t,trans:null},W=f(V);R||(ar(en,A),R=!0),Promise.resolve(W).then(function($){r=!0,a=$,!(h||V.signal.aborted)&&(k()?U():(E=C,k()?U():(b={},ji(function(){return!h&&c.next&&c.next($)}))))},function($){r=!1,["DatabaseClosedError","AbortError"].includes($?.name)||h||ji(function(){h||c.error&&c.error($)})})}};return setTimeout(U,0),T});return o.hasValue=function(){return r},o.getValue=function(){return a},o}var Er=jt;w(Er,i(i({},Ir),{delete:function(t){var r=new Er(t,{addons:[]});return r.delete()},exists:function(t){return new Er(t,{addons:[]}).open().then(function(r){return r.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(t){try{return ap(Er.dependencies).then(t)}catch{return Qe(new fe.MissingAPI)}},defineClass:function(){function t(r){m(this,r)}return t},ignoreTransaction:function(t){return ye.trans?wr(ye.transless||Gt,t):t()},vip:ca,async:function(t){return function(){try{var r=ga(t.apply(this,arguments));return!r||typeof r.then!="function"?ne.resolve(r):r}catch(a){return Qe(a)}}},spawn:function(t,r,a){try{var o=ga(t.apply(a,r||[]));return!o||typeof o.then!="function"?ne.resolve(o):o}catch(c){return Qe(c)}},currentTransaction:{get:function(){return ye.trans||null}},waitFor:function(t,r){var a=ne.resolve(typeof t=="function"?Er.ignoreTransaction(t):t).timeout(r||6e4);return ye.trans?ye.trans.waitFor(a):a},Promise:ne,debug:{get:function(){return ze},set:function(t){xt(t)}},derive:L,extend:m,props:w,override:K,Events:Jr,on:ar,liveQuery:oo,extendObservabilitySet:Kn,getByKeyPath:G,setByKeyPath:re,delByKeyPath:te,shallowClone:Z,deepClone:Oe,getObjectDiff:va,cmp:Me,asap:M,minKey:Yi,addons:[],connections:{get:nn.toArray},errnames:pe,dependencies:jn,cache:kr,semVer:_s,version:_s.split(".").map(function(t){return parseInt(t)}).reduce(function(t,r,a){return t+r/Math.pow(10,a*2)})})),Er.maxKey=tn(Er.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ar(en,function(t){if(!sr){var r;r=new CustomEvent(ea,{detail:t}),sr=!0,dispatchEvent(r),sr=!1}}),addEventListener(ea,function(t){var r=t.detail;sr||wa(r)}));function wa(t){var r=sr;try{sr=!0,ar.storagemutated.fire(t),ha(t,!0)}finally{sr=r}}var sr=!1,or,Sa=function(){};typeof BroadcastChannel<"u"&&(Sa=function(){or=new BroadcastChannel(ea),or.onmessage=function(t){return t.data&&wa(t.data)}},Sa(),typeof or.unref=="function"&&or.unref(),ar(en,function(t){sr||or.postMessage(t)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(t){if(!jt.disableBfCache&&t.persisted){ze&&console.debug("Dexie: handling persisted pagehide"),or?.close();for(var r=0,a=nn.toArray();r<a.length;r++){var o=a[r];o.close({disableAutoOpen:!1})}}}),addEventListener("pageshow",function(t){!jt.disableBfCache&&t.persisted&&(ze&&console.debug("Dexie: handling persisted pageshow"),Sa(),wa({all:new ht(-1/0,[[]])}))}));function Np(t){return new Xr({add:t})}function Cp(t){return new Xr({remove:t})}function Ip(t,r){return new Xr({replacePrefix:[t,r]})}ne.rejectionMapper=$i,xt(ze);var _p=Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:Os,Dexie:jt,Entity:$s,PropModification:Xr,RangeSet:ht,add:Np,cmp:Me,default:jt,liveQuery:oo,mergeRanges:sn,rangesOverlap:Xs,remove:Cp,replacePrefix:Ip});return i(jt,_p,{default:jt}),jt}))});var Br=Ae((_b,$o)=>{"use strict";var af="2.0.0",sf=Number.MAX_SAFE_INTEGER||9007199254740991,of=16,lf=250,cf=["major","premajor","minor","preminor","patch","prepatch","prerelease"];$o.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:of,MAX_SAFE_BUILD_LENGTH:lf,MAX_SAFE_INTEGER:sf,RELEASE_TYPES:cf,SEMVER_SPEC_VERSION:af,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var dn=Ae((Db,Mo)=>{"use strict";var uf=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};Mo.exports=uf});var Ur=Ae((zt,Bo)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:$a,MAX_SAFE_BUILD_LENGTH:df,MAX_LENGTH:pf}=Br(),ff=dn();zt=Bo.exports={};var mf=zt.re=[],hf=zt.safeRe=[],oe=zt.src=[],gf=zt.safeSrc=[],le=zt.t={},vf=0,Ma="[a-zA-Z0-9-]",yf=[["\\s",1],["\\d",pf],[Ma,df]],bf=e=>{for(let[n,i]of yf)e=e.split(`${n}*`).join(`${n}{0,${i}}`).split(`${n}+`).join(`${n}{1,${i}}`);return e},Ce=(e,n,i)=>{let s=bf(n),l=vf++;ff(e,l,n),le[e]=l,oe[l]=n,gf[l]=s,mf[l]=new RegExp(n,i?"g":void 0),hf[l]=new RegExp(s,i?"g":void 0)};Ce("NUMERICIDENTIFIER","0|[1-9]\\d*");Ce("NUMERICIDENTIFIERLOOSE","\\d+");Ce("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Ma}*`);Ce("MAINVERSION",`(${oe[le.NUMERICIDENTIFIER]})\\.(${oe[le.NUMERICIDENTIFIER]})\\.(${oe[le.NUMERICIDENTIFIER]})`);Ce("MAINVERSIONLOOSE",`(${oe[le.NUMERICIDENTIFIERLOOSE]})\\.(${oe[le.NUMERICIDENTIFIERLOOSE]})\\.(${oe[le.NUMERICIDENTIFIERLOOSE]})`);Ce("PRERELEASEIDENTIFIER",`(?:${oe[le.NONNUMERICIDENTIFIER]}|${oe[le.NUMERICIDENTIFIER]})`);Ce("PRERELEASEIDENTIFIERLOOSE",`(?:${oe[le.NONNUMERICIDENTIFIER]}|${oe[le.NUMERICIDENTIFIERLOOSE]})`);Ce("PRERELEASE",`(?:-(${oe[le.PRERELEASEIDENTIFIER]}(?:\\.${oe[le.PRERELEASEIDENTIFIER]})*))`);Ce("PRERELEASELOOSE",`(?:-?(${oe[le.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${oe[le.PRERELEASEIDENTIFIERLOOSE]})*))`);Ce("BUILDIDENTIFIER",`${Ma}+`);Ce("BUILD",`(?:\\+(${oe[le.BUILDIDENTIFIER]}(?:\\.${oe[le.BUILDIDENTIFIER]})*))`);Ce("FULLPLAIN",`v?${oe[le.MAINVERSION]}${oe[le.PRERELEASE]}?${oe[le.BUILD]}?`);Ce("FULL",`^${oe[le.FULLPLAIN]}$`);Ce("LOOSEPLAIN",`[v=\\s]*${oe[le.MAINVERSIONLOOSE]}${oe[le.PRERELEASELOOSE]}?${oe[le.BUILD]}?`);Ce("LOOSE",`^${oe[le.LOOSEPLAIN]}$`);Ce("GTLT","((?:<|>)?=?)");Ce("XRANGEIDENTIFIERLOOSE",`${oe[le.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);Ce("XRANGEIDENTIFIER",`${oe[le.NUMERICIDENTIFIER]}|x|X|\\*`);Ce("XRANGEPLAIN",`[v=\\s]*(${oe[le.XRANGEIDENTIFIER]})(?:\\.(${oe[le.XRANGEIDENTIFIER]})(?:\\.(${oe[le.XRANGEIDENTIFIER]})(?:${oe[le.PRERELEASE]})?${oe[le.BUILD]}?)?)?`);Ce("XRANGEPLAINLOOSE",`[v=\\s]*(${oe[le.XRANGEIDENTIFIERLOOSE]})(?:\\.(${oe[le.XRANGEIDENTIFIERLOOSE]})(?:\\.(${oe[le.XRANGEIDENTIFIERLOOSE]})(?:${oe[le.PRERELEASELOOSE]})?${oe[le.BUILD]}?)?)?`);Ce("XRANGE",`^${oe[le.GTLT]}\\s*${oe[le.XRANGEPLAIN]}$`);Ce("XRANGELOOSE",`^${oe[le.GTLT]}\\s*${oe[le.XRANGEPLAINLOOSE]}$`);Ce("COERCEPLAIN",`(^|[^\\d])(\\d{1,${$a}})(?:\\.(\\d{1,${$a}}))?(?:\\.(\\d{1,${$a}}))?`);Ce("COERCE",`${oe[le.COERCEPLAIN]}(?:$|[^\\d])`);Ce("COERCEFULL",oe[le.COERCEPLAIN]+`(?:${oe[le.PRERELEASE]})?(?:${oe[le.BUILD]})?(?:$|[^\\d])`);Ce("COERCERTL",oe[le.COERCE],!0);Ce("COERCERTLFULL",oe[le.COERCEFULL],!0);Ce("LONETILDE","(?:~>?)");Ce("TILDETRIM",`(\\s*)${oe[le.LONETILDE]}\\s+`,!0);zt.tildeTrimReplace="$1~";Ce("TILDE",`^${oe[le.LONETILDE]}${oe[le.XRANGEPLAIN]}$`);Ce("TILDELOOSE",`^${oe[le.LONETILDE]}${oe[le.XRANGEPLAINLOOSE]}$`);Ce("LONECARET","(?:\\^)");Ce("CARETTRIM",`(\\s*)${oe[le.LONECARET]}\\s+`,!0);zt.caretTrimReplace="$1^";Ce("CARET",`^${oe[le.LONECARET]}${oe[le.XRANGEPLAIN]}$`);Ce("CARETLOOSE",`^${oe[le.LONECARET]}${oe[le.XRANGEPLAINLOOSE]}$`);Ce("COMPARATORLOOSE",`^${oe[le.GTLT]}\\s*(${oe[le.LOOSEPLAIN]})$|^$`);Ce("COMPARATOR",`^${oe[le.GTLT]}\\s*(${oe[le.FULLPLAIN]})$|^$`);Ce("COMPARATORTRIM",`(\\s*)${oe[le.GTLT]}\\s*(${oe[le.LOOSEPLAIN]}|${oe[le.XRANGEPLAIN]})`,!0);zt.comparatorTrimReplace="$1$2$3";Ce("HYPHENRANGE",`^\\s*(${oe[le.XRANGEPLAIN]})\\s+-\\s+(${oe[le.XRANGEPLAIN]})\\s*$`);Ce("HYPHENRANGELOOSE",`^\\s*(${oe[le.XRANGEPLAINLOOSE]})\\s+-\\s+(${oe[le.XRANGEPLAINLOOSE]})\\s*$`);Ce("STAR","(<|>)?=?\\s*\\*");Ce("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");Ce("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var ii=Ae((Ob,Uo)=>{"use strict";var wf=Object.freeze({loose:!0}),Sf=Object.freeze({}),xf=e=>e?typeof e!="object"?wf:e:Sf;Uo.exports=xf});var Ba=Ae((Lb,Wo)=>{"use strict";var zo=/^[0-9]+$/,Fo=(e,n)=>{if(typeof e=="number"&&typeof n=="number")return e===n?0:e<n?-1:1;let i=zo.test(e),s=zo.test(n);return i&&s&&(e=+e,n=+n),e===n?0:i&&!s?-1:s&&!i?1:e<n?-1:1},kf=(e,n)=>Fo(n,e);Wo.exports={compareIdentifiers:Fo,rcompareIdentifiers:kf}});var ft=Ae(($b,Ho)=>{"use strict";var ai=dn(),{MAX_LENGTH:Ko,MAX_SAFE_INTEGER:si}=Br(),{safeRe:oi,t:li}=Ur(),Ef=ii(),{compareIdentifiers:Ua}=Ba(),za=class e{constructor(n,i){if(i=Ef(i),n instanceof e){if(n.loose===!!i.loose&&n.includePrerelease===!!i.includePrerelease)return n;n=n.version}else if(typeof n!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof n}".`);if(n.length>Ko)throw new TypeError(`version is longer than ${Ko} characters`);ai("SemVer",n,i),this.options=i,this.loose=!!i.loose,this.includePrerelease=!!i.includePrerelease;let s=n.trim().match(i.loose?oi[li.LOOSE]:oi[li.FULL]);if(!s)throw new TypeError(`Invalid Version: ${n}`);if(this.raw=n,this.major=+s[1],this.minor=+s[2],this.patch=+s[3],this.major>si||this.major<0)throw new TypeError("Invalid major version");if(this.minor>si||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>si||this.patch<0)throw new TypeError("Invalid patch version");s[4]?this.prerelease=s[4].split(".").map(l=>{if(/^[0-9]+$/.test(l)){let u=+l;if(u>=0&&u<si)return u}return l}):this.prerelease=[],this.build=s[5]?s[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(n){if(ai("SemVer.compare",this.version,this.options,n),!(n instanceof e)){if(typeof n=="string"&&n===this.version)return 0;n=new e(n,this.options)}return n.version===this.version?0:this.compareMain(n)||this.comparePre(n)}compareMain(n){return n instanceof e||(n=new e(n,this.options)),this.major<n.major?-1:this.major>n.major?1:this.minor<n.minor?-1:this.minor>n.minor?1:this.patch<n.patch?-1:this.patch>n.patch?1:0}comparePre(n){if(n instanceof e||(n=new e(n,this.options)),this.prerelease.length&&!n.prerelease.length)return-1;if(!this.prerelease.length&&n.prerelease.length)return 1;if(!this.prerelease.length&&!n.prerelease.length)return 0;let i=0;do{let s=this.prerelease[i],l=n.prerelease[i];if(ai("prerelease compare",i,s,l),s===void 0&&l===void 0)return 0;if(l===void 0)return 1;if(s===void 0)return-1;if(s===l)continue;return Ua(s,l)}while(++i)}compareBuild(n){n instanceof e||(n=new e(n,this.options));let i=0;do{let s=this.build[i],l=n.build[i];if(ai("build compare",i,s,l),s===void 0&&l===void 0)return 0;if(l===void 0)return 1;if(s===void 0)return-1;if(s===l)continue;return Ua(s,l)}while(++i)}inc(n,i,s){if(n.startsWith("pre")){if(!i&&s===!1)throw new Error("invalid increment argument: identifier is empty");if(i){let l=`-${i}`.match(this.options.loose?oi[li.PRERELEASELOOSE]:oi[li.PRERELEASE]);if(!l||l[1]!==i)throw new Error(`invalid identifier: ${i}`)}}switch(n){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",i,s);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",i,s);break;case"prepatch":this.prerelease.length=0,this.inc("patch",i,s),this.inc("pre",i,s);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",i,s),this.inc("pre",i,s);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let l=Number(s)?1:0;if(this.prerelease.length===0)this.prerelease=[l];else{let u=this.prerelease.length;for(;--u>=0;)typeof this.prerelease[u]=="number"&&(this.prerelease[u]++,u=-2);if(u===-1){if(i===this.prerelease.join(".")&&s===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(l)}}if(i){let u=[i,l];s===!1&&(u=[i]),Ua(this.prerelease[0],i)===0?isNaN(this.prerelease[1])&&(this.prerelease=u):this.prerelease=u}break}default:throw new Error(`invalid increment argument: ${n}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Ho.exports=za});var dr=Ae((Mb,Vo)=>{"use strict";var Go=ft(),Tf=(e,n,i=!1)=>{if(e instanceof Go)return e;try{return new Go(e,n)}catch(s){if(!i)return null;throw s}};Vo.exports=Tf});var qo=Ae((Bb,jo)=>{"use strict";var Af=dr(),Pf=(e,n)=>{let i=Af(e,n);return i?i.version:null};jo.exports=Pf});var Xo=Ae((Ub,Yo)=>{"use strict";var Rf=dr(),Nf=(e,n)=>{let i=Rf(e.trim().replace(/^[=v]+/,""),n);return i?i.version:null};Yo.exports=Nf});var Zo=Ae((zb,Qo)=>{"use strict";var Jo=ft(),Cf=(e,n,i,s,l)=>{typeof i=="string"&&(l=s,s=i,i=void 0);try{return new Jo(e instanceof Jo?e.version:e,i).inc(n,s,l).version}catch{return null}};Qo.exports=Cf});var rl=Ae((Fb,tl)=>{"use strict";var el=dr(),If=(e,n)=>{let i=el(e,null,!0),s=el(n,null,!0),l=i.compare(s);if(l===0)return null;let u=l>0,p=u?i:s,m=u?s:i,v=!!p.prerelease.length;if(!!m.prerelease.length&&!v){if(!m.patch&&!m.minor)return"major";if(m.compareMain(p)===0)return m.minor&&!m.patch?"minor":"patch"}let S=v?"pre":"";return i.major!==s.major?S+"major":i.minor!==s.minor?S+"minor":i.patch!==s.patch?S+"patch":"prerelease"};tl.exports=If});var il=Ae((Wb,nl)=>{"use strict";var _f=ft(),Df=(e,n)=>new _f(e,n).major;nl.exports=Df});var sl=Ae((Kb,al)=>{"use strict";var Of=ft(),Lf=(e,n)=>new Of(e,n).minor;al.exports=Lf});var ll=Ae((Hb,ol)=>{"use strict";var $f=ft(),Mf=(e,n)=>new $f(e,n).patch;ol.exports=Mf});var ul=Ae((Gb,cl)=>{"use strict";var Bf=dr(),Uf=(e,n)=>{let i=Bf(e,n);return i&&i.prerelease.length?i.prerelease:null};cl.exports=Uf});var Rt=Ae((Vb,pl)=>{"use strict";var dl=ft(),zf=(e,n,i)=>new dl(e,i).compare(new dl(n,i));pl.exports=zf});var ml=Ae((jb,fl)=>{"use strict";var Ff=Rt(),Wf=(e,n,i)=>Ff(n,e,i);fl.exports=Wf});var gl=Ae((qb,hl)=>{"use strict";var Kf=Rt(),Hf=(e,n)=>Kf(e,n,!0);hl.exports=Hf});var ci=Ae((Yb,yl)=>{"use strict";var vl=ft(),Gf=(e,n,i)=>{let s=new vl(e,i),l=new vl(n,i);return s.compare(l)||s.compareBuild(l)};yl.exports=Gf});var wl=Ae((Xb,bl)=>{"use strict";var Vf=ci(),jf=(e,n)=>e.sort((i,s)=>Vf(i,s,n));bl.exports=jf});var xl=Ae((Jb,Sl)=>{"use strict";var qf=ci(),Yf=(e,n)=>e.sort((i,s)=>qf(s,i,n));Sl.exports=Yf});var pn=Ae((Qb,kl)=>{"use strict";var Xf=Rt(),Jf=(e,n,i)=>Xf(e,n,i)>0;kl.exports=Jf});var ui=Ae((Zb,El)=>{"use strict";var Qf=Rt(),Zf=(e,n,i)=>Qf(e,n,i)<0;El.exports=Zf});var Fa=Ae((e0,Tl)=>{"use strict";var em=Rt(),tm=(e,n,i)=>em(e,n,i)===0;Tl.exports=tm});var Wa=Ae((t0,Al)=>{"use strict";var rm=Rt(),nm=(e,n,i)=>rm(e,n,i)!==0;Al.exports=nm});var di=Ae((r0,Pl)=>{"use strict";var im=Rt(),am=(e,n,i)=>im(e,n,i)>=0;Pl.exports=am});var pi=Ae((n0,Rl)=>{"use strict";var sm=Rt(),om=(e,n,i)=>sm(e,n,i)<=0;Rl.exports=om});var Ka=Ae((i0,Nl)=>{"use strict";var lm=Fa(),cm=Wa(),um=pn(),dm=di(),pm=ui(),fm=pi(),mm=(e,n,i,s)=>{switch(n){case"===":return typeof e=="object"&&(e=e.version),typeof i=="object"&&(i=i.version),e===i;case"!==":return typeof e=="object"&&(e=e.version),typeof i=="object"&&(i=i.version),e!==i;case"":case"=":case"==":return lm(e,i,s);case"!=":return cm(e,i,s);case">":return um(e,i,s);case">=":return dm(e,i,s);case"<":return pm(e,i,s);case"<=":return fm(e,i,s);default:throw new TypeError(`Invalid operator: ${n}`)}};Nl.exports=mm});var Il=Ae((a0,Cl)=>{"use strict";var hm=ft(),gm=dr(),{safeRe:fi,t:mi}=Ur(),vm=(e,n)=>{if(e instanceof hm)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;n=n||{};let i=null;if(!n.rtl)i=e.match(n.includePrerelease?fi[mi.COERCEFULL]:fi[mi.COERCE]);else{let v=n.includePrerelease?fi[mi.COERCERTLFULL]:fi[mi.COERCERTL],y;for(;(y=v.exec(e))&&(!i||i.index+i[0].length!==e.length);)(!i||y.index+y[0].length!==i.index+i[0].length)&&(i=y),v.lastIndex=y.index+y[1].length+y[2].length;v.lastIndex=-1}if(i===null)return null;let s=i[2],l=i[3]||"0",u=i[4]||"0",p=n.includePrerelease&&i[5]?`-${i[5]}`:"",m=n.includePrerelease&&i[6]?`+${i[6]}`:"";return gm(`${s}.${l}.${u}${p}${m}`,n)};Cl.exports=vm});var Dl=Ae((s0,_l)=>{"use strict";var ym=dr(),bm=Br(),wm=ft(),Sm=(e,n,i)=>{if(!bm.RELEASE_TYPES.includes(n))return null;let s=xm(e,i);return s&&km(s,n)},xm=(e,n)=>{let i=e instanceof wm?e.version:e;return ym(i,n)},km=(e,n)=>{if(Em(n))return e.version;switch(e.prerelease=[],n){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},Em=e=>e.startsWith("pre");_l.exports=Sm});var Ll=Ae((o0,Ol)=>{"use strict";var Ha=class{constructor(){this.max=1e3,this.map=new Map}get(n){let i=this.map.get(n);if(i!==void 0)return this.map.delete(n),this.map.set(n,i),i}delete(n){return this.map.delete(n)}set(n,i){if(!this.delete(n)&&i!==void 0){if(this.map.size>=this.max){let l=this.map.keys().next().value;this.delete(l)}this.map.set(n,i)}return this}};Ol.exports=Ha});var Nt=Ae((l0,Ul)=>{"use strict";var Tm=/\s+/g,Ga=class e{constructor(n,i){if(i=Pm(i),n instanceof e)return n.loose===!!i.loose&&n.includePrerelease===!!i.includePrerelease?n:new e(n.raw,i);if(n instanceof Va)return this.raw=n.value,this.set=[[n]],this.formatted=void 0,this;if(this.options=i,this.loose=!!i.loose,this.includePrerelease=!!i.includePrerelease,this.raw=n.trim().replace(Tm," "),this.set=this.raw.split("||").map(s=>this.parseRange(s.trim())).filter(s=>s.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let s=this.set[0];if(this.set=this.set.filter(l=>!Ml(l[0])),this.set.length===0)this.set=[s];else if(this.set.length>1){for(let l of this.set)if(l.length===1&&Om(l[0])){this.set=[l];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let n=0;n<this.set.length;n++){n>0&&(this.formatted+="||");let i=this.set[n];for(let s=0;s<i.length;s++)s>0&&(this.formatted+=" "),this.formatted+=i[s].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(n){let s=((this.options.includePrerelease&&_m)|(this.options.loose&&Dm))+":"+n,l=$l.get(s);if(l)return l;let u=this.options.loose,p=u?wt[vt.HYPHENRANGELOOSE]:wt[vt.HYPHENRANGE];n=n.replace(p,Hm(this.options.includePrerelease)),qe("hyphen replace",n),n=n.replace(wt[vt.COMPARATORTRIM],Nm),qe("comparator trim",n),n=n.replace(wt[vt.TILDETRIM],Cm),qe("tilde trim",n),n=n.replace(wt[vt.CARETTRIM],Im),qe("caret trim",n);let m=n.split(" ").map(w=>Lm(w,this.options)).join(" ").split(/\s+/).map(w=>Km(w,this.options));u&&(m=m.filter(w=>(qe("loose invalid filter",w,this.options),!!w.match(wt[vt.COMPARATORLOOSE])))),qe("range list",m);let v=new Map,y=m.map(w=>new Va(w,this.options));for(let w of y){if(Ml(w))return[w];v.set(w.value,w)}v.size>1&&v.has("")&&v.delete("");let S=[...v.values()];return $l.set(s,S),S}intersects(n,i){if(!(n instanceof e))throw new TypeError("a Range is required");return this.set.some(s=>Bl(s,i)&&n.set.some(l=>Bl(l,i)&&s.every(u=>l.every(p=>u.intersects(p,i)))))}test(n){if(!n)return!1;if(typeof n=="string")try{n=new Rm(n,this.options)}catch{return!1}for(let i=0;i<this.set.length;i++)if(Gm(this.set[i],n,this.options))return!0;return!1}};Ul.exports=Ga;var Am=Ll(),$l=new Am,Pm=ii(),Va=fn(),qe=dn(),Rm=ft(),{safeRe:wt,t:vt,comparatorTrimReplace:Nm,tildeTrimReplace:Cm,caretTrimReplace:Im}=Ur(),{FLAG_INCLUDE_PRERELEASE:_m,FLAG_LOOSE:Dm}=Br(),Ml=e=>e.value==="<0.0.0-0",Om=e=>e.value==="",Bl=(e,n)=>{let i=!0,s=e.slice(),l=s.pop();for(;i&&s.length;)i=s.every(u=>l.intersects(u,n)),l=s.pop();return i},Lm=(e,n)=>(e=e.replace(wt[vt.BUILD],""),qe("comp",e,n),e=Bm(e,n),qe("caret",e),e=$m(e,n),qe("tildes",e),e=zm(e,n),qe("xrange",e),e=Wm(e,n),qe("stars",e),e),St=e=>!e||e.toLowerCase()==="x"||e==="*",$m=(e,n)=>e.trim().split(/\s+/).map(i=>Mm(i,n)).join(" "),Mm=(e,n)=>{let i=n.loose?wt[vt.TILDELOOSE]:wt[vt.TILDE];return e.replace(i,(s,l,u,p,m)=>{qe("tilde",e,s,l,u,p,m);let v;return St(l)?v="":St(u)?v=`>=${l}.0.0 <${+l+1}.0.0-0`:St(p)?v=`>=${l}.${u}.0 <${l}.${+u+1}.0-0`:m?(qe("replaceTilde pr",m),v=`>=${l}.${u}.${p}-${m} <${l}.${+u+1}.0-0`):v=`>=${l}.${u}.${p} <${l}.${+u+1}.0-0`,qe("tilde return",v),v})},Bm=(e,n)=>e.trim().split(/\s+/).map(i=>Um(i,n)).join(" "),Um=(e,n)=>{qe("caret",e,n);let i=n.loose?wt[vt.CARETLOOSE]:wt[vt.CARET],s=n.includePrerelease?"-0":"";return e.replace(i,(l,u,p,m,v)=>{qe("caret",e,l,u,p,m,v);let y;return St(u)?y="":St(p)?y=`>=${u}.0.0${s} <${+u+1}.0.0-0`:St(m)?u==="0"?y=`>=${u}.${p}.0${s} <${u}.${+p+1}.0-0`:y=`>=${u}.${p}.0${s} <${+u+1}.0.0-0`:v?(qe("replaceCaret pr",v),u==="0"?p==="0"?y=`>=${u}.${p}.${m}-${v} <${u}.${p}.${+m+1}-0`:y=`>=${u}.${p}.${m}-${v} <${u}.${+p+1}.0-0`:y=`>=${u}.${p}.${m}-${v} <${+u+1}.0.0-0`):(qe("no pr"),u==="0"?p==="0"?y=`>=${u}.${p}.${m}${s} <${u}.${p}.${+m+1}-0`:y=`>=${u}.${p}.${m}${s} <${u}.${+p+1}.0-0`:y=`>=${u}.${p}.${m} <${+u+1}.0.0-0`),qe("caret return",y),y})},zm=(e,n)=>(qe("replaceXRanges",e,n),e.split(/\s+/).map(i=>Fm(i,n)).join(" ")),Fm=(e,n)=>{e=e.trim();let i=n.loose?wt[vt.XRANGELOOSE]:wt[vt.XRANGE];return e.replace(i,(s,l,u,p,m,v)=>{qe("xRange",e,s,l,u,p,m,v);let y=St(u),S=y||St(p),w=S||St(m),P=w;return l==="="&&P&&(l=""),v=n.includePrerelease?"-0":"",y?l===">"||l==="<"?s="<0.0.0-0":s="*":l&&P?(S&&(p=0),m=0,l===">"?(l=">=",S?(u=+u+1,p=0,m=0):(p=+p+1,m=0)):l==="<="&&(l="<",S?u=+u+1:p=+p+1),l==="<"&&(v="-0"),s=`${l+u}.${p}.${m}${v}`):S?s=`>=${u}.0.0${v} <${+u+1}.0.0-0`:w&&(s=`>=${u}.${p}.0${v} <${u}.${+p+1}.0-0`),qe("xRange return",s),s})},Wm=(e,n)=>(qe("replaceStars",e,n),e.trim().replace(wt[vt.STAR],"")),Km=(e,n)=>(qe("replaceGTE0",e,n),e.trim().replace(wt[n.includePrerelease?vt.GTE0PRE:vt.GTE0],"")),Hm=e=>(n,i,s,l,u,p,m,v,y,S,w,P)=>(St(s)?i="":St(l)?i=`>=${s}.0.0${e?"-0":""}`:St(u)?i=`>=${s}.${l}.0${e?"-0":""}`:p?i=`>=${i}`:i=`>=${i}${e?"-0":""}`,St(y)?v="":St(S)?v=`<${+y+1}.0.0-0`:St(w)?v=`<${y}.${+S+1}.0-0`:P?v=`<=${y}.${S}.${w}-${P}`:e?v=`<${y}.${S}.${+w+1}-0`:v=`<=${v}`,`${i} ${v}`.trim()),Gm=(e,n,i)=>{for(let s=0;s<e.length;s++)if(!e[s].test(n))return!1;if(n.prerelease.length&&!i.includePrerelease){for(let s=0;s<e.length;s++)if(qe(e[s].semver),e[s].semver!==Va.ANY&&e[s].semver.prerelease.length>0){let l=e[s].semver;if(l.major===n.major&&l.minor===n.minor&&l.patch===n.patch)return!0}return!1}return!0}});var fn=Ae((c0,Gl)=>{"use strict";var mn=Symbol("SemVer ANY"),Ya=class e{static get ANY(){return mn}constructor(n,i){if(i=zl(i),n instanceof e){if(n.loose===!!i.loose)return n;n=n.value}n=n.trim().split(/\s+/).join(" "),qa("comparator",n,i),this.options=i,this.loose=!!i.loose,this.parse(n),this.semver===mn?this.value="":this.value=this.operator+this.semver.version,qa("comp",this)}parse(n){let i=this.options.loose?Fl[Wl.COMPARATORLOOSE]:Fl[Wl.COMPARATOR],s=n.match(i);if(!s)throw new TypeError(`Invalid comparator: ${n}`);this.operator=s[1]!==void 0?s[1]:"",this.operator==="="&&(this.operator=""),s[2]?this.semver=new Kl(s[2],this.options.loose):this.semver=mn}toString(){return this.value}test(n){if(qa("Comparator.test",n,this.options.loose),this.semver===mn||n===mn)return!0;if(typeof n=="string")try{n=new Kl(n,this.options)}catch{return!1}return ja(n,this.operator,this.semver,this.options)}intersects(n,i){if(!(n instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new Hl(n.value,i).test(this.value):n.operator===""?n.value===""?!0:new Hl(this.value,i).test(n.semver):(i=zl(i),i.includePrerelease&&(this.value==="<0.0.0-0"||n.value==="<0.0.0-0")||!i.includePrerelease&&(this.value.startsWith("<0.0.0")||n.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&n.operator.startsWith(">")||this.operator.startsWith("<")&&n.operator.startsWith("<")||this.semver.version===n.semver.version&&this.operator.includes("=")&&n.operator.includes("=")||ja(this.semver,"<",n.semver,i)&&this.operator.startsWith(">")&&n.operator.startsWith("<")||ja(this.semver,">",n.semver,i)&&this.operator.startsWith("<")&&n.operator.startsWith(">")))}};Gl.exports=Ya;var zl=ii(),{safeRe:Fl,t:Wl}=Ur(),ja=Ka(),qa=dn(),Kl=ft(),Hl=Nt()});var hn=Ae((u0,Vl)=>{"use strict";var Vm=Nt(),jm=(e,n,i)=>{try{n=new Vm(n,i)}catch{return!1}return n.test(e)};Vl.exports=jm});var ql=Ae((d0,jl)=>{"use strict";var qm=Nt(),Ym=(e,n)=>new qm(e,n).set.map(i=>i.map(s=>s.value).join(" ").trim().split(" "));jl.exports=Ym});var Xl=Ae((p0,Yl)=>{"use strict";var Xm=ft(),Jm=Nt(),Qm=(e,n,i)=>{let s=null,l=null,u=null;try{u=new Jm(n,i)}catch{return null}return e.forEach(p=>{u.test(p)&&(!s||l.compare(p)===-1)&&(s=p,l=new Xm(s,i))}),s};Yl.exports=Qm});var Ql=Ae((f0,Jl)=>{"use strict";var Zm=ft(),eh=Nt(),th=(e,n,i)=>{let s=null,l=null,u=null;try{u=new eh(n,i)}catch{return null}return e.forEach(p=>{u.test(p)&&(!s||l.compare(p)===1)&&(s=p,l=new Zm(s,i))}),s};Jl.exports=th});var tc=Ae((m0,ec)=>{"use strict";var Xa=ft(),rh=Nt(),Zl=pn(),nh=(e,n)=>{e=new rh(e,n);let i=new Xa("0.0.0");if(e.test(i)||(i=new Xa("0.0.0-0"),e.test(i)))return i;i=null;for(let s=0;s<e.set.length;++s){let l=e.set[s],u=null;l.forEach(p=>{let m=new Xa(p.semver.version);switch(p.operator){case">":m.prerelease.length===0?m.patch++:m.prerelease.push(0),m.raw=m.format();case"":case">=":(!u||Zl(m,u))&&(u=m);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${p.operator}`)}}),u&&(!i||Zl(i,u))&&(i=u)}return i&&e.test(i)?i:null};ec.exports=nh});var nc=Ae((h0,rc)=>{"use strict";var ih=Nt(),ah=(e,n)=>{try{return new ih(e,n).range||"*"}catch{return null}};rc.exports=ah});var hi=Ae((g0,oc)=>{"use strict";var sh=ft(),sc=fn(),{ANY:oh}=sc,lh=Nt(),ch=hn(),ic=pn(),ac=ui(),uh=pi(),dh=di(),ph=(e,n,i,s)=>{e=new sh(e,s),n=new lh(n,s);let l,u,p,m,v;switch(i){case">":l=ic,u=uh,p=ac,m=">",v=">=";break;case"<":l=ac,u=dh,p=ic,m="<",v="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(ch(e,n,s))return!1;for(let y=0;y<n.set.length;++y){let S=n.set[y],w=null,P=null;if(S.forEach(x=>{x.semver===oh&&(x=new sc(">=0.0.0")),w=w||x,P=P||x,l(x.semver,w.semver,s)?w=x:p(x.semver,P.semver,s)&&(P=x)}),w.operator===m||w.operator===v||(!P.operator||P.operator===m)&&u(e,P.semver))return!1;if(P.operator===v&&p(e,P.semver))return!1}return!0};oc.exports=ph});var cc=Ae((v0,lc)=>{"use strict";var fh=hi(),mh=(e,n,i)=>fh(e,n,">",i);lc.exports=mh});var dc=Ae((y0,uc)=>{"use strict";var hh=hi(),gh=(e,n,i)=>hh(e,n,"<",i);uc.exports=gh});var mc=Ae((b0,fc)=>{"use strict";var pc=Nt(),vh=(e,n,i)=>(e=new pc(e,i),n=new pc(n,i),e.intersects(n,i));fc.exports=vh});var gc=Ae((w0,hc)=>{"use strict";var yh=hn(),bh=Rt();hc.exports=(e,n,i)=>{let s=[],l=null,u=null,p=e.sort((S,w)=>bh(S,w,i));for(let S of p)yh(S,n,i)?(u=S,l||(l=S)):(u&&s.push([l,u]),u=null,l=null);l&&s.push([l,null]);let m=[];for(let[S,w]of s)S===w?m.push(S):!w&&S===p[0]?m.push("*"):w?S===p[0]?m.push(`<=${w}`):m.push(`${S} - ${w}`):m.push(`>=${S}`);let v=m.join(" || "),y=typeof n.raw=="string"?n.raw:String(n);return v.length<y.length?v:n}});var xc=Ae((S0,Sc)=>{"use strict";var vc=Nt(),Qa=fn(),{ANY:Ja}=Qa,gn=hn(),Za=Rt(),wh=(e,n,i={})=>{if(e===n)return!0;e=new vc(e,i),n=new vc(n,i);let s=!1;e:for(let l of e.set){for(let u of n.set){let p=xh(l,u,i);if(s=s||p!==null,p)continue e}if(s)return!1}return!0},Sh=[new Qa(">=0.0.0-0")],yc=[new Qa(">=0.0.0")],xh=(e,n,i)=>{if(e===n)return!0;if(e.length===1&&e[0].semver===Ja){if(n.length===1&&n[0].semver===Ja)return!0;i.includePrerelease?e=Sh:e=yc}if(n.length===1&&n[0].semver===Ja){if(i.includePrerelease)return!0;n=yc}let s=new Set,l,u;for(let x of e)x.operator===">"||x.operator===">="?l=bc(l,x,i):x.operator==="<"||x.operator==="<="?u=wc(u,x,i):s.add(x.semver);if(s.size>1)return null;let p;if(l&&u){if(p=Za(l.semver,u.semver,i),p>0)return null;if(p===0&&(l.operator!==">="||u.operator!=="<="))return null}for(let x of s){if(l&&!gn(x,String(l),i)||u&&!gn(x,String(u),i))return null;for(let L of n)if(!gn(x,String(L),i))return!1;return!0}let m,v,y,S,w=u&&!i.includePrerelease&&u.semver.prerelease.length?u.semver:!1,P=l&&!i.includePrerelease&&l.semver.prerelease.length?l.semver:!1;w&&w.prerelease.length===1&&u.operator==="<"&&w.prerelease[0]===0&&(w=!1);for(let x of n){if(S=S||x.operator===">"||x.operator===">=",y=y||x.operator==="<"||x.operator==="<=",l){if(P&&x.semver.prerelease&&x.semver.prerelease.length&&x.semver.major===P.major&&x.semver.minor===P.minor&&x.semver.patch===P.patch&&(P=!1),x.operator===">"||x.operator===">="){if(m=bc(l,x,i),m===x&&m!==l)return!1}else if(l.operator===">="&&!gn(l.semver,String(x),i))return!1}if(u){if(w&&x.semver.prerelease&&x.semver.prerelease.length&&x.semver.major===w.major&&x.semver.minor===w.minor&&x.semver.patch===w.patch&&(w=!1),x.operator==="<"||x.operator==="<="){if(v=wc(u,x,i),v===x&&v!==u)return!1}else if(u.operator==="<="&&!gn(u.semver,String(x),i))return!1}if(!x.operator&&(u||l)&&p!==0)return!1}return!(l&&y&&!u&&p!==0||u&&S&&!l&&p!==0||P||w)},bc=(e,n,i)=>{if(!e)return n;let s=Za(e.semver,n.semver,i);return s>0?e:s<0||n.operator===">"&&e.operator===">="?n:e},wc=(e,n,i)=>{if(!e)return n;let s=Za(e.semver,n.semver,i);return s<0?e:s>0||n.operator==="<"&&e.operator==="<="?n:e};Sc.exports=wh});var Ac=Ae((x0,Tc)=>{"use strict";var es=Ur(),kc=Br(),kh=ft(),Ec=Ba(),Eh=dr(),Th=qo(),Ah=Xo(),Ph=Zo(),Rh=rl(),Nh=il(),Ch=sl(),Ih=ll(),_h=ul(),Dh=Rt(),Oh=ml(),Lh=gl(),$h=ci(),Mh=wl(),Bh=xl(),Uh=pn(),zh=ui(),Fh=Fa(),Wh=Wa(),Kh=di(),Hh=pi(),Gh=Ka(),Vh=Il(),jh=Dl(),qh=fn(),Yh=Nt(),Xh=hn(),Jh=ql(),Qh=Xl(),Zh=Ql(),eg=tc(),tg=nc(),rg=hi(),ng=cc(),ig=dc(),ag=mc(),sg=gc(),og=xc();Tc.exports={parse:Eh,valid:Th,clean:Ah,inc:Ph,diff:Rh,major:Nh,minor:Ch,patch:Ih,prerelease:_h,compare:Dh,rcompare:Oh,compareLoose:Lh,compareBuild:$h,sort:Mh,rsort:Bh,gt:Uh,lt:zh,eq:Fh,neq:Wh,gte:Kh,lte:Hh,cmp:Gh,coerce:Vh,truncate:jh,Comparator:qh,Range:Yh,satisfies:Xh,toComparators:Jh,maxSatisfying:Qh,minSatisfying:Zh,minVersion:eg,validRange:tg,outside:rg,gtr:ng,ltr:ig,intersects:ag,simplifyRange:sg,subset:og,SemVer:kh,re:es.re,src:es.src,tokens:es.t,SEMVER_SPEC_VERSION:kc.SEMVER_SPEC_VERSION,RELEASE_TYPES:kc.RELEASE_TYPES,compareIdentifiers:Ec.compareIdentifiers,rcompareIdentifiers:Ec.rcompareIdentifiers}});var Cy={};Up(Cy,{findPlaybarMount:()=>yd,render:()=>Ry,unmount:()=>Ny});var uo="Xndr2",po="listening-stats",Xn=`${uo}/${po}`,qt=`https://github.com/${Xn}`,_y=`${qt}/releases/latest/download/listening-stats.zip`,Yt=`https://raw.githubusercontent.com/${Xn}/main`,fo=`https://raw.githubusercontent.com/${Xn}/dist/latest-release.json`,mo=`https://cdn.jsdelivr.net/gh/${uo}/${po}@dist/latest-release.json`,ho=`https://api.github.com/repos/${Xn}`;var go="listening-stats:remote-announcement-cache",Fp=1800*1e3;function Jn(e){let n=2166136261;for(let i=0;i<e.length;i++)n^=e.charCodeAt(i),n=Math.imul(n,16777619);return(n>>>0).toString(36)}function Wp(e){let n=e.trim(),i=n.match(/^UPDATE\s*(.*)$/i);if(!i)return null;let s=i[1].trim(),l=s.indexOf("|");if(l>=0){let u=s.slice(0,l).trim(),p=s.slice(l+1).trim();return{dismissId:u||Jn(n),headline:p||"Notice from the Listening Stats maintainers."}}return{dismissId:Jn(n),headline:s||"Notice from the Listening Stats maintainers."}}function Kp(e){let n=e.replace(/^\uFEFF/,"").trim();if(!n)return null;let i=n.indexOf(`
`),s=(i===-1?n:n.slice(0,i)).trim(),l=i===-1?"":n.slice(i+1).trim(),u=Wp(s);if(u)return{dismissId:u.dismissId,title:u.headline,body:l.trim()||"Open the changelog in the app, or run the install script from Settings \u2192 About to update.",actionLabel:"Changelog",actionUrl:`${qt}/releases`,actionOpensChangelog:!0};if(s.startsWith("# ")){let p=s.slice(2).trim();return{dismissId:Jn(n),title:p,body:l}}return{dismissId:Jn(n),title:"Announcement",body:n}}async function vo(){let e=null;try{let n=sessionStorage.getItem(go);if(n){let i=JSON.parse(n);i&&typeof i.t=="number"&&typeof i.text=="string"&&Date.now()-i.t<Fp&&(e=i.text)}}catch{}if(e===null)try{let n=await fetch(`${Yt}/ANNOUNCEMENT.md?t=${Date.now()}`,{cache:"no-store"});if(n.status===404)e="";else if(n.ok)e=await n.text();else return null;try{sessionStorage.setItem(go,JSON.stringify({t:Date.now(),text:e??""}))}catch{}}catch{return null}return e===null||e===""?null:Kp(e)}var xe={PLAY_RECORDED:"listening-stats:play-recorded",SKIP_RECORDED:"listening-stats:skip-recorded",HEALTH_CHANGED:"listening-stats:health-changed",TRACKING_PAUSED:"listening-stats:tracking-paused",TRACKING_RESUMED:"listening-stats:tracking-resumed",PROVIDER_CHANGED:"listening-stats:provider-changed",STATSFM_CONNECTED:"listening-stats:statsfm-connected",STATSFM_DISCONNECTED:"listening-stats:statsfm-disconnected",STATSFM_HEALTH_CHANGED:"listening-stats:statsfm-health-changed",PREFS_CHANGED:"listening-stats:prefs-changed"};var ue={PLAY_THRESHOLD:"listening-stats:playThreshold",TRACKING_PAUSED:"listening-stats:tracking-paused",SKIP_REPEATS:"listening-stats:skip-repeats",LAST_UPDATE:"listening-stats:lastUpdate",LOGGING:"listening-stats:logging",TRACKING_HEALTH:"listening-stats:tracking-health",LAST_WRITE:"listening-stats:lastWrite",ACTIVE_PROVIDER:"listening-stats:active-provider",PREFERENCES:"listening-stats:preferences",MIGRATION_PENDING:"listening-stats:migration-pending",STATSFM_CONFIG:"listening-stats:statsfm",PROVIDER_WIZARD_SEEN:"listening-stats:provider-wizard-seen",PROVIDER_PERIODS:"listening-stats:provider-periods",STATSFM_HEALTH:"listening-stats:statsfm-health",DISMISSED_BANNER_VERSION:"listening-stats:dismissed-banner-version",LASTFM_API_KEY:"listening-stats:lastfm-api-key",WORLD_CHARTS_SCOPE:"listening-stats:world-charts-scope",WORLD_CHARTS_WINDOW:"listening-stats:world-charts-window",TOUR_SEEN_VERSION:"listening-stats:tour-seen-version",DISMISSED_REMOTE_ANNOUNCEMENT_ID:"listening-stats:dismissed-remote-announcement-id",UPDATE_PROMPT_SNOOZE_UNTIL:"listening-stats:update-prompt-snooze-until"};var Mr=class extends Error{constructor(n){super(n.message),this.name="StatsFmError",this.appError=n}};function on(e,n,i){return e===404?{variant:"UserNotFound",message:n,retryable:!1}:e===429||e===0&&n.includes("Circuit open")?{variant:"RateLimited",message:n,retryable:!1,resetAt:i}:e>=500&&e<=599?{variant:"ServiceDown",message:n,retryable:!0}:e===0?{variant:"NetworkError",message:n,retryable:!0}:{variant:"Unknown",message:n,retryable:!0}}var Qn=co(yo(),1),bo=Symbol.for("Dexie"),Zn=globalThis[bo]||(globalThis[bo]=Qn.default);if(Qn.default.semVer!==Zn.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Qn.default.semVer} and ${Zn.semVer}`);var{liveQuery:Uy,mergeRanges:zy,rangesOverlap:Fy,RangeSet:Wy,cmp:Ky,Entity:Hy,PropModification:Gy,replacePrefix:Vy,add:jy,remove:qy,DexieYProvider:Yy}=Zn;var wo=Zn;var Hp,Ea=class extends wo{constructor(n){super("listening-stats"),this.version(4).stores({playEvents:"++id, startedAt, trackUri, artistUri, type"}),this.version(5).stores({playEvents:"++id, startedAt, trackUri, artistUri, type",artists:"uri, updatedAt"}),this.on("versionchange",i=>{if(i.newVersion!==null)return this.close({disableAutoOpen:!0}),n?.(),Hp?.(),!1})}},Xe=new Ea;var Ta=class{constructor(n=300*1e3){this.store=new Map;this.ttlMs=n}get(n){let i=this.store.get(n);return!i||Date.now()>i.expiry?null:i.data}getStale(n){let i=this.store.get(n);return i?i.data:null}set(n,i){this.store.set(n,{data:i,expiry:Date.now()+this.ttlMs})}invalidate(n){n!==void 0?this.store.delete(n):this.store.clear()}},ei=new Ta;var ln=class{constructor(){this.state="closed";this.failureCount=0;this.openedAt=null;this.extraCooldownMs=0}isOpen(){if(this.state==="open"){let n=Date.now()-(this.openedAt??0),i=3e4+this.extraCooldownMs;return n>=i?(this.state="half-open",!1):!0}return!1}recordSuccess(){this.failureCount=0,this.state="closed",this.openedAt=null,this.extraCooldownMs=0}recordFailure(n){if(this.state==="half-open"){this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=n?n*1e3:0;return}this.failureCount+=1,this.failureCount>=3&&(this.state="open",this.openedAt=Date.now(),this.extraCooldownMs=n?n*1e3:0)}reset(){this.recordSuccess()}getResetAt(){return this.state!=="open"||this.openedAt===null?null:this.openedAt+3e4+this.extraCooldownMs}getState(){return this.state}},lr=new ln;async function ti(e){let n=ei.get(e);if(n!==null)return{ok:!0,data:n};if(lr.isOpen()){let i=ei.getStale(e);return i!==null?{ok:!0,data:i,stale:!0}:{ok:!1,error:{type:"circuit_open"}}}try{let i=await Spicetify.CosmosAsync.request("GET",e);if(i.status===429){let l=i.headers?.["retry-after"]??i.headers?.["Retry-After"]??"5",u=Number(l)||5;return lr.recordFailure(u),{ok:!1,error:{type:"rate_limited",retryAfter:u}}}if(i.status<200||i.status>=300)return lr.recordFailure(),{ok:!1,error:{type:"http_error",status:i.status}};lr.recordSuccess();let s=i.body;return ei.set(e,s),{ok:!0,data:s}}catch(i){return lr.recordFailure(),{ok:!1,error:{type:"network_error",message:String(i)}}}}var So=50,Gp=1440*60*1e3;async function xo(e){if(e.length===0)return;let n=[...new Set(e)],i=Date.now(),s=await Xe.artists.where("uri").anyOf(n).toArray(),l=new Set(s.filter(p=>i-p.updatedAt<Gp).map(p=>p.uri)),u=n.filter(p=>!l.has(p));if(u.length!==0)for(let p=0;p<u.length;p+=So){let v=u.slice(p,p+So).map(S=>S.replace("spotify:artist:","")).join(","),y=await ti(`https://api.spotify.com/v1/artists?ids=${v}`);if(y.ok){let S=y.data.artists.map(w=>({uri:`spotify:artist:${w.id}`,name:w.name,genres:w.genres,imageUrl:w.images[0]?.url??null,updatedAt:Date.now()}));await Xe.artists.bulkPut(S)}}}function ko(){let e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,0,0);return{start:n.getTime(),end:i.getTime()}}function Eo(){let e=new Date,i=(e.getDay()+6)%7,s=new Date(e.getFullYear(),e.getMonth(),e.getDate()-i,0,0,0,0),l=new Date(s.getFullYear(),s.getMonth(),s.getDate()+7,0,0,0,0);return{start:s.getTime(),end:l.getTime()}}function To(){let e=new Date,n=new Date(e.getFullYear(),e.getMonth(),1,0,0,0,0),i=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:n.getTime(),end:i.getTime()}}function Vp(){let e=new Date,n=new Date(e.getFullYear(),e.getMonth()-6,1,0,0,0,0),i=new Date(e.getFullYear(),e.getMonth()+1,1,0,0,0,0);return{start:n.getTime(),end:i.getTime()}}function Ao(){return{start:0,end:Number.MAX_SAFE_INTEGER}}var Pt=[{id:"today",label:"Today",getBoundaries:ko},{id:"this-week",label:"This Week",getBoundaries:Eo},{id:"this-month",label:"This Month",getBoundaries:To},{id:"last-6-months",label:"Last 6 Months",getBoundaries:Vp},{id:"all-time",label:"All Time",getBoundaries:Ao}],Aa=[{id:"sfm-weeks",label:"This Week",getBoundaries:Eo},{id:"sfm-months",label:"This Month",getBoundaries:To},{id:"sfm-all-time",label:"All Time",getBoundaries:Ao}],Po=[{id:"sfm-today",label:"Today",getBoundaries:ko},...Aa];function Ro(e){let n=Pt.findIndex(i=>i.id===e);return n===-1||n===Pt.length-1?null:Pt[n+1]}function cn(e){if(e.id==="all-time"||e.id==="sfm-all-time")return null;let{start:n,end:i}=e.getBoundaries(),s=i-n,l=n-s;return l<0?null:{start:l,end:n}}var jp=120*1e3,Pa=class{constructor(){this.store=new Map}get(n){let i=this.store.get(n);return i?Date.now()>=i.expiry?(this.store.delete(n),null):i.data:null}set(n,i){this.store.set(n,{data:i,expiry:Date.now()+jp})}invalidate(n){n!==void 0?this.store.delete(n):this.store.clear()}setupInvalidationListeners(){window.addEventListener(xe.PLAY_RECORDED,()=>{this.invalidate()})}},Ge=new Pa;var qp="local",Yp=12,Xp=400;function Jp(e){return`${qp}:${e}`}function un(e){let n=new Date(e);return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function No(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()-1)}function Qp(e){if(e.length===0)return 0;let n=new Set(e.map(p=>un(p.startedAt))),i=new Date,s=new Date(i.getFullYear(),i.getMonth(),i.getDate()),l=un(s.getTime());if(!n.has(l)){s=No(s);let p=un(s.getTime());if(!n.has(p))return 0}let u=0;for(;n.has(un(s.getTime()));)u++,s=No(s);return u}var Ra=class{getProviderInfo(){return{id:"local",name:"Local",description:"Stats from locally tracked plays",capabilities:{hasActivityData:!0,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"}}}getSupportedPeriods(){return Pt}async calculateStats(n){let i=Jp(n.id),s=Ge.get(i);if(s)return s;let{start:l,end:u}=n.getBoundaries(),p=u===Number.MAX_SAFE_INTEGER?await Xe.playEvents.toArray():await Xe.playEvents.where("startedAt").between(l,u).toArray(),m=cn(n),v,y;if(m){let N=await Xe.playEvents.where("startedAt").between(m.start,m.end).toArray();if(N.length>0){let Y=new Set(N.map(Ke=>Ke.artistUri)),We=new Set(p.map(Ke=>Ke.artistUri)),Ne=0;for(let Ke of We)Y.has(Ke)||Ne++;v=Ne,y=N.reduce((Ke,Ve)=>Ke+Ve.playedMs,0)}}let S=Date.now()-Xp*24*60*60*1e3,w=await Xe.playEvents.where("startedAt").above(S).toArray(),P=Qp(w),x=new Map,L=new Map,j=new Map;for(let N of p){let Y=x.get(N.trackUri);Y?(Y.count++,Y.durationMs+=N.playedMs):x.set(N.trackUri,{trackUri:N.trackUri,trackName:N.trackName,artistName:N.artistName,artistUri:N.artistUri,albumName:N.albumName,albumUri:N.albumUri,albumArt:N.albumArt,count:1,durationMs:N.playedMs});let We=L.get(N.artistUri);We?(We.count++,We.durationMs+=N.playedMs):L.set(N.artistUri,{name:N.artistName,uri:N.artistUri,count:1,durationMs:N.playedMs});let Ne=j.get(N.albumUri);Ne?(Ne.count++,Ne.durationMs+=N.playedMs):j.set(N.albumUri,{name:N.albumName,uri:N.albumUri,artistName:N.artistName,albumArt:N.albumArt,count:1,durationMs:N.playedMs})}let q=Array.from(x.values()).sort((N,Y)=>Y.count-N.count).map((N,Y)=>({rank:Y+1,...N})),I=Array.from(L.values()).sort((N,Y)=>Y.count-N.count).map((N,Y)=>({rank:Y+1,artistUri:N.uri,artistName:N.name,count:N.count,durationMs:N.durationMs})),H=Array.from(j.values()).sort((N,Y)=>Y.count-N.count).map((N,Y)=>({rank:Y+1,albumUri:N.uri,albumName:N.name,artistName:N.artistName,albumArt:N.albumArt,count:N.count,durationMs:N.durationMs})),B=[...p].sort((N,Y)=>Y.startedAt-N.startedAt).slice(0,Yp).map(N=>({trackUri:N.trackUri,trackName:N.trackName,artistName:N.artistName,albumArt:N.albumArt,playedAt:N.startedAt})),M=p.reduce((N,Y)=>N+Y.playedMs,0),z=new Array(24).fill(0);for(let N of p){let Y=new Date(N.startedAt).getHours();z[Y]++}let G=p.length>0?z.indexOf(Math.max(...z)):0,re=new Array(7).fill(0);for(let N of p){let Y=new Date(N.startedAt).getDay(),We=Y===0?6:Y-1;re[We]++}let te=p.length>0?re.indexOf(Math.max(...re)):0,Z=new Map;for(let N of w){let Y=un(N.startedAt);Z.set(Y,(Z.get(Y)??0)+1)}let Pe=Array.from(Z.entries()).map(([N,Y])=>({date:N,count:Y})).sort((N,Y)=>N.date.localeCompare(Y.date)),ie=p.filter(N=>N.type==="skip").length,J=p.length,he=J>0?ie/J:0,_e=x.size,Ie=L.size,Oe=I.map(N=>N.artistUri);await xo(Oe);let de=await Xe.artists.where("uri").anyOf(Oe).toArray(),Le=new Map(de.map(N=>[N.uri,N]));for(let N of I){let Y=Le.get(N.artistUri);Y&&(N.genres=Y.genres,N.imageUrl=Y.imageUrl)}let D=new Map;for(let N of de)for(let Y of N.genres)D.set(Y,(D.get(Y)??0)+1);let Re=Array.from(D.entries()).sort((N,Y)=>Y[1]-N[1]).map(([N,Y],We)=>({rank:We+1,genre:N,count:Y})),me={topTracks:q,topArtists:I,topAlbums:H,topGenres:Re,totalPlays:p.length,totalDuration:M,recentPlays:B,hourlyDistribution:z,peakHour:G,skipRate:he,uniqueTrackCount:_e,uniqueArtistCount:Ie,streak:P,weekdayDistribution:re,peakWeekday:te,dailyPlayCounts:Pe,newArtistCount:v,priorPeriodTotalDuration:y};Ge.set(i,me);let ce=Ro(n.id);return ce&&this.calculateStats(ce).catch(()=>{}),me}async calculateStatsProgressive(n,i){let s=await this.calculateStats(n);return i(s,1),i(s,2),i(s,3),s}async init(){Ge.setupInvalidationListeners()}destroy(){Ge.invalidate()}},Na=new Ra;var Ca=class{constructor(){this.providers=new Map;this.activeId=null}register(n){let i=n.getProviderInfo();this.providers.set(i.id,n)}getActive(){return this.activeId?this.providers.get(this.activeId)??null:null}getActiveId(){return this.activeId}setActive(n){if(!this.providers.has(n))throw new Error(`Provider "${n}" not registered`);this.activeId=n,localStorage.setItem(ue.ACTIVE_PROVIDER,n)}restoreActive(){let n=localStorage.getItem(ue.ACTIVE_PROVIDER);n&&this.providers.has(n)&&(this.activeId=n)}_resetForTesting(){this.providers.clear(),this.activeId=null}getAll(){return Array.from(this.providers.values()).map(n=>n.getProviderInfo())}},De=new Ca;var Zp="https://api.stats.fm/api/v1",cr=new ln;function Ia(){try{let e=localStorage.getItem(ue.STATSFM_HEALTH);if(e)return JSON.parse(e).lastSuccessAt}catch{}return null}function ri(e){try{localStorage.setItem(ue.STATSFM_HEALTH,JSON.stringify(e))}catch{}window.dispatchEvent(new CustomEvent(xe.STATSFM_HEALTH_CHANGED,{detail:e}))}async function it(e,n){if(cr.isOpen())return ri({lastFetchAt:Date.now(),lastSuccessAt:Ia(),lastError:"Circuit open  -  stats.fm temporarily unavailable",circuitOpen:!0}),{ok:!1,status:0,message:"Circuit open  -  stats.fm temporarily unavailable"};let i=new URL(`${Zp}${e}`);if(n)for(let[u,p]of Object.entries(n))i.searchParams.set(u,p);localStorage.getItem(ue.LOGGING)==="true"&&console.debug("[statsfm]",i.toString());let s=new AbortController,l=setTimeout(()=>s.abort(),1e4);try{let u=await fetch(i.toString(),{headers:{Accept:"application/json"},signal:s.signal});if(clearTimeout(l),!u.ok)return cr.recordFailure(),ri({lastFetchAt:Date.now(),lastSuccessAt:Ia(),lastError:`HTTP ${u.status}`,circuitOpen:cr.isOpen()}),{ok:!1,status:u.status,message:`HTTP ${u.status}`};let p=await u.json();return cr.recordSuccess(),ri({lastFetchAt:Date.now(),lastSuccessAt:Date.now(),lastError:null,circuitOpen:!1}),{ok:!0,data:p.item??p.items}}catch(u){clearTimeout(l),cr.recordFailure();let p=(u instanceof Error||u instanceof DOMException)&&u.name==="AbortError"?"Request timed out after 10s":String(u);return ri({lastFetchAt:Date.now(),lastSuccessAt:Ia(),lastError:p,circuitOpen:cr.isOpen()}),(u instanceof Error||u instanceof DOMException)&&u.name==="AbortError"?{ok:!1,status:0,message:"Request timed out after 10s"}:{ok:!1,status:0,message:String(u)}}}async function Pr(e){let n=await it(`/users/${encodeURIComponent(e)}`);return n.ok?{valid:!0,isPlus:n.data.isPlus,displayName:n.data.displayName}:n.status===404?{valid:!1,reason:"not_found"}:n.status===403?{valid:!1,reason:"private"}:n.status===0&&n.message.includes("Circuit open")?{valid:!1,reason:"circuit_open"}:{valid:!1,reason:"network"}}var ef="statsfm",tf=1440*60*1e3;function Et(e,n){if(e)return e.startsWith("spotify:")?e:`spotify:${n}:${e}`}function Co(e){return`${ef}:${e}`}function $t(e){return e.status==="fulfilled"&&e.value.ok?e.value.data:null}function ni(e){return e.status==="fulfilled"&&!e.value.ok?{status:e.value.status,message:e.value.message}:e.status==="rejected"?{status:0,message:String(e.reason)}:null}function Io(e){let n=new Map;for(let i of e){let s=i.track.albums[0];if(!s)continue;let l=s.name,u=n.get(l),p=i.track.artists[0]?.name??"",m=Et(s.externalIds?.spotify?.[0],"album")??"";u?u.streams+=i.streams:n.set(l,{albumName:s.name,artistName:p,albumArt:s.image,albumUri:m,streams:i.streams})}return Array.from(n.values()).sort((i,s)=>s.streams-i.streams).map((i,s)=>({rank:s+1,albumUri:i.albumUri||`listening-stats:album:${i.albumName}${i.artistName}`,albumName:i.albumName,artistName:i.artistName,albumArt:i.albumArt,count:i.streams,durationMs:0}))}var _a=class{constructor(){this.config=null}getProviderInfo(){return{id:"statsfm",name:"stats.fm",description:"Stats from stats.fm",capabilities:{hasActivityData:!1,hasConsistencyData:!0,hasGenreData:!0,hasStreakData:!1,hasSkipRate:!1,tier:this.config?.isPlus??!1?"plus":"free"}}}getSupportedPeriods(){return this.config?.isPlus?Po:Aa}async calculateStats(n){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let i=Co(n.id),s=Ge.get(i);if(s)return s;let u={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[n.id];if(!u)throw new Error(`Unknown stats.fm period: ${n.id}`);let p={range:u},m=this.config.username,v=this.config.isPlus,y=Intl.DateTimeFormat().resolvedOptions().timeZone,S=cn(n),w=S?it(`/users/${m}/top/artists`,{after:String(S.start),before:String(S.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),[P,x,L,j,q,I,H,K,B]=await Promise.allSettled([it(`/users/${m}/top/tracks`,p),it(`/users/${m}/top/artists`,p),it(`/users/${m}/top/genres`,p),it(`/users/${m}/streams/stats`,p),it(`/users/${m}/streams/recent`,{limit:"12"}),v?it(`/users/${m}/top/albums`,p):Promise.resolve({ok:!1,status:0,message:"skipped"}),it(`/users/${m}/streams/stats/per-day`,{range:"lifetime",timeZone:y}),it(`/users/${m}/streams/stats/dates`,{range:u,timeZone:y}),w]),M=ni(P),z=ni(x),G=ni(j);if(M&&z&&G){let O=cr.getResetAt()??void 0;throw new Mr(on(M.status,M.message,O))}let re=$t(P)??[],te=$t(x)??[],Z=$t(B)??[],Pe;if(Z.length>0){let O=new Set(te.map(ke=>ke.artist.externalIds?.spotify?.[0]).filter(ke=>!!ke)),X=new Set(Z.map(ke=>ke.artist.externalIds?.spotify?.[0]).filter(ke=>!!ke)),pe=0;for(let ke of O)X.has(ke)||pe++;Pe=pe}let ie=$t(j),J=$t(q)??[],he=$t(I)??[],_e=$t(H),Ie=_e?.days?Object.values(_e.days).filter(O=>O.count>0).length:void 0,Oe=_e?.days?Object.entries(_e.days).map(([O,X])=>({date:O,count:X.count})).sort((O,X)=>O.date.localeCompare(X.date)):void 0,de;if(S&&_e?.days){let O=0;for(let[X,pe]of Object.entries(_e.days)){let ke=new Date(X).getTime();Number.isFinite(ke)&&ke>=S.start&&ke<S.end&&(O+=pe.durationMs)}O>0&&(de=O)}let D=$t(K)?.items,Re=new Array(24).fill(0);if(D?.hours)for(let[O,X]of Object.entries(D.hours)){let pe=Number(O);pe>=0&&pe<24&&(Re[pe]=X.count)}let me=Re.reduce((O,X,pe,ke)=>X>ke[O]?pe:O,0),ce,N,Y=D!=null&&(Object.keys(D.hours??{}).length>0||Object.keys(D.weekDays??{}).length>0);if(Y&&D?.weekDays){ce=new Array(7).fill(0);for(let[O,X]of Object.entries(D.weekDays)){let pe=Number(O)-1;pe>=0&&pe<7&&(ce[pe]=X.count)}N=ce.reduce((O,X,pe,ke)=>X>ke[O]?pe:O,0)}let We=re.map(O=>({rank:O.position,trackUri:Et(O.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${O.track.name}${O.track.artists[0]?.name??""}`,trackName:O.track.name,artistName:O.track.artists[0]?.name??"",artistUri:Et(O.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${O.track.artists[0]?.name??""}`,albumName:O.track.albums[0]?.name??"",albumUri:Et(O.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:O.track.albums[0]?.image,count:O.streams,durationMs:O.track.durationMs*O.streams})),Ne=te.map(O=>({rank:O.position,artistUri:Et(O.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${O.artist.name}`,artistName:O.artist.name,count:O.streams,durationMs:O.playedMs??0,genres:O.artist.genres,imageUrl:O.artist.image??null})),Ke=v?he.map(O=>({rank:O.position,albumUri:Et(O.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${O.album.name}${O.album.artists[0]?.name??""}`,albumName:O.album.name,artistName:O.album.artists[0]?.name??"",albumArt:O.album.image,count:O.streams,durationMs:0})):Io(re),Ve=new Map;for(let O of te)for(let X of O.artist.genres)Ve.set(X,(Ve.get(X)??0)+O.streams);let Ze=Array.from(Ve.entries()).sort((O,X)=>X[1]-O[1]).map(([O,X],pe)=>({rank:pe+1,genre:O,count:X})),Be=J.map(O=>({trackUri:Et(O.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${O.track.name}${O.track.artists[0]?.name??""}`,trackName:O.track.name,artistName:O.track.artists[0]?.name??"",albumArt:O.track.albums[0]?.image,playedAt:new Date(O.endTime).getTime()||Date.now()})),et={topTracks:We,topArtists:Ne,topAlbums:Ke,topGenres:Ze,totalPlays:ie?.count??0,totalDuration:ie?.durationMs??0,recentPlays:Be,hourlyDistribution:Re,peakHour:me,skipRate:0,uniqueTrackCount:ie?.cardinality.tracks??0,uniqueArtistCount:ie?.cardinality.artists??0,listeningDays:Ie,weekdayDistribution:ce,peakWeekday:N,hasListeningPatterns:Y,dailyPlayCounts:Oe,newArtistCount:Pe,priorPeriodTotalDuration:de};return Ge.set(i,et),et}async calculateStatsProgressive(n,i){if(!this.config&&(await this.init(),!this.config))throw new Error("StatsFmProvider not configured  -  call init() first");let s=Co(n.id),l=Ge.get(s);if(l)return i(l,1),i(l,2),i(l,3),l;let p={"sfm-today":"today","sfm-weeks":"weeks","sfm-months":"months","sfm-all-time":"lifetime"}[n.id];if(!p)throw new Error(`Unknown stats.fm period: ${n.id}`);let m={range:p},v=this.config.username,y=this.config.isPlus,S=Intl.DateTimeFormat().resolvedOptions().timeZone,w=cn(n),P=w?it(`/users/${v}/top/artists`,{after:String(w.start),before:String(w.end),limit:"200"}):Promise.resolve({ok:!1,status:0,message:"skipped"}),x=it(`/users/${v}/streams/stats`,m),L=it(`/users/${v}/streams/recent`,{limit:"12"}),j=it(`/users/${v}/top/tracks`,m),q=it(`/users/${v}/top/artists`,m),I=y?it(`/users/${v}/top/albums`,m):Promise.resolve({ok:!1,status:0,message:"skipped"}),H=it(`/users/${v}/streams/stats/per-day`,{range:"lifetime",timeZone:S}),K=it(`/users/${v}/streams/stats/dates`,{range:p,timeZone:S}),[B,M]=await Promise.allSettled([x,L]),z=$t(B),re=($t(M)??[]).map(O=>({trackUri:Et(O.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${O.track.name}${O.track.artists[0]?.name??""}`,trackName:O.track.name,artistName:O.track.artists[0]?.name??"",albumArt:O.track.albums[0]?.image,playedAt:new Date(O.endTime).getTime()||Date.now()}));i({totalPlays:z?.count??0,totalDuration:z?.durationMs??0,uniqueTrackCount:z?.cardinality.tracks??0,uniqueArtistCount:z?.cardinality.artists??0,skipRate:0,recentPlays:re},1);let te=[],Z=[],Pe=[],ie=null,J=[],he=[],_e=[],Ie=[],Oe=[],de,Le,D,Re,me=()=>{if(Z.length===0||J.length===0)return;let O=new Set(Z.map(ke=>ke.artist.externalIds?.spotify?.[0]).filter(ke=>!!ke)),X=new Set(J.map(ke=>ke.artist.externalIds?.spotify?.[0]).filter(ke=>!!ke)),pe=0;for(let ke of O)X.has(ke)||pe++;D=pe,i({newArtistCount:D},2)},ce=[j.then(O=>{te=O.ok?O.data:[],he=te.map(X=>({rank:X.position,trackUri:Et(X.track.externalIds?.spotify?.[0],"track")??`listening-stats:track:${X.track.name}${X.track.artists[0]?.name??""}`,trackName:X.track.name,artistName:X.track.artists[0]?.name??"",artistUri:Et(X.track.artists[0]?.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${X.track.artists[0]?.name??""}`,albumName:X.track.albums[0]?.name??"",albumUri:Et(X.track.albums[0]?.externalIds?.spotify?.[0],"album")??"",albumArt:X.track.albums[0]?.image,count:X.streams,durationMs:X.track.durationMs*X.streams})),i({topTracks:he},2),y||(Ie=Io(te),i({topAlbums:Ie},2))}),q.then(O=>{Z=O.ok?O.data:[],_e=Z.map(pe=>({rank:pe.position,artistUri:Et(pe.artist.externalIds?.spotify?.[0],"artist")??`listening-stats:artist:${pe.artist.name}`,artistName:pe.artist.name,count:pe.streams,durationMs:pe.playedMs??0,genres:pe.artist.genres,imageUrl:pe.artist.image??null})),i({topArtists:_e},2);let X=new Map;for(let pe of Z)for(let ke of pe.artist.genres)X.set(ke,(X.get(ke)??0)+pe.streams);Oe=Array.from(X.entries()).sort((pe,ke)=>ke[1]-pe[1]).map(([pe,ke],fe)=>({rank:fe+1,genre:pe,count:ke})),i({topGenres:Oe},2),me()}),I.then(O=>{y&&(Pe=O.ok?O.data:[],Ie=Pe.map(X=>({rank:X.position,albumUri:Et(X.album.externalIds?.spotify?.[0],"album")??`listening-stats:album:${X.album.name}${X.album.artists[0]?.name??""}`,albumName:X.album.name,artistName:X.album.artists[0]?.name??"",albumArt:X.album.image,count:X.streams,durationMs:0})),i({topAlbums:Ie},2))}),H.then(O=>{if(ie=O.ok?O.data:null,de=ie?.days?Object.values(ie.days).filter(X=>X.count>0).length:void 0,Le=ie?.days?Object.entries(ie.days).map(([X,pe])=>({date:X,count:pe.count})).sort((X,pe)=>X.date.localeCompare(pe.date)):void 0,w&&ie?.days){let X=0;for(let[pe,ke]of Object.entries(ie.days)){let fe=new Date(pe).getTime();Number.isFinite(fe)&&fe>=w.start&&fe<w.end&&(X+=ke.durationMs)}X>0&&(Re=X)}i({listeningDays:de,dailyPlayCounts:Le,priorPeriodTotalDuration:Re},2)}),P.then(O=>{J=O.ok?O.data:[],me()})];await Promise.allSettled(ce);let[N]=await Promise.allSettled([K]),Y=ni(N),Ne=$t(N)?.items,Ke=new Array(24).fill(0);if(Ne?.hours)for(let[O,X]of Object.entries(Ne.hours)){let pe=Number(O);pe>=0&&pe<24&&(Ke[pe]=X.count)}let Ve=Ke.reduce((O,X,pe,ke)=>X>ke[O]?pe:O,0),Ze,Be,et=Ne!=null&&(Object.keys(Ne.hours??{}).length>0||Object.keys(Ne.weekDays??{}).length>0);if(et&&Ne?.weekDays){Ze=new Array(7).fill(0);for(let[O,X]of Object.entries(Ne.weekDays)){let pe=Number(O)-1;pe>=0&&pe<7&&(Ze[pe]=X.count)}Be=Ze.reduce((O,X,pe,ke)=>X>ke[O]?pe:O,0)}return Y?i({hourlyDistribution:new Array(24).fill(0),peakHour:0,hasListeningPatterns:!1},3,on(Y.status,Y.message)):i({hourlyDistribution:Ke,peakHour:Ve,weekdayDistribution:Ze,peakWeekday:Be,hasListeningPatterns:et},3),{topTracks:he,topArtists:_e,topAlbums:Ie,topGenres:Oe,totalPlays:z?.count??0,totalDuration:z?.durationMs??0,recentPlays:re,hourlyDistribution:Ke,peakHour:Ve,skipRate:0,uniqueTrackCount:z?.cardinality.tracks??0,uniqueArtistCount:z?.cardinality.artists??0,listeningDays:de,weekdayDistribution:Ze,peakWeekday:Be,hasListeningPatterns:et,dailyPlayCounts:Le,newArtistCount:D,priorPeriodTotalDuration:Re}}async init(){let n=localStorage.getItem(ue.STATSFM_CONFIG);if(!n)return;if(this.config=JSON.parse(n),Date.now()-this.config.lastValidated>tf){let s=await Pr(this.config.username);s.valid&&(this.config.isPlus=s.isPlus,this.config.lastValidated=Date.now(),localStorage.setItem(ue.STATSFM_CONFIG,JSON.stringify(this.config)))}}destroy(){Ge.invalidate()}},ur=new _a;var rf=["listening-stats:card-order","listening-stats:period","listening-stats:sfm-promo-dismissed","listening-stats:tour-seen","listening-stats:tour-version","listening-stats:lastUpdateCheck","listening-stats:searchCache","listening-stats:dedup-v2-done","listening-stats:rateLimitedUntil","listening-stats:lastfm","listening-stats:pollingData"],_o="listening-stats:prun-v1-done";function nf(){try{if(localStorage.getItem(_o)==="1")return;for(let e of rf)localStorage.removeItem(e);localStorage.setItem(_o,"1")}catch{}}var Do=!1;async function Oo(){Do||(Do=!0,nf(),De.register(Na),De.register(ur),De.restoreActive(),De.getActive()||De.setActive("local"),await Na.init(),await ur.init())}function Da(){return{overview:"loading",lists:"loading",activity:"loading",consistency:"loading"}}function Oa(){return{overview:"resolved",lists:"resolved",activity:"resolved",consistency:"resolved"}}var La={topTracks:[],topArtists:[],topAlbums:[],topGenres:[],totalPlays:0,totalDuration:0,recentPlays:[],hourlyDistribution:new Array(24).fill(0),peakHour:0,skipRate:0,uniqueTrackCount:0,uniqueArtistCount:0};function Lo(e){switch(e){case 1:return"overview";case 2:return"lists";case 3:return"activity"}}var gi=co(Ac(),1);function ts(e){return e.replace(/^v/i,"").trim()}async function lg(){let e=[fo,mo];for(let n of e)try{let i=await fetch(`${n}?t=${Date.now()}`,{cache:"no-store"});if(!i.ok)continue;let s=await i.json();if(typeof s.tag!="string"||!s.tag)continue;return{tag:s.tag,prerelease:!!s.prerelease}}catch{}return null}async function Pc(e){try{let n=await fetch(`${ho}${e}`,{cache:"no-store",headers:{Accept:"application/vnd.github+json"}});return n.ok?await n.json():null}catch{return null}}function cg(e){if(e?.length)return e.find(n=>typeof n.tag_name!="string"||!n.tag_name?!1:(n.assets??[]).some(s=>s.name==="listening-stats.zip"))}async function Rc(e){if(e){let s=await Pc("/releases?per_page=15"),l=cg(s??null);if(l?.tag_name)return{tag:l.tag_name,version:ts(l.tag_name),prerelease:!!l.prerelease}}let n=await Pc("/releases/latest");if(n?.tag_name)return{tag:n.tag_name,version:ts(n.tag_name),prerelease:!!n.prerelease};let i=await lg();return i&&(e||!i.prerelease)?{tag:i.tag,version:ts(i.tag),prerelease:i.prerelease}:null}function ug(e,n){let i=gi.default.coerce(e),s=gi.default.coerce(n);return!i||!s?!1:gi.default.gt(s,i)}async function Nc(e,n){let i=await Rc(n);return i?{updateAvailable:ug(e,i.version),localVersion:e,remoteVersion:i.version,remoteTag:i.tag,prerelease:i.prerelease}:{updateAvailable:!1,localVersion:e,remoteVersion:e,remoteTag:null}}function Cc(e){try{let n=Date.now()+e*60*60*1e3;localStorage.setItem(ue.UPDATE_PROMPT_SNOOZE_UNTIL,String(n))}catch{}}function Ic(){try{let e=localStorage.getItem(ue.UPDATE_PROMPT_SNOOZE_UNTIL);if(!e)return!1;let n=Number.parseInt(e,10);return!Number.isNaN(n)&&Date.now()<n}catch{return!1}}var dg={"2.6":{title:"v2.6 is here",body:"section streaming, share cards, world charts.",actionLabel:"What's new \u2192"}};function pg(e){return dg[e]??null}function fg(e){try{return localStorage.getItem(ue.DISMISSED_BANNER_VERSION)===e}catch{return!1}}function mg(e){try{return localStorage.getItem(ue.DISMISSED_REMOTE_ANNOUNCEMENT_ID)===e}catch{return!1}}function _c(e,n){if(n&&!mg(n.dismissId))return{source:"remote",dismissKey:n.dismissId,title:n.title,body:n.body,actionLabel:n.actionLabel,actionUrl:n.actionUrl,actionOpensChangelog:n.actionOpensChangelog};let i=pg(e);return i&&!fg(e)?{source:"local",dismissKey:e,title:i.title,body:i.body,actionLabel:i.actionLabel,actionUrl:i.actionUrl}:null}var hg=[{id:"overview",label:"Overview"},{id:"top-genres",label:"Top Genres"},{id:"top-lists",label:"Top Lists"},{id:"activity",label:"Activity"},{id:"consistency",label:"Consistency"},{id:"recently-played",label:"Recently Played"}];function vi(e){return hg.filter(n=>!(n.id==="top-genres"&&!e.hasGenreData||n.id==="activity"&&!e.hasActivityData||n.id==="consistency"&&!e.hasConsistencyData))}function Dc(e){return e.hasActivityData?"full":"hidden"}var{memo:gg}=Spicetify.React;function vg({version:e,onCheckForUpdates:n}){return Spicetify.React.createElement("footer",{className:"stats-app-footer"},Spicetify.React.createElement("span",{className:"stats-app-footer-credit"},"Made with love by Xndr"),Spicetify.React.createElement("span",{className:"stats-app-footer-meta"},Spicetify.React.createElement("span",{className:"stats-app-footer-version"},"v",e),Spicetify.React.createElement("button",{type:"button",className:"stats-app-footer-install-link",onClick:n},"Check for updates")))}var Oc=gg(vg);var vn=["overview","top-genres","top-lists","activity","consistency","recently-played"],bi=["top-tracks","top-artists","top-albums"],Rr={local:["tracks","unique-artists","streak","new-artists","peak-hour","skip-rate","est-payout"],statsfm:["unique-artists","new-artists","top-genre","est-payout"]},yn={tracks:"Tracks","unique-artists":"Unique Artists","listening-days":"Listening Days",streak:"Streak","skip-rate":"Skip Rate","est-payout":"Est. Payout","top-genre":"Top Genre","new-artists":"New Artists","peak-hour":"Peak Hour"},$c={"top-tracks":"Top Tracks","top-artists":"Top Artists","top-albums":"Top Albums"},yg=new Set(["hour","weekday","day"]),Ft={use24HourTime:!1,itemsPerSection:5,hiddenSections:[],sectionOrder:[...vn],columnOrder:[...bi],overviewOrder:{local:[...Rr.local],statsfm:[...Rr.statsfm]},activityTab:"hour",activeGenre:null,playCountVariant:"pill",activePage:"dashboard",receiveBetaUpdates:!1,showAnnouncementBanner:!0,announcementBannerHiddenForDismissKey:""};function Lc(){return{...Ft,hiddenSections:[...Ft.hiddenSections],sectionOrder:[...Ft.sectionOrder],columnOrder:[...Ft.columnOrder],overviewOrder:{local:[...Ft.overviewOrder.local],statsfm:[...Ft.overviewOrder.statsfm]}}}function yi(e,n){let i=new Set(n),s=[],l=new Set;if(Array.isArray(e))for(let u of e)typeof u=="string"&&i.has(u)&&!l.has(u)&&(l.add(u),s.push(u));for(let u of n)l.has(u)||s.push(u);return s}function bg(e){let n=[],i=new Set;if(!Array.isArray(e))return n;for(let s of e)typeof s=="string"&&(i.has(s)||(i.add(s),n.push(s)));return n}function at(){try{let e=localStorage.getItem(ue.PREFERENCES);if(e){let n=JSON.parse(e),i=Lc();return{...i,...n,hiddenSections:bg(n.hiddenSections??i.hiddenSections),sectionOrder:yi(n.sectionOrder,vn),columnOrder:yi(n.columnOrder,bi),overviewOrder:{local:yi(n.overviewOrder?.local,Rr.local),statsfm:yi(n.overviewOrder?.statsfm,Rr.statsfm)},activityTab:yg.has(n.activityTab)?n.activityTab:Ft.activityTab,receiveBetaUpdates:typeof n.receiveBetaUpdates=="boolean"?n.receiveBetaUpdates:Ft.receiveBetaUpdates,showAnnouncementBanner:typeof n.showAnnouncementBanner=="boolean"?n.showAnnouncementBanner:Ft.showAnnouncementBanner,announcementBannerHiddenForDismissKey:typeof n.announcementBannerHiddenForDismissKey=="string"?n.announcementBannerHiddenForDismissKey:Ft.announcementBannerHiddenForDismissKey}}}catch{}return Lc()}function Ue(e,n){try{let i=at();i[e]=n,localStorage.setItem(ue.PREFERENCES,JSON.stringify(i))}catch{}}var wi=[{id:"health",label:"Health Indicator",text:"This dot shows your tracking status. Green means data is flowing, yellow means it\u2019s been a while, and red means something needs attention. Works for both local and stats.fm tracking.",selector:'[data-tour-target="health"], .header-provider-pill'},{id:"page-tabs",label:"Dashboard & World",text:"Switch between your personal Dashboard and the global World charts. The World tab shows trending tracks and artists worldwide from Last.fm.",selector:'[data-testid="page-tabs"]'},{id:"period",label:"Time Window",text:"Pick a time range and every section on the dashboard updates to match. Available periods depend on your tracking provider.",selector:'[data-tour-target="period"], .period-tabs'}],Si={overview:{id:"overview",label:"Overview Cards",text:"Your headline stats for the selected period include total plays, unique artists, listening streak, and more. The cards shown depend on your provider and tier.",selector:'[data-section-id="overview"]'},lists:{id:"lists",label:"Top Lists",text:"Your most-played tracks, artists, and albums ranked side by side. Click any item to jump straight to it in Spotify.",selector:'[data-section-id="top-lists"]'},activity:{id:"activity",label:"Activity Charts",text:"Hourly and daily listening patterns visualized as charts. Discover your peak hours and most active days of the week.",selector:'[data-section-id="activity"]'},consistency:{id:"consistency",label:"Consistency",text:"See how regularly you listened in this period, including active days, average intensity, and your longest silent gap.",selector:'[data-section-id="consistency"]'}},xi=[{id:"share",label:"Share Card",text:"Generate a shareable image of your stats. Download it as a PNG or copy it straight to your clipboard.",selector:'[data-tour-target="share"], [aria-label="Share card"]'},{id:"gear",label:"Settings",text:"Customize everything by reordering or hiding sections, switching tracking providers, managing your data, and connecting Last.fm for world charts.",selector:'[data-tour-target="settings"], [aria-label="Open settings"]'}];function rs(e){if(!e)return[...wi,Si.overview,Si.lists,Si.activity,...xi];if(e.activePage==="world")return[wi[0],wi[1],xi[1]];let n=e.sectionIds.map(s=>Si[s]).filter(s=>!!s),i=e.hasShare?xi:xi.filter(s=>s.id!=="share");return[...wi,...n,...i]}var ki=rs();function Mc(e){let n=e.match(/^(\d+)/);return n?n[1]:"0"}function Bc(e){let n=localStorage.getItem(ue.TOUR_SEEN_VERSION);return n?n!==Mc(e):!0}function Uc(e){localStorage.setItem(ue.TOUR_SEEN_VERSION,Mc(e))}function zc(e){if(e<6e4)return"<1 min";let n=Math.floor(e/6e4);if(n<60)return`${n} min`;let i=Math.floor(n/60),s=n%60;if(i<24)return s>0?`${i}h ${s}m`:`${i}h`;let l=Math.floor(i/24),u=i%24;return u>0?`${l}d ${u}h`:`${l}d`}function Fc(e){let n=Date.now()-e,i=Math.floor(n/1e3);if(i<60)return"just now";let s=Math.floor(i/60);if(s<60)return`${s}m ago`;let l=Math.floor(s/60);return l<24?`${l}h ago`:`${Math.floor(l/24)}d ago`}function ut(e){try{return Spicetify.Locale.formatNumber(e)}catch{return String(e)}}function Mt(e,n){return n?`${e}:00`:e===0?"12am":e<12?`${e}am`:e===12?"12pm":`${e-12}pm`}function Wc(e){return`$${(e*.004).toFixed(2)}`}var wg=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Sg(e){let n=new Date;n.setHours(0,0,0,0);let i=new Map;for(let w of e)i.set(w.date,w.count);let s=new Date(n);s.setDate(s.getDate()-364-s.getDay());let l=[],u=new Date(s);for(;u<=n;){let w=`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`;l.push({date:new Date(u),count:i.get(w)??0}),u.setDate(u.getDate()+1)}let p=l[0]?.date.getDay()??0;for(let w=0;w<p;w++)l.unshift(null);for(;l.length%7!==0;)l.push(null);let m=l.length/7,v=[];for(let w=0;w<m;w++)v.push(l.slice(w*7,w*7+7));let y=[],S=-1;for(let w=0;w<v.length;w++){let P=v[w].find(x=>x!==null);if(P&&P.date.getDate()<=7){let x=P.date.getMonth();x!==S&&(y.push({col:w,label:wg[x]}),S=x)}}return{cells:v,monthLabels:y}}function xg(e,n){return e<=0?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${(.15+Math.min(1,e/n)*.85).toFixed(2)})`}function Kc({dailyPlayCounts:e}){let{cells:n,monthLabels:i}=Sg(e),s=n.length,l=Math.max(...n.flat().filter(m=>m!==null).map(m=>m.count),1),p=`repeat(${s}, 11px)`;return Spicetify.React.createElement("div",{className:"heatmap-container"},Spicetify.React.createElement("div",{className:"heatmap-scroll-inner"},Spicetify.React.createElement("div",{className:"heatmap-month-labels",style:{gridTemplateColumns:p}},Array.from({length:s}).map((m,v)=>{let y=i.find(S=>S.col===v);return Spicetify.React.createElement("span",{key:v},y?y.label:"")})),Spicetify.React.createElement("div",{className:"heatmap-grid",style:{gridTemplateColumns:p}},n.map((m,v)=>Spicetify.React.createElement("div",{key:v,className:"heatmap-week"},m.map((y,S)=>Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{key:S,label:y?`${y.date.toDateString()} - ${y.count} plays`:"",placement:"top"},Spicetify.React.createElement("div",{className:"heatmap-cell",style:{background:y?xg(y.count,l):"transparent"}}))))))),Spicetify.React.createElement("div",{className:"heatmap-legend"},Spicetify.React.createElement("span",null,"Less"),[.05,.25,.5,.75,1].map(m=>Spicetify.React.createElement("span",{key:m,className:"heatmap-legend-swatch",style:{background:m===.05?"rgba(var(--spice-rgb-misc), 0.05)":`rgba(var(--spice-rgb-button), ${m})`}})),Spicetify.React.createElement("span",null,"More")))}function st({width:e="100%",height:n="12px",radius:i=4,style:s,className:l,...u}){return Spicetify.React.createElement("div",{...u,className:`skeleton-shimmer${l?` ${l}`:""}`,style:{width:e,height:n,borderRadius:i,...s}})}function ns({size:e=20,style:n}){return Spicetify.React.createElement(st,{width:e,height:e,radius:"50%",style:n})}function Ei({width:e="70%"}){return Spicetify.React.createElement(st,{width:e,height:"10px",radius:4})}var{useState:kg}=Spicetify.React,Hc=Array.from({length:24},(e,n)=>n),Eg=Array.from({length:7},(e,n)=>n),Tg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Gc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Ag=[{value:"hour",label:"By hour"},{value:"weekday",label:"By weekday"},{value:"day",label:"By day"}];function is({loading:e=!1,hourlyDistribution:n,peakHour:i,weekdayDistribution:s,peakWeekday:l,dailyPlayCounts:u,streak:p,showStreak:m}){let v=at(),[y,S]=kg(()=>v.activityTab);if(e)return Spicetify.React.createElement("div",{className:"section-card","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),Spicetify.React.createElement("div",{className:"activity-chart"},Hc.map(x=>Spicetify.React.createElement(st,{key:x,className:"activity-bar",height:`${20+x%6*10}%`}))));let w=x=>{S(x),Ue("activityTab",x)},P=null;return y==="hour"&&n[i]>0?P=Mt(i,v.use24HourTime):y==="weekday"&&s[l]>0&&(P=Gc[l]),Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("div",{className:"activity-chart-header"},Spicetify.React.createElement("header",{className:"section-heading",style:{marginBottom:0}},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Activity")),P&&Spicetify.React.createElement("div",{className:"activity-chart-peak"},"Peak: ",Spicetify.React.createElement("span",null,P))),Spicetify.React.createElement("div",{className:"activity-tabs"},Ag.map(x=>Spicetify.React.createElement("button",{type:"button",key:x.value,className:`activity-tab${y===x.value?" active":""}`,onClick:()=>w(x.value)},x.label))),y==="hour"&&Pg(n,i,v.use24HourTime),y==="weekday"&&Rg(s,l),y==="day"&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement(Kc,{dailyPlayCounts:u??[]}),m&&p!=null&&p>0&&Spicetify.React.createElement("div",{className:"streak-callout"},"You've listened on ",Spicetify.React.createElement("strong",null,p," days")," in a row \xB7 longest stretch this year.")))}function Pg(e,n,i){let s=Math.max(...e,1);return Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"activity-chart"},Hc.map(l=>{let u=e[l],p=u>0?Math.max(u/s*100,5):0,m=l===n&&u>0;return Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{key:l,label:`${Mt(l,i)}: ${u} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${m?" peak":""}`,style:{height:`${p}%`}}))})),Spicetify.React.createElement("div",{className:"activity-chart-labels"},Spicetify.React.createElement("span",null,Mt(0,i)),Spicetify.React.createElement("span",null,Mt(6,i)),Spicetify.React.createElement("span",null,Mt(12,i)),Spicetify.React.createElement("span",null,Mt(18,i)),Spicetify.React.createElement("span",null,Mt(0,i))))}function Rg(e,n){let i=Math.max(...e,1);return Spicetify.React.createElement("div",{className:"weekday-chart"},Eg.map(s=>{let l=e[s],u=l>0?Math.max(l/i*100,5):0,p=s===n&&l>0;return Spicetify.React.createElement("div",{key:s,className:"weekday-column"},Spicetify.React.createElement("div",{className:"weekday-bar-area"},Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{label:`${Gc[s]}: ${l} plays`,placement:"top"},Spicetify.React.createElement("div",{className:`activity-bar${p?" peak":""}`,style:{height:`${u}%`}}))),Spicetify.React.createElement("span",{className:"weekday-label"},Tg[s]))}))}function Ng(){return Spicetify.React.createElement("svg",{className:"announcement-banner-icon",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",focusable:"false"},Spicetify.React.createElement("path",{d:"M3 12V15H5V12H3ZM7 8V19H9V8H7ZM11 5V22H13V5H11ZM15 8V19H17V8H15ZM19 12V15H21V12H19Z"}))}function Vc({title:e,body:n,titleOnly:i=!1,actionLabel:s,actionUrl:l,onActionClick:u,onDismiss:p}){return Spicetify.React.createElement("div",{className:"announcement-banner"},Spicetify.React.createElement(Ng,null),Spicetify.React.createElement("span",{className:"announcement-banner-text"},i?Spicetify.React.createElement("strong",null,e):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("strong",null,e)," \u2013 ",n)),s&&(u?Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-link announcement-banner-link-btn",onClick:u},s):Spicetify.React.createElement("a",{className:"announcement-banner-link",href:l??"#",target:l&&l!=="#"?"_blank":void 0,rel:l&&l!=="#"?"noopener noreferrer":void 0},s)),Spicetify.React.createElement("button",{type:"button",className:"announcement-banner-dismiss",onClick:p,"aria-label":"Dismiss"},"\xD7"))}function jc(e){return new Date(e).toISOString().slice(0,10)}function Cg(e,n){let{start:i,end:s}=n.getBoundaries();if(s===Number.MAX_SAFE_INTEGER)return e.slice(-30);let l=s-1,u=jc(i),p=jc(l);return e.filter(m=>m.date>=u&&m.date<=p)}function Ig(e){let n=0,i=0;for(let s of e){if(s.count>0){i=0;continue}i+=1,n=Math.max(n,i)}return n}function _g(e){let n=new Date(e);if(!Number.isFinite(n.getTime())){let i=e.slice(0,10);n=new Date(`${i}T00:00:00`)}return Number.isFinite(n.getTime())?n.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}):e.slice(0,10)}function as({loading:e=!1,totalPlays:n,totalDuration:i,listeningDays:s,dailyPlayCounts:l,activePeriod:u,activeProviderId:p="statsfm"}){if(e)return Spicetify.React.createElement("div",{className:"section-card consistency-section","aria-hidden":"true"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Array.from({length:4}).map((B,M)=>Spicetify.React.createElement("div",{key:M,className:"consistency-metric"},Spicetify.React.createElement(Ei,{width:"55%"}),Spicetify.React.createElement(st,{width:"45%",height:24,style:{marginTop:8}}),Spicetify.React.createElement(Ei,{width:"70%"})))));let m=Cg(l??[],u),v=m.length,y=m.length>0?m.filter(B=>B.count>0).length:s??0,S=y>0?n/y:0,w=y>0?i/6e4/y:0,P=Ig(m),x=v>0?Math.round(y/v*100):0,L=m.slice(-14),j=Math.max(...L.map(B=>B.count),1),q=u.id==="today"||u.id==="sfm-today",I=p==="local",H=Spicetify.ReactComponent.TooltipWrapper,K=({label:B,value:M,sub:z,tooltip:G})=>Spicetify.React.createElement(H,{label:G},Spicetify.React.createElement("div",{className:"consistency-metric"},Spicetify.React.createElement("div",{className:"consistency-metric-label"},B),Spicetify.React.createElement("div",{className:"consistency-metric-value"},M),Spicetify.React.createElement("div",{className:"consistency-metric-sub"},z)));return Spicetify.React.createElement("div",{className:"section-card consistency-section"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Patterns"),Spicetify.React.createElement("h2",{className:"section-title"},"Consistency")),Spicetify.React.createElement("div",{className:"consistency-grid"},Spicetify.React.createElement(K,{label:"Listening days",value:y,sub:`out of ${v||y} days`,tooltip:"Number of days in this period with at least one stream."}),Spicetify.React.createElement(K,{label:"Avg plays / active day",value:Math.round(S),sub:"streams when active",tooltip:"Average stream count only across days where you listened."}),Spicetify.React.createElement(K,{label:"Avg minutes / active day",value:Math.round(w),sub:"listening time",tooltip:"Average listening duration in minutes across active days."}),Spicetify.React.createElement(K,{label:"Longest gap",value:P,sub:"days without plays",tooltip:"Longest consecutive run of days in this period without any streams."})),!q&&Spicetify.React.createElement("div",{className:"consistency-footer"},Spicetify.React.createElement(H,{label:`You listened on ${y} of ${v||y} days in this period.`},Spicetify.React.createElement("div",{className:"consistency-coverage"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Active-day coverage"),Spicetify.React.createElement("div",{className:"consistency-coverage-row"},Spicetify.React.createElement("div",{className:"consistency-coverage-track"},Spicetify.React.createElement("div",{className:"consistency-coverage-fill",style:{width:`${x}%`}})),Spicetify.React.createElement("span",null,x,"%")))),I?Spicetify.React.createElement("div",{className:"consistency-week-split"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Weekday vs weekend"),(()=>{let B=m.filter(Z=>Z.count>0),M=B.filter(Z=>{let Pe=new Date(`${Z.date}T00:00:00`).getDay();return Pe>=1&&Pe<=5}).length,z=B.length-M,G=Math.max(M+z,1),re=Math.round(M/G*100),te=100-re;return Spicetify.React.createElement("div",{className:"consistency-week-split-row"},Spicetify.React.createElement(H,{label:`${M} active weekdays (${re}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekdays"),Spicetify.React.createElement("strong",null,re,"%"))),Spicetify.React.createElement(H,{label:`${z} active weekend days (${te}%)`},Spicetify.React.createElement("div",{className:"consistency-week-chip"},Spicetify.React.createElement("span",null,"Weekend"),Spicetify.React.createElement("strong",null,te,"%"))))})()):L.length>0&&Spicetify.React.createElement("div",{className:"consistency-sparkline"},Spicetify.React.createElement("div",{className:"consistency-coverage-label"},"Last 14 days"),Spicetify.React.createElement("div",{className:"consistency-sparkline-bars"},L.map(B=>{let M=B.count>0&&B.count===j;return Spicetify.React.createElement(H,{key:B.date,label:`${_g(B.date)}: ${B.count} plays`,placement:"top"},Spicetify.React.createElement("div",{className:"consistency-sparkline-bar-wrap"},Spicetify.React.createElement("div",{className:`consistency-sparkline-bar${M?" peak":""}`,style:{height:`${Math.max(B.count/j*100,B.count>0?8:2)}%`}})))})))))}function ss({onOpenSettings:e}){return Spicetify.React.createElement("div",{className:"empty-state",role:"status"},Spicetify.React.createElement("h2",{style:{fontSize:"var(--font-size-md, 14px)",fontWeight:700,color:"var(--spice-text)",marginBottom:"var(--space-sm, 8px)"}},"No listening data yet"),Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-md, 14px)",color:"var(--spice-subtext)",marginBottom:"var(--space-md, 16px)"}},"Play some tracks and check back. Make sure tracking is enabled in Settings."),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:e},"Open Settings"))}var qc='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53a7.76 7.76 0 0 0 .07-1 7.76 7.76 0 0 0-.07-.97l2.11-1.63a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a7.15 7.15 0 0 0-1.69-.98l-.37-2.65A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.38 2.65a7.68 7.68 0 0 0-1.68.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46a.5.5 0 0 0 .12.64L4.57 11a8.3 8.3 0 0 0-.07.97 8.3 8.3 0 0 0 .07 1l-2.1 1.63a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1.01a7.35 7.35 0 0 0 1.68.99l.38 2.65c.05.24.25.42.49.42h4c.25 0 .44-.18.49-.42l.37-2.65a7.58 7.58 0 0 0 1.69-.99l2.49 1.01a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.66Z"/></svg>',zr='<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 4.7l-1.4-1.4L8 6.6 4.7 3.3 3.3 4.7 6.6 8l-3.3 3.3 1.4 1.4L8 9.4l3.3 3.3 1.4-1.4L9.4 8l3.3-3.3z"/></svg>',Yc='<svg width="18" height="10" viewBox="0 0 18 10" fill="currentColor" aria-hidden="true"><circle cx="3" cy="3" r="1.1"/><circle cx="9" cy="3" r="1.1"/><circle cx="15" cy="3" r="1.1"/><circle cx="3" cy="7" r="1.1"/><circle cx="9" cy="7" r="1.1"/><circle cx="15" cy="7" r="1.1"/></svg>',Xc='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',Jc='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',Qc='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';function Ti(e){Ue("activeGenre",e),window.dispatchEvent(new CustomEvent(xe.PREFS_CHANGED))}function os(){Ti(null)}function Zc({activeGenre:e,onClear:n}){return e?Spicetify.React.createElement("div",{className:"filter-pill"},Spicetify.React.createElement("span",{className:"filter-pill-icon","aria-hidden":"true",dangerouslySetInnerHTML:{__html:Jc}}),Spicetify.React.createElement("span",null,"Filtering by"),Spicetify.React.createElement("strong",{className:"filter-pill-genre"},e),Spicetify.React.createElement("button",{className:"filter-pill-close",type:"button",onClick:n,"aria-label":"Clear genre filter"},"\xD7")):null}var{useRef:Dg,useLayoutEffect:Og,useState:Lg}=Spicetify.React,eu=280,tu=12,Fr=8,$g=210;function Mg(e,n){let i=window.innerHeight,s=window.innerWidth,l=e.top+e.height+tu,u=e.top-n-tu,p;l+n<=i-Fr?p=l:u>=Fr?p=u:p=Fr;let m=e.left+e.width/2-eu/2;return m=Math.max(Fr,Math.min(m,s-eu-Fr)),{position:"fixed",top:p,left:m,zIndex:10001,maxHeight:`calc(100vh - ${Fr*2}px)`,overflowY:"auto"}}function ru({step:e,steps:n=ki,onNext:i,onBack:s,onSkip:l,targetRect:u}){let p=Dg(null),[m,v]=Lg(void 0),y=n[e],S=e===n.length-1,w=u!=null;return Og(()=>{if(!w){v(void 0);return}let x=p.current?.offsetHeight||$g;v(Mg(u,x))},[w,u,e]),Spicetify.React.createElement("div",{ref:p,className:`tour-popover${w?" tour-popover--positioned":""}`,style:m},Spicetify.React.createElement("div",{className:"tour-step-counter"},"Step ",e+1," of ",n.length),Spicetify.React.createElement("div",{className:"tour-label"},y.label),Spicetify.React.createElement("div",{className:"tour-text"},y.text),Spicetify.React.createElement("div",{className:"tour-footer"},s?Spicetify.React.createElement("button",{type:"button",className:"tour-btn-back",onClick:s},"Back"):Spicetify.React.createElement("button",{type:"button",className:"tour-btn-skip",onClick:l},"Skip"),Spicetify.React.createElement("div",{className:"tour-dots"},n.map((x,L)=>Spicetify.React.createElement("span",{key:L,className:`tour-dot${L===e?" active":""}`}))),Spicetify.React.createElement("button",{type:"button",className:"tour-btn-next",onClick:i},S?"Finish":"Next")))}var{useState:nu,useLayoutEffect:iu,useCallback:Ai,useRef:au,useEffect:su}=Spicetify.React,Pi=6;function Bg(e){let n=document.querySelector(e);n&&n.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}function ou(e){let n=document.querySelector(e);if(!n)return null;let i=n.getBoundingClientRect();return i.width===0&&i.height===0?null:{top:i.top,left:i.left,width:i.width,height:i.height}}function lu({active:e,version:n,steps:i=ki,onComplete:s}){let[l,u]=nu(0),p=au(0),[m,v]=nu(null),y=au([]);su(()=>()=>{y.current.forEach(clearTimeout)},[]);let S=Ai(()=>{Uc(n),s()},[n,s]),w=Ai(I=>{let H=i[I];if(!H)return;y.current.forEach(clearTimeout),y.current=[],Bg(H.selector);let K=()=>v(ou(H.selector));K(),y.current.push(window.setTimeout(K,160),window.setTimeout(K,320))},[i]),P=Ai(()=>{if(p.current>=i.length-1)S();else{let I=p.current+1;p.current=I,u(I),w(I)}},[S,w,i.length]),x=Ai(()=>{let I=Math.max(0,p.current-1);p.current=I,u(I),w(I)},[w]);if(iu(()=>{if(e){if(i.length===0){S();return}p.current=0,u(0),w(0)}},[e,w,i.length,S]),su(()=>{if(!e)return;let I=()=>{let H=i[p.current];H&&v(ou(H.selector))};return window.addEventListener("resize",I),window.addEventListener("scroll",I,!0),()=>{window.removeEventListener("resize",I),window.removeEventListener("scroll",I,!0)}},[e,i]),iu(()=>{if(!e)return;let I=H=>{H.key==="ArrowRight"?P():H.key==="ArrowLeft"?x():H.key==="Escape"&&S()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[e,P,x,S]),!e)return null;let L=m!==null,j=L?{position:"fixed",top:m.top-Pi,left:m.left-Pi,width:m.width+Pi*2,height:m.height+Pi*2,borderRadius:8,boxShadow:"0 0 0 9999px rgba(0,0,0,0.55)",pointerEvents:"none",zIndex:1e4}:void 0,q=Spicetify.React.createElement("div",{className:`tour-overlay${L?" tour-overlay--targeted":""}`},L&&Spicetify.React.createElement("div",{className:"tour-spotlight",style:j}),Spicetify.React.createElement(ru,{step:l,steps:i,onNext:P,onBack:l>0?x:void 0,onSkip:S,targetRect:m}));return Spicetify.ReactDOM.createPortal(q,document.body)}function ls({periods:e,activePeriod:n,onPeriodChange:i}){return Spicetify.React.createElement("div",{className:"period-tabs",role:"tablist"},e.map(s=>Spicetify.React.createElement("button",{type:"button",key:s.id,className:`period-tab ${s.id===n.id?"active":""}`,role:"tab","aria-selected":s.id===n.id,onClick:()=>i(s)},s.label)))}var{useState:cs,useEffect:Ri}=Spicetify.React,Ug=2*6e4;function zg(e){let n=Math.max(0,Math.ceil(e/1e3)),i=Math.floor(n/60),s=n%60;return i<=0?`${s}s`:s===0?`${i}m`:`${i}m ${s}s`}function Fg(e){if(!e||e.lastWriteAt===null)return"red";let n=(Date.now()-e.lastWriteAt)/6e4;return n<5?"green":n<60?"yellow":"red"}function Wg(e){if(!e||e.lastSuccessAt===null||e.circuitOpen||e.lastError!==null)return"red";let n=(Date.now()-e.lastSuccessAt)/6e4;return n<30?"green":n<120?"yellow":"red"}function Kg(e,n,i){return e==="statsfm"?Wg(i):Fg(n)}function Hg(e){if(!e||e.lastWriteAt===null)return"No plays recorded yet";if(!e.healthy&&e.lastError)return`Tracking error: ${e.lastError}`;let n=(Date.now()-e.lastWriteAt)/6e4,i=e.lastTrackName?` - ${e.lastTrackName.length>40?`${e.lastTrackName.slice(0,40)}...`:e.lastTrackName}`:"";return n<1?`Last play just now${i}`:n<60?`Last play ${Math.floor(n)}m ago${i}`:`Last play ${Math.floor(n/60)}h ago${i}`}function Gg(e){if(!e||e.lastFetchAt===null)return"No data fetched yet";if(e.circuitOpen)return"stats.fm unavailable: circuit open";if(e.lastError!==null)return`API error: ${e.lastError.length>60?`${e.lastError.slice(0,60)}\u2026`:e.lastError}`;if(e.lastSuccessAt===null)return"No data fetched yet";let n=Math.max(0,Ug-(Date.now()-e.lastSuccessAt)),i=n>0?` \xB7 refresh in ${zg(n)}`:" \xB7 refresh due now",s=(Date.now()-e.lastSuccessAt)/6e4;return s<1?`API healthy, just refreshed${i}`:s<60?`API healthy, refreshed ${Math.floor(s)}m ago${i}`:`Data stale, last refresh ${Math.floor(s/60)}h ago${i}`}function us({providerName:e,activeProviderId:n,onSettingsClick:i,onShareClick:s,periods:l,activePeriod:u,onPeriodChange:p,activePage:m,onPageChange:v}){let[y,S]=cs(()=>{try{let I=localStorage.getItem(ue.TRACKING_HEALTH);if(I)return JSON.parse(I)}catch{}return null});Ri(()=>{let I=()=>{try{let H=localStorage.getItem(ue.TRACKING_HEALTH);H&&S(JSON.parse(H))}catch{}};return window.addEventListener(xe.HEALTH_CHANGED,I),()=>{window.removeEventListener(xe.HEALTH_CHANGED,I)}},[]);let[w,P]=cs(()=>{try{let I=localStorage.getItem(ue.STATSFM_HEALTH);if(I)return JSON.parse(I)}catch{}return null});Ri(()=>{let I=()=>{try{let H=localStorage.getItem(ue.STATSFM_HEALTH);H&&P(JSON.parse(H))}catch{}};return window.addEventListener(xe.STATSFM_HEALTH_CHANGED,I),()=>{window.removeEventListener(xe.STATSFM_HEALTH_CHANGED,I)}},[]);let[x,L]=cs(()=>De.getActive()?.getProviderInfo().capabilities??null);Ri(()=>{L(De.getActive()?.getProviderInfo().capabilities??null)},[n]),Ri(()=>{let I=()=>{L(De.getActive()?.getProviderInfo().capabilities??null)};return window.addEventListener(xe.PROVIDER_CHANGED,I),()=>{window.removeEventListener(xe.PROVIDER_CHANGED,I)}},[]);let j=Kg(n,y,w),q=n==="statsfm"?Gg(w):Hg(y);return Spicetify.React.createElement("header",{className:"stats-header"},Spicetify.React.createElement("div",{className:"stats-header-left"},Spicetify.React.createElement("h1",{className:"stats-header-title"},"Listening Stats"),Spicetify.React.createElement("div",{"data-tour-target":"health"},Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{label:q,placement:"bottom"},Spicetify.React.createElement("div",{className:"header-provider-pill"},Spicetify.React.createElement("span",{className:`health-dot health-${j}`,"aria-label":`Health: ${j} - ${q}`}),Spicetify.React.createElement("span",{className:"header-provider-name"},e),x?.tier==="plus"&&Spicetify.React.createElement("span",{className:"tier-badge tier-badge--plus"},"Plus")))),m&&v&&Spicetify.React.createElement("div",{className:"page-tabs",role:"tablist","data-testid":"page-tabs"},Spicetify.React.createElement("button",{type:"button",className:`page-tab${m==="dashboard"?" active":""}`,role:"tab","aria-selected":m==="dashboard",onClick:()=>v("dashboard")},"Dashboard"),Spicetify.React.createElement("button",{type:"button",className:`page-tab${m==="world"?" active":""}`,role:"tab","aria-selected":m==="world",onClick:()=>v("world")},"World"))),Spicetify.React.createElement("div",{className:"stats-header-right"},m!=="world"&&l&&u&&p&&Spicetify.React.createElement("div",{"data-tour-target":"period"},Spicetify.React.createElement(ls,{periods:l,activePeriod:u,onPeriodChange:p})),s&&Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:s,"aria-label":"Share card","data-tour-target":"share",dangerouslySetInnerHTML:{__html:Qc}}),Spicetify.React.createElement("button",{type:"button",className:"stats-header-icon-btn",onClick:i,"aria-label":"Open settings","data-tour-target":"settings",dangerouslySetInnerHTML:{__html:qc}})))}var{useState:Vg,useEffect:jg}=Spicetify.React,qg={UserNotFound:{title:"We couldn't find that stats.fm user",body:"Double-check the username in Settings.",cta:"settings"},NetworkError:{title:"Couldn't reach stats.fm",body:"Your connection might be flaky.",cta:"retry"},ServiceDown:{title:"stats.fm is having a moment",body:"Their side, not yours.",cta:"retry"},RateLimited:{title:"Too many requests",body:"We'll back off automatically.",cta:null},InvalidApiKey:{title:"Invalid Last.fm API key",body:"Check your key in Settings.",cta:"settings"},Unknown:{title:"Something went sideways",body:"It happens. Try once more?",cta:"retry"}};function Yg(e){let[n,i]=Vg(()=>e?Math.max(0,Math.ceil((e-Date.now())/1e3)):0);return jg(()=>{if(!e)return;let s=setInterval(()=>{let l=Math.max(0,Math.ceil((e-Date.now())/1e3));i(l),l<=0&&clearInterval(s)},1e3);return()=>clearInterval(s)},[e]),n}function Wr({error:e,onRetry:n,onOpenSettings:i}){let s=qg[e.variant],l=Yg(e.resetAt),u=s.cta==="settings"?i:n,p=s.cta==="settings"?"Open Settings":"Retry";return Spicetify.React.createElement("div",{className:"inline-error-card",role:"status"},Spicetify.React.createElement("div",{className:"inline-error-content"},Spicetify.React.createElement("div",{className:"inline-error-title"},s.title),Spicetify.React.createElement("div",{className:"inline-error-body"},s.body),e.resetAt!==void 0&&l>0&&Spicetify.React.createElement("div",{className:"inline-error-countdown"},"retry in 0:",l.toString().padStart(2,"0"))),s.cta&&Spicetify.React.createElement("button",{type:"button",className:"inline-error-cta",onClick:u},p))}var{useState:Xg,useEffect:Jg,useMemo:Qg}=Spicetify.React;function Zg({totalDuration:e,priorPeriodTotalDuration:n,totalPlays:i,uniqueArtistCount:s,periodLabel:l,periodKey:u}){let p=Qg(()=>typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[]),[m,v]=Xg(p?e:0);Jg(()=>{if(p){v(e);return}let L=0,j=0,q=I=>{j||(j=I);let H=Math.min(1,(I-j)/900),K=1-(1-H)**3;v(Math.round(e*K)),H<1&&(L=requestAnimationFrame(q))};return v(0),L=requestAnimationFrame(q),()=>cancelAnimationFrame(L)},[u,e,p]);let y=Math.floor(m/36e5),S=Math.floor(m%36e5/6e4),w=n,P=w!=null&&w>0,x=P?Math.round((e-w)/w*100):null;return Spicetify.React.createElement("div",{className:"overview-hero-cell",style:{background:"radial-gradient(120% 140% at 0% 0%, rgba(var(--spice-rgb-button),.16), transparent 52%), var(--spice-card)",border:"1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12)",borderRadius:8,padding:20,minHeight:184,position:"relative",overflow:"hidden",boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"space-between"}},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,color:"var(--spice-text)",fontSize:12,fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase"}},Spicetify.React.createElement("span",{dangerouslySetInnerHTML:{__html:Xc}}),Spicetify.React.createElement("span",null,"Total time - ",l)),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"baseline",gap:14,marginTop:"auto"}},Spicetify.React.createElement("span",{"data-testid":"hero-hours",style:{fontSize:64,fontWeight:800,letterSpacing:"-0.04em",lineHeight:1,fontVariantNumeric:"tabular-nums"}},y),Spicetify.React.createElement("span",{style:{fontSize:24,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"h"),Spicetify.React.createElement("span",{"data-testid":"hero-minutes",style:{fontSize:36,fontWeight:700,letterSpacing:"-0.03em",fontVariantNumeric:"tabular-nums"}},S.toString().padStart(2,"0")),Spicetify.React.createElement("span",{style:{fontSize:18,fontWeight:600,color:"rgba(var(--spice-rgb-text), 0.6)"}},"m"),P&&x!=null&&Spicetify.React.createElement("span",{"data-testid":"hero-delta",style:{marginLeft:"auto",fontSize:12,color:"var(--spice-button)",fontWeight:600,display:"inline-flex",alignItems:"center",gap:4}},x>=0?"\u2191":"\u2193"," ",Math.abs(x),"% vs prev")),Spicetify.React.createElement("div",{"data-testid":"hero-sublabel",style:{marginTop:14,display:"flex",alignItems:"center",gap:6,fontSize:12,color:"rgba(var(--spice-rgb-text), 0.55)"}},Spicetify.React.createElement("span",null,ut(i)," plays \xB7 "),Spicetify.React.createElement("span",null,ut(s)," artists")))}function ev(){return Spicetify.React.createElement("div",{className:"overview-section","aria-hidden":"true"},Spicetify.React.createElement(st,{className:"overview-hero-cell",height:184}),Spicetify.React.createElement("div",{className:"overview-right-block"},Array.from({length:4}).map((e,n)=>Spicetify.React.createElement(st,{key:n,className:"overview-card",height:60}))),Spicetify.React.createElement("div",{className:"overview-bottom-row"},Array.from({length:3}).map((e,n)=>Spicetify.React.createElement(st,{key:n,className:"overview-card",height:60}))))}function Ni({stats:e,activePeriod:n,loading:i=!1}){if(i||!e)return Spicetify.React.createElement(ev,null);let s=at(),u=(De.getActive()?.getProviderInfo().id??"local")==="statsfm"?"statsfm":"local",p=u==="statsfm",m={tracks:{value:ut(e.totalPlays),tooltip:"Total number of tracks played in the selected period",sub:"plays"},"unique-artists":{value:ut(e.uniqueArtistCount),tooltip:"Number of distinct artists played in the selected period"},streak:p?void 0:{value:e.streak!=null&&e.streak>0?`${e.streak}d`:"-",tooltip:"Consecutive calendar days with at least one play (local timezone)",accent:e.streak!=null&&e.streak>0?"var(--spice-button)":void 0},"new-artists":e.newArtistCount!=null?{value:ut(e.newArtistCount),tooltip:"Artists you played in this period that you didn't play in the previous period",sub:"discovered"}:void 0,"peak-hour":{value:Mt(e.peakHour,s.use24HourTime),tooltip:"Your most active listening hour in this period",sub:"most active"},"skip-rate":p?void 0:{value:`${Math.round(e.skipRate*100)}%`,tooltip:"Percentage of tracks skipped before the play threshold"},"est-payout":{value:Wc(e.totalPlays),tooltip:"Estimated streaming payout at $0.004 per play (approximate only)",sub:"indie scale"},"top-genre":{value:e.topGenres[0]?.genre??"-",tooltip:"Your most-played genre in this period"},"listening-days":{value:e.listeningDays!=null&&e.listeningDays>0?ut(e.listeningDays):"-",tooltip:"Number of days with at least one play in the selected period"}},y=s.overviewOrder[u].filter(q=>m[q]!==void 0&&!s.hiddenSections.includes(q)),S=y.slice(0,4),w=y.slice(4,7),P=Math.max(1,Math.min(2,S.length)),x=Math.max(1,Math.min(3,w.length)),L=q=>{let I=m[q];if(!I)return null;let H=yn[q]??q;return Spicetify.React.createElement(Spicetify.ReactComponent.TooltipWrapper,{key:q,label:I.tooltip},Spicetify.React.createElement("div",{className:"overview-card","data-card-id":q},Spicetify.React.createElement("div",{className:"overview-card-label"},H),Spicetify.React.createElement("div",{className:"overview-card-row"},Spicetify.React.createElement("span",{className:"overview-card-value",style:I.accent?{color:I.accent}:void 0},I.value),I.sub&&Spicetify.React.createElement("span",{className:"overview-card-sub"},I.sub))))},j=w.length>0;return Spicetify.React.createElement("div",{className:`overview-section${j?"":" overview-section--compact"}`},Spicetify.React.createElement(Zg,{totalDuration:e.totalDuration,priorPeriodTotalDuration:e.priorPeriodTotalDuration,totalPlays:e.totalPlays,uniqueArtistCount:e.uniqueArtistCount,periodLabel:n.label,periodKey:n.id}),S.length>0&&Spicetify.React.createElement("div",{className:"overview-right-block",style:{gridTemplateColumns:`repeat(${P}, minmax(0, 1fr))`}},S.map(L)),j&&Spicetify.React.createElement("div",{className:"overview-bottom-row",style:{gridTemplateColumns:`repeat(${x}, minmax(0, 1fr))`}},w.map(L)))}function Xt(e){let n=e.split(":");n.length>=3&&Spicetify.Platform.History.push(`/${n[1]}/${n[2]}`)}function ds(e,n,i){let s=new Blob([e],{type:i}),l=URL.createObjectURL(s),u=document.createElement("a");u.href=l,u.download=n,u.click(),URL.revokeObjectURL(l)}function ps({recentPlays:e=[],loading:n=!1}){return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Last 24h"),Spicetify.React.createElement("h2",{className:"section-title"},"Recently Played")),Spicetify.React.createElement("div",{className:"recently-played"},n?Array.from({length:6}).map((i,s)=>Spicetify.React.createElement("div",{key:s,className:"recently-played-item","aria-hidden":"true"},Spicetify.React.createElement(st,{className:"recently-played-skeleton-art",width:132,height:132,radius:6}),Spicetify.React.createElement(st,{className:"recently-played-skeleton-text",width:100,height:10,radius:2,style:{marginTop:8}}),Spicetify.React.createElement(st,{className:"recently-played-skeleton-subtext",width:70,height:10,radius:2,style:{marginTop:6}}))):e.map(i=>Spicetify.React.createElement("div",{key:`${i.trackUri}-${i.playedAt}`,className:"recently-played-item",onClick:()=>Xt(i.trackUri)},i.albumArt?Spicetify.React.createElement("img",{src:i.albumArt,alt:"",className:"recently-played-art"}):Spicetify.React.createElement("div",{className:"recently-played-art"}),Spicetify.React.createElement("div",{className:"recently-played-name"},i.trackName),Spicetify.React.createElement("div",{className:"recently-played-artist"},i.artistName),Spicetify.React.createElement("div",{className:"recently-played-time"},Fc(i.playedAt))))))}var{useState:Ci}=Spicetify.React,tv={not_found:"Username not found. Check your stats.fm customId.",private:"Your profile is private. Make it public in stats.fm settings.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function cu({onComplete:e}){let[n,i]=Ci("provider"),[s,l]=Ci(""),[u,p]=Ci(!1),[m,v]=Ci(null),y=()=>{De.setActive("local"),window.dispatchEvent(new CustomEvent(xe.PROVIDER_CHANGED)),e()},S=async()=>{if(!s.trim())return;p(!0),v(null);let w=await Pr(s.trim());if(!w.valid){v(tv[w.reason]??"Connection failed. Try again."),p(!1);return}let P={username:s.trim(),isPlus:w.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(ue.STATSFM_CONFIG,JSON.stringify(P)),await ur.init(),Ge.invalidate(),De.setActive("statsfm"),window.dispatchEvent(new CustomEvent(xe.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(xe.PROVIDER_CHANGED)),p(!1),e()};return Spicetify.React.createElement("div",{className:"wizard-page"},Spicetify.React.createElement("div",{className:"wizard-modal wizard-modal--page","aria-label":"Choose your provider"},n==="provider"?Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Welcome to Listening Stats"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Choose how you want to track your listening history."),Spicetify.React.createElement("div",{className:"wizard-provider-cards"},Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:y},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"Local Tracking"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Stats tracked on this device. No account required."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Start with Local")),Spicetify.React.createElement("button",{type:"button",className:"wizard-provider-card",onClick:()=>i("statsfm")},Spicetify.React.createElement("div",{className:"wizard-provider-name"},"stats.fm"),Spicetify.React.createElement("div",{className:"wizard-provider-desc"},"Import your listening history from your stats.fm profile."),Spicetify.React.createElement("div",{className:"wizard-provider-cta"},"Use stats.fm")))):Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("h2",{className:"wizard-title"},"Connect stats.fm"),Spicetify.React.createElement("p",{className:"wizard-subtitle"},"Use your stats.fm customId. Your profile must be public for this to work."),Spicetify.React.createElement("div",{className:"provider-status-card wizard-statsfm-help"},Spicetify.React.createElement("div",{className:"settings-label"},"How to find your customId"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Open stats.fm, visit your profile, and copy the customId from the profile URL."),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Example: stats.fm/user/",Spicetify.React.createElement("strong",null,"your-custom-id"))),Spicetify.React.createElement("div",{className:"wizard-statsfm-form"},Spicetify.React.createElement("input",{type:"text",value:s,onChange:w=>l(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!u&&S()},placeholder:"Enter your stats.fm customId",disabled:u,"aria-label":"stats.fm customId",className:"wizard-statsfm-input"}),Spicetify.React.createElement("div",{className:"wizard-statsfm-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:()=>i("provider"),disabled:u},"Back"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>{S()},disabled:u||!s.trim()},u?"Connecting...":"Connect stats.fm")),m&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},m)))))}var{useState:Nr,useCallback:fs,useEffect:uu,useMemo:rv}=Spicetify.React,nv=[{id:"top5",label:"Top 5"},{id:"time",label:"Total time"},{id:"genre",label:"Genre"},{id:"streak",label:"Streak"},{id:"throwback",label:"Throwback"},{id:"wrapped",label:"Wrapped"}],iv=[{id:"square",label:"Square"},{id:"story",label:"Story"}],av={square:{width:1080,height:1080},story:{width:1080,height:1920}};function sv(){try{let e=localStorage.getItem(ue.STATSFM_CONFIG);if(e){let n=JSON.parse(e);if(n?.username)return n.username}}catch{}return""}function pu({stats:e,activePeriod:n,onClose:i}){let[s,l]=Nr("top5"),[u,p]=Nr("square"),[m,v]=Nr(!1),[y,S]=Nr(!1),[w,P]=Nr(""),[x,L]=Nr(!1),[j,q]=Nr(null),I=sv(),H=n.label,K=n.getBoundaries(),B=Math.max(1,Math.round((K.end-K.start)/864e5)),M=De.getActiveId()??"local",z=De.getActive()?.getProviderInfo().capabilities,G=rv(()=>nv.filter(ie=>!(ie.id==="genre"&&!z?.hasGenreData||ie.id==="streak"&&!z?.hasStreakData)),[z]);uu(()=>{G.some(ie=>ie.id===s)||l(G[0]?.id??"top5")},[G,s]),uu(()=>{let ie=!1,J="";return(async()=>{L(!0),q(null);try{let _e=await hs(e,s,u,H,I,{followTheme:m,activeProviderId:M,periodDayCount:B});if(ie)return;J=URL.createObjectURL(_e),P(J)}catch{ie||q("Could not render preview")}finally{ie||L(!1)}})(),()=>{ie=!0,J&&URL.revokeObjectURL(J)}},[e,s,u,H,I,m,M,B]);let re=ie=>l(ie),te=fs(ie=>{ie.target.classList.contains("share-overlay")&&i()},[i]),Z=fs(async()=>{if(!y){S(!0);try{await Tv(e,s,u,H,I,{followTheme:m,activeProviderId:M,periodDayCount:B}),Spicetify.showNotification("Share card downloaded!")}catch{Spicetify.showNotification("Could not export share card.",!0)}finally{S(!1)}}},[e,s,u,H,I,m,M,B,y]),Pe=fs(async()=>{if(!y){S(!0);try{await Av(e,s,u,H,I,{followTheme:m,activeProviderId:M,periodDayCount:B}),Spicetify.showNotification("Copied to clipboard!")}catch{Spicetify.showNotification("Could not copy share card.",!0)}finally{S(!1)}}},[e,s,u,H,I,m,M,B,y]);return Spicetify.ReactDOM.createPortal(Spicetify.React.createElement("div",{className:"share-overlay",onClick:te},Spicetify.React.createElement("div",{className:"share-modal"},Spicetify.React.createElement("div",{className:"share-modal-header"},Spicetify.React.createElement("h2",{className:"share-modal-title"},"Share Cards"),Spicetify.React.createElement("button",{type:"button",className:"share-modal-close stats-header-icon-btn",onClick:i,"aria-label":"Close share modal",dangerouslySetInnerHTML:{__html:zr}})),Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Card type"),Spicetify.React.createElement("div",{className:"share-tabs-row"},G.map(ie=>Spicetify.React.createElement("button",{type:"button",key:ie.id,className:`share-variant-tab${s===ie.id?" active":""}`,onClick:()=>re(ie.id)},ie.label)))),Spicetify.React.createElement("div",{className:"share-control-group"},Spicetify.React.createElement("div",{className:"share-control-label"},"Layout"),Spicetify.React.createElement("div",{className:"share-tabs-row"},iv.map(ie=>Spicetify.React.createElement("button",{type:"button",key:ie.id,className:`share-size-tab${u===ie.id?" active":""}`,onClick:()=>p(ie.id)},ie.label)))),Spicetify.React.createElement("div",{className:"share-control-row"},Spicetify.React.createElement("label",{className:"share-toggle-row"},Spicetify.React.createElement("input",{type:"checkbox",checked:m,onChange:ie=>v(ie.currentTarget.checked)}),Spicetify.React.createElement("span",null,"Follow theme")),Spicetify.React.createElement("span",{className:"share-control-help"},m?"Card uses current Spotify theme colors.":"Card uses default locked green share palette.")),Spicetify.React.createElement("div",{className:"share-preview-container"},x&&Spicetify.React.createElement("div",{className:"share-preview-status"},"Rendering preview\u2026"),j&&Spicetify.React.createElement("div",{className:"share-preview-status"},j),!!w&&!x&&Spicetify.React.createElement("img",{src:w,alt:"Share card preview",className:"share-preview-image","data-testid":"share-card-preview-image"})),Spicetify.React.createElement("div",{className:"share-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-copy-btn",onClick:Pe,disabled:y},y?"Working\u2026":"Copy image"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary share-action-btn","data-testid":"share-download-btn",onClick:Z,disabled:y},y?"Working\u2026":"Save PNG")))),document.body)}var se='-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',du=[30,215,96],fr=72,ov="#0c160e",lv="#122318",cv="#0a1d12";function Fe(e,n=1){return n===1?`rgb(${e[0]},${e[1]},${e[2]})`:`rgba(${e[0]},${e[1]},${e[2]},${n})`}function Ii(e){if(!e)return null;let n=e.trim(),i=n.match(/^rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);if(i)return[Number(i[1]),Number(i[2]),Number(i[3])];let s=n.replace("#","");return/^[\da-f]{6}$/i.test(s)?[Number.parseInt(s.slice(0,2),16),Number.parseInt(s.slice(2,4),16),Number.parseInt(s.slice(4,6),16)]:null}function uv(e){if(!e)return{accent:du,bgA:ov,bgB:lv,bgC:cv,text:"#ffffff",mutedText:"rgba(255,255,255,0.7)",dimText:"rgba(255,255,255,0.55)",chunkBg:"rgba(255,255,255,0.04)",chunkBorder:"rgba(255,255,255,0.08)",specKickerMuted:"rgba(255,255,255,0.6)",specFooterCaption:"rgba(255,255,255,0.5)",specWatermarkTitle:"rgba(255,255,255,0.6)",specWatermarkCaption:"rgba(255,255,255,0.55)",specWrappedMetaMuted:"rgba(255,255,255,0.62)",specWrappedFootnoteMuted:"rgba(255,255,255,0.45)",specChunkCapsLabelMuted:"rgba(255,255,255,0.55)",specGenrePctMuted:"rgba(255,255,255,0.65)",specMutedBody:"rgba(255,255,255,0.6)"};let n=getComputedStyle(document.documentElement),i=Ii(n.getPropertyValue("--spice-button"))??Ii(n.getPropertyValue("--spice-text"))??du,s=Ii(n.getPropertyValue("--spice-main"))??[12,22,14],l=Ii(n.getPropertyValue("--spice-text"))??[255,255,255],u=Fe(l,.62),p=Fe(l,.56);return{accent:i,bgA:`rgb(${Math.max(0,s[0]-10)}, ${Math.max(0,s[1]-10)}, ${Math.max(0,s[2]-10)})`,bgB:`rgb(${s[0]}, ${s[1]}, ${s[2]})`,bgC:`rgb(${Math.max(0,s[0]-6)}, ${Math.max(0,s[1]-6)}, ${Math.max(0,s[2]-6)})`,text:Fe(l),mutedText:Fe(l,.72),dimText:p,chunkBg:Fe(l,.06),chunkBorder:Fe(l,.14),specKickerMuted:u,specFooterCaption:Fe(l,.5),specWatermarkTitle:u,specWatermarkCaption:Fe(l,.55),specWrappedMetaMuted:u,specWrappedFootnoteMuted:Fe(l,.45),specChunkCapsLabelMuted:Fe(l,.55),specGenrePctMuted:Fe(l,.65),specMutedBody:Fe(l,.6)}}function dv(e){return new Promise(n=>{let i=new Image;i.crossOrigin="anonymous",i.onload=()=>n(i),i.onerror=()=>n(null),setTimeout(()=>n(null),5e3),i.src=e})}function ms(e,n,i,s,l,u){e.beginPath(),e.moveTo(n+u,i),e.arcTo(n+s,i,n+s,i+l,u),e.arcTo(n+s,i+l,n,i+l,u),e.arcTo(n,i+l,n,i,u),e.arcTo(n,i,n+s,i,u),e.closePath()}function Cr(e,n,i,s,l,u){ms(e,n,i,s,l,u),e.fill()}function Je(e,n,i){if(i<=8)return"\u2026";if(e.measureText(n).width<=i)return n;let s=n;for(;s.length>0&&e.measureText(`${s}\u2026`).width>i;)s=s.slice(0,-1);return`${s}\u2026`}var yt=20;async function Kr(e,n,i,s,l,u){if(!n)return!1;let p=await dv(n);return p?(e.save(),ms(e,i,s,l,l,u),e.clip(),e.drawImage(p,i,s,l,l),e.restore(),!0):!1}function Hr(e,n,i,s,l){e.fillStyle="rgba(255,255,255,0.06)",Cr(e,n,i,s,s,l),e.fillStyle="rgba(255,255,255,0.2)",e.font=`${Math.round(s*.4)}px ${se}`,e.textAlign="center",e.textBaseline="middle",e.fillText("\u266B",n+s/2,i+s/2),e.textAlign="left",e.textBaseline="alphabetic"}function pr(e,n,i,s,l,u){let p=e.letterSpacing;e.fillStyle=u,e.font=`700 ${l}px ${se}`,e.letterSpacing="0.08em",e.fillText(n.toUpperCase(),i,s),e.letterSpacing=p}function Jt(e,n,i,s,l,u=!1,p=36){e.fillStyle=l.specKickerMuted??l.mutedText;let m=e.letterSpacing;return e.letterSpacing="0.1em",e.font=`700 ${p}px ${se}`,e.fillText(u?n:n.toUpperCase(),i,s),e.letterSpacing=m,s+p+18}function pv(e){let n=(Math.floor(e)%24+24)%24,i=n%12||12,s=n<12||n===24?"AM":"PM";return`${i} ${s}`}function fv(e){let n=e.match(/^(\d{4})-(\d{2})-(\d{2})/);if(!n)return e;let i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=Number(n[2]),l=Number(n[3]);return s<1||s>12?e:`${i[s-1]} ${l}`}function mv(e,n,i,s){let u=160*(Math.PI/180),p=Math.sin(u),m=-Math.cos(u),v=Math.hypot(n,i)/2,y=n/2,S=i/2,w=y-p*v,P=S-m*v,x=y+p*v,L=S+m*v,j=e.createLinearGradient(w,P,x,L);j.addColorStop(0,s.bgA),j.addColorStop(.5,s.bgB),j.addColorStop(1,s.bgC),e.fillStyle=j,e.fillRect(0,0,n,i);let q=e.createRadialGradient(n,0,0,n,0,n*.8);q.addColorStop(0,Fe(s.accent,.35)),q.addColorStop(1,Fe(s.accent,0)),e.fillStyle=q,e.fillRect(0,0,n,i);let I=e.createRadialGradient(0,i,0,0,i,i*.7);I.addColorStop(0,Fe(s.accent,.15)),I.addColorStop(1,Fe(s.accent,0)),e.fillStyle=I,e.fillRect(0,0,n,i)}function hv(e,n,i,s){let l=fr,u=52;e.fillStyle=Fe(s.accent),e.beginPath(),e.arc(l+18,u+18,18,0,Math.PI*2),e.fill();let p=e.letterSpacing;if(e.fillStyle=s.specWatermarkTitle??s.dimText,e.font=`600 28px ${se}`,e.letterSpacing="0.04em",e.textBaseline="middle",e.fillText("LISTENING STATS \xB7 SPICETIFY",l+48,u+18),e.letterSpacing=p,i){e.fillStyle=s.specWatermarkCaption??s.dimText,e.font=`500 26px ${se}`;let m=e.measureText("LISTENING STATS \xB7 SPICETIFY").width,v=l+48+m,y=n-fr,S=Math.max(60,y-v-28),w=Je(e,i,S);e.textAlign="right",e.fillText(w,y,u+18),e.textAlign="left"}e.textBaseline="alphabetic"}function gv(e,n,i,s,l){e.fillStyle=l.specFooterCaption??l.dimText,e.font=`28px ${se}`,e.fillText(s,fr,i-52)}function vv(e,n){return e==="time"?n==="story"?1320:420:e==="genre"?n==="story"?1280:560:e==="throwback"?n==="story"?1180:780:e==="top5"?n==="story"?1460:720:e==="streak"?n==="story"?1180:560:e==="wrapped"?n==="story"?2e3:1120:n==="story"?620:560}async function yv(e,n,i,s,l,u,p){let m=i==="story";u=Jt(e,"My top 5",l,u,s),u+=m?48:32;let v=n.topTracks.slice(0,5);if(v.length===0)return;let y=56,S=m?124:96,w=yt+8,P=m?32:28,x=18;e.font=`700 ${P}px ${se}`;let L=0;for(let G of v)L=Math.max(L,e.measureText(`${G.count}`).width);e.font=`600 ${x}px ${se}`;let j=e.letterSpacing;e.letterSpacing="0.06em";let q=e.measureText("PLAYS").width;e.letterSpacing=j;let I=Math.ceil(L+14+q+fr/2),H=l+y+w+S+w,K=Math.max(72,l+p-I-yt-H),B=G=>G+Math.round(S*.38),M=G=>G+Math.round(S*.78),z=m?36:24;for(let G=0;G<v.length;G++){let re=v[G],te=u+G*(S+z);e.fillStyle=Fe(s.accent),e.font=`800 64px ${se}`,e.textAlign="right",e.fillText(`${G+1}`,l+y,te+S/2+18),e.textAlign="left";let Z=l+y+w;await Kr(e,re.albumArt,Z,te,S,m?10:8)||Hr(e,Z,te,S,m?10:8),e.fillStyle=s.text,e.font=`600 ${m?44:40}px ${se}`,e.fillText(Je(e,re.trackName,K),H,B(te)),e.fillStyle=s.dimText,e.font=`${m?30:28}px ${se}`,e.fillText(Je(e,re.artistName,K),H,M(te));let Pe=l+p;e.fillStyle=s.text,e.font=`700 ${P}px ${se}`,e.textAlign="right",e.fillText(`${re.count}`,Pe,B(te)),e.fillStyle=s.dimText,e.font=`600 ${x}px ${se}`,e.letterSpacing="0.06em",e.fillText("PLAYS",Pe,M(te)),e.letterSpacing=j,e.textAlign="left"}if(u+=v.length*(S+z),m&&n.totalPlays>0){let G=v.reduce((Oe,de)=>Oe+de.count,0),re=Math.round(G/n.totalPlays*100);Ct(e,l-8,u+48,p+16,224,s);let Z=l+24,Pe=u+48;pr(e,"Top 5 share",Z,Pe+44,24,s.specChunkCapsLabelMuted??s.dimText),e.font=`28px ${se}`;let ie=e.measureText(`${ut(G)} plays`).width;e.font=`22px ${se}`;let J=e.measureText(`of ${ut(n.totalPlays)} total`).width,he=Math.max(ie,J),_e=l+p-16,Ie=Math.max(120,_e-he-yt-Z);e.fillStyle=s.text,e.font=`700 36px ${se}`,e.fillText(Je(e,`${re}% of all plays`,Ie),Z,Pe+114),e.fillStyle=s.mutedText,e.font=`28px ${se}`,e.textAlign="right",e.fillText(`${ut(G)} plays`,l+p-16,Pe+104),e.fillStyle=s.dimText,e.font=`22px ${se}`,e.fillText(`of ${ut(n.totalPlays)} total`,l+p-16,Pe+144),e.textAlign="left"}}async function bv(e,n,i,s,l,u,p,m){p=Jt(e,"This month I listened",u,p,s);let v=i==="story";p+=v?80:32;let y=Math.floor(n.totalDuration/36e5),S=v?380:320,w=v?96:80,P=p+Math.floor(S*.82);e.font=`900 ${S}px ${se}`;let x=e.measureText(`${y}`).width;e.fillStyle=Fe(s.accent),e.fillText(`${y}`,u,P),e.fillStyle=s.text,e.font=`700 ${w}px ${se}`;let L=e.measureText("hours").width,j=Math.max(8,m-x-L);e.fillText("hours",u+x+Math.min(24,j),P),p+=Math.floor(S*.74)+(v?56:36);let q=n.topArtists[0]?.artistName??"";if(q){e.fillStyle=s.mutedText,e.font=`40px ${se}`;let Le="Mostly to ",D=e.measureText(Le).width;e.fillText(Le,u,p),e.fillStyle=Fe(s.accent),e.font=`bold 40px ${se}`;let Re=Math.max(40,u+m-(u+D));e.fillText(Je(e,`${q}.`,Re),u+D,p),p+=72}if(!v)return;let I=Math.max(1,l??n.listeningDays??28),H=Math.round(y/24),K=Math.round(y*60/I),B=24,M=(m-B)/2,z=p+64,G=220,re=s.specMutedBody??s.mutedText,te=s.specChunkCapsLabelMuted??s.dimText,Z=32;Ct(e,u,z,M,G,s),Ct(e,u+M+B,z,M,G,s),pr(e,"Equivalent to",u+Z,z+44,24,te),e.fillStyle=s.text,e.font=`800 56px ${se}`,e.fillText(`${H} days`,u+Z,z+116),e.fillStyle=re,e.font=`26px ${se}`,e.fillText(Je(e,"of nonstop play",M-2*Z),u+Z,z+162);let Pe=u+M+B+Z;if(pr(e,"Daily average",Pe,z+44,24,te),e.fillStyle=s.text,e.font=`800 56px ${se}`,e.fillText(`${K} min`,Pe,z+116),e.fillStyle=re,e.font=`26px ${se}`,e.fillText(Je(e,`across ${ut(n.totalPlays)} plays`,M-2*Z),Pe,z+162),n.topArtists.length===0)return;let ie=z+G+28,J=Math.min(3,n.topArtists.length),he=82,_e=108+J*he;Ct(e,u-8,ie,m+16,_e,s);let Ie=u+24,Oe=s.specKickerMuted??s.mutedText;pr(e,"Top artists",Ie+8,ie+40,26,Oe);let de=ie+40+30+24;for(let Le=0;Le<J;Le++){let D=n.topArtists[Le],Re=Ie+36,me=64,ce=Ie+36+22;e.fillStyle=Fe(s.accent),e.font=`800 38px ${se}`,e.textAlign="right",e.fillText(`${Le+1}`,Re,de+42),e.textAlign="left",await Kr(e,D.imageUrl??void 0,ce,de,me,me/2)||Hr(e,ce,de,me,me/2);let N=ce+me+22,Y=`${ut(D.count)} plays`;e.font=`28px ${se}`,e.textAlign="right",e.fillStyle=s.dimText;let We=e.measureText(Y).width+24;e.textAlign="left";let Ne=Math.max(80,u+m-N-We);e.fillStyle=s.text,e.font=`600 36px ${se}`,e.fillText(Je(e,D.artistName,Ne),N,de+42),e.fillStyle=s.dimText,e.font=`28px ${se}`,e.textAlign="right",e.fillText(Y,u+m-24,de+42),e.textAlign="left",de+=he}}async function wv(e,n,i,s,l,u,p){let m=i==="story"?6:5,v=n.topGenres.slice(0,m);if(v.length===0)return;let y=v[0].count,S=v.reduce((de,Le)=>de+Le.count,0),w=S>0?Math.round(y/S*100):0;u=Jt(e,`I was ${w}% ${v[0].genre}`,l,u,s);let P=i==="story";u+=P?54:40;let x=P?36:32,L=P?36:28,j=P?320:300,q=P?120:100,I=P?72:64,H=P?40:36,K=Math.max(160,Math.min(j,p-q-I-yt-28)),B=s.specGenrePctMuted??s.mutedText;for(let de=0;de<v.length;de++){let Le=v[de],D=u+de*(x+L),Re=S>0?Le.count/S:0;e.fillStyle=s.text,e.font=`600 ${H}px ${se}`,e.fillText(Je(e,Le.genre,K),l,D+x-4);let me=l+K+yt,ce=Math.max(I,p-q-(me-l)-yt);e.fillStyle="rgba(255,255,255,0.1)",Cr(e,me,D,ce,x,x/2),e.fillStyle=Fe(s.accent,1-de*.13),Cr(e,me,D,ce*(Le.count/y),x,x/2),e.fillStyle=B,e.font=`600 ${P?34:32}px ${se}`,e.textAlign="right",e.fillText(`${Math.round(Re*100)}%`,l+p,D+x-4),e.textAlign="left"}if(u+=v.length*(x+L),!P||n.topTracks.length===0)return;u+=72;let M=v.slice(0,3),z=P?100:92,G=70+M.length*z;Ct(e,l-8,u,p+16,G,s);let re=s.specKickerMuted??s.mutedText;pr(e,"Genre leaders",l+24,u+48,26,re);let te=u+100,Z=200;e.font=`700 24px ${se}`;for(let de of M)Z=Math.max(Z,Math.ceil(e.measureText(de.genre.toUpperCase()).width)+24);let Pe=l+p-20;Z=Math.min(Z,Math.floor(p*.42));let ie=64,J=l+24+ie+yt,he=Math.max(100,Pe-Z-yt-J),_e=de=>de+30,Ie=de=>de+62,Oe=de=>de+44;for(let de=0;de<M.length;de++){let Le=M[de],D=n.topTracks[de];if(!D)break;await Kr(e,D.albumArt,l+24,te,ie,8)||Hr(e,l+24,te,ie,8),e.fillStyle=s.text,e.font=`600 32px ${se}`,e.fillText(Je(e,D.trackName,he),J,_e(te)),e.fillStyle=s.dimText,e.font=`24px ${se}`,e.fillText(Je(e,D.artistName,he),J,Ie(te)),e.fillStyle=Fe(s.accent),e.font=`700 24px ${se}`,e.textAlign="right",e.fillText(Le.genre.toUpperCase(),Pe,Oe(te)),e.textAlign="left",te+=z}}async function Sv(e,n,i,s,l,u,p){let m=n.streak??0,v=i==="story";u=Jt(e,`${m}-day streak`,l,u,s,!1,v?40:36),u+=v?54:32;let y=v?12:8,S=7,w=12,P=(n.dailyPlayCounts??[]).slice(-(y*S)),x=Math.max(1,...P.map(J=>J.count),1),L=Math.floor((p-w*(y-1))/y);for(let J=0;J<y;J++)for(let he=0;he<S;he++){let _e=J*S+he,Ie=P[_e]?.count??0,Oe=Math.min(1,Ie/x);e.fillStyle=Fe(s.accent,.08+Oe*.92),Cr(e,l+J*(L+w),u+he*(L+w),L,L,6)}u+=S*(L+w)+(v?48:24),e.fillStyle=s.mutedText,e.font=`${v?40:34}px ${se}`;let j="Listened every day for ";e.fillText(j,l,u);let q=e.measureText(j).width;if(e.fillStyle=s.text,e.font=`bold ${v?40:34}px ${se}`,e.fillText(Je(e,`${m} days.`,Math.max(24,l+p-l-q)),l+q,u),!v||P.length===0)return;u+=80;let I=P.reduce((J,he)=>J+he.count*3,0),H=P.length?Math.round(I/P.length):0,K=P[0];if(!K)return;let B=P.reduce((J,he)=>he.count>J.count?he:J,K),M=24,z=(p-M)/2,G=218;Ct(e,l,u,z,G,s),Ct(e,l+z+M,u,z,G,s);let re=s.specChunkCapsLabelMuted??s.dimText,te=s.specMutedBody??s.mutedText;pr(e,"Daily average",l+28,u+44,24,re),e.fillStyle=s.text,e.font=`800 56px ${se}`,e.fillText(`${H} min`,l+28,u+116),e.fillStyle=te,e.font=`26px ${se}`,e.fillText(Je(e,`over the last ${P.length} days`,z-56),l+28,u+162),pr(e,"Longest streak",l+z+M+28,u+44,24,re),e.fillStyle=Fe(s.accent),e.font=`800 56px ${se}`,e.fillText(`${m} days`,l+z+M+28,u+116),e.fillStyle=te,e.font=`26px ${se}`,e.fillText(Je(e,"your best run this year",z-56),l+z+M+28,u+162),u+=G+28,Ct(e,l-8,u,p+16,176,s),pr(e,"Best day",l+28,u+52,24,re),e.fillStyle=s.text,e.font=`700 36px ${se}`;let Z=fv(B.date),Pe=`${B.count} plays`;e.font=`800 36px ${se}`;let ie=e.measureText(Pe).width+yt;e.font=`700 36px ${se}`,e.fillText(Je(e,Z,Math.max(80,p-28-ie)),l+28,u+112),e.fillStyle=Fe(s.accent),e.font=`800 36px ${se}`,e.textAlign="right",e.fillText(Pe,l+p-16,u+114),e.textAlign="left"}async function xv(e,n,i,s,l,u,p,m){let v=n.topTracks[0];if(!v)return;let y=i==="story";u=Jt(e,"Most-played",l,u,s),u+=28;let S=y?940:500,w=Math.floor((m-S)/2);if(await Kr(e,v.albumArt,w,u,S,20)||Hr(e,w,u,S,20),u+=S+(y?60:36),e.textAlign="left",e.fillStyle=s.text,e.font=`800 ${y?96:64}px ${se}`,e.fillText(Je(e,v.trackName,p),l,u),u+=y?110:70,e.fillStyle=s.mutedText,e.font=`${y?44:32}px ${se}`,e.fillText(Je(e,`${v.artistName} \xB7 ${v.count} plays`,p),l,u),!y||n.totalPlays<=0)return;u+=76;let P=200;Ct(e,l-8,u,p+16,P,s);let x=l-8,j=(p+16)/3,q=u+54,I=Math.round(v.count/n.totalPlays*100),H=s.specChunkCapsLabelMuted??s.dimText,K=e.letterSpacing;e.fillStyle=H,e.font=`700 22px ${se}`,e.letterSpacing="0.08em",e.textAlign="center",e.fillText("PLAYS",x+j*.5,q),e.fillText("SHARE",x+j*1.5,q),e.fillText("RANK",x+j*2.5,q),e.letterSpacing=K,e.fillStyle=Fe(s.accent),e.font=`800 52px ${se}`,e.fillText(`${v.count}`,x+j*.5,q+86),e.fillStyle=s.text,e.fillText(`${I}%`,x+j*1.5,q+86),e.fillText("#1",x+j*2.5,q+86),e.textAlign="left",e.strokeStyle=s.chunkBorder,e.lineWidth=2,e.beginPath();let B=x+j,M=x+2*j;e.moveTo(B,u+28),e.lineTo(B,u+P-28),e.moveTo(M,u+28),e.lineTo(M,u+P-28),e.stroke()}async function kv(e,n,i,s,l,u,p,m,v){let y=i==="story",S=Math.floor(n.totalDuration/36e5),w=m?n.streak??0:0,P=n.topTracks.slice(0,y?5:3),x=n.topArtists.slice(0,y?3:0),L=n.topGenres.slice(0,3),j=L[0]?.count??1,q=L.reduce((ce,N)=>ce+N.count,0),I=pv(n.peakHour),H=s.specWrappedFootnoteMuted??s.dimText;u=Jt(e,"This month",l,u,s,!1,28),u+=16;let K=y?180:150,B=y?56:48,M=fr+16,z="",G="";m&&w>0&&(G=e.letterSpacing,e.font=`700 26px ${se}`,e.letterSpacing="0.08em",z=`${w}d streak`.toUpperCase(),M=Math.ceil(e.measureText(z).width*1.06)+yt+fr,e.letterSpacing=G);let re=m&&w>0?l+p-M:l+p,te=Math.max(100,re-l),Z=0,Pe=0,ie=16;for(let ce=0;ce<40&&(e.font=`900 ${K}px ${se}`,Z=e.measureText(`${S}`).width,e.font=`700 ${B}px ${se}`,Pe=e.measureText("hours").width,ie=Math.max(8,Math.min(16,te-Z-Pe)),!(Z+ie+Pe<=te+1));ce++)K>=B?K-=8:B-=2,K=Math.max(72,K),B=Math.max(30,B);let J=u+Math.floor(K*.82);e.font=`900 ${K}px ${se}`,e.fillStyle=Fe(s.accent),e.fillText(`${S}`,l,J),e.fillStyle=s.text,e.font=`700 ${B}px ${se}`,e.fillText("hours",l+Z+ie,J),m&&w>0&&z&&(e.fillStyle=Fe(s.accent),e.font=`700 26px ${se}`,e.textAlign="right",e.letterSpacing="0.08em",e.fillText(z,l+p,J),e.textAlign="left",e.letterSpacing=G),u=J+28,e.fillStyle=s.specWrappedMetaMuted??s.dimText,e.font=`28px ${se}`,e.fillText(Je(e,`${ut(n.totalPlays)} plays \xB7 ${n.uniqueArtistCount} artists \xB7 peak ${I}`,p),l,u),u+=16+(y?32:24);let he=l+24,_e=l+p-24,Ie=18,Oe=18,de=28,Le=y?56:52,D=54,Re=de+D+Ie+P.length*(Le+Oe)+de;Ct(e,l-8,u,p+16,Re,s);let me=u+de;me=Jt(e,"Top tracks",he,me,s,!1,26)+Ie;for(let ce=0;ce<P.length;ce++){let N=P[ce],Y=me+ce*(Le+Oe),We=he+32,Ne=he+32+Ie,Ke=Ne+Le+Ie,Ve=Y+Math.round(Le*.36),Ze=Y+Math.round(Le*.8);e.fillStyle=Fe(s.accent),e.font=`800 32px ${se}`,e.textAlign="right",e.fillText(`${ce+1}`,We,Ve),e.textAlign="left",await Kr(e,N.albumArt,Ne,Y,Le,6)||Hr(e,Ne,Y,Le,6);let Be=`${N.count}`;e.font=`22px ${se}`;let et=e.measureText(Be).width,O=Math.max(40,_e-Ke-et-yt);e.fillStyle=s.text,e.font=`600 30px ${se}`,e.fillText(Je(e,N.trackName,O),Ke,Ve),e.fillStyle=s.dimText,e.font=`22px ${se}`,e.fillText(Je(e,N.artistName,O),Ke,Ze),e.fillStyle="rgba(255,255,255,0.45)",e.textAlign="right",e.fillText(Be,_e,Ve),e.textAlign="left"}if(u+=Re+Oe,y&&x.length>0){let N=de+D+Ie+x.length*(64+Oe)+de;Ct(e,l-8,u,p+16,N,s),me=u+de,me=Jt(e,"Top artists",he,me,s,!1,26)+Ie;for(let Y=0;Y<x.length;Y++){let We=x[Y],Ne=me+Y*(64+Oe),Ke=he+32,Ve=he+32+Ie,Ze=Ve+64+Ie,Be=Ne+64/2+10;e.fillStyle=Fe(s.accent),e.font=`800 32px ${se}`,e.textAlign="right",e.fillText(`${Y+1}`,Ke,Be),e.textAlign="left",await Kr(e,We.imageUrl,Ve,Ne,64,64/2)||Hr(e,Ve,Ne,64,64/2),e.fillStyle=s.dimText,e.font=`22px ${se}`;let et=`${We.count} plays`,O=e.measureText(et).width+yt;e.fillStyle=s.text,e.font=`600 30px ${se}`,e.fillText(Je(e,We.artistName,Math.max(48,_e-Ze-O)),Ze,Be-2),e.fillStyle=s.dimText,e.font=`22px ${se}`,e.fillText(et,Ze,Be+28)}u+=N+Oe}if(L.length>0){let ce=_e-he,N=Math.max(120,Math.min(y?240:220,ce-yt-120-yt-72)),Y=16,We=56,Ne=de+D+Ie+L.length*(We+Y)+de;Ct(e,l-8,u,p+16,Ne,s),me=u+de,me=Jt(e,"Top genres",he,me,s,!1,26)+Ie;for(let Ke=0;Ke<L.length;Ke++){let Ve=L[Ke],Ze=q>0?Ve.count/q:0,Be=me+Ke*(We+Y),et=`${Math.round(Ze*100)}%`;e.font=`600 24px ${se}`;let O=e.measureText(et).width+yt;e.font=`600 28px ${se}`;let X=he+N+Ie,pe=Math.max(48,_e-X-O-yt);e.fillStyle=s.text,e.font=`600 28px ${se}`,e.fillText(Je(e,Ve.genre,N),he,Be+38);let ke=16;e.fillStyle="rgba(255,255,255,0.08)",Cr(e,X,Be+22,pe,ke,ke/2),e.fillStyle=Fe(s.accent,1-Ke*.18),Cr(e,X,Be+22,pe*(Ve.count/j),ke,ke/2),e.fillStyle=s.specGenrePctMuted??s.dimText,e.font=`600 24px ${se}`,e.textAlign="right",e.fillText(et,_e,Be+38),e.textAlign="left"}u+=Ne+Oe}if(v){u+=Oe+16,e.fillStyle=H,e.font=`22px ${se}`,e.textAlign="center";let ce=Math.max(80,p-72),N=Je(e,v,ce);e.fillText(N,l+p/2,u),e.textAlign="left"}}function Ct(e,n,i,s,l,u){e.fillStyle=u.chunkBg,Cr(e,n,i,s,l,20),e.strokeStyle=u.chunkBorder,e.lineWidth=2,ms(e,n,i,s,l,20),e.stroke()}async function Ev(e,n,i,s,l,u){let p=av[i],m=p.width,v=p.height,y=document.createElement("canvas");y.width=m,y.height=v;let S=y.getContext("2d");if(!S)throw new Error("Canvas 2D context unavailable");let w=uv(!!u?.followTheme),x=(u?.activeProviderId??"local")==="local",L=!x&&n==="streak"?"top5":n,j=L==="wrapped",q=l?`@${l} \xB7 ${s}`:s;mv(S,m,v,w),hv(S,m,q,w),j||gv(S,m,v,q,w);let I=Math.max(1,u?.periodDayCount??e.listeningDays??28),H=fr,K=j?130:180,B=j?120:140,M=v-K-B,z=vv(L,i),G=Math.max(0,M-z),te=K+Math.floor(G*(j?.4:.35)),Z=m-fr*2;switch(L){case"top5":await yv(S,e,i,w,H,te,Z);break;case"time":await bv(S,e,i,w,I,H,te,Z);break;case"genre":await wv(S,e,i,w,H,te,Z);break;case"streak":await Sv(S,e,i,w,H,te,Z);break;case"throwback":await xv(S,e,i,w,H,te,Z,m);break;case"wrapped":await kv(S,e,i,w,H,te,Z,x,q);break}return y}async function hs(e,n,i,s,l,u){let p=await Ev(e,n,i,s,l,u);return new Promise((m,v)=>{p.toBlob(y=>{if(!y){v(new Error("PNG blob creation failed"));return}m(y)},"image/png")})}async function Tv(e,n,i,s,l,u){let p=await hs(e,n,i,s,l,u),m=URL.createObjectURL(p),v=document.createElement("a");v.href=m,v.download="listening-stats-share.png",v.click(),URL.revokeObjectURL(m)}async function Av(e,n,i,s,l,u){let p=await hs(e,n,i,s,l,u);if(!navigator.clipboard?.write)throw new Error("Clipboard API not available");await navigator.clipboard.write([new ClipboardItem({"image/png":p})])}var{useCallback:Pv}=Spicetify.React;function fu({version:e,onOpenUpdates:n,onPrefsChanged:i,onReceiveBetaUpdatesChanged:s}){let l=Spicetify.ReactComponent.Toggle,u=at(),p=Pv(m=>{Ue("receiveBetaUpdates",m),window.dispatchEvent(new CustomEvent(xe.PREFS_CHANGED)),i(),s?.()},[i,s]);return Spicetify.React.createElement("div",{className:"settings-about"},Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Listening Stats"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Version ",e))),Spicetify.React.createElement("div",{className:"settings-row settings-about-beta-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Prereleases"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Same setting as in the updates window - affects version checks and which install command is copied there.")),l?Spicetify.React.createElement(l,{value:u.receiveBetaUpdates,onSelected:p}):Spicetify.React.createElement("input",{type:"checkbox",checked:u.receiveBetaUpdates,onChange:m=>p(m.currentTarget.checked)})),Spicetify.React.createElement("p",{className:"settings-about-short-lead"},"Changelog, install commands, and release checks are in ",Spicetify.React.createElement("strong",null,"Check for updates")," ","(footer or below)."),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-check-updates",onClick:n},"Check for updates\u2026"),Spicetify.React.createElement("p",{className:"settings-about-hint"},"Source:"," ",Spicetify.React.createElement("a",{className:"settings-inline-link",href:qt,target:"_blank",rel:"noopener noreferrer"},qt.replace("https://",""))))}var mu="listening-stats-lastfm-cache",mr="charts";function hu(e,n){return`tracks:${e}:${n}`}function gu(e,n){return`artists:${e}:${n}`}function gs(){return new Promise((e,n)=>{let i=indexedDB.open(mu,1);i.onupgradeneeded=()=>{let s=i.result;s.objectStoreNames.contains(mr)||s.createObjectStore(mr,{keyPath:"key"})},i.onsuccess=()=>e(i.result),i.onerror=()=>n(i.error)})}var vs=class{constructor(n=600*1e3){this.ttlMs=n}async get(n){try{let i=await gs(),s=await new Promise((l,u)=>{let v=i.transaction(mr,"readonly").objectStore(mr).get(n);v.onsuccess=()=>l(v.result),v.onerror=()=>u(v.error)});return i.close(),!s||Date.now()>s.expiry?null:s.data}catch{return null}}async set(n,i){try{let s=await gs(),l={key:n,data:i,expiry:Date.now()+this.ttlMs};await new Promise((u,p)=>{let y=s.transaction(mr,"readwrite").objectStore(mr).put(l);y.onsuccess=()=>u(),y.onerror=()=>p(y.error)}),s.close()}catch{}}async invalidate(){try{let n=await gs();await new Promise((i,s)=>{let p=n.transaction(mr,"readwrite").objectStore(mr).clear();p.onsuccess=()=>i(),p.onerror=()=>s(p.error)}),n.close()}catch{}}async deleteDatabase(){try{await new Promise((n,i)=>{let s=indexedDB.deleteDatabase(mu);s.onsuccess=()=>n(),s.onerror=()=>i(s.error),s.onblocked=()=>n()})}catch{}}},hr=new vs;async function Rv(e){let i=new TextEncoder().encode(e.toLowerCase()),s=await globalThis.crypto.subtle.digest("SHA-256",i);return Array.from(new Uint8Array(s)).map(u=>u.toString(16).padStart(2,"0")).join("").slice(0,12)}async function ys(e,n,i){let s=e+n+i,l=await Rv(s);return{trackUri:`listening-stats:track:${l}`,artistUri:`listening-stats:artist:${l}`,albumUri:`listening-stats:album:${l}`}}var Nv=2e3,Cv=1e3;function Iv(e){return new Promise(n=>setTimeout(n,e))}async function vu(e){let i=(await Xe.playEvents.where("trackUri").startsWith("listening-stats:").toArray()).filter(u=>u.resolvedAt===null||u.resolvedAt===void 0);if(i.length===0)return;let s=[...new Set(i.map(u=>u.trackUri))],l=new Map;for(let u of i)l.has(u.trackUri)||l.set(u.trackUri,{trackName:u.trackName,artistName:u.artistName});for(let u of s){if(lr.isOpen())break;let p=l.get(u);if(!p)continue;let{trackName:m,artistName:v}=p,S=`https://api.spotify.com/v1/search?q=${encodeURIComponent(`track:${m} artist:${v}`)}&type=track&limit=5`,w=await ti(S);if(w.ok){let x=w.data.tracks.items.find(L=>L.name.toLowerCase()===m.toLowerCase()&&L.artists[0]?.name.toLowerCase()===v.toLowerCase());x?await Xe.playEvents.where("trackUri").equals(u).modify({trackUri:`spotify:track:${x.id}`,artistUri:`spotify:artist:${x.artists[0].id}`,albumUri:`spotify:album:${x.album.id}`,albumArt:x.album.images[0]?.url??null,resolvedAt:Date.now()}):await Xe.playEvents.where("trackUri").equals(u).modify({resolvedAt:0})}else{if(w.error.type==="rate_limited"||w.error.type==="circuit_open")break;await Xe.playEvents.where("trackUri").equals(u).modify({resolvedAt:0})}await Iv(e?.delayMs??Nv+Math.random()*Cv)}}var _v="Track,Artist,Album,Duration (ms),Played (ms),Started At,Ended At",Gr=10;function Dv(e){let n=[],i="",s=!1;for(let l=0;l<e.length;l++){let u=e[l];u==='"'?s&&e[l+1]==='"'?(i+='"',l++):s=!s:u===","&&!s?(n.push(i),i=""):i+=u}return n.push(i),n}async function yu(e){let n=e.split(`
`).map(m=>m.trim()).filter(m=>m.length>0);if(n.length===0)return{events:[],errors:0,errorDetails:[]};let i=n[0];if(i!==_v)throw i.startsWith("Period,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Raw History (CSV)" in v1 to get importable data.'):i.startsWith("Rank,")?new Error('Import failed: this is a stats summary CSV, not a raw history export. Use "Raw History (CSV)" in v1 to get importable data.'):new Error(`Import failed: unrecognized CSV format (expected v1 export). Got: "${i.slice(0,60)}"`);let s=[],l=0,u=[],p=n.slice(1);for(let m=0;m<p.length;m++){let v=m+2,y=p[m],S=Dv(y);if(S.length<7){l++,u.length<Gr&&u.push(`Row ${v}: expected 7 fields, got ${S.length}`);continue}let[w,P,x,L,j,q,I]=S,H=parseInt(L,10),K=parseInt(j,10),B=new Date(q).getTime(),M=new Date(I).getTime();if(Number.isNaN(H)||Number.isNaN(K)){l++,u.length<Gr&&u.push(`Row ${v}: invalid numeric field (duration or played ms)`);continue}if(!Number.isFinite(B)||Number.isNaN(B)||B<=0){l++,u.length<Gr&&u.push(`Row ${v}: invalid timestamp (Started At: "${q}")`);continue}if(!Number.isFinite(M)||Number.isNaN(M)||M<=0){l++,u.length<Gr&&u.push(`Row ${v}: invalid timestamp (Ended At: "${I}")`);continue}let z=await ys(w,P,x);s.push({trackName:w,artistName:P,albumName:x,durationMs:H,playedMs:K,startedAt:B,endedAt:M,type:"play",...z})}return{events:s,errors:l,errorDetails:u}}async function bu(e){let n;try{n=JSON.parse(e)}catch{throw new Error("Import failed: file is not valid JSON")}if(!Array.isArray(n))throw typeof n=="object"&&n!==null&&"topTracks"in n?new Error("Import failed: JSON must be a raw play events array, not a stats export"):new Error("Import failed: JSON must be a raw play events array, not a stats export");let i=[],s=0,l=[];for(let u=0;u<n.length;u++){let p=n[u],m=u+1;if(typeof p.trackName!="string"||typeof p.artistName!="string"||typeof p.startedAt!="number"||typeof p.endedAt!="number"||typeof p.durationMs!="number"||typeof p.playedMs!="number"){s++,l.length<Gr&&l.push(`Row ${m}: missing required field(s)`);continue}let v=p.trackName,y=p.artistName,S=typeof p.albumName=="string"?p.albumName:"",w=p.durationMs,P=p.playedMs,x=p.startedAt,L=p.endedAt,j,q,I;if(typeof p.trackUri=="string"&&p.trackUri)j=p.trackUri,q=typeof p.artistUri=="string"?p.artistUri:"",I=typeof p.albumUri=="string"?p.albumUri:"";else{let K=await ys(v,y,S);j=K.trackUri,q=K.artistUri,I=K.albumUri}let H={trackName:v,artistName:y,albumName:S,durationMs:w,playedMs:P,startedAt:x,endedAt:L,trackUri:j,artistUri:q,albumUri:I,type:"play"};typeof p.albumArt=="string"&&p.albumArt&&(H.albumArt=p.albumArt),i.push(H)}return{events:i,errors:s,errorDetails:l}}async function wu(e){if(e.length===0)return{imported:0,skipped:0,errors:0,errorDetails:[]};let n=e.map(v=>v.startedAt),i=await Xe.playEvents.where("startedAt").anyOf(n).toArray(),s=new Set(i.map(v=>`${v.startedAt}:${v.trackName}`)),l=[],u=0;for(let v of e){let y=`${v.startedAt}:${v.trackName}`;s.has(y)?u++:(l.push(v),s.add(y))}let p=0,m=[];if(l.length>0)try{await Xe.playEvents.bulkAdd(l)}catch(v){if(v!==null&&typeof v=="object"&&"failures"in v&&v.failures!==null&&typeof v.failures=="object"){let y=v.failures;p=Object.keys(y).length,m.length<Gr&&m.push(`bulkAdd: ${p} item(s) failed to insert`)}else throw v}return l.length-p>0&&vu().catch(v=>{console.warn("[listening-stats] URI resolution error:",v)}),{imported:l.length-p,skipped:u,errors:p,errorDetails:m}}var{useState:_i,useRef:Ov}=Spicetify.React;function Su({onRefresh:e}){let[n,i]=_i(!1),[s,l]=_i("idle"),[u,p]=_i({current:0,total:0}),[m,v]=_i(null),y=Ov(null),S=()=>{Ge.invalidate(),e(),Spicetify.showNotification("Stats refreshed")},w=async I=>{let H=I.target.files?.[0];if(!H)return;y.current&&(y.current.value="");let K=H.name.endsWith(".csv"),B=H.name.endsWith(".json");if(!K&&!B){Spicetify.showNotification("Unsupported file type. Use .csv or .json.",!0);return}l("importing"),p({current:0,total:0});try{let M=await H.text(),z;if(K?z=await yu(M):z=await bu(M),z.events.length===0&&z.errors===0){Spicetify.showNotification("Import failed: file contains no events",!0),l("idle");return}p({current:0,total:z.events.length});let G=500,re=0,te=0,Z=z.errors,Pe=[...z.errorDetails];for(let ie=0;ie<z.events.length;ie+=G){let J=z.events.slice(ie,ie+G),he=await wu(J);re+=he.imported,te+=he.skipped,Z+=he.errors,Pe=Pe.concat(he.errorDetails),p({current:Math.min(ie+G,z.events.length),total:z.events.length}),await new Promise(_e=>setTimeout(_e,0))}Ge.invalidate(),window.dispatchEvent(new CustomEvent(xe.PLAY_RECORDED)),v({imported:re,skipped:te,errors:Z,errorDetails:Pe.slice(0,10)}),l("complete")}catch(M){let z=M instanceof Error?M.message:"Unknown import error";Spicetify.showNotification(z,!0),l("idle"),console.error("[DataTab] Import error:",M)}},P=()=>{l("idle"),v(null)},x=async()=>{try{let I=Pt[4],H=await De.getActive()?.calculateStats(I);if(!H){Spicetify.showNotification("No active provider",!0);return}ds(JSON.stringify(H,null,2),"listening-stats.json","application/json")}catch(I){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export JSON error:",I)}},L=async()=>{try{let I=Pt[4],H=await De.getActive()?.calculateStats(I);if(!H){Spicetify.showNotification("No active provider",!0);return}let K=`Rank,Track,Artist,Album,Plays,Duration
`,B=H.topTracks.map(M=>`${M.rank},"${M.trackName.replace(/"/g,'""')}","${M.artistName.replace(/"/g,'""')}","${M.albumName.replace(/"/g,'""')}",${M.count},${M.durationMs}`).join(`
`);ds(K+B,"listening-stats.csv","text/csv")}catch(I){Spicetify.showNotification("Export failed. Check console.",!0),console.error("[DataTab] Export CSV error:",I)}},j=async()=>{try{let I={trackUri:"spotify:track:test",trackName:"Test Track",artistName:"Test Artist",artistUri:"spotify:artist:test",albumName:"Test Album",albumUri:"spotify:album:test",durationMs:3e4,playedMs:3e4,startedAt:Date.now(),endedAt:Date.now(),type:"play"},H=await Xe.playEvents.add(I);await Xe.playEvents.delete(H),Spicetify.showNotification("Write test passed")}catch(I){Spicetify.showNotification("Write test failed. Check console.",!0),console.error("[DataTab] Test write error:",I)}},q=async()=>{try{await Xe.delete(),Ge.invalidate(),await hr.deleteDatabase(),localStorage.clear(),sessionStorage.clear(),Spicetify.showNotification("All data wiped"),i(!1),window.location.reload()}catch(I){Spicetify.showNotification("Wipe failed. Check console.",!0),console.error("[DataTab] Wipe error:",I)}};return Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},Spicetify.React.createElement("input",{ref:y,type:"file",accept:".csv,.json",style:{display:"none"},onChange:w,"aria-label":"Import play history file"}),s==="idle"&&Spicetify.React.createElement("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"}},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Import play history"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Accepts .csv or .json from a v1 export")),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>y.current?.click()},"Import Data")),s==="importing"&&Spicetify.React.createElement("div",{className:"import-progress"},Spicetify.React.createElement("span",{className:"import-progress-label"},"Importing... ",u.current," / ",u.total),Spicetify.React.createElement("progress",{className:"import-progress-bar",value:u.current,max:u.total})),s==="complete"&&m&&Spicetify.React.createElement("div",{className:"import-result-card"},Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--success"},m.imported),Spicetify.React.createElement("span",{className:"import-result-label"},"imported")),Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--neutral"},m.skipped),Spicetify.React.createElement("span",{className:"import-result-label"},"skipped as duplicates")),m.errors>0&&Spicetify.React.createElement("div",{className:"import-result-row"},Spicetify.React.createElement("span",{className:"import-result-count import-result-count--error"},m.errors),Spicetify.React.createElement("span",{className:"import-result-label"},"errors")),m.errors>0&&m.errorDetails.length>0&&Spicetify.React.createElement("div",{className:"import-result-errors"},m.errorDetails.slice(0,3).map((I,H)=>Spicetify.React.createElement("div",{key:H,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}},I.length>80?`${I.slice(0,80)}\u2026`:I))),Spicetify.React.createElement("div",{className:"import-result-actions"},Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:P},"Dismiss Results")))),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Refresh statistics cache"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:S},"Refresh Stats")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Export data as JSON"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:x},"Export JSON")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Export top tracks as CSV"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:L},"Export CSV")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Test IndexedDB write"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Verify database write access")),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:j},"Test Write")),Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"flex-start",gap:"12px"}},n?Spicetify.React.createElement("div",{style:{width:"100%"}},Spicetify.React.createElement("p",{style:{fontSize:"var(--font-size-sm, 14px)",color:"var(--spice-text)",marginBottom:"12px"}},"This permanently deletes all play history and cannot be undone. Are you sure?"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px"}},Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:q},"Delete Everything"),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:()=>i(!1)},"Keep My Data"))):Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:()=>i(!0)},"Wipe All Data")))}var{useState:Lv,useRef:bn,useEffect:xu,useCallback:Qt}=Spicetify.React,$v=8;function wn(e){let{order:n,onReorder:i}=e,s=e.orientation??"vertical",[l,u]=Lv({isDragging:!1,activeId:null,dropSlotIndex:null}),p=bn(null),m=bn(0),v=bn(0),y=bn(new Map),S=bn(n);xu(()=>{S.current=n},[n]);let w=Qt((B,M)=>{M?y.current.set(B,M):y.current.delete(B)},[]),P=Qt((B,M)=>{let z=S.current;if(s==="grid"){for(let G=0;G<z.length;G++){let re=y.current.get(z[G]);if(!re)continue;let te=re.getBoundingClientRect();if(B>=te.left&&B<=te.right&&M>=te.top&&M<=te.bottom){let Z=(te.left+te.right)/2;return B<Z?G:G+1}}return z.length-1}for(let G=0;G<z.length;G++){let re=y.current.get(z[G]);if(!re)continue;let te=re.getBoundingClientRect();if(s==="horizontal"){let Z=(te.left+te.right)/2;if(B<Z)return G}else{let Z=(te.top+te.bottom)/2;if(M<Z)return G}}return z.length-1},[s]),x=Qt(()=>{p.current=null,m.current=0,v.current=0,u({isDragging:!1,activeId:null,dropSlotIndex:null})},[]),L=Qt(B=>{if(!p.current)return;let M=B.clientX-p.current.x,z=B.clientY-p.current.y;m.current=M,v.current=z,u(G=>{let re=Math.hypot(M,z);return G.isDragging?{...G,dropSlotIndex:P(B.clientX,B.clientY)}:re<$v?G:{isDragging:!0,activeId:G.activeId,dropSlotIndex:P(B.clientX,B.clientY)}})},[P]),j=Qt(()=>{u(B=>{if(B.isDragging&&B.activeId&&B.dropSlotIndex!=null){let M=S.current,z=M.indexOf(B.activeId);if(z>=0&&z!==B.dropSlotIndex){let G=[...M],[re]=G.splice(z,1);G.splice(B.dropSlotIndex,0,re),i(G)}}return{isDragging:!1,activeId:null,dropSlotIndex:null}}),p.current=null,m.current=0,v.current=0},[i]),q=Qt(()=>x(),[x]),I=Qt(B=>{B.key==="Escape"&&x()},[x]);xu(()=>(window.addEventListener("pointermove",L),window.addEventListener("pointerup",j),window.addEventListener("pointercancel",q),window.addEventListener("keydown",I),()=>{window.removeEventListener("pointermove",L),window.removeEventListener("pointerup",j),window.removeEventListener("pointercancel",q),window.removeEventListener("keydown",I)}),[L,j,q,I]);let H=Qt(B=>M=>{S.current.includes(B)&&(p.current={x:M.clientX,y:M.clientY},m.current=0,v.current=0,u({isDragging:!1,activeId:B,dropSlotIndex:null}))},[]),K=Qt(B=>{if(!l.isDragging||l.activeId!==B)return;let M;return s==="horizontal"?M=`translate3d(${m.current}px, 0, 0)`:s==="grid"?M=`translate3d(${m.current}px, ${v.current}px, 0)`:M=`translate3d(0, ${v.current}px, 0)`,{transform:M,opacity:.4}},[l.isDragging,l.activeId,s]);return{dragState:l,onItemPointerDown:H,registerItem:w,getItemStyle:K}}var{React:sS}=Spicetify;function ku({id:e,label:n,dragHandleProps:i,style:s,children:l}){return Spicetify.React.createElement("div",{className:"sortable-row","data-row-id":e,style:s},Spicetify.React.createElement("button",{type:"button",className:"settings-drag-handle","aria-label":`Drag ${n}`,onPointerDown:u=>i.onPointerDown(u.nativeEvent),dangerouslySetInnerHTML:{__html:Yc}}),Spicetify.React.createElement("div",{className:"sortable-row-label"},n),Spicetify.React.createElement("div",{className:"sortable-row-toggle"},l))}var{React:lS}=Spicetify;function Eu({id:e,label:n,tileDragProps:i,style:s,children:l}){return Spicetify.React.createElement("div",{className:"sortable-tile","data-tile-id":e,style:s,onPointerDown:p=>i.onPointerDown(p.nativeEvent)},Spicetify.React.createElement("div",{className:"sortable-tile-label"},n),Spicetify.React.createElement("div",{className:"sortable-tile-toggle",onPointerDown:p=>p.stopPropagation()},l))}var{useState:bs,useRef:Mv,useCallback:Sn,useEffect:Bv}=Spicetify.React,Uv={overview:"Overview","top-genres":"Top Genres","top-lists":"Top Lists",activity:"Activity",consistency:"Consistency","recently-played":"Recently Played"},zv=[3,5,10];function Tu({onPrefsChanged:e,onRestartTour:n,announcementDismissKey:i=null}){let[s,l]=bs(()=>at()),[u,p]=bs(null),m=Mv(new Map),v=Sn(()=>{e(),window.dispatchEvent(new CustomEvent(xe.PREFS_CHANGED))},[e]),y=D=>{Ue("itemsPerSection",D),l({...s,itemsPerSection:D}),v()},S=D=>{Ue("playCountVariant",D),l({...s,playCountVariant:D}),v()},w=D=>{Ue("use24HourTime",D),l({...s,use24HourTime:D}),v()},P=D=>{D?(Ue("showAnnouncementBanner",!0),Ue("announcementBannerHiddenForDismissKey","")):(Ue("showAnnouncementBanner",!1),Ue("announcementBannerHiddenForDismissKey",i??"")),l(at()),v()},x=()=>{p({hiddenSections:[...s.hiddenSections],sectionOrder:[...s.sectionOrder],columnOrder:[...s.columnOrder],overviewOrder:{local:[...s.overviewOrder.local],statsfm:[...s.overviewOrder.statsfm]}});let D=[...vn],Re=[...bi],me={local:[...Rr.local],statsfm:[...Rr.statsfm]};Ue("hiddenSections",[]),Ue("sectionOrder",D),Ue("columnOrder",Re),Ue("overviewOrder",me),l(ce=>({...ce,hiddenSections:[],sectionOrder:D,columnOrder:Re,overviewOrder:me})),v()},L=()=>{u&&(Ue("hiddenSections",u.hiddenSections),Ue("sectionOrder",u.sectionOrder),Ue("columnOrder",u.columnOrder),Ue("overviewOrder",u.overviewOrder),l(D=>({...D,hiddenSections:u.hiddenSections,sectionOrder:u.sectionOrder,columnOrder:u.columnOrder,overviewOrder:u.overviewOrder})),p(null),v())},j=(D,Re)=>{let me=Re?s.hiddenSections.filter(ce=>ce!==D):[...s.hiddenSections,D];Ue("hiddenSections",me),l({...s,hiddenSections:me}),v()},q=Sn(D=>{let Re=s.sectionOrder.filter(ce=>!D.includes(ce)),me=[...D,...Re];Ue("sectionOrder",me),l(ce=>({...ce,sectionOrder:me})),v()},[s.sectionOrder,v]),[I,H]=bs(()=>De.getActiveId()==="statsfm"?"statsfm":"local"),K=De.getActive()?.getProviderInfo().capabilities??{hasActivityData:!0,hasConsistencyData:!1,hasGenreData:!0,hasStreakData:!0,hasSkipRate:!1,tier:"n/a"},B=new Set(vn),M=new Set(vi(K).map(D=>D.id)),z=s.sectionOrder.filter(D=>B.has(D)&&M.has(D)),G=wn({order:z,onReorder:q});Bv(()=>{let D=()=>{let Re=De.getActiveId();H(Re==="statsfm"?"statsfm":"local")};return window.addEventListener(xe.PROVIDER_CHANGED,D),()=>window.removeEventListener(xe.PROVIDER_CHANGED,D)},[]);let re=s.overviewOrder[I],te=re.slice(0,4),Z=re.slice(4),Pe=Sn(D=>{let Re=[...D,...s.overviewOrder[I].slice(4)],me={...s.overviewOrder,[I]:Re};Ue("overviewOrder",me),l(ce=>({...ce,overviewOrder:me})),v()},[s.overviewOrder,I,v]),ie=wn({order:te,orientation:"grid",onReorder:Pe}),J=Sn(D=>{let Re=[...s.overviewOrder[I].slice(0,4),...D],me={...s.overviewOrder,[I]:Re};Ue("overviewOrder",me),l(ce=>({...ce,overviewOrder:me})),v()},[s.overviewOrder,I,v]),he=wn({order:Z,orientation:"horizontal",onReorder:J}),_e=Sn(D=>{Ue("columnOrder",D),l(Re=>({...Re,columnOrder:D})),v()},[v]),Ie=wn({order:s.columnOrder,orientation:"horizontal",onReorder:_e}),Oe=s.hiddenSections.includes("top-lists"),de=Spicetify.ReactComponent.Toggle,Le=(D,Re,me,ce)=>{let N=!s.hiddenSections.includes(D),Y=Re[D]??D,We=me.dragState.isDragging&&me.dragState.dropSlotIndex!=null&&ce[me.dragState.dropSlotIndex]===D&&me.dragState.activeId!==D;return Spicetify.React.createElement("div",{key:D,ref:Ne=>me.registerItem(D,Ne),style:We?{outline:"2px solid var(--spice-button-active)",outlineOffset:"-2px",borderRadius:"6px"}:void 0},Spicetify.React.createElement(Eu,{id:D,label:Y,tileDragProps:{onPointerDown:me.onItemPointerDown(D)},style:me.getItemStyle(D)},de?Spicetify.React.createElement(de,{value:N,onSelected:Ne=>j(D,Ne)}):Spicetify.React.createElement("input",{type:"checkbox",checked:N,onChange:Ne=>j(D,Ne.currentTarget.checked)})))};return Spicetify.React.createElement("div",{className:"display-tab"},Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-label"},"Items per section"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px"}},zv.map(D=>Spicetify.React.createElement("button",{key:D,type:"button",className:s.itemsPerSection===D?"btn-primary":"btn-secondary",onClick:()=>y(D),style:{padding:"4px 12px",minWidth:"40px"}},D)))),u&&Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",{className:"settings-sublabel"},"Layout reset to defaults"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"undo-reset-layout",onClick:L,style:{padding:"4px 12px"}},"Undo")),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"24-hour time"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Show timestamps in 24-hour format")),de?Spicetify.React.createElement(de,{value:s.use24HourTime,onSelected:w}):Spicetify.React.createElement("input",{type:"checkbox",checked:s.use24HourTime,onChange:D=>w(D.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Announcement banner"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Show the banner when one is available (GitHub or version splash). Turning off hides it until the announcement changes or you turn this back on.")),de?Spicetify.React.createElement(de,{value:s.showAnnouncementBanner,onSelected:P}):Spicetify.React.createElement("input",{type:"checkbox",checked:s.showAnnouncementBanner,onChange:D=>P(D.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Playbar play count"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Widget style for now-playing track count")),Spicetify.React.createElement("div",{"data-testid":"play-count-variant",style:{display:"flex",gap:"8px"}},["pill","bubble","minimal"].map(D=>Spicetify.React.createElement("button",{key:D,type:"button",className:s.playCountVariant===D?"btn-primary":"btn-secondary",onClick:()=>S(D),style:{padding:"4px 12px",minWidth:"40px"}},D.charAt(0).toUpperCase()+D.slice(1))))),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Layout"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Reset section and card arrangement to defaults")),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"reset-layout",onClick:x,style:{padding:"4px 12px"}},"Reset layout")),Spicetify.React.createElement("div",{style:{marginTop:"4px"},"data-drag-active":G.dragState.isDragging?"true":"false"},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Visible sections"),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":G.dragState.isDragging&&G.dragState.dropSlotIndex===0?"true":"false"}),z.map((D,Re)=>{let me=!s.hiddenSections.includes(D),ce=Uv[D]??D;return Spicetify.React.createElement(Spicetify.React.Fragment,{key:D},Spicetify.React.createElement("div",{ref:N=>{N?m.current.set(D,N):m.current.delete(D),G.registerItem(D,N)}},Spicetify.React.createElement(ku,{id:D,label:ce,dragHandleProps:{onPointerDown:G.onItemPointerDown(D)},style:G.getItemStyle(D)},de?Spicetify.React.createElement(de,{value:me,onSelected:N=>j(D,N)}):Spicetify.React.createElement("input",{type:"checkbox",checked:me,onChange:N=>j(D,N.currentTarget.checked)}))),Spicetify.React.createElement("div",{className:"settings-drop-line","data-active":G.dragState.isDragging&&G.dragState.dropSlotIndex===Re+1?"true":"false"}))})),Spicetify.React.createElement("div",{style:{marginTop:"16px"},key:I},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Overview details"),Spicetify.React.createElement("div",{className:"overview-settings-top"},Spicetify.React.createElement("div",{className:"overview-settings-hero","data-testid":"overview-settings-hero"},Spicetify.React.createElement("div",{className:"sortable-tile-label"},"Total Time"),Spicetify.React.createElement("div",{className:"overview-settings-hero-sub"},"Fixed")),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--2x2"},te.map(D=>Le(D,yn,ie,te)))),Z.length>0&&Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3","data-testid":"overview-bottom-row"},Z.map(D=>Le(D,yn,he,Z)))),Spicetify.React.createElement("div",{"data-testid":"top-lists-columns-subsection",style:{marginTop:"16px",opacity:Oe?.4:1,pointerEvents:Oe?"none":"auto"}},Spicetify.React.createElement("div",{className:"settings-label",style:{padding:"12px 0 4px"}},"Top Lists columns"),Oe&&Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"4px"}},"Top Lists is hidden. Re-enable it above to manage individual columns."),Spicetify.React.createElement("div",{className:"sortable-grid sortable-grid--1x3"},s.columnOrder.map(D=>Le(D,$c,Ie,s.columnOrder)))),n&&Spicetify.React.createElement("div",{className:"settings-row",style:{marginTop:"16px"}},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Guided tour"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Walk through dashboard features")),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary","data-testid":"restart-tour",onClick:n,style:{padding:"4px 12px"}},"Restart")))}var Fv="https://ws.audioscrobbler.com/2.0/",Wv={us:"united states",gb:"united kingdom",jp:"japan"};function Au(e){let n=Number(e??"0");return n>=1e6?`${(n/1e6).toFixed(1).replace(/\.0$/,"")}M`:n>=1e3?`${(n/1e3).toFixed(1).replace(/\.0$/,"")}K`:String(n)}function Kv(e,n){return`lfm-${e}-${n}`.replace(/\s+/g,"-").toLowerCase()}function Hv(e){return e.map(n=>{let i=typeof n.artist=="string"?n.artist:n.artist.name;return{id:Kv(n.name,i),title:n.name,artist:i,country:"",plays:Au(n.playcount??n.listeners),delta:0}})}function Gv(e){return e.map(n=>({id:`lfm-artist-${n.name}`.replace(/\s+/g,"-").toLowerCase(),title:n.name,artist:"",country:"",plays:Au(n.listeners??n.playcount),delta:0}))}async function Pu(e,n,i,s,l){let u=new URLSearchParams({api_key:n,format:"json",limit:"50"});u.set("method",e==="world"?i:s),e!=="world"&&u.set("country",Wv[e]??e);try{let p=await fetch(`${Fv}?${u.toString()}`);if(!p.ok)return{ok:!1,status:p.status,message:`HTTP ${p.status}`};let m=await p.json();return{ok:!0,data:l(m)}}catch(p){return{ok:!1,status:0,message:String(p)}}}async function ws(e,n,i){return Pu(e,i,"chart.gettoptracks","geo.gettoptracks",s=>{let l=s?.tracks;return Hv(Array.isArray(l?.track)?l.track:[])})}async function Ru(e,n,i){return Pu(e,i,"chart.gettopartists","geo.gettopartists",s=>{let l=s?.topartists;return Gv(Array.isArray(l?.artist)?l.artist:[])})}function Nu(e,n,i){return e===403?{variant:"InvalidApiKey",message:n,retryable:!1}:e===429?{variant:"RateLimited",message:n,retryable:!1,resetAt:i}:e>=500&&e<=599?{variant:"ServiceDown",message:n,retryable:!0}:e===0?{variant:"NetworkError",message:n,retryable:!0}:{variant:"Unknown",message:n,retryable:!0}}async function Cu(e){let n=await ws("world","today",e);return n.ok?{valid:!0}:n.status===403?{valid:!1,reason:"invalid_key"}:{valid:!1,reason:"network"}}var{useState:Zt}=Spicetify.React,Iu={not_found:"Username not found. Check your stats.fm customId.",private:"Profile is private. Visit stats.fm settings and set your profile to public.",network:"Could not reach stats.fm. Check your connection and try again.",circuit_open:"stats.fm is temporarily unavailable. Try again shortly."};function _u(){let e=localStorage.getItem(ue.STATSFM_CONFIG);return e?JSON.parse(e):null}function Vv(e){let i=e.getAll().find(u=>u.id==="statsfm")?.capabilities.tier==="plus"?"plus":"free";return{tier:i,tierClass:i==="plus"?"tier-badge--plus":"tier-badge--free",tierLabel:i==="plus"?"Plus":"Free"}}var jv={invalid_key:"Invalid API key. Double-check the key and try again.",network:"Could not reach Last.fm. Check your connection and try again."};function Du(){let[e,n]=Zt(""),[i,s]=Zt(()=>_u()?"connected":"idle"),[l,u]=Zt(()=>_u()),[p,m]=Zt(null),[v,y]=Zt(!1),[S,w]=Zt(null),[P,x]=Zt(""),[L,j]=Zt(()=>localStorage.getItem(ue.LASTFM_API_KEY)?"connected":"idle"),[q,I]=Zt(null),H=async()=>{if(!e.trim())return;s("connecting"),m(null);let J=await Pr(e.trim());if(!J.valid){m(Iu[J.reason]??"Connection failed. Check the console for details."),s("error");return}let he={username:e.trim(),isPlus:J.isPlus,connectedAt:Date.now(),lastValidated:Date.now()};localStorage.setItem(ue.STATSFM_CONFIG,JSON.stringify(he)),await ur.init(),Ge.invalidate(),De.setActive("statsfm"),window.dispatchEvent(new CustomEvent(xe.STATSFM_CONNECTED)),window.dispatchEvent(new CustomEvent(xe.PROVIDER_CHANGED)),u(he),s("connected")},K=()=>{localStorage.removeItem(ue.STATSFM_CONFIG),Ge.invalidate(),De.setActive("local"),window.dispatchEvent(new CustomEvent(xe.STATSFM_DISCONNECTED)),window.dispatchEvent(new CustomEvent(xe.PROVIDER_CHANGED)),s("idle"),n(""),u(null),m(null)},B=async()=>{if(!l)return;let J=l.isPlus;y(!0),w(null);let he=await Pr(l.username);if(!he.valid){w(Iu[he.reason]??"Validation failed. Check the console for details."),y(!1);return}let _e={...l,isPlus:he.isPlus,lastValidated:Date.now()};localStorage.setItem(ue.STATSFM_CONFIG,JSON.stringify(_e)),await ur.init(),u(_e),y(!1),J!==he.isPlus&&(Ge.invalidate(),window.dispatchEvent(new CustomEvent(xe.PROVIDER_CHANGED)))},M=async()=>{let J=P.trim();if(!J)return;j("testing"),I(null);let he=await Cu(J);he.valid?(localStorage.setItem(ue.LASTFM_API_KEY,J),await hr.invalidate(),j("connected")):(I(jv[he.reason]??"Connection failed"),j("error"))},z=async()=>{localStorage.removeItem(ue.LASTFM_API_KEY),await hr.invalidate(),j("idle"),x(""),I(null)},G=J=>{Ge.invalidate(),De.setActive(J),window.dispatchEvent(new CustomEvent(xe.PROVIDER_CHANGED))},re=De.getAll(),te=De.getActiveId(),Z=l!==null,{tierClass:Pe,tierLabel:ie}=Vv(De);return Spicetify.React.createElement("div",null,Spicetify.React.createElement("h3",{className:"section-header"},"Active Provider"),Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"12px"}},"Select the data source for your listening statistics"),Spicetify.React.createElement("div",{role:"radiogroup","aria-label":"Active provider"},re.map(J=>Spicetify.React.createElement("div",{key:J.id,className:`provider-radio-row ${te===J.id?"active":""}`,role:"radio","aria-checked":te===J.id,"aria-label":J.name,onClick:()=>{J.id==="statsfm"&&!Z||te!==J.id&&G(J.id)},style:J.id==="statsfm"&&!Z?{opacity:.5,pointerEvents:"none"}:void 0},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},J.id==="local"?"Local Tracking":"stats.fm"),Spicetify.React.createElement("div",{className:"settings-sublabel"},J.id==="local"?"Stats tracked directly on this device":"Import stats from your stats.fm account"))))),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"16px"}},"stats.fm Account"),(i==="idle"||i==="connecting"||i==="error")&&Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Use your stats.fm customId, not your display name"),Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:e,onChange:J=>n(J.target.value),onKeyDown:J=>{J.key==="Enter"&&i!=="connecting"&&H()},placeholder:"Enter your stats.fm username",disabled:i==="connecting","aria-label":"stats.fm username",style:{flex:1,padding:"8px 12px",borderRadius:"4px",border:"1px solid var(--spice-misc)",background:"var(--spice-main)",color:"var(--spice-text)",fontSize:"var(--font-size-sm, 14px)"}}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:H,disabled:i==="connecting","aria-busy":i==="connecting",style:i==="connecting"?{opacity:.6}:void 0},i==="connecting"?"Connecting...":"Connect Account")),i==="error"&&p&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},p)),i==="connected"&&l&&Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},Spicetify.React.createElement("span",{style:{color:"var(--spice-text)",fontWeight:700}},l.username),Spicetify.React.createElement("span",{className:`tier-badge ${Pe}`},ie)),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Connected since ",new Date(l.connectedAt).toLocaleDateString()),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:B,disabled:v,"aria-busy":v,"aria-label":"Re-validate stats.fm tier status",style:{marginTop:"8px",alignSelf:"flex-start",...v?{opacity:.6}:{}}},v?"Re-validating...":"Re-validate"),S&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},S),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:K,"aria-label":"Disconnect stats.fm account",style:{marginTop:"8px",alignSelf:"flex-start"}},"Disconnect")),Spicetify.React.createElement("h3",{className:"section-header",style:{marginTop:"16px"}},"Last.fm Integration"),Spicetify.React.createElement("div",{className:"settings-sublabel",style:{marginBottom:"8px"}},"Provide a Last.fm API key to power the World Charts page with real data."),L==="connected"?Spicetify.React.createElement("div",{className:"provider-status-card"},Spicetify.React.createElement("div",{role:"status",style:{color:"var(--spice-text)",fontWeight:700}},"Connected"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Last.fm API key is configured and active."),Spicetify.React.createElement("button",{type:"button",className:"btn-destructive",onClick:z,style:{marginTop:"8px",alignSelf:"flex-start"}},"Disconnect")):Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{style:{display:"flex",gap:"8px",alignItems:"center"}},Spicetify.React.createElement("input",{type:"text",value:P,onChange:J=>x(J.target.value),onKeyDown:J=>{J.key==="Enter"&&L!=="testing"&&M()},placeholder:"Enter your Last.fm API key",disabled:L==="testing","aria-label":"Last.fm API key",style:{flex:1,padding:"8px 12px",borderRadius:"4px",border:"1px solid var(--spice-misc)",background:"var(--spice-main)",color:"var(--spice-text)",fontSize:"var(--font-size-sm, 14px)"}}),Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:M,disabled:L==="testing"||!P.trim(),style:L==="testing"?{opacity:.6}:void 0},L==="testing"?"Testing...":"Test Connection")),L==="error"&&q&&Spicetify.React.createElement("div",{className:"provider-connect-error",role:"alert"},q)))}var qv=3e4;function Ou(){try{let e=localStorage.getItem(ue.PLAY_THRESHOLD);if(e!==null){let n=parseInt(e,10);if(!Number.isNaN(n)&&n>=0&&n<=6e4)return n}}catch{}return qv}function Lu(e){try{let n=Math.max(0,Math.min(6e4,e));localStorage.setItem(ue.PLAY_THRESHOLD,String(n))}catch{}}function $u(){try{return localStorage.getItem(ue.TRACKING_PAUSED)==="1"}catch{return!1}}function Mu(e){try{e?localStorage.setItem(ue.TRACKING_PAUSED,"1"):localStorage.removeItem(ue.TRACKING_PAUSED)}catch{}}function Bu(){try{return localStorage.getItem(ue.SKIP_REPEATS)==="1"}catch{return!1}}function Uu(e){try{e?localStorage.setItem(ue.SKIP_REPEATS,"1"):localStorage.removeItem(ue.SKIP_REPEATS)}catch{}}function zu({stops:e,value:n,onSelect:i,formatLabel:s,labelAt:l}){let u=Math.max(0,e.indexOf(n)),p=100/e.length,m={position:"absolute",top:"2px",bottom:"2px",left:`${u*p}%`,width:`${p}%`,borderRadius:"3px",background:"var(--spice-button)",opacity:.85,transition:"left 0.2s ease, width 0.2s ease",pointerEvents:"none"},v=Spicetify.React;return v.createElement("div",{className:"segmented-control"},v.createElement("div",{className:"segmented-control-indicator",style:m}),...e.map((y,S)=>{let w=!l||l.includes(y)||S===u,P=s?s(y):`${y/1e3}s`;return v.createElement("div",{key:y,className:`segmented-control-stop${S===u?" active":""}`,onClick:()=>i(y),title:P},w?P:null)}))}var Yv=[0,5e3,1e4,15e3,2e4,25e3,3e4,35e3,4e4,45e3,5e4,55e3,6e4],{useState:Di}=Spicetify.React;function Xv(){return localStorage.getItem(ue.LOGGING)==="true"}function Jv(e){localStorage.setItem(ue.LOGGING,String(e))}function Fu({onPrefsChanged:e}){let[n,i]=Di(()=>$u()),[s,l]=Di(()=>Bu()),[u,p]=Di(()=>Ou()),[m,v]=Di(()=>Xv()),y=L=>{i(L),Mu(L),window.dispatchEvent(new CustomEvent(L?xe.TRACKING_PAUSED:xe.TRACKING_RESUMED)),e()},S=L=>{l(L),Uu(L),e()},w=L=>{p(L),Lu(L),e()},P=L=>{v(L),Jv(L),e()},x=Spicetify.ReactComponent.Toggle;return Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Pause Tracking"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Temporarily stop recording plays")),x?Spicetify.React.createElement(x,{value:n,onSelected:y}):Spicetify.React.createElement("input",{type:"checkbox",checked:n,onChange:L=>y(L.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Skip Repeats"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Don't count consecutive plays of the same track")),x?Spicetify.React.createElement(x,{value:s,onSelected:S}):Spicetify.React.createElement("input",{type:"checkbox",checked:s,onChange:L=>S(L.currentTarget.checked)})),Spicetify.React.createElement("div",{className:"settings-row",style:{flexDirection:"column",alignItems:"stretch"}},Spicetify.React.createElement("div",{style:{marginBottom:"8px"}},Spicetify.React.createElement("div",{className:"settings-label"},"Play Threshold"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Minimum time to count a track as played")),Spicetify.React.createElement(zu,{stops:Yv,value:u,onSelect:w,labelAt:[0,15e3,3e4,45e3,6e4]})),Spicetify.React.createElement("div",{className:"settings-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Console Logging"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Log tracked events to browser console")),x?Spicetify.React.createElement(x,{value:m,onSelected:P}):Spicetify.React.createElement("input",{type:"checkbox",checked:m,onChange:L=>P(L.currentTarget.checked)})))}var{useState:Qv,useEffect:Zv}=Spicetify.React,ey={tracking:"Tracking",display:"Display",data:"Data Management",providers:"Providers",about:"About"};function Wu({onClose:e,onRefresh:n,onPrefsChanged:i,onRestartTour:s,onOpenUpdates:l,onReceiveBetaUpdatesChanged:u,initialTab:p="tracking",appVersion:m,announcementDismissKey:v=null}){let[y,S]=Qv(p);Zv(()=>{let P=x=>{x.key==="Escape"&&e()};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[e]);let{createPortal:w}=Spicetify.ReactDOM;return w(Spicetify.React.createElement("div",{className:"settings-overlay",onClick:P=>{P.target.classList.contains("settings-overlay")&&e()}},Spicetify.React.createElement("div",{className:"settings-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Settings"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:e,"aria-label":"Close settings",dangerouslySetInnerHTML:{__html:zr}})),Spicetify.React.createElement("div",{className:"settings-tabs",role:"tablist"},["tracking","display","data","providers","about"].map(P=>Spicetify.React.createElement("button",{type:"button",key:P,className:`settings-tab ${y===P?"active":""}`,role:"tab","aria-selected":y===P,onClick:()=>S(P)},ey[P]))),y==="tracking"&&Spicetify.React.createElement(Fu,{onPrefsChanged:i}),y==="display"&&Spicetify.React.createElement(Tu,{onPrefsChanged:i,onRestartTour:s,announcementDismissKey:v}),y==="data"&&Spicetify.React.createElement(Su,{onRefresh:n}),y==="providers"&&Spicetify.React.createElement(Du,null),y==="about"&&Spicetify.React.createElement(fu,{version:m,onOpenUpdates:l,onPrefsChanged:i,onReceiveBetaUpdatesChanged:u}))),document.body)}function Ku({topGenres:e,onGenreClick:n,activeGenre:i}){if(!e||e.length===0)return null;let s=e.slice(0,6),l=Math.max(1,s[0]?.count??0),u=e.reduce((p,m)=>p+m.count,0)||1;return Spicetify.React.createElement("div",{className:"section-card"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Composition"),Spicetify.React.createElement("h2",{className:"section-title"},"Top Genres")),Spicetify.React.createElement("div",{className:"top-genres-list"},s.map((p,m)=>{let v=p.count/l*100;return Spicetify.React.createElement("div",{key:p.genre,className:"top-genres-row"},Spicetify.React.createElement("button",{className:`top-genres-name${i===p.genre?" top-genres-name--active":""}`,onClick:()=>n?.(p.genre),type:"button"},p.genre),Spicetify.React.createElement("div",{className:"top-genres-bar-track"},Spicetify.React.createElement("div",{className:`top-genres-bar${m===0?" peak":""}`,style:{width:`${v}%`}})),Spicetify.React.createElement("span",{className:"top-genres-pct"},Math.round(p.count/u*100),"%"))})))}var{React:qS}=Spicetify;function Ss(e){return e===1?"rank-gold":e===2?"rank-silver":e===3?"rank-bronze":""}function xs(){return Spicetify.React.createElement("div",null,Array.from({length:5}).map((e,n)=>Spicetify.React.createElement("div",{key:n,className:"top-list-row",style:{marginBottom:6}},Spicetify.React.createElement(ns,{size:20}),Spicetify.React.createElement(st,{width:44,height:44}),Spicetify.React.createElement("div",{style:{flex:1}},Spicetify.React.createElement(st,{width:"80%",height:11,style:{marginBottom:6}}),Spicetify.React.createElement(st,{width:"55%",height:9})))))}function Hu({stats:e,loading:n,loadingByColumn:i,hiddenSections:s,onGenreClick:l,activeGenre:u}){let p=at(),m=p.columnOrder.filter(y=>!s.includes(y));if(m.length===0)return null;let v={"top-tracks":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-tracks",key:"top-tracks"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Most played"),Spicetify.React.createElement("h2",{className:"section-title"},"Tracks")),n||i?.tracks?Spicetify.React.createElement(xs,null):e?.topTracks.slice(0,p.itemsPerSection).map(y=>Spicetify.React.createElement("div",{key:y.trackUri||`unknown-track-${y.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Xt(y.trackUri),onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&Xt(y.trackUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Ss(y.rank)}`},y.rank),y.albumArt&&Spicetify.React.createElement("img",{src:y.albumArt,alt:"",className:"track-art"}),Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},y.trackName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},y.artistName)),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",color:"rgba(var(--spice-rgb-text), 0.55)",flexShrink:0}},Spicetify.React.createElement("span",{style:{fontSize:11,fontVariantNumeric:"tabular-nums"}},zc(y.durationMs)))))),"top-artists":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-artists",key:"top-artists"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Artists")),n||i?.artists?Spicetify.React.createElement(xs,null):e?.topArtists.slice(0,p.itemsPerSection).map(y=>{let S=y.genres?.[0];return Spicetify.React.createElement("div",{key:y.artistUri||`unknown-artist-${y.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Xt(y.artistUri),onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&Xt(y.artistUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Ss(y.rank)}`},y.rank),y.imageUrl&&Spicetify.React.createElement("img",{src:y.imageUrl,alt:"",className:"track-art track-art--round"}),Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},y.artistName),Spicetify.React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},Spicetify.React.createElement("span",{style:{fontVariantNumeric:"tabular-nums"}},ut(y.count)," plays"),S&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("span",{style:{opacity:.4}},"\xB7"),Spicetify.React.createElement("span",{role:"button",tabIndex:0,onClick:w=>{w.stopPropagation(),l?.(S)},onKeyDown:w=>{(w.key==="Enter"||w.key===" ")&&(w.stopPropagation(),l?.(S))},style:{color:u===S?"var(--spice-button)":"rgba(var(--spice-rgb-text), 0.7)",cursor:"pointer"}},S)))))})),"top-albums":()=>Spicetify.React.createElement("div",{className:"section-card","data-column-id":"top-albums",key:"top-albums"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Top"),Spicetify.React.createElement("h2",{className:"section-title"},"Albums")),n||i?.albums?Spicetify.React.createElement(xs,null):e?.topAlbums.slice(0,p.itemsPerSection).map(y=>Spicetify.React.createElement("div",{key:y.albumUri||`unknown-album-${y.rank}`,className:"top-list-row",role:"button",tabIndex:0,onClick:()=>Xt(y.albumUri),onKeyDown:S=>{(S.key==="Enter"||S.key===" ")&&Xt(y.albumUri)}},Spicetify.React.createElement("span",{className:`rank-number ${Ss(y.rank)}`},y.rank),y.albumArt&&Spicetify.React.createElement("img",{src:y.albumArt,alt:"",className:"track-art"}),Spicetify.React.createElement("div",{style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",gap:2}},Spicetify.React.createElement("div",{style:{fontSize:13,fontWeight:600,color:"var(--spice-text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},y.albumName),Spicetify.React.createElement("div",{style:{fontSize:11,fontWeight:400,color:"rgba(var(--spice-rgb-text), 0.55)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",fontVariantNumeric:"tabular-nums"}},y.artistName," \xB7 ",ut(y.count)," plays")))))};return Spicetify.React.createElement("div",{className:"top-lists-grid"},m.map(y=>v[y]?.()??null))}var Gu=`curl -fsSL ${Yt}/install.sh | bash`,Vu=`irm ${Yt}/install.ps1 | iex`,ju=`LISTENING_STATS_PRERELEASE=1 curl -fsSL ${Yt}/install.sh | bash`,qu=`$env:LISTENING_STATS_PRERELEASE = "1"; irm ${Yt}/install.ps1 | iex`;async function Yu(){try{let e=await fetch(`${Yt}/CHANGELOG.md?t=${Date.now()}`,{cache:"no-store"});return e.ok?await e.text():null}catch{return null}}function Xu(e){let n=e.replace(/\r\n/g,`
`).split(`
`),i=[],s=!1;function l(){s&&(i.push("</p>"),s=!1)}function u(p){let m=ty(p);return m=m.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),m=m.replace(/`([^`]+)`/g,"<code>$1</code>"),m=m.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),m}for(let p of n){let v=p.trimEnd().trim();if(v===""){l();continue}let y=v.match(/^##+\s+(.*)$/);if(y){l(),i.push(`<h3>${u(y[1]??"")}</h3>`);continue}s?i.push("<br />"):(i.push("<p>"),s=!0),i.push(u(v))}return l(),i.join("")}function ty(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var{useState:ks,useEffect:Es,useCallback:Ju,useRef:ry}=Spicetify.React;async function ny(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{let n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.left="-9999px",document.body.appendChild(n),n.select();let i=document.execCommand("copy");return document.body.removeChild(n),i}catch{return!1}}function Qu({open:e,onClose:n,updateInfo:i,appVersion:s,receiveBetaUpdates:l,onReceiveBetaUpdatesChange:u}){let p=Spicetify.ReactComponent.Toggle,[m,v]=ks(null),[y,S]=ks(null),[w,P]=ks(null),x=ry(null),L=l?ju:Gu,j=l?qu:Vu;Es(()=>{if(!e)return;let z=!1;return v(null),S(null),P(null),Yu().then(G=>{z||(G===null?S("Could not load changelog."):v(G))}),()=>{z=!0}},[e]),Es(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]),Es(()=>{P(null),x.current!==null&&(window.clearTimeout(x.current),x.current=null)},[l]);let q=Ju(()=>{Cc(24),n()},[n]),I=Ju(async z=>{await ny(z==="bash"?L:j)?(x.current!==null&&window.clearTimeout(x.current),P(z),x.current=window.setTimeout(()=>{P(null),x.current=null},2500),Spicetify.showNotification(z==="bash"?"Copied (macOS / Linux).":"Copied (Windows).")):Spicetify.showNotification("Could not copy.",!0)},[L,j]),{createPortal:H}=Spicetify.ReactDOM;if(!e)return null;let K=m!==null?Xu(m.slice(0,12e4)):"",B=i!=null&&i.remoteTag===null,M=i==null?"Could not compare versions.":B?`No release metadata (this build is v${s}).`:i.updateAvailable?`Update available: ${i.remoteVersion} (you have ${i.localVersion}).`:`Up to date (${i.localVersion}).`;return H(Spicetify.React.createElement("div",{className:"settings-overlay update-overlay",onClick:z=>{z.target.classList.contains("settings-overlay")&&n()}},Spicetify.React.createElement("div",{className:"settings-modal update-modal",role:"dialog","aria-modal":"true"},Spicetify.React.createElement("div",{className:"settings-modal-header"},Spicetify.React.createElement("h2",{className:"settings-modal-title"},"Updates"),Spicetify.React.createElement("button",{type:"button",className:"settings-btn",onClick:n,"aria-label":"Close",dangerouslySetInnerHTML:{__html:zr}})),Spicetify.React.createElement("p",{className:"update-modal-status"},M),i?.updateAvailable&&i.prerelease?Spicetify.React.createElement("p",{className:"update-modal-note"},"That release is a GitHub pre-release."):null,Spicetify.React.createElement("div",{className:"update-modal-actions update-modal-actions-top"},i?.updateAvailable?Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:q},"Remind me later"):null,Spicetify.React.createElement("button",{type:"button",className:"btn-secondary",onClick:n},"Close")),Spicetify.React.createElement("div",{className:"settings-row update-modal-pref-row"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"settings-label"},"Prereleases"),Spicetify.React.createElement("div",{className:"settings-sublabel"},"Include prereleases when checking for updates.")),p?Spicetify.React.createElement(p,{value:l,onSelected:u}):Spicetify.React.createElement("input",{type:"checkbox",checked:l,onChange:z=>u(z.currentTarget.checked)})),Spicetify.React.createElement("p",{className:"update-modal-note update-modal-install-short"},l?"Commands install the newest GitHub release that includes the zip (may be a pre-release). Bash needs jq or python3.":"Quit Spotify, paste one command, then restart Spotify."),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"macOS / Linux"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{I("bash")}},w==="bash"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},L)),Spicetify.React.createElement("div",{className:"settings-about-command-block"},Spicetify.React.createElement("div",{className:"settings-about-command-head"},Spicetify.React.createElement("span",{className:"settings-about-command-label"},"Windows"),Spicetify.React.createElement("button",{type:"button",className:"btn-secondary settings-about-copy-btn",onClick:()=>{I("powershell")}},w==="powershell"?"Copied":"Copy")),Spicetify.React.createElement("pre",{className:"settings-about-command-pre"},j)),Spicetify.React.createElement("p",{className:"settings-about-hint update-modal-repo-hint"},Spicetify.React.createElement("a",{className:"settings-inline-link",href:qt,target:"_blank",rel:"noopener noreferrer"},"GitHub")," \xB7 ",Spicetify.React.createElement("a",{className:"settings-inline-link",href:`${qt}/releases`,target:"_blank",rel:"noopener noreferrer"},"Releases")),Spicetify.React.createElement("h3",{className:"update-modal-changelog-title"},"Changelog"),y?Spicetify.React.createElement("p",{className:"update-modal-changelog-error"},y):null,Spicetify.React.createElement("div",{className:"update-modal-changelog markdown-lite",dangerouslySetInnerHTML:{__html:K}}))),document.body)}var iy=[{id:"w1",title:"Espresso",artist:"Sabrina Carpenter",country:"US",plays:"12.4M",delta:2},{id:"w2",title:"Beautiful Things",artist:"Benson Boone",country:"US",plays:"9.8M",delta:0},{id:"w3",title:"Houdini",artist:"Dua Lipa",country:"GB",plays:"8.2M",delta:5},{id:"w4",title:"Lose Control",artist:"Teddy Swims",country:"US",plays:"7.9M",delta:-1},{id:"w5",title:"Cruel Summer",artist:"Taylor Swift",country:"US",plays:"7.1M",delta:-3},{id:"w6",title:"Stick Season",artist:"Noah Kahan",country:"US",plays:"6.4M",delta:1},{id:"w7",title:"Bad Habit",artist:"Steve Lacy",country:"US",plays:"5.9M",delta:-2},{id:"w8",title:"Pedro",artist:"Jaxomy & Agatino",country:"IT",plays:"5.3M",delta:8}],ay=[{id:"a1",title:"Taylor Swift",artist:"",country:"US",plays:"95.2M",delta:0},{id:"a2",title:"The Weeknd",artist:"",country:"CA",plays:"82.1M",delta:1},{id:"a3",title:"Bad Bunny",artist:"",country:"PR",plays:"71.4M",delta:-1},{id:"a4",title:"Drake",artist:"",country:"CA",plays:"63.8M",delta:2},{id:"a5",title:"Sabrina Carpenter",artist:"",country:"US",plays:"58.3M",delta:5},{id:"a6",title:"Billie Eilish",artist:"",country:"US",plays:"52.7M",delta:-2},{id:"a7",title:"Dua Lipa",artist:"",country:"GB",plays:"47.9M",delta:3},{id:"a8",title:"BTS",artist:"",country:"KR",plays:"44.1M",delta:-1}];async function Zu(e,n,i,s,l){let u=localStorage.getItem(ue.LASTFM_API_KEY);if(!u)return{ok:!0,data:[...i]};let p=s(e,n),m=await hr.get(p);if(m)return{ok:!0,data:m};let v=await l(e,n,u);return v.ok&&await hr.set(p,v.data),v}function ed(e,n){return Zu(e,n,iy,hu,ws)}function td(e,n){return Zu(e,n,ay,gu,Ru)}function rd(){return Spicetify.React.createElement("div",{className:"world-charts-skeleton","aria-hidden":"true"},Array.from({length:2}).map((e,n)=>Spicetify.React.createElement("div",{key:n,style:{marginBottom:"32px"}},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"100px",height:"12px",marginBottom:"6px",borderRadius:"4px"}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"140px",height:"18px",marginBottom:"16px",borderRadius:"4px"}}),Spicetify.React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px 24px"}},Array.from({length:8}).map((i,s)=>Spicetify.React.createElement("div",{key:s,style:{display:"flex",gap:"12px",alignItems:"center",padding:"6px 8px"}},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"24px",height:"24px",borderRadius:"50%",flexShrink:0}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer skeleton-tile",style:{width:"36px",height:"36px",borderRadius:"4px",flexShrink:0}}),Spicetify.React.createElement("div",{style:{flex:1}},Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"75%",height:"12px",marginBottom:"6px",borderRadius:"4px"}}),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"50%",height:"10px",borderRadius:"4px"}})),Spicetify.React.createElement("div",{className:"skeleton-shimmer",style:{width:"40px",height:"12px",borderRadius:"4px",flexShrink:0}})))))))}var{useState:Vr,useEffect:sy,useCallback:oy}=Spicetify.React,ad=[{value:"world",label:"World"},{value:"us",label:"US"},{value:"gb",label:"UK"},{value:"jp",label:"JP"}],sd=[{value:"today",label:"Today"},{value:"week",label:"Week"}],ly=new Set(ad.map(e=>e.value)),cy=new Set(sd.map(e=>e.value)),nd=[["#3a1f10","#c44e1d"],["#1f2d3a","#5b8fb9"],["#2a1a3a","#8b5cf6"],["#3a2a1a","#e0a458"],["#1a3a2e","#5dbf99"],["#3a1a2a","#d36ba6"],["#102a3a","#3d8fd1"],["#2a3a1a","#a3c46d"]];function uy(e){let n=e.charCodeAt(e.length-1)%nd.length,[i,s]=nd[n];return`linear-gradient(135deg, ${i}, ${s})`}function dy(){let e=localStorage.getItem(ue.WORLD_CHARTS_SCOPE);return e&&ly.has(e)?e:"world"}function py(){let e=localStorage.getItem(ue.WORLD_CHARTS_WINDOW);return e&&cy.has(e)?e:"today"}function fy(e){return e===1?"rank-gold":e===2?"rank-silver":e===3?"rank-bronze":""}function my(e){return e>0?{direction:"up",indicator:`\u25B2 ${e}`}:e<0?{direction:"down",indicator:`\u25BC ${Math.abs(e)}`}:{direction:"neutral",indicator:"-"}}function id(e){Spicetify.Platform.History.push(`/search/${encodeURIComponent(e)}`)}function od({hasLastfmKey:e,onConnectLastfm:n}){let[i,s]=Vr(dy),[l,u]=Vr(py),[p,m]=Vr([]),[v,y]=Vr([]),[S,w]=Vr(!0),[P,x]=Vr(null),L=oy(async(K,B)=>{w(!0),x(null);let[M,z]=await Promise.all([ed(K,B),td(K,B)]);M.ok?m(M.data):(x(Nu(M.status,M.message)),m([])),z.ok?y(z.data):y([]),w(!1)},[]);sy(()=>{L(i,l)},[i,l,L]);let j=K=>{s(K),localStorage.setItem(ue.WORLD_CHARTS_SCOPE,K)},q=K=>{u(K),localStorage.setItem(ue.WORLD_CHARTS_WINDOW,K)},I=()=>{L(i,l)};if(!e)return Spicetify.React.createElement("div",{className:"world-charts-page"},Spicetify.React.createElement("div",{className:"world-charts-empty",role:"status"},Spicetify.React.createElement("h2",{className:"world-charts-empty-title"},"Connect Last.fm"),Spicetify.React.createElement("p",{className:"world-charts-empty-body"},"Add a Last.fm API key to see what the world is playing."),n&&Spicetify.React.createElement("button",{type:"button",className:"btn-primary",onClick:n},"Connect Last.fm")));let H=(K,B,M)=>{let z=B+1,G=fy(z),re=my(K.delta),te=M?K.title:`${K.title} ${K.artist}`;return Spicetify.React.createElement("div",{key:K.id,className:"world-chart-item",role:"button",tabIndex:0,onClick:()=>id(te),onKeyDown:Z=>{(Z.key==="Enter"||Z.key===" ")&&id(te)}},Spicetify.React.createElement("span",{className:`rank-number ${G}`},z),Spicetify.React.createElement("div",{className:`world-chart-tile${M?" world-chart-tile--round":""}`,style:{background:uy(K.id)}}),Spicetify.React.createElement("div",{className:"world-chart-info"},Spicetify.React.createElement("div",{className:"world-chart-title"},K.title),Spicetify.React.createElement("div",{className:"world-chart-artist"},M?`${K.plays} listeners`:K.artist)),Spicetify.React.createElement("div",{className:"world-chart-stats"},!M&&Spicetify.React.createElement("div",{className:"world-chart-plays"},K.plays),Spicetify.React.createElement("div",{className:"world-chart-delta","data-direction":re.direction},re.indicator)))};return Spicetify.React.createElement("div",{className:"world-charts-page"},Spicetify.React.createElement("div",{className:"world-charts-header"},Spicetify.React.createElement("div",null,Spicetify.React.createElement("div",{className:"section-kicker"},"World Charts"),Spicetify.React.createElement("h2",{className:"section-title"},"What the world is playing")),Spicetify.React.createElement("div",{className:"world-charts-tabs"},Spicetify.React.createElement("div",{className:"world-charts-tab-group","data-tabs":"scope",role:"tablist","aria-label":"Region"},ad.map(K=>Spicetify.React.createElement("button",{type:"button",key:K.value,className:`world-charts-tab${i===K.value?" active":""}`,role:"tab","aria-selected":i===K.value,onClick:()=>j(K.value)},K.label))),Spicetify.React.createElement("div",{className:"world-charts-tab-group","data-tabs":"window",role:"tablist","aria-label":"Time window"},sd.map(K=>Spicetify.React.createElement("button",{type:"button",key:K.value,className:`world-charts-tab${l===K.value?" active":""}`,role:"tab","aria-selected":l===K.value,onClick:()=>q(K.value)},K.label))))),S&&Spicetify.React.createElement(rd,null),!S&&P&&Spicetify.React.createElement(Wr,{error:P,onRetry:I,onOpenSettings:n??(()=>{})}),!S&&!P&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement("div",{className:"world-charts-section","data-section":"tracks"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Trending"),Spicetify.React.createElement("h3",{className:"section-title"},"Top Tracks")),Spicetify.React.createElement("div",{className:"world-charts-grid"},p.slice(0,8).map((K,B)=>H(K,B,!1)))),Spicetify.React.createElement("div",{className:"world-charts-section","data-section":"artists"},Spicetify.React.createElement("header",{className:"section-heading"},Spicetify.React.createElement("span",{className:"section-kicker"},"Popular"),Spicetify.React.createElement("h3",{className:"section-title"},"Top Artists")),Spicetify.React.createElement("div",{className:"world-charts-grid"},v.slice(0,8).map((K,B)=>H(K,B,!0)))),Spicetify.React.createElement("div",{className:"world-charts-source"},"Source: Last.fm")))}function hy(e,n){return`${e}:${n}`}function gy(){return!localStorage.getItem(ue.PROVIDER_WIZARD_SEEN)}function vy(){localStorage.setItem(ue.PROVIDER_WIZARD_SEEN,"1")}function ud(){try{let e=localStorage.getItem(ue.PROVIDER_PERIODS);if(!e)return{};let n=JSON.parse(e);return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:{}}catch{return{}}}function ld(e,n){let i=ud()[e];if(i){let s=n.find(l=>l.id===i);if(s)return s}return n[0]}function yy(e,n){let i=ud();i[e]=n,localStorage.setItem(ue.PROVIDER_PERIODS,JSON.stringify(i))}function cd(){return De.getActive()?.getSupportedPeriods()??Pt}var{useState:ot,useEffect:gr,useCallback:It,useRef:by,useMemo:wy}=Spicetify.React;function Sy(){let[e,n]=ot(Pt),[i,s]=ot(Pt[0]),[l,u]=ot(null),[p,m]=ot(Da()),[v,y]=ot({tracks:!0,artists:!0,albums:!0}),[S,w]=ot({}),P=by(0),[x,L]=ot(""),[j,q]=ot(!1),[I,H]=ot(!1),[K,B]=ot(0),[M,z]=ot(()=>localStorage.getItem(ue.ACTIVE_PROVIDER)??"local"),[G,re]=ot(gy),[te,Z]=ot("tracking"),[Pe,ie]=ot(()=>Bc("2.0.0")),[J,he]=ot(()=>at().activePage),[_e,Ie]=ot(!1),[Oe,de]=ot(null),[Le,D]=ot(null),[Re,me]=ot(!1),ce=It(async(Se,ze=!1)=>{let xt=++P.current,Dt=De.getActiveId()??"local",er=hy(Dt,Se.id);L(`${Dt}:${Se.id}`),ze||(m(Da()),y({tracks:!0,artists:!0,albums:!0}),u(null)),w({});try{if(!ze){let dt=Ge.get(er);if(dt){u(dt),m(Oa()),y({tracks:!1,artists:!1,albums:!1});return}}let mt=De.getActive();if(!mt)throw new Error("No active provider");if(mt.calculateStatsProgressive){let dt=!1,tt=await mt.calculateStatsProgressive(Se,(rt,zi,Ut)=>{if(xt!==P.current)return;let vr=Lo(zi);"topTracks"in rt&&y(lt=>({...lt,tracks:!1})),"topArtists"in rt&&y(lt=>({...lt,artists:!1})),"topAlbums"in rt&&y(lt=>({...lt,albums:!1})),("dailyPlayCounts"in rt||"listeningDays"in rt)&&m(lt=>({...lt,consistency:"resolved"})),Ut?(dt=!0,w(lt=>({...lt,[vr]:Ut})),m(lt=>({...lt,[vr]:"error"}))):(u(lt=>lt?{...lt,...rt}:{...La,...rt}),m(lt=>({...lt,[vr]:"resolved"})))});if(xt!==P.current)return;u(rt=>({...rt??La,...tt})),y({tracks:!1,artists:!1,albums:!1}),m(rt=>({overview:rt.overview==="error"?"error":"resolved",lists:rt.lists==="error"?"error":"resolved",activity:rt.activity==="error"?"error":"resolved",consistency:rt.consistency==="error"?"error":"resolved"})),dt||Ge.set(er,tt)}else{let dt=await mt.calculateStats(Se);if(xt!==P.current)return;Ge.set(er,dt),u(dt),m(Oa()),y({tracks:!1,artists:!1,albums:!1})}}catch(mt){if(xt!==P.current)return;let dt=mt instanceof Mr?mt.appError:on(0,mt instanceof Error?mt.message:"Failed to load stats");w({overview:dt,lists:dt,activity:dt}),m({overview:"error",lists:"error",activity:"error",consistency:"error"})}},[]);gr(()=>{Oo().then(()=>{let Se=cd();n(Se);let ze=ld(De.getActiveId()??"local",Se);s(ze),H(!0)})},[]),gr(()=>{I&&ce(i)},[i,I,ce]),gr(()=>{let Se=()=>{let ze=De.getActiveId()??"local",xt=cd();n(xt);let Dt=ld(ze,xt);s(Dt),z(ze),Ge.invalidate(),os()};return window.addEventListener(xe.PROVIDER_CHANGED,Se),()=>window.removeEventListener(xe.PROVIDER_CHANGED,Se)},[]),gr(()=>{let Se=()=>{Ge.invalidate(),ce(i,!0)};return window.addEventListener(xe.PLAY_RECORDED,Se),()=>window.removeEventListener(xe.PLAY_RECORDED,Se)},[i,ce]),gr(()=>{let Se=()=>B(ze=>ze+1);return window.addEventListener(xe.PREFS_CHANGED,Se),()=>window.removeEventListener(xe.PREFS_CHANGED,Se)},[]),gr(()=>{vo().then(de).catch(()=>{})},[]);let N=It(async()=>{let Se=at(),ze=await Nc("2.0.0",Se.receiveBetaUpdates);return D(ze),ze},[]);gr(()=>{if(!I)return;let Se=!1;return(async()=>{let ze=await N();Se||ze.updateAvailable&&!Ic()&&me(!0)})(),()=>{Se=!0}},[I,N]);let Y=It(async()=>{q(!1),await N(),me(!0)},[N]),We=De.getActive()?.getProviderInfo().name??"Local",Ne=De.getActive()?.getProviderInfo().capabilities??null,Ve=Ne??{hasActivityData:!1,hasConsistencyData:!1,hasGenreData:!1,hasStreakData:!1,hasSkipRate:!1,tier:"n/a"},Ze=new Set(vi(Ve).map(Se=>Se.id)),Be=at(),et=Se=>Be.hiddenSections.includes(Se),O=It(()=>{B(Se=>Se+1)},[]),X=It(Se=>{Ue("receiveBetaUpdates",Se),window.dispatchEvent(new CustomEvent(xe.PREFS_CHANGED)),O(),N()},[O,N]),pe=It(Se=>{s(Se),yy(De.getActiveId()??"local",Se.id)},[]),ke=It(()=>{ce(i)},[i,ce]),fe=It(()=>{vy(),re(!1)},[]),Wt=It((Se="tracking")=>{Z(Se),q(!0)},[]),$i=It(Se=>{he(Se),Ue("activePage",Se)},[]),Ir=It(()=>{q(!1),ie(!0)},[]),He=!!localStorage.getItem(ue.LASTFM_API_KEY),_t=Se=>p[Se]==="loading"||p[Se]==="pending",Mi=Se=>{switch(Se){case"overview":return _t("overview")?Spicetify.React.createElement(Ni,{loading:!0,activePeriod:i}):S.overview?Spicetify.React.createElement(Wr,{error:S.overview,onRetry:()=>ce(i),onOpenSettings:()=>Wt("providers")}):l?Spicetify.React.createElement(Ni,{stats:l,activePeriod:i}):null;case"top-genres":return _t("lists")||!l||!Ne?.hasGenreData||l.topGenres.length===0?null:Spicetify.React.createElement(Ku,{topGenres:l.topGenres,onGenreClick:Ti,activeGenre:Be.activeGenre});case"top-lists":{let ze=_t("lists");return S.lists?Spicetify.React.createElement(Wr,{error:S.lists,onRetry:()=>ce(i),onOpenSettings:()=>Wt("providers")}):!ze&&!l?null:Spicetify.React.createElement(Hu,{stats:l??null,loading:ze,loadingByColumn:v,hiddenSections:Be.hiddenSections,onGenreClick:Ti,activeGenre:Be.activeGenre})}case"activity":return!Ne||Dc(Ne)==="hidden"?null:S.activity?Spicetify.React.createElement(Wr,{error:S.activity,onRetry:()=>ce(i),onOpenSettings:()=>Wt("providers")}):_t("activity")?Spicetify.React.createElement(is,{loading:!0,hourlyDistribution:[],peakHour:0,weekdayDistribution:[],peakWeekday:0,showStreak:!1}):l?Spicetify.React.createElement(is,{hourlyDistribution:l.hourlyDistribution,peakHour:l.peakHour,weekdayDistribution:l.weekdayDistribution??Array(7).fill(0),peakWeekday:l.peakWeekday??0,dailyPlayCounts:l.dailyPlayCounts,streak:l.streak,showStreak:Ne.hasStreakData}):null;case"consistency":return p.consistency==="loading"||p.consistency==="pending"?Spicetify.React.createElement(as,{loading:!0,activePeriod:i,activeProviderId:M,totalPlays:0,totalDuration:0}):l?Spicetify.React.createElement(as,{totalPlays:l.totalPlays,totalDuration:l.totalDuration,listeningDays:l.listeningDays,dailyPlayCounts:l.dailyPlayCounts,activePeriod:i,activeProviderId:M}):null;case"recently-played":return _t("overview")?Spicetify.React.createElement(ps,{loading:!0}):l?Spicetify.React.createElement(ps,{recentPlays:l.recentPlays}):null;default:return null}},Kt=()=>{let Se=p.overview==="resolved"||p.overview==="error",ze=p.lists==="resolved"||p.lists==="error",xt=Object.values(S).every(tt=>tt==null);if(Se&&ze&&xt&&l&&l.totalPlays===0&&l.topTracks.length===0)return Spicetify.React.createElement(ss,{onOpenSettings:()=>Wt()});let er=Be.sectionOrder.filter(tt=>Ze.has(tt)&&!et(tt)),mt=Object.entries(p).filter(([,tt])=>tt==="loading"||tt==="pending").map(([tt])=>tt),dt=mt.length>0;return Spicetify.React.createElement("div",{className:"stats-page-content"},dt&&Spicetify.React.createElement("div",{className:"loading-status-banner",role:"status","aria-live":"polite"},Spicetify.React.createElement("span",{className:"loading-status-dot"}),Spicetify.React.createElement("span",null,"Loading ",x," - waiting on ",mt.join(", "))),er.map(tt=>{let rt=Mi(tt);return rt?Spicetify.React.createElement("div",{key:tt,"data-section-id":tt},rt):null}))},Bt=wy(()=>_c("2.0.0",Oe),[Oe]);gr(()=>{if(!Bt)return;let Se=at();if(Se.showAnnouncementBanner)return;let ze=Bt.dismissKey,xt=Se.announcementBannerHiddenForDismissKey;ze!==xt&&(Ue("showAnnouncementBanner",!0),Ue("announcementBannerHiddenForDismissKey",""),window.dispatchEvent(new CustomEvent(xe.PREFS_CHANGED)),O())},[Bt,O]);let Ht=Be.showAnnouncementBanner?Bt:null,Bi=It(()=>{Bt&&(Ue("showAnnouncementBanner",!1),Ue("announcementBannerHiddenForDismissKey",Bt.dismissKey),window.dispatchEvent(new CustomEvent(xe.PREFS_CHANGED)),O())},[Bt,O]),Ui=()=>J==="world"?Spicetify.React.createElement(od,{hasLastfmKey:He,onConnectLastfm:()=>Wt("providers")}):Kt();return Spicetify.React.createElement("div",{className:"stats-page","data-version":"2.0.0"},!G&&Spicetify.React.createElement(Spicetify.React.Fragment,null,Spicetify.React.createElement(Zc,{activeGenre:Be.activeGenre,onClear:os}),Spicetify.React.createElement(us,{providerName:We,activeProviderId:M,onSettingsClick:()=>Wt(),onShareClick:l?()=>Ie(!0):void 0,periods:e,activePeriod:i,onPeriodChange:pe,activePage:J,onPageChange:$i}),Ht&&Spicetify.React.createElement(Vc,{title:Ht.title,body:Ht.body,titleOnly:Ht.actionOpensChangelog===!0,actionLabel:Ht.actionLabel,actionUrl:Ht.actionUrl,onActionClick:Ht.actionOpensChangelog?()=>{Y()}:void 0,onDismiss:Bi}),Ui(),Spicetify.React.createElement(Oc,{version:"2.0.0",onCheckForUpdates:()=>{Y()}})),j&&Spicetify.React.createElement(Wu,{onClose:()=>q(!1),onRefresh:ke,onPrefsChanged:O,onRestartTour:Ir,onOpenUpdates:()=>{Y()},onReceiveBetaUpdatesChanged:()=>{N()},initialTab:te,appVersion:"2.0.0",announcementDismissKey:Bt?.dismissKey??null}),G&&Spicetify.React.createElement(cu,{onComplete:fe}),Spicetify.React.createElement(lu,{active:Pe&&!G,version:"2.0.0",steps:rs({activePage:J,hasShare:!!l,sectionIds:Be.sectionOrder.filter(Se=>Ze.has(Se)&&!et(Se))}),onComplete:()=>ie(!1)}),_e&&l&&Spicetify.React.createElement(pu,{stats:l,activePeriod:i,onClose:()=>Ie(!1)}),Spicetify.React.createElement(Qu,{open:Re,onClose:()=>me(!1),updateInfo:Le,appVersion:"2.0.0",receiveBetaUpdates:Be.receiveBetaUpdates,onReceiveBetaUpdatesChange:X}))}var dd=Sy;var{React:jr}=Spicetify;function xy(e){return new Date(e).toLocaleDateString(void 0,{month:"short",day:"numeric"})}function ky(e,n){let i=`Played ${e} times`;return n==null?i:`${i} \xB7 first on ${xy(n)}`}function pd({count:e,variant:n,firstPlayedAt:i}){if(e<=1)return null;let s=ky(e,i);return n==="bubble"?jr.createElement("div",{className:"play-count-bubble",title:s},jr.createElement("div",{className:"play-count-bubble-icon"},"\u25B6"),jr.createElement("span",{className:"play-count-badge"},e)):n==="minimal"?jr.createElement("div",{className:"play-count-minimal",title:s},`\xD7${e}`):jr.createElement("div",{className:"play-count-pill",title:s},jr.createElement("span",{className:"play-count-dot"}),`${e} plays`)}var{React:Ts}=Spicetify,{useState:As,useEffect:Oi,useCallback:Ey}=Ts;function Ty(){let[e,n]=As(null),[i,s]=As(()=>Spicetify.Player.data?.item?.uri??null),l=Ey(async u=>{try{let p=await Xe.playEvents.where("trackUri").equals(u).sortBy("startedAt");n({count:p.length,firstPlayedAt:p[0]?.startedAt??null})}catch{n(null)}},[]);return Oi(()=>{i?l(i):n(null)},[i,l]),Oi(()=>{let u=()=>{let p=Spicetify.Player.data?.item?.uri??null;s(p)};return Spicetify.Player.addEventListener("songchange",u),()=>Spicetify.Player.removeEventListener("songchange",u)},[]),Oi(()=>{let u=()=>{i&&l(i)};return window.addEventListener(xe.PLAY_RECORDED,u),()=>window.removeEventListener(xe.PLAY_RECORDED,u)},[i,l]),e}function fd(){let e=Ty(),[,n]=As(0);Oi(()=>{let s=()=>n(l=>l+1);return window.addEventListener(xe.PREFS_CHANGED,s),()=>window.removeEventListener(xe.PREFS_CHANGED,s)},[]);let i=at();return!e||e.count<=1?null:Ts.createElement("div",{className:"play-count-widget-anchor"},Ts.createElement(pd,{count:e.count,variant:i.playCountVariant,firstPlayedAt:e.firstPlayedAt}))}var md=`:root {
	--font-size-sm: 12px;
	--font-size-md: 14px;
	--font-size-lg: 20px;
	--font-size-2xl: 28px;

	--line-height-display: 1.2;
	--line-height-heading: 1.2;
	--line-height-label: 1.4;
	--line-height-body: 1.5;

	--space-xs: 4px;
	--space-sm: 8px;
	--space-md: 16px;
	--space-lg: 24px;
	--space-xl: 32px;
	--space-2xl: 48px;

	--rank-gold: #ffd700;
	--rank-silver: #c0c0c0;
	--rank-bronze: #cd7f32;
}

/* Hide Spicetify topbar only when our page is active */
body:has(.stats-page) .main-topBar-container {
	display: none;
}

/* Page container */
.stats-page {
	padding: var(--space-lg, 24px) var(--space-xl, 32px);
	box-sizing: border-box;
	width: 100%;
	max-width: 100%;
	overflow-x: hidden;
}

/* Filter Pill */
.filter-pill {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	padding: 10px 14px;
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	border-radius: 999px;
	font-size: 13px;
	margin-bottom: var(--space-sm, 8px);
}

.filter-pill-icon {
	display: inline-flex;
	width: 13px;
	height: 13px;
	color: var(--spice-button);
}

.filter-pill-genre {
	color: var(--spice-button);
}

.filter-pill-close {
	appearance: none;
	border: 0;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	color: rgba(var(--spice-rgb-text), 0.7);
	width: 18px;
	height: 18px;
	border-radius: 50%;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	line-height: 1;
	padding: 0;
}

.filter-pill-close:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.18);
	color: var(--spice-text);
}

/* Announcement Banner */
.announcement-banner {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 16px;
	margin-bottom: var(--space-md, 16px);
	background: rgba(var(--spice-rgb-button), 0.08);
	border: 1px solid rgba(var(--spice-rgb-button), 0.25);
	border-radius: 8px;
}

.announcement-banner-icon {
	color: var(--spice-button);
	width: 20px;
	height: 20px;
	flex-shrink: 0;
}

.announcement-banner-text {
	font-size: 13px;
	color: var(--spice-text);
	flex: 1;
}

.announcement-banner-link {
	color: var(--spice-button);
	font-size: 12px;
	font-weight: 600;
	text-decoration: none;
	white-space: nowrap;
}

button.announcement-banner-link-btn {
	appearance: none;
	margin: 0;
	padding: 0;
	border: none;
	background: transparent;
	font: inherit;
	font-size: 12px;
	font-weight: 600;
	color: var(--spice-button);
	cursor: pointer;
	text-decoration: underline;
	text-underline-offset: 2px;
	white-space: nowrap;
}

button.announcement-banner-link-btn:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.announcement-banner-dismiss {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.5);
	cursor: pointer;
	padding: 4px;
	font-size: 16px;
	line-height: 1;
}

/* Header */
.stats-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: var(--space-lg, 24px);
	padding: var(--space-md, 16px) 0 var(--space-lg, 24px);
	flex-wrap: wrap;
}

.stats-header-title {
	margin: 0;
	font-size: 32px;
	font-weight: 800;
	letter-spacing: -0.02em;
	line-height: 1.1;
	color: var(--spice-text);
}

.stats-header-left {
	display: flex;
	align-items: center;
	gap: 14px;
	min-width: 0;
	flex-wrap: wrap;
	flex: 1 1 420px;
}

.header-provider-pill {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.header-provider-name {
	font-size: 12px;
	font-weight: 400;
	color: rgba(var(--spice-rgb-text), 0.7);
	line-height: 1.2;
}

.stats-header-right {
	display: flex;
	align-items: center;
	gap: 8px;
	min-width: 0;
	flex: 1 1 340px;
	justify-content: flex-end;
	flex-wrap: wrap;
}

.stats-header-icon-btn {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: var(--spice-text);
	width: 36px;
	height: 36px;
	border-radius: 999px;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	transition:
		background 0.15s,
		border-color 0.15s;
	padding: 0;
}

.stats-header-icon-btn:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.stats-header-icon-btn svg {
	width: 20px;
	height: 20px;
}

.loading-status-banner {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	margin: 0 0 12px;
	padding: 8px 12px;
	border-radius: 10px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.78);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.loading-status-dot {
	width: 8px;
	height: 8px;
	border-radius: 999px;
	background: var(--spice-button);
	box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.8);
	animation: loading-status-pulse 1.4s ease-out infinite;
}

@keyframes loading-status-pulse {
	0% {
		box-shadow: 0 0 0 0 rgba(var(--spice-rgb-button), 0.6);
	}
	100% {
		box-shadow: 0 0 0 8px rgba(var(--spice-rgb-button), 0);
	}
}

/* Period tabs */
.period-tabs {
	display: flex;
	flex-direction: row;
	gap: var(--space-xs, 4px);
	min-height: 36px;
	align-items: center;
	flex-wrap: wrap;
}

.period-tab {
	cursor: pointer;
	padding: 5px 12px;
	color: rgba(var(--spice-rgb-text), 0.6);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 999px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 500;
	transition:
		background 0.15s,
		color 0.15s;
}

.period-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.period-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	font-weight: 600;
}

/* Overview cards */
.overview-cards {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}

.overview-card {
	background: var(--spice-card);
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	border-radius: 8px;
	padding: 12px 14px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 6px;
	transition:
		background 0.15s,
		border-color 0.15s;
	cursor: default;
}

.overview-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.overview-card-row {
	display: flex;
	align-items: baseline;
	gap: 5px;
}

.overview-card-sub {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.overview-section {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: auto auto;
	gap: var(--space-md, 16px);
	align-items: stretch;
}

.overview-section--compact {
	grid-template-rows: auto;
}
.overview-hero-cell {
	grid-column: 1 / span 3;
	grid-row: 1;
}
.overview-right-block {
	grid-column: 4 / span 2;
	grid-row: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--space-md, 16px);
}
.overview-bottom-row {
	grid-column: 1 / span 5;
	grid-row: 2;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--space-md, 16px);
}

/* Top Genres */
.top-genres-list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.top-genres-row {
	display: grid;
	grid-template-columns: 140px 1fr 44px;
	gap: 12px;
	align-items: center;
}

.top-genres-name {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.85);
	text-align: left;
	cursor: pointer;
	font-size: 13px;
	padding: 0;
	font-weight: 500;
	font-family: inherit;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.top-genres-name:hover {
	color: var(--spice-text);
}

.top-genres-name--active {
	color: var(--spice-button);
}

.top-genres-bar-track {
	height: 8px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
	border-radius: 4px;
	overflow: hidden;
}

.top-genres-bar {
	height: 8px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-button), 0.4);
	transition: width 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.top-genres-bar.peak {
	background: var(--spice-button);
}

.top-genres-pct {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-variant-numeric: tabular-nums;
	text-align: right;
}

.overview-card-label {
	font-size: 10.5px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.overview-card-value {
	font-size: 22px;
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1;
	color: var(--spice-text);
	font-variant-numeric: tabular-nums;
}

/* Section card wrapper */
.section-card {
	background: var(--spice-card);
	border-radius: 8px;
	padding: 20px;
	overflow: hidden;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	box-sizing: border-box;
}

.stats-page-content {
	display: flex;
	flex-direction: column;
	gap: var(--space-md, 16px);
}

/* Top lists grid - 3 columns side by side, responsive */
.top-lists-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: var(--space-md, 16px);
}

@media (max-width: 1200px) {
	.top-lists-grid {
		grid-template-columns: 1fr;
	}

	.overview-cards {
		flex-wrap: wrap;
	}

	.overview-card {
		min-width: 80px;
	}
}

@media (max-width: 780px) {
	.overview-section {
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto;
	}
	.overview-hero-cell {
		grid-column: 1;
		grid-row: 1;
	}
	.overview-right-block {
		grid-column: 1;
		grid-row: 2;
		grid-template-columns: 1fr 1fr;
	}
	.overview-bottom-row {
		grid-column: 1;
		grid-row: 3;
		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media (max-width: 600px) {
	.stats-page {
		padding: var(--space-lg, 24px) var(--space-md, 16px);
	}

	.stats-header-title {
		font-size: 22px;
	}

	.stats-header {
		flex-wrap: wrap;
	}

	.overview-cards {
		gap: var(--space-sm, 8px);
	}

	.overview-card {
		min-width: 70px;
		padding: 12px;
	}

	.period-tabs {
		flex-wrap: wrap;
		height: auto;
		gap: var(--space-xs, 4px);
	}

	.settings-modal {
		width: calc(100vw - 32px);
		max-width: 520px;
	}

	.recently-played-item {
		flex: 0 0 100px;
	}

	.recently-played-art {
		width: 100px;
		height: 100px;
	}

	.overview-right-block,
	.overview-bottom-row {
		grid-template-columns: 1fr 1fr;
	}

	.top-genres-row {
		grid-template-columns: 100px 1fr 36px;
		gap: 8px;
	}
}

/* Section headings */
.section-heading {
	display: flex;
	align-items: baseline;
	gap: 10px;
	margin-bottom: var(--space-md, 16px);
}

.section-kicker {
	font-size: 11px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: rgba(var(--spice-rgb-text), 0.5);
	font-weight: 600;
}

.section-title {
	margin: 0;
	font-size: var(--font-size-lg, 20px);
	line-height: var(--line-height-heading, 1.2);
	font-weight: 700;
	letter-spacing: -0.01em;
}

.section-header {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	line-height: var(--line-height-heading, 1.2);
	margin: 0 0 var(--space-sm, 8px);
	color: var(--spice-subtext);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

/* Top list rows */
.top-list-row {
	display: flex;
	align-items: center;
	height: 64px;
	box-sizing: border-box;
	padding: 8px 6px;
	cursor: pointer;
	gap: 12px;
	border-radius: 6px;
	transition: background 0.15s;
	overflow: hidden;
}

.top-list-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

/* Rank badges */
.rank-number {
	width: 28px;
	text-align: center;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-subtext);
	flex-shrink: 0;
}

.rank-gold,
.rank-silver,
.rank-bronze {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: #1a1a1a;
	flex-shrink: 0;
}

.rank-gold {
	background: var(--rank-gold, #ffd700);
}
.rank-silver {
	background: var(--rank-silver, #c0c0c0);
}
.rank-bronze {
	background: var(--rank-bronze, #cd7f32);
}

/* Activity chart */
.activity-chart-wrapper {
	position: relative;
}

.activity-chart-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
}

.activity-chart-peak {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.activity-chart-peak span {
	color: var(--spice-button);
	font-weight: 700;
}

.activity-chart {
	display: flex;
	align-items: flex-end;
	gap: 2px;
	height: 160px;
	padding: 8px 0;
}

.activity-bar {
	flex: 1;
	background: rgba(var(--spice-rgb-button), 0.4);
	border-radius: 2px 2px 0 0;
	min-width: 4px;
	transition: height 0.2s ease;
	cursor: pointer;
}

.activity-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.7);
}

.activity-bar.peak {
	background: var(--spice-button);
}

.activity-chart-labels {
	display: flex;
	justify-content: space-between;
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.consistency-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 10px;
}

.consistency-metric {
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
}

.consistency-metric-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
}

.consistency-metric-value {
	margin-top: 6px;
	font-size: 24px;
	font-weight: 700;
	line-height: 1;
}

.consistency-metric-sub {
	margin-top: 6px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.62);
}

.consistency-footer {
	margin-top: 12px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 12px;
}

.consistency-coverage-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.56);
	margin-bottom: 6px;
}

.consistency-coverage-row {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
}

.consistency-coverage-track {
	flex: 1;
	height: 8px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.15);
	overflow: hidden;
}

.consistency-coverage-fill {
	height: 100%;
	background: var(--spice-button);
}

.consistency-sparkline-bars {
	height: 44px;
	display: flex;
	align-items: flex-end;
	gap: 3px;
}

.consistency-sparkline-bar-wrap {
	flex: 1;
	display: flex;
	align-items: flex-end;
	height: 100%;
	min-height: 44px;
}

.consistency-sparkline-bar {
	width: 100%;
	border-radius: 3px 3px 0 0;
	background: rgba(var(--spice-rgb-button), 0.65);
	transition: background 0.15s ease;
}

.consistency-sparkline-bar:hover {
	background: rgba(var(--spice-rgb-button), 0.85);
}

.consistency-sparkline-bar.peak {
	background: var(--spice-button);
}

.consistency-week-split-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.consistency-week-chip {
	padding: 10px 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	background: rgba(var(--spice-rgb-main), 0.25);
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.7);
}

.consistency-week-chip strong {
	font-size: 15px;
	color: var(--spice-text);
}

/* Recently played */
.recently-played {
	display: flex;
	gap: 14px;
	overflow-x: auto;
	padding-bottom: 4px;
	margin-right: -24px;
	padding-right: 24px;
}

.recently-played::-webkit-scrollbar {
	display: none;
}

.recently-played-item {
	flex: 0 0 132px;
	width: 132px;
	min-width: 132px;
	max-width: 132px;
	cursor: pointer;
}

.recently-played-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
	object-fit: cover;
	background: var(--spice-main);
}

.recently-played-name {
	margin-top: 8px;
	display: block;
	width: 100%;
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-artist {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.recently-played-time {
	display: block;
	width: 100%;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.4);
	margin-top: 2px;
}

/* Loading skeletons */
.skeleton-shimmer {
	background: var(--spice-card);
	animation: shimmer 1.5s infinite;
	border-radius: 4px;
}

@keyframes shimmer {
	0% {
		opacity: 0.5;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0.5;
	}
}

.skeleton-text {
	height: 14px;
	margin: 4px 0;
}

.skeleton-card {
	height: 80px;
	border-radius: 8px;
}

/* Recently played skeleton */
.recently-played-skeleton-art {
	width: 132px;
	height: 132px;
	border-radius: 6px;
}

.recently-played-skeleton-text {
	width: 100px;
	height: 10px;
	border-radius: 2px;
	margin-top: 8px;
}

.recently-played-skeleton-subtext {
	width: 70px;
	height: 8px;
	border-radius: 2px;
	margin-top: 4px;
}

/* Empty state */
.empty-state {
	text-align: center;
	padding: 48px 16px;
	color: var(--spice-subtext);
}

.empty-state-icon {
	font-size: 48px; /* Exception: decorative emoji icon, not in type scale */
	margin-bottom: 16px;
	opacity: 0.5;
}

.empty-state-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-text);
	margin-bottom: 8px;
}

.empty-state-message {
	font-size: var(--font-size-md, 14px);
}

/* Error state */
.error-state {
	padding: 16px;
	color: var(--spice-subtext);
	border-radius: 8px;
	background: var(--spice-card);
}

.error-state-message {
	margin-bottom: 12px;
}

/* Inline error card */
.inline-error-card {
	display: flex;
	align-items: flex-start;
	gap: 14px;
	padding: 18px 20px;
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.18);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.02);
}

.inline-error-content {
	flex: 1;
	min-width: 0;
}

.inline-error-title {
	font-size: 13px;
	font-weight: 600;
}

.inline-error-body {
	font-size: var(--font-size-sm);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-top: 2px;
}

.inline-error-countdown {
	margin-top: 8px;
	font-size: var(--font-size-sm);
	color: var(--spice-button);
	font-variant-numeric: tabular-nums;
	font-weight: 600;
}

.inline-error-cta {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc), 0.16);
	background: transparent;
	color: var(--spice-text);
	padding: 7px 14px;
	font-size: var(--font-size-sm);
	font-weight: 600;
	border-radius: 999px;
	cursor: pointer;
	flex-shrink: 0;
	align-self: center;
}

/* Settings overlay/modal */
.settings-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.settings-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 520px;
	max-height: 80vh;
	overflow-y: auto;
	padding: 24px;
}

.settings-modal.update-modal {
	width: 560px;
	max-height: 85vh;
}

.update-modal-status {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
	margin: 0 0 12px;
	line-height: 1.45;
}

.update-modal-note {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin: 0 0 8px;
	line-height: 1.45;
}

.update-modal-install-hint {
	margin-bottom: 16px;
	padding: 12px;
	border-radius: 8px;
	background: rgba(var(--spice-rgb-button), 0.06);
	border: 1px solid rgba(var(--spice-rgb-button), 0.15);
}

.update-modal-copy-row {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 8px;
}

.update-modal-releases-link {
	margin-left: auto;
	font-size: var(--font-size-sm, 12px);
}

.update-modal-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.update-modal-actions-top {
	margin-bottom: 16px;
}

.update-modal-pref-row {
	margin-bottom: 4px;
}

.update-modal-install-short {
	margin: 8px 0 12px;
}

.update-modal-changelog-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 8px;
	padding-top: 8px;
	border-top: 1px solid var(--spice-misc);
}

.update-modal-changelog-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error, #e83b3b);
	margin: 0 0 8px;
}

.update-modal-changelog {
	max-height: min(40vh, 320px);
	overflow: auto;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.5;
}

.markdown-lite h3 {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 16px 0 8px;
}

.markdown-lite h3:first-child {
	margin-top: 0;
}

.markdown-lite p {
	margin: 0 0 8px;
}

.markdown-lite code {
	font-family: ui-monospace, monospace;
	font-size: 11px;
	padding: 1px 4px;
	border-radius: 4px;
	background: rgba(var(--spice-rgb-text), 0.08);
}

.markdown-lite a {
	color: var(--spice-button);
}

.settings-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.settings-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
}

/* Settings tabs */
.settings-tabs {
	display: flex;
	gap: 8px;
	border-bottom: 1px solid var(--spice-misc);
	margin-bottom: 16px;
}

.settings-tab {
	cursor: pointer;
	padding: 8px 16px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
}

.settings-tab:hover {
	color: var(--spice-text);
}

.settings-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Settings rows */
.settings-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 0;
	border-bottom: 1px solid var(--spice-misc);
}

.settings-row:last-child {
	border-bottom: none;
}

.settings-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.settings-sublabel {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 2px;
}

/* Health indicator */
.health-indicator {
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.health-dot {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	display: inline-block;
	flex-shrink: 0;
	cursor: default;
}

.health-green {
	background: #1ed760;
}

.health-yellow {
	background: #f59b23;
}

.health-red {
	background: #e83b3b;
}

/* Legacy settings-btn kept for backwards compatibility */
.settings-btn {
	background: none;
	border: none;
	cursor: pointer;
	padding: 8px;
	color: var(--spice-subtext);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition:
		color 0.15s,
		background 0.15s;
	width: 32px;
	height: 32px;
}

.settings-btn:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.settings-btn svg {
	width: 20px;
	height: 20px;
}

/* Primary/destructive buttons */
.btn-primary {
	background: var(--spice-button);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-primary:hover {
	opacity: 0.85;
}

.btn-destructive {
	background: var(--spice-notification-error);
	color: var(--spice-text);
	border: none;
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
}

.btn-destructive:hover {
	opacity: 0.85;
}

.btn-secondary {
	background: none;
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: var(--font-size-md, 14px);
}

.btn-secondary:hover {
	color: var(--spice-text);
	border-color: var(--spice-text);
}

/* Album art thumbnail */
.track-art {
	width: 44px;
	height: 44px;
	border-radius: 4px;
	object-fit: cover;
	background: var(--spice-card);
	flex-shrink: 0;
}

.track-art--round {
	border-radius: 50%;
}

/* Genre chips on TopLists rows */
.genre-chips {
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-xs);
	margin-top: var(--space-xs);
}

.genre-chip {
	display: inline-block;
	padding: var(--space-xs) var(--space-sm);
	border-radius: 999px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	color: var(--spice-subtext);
	font-size: var(--font-size-sm);
	font-weight: 400;
	line-height: var(--line-height-label);
	white-space: nowrap;
}

/* Import progress */
.import-progress {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-progress-label {
	font-size: var(--font-size-md, 14px);
	color: var(--spice-subtext);
}

.import-progress-bar {
	width: 100%;
	height: 4px;
	-webkit-appearance: none;
	appearance: none;
	border-radius: 2px;
	background: var(--spice-misc);
}

.import-progress-bar::-webkit-progress-bar {
	background: var(--spice-misc);
	border-radius: 2px;
}

.import-progress-bar::-webkit-progress-value {
	background: var(--spice-button);
	border-radius: 2px;
}

/* Import result card */
.import-result-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.import-result-row {
	display: flex;
	align-items: baseline;
	gap: 4px;
	font-size: var(--font-size-md, 14px);
}

.import-result-count {
	font-weight: 700;
}

.import-result-count--success {
	color: var(--spice-button);
}

.import-result-count--neutral {
	color: var(--spice-subtext);
}

.import-result-count--error {
	color: var(--spice-notification-error);
}

.import-result-label {
	color: var(--spice-subtext);
}

.import-result-errors {
	margin-top: 4px;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
}

.import-result-actions {
	margin-top: 8px;
	display: flex;
	justify-content: flex-end;
}

/* Provider tab */

.provider-status-card {
	width: 100%;
	background: var(--spice-card);
	border-radius: 4px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.tier-badge {
	display: inline-block;
	border-radius: 4px;
	padding: 2px 8px;
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	line-height: 1.4;
}

.tier-badge--free {
	color: var(--spice-subtext);
	border: 1px solid var(--spice-misc);
}

.tier-badge--plus {
	color: var(--spice-button);
	background: rgba(var(--spice-rgb-button), 0.15);
}

.provider-radio-row {
	display: flex;
	align-items: center;
	min-height: 44px;
	padding: 8px 12px;
	cursor: pointer;
	gap: 12px;
	border-radius: 4px;
	border-left: 2px solid transparent;
	transition: background 0.1s;
}

.provider-radio-row:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.provider-radio-row.active {
	border-left: 2px solid var(--spice-button);
}

.provider-radio-row.active .settings-label {
	color: var(--spice-text);
}

.provider-connect-error {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-notification-error);
	margin-top: 4px;
}

/* Provider unavailable section */
.provider-unavailable-section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 48px 16px;
}

.provider-unavailable-msg {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 8px;
}

/* Activity tabs */
.activity-tabs {
	display: flex;
	gap: 0;
	margin-bottom: 12px;
}

.activity-tab {
	cursor: pointer;
	padding: 4px 8px;
	color: var(--spice-subtext);
	background: none;
	border: none;
	border-bottom: 2px solid transparent;
	font-size: var(--font-size-md, 14px);
	transition: color 0.15s;
}

.activity-tab:hover {
	color: var(--spice-text);
}

.activity-tab.active {
	color: var(--spice-text);
	border-bottom: 2px solid var(--spice-button);
}

/* Weekday chart */
.weekday-chart {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
	height: 160px;
	padding: 8px 0;
}

.weekday-column {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
}

.weekday-bar-area {
	flex: 1;
	display: flex;
	align-items: flex-end;
	width: 100%;
	min-height: 0;
}

.weekday-bar-area .activity-bar {
	width: 100%;
}

.weekday-label {
	margin-top: 6px;
	font-size: 11px;
	color: var(--spice-subtext);
	text-align: center;
}

/* Calendar heatmap */
.heatmap-container {
	position: relative;
	padding-top: 18px;
	overflow-x: auto;
}

.heatmap-scroll-inner {
	min-width: min-content;
}

.heatmap-month-labels {
	display: grid;
	gap: 3px;
	font-size: 10px;
	color: rgba(var(--spice-rgb-text), 0.5);
	height: 14px;
	margin-bottom: 4px;
}

.heatmap-grid {
	display: grid;
	gap: 3px;
}

.heatmap-week {
	display: grid;
	grid-template-rows: repeat(7, 11px);
	gap: 3px;
}

.heatmap-cell {
	width: 11px;
	height: 11px;
	border-radius: 2px;
}

.heatmap-legend {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 6px;
	margin-top: 10px;
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.5);
}

.heatmap-legend-swatch {
	display: inline-block;
	width: 11px;
	height: 11px;
	border-radius: 2px;
}

/* Streak callout */
.streak-callout {
	margin-top: 14px;
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

/* Setup wizard */
.wizard-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: 520px;
	max-width: calc(100vw - 48px);
	padding: 24px;
	text-align: center;
}

.wizard-page {
	width: 100%;
	display: flex;
	justify-content: center;
	padding: var(--space-md, 16px) 0 var(--space-xl, 32px);
}

.wizard-modal--page {
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.wizard-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0 0 8px 0;
	line-height: 1.2;
}

.wizard-subtitle {
	font-size: var(--font-size-md, 14px);
	font-weight: 400;
	color: var(--spice-subtext);
	margin: 0 0 24px 0;
	line-height: 1.5;
}

.wizard-provider-cards {
	display: flex;
	flex-direction: row;
	gap: 16px;
}

.wizard-provider-card {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	padding: 24px;
	background: transparent;
	border: 1px solid var(--spice-misc);
	border-radius: 8px;
	cursor: pointer;
	min-height: 44px;
	transition: background 0.1s;
	text-align: center;
	color: inherit;
	font-family: inherit;
}

.wizard-provider-card:hover {
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.wizard-provider-name {
	font-size: var(--font-size-md, 14px);
	font-weight: 700;
	color: var(--spice-text);
	line-height: 1.2;
}

.wizard-provider-desc {
	font-size: var(--font-size-sm, 12px);
	font-weight: 400;
	color: var(--spice-subtext);
	line-height: 1.4;
}

.wizard-provider-cta {
	font-size: var(--font-size-sm, 12px);
	font-weight: 700;
	color: var(--spice-button);
	margin-top: auto;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.wizard-statsfm-help {
	text-align: left;
	gap: 6px;
	margin-bottom: 14px;
}

.wizard-statsfm-form {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.wizard-statsfm-input {
	width: 100%;
	padding: 10px 12px;
	border-radius: 4px;
	border: 1px solid var(--spice-misc);
	background: var(--spice-main);
	color: var(--spice-text);
	font-size: var(--font-size-md, 14px);
}

.wizard-statsfm-actions {
	display: flex;
	justify-content: space-between;
	gap: 8px;
}

/* Segmented control */
.segmented-control {
	display: flex;
	position: relative;
	background: var(--spice-card);
	border: 1px solid var(--spice-misc);
	border-radius: 4px;
	height: 36px;
	align-items: center;
	width: 100%;
}

.segmented-control-stop {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	z-index: 1;
	transition: color 0.15s;
	user-select: none;
	padding: 0 2px;
	min-width: 0;
}

.segmented-control-stop.active {
	color: var(--spice-text);
	font-weight: 700;
}

.segmented-control-indicator {
	position: absolute;
	top: 2px;
	bottom: 2px;
	border-radius: 3px;
	background: var(--spice-button);
	opacity: 0.85;
	transition:
		left 0.2s ease,
		width 0.2s ease;
	pointer-events: none;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Settings sortable rows + tiles
   Scoped under .display-tab (DisplayTab root). NEW system does NOT
   restore any torn-down dashboard drag CSS. No portal, no ancestor
   transforms, no edge-scroll. Drop line for rows, outline for tiles.
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.display-tab .sortable-row {
	display: flex;
	align-items: center;
	min-height: 40px;
	padding: 0;
	gap: 8px;
	position: relative;
	user-select: none;
	touch-action: none;
}

.display-tab .sortable-row-label {
	flex: 1 1 auto;
	font-size: var(--font-size-md, 14px);
	color: var(--spice-text);
}

.display-tab .sortable-row-toggle {
	flex: 0 0 auto;
}

.display-tab .settings-drag-handle {
	flex: 0 0 auto;
	width: 24px;
	height: 24px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0;
	background: transparent;
	border: none;
	cursor: grab;
	color: var(--spice-subtext);
	border-radius: 4px;
}
.display-tab .settings-drag-handle:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 128, 128, 128), 0.12);
}
.display-tab .settings-drag-handle:active {
	cursor: grabbing;
}

/* Drop-slot indicator line between rows (Decision 5).
   At rest (no active drag in this list): invisible.
   During an active drag in the list (parent has data-drag-active="true"):
   ALL drop-lines show subtle (opacity 0.25) so user can see every drop slot.
   The targeted slot's line glows full opacity + box-shadow. */
.display-tab .settings-drop-line {
	height: 2px;
	margin: 0;
	background: var(--spice-button-active);
	opacity: 0;
	transition:
		opacity 100ms ease,
		box-shadow 100ms ease;
	pointer-events: none;
}
.display-tab [data-drag-active="true"] .settings-drop-line {
	opacity: 0.25;
}
.display-tab [data-drag-active="true"] .settings-drop-line[data-active="true"] {
	opacity: 1;
	box-shadow: 0 0 6px var(--spice-button-active);
}

/* Mini-grid tiles (Overview 2x2, Top Lists 1x3).
   overflow: hidden clips the dragged tile's translate3d so it can't escape
   the modal; drop logic uses live pointer position so reorder still works
   when the visible tile is clipped at the container edge. */
.display-tab .sortable-grid {
	display: grid;
	gap: 8px;
	margin-top: 8px;
	overflow: hidden;
}
.display-tab .sortable-grid--2x2 {
	grid-template-columns: 1fr 1fr;
}
.display-tab .sortable-grid--1x3 {
	grid-template-columns: 1fr 1fr 1fr;
}

/* Overview settings: mirrors actual overview layout (hero + 2x2 right block + 1x3 bottom row) */
.display-tab .overview-settings-top {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 8px;
	margin-top: 8px;
}
.display-tab .overview-settings-top .sortable-grid {
	margin-top: 0;
}
.display-tab .overview-settings-hero {
	border: 1px dashed var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 4px;
	opacity: 0.6;
}
.display-tab .overview-settings-hero-sub {
	font-size: 10px;
	opacity: 0.5;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.display-tab .sortable-tile {
	min-height: 80px;
	padding: 12px;
	border: 1px solid var(--spice-misc);
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 8px;
	cursor: grab;
	user-select: none;
	touch-action: none;
	position: relative;
}
.display-tab .sortable-tile:active {
	cursor: grabbing;
}

.display-tab .sortable-tile-label {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-text);
	text-align: center;
}

.display-tab .sortable-tile-toggle {
	/* Stops drag activation; cursor reverts to default for this hit zone. */
	cursor: default;
}

/* Tile drop target outline (Decision 5, inset so grid does not shift) */
.display-tab .sortable-tile[data-drop-target="true"] {
	outline: 2px solid var(--spice-button-active);
	outline-offset: -2px;
}

.play-count-widget-anchor {
	display: flex;
	align-items: center;
	pointer-events: auto;
	margin-left: 8px;
	flex-shrink: 0;
}

.play-count-pill {
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 4px 10px;
	border-radius: 999px;
	background: rgba(var(--spice-rgb-button), 0.14);
	color: var(--spice-button);
	border: 1px solid rgba(var(--spice-rgb-button), 0.3);
	font-size: 11px;
	font-weight: 700;
	font-variant-numeric: tabular-nums;
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-pill:hover {
	background: rgba(var(--spice-rgb-button), 0.22);
}

.play-count-dot {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: var(--spice-button);
}

.play-count-bubble {
	position: relative;
	cursor: pointer;
}
.play-count-bubble-icon {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.06);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--spice-button);
	font-size: 10px;
}
.play-count-badge {
	position: absolute;
	top: -3px;
	right: -4px;
	min-width: 18px;
	height: 18px;
	padding: 0 4px;
	background: var(--spice-button);
	color: #000;
	border-radius: 999px;
	font-size: 10px;
	font-weight: 800;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #000;
	font-variant-numeric: tabular-nums;
}

.play-count-minimal {
	display: inline-flex;
	align-items: center;
	gap: 4px;
	color: rgba(255, 255, 255, 0.7);
	font-size: 11px;
	font-weight: 600;
	font-variant-numeric: tabular-nums;
	padding: 3px 7px;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.06);
	cursor: pointer;
	transition: background 0.15s ease;
}
.play-count-minimal:hover {
	background: rgba(255, 255, 255, 0.1);
}

.page-tabs {
	display: flex;
	gap: var(--space-xs, 4px);
	margin-left: var(--space-sm, 8px);
	flex-wrap: nowrap;
	min-width: 0;
	flex-shrink: 0;
}

.page-tab {
	appearance: none;
	border: none;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 4px 10px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s;
	white-space: nowrap;
}

.page-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc), 0.06);
}

.page-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc), 0.1);
}

.world-charts-page {
	padding: var(--space-md, 16px) 0;
}

.world-charts-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: var(--space-md, 16px);
	margin-bottom: var(--space-lg, 24px);
}

.world-charts-tabs {
	display: flex;
	gap: var(--space-sm, 8px);
	flex-shrink: 0;
}

.world-charts-tab-group {
	display: flex;
	gap: 2px;
	background: rgba(var(--spice-rgb-misc), 0.06);
	border-radius: 6px;
	padding: 2px;
}

.world-charts-tab {
	appearance: none;
	border: none;
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 5px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s;
}

.world-charts-tab:hover {
	color: var(--spice-text);
}

.world-charts-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc), 0.12);
}

.world-charts-section {
	margin-bottom: var(--space-lg, 24px);
}

.world-charts-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2px var(--space-lg, 24px);
}

.world-chart-item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 8px;
	border-radius: 6px;
	cursor: pointer;
	transition: background 0.15s;
}

.world-chart-item:hover {
	background: rgba(var(--spice-rgb-misc), 0.06);
}

.world-chart-item:focus-visible {
	outline: 2px solid var(--spice-button);
	outline-offset: -2px;
}

.world-chart-tile {
	width: 36px;
	height: 36px;
	border-radius: 4px;
	flex-shrink: 0;
}

.world-chart-tile--round {
	border-radius: 50%;
}

.world-chart-info {
	flex: 1;
	min-width: 0;
}

.world-chart-title {
	font-size: 13px;
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-artist {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.world-chart-stats {
	text-align: right;
	flex-shrink: 0;
}

.world-chart-plays {
	font-size: var(--font-size-sm, 12px);
	font-variant-numeric: tabular-nums;
}

.world-chart-delta {
	font-size: 10px;
	font-variant-numeric: tabular-nums;
}

.world-chart-delta[data-direction="up"] {
	color: var(--spice-button);
}

.world-chart-delta[data-direction="down"] {
	color: #e87b5c;
}

.world-chart-delta[data-direction="neutral"] {
	color: rgba(var(--spice-rgb-text), 0.4);
}

.world-charts-source {
	margin-top: var(--space-sm, 8px);
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.45);
}

.world-charts-empty {
	text-align: center;
	padding: var(--space-2xl, 48px) var(--space-lg, 24px);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-misc), 0.03);
	border: 1px dashed rgba(var(--spice-rgb-misc), 0.12);
}

.world-charts-empty-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin-bottom: var(--space-sm, 8px);
}

.world-charts-empty-body {
	font-size: var(--font-size-md, 14px);
	color: rgba(var(--spice-rgb-text), 0.6);
	margin-bottom: var(--space-md, 16px);
	max-width: 320px;
	margin-inline: auto;
}

@media (max-width: 780px) {
	.world-charts-header {
		flex-direction: column;
	}

	.world-charts-grid {
		grid-template-columns: 1fr;
	}
}

.tour-overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.55);
}

.tour-overlay--targeted {
	background: transparent;
	pointer-events: none;
}

.tour-spotlight {
	pointer-events: none;
	border: 2px solid var(--spice-button);
	animation: tour-pulse 1.8s ease-in-out infinite;
}

@keyframes tour-pulse {
	0%,
	100% {
		border-color: var(--spice-button);
	}
	50% {
		border-color: rgba(255, 255, 255, 0.4);
	}
}

.tour-popover {
	width: 280px;
	max-width: calc(100vw - 16px);
	padding: 14px;
	background: #1f1f1f;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
	text-align: left;
	pointer-events: auto;
}

.tour-popover--positioned {
	position: fixed;
}

.tour-step-counter {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: var(--spice-button);
	margin-bottom: 4px;
}

.tour-label {
	font-size: 13px;
	font-weight: 600;
	color: var(--spice-text);
	margin-bottom: 4px;
}

.tour-text {
	font-size: 12px;
	color: rgba(255, 255, 255, 0.65);
	line-height: 1.5;
}

.tour-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 14px;
}

.tour-btn-skip,
.tour-btn-back {
	appearance: none;
	border: 0;
	background: transparent;
	color: rgba(255, 255, 255, 0.5);
	font-size: 12px;
	cursor: pointer;
	padding: 0;
}

.tour-btn-next {
	appearance: none;
	border: 0;
	background: var(--spice-button);
	color: #000;
	font-size: 12px;
	font-weight: 700;
	padding: 5px 12px;
	border-radius: 999px;
	cursor: pointer;
}

.tour-dots {
	display: flex;
	gap: 4px;
}

.tour-dot {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.2);
}

.tour-dot.active {
	background: var(--spice-button);
}

.share-overlay {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
	display: flex;
	align-items: center;
	justify-content: center;
}

.share-modal {
	background: var(--spice-card);
	border-radius: 8px;
	width: min(720px, calc(100vw - 48px));
	max-width: calc(100vw - 48px);
	max-height: 90vh;
	overflow-y: auto;
	padding: 24px;
}

.share-modal-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 16px;
}

.share-modal-title {
	font-size: var(--font-size-lg, 20px);
	font-weight: 700;
	color: var(--spice-text);
	margin: 0;
}

.share-tabs-row {
	display: flex;
	gap: 4px;
	flex-wrap: wrap;
}

.share-control-group {
	margin-bottom: 12px;
}

.share-control-label {
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: rgba(var(--spice-rgb-text), 0.55);
	margin-bottom: 6px;
}

.share-control-row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin: 6px 0 12px;
}

.share-toggle-row {
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 12px;
	color: var(--spice-text);
}

.share-control-help {
	font-size: 11px;
	color: rgba(var(--spice-rgb-text), 0.55);
}

.share-variant-tab,
.share-size-tab {
	appearance: none;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: transparent;
	color: rgba(var(--spice-rgb-text), 0.55);
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	padding: 5px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition:
		color 0.15s,
		background 0.15s,
		border-color 0.15s;
}

.share-variant-tab:hover,
.share-size-tab:hover {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.06);
}

.share-variant-tab.active,
.share-size-tab.active {
	color: var(--spice-text);
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-color: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.2);
}

.share-size-tab:disabled {
	opacity: 0.35;
	cursor: not-allowed;
	pointer-events: none;
}

.share-preview-container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 260px;
	max-height: min(58vh, 640px);
	overflow: auto;
	padding: 16px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	border-radius: 8px;
	background: rgba(var(--spice-rgb-main), 0.3);
}

.share-preview-image {
	max-width: 100%;
	max-height: min(54vh, 600px);
	width: auto;
	height: auto;
	object-fit: contain;
	border-radius: 10px;
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.share-preview-status {
	font-size: 12px;
	color: rgba(var(--spice-rgb-text), 0.65);
}

.share-actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 8px;
	margin-top: 12px;
}

.share-action-btn {
	min-width: 140px;
}

/* App footer */
.stats-app-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: var(--space-sm, 8px);
	margin-top: var(--space-xl, 32px);
	padding-top: var(--space-md, 16px);
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.12);
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.55);
}

.stats-app-footer-credit {
	font-style: italic;
}

.stats-app-footer-meta {
	display: inline-flex;
	align-items: center;
	gap: 12px;
}

.stats-app-footer-version {
	font-variant-numeric: tabular-nums;
	color: rgba(var(--spice-rgb-text), 0.45);
}

.stats-app-footer-install-link {
	appearance: none;
	border: none;
	background: none;
	cursor: pointer;
	padding: 0;
	font: inherit;
	color: var(--spice-button);
	font-weight: 600;
	text-decoration: underline;
	text-underline-offset: 2px;
}

.stats-app-footer-install-link:hover {
	color: var(--spice-button-active, var(--spice-button));
}

.settings-about-short-lead {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.5;
	margin: 12px 0 0;
}

.settings-about-check-updates {
	margin-top: 12px;
	padding: 6px 14px;
}

.settings-about-beta-row {
	padding-top: 4px;
}

.update-modal-install-section {
	margin-top: 8px;
	padding-top: 16px;
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.update-modal-section-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 8px;
}

.update-modal-lead {
	margin-top: 0;
}

.update-modal-beta-hint {
	margin-top: 12px;
}

.update-modal-repo-hint {
	margin-bottom: 0;
}

.settings-about-install {
	margin-top: 8px;
	padding-top: 16px;
	border-top: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
}

.settings-about-install-title {
	font-size: var(--font-size-md, 14px);
	font-weight: 600;
	color: var(--spice-text);
	margin: 0 0 10px;
}

.settings-about-install-lead {
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.82);
	line-height: 1.55;
	margin: 0 0 14px;
}

.settings-about-code {
	font-family: ui-monospace, monospace;
	font-size: 11px;
	background: rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
	padding: 1px 5px;
	border-radius: 4px;
}

.settings-about-install-steps {
	margin: 0 0 16px;
	padding-left: 20px;
	font-size: var(--font-size-sm, 12px);
	color: rgba(var(--spice-rgb-text), 0.85);
	line-height: 1.55;
}

.settings-about-install-steps li {
	margin-bottom: 8px;
}

.settings-about-command-block {
	margin-bottom: 14px;
	border-radius: 8px;
	border: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.1);
	background: rgba(var(--spice-rgb-main), 0.35);
	overflow: hidden;
}

.settings-about-command-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	padding: 8px 10px;
	border-bottom: 1px solid rgba(var(--spice-rgb-misc, 255, 255, 255), 0.08);
}

.settings-about-command-label {
	font-size: var(--font-size-sm, 12px);
	font-weight: 600;
	color: var(--spice-subtext);
}

.settings-about-copy-btn {
	flex-shrink: 0;
	padding: 4px 12px;
	font-size: 12px;
}

.settings-about-command-pre {
	margin: 0;
	padding: 12px;
	font-family: ui-monospace, monospace;
	font-size: 11px;
	line-height: 1.45;
	color: rgba(var(--spice-rgb-text), 0.92);
	white-space: pre-wrap;
	word-break: break-all;
	max-height: 120px;
	overflow: auto;
}

.settings-about-install-note {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	line-height: 1.55;
	margin: 0 0 8px;
}

.settings-about-hint {
	font-size: var(--font-size-sm, 12px);
	color: var(--spice-subtext);
	margin-top: 16px;
	line-height: 1.5;
}

.settings-inline-link {
	color: var(--spice-button);
}
`;function hd(){let e=document.getElementById("listening-stats-styles");e&&e.remove();let n=document.createElement("style");n.id="listening-stats-styles",n.textContent=md,document.head.appendChild(n)}var{React:gd}=Spicetify,vd=!1,xn=null,Li=null,Py=[".main-nowPlayingWidget-nowPlaying",".main-nowPlayingBar-left",'[data-testid="now-playing-widget"]'];function yd(){for(let e of Py){let n=document.querySelector(e);if(n)return n}return null}function Ry(){if(hd(),!vd){vd=!0;let e=document.createElement("div");e.id="listening-stats-widget-root",e.style.display="contents",document.body.appendChild(e);let n=()=>{let i=yd();i&&e.parentElement!==i&&i.appendChild(e)};n(),xn=new MutationObserver(()=>{n()}),xn.observe(document.body,{childList:!0,subtree:!0}),Li=setInterval(n,2e3),Spicetify.ReactDOM.render(gd.createElement(fd),e)}return gd.createElement(dd)}function Ny(){xn&&(xn.disconnect(),xn=null),Li&&(clearInterval(Li),Li=null)}return zp(Cy);})();
var { render, unmount } = ListeningStatsApp;
