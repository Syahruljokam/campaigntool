<?php /* Smarty version 2.6.27, created on 2013-10-01 09:52:32
         compiled from CRM/Contact/Form/Edit/Address/country_state_province.tpl */ ?>
<tr><td colspan="3" style="padding:0;">
<table class="crm-address-element">
<tr>
   <?php if (! empty ( $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['country_id'] )): ?>
     <td>
        <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['country_id']['label']; ?>
<br />
        <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['country_id']['html']; ?>

     </td>
   <?php endif; ?>
   <?php if (! empty ( $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['state_province_id'] )): ?> 
     <td>
        <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['state_province_id']['label']; ?>
<br />
        <?php echo $this->_tpl_vars['form']['address'][$this->_tpl_vars['blockId']]['state_province_id']['html']; ?>

     </td>
   <?php endif; ?>
   <td colspan="2">&nbsp;&nbsp;</td>
</tr>
</table>
</td></tr>