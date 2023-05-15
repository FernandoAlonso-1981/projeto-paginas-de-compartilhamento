function texto() {
    const foco1 = String(document.getElementById("recebelink").value) //transformar o obejto html em string
    const divResultado1 = document.getElementById("resultado1")
    const divResultado2 = document.getElementById("resultado2")

    let qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${foco1}`;
    
    const texto = innerHTML =  `
                                            <!DOCTYPE html>
                                            <html lang="pt-br">
                                            <head>
                                                <meta charset="UTF-8">
                                                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                                <link rel="shortcut icon" href="https://cartaodevisitavirtual.com.br/wp-content/uploads/sites/32/2022/12/vovo.ico" type="image/x-icon">
                                                <style> 
                                                    * {
                                                        padding: 0px;
                                                        margin: 0px;
                                                        
                                                        color: #484848;
                                                        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                                                            
                                                        box-sizing: border-box;
                                                        font-display: swap;
                                                    }
                                                    html, body {
                                                        background-color: #f7f7f7;
                                                        margin: auto;   
                                                    }
                                                    h1,h2,p,div{

                                                        padding: 1em;
                                                        text-align: center;
                                                        
                                                    }
                                                    img#logo{
                                                        max-width: 80%;
                                                        max-height: 80%;
                                                    }
                                                    img#qrcode{
                                                        
                                                        
                                                        border: 10px solid #ffffff;
                                                    }
                                                </style>
                                                <title>Cartão de Visita Virtual</title>
                                            </head>
                                            <body>
                                                <h1 id="h1">Cartão de Visita Virtual</h1>
                                                <h2 >Compartilhe via <strong>QR Code<strong></h2>
                                                <div><img id="qrcode"src="${qrcode}" alt=""></div>
                                                <div> <a href="https://cartaovirtualdevisita.com.br/" target="_blank"><img id="logo" src="https://cdn.fernandoalonso.hosting.dousvies.com/wp-content/uploads/sites/32/2021/12/31002033/logotipo-Cartao-de-Visita-Virtual.png" alt="Cartão de Visita Virtual"></a> </div>
                                            </body>
                                            </html>
                                        
                                        `

    const date = new Date().toLocaleString();
    const nomeArquivo = date
    
    gerarPagina2(texto, nomeArquivo+"___qrcode.html")
}

//gerar o arquivo no computador
function gerarPagina2(content=texto, filename="qrcode.html", contentType){

    if(!contentType){
        contentType = 'application/octet-stream';
    }
    var a = document.createElement('a');
    var blob = new Blob([content], {'type':contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    
    //navigator.clipboard.writeText(texto) //copia para a area de trabalho                     

}