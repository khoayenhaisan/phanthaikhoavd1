let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartList.innerHTML += `<li>${item.name} - ${item.price.toLocaleString()} đ <button onclick="removeFromCart(${index})">Xóa</button></li>`;
    });

    document.getElementById("total").innerText = total.toLocaleString() + " đ";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
