
//option 1: directly set on the HTML elements

//<button onclick="console.log(65)"> Another button</button>

console.log('This is separate JS file');

//option 2 :add onclike function on the Html Elements

//<button onclick="redMake()">Make Red</button>

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

//option 4:
const pinkButton = document.getElementById('make-pink');
// console.log(pinkButton);
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}