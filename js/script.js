$(document).ready(function() {


	function RechercherBlock(indexBLock,urlWS){
		$("#numBlock").val('');
		var retourAjax = AppelWS(indexBLock,urlWS,"#infoBlock");
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

 	function RechercherTransaction(idTransaction,urlWS){
 		$("#numTransac").val('');
 	 	var retourAjax = AppelWS(idTransaction,urlWS,"#infoTransaction");
		var data = retourAjax.responseJSON;
	 	console.log(data);
		MiseEnFormeInfoTransaction(data);
 	}

	function RechercherAdresse(adresse,urlWS){
		$("#adresse").val('');
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
				
			},

			error : function(xhr, status, err) {
				$(divResultat).append(err+" N/A");
			}
		});
		return appelAjax;
	}

	function ClearResultatBlock(){
		$("#BLOCK_hash").val('');
		$("#BLOCK_confirmation").val('');
		$("#BLOCK_size").val('');
		$("#BLOCK_weight").val('');
		$("#BLOCK_height").val('');
		$("#BLOCK_version").val('');
		$("#BLOCK_time").val('');
		$("#BLOCK_medianTime").val('');
		$("#BLOCK_difficulty").val('');
		$("#BLOCK_previousBlockHash").val('');
		$("#BLOCK_nextBlockHash").val('');
		$("#BLOCK_tx").val('');
	}

	function MiseEnFormeInfoBlock(data){
		ClearResultatBlock();
		$("#infoBlock").show();

		$("#BLOCK_hash").append(data.hash);
		$("#BLOCK_confirmation").append(data.confirmation);
		$("#BLOCK_size").append(data.size);
		$("#BLOCK_weight").append(data.weight);
		$("#BLOCK_height").append(data.height);
		$("#BLOCK_version").append(data.version);
		$("#BLOCK_time").append(data.time);
		$("#BLOCK_medianTime").append(data.mediantime);
		$("#BLOCK_difficulty").append(data.difficulty);
		$("#BLOCK_previousBlockHash").append(data.previousblockhash);
		$("#BLOCK_nextBlockHash").append(data.nextblockhash);
		//$("#BLOCK_tx").append(data.tx);
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
		// $("#infoBlock").empty();
		$("#infoTransaction").hide();
		// $("#infoTransaction").empty();
		$("#infoAdresse").hide();	
		// $("#infoAdresse").empty();	
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