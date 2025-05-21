class Demo {
    constructor(name,age){
         this.name=name;
         this.age=age;
    }
     display1() {
        console.log("My name is" +this.name );
        console.log("I am" +this.age +"years old.");  
    }
}
class Test extends Demo{
    constructor(name,age,id){
        super(name,age);
        this.id=id;
    }
    display(){
         super.display1();
         console.log("my id is " +this.id);
         
    }
}
class User {
    constructor() {
        const test1 = new Test("Roman", 24, 1);
        test1.display();  // Call the display method
    }
}
const s = new User();  