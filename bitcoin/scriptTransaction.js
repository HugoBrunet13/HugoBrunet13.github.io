$(document).ready(function() {
	function RechercherTransaction(idTransaction,urlWS){
 		$("#hashTx").val('');
 	 	var retourAjax = AppelWS2(idTransaction,urlWS);
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoTransaction(data);
 	}

 	function ClearResultatTransaction(){
		$("#TX_hash").text('');
		$("#TX_size").text('');
		$("#TX_blockheight").text('');
		$("#TX_confirmations").text('');
		$("#listAdr").text('');
	}

	function MiseEnFormeInfoTransaction(data){
		if (!data.error && data){
			document.getElementById('tableTransac').style.visibility = 'visible';
			ClearResultatTransaction();
			$("#TX_hash").append(data.hash);
			$("#TX_size").append(data.size);
			$("#TX_blockheight").append(data.block_height);
			$("#TX_confirmations").append(data.confirmations);
			//Todo list Adresse
		} else{
			document.getElementById('erreurTransac').style.visibility = 'visible';
			$("#erreurTransac").append(data.error);
		}
	}

	if (GetURLParameter('hashTx')){
		RechercherTransaction(GetURLParameter('hashTx'),"https://api.blockcypher.com/v1/btc/main/txs/");
	}

});	