import React from "react";

export default function Header({ title, children }) {
  console.log(children);
  return (
    <header>
      <h1>{title}</h1>
      {children}
    </header>
  );
}
