<?php if(user_access("administer nodes")){?>

<h2>Instructions</h2>

<ol>
<li> Do not link directly to this page!</li>
<li> To use this album in any node/content use the following tag: <strong>[album|<?php echo $node->nid;?>]</strong></li>
</ol>

<?php //print_r($node);?>

<h2>Album content</h2>

<div>
<p>
<?php if($node->field_album_thumbnail_image['und'][0]['uri'] != ""){?>
Thumbnail: <a href="<?php echo file_create_url($node->field_album_thumbnail_image['und'][0]['uri']);?>"><?php echo file_create_url($node->field_album_thumbnail_image['und'][0]['uri']);?></a>
<?php }else{?>
Thumbnail: None 
<?php }?>
<br />
Thumbnail Caption: <?php echo $node->field_album_thumbnail_caption['und'][0]['value'];?></p>

<h3>Images:</h3>
<?php 
if(count($node->field_album_images['und']) > 0){
	foreach($node->field_album_images['und'] as $index => $anImage){
		echo '<p>Image: <a href="' . file_create_url($anImage['uri']) . '">' . file_create_url($anImage['uri']) . '</a><br />Caption: ' . $anImage['title'] . '</p>' . "\n";
	}
}else{
	echo '<p>No Images have beend added to the album.</p>';
}
?></p>

<div>
Preview:
<?php echo tlm_album_render_album($node->nid,1);?>
</div>
</div>



<?php }else{?>

	<?php echo tlm_album_render_album($node->nid,1);?>

<?php }?>