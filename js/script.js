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
  const count = document.getElementById("news-count");
  const catName = document.getElementById("category-name");
  count.innerText = data.length;
  catName.innerText = category_name;

  //adding news card to the all news section
  const newsContainer = document.getElementById("all-news");
  newsContainer.innerHTML = "";
  data.forEach((newses) => {
    newsContainer.innerHTML += `
    <div class="card  m-0 my-4">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${newses.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 d-flex flex-column">
      <div class="card-body">
        <h5 class="card-title">${newses.title}</h5>
        <p class="card-text">${newses.details.slice(0, 160)}.....</p>
     </div>
    <div class="card-footer pb-0 mb-0 mt-0 pt-0 border-0 bg-body">
        <div class="d-flex align-items-center gap-2">
        <img class="rounded-circle" src="${
          newses.author.img
        }" class="img-fluid " alt="..." height="40" width="40">
        <div><p class="p-0 m-0">${
          newses.author.name ? newses.author.name : "Not found user"
        }</p>
         <p class="p-0 m-0">${
           newses.author.published_date
             ? newses.author.published_date
             : "Not found time"
         }</p></div>
         <p class-="ps-2"><i class="fa-regular fa-eye"></i> 400</p>
         <div class="ms-auto"><i class="fa-solid fa-arrow-right-long" onclick="showNews('${
           newses._id
         }')" data-toggle="modal" data-target="#exampleModalCenter"></i> </div>
         </div>
      </div>
    </div>
  </div>
</div>
    `;
  });
};

// news showing area
const showNews = (id) => {
  const URL = `https://openapi.programming-hero.com/api/news/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayNewsDetail(data.data[0]));
};

const displayNewsDetail = (data) => {
  const title = document.getElementById("detail-title");
  const detailBody = document.getElementById("details-body");
  title.innerText = data.title;
  detailBody.innerHTML = `
  <img class="img-fluid" src="${data.image_url}" >
  <p>${data.details}</p>
  `;
  console.log(data);
};
