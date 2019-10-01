class Engine {
    getSpetialisation() {
        return "Repare egine"
    }    
}

class Transmission {
    getSpetialisation() {
        return "Repare transmissinon"
    }   
}

class CarMechanic {
    _getReparePart() {}
    whanHeDo() {
        const mechanic = this._getReparePart();
        console.log
        return mechanic.getSpetialisation()
    }
}

class EgineMechanic extends CarMechanic {
    _getReparePart() {
        console.log('Make engine mechanic');
        return new Engine();
    }
}

class TransmissionMechanic extends CarMechanic {
    _getReparePart() {
        console.log('Make transmission mechanic');
        return new Transmission();
    }
}

module.exports = {
    title: "Simple Factory",
    description: "В объектно-ориентированном программировании (ООП), фабрика — это объект для создания других объектов. Формально фабрика — это функция или метод, который возвращает объекты изменяющегося прототипа или класса из некоторого вызова метода, который считается «новым».",
    classes: {
        Engine,
        Transmission,
        CarMechanic,
        EgineMechanic,
        TransmissionMechanic
    },
    demonstration() {
        return new Promise( resolve => {
            const engineMech = new EgineMechanic();
            const transmissionMech = new TransmissionMechanic();
            for(key in transmissionMech) {
                console.log(key);
            }
            resolve(`engine ${engineMech.whanHeDo()}\ntransmission ${transmissionMech.whanHeDo()}`);
        });
        
    }
}