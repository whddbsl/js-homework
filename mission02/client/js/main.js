/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode(".nav");
const visualImage = getNode(".visual img");
const nickName = getNode('.nickName');

nav.addEventListener("click", handleSlider);

function handleSlider(e){
    e.preventDefault();
    
    const target = e.target.closest('li');
    
    if(!target) return;
    
    const li = getNodes('li')
    const index = attr(target,'data-index');
    
    li.forEach(li => removeClass(li,'is-active'));
  
    addClass(target,'is-active')
    
    nickName.textContent = data[index-1].name
    
    attr(visualImage,'src',`./assets/${data[index-1].name.toLowerCase()}.jpeg`)
    attr(visualImage,'alt',data[index -1].alt)

    const colorA = data[index-1].color[0]
    const colorB = data[index-1].color[1]
    console.log(colorA);
    document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
  }
