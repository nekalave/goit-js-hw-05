document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-4-button-1').addEventListener('click', function() {
        const countTotalSalary = function (employees) {
            const values = Object.values(employees);
            let total = 0;
            for (const value of values) {
                total += value;
            }
            alert(total)
        };
        countTotalSalary({});
    });
    document.getElementById('task-4-button-2').addEventListener('click', function() {
            const countTotalSalary = function (employees) {
                const values = Object.values(employees);
                let total = 0;
                for (const value of values) {
                    total += value;
                }
                alert(total)
        };
            countTotalSalary({
                mango: 100,
                poly: 150,
                alfred: 80,
            });
    });
    document.getElementById('task-4-button-3').addEventListener('click', function() {
            const countTotalSalary = function (employees) {
                const values = Object.values(employees);
                let total = 0;
                for (const value of values) {
                    total += value;
                }
                alert(total)
        };
            countTotalSalary({
                kiwi: 200,
                lux: 50,
                chelsy: 150,
            });
    });
});