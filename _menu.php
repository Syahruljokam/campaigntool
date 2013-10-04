<?php 


define('DRUPAL_ROOT', './');
require_once DRUPAL_ROOT . '/includes/bootstrap.inc';
drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);


if($_REQUEST['JS'] == 1){
	header('Content-type: application/json');
	if(isset($_REQUEST['DEBUG']) && $_REQUEST['DEBUG'] == 1){
		$debug = true;
	}else{
		$debug = false;
	}
	echo "menuDataCallback(" . generateJSON($debug) . ");";
	
}else{
	header('Content-type: text/xml');
	echo generateXML(NULL, $_GET['menuid'], $_GET['menuidoverride']);
	
}
?>