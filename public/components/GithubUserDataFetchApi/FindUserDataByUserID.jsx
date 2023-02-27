import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./githubSingleUser.css";
import GitProfileRender from "./GitProfileRender";
function FindUserDataByUserID() {
  const [UsersData, setUsersData] = useState([]);
  
  const [Url, setUrl] = useState(
    `https://api.github.com/users/${"arunkumar201"}`
  );
  const [Input, setInput] = useState("arunkumar201");
  
  useEffect(() => {
    getUsersData();
  }, [Url]);
  let getUsersData = async () => {
    await axios
      .get(Url)
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
      alert(`Username ${UsersData.login}Not Found`);
        setUsersData([]);
      });
  };
  //On change Handler
  let ChangeHandler = (e) => {
    setInput(e.target.value);
  };

  let EnterKeyHandler = (e) => {
    if (e.keyCode === 13) {
      ClickHandler();
    }
  };
  let ClickHandler = () => {
    let URL = `https://api.github.com/users/${Input}`;
    setUrl(URL);
    setInput("");
  };

  return (
    <div>
      <h1>Github Profile Generator</h1>
      <div
        style={{ display: "flex", justifyContent: "center", height: "10vh" }}
      >
        <input
          type="text"
          placeholder="Your Username..."
          value={Input}
          onChange={ChangeHandler}
          className="Input-Element"
          onKeyDown={EnterKeyHandler}
        />
        <button
          style={{
            fontSize: "1.3rem",
            padding: "10px",
            borderRadius: "10px",
            margin: "1rem",
            color: "green",
          }}
          onClick={ClickHandler}
        >
          Get Data
        </button>
      </div>
      {UsersData.length == 0 ? (
        <h3>UserName Not Found</h3>
      ) : (
        <GitProfileRender UsersData={UsersData} />
      )}
    </div>
  );
}

export default FindUserDataByUserID;
