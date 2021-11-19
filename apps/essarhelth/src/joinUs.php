<?php
// Define some constants
define( "RECIPIENT_NAME", "esssarhealthcare" );
define( "RECIPIENT_EMAIL", "info@essarhealthcare.ie" );


switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");
        $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
        $mailto = RECIPIENT_EMAIL;
        $json = file_get_contents('php://input');

        $params = json_decode($json);
			  $message = "<strong>Name: </strong>".$params->firstName."<br />";
        $message .= "<strong>Last Name: </strong>".$params->lastName."<br />";
        $message .= "<strong>Email Address: </strong>".$params->email."<br />";
        $message .= "<strong>Phone: </strong>".$params->phone."<br />";
        $message .= "<strong>Location: </strong>".$params->location."<br />";
        $message .= "<strong>locum: </strong>".$params->locum."<br />";
        $subject = 'Job Request';

        $headers = "From:".$recipient."\r\n"; // Sender Email
        $headers .= "Bcc:kiran.gsa@gmail.com\r\n"; // Sender Email
        $headers .= "Reply-To: ".$recipient."\r\n"; // Email addrress to reach back

        $headers .= "MIME-Version: 1.0" . "\r\n";
			  $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";

        mail($mailto, $subject, $message, $headers);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
