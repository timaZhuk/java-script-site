function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=r.parcelRequire3b7e;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},r.parcelRequire3b7e=s),s.register("27Lyk",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var s={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("27Lyk").register(JSON.parse('{"9vqfN":"index.cda28361.js","1lPhD":"image.10fae59f.png","fdudP":"index.8cad6d4e.css"}'));var i;function a(e,t=""){return`<div class="row" style="${t}">${e}</div>`}function l(e){return`<div class="col-sm">${e}</div>`}function u(e={}){return Object.keys(e).map((t=>`${t}:${e[t]}`)).join(";")}i=new URL(s("27Lyk").resolve("1lPhD"),import.meta.url).toString();class c{constructor(e,t){this.value=e,this.options=t}toHTML(){throw new Error("Method toHTML must be implemented!")}}const d=[new class extends c{constructor(e,t){super(e,t)}toHTML(){const{tag:e="h1",styles:t}=this.options;return a(l(`<${e}>${this.value}</${e}>`),u(t))}}("Constructor of web-sites by JS",{tag:"h1",styles:{background:"linear-gradient(to right, #ff0099, #493240)",color:"#fff","text-align":"center",padding:"1.5rem"}}),new class extends c{constructor(e,t){super(e,t)}toHTML(){const{imageStyles:e,alt:t,styles:r}=this.options;return a(`<img src="${this.value}" alt="${t}" style="${u(e)}"/>`,u(r))}}(t(i),{styles:{padding:"0.25rem",display:"flex","justify-content":"center"},imageStyles:{width:"700px",height:"auto"},alt:"This is image.png"}),new class extends c{constructor(e,t){super(e,t)}toHTML(){return a(l(`<p>${this.value}</p>`),u(this.options.styles))}}('My favorite language for web development <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="-blank">Mozilla MDN JS</a>',{styles:{background:"linear-gradient(to left, #f2994a, #f2c94c)",padding:"1rem","font-weight":"bold"}}),new class extends c{constructor(e,t){super(e,t)}toHTML(){return a(this.value.map(l).join(""),u(this.options.styles))}}(["Application without frameworks on native JavaScript","You can know about OOP, SOLID and functions in JS","JavaScript is powerful and flexible lanhuage with rich UI and OOP functionality"],{styles:{background:"linear-gradient(to left, #8e2de2, #4a00e0)",padding:"2rem",color:"#fff","font-weight":"bold"}})];new class{constructor(e){this.$el=document.querySelector(e)}render(e){e.forEach((e=>{this.$el.insertAdjacentHTML("beforeend",e.toHTML())}))}}("#site").render(d);
//# sourceMappingURL=index.cda28361.js.map