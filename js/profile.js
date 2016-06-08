'use strict'

var profile = {
	edit: function(id){
			$('.collection-item .row .col span').text(id);
			$('#modal .modal-content h4').text(id);
			$('.modal-trigger').attr('data-name', id);
	},
	cancel: function(){
		Materialize.toast('Reset', 4000, 'rounded');
	}
};