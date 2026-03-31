const character = {
    name:"Sonja Blade",
    hp: 100,
    attack: 73,
    defense:62,
    meet: function () {
        console.log("My name is "
             + this.name + " and I have " + this.hp + " health.");
}
}

character.meet();

