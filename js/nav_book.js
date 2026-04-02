// 카카오 오픈 api에서책 정보 가져오기
async function fetchBooks(query) {
    const params = new URLSearchParams({
        target: "title",
        query,
        size: 10
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
}

async function bookData() {
    try {
        const queries = [
            { query: "요리", section: "set1" },
            { query: "베스트셀러", section: "set2" },
            { query: "위로", section: "set3" },
            { query: "동물", section: "set4" }
        ];

        const result = {};

        for (const { query, section } of queries) {
            const data = await fetchBooks(query);

            // 배열 초기화
            result[section] = [];

            data.documents.slice(0, 5).forEach(doc => {
                result[section].push({
                    img: doc.thumbnail,
                    title: doc.title
                });
            });
        }
        console.log(result); // 🔥 최종 데이터 확인
        return result;
    } catch (error) {
        console.log('에러발생', error);
    }
}

const bookdata = bookData();

//베스트셀러 메뉴클릭

function BookManager(tabs, books, data) {
    this.tabs = tabs;
    this.books = books;
    this.data = data;
}

BookManager.prototype.update = function (setName) {
    const items = this.data[setName];

    this.books.forEach((book, i) => {
        const imgtag = book.querySelector("img");
        const title = book.querySelector(".title");

        imgtag.src = items[i].img;
        title.textContent = items[i].title;
    });
};

BookManager.prototype.init = async function () {
    this.data = await bookData();

    this.tabs.forEach(tab => {
        tab.addEventListener("click", () => {            
            const setName = tab.dataset.set;
            this.update(setName);
        });
    });

    this.update("set1");
};



// 실행
const tabs = document.querySelectorAll("nav li");
const books = document.querySelectorAll(".book");

// const data = {
//     set1: [
//         { img: "./img/bestseller/img10.png", title: "A Doctor in the House" },
//         { img: "./img/bestseller/img12.png", title: "New Galaxy" },
//         { img: "./img/bestseller/img11.png", title: "Design of the 20th Century" },
//         { img: "./img/bestseller/img16.png", title: "Frankenstein" },
//         { img: "./img/bestseller/img18.png", title: "My Brilliant Life" }
//     ],

//     set2: [
//         { img: "./img/bestseller/img01.png", title: "New Galaxy" },
//         { img: "./img/bestseller/img02.png", title: "Life in the Garden" },
//         { img: "./img/bestseller/img03.png", title: 'The House Maid' },
//         { img: "./img/bestseller/img13.png", title: "Let's new English Start!" },
//         { img: "./img/bestseller/img08.png", title: '초승달 고래의 여행' }
//     ],
//     set3: [{ img: './img/bestseller/img04.png', title: '뭐라도 되겠죠' },
//     { img: "./img/bestseller/img05.png", title: '나를 위로하는 날' },
//     { img: './img/bestseller/img15.png', title: '이처럼 사소한 것들' },
//     { img: './img/bestseller/img19.png', title: '두근두근 내 인생' },
//     { img: './img/bestseller/img14.png', title: '우연은 비켜가지 않는다' }

//     ],
//     set4: [{ img: "./img/bestseller/img07.png", title: '누군가 필요한 오늘' },
//     { img: "./img/bestseller/img08.png", title: '초승달 고래의 여행' },
//     { img: "./img/bestseller/img09.png", title: '고양이와 함께한 순간' },
//     { img: "./img/bestseller/img05.png", title: '나를 위로하는 날' },
//     { img: "./img/bestseller/img06.png", title: '빙과' },
//     ]
// };



const manager = new BookManager(tabs, books, bookdata);
console.log(manager)
manager.init();




// bookData3();

// async function bookData3() {
//     const params = new URLSearchParams({
//         target: "title",
//         query: "소설",
//         size: 1
//     });
//     const url = `https://dapi.kakao.com/v3/search/book?${params}`;

//     try {
//         const response = await fetch(url, {
//             method: 'GET',
//             headers: {
//                 Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);

//         // .box 요소 전체 선택
//         const boxElements = document.querySelectorAll(".book-list");
//         console.log(boxElements)

//         // documents 데이터를 각 box에 대응하여 렌더링
//         boxElements.forEach((box, i) => {
//             const doc = data.documents[i];

//             if (!doc) return; // 데이터가 부족할 경우 생략

//             // 요소 생성 및 추가
//             box.innerHTML = `<img src="${data.documents[i].thumbnail}">
//                     <div class="footer-text">
//                     <h6>${data.documents[i].title}</h6>

//                     <p>${data.documents[i].authors}</p>
                    
//                     </div>
                    
//                     `
//         });

//     } catch (error) {
//         console.log('에러발생', error);
//     }
// }