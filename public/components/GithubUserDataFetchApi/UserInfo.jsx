import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './CardStyles.css'
import FindUserDataByUserID from "./FindUserDataByUserID";
export const UserInfo = () => {
  const [UsersData, setUsersData] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);
  let URL = "https://api.github.com/users";
  let getUsersData = async () => {
    await axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };
  return (
    <>
    <div>
        
    </div>
    
      <h1>Below are GitHub Users Data</h1>
      <div className="main-github-container">
     
      {UsersData.map((user) => {
        return (
          <div key={user.id} className="cart">
            <img class="cart-avatar" src={user.avatar_url} alt="User Avatar" />
            <div class="cart-details">
              <h2 class="cart-username">
                <p>{user.login}</p>
              </h2>
              <p class="cart-user-url">
                <a
                  href={user.html_url}
                  target="_nextWindow"
                  style={{ padding: "1rem" }}
                >
                  Visit on GitHub
                </a>
              </p>
            </div>
          </div>
        );
      })}
         </div>
      
    </>
  );
};
