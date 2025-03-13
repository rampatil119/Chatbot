
const registeration=document.getElementById('registeration')

registeration.addEventListener('submit',(e)=>{
 e.preventDefault();

let isvalid=true;

//Name valisdation

const name=document.getElementById('name');
if (name.value.trim()==='') {
    nameError.textContent='Name is required';
    nameError.style.display='block';
    isValid=false;
    
}else{
    nameError.style.display='none'
}

const email=document.getElementById('email')
const emailError=document.getElementById('emailError')
const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(email.value)) {
    emailError.textContent='plz requird valid email';
    emailError.style.display='block';
    isvalid=false;
    
}else{
    emailError.style.display='none';
}


const password=document.getElementById('password')
const passwordError=document.getElementById('passwordError')
if (password.value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters';
    passwordError.style.display = 'block';
    isvalid = false;
} else {
    passwordError.style.display = 'none';
}


    if (isvalid) {
        window.open('./','_self')
        const userData ={
            name:name.value,
            email:email.value,
            password:password.value,

        };
        localStorage.setItem('userData',JSON.stringify(userData))

        alert('registeration sucessfuly');
    }else{
        alert("plz fix the error in the form")
    }
})

document.addEventListener('DOMContentLoaded',()=>{
    const storeUserData = localStorage.getItem('userData')

    if (storeUserData) {
        const userData =JSON.parse(storeUserData);
        console.log(userData);
        document.getElementById('name').value= userData.name
        document.getElementById('email').value= userData.email
        document.getElementById('password').value= userData.password
  

    }else{
        console.log('no user data found in local storage');
    }

})