const btn = document.querySelector('.submit');

btn.addEventListener('click',(e)=>{
    e.target.style.backgroundColor='blue';
})
btn.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor='green'
})
btn.addEventListener('mouseout',(e)=>{
    e.target.style.backgroundColor='white';
})
const input=document.querySelectorAll('input');
const msg=document.querySelector('.msg');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=input[0].value;
    let email=input[1].value;
    if(name==""|| email==""){
        msg.textContent="Please provide all details";
    }else{
        console.log(`my name is ${name} and email is ${email}`);
    }
})