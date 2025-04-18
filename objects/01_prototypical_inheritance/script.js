"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`hello, I'm ${this.name}`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`my marker is ${this.marker}`);
};

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("tim", "O");

