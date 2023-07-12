
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
const email = document.getElementById('userEmail');
const pw = document.getElementById('userPassword');
const loginButton = document.querySelector('button');

let inputEmail = '';
let inputPw = '';
let emailValid = false;
let pwValid = false;

function getLoginInput(){
  inputEmail = email.value;
  inputPw = pw.value;
}

function checkValid(){
  getLoginInput();

  emailValid = emailReg(inputEmail);
  pwValid = pwReg(inputPw);
  
  if(inputEmail === user.id && inputPw === user.pw){
    window.location.href = 'welcome.html'
  }

  if(!emailValid){
    email.classList.add('is--invalid')
  }else{
    email.classList.remove('is--invalid')
  }

  if(!pwValid){
    pw.classList.add('is--invalid')
  }else{
    pw.classList.remove('is--invalid')
  }
  event.preventDefault()
}

loginButton.addEventListener("click", checkValid)


// 정규식
function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}











