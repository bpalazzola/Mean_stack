function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength =3;
    this.sayName = function() {
        console.log(this.name)
    }
    this .showStats = function() {

        console.log("Health is", this.health)
        console.log("Speed is", speed)
        console.log("Strength is", strength)
    }
    this.punch = funtion(opponent) {
        opponent.health = 15;
        console.log(this.name) just punched (opponent.name)
    }
    
}