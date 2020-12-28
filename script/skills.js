/**
 * skills section
 * first approach
 * in this approach the event is fired when the whole skills div is visible in the viewport
 */
                // let target = document.querySelector('#skills')
                // // options for the IntersectionObserver
                // let options = {
                //     rootMargin: '10px',
                //     threshold: 0.5
                // }

                // let observer = new IntersectionObserver((entries) => {
                //     entries.forEach(entry => {
                //         console.log(entry.target)
                //         const progSpan = entry.target.querySelector('.skill-progress span')
                //         progSpan.style.width  = progSpan.dataset.progress
                //     })
                // }, options);
                // target.querySelectorAll('.skill-box').forEach(el=>{
                //     observer.observe(el)
                // })
/**
 * second approach
 * in this approach the event is fired when a single skill-box div is visible in the viewport
 */
const target = document.querySelectorAll('.skill-box')
const observer = new IntersectionObserver(entries =>{
    //  console.log(entries)
    entries.forEach(entry=>{
        const progSpan = entry.target.querySelector('.skill-progress span')
        progSpan.style.width  = progSpan.dataset.progress
    })
})
// console.log(target)
target.forEach(t=>{
    // console.log(t)
    observer.observe(t)
})