let box = document.querySelector("#box");
let mt = document.querySelector("#motivation");
let joke = document.querySelector("#joke");
let fact = document.querySelector("#fact");

// Motivation Quote Fetch
async function fetchQuote() {
    try {
        // Using a CORS proxy to fetch the quote
        const response = await fetch('https://zenquotes.io/api/random');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Displaying the quote
        box.innerText = `${data[0].q} — ${data[0].a}`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        box.innerText = 'Failed to fetch quote.';
    }
}
mt.addEventListener("click",() => {
    box.innerText="Loading...."
    fetchQuote();
});
joke.addEventListener("click", async () => {
    box.innerText = "Loading...";
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" }
        });
        console.log("Joke Response Status:", response.status); // Log the response status
        if (!response.ok) throw new Error("Network response was not ok");

        const jokeData = await response.json();
        console.log("Joke Data:", jokeData); // Log the fetched joke data
        box.innerText = jokeData.joke;
    } catch (error) {
        console.error("Error fetching joke:", error);
        box.innerText = "Failed to fetch joke.";
    }
});

// Fact Fetch
fact.addEventListener("click", async () => {
    box.innerText = "Loading...";
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
        console.log("Fact Response Status:", response.status); // Log the response status
        if (!response.ok) throw new Error("Network response was not ok");

        const factData = await response.json();
        console.log("Fact Data:", factData); // Log the fetched fact data
        box.innerText = factData.text;
    } catch (error) {
        console.error("Error fetching fact:", error);
        box.innerText = "Failed to fetch fact.";
    }
});