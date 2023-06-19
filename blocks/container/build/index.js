(()=>{"use strict";var e,t={965:()=>{const e=window.wp.blocks,t=window.wp.element,o=window.wp.blockEditor,l=window.wp.components,a=window.wp.i18n,c="wpd-block-accordion",n=window.wp.hooks,i=(0,n.applyFilters)("wpd.block-accordion.title.tag","h3"),r=(0,n.applyFilters)("wpd.block-accordion.has_title.default",!0),s=(0,n.applyFilters)("wpd.block-accordion.has_description.default",!1),p=(0,n.applyFilters)("wpd.block-accordion.always_open.default",!1),d=["wpd/block-accordion-item"],w={hasTitle:{type:"boolean",default:r},title:{type:"string",source:"html",selector:".wpd-block-accordion__title"},hasDescription:{type:"boolean",default:s},description:{type:"string",source:"html",selector:".wpd-block-accordion__description"},alwaysOpen:{type:"boolean",default:p}},h=window.wp.primitives;(0,e.registerBlockType)("wpd/block-accordion-container",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:w,edit:function(e){let{attributes:n,setAttributes:w}=e;const{hasTitle:h=r,title:m,hasDescription:b=s,description:k,alwaysOpen:u=p}=n,_=(e,t)=>{w({[e]:t})},C=[c];return u&&C.push("wpd-block-accordion_is-always-opened"),(0,t.createElement)("div",(0,o.useBlockProps)({className:C.join(" ")}),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(l.PanelBody,{title:(0,a.__)("Settings","wpd-blocks")},(0,t.createElement)(l.PanelRow,null,(0,t.createElement)(l.ToggleControl,{label:(0,a.__)("Show title","wpd-blocks"),checked:h,onChange:()=>_("hasTitle",!h)})),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)(l.ToggleControl,{label:(0,a.__)("Show description","wpd-blocks"),checked:b,onChange:()=>_("hasDescription",!b)})),(0,t.createElement)(l.PanelRow,null,(0,t.createElement)(l.ToggleControl,{label:(0,a.__)("Always open","wpd-blocks"),help:(0,a.__)("Leaves items open while opening another item.","wpd-blocks"),checked:u,onChange:e=>_("alwaysOpen",e)})))),(0,t.createElement)("div",{className:"wpd-block-accordion__header"},h&&(0,t.createElement)(o.RichText,{tagName:i,value:m,placeholder:(0,a.__)("Title","wpd-blocks"),onChange:e=>_("title",e),className:"wpd-block-accordion__title"}),b&&(0,t.createElement)(o.RichText,{tagName:"div",multiline:"p",value:k,placeholder:(0,a.__)("Description","wpd-blocks"),onChange:e=>_("description",e),className:"wpd-block-accordion__description"})),(0,t.createElement)("div",{className:"wpd-block-accordion__list"},(0,t.createElement)(o.InnerBlocks,{allowedBlocks:d})))},save:function(e){let{attributes:l}=e;const{hasTitle:a=r,title:n,hasDescription:w=s,description:h,alwaysOpen:m=p}=l,b=[c];return m&&b.push("wpd-block-accordion_is-always-opened"),(0,t.createElement)("div",o.useBlockProps.save({className:b.join(" ")}),(0,t.createElement)("div",{className:"wpd-block-accordion__header"},a&&(0,t.createElement)(o.RichText.Content,{tagName:i,className:"wpd-block-accordion__title",value:n}),w&&(0,t.createElement)(o.RichText.Content,{tagName:"div",multiline:"p",value:h,className:"wpd-block-accordion__description"})),(0,t.createElement)("div",{className:"wpd-block-accordion__list"},(0,t.createElement)(o.InnerBlocks.Content,{allowedBlocks:d})))},icon:()=>(0,t.createElement)(h.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(h.Path,{d:"M31.4 0H4.6C2 0 0 2 0 4.6V11.4C0 14 2 16 4.6 16H31.4C34 16 36 14 36 11.4V4.6C36 2 34 0 31.4 0ZM33 11.4C33 12.2 32.2 13 31.4 13H4.6C3.8 13 3 12.2 3 11.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V11.4Z"}),(0,t.createElement)(h.Path,{d:"M31.4 17H4.6C2 17 0 19 0 21.6V21.4C0 24 2 26 4.6 26H31.4C34 26 36 24 36 21.4V21.6C36 19 34 17 31.4 17ZM33 21.4C33 22.2 32.2 23 31.4 23H4.6C3.8 23 3 22.2 3 21.4V21.6C3 20.8 3.8 20 4.6 20H31.4C32.2 20 33 20.8 33 21.6V21.4Z"}),(0,t.createElement)(h.Path,{d:"M31.4 27H4.6C2 27 0 29 0 31.6V31.4C0 34 2 36 4.6 36H31.4C34 36 36 34 36 31.4V31.6C36 29 34 27 31.4 27ZM33 31.4C33 32.2 32.2 33 31.4 33H4.6C3.8 33 3 32.2 3 31.4V31.6C3 30.8 3.8 30 4.6 30H31.4C32.2 30 33 30.8 33 31.6V31.4Z"}))})}},o={};function l(e){var a=o[e];if(void 0!==a)return a.exports;var c=o[e]={exports:{}};return t[e](c,c.exports,l),c.exports}l.m=t,e=[],l.O=(t,o,a,c)=>{if(!o){var n=1/0;for(p=0;p<e.length;p++){for(var[o,a,c]=e[p],i=!0,r=0;r<o.length;r++)(!1&c||n>=c)&&Object.keys(l.O).every((e=>l.O[e](o[r])))?o.splice(r--,1):(i=!1,c<n&&(n=c));if(i){e.splice(p--,1);var s=a();void 0!==s&&(t=s)}}return t}c=c||0;for(var p=e.length;p>0&&e[p-1][2]>c;p--)e[p]=e[p-1];e[p]=[o,a,c]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,46:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var a,c,[n,i,r]=o,s=0;if(n.some((t=>0!==e[t]))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(r)var p=r(l)}for(t&&t(o);s<n.length;s++)c=n[s],l.o(e,c)&&e[c]&&e[c][0](),e[n[s]]=0;return l.O(p)},o=globalThis.webpackChunkwp_block_accordion=globalThis.webpackChunkwp_block_accordion||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=l.O(void 0,[46],(()=>l(965)));a=l.O(a)})();