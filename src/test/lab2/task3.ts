class Car {
    private engineStatus: boolean = false

    public turnOff() {
        this.engineStatus = false
    }

    public turnOn() {
        this.engineStatus = true
    }

    public getState(): string {
        let str: string = ''
        if (this.engineStatus == false) {
            str = 'Engine avto: off'
        } else {
            str = 'Engine avto: on'
        }
        return str
    }
}

let car: Car = new Car()
console.log(car.getState())
car.turnOn()
console.log(car.getState())

//getState должен печатать