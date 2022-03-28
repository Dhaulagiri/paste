import*as r from"react";import{useUID as s}from"@twilio-paste/uid-library";import{IconWrapper as I}from"./helpers/IconWrapper";const a=({as:i,display:l,element:p="ICON",size:t,color:c,title:e,decorative:o})=>{const n=`SearchIcon-${s()}`;if(!o&&e==null)throw new Error("[SearchIcon]: Missing a title for non-decorative icon.");return r.createElement(I,{as:i,display:l,element:p,size:t,color:c},r.createElement("svg",{role:"img","aria-hidden":o,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},e?r.createElement("title",{id:n},e):null,r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.43 5.43a4.882 4.882 0 017.383 6.347l2.973 2.973a.732.732 0 01-1.036 1.036l-2.973-2.973A4.883 4.883 0 015.43 5.43zm1.035 1.035a3.417 3.417 0 104.833 4.833 3.417 3.417 0 00-4.833-4.833z"})))};a.displayName="SearchIcon";export{a as SearchIcon};
