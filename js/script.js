$(document).ready(function() {


	function RechercherBlock(indexBLock,urlWS){
		console.log(indexBLock);
		$data = AppelWS(indexBLock,urlWS);
		console.log($data);
	}

 	function RechercherTransaction(idTransaction,urlWS){
 		console.log(idTransaction);
 	}

	function RechercherAdresse(adresse,urlWS){
		console.log(adresse);
	}




	$("#boutonRecherche").click(function(){
		if ($("#numBlock").val()!=null){
			RechercherBlock($("#numBlock").val(),"https://bitcoin.mubiz.com/block/");
		} else if($("#numTransac").val()!=null){
			RechercherTransaction($("#numTransac").val(),"https://bitcoin.mubiz.com/transaction/");
		} else if ($("#adresse").val()!=null){
			RechercherAdresse($("#adresse").val(),"https://bitcoin.mubiz.com/address/");
		}
	});



	function AppelWS(param,urlWS){
		$.ajax({
			url : urlWS+param+"/",
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			type : "GET",
			timeout:	"5000",
			async : false,

			success : function(data) {
				return data;
			},

			error : function(xhr, status, err) {
				$('#ReponseWS').append(err+" N/A");
			}
		});
	}



	// $(".input-group-addon").click(function(){
	// 	console.log("ntm");
	// 	console.log($(".form-control").val());


		// $.ajax({
		// 	url : "https://bitcoin.mubiz.com/block/"+$(".form-control").val()+"/",
		// 	dataType : "json",
		// 	contentType : "application/json; charset=utf-8",
		// 	type : "GET",
		// 	timeout:	"5000",
		// 	async : false,

		// 	success : function(data) {
		// 		console.log(data);
		// 		$('#ReponseWS').append(data.hash);
		// 	},

		// 	error : function(xhr, status, err) {
		// 		$('#ReponseWS').append(err+" N/A");
		// 	}


	// 		//supprimer le contenu de la div d'affiche a chaque clik sur lle bouton
	// 	});
	// });
});