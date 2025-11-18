const cartItems = [];
const totalPriceElement = document.querySelector('.total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const carItem = event.target.closest('.car-item');
        const price = parseInt(carItem.querySelector('.price').textContent);
        
        cartItems.push(price);
        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cartItems.forEach((price, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `Автомобіль ${index + 1}: ${price} грн`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += price;
    });

    totalPriceElement.textContent = `${totalPrice} грн`;
}

document.querySelectorAll('.submit-review').forEach(button => {
    button.addEventListener('click', (event) => {
        const starRating = event.target.previousElementSibling.value;
        alert(`Ваш відгук: ${starRating} зірок!`);
    });
});




function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';
}

function registerUser(event) {
    event.preventDefault();
    const form = event.target;
    const name = form[0].value;
    const password = form[1].value;
    alert(`Вітаємо, ${name}! Ви зареєстровані.`);
    form.reset();
}

function submitSellForm(event) {
    event.preventDefault();
    const form = event.target;
    alert('Авто додано до продажу!');
    form.reset();
}



let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById('total').innerText = total;
}