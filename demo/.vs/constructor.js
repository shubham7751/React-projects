"use strict";
console.log("constructor =>4");
class con {
    constructor(name) {
        this.name = "shubham";
        this.name = name;
    }
    disp() {
        return this.name;
    }
}
let ab = new con("shubh");
console.warn(ab.disp());
