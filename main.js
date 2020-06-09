(function changeQuote() {

    var quotes = [{
                quote: "Life is too short and sweet to be spent by cribbing and complaining about things.",
                author: " Life"
            },
            {
                quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
                author: "John Kenneth Galbraith"
            },
            {
                quote: "God save me from my friends. I can protect myself from my enemies.",
                author: "Claude Louis Hector de Villars "
            },
            {
                quote: "The price of anything is the amount of life you exchange for it.",
                author: "David Thoreau"
            },
            {
                quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
                author: "Charles Lindbergh"
            },
            {
                quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
                author: " Tyne Daly"
            }
        ];

    var btn = document.querySelector('.generate');

    document.querySelector('.generate').addEventListener('click', function Quote() {

        var random = Math.floor(Math.random() * quotes.length);
        document.querySelector('.quote').textContent = quotes[random].quote;
        document.querySelector('.author').textContent = quotes[random].author;

        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
        document.querySelector('.generate').style.backgroundColor = randomColor;

    });
})();