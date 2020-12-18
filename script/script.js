/** 
 * get the main color from local storage
*/
const mainColor = localStorage.getItem('color')
document.documentElement.style.setProperty('--main-color', mainColor)

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

/**
 * randomize background
 */

const landing = document.querySelector('.landing-page')
const interval = 3000
// const imgs =

setInterval(() => {
    const min=1
    const max=4
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(r)
    landing.style.backgroundImage = `url(../img/img0${r}.jpg)`
}, interval);
/**
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
    })
    //set active class on initialize
    if(mainColor == li.dataset.color){
        console.log(li)
        li.classList.add('active')
    }
})
//remove class from a container
function removeCssClass(selector, className){
    document.querySelectorAll(selector).classList.remove(className)
    
}