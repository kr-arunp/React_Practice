import React from "react";
import {
  Typography,
  Stack,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Contact = ({ id, name, email, phone }) => {
  return (
    <ListItem   >
      <ListItemText
        primary={`ID: ${id}`}
        secondary={`Name: ${name} | Email: ${email} | Phone: ${phone}`}
        
      />
    </ListItem>
  );
};


export default Contact;
