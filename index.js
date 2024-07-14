document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Be yourself; everyone else is already taken.― Oscar Wilde",
        "So many books, so little time.. - Frank Zappa",
        "A room without books is like a body without a soul. -― Marcus Tullius Cicero",
        "IBe the change that you wish to see in the world. ― Mahatma Gandhi",
        "If you tell the truth, you don't have to remember anything. ― Mark Twain",
       ]
       let lastQuoteIndex = -1;
    const quoteElement = document.getElementById('quote');
    const button = document.getElementById('quoteButton');

    button.addEventListener('click', function() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === lastQuoteIndex);
        
        lastQuoteIndex = randomIndex;
        quoteElement.textContent = quotes[randomIndex];
    });
});












document.getElementById("wde").innerHTML