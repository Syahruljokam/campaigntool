
<?php if(user_access('administer')) {?>
<h2>Instructions</h2>

<ol>
<li> Do not link directly to this page!</li>
<li> To use this banner in any node/content use the following tag: <strong>[banner|<?php echo $node->nid;?>]</strong></li>
<li> To use multiple banners append them as follows <strong>[banner|1|20|...|50]</strong>. Seperating each ID with a |</li>
<li> To choose one banner to be shown at random from the list append 'random' to the end of the tag: <strong>[banner|<?php echo $node->nid;?>|...|random]</strong></li>
<li> To randomize the order in which the banners are shown append 'random-set' to the end of the tag: <strong>[banner|<?php echo $node->nid;?>|...|random-set]</strong></li>
</ol>

<a href="/admin/build/block/add">Add Block</a>
<?php }?>
