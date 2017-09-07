<?php
$con = mysqli_connect("localhost", "root", "", "deneme");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }



$query = "UPDATE `users` SET `name` = '".$_POST['name']."', `surname` = '".$_POST['surname']."', `phone` = '".$_POST['phone']."' WHERE `users`.`id` = '".$_POST['id']."'";

$result = mysqli_query($con, $query);




//$query = "DELETE FROM Users WHERE id-";



 ?>