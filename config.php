<?php
//	****** DATABASE SETTINGS ******
$sqlhostname = "localhost";
$sqlusername = "root";
$sqlpassword = "calcio14";
$sqldb = "test";

define("PATH", "http://localhost/");
define("CLOSING", true); //Chiusura hotel dalle 02:00 alle 08:00
define("DATABASE", "phoenix");
define("PANEL_KEY", "figoo");

//  ****** APP ID & SECRET FACEBOOK *********
define("APP_ID", "137426253110688");
define("APP_SECRET", "0d36cbf33d19b4b320a1988ea994aa16");

//  ****** RPX API KEY (FOR GOOGLE) *********
define("RPX_API_KEY", "32df64f50df1d2493a28f239179008e48445e2be");

// ******* SITE SETTINGS *********
define("TWITTER_NAME", "habluxitalia");

$enable_status_image = "0";

//	****** BADGES ******
$cimagesurl = "http://images-eussl.habbo.com/c_images/";
$badgesurl = "album1584/";

//	****** EMAIL VERIFY ******
$email['verify'] = false;
$email['forced_verify'] = false;
$email['reward'] = 500;

date_default_timezone_set("Europe/Rome"); 
?>