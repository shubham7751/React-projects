"use strict";
//let user3="www"
console.log("never=>8");
function aa(user3) {
    throw { Message: user3 };
    //return user3;
}
console.warn(aa("server error :500"));
