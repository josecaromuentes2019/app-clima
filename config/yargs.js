const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion e la ciudad para optener el clima',
            demand: true
        }
    })
    .argv;

module.exports = {
    argv
}