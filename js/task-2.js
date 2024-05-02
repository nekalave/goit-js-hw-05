document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-2-button-1').addEventListener('click', function () {
        const countProps = function (obj) {
            const arr = Object.keys(obj);
            alert(arr.length);
        };
        countProps({})
    });
    document.getElementById('task-2-button-2').addEventListener('click', function () {
        const countProps = function (obj) {
            const arr = Object.keys(obj);
            alert(arr.length);
        };
        countProps({ name: 'Mango', age: 2 });
    });
    document.getElementById('task-2-button-3').addEventListener('click', function () {
        const countProps = function (obj) {
            const arr = Object.keys(obj);
            alert(arr.length);
        };
        countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });
    });
});