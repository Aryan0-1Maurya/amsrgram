"use strict";(self.webpackChunksocial_media_app=self.webpackChunksocial_media_app||[]).push([[712],{438:function(e,t,r){r.d(t,{aC:function(){return m},f0:function(){return h},aU:function(){return g},mr:function(){return x}});var n=r(4165),a=r(5861),s=r(9439),i=r(2791),u=r(7689),o=r(4098),c=r(5063),l=r(2481),d=r(6910);function p(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,l.IO)((0,l.hJ)(c.db,"users"),(0,l.ar)("username","==",t)),e.next=3,(0,l.PL)(r);case 3:return a=e.sent,e.abrupt("return",a.size>0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){var e=(0,d.F_)(c.I8),t=(0,s.Z)(e,3),r=t[0],u=t[1],o=t[2],p=(0,i.useState)(!0),f=(0,s.Z)(p,2),m=f[0],h=f[1],x=(0,i.useState)(null),g=(0,s.Z)(x,2),v=g[0],b=g[1];return(0,i.useEffect)((function(){function e(){return(e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),t=(0,l.JU)(c.db,"users",r.uid),e.next=4,(0,l.QT)(t);case 4:a=e.sent,b(a.data()),h(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u||(r?function(){e.apply(this,arguments)}():h(!1))}),[u,r]),{user:v,isLoading:m,error:o}}function h(){var e=(0,i.useState)(!1),t=(0,s.Z)(e,2),r=t[0],l=t[1],d=(0,i.useState)(""),p=(0,s.Z)(d,2),f=p[0],m=p[1],h=(0,u.s0)();function x(){return(x=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=t.password,s=t.redirectTo,i=void 0===s?"/":s,l(!0),m(""),e.prev=3,e.next=6,(0,o.e5)(c.I8,r,a);case 6:h(i),e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),m(e.t0.message),l(!1),e.abrupt("return",!1);case 14:return m(""),l(!1),e.abrupt("return",!0);case 17:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}return{login:function(e){return x.apply(this,arguments)},isLoading:r,error:f}}function x(){var e=(0,i.useState)(!1),t=(0,s.Z)(e,2),r=t[0],d=t[1],f=(0,i.useState)(""),m=(0,s.Z)(f,2),h=m[0],x=m[1],g=(0,u.s0)();function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s,i,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.username,a=t.email,s=t.password,i=t.redirectTo,void 0===i?"/":i,d(!0),e.next=4,p(r);case 4:if(!e.sent){e.next=10;break}x("Username already exists"),d(!1),e.next=25;break;case 10:return e.prev=10,e.next=13,(0,o.Xb)(c.I8,a,s);case 13:return u=e.sent,e.next=16,(0,l.pl)((0,l.JU)(c.db,"users",u.user.uid),{id:u.user.uid,username:r,avatar:"",date:Date.now()});case 16:g("/"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(10),x("Signed up failed");case 22:return e.prev=22,d(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[10,19,22,25]])})))).apply(this,arguments)}return{register:function(e){return v.apply(this,arguments)},isLoading:r,error:h}}function g(){var e=(0,d.QJ)(c.I8),t=(0,s.Z)(e,3),r=t[0],i=t[1],o=(t[2],(0,u.s0)());function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(!e.sent){e.next=4;break}o("/signin");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return{logout:function(){return l.apply(this,arguments)},isLoading:i}}},9712:function(e,t,r){r.r(t);var n=r(1413),a=r(9439),s=r(2791),i=r(2333),u=r(7689),o=r(1134),c=r(8352),l=r(8820),d=r(8318),p=r(438),f=r(184);t.default=function(){var e=(0,o.cI)(),t=e.register,r=e.handleSubmit,m=e.reset,h=e.formState.errors,x=(0,d.u_)(),g=x.addPost,v=x.isLoading,b=x.fileURL,w=x.setFile,Z=(0,p.aC)(),j=Z.user,k=Z.isLoading,y=(0,s.useState)(0),N=(0,a.Z)(y,2),L=N[0],P=N[1],S=(0,s.useState)(""),F=(0,a.Z)(S,2),C=(F[0],F[1]),A=(0,u.s0)();return k?null:null!==j&&void 0!==j&&j.id?(0,f.jsxs)(i.E.form,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:1},onSubmit:r((function(e){g({uid:j.id,caption:e.caption}),m(),A("/")})),onClick:function(e){return e.stopPropagation()},className:"h-full w-full max-w-[500px] m-auto p-4 flex flex-col justify-center items-center text-center gap-8 text-black relative",children:[(0,f.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,f.jsx)("div",{className:"text-3xl text-orange-600 font-semibold tracking-wider",children:"New Post"})}),(0,f.jsxs)("div",{className:"w-full flex flex-col justify-center items-center gap-4",children:[(0,f.jsxs)("div",{className:"w-full relative",children:[(0,f.jsx)("textarea",(0,n.Z)((0,n.Z)({},t("caption",c.Ae)),{},{onChange:function(e){return P(e.target.value.length)&C(e.target.value)},placeholder:"Caption",title:"Caption",maxLength:"30",cols:"1",rows:"1",className:"".concat(0!==L?"text-orange-600 placeholder:text-orange-600":null," ").concat(h.caption?"placeholder:text-[#BF0000] border-[#bf000096]":"border-neutral-300"," w-full pb-2 bg-white text-black focus:text-orange-600 font-semibold tracking-wider border-b-2 placeholder:text-neutral-400 placeholder:font-semibold hover:placeholder:text-orange-600 focus:placeholder:text-orange-600 hover:border-orange-600 focus:border-orange-600 outline-none resize-none cursor-pointer duration-300 ease-in-out placeholder:duration-300 placeholder:ease-in-out")})),(0,f.jsx)("p",{className:"absolute top-0 right-0 text-neutral-400 font-semibold",children:0===L?(0,f.jsx)("span",{children:"30"}):(0,f.jsx)("span",{children:c.Ae.maxLength.value-L})}),h.caption?(0,f.jsx)("p",{className:"text-[#BF0000] font-medium text-left tracking-wider",children:0===L?(0,f.jsx)(f.Fragment,{children:h.caption.message}):null}):null]}),(0,f.jsxs)("label",{htmlFor:"pic",title:"Add an image",className:"".concat(h.pic?"border-[#BF0000]":"border-neutral-300"," w-full h-60 flex flex-col justify-center items-center border-2 hover:border-orange-600 rounded-2xl cursor-pointer duration-300 ease-in-out group"),children:[(0,f.jsx)(l.Ypm,{className:"".concat(b?"h-[7.5rem] text-orange-600":"text-neutral-300 opacity-90"," w-full h-28 group-hover:h-[7.5rem] group-hover:text-orange-600 duration-300 ease-in-out")}),(0,f.jsx)("input",(0,n.Z)((0,n.Z)({id:"pic",type:"file",accept:"image/*"},t("pic",c.o5)),{},{className:"hidden",onChange:function(e){w(e.target.files[0])}}))]}),h.pic?(0,f.jsx)("p",{className:"w-full text-[#BF0000] -mt-2 font-medium text-center tracking-wider",children:b?null:(0,f.jsx)(f.Fragment,{children:h.pic.message})}):null]}),(0,f.jsx)("button",{type:"submit",title:"Post",className:"absolute -top-10 right-6 text-orange-600 hover:opacity-50 text-lg font-bold tracking-wider cursor-pointer duration-300 ease-in-out",children:k||v?(0,f.jsx)(f.Fragment,{children:"Loading..."}):(0,f.jsx)(f.Fragment,{children:"Post"})})]}):void A("/signin")}},8352:function(e,t,r){r.d(t,{Ae:function(){return i},DW:function(){return a},Vx:function(){return n},fh:function(){return s},o5:function(){return u}});var n={required:{value:!0,message:"Please enter username"},pattern:{value:/^[a-zA-Z0-9]+$/,message:"Username must be alphanumeric"}},a={required:{value:!0,message:"Please enter an email address"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Email address is not valid"}},s={required:{value:!0,message:"Please enter password"},minLength:{value:6,message:"Password must be at least 6 characters long"}},i={required:{value:!0,message:"Please enter caption"},maxLength:{value:30,message:"Caption must be at most 30 characters long"}},u={required:{value:!0,message:"Please choose picture"}}}}]);
//# sourceMappingURL=712.aab08790.chunk.js.map