console.log("constructor =>4")
class con{
   name:string="shubham"
    constructor(name:string)
    {
         this.name=name;
    }
    disp():string
    {
         return this.name;
    }
}
let ab=new con("shubh")
console.warn(ab.disp())