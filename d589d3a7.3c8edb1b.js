(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(142)),i={title:"Getting started",sidebar_label:"Getting Started"},c={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"To get started with BangleJS you need to install the core module:",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/kepta/bangle-play/edit/master/_bangle-website/docs/docs/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"Hello",permalink:"/docs/"},next:{title:"Contributing",permalink:"/docs/contributing"}},l=[{value:"With React",id:"with-react",children:[]},{value:"Vue ?",id:"vue-",children:[]},{value:"The Bangle eco-system",id:"the-bangle-eco-system",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To get started with BangleJS you need to install the core module:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @banglejs/core\n")),Object(o.b)("h2",{id:"with-react"},"With React"),Object(o.b)("p",null,"BangleJS at its heart is framework agnostic, but it comes with first party support for React. To get started, run the follow command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @banglejs/react\n")),Object(o.b)("h2",{id:"vue-"},"Vue ?"),Object(o.b)("p",null,"\u2764\ufe0f ",Object(o.b)("em",{parentName:"p"},"Support for ",Object(o.b)("strong",{parentName:"em"},"Vue")," is coming soon")),Object(o.b)("p",null,"Meanwhile you can either use vanilla BangleJS Components ",Object(o.b)("em",{parentName:"p"},"or")," consider ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ueberdosis/tiptap"}),"tiptap")," an awesome library which runs the same ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prosemirror.net"}),"Prosemirror")," blood in its veins!"),Object(o.b)("h2",{id:"the-bangle-eco-system"},"The Bangle eco-system"),Object(o.b)("p",null,"The BangleJS project is made up of smaller individual packages to fit a particular scoped need. You can find their documentation under the API section of the sidebar. Please keep the following things in mind when consuming any of the Bangle packages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Only the packages with names starting ",Object(o.b)("inlineCode",{parentName:"p"},"@banglejs/react-")," require a React dependency.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Certain packages have a peer dependency on other Bangle packages, your package manager should help you install them.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If a package has a stylesheet, it will always under a file named ",Object(o.b)("inlineCode",{parentName:"p"},"style.css")," and can be imported by doing ",Object(o.b)("inlineCode",{parentName:"p"},"import @banglejs/xyz-module/style.css"),". Please refer to the styling guide for more info."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"TODO styling guide link"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Majority of Bangle packages export a Component. Please refer to the API of each package on how to consume them."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"TODO add a link to component")))))}s.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);