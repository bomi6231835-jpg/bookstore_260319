const tabMenu = document.querySelectorAll('.tab_menu li');
const tabContent = document.querySelectorAll('.tabcontent');

tabMenu.forEach((tm, i) => {
  tm.addEventListener('click', () => {
    // 모든 탭 메뉴에서 'active' 클래스 제거
    tabMenu.forEach(item => {
      item.classList.remove('active');
    });

    // 클릭한 탭 메뉴에만 'active' 클래스 추가
    tm.classList.add('active');

    // 탭에 해당하는 리스트 보이고, 나머지는 숨기기
    tabContent.forEach((tc, j) => {
      tc.style.display = (i === j) ? 'flex' : 'none';
    });
  });
});

// 더보기
const section = document.querySelector('.section2');

const btns = document.querySelectorAll('.tabcontent button');
console.log(btns)
btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    let tmpBox = e.target.previousElementSibling
    if (btn.textContent === '펼치기') {
      section.style.height = '1530px';
      tmpBox.style.height = '1530px';
      btn.innerText = '접기';
    } else {
      section.style.height = '550px';
      tmpBox.style.height = '500px';
      btn.innerText = '펼치기';
    }
  });
});
