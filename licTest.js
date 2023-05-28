import {licence} from './utils/licenceObject.js'; //named import

// const testFunction = () => {
//     console.log(licence)
    
    
// }

// testFunction()

//console.log('index: ' + licence.indexOf('here'));
var index = licence.findIndex(e => e.value === 'No licence');
if (index !== -1) {
    console.log(licence[index]);
    console.log(licence[index].name);
}