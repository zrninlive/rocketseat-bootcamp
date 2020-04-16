import React from "react";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="Projects">
        <ul>
          <li>Homepage</li>
          <li>Products</li>
        </ul>
      </Header>
      <Header title="Products">
        <ul>
          <li>Homepage</li>
          <li>Products</li>
          <li>Login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
