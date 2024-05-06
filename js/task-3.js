class Storage {
    constructor(initialItems) {
        this.items = initialItems || [];
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-3-button-1').addEventListener('click', function () {

        console.table(items);
    });
    document.getElementById('task-3-button-2').addEventListener('click', function () {
        storage.addItem('Дроїд');
        console.table(storage.items);
    });
    document.getElementById('task-3-button-3').addEventListener('click', function () {
        storage.removeItem('Пролонгер');
        console.table(storage.items);
    });
});