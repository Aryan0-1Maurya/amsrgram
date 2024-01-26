/*! For license information please see 152.e71ee691.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[152],{2146:function(r,n,t){t.d(n,{Xi:function(){return C},d4:function(){return d}});var e=t(2481),u=t(2791);var o=function(){return o=Object.assign||function(r){for(var n,t=1,e=arguments.length;t<e;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u]);return r},o.apply(this,arguments)},i=function(r){return{loading:void 0===r||null===r,value:r}},a=function(r){var n=r?r():void 0,t=(0,u.useReducer)((function(r,n){switch(n.type){case"error":return o(o({},r),{error:n.error,loading:!1,value:void 0});case"reset":return i(n.defaultValue);case"value":return o(o({},r),{error:void 0,loading:!1,value:n.value});default:return r}}),i(n)),e=t[0],a=t[1],c=(0,u.useCallback)((function(){var n=r?r():void 0;a({type:"reset",defaultValue:n})}),[r]),l=(0,u.useCallback)((function(r){a({type:"error",error:r})}),[]),v=(0,u.useCallback)((function(r){a({type:"value",value:r})}),[]);return(0,u.useMemo)((function(){return{error:e.error,loading:e.loading,reset:c,setError:l,setValue:v,value:e.value}}),[e.error,e.loading,c,l,v,e.value])},c=function(r,n,t){var e=(0,u.useRef)(r);return(0,u.useEffect)((function(){n(r,e.current)||(e.current=r,t&&t())})),e},l=function(r,n){var t=!r&&!n,u=!!r&&!!n&&(0,e.Eo)(r,n);return t||u},v=function(r,n){return c(r,l,n)},s=function(r,n){var t=!r&&!n,u=!!r&&!!n&&(0,e.iE)(r,n);return t||u},f=function(r,n){return c(r,s,n)},d=function(r,n){var t=function(r,n){var t=a(),o=t.error,i=t.loading,c=t.reset,l=t.setError,v=t.setValue,s=t.value,d=f(r,c);return(0,u.useEffect)((function(){if(d.current){var r=(null===n||void 0===n?void 0:n.snapshotListenOptions)?(0,e.cf)(d.current,n.snapshotListenOptions,v,l):(0,e.cf)(d.current,v,l);return function(){r()}}v(void 0)}),[d.current]),[s,i,o]}(r,n),o=t[0],i=t[1],c=t[2];return[p(o,null===n||void 0===n?void 0:n.snapshotOptions,null===n||void 0===n?void 0:n.initialValue),i,c,o]},p=function(r,n,t){return(0,u.useMemo)((function(){var e;return null!==(e=null===r||void 0===r?void 0:r.docs.map((function(r){return r.data(n)})))&&void 0!==e?e:t}),[r,n])},C=function(r,n){var t=function(r,n){var t=a(),o=t.error,i=t.loading,c=t.reset,l=t.setError,s=t.setValue,f=t.value,d=v(r,c);return(0,u.useEffect)((function(){if(d.current){var r=(null===n||void 0===n?void 0:n.snapshotListenOptions)?(0,e.cf)(d.current,n.snapshotListenOptions,s,l):(0,e.cf)(d.current,s,l);return function(){r()}}s(void 0)}),[d.current]),[f,i,o]}(r,n),o=t[0],i=t[1],c=t[2];return[h(o,null===n||void 0===n?void 0:n.snapshotOptions,null===n||void 0===n?void 0:n.initialValue),i,c,o]},h=function(r,n,t){return(0,u.useMemo)((function(){var e;return null!==(e=null===r||void 0===r?void 0:r.data(n))&&void 0!==e?e:t}),[r,n,t])}},7692:function(r,n,t){t.d(n,{Hlf:function(){return u}});var e=t(9983);function u(r){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"}},{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"}}]})(r)}},1545:function(r,n,t){t.d(n,{uRN:function(){return u}});var e=t(9983);function u(r){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 13 3 C 9.144531 3 6 6.144531 6 10 C 6 12.410156 7.230469 14.550781 9.09375 15.8125 C 5.527344 17.34375 3 20.882813 3 25 L 5 25 C 5 20.570313 8.570313 17 13 17 C 15.144531 17 17.0625 17.878906 18.5 19.25 L 13.78125 23.96875 L 13.71875 24.28125 L 13.03125 27.8125 L 12.71875 29.28125 L 14.1875 28.96875 L 17.71875 28.28125 L 18.03125 28.21875 L 28.125 18.125 C 29.285156 16.964844 29.285156 15.035156 28.125 13.875 C 27.542969 13.292969 26.769531 13 26 13 C 25.246094 13 24.484375 13.285156 23.90625 13.84375 L 19.9375 17.8125 C 19.066406 16.976563 18.035156 16.292969 16.90625 15.8125 C 18.769531 14.550781 20 12.410156 20 10 C 20 6.144531 16.855469 3 13 3 Z M 13 5 C 15.773438 5 18 7.226563 18 10 C 18 12.773438 15.773438 15 13 15 C 10.226563 15 8 12.773438 8 10 C 8 7.226563 10.226563 5 13 5 Z M 26 15 C 26.253906 15 26.519531 15.082031 26.71875 15.28125 C 27.117188 15.679688 27.117188 16.289063 26.71875 16.6875 L 17.03125 26.375 L 15.25 26.75 L 15.625 24.96875 L 25.3125 15.28125 C 25.511719 15.082031 25.746094 15 26 15 Z"}}]})(r)}}}]);
//# sourceMappingURL=152.e71ee691.chunk.js.map