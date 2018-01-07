/**
 *
 *	Todas as configurações necessárias para o desenvolvimento BACK-END, estarão aqui;
 *
 **/

$(document).ready(function () {
    $.ajaxSetup({
        headers: {'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')}
    });

    /* Fomulário de login validação */
    $("#formLogar").validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            username: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 6
            },
        },
        messages: {
            email: {
                required: 'Digite seu email',
                email: 'Este e-mail não é valido',
            },
            username: {
                required: 'Digite seu email',
                email: 'Este e-mail não é valido',
            },
            password: {
                required: 'Preencha sua senha',
                minlength: 'A sua senha deve conter no mínimo 6 caracteres'
            },
        },
        errorElement: 'span',
        errorClass: 'msg',
        highlight: function (element) {
            $(element).parent().addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).parent().removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    jQuery.validator.addMethod("validPassword", function(value, element) {
      return this.optional( element ) || /^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,16}$/.test( value );
    }, 'A senha deve ter de 8 a 16 dígitos, contendo números e letras maiúsculas e minúsculas.');

    jQuery.validator.addMethod("validEmail", function(value, element) {
            return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }, 'E-mail inválido.');

    /* Fomulário de cadastro */
    $('#formCadastrar').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                validEmail: true,
            },
            password: {
                required: true,
                validPassword: true
            },
            password_confirmation: {
                required: true,
                equalTo: "#senhaNovaCad"
            }
        },
        messages: {
            name: {
                required: "Digite seu nome"
            },
            email: "Digite seu email",
            password: {
                required: "Preencha sua senha",
                rangelength: "A sua senha deve conter de 8 a 16 caracteres"
            },
            password_confirmation: {
                required: "Este campo não pode ficar vazio",
                equalTo: "As senhas devem ser compatíveis."
            }
        },
        errorElement: 'span',
        errorClass: 'msg',
        highlight: function (element) {
            $(element).parent().addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).parent().removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $('.bmp-tabs ul li button').on('click', function (e) {
        e.preventDefault();

        $(this).parents('.bmp-tabs').find('button').removeClass('active');
        $(this).addClass('active');

        $($(this).data('target')).removeClass('hidden').addClass('hidden');
        $($(this).data('content')).removeClass('hidden');
    });

    $('#formCadastrar').on('submit', function () {

        var dados, url, form, perfil;

        form = $(this),
                dados = form.serialize(),
                url = form.attr('action');

        if (form.find('#perfil').val() == 'usuario')
            return;
        
        $("#btnCadastrar").attr('disabled', true);

        $.ajax({
            url: url,
            type: 'POST',
            data: dados,
            success: function (response) {
                 window.location.replace(response.url_string);
            }
        });

        return false;
    });

});

/*

 [Combinamos de deixar sem ajax por enquanto]

 $('#formCadastrarAnunciante').on('submit', function(){
 var datas = $(this).serialize();
 var url = $(this).attr('action');

 $('#btnCadastrarAnunciante').attr('disabled');

 $.ajax({
 url: url,
 type: 'POST',
 data: datas,
 success: function(response){
 $('#btnCadastrarAnunciante').removeAttr('disabled');
 },
 error: function(){

 }
 })

 return false;
 });
 */
function getMessage(message, type) {
    return '<div class="flash-message"><div class="alert alert-' + type + ' alert-dismissable"><a href="#close" class="close" data-dismiss="alert" aria-label="close">&times;</a>' + message + '</div></div>';
}

function setFavorito(el, codigoImovel) {
    $.ajax({
        url: APP_URL + '/favoritos/set',
        type: 'POST',
        data: {'codigoImovel': codigoImovel},
        headers: {'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
        success: function (data) {
            $(el).removeAttr('onclick').attr('onclick', 'unsetFavorito(this, "' + codigoImovel + '")');
        }
    });
}

function unsetFavorito(el, codigoImovel) {
    $.ajax({
        url: APP_URL + '/favoritos/del',
        type: 'POST',
        data: {'codigoImovel': codigoImovel},
        headers: {'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
        success: function (data) {
            $(el).removeAttr('onclick').attr('onclick', 'setFavorito(this, "' + codigoImovel + '")');
        }
    });
}

/**
 *	Alterar número de forma dinâmica
 **/

var timeOutSearch;

function atualizaDinamico() {
 /* sem ajax desativado função de contagem de imóveis
    var recebeCount = $('#recebe_count');
    var recebeFrase = $('#recebe_frase');

    clearTimeout(timeOutSearch);

    timeOutSearch = setTimeout(function () {
        var dados = $("#pesquisaImovel_form").serialize();

        search = $.ajax({
            url: APP_URL + "/web-service/imoveis/count",
            type: 'POST',
            data: dados,
            success: function (data) {
                recebeCount.html(data.countImoveis);
                recebeFrase.html(data.frase);

                if (data.countImoveis == 0) {
                    // $('#btnBuscar').attr('disabled', true);
                } else {
                    if (isChecked) {
                        $('#btnBuscar').removeAttr('disabled');
                    }
                }
            }
        });
    }, 1000);
    */
}
