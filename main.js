const webSearchBtn = document.querySelector('.desktop-search-btn');
const mobSearchBtn = document.querySelector('.mobile-search-btn');
const webSearchForm = document.querySelector('.desktop-search-form');
const mobSearchForm = document.querySelector('.mobile-search-form');
const closeSearch = document.querySelector('.close-search');
const pcBtn = document.querySelector('.pc-btn');
const submenu = document.querySelector('.submenu');
const mobMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobMenu = document.querySelector('.mobile-menu');
const closeMobMenu = document.querySelector('.close-mob-menu');
const header = document.querySelector('header');


webSearchBtn.addEventListener('click', () => {
    webSearchForm.classList.add('show')
});

mobSearchBtn.addEventListener('click', () => {
    mobSearchForm.classList.toggle('show')
});

closeSearch.addEventListener('click', () => {
    webSearchForm.classList.remove('show')
});

pcBtn.addEventListener('click', () => {
    submenu.classList.toggle('show')
})

mobMenuToggle.addEventListener('click', () => {
    mobMenu.classList.add('show')
})

closeMobMenu.addEventListener('click', () => {
    mobMenu.classList.remove('show')
})

window.addEventListener('scroll', e => {
    if(window.scrollY > 60){
        header.classList.add('scrolling');
    }
    else{
        header.classList.remove('scrolling');
    }
});

document.addEventListener("click", (evt) => {
    const flyoutEl = document.getElementById("desktop-submenu");
    let targetEl = evt.target;   
    do {
        if(targetEl == flyoutEl) {
        console.log("Clicked inside!");
        return;
        }
        
        targetEl = targetEl.parentNode;
    } while (targetEl);

    submenu.classList.remove('show')

    console.log("Clicked outside!");
});

document.addEventListener("click", (evt) => {
    const flyoutEl = document.getElementById("mobile-search-area");
    let targetEl = evt.target;   
    do {
        if(targetEl == flyoutEl) {
        console.log("Clicked inside!");
        return;
        }
        
        targetEl = targetEl.parentNode;
    } while (targetEl);

    
    mobSearchForm.classList.remove('show')

    console.log("Clicked outside!");
});
