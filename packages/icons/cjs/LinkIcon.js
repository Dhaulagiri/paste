var h=Object.create;var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var I=o=>i(o,"__esModule",{value:!0});var v=(o,r)=>{for(var l in r)i(o,l,{get:r[l],enumerable:!0})},d=(o,r,l,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of k(r))!L.call(o,e)&&(l||e!=="default")&&i(o,e,{get:()=>r[e],enumerable:!(n=g(r,e))||n.enumerable});return o},W=(o,r)=>d(I(i(o!=null?h(u(o)):{},"default",!r&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),w=(o=>(r,l)=>o&&o.get(r)||(l=d(I({}),r,1),o&&o.set(r,l),l))(typeof WeakMap!="undefined"?new WeakMap:0);var x={};v(x,{LinkIcon:()=>t});var a=W(require("react")),m=require("@twilio-paste/uid-library"),f=require("./helpers/IconWrapper");const t=({as:o,display:r,element:l="ICON",size:n,color:e,title:p,decorative:s})=>{const c=`LinkIcon-${(0,m.useUID)()}`;if(!s&&p==null)throw new Error("[LinkIcon]: Missing a title for non-decorative icon.");return a.createElement(f.IconWrapper,{as:o,display:r,element:l,size:n,color:e},a.createElement("svg",{role:"img","aria-hidden":s,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":c},p?a.createElement("title",{id:c},p):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.106 8.868a3.175 3.175 0 013.98-.222l.324.233.075.06a.836.836 0 01-1.056 1.295l-.322-.232-.108-.071a1.505 1.505 0 00-1.835.23l-2.139 2.14-.084.09a1.503 1.503 0 00.082 2.037l.09.083c.59.5 1.475.472 2.034-.086l1.298-1.295.073-.065a.835.835 0 011.108.064.835.835 0 01-.004 1.18l-1.298 1.296-.118.112a3.173 3.173 0 01-4.368-.108l-.112-.118a3.174 3.174 0 01.12-4.369l2.14-2.14zm3.581-3.922a3.173 3.173 0 014.368.108l.112.118a3.174 3.174 0 01-.12 4.369l-2.14 2.14-.12.114a3.175 3.175 0 01-3.981.222l-.323-.232-.076-.062a.836.836 0 011.056-1.295l.323.233.108.071c.585.35 1.343.261 1.835-.23l2.139-2.14.084-.09a1.503 1.503 0 00-.082-2.037l-.09-.083a1.504 1.504 0 00-2.034.086l-1.298 1.295-.073.065a.835.835 0 01-1.108-.064.835.835 0 01.004-1.18l1.298-1.296z"})))};t.displayName="LinkIcon";module.exports=w(x);
