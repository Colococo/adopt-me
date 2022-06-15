import { Component } from 'react';
import { useParams } from 'react-router-dom';

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true }; // objecto literal, con una propiedad loading con valor true
  }

  // lo que el componente ejecuta en el momento de inicializacion, 
  // es una funcion que se llama una vez que la renderizacion del componente ha finalizado.
  // Es muy similar a useEffect que se llama la primera vez que se crea la instancia del component
  // Aqui es donde generalmente llamamos datos, cargamos datos de una API.
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();
    console.log(json);
    this.setState(Object.assign({ loading: false }, json.pets[0]));
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

  render() {
    if (this.state.loading) {
      return <h2>Loading....</h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;


    return (
      <div className='details'>
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

/**
 * React Router, la api de react router solo expone hooks. Si tenemos un componente 
 * definido con class que es una ruta, la unica manera de combiar la vieja escuela 
 * de componentes con la nueva escuala react router usando hooks, es hacer un 
 * componente que envuelve el componente class y utiliza el hook que necesito.
 */
const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;