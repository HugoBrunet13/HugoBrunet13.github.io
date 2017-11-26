$(document).ready(function() {

	function RechercherBlock(indexBLock,urlWS){
		$("#numBlock").val('');
		var retourAjax = AppelWS(indexBLock,urlWS,"#erreurblock");
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

	function RechercherBlockParHash(hashBlock,urlWS){
		var retourAjax = AppelWS(	hashBlock,urlWS,"#erreurblock");
		var data = retourAjax.responseJSON;
		RechercherBlock(data.height,"https://bitcoin.mubiz.com/block/");
	}

 	function RechercherTransaction(idTransaction,urlWS){
 		$("#numTransac").val('');
 	 	var retourAjax = AppelWS(idTransaction,urlWS,"#erreurTransac");
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoTransaction(data);
 	}

	function RechercherAdresse(adresse,urlWS){
 		$("#adresse").val('');
 	 	var retourAjax = AppelWS2(adresse,urlWS,"#erreurAdresse");
 	 	console.log(retourAjax);
		var data = retourAjax.responseJSON;
		console.log("data:"+data);
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

	function AppelWS2(param,urlWS,divErreur){
		var appelAjax = $.ajax({
			url : urlWS+param,
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			type : "GET",
			timeout: "5000",
			async : false,

			success : function(data) {
				
			},

			error : function(xhr, status, err) {
				$(divErreur).text('');
				$(divErreur).append(err);
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
		$("#BLOCK_previousBlockHash").text('');
		$("#BLOCK_nextBlockHash").text('');
		$("#BLOCK_tx").text('');
	}

	function ClearResultatTransaction(){
		$("#TX_txid").text('');
		$("#TX_hash").text('');
		$("#TX_size").text('');
		$("#TX_version").text('');
		$("#TX_blockhash").text('');
		$("#TX_confirmation").text('');
	}

	function ClearResultatAdresse(){
		$("#ADR_hash160").text('');
		$("#ADR_adresse").text('');
		$("#ADR_n_tx").text('');
		$("#ADR_n_unredeemed").text('');
		$("#ADR_total_received").text('');
		$("#ADR_total_sent").text('');
		$("#ADR_final_balance").text('');
		$("#ADR_txs").text('');
	}

	function MiseEnFormeInfoBlock(data){
		$("#infoBlock").show();
		$("#tableBlock").show();
		$("#erreurblock").show();
		if (data){
			$("#erreurblock").hide();
			ClearResultatBlock();
			$("#BLOCK_hash").append(data.hash);
			$("#BLOCK_confirmation").append(data.confirmations);
			$("#BLOCK_size").append(data.size);
			$("#BLOCK_weight").append(data.weight);
			$("#BLOCK_height").append(data.height);
			$("#BLOCK_version").append(data.version);
			$("#BLOCK_previousBlockHash").append(data.previousblockhash);
			$("#BLOCK_nextBlockHash").append(data.nextblockhash);
			var listeTx="";
			for (var i = 0; i < 10; i++) {
				listeTx = listeTx+data.tx[i]+"\r\n";
				if (!data.tx[i+1])
					break;
			}
			$("#BLOCK_tx").append(listeTx);	
		} else{
			$("#tableBlock").hide();
		}
	}

	function MiseEnFormeInfoTransaction(data){
		$("#infoTransaction").show();
		$("#tabletransac").show();
		$("#erreurTransac").show();
		if (data){
			$("#erreurTransac").hide();
			ClearResultatTransaction();
			$("#TX_txid").append(data.txid);
			$("#TX_hash").append(data.hash);
			$("#TX_size").append(data.size);
			$("#TX_version").append(data.version);
			$("#TX_blockhash").append(data.blockhash);
			$("#TX_confirmations").append(data.confirmations);
		} else{
			$("#tabletransac").hide();
		}
	}

	function MiseEnFormeInfoAdresse(data){
		console.log("dans mise en forme");
		$("#infoAdresse").show();
		$("#tableadresse").show();
		$("#erreurAdresse").show();
		if (data){
			console.log("dans le si");
			$("#erreurAdresse").hide();
			ClearResultatAdresse();
			$("#ADR_hash160").append(data.hash160);
			$("#ADR_adresse").append(data.adresse);
			$("#ADR_n_tx").append(data.n_tx);
			$("#ADR_total_received").append(data.total_received);
			$("#ADR_total_sent").append(data.total_sent);
			$("#ADR_final_balance").append(data.final_balance);
			//$("#ADR_txs").append(data.txs);
		} else{
			console.log("dans mise le else");
			$("#tableadresse").hide();
		}
	}

	function CacherDivInfo(){
		$("#infoBlock").hide();
		$("#infoTransaction").hide();
		$("#infoAdresse").hide();		
	}

	

	//----------------------------------------------------------------------------


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
			RechercherAdresse($("#adresse").val(),"https://blockchain.info/fr/rawaddr/");
		}
	});

	$("#TX_blockhash").click(function(){
		CacherDivInfo();
		RechercherBlockParHash($("#TX_blockhash").text(),"https://bitcoin.mubiz.com/block_hash/");
	});
	$("#BLOCK_previousBlockHash").click(function(){
		CacherDivInfo();
		RechercherBlockParHash($("#BLOCK_previousBlockHash").text(),"https://bitcoin.mubiz.com/block_hash/");
	});
	$("#BLOCK_nextBlockHash").click(function(){
		CacherDivInfo();
		RechercherBlockParHash($("#BLOCK_nextBlockHash").text(),"https://bitcoin.mubiz.com/block_hash/");
	});
});	