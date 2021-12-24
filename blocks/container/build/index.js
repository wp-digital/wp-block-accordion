!function(){"use strict";var e,t={136:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.blockEditor,o=window.wp.components,l=window.wp.i18n;const c="innocode-block-accordion";var a=window.wp.hooks;const i=(0,a.applyFilters)("innocode.block-accordion.title.tag","h3"),r=(0,a.applyFilters)("innocode.block-accordion.has_title.default",!0),s=(0,a.applyFilters)("innocode.block-accordion.has_description.default",!1),d=(0,a.applyFilters)("innocode.block-accordion.always_open.default",!1),p=["innocode/block-accordion-item"];var u={hasTitle:{type:"boolean",default:r},title:{type:"string",source:"html",selector:`.${c}__title`},hasDescription:{type:"boolean",default:s},description:{type:"string",source:"html",selector:`.${c}__description`},alwaysOpen:{type:"boolean",default:d}};(0,e.registerBlockType)("innocode/block-accordion-container",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:u,edit:function(e){let{attributes:a,setAttributes:u}=e;const{hasTitle:m=r,title:h,hasDescription:w=s,description:_,alwaysOpen:b=d}=a,C=(e,t)=>{u({[e]:t})},k=[c];return b&&k.push(`${c}_is-always-opened`),(0,t.createElement)("div",(0,n.useBlockProps)({className:k.join(" ")}),(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,l.__)("Settings","innocode-block-accordion")},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Show title","innocode-block-accordion"),checked:m,onChange:()=>C("hasTitle",!m)})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Show description","innocode-block-accordion"),checked:w,onChange:()=>C("hasDescription",!w)})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Always open","innocode-block-accordion"),help:(0,l.__)("Leaves items open while opening another item.","innocode-block-accordion"),checked:b,onChange:e=>C("alwaysOpen",e)})))),(0,t.createElement)("div",{className:`${c}__header`},m&&(0,t.createElement)(n.RichText,{tagName:i,value:h,placeholder:(0,l.__)("Title","innocode-block-counter"),onChange:e=>C("title",e),className:`${c}__title`}),w&&(0,t.createElement)(n.RichText,{tagName:"div",multiline:"p",value:_,placeholder:(0,l.__)("Description","innocode-block-counter"),onChange:e=>C("description",e),className:`${c}__description`})),(0,t.createElement)("div",{className:`${c}__list`},(0,t.createElement)(n.InnerBlocks,{allowedBlocks:p})))},save:function(e){let{attributes:o}=e;const{hasTitle:l=r,title:a,hasDescription:u=s,description:m,alwaysOpen:h=d}=o,w=[c];return h&&w.push(`${c}_is-always-opened`),(0,t.createElement)("div",n.useBlockProps.save({className:w.join(" ")}),(0,t.createElement)("div",{className:`${c}__header`},l&&(0,t.createElement)(n.RichText.Content,{tagName:i,className:`${c}__title`,value:a}),u&&(0,t.createElement)(n.RichText.Content,{tagName:"div",multiline:"p",value:m,className:`${c}__description`})),(0,t.createElement)("div",{className:`${c}__list`},(0,t.createElement)(n.InnerBlocks.Content,{allowedBlocks:p})))},icon:()=>(0,t.createElement)("svg",{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M31.4 0H4.6C2 0 0 2 0 4.6V11.4C0 14 2 16 4.6 16H31.4C34 16 36 14 36 11.4V4.6C36 2 34 0 31.4 0ZM33 11.4C33 12.2 32.2 13 31.4 13H4.6C3.8 13 3 12.2 3 11.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V11.4Z",fill:"black"}),(0,t.createElement)("path",{d:"M31.4 17H4.6C2 17 0 19 0 21.6V21.4C0 24 2 26 4.6 26H31.4C34 26 36 24 36 21.4V21.6C36 19 34 17 31.4 17ZM33 21.4C33 22.2 32.2 23 31.4 23H4.6C3.8 23 3 22.2 3 21.4V21.6C3 20.8 3.8 20 4.6 20H31.4C32.2 20 33 20.8 33 21.6V21.4Z",fill:"black"}),(0,t.createElement)("path",{d:"M31.4 27H4.6C2 27 0 29 0 31.6V31.4C0 34 2 36 4.6 36H31.4C34 36 36 34 36 31.4V31.6C36 29 34 27 31.4 27ZM33 31.4C33 32.2 32.2 33 31.4 33H4.6C3.8 33 3 32.2 3 31.4V31.6C3 30.8 3.8 30 4.6 30H31.4C32.2 30 33 30.8 33 31.6V31.4Z",fill:"black"}))})}},n={};function o(e){var l=n[e];if(void 0!==l)return l.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,e=[],o.O=function(t,n,l,c){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],c=e[d][2];for(var i=!0,r=0;r<n.length;r++)(!1&c||a>=c)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(i=!1,c<a&&(a=c));if(i){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[n,l,c]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,c,a=n[0],i=n[1],r=n[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(r)var d=r(o)}for(t&&t(n);s<a.length;s++)c=a[s],o.o(e,c)&&e[c]&&e[c][0](),e[a[s]]=0;return o.O(d)},n=self.webpackChunkwp_block_accordion=self.webpackChunkwp_block_accordion||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=o.O(void 0,[46],(function(){return o(136)}));l=o.O(l)}();