import React from "react";
import TrelloCard from "./TrelloCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, Button, Card, Icon } from "@material-ui/core";
import TrelloButton from "./common/TrelloButton";

const TrelloList = ({ list }) => {
  return (
    <>
      <Typography gutterBottom variant="h6" component="h2">
        {list.title}
      </Typography>
      {list.tasks &&
        list.tasks.map(task => <TrelloCard task={task} key={task._id} />)}
    </>
  );
};

export default TrelloList;
