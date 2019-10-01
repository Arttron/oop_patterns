class Car {
    constructor(manufactured, model) {
        this._model = model;
        this._manufactured = manufactured;
    }

    get model () {
        return this._model;
    }
    get manufactured () {
        return this._manufactured;
    }
}

class CarFactory {
    static makeCar(manufactured, model) {
        return new Car(manufactured, model)
    }
}

module.exports = {
    title: "Simple Factory",
    description: "В объектно-ориентированном программировании (ООП), фабрика — это объект для создания других объектов. Формально фабрика — это функция или метод, который возвращает объекты изменяющегося прототипа или класса из некоторого вызова метода, который считается «новым».",
    classes: {
        Car
    },
    demonstration() {
        return new Promise( resolve => {
            const car = CarFactory.makeCar("Ford", "Focus");
            resolve(`${car.manufactured} ${car.model}`)
        });
        
    }
}