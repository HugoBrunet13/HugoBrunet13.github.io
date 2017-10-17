$(document).ready(function() {


	function RechercherBlock(indexBLock,urlWS){
		$("#numBlock").val()="";
		var retourAjax = AppelWS(indexBLock,urlWS,"#infoBlock");
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

 	function RechercherTransaction(idTransaction,urlWS){
 		$("#numTransac").val()="";
 	// 	var retourAjax = AppelWS(idTransaction,urlWS,"#infoTranscation");
		// var data = retourAjax.responseJSON;
		// console.log(data);
		var data ="hu";
		MiseEnFormeInfoTransaction(data);
 	}

	function RechercherAdresse(adresse,urlWS){
		$("#adresse").val()="";
		// var retourAjax = AppelWS(adresse,urlWS,"#infoAdresse");
		// var data = retourAjax.responseJSON;
		// console.log(data);
		var data ="hu";
		MiseEnFormeInfoAdresse(data);
	}

	function AppelWS(param,urlWS,divResultat){
		var appelAjax = $.ajax({
			url : urlWS+param+"/",
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			type : "GET",
			timeout:	"5000",
			async : false,

			success : function(data) {
				console.log(data);
				return data;
			},

			error : function(xhr, status, err) {
				$(divResultat).append(err+" N/A");
				return null;
			}
		});
		return appelAjax;
	}

	function MiseEnFormeInfoBlock(data){
		//supprimer contenu de la div a chaque nouvel appel
		$("#infoBlock").show();
		$("#infoBlock").append("infoblock1;infoblock2,info3block....");
	}

	function MiseEnFormeInfoTransaction(data){
		//supprimer contenu de la div a chaque nouvel appel
		$("#infoTransaction").show();
		$("#infoTransaction").append("infotransac1;transac2....");
	}

	function MiseEnFormeInfoAdresse(data){
		//supprimer contenu de la div a chaque nouvel appel
		$("#infoAdresse").show();
		$("#infoAdresse").append("infoAdresse;infoAdresse2....");
	}


	function CacherViderDivInfo(){
		$("#infoBlock").hide();
		$("#infoBlock").empty();
		$("#infoTransaction").hide();
		$("#infoTransaction").empty();
		$("#infoAdresse").hide();	
		$("#infoAdresse").empty();	
	}

	CacherViderDivInfo();
	
	$("#boutonRecherche").click(function(){
		if ($("#numBlock").val()!=""){
			CacherViderDivInfo();
			RechercherBlock($("#numBlock").val(),"https://bitcoin.mubiz.com/block/");
		} 
		if($("#numTransac").val()!=""){
			CacherViderDivInfo();
			RechercherTransaction($("#numTransac").val(),"https://bitcoin.mubiz.com/transaction/");
		} 
		if ($("#adresse").val()!=""){
			CacherViderDivInfo();
			RechercherAdresse($("#adresse").val(),"https://bitcoin.mubiz.com/address/");
		}
	});



});