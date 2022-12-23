//show & hide buy tickets modal
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');

function showBuyTickets() {
    modal.classList.add('open');
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

function closeBuyTickets() {
    modal.classList.remove('open');
}
modalClose.addEventListener('click', closeBuyTickets);
modal.addEventListener('click', closeBuyTickets);

const modalContainer = document.querySelector('.js-modal-container');

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

//open & close phone's nav table
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
var currentHeaderHeight = header.clientHeight;

mobileMenu.onclick = function () {
    var isClose = header.clientHeight === currentHeaderHeight;
    if(isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
//auto close phone's nav table
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu){
            header.style.height = null;
        } else {
            event.preventDefault();
        }
    }
}