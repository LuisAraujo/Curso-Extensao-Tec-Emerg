/* Change value and text of DropDown by Escolaridade*/
$('.dropdown-menu li').click(function(){
    value =  $(this).text();
    $("#placeholder_escolaridade").text(value);
    $("#escolaridade").val(value);
});


/*CADASTRO
$("#form_cadastro").validate({

     submitHandler: function(form) {
        var dados = $(form).serialize();

        $.ajax({
            type: "POST",
            url: "php/setAluno.php",
            data: dados,
            success: function(data)
            {
                if(data=="1"){
                    cleanForm();
                    //MSG CADRASTRADO
                }else if(data=="0"){
                    cleanForm();
                    alert("entrou");
                    //MSG NAO CADASTRADO -> N de vagas >
                }

            },
            error: function(data)
            {
                alert("erro");
            }
        });
        alert("saiu");
        return false;
    }
});
*/

//Limpa formulario inscricao
cleanForm = function(){

    $("#nome").val("");
    $("#cpf").val("");
    $("#email").val("");
    $("#cidade").val("");
    $("#instituicao").val("");
    $("#placeholder_escolaridade").text("Escolaridade");
    $("#drop_escolaridade").text("none");

};



$("#form_cadastro").submit( function(event){
    console.log("dddd");
    $.ajax({
        type: "POST",
        url: "php/setAluno.php",
        data: data,
        success: function(data)
        {
            alert(data);
        },
        error: function(data)
        {
            alert("erro");
        }
    });

});