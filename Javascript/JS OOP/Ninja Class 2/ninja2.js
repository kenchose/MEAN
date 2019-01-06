function Ninja(name){
    const self = this;
    const speed = 3;
    const strength = 3;
    this.health = 100
    this.name = name
    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    }
    this.showStats = function(){
        console.log("Name: " + this.name + " , Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log("My health is now " + this.health);
    }
    Ninja.prototype.punch = function(name){
        this.health -= 5;
        console.log(name.name + " was punched by " + this.name + " and lost 5 Health!");
    }
    Ninja.prototype.kick = function(name){
        this.health -= 15;
        this.strength -= 1;
        console.log(name.name + " was kicked by " + this.name + " and lost 15 health!");
    }
}
const kenny = new Ninja("Kenny");
const dan = new Ninja("Dan");
kenny.sayName();
kenny.showStats();
kenny.drinkSake();
kenny.punch(dan);
dan.kick(kenny);
