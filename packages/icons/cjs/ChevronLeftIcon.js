var m=Object.create;var l=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var f=e=>l(e,"__esModule",{value:!0});var u=(e,o)=>{for(var r in o)l(e,r,{get:o[r],enumerable:!0})},I=(e,o,r,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of C(o))!g.call(e,n)&&(r||n!=="default")&&l(e,n,{get:()=>o[n],enumerable:!(t=v(o,n))||t.enumerable});return e},W=(e,o)=>I(f(l(e!=null?m(L(e)):{},"default",!o&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),w=(e=>(o,r)=>e&&e.get(o)||(r=I(f({}),o,1),e&&e.set(o,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var x={};u(x,{ChevronLeftIcon:()=>a});var i=W(require("react")),d=require("@twilio-paste/uid-library"),h=require("./helpers/IconWrapper");const a=({as:e,display:o,element:r="ICON",size:t,color:n,title:p,decorative:s})=>{const c=`ChevronLeftIcon-${(0,d.useUID)()}`;if(!s&&p==null)throw new Error("[ChevronLeftIcon]: Missing a title for non-decorative icon.");return i.createElement(h.IconWrapper,{as:e,display:o,element:r,size:t,color:n},i.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?i.createElement("title",{id:c},p):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.293 6.293a1 1 0 011.497 1.32l-.083.094L9.415 10l2.292 2.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.32.083l-.094-.083-3-3a1 1 0 01-.083-1.32l.083-.094 3-3z"})))};a.displayName="ChevronLeftIcon";module.exports=w(x);
