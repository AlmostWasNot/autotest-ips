class Car {
    public engineStatus: boolean = false
    private engineStatusOff: string = 'Engine avto: off'
    private engineStatusOn: string = 'Engine avto: off'

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

    public setSpeed(speed: number) {
        if ((speed < 0) || (speed > 100))
            console.log('error')
        else {
            if (this.getState() == this.engineStatusOff)
                console.log(this.engineStatusOff)
            else
                console.log(this.engineStatusOn, 'speed: ', speed)
        }
    }
}

let car: Car = new Car()
console.log(car.getState())
car.turnOn()
console.log(car.getState())

console.log(car.setSpeed(80))

//getState должен печатать + добавить public и private полям