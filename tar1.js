//exe1
function Phone(brand, model){
    this.brand=brand
    this.model=model
}

Phone.prototype.details = function() {
    console.log(`Phone: ${this.brand} ${this.model}`)
}
const phone1 = new Phone("iphone", "18")
phone1.details();

//exe2
function Rectangle(width,height){
    this.width=width
    this.height=height
}
Rectangle.prototype.area = function() {
    return this.width*this.height
}
const rec1= new Rectangle(5,4)
console.log(rec1.area())
//exe3
function BankAccount(owner, balance){
    this.owner=owner
    this.balance=balance
}
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount
}
BankAccount.prototype.withdraw = function(amount) {
    if(this.balance >= amount) {
        this.balance-=amount}
    else {console.log("Not enough funds")}
}
BankAccount.prototype.checkBalance = function() {
    console.log(`Balance: ${this.balance}`)
}

const account1 = new BankAccount("Shira", 1000);

account1.deposit(500);
account1.withdraw(200);
account1.checkBalance();

//exe4
function Animal(name){
    this.name=name
}
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`)
}
function Dog(name){
   this.name=name
}
Dog.prototype.bark = function(){
    console.log(`${this.name} barks`)
}
Object.setPrototypeOf(Dog.prototype,Animal.prototype)
const d=new Dog(`dog`)
console.log(d.name)
d.speak()
d.bark()

//exe5
function Vehicle(type){
    this.type=type
}
Vehicle.prototype.describe = function() {
    console.log(`This is a ${this.type}`)
}
function Car(brand, type){
    this.brand=brand
    this.type=type
}
Car.prototype.info = function() {
   console.log(`This is a ${this.brand} ${this.type}`)
}
Object.setPrototypeOf( Car.prototype, Vehicle.prototype)
const c = new Car("BMW", "car")
c.describe()
c.info()

//exe6
function Shape(){

}
Shape.prototype.area = function() {
    return 0
}
function Circle(radius) {
    this.radius=radius
}
Object.setPrototypeOf(Circle.prototype, Shape.prototype)
Circle.prototype.area =function(){
    return Math.PI * this.radius*this.radius
}
function Square(side) {
    this.side=side
}
Object.setPrototypeOf(Square.prototype, Shape.prototype)
Square.prototype.area= function(){
    return this.side * this.side
}

const c1 = new Circle(3)
const s = new Square(4)
console.log(c1.area())
console.log(s.area())

//exe7
class Book {
    constructor(title,author){
        this.title=title
        this.author=author
    }

    info(){console.log(`${this.title} by ${this.author}`)}
}
const book1= new Book("The Hobbit", "Tolkien")
book1.info()

//exe8
class Person {
    constructor(name) {
        this.name = name
    }

    greet() {console.log(`Hello, I'm ${this.name}`)}
}
class Student extends Person {
    constructor(name, school){
        super(name)
        this.school=school
    }

     study() {console.log(`${this.name} is studying at ${this.school}`)}
}
const student1 = new Student("Alice", "Oxford")
student1.greet()
student1.study()

//exe9
class Employee {
    #salary

    constructor(salary) {
        this.#salary = salary
    }
    getSalary() {return this.#salary}
    work() {console.log("Employee is working")}
}
class Manager extends Employee {
    constructor(salary) {super(salary)}

    work() { console.log("Manager is managing")}
}

const employee1 = new Employee(4000)
const manager1 = new Manager(5000)

console.log(employee1.getSalary())
employee1.work()

console.log(manager1.getSalary())
manager1.work()