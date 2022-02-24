import React, { useState } from "react";
import "./App.css";
import DisplayAQuote from "./Components/UI/Display/DisplayAQuote";
import EnterAQuote from "./Components/UI/EnterAQuote";

const INIT_QUOTES = [
  {
    id: "01",
    quote: "Your quote here. - some guy"
  },
];

function App() {
  // initialize the quotes list to an empty array
  const [quoteList, setQuotes] = useState(INIT_QUOTES);

  const addQuoteHandler = (q) => {
    setQuotes((prevQs) => {
      return [...prevQs, { quote: q, id: Math.random().toString() }];
    });

    console.log(quoteList);
  };

  // return a random selection from the array of quotes
  const randQuote = (ql) => {
    return ql[Math.floor(Math.random() * ql.length)].quote;
  };

  return (
    <div>
      <h2>Daine Bramadged Quotes</h2>
      <EnterAQuote onAddQuote={addQuoteHandler} />
      <DisplayAQuote quote={randQuote(quoteList)} />
    </div>
  );
}

export default App;
