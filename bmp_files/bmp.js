//Script responsável por gerar a variável de referência do site para fechar um escopo das função
// Aqui serão armazenados todas as funções genéricas do site. 
var bmp = {};

bmp.ui = {
	init: function() {
		$('.date').mask('00/00/0000');
		$('.month_year').mask('00/0000');
		$('.time').mask('00:00:00');
		$('.hour_min').mask('00:00');
		$('.date_time').mask('00/00/0000 00:00:00');
		$('.cep').mask('00000-000');
		$('.phone').mask('0000-0000');
		$('.cel_with_ddd').mask('(00) 00000-0000');
		$('.phone_with_ddd').mask('(00) 0000-0000');
		$('.phone_with_country').mask('+55 (00) 00000-0000');
		$('.mixed').mask('AAA 000-S0S');
		$('.cpf').mask('000.000.000-00');
		$('.cnpj').mask('00.000.000/0000-00');
		$('.money').mask('000.000.000.000.000,00', {reverse: true});
		$('.number').mask('000000', {reverse: true});		
	},
	
	changeModal: function(e, parent, newModal) {
		if($(e).closest(parent).length > 0) {
			if ($(e).hasClass('opened')){
				$(newModal).removeClass('hidden');

			} else {
				$(newModal).attr({'data-backdrop': false, prevModal: parent});
				$(newModal).modal('show'); 
				$(e).addClass('opened');				
			}
			$(parent).addClass('hidden');
		} else {
			$(newModal).modal('show');
		}
	},

	closeModal: function(e, parent, newModal) {
	
		if($(e).closest(parent).length > 0) {
			if (!newModal == '') {
				$(parent).addClass('hidden');
				$(newModal).removeClass('hidden'); 
			} else {
				$(parent).modal('hide');
			}
		} else {
			$(parent).modal('hide');
		}
	},

	dismissPopover: function (e) {
		$(e).popover('destroy');
	},

	addThousandSeparator: function (number) {
	    var v = number.toString().replace(/\D/g, "");
	    v = v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	    return v;
	},

	runTo : function(target, space) {
		$('html,body').animate({
            scrollTop: $(target).offset().top - space
        }, 800);
	},

	searchAddress: function(e){
		console.log(e);

		$(e).autocomplete({
	        source: function (request, response) {
	            geocoder.geocode({ 'address': request.term + ', Brasil', 'region': 'BR' }, function (results, status) {
	                response($.map(results, function (item) {
	                    return {
	                        label: item.formatted_address,
	                        value: item.formatted_address,
	                        latitude: item.geometry.location.lat(),
	                        longitude: item.geometry.location.lng()
	                    }
	                }));
	            })
	        },
	        select: function (event, ui) {
	            $("#txtLatitude").val(ui.item.latitude);
	            $("#txtLongitude").val(ui.item.longitude);
	            var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
	            marker.setPosition(location);
	            map.setCenter(location);
	            map.setZoom(16);
	        }
	    });		
	},

	formatReal: function (x){
	    var xString = x.toString();
	    var decimal = xString.substr(xString.length - 2, xString.length);
	    var parts = xString.replace(/(\d)(\d{2})$/, "$1").split(".");
	    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	    if (xString.length > 2)
	        return parts.join(".") + "," + decimal;
	    else if(xString.length == 2)
	        return "0," + parts.join(".") 
	    else
	        return "0,0" + parts.join(".")  
	}
}