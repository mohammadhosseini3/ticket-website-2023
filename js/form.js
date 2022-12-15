let $ = document

let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let formTarget
let forms = $.querySelectorAll('form')
let formTitle = $.querySelector('.title h2')
let formDesc = $.querySelector('.title p')


function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

signUpInputElems[4].addEventListener('blur',function(event){
    if(event.target.value !== signUpInputElems[3].value){
        signUpInputElems[3].classList.add('invalid')
        signUpInputElems[4].classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    } else {

        signUpInputElems[3].classList.remove('invalid')
        signUpInputElems[4].classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    }
})
