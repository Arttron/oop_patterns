



module.exports = {
    title: "Adapter",
    description: "Адаптер — структурный шаблон проектирования, предназначенный для организации использования функций объекта, недоступного для модификации, через специально созданный интерфейс.",
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
