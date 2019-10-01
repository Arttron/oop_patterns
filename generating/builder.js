class Car {
    constructor(builder) {
        this.winterWeels = builder.winterWeels;
        this.fogLights = builder.fogLights;
        this.engineVolume = builder.engineVolume;
        this.xenonLight = builder.xenonLight;
        this.fuelType = builder.fuelType;
    }
    getInfo() {
        console.log("Get car info");
        const {
            winterWeels,
            fogLights,
            engineVolume,
            xenonLight,
            fuelType
        } = this;
        return `
        winterWeels: ${winterWeels}, 
        fogLights: ${fogLights}, 
        engineVolume: ${engineVolume}, 
        xenonLight: ${xenonLight}, 
        fuelType: ${fuelType}
        `
    }
}
class Builder {
    constructor() {
        this.winterWeels = false;
        this.fogLights = false;
        this.engineVolume = '1.8';
        this.xenonLight = false;
        this.fuelType = 'lpg';
    }
    addWinterWeels () {
        this.winterWeels = true;
        return this;
    }
    addFogLights() {
        this.fogLights = true;
        return this;
    }
    addXenonLight () {
        this.xenonLight = true;
        return this;
    }
    setFuelType(val) {
        this.fuelType = val;
        return this;
    }
    setEngineVolume(vol) {
        this.engineVolume = vol;
        return this;
    }
    build() {
        return new Car(this);
    }

}
module.exports = {
    title: "Builder",
    description: "Строитель — порождающий шаблон проектирования, который предоставляет способ создания составного объекта. Предназначен для решения проблемы антипаттерна «Телескопический конструктор».",
    classes: {

    },
    demonstration() {
        return new Promise( resolve => {
            const car = (new Builder())
                .addFogLights()
                .setEngineVolume('2.5')
                .build();
            resolve(`${car.getInfo()}`)
        });
        
    }
}
