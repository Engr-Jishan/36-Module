const student = { name: 'Jishan Ahmed', job: 'Progrmmer' };
const person = new Object();
console.log(student);

// class object
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Human!', 20);
console.log(peop);

// function
function Manus(name) {
    this.name = name;
}
const man = new Manus('JISHAN');
console.log(man);