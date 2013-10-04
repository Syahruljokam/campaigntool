<?php /* Smarty version 2.6.27, created on 2013-10-03 08:35:08
         compiled from CRM/Form/attachmentjs.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'ts', 'CRM/Form/attachmentjs.tpl', 8, false),array('function', 'crmURL', 'CRM/Form/attachmentjs.tpl', 13, false),)), $this); ?>
<script type="text/javascript">
<?php echo '
  function hideStatusAttachment( divName ) {
    cj( divName ).hide( );
  }

  function showDeleteAttachment( fileName, postURLData, fileID, divName, divFile ) {
    var confirmMsg = \'<div>'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Are you sure you want to delete attachment: <?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '\' + fileName + \'&nbsp; <a href="#" onclick="deleteAttachment( \\\'\' + postURLData + \'\\\',\' + fileID + \',\\\'\' + divName + \'\\\', \\\'\' + divFile + \'\\\' ); return false;" style="text-decoration: underline;">'; ?>
</div><div><?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Yes<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="hideStatusAttachment( \\\'\' + divName + \'\\\' ); return false;" style="text-decoration: underline;">'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>No<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '</a></div>\';
    cj( divName ).show( ).html( confirmMsg );
  }

  function deleteAttachment( postURLData, fileID, divName, divFile ) {
    var postUrl = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/file/delete','h' => 0), $this);?>
"<?php echo ';
    cj.ajax({
      type: "POST",
      data:  postURLData,
      url: postUrl,
      success: function(html){
        var resourceBase   = '; ?>
"<?php echo $this->_tpl_vars['config']->resourceBase; ?>
"<?php echo ';
        var successMsg = \''; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>The selected attachment has been deleted.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '\';
        cj(divFile + \',\' + divName).hide();
        CRM.alert(successMsg, \''; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Removed<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '\', \'success\');
      }
    });
  }
'; ?>

</script>