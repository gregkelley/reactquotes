import React, { useState } from "react";
import Card from './Card';
import Button from "./Button";

import quoteClasses from './EnterAQuote.module.css';

const EnterAQuote = (props) => {
  const [enteredQuote, setQuote] = useState("");

  const addQuoteHandler = (event) => {
    event.preventDefault();

    console.log(enteredQuote);
    
    // might wanna do some validation here and stuff. yeah, stuff.
    props.onAddQuote(enteredQuote);
  };
  const quoteChangeHandler = (event) => {
    setQuote(event.target.value);
  };

  return (
      <Card className={quoteClasses.input}>
        <form onSubmit={addQuoteHandler}>
          <label htmlFor="newquote">Enter a new quote</label>
          <Button type="submit" marginLeft="auto" marginRight="0">Save</Button>
          <input
            id="newquote"
            type="text"
            value={enteredQuote}
            onChange={quoteChangeHandler}
          ></input>
        </form>
      </Card>
  );
};

export default EnterAQuote;
