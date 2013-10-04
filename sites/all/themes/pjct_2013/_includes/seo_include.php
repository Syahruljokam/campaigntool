<?php 
// ~~~~~~~~~~~~~~~~~~~~~~~ SEO Include,  ~~~~~~~~~~~~~~~~~~~~~~~


if($ga_show && $ga_id){ //variables come from drupal template file
	
	if($ga_version == "newer"){
	?>
		<script type="text/javascript">		
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', '<?php echo $ga_id;?>']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		
		</script>
	
	<?php 
	}else if($ga_version == 'new'){
	?>
		<script type="text/javascript"><!--
		var gaJsHost = (('https:' == document.location.protocol) ? 'https://ssl.' : 'http://www.');
		if (document.write) { document.write(unescape('%3Cscript src="' + gaJsHost + 'google-analytics.com/ga.js" type="text/javascript"%3E%3C/script%3E')); };
		//--></script>
		
		<script type="text/javascript"><!--
		try { var pageTracker = _gat._getTracker('<?php echo $ga_id;?>'); pageTracker._trackPageview(); } catch(err) {};
		//--></script>
	
<?php 
	}else{
?>
		<script type="text/javascript" src="http://www.google-analytics.com/urchin.js"></script>
		<script type="text/javascript"><!--
			_uacct = '<?php echo $ga_id;?>';
			urchinTracker();
		//--></script>

<?php 		
	}
} ?>