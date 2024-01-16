///<reference path="namespace1.ts">
console.log("namespace=>6");
namespace user
{
    class Parent1{
        name:any;
        setName(name:any){
            this.name=name
        }
    }
export class child extends Parent1{
    getName(){
       return this.name
    }
}
let s=new user.child();
s.setName("saj")
console.warn(s.getName());

}