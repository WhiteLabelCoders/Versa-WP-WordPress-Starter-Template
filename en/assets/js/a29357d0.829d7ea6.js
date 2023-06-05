"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,f=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const l={sidebar_position:2},a="Files and folders",i={unversionedId:"files-and-folders",id:"files-and-folders",title:"Files and folders",description:"/acf",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/files-and-folders.md",sourceDirName:".",slug:"/files-and-folders",permalink:"/wlc-starter/en/files-and-folders",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General information",permalink:"/wlc-starter/en/"},next:{title:"Functionalities",permalink:"/wlc-starter/en/functionalities"}},s={},p=[{value:"/acf",id:"acf",level:2},{value:"/assets",id:"assets",level:2},{value:"/dist",id:"dist",level:2},{value:"/inc",id:"inc",level:2},{value:"/footer.php",id:"footerphp",level:2},{value:"/header.php",id:"headerphp",level:2},{value:"/index.php",id:"indexphp",level:2},{value:"/sidebar.php",id:"sidebarphp",level:2},{value:"/theme.json.dist",id:"themejsondist",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"files-and-folders"},"Files and folders"),(0,o.kt)("h2",{id:"acf"},"/acf"),(0,o.kt)("p",null,"Defined fields from ACF PRO will be saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file here automatically - and imported when downloading changes from the repository."),(0,o.kt)("h2",{id:"assets"},"/assets"),(0,o.kt)("p",null,"Catalogue, where you make all the changes."),(0,o.kt)("p",null,"-- fonts - place all downloaded fonts here"),(0,o.kt)("p",null,"-- images - put here graphics that are an integral part of the page"),(0,o.kt)("p",null,"-- js - place your scripts here"),(0,o.kt)("p",null,"-- scss - put all styles here"),(0,o.kt)("p",null,"-- svg - put here any svg files that are an integral part of the page"),(0,o.kt)("p",null,"-- vendors - place here all external libraries, that you use on the website"),(0,o.kt)("h2",{id:"dist"},"/dist"),(0,o.kt)("p",null,"All output files that are loaded from this place should be put here"),(0,o.kt)("admonition",{title:"WARNING",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not make changes in this folder.")),(0,o.kt)("h2",{id:"inc"},"/inc"),(0,o.kt)("p",null,"Here are all the php files which you will edit."),(0,o.kt)("p",null,"-- Blocks - catalogue where you will put all blocks (e.g. Gutenberg blocks)"),(0,o.kt)("p",null,"-- Components - catalogue where you will put all components (e.g. header, footer)"),(0,o.kt)("p",null,"-- Core - here you will make general changes, e.g. the theme settings, if necessary"),(0,o.kt)("p",null,"-- Views - here you will make changes to views, e.g. for the home page, blog, page, etc."),(0,o.kt)("h2",{id:"footerphp"},"/footer.php"),(0,o.kt)("p",null,"Here is the footer layout."),(0,o.kt)("h2",{id:"headerphp"},"/header.php"),(0,o.kt)("p",null,"Here is the layout for the header."),(0,o.kt)("h2",{id:"indexphp"},"/index.php"),(0,o.kt)("p",null,"Here is the main page layout."),(0,o.kt)("h2",{id:"sidebarphp"},"/sidebar.php"),(0,o.kt)("p",null,"Here is the main layout for the sidebar if you use it."),(0,o.kt)("h2",{id:"themejsondist"},"/theme.json.dist"),(0,o.kt)("p",null,"This file is responsible for custom styles on the admin side. If you want to define your own settings on the admin side to choose from e.g.\ndefault colors, fonts, do it in this file. Remember that you have to copy this file or rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.json."),"\nYou can find more about the capabilities of this file here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/"},"https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/themes/advanced-topics/theme-json/"},"https://developer.wordpress.org/themes/advanced-topics/theme-json/")))}c.isMDXComponent=!0}}]);