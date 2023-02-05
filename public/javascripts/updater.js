const btnCadastrar = document.querySelector("button")


btnCadastrar.onclick = () => { 

    const fields = document.querySelectorAll("input")
    const idCarro = document.querySelector("#id").value
    const data = {} 

    fields.forEach((fields) => {
        console.log(fields.id, fields.value)
        if(fields.id != "id") {
            data[fields.id] = fields.value
        }
    })
    console.log(data)

    const endpoint = 'http://localhost:8080/carros/' + idCarro

    const config = {
        method : 'PATCH',
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })


    }
    fetch(endpoint, config)
    .then((res) => {
         if(res.ok) {
            alert("Atualizado com sucesso");
            location.href = "/carros"
            
         } 
        
    })
    .catch(() => console.error("FALHA AO ATUALIZAR"))
}
