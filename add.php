<?php
$con = mysqli_connect("localhost", "root", "", "deneme");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }



$query = "INSERT INTO `users` ( `name`, `surname`, `phone`) VALUES ('".$_POST['name']."', '".$_POST['surname']."', '".$_POST['phone']."')";
																	//"($_POST['name'], $_POST['surname'], $_POST['phone'])";
$result = mysqli_query($con, $query);

echo json_encode(["success" => true]);


 ?>





