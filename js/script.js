$(document).ready(function() {
	$.ajax({
		url : " https://bitcoin.mubiz.com/blocks",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#ReponseWS').append(data.blocks);
		},

		error : function(xhr, status, err) {
			$('#ReponseWS').append(err+" N/A");
		}
	});
});
	