import*as o from"react";import{useUID as s}from"@twilio-paste/uid-library";import{IconWrapper as c}from"./helpers/IconWrapper";const i=({as:t,display:l,element:p="ICON",size:a,color:h,title:r,decorative:e})=>{const n=`ChevronRightIcon-${s()}`;if(!e&&r==null)throw new Error("[ChevronRightIcon]: Missing a title for non-decorative icon.");return o.createElement(c,{as:t,display:l,element:p,size:a,color:h},o.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},r?o.createElement("title",{id:n},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.707 6.293a1 1 0 00-1.497 1.32l.083.094L10.585 10l-2.292 2.293a1 1 0 00-.083 1.32l.083.094a1 1 0 001.32.083l.094-.083 3-3a1 1 0 00.083-1.32l-.083-.094-3-3z"})))};i.displayName="ChevronRightIcon";export{i as ChevronRightIcon};
