import*as r from"react";import{useUID as c}from"@twilio-paste/uid-library";import{IconWrapper as I}from"./helpers/IconWrapper";const i=({as:p,display:s,element:t="ICON",size:a,color:l,title:o,decorative:e})=>{const n=`UserIcon-${c()}`;if(!e&&o==null)throw new Error("[UserIcon]: Missing a title for non-decorative icon.");return r.createElement(I,{as:p,display:s,element:t,size:a,color:l},r.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},o?r.createElement("title",{id:n},o):null,r.createElement("path",{fill:"currentColor",d:"M10.302 10a6.309 6.309 0 016.3 6.301.566.566 0 11-1.131 0 5.17 5.17 0 00-10.339 0 .566.566 0 11-1.132 0 6.309 6.309 0 016.07-6.297l.232-.004zm-.155-8a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1.085a2.415 2.415 0 100 4.831 2.415 2.415 0 000-4.831z"})))};i.displayName="UserIcon";export{i as UserIcon};
