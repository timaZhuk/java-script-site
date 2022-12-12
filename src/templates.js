import {row, col} from './utils'

//-----------function declaration--------------------
function title(block){
    return row(col(`<h1>${block.value}</h1>`))
}
//-----------------------------------------------
function text(block){
    return row(col(`<p>${block.value}</p>`))
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
//--------------------------------------------------------
function image(block){
    return row(`<img src="${block.value}"/>`) 
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
    let html= block.value.map(item => col(item));
    return row(html.join(''))
}

export const templates = {
    title:title,
    text:text,
    image:image,
    columns:columns,
    colummnsEach: colummnsEach,
    colummnsMap: colummnsMap
}