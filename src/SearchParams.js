import { useState, useEffect } from "react";
import useBreedList from "./useBreedList";

import Results from "./Results";
// SearchParams: es el formulario
const SearchParams = () => {
  /**
   * useState = HOOK
   * useState retorna un arreglo con dos cosas, el valor actual del estado y una function para actualizar el estado.
   * Estamos utilizando una caractersitica de JavaScript que se llama DESCTRUCTURING (EXTRACCION) para obtener estas dos cosas
   * (el valor actual y la funcion) del arreglo.
   *
   * usamos la funcion setLocation el atributo onChange del INPUT, cada vez que escribimos en el input
   * va a llamar a la funcion setLocation con lo que estamos escribiendo.
   * Cuando la funcion setLocation es llamada, REACT sabe que su estado fue modificado y lanza otro ciclo de renderizacion.
   */

  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  //retorna 2 arreglos, location: valor actual, setLocation: funcion(linea 52)
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const [breeds] = useBreedList(animal);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    // fetch permite llamar APIs para obtener datos
    //
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    //?animal=${animal}&location=${location}&breed=${breed}
    // json = JavaScript Object Notation
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)} //toma el valor que ingresamos
          />
        </label>

        {/* drop-down animal/ lista desplegable */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />

      {/* {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))} */}
    </div>
  );
};

export default SearchParams;
