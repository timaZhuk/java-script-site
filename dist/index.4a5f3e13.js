const n={title:function(n){return`\n    <div class="row">\n    <div class="col-sm">\n        <h1>${n.value}</h1>\n    </div>\n    </div>\n    `},text:function(n){return`\n    <div class="row">\n        <div class="col-sm">\n            <p>${n.value}</p>\n        </div>\n    </div>\n    `},image:function(n){return`\n        <div class="row">\n        <img src="${n.value}"/>\n        </div>\n    `},columns:function(n){let e="";for(let l=0;l<n.value.length;l++)e+=`\n            <div class="col-sm">\n                ${n.value[l]}\n            </div>\n        `;return`<div class="row">\n                ${e}\n                </div>`},colummnsEach:function(n){let e="";return n.value.forEach((n=>{e+=`\n        <div class="col-sm">\n                ${n}\n            </div>\n        \n        `})),`<div class="row">\n                ${e}\n                </div>`},colummnsMap:function(n){return`<div class="row">\n        ${n.value.map((n=>`<div class="col-sm">\n            ${n}\n        </div>`)).join("")}\n        </div>`}},e=document.querySelector("#site");[{type:"title",value:"Hello World from JS"},{type:"text",value:"Here we go with somw text"},{type:"columns",value:["1111111111","2222222222","3333333333","7888888888"]},{type:"image",value:"../assets/image.png"}].forEach((l=>{const s=n[l.type];s&&e.insertAdjacentHTML("beforeend",s(l))}));
//# sourceMappingURL=index.4a5f3e13.js.map
