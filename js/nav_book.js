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

BookManager.prototype.init = function () {
  this.tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const setName = tab.dataset.set;
      this.update(setName);
    });
  });
};

// 실행
const tabs = document.querySelectorAll("nav li");
const books = document.querySelectorAll(".book");

const data = {
  set1: [
    { img: "./img/bestseller/img10.png", title: "A Doctor in the House" },
    { img: "./img/bestseller/img11.png" , title: "Design of the 20th Century"},
    {img: "./img/bestseller/img12.png" , title:"New Galaxy"}
  ],
  set2: [
    { img: "./img/bestseller/img01.png", title: "New Galaxy" },
    { img: "./img/bestseller/img02.png", title: "Life in the Garden" },
    {img:"./img/bestseller/img03.png" , title: 'The HouseMaid'}
  ],
  set3:[{img:'./img/bestseller/img04.png',title:'뭐라도 되겠죠'},
  {img:"./img/bestseller/img05.png", title: '나를 위로하는 날'},
  {img:'./img/bestseller/img06.png' , title:'빙과'}

  ]
};



const manager = new BookManager(tabs, books, data);
console.log(manager)
manager.init();