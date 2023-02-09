
const axios = require('axios');

const TraePersonajes = async () => {

    let resultado = await axios.get("https://rickandmortyapi.com/api/character");

    return resultado;
}

TraePersonajes()
    .then(
        res => {
            res.data.results.map(
                (personaje) => console.log(personaje.name)
            )
        }
    )
    .catch(
        error => {
            switch(error.response.status){

                case 404:
                    console.log("pagina no encontrada")
                break;
                
                case 501:
                    console.log("Acceso no autorizado")
                break

                default:
                    console.log("unknown error")
            }
        }
    );
