const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const closeSearch = document.querySelector('.close-search');

searchBtn.addEventListener('click', () => {
    searchForm.style.display = 'block'
});

closeSearch.addEventListener('click', () => {
    searchForm.style.display = 'none'
});

