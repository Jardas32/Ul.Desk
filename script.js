const cardSet = document.querySelectorAll(`.card1`);
const cardstoreg = JSON.parse(localStorage.getItem(`card`)) || [];
const counts = document.querySelector('.counts');
const inputSerch = document.querySelector('.inputSerch');
const imgserch = document.querySelector('.imgserch');
counts.innerHTML = cardstoreg.length;


imgserch.addEventListener('click', () => {

    let style = getComputedStyle(inputSerch);
    
     if(style.display === `none`) {
        inputSerch.style.display = `block`;
     }else if (style.display !== `none`) {
        inputSerch.style.display = `none`;
     }
});


cardSet.forEach((el) => {
    let id = el.id;
    let imges = el.childNodes[1].childNodes[1].attributes.src.textContent;
    let title = el.childNodes[3].innerHTML;
    let price = el.childNodes[7].innerHTML;
    let btAdd = el.childNodes[9];
    let pricenumb = parseInt(price.replace(/\s/g, ""), 10);
btAdd.addEventListener(`click`, () => {
     const cardstoreg = localStorage.getItem(`card`) || "[]";
     let card = JSON.parse(cardstoreg);

    let cart = {id, imges, title, pricenumb, btAdd, quantity: 1};
const existcard = card.findIndex((item) => item.id === id);
    if(existcard !== -1) {
       alert(`Такой товар уже есть!`)
    }
    else {
       card.push(cart);
    }
    localStorage.setItem(`card`, JSON.stringify(card));
    location.reload();
})
});

                    //   Навигвция по сайту

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const menu = document.querySelector('.menu');
const testimon = document.querySelector('.testimon');

about.addEventListener(`click`, () => {
    document.querySelector('.about-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

menu.addEventListener(`click`, () => {
    document.querySelector('.menu-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

testimon.addEventListener(`click`, () => {
    document.querySelector('.testimon-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

home.addEventListener(`click`, () => {
    document.querySelector('.home-section').scrollIntoView({
        behavior: `smooth`,
        block: `start`
    })
});

                // Go-Up

const goTop = document.querySelector('.goTop');
goTop.addEventListener(`click`, goUp);
window.addEventListener(`scroll`, trackeng);

function trackeng() {
    const coord = window.pageYOffset;
    const offset = document.documentElement.clientHeight;
    if(coord > offset) {
        goTop.classList.add('goTopclass');
    }
    else {
        goTop.classList.remove('goTopclass');
    }
}; 

function goUp() {
    if(window.pageYOffset > 0) {
        scrollBy(0, -77); 
        setTimeout(goUp, 0)  
    }
};

                //  Animation

let Callback = function(entries, observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
      })
};

let observer = new IntersectionObserver(Callback);

let targets = document.querySelectorAll('.anim');

targets.forEach(targ => {
    observer.observe(targ)
}); 


            //    Pop-Up-Card

document.addEventListener('DOMContentLoaded', function() {

const imgpopup = document.querySelector('.imgpopup');
const textpopup = document.querySelector('.titlepopup');
const popprice = document.querySelector('.popprice');
const popupbg = document.querySelector('.popupbg');
const btclospop = document.querySelector('.btclospop');

 document.querySelectorAll('.card1').forEach(el => {
        let openpopup = el.childNodes[1];
        let img = el.childNodes[1].childNodes[1].attributes.src.textContent;
        let title = el.childNodes[3].innerHTML;
        let price = el.childNodes[7].innerHTML;
    
openpopup.addEventListener(`click`, function() {
        imgpopup.src = img;
        textpopup.textContent = title;
        popprice.textContent = price;
        document.querySelector('html').classList.add('no-scroll');
        popupbg.classList.add('popupbgclass');
});

btclospop.addEventListener(`click`, () => {
    popupbg.classList.remove('popupbgclass');
    document.querySelector('html').classList.remove('no-scroll'); 
})
});         
});


