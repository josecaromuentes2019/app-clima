const axios = require('axios');


/**
 * async combierte el metodo en un apromesa
 */
const getLugarLatLon = async(dir) => {
    /**
     * se pasa el dir a un formaro de Url rsto porque puede traes espacios 
     */
    const encodeuri = encodeURI(dir);

    /**
     * Este metodo es necesario porque la peticion incluye valores de cabecera
     */
    const instance = axios.create({
        /**
         * url para encontrar longitud y latitud de una ciudad
         */
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeuri}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '73baf532b8msh5d6c48fe963075ep11ed16jsnc532f00ab86a' }
    });

    /**
     * Ejecuta la promesa
     */
    const resp = await instance.get();

    /**
     * si la preomesa da error
     */
    if (resp.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    /**
     * variable que permite obtener la informacion limpia o especifica del obj
     */
    const data = resp.data.Results[0];

    /**
     * variables que se enviaran en el resultado positivo de la promesa (return)
     */
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    /**
     * si la promesa sale responde bien
     */
    return {
        direccion,
        lat,
        lng
    }

}

/**
 * se exporta el metodo usando el modulo
 */
module.exports = {

    getLugarLatLon

}