<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Đảo Vị Trí Số</title>
	<script src="js/jquery-1.9.1.min.js"></script>
	<script>
		/*$(document).ready(function(){
			$("#change").click(function(){
				var num1 = $("#num_1").val();
				var num2 = $("#num_2").val();
				var num3 = $("#num_3").val();
				num = num1+ ' '+ num2+' '+num3;
				$.ajax({
					type: "get",
					url: "change.php",
					data: "num="+ num,
            		async: true,
					success: function(result){
						$(".show").html(result);
					}
				});
			});
		});*/
		function change_num(){
			var num1 = $("#num_1").val();
			var num2 = $("#num_2").val();
			var num3 = $("#num_3").val();
			num = num1+ ' '+ num2+' '+num3;
			$.ajax({
				type: "get",
				url: "change.php",
				data: "num="+ num,
        		async: true,
				success: function(result){
					$(".show").html(result);
				}
			});
		}
	</script>
</head>
<body>
	<div class="show" style="text-align:center; margin-top:50px;">
		<input type="text" name="num_1" id="num_1" size="5">
		<input type="text" name="num_2" id="num_2" size="5">
		<input type="text" name="num_3" id="num_3" size="5">
		<br><br>
		<input type="submit" name="change" class="change" onclick="change_num()" value="OK">
	</div>
</body>
</html>