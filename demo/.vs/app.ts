console.log("Object-Method:=>1")
class App
{
name:string="shubh"
age:number=7751

Disp(){
    console.warn(this.name,this.age);
    
}
}
let a=new App()
a.Disp()