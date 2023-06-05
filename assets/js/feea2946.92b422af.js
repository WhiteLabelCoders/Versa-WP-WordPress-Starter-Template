"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Pliki i foldery",l={unversionedId:"files-and-folders",id:"files-and-folders",title:"Pliki i foldery",description:"/acf",source:"@site/docs/files-and-folders.md",sourceDirName:".",slug:"/files-and-folders",permalink:"/wlc-starter/files-and-folders",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Informacje og\xf3lne",permalink:"/wlc-starter/"},next:{title:"Funkcjonalno\u015bci",permalink:"/wlc-starter/functionalities"}},s={},p=[{value:"/acf",id:"acf",level:2},{value:"/assets",id:"assets",level:2},{value:"/dist",id:"dist",level:2},{value:"/inc",id:"inc",level:2},{value:"/footer.php",id:"footerphp",level:2},{value:"/header.php",id:"headerphp",level:2},{value:"/index.php",id:"indexphp",level:2},{value:"/sidebar.php",id:"sidebarphp",level:2},{value:"/theme.json.dist",id:"themejsondist",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pliki-i-foldery"},"Pliki i foldery"),(0,i.kt)("h2",{id:"acf"},"/acf"),(0,i.kt)("p",null,"Tutaj automatycznie w pliku ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," zostan\u0105 zapisane zdefiniowane pola z ",(0,i.kt)("strong",{parentName:"p"}," ACF PRO ")," i zaimportowane podczas pobierania zmian z repozytorium."),(0,i.kt)("h2",{id:"assets"},"/assets"),(0,i.kt)("p",null,"Folder w kt\xf3rym wprowadzasz wszystkie zmiany."),(0,i.kt)("p",null,"-- fonts - tutaj umieszczaj \u0142adowane fonty."),(0,i.kt)("p",null,"-- images - tutaj umieszczaj grafiki b\u0119d\u0105ce cz\u0119\u015bci\u0105 integraln\u0105 strony"),(0,i.kt)("p",null,"-- js - tutaj umieszczaj skrypty"),(0,i.kt)("p",null,"-- scss - tutaj umieszczaj wszystkie style"),(0,i.kt)("p",null,"-- svg - tutaj umieszczaj pliki svg b\u0119d\u0105ce integraln\u0105 cz\u0119\u015bci\u0105 strony"),(0,i.kt)("p",null,"-- vendors - tutaj umieszczaj zewn\u0119trzne biblioteki, kt\xf3rych u\u017cywasz na stronie"),(0,i.kt)("h2",{id:"dist"},"/dist"),(0,i.kt)("p",null,"Tutaj umieszczane s\u0105 wszystkie pliki wynikowe, kt\xf3re s\u0105 \u0142adowane w\u0142a\u015bnie z tego miejsca na stronie."),(0,i.kt)("admonition",{title:"Uwaga",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Nie wprowadzaj zmian w tym folderze.")),(0,i.kt)("h2",{id:"inc"},"/inc"),(0,i.kt)("p",null,"Tutaj znajduj\u0105 si\u0119 wszystkie pliki php w kt\xf3rych b\u0119dziesz wprowadza\u0142 zmiany."),(0,i.kt)("p",null,"-- Blocks - folder w kt\xf3rym b\u0119dziesz umieszcza\u0142 wszystkie bloki (np. bloki Gutenberga)"),(0,i.kt)("p",null,"-- Components - folder w kt\xf3rym b\u0119dziesz umieszcza\u0142 wszystkie komponenty (np. header, footer)"),(0,i.kt)("p",null,"-- Core - tutaj b\u0119dziesz wprowadza\u0142 zmiany og\xf3lne np. dotycz\u0105ce ustawie\u0144 theme je\u017celi zajdzie taka potrzeba"),(0,i.kt)("p",null,"-- Views - tutaj b\u0119dziesz wprowadza\u0142 zmiany dotycz\u0105ce widok\xf3w np. dla strony g\u0142\xf3wnej, bloga, strony itd."),(0,i.kt)("h2",{id:"footerphp"},"/footer.php"),(0,i.kt)("p",null,"Tutaj znajduje si\u0119 layout dla footer."),(0,i.kt)("h2",{id:"headerphp"},"/header.php"),(0,i.kt)("p",null,"Tutaj znajduje si\u0119 layout dla header."),(0,i.kt)("h2",{id:"indexphp"},"/index.php"),(0,i.kt)("p",null,"Tutaj znajduje si\u0119 g\u0142\xf3wny layout strony."),(0,i.kt)("h2",{id:"sidebarphp"},"/sidebar.php"),(0,i.kt)("p",null,"Tutaj znajduje si\u0119 g\u0142\xf3wny layout dla sidebar je\u017celi u\u017cywasz."),(0,i.kt)("h2",{id:"themejsondist"},"/theme.json.dist"),(0,i.kt)("p",null,"Ten plik odpowiada za customowe style po stronie admina. Je\u017celi chcesz zdefiniowa\u0107 swoje w\u0142asne ustawienia po stronie admina do wyboru np. dla domy\u015blnych kolor\xf3w,\nfont\xf3w to r\xf3b to w tym pliku. Pami\u0119taj, \u017ce musisz ten plik skopiowa\u0107 lub zmieni\u0107 mu nazw\u0119 na ",(0,i.kt)("inlineCode",{parentName:"p"},"theme.json"),".\nWi\u0119cej na temat mo\u017cliwo\u015bci tego pliku znajdziesz tutaj:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/"},"https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/theme-json-living/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/themes/advanced-topics/theme-json/"},"https://developer.wordpress.org/themes/advanced-topics/theme-json/")))}c.isMDXComponent=!0}}]);