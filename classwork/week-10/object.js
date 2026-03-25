// objects 
// key: value 
const person = {
    name: "Eunice",
    email: "eunice-email.com",
    phoneNumber: 333 - 333 - 3333,
    job: "truck driver",
    age: 35,
    isFavorite: false,
    photo: "eunice.png"

}

// get a value with the key 
console.log(person.age);
// get a value with DYNAMIC key  
console.log(person["job"]);
// update a value 
person.email = "eunice@yahoo.com";
person.phoneNumber = 123_456_7890;
// add to object 
person.money = 0;

console.log(person);


// AI object practice
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2016,
    describe: function () {
        console.log("This car is a " + this.year + " " +
            this.brand  + " " + this.model + "."
        )
    }

}

car.describe();
console.log(car.brand);

const user = {
    name: "Eunice",
    age: 25
};
user.age = 36;
user.isStudent = "true";

console.log(user.isStudent);

const baby = {
    appearance: "gorgeous",
    size: "chonky",
    consumption: "wild amounts of breast milk",
    temperament: "perimenopausal",

    introduce: function () {
        alert("Hi, I'm a " + this.appearance + " , "
            + this.size + " baby, who eats "
            + this.consumption + " and acts " + this.temperament + ".")
    }

}

baby.introduce();

const pet = {
    name: "kitty",
    breed: "cat",
    info: function () {
        console.log(this.name + " is a " + this.breed)
    }
}

pet.info()

// card object 
const profile = {
    name:"Max",
    age: 34,
    hobbies: [ "singing karaoke", "gaming",
         "performing stand up comedy"],
    greet: function() {
        console.log("Hi, my name is " + this.name + ".")

    }    
}

console.log(profile.hobbies);