import React from "react";

import classes from "./DisplayAQuote.module.css";
import Card from "../Card";
import Button from "../Button";

const DisplayAQuote = (props) => {

  // const newQuote = () => {
  //   props.onNewQuote();
  // }
  return (
    <div>
      <Card className={classes.quote}>
        <Button marginLeft="auto" marginRight="0" onClick={props.onNewQuote}>
          New Random Quote
        </Button>
        <h3>{props.quote}</h3>
      </Card>
    </div>
  );
};

export default DisplayAQuote;
