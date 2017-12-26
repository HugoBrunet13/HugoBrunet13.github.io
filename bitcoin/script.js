$(document).ready(function() {


	function GetURLParameter(sParam)
	{
		var sPageURL = window.location.search.substring(1);
		var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++)
		{
			var sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] == sParam)
			{
				return sParameterName[1];
			}
		}
	}​


	$("#BoutonRechercheBLock").click(function(){
		if($("#idBlock").val()!=""){
			window.location.href="block.html"+"?idBlock="+ $("#idBlock").val();
		}
	});

	// function RechercherBlock(indexBLock,urlWS){
	// 	$("#Form_idBlock").val('');
	// 	window.location.href="block.html";
	// 	console.log("HUgo");
	// 	var retourAjax = AppelWS(indexBLock,urlWS,"#erreurblock");
	// 	console.log("HUgo");
	// 	var data = retourAjax.responseJSON;
	// 	MiseEnFormeInfoBlock(data);
	// }

	// function RechercherBlockParHash(hashBlock,urlWS){
	// 	var retourAjax = AppelWS(hashBlock,urlWS,"#erreurblock");
	// 	var data = retourAjax.responseJSON;
	// 	RechercherBlock(data.height,"https://bitcoin.mubiz.com/block/");
	// }

 // 	function RechercherTransaction(idTransaction,urlWS){
 // 		$("#numTransac").val('');
 // 	 	var retourAjax = AppelWS2(idTransaction,urlWS,"#erreurTransac");
	// 	var data = retourAjax.responseJSON;
	// 	MiseEnFormeInfoTransaction(data);
 // 	}
 	
	// function RechercherAdresse(adresse,urlWS){
 // 		$("#adresse").val('');
 // 	 	var retourAjax = AppelWS2(adresse,urlWS,"#erreurAdresse");
	// 	var data = retourAjax.responseJSON;
	// 	MiseEnFormeInfoAdresse(data);
	// }

	// function AppelWS(param,urlWS,divErreur){
	// 	var appelAjax = $.ajax({
	// 		url : urlWS+param+"/",
	// 		dataType : "json",
	// 		contentType : "application/json; charset=utf-8",
	// 		type : "GET",
	// 		timeout:"5000",
	// 		async : false,
	// 		success : function(data) {
				
	// 		},
	// 		error : function(xhr, status, err) {
	// 			$(divErreur).text('');
	// 			$(divErreur).append(err);
	// 		}
	// 	});
	// 	return appelAjax;
	// }


	// function AppelWS2(param,urlWS,divErreur){
	// 	var appelAjax = $.ajax({
	// 		url : urlWS+param,
	// 		dataType : "json",
	// 		contentType : "application/json; charset=utf-8",
	// 		type : "GET",
	// 		timeout:"5000",
	// 		async : false,
	// 		success : function(data) {
				
	// 		},
	// 		error : function(xhr, status, err) {
	// 			$(divErreur).text('');
	// 		}
	// 	});
	// 	return appelAjax;
	// }

	// function ClearResultatBlock(){
	// 	$("#BLOCK_hash").text('');
	// 	$("#BLOCK_confirmation").text('');
	// 	$("#BLOCK_size").text('');
	// 	$("#BLOCK_weight").text('');
	// 	$("#BLOCK_height").text('');
	// 	$("#BLOCK_version").text('');
	// 	$("#BLOCK_previousBlockHash").text('');
	// 	$("#BLOCK_nextBlockHash").text('');
	// 	$(".BLOCK_tx").text('');
	// }

	// function ClearResultatTransaction(){
	// 	$("#TX_hash").text('');
	// 	$("#TX_size").text('');
	// 	$("#TX_blockheight").text('');
	// 	$("#TX_confirmations").text('');
	// 	$("#TX_adr0").text('');
	// 	$("#TX_adr1").text('');
	// }

	// function ClearResultatAdresse(){
	// 	$("#ADR_adresse").text('');
	// 	$("#ADR_n_tx").text('');
	// 	$("#ADR_total_received").text('');
	// 	$("#ADR_total_sent").text('');
	// 	$("#ADR_final_balance").text('');
	// 	$(".ADR_tx").text('');
	// }

	// function MiseEnFormeInfoBlock(data){
	// 	$("#infoBlock").show();
	// 	$("#tableBlock").show();
	// 	$("#erreurblock").show();
	// 	if (data){
	// 		$("#erreurblock").hide();
	// 		ClearResultatBlock();
	// 		$("#BLOCK_hash").append(data.hash);
	// 		$("#BLOCK_confirmation").append(data.confirmations);
	// 		$("#BLOCK_size").append(data.size);
	// 		$("#BLOCK_weight").append(data.weight);
	// 		$("#BLOCK_height").append(data.height);
	// 		$("#BLOCK_version").append(data.version);
	// 		$("#BLOCK_previousBlockHash").append(data.previousblockhash);
	// 		$("#BLOCK_nextBlockHash").append(data.nextblockhash);
	// 		//var cpt = 0;
	// 		console.log(data.tx.length); 
	// 		for (var i = 0; i < data.tx.length; i++) {
	// 			$("#listOfTx").append('<a href="javascript:testblocktx()"><div class="BLOCK_tx">'+data.tx[i]+'</div></a>');
	// 			// cpt = cpt+1;
	// 			// if (!data.tx[i+1])
	// 			// 	break;
	// 		}
	// 	} else{
	// 		$("#tableBlock").hide();
	// 	}
	// }

	// function MiseEnFormeInfoTransaction(data){
	// 	$("#infoTransaction").show();
	// 	$("#tabletransac").show();
	// 	$("#erreurTransac").show();
	// 	if (!data.error && data){
	// 		$("#erreurTransac").hide();
	// 		ClearResultatTransaction();
	// 		$("#TX_hash").append(data.hash);
	// 		$("#TX_size").append(data.size);
	// 		$("#TX_blockheight").append(data.block_height);
	// 		$("#TX_confirmations").append(data.confirmations);
	// 		$("#TX_adr0").append(data.addresses[0]);
	// 		$("#TX_adr1").append(data.addresses[1]);
	// 	} else{
	// 		$("#erreurTransac").append(data.error);
	// 		$("#tabletransac").hide();
	// 	}
	// }

	// function MiseEnFormeInfoAdresse(data){
	// 	$("#infoAdresse").show();
	// 	$("#tableadresse").show();
	// 	if(data.error){
	// 		$("#erreurAdresse").show();
	// 		$("#erreurAdresse").append(data.error);
	// 		$("#infoAdresse").show();
	// 		$("#tableadresse").hide();
	// 	}
	// 	else if(data){
	// 		$("#erreurAdresse").hide();
	// 		ClearResultatAdresse();
	// 		$("#ADR_adresse").append(data.address);
	// 		$("#ADR_hash").append(data.hash160);
	// 		$("#ADR_n_tx").append(data.n_tx);
	// 		$("#ADR_total_received").append(data.total_received);
	// 		$("#ADR_total_sent").append(data.total_sent);
	// 		$("#ADR_final_balance").append(data.final_balance);
	// 		var cpt = 0;
	// 		for (var i = 0; i < 5; i++) {
	// 			$("#ADR_tx"+i).append(data.txrefs[i]["tx_hash"]);
	// 			cpt = cpt+1;
	// 			if (!data.txrefs[i+1])
	// 				break;
	// 		}
	// 	}
	// }

	// function testblocktx(){
	// 	console.log("youououououou");
	// }
	

	// //----------------------------------------------------------------------------
	// //CacherDivInfo();	


	// $("#boutonRecherche").click(function(){
	// 	if ($("#numBlock").val()!=""){
	// 		//CacherDivInfo();
	// 		// window.open("block.html");
	// 		//load("block.html");
	// 		RechercherBlock($("#numBlock").val(),"https://bitcoin.mubiz.com/block/");
	// 	} 
	// 	if($("#numTransac").val()!=""){
	// 		//CacherDivInfo();
	// 		window.open("transaction.html");
	// 		// loadPage("transaction.html")
	// 		// RechercherTransaction($("#numTransac").val(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// 	} 
	// 	if ($("#adresse").val()!=""){
	// 		window.open("adresse.html");
	// 		// CacherDivInfo();
	// 		// loadPage("adresse.html");
	// 		// RechercherAdresse($("#adresse").val(),"https://api.blockcypher.com/v1/btc/main/addrs/");
	// 	}
	// });


	// $("#TX_blockheight").click(function(){
	// 	CacherDivInfo();
	// 	RechercherBlock($("#TX_blockheight").text(),"https://bitcoin.mubiz.com/block/");
	// });
	// $("#BLOCK_previousBlockHash").click(function(){
	// 	CacherDivInfo();
	// 	RechercherBlockParHash($("#BLOCK_previousBlockHash").text(),"https://bitcoin.mubiz.com/block_hash/");
	// });
	// $("#BLOCK_nextBlockHash").click(function(){
	// 	CacherDivInfo();
	// 	RechercherBlockParHash($("#BLOCK_nextBlockHash").text(),"https://bitcoin.mubiz.com/block_hash/");
	// });



	// $("#BLOCK_tx0").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx0").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx1").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx2").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherTransaction($("#BLOCK_tx2").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx3").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx3").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx4").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx4").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx5").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx5").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx6").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx6").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx7").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx7").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx8").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx8").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#BLOCK_tx9").click(function(){
	// 	CacherDivInfo();
	// 	RechercherTransaction($("#BLOCK_tx9").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });




	// $("#TX_adr0").click(function(){
	// 	CacherDivInfo();
	// 	RechercherAdresse($("#TX_adr0").val(),"https://api.blockcypher.com/v1/btc/main/addrs/");
	// });
	// $("#TX_adr1").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherAdresse($("#TX_adr0").val(),"https://api.blockcypher.com/v1/btc/main/addrs/");
	// });



	// $("#ADR_tx0").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherTransaction($("#ADR_tx0").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#ADR_tx1").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherTransaction($("#ADR_tx1").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#ADR_tx2").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherTransaction($("#ADR_tx2").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#ADR_tx3").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherTransaction($("#ADR_tx3").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });
	// $("#ADR_tx4").click(function(){
	// 	CacherDivInfo();	
	// 	RechercherTransaction($("#ADR_tx4").text(),"https://api.blockcypher.com/v1/btc/main/txs/");
	// });





	$("#BoutonRechercheTx").click(function(){
		if($("#hashTx").val()!=""){
			window.location.href="transaction.html"+"?hashTx="+ $("#hashTx").val();
		}
	});
	$("#BoutonRechercheAddress").click(function(){
		if($("#address").val()!=""){
			window.location.href="adresse.html"+"?address="+ $("#address").val();
		}
	});



	// function test(){
	// 	console.log("testmaggl");
	// }


});	