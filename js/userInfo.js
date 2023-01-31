let $ = document

let container = $.querySelector('.container')
let editForm = $.querySelector('.edit-user-form')
let editBtn = $.querySelector('.userProfile .btns .edit-user')
let backBtn = $.querySelector('.back-to-infos')
let signUpInputElems = $.querySelectorAll('.singup-inputs-container input')
let formTarget
let forms = $.querySelectorAll('form')
let formTitle = $.querySelector('.title h2')
let formDesc = $.querySelector('.title p')
let showPass =  $.querySelectorAll('.show-pass i')
let passTarget

function clearSpace(event){
    event.target.value = event.target.value.trim()
}

signUpInputElems.forEach(function(signUpInputElem){
    signUpInputElem.addEventListener('keyup',clearSpace)
})

signUpInputElems[signUpInputElems.length-1].addEventListener('blur',function(event){
    let emailValue = event.target.value
    let linkRegex = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/g
    if(linkRegex.test(emailValue)){

        event.target.classList.remove('invalid')
        event.target.parentNode.lastElementChild.classList.remove('show-err')
    } else {
        event.target.classList.add('invalid')
        event.target.parentNode.lastElementChild.classList.add('show-err')
    }
})

// show pass
showPass.forEach(function(showPassElem){
    showPassElem.parentNode.addEventListener('click',function(event){
        passTarget = $.querySelector('.'+event.target.dataset.passtarget)
        if(passTarget.type === 'password'){
            passTarget.type = 'text'
            showPassElem.className = 'fa-solid fa-eye-slash'
        } else {
            passTarget.type = 'password'
            showPassElem.className = 'fa-solid fa-eye'
        }
    })
})

editBtn.addEventListener('click',function(){
    container.style.display = 'none'
    editForm.style.display = 'block'
})

backBtn.addEventListener('click',function(){
    container.style.display = 'block'
    editForm.style.display = 'none'
})

