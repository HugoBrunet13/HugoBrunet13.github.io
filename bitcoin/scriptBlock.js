$(document).ready(function() {
	function RechercherBlock(indexBLock,urlWS){
		$("#Form_idBlock").val('');
		var retourAjax = AppelWS(indexBLock,urlWS);
		var data = retourAjax.responseJSON;
		MiseEnFormeInfoBlock(data);
	}

	function RechercherBlockParHash(hashBlock,urlWS){
		var retourAjax = AppelWS(hashBlock,urlWS);
		var data = retourAjax.responseJSON;
		RechercherBlock(data.height,"https://bitcoin.mubiz.com/block/");
	}


	function AppelWS(param,urlWS){
		var appelAjax = $.ajax({
			url : urlWS+param+"/",
			dataType : "json",
			contentType : "application/json; charset=utf-8",
			type : "GET",
			timeout:"5000",
			async : false,
			success : function(data) {
				
			},
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
	}

	function MiseEnFormeInfoBlock(data){
		console.log("ok00");
		if (data){
			$("#tableBlock").show();
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
				$("#listOfTx").append('<a href="javascript:testblocktx()"><div class="BLOCK_tx">'+data.tx[i]+'</div></a>');
			}
		} else{
			$("#erreurBlock").show();
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