class StringBuilder {
    constructor(initialItems) {
        this._value = initialItems;
    }
    get value () {
        return this._value;
    }
    append(str) {
        this._value = this._value.concat(str);
    }
    prepend(str) {
        this._value = str.concat(this._value);
    }
    pad(str) {
        this._value = str.concat(this._value).concat(str);
    }
}
const builder = new StringBuilder('.');
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('task-4-button-1').addEventListener('click', function() {
        builder.append('^');
        console.log(builder.value);
    });
    document.getElementById('task-4-button-2').addEventListener('click', function() {
        builder.prepend('^');
        console.log(builder.value);
    });
    document.getElementById('task-4-button-3').addEventListener('click', function() {
        builder.pad('=');
        console.log(builder.value);
    });
});