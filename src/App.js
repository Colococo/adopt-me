import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adpot me!</h1>
      {/*<Pet name="Luna" animal="dog" breed="Havanese"/>
      < name="Pepper" animal="Bird" breed="Cockatiel"/>
      <Pet name="Doink" animal="Cat" breed="Mix"/> */}
      <SearchParams />
    </div>
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
