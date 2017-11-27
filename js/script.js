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
		var data = retourAjax.responseJSON;
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
		$("#BLOCK_tx2").text('');
	}

	function ClearResultatTransaction(){
		$("#TX_hash").text('');
		$("#TX_size").text('');
		$("#TX_blockhash").text('');
		$("#TX_confirmations").text('');
		$("#TX_adresses2").text('');
	}

	function ClearResultatAdresse(){
		$("#ADR_adresse").text('');
		$("#ADR_n_tx").text('');
		$("#ADR_n_unredeemed").text('');
		$("#ADR_total_received").text('');
		$("#ADR_total_sent").text('');
		$("#ADR_final_balance").text('');
		$("#ADR_txs2").text('');
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
			for (var i = 0; i < 10; i++) {
				console.log(data.tx[i]);
				$("#BLOCK_tx2").append("<div id=\"BLOCK_tx\" onclick=\"test("+data.tx[i]+")\">"+data.tx[i]+"</div>");	
				if (!data.tx[i+1])
					break;
			}
		} else{
			$("#tableBlock").hide();
		}
	}

	function MiseEnFormeInfoTransaction(data){
		$("#infoTransaction").show();
		$("#tabletransac").show();
		$("#erreurTransac").show();
		if (data){
			console.log(data);
			$("#erreurTransac").hide();
			ClearResultatTransaction();
			$("#TX_hash").append(data.hash);
			$("#TX_size").append(data.size);
			$("#TX_blockhash").append(data.block_hash);
			$("#TX_confirmations").append(data.confirmations);
			for (var i in data.adresses) {
	  			$("#TX_adresses2").append("<div id=\"TX_adresses\">"+data.adresses[i]+"</div>");
			}
		} else{
			$("#tabletransac").hide();
		}
	}

	function MiseEnFormeInfoAdresse(data){
		$("#infoAdresse").show();
		$("#tableadresse").show();		
		if(data.error){
			$("#erreurAdresse").show();
			$("#erreurAdresse").append(data.error);
			$("#infoAdresse").show();
			$("#tableadresse").hide();
		}
		else if(data){
			$("#erreurAdresse").hide();
			ClearResultatAdresse();
			$("#ADR_adresse").append(data.address);
			$("#ADR_n_tx").append(data.n_tx);
			$("#ADR_total_received").append(data.total_received);
			$("#ADR_total_sent").append(data.total_sent);
			$("#ADR_final_balance").append(data.final_balance);
			for (var i in data.txrefs) {
	  			$("#ADR_txs2").append("<div id=\"ADR_txs\">"+data.txrefs[i]["tx_hash"]+"</div>");
			}
		}
	}

	function CacherDivInfo(){
		$("#infoBlock").hide();
		$("#infoTransaction").hide();
		$("#infoAdresse").hide();		
	}

	function test(transac){
		console.log("ok");
		CacherDivInfo();
		RechercherTransaction(transac,"https://api.blockcypher.com/v1/btc/main/txs/");
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
			RechercherTransaction($("#numTransac").val(),"https://api.blockcypher.com/v1/btc/main/txs/");
		} 
		if ($("#adresse").val()!=""){
			CacherDivInfo();
			RechercherAdresse($("#adresse").val(),"https://api.blockcypher.com/v1/btc/main/addrs/");
		}
	});

	$("#TX_blockhash").click(function(){
		CacherDivInfo();
		RechercherBlockParHash($("#TX_blockhash").text(),"https://bitcoin.mubiz.com/block_hash/");
	});
	$("#BLOCK_previousBlockHash").click(function(){
		console.log("ok");
		CacherDivInfo();
		RechercherBlockParHash($("#BLOCK_previousBlockHash").text(),"https://bitcoin.mubiz.com/block_hash/");
	});
	$("#BLOCK_nextBlockHash").click(function(){
		CacherDivInfo();
		RechercherBlockParHash($("#BLOCK_nextBlockHash").text(),"https://bitcoin.mubiz.com/block_hash/");
	});
	$("#ADR_txs").click(function(){
		console.log("ok");
		CacherDivInfo();
		RechercherTransaction($("#ADR_txs").text(),"https://bitcoin.mubiz.com/transaction/");
	});
	$("#BLOCK_tx").click(function(){
		console.log("ok");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});

	$("#TX_adresses").click(function(){
		console.log("ok");
		CacherDivInfo();
		RechercherAdresse($("#adresse").val(),"https://api.blockcypher.com/v1/btc/main/addrs/");
	});


});	