class Demo{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
     getName()
     {
        return this.name;
     }
     setName(value)
     {
        this.name=value;
     }
     setAge(value)
     {
        this.age=value;
     }
}
const Test=new Demo("john",24);
console.log(Test.getName());// "john"
console.log(Test.age); // 24


Test.setName("Roman");
Test.setAge(32);

console.log(Test.getName()); // "Roman"
console.log(Test.age); // 32





