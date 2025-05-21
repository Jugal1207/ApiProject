class Demo
{
   constructor(name,age){
    this.name=name;
    this.age=age;
   } 
   display()
   {
    console.log("my name is " +this.name);
    console.log("I am " +this.age+ " years old.")   
   }
}
class Test extends Demo
{
   constructor(name,age,id)
   {
    super(name,age);
    this.id=id;
   }
   display1()
   {
    super.display();
    console.log("my id is " +this.id);  
   }  
}
class User {
     constructor(){
        const Test1 = new Test("Roman",23, 1);
        Test1.display1()
     }
}
const s = new User(); // start the execution