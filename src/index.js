import {model} from './model'

import {templates} from './templates';
import './styles/main.css'

const $site = document.querySelector('#site')  //DOM element



model.forEach(block => {
      
const toHTML = templates[block.type]
if(toHTML){
    $site.insertAdjacentHTML('beforeend', toHTML(block));//beforebegin everytme in the end
}
 

});//forEach() block





// let html =''
    // if(block.type === 'title'){
    //     html=title(block)
    // }else if(block.type === 'text'){
    //     html=text(block)
    // }else if(block.type ==='columns'){
    //     //type code
    //    html=colummnsMap(block)
       
        
    //    }
    //    else if(block.type ==='image'){
    //     html=image(block);

    //    }//else if block
 //insert our 'html' string into tag with id='site' 