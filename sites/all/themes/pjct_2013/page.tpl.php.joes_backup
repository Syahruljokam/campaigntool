
<div id="topOfPageAnchorContainer"><a id="topOfPage" name="topOfPage"></a></div><!-- /#topOfPageAnchorContainer -->
	
<div id="header">
<!-- <div id="logoContainer"><a href="<?php echo $header_logo_link_url;?>"><img id="logo" src="<?php echo check_url($logo) ?>" alt=" <?php echo $header_logo_alt_text;?> " title=" <?php echo $site_name;?> " /></a></div>-->
<div id="logoContainer"><a href="/">Peter Julian <span>Member of Parliament, Burnaby-New Westminster<br />Official Opposition Energy &amp; Natural Resources Critic</span></a><!-- /#logoContainer --></div>
	
	
<hr class="header" />
	<?php print render($page['header']); ?>		
	
<div id="startOfContentLinkContainer"><ul><li><a id="startOfContentLink" class="startOfContentLink" href="#startOfContent">Skip to content</a></li></ul></div><!-- /#startOfContentLinkContainer -->
        <?php
        	require_once '_menu_processor.php';			
        	$menuXML = generateXML();	//also used in footer
			doMenu("primaryNav", MENUP_DONT_WRITE_ALL_MENU_ITEMS, MENUP_MENU_DATA_STRING,MENUP_MENU_HTML_COMPACT,$menuXML);

        ?>
        <ul id="utilityNav">
			<li class="utilityNav">
				<?php if($language->language != 'en'){?><a class="utilityNav" href="?language=en">English</a><?php }?>
				<?php if($language->language != 'fr'){?><a class="utilityNav" href="?language=fr">Fran&ccedil;ais</a><?php }?>
			</li>
			<?php if($page['take_action']){?><li class="utilityNav"><a class="utilityNav" href="#takeAction">Take Action</a></li><?php }?>
		</ul>
	
	
<?php if($page['take_action']){?>	
<div id="takeAction">
	<?php echo render($page['take_action']);?>
</div>
<?php }?>
	
<div id="search">
<?php echo render($page['search_form']);?>
</div>


<?php if($page['social_media']){?>	
<div id="socialMediaLinks">
	<?php echo render($page['social_media']);?>
</div>
<?php }?>


<hr class="header" />
</div><!-- /#header -->
	
<div id="startOfContentAnchorContainer"><a id="startOfContent" name="startOfContent"></a></div><!-- /#startOfContentAnchorContainer -->
	
<div id="content">
	
	
<!-- ~~~~~~~~~~~~~~~~~~~~~ Content begins here ~~~~~~~~~~~~~~~~~~~~~ -->
            
	<!-- 
    <?php if ($breadcrumb): ?>
      <div id="breadcrumb"><?php print $breadcrumb; ?></div>
    <?php endif; ?>
    -->

    <?php print $messages; ?>

  
  	<?php if($is_front){?>
	<div class="subColumnContainer clearBoth">
		<div class="subColumn3">
			<?php echo render($page['home_left']);?>
		</div>
		
		<div class="subColumn3">
			<?php echo render($page['home_middle']);?>
		</div>
		
		<div class="subColumn3">
			<?php echo render($page['home_right']);?>
		</div>
	</div>
	<?php }?>


        <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>
        <a id="main-content"></a>
        <?php print render($title_prefix); ?>
        <?php if ($title ): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
        <?php print render($title_suffix); ?>
        <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
        <?php print render($page['help']); ?>
        <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
        <?php print render($page['content']); ?>
        <?php print $feed_icons; ?>

  
      <?php if ($page['left']): ?>
        <div id="leftColumn" class="column sidebar">
          <?php print render($page['left']); ?>
        </div>
      <?php endif; ?>

      <?php if ($page['right']): ?>
        <div id="rightColumn" class="column sidebar">
          <?php print render($page['right']); ?>
        </div>
      <?php endif; ?>



<?php if($page['content_lower']){?>	
<div id="contentLower">
	<?php echo render($page['content_lower']);?>
</div>
<?php }?>


<!-- ~~~~~~~~~~~~~~~~~~~~~~ Content ends here ~~~~~~~~~~~~~~~~~~~~~~ -->
</div>



	<div id="footer">
	<hr class="footer" />
	
	<?php print render($page['footer']); ?>
	
	<?php if ($footer_show_copyright) { ?>
		<div id="copyright"><p><?php if($footer_show_copyright_text){echo $copyright_text;} ?></p>
		 	<?php if($footer_logo_url != ""){?>
		 		<img id="footerLogo" src="<?php echo $footer_logo_url; ?>" alt=" <?php echo $copyright_text ?> " title=" <?php echo $copyright_text ?> " />
		 	<?php }?>
		 </div><!-- /#copyright --> 
	<?php } ?>


	<ul id="footerUtilityNav">
		<li><a class="footerUtilityNav" href="#topOfPage">Top</a></li>
		<li><a class="footerUtilityNav" href="/privacy_policy.html">Privacy Policy</a></li>
		<!-- li><a class="footerUtilityNav" href="/site_credits.html">Site Credits</a></li -->
	<!-- /#footerUtilityNav --></ul>
	
	
	<?php 
	require_once '_menu_processor.php';
	doMenu("footerNav", MENUP_DONT_WRITE_ALL_MENU_ITEMS, MENUP_MENU_DATA_STRING,MENUP_MENU_HTML_COMPACT,$menuXML);
	?>
	
	
	<div id="JavaScriptWarning"><?php echo $footer_javascriptWarning;?></div><!-- /#JavaScriptWarning -->
	
	</div><!-- /#footer -->
