const cardSet = document.querySelectorAll(`.card1`);
const cardstoreg = JSON.parse(localStorage.getItem(`card`)) || [];
const counts = document.querySelector('.counts');

counts.innerHTML = cardstoreg.length;

cardSet.forEach((el) => {
    let id = el.id;
    let imges = el.childNodes[1].attributes.src.textContent;
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
       alert(`Yes`)
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




