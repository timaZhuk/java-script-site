function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequire3b7e;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequire3b7e=i),i.register("27Lyk",(function(t,n){var o,r;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"9vqfN":"index.121edfbe.js","1lPhD":"image.10fae59f.png","fdudP":"index.8cad6d4e.css"}'));var s;s=new URL(i("27Lyk").resolve("1lPhD"),import.meta.url).toString();class a{constructor(e,t,n){this.type=e,this.value=t,this.options=n}}const l=[new class extends a{constructor(e,t){super("title",e,t)}}("Constructor of web-sites by JS",{tag:"h1",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff","text-align":"center",padding:"1.5rem"}}),new class extends a{constructor(e,t){super("image",e,t)}}(t(s),{styles:{padding:"0.25rem",display:"flex","justify-content":"center"},imageStyles:{width:"700px",height:"auto"},alt:"This is image.png"}),new class extends a{constructor(e,t){super("text",e,t)}}('My favorite language for web development <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="-blank">Mozilla MDN JS</a>',{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",padding:"1rem","font-weight":"bold"}}),new class extends a{constructor(e,t){super("columns",e,t)}}(["Application without frameworks on native JavaScript","You can know about OOP, SOLID and functions in JS","JavaScript is powerful and flexible lanhuage with rich UI and OOP functionality"],{styles:{background:"linear-gradient(to left, #8e2de2, #4a00e0)",padding:"2rem",color:"#fff","font-weight":"bold"}})];function u(e,t=""){return`<div class="row" style="${t}">${e}</div>`}function c(e){return`<div class="col-sm">${e}</div>`}function f(e={}){return Object.keys(e).map((t=>`${t}:${e[t]}`)).join(";")}const d={title:function(e){const{tag:t="h1",styles:n}=e.options;return u(c(`<${t}>${e.value}</${t}>`),f(n))},text:function(e){return u(c(`<p>${e.value}</p>`),f(e.options.styles))},image:function(e){const{imageStyles:t,alt:n,styles:o}=e.options;return u(`<img src="${e.value}" alt="${n}" style="${f(t)}"/>`,f(e.options.styles))},columns:function(e){return u(e.value.map(c).join(""),f(e.options.styles))},columnsMap:function(e){return u(e.value.map((e=>c(e))).join(""),f(e.options.styles))}},p=document.querySelector("#site");l.forEach((e=>{const t=d[e.type];t&&p.insertAdjacentHTML("beforeend",t(e))}));
//# sourceMappingURL=index.121edfbe.js.map
