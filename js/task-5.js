class Car {
    constructor({speed = 0, price, maxSpeed = 0, isOn = false, distance = 0}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed:${car.speed}, isOn:${car.isOn}, distance:${car.distance}, price:${car.price}`)
    }

    get price() {
        return this._price;
    }

    set price(cost) {
        this._price = cost;
    }

    turnOn() {
        if (this.isOn === false) {
            this.isOn = true;
            alert('Car turnedOn');
        } else alert('Car already turnedOn');
    }

    turnOff() {
        if (this.isOn === true) {
            this.isOn = false;
            this.speed = 0;
            alert('Car turnedOff');
        } else alert('Car already turnedOff')
    }

    accelerate(value) {
        const acceleration = parseInt(value);
        if (value === null) {
            alert('Canceled by user!');
        } else if (value.trim() === '' || isNaN(value) || value <= 0) {
            alert('Please enter a valid number!');
        } else {
            if (this.isOn === false) {
                alert('Turn on the car!');
            } else if (this.speed === 0 && (acceleration + this.speed) <= this.maxSpeed) {
                this.speed = acceleration;
            } else if (acceleration + this.speed <= this.maxSpeed) {
                this.speed += acceleration;
            } else {
                this.speed = this.maxSpeed;
            }
        }
    }

    decelerate(value) {
        const deceleration = parseInt(value);
        if (value === null) {
            alert('Canceled by user!');
        } else if (value.trim() === '' || isNaN(value) || value <= 0) {
            alert('Please enter a valid number!');
        } else {
            if (this.isOn === false) {
                alert('Turn on the car!');
            } else if (this.speed === 0) {
                alert('speed already: 0km/h');
            } else if (this.speed - deceleration <= 0) {
                this.speed = 0;
            } else {
                this.speed = this.speed - deceleration;
            }
        }
    }

    drive(hours) {
        const duration = parseInt(hours);
        if (hours === null) {
            alert('Canceled by user!');

        } else if (hours.trim() === '' || isNaN(hours) || hours <= 0) {
            alert('Please enter a valid number!');
        } else {
            if (this.isOn === false) {
                alert('Turn on the car!');
            } else if (this.speed === 0) {
                alert('Current speed is 0km/h, please accelerate');
            } else if (this.distance === 0) {
                this.distance = this.speed * duration;
            } else this.distance += this.speed * duration;
        }
    }
}

const mustang = new Car({maxSpeed: 200, price: 2000});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task-5-button-1').addEventListener('click', function () {
        Car.getSpecs(mustang);
    });
    document.getElementById('task-5-button-2').addEventListener('click', function () {
        mustang.turnOn();
    });
    document.getElementById('task-5-button-3').addEventListener('click', function () {
        mustang.turnOff();
    });
    document.getElementById('task-5-button-4').addEventListener('click', function () {
        mustang.accelerate(prompt('indicate the speed at which you want to accelerate'));
    });
    document.getElementById('task-5-button-5').addEventListener('click', function () {
        mustang.decelerate(prompt('indicate the speed at which you want to decelerate'));
    });
    document.getElementById('task-5-button-6').addEventListener('click', function () {
        mustang.drive(prompt('indicate the time you would like to travel'));
    });
    document.getElementById('task-5-button-7').addEventListener('click', function () {
        console.log(mustang.price);
    });
    document.getElementById('task-5-button-8').addEventListener('click', function () {
        mustang.price = prompt('Enter a Mustang price');
    });
});