!function(){"use strict";var e,t={317:function(){var e=window.wp.blocks,t=window.wp.element,o=window.wp.blockEditor,n=window.wp.components,l=window.wp.i18n,i=window.wp.hooks;const a="innocode-block-accordion-item",c=(0,i.applyFilters)("innocode.block-accordion-item.title.tag","h4"),r=(0,i.applyFilters)("innocode.block-accordion-item.has_top_subtitle.default",!1),s=(0,i.applyFilters)("innocode.block-accordion-item.has_bottom_subtitle.default",!1),u=(0,i.applyFilters)("innocode.block-accordion-item.allowed_blocks",["core/heading","core/paragraph","core/list"]),d=e=>{let{value:n,onChange:i,place:c,isEdit:r}=e;const s=`${a}__subtitle ${a}__subtitle_${c}`;return r?(0,t.createElement)(o.RichText,{tagName:"span",multiline:!1,value:n,placeholder:(0,l.__)("Subtitle","innocode-block-accordion"),onChange:i,className:s}):!!n&&(0,t.createElement)(o.RichText.Content,{tagName:"span",multiline:!1,value:n,className:s})},b=e=>{let{value:n,onChange:i,isEdit:r}=e;const s=`${a}__title`;return r?(0,t.createElement)(o.RichText,{tagName:c,multiline:!1,value:n,placeholder:(0,l.__)("Title","innocode-block-accordion"),onChange:i,className:s}):(0,t.createElement)(o.RichText.Content,{tagName:c,multiline:!1,className:s,value:n})},p=e=>{let{isEdit:n}=e;return(0,t.createElement)("div",{className:`${a}__content`},n?(0,t.createElement)(o.InnerBlocks,{allowedBlocks:u}):(0,t.createElement)(o.InnerBlocks.Content,{allowedBlocks:u}))};function m(e){let{defaultOpen:o,title:n,hasTopSubtitle:i=r,topSubtitle:c,hasBottomSubtitle:u=s,bottomSubtitle:m,onTitleChange:h=(()=>{}),onTopSubtitleChange:C=(()=>{}),onBottomSubtitleChange:_=(()=>{}),isEdit:g=!1}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:`${a}__header`,role:"button","aria-expanded":o?"true":"false",tabIndex:0},i&&(0,t.createElement)(d,{value:c,onChange:C,place:"top",isEdit:g}),(0,t.createElement)(b,{value:n,onChange:h,isEdit:g}),u&&(0,t.createElement)(d,{value:m,onChange:_,place:"bottom",isEdit:g}),(0,t.createElement)("span",{className:`${a}__button`},(0,l.__)("Toggle","innocode-block-accordion"))),(0,t.createElement)(p,{isEdit:g}))}var h={defaultOpen:{type:"boolean",default:!1},title:{type:"string",source:"html",selector:`.${a}__title`},hasTopSubtitle:{type:"boolean",default:r},topSubtitle:{type:"string",source:"html",selector:`.${a}__subtitle_top`},hasBottomSubtitle:{type:"boolean",default:s},bottomSubtitle:{type:"string",source:"html",selector:`.${a}__subtitle_bottom`}},C=window.wp.primitives;(0,e.registerBlockType)("innocode/block-accordion-item",{apiVersion:2,supports:{align:["wide","full"],className:!1},attributes:h,edit:function(e){let{attributes:i,setAttributes:c}=e;const{defaultOpen:u=!1,title:d,hasTopSubtitle:b=r,topSubtitle:p,hasBottomSubtitle:h=s,bottomSubtitle:C}=i,_=(e,t)=>{c({[e]:t})},g=[a];return u&&g.push(`${a}_is-opened`),(0,t.createElement)("div",(0,o.useBlockProps)({className:g.join(" ")}),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Settings","innocode-block-accordion")},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.ToggleControl,{label:(0,l.__)("Open by default","innocode-block-accordion"),checked:u,onChange:()=>_("defaultOpen",!u)}))),(0,t.createElement)(n.PanelBody,{title:(0,l.__)("Subtitle Settings","innocode-block-accordion"),initialOpen:!1},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.ToggleControl,{label:(0,l.__)("Show before title","innocode-block-accordion"),checked:b,onChange:()=>_("hasTopSubtitle",!b)})),(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.ToggleControl,{label:(0,l.__)("Show after title","innocode-block-accordion"),checked:h,onChange:()=>_("hasBottomSubtitle",!h)})))),(0,t.createElement)(m,{defaultOpen:u,title:d,hasTopSubtitle:b,topSubtitle:p,hasBottomSubtitle:h,bottomSubtitle:C,onTitleChange:e=>_("title",e),onTopSubtitleChange:e=>_("topSubtitle",e),onBottomSubtitleChange:e=>_("bottomSubtitle",e),isEdit:!0}))},save:function(e){let{attributes:n}=e;const{defaultOpen:l=!1,title:i,hasTopSubtitle:c=r,topSubtitle:u,hasBottomSubtitle:d=s,bottomSubtitle:b}=n,p=[a];return l&&p.push(`${a}_is-opened`),(0,t.createElement)("div",o.useBlockProps.save({className:p.join(" ")}),(0,t.createElement)(m,{defaultOpen:l,title:i,hasTopSubtitle:c,topSubtitle:u,hasBottomSubtitle:d,bottomSubtitle:b}))},icon:()=>(0,t.createElement)(C.SVG,{viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(C.Path,{d:"M31.4 0H4.6C2 0 0 2 0 4.6V11.4C0 14 2 16 4.6 16H31.4C34 16 36 14 36 11.4V4.6C36 2 34 0 31.4 0ZM33 11.4C33 12.2 32.2 13 31.4 13H4.6C3.8 13 3 12.2 3 11.4V4.6C3 3.8 3.8 3 4.6 3H31.4C32.2 3 33 3.8 33 4.6V11.4Z"}),(0,t.createElement)(C.Path,{d:"M31.4 17H4.6C2 17 0 19 0 21.6V21.4C0 24 2 26 4.6 26H31.4C34 26 36 24 36 21.4V21.6C36 19 34 17 31.4 17ZM33 21.4C33 22.2 32.2 23 31.4 23H4.6C3.8 23 3 22.2 3 21.4V21.6C3 20.8 3.8 20 4.6 20H31.4C32.2 20 33 20.8 33 21.6V21.4Z"}),(0,t.createElement)(C.Path,{d:"M31.4 27H4.6C2 27 0 29 0 31.6V31.4C0 34 2 36 4.6 36H31.4C34 36 36 34 36 31.4V31.6C36 29 34 27 31.4 27ZM33 31.4C33 32.2 32.2 33 31.4 33H4.6C3.8 33 3 32.2 3 31.4V31.6C3 30.8 3.8 30 4.6 30H31.4C32.2 30 33 30.8 33 31.6V31.4Z"})),parent:["innocode/block-accordion-container"]})}},o={};function n(e){var l=o[e];if(void 0!==l)return l.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,o,l,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],l=e[u][1],i=e[u][2];for(var c=!0,r=0;r<o.length;r++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,l,i]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var l,i,a=o[0],c=o[1],r=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(r)var u=r(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[a[s]]=0;return n.O(u)},o=self.webpackChunkwp_block_accordion=self.webpackChunkwp_block_accordion||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var l=n.O(void 0,[46],(function(){return n(317)}));l=n.O(l)}();