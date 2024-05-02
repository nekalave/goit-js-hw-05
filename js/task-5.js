const products = [
    {name: 'Радар', price: 1300, quantity: 4},
    {name: 'Сканер', price: 2700, quantity: 3},
    {name: 'Дроїд', price: 400, quantity: 7},
    {name: 'Захоплення', price: 1200, quantity: 2},
];
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-5-button-1').addEventListener('click', function () {
        const getAllPropValues = function (arr, prop) {
            const arrProducts = [];

            for (const product of arr) {
                if (product[prop] === undefined) {
                    break
                }
                arrProducts.push(product[prop]);
            }
            return arrProducts;
        };
        alert(getAllPropValues(products, 'name'));
    });
    document.getElementById('task-5-button-2').addEventListener('click', function () {
        const getAllPropValues = function (arr, prop) {
            const arrProducts = [];

            for (const product of arr) {
                if (product[prop] === undefined) {
                    break
                }
                arrProducts.push(product[prop]);
            }
            return arrProducts;
        };
        alert(getAllPropValues(products, 'quantity'));
    });
    document.getElementById('task-5-button-3').addEventListener('click', function () {
        const getAllPropValues = function (arr, prop) {
            const arrProducts = [];

            for (const product of arr) {
                if (product[prop] === undefined) {
                    break
                }
                arrProducts.push(product[prop]);
            }
            return arrProducts;
        };
        alert(getAllPropValues(products, 'category'));
    });
});