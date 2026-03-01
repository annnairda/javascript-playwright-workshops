// Class definition (the "recipe" for a cake)
// class Cake {
//   constructor(flavor, frosting) {
//     this.flavor = flavor;
//     this.frosting = frosting;
//   }

//   bake() {
//     console.log(`Baking a ${this.flavor} cake with ${this.frosting} frosting.`);
//   }

//   serve() {
//     console.log(`Serving a delicious ${this.flavor} cake with ${this.frosting}! `);
//   }
// }

// // Creating objects (actual cakes)
// const cake1 = new Cake("chocolate", "strawberry");
// const cake2 = new Cake("vanilla", "chocolate");

// // Using class methods
// cake1.bake();  // Baking a chocolate cake with strawberry frosting.
// cake1.serve(); // Serving a delicious chocolate cake with strawberry frosting! 

// cake2.bake();  // Baking a vanilla cake with chocolate frosting.
// cake2.serve(); // Serving a delicious vanilla cake with chocolate frosting! 

//Ćwiczenie:
//Wzorując się na przykładzie z ciastem, utwórz klasę „Person” (osoba). Niech osoba posiada pole imię, nazwisko, wiek oraz metodę,
//która będzie służyła do przedstawiania się
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`);
  }
}

// Creating objects (actual cakes)
const person1 = new Person("Adrianna", "Mendalka", 31);

// Using class methods
person1.introduce();
/////////////////////////////
// Obiekt - skrócona składnia
// Ćwiczenia:
// 1. Stwórz 3 obiekty samochód (car) i przypisz każdemu pola: brand, model, year. Niech rok produkcji będzie unikalny dla każdego auta.
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2015
};
const car2 = {
  brand: "Chevrolet",
  model: "Corvette",
  year: 2005
};
const car3 = {
  brand: "Chevrolet",
  model: "Cavalier",
  year: 1985
}
console.log(car1);
console.log(car2);
console.log(car3);
// 2. Umieść obiekty w tablicy.
const cars = [car1, car2, car3]
console.log(cars)
// 3. Dla chętnych: przy pomocy funkcji .map przeiteruj po tablicy i wyświetl wszystkie informacje (brand, model, year) dla każdego
// samochodu
console.log(cars.map(car => car.brand + ' ' + car.model + ' ' + car.year));
// 4. Dla chętnych: Przy pomocy funkcji .filter wyświetl informacje tylko dla dwóch najmłodszych aut. 
console.log(cars.filter(car => car.year < 2015));
/////////////////////////////ZADANIE DOMOWE NR 1 Z 3. ZAJĘĆ/////////////////////////////

//Dziedziczenie
class Relative extends Person {
  constructor(firstName, lastName, age, relationshipType, personalPronoun) {
    super(firstName,lastName,age);
    this.relationshipType = relationshipType;
    this.personalPronoun = personalPronoun;
  }

  describe() {
    console.log(`My ${this.relationshipType}'s name is ${this.firstName} ${this.lastName} and ${this.personalPronoun} is ${this.age} years old.`)
  }
}

const daughter = new Relative("Aleksandra","Nowak",10,"daughter","she");
const cousin = new Relative("Dawid","Kowalski",8,"cousin","he");

daughter.describe();
cousin.describe();