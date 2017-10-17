$(document).ready(function() {

	$(".input-group-addon").click(function(){
		console.log("ntm");
		console.log($(".form-control").val());





		$.ajax({
			url : "https://bitcoin.mubiz.com/block/"+$(".form-control").val()+"/",
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			type : "GET",
			timeout:	"5000",
			async : false,

			success : function(data) {
				console.log(data);
				$('#ReponseWS').append(data.size);
			},

			error : function(xhr, status, err) {
				$('#ReponseWS').append(err+" N/A");
			}
		});
	});
});