var u=Object.create;var l=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var d=o=>l(o,"__esModule",{value:!0});var g=(o,r)=>{for(var e in r)l(o,e,{get:r[e],enumerable:!0})},h=(o,r,e,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of f(r))!v.call(o,n)&&(e||n!=="default")&&l(o,n,{get:()=>r[n],enumerable:!(a=P(r,n))||a.enumerable});return o},z=(o,r)=>h(d(l(o!=null?u(C(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),W=(o=>(r,e)=>o&&o.get(r)||(e=h(d({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};g(w,{ProductChannelsIcon:()=>p});var t=z(require("react")),m=require("@twilio-paste/uid-library"),I=require("./helpers/IconWrapper");const p=({as:o,display:r,element:e="ICON",size:a,color:n,title:i,decorative:s})=>{const c=`ProductChannelsIcon-${(0,m.useUID)()}`;if(!s&&i==null)throw new Error("[ProductChannelsIcon]: Missing a title for non-decorative icon.");return t.createElement(I.IconWrapper,{as:o,display:r,element:e,size:a,color:n},t.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},i?t.createElement("title",{id:c},i):null,t.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.5 13.469a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h8a.5.5 0 110 .997H9.69l-3.235 2.82a.882.882 0 01-.57.215.867.867 0 01-.885-.877v-2.158H2.5a.5.5 0 110-.996h3zm12-2.99a.5.5 0 110 .997h-15a.5.5 0 110-.997zm0-2.99a.5.5 0 110 .997h-15a.5.5 0 110-.996zm0-2.989a.5.5 0 110 .997h-15a.5.5 0 110-.997h15z"})))};p.displayName="ProductChannelsIcon";module.exports=W(w);
