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