npm init -y (genera el package.json)
npm install prettier -D (instala prettier)

npm run format => (ejecuta el script the package.json)

npm install -D parcel@2.2.1
npm i react@17.0.2 react-dom@17.0.2

npm i -D eslint@8.8.0 eslint-config-prettier@8.3.0

npm i -D eslint-plugin-import@2.25.4 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0

npm i -D eslint-plugin-react-hooks@4.3.0

npm i -D react/react-in-jsx-scope

14/05

ESlint, agregamos algunos paquetes

plugins o complementos

eslint-plugin-import@2.25.4 nos permite encontrar errors en los imports, export y modulos en general.

eslint-plugin-jsx-a11y@6.5.1 encuentra errores de accesibilidad en react, ejemplo nos olvidamos de poner el atributo ALT en una imagen.

eslint-plugin-react@7.28.0 encuentra errores comunes de react como cuando utilizamos PROPS (las propiedades que pasamos al los components)

const Pet = (props) => {
return ();
}

useEffect

Estamos usando un hook que se llama useEffect en SearchParams, useEffect nos permite
decirle a react que pinte el component (render) primero para que el usuario
pueda hacer algo en la pagina, y en cuanto todo esta pintado (renderizado)
entonces va y hace algo mas (ese algo mas es un Effect (efecto secundario)). En
nuestro caso queremos que el usuario vea la pagina primero y solicitar entonces
de la API la informacion con la lista inicial de mascotas (Pets).

Estamos aprovechando de CLOSURES que si definimos la funcion requestPets dentro
del render puede acceder al Scope (alcance) y puede utilizar los hooks.

El parametro [] al final de useEffect es donde declaramos las dependencias de
datos, React quiere saber cuando debe ejecutar el Effecto otra vez.

Si no le doy ningun dato dependiente, asume que en cualquier momento que un
hook se ejecuta va a ejecutar el Effecto. Esto es malo porque significaria
que cada vez que setPets es llamado, pintaria nuevamente la pagina.
Y esto haria que se ejecute el requestPets y setPets en modo indefinido.

useEffect( () => {

}, []);

Hay algunos hooks existentes en React

useState()
useEffect()
useReducer()
useRefs()
useContext()

pero nosotros podemos crear nuestros hooks, para hacer algo re utilizable.

Necesitamos hacer una lista de breeds (razas) del animal seleccionado.

custom hook useBreedList.js

El componente SearchParams se esta haciendo muy grande y haciendo mucho trabajo.
Esto es contra los principios de react, en general React pide componentes pequeños
y componentes que hagan solo una cosa.
En realidad hay dos razones por las cuales queremos dividir un componente en pequeñas
partes, 1- para hacer re utilizable 2- para estar con el codigo mas organizado
De esta manera podemos mantener el codigo del componente mas facil (ej. cambios del codigo,
tests, utilizacion).

React Router

navega a http://localhost:1234 y despues a http://localhost:1234/details/1, y
ambos funcionan.

La parte :id es variable, http://localhost/3, 3 seria variable.

El concepto de Babel es el de un plugin, para parcel pueda transformar el
javascript moderno, con el plugin plugin-proposal-class-properties lo incluimos explicitamente en el archivo .babelrc para que en los componentes definidos con CLASS PUEDA reemplazar las propiedades que se encuentra en el constructor (como { loading: true}) en una propiedad externa de la clase.

// reemplazar constructor

 <!-- // constructor() {
  //   super();
  //   this.state = { loading: true }; // objecto literal, con una propiedad loading con valor true
  // } -->

Por lo siguente; la ventaja es que se puede leer mas facilmente

state = {loading: true}
