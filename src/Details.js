import { Component } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./Carousel";

/**
 * Details: detalle del animal seleccionado
 */
class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }
  // lo que el componente ejecuta en el momento de inicializacion,
  // es una funcion que se llama una vez que la renderizacion del componente ha finalizado.
  // Es muy similar a useEffect que se llama la primera vez que se crea la instancia del component
  // Aqui es donde generalmente llamamos datos, cargamos datos de una API.
  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    // que tiene que pasar para que el error de la api se propague en la funcion render();
    // throw new Error("hahaha crashed!!");

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  /**
   * NOTA: en lugar de obtener los props a traves de parametros y ustilzar useState,
   * estamos en esta caso obteniendo los valores de las variables this.state y
   * this.props, porque asi funcionan los componentes definidos con class.
   *
   * this.state es el estado del componente que nostros cambiamos (mutate) como setState, aqui
   * utilizamos this.setState para cambiar el valor.
   *
   * this.props viene desde el componente padre. similar a los componentes definidos con
   * arrow function.
   */
}

// esto es para que interprete el objeto react (jsx)
const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
