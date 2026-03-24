async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "모의고사",
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#slider .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
            <div class='slider_content'>
                <h3>${data.documents[i].title}</h3>
                <h6>${data.documents[i].authors}</h6>
                <p>${data.documents[i].price}</p>
            </div>
                    `
        });

        // #slider swiper
        var slider_swiper = new Swiper(".sliderSwiper", {
            navigation: {
                nextEl: "#slider .swiper-button-next",
                prevEl: "#slider .swiper-button-prev",
            },
            pagination: {
                el: "#slider .swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    // 데이터가 있을 때만 이미지를 넣도록 예외 처리
                    const imgUrl = data.documents[index] ? data.documents[index].thumbnail : '';
                    return `<img class="${className}" src="${imgUrl}" style="width:40px; height:auto; opacity:0.5;">`;
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();

async function bookData2() {
    const params = new URLSearchParams({
        target: "title",
        query: "공단기",
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#new .swiper-slide");
        console.log(boxElements)

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}</p>
                    <button>click</button>
                    `
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData2();