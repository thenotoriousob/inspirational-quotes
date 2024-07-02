const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]

let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
let quoteNumber = Math.floor(Math.random() * 4);

quoteText.textContent = quotes[quoteNumber].quote;
authorText.textContent = "- " + quotes[quoteNumber].author;
