document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-1-button-1').addEventListener('click', function () {
        function Account({login, email}) {
            this.login = login;
            this.email = email;
        }
        Account.prototype.getInfo = function () {
            return console.log(`Login: ${this.login}, Email: ${this.email}`);
        }

        const mango = new Account({
            login: 'Mangozedog',
            email: 'mango@dog.woof',
        });


        const poly = new Account({
            login: 'Poly',
            email: 'poly@mail.com',
        });
        console.log(Account.prototype.getInfo);
        mango.getInfo();
        poly.getInfo();
    });
});