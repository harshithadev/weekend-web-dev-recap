import React, { Fragment } from "react";
import "./style.css";

const CATEGORIES = [
  { category: "happy", color: "#ee9b00" },
  { category: "sad", color: "#ae2012" },
  { category: "motivational", color: "#ca6702" },
  { category: "love", color: "#bb3e03" },
  { category: "life", color: "#9b2226" },
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
  return <aside>Category Filter</aside>;
}

function QuotesList() {
  return (
    <section>
      <ul className="quotes-list">
        <li className="quote">
          <p>
            Love is that condition in which the happiness of another person is
            essential to your own.
            <a
              className="source"
              target="_blank"
              href="https://www.goodreads.com/work/quotes/908211-stranger-in-a-strange-land"
            >
              Stranger in a Strange Land
            </a>
          </p>
          <span className="tag" style={{ backgroundColor: "#bb3e03" }}>
            {" "}
            Love
          </span>
          <div className="votes">
            <button className="btn">
              👍 <span>5</span>
            </button>

            <button className="btn">
              🤯 <span>3</span>
            </button>

            <button className="btn">
              ❌ <span>1</span>
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default App;
