const id = document.getElementById('_id');
const pw = document.getElementById('_pw');
const loginBtn = document.getElementById('login-btn'); 
const alert1 = document.querySelector('.alert1');
const alert2 = document.querySelector('.alert2');

// loginBtn.addEventListener('click', (e) => {
//   if(id.value == ''){
//     e.preventDefault();
//     alert1.classList.add('alert-id');
//   } else if(pw.value == ''){
//     e.preventDefault();
//     alert1.classList.remove('alert-id');
//     alert2.classList.add('alert-pw');
//   } 
// })


loginBtn.addEventListener('click', (e) => {
  if(id.value == ''){
    e.preventDefault();
    alert('아이디를 입력하세요')
  } else if(pw.value == ''){
    e.preventDefault();
    alert('비밀번호를 입력하세요')
  } 
})