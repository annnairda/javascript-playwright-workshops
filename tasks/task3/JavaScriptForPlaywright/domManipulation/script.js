/////////////////////////////ZADANIE DOMOWE NR 2 Z 3. ZAJĘĆ/////////////////////////////
/*
2. W repozytorium kursu znajdź folder „domManupulation”. W pliku script.js napisz kod, który:
• Doda element do strony html
• Zmieni kolor pierwszego paragrafu
• Dla chętnych: pobierz element paragrafu nr 2. Pobierz element przycisku i uruchom na nim metodę addEventListener
na zdarzenie ‚click’. W metodzie addEventListener zmień kolor przycisku.
*/

//dodanie pustego elementu do strony
const newSecondaryHeader = document.createElement('h2');
document.body.append(newSecondaryHeader);

//dodanie elementu z tekstem do strony
const anotherSecondaryHeader = document.createElement('h2');
const anotherSecondaryHeaderContent = document.createTextNode('Tutaj będzie krótki opis strony');
anotherSecondaryHeader.appendChild(anotherSecondaryHeaderContent);

const existingHeader = document.getElementById('container');
document.body.insertBefore(anotherSecondaryHeader, existingHeader);

//zmiana koloru pierwszego paragrafu na zielony
document.querySelector('p').style.color = 'green';

/*
Dla chętnych:
- pobierz element paragrafu nr 2. 
Pobierz element przycisku i uruchom na nim metodę addEventListener
na zdarzenie ‚click’. W metodzie addEventListener zmień kolor przycisku.
*/
const secondParagraph = document.getElementById('paragraph-for-button');
document.querySelector('button').addEventListener('click', () => {
    document.getElementById('paragraph-for-button').style.color = 'blue';
});

