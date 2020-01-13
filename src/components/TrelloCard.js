import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

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
const TrelloCard = ({ task }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {task.des}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrelloCard;
