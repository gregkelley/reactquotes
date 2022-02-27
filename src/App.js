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
  const [currQuote, setRandQuote] = useState("");

  const addQuoteHandler = (q) => {
    setQuotes((prevQs) => {
      return [...prevQs, { quote: q, id: Math.random().toString() }];
    });

    // console.log(quoteList);
    // put current quote in display box
    setRandQuote(q);
  };

  // return a random selection from the array of quotes
  const randQuote = () => {
    return quoteList[Math.floor(Math.random() * quoteList.length)].quote;
  };
  const newQuoteHandler = () => {
    // return randQuote();
    setRandQuote(() => {return randQuote()})
    console.log(currQuote);
  }

  return (
    <div>
      <h2>Button Cat Quotes</h2>
      <EnterAQuote onAddQuote={addQuoteHandler} />
      <DisplayAQuote quote={currQuote} onNewQuote={newQuoteHandler} />
    </div>
  );
}

export default App;
