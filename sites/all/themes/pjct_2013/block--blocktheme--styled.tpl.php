<div class="styled <?php echo $blocktheme_vars['classes'];?>">
	<?php if ($block->subject): ?>
	  <h2 ><?php print $block->subject ?></h2>
	<?php endif;?>

	<?php echo $content;?>
</div>