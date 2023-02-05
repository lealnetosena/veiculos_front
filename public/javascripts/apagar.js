const axios = require('axios');

function apagar(idCarro) { 
    const endpoint = 'http://localhost:8080/carros/' + idCarro;

    axios.delete(endpoint)
    .then(res => {
         if(res.status === 200) {
            //alert("Apagado com sucesso");
            
         } 
    })
    .catch(error => error);
}

module.exports = apagar;