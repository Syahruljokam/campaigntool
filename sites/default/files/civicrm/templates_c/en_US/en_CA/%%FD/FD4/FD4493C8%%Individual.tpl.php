<?php /* Smarty version 2.6.27, created on 2013-10-04 13:12:20
         compiled from CRM/Contact/Form/Edit/Individual.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('function', 'crmURL', 'CRM/Contact/Form/Edit/Individual.tpl', 32, false),array('function', 'help', 'CRM/Contact/Form/Edit/Individual.tpl', 111, false),array('block', 'ts', 'CRM/Contact/Form/Edit/Individual.tpl', 54, false),array('modifier', 'crmAddClass', 'CRM/Contact/Form/Edit/Individual.tpl', 112, false),)), $this); ?>
<script type="text/javascript">
<?php echo '
cj(function($) {
'; ?>

  var cid=parseFloat("<?php echo $this->_tpl_vars['contactId']; ?>
");//parseInt is octal by default
  var contactIndividual = "<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/rest','q' => 'entity=contact&action=get&json=1&contact_type=Individual&return=display_name,sort_name,email&rowCount=50','h' => 0), $this);?>
";
  var viewIndividual = "<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/view','q' => 'reset=1&cid=','h' => 0), $this);?>
";
  var editIndividual = "<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/contact/add','q' => 'reset=1&action=update&cid=','h' => 0), $this);?>
";
  var checkSimilar = <?php echo $this->_tpl_vars['checkSimilar']; ?>
;
  var lastnameMsg;
<?php echo '
  $(document).ready(function() {
    if (cj(\'#contact_sub_type *\').length == 0) {//if they aren\'t any subtype we don\'t offer the option
      cj(\'#contact_sub_type\').parent().hide();
    }
    if (!isNaN(cid) || ! checkSimilar) {
     return;//no dupe check if this is a modif or if checkSimilar is disabled (contact_ajax_check_similar in civicrm_setting table)
    }
    cj(\'#last_name\').blur(function () {
      // Close msg if it exists
      lastnameMsg && lastnameMsg.close && lastnameMsg.close();
      if (this.value == \'\') return;
      cj.getJSON(contactIndividual,{sort_name:cj(\'#last_name\').val()},
        function(data){
          if (data.is_error == 1 || data.count == 0) {
            return;
          }
          var msg = "<em>'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>If the person you were trying to add is listed below, click their name to view or edit their record<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo ':</em>";
          if ( data.count == 1 ) {
            var title = "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Similar Contact Found<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '";
          } else {
            var title = "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Similar Contacts Found<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '";
          }
          msg += \'<ul class="matching-contacts-actions">\';
          cj.each(data.values, function(i,contact){
            if ( !(contact.email) ) {
              contact.email = \'\';
            }
          msg += \'<li><a href="\'+viewIndividual+contact.id+\'">\'+ contact.display_name +\'</a> \'+contact.email+\'</li>\';
        });
        msg += \'</ul>\';
        lastnameMsg = CRM.alert(msg, title);
        cj(\'.matching-contacts-actions a\').click(function(){
          // No confirmation dialog on click
          global_formNavigate = true;
          return true;
        });
      });
    });
  });
});
</script>
'; ?>


<table class="form-layout-compressed">
  <tr>
    <?php if ($this->_tpl_vars['form']['prefix_id']): ?>
    <td>
      <?php echo $this->_tpl_vars['form']['prefix_id']['label']; ?>
<br/>
      <?php echo $this->_tpl_vars['form']['prefix_id']['html']; ?>

    </td>    
    <?php endif; ?>
    <td>
      <?php echo $this->_tpl_vars['form']['first_name']['label']; ?>
<br /> 
      <?php echo $this->_tpl_vars['form']['first_name']['html']; ?>

    </td>
    <td>
      <?php echo $this->_tpl_vars['form']['middle_name']['label']; ?>
<br />
      <?php echo $this->_tpl_vars['form']['middle_name']['html']; ?>

    </td>
    <td>
      <?php echo $this->_tpl_vars['form']['last_name']['label']; ?>
<br />
      <?php echo $this->_tpl_vars['form']['last_name']['html']; ?>

    </td>
    <?php if ($this->_tpl_vars['form']['suffix_id']): ?>
    <td>
      <?php echo $this->_tpl_vars['form']['suffix_id']['label']; ?>
<br/>
      <?php echo $this->_tpl_vars['form']['suffix_id']['html']; ?>

    </td>
    <?php endif; ?>
  </tr>

  <tr>
    <td colspan="2">
      <?php echo $this->_tpl_vars['form']['current_employer']['label']; ?>
&nbsp;<?php echo smarty_function_help(array('id' => "id-current-employer",'file' => "CRM/Contact/Form/Contact.hlp"), $this);?>
<br />
      <?php echo ((is_array($_tmp=$this->_tpl_vars['form']['current_employer']['html'])) ? $this->_run_mod_handler('crmAddClass', true, $_tmp, 'twenty') : smarty_modifier_crmAddClass($_tmp, 'twenty')); ?>

      <div id="employer_address" style="display:none;"></div>
    </td>
    <td>
      <?php echo $this->_tpl_vars['form']['job_title']['label']; ?>
<br />
      <?php echo $this->_tpl_vars['form']['job_title']['html']; ?>

    </td>
    <td>
      <?php echo $this->_tpl_vars['form']['nick_name']['label']; ?>
<br />
      <?php echo $this->_tpl_vars['form']['nick_name']['html']; ?>

    </td>
    <td>
      <?php if ($this->_tpl_vars['buildContactSubType']): ?>
      <?php echo $this->_tpl_vars['form']['contact_sub_type']['label']; ?>
<br />
      <?php echo $this->_tpl_vars['form']['contact_sub_type']['html']; ?>

      <?php endif; ?>
    </td>
  </tr>
</table>

<?php $_smarty_tpl_vars = $this->_tpl_vars;
$this->_smarty_include(array('smarty_include_tpl_file' => "CRM/Contact/Form/CurrentEmployer.tpl", 'smarty_include_vars' => array()));
$this->_tpl_vars = $_smarty_tpl_vars;
unset($_smarty_tpl_vars);
 ?>