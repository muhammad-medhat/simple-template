/** 
 * get the main color from local storage
*/
const mainColor = localStorage.getItem('color')
document.documentElement.style.setProperty('--main-color', mainColor)
/**
 * Helper functions
 */
function boolParse(val){
    return val.toLowerCase() == 'true' ? true : false
}

/**
 * settings box
 */
const settingGear = document.querySelector('.settings .fa-gear')
const settingsDiv = document.querySelector('.settings')

//settingGear.addEventListener('click', toggleOpen )

document.querySelector('.toggle-settings').addEventListener('click', ()=>{
    settingGear.classList.toggle('fa-spin')
    //settingsDiv.classList.toggle('open')
    toggleOpen()
})

function toggleOpen(){
    if(settingsDiv.classList.contains('open') ){
        settingsDiv.classList.remove('open')
        settingsDiv.classList.add('close')
    } else{
        settingsDiv.classList.add('open')
        settingsDiv.classList.remove('close')
    }
}

/**********************************************************
 * randomize background
 */

const landing = document.querySelector('.landing-page')
const interval = 1000
// const imgs =
//let randomizeBgOption = true
let bgInt = null
function randomBackground( randomizeBgOption){
    if(randomizeBgOption){
        bgInt = setInterval(() => {
            const min=1
            const max=8
            const r = Math.floor(Math.random() * (max - min + 1)) + min;
            // console.log(r)
            landing.style.backgroundImage = `url(../img/bg/img0${r}.jpg)`
        }, interval);
    } else{
        clearInterval(bgInt)
    }
}
//call it on load

document.querySelectorAll('.settings .option-box .buttons span').forEach(el => {
    //console.log(el);
    let randomStorage = localStorage.getItem('random')
    let randomizeBgOption=''
    //add the click event foreach button to update item in localstorage
    el.addEventListener('click', evt=>{
        // console.log(evt)
        removeCssClass('.option-box .buttons span', 'active')
        evt.target.classList.add('active')
        // console.log('before', randomizeBgOption)
        randomizeBgOption = boolParse( evt.target.dataset.random)
        // console.log('after', randomizeBgOption)

        randomBackground(randomizeBgOption)

        localStorage.setItem('random', randomizeBgOption)
    })
    //add te active class on load
    if(el.dataset.random == randomStorage){
        el.classList.add('active')
    }
    //call image randomization on load
    randomBackground(boolParse(randomizeBgOption))


});


/***************************************************************************************
 * settings colors
 */
const colorsList = document.querySelectorAll('.colors-list li')

colorsList.forEach(li=>{
    
    li.style.backgroundColor= li.dataset.color
    li.addEventListener('click', e=>{
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem('color', e.target.dataset.color)
        //remove active from  seblings
        e.target.parentElement.querySelectorAll('li').forEach(el=>{
            el.classList.remove('active')
        })
        //add active class
        e.target.classList.add('active')
        //change border color on click
        document.querySelectorAll('.settings .option-box h4').forEach(el=>{
            //el.style.border = 'solid'            
            el.style.color = e.target.style.backgroundColor

        })
    })

    //set active class on initialize
    if(mainColor == li.dataset.color){
        //console.log(li)
        li.classList.add('active')
        //change border color on load
        document.querySelectorAll('.settings .option-box h4').forEach(el=>{
            el.style.color = mainColor
        })
    }
})

//style for selector
function changeStyle(selector, style){

}

//remove class from a container
function removeCssClass(selector, className){
    document.querySelectorAll(selector).forEach(el=>{
        el.classList.remove(className)
    })
    
    
}