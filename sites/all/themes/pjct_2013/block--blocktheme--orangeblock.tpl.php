<div class="styled orangeBlock <?php echo isset($blocktheme_vars) ?  $blocktheme_vars['classes'] : '';?>">
	<?php if ($block->subject): ?>
	  <h2 ><?php print $block->subject ?></h2>
	<?php endif;?>

	<?php echo $content;?>
</div>