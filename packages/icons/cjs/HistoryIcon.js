var y=Object.create;var l=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty;var I=r=>l(r,"__esModule",{value:!0});var v=(r,o)=>{for(var e in o)l(r,e,{get:o[e],enumerable:!0})},d=(r,o,e,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of g(o))!H.call(r,i)&&(e||i!=="default")&&l(r,i,{get:()=>o[i],enumerable:!(t=h(o,i))||t.enumerable});return r},W=(r,o)=>d(I(l(r!=null?y(u(r)):{},"default",!o&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),w=(r=>(o,e)=>r&&r.get(o)||(e=d(I({}),o,1),r&&r.set(o,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var x={};v(x,{HistoryIcon:()=>a});var n=W(require("react")),m=require("@twilio-paste/uid-library"),f=require("./helpers/IconWrapper");const a=({as:r,display:o,element:e="ICON",size:t,color:i,title:p,decorative:s})=>{const c=`HistoryIcon-${(0,m.useUID)()}`;if(!s&&p==null)throw new Error("[HistoryIcon]: Missing a title for non-decorative icon.");return n.createElement(f.IconWrapper,{as:r,display:o,element:e,size:t,color:i},n.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":c},p?n.createElement("title",{id:c},p):null,n.createElement("path",{fill:"currentColor",d:"M8.197 2.641a7.966 7.966 0 113.049 15.326.625.625 0 110-1.25 6.716 6.716 0 10-6.71-6.994l1.575-1.65a.625.625 0 01.904.864l-2.837 2.97a.625.625 0 01-.987-.108L1.027 8.224a.625.625 0 111.07-.648l1.196 1.976a7.966 7.966 0 014.904-6.91z"}),n.createElement("path",{fill:"currentColor",d:"M11.712 6.5a.625.625 0 00-1.25 0v3.358c0 .308.16.593.425.75l2.378 1.428a.625.625 0 00.643-1.072l-2.196-1.318V6.5z"})))};a.displayName="HistoryIcon";module.exports=w(x);
