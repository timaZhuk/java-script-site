const model=[
    {type:'title', value: 'Hello World from JS'},
    {type:'text', value:'Here we go with somw text'},
    {type:'columns', value:[
        '1111111111',
        '2222222222',
        '3333333333',
        '7888888888'
    ]},
    {type:'image', value:'./assets/image.png'}
   
]

const $site = document.querySelector('#site')  //DOM element

model.forEach(block => {
    let html =''
    if(block.type === 'title'){
        html=title(block)
    }else if(block.type === 'text'){
        html=text(block)
    }else if(block.type ==='columns'){
        //type code
       html=colummnsMap(block)
       
        
       }
       else if(block.type ==='image'){
        html=image(block);

       }//else if block
 //insert our 'html' string into tag with id='site'   
$site.insertAdjacentHTML('beforeend', html);//beforebegin everytme in the end

});//forEach() block


//-----------function declaration--------------------
function title(block){
    return `
    <div class="row">
    <div class="col-sm">
        <h1>${block.value}</h1>
    </div>
    </div>
    `;
}

function text(block){
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>
    `;
}

function columns(block){
    let columns='';
        
        for(let i =0;i<block.value.length;i++){
            columns+=`
            <div class="col-sm">
                ${block.value[i]}
            </div>
        `;
            
        }
        return `<div class="row">
                ${columns}
                </div>`;
        
}

function image(block){
    return `
        <div class="row">
        <img src="${block.value}"/>
        </div>
    `
}

//altertanive code

function colummnsEach(block){
    let html=''
    block.value.forEach(item =>{
        html+=`
        <div class="col-sm">
                ${item}
            </div>
        
        `;
        
    });
    return `<div class="row">
                ${html}
                </div>`;

}

function colummnsMap(block){
    let html= block.value.map(item => `<div class="col-sm">
            ${item}
        </div>`);
    return `<div class="row">
        ${html.join('')}
        </div>`;   
}
