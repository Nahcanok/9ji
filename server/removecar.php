<?php
$con = mysqli_connect("127.0.0.1", "root", "", "9ji");
$goodid = $_REQUEST["goodsid"];
$sql = "DELETE FROM cart WHERE goodsid='$goodid'";
mysqli_query($con, $sql);
?>