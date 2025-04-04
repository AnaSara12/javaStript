let valorTitulo = document.getElementById("tituloPrincipal").innerText;// IMPRESSAO DE TESTE
console.log(valorTitulo);
//função que altera o conteudo do titulo
function alterarTitulo(){
    document.getElementById("tituloPrincipal").innerText = "titulo alterado com sucesso";
    window.alert("Titulo alterado com sucesso");
    
}
function desfazerAlteracao(){
   document.getElementById("TituloPrincipal").innerHTML = valorTitulo
}