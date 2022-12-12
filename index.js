require("./index.css");

const $e843b91555fcaa3c$export$39a8f6bed6e94390 = [
    {
        type: "title",
        value: "Hello World from JS"
    },
    {
        type: "text",
        value: "Here we go with somw text"
    },
    {
        type: "columns",
        value: [
            "1111111111",
            "2222222222",
            "3333333333",
            "7888888888"
        ]
    },
    {
        type: "image",
        value: "../assets/image.png"
    }
];


//-----------function declaration--------------------
function $b89e97ec23f658f1$export$fb184b623420d9be(block) {
    return `
    <div class="row">
    <div class="col-sm">
        <h1>${block.value}</h1>
    </div>
    </div>
    `;
}
function $b89e97ec23f658f1$export$6f093cfa640b7166(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `;
}
function $b89e97ec23f658f1$export$53b3c91859018cd4(block) {
    let columns = "";
    for(let i = 0; i < block.value.length; i++)columns += `
            <div class="col-sm">
                ${block.value[i]}
            </div>
        `;
    return `<div class="row">
                ${columns}
                </div>`;
}
function $b89e97ec23f658f1$export$5c452ff88e35e47d(block) {
    return `
        <div class="row">
        <img src="${block.value}"/>
        </div>
    `;
}
function $b89e97ec23f658f1$export$2e7de39f3eec97fc(block) {
    let html = "";
    block.value.forEach((item)=>{
        html += `
        <div class="col-sm">
                ${item}
            </div>
        
        `;
    });
    return `<div class="row">
                ${html}
                </div>`;
}
function $b89e97ec23f658f1$export$f57e87c53141187f(block) {
    let html = block.value.map((item)=>`<div class="col-sm">
            ${item}
        </div>`);
    return `<div class="row">
        ${html.join("")}
        </div>`;
}



const $d3928351bb4a0237$var$$site = document.querySelector("#site") //DOM element
;
(0, $e843b91555fcaa3c$export$39a8f6bed6e94390).forEach((block)=>{
    let html = "";
    if (block.type === "title") html = (0, $b89e97ec23f658f1$export$fb184b623420d9be)(block);
    else if (block.type === "text") html = (0, $b89e97ec23f658f1$export$6f093cfa640b7166)(block);
    else if (block.type === "columns") //type code
    html = (0, $b89e97ec23f658f1$export$f57e87c53141187f)(block);
    else if (block.type === "image") html = (0, $b89e97ec23f658f1$export$5c452ff88e35e47d)(block);
     //else if block
    //insert our 'html' string into tag with id='site'   
    $d3928351bb4a0237$var$$site.insertAdjacentHTML("beforeend", html); //beforebegin everytme in the end
}); //forEach() block


