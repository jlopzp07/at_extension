const openOrders = document.querySelector(".open-orders");

openOrders.onclick = function () {
    orderActive = document.querySelector(".item-2");
    orderActive.classList.toggle("active");
}