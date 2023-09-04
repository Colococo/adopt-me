import React from "react";
import { Link } from 'react-router-dom';
// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// };
// Pet: info de los animales: name, animal, breed, images, location, id

/**
 * agrego desde repo github
 * agrego desde local VSC 2
 * Component Pet
 * @param { name, animal, breed, images, location, id} props 
 * @returns JSX de Pet
 */
const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>

      </div>
    </Link>
  );
};

export default Pet;
