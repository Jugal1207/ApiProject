class Person{
    constructor(name,age){
        this._name=name;
        this._age=age;
    }
    getname() // getter method
    {
        return this._name;
    }
    setname(value)  // setter method
    {
        if(value  && value.length > 0)
        {
            this._name=value;
        }else{
            console.log("name can't be empty");
        }
    }
}
const person1=new Person("john",24);
console.log(person1.getname());
person1.setname("sk");
console.log(person1.getname());