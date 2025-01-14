import { useState } from 'react'
import './App.css'

const quotes = [
  {
    text: "Life is what happens while you are busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  }
];

function App() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const tweetQuote = (e) => {
    e.preventDefault();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" - ${quote.author}`
    )}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="container">
      <div id="quote-box">
        <div className="quote-content">
          <p id="text">"{quote.text}"</p>
          <p id="author">- {quote.author}</p>
        </div>
        <div className="buttons">
          <button 
            id="new-quote" 
            onClick={getRandomQuote}
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            onClick={tweetQuote}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default App