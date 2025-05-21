class Person {
    #name; // private field

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }
}

const person1 = new Person("Charlie");
console.log(person1.getName()); // Charlie
person1.setName("Dave");
console.log(person1.getName()); // Dave


