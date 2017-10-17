$(document).ready(function() {


	function RechercherBlock(indexBLock){
		console.log(indexBLock);
	}

 	function RechercherTransaction(idTransaction){
 		console.log(idTransaction);
 	}

	function RechercherAdresse(adresse){
		console.log(adresse);
	}


	// function AppelWS(param){

	// }

	$("#boutonRecherche").click(function(){
		if ($("#numBlock").val()!=null){
			RechercherBlock($("#numBlock").val());
		} else if($("#numTransac").val()!=null){
			RechercherTransaction($("#numTransac").val());
		} else if ($("#adresse").val()!=null){
			RechercherAdresse($("#adresse").val());
		}
	});





	// $(".input-group-addon").click(function(){
	// 	console.log("ntm");
	// 	console.log($(".form-control").val());


	// 	$.ajax({
	// 		url : "https://bitcoin.mubiz.com/block/"+$(".form-control").val()+"/",
	// 		dataType : "json",
	// 		contentType : "application/json; charset=utf-8",
	// 		type : "GET",
	// 		timeout:	"5000",
	// 		async : false,

	// 		success : function(data) {
	// 			console.log(data);
	// 			$('#ReponseWS').append(data.hash);
	// 		},

	// 		error : function(xhr, status, err) {
	// 			$('#ReponseWS').append(err+" N/A");
	// 		}


	// 		//supprimer le contenu de la div d'affiche a chaque clik sur lle bouton
	// 	});
	// });
});