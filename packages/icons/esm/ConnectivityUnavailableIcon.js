import*as n from"react";import{useUID as s}from"@twilio-paste/uid-library";import{IconWrapper as v}from"./helpers/IconWrapper";const r=({as:a,display:l,element:t="ICON",size:c,color:p,title:o,decorative:e})=>{const i=`ConnectivityUnavailableIcon-${s()}`;if(!e&&o==null)throw new Error("[ConnectivityUnavailableIcon]: Missing a title for non-decorative icon.");return n.createElement(v,{as:a,display:l,element:t,size:c,color:p},n.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20",fill:"none","aria-labelledby":i},o?n.createElement("title",{id:i},o):null,n.createElement("circle",{fill:"currentColor",cx:10,cy:10,r:4})))};r.displayName="ConnectivityUnavailableIcon";export{r as ConnectivityUnavailableIcon};
