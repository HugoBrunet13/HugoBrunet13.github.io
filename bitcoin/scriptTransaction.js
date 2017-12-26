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
			$("#TX_blockheight").append('<a href="block.html?idBlock='+data.block_height+'">'+data.block_height+'</a>'); //todo lien vers block
			$("#TX_confirmations").append(data.confirmations);
			for (var i = 0; i < data.addresses.length; i++) {
		 		$("#listAdr").append('<a href="adresse.html?address='+data.addresses[i]+'">'+data.addresses[i]+'</a><br>');
			 }
		} else{
			document.getElementById('erreurTransac').style.visibility = 'visible';
			$("#erreurTransac").append(data.error);
		}
	}

	if (GetURLParameter('hashTx')){
		RechercherTransaction(GetURLParameter('hashTx'),"https://api.blockcypher.com/v1/btc/main/txs/");
	}

});	