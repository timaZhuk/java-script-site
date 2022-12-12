import {row, col, css} from './utils'

//-----------function declaration--------------------
function title(block){
    const{tag='h1',styles}=block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}
//-----------------------------------------------
function text(block){
    return row(col(`<p>${block.value}</p>`),css(block.options.styles))
}


function columns(block){
    const html=block.value.map(col).join('')
    return row(html,css(block.options.styles))
}

// function columns(block){
//     let columns='';
        
//         for(let i =0;i<block.value.length;i++){
//             columns+=`
//             <div class="col-sm">
//                 ${block.value[i]}
//             </div>
//         `;
            
//         }
//         return `<div class="row">
//                 ${columns}
//                 </div>`;
        
// }
//--------------------------------------------------------
function image(block){
    const{imageStyles:is, alt, styles}=block.options
    return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}"/>`,css(block.options.styles)) 
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

function columnsMap(block){
    let html= block.value.map(item => col(item))
    return row(html.join(''), css(block.options.styles));
}

export const templates = {
    title:title,
    text:text,
    image:image,
    columns:columns,
    columnsMap: columnsMap,
}

// columns:columns,
    // colummnsEach: colummnsEach,