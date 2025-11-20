const previous = document.getElementById('previous');
const next = document.getElementById('next');
const mainimg = document.getElementById('main-img');

// dynamic image changing
let imgLength = 4
let counter = 1
next.addEventListener('click',(e)=>{
    e.preventDefault();
    counter += 1;
    if(counter == 5) counter =1;
    mainimg.style.backgroundImage= `url('./images/image-product-${counter}.jpg')`;

})
previous.addEventListener('click',(e)=>{
    e.preventDefault();
    counter -= 1;
    if(counter == 0) counter =4;
    mainimg.style.backgroundImage= `url('./images/image-product-${counter}.jpg')`;

})

// mobile layout slide nav
const navMenubtn = document.getElementById('nav-menu');
const mobilenavBar = document.getElementById('mobileBar');
navMenubtn.addEventListener('click',()=>{
    mobilenavBar.style.display = 'block';
    document.body.style.overflow= 'hidden';
    mobilenavBar.addEventListener('click',()=>{
        mobilenavBar.style.display = 'none';
    })
})

// open cart
const cartButton = document.getElementById('cartBtn');
const cart = document.querySelector('.cartItems');

cartButton.addEventListener('click',()=>{
      if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
})

// Product Quantity
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
let quantity = minus.nextElementSibling;

let initialValue = 0
plus.addEventListener('click',()=>{
    initialValue += 1;
    quantity.textContent = initialValue;
})
minus.addEventListener('click',()=>{
    initialValue -= 1;
    if(initialValue === -1) initialValue= 0;
    quantity.textContent = initialValue;
})

//  add to cart 

const addCartBtn = document.getElementById('addcart');
const cartValue = cartButton.nextElementSibling;
const cartItems = cartValue.nextElementSibling;

addCartBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    if(quantity.textContent === 0 || cartValue.textContent === ""){
        cartValue.textContent = '';
        cartItems.style.display = 'none';

    }else {
        cartValue.textContent = quantity.textContent;
        cartValue.classList.add('cartOrange');
    }
})
