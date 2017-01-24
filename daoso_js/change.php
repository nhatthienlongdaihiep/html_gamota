<?php 
	if(isset($_GET['num'])){
		$num = $_GET['num'];
		$arr = explode(' ', $num);
		$rand_num = $arr;
		shuffle($rand_num);
		echo"<input type='text' name='num_1' id='num_1' size='5' value='$rand_num[0]'>  ";
		echo "<input type='text' name='num_2' id='num_2' size='5' value='$rand_num[1]'>  ";
		echo "<input type='text' name='num_3' id='num_3' size='5' value='$rand_num[2]'>  ";
		echo "<br><br>";
		echo "<input type='submit' name='change' class='change' value='OK' onclick='change_num()'>";
	}
?>