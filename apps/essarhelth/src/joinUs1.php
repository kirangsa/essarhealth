<?php
// Define some constants
define( "RECIPIENT_NAME", "esssarhealthcare" );
define( "RECIPIENT_EMAIL", "kiran.gsa@gmail.com" );
//define( "RECIPIENT_EMAIL", "remyamr036@gmail.com" );
$mailto = RECIPIENT_EMAIL;
$subject = "Careers form from ".RECIPIENT_NAME;
// Read the form values
$success = false;
$json = file_get_contents('php://input');
$params = json_decode($json);
$userName = $params->firstName;
$senderEmail = $params->email;
$phone = $params->phone;

$fileName=$params->cv->name;
$fileSize=$params->cv->size/1024;
$fileType=$params->cv->type;
$fileTmpName=$params->cv->lastModified;

  //if($fileType=="application/msword"){
    //if($fileSize<=200){

      //New file name
      $random=rand(1111,9999);
      $newFileName=$random.$fileName;

      //File upload path
      $uploadPath= $_SERVER[DOCUMENT_ROOT]."/resumes/".$newFileName;

      //function for upload file
      if(move_uploaded_file($fileTmpName,$uploadPath)){
     //   echo "Successful";
      //  echo "File Name :".$newFileName;
     //   echo "File Size :".$fileSize." kb";
     //   echo "File Type :".$fileType;
      }
   // }
    //else{
    //  echo "Maximum upload file size limit is 200 kb";
    //}
  //}
// else{
  //  echo "You can only upload a Word doc file.";
  //}




// If all values exist, send the email
if ( $userName && $senderEmail && $phone) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
 // $headers = "From: " . $userName . "";
  $msgBody = " Name: ". $userName ." \r\n Email: ". $senderEmail ."\r\n Phone: " . $phone . "\r\n Location: " . $params->location  . "\r\n locum: " . $params->locum .  "" ;


 $content = file_get_contents($uploadPath);
    $content = chunk_split(base64_encode($content));


    // a random hash will be necessary to send mixed content
    $separator = md5(time());

    // carriage return type (RFC)
    $eol = "\r\n";

    // main header (multipart mandatory)
    //$headers = "From: ". $recipient ."" . $eol;
  //  $headers .= "MIME-Version: 1.0" . $eol;
  //  $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
   // $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
   // $headers .= "This is a MIME encoded message." . $eol;

     $headers = "MIME-Version: 1.0\r\n"; // Defining the MIME version
    $headers .= "From:".$recipient."\r\n"; // Sender Email
    $headers .= "Reply-To: ".$recipient."\r\n"; // Email addrress to reach back
    $headers .= "Content-Type: multipart/mixed;"; // Defining Content-Type
    $headers .= "boundary = $separator\r\n"; //Defining the Boundary


    // message
    //$body = "--" . $separator . $eol;
   // $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
   // $body .= "Content-Transfer-Encoding: 8bit" . $eol;
   // $body .= $msgBody . $eol;


       //plain text
    $body = "--$separator\r\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($msgBody));

    // attachment
  //  $body .= "--" . $separator . $eol;
 //   $body .= "Content-Type: application/octet-stream; name=\"" . $newFileName . "\"" . $eol;
  //  $body .= "Content-Transfer-Encoding: base64" . $eol;
   // $body .= "Content-Disposition: attachment" . $eol;
   // $body .= $content . $eol;
   // $body .= "--" . $separator . "--";


    $body .= "--$separator\r\n";
    $body .="Content-Type: $fileType; name=".$newFileName."\r\n";
    $body .="Content-Disposition: attachment; filename=".$newFileName."\r\n";
    $body .="Content-Transfer-Encoding: base64\r\n";
    $body .="X-Attachment-Id: ".rand(1000, 99999)."\r\n\r\n";
    $body .= $content; // Attaching th

// echo  $body;die;


 $success = mail($mailto, $subject, $body, $headers);
 if($success)
	{
		echo "success";
	}
	else
	{
		echo "error";
	}
}

else{
    //Set Location After Unsuccesssfull Submission
	echo "error";

}
?>
