"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),w=o,m=u["".concat(l,".").concat(w)]||u[w]||d[w]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5},i="\u0141adowanie klas blok\xf3w i widok\xf3w",s={unversionedId:"loading-block-classes-and-views",id:"loading-block-classes-and-views",title:"\u0141adowanie klas blok\xf3w i widok\xf3w",description:"Dodajemy odpowiedni wpis przestrzeni nazw do tablicy.",source:"@site/docs/loading-block-classes-and-views.md",sourceDirName:".",slug:"/loading-block-classes-and-views",permalink:"/loading-block-classes-and-views",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Hooki motywu",permalink:"/theme-hooks"},next:{title:"View/class, block/class",permalink:"/view-class-block-class"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u0142adowanie-klas-blok\xf3w-i-widok\xf3w"},"\u0141adowanie klas blok\xf3w i widok\xf3w"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="File: .../wlc-starter-demo/functions.php"',title:'"File:','.../wlc-starter-demo/functions.php"':!0},"$setup->hooks();\n$setup->class_loader(\n    array(\n    'WLC\\Blocks\\Simple_Block',\n    'WLC\\Components\\Header',\n    'WLC\\Components\\Footer',\n    'WLC\\Components\\Loop_Posts',\n    'WLC\\Views\\Page',\n    'WLC\\Views\\Blog',\n    'WLC\\Views\\Single_Post',\n    'WLC\\Views\\Home_Page',\n    )\n")),(0,o.kt)("p",null,"Dodajemy odpowiedni wpis przestrzeni nazw do tablicy."))}d.isMDXComponent=!0}}]);