/*! For license information please see 679.7553f3d9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[679],{242:function(t,r,e){e.d(r,{IV:function(){return h},UC:function(){return u},Vp:function(){return l},kh:function(){return a},lw:function(){return d}});var n=e(861),o=e(243);function i(){i=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(N){s=function(t,r,e){return t[r]=e}}function l(t,r,e,o){var i=r&&r.prototype instanceof p?r:p,a=Object.create(i.prototype),c=new Z(o||[]);return n(a,"_invoke",{value:L(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==r&&e.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function b(t,r){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function L(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=f(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function j(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,j(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function a(t){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(i().mark((function t(r){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?language=en-US",{signal:r.signal});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.query,n=r.abortCTRL,t.next=3,o.Z.get("search/movie",{signal:n.signal,params:{query:e,language:"en-US",include_adult:!1,page:1}});case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.id,n=r.abortCTRL,t.next=3,o.Z.get("movie/".concat(e,"}"),{signal:n.signal,params:{language:"en-US",include_adult:!1,append_to_response:"credits, reviews"}});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.id,n=r.abortCTRL,t.next=3,o.Z.get("movie/".concat(e,"/credits?language=en-US"),{signal:n.signal});case 3:return a=t.sent,t.abrupt("return",a.data.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function t(r){var e,n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.id,n=r.abortCTRL,t.next=3,o.Z.get("movie/".concat(e,"/reviews?language=en-US"),{signal:n.signal});case 3:return a=t.sent,t.abrupt("return",a.data.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/",o.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGEzYWE4NDJlODc3MzIzMTZmNjUyMmY5NGNjYWIzYiIsInN1YiI6IjY0OTllYjZkYmJkMGIwMDEwNjZmZGNkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FmL6ArnlTWaeJhkdkm9WJSU56E0EQ8jMnjSepQWr4_g",o.Z.defaults.headers.common.accept="application/json"},634:function(t,r,e){e.d(r,{TR:function(){return p},W2:function(){return f},h4:function(){return h},rU:function(){return d}});var n,o,i,a,c,u=e(168),s=e(444),l=e(87),f=s.ZP.div(n||(n=(0,u.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),h=s.ZP.header(o||(o=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex;\n  }\n"]))),p=s.ZP.p(i||(i=(0,u.Z)(["\n  font-weight: 700;\n  margin: 0;\n"]))),d=(0,s.ZP)(l.OL)(a||(a=(0,u.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"])));(0,s.ZP)(l.OL)(c||(c=(0,u.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  /* font-weight: 500; */\n\n  &.active {\n    color: red;\n    /* background-color: orangered; */\n  }\n"])))},679:function(t,r,e){e.r(r),e.d(r,{default:function(){return k}});var n,o,i,a,c=e(433),u=e(861),s=e(439),l=e(87),f=e(689),h=e(634),p=e(705),d=e(168),v=e(444),y=(0,v.ZP)(p.gN)(n||(n=(0,d.Z)(["\n  padding: 10px;\n  border: 2px solid orangered;\n  border-radius: 4px;\n  font-size: 16px;\n  width: 200px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=(0,v.ZP)(p.l0)(o||(o=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),m=v.ZP.button(i||(i=(0,d.Z)(["\n  background-color: orangered;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  margin-left: 10px;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n\n  :hover {\n    background-color: white;\n    color: orangered;\n    border: 2px solid orangered;\n  }\n\n  // export const ButtonLabel = styled.span\n"]))),w=(v.ZP.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),e(184)),x={query:""},b=function(t){var r=t.handleSubmit;return(0,w.jsx)(p.J9,{initialValues:x,children:(0,w.jsxs)(g,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;r(e.elements.query.value),e.reset()},className:"form",children:[(0,w.jsx)(y,{className:"input",name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,w.jsx)(m,{type:"submit",className:"button",children:"Search video"}),(0,w.jsx)(p.Bc,{name:"searchImg",component:"div"})]})})},L=e(242),j=e(791);function E(){E=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(N){u=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof h?r:h,a=Object.create(i.prototype),c=new Z(o||[]);return n(a,"_invoke",{value:b(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var f={};function h(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==r&&e.call(g,i)&&(v=g);var m=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function x(t,r){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function b(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=l(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function L(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,f;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var k=function(){var t=(0,j.useState)([]),r=(0,s.Z)(t,2),e=r[0],n=r[1],o=(0,l.lr)(),i=(0,s.Z)(o,2),a=i[0],p=i[1],d=a.get("query");(0,j.useEffect)((function(){var t=new AbortController,r=function(){var r=(0,u.Z)(E().mark((function r(){var e;return E().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.current&&t.current.abort(),t=new AbortController,r.next=5,(0,L.UC)({query:d,abortCTRL:t});case 5:e=r.sent,n((0,c.Z)(e)),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){t.abort()}}),[d]);var v=(0,f.TH)();return(0,w.jsxs)("div",{children:["Movies",(0,w.jsx)(b,{handleSubmit:function(t){if(""===d)return p({});p({query:t})}}),e&&(0,w.jsx)("ul",{children:e.map((function(t){return(0,w.jsx)("li",{children:(0,w.jsx)(h.rU,{to:"".concat(t.id),state:{from:v},children:t.title})},t.id)}))}),(0,w.jsx)(j.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading..."}),children:(0,w.jsx)(f.j3,{})})]})}}}]);
//# sourceMappingURL=679.7553f3d9.chunk.js.map