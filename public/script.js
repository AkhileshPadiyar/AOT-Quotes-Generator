const generateQuote = async() => {
    await fetch('/quotes')
    .then((res) => res.json())
    .then((res) => {
        const author = document.getElementById('author')
        author.textContent = res.author
        const quote = document.getElementById('quote')
        quote.textContent = res.quote;
    })
}