import {
  Typography,
  Stack,
  Button,
  List,
  TextField,
} from "@mui/material";
import { fontSize } from "@mui/system";
import React,{useState,useReducer} from 'react'
import Contact from "./ReduceFunInJS/ContactListRender";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

let InitialState=[
	{
		id: Date.now(),
		name: "Arun",
		email: "arun@gmail.com",
		phoneNumber: 7663464334,
	}];

  let ReducerFunction=(State,action)=>{
switch(action.type){
  case 'Add':
    return [...State, action.payload]
	case 'Delete':
		return State.filter((con)=>{
		  return con.id!==action.payload.id;
		})
	default :
	  return <h1>Error Found</h1>
}
  
  }

const ContactManager = () => {
	const [State, dispatch]=useReducer(ReducerFunction, InitialState);
	const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Number, setNumber] = useState();
  
  let AddNewContact=(e)=>{
	  e.preventDefault();
	  
	  let contact = {
	     id:Date.now(),
	     name,
	     email,
	     Number
	  }
	  setName('');
	  setEmail('');
	  setNumber('');
	  dispatch({ type: 'Add', payload: contact });
  console.log(State);
	  
  }
  let Delete=(con)=>{
   dispatch({ type: 'Delete', payload:{id:con.id}})
  
  }
  
const listStyle = {
  width: "50%",
  backgroundColor: "gold",
}
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50vh",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            padding: "2rem",
          }}
        >
          <Typography variant="h3" color="primary" marginBottom={3}>
            My Contact List
          </Typography>
          <form>
            <Stack
              direction="column"
              spacing={4}
              width="100%"
              alignItems="center"
            >
              <TextField
                id="outlined-basic"
                label="Name"
                value={name}
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                value={email}
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                type="number"
                value={Number}
                variant="outlined"
                onChange={(e) => setNumber(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                padding="2px"
                onClick={AddNewContact}
              >
                Add New Contact
              </Button>
            </Stack>
          </form>
        </div>
      </div>
      <div
        style={{
          height: "50vh",
          width: "100%",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          margin: "3rem",
          color: "white",
        }}
      >
        <List style={listStyle}>
          {State.map((contact) => (
            <Stack direction="row" spacing={4}>
              <Contact key={contact.id} {...contact} />
              <IconButton
                aria-label="delete"
                onClick={() => Delete(contact)}
                marginBottom="4rem"
              >
                <DeleteIcon />
              </IconButton>
              <hr></hr>
            </Stack>
          ))}
        </List>
      </div>
    </>
  );
}

export default ContactManager
