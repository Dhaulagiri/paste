var h=Object.create;var t=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var L=e=>t(e,"__esModule",{value:!0});var u=(e,o)=>{for(var r in o)t(e,r,{get:o[r],enumerable:!0})},m=(e,o,r,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of v(o))!g.call(e,a)&&(r||a!=="default")&&t(e,a,{get:()=>o[a],enumerable:!(l=f(o,a))||l.enumerable});return e},z=(e,o)=>m(L(t(e!=null?h(D(e)):{},"default",!o&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),W=(e=>(o,r)=>e&&e.get(o)||(r=m(L({}),o,1),e&&e.set(o,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var w={};u(w,{DeleteIcon:()=>p});var n=z(require("react")),I=require("@twilio-paste/uid-library"),d=require("./helpers/IconWrapper");const p=({as:e,display:o,element:r="ICON",size:l,color:a,title:i,decorative:s})=>{const c=`DeleteIcon-${(0,I.useUID)()}`;if(!s&&i==null)throw new Error("[DeleteIcon]: Missing a title for non-decorative icon.");return n.createElement(d.IconWrapper,{as:e,display:o,element:r,size:l,color:a},n.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},i?n.createElement("title",{id:c},i):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.25 2c.966 0 1.75.784 1.75 1.75L13.999 5H17.5a.5.5 0 01.09.992L17.5 6h-1.501L16 16.25a1.75 1.75 0 01-1.606 1.744L14.25 18H5.74C4.774 18 4 17.217 4 16.25L3.999 6H2.5a.5.5 0 01-.09-.992L2.5 5h3.499L6 3.75a1.75 1.75 0 011.606-1.744L7.75 2zm2.749 4h-10L5 16.25c0 .383.276.694.64.743l.1.007h8.51a.75.75 0 00.75-.75L14.999 6zM8.5 9a.5.5 0 01.492.41L9 9.5v4a.5.5 0 01-.992.09L8 13.5v-4a.5.5 0 01.5-.5zm3 0a.5.5 0 01.492.41L12 9.5v4a.5.5 0 01-.992.09L11 13.5v-4a.5.5 0 01.5-.5zm.75-6h-4.5a.75.75 0 00-.75.75L6.999 5h6L13 3.75a.75.75 0 00-.648-.743L12.25 3z"})))};p.displayName="DeleteIcon";module.exports=W(w);
