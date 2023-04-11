import React, { useState } from "react";
import { Button, FormControl, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { green, lightGreen } from "@mui/material/colors";

const Todoform = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <Container maxWidth="sm">
      <h1 style={{textAlign: "center", color:"red"}}>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="I will do this"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 5 }}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Todoform;
