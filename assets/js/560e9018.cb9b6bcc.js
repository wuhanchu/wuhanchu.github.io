"use strict";(self.webpackChunkwhc_blog=self.webpackChunkwhc_blog||[]).push([[79],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=p(n),s=a,g=m["".concat(i,".").concat(s)]||m[s]||f[s]||o;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6396:function(t,e,n){n.r(e),n.d(e,{assets:function(){return i},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={title:"ffmpeg \u683c\u5f0f\u89e3\u6790",tags:[],date:new Date("2021-08-01T00:00:00.000Z")},l=void 0,c={permalink:"/coding/ffmpeg \u683c\u5f0f\u89e3\u6790",editUrl:"https://github.com/wuhanchu/whc_blog/edit/main/website/blog/blog/coding/ffmpeg \u683c\u5f0f\u89e3\u6790.md",source:"@site/blog/coding/ffmpeg \u683c\u5f0f\u89e3\u6790.md",title:"ffmpeg \u683c\u5f0f\u89e3\u6790",description:"\u5728\u4f7f\u7528tts\u751f\u6210\u97f3\u9891\u7684\u65f6\u5019\uff0c\u5ba2\u6237\u9700\u8981\u4f7f\u7528 64kbps\u76848k\u97f3\u9891\u3002",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[],readingTime:.745,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ffmpeg \u683c\u5f0f\u89e3\u6790",tags:[],date:"2021-08-01T00:00:00.000Z"},prevItem:{title:"docker\u955c\u50cf\u592a\u5927\u89e3\u51b3",permalink:"/coding/docker\u955c\u50cf\u592a\u5927 \u5bfc\u81f4\u65e0\u6cd5\u5bfc\u5165"},nextItem:{title:"python\u7684\u6e90\u4ee3\u7801\u4fdd\u62a4\u65b9\u6848",permalink:"/coding/python\u7684\u6e90\u4ee3\u7801\u4fdd\u62a4\u65b9\u6848"}},i={authorsImageUrls:[]},p=[],u={toc:p};function f(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528tts\u751f\u6210\u97f3\u9891\u7684\u65f6\u5019\uff0c\u5ba2\u6237\u9700\u8981\u4f7f\u7528 64kbps\u76848k\u97f3\u9891\u3002\n\u672c\u6765\u6211\u4ee5\u4e3a\u53ea\u8981\u4f7f\u7528 -ab \u6765\u6307\u5b9a\u5c31\u597d\u4e86\n",(0,a.kt)("img",{alt:"image.png",src:n(1334).Z,width:"1294",height:"882"}),"\n\u53d1\u73b0\u97f3\u9891\u600e\u4e48\u4e5f\u6539\u4e0d\u8fc7\u53bb\uff0c \u7136\u540e\u610f\u8bc6\u5230\u8fd9\u4e2a\u662f \u89c6\u9891\u7684\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5728\u7ecf\u8fc7\u4e00\u5b9a\u7684\u641c\u7d22\u4ee5\u540e\u53d1\u73b0\uff0c\u4e0d\u540c\u7684\u6bd4\u7279\u7387\u5bf9\u5e94\u7684\u662f\u4e0d\u540c\u7684codecs\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"codec"),(0,a.kt)("th",{parentName:"tr",align:null},"format"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"128kbps"),(0,a.kt)("td",{parentName:"tr",align:null},"pcm_s16le"),(0,a.kt)("td",{parentName:"tr",align:null},"lcpm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"64kbps"),(0,a.kt)("td",{parentName:"tr",align:null},"pcm_alaw"),(0,a.kt)("td",{parentName:"tr",align:null},"alaw")))),(0,a.kt)("p",null,"pcm_s16le \u548c pcm_alaw \u5230\u5e95\u6709\u4ec0\u4e48\u533a\u522b\u5462\uff1f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image.png",src:n(5863).Z,width:"2096",height:"1088"}),"\n",(0,a.kt)("img",{alt:"image.png",src:n(7822).Z,width:"2242",height:"1014"}),"\n\u7b80\u5355\u7684\u7406\u89e3\uff0c\u5e94\u8be5\u662f\u4f7f\u7528\u5728\u4e0d\u901a\u573a\u666f\u7684\u7f16\u7801\u683c\u5f0f\u3002"))}f.isMDXComponent=!0},1334:function(t,e,n){e.Z=n.p+"assets/images/16651545777506-f97d07a90cc3e2fb454cc91f6cd7af70.png"},5863:function(t,e,n){e.Z=n.p+"assets/images/16651545777514-aceb0774ef1b064e771ced71e07076bc.png"},7822:function(t,e,n){e.Z=n.p+"assets/images/16651545777523-92a5dc20a1222894be7f05b003e6d1ff.png"}}]);