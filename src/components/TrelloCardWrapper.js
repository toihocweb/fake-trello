import React from "react";
import { Typography, Card } from "@material-ui/core";
import TrelloList from "./TrelloList";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import TrelloButton from "./common/TrelloButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions/listAction";

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
  const listTasks = useSelector(state => state.listReducer);
  const dispatch = useDispatch();
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    console.log(destination);
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.wrapper}>
        {listTasks &&
          listTasks.map(item => (
            <Card key={item._id} className={classes.list}>
              <TrelloList list={item} />
            </Card>
          ))}
        <TrelloButton list />
      </div>
    </DragDropContext>
  );
};

export default TrelloCardWrapper;
