//Event listener for keydown

//Elementet vi vill använda för eventlyssnaren
let htmlElement = document.querySelector('html');

//Lägger vi till eventlyssnaren
htmlElement.addEventListener('keydown',
    function(event){
        console.log(event.key);

        //elementet vi vill ändra bakgrundsfärg på
        let art1 = document.querySelector('.art-1');

        if(event.key == 'b' || event.key == 'B'){
            art1.style.backgroundColor = 'blue';
        } else if( event.key == 'r' || event.key == 'R'){
            art1.style.backgroundColor = 'red';
        } else if(event.key === 'Alt'){
            art1.style.backgroundColor = 'hotpink';
        } else if(event.key === 'i' || event.key === 'I'){
            //Ändra bild 
            //första img elementet
            let img = this.querySelector('.art-1 img');
            img.src = 'img/hoodie-fire.png';
            console.log(img);
        }

    }
);

/* //mouse click

//Elementet vi vill använda 
let button = document.querySelector('button');

//vi sätter en eventlyssnare på elementet av typen 'click'.
//Alltså, vi lyssnar efter ett click.
button.addEventListener('click',
    //Den här funktionen körs varje gång vi har ett klick på vårat ellement
    function(event){
        console.log('Klick på första knappen');
    }
);
*/

/* //Mouse move 
let secondProduct = document.querySelector('.art-2');
//console.dir(secondProduct);

secondProduct.addEventListener('mousemove',
    function(event){
        let hue = ( (event.x) / 3 ) + 100;
        let saturation = event.y/5;

        secondProduct.style.backgroundColor = `hsl( ${hue}, ${saturation}%, 70%)`;
        // console.log(event.x, hue);
        //console.log(event.y, saturation);
        //console.log(event.x, event.y);
    }
); */


/* //mouse event -> enter and leave 
//Elementet vi vill använda 
let btn = document.querySelector('button');
let firstProduct = document.querySelector('.art-1');

btn.addEventListener('mouseenter',
    function(event){
        event.target.classList.add('bg-blue');
        //btn.classList.add('bg-blue');
        //console.log(event.target);
        //event.target = elementet som eventet hände på
    }
);

btn.addEventListener('mouseleave',
    function(event){
        event.target.classList.remove('bg-blue');
    }
); */



// console.dir(firstProduct);