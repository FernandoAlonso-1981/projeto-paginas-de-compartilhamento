function texto() {
    //window.alert('QR code')
    window.alert('entrou na funcao QRCode')

    let foco1 = String(document.getElementById("recebelink").value) //transformar o obejto html em string
    let divResultado1 = document.getElementById("resultado1")
    let divResultado2 = document.getElementById("resultado2")

    let qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${foco1}`;
    
    let texto = innerHTML =  `
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
                                                <h2 >Compartilhe via <strong>QR Code</strong></h2>
                                                <div><img id="qrcode"src="${qrcode}" alt=""></div>
                                                <div> <a href="https://cartaovirtualdevisita.com.br/" target="_blank"><img id="logo" src="https://cdn.fernandoalonso.hosting.dousvies.com/wp-content/uploads/sites/32/2021/12/31002033/logotipo-Cartao-de-Visita-Virtual.png" alt="Cartão de Visita Virtual"></a> </div>
                                            </body>
                                            </html>
                                        
                                        `

    let date = new Date().toLocaleString();
    let nomeArquivo = date
    
    gerarPagina2(texto, nomeArquivo+"___qrcode.html")
}




function whatsApp() {
    
    window.alert('entrou na funcao WhatsApp')


    let foco2 = String(document.getElementById("recebelink").value) //transformar o obejto html em string
    let divResultado1 = document.getElementById("resultado1")
    let divResultado2 = document.getElementById("resultado2")

   
    

    //gerarLinkwhats(foco2)
       
    let texto = innerHTML =  `
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
                                                </style>
                                                <title>Cartão de Visita Virtual</title>
                                            </head>
                                            <body>
                                                <h1 id="h1">Cartão de Visita Virtual</h1>
                                                <h2 >Compartilhe via <strong>WhatsApp</strong></h2>
                                                <p>Link do Cartão: <span id="span1">${foco2}</span></p>
                                                <div>
                                                    <input autofocus type="number" style="height: 40px; width:50%;" name="tel" id="tel"   placeholder=" Celular com DDD * (Obrigatório)" >
                                                </div>
                                                <div>
                                                    <input style="height: 40px; width:50%;" name="men" id="men"   placeholder=" Mensagem Padrão (Opcional)" >
                                                </div>
                                                <div>
                                                    <input style="width:50%; font-size: 1.2em ; font-weight: bold; color: #FFFFFF; height: 40px; background-color: #008000" type="button" value="Gerar WhatsApp" onclick="gerarLinkwhats()">
                                                </div>
                                                <div style="padding-top: 100px;">
                                                    <a href="https://cartaovirtualdevisita.com.br/" target="_blank">
                                                        <img id="logo" src="https://cdn.fernandoalonso.hosting.dousvies.com/wp-content/uploads/sites/32/2021/12/31002033/logotipo-Cartao-de-Visita-Virtual.png" alt="Cartão de Visita Virtual">
                                                    </a>
                                                </div>
                                                    
                                                <script>
                                                    function  gerarLinkwhats (span = "${foco2}") {
                                                        let telefone = Number(window.document.getElementById("tel").value)
                                                        let mensagem = String(window.document.getElementById("men").value)                                                                                                 
                                                        window.open("https://wa.me/+55"+telefone+"?text="+mensagem+" - Segue o link do meu cartão - "+span, "_blank")
                                                    }
                                                
                                                </script>
                                                


                                            </body>
                                            </html>
                                        
                                        `

    

    
    let date = new Date().toLocaleString();
    let nomeArquivo = date
    
    gerarPagina2(texto, nomeArquivo+"___whatsapp.html")

    
}


function gerarUrl () {
    
    window.alert('entrou na funcao url')

    let foco3 = String(document.getElementById("recebelink").value) //transformar o obejto html em string
    let divResultado1 = document.getElementById("resultado1")
    let divResultado2 = document.getElementById("resultado2")

    window.alert(foco3)
    

    let texto = divResultado2.innerHTML =  `
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
                                                <h2 >Compartilhe via <strong>Link/URL</strong></h2>

                                                <div>
                                                    <input style="height: 40px; width:50%;" name="men" id="men"  value="${foco3}" >
                                                </div>
                                                <div>
                                                    <input id="tcpy" style="width:50%; font-size: 1.2em ; font-weight: bold; color: #FFFFFF; height: 40px; background-color: #79239D" type="button" value="Clique para copiar" onclick="copiarTexto()">
                                                </div>
                                                
                                                <div> <a href="https://cartaovirtualdevisita.com.br/" target="_blank"><img id="logo" src="https://cdn.fernandoalonso.hosting.dousvies.com/wp-content/uploads/sites/32/2021/12/31002033/logotipo-Cartao-de-Visita-Virtual.png" alt="Cartão de Visita Virtual"></a> </div>
                                            </body>
                                            </html>

                                        `

    copiarTexto(foco3)                                                
    
    let date = new Date().toLocaleString()
    let nomeArquivo = date
    
    gerarPagina2(texto, nomeArquivo+"___linkURL.html")
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

    function copiarTexto (foco3) {
        navigator.clipboard.writeText
        //ver aula 73 do CFB Cursos
    }