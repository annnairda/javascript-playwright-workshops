async function deliverPizza() {
    return new Promise((resolve, reject) => {
        console.log("Zamówienie złożone...");

        setTimeout(() => {
            const success = Math.random() > 0.5; // w taki sposób można losowo wygenerować true lub false: czasem dostawa pizzy się uda, czasem nie

            if (success) {
                resolve("Pizza dostarczona!");
            } else {
                reject("Kierowca zabłądził. Nie udało się dostarczyć pizzy");
            }
        }, 3000);
    });
}

    try {
        const message = await deliverPizza(); // czekamy na Promise
        console.log(message);
    } catch (error) {
        console.log("Błąd:", error); // obsługa błędu
    }


async function deliverParcel() {
    return new Promise((resolve, reject) => {
        console.log("Zamówienie złożone...");

        setTimeout(() => {
            const success = Math.random() > 0.5; // w taki sposób można losowo wygenerować true lub false: czasem dostawa pizzy się uda, czasem nie

            if (success) {
                resolve("Przesyłka dostarczona!");
            } else {
                reject("Kierowca zabłądził. Nie udało się dostarczyć przesyłki");
            }
        }, 3000);
    });
}

    try {
        const message = await deliverParcel(); // czekamy na Promise
        console.log(message);
    } catch (error) {
        console.log("Błąd:", error); // obsługa błędu
    }  



