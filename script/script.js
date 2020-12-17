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