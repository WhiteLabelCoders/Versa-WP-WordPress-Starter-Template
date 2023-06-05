"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),k=s,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=k;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={sidebar_position:3},o="Funkcjonalno\u015bci",r={unversionedId:"functionalities",id:"functionalities",title:"Funkcjonalno\u015bci",description:"Opis funkcjonalno\u015bci na podstawie plik\xf3w styli.",source:"@site/docs/functionalities.md",sourceDirName:".",slug:"/functionalities",permalink:"/wlc-starter/functionalities",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pliki i foldery",permalink:"/wlc-starter/files-and-folders"},next:{title:"Hooki motywu",permalink:"/wlc-starter/theme-hooks"}},l={},p=[{value:"/assets/scss/_variables.scss",id:"assetsscss_variablesscss",level:2},{value:"/assets/scss/_bootstrap.scss",id:"assetsscss_bootstrapscss",level:2},{value:"/assets/scss/_base.scss",id:"assetsscss_basescss",level:2},{value:"/assets/scss/_mixins.scss",id:"assetsscss_mixinsscss",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...i}=e;return(0,s.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"funkcjonalno\u015bci"},"Funkcjonalno\u015bci"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," Opis funkcjonalno\u015bci na podstawie plik\xf3w styli. ")),(0,s.kt)("p",null,"Aby umie\u0107 efektywnie wykorzysta\u0107 mo\u017cliwo\u015bci tego startera, nale\u017cy si\u0119 zapozna\u0107 z zawarto\u015bci\u0105 plik\xf3w z mo\u017cliwo\u015bciami konfiguracji.\nPliki maj\u0105 dodatkowe informacje w postaci komentarzy i czego\u015b na wz\xf3r spisu tre\u015bci by u\u0142atwi\u0107 nawigacj\u0119 aczkolwiek,\nby nie analizowa\u0107 ich wszystkich po kolei tutaj znajdziesz ich opis."),(0,s.kt)("h2",{id:"assetsscss_variablesscss"},"/assets/scss/_variables.scss"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 1. Global ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $use-bootstrap-grid: false; ")," - tutaj mo\u017cesz ustawi\u0107 czy chcesz w swoim projekcie u\u017cywa\u0107 grid\u2019a z Bootstrap 5.\nJe\u017celi ustawisz t\u0105 zmienn\u0105 na true wi\u0119kszo\u015b\u0107 rzeczy zrobi si\u0119 automatycznie jak \u0142adowanie pliku bootstrap-reboot.min.css w global.scss.\nNiestety istnieje pewien b\u0142\u0105d importu w sass i je\u017celi chcesz nadpisywa\u0107 zmienne Bootstrap 5 musisz sam w pliku global.scss odkomentowa\u0107\nlini\u0119 z importem pliku \u2018bootstrap\u2019. To jedyna niedogodno\u015b\u0107, kt\xf3rej na razie nie uda\u0142o si\u0119 rozwi\u0105za\u0107 i jest to problem globalny."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Assets image",src:a(371).Z,width:"512",height:"374"})),(0,s.kt)("p",null,"Je\u017celi ta zmienna jest ustawiona jak domy\u015blnie na ",(0,s.kt)("strong",{parentName:"p"}," false ")," wtedy nie u\u017cywamy importowanego grid\u2019a z Bootstrap 5 i z dost\u0119pnych klas do\nbudowania layoutu mamy tylko znajduj\u0105ce si\u0119 w pliku _base.scss klasy .row i .container. Nie musisz si\u0119 ba\u0107 eksperymentowa\u0107 z prze\u0142\u0105czeniem\ntej zmiennej. Wszystko jest tak przygotowane, \u017ce definiuj\u0105c sobie breakpointy oraz maksymalne szeroko\u015bci dla kontener\xf3w bez wzgl\u0119du na to,\nczy u\u017cywasz Bootstrap 5 czy nie, b\u0119d\u0105 dzia\u0142a\u0107 lub si\u0119 integrowa\u0107."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $base-font-size: 16; ")," - zmienna odpowiadaj\u0105ca za domy\u015blny rozmiar czcionki. Proponuj\u0119 nie modyfikowa\u0107, dzi\u0119ki czemu \u0142atwiej si\u0119\nkontroluje rozmiar fontu je\u017celi u\u017cywasz skalowania w wykorzystaniem jednostek rem."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $default-transition-duration: 0.15s;, $default-transition-timing: ease-in-out; ")," - zmienne wykorzystywane w mixinie dla domy\u015blnych tranzycji."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $grid-gutter-width: 2rem; ")," - ustawia domy\u015blny padding dla kontenera (dzia\u0142a tylko z ustawieniami ",(0,s.kt)("strong",{parentName:"p"}," $use-bootstrap-grid: false; ")," )."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 2. Grid breakpoints ")),(0,s.kt)("p",null,"Tutaj kontrolujesz ilo\u015b\u0107 breakpoint\xf3w. Mo\u017cesz je usuwa\u0107, dodawa\u0107 nowe. Integruj\u0105 si\u0119 z Bootstrap 5 je\u017celi jest u\u017cywany."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 3. Container max-width sizes ")," "),(0,s.kt)("p",null,"Tutaj kontrolujesz maksymaln\u0105 szeroko\u015b\u0107 kontener\xf3w. Mo\u017cesz je usuwa\u0107, dodawa\u0107 nowe. Integruj\u0105 si\u0119 z Bootstrap 5 je\u017celi jest u\u017cywany."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 4. Responsive Fonts ")),(0,s.kt)("p",null,"Tutaj kontrolujesz pe\u0142ne skalowanie warto\u015bci (je\u017celi u\u017cywasz jednostek rem lub funkcji pomocniczej rem() )."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 5. Root variables ")),(0,s.kt)("p",null,"Tutaj dodajesz swoje zmienne dla :root{}"),(0,s.kt)("h2",{id:"assetsscss_bootstrapscss"},"/assets/scss/_bootstrap.scss"),(0,s.kt)("admonition",{title:"UWAGA",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Ten plik jest u\u017cywany tylko do importowania komponent\xf3w Bootstrap 5.")),(0,s.kt)("h2",{id:"assetsscss_basescss"},"/assets/scss/_base.scss"),(0,s.kt)("p",null,"Plik w kt\xf3rym dodajemy globalne style jak np. dla html, .row, .container. Klasy .row i .container s\u0105 mo\u017cliwe do u\u017cycia bez wzgl\u0119du\nna to czy korzystasz z integracji z Bootstrap 5, czy te\u017c nie. Je\u017celi korzystasz to nie zostan\u0105 za\u0142adowane. Je\u017celi nie korzystasz\nz Bootstrap 5 zostan\u0105 \u0142adowane. Wszystko jest tak przygotowane by nie mia\u0142o to wp\u0142ywu na wyb\xf3r u\u017cycia Bootstrap 5, nie martw si\u0119 :)"),(0,s.kt)("h2",{id:"assetsscss_mixinsscss"},"/assets/scss/_mixins.scss"),(0,s.kt)("p",null,"Plik zawiera zbi\xf3r mixin i funkcji scss, kt\xf3re maj\u0105 na celu u\u0142atwi\u0107 tworzenie styli."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 1. Disable user selection ")," - umo\u017cliwia wy\u0142\u0105czenie zaznaczania tekstu"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include nonselect;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 2. Color ")," -"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 3. Truncate single line text ")," - przycina text jednej linii je\u017celi jest za d\u0142uga dodaj\u0105c na ko\u0144cu \u2018...\u2019"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include truncateText;\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 4. Truncate multi line text ")," - przycina tekst powy\u017cej zdefiniowanej linii. W () nale\u017cy poda\u0107 po kt\xf3rej linii tekst ma zosta\u0107 przyci\u0119ty."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include truncateLines(3);\n}\n")),(0,s.kt)("p",null,"  W tym przyk\u0142adzie text zostanie przyci\u0119ty na ko\u0144cu trzeciej linii. Tekst z pozosta\u0142ym linii nie b\u0119dzie wy\u015bwietlany."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 5. PX to REM ")," - funkcja, kt\xf3ra pomaga w przeliczaniu warto\u015bci px na warto\u015bci rem. Zalecana do powszechnego u\u017cycia"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    font-size: rem(18);\n}\n")),(0,s.kt)("p",null,"  W tym przyk\u0142adzie font-size zostanie przeliczony z warto\u015bci 18px na 1.125rem."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 6. aspect-ratio ")," - starsza metoda zachowania ratio dla element\xf3w. Obecnie rzadko u\u017cywana, ale mo\u017ce si\u0119 komu\u015b przyda\u0107.\nWymaga podania warto\u015bci rozmiar\xf3w elementu a reszta zostanie wyliczona i b\u0119dzie zachowywa\u0142a ratio dla tego elementu."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include aspect-ratio(200, 300);\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 7. row ")," - mixina wykorzystywana w klasie .row je\u017celi nie korzystasz z Bootstrap 5."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 8. Custom media queries up ")," - mixina mediaquery dla rozdzielczo\u015bci powy\u017cej wybranego z predefiniowanych prog\xf3w\nw _variables.scss integruj\u0105ca si\u0119 z Bootstrap 5 je\u017celi jest wykorzystywany."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include media-breakpoint-up(lg) {\n        \u2026\n    }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 9. Custom media queries down ")," - mixina mediaquery dla rozdzielczo\u015bci poni\u017cej wybranego z predefiniowanych\nprog\xf3w w _variables.scss integruj\u0105ca si\u0119 z Bootstrap 5 je\u017celi jest wykorzystywany."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include media-breakpoint-down(lg) {\n        \u2026\n    }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 10. Custom media queries between ")," - mixina mediaquery dla rozdzielczo\u015bci pomi\u0119dzy wybranymi z\npredefiniowanych progami w _variables.scss integruj\u0105ca si\u0119 z Bootstrap 5 je\u017celi jest wykorzystywany."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include media-breakpoint-between(md,lg) {\n        \u2026\n    }\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 11. Custom transition ")," - mixina u\u017cywana do transition gdzie ustawiane s\u0105 domy\u015blne warto\u015bci ze zmiennych\n$default-transition-duration oraz $default-transition-timing. Pomocna do utrzymania znormalizowanych transition dla element\xf3w na stronie."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition();\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition(opacity);\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition(opacity, 0.3s);\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},".element {\n    @include transition(opacity, 0.3s, ease-in);\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," 12. Responsive ")," - mixina Fluid Typography ",(0,s.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/fluid-typography/"},"https://css-tricks.com/snippets/css/fluid-typography/")," u\u017cywana\ndo \u201cskalowania\u201d nie tylko element\xf3w tekstowych ale r\xf3wnie\u017c wszelkich komponent\xf3w, w\u0142a\u015bciwo\u015bci, kt\xf3re u\u017cywaj\u0105 warto\u015bci rem.\nOparta o rozwi\u0105zanie korzystaj\u0105ce z calc(). U\u017cywana na html, dzia\u0142a z media query. Domy\u015blnie u\u017cyta w _base.scss na html.\nDzia\u0142a ona tak, \u017ce w _variables.scss ustawiamy warto\u015bci dla skalowania pomi\u0119dzy ustawionymi warto\u015bciami i progami media query"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $min-font-size ")," - min font size for responsive range"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $max-font-size ")," - max font size for responsive range"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $min-vw ")," - min width responsive range"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," $max-vw ")," - max width responsive range"),(0,s.kt)("p",null,"Przyk\u0142ad zastosowania"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scss"},"html {\n    @include fluid-type($min_width, $max_width, $min_font, $max_font);\n}\n")))}m.isMDXComponent=!0},371:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-f2599e1f058c729a5dabc9a60b0331bd.jpeg"}}]);