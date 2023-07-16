# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

1. 정규 표현식을 이용해 이메일(아이디)와 비밀번호의 유효성 검사를 실시했습니다.
2. input에 입력된 값의 유효성 검사 통과 여부를 확인합니다.
   2-1. 유효성 검사를 통과 못했을 경우 경고 메세지를 출력합니다.
   2-2. 유효성 검사를 통과했을 경우 경고 메세지를 제거합니다.
   2-3. 빈 값일 경우 경고 메세지를 제거합니다.

<img width="552" alt="스크린샷 2023-07-16 오후 8 55 24" src="https://github.com/whddbsl/Algorithm-js/assets/130979302/69804d37-1726-4c2c-8f6d-6fb78920163c">

3. 로그인 성공 시 다음 페이지로 이동합니다.
<img width="504" alt="스크린샷 2023-07-16 오후 8 56 36" src="https://github.com/whddbsl/Algorithm-js/assets/130979302/0cea4361-f4b7-44fd-9eb7-a78c838e1cbb">

4. 유효성 검사는 통과했지만 이메일(아이디)와 비밀번호가 일치하지 않을 경우 경고창을 출력합니다.
<img width="446" alt="스크린샷 2023-07-16 오후 8 57 40" src="https://github.com/whddbsl/Algorithm-js/assets/130979302/3438fee8-d3aa-412b-8e6f-7ff880f99c69">
<img width="444" alt="스크린샷 2023-07-16 오후 8 57 59" src="https://github.com/whddbsl/Algorithm-js/assets/130979302/e36a8358-678c-4eb1-a8ff-474186e37033">

5. ```js
   checkUserEnter = (event) => {
     if (event.keyCode === 13) {
       checkUser();
     }
   };
   ```
   5-1. 버튼 클릭이 아닌 엔터키 입력 시 로그인이 가능하게 하였습니다.

---




