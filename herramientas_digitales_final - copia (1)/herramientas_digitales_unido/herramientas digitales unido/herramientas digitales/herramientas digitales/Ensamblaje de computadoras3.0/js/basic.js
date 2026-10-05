jQuery(function ($) {
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();
		return false;
	});
		$('#basic-modal2 .basic').click(function (e) {
		$('#basic-modal-content2').modal();
		return false;
	});
});