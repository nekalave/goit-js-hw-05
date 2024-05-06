class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        return alert(`User ${this.name} is ${this.age} old and has ${this.followers} followers`);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-2-button-1').addEventListener('click', function () {
        const mango = new User({
            name: 'Mango',
            age: 2,
            followers: 20,
        });
        mango.getInfo();
    });
    document.getElementById('task-2-button-2').addEventListener('click', function () {
        const poly = new User({
            name: 'Poly',
            age: 3,
            followers: 17,
        });
        poly.getInfo();
    });
});