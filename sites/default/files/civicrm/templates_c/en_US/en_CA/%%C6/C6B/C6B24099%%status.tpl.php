<?php /* Smarty version 2.6.27, created on 2013-09-30 17:25:09
         compiled from CRM/common/status.tpl */ ?>

<?php if ($this->_tpl_vars['session']->getStatus(false)): ?>
  <?php $this->assign('status', $this->_tpl_vars['session']->getStatus(true)); ?>
  <?php $_from = $this->_tpl_vars['status']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['statLoop'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['statLoop']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['statItem']):
        $this->_foreach['statLoop']['iteration']++;
?>
    <?php if ($this->_tpl_vars['urlIsPublic']): ?>
      <?php $this->assign('infoType', "no-popup"); ?>
    <?php else: ?>
      <?php $this->assign('infoType', $this->_tpl_vars['statItem']['type']); ?>
    <?php endif; ?>
    <?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/info.tpl", 'smarty_include_vars' => array('infoTitle' => $this->_tpl_vars['statItem']['title'],'infoMessage' => $this->_tpl_vars['statItem']['text'],'infoOptions' => $this->_tpl_vars['statItem']['options'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>
  <?php endforeach; endif; unset($_from); ?>
<?php endif; ?>