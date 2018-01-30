;(function(){
	// http://localhost/seminor/ajax/echo.php にアクセス
	$.ajax({
        url:'./echo.php',
        type:'POST'
    })
    .done(function(res){
    	$("#target").html(res);
    })
    .fail(function(){
    	$("#target").html("error");
    });
})();