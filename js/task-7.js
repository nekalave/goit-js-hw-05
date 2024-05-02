const account = {
    balance: 0,
    transactions: [],
};
const createTransaction = function (amount, type) {
    account.transactions.push({id:account.transactions.length + 1, type: type, amount: amount})
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-7-button-1').addEventListener('click', function () {
        let number = prompt('Enter a sum')
        let amount = number !== null ? parseInt(number) : null;
        const deposit = function (amount, number) {
            if (amount !== null && /^\d+$/.test(number)) {
                account.balance += amount;
                createTransaction(amount, 'DEPOSIT');
                alert(`Transaction created: DEPOSIT, AMOUNT:${amount}, ID:${account.transactions.length}`)
            } else if (amount === null) {
                alert('Canceled by user!')
            } else alert('Input error!')
        }
        deposit(amount, number);
    });
    document.getElementById('task-7-button-2').addEventListener('click', function () {
        let number = prompt('Enter a sum')
        let amount = number !== null ? parseInt(number) : null;
        const withdraw = function (amount, number) {
            if (amount !== null && /^\d+$/.test(number)) {
                if (account.balance <= amount) {
                    alert('Insufficient funds!')
                }
                else {
                    account.balance -= amount;
                    createTransaction(amount, 'WITHDRAW');
                    alert(`Transaction created: DEPOSIT, AMOUNT:${amount}, ID:${account.transactions.length}`)
                }
            } else if (amount === null) {
                alert('Canceled by user!')
            } else alert('Input error!')
        }
        withdraw(amount, number);
    });
    document.getElementById('task-7-button-3').addEventListener('click', function () {
        const getBalance = function () {
            alert(`Your balance: ${account.balance}`)
        }
        getBalance();
    });
    document.getElementById('task-7-button-4').addEventListener('click', function () {
        let id = prompt('Enter transaction ID') -1;
        const getTransactionDetails = function (id) {
            /*for (const [key, value] of Object.entries(account.transactions[id])) {
                alert(`${key}: ${value}`);
            }*/
            alert(Object.entries(account.transactions[id]))
        }

        getTransactionDetails(id);
    });
    document.getElementById('task-7-button-5').addEventListener('click', function () {
        let check = prompt('Enter 1 if you want to check total of deposits, or 2 if u want to check total of withdraws')
        const type = function (check) {
            if (check === null) {
                alert('Canceled by user!')
            }
            else if (check === '1') {
                return 'DEPOSIT'
            }
            else if (check === '2') {
                return 'WITHDRAW'
            }
            else alert('Input error!')

        }
        const getTransactionTotal = function (arr, type) {
            let total = 0;
            for (const transaction of arr) {
                if (transaction.type === type)
                    total += transaction.amount
            }
            if (type === 'DEPOSIT') {
                alert(`Your total deposits amount:${total}`)
            }
            if (type === 'WITHDRAW') {
                alert(`Your total withdraw amount:${total}`)
            }
        }
        getTransactionTotal(account.transactions, type(check));
    });

});