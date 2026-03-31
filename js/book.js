

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
        const sub_contents = document.querySelector(".contents ");


        const book_content = document.querySelector(".book_content");






        // 데이터에서 필요한 값 추출
        const book = data.documents[0];
        const { title, authors, price, contents, publisher, status } = book;

        // 요소 생성 및 추가
        subBox.innerHTML =
            // `<img src="${thumbnail}">`
            `<img src="./img/chef_cooker_book.jpg">`
        sub_title.innerText += title;
        sub_contents.innerHTML += contents;
        book_content.innerText += price + '   권 당';


        book_content.innerHTML = `
        <table> 
                    <tr>
                        <td>글</td>
                        <td class="authors">${authors}</td>
                    </tr>

                    <tr>
                        <td>가격</td>
                        <td class="price">
                        ${price} / 권 당</td>
                    </tr>

                    <tr>
                        <td>발행자</td>
                        <td class="publisher">출판사
                        ${publisher}</td>
                    </tr>
                    <tr>
                        <td>상태</td>
                        <td class="tag">${status}</td>
                    </tr>  
                                                     
                    <tr>
                        <td>구성</td>
                        <td>Online Book, Paper Book</td>
                    </tr>

                    <tr>
                        <td colspan="2" class="type_btns">
                            <div class="item">
                            <button class="icon_btn">
                            <img src="img/tablet_icon.png">
                            </button>
                            <span class="text">	Online Book</span>
                        </div> 
                        
                            <div class="item">
                            <button class="icon_btn">
                            <img src="img/book_icon.png">
                            </button>
                            <span class="text">Paper Book</span>
                        </div>
                        </td>
                    </tr>

                    <tr class="buy_row">
                        <td colspan="2">
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button class="buy_btn">BUY NOW</button>
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
        const [response1, response2] = await Promise.all([fetch("sub_txt/book_txt1.txt"),
        fetch("sub_txt/book_txt2.txt")]);
        if (!response1.ok || !response2.ok) {
            throw new Error("Network response was not ok");
        }
        const tabBox1 = await response1.text()
        const tabBox2 = await response2.text();
        // console.log(tabBox1,tabBox2)
        document.getElementById("tabBox1").innerHTML = tabBox1;
        document.getElementById("tabBox2").innerHTML = tabBox2;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});
// const tabContent = document.querySelectorAll(".contextbox")
// const btns = document.querySelectorAll('.tabcontent button');


