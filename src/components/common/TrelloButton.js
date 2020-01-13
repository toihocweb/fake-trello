import React, { useState } from "react";
import { Button, Card, Icon } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { addList, addTask } from "../../actions/listAction";
import { useDispatch } from "react-redux";

const TrelloButton = ({ list, listId }) => {
  const [formOpen, setformOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const btnText = list ? "Add another list" : "Add another card";
  const btnColor = list ? "white" : "inherit";
  const btnTextOpacity = list ? 1 : 0.5;
  const btnTextBg = list ? "rgba(0,0,0,.15)" : "inherit";
  console.log(listId);
  const style = {
    opacity: btnTextOpacity,
    color: btnColor,
    backgroundColor: btnTextBg,
    height: "100%",
    paddingRight: 40
  };

  const closeForm = () => {
    setformOpen(false);
    setText("");
  };
  const openForm = () => {
    setformOpen(true);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text) {
      if (list) {
        dispatch(addList(text));
      } else {
        dispatch(addTask(listId, text));
      }
    }
  };

  const renderForm = () => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...?";
    const buttonTitle = list ? "Add list" : "Add Card";
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Card style={{ padding: 10, minWidth: 270 }}>
          <Textarea
            value={text}
            onChange={handleChange}
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            style={{
              resize: "none",
              outline: "none",
              overflow: "hidden",
              border: "none",
              minHeight: 85,
              width: "100%"
            }}
          />
        </Card>
        <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onMouseDown={handleAdd}
          >
            {buttonTitle}
          </Button>
          <Icon onClick={closeForm} style={{ cursor: "pointer" }}>
            close
          </Icon>
        </div>
      </div>
    );
  };

  const renderButton = () => (
    <Button
      style={style}
      startIcon={<Icon>add</Icon>}
      size="small"
      onClick={openForm}
    >
      {btnText}
    </Button>
  );

  return formOpen ? renderForm() : renderButton();
};

export default TrelloButton;
