import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    transition: "all 0.4s",
    marginBottom: 20,
    "&:hover": {
      transform: "translateY(-2px)",
      backgroundColor: "#ebecf0"
    }
  }
});
const TrelloCard = ({ task, taskId, index }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(taskId)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {task.des}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
