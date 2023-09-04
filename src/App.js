import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";

const App = () => {
  // linea agregada desde el repo remoto github
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Adpot me!</Link>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//     <  name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",>
//     }),
//     React.createElement(Pet, {
//       name: "Oscar",
//       animal: "Perro",
//       breed: "Callejero",
//     })
//   ]);
// };

ReactDOM.render(React.createElement(App), document.getElementById("root"));
