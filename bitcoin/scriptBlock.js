$(document).ready(function() {
	function RechercherBlock(indexBLock,urlWS){
		$("#idBlock").val('');
		var retourAjax = AppelWS(indexBLock,urlWS);
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

	function RechercherBlockParHash(hashBlock,urlWS){
		var retourAjax = AppelWS(hashBlock,urlWS);
		var data = retourAjax.responseJSON;
		RechercherBlock(data.height,"https://bitcoin.mubiz.com/block/");
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
		$("#listOfTx").text('');
	}

	function MiseEnFormeInfoBlock(data){
		if (data){
			document.getElementById('tableBlock').style.visibility = 'visible';
			ClearResultatBlock();
			$("#BLOCK_hash").append(data.hash);
			$("#BLOCK_confirmation").append(data.confirmations);
			$("#BLOCK_size").append(data.size);
			$("#BLOCK_weight").append(data.weight);
			$("#BLOCK_height").append(data.height);
			$("#BLOCK_version").append(data.version);
			$("#BLOCK_previousBlockHash").append('<a href="block.html?hashBlock='+data.previousblockhash+'">'+data.previousblockhash+'</a>');
			$("#BLOCK_nextBlockHash").append('<a href="block.html?hashBlock='+data.nextblockhash+'">'+data.nextblockhash+'</a>');
			for (var i = 0; i < data.tx.length; i++) {
				$("#listOfTx").append('<a href="transaction.html?hashTx='+data.tx[i]+'">'+data.tx[i]+'</a>');
			}
		} else{
			document.getElementById('erreurBlock').style.visibility = 'visible';
			$("#erreurBlock").append("Error: block not find");
		}
	}

	//----------------------------------------------------------------------------

	if (GetURLParameter('idBlock')){
		RechercherBlock(GetURLParameter('idBlock'),"https://bitcoin.mubiz.com/block/");
	}
	else if(GetURLParameter('hashBlock')){
		RechercherBlockParHash(GetURLParameter('hashBlock'),"https://bitcoin.mubiz.com/block_hash/");
	}

});	