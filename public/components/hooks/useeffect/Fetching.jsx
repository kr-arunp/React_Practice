import React, { useState, useEffect } from "react";

const Fetching = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.login}
            
            <img src={item.avatar_url} alt="" width='122' height='122'/>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fetching;
