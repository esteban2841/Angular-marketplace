const username: string = "nicobytes";

const sum = (a: number, b: number)=>{
  return a+b;
}

sum(5,12)

class Person {
  age:number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;

  }
}

const nico = new Person(15, "Molina");
