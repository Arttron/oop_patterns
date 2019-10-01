class CarFactory {
    constructor() {
        console.log("Make car ...")
    }
    getFuel() {}
    makeCar() {}
}

class Diesel {
    constructor() {
        this.fuelType = 'Dieset';
    } 
}

class Petrol {
    constructor() {
        this.fuelType = 'Petrol';
    } 
}

class DieselCar {
    getCar() {
        return "Diesel Car";
    }
}

class PetrolCar {
    getCar() {
        return "Petrol Car";
    }
}

class DieselCarFactory extends CarFactory {
    constructor() {
        super();
    }
    getFuel() {
        return new Diesel();
    }
    makeCar() {
        return new DieselCar();
    }
}

class PetrolCarFactory extends CarFactory {
    constructor() {
        super();
    }
    getFuel() {
        return new Petrol();
    }
    makeCar() {
        return new PetrolCar();
    }
}

module.exports = {
    title: "Abstract Factory",
    description: "Абстрактная фабрика — порождающий шаблон проектирования, предоставляет интерфейс для создания семейств взаимосвязанных или взаимозависимых объектов, не специфицируя их конкретных классов. Шаблон реализуется созданием абстрактного класса Factory, который представляет собой интерфейс для создания компонентов системы (например, для оконного интерфейса он может создавать окна и кнопки). Затем пишутся классы, реализующие этот интерфейс.",
    classes: {
        PetrolCarFactory,
        DieselCarFactory
    },
    demonstration() {
        return new Promise( resolve => {

            const petrolCarFactory = new PetrolCarFactory();
            const petrolCarFuel = petrolCarFactory.getFuel();
            const petrolCar = petrolCarFactory.makeCar();
            console.log("Fuel", petrolCarFuel.fuelType);
            console.log(petrolCar.getCar());

            const dieselCarFactory = new DieselCarFactory();
            const dieselCarFuel = dieselCarFactory.getFuel();
            const dieselCar = dieselCarFactory.makeCar();
            console.log("Fuel", dieselCarFuel.fuelType);
            console.log(dieselCar.getCar());

            resolve(`${dieselCar.getCar()}; ${dieselCarFuel.fuelType} | ${petrolCar.getCar()}; ${petrolCarFuel.fuelType}`)
        });
        
    }
}
