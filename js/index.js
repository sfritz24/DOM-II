// Your code goes here

//added remove all images button
const newDiv = document.createElement('div');
const header = document.querySelector('.nav-container');
const newButton = document.createElement('button');

header.append(newDiv);

const divInfo = document.querySelector('.nav-container div');
divInfo.append(newButton);

const btnInfo = document.querySelector('.nav-container div button');
btnInfo.classList.add('remove');
btnInfo.textContent = 'Hover Over Me!';

const imgOne = document.querySelector('.intro img');
const imgTwo = document.querySelector('.img-content:nth-of-type(1) img');
const imgThree = document.querySelector('.img-content:nth-of-type(2) img');
const imgFour = document.querySelector('.content-destination img');

// console.log(imgTwo);

function off(event){
    imgOne.classList.add('off');
    imgTwo.classList.add('off');
    imgThree.classList.add('off');
    imgFour.classList.add('off');
}

btnInfo.addEventListener('mouseover', off);
//end of remove images button

// add button to add images back
const newButtonTwo = document.createElement('button');
divInfo.append(newButtonTwo);

const newBtn = document.querySelector('.nav-container div button:nth-of-type(2)');
newBtn.classList.add('add');
newBtn.textContent = 'Click Me!';

function on(event){
    imgOne.classList.remove('off');
    imgTwo.classList.remove('off');
    imgThree.classList.remove('off');
    imgFour.classList.remove('off');
};

newBtn.addEventListener('click', on);
//end of add image back button