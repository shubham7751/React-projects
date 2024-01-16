"use strict";
console.log("Object-Method:=>1");
class App {
    constructor() {
        this.name = "shubh";
        this.age = 7751;
    }
    Disp() {
        console.warn(this.name, this.age);
    }
}
let a = new App();
a.Disp();
