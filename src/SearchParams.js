import { useState } from "react";

const SearchParams = () => {
  /**
   * useState = HOOK
   * useState retorna un arreglo con dos cosas, el valor actual del estado y una function para actualizar el estado.
   * Estamos utilizando una caractersitica de JavaScript que se llama DESCTRUCTURING (EXTRACCION) para obtener estas dos cosas
   * (el valor actual y la funcion) del arreglo.
   *
   * usamos la funcion setLocation el atributo onChange del INPUT, cada vez que escribimos en el input
   * va a llamar a la funcion setLocation con lo que estamos escribiendo.
   * Cuando la funcion setLocaion es llamada, REACT sabe que su esetado fue modificado y lanza otro ciclo de renderizacion.
   *
   *
   */
  const [location, setLocation] = useState("Vicente Lopez");

  // const location = 'Vicente Lopez';

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
