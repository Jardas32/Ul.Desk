const storege = JSON.parse(localStorage.getItem(`card`)) || [];
const cart = document.querySelector(`.cart`);
const spanprice = document.querySelector(`.spanprice`);
const counts = document.querySelector('.counts');
const textcart = document.querySelector('.textcart');
const container = document.querySelector('.container');
const imgcarts = document.querySelector('.imgcarts');

counts.innerHTML = storege.length;

if (storege.length > 0) {
    document.querySelector(`.div-total`).style.display = `flex`;
    textcart.innerHTML = `Your cart`;
}

if (storege.length <= 0) {
    imgcarts.style.display = `block`;
}

function quantityPrice() {
    let totalprice = storege.reduce((prev, item) => {

        return prev + item.pricenumb * item.quantity;

    },0);

    spanprice.innerHTML = `${totalprice} $`;
}

function renderCard() {
    cart.innerHTML = ``;
    if (storege) {
        storege.forEach((el, index) => {
            const { id, imges, title, pricenumb, quantity = 1 } = el;
            let newCard = document.createElement('div');
            newCard.setAttribute(`class`, `newcard`);
            newCard.innerHTML = `
                <div class="newcard" id="${id}"> 
                    <img class="imgcart" src="${imges}" alt="">
                    <p class="titlecart">${title}</p>
                    <span class="pricecart">${pricenumb * quantity}$</span>
                    <div class="counters">
                        <button class="btcount btMinus" data-index="${index}">-</button>
                        <span class="spanCounts">${quantity}</span>
                        <button class="btcount btPlus" data-index="${index}">+</button>
                    </div>
                    <button data-index="${index}" class="btcart">X</button>
                </div>
            `
            cart.append(newCard);
        });
    }
    quantityPrice();
}

cart.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    
    if(e.target.classList.contains('btPlus')) {
      storege[index].quantity = (storege[index].quantity) + 1 ;
    }
    else if(e.target.classList.contains('btMinus')) {
       
        storege[index].quantity -= 1 
        if(storege[index].quantity <= 0) {
            storege.splice(storege, 1)
            location.reload();
        }
    }
   localStorage.setItem('card', JSON.stringify(storege));
   renderCard();
});

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

