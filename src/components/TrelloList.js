import React from "react";
import TrelloCard from "./TrelloCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, Button, Card, Icon } from "@material-ui/core";
import TrelloButton from "./common/TrelloButton";
const useStyles = makeStyles({
  list: {
    maxWidth: 345,
    transition: "all 0.4s",
    marginRight: 20,
    padding: 20,
    backgroundColor: "#ebecf0",
    height: "100%"
  }
});

const TrelloList = () => {
  const classes = useStyles();

  return (
    <Card className={classes.list}>
      <Typography gutterBottom variant="h6" component="h2">
        Lizard
      </Typography>
      <TrelloCard />
      <TrelloCard />
      <TrelloCard />
      <TrelloCard />
      <TrelloCard />
      <TrelloButton />
    </Card>
  );
};

export default TrelloList;
