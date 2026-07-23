function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(item, price) {

    let cart = getCart();

    let existingItem = cart.find(product => product.item === item);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            item: item,
            price: price,
            quantity: 1
        });
    }

    saveCart(cart);

    alert(item + " added to cart");
}

function increaseQty(index) {
    let cart = getCart();

    cart[index].quantity++;

    saveCart(cart);

    location.reload();
}

function decreaseQty(index) {
    let cart = getCart();

    cart[index].quantity--;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart(cart);

    location.reload();
}

function removeItem(index) {
    let cart = getCart();

    cart.splice(index, 1);

    saveCart(cart);

    location.reload();
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}