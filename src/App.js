import React from "react";

function App() {
  const postRequestHandler = async () => {
    await fetch(
      "https://react-test-eaf09-default-rtdb.firebaseio.com/test.json",
      {
        method: "POST",
        body: JSON.stringify({
          key1: "value1",
          key2: "value2",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return <button onClick={postRequestHandler}>Post</button>;
}

export default App;
