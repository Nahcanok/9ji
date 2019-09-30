<?php
$id=$_POST['userid'];
$db=mysqli_connect("127.0.0.1","root","","9ji");
$sql = "SELECT * FROM user where id=$id";
$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
$response=array("status"=>"success","data"=>$data);
echo json_encode($response,true);
?>