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

	function AppelWS(param,urlWS,divErreur){
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
				$(divErreur).text('');
				$(divErreur).append(err+" N/A");
			}
		});
		return appelAjax;
	}

	function ClearResultatBlock(){
		$("#BLOCK_hash").text('');
		$("#BLOCK_confirmation").text('');
		$("#BLOCK_size").text('');
		$("#BLOCK_weight").text('');
		$("#BLOCK_height").text('');
		$("#BLOCK_version").text('');
		$("#BLOCK_time").text('');
		$("#BLOCK_medianTime").text('');
		$("#BLOCK_difficulty").text('');
		$("#BLOCK_previousBlockHash").text('');
		$("#BLOCK_nextBlockHash").text('');
		$("#BLOCK_tx").text('');
	}

	function MiseEnFormeInfoBlock(data){
		ClearResultatBlock();
		$("#infoBlock").show();
		if ( data){
			console.log("dans le if");
			$("#BLOCK_hash").append(data.hash);
			$("#BLOCK_confirmation").append(data.confirmations);
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


	function CacherDivInfo(){
		$("#infoBlock").hide();
		$("#infoTransaction").hide();
		$("#infoAdresse").hide();		
	}

	CacherDivInfo();
	
	$("#boutonRecherche").click(function(){
		if ($("#numBlock").val()!=""){
			CacherDivInfo();
			RechercherBlock($("#numBlock").val(),"https://bitcoin.mubiz.com/block/");
		} 
		if($("#numTransac").val()!=""){
			CacherDivInfo();
			RechercherTransaction($("#numTransac").val(),"https://bitcoin.mubiz.com/transaction/");
		} 
		if ($("#adresse").val()!=""){
			CacherDivInfo();
			RechercherAdresse($("#adresse").val(),"https://bitcoin.mubiz.com/address/");
		}
	});



});