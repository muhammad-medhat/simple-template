

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
 * settings- colors
 */
/** 
 * get the main color from local storage
*/
const mainColor = localStorage.getItem('color')
document.documentElement.style.setProperty('--main-color', mainColor)
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