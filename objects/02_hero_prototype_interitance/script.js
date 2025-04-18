"use strict";

// https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

function Hero (name, level) {
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = function() {
    return `${this.name} says hello`;
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

Warrior.prototype.attack = function() {
    return `${this.name} attacks with the ${this.weapon}`;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}`;
}

const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");