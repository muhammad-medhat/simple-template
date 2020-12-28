/**
 * Helper functions
 */
function boolParse(val){
    if(typeof(val) != "boolean"){
        return val.toLowerCase() == 'true' ? true : false
    } else {
        return val
    }
    
}
function createElement(txt, type='div', cls=''){
    const element = document.createElement(type)
    element.innerText = txt
    element.className=cls
    return element
}

function showHideItem(itemSelector, val){
    let d = document.querySelector(itemSelector).style.display

    if(boolParse(val)){
        document.querySelector(itemSelector).style.display = 'block'
    }else {
        document.querySelector(itemSelector).style.display = 'none'
    }
    d += ' - ' + document.querySelector(itemSelector).style.display
    //alert(d)
}

function removeCssClass(selector, className){
    /* 
     * removes a css class from all elements in thht selector  
     */
    document.querySelectorAll(selector).forEach(el=>{
        el.classList.remove(className)
    }) 
}
function optionButtonActivate(selector, el){
    removeCssClass(selector, 'active')
    el.classList.add('active')
}

