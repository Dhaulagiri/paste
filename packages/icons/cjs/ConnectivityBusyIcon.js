var d=Object.create;var t=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var y=o=>t(o,"__esModule",{value:!0});var g=(o,r)=>{for(var n in r)t(o,n,{get:r[n],enumerable:!0})},I=(o,r,n,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of f(r))!B.call(o,e)&&(n||e!=="default")&&t(o,e,{get:()=>r[e],enumerable:!(i=v(r,e))||i.enumerable});return o},h=(o,r)=>I(y(t(o!=null?d(C(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),x=(o=>(r,n)=>o&&o.get(r)||(n=I(y({}),r,1),o&&o.set(r,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var W={};g(W,{ConnectivityBusyIcon:()=>p});var c=h(require("react")),m=require("@twilio-paste/uid-library"),u=require("./helpers/IconWrapper");const p=({as:o,display:r,element:n="ICON",size:i,color:e,title:s,decorative:l})=>{const a=`ConnectivityBusyIcon-${(0,m.useUID)()}`;if(!l&&s==null)throw new Error("[ConnectivityBusyIcon]: Missing a title for non-decorative icon.");return c.createElement(u.IconWrapper,{as:o,display:r,element:n,size:i,color:e},c.createElement("svg",{role:"img","aria-hidden":l,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":a},s?c.createElement("title",{id:a},s):null,c.createElement("circle",{fill:"currentColor",cx:10,cy:10,r:4})))};p.displayName="ConnectivityBusyIcon";module.exports=x(W);
