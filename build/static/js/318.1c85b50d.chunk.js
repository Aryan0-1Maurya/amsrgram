/*! For license information please see 318.1c85b50d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[318],{5063:function(n,r,e){e.d(r,{I8:function(){return c},db:function(){return f},tO:function(){return l}});var t=e(4702),u=e(4098),o=e(2481),i=e(276),a=e(2391),s=(0,t.ZF)({apiKey:"AIzaSyAqmJC2y6qC_U450bbswobw_LyW8FiYZ7k",authDomain:"social-media-app-2fe38.firebaseapp.com",projectId:"social-media-app-2fe38",storageBucket:"social-media-app-2fe38.appspot.com",messagingSenderId:"574156900602",appId:"1:574156900602:web:13726a114daac7ada06143"}),c=(0,u.v0)(s),f=(0,o.ad)(s),l=(0,i.cF)(s);(0,a.IH)(s)},8318:function(n,r,e){e.d(r,{ZL:function(){return b},kx:function(){return p},q0:function(){return v},u_:function(){return h}});var t=e(1413),u=e(4165),o=e(5861),i=e(9439),a=e(2791),s=e(5063),c=e(2481),f=e(2146),l=e(5854),d=e(276);function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=n?(0,c.IO)((0,c.hJ)(s.db,"posts"),(0,c.Xo)("date","desc"),(0,c.ar)("uid","==",n)):(0,c.IO)((0,c.hJ)(s.db,"posts"),(0,c.Xo)("date","desc")),e=(0,f.d4)(r),t=(0,i.Z)(e,3),u=t[0],o=t[1],a=t[2];if(a)throw a;return{posts:u,isLoading:o}}function v(n){var r=n.id,e=n.isLiked,t=n.uid,f=(0,a.useState)(!1),l=(0,i.Z)(f,2),d=l[0],p=l[1];function v(){return(v=(0,o.Z)((0,u.Z)().mark((function n(){var o;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p(!0),o=(0,c.JU)(s.db,"posts",r),n.next=4,(0,c.r7)(o,{likes:e?(0,c.Ab)(t):(0,c.vr)(t)});case 4:p(!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{toggleLike:function(){return v.apply(this,arguments)},isLoading:d}}function h(){var n=(0,a.useState)(!1),r=(0,i.Z)(n,2),e=r[0],f=r[1],p=(0,a.useState)(null),v=(0,i.Z)(p,2),h=v[0],b=v[1];function Z(){return(Z=(0,o.Z)((0,u.Z)().mark((function n(r){var e,o,i;return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),e=(0,l.k$)(),o=(0,d.iH)(s.tO,"pictures/"+e),n.next=5,(0,d.KV)(o,h);case 5:return n.next=7,(0,d.Jt)(o);case 7:return i=n.sent,n.next=10,(0,c.pl)((0,c.JU)(s.db,"posts",e),(0,t.Z)((0,t.Z)({},r),{},{id:e,picture:i,date:Date.now(),likes:[]}));case 10:f(!1);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{addPost:function(n){return Z.apply(this,arguments)},isLoading:e,fileURL:h&&URL.createObjectURL(h),setFile:b}}function b(n){var r=(0,a.useState)(!1),e=(0,i.Z)(r,2),t=e[0],f=e[1];function l(){return l=(0,o.Z)((0,u.Z)().mark((function r(){var e,t,i;return(0,u.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.confirm("Are you sure you want to delete this post?")){r.next=14;break}return f(!0),r.next=5,(0,c.oe)((0,c.JU)(s.db,"posts",n));case 5:return e=(0,d.cF)(),t=(0,d.iH)(e,"pictures/"+n),(0,d.oq)(t,(0,c.ar)("postID","==",n)),i=(0,c.IO)((0,c.hJ)(s.db,"comments"),(0,c.ar)("postID","==",n)),r.next=11,(0,c.PL)(i);case 11:r.sent.forEach(function(){var n=(0,o.Z)((0,u.Z)().mark((function n(r){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.oe)(r.ref));case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()),f(!1);case 14:case"end":return r.stop()}}),r)}))),l.apply(this,arguments)}return{deletePost:function(){return l.apply(this,arguments)},isLoading:t}}},2146:function(n,r,e){e.d(r,{Xi:function(){return h},d4:function(){return p}});var t=e(2481),u=e(2791);var o=function(){return o=Object.assign||function(n){for(var r,e=1,t=arguments.length;e<t;e++)for(var u in r=arguments[e])Object.prototype.hasOwnProperty.call(r,u)&&(n[u]=r[u]);return n},o.apply(this,arguments)},i=function(n){return{loading:void 0===n||null===n,value:n}},a=function(n){var r=n?n():void 0,e=(0,u.useReducer)((function(n,r){switch(r.type){case"error":return o(o({},n),{error:r.error,loading:!1,value:void 0});case"reset":return i(r.defaultValue);case"value":return o(o({},n),{error:void 0,loading:!1,value:r.value});default:return n}}),i(r)),t=e[0],a=e[1],s=(0,u.useCallback)((function(){var r=n?n():void 0;a({type:"reset",defaultValue:r})}),[n]),c=(0,u.useCallback)((function(n){a({type:"error",error:n})}),[]),f=(0,u.useCallback)((function(n){a({type:"value",value:n})}),[]);return(0,u.useMemo)((function(){return{error:t.error,loading:t.loading,reset:s,setError:c,setValue:f,value:t.value}}),[t.error,t.loading,s,c,f,t.value])},s=function(n,r,e){var t=(0,u.useRef)(n);return(0,u.useEffect)((function(){r(n,t.current)||(t.current=n,e&&e())})),t},c=function(n,r){var e=!n&&!r,u=!!n&&!!r&&(0,t.Eo)(n,r);return e||u},f=function(n,r){return s(n,c,r)},l=function(n,r){var e=!n&&!r,u=!!n&&!!r&&(0,t.iE)(n,r);return e||u},d=function(n,r){return s(n,l,r)},p=function(n,r){var e=function(n,r){var e=a(),o=e.error,i=e.loading,s=e.reset,c=e.setError,f=e.setValue,l=e.value,p=d(n,s);return(0,u.useEffect)((function(){if(p.current){var n=(null===r||void 0===r?void 0:r.snapshotListenOptions)?(0,t.cf)(p.current,r.snapshotListenOptions,f,c):(0,t.cf)(p.current,f,c);return function(){n()}}f(void 0)}),[p.current]),[l,i,o]}(n,r),o=e[0],i=e[1],s=e[2];return[v(o,null===r||void 0===r?void 0:r.snapshotOptions,null===r||void 0===r?void 0:r.initialValue),i,s,o]},v=function(n,r,e){return(0,u.useMemo)((function(){var t;return null!==(t=null===n||void 0===n?void 0:n.docs.map((function(n){return n.data(r)})))&&void 0!==t?t:e}),[n,r])},h=function(n,r){var e=function(n,r){var e=a(),o=e.error,i=e.loading,s=e.reset,c=e.setError,l=e.setValue,d=e.value,p=f(n,s);return(0,u.useEffect)((function(){if(p.current){var n=(null===r||void 0===r?void 0:r.snapshotListenOptions)?(0,t.cf)(p.current,r.snapshotListenOptions,l,c):(0,t.cf)(p.current,l,c);return function(){n()}}l(void 0)}),[p.current]),[d,i,o]}(n,r),o=e[0],i=e[1],s=e[2];return[b(o,null===r||void 0===r?void 0:r.snapshotOptions,null===r||void 0===r?void 0:r.initialValue),i,s,o]},b=function(n,r,e){return(0,u.useMemo)((function(){var t;return null!==(t=null===n||void 0===n?void 0:n.data(r))&&void 0!==t?t:e}),[n,r,e])}}}]);
//# sourceMappingURL=318.1c85b50d.chunk.js.map