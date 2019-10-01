class Car {
    get Model() {
       return this.model;
    }
    set Model(val) {
        this.model = val;
    }
}
module.exports = {
    title: "Prototype",
    description: "Задаёт виды создаваемых объектов с помощью экземпляра-прототипа и создаёт новые объекты путём копирования этого прототипа. Он позволяет уйти от реализации и позволяет следовать принципу «программирование через интерфейсы». В качестве возвращающего типа указывается интерфейс / абстрактный класс на вершине иерархии, а классы-наследники могут подставить туда наследника, реализующего этот тип.",
    classes: {

    },
    demonstration() {
        return new Promise( resolve => {
            const car = new Car();
            car.Model = 'Ford';
            console.log(car.Model);
            console.log('Make clone');
            const cloneCar = Object.assign({}, car);
            console.log(cloneCar.Model);
            cloneCar.Model = 'Mazda';
            console.log(cloneCar.Model);
            resolve(`${car.Model} | ${cloneCar.Model}`)
        });
        
    }
}
