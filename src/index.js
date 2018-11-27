
const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
    System.import('./image-viewer').then((module) => {
        module.default();
    });
};

document.body.appendChild(button);



////// Old Code
// // const sum = require('./sum');  // CommonJS modules
// import sum from './sum';  // ES2015 modules
// import './image-viewer';

// console.log(sum(7, 5));