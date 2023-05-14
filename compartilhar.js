function gerarPagina(){
    const foco = String(document.getElementById("recebelink").value) //transformar o obejto html em strinfo
    const divResultado1 = document.getElementById("resultado1")
    const divResultado2 = document.getElementById("resultado2")
    
    divResultado1.innerHTML = `<p>Deu certo o resultado = ${foco}</p>`

    //Gerar página compartilhamento por link

    divResultado2.innerHTML =   `<h1>Comparilhe via QR Code</h1>
                                <h2>Cartão de Visita Virtual</h2>
                                <p>Aqui o QR Code + o ${foco}<p>
                                <img src="https://cdn.fernandoalonso.hosting.dousvies.com/wp-content/uploads/sites/32/2021/12/31002033/logotipo-Cartao-de-Visita-Virtual.png" alt="Cartão de Visita Virtual">
                                `
    
  
    
}