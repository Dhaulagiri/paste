var P=Object.create;var l=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var z=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var s=o=>l(o,"__esModule",{value:!0});var S=(o,r)=>{for(var p in r)l(o,p,{get:r[p],enumerable:!0})},u=(o,r,p,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of h(r))!g.call(o,e)&&(p||e!=="default")&&l(o,e,{get:()=>r[e],enumerable:!(t=f(r,e))||t.enumerable});return o},v=(o,r)=>u(s(l(o!=null?P(z(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),W=(o=>(r,p)=>o&&o.get(r)||(p=u(s({}),r,1),o&&o.set(r,p),p))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};S(w,{ProductSupportIcon:()=>a});var n=v(require("react")),m=require("@twilio-paste/uid-library"),I=require("./helpers/IconWrapper");const a=({as:o,display:r,element:p="ICON",size:t,color:e,title:i,decorative:c})=>{const d=`ProductSupportIcon-${(0,m.useUID)()}`;if(!c&&i==null)throw new Error("[ProductSupportIcon]: Missing a title for non-decorative icon.");return n.createElement(I.IconWrapper,{as:o,display:r,element:p,size:t,color:e},n.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":d},i?n.createElement("title",{id:d},i):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M15.657 4.343A8 8 0 114.343 15.657 8 8 0 0115.657 4.343zm-9.34 4.095L4.102 6.226a7.01 7.01 0 000 7.55l2.214-2.213a4.013 4.013 0 010-3.125zm7.457 7.459l-2.212-2.213a4.013 4.013 0 01-3.124 0l-2.212 2.213a7.01 7.01 0 007.548 0zm-1.653-8.018A3 3 0 107.88 12.12 3 3 0 0012.12 7.88zM6.225 4.104l2.212 2.213a4.013 4.013 0 013.126 0l2.212-2.213a7.01 7.01 0 00-7.31-.147l-.24.147zm9.672 2.122l-2.213 2.212a4.013 4.013 0 010 3.125l2.212 2.212a7.01 7.01 0 00.001-7.55z"})))};a.displayName="ProductSupportIcon";module.exports=W(w);
