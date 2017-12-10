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
 	 	var retourAjax = AppelWS2(idTransaction,urlWS,"#erreurTransac");
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
			//async : true,

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
		$("#BLOCK_tx0").text('');
		$("#BLOCK_tx1").text('');
		$("#BLOCK_tx2").text('');
		$("#BLOCK_tx3").text('');
		$("#BLOCK_tx4").text('');
		$("#BLOCK_tx5").text('');
		$("#BLOCK_tx6").text('');
		$("#BLOCK_tx7").text('');
		$("#BLOCK_tx8").text('');
		$("#BLOCK_tx9").text('');
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
		$("#ADR_tx0").text('');
		$("#ADR_tx1").text('');
		$("#ADR_tx2").text('');
		$("#ADR_tx3").text('');
		$("#ADR_tx4").text('');
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
			var cpt = 0;
			for (var i = 0; i < 10; i++) {
				$("#BLOCK_tx"+i).append(data.tx[i]);
				cpt = cpt+1;
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
			var cpt = 0;
			for (var i = 0; i < 5; i++) {
				$("#ADR_tx"+i).append(data.txrefs[i]["tx_hash"]);
				cpt = cpt+1;
				if (!data.txrefs[i+1])
					break;
			}
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


	$("#TX_adresses").click(function(){
		console.log("ok");
		CacherDivInfo();
		RechercherAdresse($("#adresse").val(),"https://api.blockcypher.com/v1/btc/main/addrs/");
	});


	$("#BLOCK_tx0").click(function(){
		console.log("ok0");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx0").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx1").click(function(){
		console.log("ok1");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx2").click(function(){
		console.log("ok2");
		CacherDivInfo();	
		RechercherTransaction($("#BLOCK_tx2").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx3").click(function(){
		console.log("ok3");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx3").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx4").click(function(){
		console.log("ok4");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx4").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx5").click(function(){
		console.log("ok5");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx5").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx6").click(function(){
		console.log("ok6");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx6").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx7").click(function(){
		console.log("ok7");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx7").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx8").click(function(){
		console.log("ok8");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx8").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#BLOCK_tx9").click(function(){
		console.log("ok9");
		CacherDivInfo();
		RechercherTransaction($("#BLOCK_tx9").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});

	$("#ADR_tx0").click(function(){
		console.log("okadr0");
		CacherDivInfo();	
		RechercherTransaction($("#ADR_tx0").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#ADR_tx1").click(function(){
		console.log("okadr1");
		CacherDivInfo();	
		RechercherTransaction($("#ADR_tx1").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#ADR_tx2").click(function(){
		console.log("okadr2");
		CacherDivInfo();	
		RechercherTransaction($("#ADR_tx2").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#ADR_tx3").click(function(){
		console.log("okadr3");
		CacherDivInfo();	
		RechercherTransaction($("#ADR_tx3").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});
	$("#ADR_tx4").click(function(){
		console.log("okadr4");
		CacherDivInfo();	
		RechercherTransaction($("#ADR_tx4").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	});

});	