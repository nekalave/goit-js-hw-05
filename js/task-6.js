const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-6-button-1').addEventListener('click', function () {
        const calculateTotalPrice = function (allProducts, productName) {
            let totalPrice;

            for (const product of allProducts) {
                if (product.name === productName) {
                    totalPrice = product.price * product.quantity;
                }
            }
            return totalPrice
        };
        alert(calculateTotalPrice(products, 'Радар'));
    });
    document.getElementById('task-6-button-2').addEventListener('click', function () {
        const calculateTotalPrice = function (allProducts, productName) {
            let totalPrice;

            for (const product of allProducts) {
                if (product.name === productName) {
                    totalPrice = product.price * product.quantity;
                }
            }
            return totalPrice
        };
        alert(calculateTotalPrice(products, 'Дроїд'));
    });
});