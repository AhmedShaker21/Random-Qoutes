let previousRandom = "";
function gettingQuotesRandom() {
   let quoteArray = [
        {
            quote: `“Be yourself; everyone else is already taken.”`,
            author: `― Oscar Wilde`
        },
        {
            quote: `“So many books, so little time.”`,
            author: `― Frank Zappa`
        },
        {
            quote: `“A room without books is like a body without a soul.”`,
            author: `― Marcus Tullius Cicero`
        },
        {
            quote: `“You only live once, but if you do it right, once is enough.”`,
            author: `― Mae West`
        },
        {
            quote: `“If you tell the truth, you don't have to remember anything.”`,
            author: `― Mark Twain`
        },
        {
            quote: `“A friend is someone who knows all about you and still loves you.”`,
            author: `― Elbert Hubbard`
        },
        {
            quote: `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
            author: `― Oscar Wilde`
        },
        {
            quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
            author: `― Mahatma Gandhi`
        },
        {
            quote: `“It is better to be hated for what you are than to be loved for what you are not.”`,
            author: `― Andre Gide, Autumn Leaves`
        },
        {
            quote: `“A room without books is like a body without a soul.”`,
            author: `― Marcus Tullius Cicero`
        },
    ]
    let random = Math.floor(Math.random() * quoteArray.length);
    while (random === previousRandom) {
        random = Math.floor(Math.random() * quoteArray.length);
    }
    previousRandom = random;
    console.log(random)
    document.getElementById("quoteRandom").innerHTML = quoteArray[random].quote;
    document.getElementById("authorRandom").innerHTML = quoteArray[random].author;

}


