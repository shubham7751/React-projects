"use strict";
console.log("inherit=>5");
class Parent {
    setName(name) {
        this.name = name;
    }
}
class child extends Parent {
    getName() {
        return this.name;
    }
}
let t = new child();
t.setName("shubham");
console.warn(t.getName());
