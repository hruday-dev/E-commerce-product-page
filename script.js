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
const cartItems = document.getElementById('items');
const cartEmpty = document.getElementById('empty');
const checkoutbtn = document.getElementById('checkout');
const amount = document.getElementById('amount');

cartEmpty.style.display = 'block';
cartItems.style.display = 'none';
checkoutbtn.style.display = 'none';
addCartBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(initialValue === 0){
        cartValue.textContent = '';
    }else {  
        console.log('fun');
        cartValue.textContent = quantity.textContent;
        cartValue.classList.add('cartOrange');
        cartEmpty.style.display = 'none';
        cartItems.style.display = 'flex';
        checkoutbtn.style.display = 'block';
        amount.innerHTML = `$125 x ${initialValue}<strong> $${initialValue*125}</strong>`
    }
})

// delete
const deletebtn = document.getElementById('delete');

deletebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    cartValue.textContent = '';
    cartEmpty.style.display = 'block';
    cartItems.style.display = 'none';
    checkoutbtn.style.display = 'none';
    initialValue = 0;
    quantity.textContent = 0;
})

