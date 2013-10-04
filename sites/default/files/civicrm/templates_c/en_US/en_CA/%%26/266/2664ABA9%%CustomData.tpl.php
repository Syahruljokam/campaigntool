<?php /* Smarty version 2.6.27, created on 2013-10-04 13:12:21
         compiled from CRM/Contact/Form/Edit/CustomData.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'cat', 'CRM/Contact/Form/Edit/CustomData.tpl', 33, false),array('block', 'ts', 'CRM/Contact/Form/Edit/CustomData.tpl', 56, false),array('function', 'crmURL', 'CRM/Contact/Form/Edit/CustomData.tpl', 87, false),array('function', 'crmKey', 'CRM/Contact/Form/Edit/CustomData.tpl', 90, false),)), $this); ?>

<script type="text/javascript">var showTab = Array();</script>

<?php $_from = $this->_tpl_vars['groupTree']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['group_id'] => $this->_tpl_vars['cd_edit']):
?>

<?php if ($this->_tpl_vars['cd_edit']['is_multiple'] == 1): ?>
  <?php $this->assign('tableID', $this->_tpl_vars['cd_edit']['table_id']); ?>
  <?php $this->assign('divName', ((is_array($_tmp=$this->_tpl_vars['group_id'])) ? $this->_run_mod_handler('cat', true, $_tmp, "_".($this->_tpl_vars['tableID'])) : smarty_modifier_cat($_tmp, "_".($this->_tpl_vars['tableID'])))); ?>
  <div></div>
  <div id="<?php echo ((is_array($_tmp=$this->_tpl_vars['cd_edit']['name'])) ? $this->_run_mod_handler('cat', true, $_tmp, '_$divName') : smarty_modifier_cat($_tmp, '_$divName')); ?>
"
       class="crm-accordion-wrapper crm-custom-accordion <?php if ($this->_tpl_vars['cd_edit']['collapse_display'] && ! $this->_tpl_vars['skipTitle']): ?>collapsed<?php endif; ?>">
<?php else: ?>
  <div id="<?php echo $this->_tpl_vars['cd_edit']['name']; ?>
"
       class="crm-accordion-wrapper crm-custom-accordion <?php if ($this->_tpl_vars['cd_edit']['collapse_display']): ?>collapsed<?php endif; ?>">
<?php endif; ?>
    <div class="crm-accordion-header">
      <?php echo $this->_tpl_vars['cd_edit']['title']; ?>

    </div>

    <div id="customData<?php echo $this->_tpl_vars['group_id']; ?>
" class="crm-accordion-body">
      <?php if ($this->_tpl_vars['cd_edit']['is_multiple'] == 1): ?>
        <?php if ($this->_tpl_vars['cd_edit']['table_id']): ?>
          <table class="no-border">
            <tr id="statusmessg_<?php echo ((is_array($_tmp=$this->_tpl_vars['group_id'])) ? $this->_run_mod_handler('cat', true, $_tmp, "_".($this->_tpl_vars['tableID'])) : smarty_modifier_cat($_tmp, "_".($this->_tpl_vars['tableID']))); ?>
" class="hiddenElement">
              <td><span class="success-status"></span></td>
            </tr>
            <tr>
              <div class="crm-submit-buttons">
                <a href="#"
                   onclick="showDelete( <?php echo $this->_tpl_vars['tableID']; ?>
, '<?php echo $this->_tpl_vars['cd_edit']['name']; ?>
_<?php echo ((is_array($_tmp=$this->_tpl_vars['group_id'])) ? $this->_run_mod_handler('cat', true, $_tmp, "_".($this->_tpl_vars['tableID'])) : smarty_modifier_cat($_tmp, "_".($this->_tpl_vars['tableID']))); ?>
', <?php echo $this->_tpl_vars['group_id']; ?>
, <?php echo $this->_tpl_vars['contactId']; ?>
 ); return false;"
                   class="button delete-button" title="<?php $this->_tag_stack[] = array('ts', array('1' => $this->_tpl_vars['cv_edit']['title'])); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete this %1 record<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>">
                  <span><div class="icon delete-icon"></div><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
                </a>
              </div>
              <!-- crm-submit-buttons -->
            </tr>
          </table>
        <?php endif; ?>
      <?php endif; ?>
      <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Custom/Form/CustomData.tpl", 'smarty_include_vars' => array('formEdit' => true)));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
    </div>
    <!-- crm-accordion-body-->
  </div>
  <!-- crm-accordion-wrapper -->
  <div id="custom_group_<?php echo $this->_tpl_vars['group_id']; ?>
_<?php echo $this->_tpl_vars['cgCount']; ?>
"></div>
  <?php endforeach; endif; unset($_from); ?>

  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/customData.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
  <script type="text/javascript">
    <?php echo '

    function hideStatus(valueID, groupID) {
      cj(\'#statusmessg_\' + groupID + \'_\' + valueID).hide();
    }

    function showDelete(valueID, elementID, groupID, contactID) {
      var confirmMsg = \''; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Are you sure you want to delete this record?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo ' &nbsp; <a href="#" onclick="deleteCustomValue( \' + valueID + \',\\\'\' + elementID + \'\\\',\' + groupID + \',\' + contactID + \' ); return false;" style="text-decoration: underline;">'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Yes<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '</a>&nbsp;&nbsp;&nbsp;<a href="#" onclick="hideStatus( \' + valueID + \', \' + groupID + \' ); return false;" style="text-decoration: underline;">'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>No<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '</a>\';
      cj(\'tr#statusmessg_\' + groupID + \'_\' + valueID).show().children().find(\'span\').html(confirmMsg);
    }

    function deleteCustomValue(valueID, elementID, groupID, contactID) {
      var postUrl = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/customvalue','h' => 0), $this);?>
"<?php echo ';
      cj.ajax({
        type: "POST",
        data: "valueID=" + valueID + "&groupID=" + groupID + "&contactId=" + contactID + "&key='; ?>
<?php echo smarty_function_crmKey(array('name' => 'civicrm/ajax/customvalue'), $this);?>
<?php echo '",
        url: postUrl,
        success: function (html) {
          cj(\'#\' + elementID).hide();
          hideStatus(valueID, groupID);
          CRM.alert(\'\', \''; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Record Deleted<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '\', \'success\');
          var element = cj(\'.ui-tabs-nav #tab_custom_\' + groupID + \' a\');
          cj(element).html(cj(element).attr(\'title\') + \' (\' + html + \') \');
        }
      });
    }

    '; ?>

  </script>

  <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Form/attachmentjs.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
