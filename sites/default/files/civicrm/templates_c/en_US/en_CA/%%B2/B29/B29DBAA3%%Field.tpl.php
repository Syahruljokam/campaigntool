<?php /* Smarty version 2.6.27, created on 2013-10-03 08:55:14
         compiled from CRM/UF/Form/Field.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('block', 'ts', 'CRM/UF/Form/Field.tpl', 26, false),array('function', 'help', 'CRM/UF/Form/Field.tpl', 42, false),array('function', 'crmURL', 'CRM/UF/Form/Field.tpl', 168, false),)), $this); ?>
<h3><?php if ($this->_tpl_vars['action'] == 8): ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Delete Field<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> - <?php echo $this->_tpl_vars['fieldTitle']; ?>
<?php elseif ($this->_tpl_vars['action'] == 1): ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Add Field<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php elseif ($this->_tpl_vars['action'] == 2): ?><?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Edit Field<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> - <?php echo $this->_tpl_vars['fieldTitle']; ?>
<?php endif; ?></h3>
<div class="crm-block crm-form-block crm-uf-field-form-block">
<?php if ($this->_tpl_vars['action'] == 8): ?>
  <div class="messages status no-popup">
    <div class="icon inform-icon"></div>
    <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>WARNING: Deleting this profile field will remove it from Profile forms and listings. If this field is used in any 'stand-alone' Profile forms, you will need to update those forms to remove this field.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?> <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Do you want to continue?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>
  </div>
<?php else: ?>
  <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'top')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
  <table class="form-layout-compressed">
    <tr class="crm-uf-field-form-block-field_name">
      <td class="label"><?php echo $this->_tpl_vars['form']['field_name']['label']; ?>
</td>
      <td><?php echo $this->_tpl_vars['form']['field_name']['html']; ?>
<br />
        <span class="description">&nbsp;<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Select the type of CiviCRM record and the field you want to include in this Profile.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?></span></td>
    </tr>
    <tr class="crm-uf-field-form-block-label">
      <td class="label"><?php echo $this->_tpl_vars['form']['label']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'label'), $this);?>
<?php if ($this->_tpl_vars['action'] == 2): ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'CRM/Core/I18n/Dialog.tpl', 'smarty_include_vars' => array('table' => 'civicrm_uf_field','field' => 'label','id' => $this->_tpl_vars['fieldId'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php endif; ?></td>
      <td><?php echo $this->_tpl_vars['form']['label']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-is_multi">
      <td class="label"><?php echo $this->_tpl_vars['form']['is_multi_summary']['label']; ?>
<?php echo smarty_function_help(array('id' => 'is_multi_summary'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['is_multi_summary']['html']; ?>
<br />
    </tr>
    <tr class="crm-uf-field-form-block-is_required">
      <td class="label"><?php echo $this->_tpl_vars['form']['is_required']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'is_required'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['is_required']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-is_view">
      <td class="label"><?php echo $this->_tpl_vars['form']['is_view']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'is_view'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['is_view']['html']; ?>
</td>
    </tr>
    <tr  id="profile_visibility" class="crm-uf-field-form-block-visibility">
      <td class="label"><?php echo $this->_tpl_vars['form']['visibility']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'visibility'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['visibility']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-is_searchable">
      <td class="label"><div id="is_search_label"><?php echo $this->_tpl_vars['form']['is_searchable']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'is_searchable'), $this);?>
</div></td>
      <td><div id="is_search_html"><?php echo $this->_tpl_vars['form']['is_searchable']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-in_selector">
      <td class="label"><div id="in_selector_label"><?php echo $this->_tpl_vars['form']['in_selector']['label']; ?>
<?php echo smarty_function_help(array('id' => 'in_selector'), $this);?>
</div></td>
      <td><div id="in_selector_html"><?php echo $this->_tpl_vars['form']['in_selector']['html']; ?>
</div></td>
    </tr>
    <tr class="crm-uf-field-form-block-help_pre">
      <td class="label"><?php echo $this->_tpl_vars['form']['help_pre']['label']; ?>
<?php if ($this->_tpl_vars['action'] == 2): ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'CRM/Core/I18n/Dialog.tpl', 'smarty_include_vars' => array('table' => 'civicrm_uf_field','field' => 'help_pre','id' => $this->_tpl_vars['fieldId'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php endif; ?> <?php echo smarty_function_help(array('id' => 'help'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['help_pre']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-help_post">
      <td class="label"><?php echo $this->_tpl_vars['form']['help_post']['label']; ?>
<?php if ($this->_tpl_vars['action'] == 2): ?><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => 'CRM/Core/I18n/Dialog.tpl', 'smarty_include_vars' => array('table' => 'civicrm_uf_field','field' => 'help_post','id' => $this->_tpl_vars['fieldId'])));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?><?php endif; ?> <?php echo smarty_function_help(array('id' => 'help'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['help_post']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-weight">
      <td class="label"><?php echo $this->_tpl_vars['form']['weight']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'weight'), $this);?>
</td>
      <td>&nbsp;<?php echo $this->_tpl_vars['form']['weight']['html']; ?>
</td>
    </tr>
    <tr class="crm-uf-field-form-block-is_active">
      <td class="label"><?php echo $this->_tpl_vars['form']['is_active']['label']; ?>
 <?php echo smarty_function_help(array('id' => 'is_active'), $this);?>
</td>
      <td><?php echo $this->_tpl_vars['form']['is_active']['html']; ?>
</td>
    </tr>
  </table>
<?php endif; ?>
  <div class="crm-submit-buttons"><?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formButtons.tpl", 'smarty_include_vars' => array('location' => 'bottom')));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?></div>
</div>

<?php echo $this->_tpl_vars['initHideBoxes']; ?>


<?php echo '
<script type="text/javascript">
var otherModule = new Array( );
'; ?>
<?php $_from = $this->_tpl_vars['otherModules']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['mkey'] => $this->_tpl_vars['mval']):
?><?php echo '
otherModule['; ?>
<?php echo $this->_tpl_vars['mkey']; ?>
<?php echo '] = \''; ?>
<?php echo $this->_tpl_vars['mval']; ?>
<?php echo '\';
'; ?>
<?php endforeach; endif; unset($_from); ?><?php echo '

cj(function($) {
  if ( $.inArray( "Profile", otherModule ) > -1 && $.inArray( "Search Profile", otherModule ) == -1 ){
    $(\'#profile_visibility\').show();
  }
  else if( $.inArray( "Search Profile", otherModule ) > -1 ){
    $(\'#profile_visibility\').show();
    $("#in_selector").attr(\'checked\',true);
  }
  else if( $.inArray( "Profile", otherModule ) == -1 && $.inArray( "Search Profile", otherModule ) == -1 ){
    $(\'#profile_visibility\').hide();
  }
  $(\'[id^=field_name]\').change(function() {
    showLabel();
    mixProfile();
  });
});

var preHelpLabel = "";
function showLabel( ) {
  if (preHelpLabel) {
    cj(".crm-uf-field-form-block-help_pre .label").html(preHelpLabel);
  }
  var $elements = cj(".crm-uf-field-form-block-is_view, .crm-uf-field-form-block-is_required, .crm-uf-field-form-block-visibility, .crm-uf-field-form-block-is_searchable, .crm-uf-field-form-block-in_selector, .crm-uf-field-form-block-help_post");

  $elements.show();

  if (cj(\'[name="field_name[0]"]\').val() == "Formatting") {
    if (!preHelpLabel) {
      preHelpLabel = cj(".crm-uf-field-form-block-help_post .label").html();
    }
    cj(".crm-uf-field-form-block-help_pre .label").html(\'<label for="help_pre">HTML Code</label>\');
    $elements.hide();
  }

  // Set the Field Label
  var labelValue = \'\';
  if (cj(\'[name="field_name[0]"]\').val()) {
    var fieldId = cj(\'[name="field_name[1]"]\').val();
    if (fieldId) {
      labelValue = cj(\'[name="field_name[1]"] :selected\').text().split(\' :: \', 2)[0];
      if (cj(\'[name="field_name[3]"]\').val()) {
        labelValue += \'-\' + cj(\'[name="field_name[3]"] :selected\').text();
      }
      if (cj(\'[name="field_name[2]"]\').val()) {
        labelValue += \' (\' + cj(\'[name="field_name[2]"] :selected\').text() + \')\';
      }
    }
  }

  cj(\'#label\').val(labelValue);

  /* Code to hide searchable attribute for no searchable fields */
  if (document.getElementsByName("field_name[1]")[0].selectedIndex == -1) {
    return;
  }
  var field2 = document.getElementsByName("field_name[1]")[0][document.getElementsByName("field_name[1]")[0].selectedIndex].text;
  '; ?>

  <?php $_from = $this->_tpl_vars['noSearchable']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }if (count($_from)):
    foreach ($_from as $this->_tpl_vars['dnc'] => $this->_tpl_vars['val']):
?>
  <?php echo '
    if (field2 == "'; ?>
<?php echo $this->_tpl_vars['val']; ?>
<?php echo '") {
      cj(\'#is_search_label, #is_search_html\').hide();
    }
  '; ?>

  <?php endforeach; endif; unset($_from); ?>
  <?php echo '

  // Code to set Profile Field help, from custom data field help
  if (fieldId.substring(0, 7) == \'custom_\') {
    fieldId = fieldId.substring( fieldId.length, 7);
    var dataUrl = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/custom','h' => 0), $this);?>
"<?php echo ';
    cj.post( dataUrl, { id: fieldId }, function(data) {
      cj(\'#help_post\').val(data.help_post);
      cj(\'#help_pre\').val(data.help_pre);
    }, \'json\');
  }
}

'; ?>
<?php if ($this->_tpl_vars['action'] != 8): ?><?php echo '
showHideSeletorSearch();

function showHideSeletorSearch() {
  var is_search = cj(\'#is_search_label, #is_search_html\');
  var in_selector = cj(\'#in_selector_label, #in_selector_html\');
  if (cj("#visibility").val() == "User and User Admin Only") {
    is_search.hide();
    in_selector.hide();
    cj("#is_searchable").attr(\'checked\',false);
  }
  else {
    if (!cj("#is_view").attr(\'checked\')) {
      is_search.show();
    }
    var fldName = cj("#field_name_1").val();
    if (fldName == \'group\' || fldName == \'tag\') {
      in_selector.hide();
    }
    else {
      in_selector.show();
    }
  }
}

cj("#field_name_1").bind( \'change blur\', function( ) {
  showHideSeletorSearch( );
});

cj( function( ) {
  cj("#field_name_1").addClass( \'huge\' );
  viewOnlyShowHide( );
  cj("#is_view").click( function(){
    viewOnlyShowHide();
  });
});
'; ?>
<?php endif; ?><?php echo '

cj("#field_name_1").change(
  function() {
    multiSummaryToggle(cj(this).val());
  });

cj( function( ) {
  var fieldId = cj("#field_name_1").val();
  multiSummaryToggle(fieldId);
});

function multiSummaryToggle(customId) {
  if (customId && customId.match(/custom_[\\d]/)) {

    var dataUrl = "'; ?>
<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/rest','q' => 'className=CRM_UF_Page_AJAX&fnName=checkIsMultiRecord&json=1','h' => 0), $this);?>
"<?php echo ';
    dataUrl = dataUrl + \'&customId=\' + customId;
    cj.ajax({  url: dataUrl,
      async: false,
      global: false,
      dataType : \'json\',
      success : function(response) {
        if (response.is_multi != 0 ) {
          cj(\'.crm-uf-field-form-block-is_multi\').show();
        }
        else {
          if (cj(\'#is_multi_summary\').is(\':checked\')) {
            cj(\'#is_multi_summary\').removeAttr(\'checked\');
          }
          cj(\'.crm-uf-field-form-block-is_multi\').hide();
        }
      }
    });
  }
  else {
    if (cj(\'#is_multi_summary\').is(\':checked\')) {
      cj(\'#is_multi_summary\').removeAttr(\'checked\');
    }
    cj(\'.crm-uf-field-form-block-is_multi\').hide();
  }
}

function viewOnlyShowHide() {
  var is_search = cj(\'#is_search_label, #is_search_html\');
  if (cj("#is_view").attr(\'checked\')) {
    is_search.hide();
    cj("#is_searchable").attr(\'checked\', false);
  }
  else if (cj("#visibility").val() != "User and User Admin Only")  {
    is_search.show();
  }
}

//CRM-4363
function mixProfile( ) {
  var allMixTypes = ["Participant", "Membership", "Contribution"];
  var type = document.forms.Field[\'field_name[0]\'].value;
  var alreadyMixProfile = '; ?>
<?php if ($this->_tpl_vars['alreadyMixProfile']): ?>true<?php else: ?>false<?php endif; ?><?php echo ';
  if (allMixTypes.indexOf( type ) != -1 || alreadyMixProfile) {
    if (document.getElementById("is_searchable").checked) {
      document.getElementById("is_searchable").checked = false;
      if ( alreadyMixProfile ) {
        var message = '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>You can not mark fields as Searchable in a profile that contains fields for multiple record types.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
      }
      else {
        var message = type + '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?> fields can not be marked as Searchable in a profile.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
      }
      cj().crmError(message, '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Error<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ');
    }
    if ( document.getElementById("in_selector").checked ) {
      document.getElementById("in_selector").checked = false;
      if ( alreadyMixProfile ) {
        var message = '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>You can not mark a field as a Result Column in a profile that contains fields from multiple record types.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
      }
      else {
        var message = type + '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?> can not be used as a Result Column for profile searches.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
      }
      cj().crmError(message, '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Error<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ');
    }
  }
}

function verify( ) {
  var allMixTypes = ["Participant", "Membership", "Contribution"];
  var type = document.forms.Field[\'field_name[0]\'].value;
  if ( allMixTypes.indexOf( type ) != -1 ) {
    var message = '; ?>
'<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Oops. One or more fields in this profile are configured to be Searchable and / or shown in a Results Column, AND you are trying to add a <?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'
    + type + '<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?> field. Profiles with a mixture of field types can not include Searchable or Results Column fields. If you save this field now, the Seachable and Results Column settings will be removed for all fields in this profile. Do you want to continue?<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>'<?php echo ';
    var ok = confirm( message );
    if ( !ok ) {
      return false;
    }
  }
}

</script>
'; ?>


<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/common/formNavigate.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>