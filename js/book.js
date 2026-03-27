

// 서브 페이지에 책 정보 가져오기
async function bookData() {
    const params = new URLSearchParams({
        target: "최강록의 요리노트",
        query: "최강록의 요리노트",
        size: 1
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK b471364ab9fd1371478ed9d942f26693"
            }
        });


        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)

        // 요소 선택
        const subBox = document.querySelector(".sub_box");
        const sub_title = document.querySelector(".title h2");
        const sub_contents = document.querySelector(".contents h3");
       
        const sub_price = document.querySelector(".price");
        const book_content = document.querySelector(".book_content");






        // 데이터에서 필요한 값 추출
        const book = data.documents[0];
        const { thumbnail, title, authors, contents,price, publisher, page_number, size, year_new } = book;

        // 요소 생성 및 추가
        subBox.innerHTML =
            `<img src="${thumbnail}">`
        sub_title.innerText += title;
        sub_contents.innerHTML += contents;
        sub_price.innerText += price + '원';
        



        content.innerHTML = `
        <table> 
                    <tr>
                        <td>Author</td>
                        <td class="authors">${authors}</td>
                    </tr>

                    <tr>
                        <td>Publisher</td>
                        <td class="publisher">${publisher}</td>
                    </tr>
                    <tr>
                        <td>Number of pages</td>
                        <td class="page_number"></td>
                    </tr>
                    
                    <tr>
                        <td>Year of Publishing</td>
                        <td class="year_new"></td>
                    </tr>

                    <tr>
               

                <td>수량</td>
                <td>
                    <select name="select" id="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </td>
                </tr>

            </table>`


    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();



//메모장으로 sub 텍스트 가져오기
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./sub_txt/book_txt1.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        console.log(data)
        document.getElementsByClassName("tabcontent")[0].innerHTML = data;

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});


const contextBox = document.querySelector(".contextbox");