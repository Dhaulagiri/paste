import*as o from"react";import{useUID as c}from"@twilio-paste/uid-library";import{IconWrapper as d}from"./helpers/IconWrapper";const s=({as:n,display:i,element:p="ICON",size:a,color:t,title:e,decorative:r})=>{const l=`ChevronDisclosureCollapsedIcon-${c()}`;if(!r&&e==null)throw new Error("[ChevronDisclosureCollapsedIcon]: Missing a title for non-decorative icon.");return o.createElement(d,{as:n,display:i,element:p,size:a,color:t},o.createElement("svg",{role:"img","aria-hidden":r,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":l},e?o.createElement("title",{id:l},e):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.382 9.742l-4.371-3.67a.305.305 0 00-.442.052.34.34 0 00-.069.206v7.34c0 .182.14.33.314.33.072 0 .141-.026.197-.072l4.371-3.67a.341.341 0 000-.516z"})))};s.displayName="ChevronDisclosureCollapsedIcon";export{s as ChevronDisclosureCollapsedIcon};
