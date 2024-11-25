import React from 'react';
import ReactDOM from 'react-dom/client'

//creating React element using react 
const heading  = React.createElement('h1',{id:'heading'},'Kalash React code');
console.log(heading);//this is react element

//react element is nothing but an javascript object not an html element 
const root = ReactDOM.createRoot(document.getElementById('root'));
//root element where the whole react elemnt is rendered it is the parent most element

//createElement -> react element(js object) => (rendering on to the dom it converts to html and then it push to the dom)




//creating react element using jsx 

const jsxHeading = <h1 id='heading'>Kalash React code</h1>
const multiJsx = (
                 <h1 className="head">
                    hello
                    </h1>
                   )  //multiline jsx
//when this line executes jsx becomes react element

const HeadingComponent = ()=>{
   return <h1 className='heading'>Namste javascript functional component</h1>
}
const HeadingComponent1 = ()=> <h1 className='heading'>Namste javascript functional component1</h1>

const title = (
   <h1>React element title</h1>
)
const elem = (
   <div id='container'>
   <h1 className='heading'>Namste javascript functional component2</h1>
   {title}
   </div>
)
const HeadingComponent2 =()=>(
   <div id='container'>
   <h1 className='heading'>Namste javascript functional component2</h1>
   {title}
   </div>
)

const TitleComponent =()=>(
 <h1 className='"head' tabIndex="5">Namaste Ttile</h1>
)
console.log(jsxHeading)
root.render(<HeadingComponent2 />) //this is react element