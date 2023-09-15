import React, { Fragment } from "react";
import { useState } from "react";
import "./style.css";

// TODO : do this
// 1. change the color of the input feilds.
// 2. change the color of category drop down
// 3. add validation to the form, like url validation
// 4. add error message to form
//

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
  const [showForm, setShowForm] = useState(false);
  const [quotes, setQuotes] = useState(initialQuotes);

  return (
    <Fragment>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <QuoteForm setShowForm={setShowForm} setQuotes={setQuotes} />
      ) : null}
      <main className="main">
        <CategoryFilters />
        <QuotesList quotes={quotes} />
      </main>
    </Fragment>
  );
}

function Header({ showForm, setShowForm }) {
  const appTitle = "Quotes from Everywhere!";

  return (
    <header className="header">
      <div className="logo">
        <img
          src="images/logo-removebg.png"
          width="220px"
          height="220px"
          alt="logo"
        />
        <h1>{appTitle}</h1>
      </div>
      <button
        className="btn btn-large share-quote"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share a Quote"}
      </button>
    </header>
  );
}

function QuoteForm({ setShowForm, setQuotes }) {
  const [quoteText, setQuoteText] = useState("");
  const [originName, setOriginName] = useState("");
  const [origin, setOrigin] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(quoteText, originName, origin);
    if (
      quoteText &&
      origin &&
      originName &&
      category &&
      quoteText.length <= 200
    ) {
      const newQuote = {
        // id: Math.round(Math.random() * 100000000),
        id: initialQuotes.length + 1,
        quoteText: quoteText,
        origin: origin,
        originName: originName,
        category: category,
        votesThumbsUp: 0,
        votesMindblowing: 0,
        votesFalse: 0,
      };
      console.log(newQuote);
      setQuotes((quote) => [newQuote, ...quote]);
      setShowForm(false);
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <input
        placeholder="Share a Quote to the world..."
        type="text"
        value={quoteText}
        onChange={(e) => setQuoteText(e.target.value)}
      />
      <span>{200 - quoteText.length}</span>
      <input
        placeholder="Book/ Author"
        type="text"
        value={originName}
        onChange={(e) => setOriginName(e.target.value)}
      />
      <input
        placeholder="Source"
        type="text"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <select
        name="genre"
        id="genre"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.category} value={cat.category}>
            {cat.category.toUpperCase()}
          </option>
        ))}
      </select>

      <button className="btn btn-large" type="submit">
        Post
      </button>
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
          <li key={cat.category}>
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

function QuotesList({ quotes }) {
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
