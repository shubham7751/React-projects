
console.log("Arrays=>9");
let array1=['akashy','pandu']
let array2=[10,45,7,6,9,3]
let array:[string,string,number ]=['shubham','shilpa',77]
array.push("akshay")
array.push(100)
console.warn("Indexof->"+array.indexOf('shubham'));
console.warn("concate-> "+array.concat(array1));
console.warn("length-> "+array.length);
console.warn(" pop-> "+array.pop());
console.warn(" reverse-> "+array.reverse());
console.warn(" tostring-> "+array.toString());
console.warn(" sort-> "+array2.sort());

var j:any
for(j in array){
console.warn(" array -> "+array[j]);

}
