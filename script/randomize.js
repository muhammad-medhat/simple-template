/**********************************************************
 * randomize background
 */

const interval = 1000
//let randomizeBgOption = true
let bgInt = null

function randomBackground( randomizeBgOption){

    const landing = document.querySelector('.landing-page')
    if(boolParse(randomizeBgOption)){
        bgInt = setInterval(() => {
            const min = 1
            const max = 8
            const r = Math.floor(Math.random() * (max - min + 1)) + min;
            landing.style.backgroundImage = `url(../img/bg/img0${r}.jpg)`
        }, interval);
    } else{
        clearInterval(bgInt)
    }
}
const randomStorage = localStorage.getItem('random')
const randomOptionsSelector = '.settings #random-option .buttons span'
document.querySelectorAll(randomOptionsSelector).forEach(el => {
    //console.log(el);
    let randomizeBgOption=''
    //add the click event foreach button to update item in localstorage
    el.addEventListener('click', evt=>{
        console.log(evt)
        optionButtonActivate(randomOptionsSelector, evt.target)
        randomizeBgOption = boolParse( evt.target.dataset.random)
        randomBackground(randomizeBgOption)
        localStorage.setItem('random', randomizeBgOption)
    })
    //add te active class on load
    if(el.dataset.random == randomStorage){
        el.classList.add('active')
    }
});

//call image randomization on load
randomBackground(boolParse(randomStorage))