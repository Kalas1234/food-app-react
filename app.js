const heading = React.createElement('h1',{id:"heading"},"Hello World from React")
const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement('div', { id: 'child' }, React.createElement('h1', {}, 'this is h1 tag'))
);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(parent);
root.render(parent);


//  <div id ="parent">
//     <div id = "child1">
//         <h1>i am h1 tag of child1</h1>
//         <h2>i ma h2 tag of child1</h2>
//     </div>
//     <div id = "child2">
//         <h1>i am h1 tag of child2</h1>
//         <h2>i ma h2 tag of child2</h2>
//     </div>
// </div> 

// const parent = React.createElement("div", { id: 'parent' }, [React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', {}, 'i am h1 tag of child1'),
//     React.createElement('h2', {}, 'i am h2 tag of child1')
// ]), React.createElement('div', { id: 'child2' }, [
//     React.createElement('h1', {}, 'i am h1 tag of child2'),
//     React.createElement('h2', {}, 'i am h2 tag of child2')
// ])])

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(parent);