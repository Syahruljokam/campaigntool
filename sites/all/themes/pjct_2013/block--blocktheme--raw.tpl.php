<?php /*<div class="contextual-links-region"><?php  print render($title_suffix); ?></div> */  //doesnt seem to work with the codewise skin reflow. ?>
<?php if ($block->subject): ?>
  <h2 ><?php print $block->subject ?></h2>
<?php endif;?>
<?php echo $content;?>