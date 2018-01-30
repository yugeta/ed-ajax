;(function(){
	// http://localhost/seminor/ajax/echo.php にアクセス
	$$MYNT_AJAX({
	    url : "./echo.php",
	    onSuccess:function(res){
	        document.getElementById("target").innerHTML = res;
	    }
	});
})();