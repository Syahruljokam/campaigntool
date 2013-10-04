<?php /* Smarty version 2.6.27, created on 2013-10-04 13:12:21
         compiled from CRM/Contact/Form/NewContact.tpl */ ?>
<?php require_once(SMARTY_CORE_DIR . 'core.load_plugins.php');
smarty_core_load_plugins(array('plugins' => array(array('modifier', 'cat', 'CRM/Contact/Form/NewContact.tpl', 28, false),array('block', 'ts', 'CRM/Contact/Form/NewContact.tpl', 36, false),array('function', 'crmURL', 'CRM/Contact/Form/NewContact.tpl', 78, false),)), $this); ?>
<?php if (! in_array ( $this->_tpl_vars['context'] , array ( 'search' , 'advanced' , 'builder' ) )): ?>
  <?php $this->assign('fldName', ((is_array($_tmp=$this->_tpl_vars['prefix'])) ? $this->_run_mod_handler('cat', true, $_tmp, 'contact') : smarty_modifier_cat($_tmp, 'contact'))); ?>
  <?php $this->assign('profSelect', ((is_array($_tmp=$this->_tpl_vars['prefix'])) ? $this->_run_mod_handler('cat', true, $_tmp, 'profiles') : smarty_modifier_cat($_tmp, 'profiles'))); ?>

  <?php if ($this->_tpl_vars['noLabel']): ?>
    <div>
      <?php if (! $this->_tpl_vars['skipBreak']): ?>
        <?php echo $this->_tpl_vars['form'][$this->_tpl_vars['fldName']][$this->_tpl_vars['blockNo']]['html']; ?>
 <br/>
        <?php if ($this->_tpl_vars['form'][$this->_tpl_vars['profSelect']]): ?>
          <?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>OR<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><br/><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['profSelect']][$this->_tpl_vars['blockNo']]['html']; ?>
<div id="contact-dialog-<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
" class="hiddenElement"></div>
        <?php endif; ?>
      <?php else: ?>
        <?php echo $this->_tpl_vars['form'][$this->_tpl_vars['fldName']][$this->_tpl_vars['blockNo']]['html']; ?>

        <?php if ($this->_tpl_vars['form'][$this->_tpl_vars['profSelect']]): ?>
          &nbsp;&nbsp;<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>OR<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>&nbsp;&nbsp;<?php echo $this->_tpl_vars['form'][$this->_tpl_vars['profSelect']][$this->_tpl_vars['blockNo']]['html']; ?>
<div id="contact-dialog-<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
" class="hiddenElement"></div>
        <?php endif; ?>
      <?php endif; ?>
    </div>
  <?php else: ?>
    <tr class="crm-new-contact-form-block-contact crm-new-contact-form-block-contact-<?php echo $this->_tpl_vars['blockNo']; ?>
">
      <td class="label"><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['fldName']][$this->_tpl_vars['blockNo']]['label']; ?>
</td>
      <td><?php echo $this->_tpl_vars['form'][$this->_tpl_vars['fldName']][$this->_tpl_vars['blockNo']]['html']; ?>

        <?php if ($this->_tpl_vars['form'][$this->_tpl_vars['profSelect']]): ?>
          &nbsp;&nbsp;<?php $this->_tag_stack[] = array('ts', array()); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>OR<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?>&nbsp;&nbsp;<?php echo $this->_tpl_vars['form'][$this->_tpl_vars['profSelect']][$this->_tpl_vars['blockNo']]['html']; ?>
<div id="contact-dialog-<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
" class="hiddenElement"></div>
        <?php endif; ?>
      </td>
    </tr>
  <?php endif; ?>

<?php echo '
<script type="text/javascript">
  var allowMultiClient = Boolean('; ?>
<?php if (! empty ( $this->_tpl_vars['multiClient'] )): ?>1<?php else: ?>0<?php endif; ?><?php echo ');

  '; ?>

  var prePopulateData = '';
  <?php if ($this->_tpl_vars['prePopulateData']): ?>
      prePopulateData = <?php echo $this->_tpl_vars['prePopulateData']; ?>
;
  <?php endif; ?>
  <?php echo '

  var existingTokens = \'\';
  cj( function( ) {
    // add multiple client option if configured
    if ( allowMultiClient ) {
      addMultiClientOption'; ?>
<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
<?php echo '( prePopulateData, '; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
,"<?php echo $this->_tpl_vars['prefix']; ?>
"<?php echo ' );
    } else {
      addSingleClientOption'; ?>
<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
<?php echo '( '; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
,"<?php echo $this->_tpl_vars['prefix']; ?>
"<?php echo ' );
    }
  });

  function newContact'; ?>
<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
<?php echo '( gid, blockNo, prefix ) {
    var dataURL = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/profile/create','q' => "reset=1&snippet=5&context=dialog&blockNo=".($this->_tpl_vars['blockNo'])."&prefix=".($this->_tpl_vars['prefix']),'h' => 0), $this);?>
"<?php echo ';
    dataURL = dataURL + \'&gid=\' + gid;
    '; ?>
<?php if ($this->_tpl_vars['profileCreateCallback']): ?><?php echo '
    dataURL = dataURL + \'&createCallback=1\';
    '; ?>
<?php endif; ?><?php echo '
    cj.ajax({
      url: dataURL,
      success: function( content ) {
        cj( \'#contact-dialog-\'+ prefix + blockNo ).show( ).html( content ).dialog({
          title: "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Create New Contact<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '",
          modal: true,
          width: 680,
          overlay: {
            opacity: 0.5,
            background: "black"
          },

          close: function(event, ui) {
            cj(\'#\' + prefix + \'profiles_\' + blockNo).val(\'\');
            '; ?>

            <?php if ($this->_tpl_vars['newContactCallback']): ?>
              eval("<?php echo $this->_tpl_vars['newContactCallback']; ?>
");
            <?php endif; ?>
            <?php echo '
          }
        });
      }
    });
  }

  function addMultiClientOption'; ?>
<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
<?php echo '( prePopulateData, blockNo, prefix ) {
    var hintText = "'; ?>
<?php $this->_tag_stack[] = array('ts', array('escape' => 'js')); $_block_repeat=true;smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], null, $this, $_block_repeat);while ($_block_repeat) { ob_start(); ?>Type in a partial or complete name of an existing contact.<?php $_block_content = ob_get_contents(); ob_end_clean(); $_block_repeat=false;echo smarty_block_ts($this->_tag_stack[count($this->_tag_stack)-1][1], $_block_content, $this, $_block_repeat); }  array_pop($this->_tag_stack); ?><?php echo '";
    var contactUrl = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/checkemail','q' => 'id=1&noemail=1','h' => 0), $this);?>
"<?php echo ';

    // setdefaults incase of formRule
    '; ?>

    <?php if ($this->_tpl_vars['selectedContacts']): ?>
      <?php echo ' var prePopulateData = cj.ajax({ url: contactUrl + "&cid='; ?>
<?php echo $this->_tpl_vars['selectedContacts']; ?>
<?php echo '", async: false }).responseText;'; ?>

    <?php endif; ?>
    <?php echo '

    cj(\'#\' + prefix + \'contact_\' + blockNo).tokenInput( contactUrl, { prePopulate:prePopulateData, theme: \'facebook\', hintText: hintText });
    cj(\'ul.token-input-list-facebook, div.token-input-dropdown-facebook\' ).css( \'width\', \'450px\');
  }

  function addSingleClientOption'; ?>
<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo $this->_tpl_vars['blockNo']; ?>
<?php echo '( blockNo, prefix ) {
    var contactUrl = '; ?>
"<?php echo CRM_Utils_System::crmURL(array('p' => 'civicrm/ajax/rest','q' => 'className=CRM_Contact_Page_AJAX&fnName=getContactList&json=1&context=newcontact','h' => 0), $this);?>
"<?php echo ';
    '; ?>
<?php if ($this->_tpl_vars['action'] == 2): ?><?php echo '
    contactUrl = contactUrl + \'&cid=\' + '; ?>
<?php echo $this->_tpl_vars['contactId']; ?>
<?php echo ';
    '; ?>
<?php endif; ?><?php echo '

    var contactElement = \'#\' + prefix + \'contact_\' + blockNo;
    var contactHiddenElement = \'input[name="'; ?>
<?php echo $this->_tpl_vars['prefix']; ?>
<?php echo 'contact_select_id[\' + blockNo +\']"]\';
    cj( contactElement ).autocomplete( contactUrl, {
      selectFirst : false, matchContains: true, minChars: 1
    }).result( function(event, data, formatted) {
      cj( contactHiddenElement ).val(data[1]);
      '; ?>

      <?php if ($this->_tpl_vars['newContactCallback']): ?>
        eval("<?php echo $this->_tpl_vars['newContactCallback']; ?>
");
      <?php endif; ?>
      <?php echo '
    }).focus( );

    cj( contactElement ).click( function( ) {
      cj( contactHiddenElement ).val(\'\');
    });

    cj( contactElement ).bind("keypress keyup", function(e) {
      if ( e.keyCode == 13 ) {
        return false;
      }
    });
  }
</script>
'; ?>

<?php endif; ?>