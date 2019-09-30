<?php
$con = mysqli_connect("127.0.0.1","root","","9ji");
$goodsid=$_REQUEST["goodsid"];
$price=$_REQUEST["price"];

$sql = "SELECT * FROM  cart WHERE goodsid = '$goodsid'";
$result = mysqli_query($con,$sql);
$row = mysqli_num_rows($result);

if($row==0){
    $insetSql = "INSERT INTO `cart` (`cartid`, `goodsid`, `num`, `price`,`total`,`isActive`) 
    VALUES (NULL, '$goodsid', 1, '$price','$price',1)";
    mysqli_query($con,$insetSql);
}elseif($row == 1){
    /* 002-购物车中已经存在该商品  更新数据 */
    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
    $num = $data[0]["num"];
    $total = $data[0]["price"] * $num;
 
    /* 更新 */
    $updateSql = "UPDATE cart SET num='$num',total='$total' WHERE goodsid=' $goodsid'";
    mysqli_query($con, $updateSql);
 }

$totalCount = "SELECT * FROM  cart";
$result = mysqli_query($con, $totalCount);
$row = mysqli_num_rows($result);
echo '{"totalRow":'.$row.'}';
?>