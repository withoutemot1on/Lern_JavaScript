
let password_validate = document.querySelectorAll('#password_validate')
let login_validate = document.querySelectorAll('#login_validate')
let login = document.querySelectorAll('.login')
let password = document.querySelectorAll('.password')
let hide = document.querySelectorAll('.hide')
let button = document.querySelectorAll('.enter')



let regular = {
    login: /^[a-zA-z]{8,}$/,
    password: /^[\S]{11,}$/,
}


function viewLogin(){
        document.getElementById("login_validate").style.display = 'block'

}

function noViewLogin(){
    document.getElementById("login_validate").style.display = 'none'
}

function viewPassword(){
    document.getElementById("password_validate").style.display = 'block'

}

function noViewPassword(){
    document.getElementById("password_validate").style.display = 'none'
}

// onmousedown="viewLogin()"