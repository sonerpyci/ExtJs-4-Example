<?php
$con = mysqli_connect("localhost", "root", "", "deneme");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

  $arr = array(


    );


  $query = "SELECT * FROM Users";

 

  if ($result=mysqli_query($con,$query))
  {
  // Fetch one and one row
  while ($row=mysqli_fetch_assoc($result))
    {
    array_push($arr, $row);
    }
  // Free result set
  mysqli_free_result($result);
}

$arr2 = array(
	"items" => $arr
	);
echo json_encode($arr2);

  
?>