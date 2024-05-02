document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-3-button-1').addEventListener('click', function() {
        const findBestEmployee = function (employees) {
            const values = Object.values(employees);
            const keys = Object.keys(employees);
            let init = 0;
            let bestEmployee;
            for (let i = 0; i < values.length; i += 1) {
                if (init < values[i]) {
                    init = values[i];
                    bestEmployee = i
                }
            }
            alert(keys[bestEmployee])
        };
            findBestEmployee({
                ann: 29,
                david: 35,
                helen: 1,
                lorence: 99,
            })
    });
    document.getElementById('task-3-button-2').addEventListener('click', function() {
        const findBestEmployee = function (employees) {
            const values = Object.values(employees);
            const keys = Object.keys(employees);
            let init = 0;
            let bestEmployee;
            for (let i = 0; i < values.length; i += 1) {
                if (init < values[i]) {
                    init = values[i];
                    bestEmployee = i
                }
            }
            alert(keys[bestEmployee])
        };
        findBestEmployee({
            poly: 12,
            mango: 17,
            ajax: 4,
        })
    });
    document.getElementById('task-3-button-3').addEventListener('click', function() {
        const findBestEmployee = function (employees) {
            const values = Object.values(employees);
            const keys = Object.keys(employees);
            let init = 0;
            let bestEmployee;
            for (let i = 0; i < values.length; i += 1) {
                if (init < values[i]) {
                    init = values[i];
                    bestEmployee = i
                }
            }
            alert(keys[bestEmployee])
        };
        findBestEmployee({
            lux: 147,
            david: 21,
            kiwi: 19,
            chelsy: 38,
        })
    });
});