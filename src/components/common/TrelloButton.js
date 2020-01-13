import React, { useState } from "react";
import { Button, Card, Icon } from "@material-ui/core";
import Textarea from "react-textarea-autosize";

const TrelloButton = ({ list }) => {
  const [formOpen, setformOpen] = useState(false);
  const [text, setText] = useState("");

  const btnText = list ? "Add another list" : "Add another card";
  const btnColor = list ? "white" : "inherit";
  const btnTextOpacity = list ? 1 : 0.5;
  const btnTextBg = list ? "rgba(0,0,0,.15)" : "inherit";

  const style = {
    opacity: btnTextOpacity,
    color: btnColor,
    backgroundColor: btnTextBg
  };

  const closeForm = () => {
    setformOpen(false);
  };
  const openForm = () => {
    setformOpen(true);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const renderForm = () => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...?";
    const buttonTitle = list ? "Add list" : "Add Card";
    return (
      <>
        <Card style={{ padding: 10, minHeight: 85, minWidth: 270 }}>
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
              width: "100%",
              height: "100%"
            }}
          />
        </Card>
        <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
          <Button size="small" variant="contained" color="primary">
            {buttonTitle}
          </Button>
          <Icon onClick={closeForm} style={{ cursor: "pointer" }}>
            close
          </Icon>
        </div>
      </>
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
