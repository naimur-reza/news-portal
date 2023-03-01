const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => showCatagories(data.data.news_category));
};
const showCatagories = (data) => {
  const container = document.getElementById("container");
  //step-1 : Add element to the container.
  data.forEach((element) => {
    container.innerHTML += ` <a class="nav-link" onclick="fetchCatagoriesNews('${element.category_id}','${element.category_name}')" href="#">${element.category_name}</a>`;
  });
};

//fetch all newses
const fetchCatagoriesNews = (id, category_name) => {
  const URL = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayCatagoriesNews(data.data, category_name));
};
const displayCatagoriesNews = (data, category_name) => {
 const count = document.getElementById('news-count');
 const catName = document.getElementById('category-name')
 count.innerText = data.length;
 catName.innerText = category_name;
};
