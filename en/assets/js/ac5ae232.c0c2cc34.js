"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?s.createElement(f,o(o({ref:t},u),{},{components:n})):s.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="Functionalities",i={unversionedId:"functionalities",id:"functionalities",title:"Functionalities",description:"Description of functionality based on style files.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/functionalities.md",sourceDirName:".",slug:"/functionalities",permalink:"/versa-wp-wordpress-starter-template/en/functionalities",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Files and folders",permalink:"/versa-wp-wordpress-starter-template/en/files-and-folders"},next:{title:"Theme hooks",permalink:"/versa-wp-wordpress-starter-template/en/theme-hooks"}},l={},p=[{value:"/assets/scss/_variables.scss",id:"assetsscss_variablesscss",level:2},{value:"/assets/scss/_bootstrap.scss",id:"assetsscss_bootstrapscss",level:2},{value:"/assets/scss/_base.scss",id:"assetsscss_basescss",level:2},{value:"/assets/scss/_mixins.scss",id:"assetsscss_mixinsscss",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functionalities"},"Functionalities"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Description of functionality based on style files. ")),(0,a.kt)("p",null,"To be able to use the starter effectively, you should read the contents of the files with configuration options.\nThe files have additional information in the form of comments and something like a table of contents in order to\nmake navigation easier, but in order not to analyze them all, here you will find their description."),(0,a.kt)("h2",{id:"assetsscss_variablesscss"},"/assets/scss/_variables.scss"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 1. Global ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $use-bootstrap-grid: false; ")," - here you can set whether you want to use grid from Bootstrap 5 in your project.\nIf you set this variable to true most things will be done automatically like loading bootstrap-reboot.min.css file in global.scss.\nUnfortunately, there is a certain import bug in sass and if you want to overwrite Bootstrap 5 variables you have to uncomment the\nline with the import of the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," file in the global.scss file yourself. This is the only inconvenience that has not yet\nbeen resolved and is a global problem."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Assets image",src:n(71).Z,width:"512",height:"374"})),(0,a.kt)("p",null,"If this variable is left default as ",(0,a.kt)("strong",{parentName:"p"}," false "),"\xa0then we do not use the imported grid from Bootstrap 5 and from the classes  available\nto build the layout we only have the ones in the _base.scss file: .row and .container. You don't need to be afraid to experiment with\nswitching this variable. Everything is so prepared that by defining breakpoints and maximum widths for containers, regardless of\nwhether you use Bootstrap 5 or not, they will work or integrate."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $base-font-size: 16; ")," - a variable responsible for the default font size. I suggest not to modify it, in order to make it easier\nto control the font size if you use rem scaling."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $default-transition-duration: 0.15s;, $default-transition-timing: ease-in-out; ")," - variables used in mixin for default transitions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $grid-gutter-width: 2rem; ")," - set default padding for the container (only works with ",(0,a.kt)("strong",{parentName:"p"}," $use-bootstrap-grid: false; ")," settings)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 2. Grid breakpoints ")),(0,a.kt)("p",null,"Here you control the number of breakpoints. You can delete them, add new ones. They integrate with Bootstrap 5, if used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 3. Container max-width sizes ")," "),(0,a.kt)("p",null,"Here you control the maximum width of the containers. You can delete them, add new ones. They integrate with Bootstrap 5 if used."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 4. Responsive Fonts ")),(0,a.kt)("p",null,"Here you control the full scaling of the values \u200b\u200b(if you use rem units or helper function rem())."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 5. Root variables ")),(0,a.kt)("p",null,"Here you add your variables for: root{}"),(0,a.kt)("h2",{id:"assetsscss_bootstrapscss"},"/assets/scss/_bootstrap.scss"),(0,a.kt)("admonition",{title:"WARNING",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This file is used only for importing Bootstrap 5 components.")),(0,a.kt)("h2",{id:"assetsscss_basescss"},"/assets/scss/_base.scss"),(0,a.kt)("p",null,"The file in which we add global styles, such as .row, .container for html. Classes .row and .container are usable whether you use\nBootstrap 5 integration or not. They will be loaded only if you are not using Bootstrap 5. Everything is prepared so that it won't\naffect your choice of using Bootstrap 5, don't worry :)"),(0,a.kt)("h2",{id:"assetsscss_mixinsscss"},"/assets/scss/_mixins.scss"),(0,a.kt)("p",null,"The file contains a collection of mixin and scss functions to facilitate the creation of styles."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 1. Disable user selection ")," - allows you to disable text selection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include nonselect;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 2. Color ")," -"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 3. Truncate single line text ")," - trims text of one line if it is too long adding '...' at the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include truncateText;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 4. Truncate multi line text ")," - trims the text above the defined line. In () you should specify the line by which the text should be trimmed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include truncateLines(3);\n}\n")),(0,a.kt)("p",null,"  In this example, the text will be trimmed to the end of the third line. The text in the remaining lines will not be displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 5. PX to REM ")," - a function that helps you convert px values to rem values. Recommended for general use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    font-size: rem(18);\n}\n")),(0,a.kt)("p",null,"  In this example, the font-size will be converted from 18px to 1.125rem."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 6. aspect-ratio ")," - the older method of preserving ratio for elements. Currently rarely used, but it may be useful in some cases.\nIt requires a value for the size of the element and the rest will be computed and will hold the ratio for that element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include aspect-ratio(200, 300);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 7. row ")," - mixin which is used in the class .row if you are not using Bootstrap 5."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 8. Custom media queries up ")," - mixin mediaquery for resolutions above one of the predefined thresholds in _variables.scss\nintegrating with Bootstrap 5 if used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include media-breakpoint-up(lg) {\n        \u2026\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 9. Custom media queries down ")," -mixin mediaquery for resolutions below one of the predefined thresholds\nin _variables.scss integrating with Bootstrap 5 if used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include media-breakpoint-down(lg) {\n        \u2026\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 10. Custom media queries between ")," - mixin mediaquery for resolutions between selected of the predefined\nthresholds in _variables.scss integrating with Bootstrap 5 if used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include media-breakpoint-between(md,lg) {\n        \u2026\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 11. Custom transition ")," - mixin used for transition anywhere the default values of the variables\n$default-transition-duration and $default-transition-timing are set. Helpful for maintaining a standardized\ntransition for items on the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition();\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition(opacity);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition(opacity, 0.3s);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition(opacity, 0.3s, ease-in);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," 12. Responsive ")," - mixin Fluid Typography ",(0,a.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/fluid-typography/"},"https://css-tricks.com/snippets/css/fluid-typography/"),' used to "scale"\nnot only text elements but also any components and properties that use the rem value. Based on a solution that uses calc().\nUsed on html, it works with media query. Default used in _base.scss on html . WoW: in _variables.scss we set values for\nscaling between the set values and media query thresholds'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $min-font-size ")," - min font size for responsive range"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $max-font-size ")," - max font size for responsive range"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $min-vw ")," - min width responsive range"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," $max-vw ")," - max width responsive range"),(0,a.kt)("p",null,"For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"html {\n    @include fluid-type($min_width, $max_width, $min_font, $max_font);\n}\n")))}m.isMDXComponent=!0},71:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2-f2599e1f058c729a5dabc9a60b0331bd.jpeg"}}]);