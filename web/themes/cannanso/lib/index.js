"use strict";

function Person(name) {
  this.name = name;
  this.question = function () {
    // closure example
    return "Who is " + this.name + "?";
  };
}

var guy = new Person("Bobby Raskell"); // classical inheritance
console.log(guy.name);
console.log(guy.question());