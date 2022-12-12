import {model} from './model'
import {Site} from './classes/site'

import './styles/main.css'

const site=new Site('#site')


site.render(model)



// const $site = document.querySelector('#site')  //DOM element

// model.forEach(block => {
      
// //onst toHTML = templates[block.type]

//     site.insertAdjacentHTML('beforeend', block.toHTML());//beforebegin everytme in the end

 

// });//forEach() block

// import {templates} from './templates';



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