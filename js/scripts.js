$(document).ready( function(){
	$(".dropdown-button").dropdown();

	$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
    });

	var entry1Name = $('#entry1').attr('data-name');
	$('#entry1').text(entry1Name);
	$('#modal-trigger1').click(function(){
		//console.log($('#modal2 .modal-content h4').val())
		var entry1New = $('#entry1').attr('data-name');
		$('#entry1').text(entry1New);
		$('#modal1 .modal-content h4').text(entry1New);
	});

	$('#modal1 .modal-footer .btn-flat').click(function(){
		var username1 = $("#name1").val();
		//console.log(username2);
		$("#entry1").text(username1);
		$("#entry1").attr("data-name", username1);
		var entry1New = $('#entry1').attr('data-name');
		//console.log(entry2New);
	});

	$('#toast1').click(function(){
		Materialize.toast('Reset', 4000, 'rounded');
		$("#entry1").attr("data-name", entry1Name);
		$('#entry1').text(entry1Name);
		$('#modal1 .modal-content h4').text(entry1Name);
	});




	var entry2Name = $('#entry2').attr('data-name');
	$('#entry2').text(entry2Name);
	$('#modal-trigger2').click(function(){
		//console.log($('#modal2 .modal-content h4').val())
		var entry2New = $('#entry2').attr('data-name');
		$('#entry2').text(entry2New);
		$('#modal2 .modal-content h4').text(entry2New);
	});

	$('#modal2 .modal-footer .btn-flat').click(function(){
		var username2 = $("#name2").val();
		//console.log(username2);
		$("#entry2").text(username2);
		$("#entry2").attr("data-name", username2);
		var entry2New = $('#entry2').attr('data-name');
		//console.log(entry2New);
	});

	$('#toast2').click(function(){
		Materialize.toast('Reset', 4000, 'rounded');
		$("#entry2").attr("data-name", entry2Name);
		$('#entry2').text(entry2Name);
		$('#modal2 .modal-content h4').text(entry2Name);
	});


	var entry3Name = $('#entry3').attr('data-name');
	$('#entry3').text(entry3Name);
	$('#modal-trigger3').click(function(){
		//console.log($('#modal2 .modal-content h4').val())
		var entry3New = $('#entry3').attr('data-name');
		$('#entry3').text(entry3New);
		$('#modal3 .modal-content h4').text(entry3New);
	});

	$('#modal3 .modal-footer .btn-flat').click(function(){
		var username3 = $("#name3").val();
		//console.log(username2);
		$("#entry3").text(username3);
		$("#entry3").attr("data-name", username3);
		var entry3New = $('#entry3').attr('data-name');
		//console.log(entry2New);
	});

	$('#toast3').click(function(){
		Materialize.toast('Reset', 4000, 'rounded');
		$("#entry3").attr("data-name", entry3Name);
		$('#entry3').text(entry3Name);
		$('#modal3 .modal-content h4').text(entry3Name);
	});
	

});