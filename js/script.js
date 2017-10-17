$(document).ready(function() {


	function RechercherBlock(indexBLock,urlWS){
		var retourAjax = AppelWS(indexBLock,urlWS,"#infoBlock");
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

 	function RechercherTransaction(idTransaction,urlWS){
 		var retourAjax = AppelWS(indexBLock,urlWS,"#infoTranscation");
		var data = retourAjax.responseJSON;
		console.log(data);
		MiseEnFormeInfoTransaction(data);
 	}

	function RechercherAdresse(adresse,urlWS){
		var retourAjax = AppelWS(indexBLock,urlWS,"#infoAdresse");
		var data = retourAjax.responseJSON;
		console.log(data);
		MiseEnFormeInfoAdresse(data);
	}

	function AppelWS(param,urlWS,divResultat){
		console.log("dans la fonction appel ws");
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
		$("#infoBlock").show();
		$("#infoBlock").append("info1;info2,info3....");
	}

	function MiseEnFormeInfoTransaction(data){
		$("#infoTransaction").show();
	}

	function MiseEnFormeInfoAdresse(data){
		$("#infoAdresse").show();
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