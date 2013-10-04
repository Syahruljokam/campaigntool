<?php /* Smarty version 2.6.27, created on 2013-09-30 17:25:09
         compiled from CRM/Block/Dashboard.tpl */ ?>
<div class="block-civicrm crm-container">
<?php $_from = $this->_tpl_vars['dashboardLinks']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['dash']):
?>
<a accesskey="<?php echo $this->_tpl_vars['dash']['key']; ?>
" href="<?php echo $this->_tpl_vars['dash']['url']; ?>
"><?php echo $this->_tpl_vars['dash']['title']; ?>
</a>
<?php endforeach; endif; unset($_from); ?>
</div>