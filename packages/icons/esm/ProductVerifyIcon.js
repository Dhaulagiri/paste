import*as r from"react";import{useUID as d}from"@twilio-paste/uid-library";import{IconWrapper as s}from"./helpers/IconWrapper";const t=({as:l,display:n,element:a="ICON",size:c,color:p,title:o,decorative:e})=>{const i=`ProductVerifyIcon-${d()}`;if(!e&&o==null)throw new Error("[ProductVerifyIcon]: Missing a title for non-decorative icon.");return r.createElement(s,{as:l,display:n,element:a,size:c,color:p},r.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":i},o?r.createElement("title",{id:i},o):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.75 2.5c.69 0 1.25.553 1.25 1.234v.331c0 .393-.159.77-.44 1.047l-6.675 6.596c-.49.478-1.28.478-1.77 0L6.645 9.27a.491.491 0 010-.7.507.507 0 01.71 0l2.47 2.438a.241.241 0 00.35 0l6.68-6.591a.49.49 0 00.145-.35v-.332a.248.248 0 00-.25-.247H3.25c-.138 0-.25.111-.25.247v5.762a.49.49 0 00.145.35l6.68 6.592a.241.241 0 00.35 0l3.97-3.92a.507.507 0 01.71 0 .491.491 0 010 .701l-3.97 3.92A1.253 1.253 0 0110 17.5a1.253 1.253 0 01-.885-.36L2.44 10.543A1.472 1.472 0 012 9.496V3.734C2 3.053 2.56 2.5 3.25 2.5h13.5zm-.25 6.824c.828 0 1.5.663 1.5 1.48a1.49 1.49 0 01-1.5 1.482 1.49 1.49 0 01-1.5-1.481 1.49 1.49 0 011.5-1.481z"})))};t.displayName="ProductVerifyIcon";export{t as ProductVerifyIcon};
