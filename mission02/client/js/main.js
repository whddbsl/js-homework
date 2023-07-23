/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

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


