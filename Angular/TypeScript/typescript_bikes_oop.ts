class Bike {
    price: number;
    max_speed: number;
    miles: number
    constructor(price: number, max_speed: number){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0
    }
    displayInfo(): any {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`);
        return this
    }
    ride(): any {
        console.log(`Starting miles: ${this.miles}. Now adding miles as I'm riding...`)
        this.miles += 10
        console.log(`Total miles aftrer riding: ${this.miles}`)
        return this
    }
    reverse(){
        console.log(`Starting miles: ${this.miles}. Now subtracting miles as I'm reversing...`)
        this.miles -= 5;
        console.log(`Total miles after reversing: ${this.miles}`)
        return this
    }
}

let bike1 = new Bike(10, 3)
let bike2 = new Bike(40, 8)
let bike3 = new Bike(0, 1)

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();