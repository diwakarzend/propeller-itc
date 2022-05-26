<?php 
$headers  = "From: testsite <mishraravi32@gmail.com>\n";
$headers .= "Cc: testsite <jugnu321@gmail.com>\n"; 
$headers .= 'X-Mailer: PHP/' . phpversion();
$headers .= "X-Priority: 1\n"; // Urgent message!
$headers .= "Return-Path: dwkrupadhyay@@gmail.com\n"; // Return path for errors
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
if(isset($_POST)){
	$subject = "Some one submit query".
	$message ="<p>Hi<br>, Find the vistor detial are below </p>";
	$message .="Name : ".$_POST['Name']."<br>";
	$message .="Email : ".$_POST['Email']."<br>";
	$message .="Mobile : ".$_POST['Mobile']."<br>";
	$message .="Message : ".$_POST['Message']."<br>";
	mail('mishraravi32@gmail.com',$subject,$message,$headers);
}
