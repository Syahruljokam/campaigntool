<?php 
//Fix for Drupal not setting up a session for anonymous users, and thus "loosing" track of the language session setting.
if (isset ($_GET['language'])){
    $_SESSION['language']=$_GET['language'];
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language; ?>" version="XHTML+RDFa 1.0" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?> lang="<?php print $language->language; ?>">
<head profile="<?php print $grddl_profile; ?>">


  <?php print $head; ?>
  <?php require_once "_includes/meta_include.php"; ?>
  
  <title><?php print $head_title; ?></title>
  
  <link type="text/css" href="/_codewise/codewise_common.css" rel="stylesheet" />
  <?php print $styles ?>
  
  <script type="text/javascript" src="/_codewise/codewise_global.js"></script>
  <script type="text/javascript" src="/_codewise/<?php echo $codewise_skin_name;?>_global.js"></script>
  
		
<script type="text/javascript"><!--
	var aPI_loaded = false;
	var aPI_queue = new Array();

	function aPI(){
		setTimeout('aPI2()',1000);	//aPI is called a tiny bit quicker than when its done re-flowing the page.
	}	
	
	function aPI2() {
		 for (i in aPI_queue) {
	        eval(aPI_queue[i]);
	        delete(aPI_queue[i]); // cleanup after ourselves
	    }

		 aPI_loaded = true;
	};

	function when_aPI_ready(callback) {
	    // skip the queue if the skin has already completed
	    if (aPI_loaded == true)
	        eval(callback);
	    else {
	    	aPI_queue.push(callback);
	    }
	}
//-->

	<?php if($is_front){?>
	pageType = 'fullWidth';
	<?php }?>
</script>
	
<?php print $scripts ?> 	
<script type="text/javascript" >var $ = jQuery.noConflict();	//bring back $</script>
<script type="text/javascript" src="/_codewise/codewise_master.js"></script>
	
<?php //require_once('_includes/flash_detection_include.php');?>
	
	 
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
	
	
<!-- ~~~~~~~~~~~~~~~~~~~ Local style definitions ~~~~~~~~~~~~~~~~~~~ -->
	
<style type="text/css" media="screen">
<!-- 
	
-->
</style>
	
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->


</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>
 
  <?php print $page_top; ?>
  <?php print $page; ?>
  
  
  <?php print $page_bottom; ?>    
</body>
</html>