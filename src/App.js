import React, { Fragment } from "react";
import "./style.css";

const CATEGORIES = [
  { category: "happy", color: "#ee9b00" },
  { category: "sad", color: "#ae2012" },
  { category: "motivational", color: "#ca6702" },
  { category: "love", color: "#bb3e03" },
  { category: "life", color: "#9b2226" },
];

const initialQuotes = [
  {
    id: 1,
    quoteText:
      "Love is that condition in which the happiness of another person is essential to your own.",
    origin:
      "https://www.goodreads.com/work/quotes/908211-stranger-in-a-strange-land",
    originName: "Stranger in a strange land",
    category: "love",
    votesThumbsUp: 27,
    votesMindblowing: 9,
    votesFalse: 4,
  },
];

function App() {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <img
            src="images/logo-removebg.png"
            width="220px"
            height="220px"
            alt="logo"
          />
          <h1>Quotes from Everywhere!</h1>
        </div>
        <button className="btn btn-large share-quote">Share a Quote</button>
      </header>
      <QuoteForm />
      <main className="main">
        <CategoryFilters />
        <QuotesList />
      </main>
    </Fragment>
  );
}

function QuoteForm() {
  return (
    <form className="quote-form" action="">
      form
    </form>
  );
}

function CategoryFilters() {
  return (
    <aside>
      <ul>
        <li>
          <button
            className="btn btn-large btn-category tag"
            style={{ backgroundColor: "#e9d8a6" }}
          >
            all
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li>
            <button
              className="btn btn-large btn-category tag"
              style={{ backgroundColor: cat.color }}
            >
              {cat.category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function QuotesList() {
  const quotes = initialQuotes;

  return (
    <section>
      <ul className="quotes-list">
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))}
      </ul>
    </section>
  );
}

function Quote({ quote }) {
  return (
    <li className="quote">
      <p>
        {quote.quoteText}
        <a className="source" target="_blank" href={quote.origin}>
          {quote.originName}
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find(
            (cat) => cat.category == quote.category
          ).color,
        }}
      >
        {" "}
        {quote.category}
      </span>
      <div className="votes">
        <button className="btn">
          👍 <span>{quote.votesThumbsUp}</span>
        </button>

        <button className="btn">
          🤯 <span>{quote.votesMindblowing}</span>
        </button>

        <button className="btn">
          ❌ <span>{quote.votesFalse}</span>
        </button>
      </div>
    </li>
  );
}

export default App;
