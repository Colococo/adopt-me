/**
 * Estamos utilizando hooks dentro de nuestro hook personalizado. 
 * Estamos retornando dos cosas al que consuma este hook, 
 *  - una lista de breeds (razas) incluyendo una lista vacia cuando no tiene
 *    ninguna breed (raza) para mostrar
 * -  Un tipo enumerado el estado del hook 
 * 
 * estamos utilizando localCache para que si anteriormente cargamos la lista de
 * breeds no tenemos que cargarla nuevamente, y no tendra que llamar la API.
 * 
 * 
 */


import { useState, useEffect} from 'react';

const localCache = {};

// animal is the animal passaed as parameter
// pasado como parametro el animal
export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState('sin cargar');

    useEffect(()=> {
        if(!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList();
        }

        async function requestBreedList() {
            setBreedList([]);
            setStatus('cargando');

            const res = await  fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            );
            const json = await res.json();

            localCache[animal]= json.breeds || []; // if json.breeds es undefined cargamos una lista vacia.
            setBreedList(localCache[animal]);
            setStatus('cargado');

            /**
             * localCache[cat]= ['raza1', 'raza2'];
             * localCache[dog]= ['raza1', 'raza2']
             */
        }
    }, [animal]);

    return [breedList, status];

}