const btnCadastrar = document.querySelector("button")


btnCadastrar.onclick = () => { 

    const fields = document.querySelectorAll("input")

    const data = {} 

    fields.forEach((fields) => {
        console.log(fields.id, fields.value)

        data[fields.id] = fields.value
        
    })
    console.log(data)

    const endpoint = 'http://localhost:8080/carros'

    const config = {
        method : 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })


    }
    fetch(endpoint, config)
    .then((res) => {
        if(res.ok) location.href = "/carros"
    })
    .catch(() => console.error("FALHA AO CADASTRAR"))
}
