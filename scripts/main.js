segundos_erro = 6;

/* Change value and text of DropDown by Escolaridade*/

$('.dropdown-menu li').click(function(){
    value =  $(this).text();
    $("#placeholder_escolaridade").text(value);
    $("#escolaridade").val(value);
});


/*CADASTRO */
$("#form_cadastro").validate({

     submitHandler: function(form) {
        var dados = $(form).serialize();

        $.ajax({
            type: "POST",
            url: "php/setAluno.php",
            data: dados,
            success: function(data)
            {
                if(data == "1"){
                    cadastro_sucesso();
                }else{
                    cadastro_erro();
                    conta_refress();
                }

            },
            error: function(data)
            {
                cadastro_erro();
                conta_refress();
            }
        });

        return false;
    }
});


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

cadastro_sucesso = function(){

   $("#form_cadastro").html(

       "<div class='nota'>A sua inscrição foi realizada com sucesso! Aguarde a lista dos selecionados " +
                          "que será publicada nos canais de comunicação.</div>"
   );

};

cadastro_erro = function(){

    $("#form_cadastro").html(

        "<div class='nota'>Houve um problema na sua inscrição! " +
            "Sua página será atualizada em <label id='erro_seg'>"+segundos_erro+"</label> segundo(s).</div>"
    );

}


conta_refress = function(){
    if(segundos_erro>0){
        segundos_erro--;
        cadastro_erro();
        setTimeout("conta_refress()", 1000);
    }else{
        location.reload();
    }


};