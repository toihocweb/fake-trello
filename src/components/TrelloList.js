import React from "react";
import TrelloCard from "./TrelloCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, Button, Card, Icon } from "@material-ui/core";
import TrelloButton from "./common/TrelloButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({ list }) => {
  return (
    <Droppable droppableId={String(list._id)}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <Typography gutterBottom variant="h6" component="h2">
            {list.title}
          </Typography>
          {list.tasks &&
            list.tasks.map((task, index) => (
              <TrelloCard
                index={index}
                task={task}
                key={task._id}
                taskId={task._id}
              />
            ))}
          <TrelloButton listId={list._id} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
