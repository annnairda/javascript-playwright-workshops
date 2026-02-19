//zadania domowe

// 1. Utwórz tablicę i pobierz z niej ostatni element 
const array = [1, "Franciszek", 5, "Niebieski"]
console.log(array[3])
//Niebieski
const lastElement = array[array.length - 1]
console.log(lastElement)
//Niebieski

// 2. Napisz program, który na podstawie podanej temperatury w stopniach Celsjusza wypisze odpowiedni komunikat: 
// • Jeśli temperatura jest poniżej 0, wypisz: Mróz! Ubierz się ciepło! 
// • Jeśli temperatura jest od 0 do 15 włącznie, wypisz: Chłodno. Przyda się kurtka. 
// • W przeciwnym razie wypisz: Ciepło! Zostaw kurtkę w domu. 
const currentTemperature=-5;
if (currentTemperature < 0) {
    console.log("Mróz! Ubierz się ciepło!");
} else if (currentTemperature >= 0 && score <= 15) {
    console.log("Chłodno. Przyda się kurtka.");
} else {
    console.log("Ciepło! Zostaw kurtkę w domu.");
};
//Mróz! Ubierz się ciepło!

// 3. Napisz pętlę, która wyświetli liczby nieparzyste do 20 
for (let i = 1; i <= 20; i+= 2) {
 console.log(i);
}
//1,3,5,7,9,11,13,15,17,19
