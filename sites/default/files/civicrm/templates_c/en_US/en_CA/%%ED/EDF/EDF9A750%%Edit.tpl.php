<?php /* Smarty version 2.6.27, created on 2013-10-03 08:35:08
         compiled from CRM/Group/Form/Edit.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'crmURL', 'CRM/Group/Form/Edit.tpl', 30, false),array('function', 'help', 'CRM/Group/Form/Edit.tpl', 60, false),array('block', 'ts', 'CRM/Group/Form/Edit.tpl', 31, false),array('modifier', 'crmAddClass', 'CRM/Group/Form/Edit.tpl', 40, false),array('modifier', 'count', 'CRM/Group/Form/Edit.tpl', 81, false),array('modifier', 'cat', 'CRM/Group/Form/Edit.tpl', 89, false),)), $this); ?>
<div class="crm-block crm-form-block crm-group-form-block">
    <div id="help">
  <?php if ($this->_tpl_vars['action'] == 2): ?>
      <?php ob_start(); ?><?php echo CRM_Utils_System::crmURL(array('p' => "civicrm/group/search",'q' => "reset=1&force=1&context=smog&gid=".($this->_tpl_vars['group']['id'])), $this);?>
<?php $this->_smarty_vars['capture']['default'] = ob_get_contents();  $this->assign('crmURL', ob_get_contents());ob_end_clean(); ?>
      <?php $this->_tag_stack[] = array('ts', array('1' => $this->_tpl_vars['crmURL'])); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>You can edit the Name and Description for this group here. Click <a href='%1'>Contacts in this Group</a> to view, add or remove contacts in this group.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
  <?php else: ?>
      <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Enter a unique name and a description for your new group here. Then click 'Continue' to find contacts to add to your new group.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
  <?php endif; ?>
    </div>
    <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'top')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
    <table class="form-layout">
        <tr class="crm-group-form-block-title">
      <td class="label"><?php echo $this->_tpl_vars['form']['title']['label']; ?>
 <?php if ($this->_tpl_vars['action'] == 2): ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'CRM/Core/I18n/Dialog.tpl', 'smarty_include_vars' => array('table' => 'civicrm_group','field' => 'title','id' => $this->_tpl_vars['group']['id'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php endif; ?></td>
            <td><?php echo ((is_array($_tmp=$this->_tpl_vars['form']['title']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'huge') : smarty_modifier_crmAddClass($_tmp, 'huge')); ?>

                <?php if ($this->_tpl_vars['group']['saved_search_id']): ?>&nbsp;(<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Smart Group<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>)<?php endif; ?>
            </td>
        </tr>

        <tr class="crm-group-form-block-created">
           <td class="label"><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Created By<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></td>
           <td><?php if ($this->_tpl_vars['group']['created_by']): ?><?php echo $this->_tpl_vars['group']['created_by']; ?>
<?php else: ?>&nbsp;<?php endif; ?></td>
        </tr>

        <tr class="crm-group-form-block-description">
      <td class="label"><?php echo $this->_tpl_vars['form']['description']['label']; ?>
</td>
      <td><?php echo $this->_tpl_vars['form']['description']['html']; ?>
<br />
    <span class="description"><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Group description is displayed when groups are listed in Profiles and Mailing List Subscribe forms.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
            </td>
        </tr>

  <?php if ($this->_tpl_vars['form']['group_type']): ?>
      <tr class="crm-group-form-block-group_type">
    <td class="label"><?php echo $this->_tpl_vars['form']['group_type']['label']; ?>
</td>
    <td><?php echo $this->_tpl_vars['form']['group_type']['html']; ?>
 <?php echo smarty_function_help(array('id' => "id-group-type",'file' => "CRM/Group/Page/Group.hlp"), $this);?>
</td>
      </tr>
  <?php endif; ?>

        <tr class="crm-group-form-block-visibility">
      <td class="label"><?php echo $this->_tpl_vars['form']['visibility']['label']; ?>
</td>
      <td><?php echo ((is_array($_tmp=$this->_tpl_vars['form']['visibility']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'huge') : smarty_modifier_crmAddClass($_tmp, 'huge')); ?>
 <?php echo smarty_function_help(array('id' => "id-group-visibility",'file' => "CRM/Group/Page/Group.hlp"), $this);?>
</td>
  </tr>

  <tr class="crm-group-form-block-isReserved">
    <td class="report-label"><?php echo $this->_tpl_vars['form']['is_reserved']['label']; ?>
</td>
    <td><?php echo $this->_tpl_vars['form']['is_reserved']['html']; ?>

      <span class="description"><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>If reserved, only users with 'administer reserved groups' permission can disable, delete, or change settings for this group. The reserved flag does NOT affect users ability to add or remove contacts from a group.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span>
    </td>
  </tr>

  <tr>
      <td colspan=2><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Custom/Form/CustomData.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></td>
  </tr>
    </table>

    <?php if (count($this->_tpl_vars['parent_groups']) > 0 || $this->_tpl_vars['form']['parents']['html']): ?>
  <h3><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Parent Groups<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> <?php echo smarty_function_help(array('id' => "id-group-parent",'file' => "CRM/Group/Page/Group.hlp"), $this);?>
</h3>
        <?php if (count($this->_tpl_vars['parent_groups']) > 0): ?>
      <table class="form-layout-compressed">
    <tr>
        <td><label><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Remove Parent?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></label></td>
    </tr>
    <?php $_from = $this->_tpl_vars['parent_groups']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['group_id'] => $this->_tpl_vars['cgroup']):
?>
        <?php $this->assign('element_name', ((is_array($_tmp='remove_parent_group_')) ? $this->_run_mod_handler('cat', true, $_tmp, $this->_tpl_vars['group_id']) : smarty_modifier_cat($_tmp, $this->_tpl_vars['group_id']))); ?>
        <tr>
      <td>&nbsp;&nbsp;<?php echo $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['html']; ?>
&nbsp;<?php echo $this->_tpl_vars['form'][$this->_tpl_vars['element_name']]['label']; ?>
</td>
        </tr>
    <?php endforeach; endif; unset($_from); ?>
      </table>
      <br />
        <?php endif; ?>
        <table class="form-layout-compressed">
      <tr class="crm-group-form-block-parents">
          <td class="label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $this->_tpl_vars['form']['parents']['label']; ?>
</td>
          <td><?php echo ((is_array($_tmp=$this->_tpl_vars['form']['parents']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'huge') : smarty_modifier_crmAddClass($_tmp, 'huge')); ?>
</td>
      </tr>
  </table>
    <?php endif; ?>

    <?php if ($this->_tpl_vars['form']['organization']): ?>
  <h3><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Associated Organization<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> <?php echo smarty_function_help(array('id' => "id-group-organization",'file' => "CRM/Group/Page/Group.hlp"), $this);?>
</h3>
          <table class="form-layout-compressed">
        <tr class="crm-group-form-block-organization">
            <td class="label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php echo $this->_tpl_vars['form']['organization']['label']; ?>
</td>
      <td><?php echo ((is_array($_tmp=$this->_tpl_vars['form']['organization']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'huge') : smarty_modifier_crmAddClass($_tmp, 'huge')); ?>

          <div id="organization_address" style="font-size:10px"></div>
      </td>
        </tr>
    </table>
    <?php endif; ?>

    <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
    <?php if ($this->_tpl_vars['action'] != 1): ?>
  <div class="action-link">
      <a href="<?php echo $this->_tpl_vars['crmURL']; ?>
">&raquo; <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Contacts in this Group<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>
      <?php if ($this->_tpl_vars['group']['saved_search_id']): ?>
          <br />
    <?php if ($this->_tpl_vars['group']['mapping_id']): ?>
        <a href="<?php echo CRM_Utils_System::crmURL(array('p' => "civicrm/contact/search/builder",'q' => "reset=1&force=1&ssID=".($this->_tpl_vars['group']['saved_search_id'])), $this);?>
">&raquo; <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit Smart Group Criteria<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>
    <?php elseif ($this->_tpl_vars['group']['search_custom_id']): ?>
                    <a href="<?php echo CRM_Utils_System::crmURL(array('p' => "civicrm/contact/search/custom",'q' => "reset=1&force=1&ssID=".($this->_tpl_vars['group']['saved_search_id'])), $this);?>
">&raquo; <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit Smart Group Criteria<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>
    <?php else: ?>
        <a href="<?php echo CRM_Utils_System::crmURL(array('p' => "civicrm/contact/search/advanced",'q' => "reset=1&force=1&ssID=".($this->_tpl_vars['group']['saved_search_id'])), $this);?>
">&raquo; <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit Smart Group Criteria<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></a>
    <?php endif; ?>

      <?php endif; ?>
  </div>
    <?php endif; ?>
</fieldset>

<?php echo '
<script type="text/javascript">
'; ?>
<?php if ($this->_tpl_vars['freezeMailignList']): ?><?php echo '
cj(\'input[type=checkbox][name="group_type['; ?>
<?php echo $this->_tpl_vars['freezeMailignList']; ?>
<?php echo ']"]\').attr(\'disabled\',true);
'; ?>
<?php endif; ?><?php echo '
'; ?>
<?php if ($this->_tpl_vars['hideMailignList']): ?><?php echo '
cj(\'input[type=checkbox][name="group_type['; ?>
<?php echo $this->_tpl_vars['hideMailignList']; ?>
<?php echo ']"]\').hide();
cj(\'label[for="group_type['; ?>
<?php echo $this->_tpl_vars['hideMailignList']; ?>
<?php echo ']"]\').hide();
'; ?>
<?php endif; ?><?php echo '
'; ?>
<?php if ($this->_tpl_vars['organizationID']): ?><?php echo '
    cj(document).ready( function() {
  //group organzation default setting
  var dataUrl = "'; ?>
<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/search','h' => 0,'q' => "org=1&id=".($this->_tpl_vars['organizationID'])), $this);?>
<?php echo '";
  cj.ajax({
          url     : dataUrl,
          async   : false,
          success : function(html){
                      //fixme for showing address in div
                      htmlText = html.split( \'|\' , 2);
                      htmlDiv = htmlText[0].replace( /::/gi, \' \');
          cj(\'#organization\').val(htmlText[0]);
                      cj(\'div#organization_address\').html(htmlDiv);
                    }
  });
    });
'; ?>
<?php endif; ?><?php echo '

var dataUrl = "'; ?>
<?php echo $this->_tpl_vars['groupOrgDataURL']; ?>
<?php echo '";
cj(\'#organization\').autocomplete( dataUrl, {
              width : 250, selectFirst : false, matchContains: true
              }).result( function(event, data, formatted) {
                                                       cj( "#organization_id" ).val( data[1] );
                                                       htmlDiv = data[0].replace( /::/gi, \' \');
                                                       cj(\'div#organization_address\').html(htmlDiv);
                  });
</script>
'; ?>

</div>