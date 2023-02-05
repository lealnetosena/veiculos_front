function getAllCarros() {

  const endpoint = `http://localhost:8080/carros`;

  const config = {
    method: "GET",
  };

  fetch(endpoint, config)
    .then( (res) => res.json())
        .then(function (carros) {
        document.querySelector("tbody").innerHTML = 
            
            carros
            .map(function(carros) {
                return `<tr>
                    <th scope="row">${carros.id}</th>
                    <td>${carros.Nome}</td>
                    <td>${carros.Fabricante}</td>
                    <td>${carros.Placa}</td>
                </tr>`
        
            }).join("")

        })
        .catch(() => console.log("deu errado"))
    .catch(() => console.log("deu errado"));
}
getAllCarros();
