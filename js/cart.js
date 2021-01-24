import { getCartItems } from "./components/cartFunctions.js";

const cart = getCartItems();

const container = document.querySelector(".cart-container");

if (cart.length === 0) {
    container.innerHTML = "You have nothing in the cart";
}


const priceTotal = document.querySelector(".cart-total");
let total = 0;

cart.forEach(basket => {

    container.innerHTML += `<a href="product-detail.html?id=${basket.id}">    
                                <div class="card">

                                 <div class="card-image">
                                    <img src="${basket.image}"></img>
                                </div>

                                <div class="card-header">
                                    <h2>${basket.title}</h2>
                                </div>

                                <div class="card-body">
                                    <p>Price: €${basket.price}<p>
                                </div>

                                </div>
                            </a>

                            <hr>
                            `;

    const price = parseFloat(basket.price);

    total = total + price;

    priceTotal.innerHTML = `<h2>Total: ${total} kr</h2>`;

})