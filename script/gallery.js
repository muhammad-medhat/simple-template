const gallery = document.querySelectorAll('.gallery .img-box img')
gallery.forEach( img => {
    img.addEventListener('click', e=>{
        // console.log(e.target)
        //create an overlay
        const overlay = document.createElement('div')
        overlay.className = 'popup'
        document.body.appendChild(overlay)

        //creating the popup-box
        popBox = createPopupBox(img, overlay)


        //creating close button
        const cls = document.createElement('span')
        
        cls.innerText = 'X'
        cls.className = 'btn-close'
        popBox.appendChild(cls)
        document.querySelector('.btn-close').addEventListener('click', e=>{
            document.querySelector('.popup').remove()
        })


    })
})
function createPopupBox(img, overlay){
    const popBox = document.createElement('div')
    popBox.className = 'img-box'
    const image = document.createElement('img')
    image.src   = img.src
    popBox.appendChild(image)
    overlay.appendChild(popBox)
    return popBox
}