import*as o from"react";import{useUID as d}from"@twilio-paste/uid-library";import{IconWrapper as s}from"./helpers/IconWrapper";const c=({as:t,display:a,element:l="ICON",size:i,color:p,title:r,decorative:e})=>{const n=`ProductSyncIcon-${d()}`;if(!e&&r==null)throw new Error("[ProductSyncIcon]: Missing a title for non-decorative icon.");return o.createElement(s,{as:t,display:a,element:l,size:i,color:p},o.createElement("svg",{role:"img","aria-hidden":e,width:"100%",height:"100%",viewBox:"0 0 20 20","aria-labelledby":n},r?o.createElement("title",{id:n},r):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M17.5 9.5a.5.5 0 01.5.5 8.05 8.05 0 01-4.355 7.136c-.321.17-.656.314-1 .43a8.074 8.074 0 01-6.695-.675.5.5 0 01-.105-.784l.075-.062a.5.5 0 01.54-.008 6.953 6.953 0 003.54.96 7.13 7.13 0 006.695-4.768c.227-.72.33-1.474.305-2.229a.5.5 0 01.5-.5zM6.985 13.553l-1.65 1.65v.004l-.705.705h-.005L2.95 17.586v-4.033h4.035zM13 9.5a.5.5 0 01.5.5 3.5 3.5 0 01-3.5 3.498.5.5 0 110-1A2.5 2.5 0 0012.5 10a.5.5 0 01.5-.5zm-3-2.998a.5.5 0 110 1A2.5 2.5 0 007.5 10a.5.5 0 01-1 0A3.5 3.5 0 0110 6.502zM7.355 2.434a8.074 8.074 0 016.695.675.5.5 0 01.105.784l-.075.062a.5.5 0 01-.54.008 7.063 7.063 0 00-5.26-.754 6.257 6.257 0 00-1.835.75A7.025 7.025 0 003 10a.5.5 0 01-1 0 8.05 8.05 0 014.355-7.136c.321-.17.656-.314 1-.43zm9.695-.025v4.038h-4.035l1.65-1.65v-.004l.705-.705h.005L17.05 2.41z"})))};c.displayName="ProductSyncIcon";export{c as ProductSyncIcon};
