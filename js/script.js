const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => showCatagories(data.data.news_category))
}
const showCatagories = (data) =>{
    const container = document.getElementById('container');
    //step-1 : Add element to the container.
    data.forEach(element => {
        container.innerHTML += ` <a class="nav-link" onclick="fetchCatagoriesNews('${element.category_id}')" href="#">${element.category_name}</a>`
    });
}


//fetch all newses
const fetchCatagoriesNews = (id) =>{
    const URL = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayCatagoriesNews(data.data))
    console.log(URL);
}
const displayCatagoriesNews = (data) => {
    console.log(data);
}