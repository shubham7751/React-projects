console.log("inherit=>5");
class Parent
{
    name:any;
    setName(name:any){
        this.name=name
    }
}
class child extends Parent{
    getName(){
        return this.name
    }
}
let t=new child()
t.setName("shubham")
console.warn(t.getName());