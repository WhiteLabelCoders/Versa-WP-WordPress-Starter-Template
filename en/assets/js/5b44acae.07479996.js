"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[225],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={slug:"/",sidebar_position:1},o="General information",l={unversionedId:"intro",id:"intro",title:"General information",description:"WLC Starter  documentation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/wlc-starter/en/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Pliki i foldery",permalink:"/wlc-starter/en/files-and-folders"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Coding standards",id:"coding-standards",level:2},{value:"Development",id:"development",level:2}],m={toc:s};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-information"},"General information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," WLC Starter ")," documentation."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PHP OOP,"),(0,r.kt)("li",{parentName:"ul"},"autoload namespace with spl_autoload_register."),(0,r.kt)("li",{parentName:"ul"},"Bedrock compatibility (not required),"),(0,r.kt)("li",{parentName:"ul"},"WordPress coding standards,"),(0,r.kt)("li",{parentName:"ul"},"View/class, block/class methodology,"),(0,r.kt)("li",{parentName:"ul"},"support for defined ACF local JSON fields,"),(0,r.kt)("li",{parentName:"ul"},"compilation of files using Webpack (laravelmix),"),(0,r.kt)("li",{parentName:"ul"},"own grid support (compatible with Bootstrap 5),"),(0,r.kt)("li",{parentName:"ul"},"style reset from Bootstrap 5,"),(0,r.kt)("li",{parentName:"ul"},"full compatibility with Bootstrap 5 (not required),"),(0,r.kt)("li",{parentName:"ul"},"helpful mixin collection,"),(0,r.kt)("li",{parentName:"ul"},"predefined ACF text fields for ",(0,r.kt)("inlineCode",{parentName:"li"},"<head>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<body>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<footer>")," to handle your own code,"),(0,r.kt)("li",{parentName:"ul"},"custom style support for the editor on the admin panel using theme.json,"),(0,r.kt)("li",{parentName:"ul"},"inline SVG support,")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the themes folder, download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WhiteLabelCoders/wlc-starter"},"repository"),', replacing the name "starter" with the name adequate to the project.'),(0,r.kt)("p",{parentName:"li"},"  With the use of SSH"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:WhiteLabelCoders/wlc-starter.git starter\n")),(0,r.kt)("p",{parentName:"li"},"  or via HTTPS"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/WhiteLabelCoders/wlc-starter.git starter\n")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In a terminal window, do"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("p",{parentName:"li"},"  or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the file ",(0,r.kt)("inlineCode",{parentName:"p"},".env.dist")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and fill in APP_URL e.g."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"APP_URL = starterdemo.local\n")),(0,r.kt)("p",{parentName:"li"},"This name should match the name under which you access the page."))),(0,r.kt)("h2",{id:"coding-standards"},"Coding standards"),(0,r.kt)("p",null,"Theme uses ",(0,r.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/"},"WordPress")," coding standards."),(0,r.kt)("p",null,"In order to maintain indent control, we use a ",(0,r.kt)("a",{parentName:"p",href:"https://editorconfig.org/"},"configuration file")," ",(0,r.kt)("inlineCode",{parentName:"p"},".editorconfig")," for different types of files.",(0,r.kt)("br",null),"\nTo handle this file and the configuration it contains, you need to install the appropriate plug -in :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"},"VSCode"),(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/7294-editorconfig"},"PHPStorm")),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"wp-config.php")," file , set"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"define( 'WP_DEBUG', true );\n")),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the terminal and use"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run watch\n")),(0,r.kt)("p",{parentName:"li"},"or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn watch\n")),(0,r.kt)("p",{parentName:"li"},"From now on, at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and the one defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"APP_URL")," with a call to port 3000, a website ready for development will be available, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"http: //starterdemo.local:3000"),"\nwith automatic reloading when making changes. In the terminal window, you will also see the address at which you can call up the page, e.g. on a mobile device, while being within your network."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Development image",src:a(2251).Z,width:"416",height:"242"})),(0,r.kt)("admonition",{parentName:"li",title:"WARNING",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Remember to use"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run production\n")),(0,r.kt)("p",{parentName:"admonition"},"or"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn production\n")),(0,r.kt)("p",{parentName:"admonition"},"in order to have scss, js files minified.")))))}d.isMDXComponent=!0},2251:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-a00d11403d992a0229a8e994cf33f062.png"}}]);