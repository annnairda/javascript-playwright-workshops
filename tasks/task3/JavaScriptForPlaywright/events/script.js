const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
    console.log('Kliknięto PARENT');
});

child.addEventListener('click', () => {
    console.log('Kliknięto CHILD');
});