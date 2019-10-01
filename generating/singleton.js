class SpecCar {
    constructor(create = false) {
        return Boolean(create)
    }
    set foo(val) {
        this._foo = val;
    }
    get foo() {
        return this._foo;
    }
    static getInstance() {
        if(this.instance) return this.instance;
        this.instance = new SpecCar();
        return this.instance;
    }
}
module.exports = {
    title: "Singleton",
    description: "Одиночка — порождающий шаблон проектирования, гарантирующий, что в однопроцессном приложении будет единственный экземпляр некоторого класса, и предоставляющий глобальную точку доступа к этому экземпляру.",
    classes: {

    },
    demonstration() {
        return new Promise( resolve => {
            const car = SpecCar.getInstance();
            car.foo = 'one';
            console.log('car', car.foo);
            console.log('Create new car');
            const car2 = SpecCar.getInstance();
            console.log('car2', car2.foo);
            resolve(`${car.foo}`)
        });
        
    }
}
