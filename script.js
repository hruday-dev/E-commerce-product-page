const previous = document.getElementById('previous');
const next = document.getElementById('next');
const mainimg = document.getElementById('main-img');

let imgLength = 4
let counter = 1
next.addEventListener('click',(e)=>{
    e.preventDefault();
    counter += 1;
    if(counter == 5){
        counter =1;
    }
    mainimg.style.backgroundImage= `url('./images/image-product-${counter}.jpg')`;

})
previous.addEventListener('click',(e)=>{
    e.preventDefault();
    counter -= 1;
    if(counter == 0){
        counter =4;
    }
    mainimg.style.backgroundImage= `url('./images/image-product-${counter}.jpg')`;

})