var S=Object.create;var l=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var f=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var h=a=>l(a,"__esModule",{value:!0});var M=(a,e)=>{for(var o in e)l(a,o,{get:e[o],enumerable:!0})},m=(a,e,o,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of b(e))!C.call(a,r)&&(o||r!=="default")&&l(a,r,{get:()=>e[r],enumerable:!(p=v(e,r))||p.enumerable});return a},g=(a,e)=>m(h(l(a!=null?S(f(a)):{},"default",!e&&a&&a.__esModule?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a),u=(a=>(e,o)=>a&&a.get(e)||(o=m(h({}),e,1),a&&a.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var z={};M(z,{SMSCapableIcon:()=>t});var n=g(require("react")),I=require("@twilio-paste/uid-library"),d=require("./helpers/IconWrapper");const t=({as:a,display:e,element:o="ICON",size:p,color:r,title:i,decorative:s})=>{const c=`SMSCapableIcon-${(0,I.useUID)()}`;if(!s&&i==null)throw new Error("[SMSCapableIcon]: Missing a title for non-decorative icon.");return n.createElement(d.IconWrapper,{as:a,display:e,element:o,size:p,color:r},n.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},i?n.createElement("title",{id:c},i):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.5 3A1.502 1.502 0 0118 4.5v10a1.502 1.502 0 01-1.5 1.5H9.667L5.8 18.9a.5.5 0 01-.8-.4V16H3.5A1.502 1.502 0 012 14.5v-10A1.502 1.502 0 013.5 3zm0 1h-13a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h2a.5.5 0 01.5.5v2l3.2-2.4a.5.5 0 01.3-.1h7a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5zm-5 7a.5.5 0 110 1h-6a.5.5 0 110-1h6zm3-3a.5.5 0 110 1h-9a.5.5 0 010-1h9z"})))};t.displayName="SMSCapableIcon";module.exports=u(z);
