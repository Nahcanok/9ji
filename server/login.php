<?php

$username=$_REQUEST["username"];
$password=$_REQUEST["password"];


$db= mysqli_connect("127.0.0.1","root","","9ji");
$sql= "SELECT * FROM user WHERE username=\"$username\"";
$result = mysqli_query($db,$sql);
$data = array("status"=>"error","data"=>array("msg"=>"注册失败"));

if(mysqli_num_rows($result)==1)
{
$dataT=mysqli_fetch_all($result,MYSQLI_ASSOC);
if($password==$dataT[0]["password"]){
    $id=$dataT[0]["id"];
    $data["status"]="success";
    $data["userid"]=$id;
    $data["data"]["msg"]="登录成功";
    echo json_encode($data,true);
}else{
    $data["status"]="error";
    $data["data"]["msg"]="登录失败，密码错误";
    echo json_encode($data,true);
}
}else{
    $data["status"]="error";
    $data["data"]["msg"]="登录失败，用户名不存在！";
    echo json_encode($data,true);
}
?>