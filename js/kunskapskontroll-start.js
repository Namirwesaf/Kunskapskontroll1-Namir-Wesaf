// Hämta alla bilder från filen.
let images = document.querySelectorAll('figure img');
let imagesOrig = Array.from(images);
imageSwapper(images);
console.log(imagesOrig)



//återställsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


//Sätt en event listener på reset-knappen
reset.addEventListener('click', resetAll);

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click', 
    function(event){
        changeArt1toHotPink();
        changeH2inArt2();
    }
);
//sätt event listener för andra knappen
let knapp2 = btns[1];
knapp2.addEventListener('click', 
    function(event){
        changeBackgroundInArt2();
        changeButtonColor2();
        changeButton2Text();
    }
);


//sätt event listener för cart iconen, tar bort den onclick.
let shoppingCart = document.querySelector('#header-navigation img')
removeElementOnClick(shoppingCart);

//sätter event listener för contact naven.
let contactBtn = document.querySelectorAll('#header-navigation a')[2];
contactBtn.addEventListener('click', 
    function(event){
      createContactList();
    }
);



function resetAll(){
    //reset art1 till white background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    //reset radikalt till Sinus Hoodie
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';

    //resetar hoodies till original färgen
    images[0].src = './img/hoodie-ash.png'; 
    images[1].src = './img/hoodie-fire.png';
    images[2].src = './img/hoodie-ocean.png';    
    
    //reset bakgrundsbilden till original
    let art2 = document.querySelector('.art-2')
    art2.style.backgroundColor ='white';

    //resetar färgen på knappen
    knapp2.style.backgroundColor = '#222';

    //resetar knapptexten till original
    knapp2.innerHTML = 'buy';

    //lägger tillbaks shoppingcart iconen  
    let headerNavImg = document.querySelector('#header-navigation img')
       if (headerNavImg == null) {
        let newShoppingCart = document.createElement('img');
        newShoppingCart.src = 'img/icon-bag.svg';
        newShoppingCart.alt = 'cart';
        removeElementOnClick(newShoppingCart);

        //lägger tillbaks shoppingcart i navigation igen.
        let headerNav = document.querySelector('#header-navigation')
        headerNav.appendChild(newShoppingCart);
        }

    //plockar bort listan 
    let contactList = document.querySelector('#contact-list')
    contactList.remove();
    
}


function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

//ändrar art-1 bakgrundsfärg till hot pink
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}

// Swappar alla hoodies till grön
function imageSwapper(images){
    for(let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', 
        function(event) {
            images[i].src = './img/hoodie-forrest.png';            
        })
    }      
}

//Byter ut bakgrundsfärg 
function changeBackgroundInArt2() {
    let art2 = document.querySelector('.art-2');
    art2.style.backgroundColor = 'dodgerblue';
}
//byter ut färg på knappen
function changeButtonColor2(){
    knapp2.style.backgroundColor = 'red';
}
//byter ut texten på ett element
function changeButton2Text(){
    knapp2.innerHTML = 'Refund';

}

//tar bort elements onclick
function removeElementOnClick(ele) {
    ele.addEventListener('click',
    function (event){
        this.remove();
    })
}

//lägger till kontaktlista
function createContactList(){
    let tmpList = document.querySelector('#contact-list');


    if (tmpList == null){

        let contactList = document.createElement('ul');
        contactList.id = 'contact-list';

        let listItem1 = document.createElement('li');
        listItem1.style.border = '1px solid'
        listItem1.innerHTML = 'Namir Wesaf'
        let listItem2 = document.createElement('li');
        listItem2.style.border = '1px solid'
        listItem2.innerHTML = '0739822190'
        let listItem3 = document.createElement('li');
        listItem3.style.border = '1px solid' 
        listItem3.innerHTML = 'Namn.efternamn@gmail.com'

        contactList.appendChild(listItem1);
        contactList.appendChild(listItem2);
        contactList.appendChild(listItem3);


        let main = document.querySelector('main');
        main.appendChild(contactList);
    }

}