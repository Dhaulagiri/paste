import*as o from"react";import{useUID as c}from"@twilio-paste/uid-library";import{IconWrapper as d}from"./helpers/IconWrapper";const a=({as:l,display:t,element:i="ICON",size:p,color:s,title:r,decorative:e})=>{const n=`ProductChannelsIcon-${c()}`;if(!e&&r==null)throw new Error("[ProductChannelsIcon]: Missing a title for non-decorative icon.");return o.createElement(d,{as:l,display:t,element:i,size:p,color:s},o.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},r?o.createElement("title",{id:n},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.5 13.469a.497.497 0 01.5.498v2.377l3.165-2.756a.501.501 0 01.335-.12h8a.5.5 0 110 .997H9.69l-3.235 2.82a.882.882 0 01-.57.215.867.867 0 01-.885-.877v-2.158H2.5a.5.5 0 110-.996h3zm12-2.99a.5.5 0 110 .997h-15a.5.5 0 110-.997zm0-2.99a.5.5 0 110 .997h-15a.5.5 0 110-.996zm0-2.989a.5.5 0 110 .997h-15a.5.5 0 110-.997h15z"})))};a.displayName="ProductChannelsIcon";export{a as ProductChannelsIcon};
