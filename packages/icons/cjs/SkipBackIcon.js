var f=Object.create;var p=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var I=o=>p(o,"__esModule",{value:!0});var v=(o,r)=>{for(var e in r)p(o,e,{get:r[e],enumerable:!0})},d=(o,r,e,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of B(r))!u.call(o,a)&&(e||a!=="default")&&p(o,a,{get:()=>r[a],enumerable:!(i=h(r,a))||i.enumerable});return o},S=(o,r)=>d(I(p(o!=null?f(g(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),L=(o=>(r,e)=>o&&o.get(r)||(e=d(I({}),r,1),o&&o.set(r,e),e))(typeof WeakMap!="undefined"?new WeakMap:0);var W={};v(W,{SkipBackIcon:()=>t});var l=S(require("react")),k=require("@twilio-paste/uid-library"),m=require("./helpers/IconWrapper");const t=({as:o,display:r,element:e="ICON",size:i,color:a,title:n,decorative:c})=>{const s=`SkipBackIcon-${(0,k.useUID)()}`;if(!c&&n==null)throw new Error("[SkipBackIcon]: Missing a title for non-decorative icon.");return l.createElement(m.IconWrapper,{as:o,display:r,element:e,size:i,color:a},l.createElement("svg",{role:"img","aria-hidden":c,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":s},n?l.createElement("title",{id:s},n):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.854 10.146a.5.5 0 01.057.638l-.057.07a.5.5 0 01-.638.057l-.07-.057-3-3-.011-.013a.503.503 0 01-.033-.039l.044.052A.502.502 0 013 7.5v-.01c0-.022.002-.043.005-.064L3 7.5a.502.502 0 01.089-.284l.013-.018a.503.503 0 01.033-.04l.011-.012 3-3a.5.5 0 01.765.638l-.057.07L4.706 7H12.5a4.5 4.5 0 01.212 8.995L12.5 16h-5a.5.5 0 01-.09-.992L7.5 15h5a3.5 3.5 0 00.192-6.995L12.5 8H4.706l2.148 2.146z"})))};t.displayName="SkipBackIcon";module.exports=L(W);
