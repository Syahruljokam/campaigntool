<?php /* Smarty version 2.6.27, created on 2013-10-04 13:12:22
         compiled from CRM/Contact/Form/Edit/TagsAndGroups.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'cycle', 'CRM/Contact/Form/Edit/TagsAndGroups.tpl', 36, false),array('modifier', 'is_numeric', 'CRM/Contact/Form/Edit/TagsAndGroups.tpl', 40, false),)), $this); ?>
<?php if ($this->_tpl_vars['title']): ?>
<div class="crm-accordion-wrapper crm-tagGroup-accordion collapsed">
  <div class="crm-accordion-header"><?php echo $this->_tpl_vars['title']; ?>
</div>
  <div class="crm-accordion-body" id="tagGroup">
<?php endif; ?>
    <table class="form-layout-compressed<?php if ($this->_tpl_vars['context'] == 'profile'): ?> crm-profile-tagsandgroups<?php endif; ?>">
      <tr>
      <?php $_from = $this->_tpl_vars['tagGroup']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['key'] => $this->_tpl_vars['item']):
?>
                <?php if (! $this->_tpl_vars['type'] || $this->_tpl_vars['type'] == $this->_tpl_vars['key']): ?>
          <td width=<?php echo smarty_function_cycle(array('name' => 'tdWidth','values' => "\"70%\",\"30%\""), $this);?>
><span class="label"><?php if ($this->_tpl_vars['title']): ?><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['key']]['label']; ?>
<?php endif; ?></span>
            <div id="crm-tagListWrap">
              <table id="crm-tagGroupTable">
                <?php $_from = $this->_tpl_vars['form'][$this->_tpl_vars['key']]; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['k'] => $this->_tpl_vars['it']):
?>
                  <?php if (((is_array($_tmp=$this->_tpl_vars['k'])) ? $this->_run_mod_handler('is_numeric', true, $_tmp) : is_numeric($_tmp))): ?>
                    <tr class=<?php echo smarty_function_cycle(array('values' => "'odd-row','even-row'",'name' => $this->_tpl_vars['key']), $this);?>
 id="crm-tagRow<?php echo $this->_tpl_vars['k']; ?>
">
                      <td>
                        <strong><?php echo $this->_tpl_vars['it']['html']; ?>
</strong><br />
                        <?php if ($this->_tpl_vars['item'][$this->_tpl_vars['k']]['description']): ?>
                          <div class="description">
                            <?php echo $this->_tpl_vars['item'][$this->_tpl_vars['k']]['description']; ?>

                          </div>
                        <?php endif; ?>
                      </td>
                    </tr>
                  <?php endif; ?>
                <?php endforeach; endif; unset($_from); ?>
              </table>
            </div>
          </td>
        <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?>
    </tr>
    <?php if (! $this->_tpl_vars['type'] || $this->_tpl_vars['type'] == 'tag'): ?>
      <tr><td><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/Tag.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></td></tr>
    <?php endif; ?>
  </table>
<?php if ($this->_tpl_vars['title']): ?>
  </div>
</div><!-- /.crm-accordion-wrapper -->
<?php endif; ?>