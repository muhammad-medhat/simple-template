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
//=======
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
