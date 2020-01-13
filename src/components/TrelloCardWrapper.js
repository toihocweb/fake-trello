import React from "react";
import { Typography, Card } from "@material-ui/core";
import TrelloList from "./TrelloList";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import TrelloButton from "./common/TrelloButton";

const useStyles = makeStyles({
  wrapper: {
    padding: 20,
    display: "flex",
    marginRight: 30,
    flexWrap: "nowrap"
  },
  list: {
    maxWidth: 345,
    transition: "all 0.4s",
    marginRight: 20,
    padding: 20,
    backgroundColor: "#ebecf0",
    height: "100%"
  }
});

const TrelloCardWrapper = () => {
  const listTasks = useSelector(state => state.listReducer.list);
  console.log(listTasks);
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {listTasks &&
        listTasks.map(item => (
          <Card key={item._id} className={classes.list}>
            <TrelloList list={item} />
            <TrelloButton list={item.length} />
          </Card>
        ))}
    </div>
  );
};

export default TrelloCardWrapper;
