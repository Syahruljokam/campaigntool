<?php /* Smarty version 2.6.27, created on 2013-10-01 09:52:32
         compiled from CRM/Contact/Form/Edit/Address/supplemental_address_1.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'help', 'CRM/Contact/Form/Edit/Address/supplemental_address_1.tpl', 29, false),)), $this); ?>
<?php if (! empty ( $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['supplemental_address_1'] )): ?>
  <tr>
     <td colspan="2">
         <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['supplemental_address_1']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-supplemental-address",'file' => "CRM/Contact/Form/Contact.hlp"), $this);?>
<br />
         <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['supplemental_address_1']['html']; ?>

     </td>
  </tr>
<?php endif; ?>