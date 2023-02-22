
//option 1: directly set on the HTML elements

console.log('This is separate JS file');

//option 2 :add onclike function

function redMake() {
    document.body.style.backgroundColor = 'red';

}

//option: 3

const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = blueMake;
function blueMake() {
    document.body.style.backgroundColor = 'blue';

}

//option 3: another

const makepurpleButton = document.getElementById('make-purple');
// console.log(makeBlueButton);
makepurpleButton.onclick = function purpleMake() {
    document.body.style.backgroundColor = 'purple';

}