(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{142:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(r),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return r?n.a.createElement(d,l(l({ref:t},p),{},{components:r})):n.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(142)),i={title:"Hello",sidebar_label:"Hello \u263a\ufe0f",slug:"/"},l={unversionedId:"hello",id:"hello",isDocsHomePage:!1,title:"Hello",description:"Hello there,",source:"@site/docs/hello.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/kepta/bangle-play/edit/master/_bangle-website/docs/docs/hello.md",version:"current",sidebar_label:"Hello \u263a\ufe0f",sidebar:"docs",next:{title:"Getting started",permalink:"/docs/getting-started"}},c=[{value:"What is BangleJS ?",id:"what-is-banglejs-",children:[]},{value:"Why should I use it ?",id:"why-should-i-use-it-",children:[]},{value:"How does it compare with ?",id:"how-does-it-compare-with-",children:[]},{value:"I like it, how should I get started ?",id:"i-like-it-how-should-i-get-started-",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Hello there,"),Object(o.b)("p",null,"Thanks for taking out the time to try out"),Object(o.b)("h2",{id:"what-is-banglejs-"},"What is BangleJS ?"),Object(o.b)("p",null,"BangleJS is a collection components for building powerful text editing experiences for the web."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\ud83d\udd0b ",Object(o.b)("strong",{parentName:"p"},"Batteries included")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"We expose plenty of components to help you get started with your first Editor and the API is insanely powerful to do"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Vanilla JS")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"BangleJS is written in a framework agnostic way, so that you can focus on building the editor and not learning a new framework. That said, we have support for React and I have plans to add Vue support in the coming months."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Prosemirror")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Many of you might not be familiar with this library, but trust me it is one of star features of BangleJS. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prosemirror.net/"}),"Prosemirror")," is a low level, insanely powerful library for building rich text editors.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you are familiar with Prosemirror, Bangle is the car-fleet you would make out of the Prosemirror lego pieces.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Collborative Editing"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Schema"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Functional"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"First party support for React (more frameworks to come)")," - Doing UI in vanilla Javascript is not fun, Bangle comes with great first party React support and React components (the ones starting with ",Object(o.b)("inlineCode",{parentName:"p"},"@banglejs/react-"),") to add some extra \ud83d\udc85 oomph to your Editor.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Fast as a racing car \ud83d\ude97 "),"- Bangle is as fast as a rich text editor can be, try pasting a really long document in one of its example (\ud83d\ude09 don't forget to compare it with your current favourite editor)."))),Object(o.b)("h2",{id:"why-should-i-use-it-"},"Why should I use it ?"),Object(o.b)("h2",{id:"how-does-it-compare-with-"},"How does it compare with ?"),Object(o.b)("p",null,"Before I jump into nitty gritty, please know that BangleJS is in ",Object(o.b)("strong",{parentName:"p"},"beta")," stage and if you are looking for a more mature product, the libraries below will help. But hey, do give BangleJS a try."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://quilljs.com/"}),"Quill"),":"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://editorjs.io/"}),"Editor.js"),":"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/ianstormtaylor/slate"}),"Slate"),":"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://draftjs.org/"}),"DraftJS"),":")))),Object(o.b)("h2",{id:"i-like-it-how-should-i-get-started-"},"I like it, how should I get started ?"),Object(o.b)("p",null,"Awesome! head over to Getting started."),Object(o.b)("p",null,"\ud83d\udc9d"))}b.isMDXComponent=!0}}]);