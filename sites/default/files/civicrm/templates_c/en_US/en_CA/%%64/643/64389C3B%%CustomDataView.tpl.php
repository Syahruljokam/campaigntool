<?php /* Smarty version 2.6.27, created on 2013-10-01 14:56:50
         compiled from CRM/Contact/Page/View/CustomDataView.tpl */ ?>
<?php $this->assign('customGroupCount', 1); ?>
<?php $_from = $this->_tpl_vars['viewCustomData']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['customGroupId'] => $this->_tpl_vars['customValues']):
?>
  <?php $this->assign('cgcount', 1); ?>
  <?php $this->assign('count', $this->_tpl_vars['customGroupCount']%2); ?>
  <?php if (( $this->_tpl_vars['count'] == $this->_tpl_vars['side'] ) || $this->_tpl_vars['skipTitle']): ?>
    <?php $_from = $this->_tpl_vars['customValues']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['cvID'] => $this->_tpl_vars['cd_edit']):
?>
      <div class="customFieldGroup crm-collapsible<?php if ($this->_tpl_vars['cd_edit']['collapse_display']): ?> collapsed<?php endif; ?> ui-corner-all <?php echo $this->_tpl_vars['cd_edit']['name']; ?>
 crm-custom-set-block-<?php echo $this->_tpl_vars['customGroupId']; ?>
">
        <div class="collapsible-title">
          <?php echo $this->_tpl_vars['cd_edit']['title']; ?>

        </div>
        <?php if ($this->_tpl_vars['cvID'] == 0): ?>
          <?php $this->assign('cvID', '-1'); ?>
        <?php endif; ?>
        <div class="crm-summary-block" id="custom-set-block-<?php echo $this->_tpl_vars['customGroupId']; ?>
-<?php echo $this->_tpl_vars['cvID']; ?>
">
          <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Page/View/CustomDataFieldView.tpl", 'smarty_include_vars' => array('customGroupId' => $this->_tpl_vars['customGroupId'],'customRecId' => $this->_tpl_vars['cvID'],'cgcount' => $this->_tpl_vars['cgcount'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
        </div>
      </div>
      <?php $this->assign('cgcount', $this->_tpl_vars['cgcount']+1); ?>
    <?php endforeach; endif; unset($_from); ?>
  <?php endif; ?>
  <?php $this->assign('customGroupCount', $this->_tpl_vars['customGroupCount']+1); ?>
<?php endforeach; endif; unset($_from); ?>
