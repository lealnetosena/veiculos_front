function getCarro() {
    const idCarro = document.querySelector("#id").value

    const endpoint = `http://localhost:8080/carros/buscaid/${idCarro}`;
    
  
    const config = {
      method: "GET",
    };
  
    fetch(endpoint, config)
      .then( (res) => res.json())
          .then(function (carros) {
          console.log(arguments)
          document.querySelector("#nome").value = carros.Nome;
          document.querySelector("#fabricante").value = carros.Fabricante;
          document.querySelector("#placa").value = carros.Placa;
  
          })
          .catch(() => console.log("deu errado"))
      .catch(() => console.log("deu errado"));
  }
  getCarro();