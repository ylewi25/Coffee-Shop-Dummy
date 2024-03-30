// SEARH BOX
let searchBtn = document.getElementById('searchbtn');
let searchBox = document.querySelector('.search-box');

searchBtn.onclick = function() {
    searchBox.classList.toggle('open');
    sideBar.classList.remove('open');
    cartBar.classList.remove('open');
}

window.onscroll = () => {
    searchBox.classList.remove('open');
}

// MENU BUTTON ---
let menuBtn = document.getElementById('menubtn');
let sideBar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    searchBox.classList.remove('open');
    cartBar.classList.remove('open');
})

// CART BAR
let cartBtn = document.getElementById('cartbtn');
let cartBar = document.querySelector('.cartbar');

cartBtn.addEventListener('click', () => {
    cartBar.classList.toggle('open');
    searchBox.classList.remove('open');
    sideBar.classList.remove('open');
})

document.addEventListener('click', e => {
    if (!cartBar.contains(e.target) && e.target !== cartBtn) {
        cartBar.classList.remove('open');
    }
})

// SIDE BAR BUTTON
let menuLinks = document.querySelectorAll('.sidebar .menu__list a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove('open');
    })
})