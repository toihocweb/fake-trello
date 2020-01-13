import React from "react";
import { Typography, Card } from "@material-ui/core";
import TrelloList from "./TrelloList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    padding: 20,
    display: "flex",
    marginRight: 30,
    flexWrap: "nowrap"
  }
});

const TrelloCardWrapper = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TrelloList />
      <TrelloList />
    </div>
  );
};

export default TrelloCardWrapper;
