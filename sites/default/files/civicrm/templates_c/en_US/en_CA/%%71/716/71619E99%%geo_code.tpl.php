<?php /* Smarty version 2.6.27, created on 2013-10-01 09:52:32
         compiled from CRM/Contact/Form/Edit/Address/geo_code.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'help', 'CRM/Contact/Form/Edit/Address/geo_code.tpl', 29, false),)), $this); ?>
<?php if (! empty ( $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['geo_code_1'] ) && ! empty ( $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['geo_code_2'] )): ?>
   <tr>
      <td colspan="2">
          <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['geo_code_1']['label']; ?>
,&nbsp;<?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['geo_code_2']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-geo-code",'file' => "CRM/Contact/Form/Contact.hlp"), $this);?>
<br />
          <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['geo_code_1']['html']; ?>
,&nbsp;<?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['geo_code_2']['html']; ?>
<br />
      </td>
    </tr>
    <?php if (! empty ( $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['manual_geo_code'] )): ?>
     <tr>
        <td colspan="2">
          <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['manual_geo_code']['html']; ?>

          <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['manual_geo_code']['label']; ?>
 <?php echo smarty_function_help(array('id' => "id-geo-code-override",'file' => "CRM/Contact/Form/Contact.hlp"), $this);?>

        </td>
      </tr>
    <?php endif; ?>
   </tr>
<?php endif; ?>