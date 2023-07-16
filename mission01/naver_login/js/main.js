const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
const email = document.getElementById("userEmail");
const pw = document.getElementById("userPassword");
const loginButton = document.querySelector("button");

let inputEmail = "";
let inputPw = "";
let emailValid = false;
let pwValid = false;

checkEmail = () => {
  inputEmail = email.value;
  emailValid = emailReg(inputEmail);

  if (emailValid || inputEmail === "") {
    email.classList.remove("is--invalid");
  } else {
    email.classList.add("is--invalid");
  }
};

checkPw = () => {
  inputPw = pw.value;
  pwValid = pwReg(inputPw);

  if (pwValid || inputPw === "") {
    pw.classList.remove("is--invalid");
  } else {
    pw.classList.add("is--invalid");
  }
};

checkUser = () => {
  if (inputEmail === user.id && inputPw === user.pw) {
    window.location.href = "welcome.html";
  }

  if (inputEmail !== user.id) {
    alert("아이디(이메일)가 잘못 되었습니다.");
  } else if (inputPw !== user.pw) {
    alert("비밀번호가 잘못 되었습니다.");
  }
  event.preventDefault();

}

checkUserEnter = (event) => {
  if(event.keyCode === 13){
    checkUser()
  }
}

email.addEventListener("input", checkEmail);
pw.addEventListener("input", checkPw);
loginButton.addEventListener("click", checkUser);
loginButton.addEventListener("keypress",checkUserEnter)

// 정규식
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{10,16}$/;
  return re.test(String(text).toLowerCase());
}
