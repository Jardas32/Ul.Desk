const storege = JSON.parse(localStorage.getItem(`card`)) || [];
const cart = document.querySelector(`.cart`);
const spanprice = document.querySelector(`.spanprice`);
const counts = document.querySelector('.counts');
const textcart = document.querySelector('.textcart');
const container = document.querySelector('.container');
const imgcarts = document.querySelector('.imgcarts');

counts.innerHTML = storege.length;

if(storege.length > 0) {
    document.querySelector(`.div-total`).style.display = `flex`;
    textcart.innerHTML = `Your cart`;
}

if(storege.length <= 0) {
    imgcarts.style.display = `block`;
}

function renderCard() {
    cart.innerHTML = ``;
    if(storege) {
        storege.forEach((el, index)  => {
           const {id, imges, title, pricenumb, btAdd, quantity} = el;
           let newCard = document.createElement('div');

           let totalprice = storege.reduce((prev, item) => {
               return prev + item.pricenumb
           },0);

           spanprice.innerHTML = `${totalprice} $`;

           newCard.setAttribute(`class`, `newcard`);
           newCard.innerHTML = `
           <div class="newcard" id="${id}"> 
           <img class="imgcart" src="${imges}" alt="">
           <p class="titlecart">${title}</p>
            <span class="pricecart">${pricenumb}$</span>
            <button data-index="${index}" class="btcart">X</button>
           `
           cart.append(newCard);
        })
    }
};

renderCard();


            //  Удаление товаров

document.onclick = (event) => {
    const cartPosition = event.target.getAttribute("data-index");
    if(event.target.classList.contains('btcart') && cartPosition !== null) {
        storege.splice(cartPosition, 1);
        localStorage.setItem(`card`, JSON.stringify(storege));
        renderCard();
        location.reload();
    }
}; 

