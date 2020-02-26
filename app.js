/**
 * importamos paquetes
 */
const argv = require('./config/yargs').argv;
const LatLon = require('./lugar/lugar')
const dataClima = require('./clima/clima')

/**
 * se llama la promesa declarada en lujar.js
 */
// LatLon.getLugarLatLon(argv.direccion)
//     .then(resp => {
//         console.log(resp)
//             // return dataClima.getClima(resp.lat, resp.lng);
//     })
//     // .then(resp => console.log(resp))
//     .catch(err => console.log(err));

const getInfo = async(dir) => {

    try {
        const resulDireccion = await LatLon.getLugarLatLon(dir);
        const resClima = await dataClima.getClima(resulDireccion.lat, resulDireccion.lng);
        return `El clima de ${resulDireccion.direccion} es ${resClima.temp} grados`;

    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`;

    }





}
getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
        console.log('---------------------------');
    })
    .catch(err => console.log(err));

//dataClima.getClima(8.660000, -75.919998).then(rsp => console.log(rsp)).catch(err => console.log(err));