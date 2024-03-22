let press = document.getElementById('btn');
let val = document.getElementById('gmail');
let error = document.getElementById('err');
let second = document.getElementById('second-container');
let box = document.getElementById('wrap');
let user = document.getElementById('em');
press.addEventListener('click',function(e){
    e.preventDefault();
    let email = val.value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        error.innerHTML = 'input box is empty!';
        val.style.borderColor = 'orange';
        error.style.color = 'orange';
    }
    else if (!emailPattern.test(email)) {
        error.innerHTML = 'Please enter a valid email address';
        val.style.borderColor = 'red';
        error.style.color = 'red';
    }
     else {
        error.innerHTML = 'Thank you for signing up!';
        val.style.borderColor = 'green';
        error.style.color = 'green';
        second.style.display = 'flex';
       box.style.display = 'none';
    }
    user.innerHTML = email;
})
second.addEventListener('click',()=>{
    box.style.display = 'flex';
    second.style.display = 'none';
})