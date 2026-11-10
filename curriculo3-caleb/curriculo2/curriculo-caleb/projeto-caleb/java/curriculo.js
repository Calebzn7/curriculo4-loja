const editarBotao = document.getElementById("editar");
const sairBotao = document.getElementById("sair");
const areaFormulario = document.getElementById("areaFormulario");
const cancelarBotao = document.getElementById("cancelar");


editarBotao.addEventListener("click", function () {
    areaFormulario.hidden = !areaFormulario.hidden;
});


cancelarBotao.addEventListener("click", function () {
    areaFormulario.hidden = true;
});


sairBotao.addEventListener("click", function () {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        areaFormulario.hidden = true; 

        
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "center";
    }
});



