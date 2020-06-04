// Your code goes here

//added remove all images button
const newDiv = document.createElement('div');
const nav = document.querySelector('.nav-container');
const newButton = document.createElement('button');

nav.append(newDiv);

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

//add zoom to a picture
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    imgFour.style.transform = `scale(${scale})`;
};

let scale = 1;
imgFour.addEventListener('wheel', zoom);
//end zoom to picture

//change color of something when the mouse presses that element
const firstDest = document.querySelector('.destination:nth-of-type(1) h4');

firstDest.addEventListener('mousedown', (event) => {
    event.target.style.color = 'red';
});

firstDest.addEventListener('mouseup', event =>{
    event.target.style.color = 'blue';
});

// for(let logo of document.getElementsByTagName('h1')) {
//     logo.addEventListener('mousedown', event => {
//         event.target.style.color ='blue';
//     });
//     logo.addEventListener('mouseup', event => {
//         event.target.style.color = 'red';
//     });
// };
//end of change color

//add hover effect
const secDest = document.querySelector('.destination:nth-of-type(2) p');

secDest.addEventListener('mouseenter', event =>{
    event.target.style.border = '2px dashed #17A2B8';
});
//end of the first part of the hover

//start of second part of hover
secDest.addEventListener('mouseleave', event =>{
    event.target.style.border = 'none';
});
//end of hover

//add window live size info
const newDivTwo = document.createElement('div');

nav.prepend(newDivTwo);

const newH4 = document.createElement('h4');
const newPOne = document.createElement('p');
const newPTwo = document.createElement('p');

const windowInfo = document.querySelector('div:nth-of-type(1)');
windowInfo.append(newH4);
windowInfo.append(newPOne);
windowInfo.append(newPTwo);

const windowH = document.querySelector('div:nth-of-type(1) h4');
const windowPOne = document.querySelector('div:nth-of-type(1) p:nth-of-type(1)');
const windowPTwo = document.querySelector('div:nth-of-type(1) p:nth-of-type(2)');

windowH.textContent = 'Window Size';
windowPOne.innerHTML = 'Height: <span id="height"></span>';
windowPTwo.innerHTML = 'Width: <span id="width"></span>';

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

window.addEventListener('resize', liveResize =>{
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
});
//end live resize

//add copy effect that makes whatever you copied to be converted to caps when pasted
const headline = document.querySelector('.intro h2');

headline.addEventListener('copy', event =>{
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});
//end of copy thing

//adding something to the conosle
document.addEventListener('keydown', message =>{
    console.log(`I did a lot and it was very tedious and I did not like this project. I'm lying! I totally did! It really was fun. This last event is meant to only be seen in the console. I don't want it to do anything on the html.`);
});
//end of secret message

//adding the stopPropagation
function stop(){
    const thirdDestDiv = document.querySelector('div .destination:nth-of-type(3)');
    const thirdDestP = thirdDestDiv.querySelector('p');

    thirdDestDiv.addEventListener('click', event =>{
        thirdDestDiv.style.backgroundColor = 'aqua';
    });
    thirdDestP.addEventListener('click', event =>{
        thirdDestP.style.color = 'turquoise';
        event.stopPropagation();
    });
};

stop();