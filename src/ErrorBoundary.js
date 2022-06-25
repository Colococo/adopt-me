import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

/**
 * Componente ErrorBoundary para visualizar errores
 */
 class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      console.error("ErrorBoundary caught an error", error, info);
    }
    componentDidUpdate() {
      if (this.state.hasError) {
        setTimeout(() => this.setState({ redirect: true }), 5000);
      }
    }
    render() {
      if (this.state.redirect) {
        return <Navigate to="/" />;
      } else if (this.state.hasError) {
        return (
          <h2>
            There was an error with this listing. <Link to="/">Click here</Link>{" "}
            to back to the home page or wait five seconds.
          </h2>
        );
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;


 // 1.- todo aqueloo que es hijo de este component capturara los errores aqui. 
 //     imagina como si fuera un bloque try/catch
 // 2.- un metodo estatico (Static) es aquel que se puede llamar en el constructor de la
 //     clase. Podriamos llamar este metodo as: ErrorBoundary.getDerivedStateFromError(error)
 // 3.- si quisieramos agregar un sistema de logging, componentDidCatch seria un buen lugar
 //     para colocar este seguimiento (logging=seguimiento de pasos ejecutados).  
 //     Generalmente se usa Sentry (sentry.io) https://sentry.io/welcome/ o 
 //    (TrackJS) https://trackjs.com/ 
  
 // 4.- componentDidUpdate es como reaccionamos a los cambios de estado y cambios de propliedades 
 //     , en este caso estamos reaccionando al cambio del estado (state.hasError). 
 // 5.- Cuando renderiza el componente Navigate es la manera de redireccionar con el Router de React.
  
  
 