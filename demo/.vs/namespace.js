"use strict";
///<reference path="namespace1.ts">
console.log("namespace=>6");
var user;
(function (user) {
    class Parent1 {
        setName(name) {
            this.name = name;
        }
    }
    class child extends Parent1 {
        getName() {
            return this.name;
        }
    }
    user.child = child;
    let s = new user.child();
    s.setName("saj");
    console.warn(s.getName());
})(user || (user = {}));
