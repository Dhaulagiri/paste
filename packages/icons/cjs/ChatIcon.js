var f=Object.create;var l=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var c=o=>l(o,"__esModule",{value:!0});var W=(o,r)=>{for(var e in r)l(o,e,{get:r[e],enumerable:!0})},d=(o,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of C(r))!g.call(o,a)&&(e||a!=="default")&&l(o,a,{get:()=>r[a],enumerable:!(n=v(r,a))||n.enumerable});return o},w=(o,r)=>d(c(l(o!=null?f(u(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),x=(o=>(r,e)=>o&&o.get(r)||(e=d(c({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var y={};W(y,{ChatIcon:()=>p});var t=w(require("react")),I=require("@twilio-paste/uid-library"),m=require("./helpers/IconWrapper");const p=({as:o,display:r,element:e="ICON",size:n,color:a,title:i,decorative:s})=>{const h=`ChatIcon-${(0,I.useUID)()}`;if(!s&&i==null)throw new Error("[ChatIcon]: Missing a title for non-decorative icon.");return t.createElement(m.IconWrapper,{as:o,display:r,element:e,size:n,color:a},t.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":h},i?t.createElement("title",{id:h},i):null,t.createElement("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M3.302 3.255A3.458 3.458 0 015.466 2.5h2.268a3.468 3.468 0 013.322 2.476.5.5 0 00.959-.286A4.468 4.468 0 007.734 1.5H5.468a4.458 4.458 0 00-2.2 8.34v3.493a.5.5 0 00.853.353l2.267-2.266a.5.5 0 00-.708-.707l-1.413 1.413V9.537a.5.5 0 00-.286-.452 3.458 3.458 0 01-.68-5.83zm8.965 3.911a4.466 4.466 0 100 8.933h.36l3.253 3.254a.5.5 0 00.853-.354v-3.492A4.459 4.459 0 0019 11.634a4.469 4.469 0 00-4.466-4.468h-2.267zM9.816 9.182a3.466 3.466 0 012.451-1.016h2.267A3.467 3.467 0 0118 11.632a3.459 3.459 0 01-1.98 3.12.5.5 0 00-.287.451v2.589l-2.546-2.546a.5.5 0 00-.353-.147h-.567a3.466 3.466 0 01-2.451-5.917z"})))};p.displayName="ChatIcon";module.exports=x(y);
