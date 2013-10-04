
 <?php if ($header): ?>
      <?php print $header; ?>
  <?php endif; ?>
  
<?php if ($rows): ?>
    <div class="views-row">
      <?php print $rows; ?>
    </div>
  <?php elseif ($empty): ?>
    <div class="views-row">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>
  

<?php if ($footer): ?>
      <?php print $footer; ?>
  <?php endif; ?>