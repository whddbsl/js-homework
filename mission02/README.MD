# JavaScript Mission02
---
# Elemental Poster
---
### 요구 사항
1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리
---
## 결과물

![화면 기록 2023-07-23 오후 3 53 48](https://github.com/whddbsl/euid-lion-17/assets/130979302/19eced0a-d00d-4dcd-92dc-c47b4768576f)

---
## 유틸함수
**getNode 함수**
```js
function getNode(node){
  
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.')
  }
  
  return document.querySelector(node);
}


function getNodes(node){

  if(typeof node !== 'string'){
    throw new Error('getNodes 함수의 인수는 문자 타입 이어야 합니다.')
  }

  return document.querySelectorAll(node);
}
```
**attr 함수**
```js
function getAttr(node, prop) {

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
```
**addClass, removeClass 함수**
```js
function addClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.add(className);
}

function removeClass(node,className){
  
  if(typeof node === 'string') node = getNode(node);
  if(!className) {
    node.className = '';
    return;
  }
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.remove(className);

}


const toggleClass = (node,className)=>{
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  return node.classList.toggle(className);
}
```

## Main.js
```js
function changeNickname(index) {
  const nickName = getNode(".nickName");
  nickName.textContent = data[index - 1].name;
}

function changeImage(index) {
  const visualImage = getNode(".visual img");
  attr(
    visualImage,
    "src",
    `./assets/${data[index - 1].name.toLowerCase()}.jpeg`
  );
  attr(visualImage, "alt", data[index - 1].alt);
}

function changeBGC(index) {
  const body = getNode("body");
  const colorA = data[index - 1].color[0];
  const colorB = data[index - 1].color[1];
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function createAudio(index) {
  const audioSource = `assets/audio/${data[index - 1].name.toLowerCase()}.m4a`;
  const audio = new AudioPlayer(audioSource);
  audio.play();
}

function handlePoster(e) {
  const target = e.target.closest("li");

  if (!target) return;

  const li = getNodes("li");
  const index = attr(target, "data-index");
  li.forEach((li) => removeClass(li, "is-active"));

  addClass(target, "is-active");

  changeImage(index);
  changeNickname(index);
  changeBGC(index);
  createAudio(index);
}

(function setEvent() {
  const nav = getNode(".nav");
  nav.addEventListener("click", handlePoster);
})();
```
* 포스터 제목을 바꿔주는 함수
* 포스터 이미지를 바꿔주는 함수
* 배경을 바꿔주는 함수
* 오디오를 바꿔주는 함수
  
4개의 함수를 만들어 handlePoster 함수에서 모두 실행시켜주었습니다.

그 후 즉시실행 함수를 이용하여 함수를 실행시켜주었습니다.