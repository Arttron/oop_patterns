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
    title: "Factory Method",
    description: "Фабричный метод — порождающий шаблон проектирования, предоставляющий подклассам интерфейс для создания экземпляров некоторого класса. В момент создания наследники могут определить, какой класс создавать. Иными словами, данный шаблон делегирует создание объектов наследникам родительского класса. Это позволяет использовать в коде программы не специфические классы, а манипулировать абстрактными объектами на более высоком уровне.",
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
