
/**
 * Helper functions
 */

/**********************************************************
 * randomize background
 */



/***************************************************************************************
 * settings colors
 */

/************************************************************************************************
 * skills functions
 */


/**************************************************************************************************
 * Gallery
 */


/* **********************************************
 * nav-bullets 
 */
const navSelector = '.nav-bullets'
const nav = document.querySelector(navSelector)

sections.forEach(sec=>{
// generating nav list
    const bullet = createElement('', 'div', 'bullet')
    const tooltip = createElement(sec.className, 'div', 'tooltip')
    const empty = createElement('', 'div', 'blt')
    bullet.appendChild(empty)
    bullet.appendChild(tooltip)
    nav.appendChild(bullet)  

    //adding the click event
    tooltip.addEventListener('click', (e)=>{
        //remove active from seblings
        removeCssClass('.nav-bullets .bullet', 'active')
        e.target.parentElement.classList.add('active')
        sec.scrollIntoView( {behavior:'smooth'})
    })
})
/**Nav-bullets option */
const bulletsOptionSelector = '.settings #bullets-option .buttons span'
const currentBulletsOption = localStorage.getItem('bullets')

document.querySelectorAll(bulletsOptionSelector).forEach(el => {
    el.addEventListener('click', evt=>{
        // console.log(evt.target)
        removeCssClass(bulletsOptionSelector, 'active')
        evt.target.classList.add('active')
        bulletsOption = boolParse( evt.target.dataset.bullets)
        localStorage.setItem('bullets', bulletsOption)
        showHideItem(navSelector, evt.target.dataset.bullets)
    })
    if(el.dataset.bullets == currentBulletsOption){
        el.classList.add('active')
    }
    showHideItem(navSelector, currentBulletsOption)
})


/***************************************************************************************
 * 
 * creating a dynamic top navigation menu
 */
const navbar = document.querySelector('.navbar ul')
sections.forEach(sec=>{
    const li = document.createElement('li')
    li.innerHTML = sec.className
    navbar.appendChild(li)
    li.addEventListener('click', e=>{
        sec.scrollIntoView( {behavior:'smooth'})
    })
})

 /* ******************************************************************************* 
  * helper functions
  */

//   document.querySelectorAll('.option-box#random-option span').forEach(el=>{
//       console.log(el)
//       el.target.style.width='100px'
//   })