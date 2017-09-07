<?php
$con = mysqli_connect("localhost", "root", "", "deneme");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }






$query = 'DELETE FROM `Users` WHERE id= ' . $_POST['data'] . ' LIMIT 1';

//$query = "DELETE FROM Users WHERE id-";

try {
    mysqli_query($con,$query);
}
catch (MySQLDuplicateKeyException $e) {
    // duplicate entry exception
    $e->getMessage();
}
catch (MySQLException $e) {
    // other mysql exception (not duplicate key entry)
    $e->getMessage();
}
catch (Exception $e) {
    // not a MySQL exception
    $e->getMessage();
}



 ?>