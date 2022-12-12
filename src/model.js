import image from './assets/image.png'
import {TitleBlock, TextBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

const text=`My favorite language for web development <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" target="-blank">Mozilla MDN JS</a>`
export const model = [

    new TitleBlock('Constructor of web-sites by JS',{
        tag:'h1',
        styles:{
            background:'linear-gradient(to right, #ff0099, #493240)',
            color:'#fff',
            'text-align':'center',
            padding:'1.5rem'

        }
                
    }),

    new ImageBlock(image,{
        styles:{
            padding:'0.25rem',
            display: 'flex',
            'justify-content':'center'
        },
        imageStyles:{
            width:'700px',
            height:'auto',
        },
        alt:'This is image.png'
    }),
    new TextBlock(text,{
        styles:{
            background:'linear-gradient(to left, #f2994a, #f2c94c)',
            padding:'1rem',
            'font-weight':'bold'
        }
    }),

    new ColumnsBlock([
        'Application without frameworks on native JavaScript',
        'You can know about OOP, SOLID and functions in JS',
        'JavaScript is powerful and flexible lanhuage with rich UI and OOP functionality',
        
    ],{
        styles:{
            background:'linear-gradient(to left, #8e2de2, #4a00e0)',
            padding:'2rem',
            color:'#fff',
            'font-weight': 'bold'
        }
    }),
   
]//models

/*

{type:'columns', value:[
        'Application without frameworks on native JavaScript',
        'You can know about OOP, SOLID and functions in JS',
        'JavaScript is powerful and flexible lanhuage with rich UI and OOP functionality',
        
    ],
    options:{
        styles:{
            background:'linear-gradient(to left, #8e2de2, #4a00e0)',
            padding:'2rem',
            color:'#fff',
            'font-weight': 'bold'
        }
    }
},

{type:'text', value:text, options:{
        styles:{
            background:'linear-gradient(to left, #f2994a, #f2c94c)',
            padding:'1rem',
            'font-weight':'bold'
        }
    }},
{type:'image', value:image, options:{
        styles:{
            padding:'2rem 0',
            display: 'flex',
            'justify-content':'center'
        }
    }},
    {type:'image', value:image, options:{
        styles:{
            padding:'0.25rem',
            display: 'flex',
            'justify-content':'center'
        },
        imageStyles:{
            width:'700px',
            height:'auto',
        },
        alt:'This is image.png'
    }},
 */