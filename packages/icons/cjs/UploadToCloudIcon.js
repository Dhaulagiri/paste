var C=Object.create;var p=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var U=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var v=(o,l)=>{for(var r in l)p(o,r,{get:l[r],enumerable:!0})},I=(o,l,r,e)=>{if(l&&typeof l=="object"||typeof l=="function")for(let a of h(l))!g.call(o,a)&&(r||a!=="default")&&p(o,a,{get:()=>l[a],enumerable:!(e=f(l,a))||e.enumerable});return o},L=(o,l)=>I(s(p(o!=null?C(U(o)):{},"default",!l&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),T=(o=>(l,r)=>o&&o.get(l)||(r=I(s({}),l,1),o&&o.set(l,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var W={};v(W,{UploadToCloudIcon:()=>c});var n=L(require("react")),m=require("@twilio-paste/uid-library"),u=require("./helpers/IconWrapper");const c=({as:o,display:l,element:r="ICON",size:e,color:a,title:i,decorative:d})=>{const t=`UploadToCloudIcon-${(0,m.useUID)()}`;if(!d&&i==null)throw new Error("[UploadToCloudIcon]: Missing a title for non-decorative icon.");return n.createElement(u.IconWrapper,{as:o,display:l,element:r,size:e,color:a},n.createElement("svg",{role:"img","aria-hidden":d,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":t},i?n.createElement("title",{id:t},i):null,n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 8.5h.012c.02 0 .041.002.062.005L10.5 8.5a.502.502 0 01.284.089l.018.013c.014.01.027.02.04.033l.012.011 2.142 2.143a.5.5 0 01-.637.765l-.07-.058L11 10.207V16a.5.5 0 01-.992.09L10 16v-5.793l-1.29 1.29a.5.5 0 01-.637.057l-.07-.058a.5.5 0 01-.057-.637l.058-.07 2.142-2.143.013-.011a.503.503 0 01.039-.033l-.052.044A.502.502 0 0110.5 8.5zm-.5-5c1.817 0 3.457.968 4.356 2.49l.071.127.073.004a3.746 3.746 0 013.495 3.541L18 9.86c0 1.448-.652 2.465-1.717 3.082a4.246 4.246 0 01-1.554.54l-.164.018H14.5a.5.5 0 01-.09-.992l.09-.008.02.002c.068-.006.202-.027.381-.073a3.44 3.44 0 00.88-.352C16.552 11.631 17 10.931 17 9.86c0-1.5-1.196-2.714-2.693-2.747l-.167.001-.33.012-.14-.297A4.06 4.06 0 0010 4.5c-2.105 0-3.814 1.508-4.035 3.526l-.017.203-.032.54-.536-.074C4.128 8.522 3 9.402 3 10.67c0 .876.36 1.37.997 1.635.312.13.64.186.915.196L6.5 12.5a.5.5 0 01.09.992l-.09.008H5.101a3.625 3.625 0 01-1.489-.272C2.618 12.814 2 11.968 2 10.67c0-1.656 1.28-2.869 2.82-2.987l.184-.009.026-.153c.432-2.255 2.373-3.918 4.746-4.016L10 3.5z"})))};c.displayName="UploadToCloudIcon";module.exports=T(W);
