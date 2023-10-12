const USER_ID = 14;

let response = await fetch(
  "http://24api.ru/rest-news-category/category-by-user-id?id=14"
);
const data = await response.json();
console.log(data);
const categories = document.querySelector(".categories")
function createCategories({ name, id }) {
  let button = document.createElement('button')
  button.innerHTML = `${name}`;
  button.id = `${id}`;
  button.className = "categories__btn";
  return button;
}
function renderCategories () {
data.forEach((element) => {categories.append
  (createCategories(element));
});
}
renderCategories(); // создали категории

let responseNews = await fetch(
  "http://24api.ru/rest-news/news-by-user-id?id=14"
);
const news = await responseNews.json();

const btn = document.querySelectorAll('button')
const screenCover = document.querySelector(".body");
const addNewsWindow = document.querySelector(".add__news__hiden");
const inputAddTitle = document.querySelector(".add__title__input");
const inputAddText = document.querySelector(".add__text__input");
const saveBtn = document.querySelector(".save__button");


function createInfo({ title, body, category_id }) {
  let newsHolder = document.querySelector(".news");
  newsHolder.innerHTML = `<button class="add__news__btn">➕</button>
                      <h2 class="title" id = ${category_id}>${title}</h2>
                   <p class="text" contenteditable="false">${body}</p>
                   `;
  const addNewsBtn = document.querySelector(".add__news__btn");
  
  addNewsBtn.addEventListener("click", () => {
  screenCover.className = "add__news__bg";
  addNewsWindow.className = "add__news__open";
  });

  saveBtn.addEventListener("click", () => {
    newsHolder.innerHTML += `<h2 class="title" id = ${category_id}>${inputAddTitle.value}</h2> 
                              <p class="text">${inputAddText.value}</p>`;
    // let x = {
    //   title: `${inputAddTitle.value}`,
    //   body: `${inputAddText.value}`,
    //   category_id: `${category_id}`,
    // };
    //  news.push(x);                         
    addNewsWindow.className = "add__news__hiden";
    screenCover.classList.remove("add__news__bg");
    console.log(news);
  });

  return newsHolder;
}
let newsContainer = document.querySelector(".news__container");

// 1 решение

// btn[0].addEventListener("click", () => {
//   if (btn[0].id == news[0].category_id) {
//     createInfo(news[0]);
//   }
// });
// btn[1].addEventListener("click", () => {
//   if (btn[1].id == news[1].category_id) {
//     createInfo(news[1]);
//   }
// });
// btn[2].addEventListener("click", () => {
//   if (btn[2].id == news[2].category_id) {
//     createInfo(news[2]);
//   }
//   });
// btn[3].addEventListener("click", () => {
//   if (btn[3].id == news[3].category_id) {
//     createInfo(news[3]);
//   } 
// });

//2 решение

for (let el of btn) {
  el.addEventListener("click", () => {
    for (let i = 0; i < btn.length; i++) {
      if (el.id == news[i].category_id) {
        return createInfo(news[i]);
      }
    } 
  });
}

console.log(addNewsBtn);

